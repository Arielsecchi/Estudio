# -*- coding: utf-8 -*-
from svglib import *

OHM = "&#937;"      # Ω
OM  = "&#8486;"

G_FULL = dict(XA=78, XB=348, XC=618, YT=74, YB=348, RL=92, BY=203, F=16)
G_MID  = dict(XA=62, XB=272, XC=482, YT=62, YB=292, RL=92, BY=173, F=17)


def main_circuit(G, values=True, refs=False, meshes=False, kcl=False,
                 passivate=None, annot=None, gnd=True, nodes=True):
    """Dibuja el circuito del enunciado. Devuelve el cuerpo SVG."""
    XA, XB, XC, YT, YB, RL, BY, F = (G["XA"], G["XB"], G["XC"], G["YT"], G["YB"],
                                     G["RL"], G["BY"], G["F"])
    s = []
    r1x = XA + (XB - XA - RL) / 2.0
    r2x = XB + (XC - XB - RL) / 2.0
    r3y = YT + (YB - YT - RL) / 2.0
    by1, by2 = BY - 6.5, BY + 6.5

    # --- ramas verticales de las fuentes ---
    for (X, name, val, short, side) in ((XA, "V", "1", passivate == "V1", "L"),
                                        (XC, "V", "2", passivate == "V2", "R")):
        if short:
            s.append(wire("M%g %g V%g" % (X, YT, YB), GREEN, 4.6))
            lx = X + 20 if side == "L" else X - 20
            an = "start" if side == "L" else "end"
            s.append(txt(lx, BY - 8, sub("V", val) + " = 0", F + 1, an, GREEN))
            s.append(txt(lx, BY + 15, "cortocircuito", F - 1, an, GREEN, "600"))
        else:
            b, t1, t2 = batt_v(X, BY)
            s.append(wire("M%g %g V%g" % (X, YT, t1), INK))
            s.append(b)
            s.append(wire("M%g %g V%g" % (X, t2, YB), INK))
            lx = X - 36 if side == "L" else X + 36
            an = "end" if side == "L" else "start"
            s.append(txt(lx, BY - 8, sub("V", val), F + 2, an, INK))
            if values:
                s.append(txt(lx, BY + 13, ("5 V" if val == "1" else "10 V"), F - 1, an, MUTED, "600"))
            if refs:
                px = X + (38 if side == "L" else -38)
                s.append(pol(px, by1 + 2, "+"))
                s.append(pol(px, by2 + 12, "&#8722;"))

    # --- cables y resistores ---
    s.append(wire("M%g %g H%g" % (XA, YT, r1x), INK))
    s.append(res_h(r1x, YT, RL))
    s.append(wire("M%g %g H%g" % (r1x + RL, YT, r2x), INK))
    s.append(res_h(r2x, YT, RL))
    s.append(wire("M%g %g H%g" % (r2x + RL, YT, XC), INK))
    s.append(wire("M%g %g V%g" % (XB, YT, r3y), INK))
    s.append(res_v(XB, r3y, RL))
    s.append(wire("M%g %g V%g" % (XB, r3y + RL, YB), INK))
    s.append(wire("M%g %g H%g" % (XA, YB, XC), INK))
    s.append(dot(XB, YT)); s.append(dot(XB, YB))

    # --- rotulos de resistores ---
    s.append(txt(r1x + RL / 2.0, YT - 24, sub("R", "1"), F + 2))
    s.append(txt(r2x + RL / 2.0, YT - 24, sub("R", "2"), F + 2))
    s.append(txt(XB + 30, r3y + RL / 2.0 - 4, sub("R", "3"), F + 2, "start"))
    if values:
        s.append(txt(r1x + RL / 2.0, YT + 32, "10 " + OHM, F - 1, "middle", MUTED, "600"))
        s.append(txt(r2x + RL / 2.0, YT + 32, "20 " + OHM, F - 1, "middle", MUTED, "600"))
        s.append(txt(XB + 30, r3y + RL / 2.0 + 16, "30 " + OHM, F - 1, "start", MUTED, "600"))

    # --- nodos ---
    if nodes:
        s.append(txt(XA - 6, YT - 22, "A", F + 3))
        s.append(txt(XB, YT - 42, "B", F + 3) if kcl
                 else txt(XB - 26, YT - 22, "B", F + 3))
        s.append(txt(XC + 6, YT - 22, "C", F + 3))
        s.append(txt(XB - 30, YB + 26, "D", F + 3))

    # --- sentidos de referencia ---
    if refs:
        s.append(curr(r1x - 34, YT - 12, r1x - 4, YT - 12, sub("I", "1"), BLUE, F, dy=-8))
        s.append(curr(r2x + RL + 34, YT - 12, r2x + RL + 4, YT - 12, sub("I", "2"), BLUE, F, dy=-8))
        s.append(curr(XB - 26, r3y + 12, XB - 26, r3y + 52, sub("I", "3"), BLUE, F, dy=2, dx=-16, anchor="end"))
        # polaridad en los resistores (+ por donde entra la corriente)
        s.append(pol(r1x - 10, YT + 20, "+")); s.append(pol(r1x + RL + 10, YT + 20, "&#8722;"))
        s.append(pol(r2x + RL + 10, YT + 20, "+")); s.append(pol(r2x - 10, YT + 20, "&#8722;"))
        s.append(pol(XB + 22, r3y - 4, "+")); s.append(pol(XB + 22, r3y + RL + 12, "&#8722;"))

    if meshes:
        s.append(loop_arrow((XA + XB) / 2.0, (YT + YB) / 2.0 + 6, 54, "1", RED, -115, 290, True, F + 3))
        s.append(loop_arrow((XB + XC) / 2.0, (YT + YB) / 2.0 + 6, 54, "2", RED, -65, 290, False, F + 3))

    if kcl:
        s.append(curr(XB - 112, YT, XB - 26, YT, sub("I", "1"), BLUE, F + 1, dy=26))
        s.append(curr(XB + 112, YT, XB + 26, YT, sub("I", "2"), BLUE, F + 1, dy=26))
        s.append(curr(XB - 34, r3y + 6, XB - 34, r3y + 52, sub("I", "3"), BLUE, F + 1, dy=4, dx=-14, anchor="end"))
        s.append('<circle cx="%g" cy="%g" r="30" fill="none" stroke="%s" stroke-width="1.7" '
                 'stroke-dasharray="6 5"/>' % (XB, YT, RED))

    if gnd:
        s.append(ground(XB, YB))

    if annot:
        s.extend(annot(locals()))
    return "".join(s)


def fig_enunciado():
    G = G_FULL
    b = main_circuit(G, values=True, gnd=False)
    b += txt(G["XB"], G["YB"] + 52, "el nodo D es la referencia (masa)", 15, "middle", MUTED, "600")
    return svg("0 26 700 400", b, label="Circuito del enunciado: V1 entre D y A, R1 de A a B, R3 de B a D, R2 de B a C, V2 entre C y D")


def fig_referencias():
    G = G_FULL
    b = main_circuit(G, values=False, refs=True, gnd=True)
    return svg("0 26 700 412", b, label="El mismo circuito con los sentidos de referencia de las corrientes y las polaridades de las tensiones")


def fig_mallas():
    G = G_FULL
    b = main_circuit(G, values=True, refs=False, meshes=True, gnd=True)
    b += txt((G["XA"] + G["XB"]) / 2.0, G["YB"] + 66, "Malla 1", 16, "middle", RED)
    b += txt((G["XB"] + G["XC"]) / 2.0, G["YB"] + 66, "Malla 2", 16, "middle", RED)
    return svg("0 26 700 426", b, label="Las dos mallas del circuito, recorridas en sentido horario")


def fig_nodo():
    G = G_FULL
    b = main_circuit(G, values=False, kcl=True, gnd=True)
    b += txt(G["XB"], G["YB"] + 66, "LKC en el nodo B:  I&#8321; + I&#8322; = I&#8323;", 19, "middle", RED)
    return svg("0 8 700 444", b, label="Ley de corrientes de Kirchhoff en el nodo B")


def _divisor(x0, y0, Vname, Vval, Rname, Rval, Reqname, Reqval, out, W=280, H=230):
    """Panel: lazo simple V - R - Req con la salida marcada."""
    s = []
    L, R = x0 + 40, x0 + W - 60
    T, B = y0 + 40, y0 + H
    b, t1, t2 = batt_v(L, (T + B) / 2.0)
    s.append(wire("M%g %g V%g" % (L, T, t1), INK)); s.append(b)
    s.append(wire("M%g %g V%g" % (L, t2, B), INK))
    s.append(txt(L - 34, (T + B) / 2.0 - 8, Vname, 18, "end"))
    s.append(txt(L - 34, (T + B) / 2.0 + 13, Vval, 16, "end", MUTED, "600"))
    rx = L + (R - L - 82) / 2.0
    s.append(wire("M%g %g H%g" % (L, T, rx), INK))
    s.append(res_h(rx, T, 82))
    s.append(wire("M%g %g H%g" % (rx + 82, T, R), INK))
    s.append(txt(rx + 41, T - 24, Rname, 18)); s.append(txt(rx + 41, T + 30, Rval, 16, "middle", MUTED, "600"))
    ry = T + (B - T - 82) / 2.0
    s.append(wire("M%g %g V%g" % (R, T, ry), INK)); s.append(res_v(R, ry, 82))
    s.append(wire("M%g %g V%g" % (R, ry + 82, B), INK))
    s.append(txt(R + 28, ry + 34, Reqname, 18, "start", GREEN))
    s.append(txt(R + 28, ry + 56, Reqval, 16, "start", GREEN, "600"))
    s.append(wire("M%g %g H%g" % (L, B, R), INK))
    s.append(dot(R, T)); s.append(txt(R - 22, T - 22, "B", 19))
    s.append(dot(R, B)); s.append(txt(R - 22, B + 26, "D", 19))
    s.append(txt((L + R) / 2.0, B + 52, out, 17, "middle", GREEN))
    return "".join(s)


def _sup(passiv, title, box, boxlab, div_args, aria):
    G = G_MID
    XA, XB, XC, YT, YB = G["XA"], G["XB"], G["XC"], G["YT"], G["YB"]
    s = main_circuit(G, values=False, passivate=passiv, gnd=False, nodes=True)
    s += txt(XB, 16, title, 17, "middle", GREEN)
    x0, x1 = box
    s += ('<rect x="%g" y="%g" width="%g" height="%g" rx="10" fill="%s" fill-opacity="0.09" '
          'stroke="%s" stroke-width="1.7" stroke-dasharray="7 5"/>'
          % (x0, YT - 14, x1 - x0, YB - YT + 18, GREEN, GREEN))
    s += txt((x0 + x1) / 2.0, YB + 56, boxlab, 17, "middle", GREEN)
    s += _divisor(612, 34, *div_args)
    s += txt(748, 16, "2) queda un divisor de tensi&#243;n", 17, "middle", GREEN)
    return svg("0 0 990 396", s, label=aria)


def fig_sup_v1():
    return _sup(
        "V2", "1) V&#8322; apagada &#8594; C queda unido a D",
        (G_MID["XB"] - 22, G_MID["XC"] + 22),
        "R&#8322; y R&#8323; quedan en paralelo: 20&#8741;30 = 12 " + OHM,
        (sub("V", "1"), "5 V", sub("R", "1"), "10 " + OHM,
         "R&#8322;&#8741;R&#8323;", "12 " + OHM,
         "V&#8242; = 5 &#183; 12 / (10 + 12) = 30/11 = 2,727 V"),
        "Superposicion, aporte de V1: se cortocircuita V2, R2 queda en paralelo con R3 y el circuito se reduce a un divisor de tension")


def fig_sup_v2():
    return _sup(
        "V1", "1) V&#8321; apagada &#8594; A queda unido a D",
        (G_MID["XA"] - 22, G_MID["XB"] + 22),
        "R&#8321; y R&#8323; quedan en paralelo: 10&#8741;30 = 7,5 " + OHM,
        (sub("V", "2"), "10 V", sub("R", "2"), "20 " + OHM,
         "R&#8321;&#8741;R&#8323;", "7,5 " + OHM,
         "V&#8243; = 10 &#183; 7,5 / (20 + 7,5) = 30/11 = 2,727 V"),
        "Superposicion, aporte de V2: se cortocircuita V1, R1 queda en paralelo con R3 y el circuito se reduce a un divisor de tension")


def fig_resultado():
    G = G_FULL
    XA, XB, XC, YT, YB, RL = G["XA"], G["XB"], G["XC"], G["YT"], G["YB"], G["RL"]
    r1x = XA + (XB - XA - RL) / 2.0
    r2x = XB + (XC - XB - RL) / 2.0
    r3y = YT + (YB - YT - RL) / 2.0
    VBD = 'V<tspan dy="5" font-size="64%">BD</tspan>'
    s = main_circuit(G, values=False, gnd=True)

    # corrientes reales (sentido real, no el de referencia)
    s += curr(r1x + RL + 42, YT - 15, r1x + RL + 4, YT - 15, "45,5 mA", GREEN, 14, dy=-11, dx=-14)
    s += curr(r2x + RL + 42, YT - 15, r2x + RL + 4, YT - 15, "227,3 mA", GREEN, 14, dy=-11, dx=-8)
    s += curr(XB - 26, r3y + 8, XB - 26, r3y + 56, "181,8 mA", GREEN, 14, dy=34, dx=-16, anchor="end")

    # V_BD medida sobre R3, dibujada en el lazo izquierdo que esta vacio
    MX = 200.0
    s += wire("M%g %g H%g M%g %g H%g" % (MX, r3y, XB, MX, r3y + RL, XB), GREEN, 1.3,
              'stroke-dasharray="5 4"')
    i2 = uid("vb")
    s += arrow_defs([(i2, GREEN)])
    s += wire("M%g %g V%g" % (MX, r3y + RL, r3y + 4), GREEN, 2.2, 'marker-end="url(#%s)"' % i2)
    s += txt(MX + 16, r3y + 24, "+", 18, "middle", GREEN)
    s += txt(MX + 16, r3y + RL - 10, "&#8722;", 18, "middle", GREEN)
    s += ('<rect x="%g" y="%g" width="176" height="46" rx="9" fill="#e9f6ef" stroke="%s" '
          'stroke-width="1.9"/>' % (MX - 88, r3y + RL + 18, GREEN))
    s += txt(MX, r3y + RL + 49, VBD + " = 5,45 V", 21, "middle", GREEN)

    s += txt(XB, YB + 72, "en verde, los sentidos REALES de circulaci&#243;n y la tensi&#243;n del nodo B",
             15, "middle", MUTED, "600")
    return svg("0 26 700 434", s, label="Resultado final: tension del nodo B medida sobre R3 y corrientes reales por cada rama")


# ==================== los tres circuitos del "para pensar" ====================

def _cap(x, y, t, color=MUTED, size=16):
    return txt(x, y, t, size, "middle", color, "700")


def fig_c1(solved=True):
    """Tres ramas en paralelo entre el nodo de arriba y el de abajo."""
    YT, YB = 66, 372
    X1, X2, X3 = 80, 290, 500
    s = []
    s.append(wire("M%g %g H%g" % (X1, YT, X3), INK))
    s.append(wire("M%g %g H%g" % (X1, YB, X3), INK))
    # rama 1: solo un resistor
    s.append(wire("M%g %g V%g" % (X1, YT, 150), INK)); s.append(res_v(X1, 150, 92))
    s.append(wire("M%g %g V%g" % (X1, 242, YB), INK))
    # ramas 2 y 3: resistor + fuente
    for X, rn, vn in ((X2, "1", "1"), (X3, "2", "2")):
        s.append(wire("M%g %g V%g" % (X, YT, 112), INK)); s.append(res_v(X, 112, 92))
        b, t1, t2 = batt_v(X, 288)
        s.append(wire("M%g %g V%g" % (X, 204, t1), INK)); s.append(b)
        s.append(wire("M%g %g V%g" % (X, t2, YB), INK))
        s.append(txt(X + 30, 154, sub("R", rn) if solved else "R?", 19, "start",
                     GREEN if solved else INK))
        s.append(txt(X - 40, 274, sub("V", vn) if solved else "V?", 19, "end",
                     GREEN if solved else INK))
    s.append(txt(X1 + 30, 200, sub("R", "3") if solved else "R?", 19, "start",
                 GREEN if solved else INK))
    s.append(dot(X2, YT)); s.append(dot(X2, YB))
    if solved:
        s.append(dot(X2, 232, GREEN, 5)); s.append(txt(X2 - 26, 228, "A", 20, "end", GREEN))
        s.append(dot(X3, 232, GREEN, 5)); s.append(txt(X3 + 26, 228, "C", 20, "start", GREEN))
        s.append(txt(X1 - 22, YT + 6, "B", 20, "end", GREEN))
        s.append(txt(X1 - 22, YB + 6, "D", 20, "end", GREEN))
        s.append(_cap((X1 + X3) / 2.0, 30, "S&#205;: es el circuito del enunciado", GREEN, 19))
        s.append(txt((X1 + X3) / 2.0, YB + 42,
                     "todo el riel de arriba es el nodo B; todo el de abajo, el nodo D",
                     15, "middle", MUTED, "600"))
    return svg("0 8 580 442", s, label="Circuito 1: tres ramas en paralelo entre el nodo B y el nodo D")


def fig_c3(solved=True):
    """Dos resistores que bajan a un nodo comun del que cuelga el tercero."""
    YT, YB = 66, 386
    XL, XA_, XB_, XR = 80, 240, 380, 540
    XM = 310
    s = []
    # rama izquierda: V1
    b1, t11, t12 = batt_v(XL, 246)
    s.append(wire("M%g %g V%g" % (XL, YT, t11), INK)); s.append(b1)
    s.append(wire("M%g %g V%g" % (XL, t12, YB), INK))
    s.append(wire("M%g %g H%g" % (XL, YT, XA_), INK))
    # rama derecha: V2
    b2, t21, t22 = batt_v(XR, 246)
    s.append(wire("M%g %g V%g" % (XR, YT, t21), INK)); s.append(b2)
    s.append(wire("M%g %g V%g" % (XR, t22, YB), INK))
    s.append(wire("M%g %g H%g" % (XB_, YT, XR), INK))
    # los dos resistores de arriba
    s.append(wire("M%g %g V%g" % (XA_, YT, 108), INK)); s.append(res_v(XA_, 108, 92))
    s.append(wire("M%g %g V%g" % (XA_, 200, 226), INK))
    s.append(wire("M%g %g V%g" % (XB_, YT, 108), INK)); s.append(res_v(XB_, 108, 92))
    s.append(wire("M%g %g V%g" % (XB_, 200, 226), INK))
    s.append(wire("M%g %g H%g" % (XA_, 226, XB_), INK))
    # el resistor colgante
    s.append(wire("M%g %g V%g" % (XM, 226, 256), INK)); s.append(res_v(XM, 256, 92))
    s.append(wire("M%g %g V%g" % (XM, 348, YB), INK))
    s.append(wire("M%g %g H%g" % (XL, YB, XR), INK))
    s.append(dot(XM, 226)); s.append(dot(XM, YB))
    s.append(txt(XA_ - 30, 158, sub("R", "1") if solved else "R?", 19, "end", GREEN if solved else INK))
    s.append(txt(XB_ + 30, 158, sub("R", "2") if solved else "R?", 19, "start", GREEN if solved else INK))
    s.append(txt(XM + 30, 306, sub("R", "3") if solved else "R?", 19, "start", GREEN if solved else INK))
    s.append(txt(XL - 34, 240, sub("V", "1") if solved else "V?", 19, "end", GREEN if solved else INK))
    s.append(txt(XR + 34, 240, sub("V", "2") if solved else "V?", 19, "start", GREEN if solved else INK))
    if solved:
        s.append(txt(155, YT - 18, "A", 20, "middle", GREEN))
        s.append(txt(462, YT - 18, "C", 20, "middle", GREEN))
        s.append(txt(XM + 28, 216, "B", 20, "start", GREEN))
        s.append(txt(XM + 28, YB + 26, "D", 20, "start", GREEN))
        s.append(_cap(310, 26, "S&#205;: es el circuito del enunciado", GREEN, 19))
    return svg("0 10 620 434", s, label="Circuito 3: los dos resistores de arriba bajan a un nodo comun del que cuelga el tercero")


def fig_c2():
    """El que NO es equivalente."""
    YT, YB = 92, 366
    XL, XM, XR = 80, 320, 560
    s = []
    b1, t11, t12 = batt_v(XL, 230)
    s.append(wire("M%g %g V%g" % (XL, YT, t11), INK)); s.append(b1)
    s.append(wire("M%g %g V%g" % (XL, t12, YB), INK))
    r1x = XL + (XM - XL - 92) / 2.0
    s.append(wire("M%g %g H%g" % (XL, YT, r1x), INK)); s.append(res_h(r1x, YT, 92))
    s.append(wire("M%g %g H%g" % (r1x + 92, YT, XM), INK))
    b2, t21, t22 = batt_v(XM, 230, color=RED)
    s.append(wire("M%g %g V%g" % (XM, YT, t21), RED, 3.0)); s.append(b2)
    s.append(wire("M%g %g V%g" % (XM, t22, YB), RED, 3.0))
    r2x = XM + (XR - XM - 92) / 2.0
    s.append(wire("M%g %g H%g" % (XM, YT, r2x), INK)); s.append(res_h(r2x, YT, 92))
    s.append(wire("M%g %g H%g" % (r2x + 92, YT, XR), INK))
    s.append(wire("M%g %g V%g" % (XR, YT, 184), INK)); s.append(res_v(XR, 184, 92))
    s.append(wire("M%g %g V%g" % (XR, 276, YB), INK))
    s.append(wire("M%g %g H%g" % (XL, YB, XR), INK))
    s.append(dot(XM, YT, RED, 5)); s.append(dot(XM, YB))
    s.append(txt(r1x + 46, YT - 24, "R?", 19)); s.append(txt(r2x + 46, YT - 24, "R?", 19))
    s.append(txt(XR + 30, 236, "R?", 19, "start"))
    s.append(txt(XL - 34, 224, "V?", 19, "end"))
    s.append(txt(XM - 34, 224, "V?", 19, "end", RED))
    s.append('<circle cx="%g" cy="%g" r="34" fill="none" stroke="%s" stroke-width="2.2" '
             'stroke-dasharray="7 5"/>' % (XM, YT, RED))
    s.append(txt(XM, 46, "ac&#225; la fuente cuelga del nodo del medio", 17, "middle", RED))
    s.append(txt(XM, YB + 34, "ese nodo toca 2 resistores + 1 fuente; el nodo B del enunciado toca 3 resistores",
                 16, "middle", RED, "700"))
    s.append(_cap(XM, 24, "NO: no es equivalente", RED, 19))
    return svg("0 4 660 424", s, label="Circuito 2: la segunda fuente cuelga del nodo del medio, por eso no es equivalente al del enunciado")


def fig_c2_fix():
    """Como habria que corregir el circuito 2: intercambiar la fuente por el resistor."""
    YT, YB = 92, 366
    XL, XM, XR = 80, 320, 560
    s = []
    b1, t11, t12 = batt_v(XL, 230)
    s.append(wire("M%g %g V%g" % (XL, YT, t11), INK)); s.append(b1)
    s.append(wire("M%g %g V%g" % (XL, t12, YB), INK))
    r1x = XL + (XM - XL - 92) / 2.0
    s.append(wire("M%g %g H%g" % (XL, YT, r1x), INK)); s.append(res_h(r1x, YT, 92))
    s.append(wire("M%g %g H%g" % (r1x + 92, YT, XM), INK))
    s.append(wire("M%g %g V%g" % (XM, YT, 184), GREEN, 2.6)); s.append(res_v(XM, 184, 92, GREEN, 2.6))
    s.append(wire("M%g %g V%g" % (XM, 276, YB), GREEN, 2.6))
    r2x = XM + (XR - XM - 92) / 2.0
    s.append(wire("M%g %g H%g" % (XM, YT, r2x), INK)); s.append(res_h(r2x, YT, 92))
    s.append(wire("M%g %g H%g" % (r2x + 92, YT, XR), INK))
    b2, t21, t22 = batt_v(XR, 230, color=GREEN)
    s.append(wire("M%g %g V%g" % (XR, YT, t21), GREEN, 2.6)); s.append(b2)
    s.append(wire("M%g %g V%g" % (XR, t22, YB), GREEN, 2.6))
    s.append(wire("M%g %g H%g" % (XL, YB, XR), INK))
    s.append(dot(XM, YT)); s.append(dot(XM, YB))
    s.append(txt(r1x + 46, YT - 24, sub("R", "1"), 19)); s.append(txt(r2x + 46, YT - 24, sub("R", "2"), 19))
    s.append(txt(XM + 30, 236, sub("R", "3"), 19, "start", GREEN))
    s.append(txt(XL - 34, 224, sub("V", "1"), 19, "end"))
    s.append(txt(XR + 34, 224, sub("V", "2"), 19, "start", GREEN))
    s.append(txt(XL - 6, YT - 24, "A", 20, "end", GREEN))
    s.append(txt(XM - 26, YT - 24, "B", 20, "end", GREEN))
    s.append(txt(XR + 6, YT - 24, "C", 20, "start", GREEN))
    s.append(txt(XM - 26, YB + 28, "D", 20, "end", GREEN))
    s.append(_cap(XM, 42, "corregido: se intercambian R&#8323; y V&#8322;", GREEN, 19))
    return svg("0 18 660 410", s, label="El circuito 2 corregido: intercambiando el resistor de la derecha con la fuente del medio queda el circuito del enunciado")


FIGS = {
    "FIG_ENUNCIADO": fig_enunciado,
    "FIG_REFERENCIAS": fig_referencias,
    "FIG_MALLAS": fig_mallas,
    "FIG_NODO": fig_nodo,
    "FIG_SUP_V1": fig_sup_v1,
    "FIG_SUP_V2": fig_sup_v2,
    "FIG_RESULTADO": fig_resultado,
    "FIG_C1": fig_c1,
    "FIG_C2": fig_c2,
    "FIG_C3": fig_c3,
    "FIG_C2FIX": fig_c2_fix,
}
