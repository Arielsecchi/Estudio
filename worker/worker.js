// Cloudflare Worker: recibe form de agregar materia, sube archivos a R2,
// dispara GitHub Action via repository_dispatch.
//
// Ademas sirve los archivos al Action via endpoints autenticados con INTERNAL_TOKEN
// (evita necesitar credenciales S3/R2 en la Action).
//
// Bindings esperados:
//   - R2 bucket: BUCKET
//   - Secrets (wrangler secret put):
//       ACCESS_CODE              codigo que gatekeepea el form publico
//       GITHUB_TOKEN             PAT con permiso 'repo' (para repository_dispatch)
//       GITHUB_OWNER             Arielsecchi
//       GITHUB_REPO              Estudio
//       INTERNAL_TOKEN           token compartido Worker <-> Action (cualquier string largo)

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

const MAX_TOTAL_BYTES = 50 * 1024 * 1024; // 50 MB tope duro por request
const SLUG_RE = /^[a-z0-9-]+$/;
const PREFIX_RE = /^entrada\/[a-z0-9-]+\/[a-f0-9-]+$/;

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...CORS_HEADERS },
  });
}

function slugify(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40);
}

function checkInternalAuth(request, env) {
  const auth = request.headers.get('Authorization') || '';
  const token = auth.replace(/^Bearer\s+/i, '').trim();
  return token && env.INTERNAL_TOKEN && token === env.INTERNAL_TOKEN;
}

async function triggerAction(env, slug, r2Prefix) {
  const url = `https://api.github.com/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/dispatches`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'User-Agent': 'uba-guias-worker',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      event_type: 'agregar-materia',
      client_payload: { slug, r2_prefix: r2Prefix },
    }),
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`GitHub dispatch fallo (${res.status}): ${txt}`);
  }
}

async function handleUpload(request, env) {
  let form;
  try {
    form = await request.formData();
  } catch (e) {
    return json(400, { error: 'El body debe ser multipart/form-data' });
  }

  const code = (form.get('codigo') || '').toString().trim();
  if (!code || code !== env.ACCESS_CODE) {
    return json(401, { error: 'Codigo de acceso invalido' });
  }

  const nombre = (form.get('nombre') || '').toString().trim();
  if (!nombre) return json(400, { error: 'Falta nombre de la materia' });
  const slug = slugify(nombre);
  if (!SLUG_RE.test(slug)) return json(400, { error: `Slug invalido derivado: "${slug}"` });

  const archivos = form.getAll('archivos').filter((f) => f instanceof File && f.size > 0);
  if (archivos.length === 0) return json(400, { error: 'No se subio ningun archivo' });

  const total = archivos.reduce((a, f) => a + f.size, 0);
  if (total > MAX_TOTAL_BYTES) {
    return json(413, {
      error: `Total ${(total / 1_048_576).toFixed(1)} MB excede el limite de ${MAX_TOTAL_BYTES / 1_048_576} MB`,
    });
  }

  const uploadId = crypto.randomUUID();
  const prefix = `entrada/${slug}/${uploadId}`;

  try {
    for (const file of archivos) {
      const key = `${prefix}/${file.name}`;
      await env.BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type || 'application/octet-stream' },
      });
    }
  } catch (e) {
    return json(500, { error: `Error subiendo a R2: ${e.message}` });
  }

  try {
    await triggerAction(env, slug, prefix);
  } catch (e) {
    return json(500, { error: e.message });
  }

  const actionsUrl = `https://github.com/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/actions/workflows/agregar-materia.yml`;
  return json(202, {
    status: 'procesando',
    slug,
    archivos: archivos.length,
    total_mb: +(total / 1_048_576).toFixed(2),
    mensaje: 'La accion fue disparada. En 2-5 minutos la materia aparece en el sitio si todo sale bien.',
    seguir_progreso: actionsUrl,
    sitio: `https://arielsecchi.github.io/${env.GITHUB_REPO}/`,
  });
}

async function handleList(request, env, url) {
  if (!checkInternalAuth(request, env)) return json(401, { error: 'Unauthorized' });
  const prefix = url.searchParams.get('prefix') || '';
  if (!PREFIX_RE.test(prefix)) return json(400, { error: 'prefix invalido' });
  const listed = await env.BUCKET.list({ prefix: prefix + '/' });
  const files = listed.objects.map((o) => ({
    key: o.key,
    name: o.key.slice(prefix.length + 1),
    size: o.size,
  }));
  return json(200, { prefix, files });
}

async function handleFile(request, env, url) {
  if (!checkInternalAuth(request, env)) return new Response('Unauthorized', { status: 401 });
  const key = url.searchParams.get('key') || '';
  if (!key.startsWith('entrada/')) return new Response('bad key', { status: 400 });
  const obj = await env.BUCKET.get(key);
  if (!obj) return new Response('not found', { status: 404 });
  return new Response(obj.body, {
    status: 200,
    headers: {
      'Content-Type': obj.httpMetadata?.contentType || 'application/octet-stream',
      'Content-Length': String(obj.size),
    },
  });
}

async function handleCleanup(request, env, url) {
  if (!checkInternalAuth(request, env)) return json(401, { error: 'Unauthorized' });
  const prefix = url.searchParams.get('prefix') || '';
  if (!PREFIX_RE.test(prefix)) return json(400, { error: 'prefix invalido' });
  const listed = await env.BUCKET.list({ prefix: prefix + '/' });
  const keys = listed.objects.map((o) => o.key);
  if (keys.length > 0) await env.BUCKET.delete(keys);
  return json(200, { deleted: keys.length });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (request.method === 'POST' && (url.pathname === '/' || url.pathname === '')) {
      return handleUpload(request, env);
    }

    if (request.method === 'GET' && url.pathname === '/list') {
      return handleList(request, env, url);
    }

    if (request.method === 'GET' && url.pathname === '/file') {
      return handleFile(request, env, url);
    }

    if (request.method === 'DELETE' && url.pathname === '/cleanup') {
      return handleCleanup(request, env, url);
    }

    if (request.method === 'GET' && url.pathname === '/') {
      return json(200, { ok: true, service: 'uba-guias-worker' });
    }

    return json(404, { error: 'ruta no encontrada' });
  },
};
