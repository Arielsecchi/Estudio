# -*- coding: utf-8 -*-
"""Mini libreria para dibujar esquematicos de circuitos en SVG (pensada para impresion)."""

INK   = "#16181d"
BLUE  = "#1256a0"   # corrientes
RED   = "#b3341d"   # tensiones / polaridad
GREEN = "#137a4e"   # resultados
MUTED = "#6b7280"
GREY  = "#9aa1ab"
LW    = 2.0         # ancho de linea de los cables

_uid = [0]
def uid(p="m"):
    _uid[0] += 1
    return "%s%d" % (p, _uid[0])


def sub(base, s):
    """R + subindice."""
    return '%s<tspan dy="4.5" font-size="68%%">%s</tspan>' % (base, s)


def txt(x, y, s, size=15, anchor="middle", fill=INK, weight="700", extra=""):
    return ('<text x="%g" y="%g" font-size="%g" text-anchor="%s" fill="%s" '
            'font-weight="%s" %s>%s</text>' % (x, y, size, anchor, fill, weight, extra, s))


def wire(d, color=INK, w=LW, extra=""):
    return ('<path d="%s" fill="none" stroke="%s" stroke-width="%g" '
            'stroke-linecap="round" stroke-linejoin="round" %s/>' % (d, color, w, extra))


def dot(x, y, color=INK, r=4.0):
    return '<circle cx="%g" cy="%g" r="%g" fill="%s"/>' % (x, y, r, color)


def res_h(x, y, L=92, color=INK, w=LW):
    """Resistor horizontal: de (x,y) a (x+L,y). Zigzag centrado."""
    lead = (L - 66.0) / 2.0
    d = ("M%g %g H%g l5.5,-9 l11,18 l11,-18 l11,18 l11,-18 l11,18 l5.5,-9 H%g"
         % (x, y, x + lead, x + L))
    return wire(d, color, w)


def res_v(x, y, L=92, color=INK, w=LW):
    """Resistor vertical: de (x,y) a (x,y+L)."""
    lead = (L - 66.0) / 2.0
    d = ("M%g %g V%g l-9,5.5 l18,11 l-18,11 l18,11 l-18,11 l18,11 l-9,5.5 V%g"
         % (x, y, y + lead, y + L))
    return wire(d, color, w)


def batt_v(x, y, color=INK, w=LW, plus_up=True, gap=13.0, wide=26.0, narrow=13.0):
    """Bateria vertical centrada en (x,y): placa larga fina (+) y placa corta gruesa (-).
    Devuelve (svg, y_top_lead, y_bot_lead)."""
    y1, y2 = y - gap / 2.0, y + gap / 2.0
    if not plus_up:
        y1, y2 = y2, y1
    s = []
    s.append(wire("M%g %g H%g" % (x - wide, y1, x + wide), color, 1.9))
    s.append(wire("M%g %g H%g" % (x - narrow, y2, x + narrow), color, 5.4))
    return "".join(s), min(y1, y2), max(y1, y2)


def arrow_defs(ids):
    """ids: lista de (id, color)."""
    out = ['<defs>']
    for i, c in ids:
        out.append('<marker id="%s" markerWidth="10" markerHeight="10" refX="8.4" refY="3.2" '
                   'orient="auto" markerUnits="userSpaceOnUse">'
                   '<path d="M0.5 0.4 L8.6 3.2 L0.5 6 z" fill="%s"/></marker>' % (i, c))
    out.append('</defs>')
    return "".join(out)


def curr(x1, y1, x2, y2, mid, color=BLUE, size=14, dy=-9, dx=0, anchor="middle", w=2.0):
    """Flecha de corriente + etiqueta."""
    i = uid("a")
    s = arrow_defs([(i, color)])
    s += wire("M%g %g L%g %g" % (x1, y1, x2, y2), color, w,
              'marker-end="url(#%s)"' % i)
    mx, my = (x1 + x2) / 2.0 + dx, (y1 + y2) / 2.0 + dy
    s += txt(mx, my, mid, size, anchor, color, "700")
    return s


def loop_arrow(cx, cy, r, label, color=RED, start=-110, span=290, cw=True, size=14):
    """Flecha circular de malla. cw=True horario, cw=False antihorario."""
    import math
    a0 = math.radians(start)
    a1 = math.radians(start + span) if cw else math.radians(start - span)
    x0, y0 = cx + r * math.cos(a0), cy + r * math.sin(a0)
    x1, y1 = cx + r * math.cos(a1), cy + r * math.sin(a1)
    large = 1 if abs(span) > 180 else 0
    swf = 1 if cw else 0
    i = uid("l")
    s = arrow_defs([(i, color)])
    s += ('<path d="M%g %g A%g %g 0 %d %d %g %g" fill="none" stroke="%s" stroke-width="2.0" '
          'stroke-dasharray="7 5" marker-end="url(#%s)"/>'
          % (x0, y0, r, r, large, swf, x1, y1, color, i))
    s += txt(cx, cy + 6, label, size, "middle", color, "700")
    return s


def pol(x, y, sign, color=RED, size=17):
    return txt(x, y, sign, size, "middle", color, "700")


def svg(vb, body, cls="fig-svg", label=""):
    return ('<svg class="%s" viewBox="%s" role="img" aria-label="%s" '
            'xmlns="http://www.w3.org/2000/svg" font-family="Helvetica, Arial, sans-serif">'
            '%s</svg>' % (cls, vb, label, body))


def ground(x, y, color=INK):
    """Simbolo de masa colgando de (x,y)."""
    s = wire("M%g %g V%g" % (x, y, y + 14), color, LW)
    s += wire("M%g %g H%g" % (x - 15, y + 14, x + 15), color, 2.4)
    s += wire("M%g %g H%g" % (x - 9.5, y + 20, x + 9.5), color, 2.2)
    s += wire("M%g %g H%g" % (x - 4, y + 26, x + 4), color, 2.0)
    return s
