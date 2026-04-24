#!/usr/bin/env python3
"""agregar_materia.py - genera los 4 archivos de una materia nueva desde PDFs.

Uso:
    python3 agregar_materia.py <slug>

Lee los PDFs de _entrada/<slug>/*.pdf, consulta a Claude Sonnet 4.6 con los PDFs
como contexto y una materia existente como referencia, y escribe los 4 archivos
en materias/<slug>/. Agrega el slug a _orden.txt automaticamente.

Requiere la variable de entorno ANTHROPIC_API_KEY (o un archivo .env con la clave).
Despues de correrlo, ejecutar `python3 build.py` para regenerar index.html.
"""

import base64
import json
import os
import sys
from pathlib import Path

try:
    import anthropic
except ImportError:
    sys.exit('X Falta instalar la libreria: pip install -r requirements.txt')

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

MODEL = 'claude-sonnet-4-6'
MAX_TOKENS = 32000

ROOT = Path(__file__).parent
ENTRADA = ROOT / '_entrada'
MATERIAS = ROOT / 'materias'
ORDEN = MATERIAS / '_orden.txt'
EJEMPLO_SLUG = 'analisis'

SYSTEM_PROMPT = """Sos un asistente que genera los 4 archivos fuente de una materia nueva para un sitio estatico de guias de estudio de UBA XXI / CBC. Te paso una materia de ejemplo (ya existente) y los PDFs de la materia nueva; devolves los 4 archivos respetando las convenciones.

# Los 4 archivos

## meta.json
JSON con metadatos. Campos:
- slug: string. Debe coincidir EXACTO con el slug que te paso.
- nombre: string. Nombre oficial de la materia.
- catedra: string. Apellido del docente titular.
- color: string "#RRGGBB". Color principal (distinto al del ejemplo).
- icono: string corto (emoji opcional).

## theme.css
Dos bloques CSS, indentados con 2 espacios. Light + dark. Usa las MISMAS variables que el ejemplo pero con paleta diferente:

```
[data-subject="<slug>"] {
  --subject-accent: #...;
  --subject-accent-soft: #...;
  --subject-surface: #...;
  --subject-ex: #...;
  --subject-ok: #...;
  --subject-ko: #...;
}
[data-theme="dark"][data-subject="<slug>"] {
  (misma paleta pero version oscura)
}
```

## seccion.html
Indentado con 2 espacios, SIN envolver en <section> (eso lo agrega build.py). Estructura:

```
  <header>
    <h2 class="subject-title">Nombre de la Materia</h2>
    <p class="subject-meta">Catedra X . Año 2026</p>
  </header>
  <nav class="toc">
    <h3>Contenidos</h3>
    <ul>
      <li><a href="#<prefijo>-s1">Unidad 1: ...</a></li>
    </ul>
  </nav>
  <details id="<prefijo>-s1">
    <summary>Unidad 1: Titulo</summary>
    <div class="details-content">
      <h4>Conceptos clave</h4>
      <p>Explicacion...</p>
      <div class="quiz-wrap" data-qz="1" data-subject="<slug>"></div>
    </div>
  </details>
```

Reglas:
- <prefijo> es un prefijo corto consistente para toda la materia (ej: fi- fisica, quim- quimica, bio- biologia). Elegi uno razonable.
- Cada <details> tiene EXACTAMENTE UN <div class="quiz-wrap" data-qz="N" data-subject="<slug>"></div> al final del details-content.
- N matchea con el identificador de unidad que uses en registerExercises (puede ser '1', '2', '4a', '4b', etc.).
- Si la materia tiene dos parciales, separar con <div class="partial-header">PRIMER PARCIAL</div> y <div class="partial-header">SEGUNDO PARCIAL</div> entre los details correspondientes.

## ejercicios.js
```
registerExercises('<slug>', '1', [
  {st: 'Enunciado.', opts: ['opcion 0', 'opcion 1', 'opcion 2', 'opcion 3'], c: 2, ex: 'Explicacion.'},
  {st: '...', opts: [...], c: 0, ex: '...'},
]);
registerExercises('<slug>', '2', [ ... ]);
```

Reglas:
- Helpers disponibles: M('txt') envuelve en italica matematica; F('num','den') arma una fraccion visual. Usalos cuando haya formulas/expresiones.
- 'c' es el indice 0-based de la opcion correcta.
- Generar 3 a 6 ejercicios por unidad, multiple choice con 4 opciones cada uno.
- Las explicaciones 'ex' deben ser pedagogicas: explicar el razonamiento, no solo decir "es la opcion X".
- El segundo argumento de registerExercises (N) matchea con data-qz del HTML.
- Una llamada registerExercises por cada <details> que tenga quiz-wrap.

# Instrucciones generales
- Basate en los PDFs para estructurar unidades, temas, y estilos de ejercicios.
- Segui la misma forma y estilo del ejemplo que te paso, pero con contenido adaptado.
- Si un dato no esta en los PDFs, inferi razonablemente.
- No inventes unidades que no figuran en el programa/cronograma de los PDFs.
- Los ejercicios tienen que ser AUTO-CORREGIBLES (multiple choice con una opcion correcta definida).
"""

OUTPUT_SCHEMA = {
    'type': 'object',
    'properties': {
        'meta_json': {
            'type': 'string',
            'description': 'Contenido completo de meta.json (JSON valido con slug, nombre, catedra, color, icono).',
        },
        'theme_css': {
            'type': 'string',
            'description': 'Contenido completo de theme.css (bloques light y dark con [data-subject]).',
        },
        'seccion_html': {
            'type': 'string',
            'description': 'Contenido de seccion.html: <header>, <nav class="toc">, <details>. SIN el <section> envolvente.',
        },
        'ejercicios_js': {
            'type': 'string',
            'description': 'Contenido de ejercicios.js con llamadas a registerExercises.',
        },
    },
    'required': ['meta_json', 'theme_css', 'seccion_html', 'ejercicios_js'],
    'additionalProperties': False,
}


def cargar_env():
    env_file = ROOT / '.env'
    if not env_file.exists():
        return
    for linea in env_file.read_text(encoding='utf-8').splitlines():
        linea = linea.strip()
        if not linea or linea.startswith('#') or '=' not in linea:
            continue
        k, v = linea.split('=', 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


def leer_pdfs(slug):
    carpeta = ENTRADA / slug
    if not carpeta.is_dir():
        sys.exit(f'X No existe {carpeta}. Crea la carpeta y pone los PDFs adentro.')
    pdfs = sorted(carpeta.glob('*.pdf'))
    if not pdfs:
        sys.exit(f'X No hay PDFs en {carpeta}.')
    resultado = []
    total_mb = 0
    for p in pdfs:
        data = p.read_bytes()
        total_mb += len(data) / 1_048_576
        resultado.append((p.name, data))
    print(f'-> {len(pdfs)} PDFs ({total_mb:.1f} MB): {", ".join(p.name for p in pdfs)}')
    if total_mb > 30:
        print(f'! Aviso: {total_mb:.1f} MB es mucho. La API limita 32 MB por PDF.')
    return resultado


def leer_ejemplo():
    base = MATERIAS / EJEMPLO_SLUG
    return {
        'meta_json': (base / 'meta.json').read_text(encoding='utf-8'),
        'theme_css': (base / 'theme.css').read_text(encoding='utf-8'),
        'seccion_html': (base / 'seccion.html').read_text(encoding='utf-8'),
        'ejercicios_js': (base / 'ejercicios.js').read_text(encoding='utf-8'),
    }


def bloque_ejemplo(ejemplo):
    return (
        f"Ejemplo de materia ya existente (slug '{EJEMPLO_SLUG}'). Usala como referencia de convenciones, "
        f'estructura, paleta, IDs y estilo. NO la copies textualmente; la materia nueva tiene contenido '
        f'propio.\n\n'
        f"=== meta.json ===\n{ejemplo['meta_json']}\n\n"
        f"=== theme.css ===\n{ejemplo['theme_css']}\n\n"
        f"=== seccion.html ===\n{ejemplo['seccion_html']}\n\n"
        f"=== ejercicios.js ===\n{ejemplo['ejercicios_js']}\n"
    )


def construir_user_content(slug, pdfs):
    parts = [{
        'type': 'text',
        'text': f"Te paso los PDFs de la materia nueva (slug: '{slug}'). Leelos y despues genera los 4 archivos.",
    }]
    for nombre, data in pdfs:
        parts.append({
            'type': 'document',
            'source': {
                'type': 'base64',
                'media_type': 'application/pdf',
                'data': base64.standard_b64encode(data).decode('ascii'),
            },
            'title': nombre,
        })
    parts.append({
        'type': 'text',
        'text': (
            f"Generá los 4 archivos para la materia con slug='{slug}'. "
            f'Devolve un JSON con los 4 campos: meta_json, theme_css, seccion_html, ejercicios_js. '
            f'Cada uno debe contener el archivo completo como string.'
        ),
    })
    return parts


def escribir_materia(slug, data):
    destino = MATERIAS / slug
    destino.mkdir(parents=True)
    (destino / 'meta.json').write_text(data['meta_json'].rstrip() + '\n', encoding='utf-8')
    (destino / 'theme.css').write_text(data['theme_css'].rstrip() + '\n', encoding='utf-8')
    (destino / 'seccion.html').write_text(data['seccion_html'].rstrip() + '\n', encoding='utf-8')
    (destino / 'ejercicios.js').write_text(data['ejercicios_js'].rstrip() + '\n', encoding='utf-8')


def agregar_a_orden(slug):
    contenido = ORDEN.read_text(encoding='utf-8') if ORDEN.exists() else ''
    lineas = [l.strip() for l in contenido.splitlines() if l.strip()]
    if slug in lineas:
        return
    lineas.append(slug)
    ORDEN.write_text('\n'.join(lineas) + '\n', encoding='utf-8')


def main():
    if len(sys.argv) != 2 or sys.argv[1] in ('-h', '--help'):
        sys.exit('Uso: python3 agregar_materia.py <slug>\n'
                 'Ej:  python3 agregar_materia.py fisica-b')

    slug = sys.argv[1].strip().lower()
    if not slug.replace('-', '').isalnum():
        sys.exit(f"X Slug invalido: '{slug}'. Solo letras, numeros y guiones.")
    if (MATERIAS / slug).exists():
        sys.exit(f'X Ya existe materias/{slug}/. Borrala primero si queres regenerar.')

    cargar_env()
    if not os.environ.get('ANTHROPIC_API_KEY'):
        sys.exit('X Falta ANTHROPIC_API_KEY. Pone la clave en un archivo .env (mira .env.example) '
                 'o exportala como variable de entorno.')

    pdfs = leer_pdfs(slug)
    ejemplo = leer_ejemplo()
    user_content = construir_user_content(slug, pdfs)

    print(f'-> Consultando {MODEL}...')
    client = anthropic.Anthropic()
    response = client.messages.create(
        model=MODEL,
        max_tokens=MAX_TOKENS,
        system=[
            {'type': 'text', 'text': SYSTEM_PROMPT},
            {'type': 'text', 'text': bloque_ejemplo(ejemplo), 'cache_control': {'type': 'ephemeral'}},
        ],
        messages=[{'role': 'user', 'content': user_content}],
        output_config={'format': {'type': 'json_schema', 'schema': OUTPUT_SCHEMA}},
    )

    if response.stop_reason == 'max_tokens':
        sys.exit(f'X La respuesta se corto en max_tokens ({MAX_TOKENS}). Subi MAX_TOKENS o dividi la materia.')
    if response.stop_reason == 'refusal':
        sys.exit('X El modelo se rehuso a generar la respuesta.')

    text = next(b.text for b in response.content if b.type == 'text')
    data = json.loads(text)

    try:
        meta = json.loads(data['meta_json'])
    except json.JSONDecodeError as e:
        sys.exit(f'X meta.json generado no es JSON valido: {e}\n{data["meta_json"]}')
    if meta.get('slug') != slug:
        print(f"! meta.json tenia slug='{meta.get('slug')}', lo reemplazo por '{slug}'.")
        meta['slug'] = slug
        data['meta_json'] = json.dumps(meta, indent=2, ensure_ascii=False)

    escribir_materia(slug, data)
    agregar_a_orden(slug)

    u = response.usage
    costo_in = u.input_tokens * 3 / 1_000_000
    costo_out = u.output_tokens * 15 / 1_000_000
    costo_cache_r = u.cache_read_input_tokens * 0.3 / 1_000_000
    costo_cache_w = u.cache_creation_input_tokens * 3.75 / 1_000_000
    costo_total = costo_in + costo_out + costo_cache_r + costo_cache_w

    print(f'OK creada materias/{slug}/ con los 4 archivos')
    print(f'OK agregado "{slug}" a _orden.txt')
    print(f'   tokens: in={u.input_tokens} out={u.output_tokens} '
          f'cache(read={u.cache_read_input_tokens}, write={u.cache_creation_input_tokens})')
    print(f'   costo estimado: ~${costo_total:.4f} USD')
    print(f'-> Ahora corre: python3 build.py')


if __name__ == '__main__':
    main()
