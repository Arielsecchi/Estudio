#!/usr/bin/env python3
"""
Construye el sitio juntando las piezas del proyecto.

Genera una pagina por materia en m/<slug>.html, mas un index.html liviano con
la portada y el drawer. Antes era un unico index.html con las 34 materias
adentro: 10 MB que el navegador bajaba entero para leer una sola guia.

Uso:
    python build.py                 # genera index.html y m/*.html
    python build.py --check         # compara contra lo que ya esta en disco

Placeholders extra del template, ademas de los <!-- BUILD: ... -->:
    {{BASE}}    prefijo de rutas a assets/ ('' en el index, '../' en m/)
    {{TITULO}}  el <title> de la pagina

Cada pagina declara en su <script>:
    window.M_BASE     donde viven las paginas de materia, visto desde ahi
    window.M_SUBJECT  el slug de la materia (solo en las paginas de materia)
switchSubject() usa esas dos para navegar cuando la materia pedida no vive en
la pagina actual.

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
    <!-- BUILD: CSS -->                     -- base.css + el tema de la materia
    <!-- BUILD: DRAWER -->                  -- <li> del menú lateral (siempre completo)
    <!-- BUILD: SECCIONES DE MATERIAS -->   -- la <section class="subject"> de la materia
    // BUILD: JS                            -- prelude + app.js + sus registerExercises
"""
import argparse
import json
import re
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
    """base.css + los theme.css de las materias que se pasen.

    Cada pagina de materia lleva solo su propio tema; el index no lleva ninguno
    y usa los valores de :root.
    """
    base = leer(ROOT / 'assets' / 'base.css').rstrip()

    if not materias:
        return base

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
    """Genera los grupos colapsables del drawer, agrupados por categoria.

    Cada grupo es un <li class="drawer-group"> con un <button> header y un <ul>
    anidado de items. JS (toggleCat) maneja el colapso. Las materias sin
    `categoria` caen en un grupo final "Otras". El orden de aparicion de cada
    categoria es el orden en que aparece la primera materia de esa categoria
    en _orden.txt.

    Las materias con campo `parent` (slug de otra materia) se renderizan como
    hijas debajo del padre, indentadas. El padre obtiene una flecha extra para
    expandir/colapsar las hijas. Click en el padre navega a su contenido; click
    en la flecha solo togglea visibilidad. JS: toggleSub(btn).
    """
    # Indexar hijas por slug del padre
    children_by_parent: dict[str, list[dict]] = {}
    for m in materias:
        p = m.get('parent')
        if p:
            children_by_parent.setdefault(p, []).append(m)

    # Agrupar solo materias TOP-LEVEL (sin parent) por categoria
    grupos: dict[str, list[dict]] = {}
    orden_cats: list[str] = []
    for m in materias:
        if m.get('parent'):
            continue  # las hijas se renderizan dentro de su padre
        cat = m.get('categoria') or 'Otras'
        if cat not in grupos:
            grupos[cat] = []
            orden_cats.append(cat)
        grupos[cat].append(m)

    def render_subitem(m: dict) -> str:
        return (
            f'            <li class="drawer-subitem" data-target="{m["slug"]}" '
            f'onclick="switchSubject(\'{m["slug"]}\')">\n'
            f'              <div class="ic" style="background:{m["icono_bg"]};color:{m["icono_fg"]}">'
            f'{m["icono_letras"]}</div>\n'
            f'              <div class="info">\n'
            f'                <div class="t" style="color:{m["icono_bg"]}">{m["nombre"]}</div>\n'
            f'                <div class="d">{m["subtitulo_drawer"]}</div>\n'
            f'              </div>\n'
            f'            </li>'
        )

    def render_item(m: dict) -> str:
        children = children_by_parent.get(m['slug'], [])
        if not children:
            # Materia sin hijas: estructura clasica
            return (
                f'        <li class="drawer-item" data-target="{m["slug"]}" '
                f'onclick="switchSubject(\'{m["slug"]}\')">\n'
                f'          <div class="ic" style="background:{m["icono_bg"]};color:{m["icono_fg"]}">'
                f'{m["icono_letras"]}</div>\n'
                f'          <div class="info">\n'
                f'            <div class="t" style="color:{m["icono_bg"]}">{m["nombre"]}</div>\n'
                f'            <div class="d">{m["subtitulo_drawer"]}</div>\n'
                f'          </div>\n'
                f'        </li>'
            )
        # Materia CON hijas: wrapper con flecha desplegable
        subitems_html = '\n'.join(render_subitem(c) for c in children)
        return (
            f'        <li class="drawer-item-wrap" data-parent="{m["slug"]}">\n'
            f'          <div class="drawer-item" data-target="{m["slug"]}" '
            f'onclick="switchSubject(\'{m["slug"]}\')">\n'
            f'            <div class="ic" style="background:{m["icono_bg"]};color:{m["icono_fg"]}">'
            f'{m["icono_letras"]}</div>\n'
            f'            <div class="info">\n'
            f'              <div class="t" style="color:{m["icono_bg"]}">{m["nombre"]}</div>\n'
            f'              <div class="d">{m["subtitulo_drawer"]}</div>\n'
            f'            </div>\n'
            f'            <button class="subitem-arrow" type="button" '
            f'onclick="event.stopPropagation(); toggleSub(this)" aria-label="Desplegar submodulos">▾</button>\n'
            f'          </div>\n'
            f'          <ul class="drawer-children">\n'
            f'{subitems_html}\n'
            f'          </ul>\n'
            f'        </li>'
        )

    bloques = []
    for cat in orden_cats:
        items_html = '\n'.join(render_item(m) for m in grupos[cat])
        bloque = (
            f'    <li class="drawer-group" data-cat="{cat}">\n'
            f'      <button class="drawer-cat-toggle" type="button" onclick="toggleCat(this)">\n'
            f'        <span class="cat-arrow">▾</span>\n'
            f'        <span class="cat-name">{cat}</span>\n'
            f'      </button>\n'
            f'      <ul class="drawer-cat-items">\n'
            f'{items_html}\n'
            f'      </ul>\n'
            f'    </li>'
        )
        bloques.append(bloque)
    return '\n'.join(bloques)


FUENTE_RELATIVA = re.compile(r'\b(src|href)=(\\?["\'])(?!https?:|//|/|\#|\.\./|data:|mailto:|javascript:)([^"\'\\]+)')


def reapuntar(texto: str, prefijo: str) -> str:
    """Antepone `prefijo` a las rutas relativas de src/href.

    Las paginas de materia viven en m/, un nivel mas abajo que assets/ y que
    materias/<slug>/img/, de donde salen las figuras. Sin esto, las imagenes
    quedan colgadas. Contempla las comillas escapadas, porque varias figuras
    estan dentro de strings de ejercicios.js.
    """
    if not prefijo:
        return texto
    return FUENTE_RELATIVA.sub(lambda m: f'{m.group(1)}={m.group(2)}{prefijo}{m.group(3)}', texto)


def construir_landing(materias: list[dict]) -> str:
    """Portada del index: las materias agrupadas por categoria, como enlaces.

    No repite el drawer: es el mismo listado pero visible sin abrir el menu, y
    cada enlace lleva a la pagina de esa materia.
    """
    hijas_por_madre: dict[str, list[dict]] = {}
    for m in materias:
        if m.get('parent'):
            hijas_por_madre.setdefault(m['parent'], []).append(m)

    grupos: dict[str, list[dict]] = {}
    orden_cats: list[str] = []
    for m in materias:
        if m.get('parent'):
            continue
        cat = m.get('categoria') or 'Otras'
        if cat not in grupos:
            grupos[cat] = []
            orden_cats.append(cat)
        grupos[cat].append(m)

    partes = [
        '  <header>',
        '    <h1>Guías de estudio</h1>',
        f'    <div class="sub">{len(materias)} guías · elegí una materia para empezar. '
        'También podés cambiar de materia en cualquier momento desde ☰</div>',
        '  </header>',
        '<nav class="toc">',
    ]
    for cat in orden_cats:
        partes.append(f'  <h2>{cat}</h2>')
        partes.append('  <ul>')
        for m in grupos[cat]:
            partes.append(
                f'    <li><a href="m/{m["slug"]}.html">{m["nombre"]}</a> '
                f'<span class="muted">— {m["subtitulo_drawer"]}</span></li>'
            )
            for h in hijas_por_madre.get(m['slug'], []):
                partes.append(
                    f'    <li style="margin-left:18px"><a href="m/{h["slug"]}.html">{h["nombre"]}</a> '
                    f'<span class="muted">— {h["subtitulo_drawer"]}</span></li>'
                )
        partes.append('  </ul>')
    partes.append('</nav>')

    return (
        '<section class="subject active" id="subject-__index">\n'
        + '\n'.join(partes)
        + '\n</section>'
    )


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


def construir_js(materias: list[dict], prelude: str = '') -> str:
    """prelude + app.js + los registerExercises de las materias que se pasen."""
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

    cuerpo = ('\n\n' + '\n\n\n'.join(bloques) + '\n\n\n') if bloques else '\n\n'
    return prelude + antes_init + cuerpo + desde_init


def construir_html(todas: list[dict], activa: dict | None = None) -> str:
    """Ensambla una pagina.

    `activa` None construye el index (portada + drawer, sin contenido de materias).
    `activa` con una materia construye m/<slug>.html: solo esa materia, con su
    tema y sus ejercicios. El drawer es siempre el completo, para poder saltar.
    """
    template = leer(ROOT / 'template.html')

    if activa is None:
        base = ''
        titulo = 'Guías de estudio · Ariel'
        prelude = "window.M_BASE = 'm/';\n\n"
        css = construir_css([])
        secciones = construir_landing(todas)
        js = construir_js([], prelude)
    else:
        base = '../'
        titulo = f'{activa["nombre"]} · Guías'
        prelude = f"window.M_BASE = '';\nwindow.M_SUBJECT = '{activa['slug']}';\n\n"
        css = construir_css([activa])
        secciones = reapuntar(construir_secciones([activa]), base)
        js = reapuntar(construir_js([activa], prelude), base)

    reemplazos = {
        '<!-- BUILD: CSS -->': css,
        '<!-- BUILD: DRAWER -->': construir_drawer(todas),
        '<!-- BUILD: SECCIONES DE MATERIAS -->': secciones,
        '// BUILD: JS': js,
    }

    resultado = template
    for marker, contenido in reemplazos.items():
        if marker not in resultado:
            sys.exit(f'ERROR: placeholder no encontrado en template.html: {marker}')
        resultado = resultado.replace(marker, contenido)

    for token, valor in (('{{BASE}}', base), ('{{TITULO}}', titulo)):
        if token not in resultado:
            sys.exit(f'ERROR: token no encontrado en template.html: {token}')
        resultado = resultado.replace(token, valor)

    return resultado


def paginas(materias: list[dict]) -> list[tuple[Path, str]]:
    """Devuelve [(ruta, html)] de todo el sitio: el index y una pagina por materia."""
    salida = [(ROOT / 'index.html', construir_html(materias))]
    for m in materias:
        salida.append((ROOT / 'm' / f'{m["slug"]}.html', construir_html(materias, m)))
    return salida


def main():
    ap = argparse.ArgumentParser(description='Build del sitio de Guías UBA XXI')
    ap.add_argument('--check', action='store_true', help='compara con lo generado sin escribir')
    args = ap.parse_args()

    materias = cargar_materias()
    print(f'→ {len(materias)} materias: {", ".join(m["slug"] for m in materias)}')

    todas = paginas(materias)

    if args.check:
        difieren = []
        for ruta, html in todas:
            rel = ruta.relative_to(ROOT)
            if not ruta.exists() or ruta.read_text(encoding='utf-8') != html:
                difieren.append(str(rel))
        if difieren:
            print(f'✗ {len(difieren)} páginas difieren del build:')
            for r in difieren[:20]:
                print(f'   {r}')
            sys.exit(1)
        print(f'✓ las {len(todas)} páginas coinciden con el build')
        return

    (ROOT / 'm').mkdir(exist_ok=True)
    total = 0
    for ruta, html in todas:
        ruta.write_text(html, encoding='utf-8')
        total += len(html)
    index_size = len(todas[0][1])
    mayor = max(todas[1:], key=lambda p: len(p[1])) if len(todas) > 1 else todas[0]
    print(f'✓ {len(todas)} páginas generadas · {total/1e6:.1f} MB en total')
    print(f'   index.html: {index_size/1024:.0f} KB')
    print(f'   la más pesada: {mayor[0].name} {len(mayor[1])/1e6:.1f} MB')


if __name__ == '__main__':
    main()
