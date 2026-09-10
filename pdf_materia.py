#!/usr/bin/env python3
"""Genera un PDF imprimible de la guía teórica de una materia.

Uso:  python3 pdf_materia.py fiuba-anatomia salida.pdf

Toma la página standalone de m/<slug>.html, abre todos los <details>,
saca la UI del sitio (drawer, botones, quizzes, puntajes) y la imprime
a PDF con Chromium vía Playwright.
"""
import sys, tempfile, pathlib

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


def main(slug, out):
    from playwright.sync_api import sync_playwright
    root = pathlib.Path(__file__).parent
    html = (root / "m" / f"{slug}.html").read_text(encoding="utf-8")
    html = html.replace("</body>", PRINT_CSS, 1)
    tmp = pathlib.Path(tempfile.mkdtemp()) / "print.html"
    tmp.write_text(html, encoding="utf-8")

    with sync_playwright() as p:
        browser = p.chromium.launch(args=["--no-sandbox"])
        page = browser.new_page()
        page.goto(tmp.as_uri(), wait_until="load")
        page.wait_for_timeout(2500)
        page.evaluate("""(sel) => {
            document.querySelectorAll(sel).forEach(e => e.remove());
            document.querySelectorAll('details').forEach(d => d.open = true);
            document.documentElement.setAttribute('data-theme', 'light');
            document.body.classList.remove('locked');
        }""", STRIP)
        page.wait_for_timeout(1500)
        page.emulate_media(media="print")
        page.pdf(path=out, format="A4", print_background=True,
                 margin={"top": "14mm", "bottom": "14mm", "left": "12mm", "right": "12mm"})
        browser.close()
    print(f"PDF escrito en {out}")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    main(sys.argv[1], sys.argv[2])
