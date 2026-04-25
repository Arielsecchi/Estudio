#!/usr/bin/env python3
"""
Construye index.html juntando las piezas del proyecto.

Uso:
    python build.py                 # genera ./index.html
    python build.py --check         # compara contra index.html existente sin escribir
    python build.py -o otro.html    # escribe en otra ruta

Estructura esperada:
    template.html                           -- esqueleto con placeholders
    assets/
        base.css                            -- CSS común
        app.js                              -- JS común (drawer, theme, quizzes)
    materias/
        _orden.txt                          -- un slug por línea, define orden en drawer
        <slug>/
            meta.json                       -- {nombre, catedra, subtitulo_drawer, ...}
            theme.css                       -- reglas [data-subject="slug"] y dark
            seccion.html                    -- <header>, <nav class="toc">, <details>...
            ejercicios.js                   -- registerExercises('slug', ...)

Placeholders en el template:
    <!-- BUILD: CSS -->                     -- todas las reglas de CSS
    <!-- BUILD: DRAWER -->                  -- <li> del menú lateral
    <!-- BUILD: SECCIONES DE MATERIAS -->   -- los <section class="subject">
    // BUILD: JS                            -- app.js + todos los registerExercises
"""
import argparse
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent


def leer(p: Path) -> str:
    """Lee un archivo UTF-8, falla con mensaje claro si no existe."""
    if not p.exists():
        sys.exit(f'ERROR: falta {p.relative_to(ROOT)}')
    return p.read_text(encoding='utf-8')


def cargar_materias() -> list[dict]:
    """Carga meta.json de cada materia en el orden de _orden.txt."""
    orden_path = ROOT / 'materias' / '_orden.txt'
    slugs = [
        s.strip()
        for s in leer(orden_path).splitlines()
        if s.strip() and not s.startswith('#')
    ]

    materias = []
    for slug in slugs:
        d = ROOT / 'materias' / slug
        if not d.is_dir():
            sys.exit(f'ERROR: la materia "{slug}" está en _orden.txt pero no existe la carpeta {d}')
        meta = json.loads(leer(d / 'meta.json'))
        if meta.get('slug') != slug:
            sys.exit(f'ERROR: meta.json de {slug} tiene slug "{meta.get("slug")}" (no coincide con carpeta)')
        meta['_dir'] = d
        materias.append(meta)
    return materias


def construir_css(materias: list[dict]) -> str:
    """Concatena base.css + todos los theme.css de las materias."""
    base = leer(ROOT / 'assets' / 'base.css').rstrip()

    # base.css contiene :root y [data-theme="dark"] al inicio, y después los estilos globales.
    # Inyectamos los themes de las materias entre medio.
    marker = '  * { box-sizing: border-box;'
    pos = base.find(marker)
    if pos == -1:
        sys.exit('ERROR: base.css no tiene el marcador esperado ("* { box-sizing")')

    antes = base[:pos].rstrip()
    despues = base[pos:]

    themes = '\n\n'.join(leer(m['_dir'] / 'theme.css').rstrip() for m in materias)
    themes_header = '  /* ===== TEMAS POR MATERIA (se aplican con [data-subject="..."]) ===== */\n'

    return antes + '\n\n' + themes_header + themes + '\n\n  ' + despues.lstrip()


def construir_drawer(materias: list[dict]) -> str:
    """Genera los <li> del drawer, agrupados por categoria.

    Las materias sin `categoria` caen en un grupo final "Otras". El orden de
    aparicion de cada categoria es el orden en que aparece la primera materia
    de esa categoria en _orden.txt.
    """
    grupos: dict[str, list[dict]] = {}
    orden_cats: list[str] = []
    for m in materias:
        cat = m.get('categoria') or 'Otras'
        if cat not in grupos:
            grupos[cat] = []
            orden_cats.append(cat)
        grupos[cat].append(m)

    bloques = []
    for cat in orden_cats:
        bloques.append(f'    <li class="drawer-cat-header">{cat}</li>')
        for m in grupos[cat]:
            item = (
                f'    <li class="drawer-item" data-target="{m["slug"]}" '
                f'onclick="switchSubject(\'{m["slug"]}\')">\n'
                f'      <div class="ic" style="background:{m["icono_bg"]};color:{m["icono_fg"]}">'
                f'{m["icono_letras"]}</div>\n'
                f'      <div class="info">\n'
                f'        <div class="t" style="color:{m["icono_bg"]}">{m["nombre"]}</div>\n'
                f'        <div class="d">{m["subtitulo_drawer"]}</div>\n'
                f'      </div>\n'
                f'    </li>'
            )
            bloques.append(item)
    return '\n'.join(bloques)


def construir_secciones(materias: list[dict]) -> str:
    """Pega las <section class="subject"> de cada materia con sus comentarios."""
    bloques = []
    for m in materias:
        seccion = leer(m['_dir'] / 'seccion.html').rstrip()
        # El contenido de seccion.html empieza con el <header>; aseguramos 2 espacios de indent
        if seccion.startswith('<header>'):
            seccion = '  ' + seccion  # indent inicial del header
        nombre_up = m['nombre'].upper()
        # Formato del original: línea de guiones y línea con nombre, ambas de 69 chars totales
        ancho_total = 69
        linea_guiones = '<!-- ' + '=' * (ancho_total - len('<!-- ') - len(' -->')) + ' -->'
        prefijo = '<!-- =============== '
        sufijo = ' -->'
        relleno = ancho_total - len(prefijo) - len(nombre_up) - 1 - len(sufijo)
        if relleno < 3:
            relleno = 3
        comentario_nombre = f'{prefijo}{nombre_up} {"=" * relleno}{sufijo}'

        bloque = (
            f'{linea_guiones}\n'
            f'{comentario_nombre}\n'
            f'{linea_guiones}\n'
            f'<section class="subject" id="subject-{m["slug"]}">\n'
            f'{seccion}\n'
            f'\n'
            f'</section>'
        )
        bloques.append(bloque)
    return '\n\n'.join(bloques)


def construir_js(materias: list[dict]) -> str:
    """app.js + todos los registerExercises."""
    app = leer(ROOT / 'assets' / 'app.js').rstrip()

    # Los registerExercises van entre los helpers (const F, const M) y el INIT.
    # En app.js, el marcador "// ============ INIT ============" viene después.
    # Partimos app.js en dos: antes de INIT y desde INIT en adelante.
    init_marker = '// ============ INIT ============'
    idx = app.find(init_marker)
    if idx == -1:
        sys.exit('ERROR: app.js no tiene el marcador "// ============ INIT ============"')

    antes_init = app[:idx].rstrip()
    desde_init = app[idx:]

    # Construimos los bloques de ejercicios, uno por materia, con su comentario-título
    bloques = []
    for m in materias:
        ejercicios = leer(m['_dir'] / 'ejercicios.js').rstrip()
        if not ejercicios:
            continue
        titulo = m.get('nombre_corto', m['nombre'].upper())
        bloques.append(
            f'// ============ EJERCICIOS {titulo} ============\n'
            f'{ejercicios}'
        )

    return (
        antes_init
        + '\n\n'
        + '\n\n\n'.join(bloques)
        + '\n\n\n'
        + desde_init
    )


def construir_html(materias: list[dict]) -> str:
    """Ensambla el HTML completo desde template.html y las piezas."""
    template = leer(ROOT / 'template.html')

    reemplazos = {
        '<!-- BUILD: CSS -->': construir_css(materias),
        '<!-- BUILD: DRAWER -->': construir_drawer(materias),
        '<!-- BUILD: SECCIONES DE MATERIAS -->': construir_secciones(materias),
        '// BUILD: JS': construir_js(materias),
    }

    resultado = template
    for marker, contenido in reemplazos.items():
        if marker not in resultado:
            sys.exit(f'ERROR: placeholder no encontrado en template.html: {marker}')
        resultado = resultado.replace(marker, contenido)

    return resultado


def main():
    ap = argparse.ArgumentParser(description='Build del index.html de Guías UBA XXI')
    ap.add_argument('-o', '--output', default='index.html', help='ruta de salida')
    ap.add_argument('--check', action='store_true', help='compara con la salida existente sin escribir')
    args = ap.parse_args()

    materias = cargar_materias()
    print(f'→ {len(materias)} materias: {", ".join(m["slug"] for m in materias)}')

    html = construir_html(materias)

    out_path = ROOT / args.output

    if args.check:
        if not out_path.exists():
            sys.exit(f'ERROR: {out_path} no existe, no puedo comparar')
        actual = out_path.read_text(encoding='utf-8')
        if actual == html:
            print(f'✓ {args.output} coincide exactamente con el build')
            return
        # Si difieren, mostrar las primeras diferencias
        import difflib
        diff = list(difflib.unified_diff(
            actual.splitlines(keepends=True)[:10000],
            html.splitlines(keepends=True)[:10000],
            fromfile=str(out_path),
            tofile='build',
            n=2,
        ))
        print(f'✗ {args.output} DIFIERE del build ({len(diff)} líneas de diff)')
        print(''.join(diff[:80]))
        sys.exit(1)

    out_path.write_text(html, encoding='utf-8')
    print(f'✓ {args.output} generado ({len(html)} chars)')


if __name__ == '__main__':
    main()
