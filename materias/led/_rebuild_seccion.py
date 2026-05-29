# Reconstruye seccion.html = (header+nav de seccion.html actual) + u1..u10
from pathlib import Path
base = Path(__file__).parent
sec = (base/'seccion.html').read_text(encoding='utf-8')
marker = '<!-- ============ UNIDAD 1'
# fallback: si no esta el comentario, cortar en <details id="md-s1">
cut = sec.find(marker)
if cut == -1:
    cut = sec.find('<details id="md-s1"')
header_nav = sec[:cut].rstrip() + '\n\n'
units = []
for i in range(1, 11):
    units.append((base/'_units'/f'u{i}.html').read_text(encoding='utf-8').rstrip())
nuevo = header_nav + '\n\n'.join(units) + '\n'
(base/'seccion.html').write_text(nuevo, encoding='utf-8')
print(f'seccion.html reconstruido: {len(nuevo)} chars, header+nav={cut} chars')
