#!/usr/bin/env python3
"""Genera un PDF imprimible de la guía teórica de una materia.

Uso:  python3 pdf_materia.py fiuba-anatomia salida.pdf
      python3 pdf_materia.py fiuba-electronica salida.pdf --solo-teoria
      python3 pdf_materia.py fiuba-electronica anexo.pdf --filtro fiuba-electronica-anexo

Toma la página standalone de m/<slug>.html, abre todos los <details>,
saca la UI del sitio (drawer, botones, quizzes, puntajes) y la imprime
a PDF con Chromium vía Playwright.

Con --solo-teoria aplica además el filtro de FILTROS_TEORIA para la materia:
saca cursada y trabajos prácticos y deja sólo lo que sirve para estudiar.
"""
import os, sys, tempfile, pathlib

STRIP = ".quiz-wrap,.sec-score,.score,.drawer,.drawer-overlay,#menu-btn,#theme-btn,#auth-overlay,.menu-btn,.theme-btn"

PRINT_CSS = """
<style id="pdfprint">
  .drawer, .drawer-overlay, .menu-btn, .theme-btn, .back { display:none !important; }
  .quiz-wrap, .sec-score, .score { display:none !important; }
  body { background:#fff !important; }
  .wrap, main, .content { max-width:none !important; }
  h1,h2,h3,.t,.ky-t,.tr-t,.ex-t { break-after: avoid; }
  table, .tbl, .formula, .info, .key, .trap, .example { break-inside: avoid; }
</style>
</body>"""

# Filtros "sólo teoría": JS que corre en la página antes de imprimir, para dejar
# afuera lo que no sirve para estudiar (cursada, reglamento de TPs, consignas de
# entrega) y conservar la teoría, aunque esté adentro de una sección de TP.
FILTROS_TEORIA = {
    # Anexo de instrumentación biomédica: lo teórico que vive adentro de las
    # consignas del TPG (CMRR, interfaz electrodo-piel, filtros, antialias),
    # sin el resto de la materia ni lo que hay que entregar.
    "fiuba-electronica-anexo": """() => {
        const KEEP_H4 = new Set([
            'La etapa de entrada, componente por componente',
            'Las 8 preguntas del amplificador de instrumentación, contestadas',
            'Las 5 preguntas del amplificador de referencia, contestadas',
        ]);
        for (const d of Array.from(document.querySelectorAll('details'))) {
            if (d.id !== 'fel-s12') d.remove();
        }
        const s12 = document.getElementById('fel-s12');
        const cont = s12.querySelector('.content');
        let h4 = null;
        for (const nodo of Array.from(cont.children)) {
            const txt = nodo.textContent.trim();
            if (nodo.tagName === 'H3') { h4 = null; nodo.remove(); continue; }
            if (nodo.tagName === 'H4') { h4 = txt; }
            if (!KEEP_H4.has(h4)) nodo.remove();
        }
        // Sacar el <details> de encima: sin <summary> el navegador dibuja
        // un marcador "Details", así que se saca el contenido y se tira la caja.
        s12.parentNode.insertBefore(cont, s12);
        s12.remove();

        const h1 = document.querySelector('header h1');
        h1.textContent = 'Anexo · Instrumentación biomédica: la etapa de entrada del ECG';
        const sub = document.querySelector('header .sub');
        sub.innerHTML = 'FIUBA · <b>TB157</b> — Cátedra Veiga · Introducción a la Bioingeniería. '
            + 'Anexo del extracto teórico: el amplificador de instrumentación y el de referencia, '
            + 'desarrollados a partir de las 13 preguntas del enunciado del TPG. '
            + 'Es teoría —CMRR, interfaz electrodo–piel, pasa-altos y pasa-bajos, antialias, '
            + 'excursión con alimentación simple— aunque venga con forma de consigna. '
            + 'No incluye qué hay que entregar ni el reglamento del trabajo práctico.';
        const toc = document.getElementById('toc-fiuba-electronica');
        if (toc) toc.remove();
    }""",

    "fiuba-electronica": """() => {
        // 1 · Cómo se cursa y cómo se aprueba: calendario, reglamento, administrativo.
        const s1 = document.getElementById('fel-s1');
        if (s1) s1.remove();

        // 12 · Es la sección de TPs, pero adentro tiene teoría: el operacional
        // (clase del 7/9), la biofísica del ECG y el mapa de herramientas.
        const KEEP_H3 = new Set([
            'El operacional, lo mínimo para la clase del 7/9 y para el TPG',
            'El mapa: dado un enunciado, qué herramienta conviene',
        ]);
        const KEEP_H4 = new Set([
            'La biofísica que hay que entender antes de tocar un resistor',
        ]);
        const s12 = document.getElementById('fel-s12');
        if (s12) {
            const cont = s12.querySelector('.content');
            let h3 = null, h4 = null;
            for (const nodo of Array.from(cont.children)) {
                const txt = nodo.textContent.trim();
                let keep;
                if (nodo.tagName === 'H3') { h3 = txt; h4 = null; keep = KEEP_H3.has(txt); }
                else if (nodo.tagName === 'H4') { h4 = txt; keep = KEEP_H3.has(h3) || KEEP_H4.has(txt); }
                else { keep = KEEP_H3.has(h3) || KEEP_H4.has(h4); }
                if (!keep) nodo.remove();
            }
            const sum = s12.querySelector('summary');
            sum.lastChild.textContent = ' Operacional, biofísica del ECG y el mapa de la materia ';
        }

        // El índice: sacar la 1, retitular la 12 y mantener la numeración original.
        const ol = document.querySelector('#toc-fiuba-electronica ol');
        if (ol) {
            const li1 = ol.querySelector('a[href="#fel-s1"]');
            if (li1) li1.closest('li').remove();
            ol.setAttribute('start', '2');
            const a12 = ol.querySelector('a[href="#fel-s12"]');
            if (a12) a12.textContent = 'Operacional, biofísica del ECG y el mapa de la materia';
        }

        // Aviso en la portada de que esto es el extracto teórico.
        const sub = document.querySelector('header .sub');
        if (sub) {
            const aviso = document.createElement('div');
            aviso.style.cssText = 'margin-top:10px;font-weight:600';
            aviso.textContent = 'Extracto teórico para estudiar: secciones 2 a 11 completas, '
                + 'más el operacional y la biofísica del ECG. Queda afuera todo lo de cursada '
                + 'y trabajos prácticos (reglamento, entregas, listas de materiales, TP1 y el enunciado del TPG).';
            sub.appendChild(aviso);
        }
    }""",
}


def main(slug, out, filtro_nombre=None):
    from playwright.sync_api import sync_playwright
    root = pathlib.Path(__file__).parent
    html = (root / "m" / f"{slug}.html").read_text(encoding="utf-8")
    html = html.replace("</body>", PRINT_CSS, 1)
    tmp = pathlib.Path(tempfile.mkdtemp()) / "print.html"
    tmp.write_text(html, encoding="utf-8")

    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=os.environ.get("CHROMIUM_PATH") or None,
                                    args=["--no-sandbox"])
        page = browser.new_page()
        page.goto(tmp.as_uri(), wait_until="load")
        page.wait_for_timeout(2500)
        page.evaluate("""(sel) => {
            document.querySelectorAll(sel).forEach(e => e.remove());
            document.querySelectorAll('details').forEach(d => d.open = true);
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('locked');
        }""", STRIP)
        if filtro_nombre:
            filtro = FILTROS_TEORIA.get(filtro_nombre)
            if filtro is None:
                sys.exit(f"No hay filtro definido para {filtro_nombre}")
            page.evaluate(filtro)
        page.wait_for_timeout(1500)
        page.emulate_media(media="print")
        page.pdf(path=out, format="A4", print_background=True,
                 margin={"top": "14mm", "bottom": "14mm", "left": "12mm", "right": "12mm"})
        browser.close()
    print(f"PDF escrito en {out}")


if __name__ == "__main__":
    args = sys.argv[1:]
    filtro_nombre = None
    if "--solo-teoria" in args:
        args = [a for a in args if a != "--solo-teoria"]
        filtro_nombre = args[0] if args else None
    if "--filtro" in args:
        i = args.index("--filtro")
        filtro_nombre = args[i + 1]
        del args[i:i + 2]
    if len(args) != 2:
        sys.exit(__doc__)
    main(args[0], args[1], filtro_nombre)
