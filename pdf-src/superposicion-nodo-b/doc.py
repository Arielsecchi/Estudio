# -*- coding: utf-8 -*-
"""Arma el HTML de la resolucion (se imprime a PDF con chromium --print-to-pdf)."""
import io, sys
import figuras

def F(k):
    return '<div class="fig">%s<div class="fig-cap">%s</div></div>'

CSS = """
@page { size: A4; margin: 15mm 15mm 16mm 15mm; }
*{box-sizing:border-box}
html{-webkit-print-color-adjust:exact; print-color-adjust:exact}
body{
  margin:0; font-family:"Bitstream Charter","Charter","DejaVu Serif",Georgia,serif;
  font-size:10.2pt; line-height:1.48; color:#16181d; background:#fff;
  hyphens:auto; -webkit-hyphens:auto;
}
h1,h2,h3,h4,.sans{font-family:"Liberation Sans","DejaVu Sans",Helvetica,Arial,sans-serif}
h1{font-size:20pt;line-height:1.16;margin:0 0 6px;letter-spacing:-.35pt}
h2{font-size:13.4pt;margin:18px 0 7px;padding:7px 0 6px;border-top:2.4px solid #16181d;
   letter-spacing:-.2pt;page-break-after:avoid;break-after:avoid}
h2 .n{display:inline-block;min-width:26px;color:#b3341d}
h3{font-size:11.2pt;margin:15px 0 5px;color:#1c1f26;page-break-after:avoid;break-after:avoid}
h4{font-size:10pt;margin:12px 0 3px;page-break-after:avoid;break-after:avoid}
p{margin:0 0 7px}
b,strong{font-weight:700}
.lead{font-size:10.8pt;color:#3b4048}
.subtitle{font-family:"Liberation Sans","DejaVu Sans",sans-serif;font-size:9pt;color:#5b626c;
   line-height:1.45;margin:0 0 4px}
.rule{height:3px;background:#16181d;margin:10px 0 16px}
.muted{color:#6b7280}
.tag{display:inline-block;font-family:"Liberation Sans",sans-serif;font-size:7.6pt;font-weight:700;
   letter-spacing:.6pt;text-transform:uppercase;color:#fff;background:#16181d;padding:2px 7px;border-radius:3px;
   vertical-align:2px}

/* --- figuras --- */
.fig{margin:10px 0 12px;page-break-inside:avoid;break-inside:avoid;text-align:center}
.fig-svg{width:94%;height:auto;display:block;margin:0 auto}
.fig-svg.narrow{max-width:60%}
.fig-svg.mid{max-width:80%}
.fig-cap{font-family:"Liberation Sans","DejaVu Sans",sans-serif;font-size:8.4pt;line-height:1.42;
   color:#4b5159;margin-top:5px;text-align:left;border-left:2.5px solid #c9ced6;padding-left:8px}

/* --- formulas --- */
.formula{margin:8px 0;padding:7px 10px;background:#f5f6f8;border-left:3px solid #16181d;
   font-size:11pt;text-align:center;page-break-inside:avoid;break-inside:avoid}
.formula.big{font-size:12.4pt}
.frac{display:inline-block;vertical-align:-.52em;text-align:center;margin:0 .16em;white-space:nowrap}
.frac>span{display:block;padding:0 .32em;line-height:1.24}
.frac>span:first-child{border-bottom:1.1px solid currentColor;padding-bottom:.06em}
.frac>span:last-child{padding-top:.06em}
.res{color:#137a4e;font-weight:700;white-space:nowrap}
var,.v{font-style:italic;font-family:"DejaVu Serif",Georgia,serif}

/* --- cajas --- */
.box{margin:9px 0;padding:8px 11px 9px;border-radius:5px;page-break-inside:avoid;break-inside:avoid;
   font-size:9.9pt}
.box .bt{font-family:"Liberation Sans",sans-serif;font-size:8.6pt;font-weight:700;letter-spacing:.4pt;
   text-transform:uppercase;margin-bottom:4px}
.key{background:#eef4fb;border:1px solid #b9d1ea} .key .bt{color:#1256a0}
.trap{background:#fdf0ec;border:1px solid #f0c3b6} .trap .bt{color:#b3341d}
.ok{background:#eaf6ef;border:1px solid #b4ddc6} .ok .bt{color:#137a4e}
.note{background:#f6f5f1;border:1px solid #ddd9cf} .note .bt{color:#6b6250}

/* --- tablas --- */
table.tbl{width:100%;border-collapse:collapse;margin:9px 0;font-size:9.1pt;
   font-family:"Liberation Sans","DejaVu Sans",sans-serif;page-break-inside:avoid;break-inside:avoid}
table.tbl th{background:#16181d;color:#fff;text-align:left;padding:5px 7px;font-size:8.5pt;
   letter-spacing:.3pt;text-transform:uppercase;font-weight:700}
table.tbl td{padding:4.5px 7px;border-bottom:1px solid #dfe2e7;vertical-align:top}
table.tbl tr:nth-child(even) td{background:#fafbfc}
table.tbl td.num{text-align:right;font-variant-numeric:tabular-nums;white-space:nowrap}
table.tbl td.c{text-align:center}
.si{color:#137a4e;font-weight:700}
.no{color:#b3341d;font-weight:700}

ol,ul{margin:6px 0 9px;padding-left:20px}
li{margin-bottom:3.5px}
ol.steps{counter-reset:st;list-style:none;padding-left:0}
ol.steps>li{counter-increment:st;position:relative;padding-left:25px;margin-bottom:6px}
ol.steps>li::before{content:counter(st);position:absolute;left:0;top:.1em;width:18px;height:18px;
   border-radius:50%;background:#16181d;color:#fff;font-family:"Liberation Sans",sans-serif;
   font-size:8pt;font-weight:700;text-align:center;line-height:18px}

.foot{margin-top:20px;padding-top:8px;border-top:1px solid #ccd1d8;
   font-family:"Liberation Sans",sans-serif;font-size:8pt;color:#7a818b}
.pb{page-break-before:always;break-before:page}
.nb{page-break-inside:avoid;break-inside:avoid}
"""


def frac(a, b):
    return '<span class="frac"><span>%s</span><span>%s</span></span>' % (a, b)


def build():
    G = figuras.FIGS

    def fig(key, cap, cls=""):
        return ('<div class="fig">%s<div class="fig-cap">%s</div></div>'
                % (G[key]().replace('class="fig-svg"', 'class="fig-svg %s"' % cls), cap))

    H = []
    A = H.append

    # ---------------- portada / enunciado ----------------
    A('<div class="tag">Circuitos con m&uacute;ltiples fuentes &middot; Superposici&oacute;n</div>')
    A('<h1>Tensi&oacute;n del nodo B en un circuito de dos fuentes</h1>')
    A('<p class="subtitle"><b>FIUBA</b> &middot; Introducci&oacute;n a la Bioingenier&iacute;a (TB157) / Introducci&oacute;n a la Ing. Electr&oacute;nica (TB063) &middot; C&aacute;tedra Veiga &middot; '
      'Resoluci&oacute;n completa de los 4 puntos de la gu&iacute;a, m&aacute;s las dos preguntas del &ldquo;Para pensar&rdquo;.</p>')
    A('<div class="rule"></div>')

    A('<p class="lead">El circuito tiene <b>dos fuentes de tensi&oacute;n</b> y <b>tres resistores</b>. '
      'Todo el ejercicio se reduce a una sola inc&oacute;gnita: <b>la tensi&oacute;n del nodo B respecto de D</b>. '
      'Se resuelve por mallas (punto 3) y despu&eacute;s por superposici&oacute;n (punto 4), y las dos cuentas '
      'tienen que dar lo mismo &mdash; eso es lo que el ejercicio quiere que veas.</p>')

    A(fig("FIG_ENUNCIADO",
          "<b>El circuito del enunciado.</b> V<sub>1</sub> entre D y A, R<sub>1</sub> de A a B, "
          "R<sub>3</sub> de B a D, R<sub>2</sub> de B a C y V<sub>2</sub> entre C y D. "
          "Ojo al s&iacute;mbolo de la bater&iacute;a: la <b>l&iacute;nea fina larga es el borne +</b> y la "
          "<b>barra gruesa el borne &minus;</b>, as&iacute; que las dos fuentes tienen el + hacia arriba "
          "(hacia A y hacia C). Valores del punto 3: V<sub>1</sub> = 5 V, V<sub>2</sub> = 10 V, "
          "R<sub>1</sub> = 10 &Omega;, R<sub>2</sub> = 20 &Omega;, R<sub>3</sub> = 30 &Omega;.", "mid"))

    A('<div class="box key"><div class="bt">Lo primero: mir&aacute; la topolog&iacute;a, no el dibujo</div>'
      'El circuito tiene <b>4 nodos</b> (A, B, C, D) y <b>2 mallas</b>. Pero A y C no son inc&oacute;gnitas: '
      'est&aacute;n pegados a una fuente ideal contra D, as&iacute; que sus potenciales ya los sab&eacute;s '
      '(V<sub>A</sub> = V<sub>1</sub> y V<sub>C</sub> = V<sub>2</sub> si tom&aacute;s D = 0). '
      '<b>La &uacute;nica tensi&oacute;n desconocida del circuito es V<sub>BD</sub></b>. '
      'Por eso el ejercicio es corto aunque tenga dos fuentes.</div>')

    # ---------------- punto 1 ----------------
    A('<h2><span class="n">1</span> Sentidos de referencia para tensiones y corrientes</h2>')
    A('<p>Un sentido de referencia <b>no es una predicci&oacute;n</b> de hacia d&oacute;nde va la corriente: es el '
      'convenio con el que vas a leer el signo del resultado. Si eleg&iacute;s mal, no te equivocaste &mdash; te va a dar '
      'un n&uacute;mero negativo, y ese menos significa &ldquo;va al rev&eacute;s de como lo dibuj&eacute;&rdquo;. '
      'Lo &uacute;nico que <b>no</b> se puede hacer es cambiarlo a mitad de camino.</p>')

    A('<ol class="steps">'
      '<li><b>Eleg&iacute; la masa.</b> Tomamos <b>D = 0 V</b>. Es el nodo natural: es el que tocan las dos fuentes '
      'y el pie de R<sub>3</sub>, y es respecto de &eacute;l que el enunciado pide V<sub>BD</sub>.</li>'
      '<li><b>Dibuj&aacute; una corriente por cada rama.</b> Elegimos '
      '<b>I<sub>1</sub></b> de A hacia B por R<sub>1</sub>, <b>I<sub>2</sub></b> de C hacia B por R<sub>2</sub> '
      'y <b>I<sub>3</sub></b> de B hacia D por R<sub>3</sub>. Las dos primeras <b>entran</b> a B y la tercera <b>sale</b>: '
      'as&iacute; la ley de nodos queda en la forma m&aacute;s c&oacute;moda, I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub>.</li>'
      '<li><b>Marc&aacute; la polaridad de cada resistor con la convenci&oacute;n pasiva</b>: el <b>+</b> va del lado '
      'por donde <i>entra</i> la corriente de referencia. Con eso, para cada resistor vale V = I&middot;R con signo '
      'positivo, sin tener que pensarlo dos veces.</li>'
      '<li><b>La polaridad de las fuentes ya viene dada por el dibujo</b>, no la eleg&iacute;s vos: + hacia A y + hacia C. '
      'O sea V<sub>AD</sub> = +5 V y V<sub>CD</sub> = +10 V.</li>'
      '</ol>')

    A(fig("FIG_REFERENCIAS",
          "<b>Punto 1 resuelto.</b> En azul los sentidos de referencia de las tres corrientes; en rojo, las "
          "polaridades. Fijate que en cada resistor el <b>+</b> qued&oacute; donde entra su corriente "
          "(convenci&oacute;n pasiva) y que en las fuentes el <b>+</b> lo impone el s&iacute;mbolo. "
          "El nodo D lleva el s&iacute;mbolo de masa: es el 0 V de referencia.", "mid"))

    A('<div class="box trap"><div class="bt">El error t&iacute;pico ac&aacute;</div>'
      'Poner el <b>+</b> de un resistor &ldquo;donde parece&rdquo; en vez de donde entra la corriente que dibujaste. '
      'Si mezcl&aacute;s las dos cosas, en la ecuaci&oacute;n de malla te va a aparecer un &minus;I&middot;R donde iba '
      'un +I&middot;R y el sistema te da cualquier cosa. <b>La polaridad del resistor la decide la flecha que vos '
      'dibujaste, no la fuente m&aacute;s cercana.</b></div>')

    # ---------------- punto 2 ----------------
    A('<h2><span class="n">2</span> Las ecuaciones de las dos mallas</h2>')
    A('<p>Recorremos cada malla <b>en el sentido de su propia corriente</b>: la malla 1 en sentido horario '
      '(sube por V<sub>1</sub>, va por R<sub>1</sub> hasta B y baja por R<sub>3</sub>) y la malla 2 en sentido '
      'antihorario (sube por V<sub>2</sub>, va por R<sub>2</sub> hasta B y baja por R<sub>3</sub>). '
      'As&iacute; las dos quedan escritas igual y no hay que pelearse con los signos.</p>')

    A(fig("FIG_MALLAS",
          "<b>Punto 2.</b> Las dos mallas del circuito. Cada una arranca en D, sube por su fuente, cruza su "
          "resistor hasta B y vuelve a D por R<sub>3</sub>. <b>R<sub>3</sub> es la rama compartida</b>: aparece "
          "en las dos ecuaciones, y es la que acopla las mallas.", "mid"))

    A('<p>Aplicando la ley de tensiones de Kirchhoff (la suma de subidas es igual a la suma de ca&iacute;das):</p>')
    A('<div class="formula big">'
      '<b>Malla 1:</b>&nbsp;&nbsp; V<sub>1</sub> = I<sub>1</sub>&middot;R<sub>1</sub> + I<sub>3</sub>&middot;R<sub>3</sub>'
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      '<b>Malla 2:</b>&nbsp;&nbsp; V<sub>2</sub> = I<sub>2</sub>&middot;R<sub>2</sub> + I<sub>3</sub>&middot;R<sub>3</sub>'
      '</div>')
    A('<p>Son dos ecuaciones con tres inc&oacute;gnitas, as&iacute; que falta una: la <b>ley de corrientes</b> en el '
      'nodo B, que es la que cierra el sistema.</p>')

    A(fig("FIG_NODO",
          "La tercera ecuaci&oacute;n. En B entran I<sub>1</sub> e I<sub>2</sub> y sale I<sub>3</sub>: "
          "<b>I<sub>1</sub> + I<sub>2</sub> = I<sub>3</sub></b>. Con esto el sistema queda de 3&times;3 y ya se puede "
          "resolver.", "mid"))

    A('<div class="formula big">'
      '<b>Sistema completo:</b>&nbsp;&nbsp;'
      '&#123;&nbsp; V<sub>1</sub> = I<sub>1</sub>R<sub>1</sub> + I<sub>3</sub>R<sub>3</sub>&nbsp;&nbsp;|&nbsp;&nbsp; '
      'V<sub>2</sub> = I<sub>2</sub>R<sub>2</sub> + I<sub>3</sub>R<sub>3</sub>&nbsp;&nbsp;|&nbsp;&nbsp; '
      'I<sub>3</sub> = I<sub>1</sub> + I<sub>2</sub> &nbsp;&#125;</div>')

    A('<div class="box note"><div class="bt">Si te lo piden con corrientes de malla</div>'
      'Es exactamente lo mismo escrito de otra forma. Con i<sub>a</sub> horaria en la malla izquierda e '
      'i<sub>b</sub> horaria en la derecha queda '
      'V<sub>1</sub> = i<sub>a</sub>(R<sub>1</sub>+R<sub>3</sub>) &minus; i<sub>b</sub>R<sub>3</sub> y '
      '&minus;V<sub>2</sub> = &minus;i<sub>a</sub>R<sub>3</sub> + i<sub>b</sub>(R<sub>2</sub>+R<sub>3</sub>), '
      'con i<sub>a</sub> = I<sub>1</sub> e i<sub>b</sub> = &minus;I<sub>2</sub>. Da lo mismo; la versi&oacute;n de '
      'arriba tiene menos signos negativos y por eso es la que conviene escribir en el parcial.</div>')

    # ---------------- punto 3 ----------------
    A('<h2><span class="n">3</span> C&aacute;lculo de V<sub>BD</sub> con los valores del enunciado</h2>')
    A('<p class="lead">V<sub>1</sub> = 5 V &nbsp;&middot;&nbsp; V<sub>2</sub> = 10 V &nbsp;&middot;&nbsp; '
      'R<sub>1</sub> = 10 &Omega; &nbsp;&middot;&nbsp; R<sub>2</sub> = 20 &Omega; &nbsp;&middot;&nbsp; '
      'R<sub>3</sub> = 30 &Omega;</p>')

    A('<h3>3.1 &nbsp;Camino largo: resolver el sistema de mallas</h3>')
    A('<p>Despejamos I<sub>1</sub> e I<sub>2</sub> de las dos primeras ecuaciones y las metemos en la tercera:</p>')
    A('<div class="formula">'
      'I<sub>1</sub> = ' + frac('5 &minus; 30&middot;I<sub>3</sub>', '10') + ' = 0,5 &minus; 3&middot;I<sub>3</sub>'
      '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
      'I<sub>2</sub> = ' + frac('10 &minus; 30&middot;I<sub>3</sub>', '20') + ' = 0,5 &minus; 1,5&middot;I<sub>3</sub>'
      '</div>')
    A('<div class="formula">'
      'I<sub>3</sub> = I<sub>1</sub> + I<sub>2</sub> = 1 &minus; 4,5&middot;I<sub>3</sub> '
      '&nbsp;&#8658;&nbsp; 5,5&middot;I<sub>3</sub> = 1 &nbsp;&#8658;&nbsp; '
      '<span class="res">I<sub>3</sub> = 2/11 A = 181,82 mA</span></div>')
    A('<p>Y de ah&iacute; sale directo lo que pide el enunciado:</p>')
    A('<div class="formula big">V<sub>BD</sub> = I<sub>3</sub>&middot;R<sub>3</sub> = '
      + frac('2', '11') + '&middot; 30 = <span class="res">'
      + frac('60', '11') + '&nbsp;V = 5,4545 V</span></div>')

    A('<h3>3.2 &nbsp;Camino corto: una sola ecuaci&oacute;n de nodos</h3>')
    A('<p>Como V<sub>BD</sub> es la <b>&uacute;nica</b> inc&oacute;gnita del circuito, conviene plantear directamente '
      'la ley de corrientes en B con las tres corrientes <i>saliendo</i> del nodo. Cada rama termina en un potencial '
      'conocido (V<sub>1</sub>, V<sub>2</sub> y 0), as&iacute; que:</p>')
    A('<div class="formula">'
      + frac('V<sub>B</sub> &minus; V<sub>1</sub>', 'R<sub>1</sub>') + ' + '
      + frac('V<sub>B</sub> &minus; V<sub>2</sub>', 'R<sub>2</sub>') + ' + '
      + frac('V<sub>B</sub>', 'R<sub>3</sub>') + ' = 0</div>')
    A('<p>Agrupando V<sub>B</sub> se llega a la f&oacute;rmula de Millman, que es la que conviene tener en la '
      'cabeza porque resuelve el ejercicio en un rengl&oacute;n:</p>')
    A('<div class="formula big">V<sub>BD</sub> = '
      + frac('V<sub>1</sub>/R<sub>1</sub> + V<sub>2</sub>/R<sub>2</sub>',
             '1/R<sub>1</sub> + 1/R<sub>2</sub> + 1/R<sub>3</sub>')
      + '&nbsp;=&nbsp;' + frac('0,5 + 0,5', '11/60')
      + '&nbsp;=&nbsp;<span class="res">' + frac('60', '11') + '&nbsp;V = 5,4545&nbsp;V</span></div>')
    A('<p class="muted" style="text-align:center;margin:-4px 0 7px">'
      'arriba: 5/10 + 10/20 = 1 A &nbsp;&middot;&nbsp; abajo: 1/10 + 1/20 + 1/30 = 11/60 S</p>')

    A('<div class="box key"><div class="bt">Por qu&eacute; Millman sale de ac&aacute;</div>'
      'El numerador es la suma de las <b>corrientes de cortocircuito</b> que cada rama fuente inyectar&iacute;a en B '
      '(V<sub>k</sub>/R<sub>k</sub>, o sea las fuentes de Norton), y el denominador es la <b>suma de todas las '
      'conductancias</b> que ve el nodo. Es literalmente el resultado de la superposici&oacute;n del punto 4, ya sumado. '
      'Por eso sirve como camino de verificaci&oacute;n independiente.</div>')

    A('<h3>3.3 &nbsp;Las tres corrientes, y qu&eacute; significan</h3>')
    A('<p>Con V<sub>B</sub> = 60/11 V ya salen todas las dem&aacute;s magnitudes:</p>')
    A('<table class="tbl">'
      '<tr><th>Magnitud</th><th>C&oacute;mo se calcula</th><th style="text-align:right">Exacto</th>'
      '<th style="text-align:right">Decimal</th><th>Lectura</th></tr>'
      '<tr><td><b>V<sub>BD</sub></b></td><td>&mdash;</td><td class="num">60/11 V</td>'
      '<td class="num"><b>5,4545 V</b></td><td>B est&aacute; por encima de A y por debajo de C</td></tr>'
      '<tr><td><b>I<sub>1</sub></b> (A&rarr;B)</td><td>(V<sub>1</sub> &minus; V<sub>B</sub>)/R<sub>1</sub></td>'
      '<td class="num">&minus;1/22 A</td><td class="num"><b>&minus;45,45 mA</b></td>'
      '<td class="no">negativa: circula de B a A</td></tr>'
      '<tr><td><b>I<sub>2</sub></b> (C&rarr;B)</td><td>(V<sub>2</sub> &minus; V<sub>B</sub>)/R<sub>2</sub></td>'
      '<td class="num">5/22 A</td><td class="num"><b>+227,27 mA</b></td>'
      '<td>va como la dibujamos</td></tr>'
      '<tr><td><b>I<sub>3</sub></b> (B&rarr;D)</td><td>V<sub>B</sub>/R<sub>3</sub></td>'
      '<td class="num">2/11 A</td><td class="num"><b>+181,82 mA</b></td>'
      '<td>va como la dibujamos</td></tr>'
      '<tr><td>V<sub>R1</sub></td><td>I<sub>1</sub>&middot;R<sub>1</sub></td><td class="num">&minus;5/11 V</td>'
      '<td class="num">&minus;0,4545 V</td><td>V<sub>A</sub> &minus; V<sub>B</sub></td></tr>'
      '<tr><td>V<sub>R2</sub></td><td>I<sub>2</sub>&middot;R<sub>2</sub></td><td class="num">50/11 V</td>'
      '<td class="num">4,5455 V</td><td>V<sub>C</sub> &minus; V<sub>B</sub></td></tr>'
      '</table>')

    A('<div class="box trap"><div class="bt">El signo de I<sub>1</sub> no es un error de cuentas</div>'
      'V<sub>2</sub> es el doble de V<sub>1</sub>, y adem&aacute;s las dos fuentes empujan hacia el mismo nodo. '
      'El resultado es que <b>B queda a 5,45 V, o sea m&aacute;s alto que los 5 V de la propia V<sub>1</sub></b>. '
      'Como la corriente por un resistor va siempre del potencial mayor al menor, por R<sub>1</sub> circula '
      '<b>de B hacia A</b>: <b>V<sub>1</sub> no est&aacute; entregando energ&iacute;a, la est&aacute; absorbiendo</b> '
      '(0,227 W). Es una bater&iacute;a cargándose. Si te da negativo y el circuito tiene dos fuentes desbalanceadas, '
      'lo m&aacute;s probable es que est&eacute; bien.</div>')

    A(fig("FIG_RESULTADO",
          "<b>El circuito con los resultados.</b> Las flechas verdes son los sentidos <b>reales</b> de "
          "circulaci&oacute;n (por eso la de R<sub>1</sub> apunta al rev&eacute;s de la referencia que "
          "eleg&iacute;amos en el punto 1). La corriente entra a B por R<sub>2</sub>, una parte baja por "
          "R<sub>3</sub> y la otra se va por R<sub>1</sub> a cargar V<sub>1</sub>.", "mid"))

    A('<h3>3.4 &nbsp;Dos verificaciones que conviene hacer siempre</h3>')
    A('<p><b>a) Ley de nodos y ley de mallas.</b> &minus;45,45 + 227,27 = 181,82 mA &#10003;. '
      'Y en la malla 1: I<sub>1</sub>R<sub>1</sub> + I<sub>3</sub>R<sub>3</sub> = '
      '&minus;0,4545 + 5,4545 = 5 V = V<sub>1</sub> &#10003;.</p>')
    A('<p><b>b) Balance de potencias.</b> Es la verificaci&oacute;n m&aacute;s fuerte porque usa todos los '
      'resultados a la vez: lo que disipan los tres resistores tiene que ser exactamente lo que entregan '
      'las fuentes.</p>')
    A('<table class="tbl">'
      '<tr><th>Disipan los resistores</th><th style="text-align:right">P</th>'
      '<th>Entregan las fuentes</th><th style="text-align:right">P</th></tr>'
      '<tr><td>P<sub>R1</sub> = I<sub>1</sub>&sup2;&middot;R<sub>1</sub></td><td class="num">20,66 mW</td>'
      '<td>P<sub>V1</sub> = V<sub>1</sub>&middot;I<sub>1</sub></td>'
      '<td class="num no">&minus;227,27 mW</td></tr>'
      '<tr><td>P<sub>R2</sub> = I<sub>2</sub>&sup2;&middot;R<sub>2</sub></td><td class="num">1033,06 mW</td>'
      '<td>P<sub>V2</sub> = V<sub>2</sub>&middot;I<sub>2</sub></td><td class="num">2272,73 mW</td></tr>'
      '<tr><td>P<sub>R3</sub> = I<sub>3</sub>&sup2;&middot;R<sub>3</sub></td><td class="num">991,74 mW</td>'
      '<td class="muted">(la negativa significa que V<sub>1</sub> absorbe)</td><td class="num">&nbsp;</td></tr>'
      '<tr><td><b>Total</b></td><td class="num"><b>2045,45 mW</b></td><td><b>Total neto</b></td>'
      '<td class="num"><b>2045,45 mW</b></td></tr>'
      '</table>')
    A('<p class="muted">Cierra al miliwatt: 495/242 W en los dos lados. Si esto no te cierra, hay un error de signo '
      'en alguna corriente.</p>')

    A('<div class="box note"><div class="bt">Tercer camino, por si quer&eacute;s estar seguro: Th&eacute;venin</div>'
      'Sac&aacute; R<sub>3</sub> y calcul&aacute; el equivalente de Th&eacute;venin de lo que queda entre B y D. '
      'V<sub>th</sub> = (V<sub>1</sub>/R<sub>1</sub> + V<sub>2</sub>/R<sub>2</sub>)/(1/R<sub>1</sub> + 1/R<sub>2</sub>) '
      '= 1/0,15 = <b>20/3 V = 6,667 V</b> y R<sub>th</sub> = R<sub>1</sub>&#8741;R<sub>2</sub> = '
      '<b>20/3 &Omega; = 6,667 &Omega;</b>. Reponiendo R<sub>3</sub> queda un divisor: '
      'V<sub>BD</sub> = (20/3)&middot;30/(30 + 20/3) = 600/110 = <b>60/11 V</b> &#10003;. '
      'Tres m&eacute;todos distintos, el mismo n&uacute;mero.</div>')

    # ---------------- punto 4 ----------------
    A('<h2><span class="n">4</span> El mismo resultado por superposici&oacute;n</h2>')
    A('<p>El principio dice que, en un circuito lineal, la respuesta es la <b>suma algebraica</b> de las respuestas '
      'que produce cada fuente independiente actuando sola, con las dem&aacute;s apagadas. '
      'Como <b>apagar una fuente de tensi&oacute;n es reemplazarla por un cortocircuito</b> (impone 0 V entre sus '
      'bornes, que es lo que hace un cable), cada subcircuito se convierte en un simple divisor de tensi&oacute;n.</p>')

    A('<div class="box trap"><div class="bt">El paso que no hay que saltearse</div>'
      'Despu&eacute;s de apagar una fuente, <b>redibuj&aacute; el circuito</b>. Cuando una fuente de tensi&oacute;n se '
      'vuelve cable, sus dos nodos <b>se fusionan</b> y aparecen paralelos que antes no exist&iacute;an. Si no '
      'redibuj&aacute;s, no los ves y no sab&eacute;s qu&eacute; est&aacute; en paralelo con qu&eacute;.</div>')

    A('<h3>4.1 &nbsp;Aporte de V<sub>1</sub> sola (V&#8242;)</h3>')
    A('<p>Se cortocircuita V<sub>2</sub>. El nodo <b>C queda unido a D</b>, con lo cual R<sub>2</sub> pasa a estar '
      'conectada entre B y D &mdash; es decir, <b>en paralelo con R<sub>3</sub></b>.</p>')
    A(fig("FIG_SUP_V1",
          "<b>Aporte de V<sub>1</sub>.</b> Con V<sub>2</sub> en corto, R<sub>2</sub> y R<sub>3</sub> quedan entre los "
          "mismos dos nodos (B y D): 20&#8741;30 = 12 &Omega;. Lo que queda es V<sub>1</sub> alimentando "
          "R<sub>1</sub> en serie con esos 12 &Omega;, y V&#8242; es la tensi&oacute;n sobre el paralelo."))
    A('<div class="formula">R<sub>2</sub>&#8741;R<sub>3</sub> = '
      + frac('20 &middot; 30', '20 + 30') + ' = 12 &Omega; &nbsp;&#8658;&nbsp; V&#8242; = V<sub>1</sub>&middot;'
      + frac('12', '10 + 12') + ' = ' + frac('60', '22') + ' = <span class="res">'
      + frac('30', '11') + '&nbsp;V = 2,7273 V</span></div>')

    A('<h3>4.2 &nbsp;Aporte de V<sub>2</sub> sola (V&#8243;)</h3>')
    A('<p>Ahora se cortocircuita V<sub>1</sub>. El nodo <b>A queda unido a D</b>, y es R<sub>1</sub> la que queda '
      'en paralelo con R<sub>3</sub>.</p>')
    A(fig("FIG_SUP_V2",
          "<b>Aporte de V<sub>2</sub>.</b> Sim&eacute;trico al anterior: con V<sub>1</sub> en corto, "
          "R<sub>1</sub>&#8741;R<sub>3</sub> = 10&#8741;30 = 7,5 &Omega;, y V&#8243; es la tensi&oacute;n sobre ese "
          "paralelo en el divisor que forma con R<sub>2</sub>."))
    A('<div class="formula">R<sub>1</sub>&#8741;R<sub>3</sub> = '
      + frac('10 &middot; 30', '10 + 30') + ' = 7,5 &Omega; &nbsp;&#8658;&nbsp; V&#8243; = V<sub>2</sub>&middot;'
      + frac('7,5', '20 + 7,5') + ' = ' + frac('75', '27,5') + ' = <span class="res">'
      + frac('30', '11') + '&nbsp;V = 2,7273 V</span></div>')

    A('<h3>4.3 &nbsp;La suma, y la comparaci&oacute;n con el punto 3</h3>')
    A('<div class="formula big">V<sub>BD</sub> = V&#8242; + V&#8243; = '
      + frac('30', '11') + ' + ' + frac('30', '11') + ' = <span class="res">'
      + frac('60', '11') + '&nbsp;V = 5,4545 V</span></div>')
    A('<table class="tbl">'
      '<tr><th>M&eacute;todo</th><th>C&oacute;mo se llega</th><th style="text-align:right">V<sub>BD</sub></th>'
      '<th class="c">&iquest;Coincide?</th></tr>'
      '<tr><td>Mallas (punto 3)</td><td>sistema de 3 ecuaciones</td><td class="num">60/11 = 5,4545 V</td>'
      '<td class="c si">&#10003;</td></tr>'
      '<tr><td>Nodos / Millman</td><td>una ecuaci&oacute;n de LKC en B</td><td class="num">60/11 = 5,4545 V</td>'
      '<td class="c si">&#10003;</td></tr>'
      '<tr><td>Th&eacute;venin</td><td>equivalente visto por R<sub>3</sub></td><td class="num">60/11 = 5,4545 V</td>'
      '<td class="c si">&#10003;</td></tr>'
      '<tr><td><b>Superposici&oacute;n (punto 4)</b></td><td>2,7273 + 2,7273</td>'
      '<td class="num"><b>60/11 = 5,4545 V</b></td><td class="c si">&#10003;</td></tr>'
      '</table>')

    A('<div class="box ok"><div class="bt">Por qu&eacute; los dos aportes dan exactamente lo mismo</div>'
      'No es casualidad ni una coincidencia num&eacute;rica bonita: es que '
      '<b>V<sub>1</sub>/R<sub>1</sub> = 5/10 = 0,5 A</b> y <b>V<sub>2</sub>/R<sub>2</sub> = 10/20 = 0,5 A</b>. '
      'Las dos ramas tienen la <b>misma corriente de Norton</b>, as&iacute; que inyectan lo mismo en el nodo B y '
      'aportan lo mismo a su tensi&oacute;n. Se ve de una en la f&oacute;rmula de Millman: el numerador es '
      '0,5 + 0,5. Si V<sub>2</sub> fuera 12 V en vez de 10, los aportes ser&iacute;an distintos.</div>')

    A('<h3>4.4 &nbsp;Superposici&oacute;n tambi&eacute;n para las corrientes</h3>')
    A('<p>Si te piden las corrientes por superposici&oacute;n (o si quer&eacute;s una verificaci&oacute;n m&aacute;s), '
      'vale exactamente igual, sumando con signo:</p>')
    A('<table class="tbl">'
      '<tr><th>Corriente</th><th style="text-align:right">Con V<sub>1</sub> sola</th>'
      '<th style="text-align:right">Con V<sub>2</sub> sola</th><th style="text-align:right">Suma</th>'
      '<th style="text-align:right">Punto 3</th></tr>'
      '<tr><td>I<sub>1</sub> (A&rarr;B)</td><td class="num">+5/22 = 227,27 mA</td>'
      '<td class="num">&minus;3/11 = &minus;272,73 mA</td><td class="num"><b>&minus;1/22 = &minus;45,45 mA</b></td>'
      '<td class="num si">&#10003;</td></tr>'
      '<tr><td>I<sub>2</sub> (C&rarr;B)</td><td class="num">&minus;3/22 = &minus;136,36 mA</td>'
      '<td class="num">+4/11 = 363,64 mA</td><td class="num"><b>+5/22 = 227,27 mA</b></td>'
      '<td class="num si">&#10003;</td></tr>'
      '<tr><td>I<sub>3</sub> (B&rarr;D)</td><td class="num">+1/11 = 90,91 mA</td>'
      '<td class="num">+1/11 = 90,91 mA</td><td class="num"><b>+2/11 = 181,82 mA</b></td>'
      '<td class="num si">&#10003;</td></tr>'
      '</table>')
    A('<p class="muted">Ejemplo de lectura de la primera fila: con V<sub>2</sub> apagada, V<sub>1</sub> empuja '
      '5/(10+12) = 227,27 mA de A hacia B; con V<sub>1</sub> apagada, A queda a 0 V y B a 2,7273 V, as&iacute; que por '
      'R<sub>1</sub> vuelven (0 &minus; 2,7273)/10 = &minus;272,73 mA. La suma es la corriente real.</p>')

    A('<div class="box trap"><div class="bt">D&oacute;nde deja de valer</div>'
      'Superposici&oacute;n sirve para <b>tensiones y corrientes</b>, que son lineales en las fuentes. '
      '<b>No sirve para potencia</b>, que es cuadr&aacute;tica: '
      'P = (V&#8242;+V&#8243;)&sup2;/R = V&#8242;&sup2;/R + V&#8243;&sup2;/R + 2V&#8242;V&#8243;/R, y ese '
      '&uacute;ltimo t&eacute;rmino cruzado no aparece en ninguna de las dos cuentas parciales. '
      'Ac&aacute; se ve claro en R<sub>3</sub>: sumando potencias parciales dar&iacute;a '
      '2&times;(2,7273&sup2;/30) = 496 mW, y la potencia real es 5,4545&sup2;/30 = <b>992 mW</b>, el doble. '
      '<br><br>Y ojo con las <b>fuentes dependientes</b>: superposici&oacute;n <b>s&iacute;</b> vale en un circuito que las tenga, pero <b>no se apagan nunca</b> &mdash; se apagan de a una solamente las <b>independientes</b>, y la dependiente se deja en su lugar en cada subcircuito, porque su valor no es una causa externa sino que depende del propio circuito. Lo que rompe el m&eacute;todo de verdad es la <b>no linealidad</b>: con un diodo o un transistor en el medio, no se aplica.</div>')

    # ---------------- para pensar ----------------
    A('<h2><span class="n">5</span> Para pensar: los tres circuitos de abajo</h2>')
    A('<p>Las dos preguntas eran: <i>&iquest;qu&eacute; n&uacute;mero lleva cada resistencia y d&oacute;nde se ubican '
      'A, B, C y D?</i> y <i>&iquest;con cu&aacute;l no se pudo encontrar la equivalencia?</i></p>')

    A('<div class="box key"><div class="bt">El m&eacute;todo: no mires el dibujo, mir&aacute; el grafo</div>'
      'Dos circuitos son el mismo si <b>cada componente une el mismo par de nodos</b>, sin importar c&oacute;mo '
      'est&eacute;n acomodados en la hoja. El procedimiento es siempre el mismo:'
      '<ol style="margin-bottom:0">'
      '<li><b>Marc&aacute; los nodos.</b> Todo tramo de cable continuo, sin componentes en el medio, es <b>un solo '
      'nodo</b> &mdash; aunque en el dibujo mida 15 cm y d&eacute; tres vueltas. Los rieles largos son el caso '
      't&iacute;pico.</li>'
      '<li><b>Escrib&iacute; el netlist</b>: una l&iacute;nea por componente, &ldquo;qu&eacute; une con qu&eacute;&rdquo;.</li>'
      '<li><b>Cont&aacute; el grado de cada nodo</b> y de qu&eacute; tipo son los componentes que lo tocan. Esa es la '
      '&ldquo;huella digital&rdquo; del circuito.</li></ol></div>')

    A('<p>El circuito del enunciado, escrito as&iacute;, es: '
      '<b>V<sub>1</sub>(D&ndash;A), R<sub>1</sub>(A&ndash;B), R<sub>3</sub>(B&ndash;D), R<sub>2</sub>(B&ndash;C), '
      'V<sub>2</sub>(C&ndash;D)</b>. Y su huella digital es f&aacute;cil de recordar:</p>')
    A('<table class="tbl">'
      '<tr><th>Nodo</th><th>Cu&aacute;ntos componentes toca</th><th>De qu&eacute; tipo</th></tr>'
      '<tr><td><b>B</b></td><td class="c">3</td><td><b>tres resistores y ninguna fuente</b></td></tr>'
      '<tr><td><b>D</b></td><td class="c">3</td><td><b>las dos fuentes y un solo resistor</b></td></tr>'
      '<tr><td>A</td><td class="c">2</td><td>un resistor y una fuente</td></tr>'
      '<tr><td>C</td><td class="c">2</td><td>un resistor y una fuente</td></tr>'
      '</table>')
    A('<p>Con eso alcanza: si un circuito no tiene un nodo que toque tres resistores, ya no puede ser el del enunciado.</p>')

    A('<h3>Circuito 1 (el de la izquierda) &mdash; <span class="si">s&iacute; es equivalente</span></h3>')
    A(fig("FIG_C1",
          "Tres ramas en paralelo entre los dos rieles. La rama que tiene <b>s&oacute;lo un resistor es "
          "R<sub>3</sub></b>; en las otras dos, el resistor de arriba es R<sub>1</sub> o R<sub>2</sub> y el punto "
          "entre el resistor y su fuente es <b>A</b> o <b>C</b>. Da igual cu&aacute;l de las dos ramas llames 1 y "
          "cu&aacute;l 2, mientras el resistor y la fuente de una misma rama lleven el mismo n&uacute;mero.",
          "narrow"))
    A('<p><b>Netlist:</b> R<sub>3</sub>(B&ndash;D), R<sub>1</sub>(B&ndash;A), V<sub>1</sub>(A&ndash;D), '
      'R<sub>2</sub>(B&ndash;C), V<sub>2</sub>(C&ndash;D). Es el mismo de arriba. '
      'El nodo superior toca tres resistores &#10003; y el inferior las dos fuentes y R<sub>3</sub> &#10003;. '
      'Adem&aacute;s la polaridad coincide: las dos bater&iacute;as tienen el <b>+</b> hacia arriba, o sea hacia A y '
      'hacia C, igual que en el enunciado.</p>')

    A('<h3>Circuito 3 (el de la derecha) &mdash; <span class="si">s&iacute; es equivalente</span></h3>')
    A(fig("FIG_C3",
          "Ac&aacute; el nodo <b>B</b> es el punto donde se juntan los pies de los dos resistores de arriba y la "
          "cabeza del que baja: por eso toca tres resistores. Los dos de arriba son R<sub>1</sub> y R<sub>2</sub>, "
          "el que baja al riel es R<sub>3</sub>, y <b>A</b> y <b>C</b> son las esquinas de arriba, sobre cada "
          "fuente. El riel de abajo es <b>D</b>.", "narrow"))
    A('<p><b>Netlist:</b> V<sub>1</sub>(D&ndash;A), R<sub>1</sub>(A&ndash;B), R<sub>3</sub>(B&ndash;D), '
      'R<sub>2</sub>(B&ndash;C), V<sub>2</sub>(C&ndash;D). Es exactamente el del enunciado, s&oacute;lo que dibujado '
      'con los resistores verticales en vez de horizontales.</p>')

    A('<h3>Circuito 2 (el del centro) &mdash; <span class="no">con este no se pudo</span></h3>')
    A(fig("FIG_C2",
          "El que rompe la equivalencia. Ac&aacute; <b>la segunda fuente cuelga del nodo del medio</b> y el tercer "
          "resistor cuelga del nodo de la derecha: los dos est&aacute;n intercambiados respecto del enunciado.",
          "narrow"))
    A('<p><b>Netlist:</b> V<sub>?</sub>(riel&ndash;izq), R<sub>?</sub>(izq&ndash;medio), '
      '<b>V<sub>?</sub>(medio&ndash;riel)</b>, R<sub>?</sub>(medio&ndash;der), R<sub>?</sub>(der&ndash;riel). '
      'Comparando la huella digital:</p>')
    A('<table class="tbl">'
      '<tr><th>Nodo</th><th>Qu&eacute; toca en el circuito 2</th><th>Qu&eacute; tendr&iacute;a que tocar</th></tr>'
      '<tr><td>del medio</td><td class="no">2 resistores + 1 fuente</td><td>el nodo B toca <b>3 resistores</b></td></tr>'
      '<tr><td>de la derecha</td><td class="no">2 resistores, ninguna fuente</td>'
      '<td>el nodo C toca 1 resistor + 1 fuente</td></tr>'
      '</table>')
    A('<p><b>No hay ninguna asignaci&oacute;n de n&uacute;meros que lo arregle</b>, porque el problema no es c&oacute;mo '
      'se llaman los componentes sino c&oacute;mo est&aacute;n conectados: en este circuito <b>ning&uacute;n</b> nodo '
      'toca tres resistores, y en el del enunciado hay uno que s&iacute;.</p>')
    A('<div class="box trap"><div class="bt">Y la consecuencia el&eacute;ctrica, que es lo importante</div>'
      'En el circuito 2, la fuente del medio est&aacute; <b>directamente</b> entre ese nodo y el riel de referencia. '
      'Una fuente ideal impone su tensi&oacute;n pase lo que pase, as&iacute; que ah&iacute; '
      '<b>V<sub>medio</sub> = V<sub>2</sub> = 10 V fijos</b>, sin importar cu&aacute;nto valgan las tres resistencias. '
      'En el circuito del enunciado, en cambio, V<sub>BD</sub> = 5,45 V <b>depende de las tres</b>. '
      'Son dos circuitos que se comportan distinto, no dos dibujos del mismo.</div>')

    A('<div class="nb"><h4>C&oacute;mo se arreglar&iacute;a</h4>')
    A('<p>Alcanza con <b>intercambiar la fuente del medio con el resistor de la derecha</b>: que del nodo del medio '
      'cuelgue el resistor (R<sub>3</sub>) y que la fuente (V<sub>2</sub>) quede al final de la rama derecha.</p>')
    A(fig("FIG_C2FIX",
          "El circuito 2 corregido. Con R<sub>3</sub> colgando de B y V<sub>2</sub> cerrando la rama derecha, el "
          "netlist vuelve a ser el del enunciado. En verde, las dos ramas que se intercambiaron.", "narrow"))
    A('</div>')

    # ---------------- chuleta ----------------
    A('<h2><span class="n">6</span> Chuleta para el parcial</h2>')
    A('<table class="tbl">'
      '<tr><th style="width:31%">Si te piden&hellip;</th><th>Hac&eacute;s&hellip;</th></tr>'
      '<tr><td><b>La tensi&oacute;n de un solo nodo</b> del que salen ramas a potenciales conocidos</td>'
      '<td><b>Millman</b> directo: V = &Sigma;(V<sub>k</sub>/R<sub>k</sub>) / &Sigma;(1/R<sub>k</sub>). '
      'Una l&iacute;nea, sin sistema.</td></tr>'
      '<tr><td><b>Plantear las mallas</b> (te piden el m&eacute;todo, no s&oacute;lo el n&uacute;mero)</td>'
      '<td>Una LKV por malla recorrida en el sentido de su corriente, y tantas LKC como hagan falta para '
      'que el n&uacute;mero de ecuaciones iguale al de inc&oacute;gnitas. '
      'Ac&aacute;, con 3 corrientes inc&oacute;gnita: 2 LKV + 1 LKC.</td></tr>'
      '<tr><td><b>Superposici&oacute;n</b></td><td>Fuente de tensi&oacute;n apagada &rarr; <b>cortocircuito</b>. '
      'Fuente de corriente apagada &rarr; <b>circuito abierto</b>. <b>Redibuj&aacute;</b>, resolv&eacute; el divisor, '
      'sum&aacute; con signo.</td></tr>'
      '<tr><td><b>Verificar</b> sin que te lo pidan</td><td>Balance de potencias: &Sigma;I&sup2;R de los resistores = '
      '&Sigma;V&middot;I de las fuentes. Cierra o no cierra, no hay grises.</td></tr>'
      '<tr><td><b>Si dos circuitos son el mismo</b></td><td>Netlist de los dos y comparar el grado y el tipo de '
      'componentes de cada nodo. El dibujo miente, el netlist no.</td></tr>'
      '</table>')

    A('<div class="box ok"><div class="bt">Los cuatro n&uacute;meros de este ejercicio</div>'
      '<b>V<sub>BD</sub> = 60/11 V = 5,45 V</b> &nbsp;&middot;&nbsp; '
      'I<sub>1</sub> = &minus;45,45 mA (va de B a A) &nbsp;&middot;&nbsp; '
      'I<sub>2</sub> = 227,27 mA &nbsp;&middot;&nbsp; I<sub>3</sub> = 181,82 mA. '
      'Por superposici&oacute;n: 2,7273 V + 2,7273 V, iguales porque V<sub>1</sub>/R<sub>1</sub> = '
      'V<sub>2</sub>/R<sub>2</sub> = 0,5 A.</div>')

    A('<div class="foot">Gu&iacute;as UBA XXI / FIUBA &mdash; Introducci&oacute;n a la Bioingenier&iacute;a (TB157) &middot; '
      'C&aacute;tedra Veiga &middot; Ficha &ldquo;Circuitos con m&uacute;ltiples fuentes, superposici&oacute;n&rdquo;. '
      'La teor&iacute;a completa de superposici&oacute;n est&aacute; en la secci&oacute;n 6 de la gu&iacute;a de la materia.</div>')

    return ('<!doctype html><html lang="es"><head><meta charset="utf-8">'
            '<title>Circuitos con dos fuentes y superposici&oacute;n &mdash; tensi&oacute;n del nodo B</title>'
            '<style>%s</style></head><body>%s</body></html>' % (CSS, "".join(H)))


if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "documento.html"
    io.open(out, "w", encoding="utf-8").write(build())
    print("escrito", out)
