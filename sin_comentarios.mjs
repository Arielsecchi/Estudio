// Saca los comentarios del HTML, CSS y JS de las paginas que arma build.py, sobre una carpeta temporal:
// en el repo siguen estando, pero al navegador no llegan.
//   node sin_comentarios.mjs <carpeta>
// El JS pasa por esbuild: lo vuelve a escribir sin comentarios y sin cambiar lo que hace. Se busca en
// node_modules (en CI: npm install --no-save esbuild@0.27.3), en el npm global o dentro de wrangler.
// El CSS y el HTML se limpian a mano, respetando los textos entre comillas.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';

const carpeta = process.argv[2];
if (!carpeta || !fs.existsSync(carpeta)) {
  console.error('uso: node sin_comentarios.mjs <carpeta>');
  process.exit(2);
}

let esbuild;
const candidatos = [() => createRequire(path.join(process.cwd(), 'x.js'))('esbuild')];
try {
  const raiz = execSync('npm root -g', { encoding: 'utf8' }).trim();
  candidatos.push(() => createRequire(path.join(raiz, 'x.js'))('esbuild'));
  candidatos.push(() => createRequire(path.join(raiz, 'wrangler', 'package.json'))('esbuild'));
} catch (e) { /* sin npm global: sólo queda node_modules */ }
for (const c of candidatos) {
  try { esbuild = c(); break; } catch (e) { /* el siguiente */ }
}
if (!esbuild) {
  console.error('No encontré esbuild (npm install --no-save esbuild@0.27.3). No se arma el sitio con comentarios.');
  process.exit(1);
}
if (esbuild.version !== '0.27.3') {
  console.error(`ojo: esbuild ${esbuild.version}; el control de GitHub usa 0.27.3 y el resultado puede cambiar`);
}

function sinComentariosJs(codigo) {
  if (!codigo.trim()) return codigo;
  // minifyWhitespace: sin él, esbuild conserva los comentarios dentro de arrays y agrega anotaciones /* @__PURE__ */.
  // No cambia nombres ni estructura (eso serían minifyIdentifiers y minifySyntax, que no se usan).
  return esbuild.transformSync(codigo, { loader: 'js', legalComments: 'none', charset: 'utf8', minifyWhitespace: true }).code;
}

function sinComentariosCss(css) {
  let salida = '';
  let comilla = null;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (comilla) {
      salida += c;
      if (c === '\\') { salida += css[++i] ?? ''; continue; }
      if (c === comilla) comilla = null;
      continue;
    }
    if (c === '"' || c === "'") { comilla = c; salida += c; continue; }
    if (c === '/' && css[i + 1] === '*') {
      const fin = css.indexOf('*/', i + 2);
      i = fin < 0 ? css.length : fin + 1;
      continue;
    }
    salida += c;
  }
  return salida.replace(/\n[ \t]*\n(?:[ \t]*\n)+/g, '\n\n');
}

const BLOQUES = /(<script\b[^>]*>)([\s\S]*?)(<\/script\s*>)|(<style\b[^>]*>)([\s\S]*?)(<\/style\s*>)|<!--[\s\S]*?-->/gi;
const ES_JS = /^(?:|text\/javascript|module|application\/javascript)$/i;

function sinComentariosHtml(html) {
  return html.replace(BLOQUES, (todo, aScript, js, cScript, aStyle, css, cStyle) => {
    if (aScript !== undefined) {
      const tipo = (/\btype\s*=\s*["']?([^"'\s>]*)/i.exec(aScript) || [, ''])[1];
      if (/\bsrc\s*=/i.test(aScript) || !ES_JS.test(tipo)) return todo;
      return aScript + sinComentariosJs(js) + cScript;
    }
    if (aStyle !== undefined) return aStyle + sinComentariosCss(css) + cStyle;
    return '';                                   // un comentario de HTML
  });
}

let archivos = 0, antes = 0, despues = 0;
function recorrer(dir) {
  for (const nombre of fs.readdirSync(dir)) {
    const ruta = path.join(dir, nombre);
    if (fs.statSync(ruta).isDirectory()) { recorrer(ruta); continue; }
    const ext = path.extname(nombre).toLowerCase();
    const limpiar = { '.html': sinComentariosHtml, '.css': sinComentariosCss, '.js': sinComentariosJs }[ext];
    if (!limpiar) continue;
    const texto = fs.readFileSync(ruta, 'utf8');
    const limpio = limpiar(texto);
    archivos++; antes += texto.length; despues += limpio.length;
    if (limpio !== texto) fs.writeFileSync(ruta, limpio, 'utf8');
  }
}
recorrer(carpeta);
console.log(`sin comentarios: ${archivos} archivos, ${(antes / 1e6).toFixed(2)} MB -> ${(despues / 1e6).toFixed(2)} MB`);
