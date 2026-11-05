// ==========================================================================
// QUÍMICA BÁSICA (CB040) · FIUBA · cátedra Boeykens
// EVALUACIÓN INTEGRADORA · depende de la guía completa 'fiuba-quimica'.
// Notación: Unicode + HTML. Sin MathJax.
// ==========================================================================

/* ============ SECCIÓN 1 · Cómo es la integradora ============ */

registerExercises('fiuba-quimica-integradora', '1', [

  {st: 'Una integradora con el formato de las últimas cuatro (Parte A de 40, Parte B de 60). Sacás 40 de 40 en la Parte A y 30 de 60 en la Parte B. ¿Aprobaste?',
   opts: ['Sí: 70 supera los 60 puntos', 'Sí, porque la Parte A completa compensa a la B', 'No: la Parte B no llega a 36, que es su 60 %', 'No: hace falta el 70 % del total'],
   c: 2,
   ex: 'La regla del campus pide el <b>60 % de cada Parte</b>: 24 de 40 y <b>36 de 60</b>. Con 30 en la Parte B el examen está <b>desaprobado</b> aunque el total sea 70. → “70 supera 60” mira el total, que no es la condición. → Las Partes no se compensan: cada una tiene su piso. → No hay ninguna condición del 70 % del total.'},

  {st: 'Mismo formato. Sacás 22 de 22 en el Ejercicio 1, 8 de 18 en el Ejercicio 2 y 50 de 60 en la Parte B. Son 80 puntos. ¿Aprobaste?',
   opts: ['No: el Ejercicio 2 no llega a 9, la mitad de 18', 'Sí: las dos Partes superan su 60 %', 'Sí: 80 es mucho más que 60', 'No: la Parte A no llega a su 60 %'],
   c: 0,
   ex: 'Además del 60 % de cada Parte hace falta <b>el 50 % de cada ejercicio</b>. El Ejercicio 2 vale 18 y su mitad es 9: con 8 está <b>desaprobado</b>. → Es cierto que las dos Partes superan su piso (30 ≥ 24 y 50 ≥ 36), pero falta la tercera condición. → El total no decide nada por sí solo. → La Parte A suma 30, que sí supera los 24.'},

  {st: 'La 1ª fecha es el jueves 10/12/26 a las 15 h. Según el campus, la inscripción en el SIU abre 7 días antes y cierra 48 horas antes. ¿Cuál es el último día para anotarse?',
   opts: ['El miércoles 09/12, el día anterior', 'El jueves 03/12, una semana antes', 'El lunes 07/12', 'El martes 08/12'],
   c: 3,
   ex: '48 horas antes del jueves a las 15 h es el <b>martes 08/12 a las 15 h</b>. → El miércoles ya es tarde: faltan 24 h, no 48. → El jueves 03/12 es cuando <b>abre</b>, no cuando cierra. → El lunes es un día de más: el plazo llega hasta el martes. El horario exacto lo muestra el SIU.'},

  {st: 'La Parte B trae seis V/F de 10 puntos. Si cada uno se corrigiera todo o nada, ¿cuántos bien justificados necesitás como mínimo para llegar al piso del 60 % de la Parte B?',
   opts: ['3, porque es la mitad', '4, porque el piso es 36 de 60', '5, porque hay que pasar el 70 %', 'Los 6: la Parte B no admite errores'],
   c: 1,
   ex: 'El piso de la Parte B es el 60 % de 60, <b>36 puntos</b>: con V/F enteros de 10, hacen falta <b>4</b> (40). → Con 3 llegás a 30: desaprobado, aunque sea “la mitad”, porque el piso es 60 %, no 50 %. → No hay piso del 70 %. → Se pueden perder dos. <span class="muted">Si hay puntaje parcial por V/F no está publicado.</span>'},

  {st: 'Tu nota de cursada es 8 y en la integradora sacás 6. ¿Qué nota va al SIU?',
   opts: ['6: la de la integradora reemplaza a la de cursada', '8: se toma la mejor de las dos', '7: el promedio entre las dos', '14: se suman'],
   c: 2,
   ex: 'El reglamento 2026: “<i>La nota de aprobación de la asignatura que se subirá al SIU será la que resulte del promedio entre la nota de la cursada y la de la EI</i>”: (8 + 6)/2 = <b>7</b>. La hoja del examen trae los dos casilleros, “Nota Cursada” y “Nota SIU”. → La integradora no reemplaza ni se elige la mejor. → Sumarlas no da una nota de 1 a 10.'},

  {st: 'Aprobás la cursada en diciembre de 2026 y desaprobás la integradora el 10/12/26 y el 17/12/26. ¿Qué te queda?',
   opts: ['Una oportunidad más, dentro del año desde que aprobaste la cursada; si la desaprobás, 2 y a recursar', 'Tres oportunidades más, porque se reinician en cada período', 'Ninguna: dos desaprobadas vencen la cursada', 'Oportunidades ilimitadas mientras no pase el año'],
   c: 0,
   ex: 'Son <b>3 oportunidades</b> en total, y la cursada vence pasadas las tres <b>o</b> pasado un año de aprobada. Te queda <b>una</b>; si la desaprobás, se asienta un <b>2</b> y hay que recursar. → No se reinician por período. → Con dos desaprobadas todavía no venció. → El límite son las dos cosas a la vez: tres intentos y un año.'},

  {st: '¿Qué regla de aprobación publica el campus para la integradora?',
   opts: ['60/100 en total y el 50 % de cada ejercicio, como imprimía la del 11/07/24', 'El 50 % de cada Parte y el 60 % de cada ejercicio', '60/100 en total, sin otra condición', 'El 60 % de cada Parte y, además, el 50 % de cada ejercicio'],
   c: 3,
   ex: 'El campus: obtener <b>el 60 % del puntaje de cada Parte</b> y <b>al menos el 50 % de cada ejercicio</b>, y “<i>si no cumple AMBAS condiciones el examen estará desaprobado</i>”. → La versión del 11/07/24 es la vieja, menos exigente: con ella un 40 + 30 aprobaba. → Los porcentajes están invertidos en la segunda. → 60/100 a secas no es la regla en ninguna versión.'},

  {st: 'De estas cosas, ¿cuál <b>no</b> figura en lo que se ve del enunciado de la integradora “A”, que es de electrólisis?',
   opts: ['R, en sus tres unidades', 'F = 96 500 C/mol', 'Los potenciales E° del cobre, del níquel y del agua', 'La densidad del cobre'],
   c: 1,
   ex: 'El encabezado de la “A” trae sólo R, y los datos del ejercicio traen ρ<sub>cobre</sub> y cuatro E°: <b>F no aparece</b>. Hay que saberla: <b>96 500 C/mol</b>. Las del 11/07/24 y del 06/02/25 sí la imprimen. → R está en el encabezado de las cinco. → Los E° y la densidad son datos del propio ejercicio.'},

]);

/* ============ SECCIÓN 2 · Qué cae ============ */

registerExercises('fiuba-quimica-integradora', '2', [

  {st: '¿En cuántas de las cinco integradoras conocidas hay electroquímica en algún lugar del examen?',
   opts: ['En 2: las dos del campus', 'En las 5: es la Parte A de 4 y un V/F en la otra', 'En 4: siempre en la Parte A', 'En 3, todas de 2025'],
   c: 1,
   ex: 'Ejercicio de la Parte A en la del 11/07/24 (pila), el 06/02/25 (galvanizado), la “A” (cobreado) y la “B” (pila Zn | Ag); en la del 18/07/24 aparece como V/F (el cobreado electrolítico). <b>Está en las cinco.</b> → Las del campus son la del 11/07/24 y la del 18/07/24: sólo una tiene electroquímica en la Parte A. → En la Parte A está en 4, pero en la quinta aparece igual. → Las de 2025 son una sola fechada (06/02/25).'},

  {st: '¿Cuál es el esqueleto de la Parte A en cuatro de las cinco?',
   opts: ['Estequiometría y ácido-base, como el parcial', 'Dos ejercicios de electroquímica', 'Un ejercicio de líquidos y uno de equilibrio químico', 'Un ejercicio de electroquímica y uno que tiene termodinámica'],
   c: 3,
   ex: '11/07/24: pila + termita (Hess y temperatura de cruce). 06/02/25: galvanizado + calorimetría. “A”: cobreado + bomba calorimétrica. “B”: Haber con espontaneidad + pila. <b>Electroquímica + termodinámica.</b> → Estequiometría y ácido-base es el parcial; en la integradora aparecen como ítems. → Nunca hubo dos de electroquímica. → Líquido-vapor salió una vez (18/07/24) y equilibrio químico nunca fue ejercicio de la Parte A.'},

  {st: '¿Qué temas aparecen en la Parte B de las cinco integradoras?',
   opts: ['Ácido-base, y líquidos o diagrama de fases', 'Electroquímica y segundo principio', 'Sólidos y estructura atómica', 'Equilibrio químico y soluciones'],
   c: 0,
   ex: 'Cada una de las cinco Partes B tiene al menos un V/F de <b>ácido-base</b> y al menos uno de <b>líquidos, fuerzas intermoleculares o diagrama de fases</b>. → Electroquímica y segundo principio están en tres Partes B cada uno (los dos están en las cinco integradoras, pero contando también la Parte A). → Estructura atómica está en tres y sólidos en dos. → Equilibrio químico en dos y soluciones en una.'},

  {st: 'Los 30 V/F reales dan 32 juicios (el 3 de la “B” son tres). ¿Cuántos son falsos?',
   opts: ['16, la mitad', '9', '23: casi tres de cada cuatro', '30: casi todos'],
   c: 2,
   ex: '<b>23 falsos y 9 verdaderos</b>, contando como verdadero el f del 18/07/24, el único cuya respuesta se discute. La del 11/07/24 tuvo los seis falsos; la del 18/07/24, tres verdaderos; las otras tres, dos cada una. → 9 son los verdaderos. → La mitad sería un reparto parejo, que no es el caso. → 30 exagera. No lo uses para adivinar: avisa que los enunciados están escritos para atrapar una creencia común.'},

  {st: 'Estructura atómica, sólidos, hibridación y equilibrio químico, ¿cómo aparecieron en las cinco integradoras?',
   opts: ['Como ejercicios numéricos de la Parte A', 'Sólo como V/F de la Parte B: 10 de los 30', 'No aparecieron nunca', 'Sólo en las dos del campus'],
   c: 1,
   ex: 'Ninguno de los cuatro fue un ítem de la Parte A, y entre los cuatro suman <b>10 de los 30 V/F</b> (3 + 3 + 2 + 2). Se estudian para justificar, no para calcular. → No hubo ejercicio numérico de ninguno. → Aparecieron, y mucho. → Están también en las tres que circulan fuera del campus.'},

  {st: '¿Por qué la integradora del 18/07/24 se sale del molde?',
   opts: ['Porque no tuvo Parte B', 'Porque su Parte A valió 52', 'Porque tuvo tres ejercicios en la Parte A', 'Porque su Parte A fue líquido-vapor y neutralización, sin electroquímica ni termodinámica'],
   c: 3,
   ex: 'Su Parte A fueron dos temas del parcial: el <b>benceno en equilibrio líquido-vapor</b> y una <b>neutralización</b>. Lo de la segunda mitad de la materia vino en la Parte B (el cobreado y el ΔS°). → Tuvo Parte B, de 60. → La de 52 fue la del 11/07/24. → Tuvo dos ejercicios, como todas.'},

  {st: '¿Por qué los puntos de la Parte A por tema se cuentan sobre 132 y no sobre 200?',
   opts: ['Porque sólo tres de las cinco tienen grilla por ítem: 52 + 40 + 40', 'Porque la Parte A vale siempre 44 puntos', 'Porque se descartan los ítems conceptuales', 'Porque las de Studocu están incompletas y no se cuentan nunca'],
   c: 0,
   ex: 'Las de Studocu (“A” y “B”) no muestran la grilla por ítem: se sabe que la Parte A vale 40, no cuánto cada ejercicio. Por eso los <b>puntos</b> se cuentan sobre las tres con grilla (52 + 40 + 40 = 132) y la <b>presencia</b>, sobre las cinco. → La Parte A vale 52 o 40, nunca 44. → Los ítems conceptuales de la Parte A sí se cuentan (diagrama, justificaciones). → Las de Studocu se cuentan en la presencia.'},

  {st: '¿De dónde salen los V/F de la Parte B?',
   opts: ['De los ejercicios de las guías de problemas', 'De libros de texto, sin relación con el material de la cátedra', 'Cada uno se apoya en al menos una de las 185 preguntas conceptuales de la cátedra', 'De los parciales del mismo cuatrimestre'],
   c: 2,
   ex: 'Los 30 se pueden mapear contra la <b>guía de 185 preguntas conceptuales</b> que publica la cátedra, y en varios casos la pregunta es el V/F con otras palabras (Uniones 18 y los “infinitos puntos de fusión”, Estructura atómica 11 y las isoelectrónicas). → Las guías de problemas son de cuentas. → Hay relación directa con el material de la cátedra. → Los parciales no traen V/F.'},

]);

/* ============ SECCIÓN 3 · Parte A · electroquímica ============ */

registerExercises('fiuba-quimica-integradora', '3', [

  {st: 'En una celda electrolítica, ¿qué es el ánodo?',
   opts: ['El polo positivo, donde ocurre la oxidación', 'El polo negativo, donde ocurre la oxidación', 'El polo positivo, donde ocurre la reducción', 'El polo negativo, donde ocurre la reducción'],
   c: 0,
   ex: 'En el ánodo hay <b>oxidación</b> siempre, en pilas y en electrólisis. Lo que cambia es el signo: en la electrólisis el ánodo está conectado al <b>positivo</b> de la fuente, que le saca los electrones. → “Negativo y oxidación” es el ánodo de una <b>pila</b>. → La reducción es siempre en el cátodo, así que las dos opciones con reducción están mal por el rol.'},

  {st: 'Pila Zn(s) | Zn<sup>2+</sup> (1,0 M) ‖ Cu<sup>2+</sup> (0,10 M) | Cu(s) a 25 °C, con E° = 1,10 V. ¿Cuánto vale E?',
   opts: ['1,1296 V', '1,10 V', '1,0704 V', '1,0408 V'],
   c: 2,
   ex: 'Global: Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu, n = 2, Q = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>] = 1,0/0,10 = 10 → E = 1,10 − 0,0296 × log 10 = <b>1,0704 V</b>. Tiene sentido: el reactivo está diluido, así que E &lt; E°. → 1,1296 V invierte Q. → 1,10 V ignora las concentraciones. → 1,0408 V usa n = 1 (0,0592 en vez de 0,0296).'},

  {st: 'Se electroliza una solución acuosa concentrada de NaCl con electrodos inertes. ¿Qué se obtiene, según el criterio de la cátedra?',
   opts: ['Na en el cátodo y Cl<sub>2</sub> en el ánodo', 'H<sub>2</sub> en el cátodo y Cl<sub>2</sub> en el ánodo', 'H<sub>2</sub> en el cátodo y O<sub>2</sub> en el ánodo', 'Na en el cátodo y O<sub>2</sub> en el ánodo'],
   c: 1,
   ex: 'Cátodo: el Na<sup>+</sup> (−2,71 V) no puede contra el agua (−0,83 V), así que se reduce el agua y sale <b>H<sub>2</sub></b>. Ánodo: por los E° ganaría el agua (1,23 &lt; 1,36), pero por el <b>sobrepotencial del O<sub>2</sub></b> se oxida el cloruro y sale <b>Cl<sub>2</sub></b>. Es la excepción que marca el modelo de electrólisis 3 de la cátedra. → El sodio metálico sale sólo del NaCl fundido. → O<sub>2</sub> en el ánodo es lo que diría la tabla de E° sin la excepción.'},

  {st: 'Pasa 1 F (96 500 C) por dos cubas en serie, una de AgNO<sub>3</sub> y una de CuSO<sub>4</sub>. ¿Qué masas se depositan?',
   opts: ['La misma masa en las dos, porque es la misma carga', 'La mitad de plata que de cobre', 'El doble de plata que de cobre, porque la plata es monovalente', '107,87 g de plata y 31,77 g de cobre'],
   c: 3,
   ex: 'La misma carga deposita los mismos <b>moles de electrones</b>, no la misma masa. Ag<sup>+</sup> + e<sup>−</sup>: 1 mol de Ag = <b>107,87 g</b>. Cu<sup>2+</sup> + 2 e<sup>−</sup>: 0,5 mol de Cu = <b>31,77 g</b>. → Masas iguales confunde carga con masa. → Al revés de lo que pasa. → “El doble” mira sólo la valencia: el cociente real es 3,4, porque también cambia la masa molar.'},

  {st: 'Galvanizado con un rendimiento del 85 %: la carga teórica para depositar el zinc pedido es 3,54·10<sup>6</sup> C. ¿Qué carga hay que poner?',
   opts: ['4,17·10<sup>6</sup> C: se divide por 0,85', '3,01·10<sup>6</sup> C: se multiplica por 0,85', '3,54·10<sup>6</sup> C: el rendimiento no afecta la carga', '6,54·10<sup>6</sup> C: se suma el 85 %'],
   c: 0,
   ex: 'Con rendimiento del 85 % sólo el 85 % de la carga deposita zinc: para depositar lo pedido hace falta <b>más</b> carga, 3,54·10<sup>6</sup> / 0,85 = <b>4,17·10<sup>6</sup> C</b> (06/02/25, ítem b). → Multiplicar da menos carga que la teórica: depositarías menos de lo pedido. → El rendimiento justamente dice que no toda la carga sirve. → Sumar un porcentaje a una carga no tiene sentido.'},

  {st: 'Se niquela una pieza (cátodo) en una solución de NiSO<sub>4</sub> con un ánodo de níquel. ¿Qué pasa con la [Ni<sup>2+</sup>] de la solución?',
   opts: ['Baja, porque el Ni<sup>2+</sup> se deposita', 'Sube, porque el ánodo se disuelve', 'Se mantiene: el ánodo repone lo que se deposita', 'Baja a la mitad por cada faraday'],
   c: 2,
   ex: 'Con <b>ánodo activo</b> del mismo metal, en el ánodo Ni → Ni<sup>2+</sup> + 2 e<sup>−</sup> y en el cátodo Ni<sup>2+</sup> + 2 e<sup>−</sup> → Ni: por cada ion que se deposita entra otro, y la concentración <b>no cambia</b>. Es la electrodeposición de cobre de la “A”. → Baja sólo con ánodo inerte, donde se oxida el agua. → Sube sólo si el ánodo aportara más iones de los que se depositan. → La cantidad que cambia depende del volumen y la concentración, no es una regla fija.'},

  {st: 'Pila Cu | Ag con E° = 0,46 V y n = 2. ¿Cuánto vale la constante de equilibrio a 25 °C?',
   opts: ['6·10<sup>7</sup>', '3,5·10<sup>15</sup>', '0,46', '2,9·10<sup>−16</sup>'],
   c: 1,
   ex: 'log K = n·E°/0,0592 = 2 × 0,46 / 0,0592 = 15,54 → <b>K = 3,5·10<sup>15</sup></b>. E° &gt; 0 tiene que dar K &gt; 1. → 6·10<sup>7</sup> sale con n = 1 (log K = 7,77). → 0,46 es el E°, no K. → 2,9·10<sup>−16</sup> es 1/K: el signo del exponente invertido.'},

  {st: 'En la pila Mg | Mg<sup>2+</sup> ‖ H<sup>+</sup> | H<sub>2</sub> | Pt del 11/07/24, se quiere aumentar el potencial cambiando el pH del cátodo. ¿Qué hay que hacer?',
   opts: ['Subir el pH, porque los OH<sup>−</sup> favorecen la reducción', 'Nada: el H<sup>+</sup> no aparece en Q', 'Subir el pH, porque baja Q', 'Bajar el pH: sube [H<sup>+</sup>], baja Q y sube E, unos 59 mV por unidad'],
   c: 3,
   ex: 'Q = [Mg<sup>2+</sup>]·p(H<sub>2</sub>)/[H<sup>+</sup>]<sup>2</sup>: el H<sup>+</sup> está <b>abajo y al cuadrado</b>. Bajar el pH sube [H<sup>+</sup>], baja Q y sube E. Con n = 2 y el cuadrado, cada unidad de pH mueve 2 × 0,0296 = <b>59,2 mV</b>. → Subir el pH baja [H<sup>+</sup>] y sube Q: E baja. → El H<sup>+</sup> sí está en Q, es el reactivo del cátodo.'},

  {st: 'Hay que depositar 2,673 g de níquel con 2,5 A y una eficiencia del 92 %. ¿Cuánto tarda?',
   opts: ['63,7 min', '53,9 min', '58,6 min', '127,4 min'],
   c: 0,
   ex: 'n(Ni) = 2,673/58,69 = 0,04554 mol → n(e<sup>−</sup>) = 0,09109 mol → Q teórica = 8790 C → con el 92 %, Q real = 8790/0,92 = 9554 C → t = 9554/2,5 = 3822 s = <b>63,7 min</b>. → 53,9 min multiplica por 0,92 en vez de dividir. → 58,6 min ignora la eficiencia. → 127,4 min cuenta 4 electrones por níquel.'},

  {st: 'Se deposita cobre desde CuSO<sub>4</sub> con ánodo inerte (en el ánodo se oxida el agua). ¿Cuál es la tensión mínima teórica que tiene que dar la fuente, sin sobrepotenciales?',
   opts: ['0,34 V', '1,57 V', '0,89 V', '2,06 V'],
   c: 2,
   ex: 'Se oxida el agua (O<sub>2</sub>/H<sub>2</sub>O, 1,23 V) y se reduce el Cu<sup>2+</sup> (0,34 V): la fuente tiene que vencer 1,23 − 0,34 = <b>0,89 V</b>. → 0,34 V es sólo el E° del cobre. → 1,57 V suma los dos potenciales en vez de restarlos. → 2,06 V es la de electrolizar agua (1,23 − (−0,83)), cuando en el cátodo se reduce el agua y no el cobre.'},

]);

registerReveals('fiuba-quimica-integradora', '3', [

  {st: '<b>Ejercicio propio 1 · Pila con Nernst.</b> <span class="muted">No es de la cátedra.</span><br><br>A 25 °C se arma la pila Cu(s) | Cu<sup>2+</sup> (0,10 M) ‖ Ag<sup>+</sup> (0,010 M) | Ag(s). Datos: E°(Cu<sup>2+</sup>/Cu) = 0,34 V; E°(Ag<sup>+</sup>/Ag) = 0,80 V.<br>a) Escribir las reacciones anódica, catódica y global, y calcular E° y E.<br>b) Calcular ΔG° y la constante de equilibrio.<br>c) Si el cátodo aumenta su masa en 1,079 g, ¿cuánta masa pierde el ánodo y qué carga circuló?',
   ans: 'a) E° = 0,46 V, E = 0,371 V · b) ΔG° = −88,8 kJ, K = 3,5·10<sup>15</sup> · c) el ánodo pierde 0,318 g de Cu; circularon 965 C',
   sol: '<pre class="code-block">a) Ánodo (−):   Cu(s) → Cu2+ + 2 e−<br>   Cátodo (+):  Ag+ + e− → Ag(s)            (× 2)<br>   Global:      Cu(s) + 2 Ag+ → Cu2+ + 2 Ag(s)      n = 2<br>   E° = 0,80 − 0,34 = 0,46 V<br>   Q = [Cu2+] / [Ag+]² = 0,10 / 0,010² = 1000<br>   E = 0,46 − 0,0296 × log 1000 = 0,46 − 0,0888 = 0,371 V<br><br>b) ΔG° = −2 × 96 500 × 0,46 = −88 780 J ≈ −88,8 kJ<br>   log K = 2 × 0,46 / 0,0592 = 15,54  →  K ≈ 3,5·10¹⁵<br><br>c) n(Ag) = 1,079 / 107,87 = 0,01000 mol = n(e−)<br>   n(Cu) = 0,01000 / 2 = 0,00500 mol → 0,00500 × 63,55 = 0,318 g<br>   carga = 0,01000 × 96 500 = 965 C</pre>Se reduce el par de mayor E° (plata) y se oxida el de menor (cobre). E &lt; E° porque el reactivo Ag<sup>+</sup> está muy diluido y además va al cuadrado. En c), por cada Cu que se disuelve se depositan <b>dos</b> Ag: con la misma masa en los dos electrodos estarías suponiendo un átomo por átomo. <span class="muted">Como control: la pila deja de andar (E = 0) cuando la [Ag<sup>+</sup>] baja a unos 5·10<sup>−9</sup> M con [Cu<sup>2+</sup>] = 0,10 M, o sea cuando Q = K.</span>'},

  {st: '<b>Ejercicio propio 2 · Electrólisis de NaCl acuoso.</b> <span class="muted">No es de la cátedra.</span><br><br>Se electrolizan 2,00 L de NaCl 2,0 M con electrodos inertes, con una corriente de 5,0 A durante 2,0 h y rendimiento del 100 %. Datos: E°(Na<sup>+</sup>/Na) = −2,71 V; E°(H<sub>2</sub>O/H<sub>2</sub>) = −0,83 V; E°(O<sub>2</sub>/H<sub>2</sub>O) = 1,23 V; E°(Cl<sub>2</sub>/Cl<sup>−</sup>) = 1,36 V.<br>a) Escribir las reacciones anódica, catódica y global, justificando qué se reduce y qué se oxida.<br>b) Calcular el volumen de cada gas a 25 °C y 1 atm.<br>c) Calcular el pH final de la solución, sin cambio de volumen.',
   ans: 'a) Cátodo: H<sub>2</sub>O → H<sub>2</sub> + OH<sup>−</sup>; ánodo: Cl<sup>−</sup> → Cl<sub>2</sub> · b) 4,57 L de H<sub>2</sub> y 4,57 L de Cl<sub>2</sub> · c) pH 13,27',
   sol: '<pre class="code-block">a) Cátodo (−):  2 H2O + 2 e− → H2(g) + 2 OH−<br>   Ánodo (+):   2 Cl− → Cl2(g) + 2 e−<br>   Global:      2 Cl− + 2 H2O → H2 + Cl2 + 2 OH−<br>   Molecular:   2 NaCl + 2 H2O → H2 + Cl2 + 2 NaOH<br><br>b) Q = 5,0 × 7200 = 36 000 C → n(e−) = 36 000 / 96 500 = 0,3731 mol<br>   n(H2) = n(Cl2) = 0,3731 / 2 = 0,1865 mol<br>   V = 0,1865 × 0,0821 × 298,15 / 1,0 = 4,57 L de cada uno<br><br>c) n(OH−) = n(e−) = 0,3731 mol en 2,00 L → [OH−] = 0,1865 M<br>   pOH = 0,73 → pH = 13,27</pre>Justificación de a): en el cátodo el Na<sup>+</sup> (−2,71 V) no le gana al agua (−0,83 V), así que se desprende H<sub>2</sub>. En el ánodo, por los E° se oxidaría el agua (1,23 &lt; 1,36), pero por el <b>sobrepotencial del O<sub>2</sub></b> se oxida el cloruro. Es la pregunta 11 del bloque de Electrólisis de la guía de 185 y el caso del modelo de electrólisis 4 de la cátedra (producción de cloro y soda). A 25 °C no vale 22,4 L/mol: va PV = nRT.'},

  {st: '<b>Ejercicio propio 3 · Niquelado.</b> <span class="muted">No es de la cátedra.</span><br><br>Una pieza de acero de 150 cm<sup>2</sup> se recubre con 20 µm de níquel (ρ = 8,91 g/cm<sup>3</sup>) en un baño de NiSO<sub>4</sub>, con un ánodo de níquel, una corriente de 2,5 A y una eficiencia del 92 %.<br>a) Indicar qué electrodo es la pieza, con su polaridad, y las reacciones en cada electrodo.<br>b) Calcular la masa de níquel a depositar y el tiempo necesario.<br>c) ¿Cambia la concentración de Ni<sup>2+</sup> del baño?',
   ans: 'a) La pieza es el cátodo (−) · b) 2,673 g; 3822 s = 63,7 min · c) No: el ánodo de níquel repone lo que se deposita',
   sol: '<pre class="code-block">a) Cátodo (−), la pieza:  Ni2+ + 2 e− → Ni(s)<br>   Ánodo (+), de níquel:  Ni(s) → Ni2+ + 2 e−<br><br>b) V = 150 cm² × 20·10⁻⁴ cm = 0,300 cm³<br>   m = 0,300 × 8,91 = 2,673 g → n = 2,673 / 58,69 = 0,04554 mol<br>   Q teórica = 2 × 0,04554 × 96 500 = 8790 C<br>   Q real = 8790 / 0,92 = 9554 C<br>   t = 9554 / 2,5 = 3822 s = 63,7 min</pre>Depositar es reducir, y la reducción es en el cátodo: la pieza va al <b>polo negativo</b>. Si fuera el ánodo, se disolvería. La eficiencia <b>divide</b>: multiplicando por 0,92 darías 53,9 min, y la pieza saldría con menos de 20 µm. 20 µm son 20·10<sup>−4</sup> cm: el error de unidades más común es tomar 20·10<sup>−6</sup> cm. En c), como el ánodo es del mismo metal, cada Ni<sup>2+</sup> que se deposita lo repone el ánodo y la concentración no cambia, igual que con las monedas de cobre de la integradora “A”. <span class="muted">Es el modelo ideal que usa la cátedra: con el 92 %, el 8 % de la carga se va en otra reducción (H<sub>2</sub>) mientras el ánodo sigue disolviendo níquel, así que la [Ni<sup>2+</sup>] subiría apenas.</span>'},

  {st: '<b>Ejercicio propio 4 · Rendimiento de una electrólisis.</b> <span class="muted">No es de la cátedra.</span><br><br>Se electroliza una solución de CuSO<sub>4</sub> con 3,0 A durante 40 minutos y se depositan 2,20 g de cobre en el cátodo. ¿Cuál fue el rendimiento de la operación?',
   ans: '92,8 %',
   sol: '<pre class="code-block">Q = 3,0 × 40 × 60 = 7200 C<br>m teórica = 7200 / 96 500 / 2 × 63,55 = 2,371 g<br>rendimiento = 2,20 / 2,371 = 92,8 %</pre>Es la cadena de Faraday recorrida desde la carga hasta la masa, y el rendimiento es real sobre teórico. Es el mismo tipo de ítem que el 9 c) de la guía de problemas G11B (“<i>Determinar el rendimiento de la operación</i>”). Control: tiene que dar menos de 100 %; si da más, dividiste al revés o usaste un electrón por Cu.'},

]);

/* ============ SECCIÓN 4 · Parte A · termodinámica ============ */

registerExercises('fiuba-quimica-integradora', '4', [

  {st: 'En una bomba calorimétrica se quema una muestra y se mide el calor desprendido. ¿Qué magnitud es ese calor?',
   opts: ['ΔH, porque es una combustión', 'ΔU, porque el volumen es constante', 'ΔG, porque la combustión es espontánea', 'El trabajo de expansión de los gases'],
   c: 1,
   ex: 'A volumen constante no hay trabajo de expansión (W = −P·ΔV = 0), así que ΔU = Q + 0: el calor medido es <b>ΔU</b>. Es lo que pide la “A” con el ácido benzoico. → ΔH es el calor a <b>presión</b> constante: hay que corregir con Δn·R·T. → ΔG no se mide como calor. → En la bomba el trabajo es cero.'},

  {st: 'Ácido benzoico: C<sub>7</sub>H<sub>6</sub>O<sub>2</sub>(s) + 15/2 O<sub>2</sub>(g) → 7 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l). Si la combustión ocurre a P y T constantes (25 °C), ¿cuánto vale el trabajo por mol, con la convención de la cátedra?',
   opts: ['−1,24 kJ: el sistema se expande', '0: los sólidos no hacen trabajo', '−6,19 kJ, contando el agua como gas', '+1,24 kJ: los moles de gas bajan y el entorno comprime al sistema'],
   c: 3,
   ex: 'Δn<sub>gas</sub> = 7 − 7,5 = −0,5 → W = −Δn·R·T = −(−0,5)(8,31)(298,15) = <b>+1239 J ≈ +1,24 kJ</b>. Positivo: el sistema <b>recibe</b> trabajo. → −1,24 kJ tiene el signo cambiado: el gas no se expande, se contrae. → Hay cambio de volumen por los gases, aunque el reactivo sea sólido. → Con el agua como gas, Δn = +2,5 y W = −6,19 kJ: el agua sale líquida.'},

  {st: 'Termita (11/07/24): ΔH = −847 kJ/mol y ΔS = −38,52 J/mol·K. ¿Existe alguna temperatura a la que no sea espontánea?',
   opts: ['Sí, por encima de 21 989 K, que es inalcanzable: en la práctica es espontánea a toda temperatura', 'Sí, por encima de 21,99 K: a temperatura ambiente no es espontánea', 'No: con ΔH &lt; 0 es espontánea siempre', 'Sí, por encima de 847 K'],
   c: 0,
   ex: 'Con ΔH &lt; 0 y ΔS &lt; 0, ΔG = 0 en T = 847 000 / 38,52 = <b>21 989 K</b>. Existe en la cuenta y no en la práctica: la respuesta completa dice las dos cosas. → 21,99 K sale de dividir kJ por J: el error de mil. → ΔH &lt; 0 no alcanza: con ΔS &lt; 0, a T suficientemente alta ΔG se vuelve positivo. → 847 K es el valor de ΔH puesto como temperatura.'},

  {st: 'Síntesis del metanol, CO(g) + 2 H<sub>2</sub>(g) → CH<sub>3</sub>OH(g): ΔH° = −90,5 kJ y ΔS° = −219,3 J/K. ¿Cuándo es espontánea en condiciones estándar?',
   opts: ['A cualquier temperatura', 'Sólo por encima de 412,7 K', 'Sólo por debajo de 412,7 K (139,5 °C)', 'Nunca'],
   c: 2,
   ex: 'Los dos negativos: espontánea a <b>baja</b> temperatura, hasta T = 90 500 / 219,3 = <b>412,7 K</b>. A 25 °C, ΔG° = −25,1 kJ; a 250 °C, +24,2 kJ. → “A cualquier temperatura” sería con ΔS &gt; 0. → “Por encima” es el caso de ΔH y ΔS positivos. → “Nunca” sería con ΔH &gt; 0 y ΔS &lt; 0.'},

  {st: '2 C<sub>2</sub>H<sub>6</sub>(g) + 7 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l). ¿Cuánto vale Δn<sub>gas</sub>?',
   opts: ['+1', '−5', '−9', '+3'],
   c: 1,
   ex: 'Gases de productos menos gases de reactivos: 4 − (2 + 7) = <b>−5</b>. El agua es líquida y no cuenta. Por eso en el V/F 2 de la “B” ΔH = ΔU − 5RT. → +1 cuenta el agua como gas (10 − 9). → −9 cuenta sólo los reactivos. → +3 se olvida del etano.'},

  {st: 'La vaporización del agua a 100 °C tiene ΔH = 40,7 kJ/mol. ¿Cuánto vale ΔS de vaporización?',
   opts: ['0,109 J/K·mol', '407 J/K·mol', '−109 J/K·mol', '109 J/K·mol'],
   c: 3,
   ex: 'A la temperatura del cambio de fase el proceso es reversible y ΔS = ΔH/T = 40 700 / 373,15 = <b>109 J/K·mol</b>, positivo porque el gas está más desordenado. → 0,109 deja ΔH en kJ y le pone unidad de J. → 407 divide por 100 °C en vez de 373,15 K. → El signo negativo sería el de la condensación.'},

  {st: 'Una reacción tiene ΔG° = +10 kJ a 25 °C. ¿Qué se puede decir de su constante de equilibrio?',
   opts: ['K = 0,018: menor que 1, el equilibrio favorece a los reactivos', 'K = 56: mayor que 1', 'K = 1: ΔG° no afecta K', 'K es negativa, como ΔG°'],
   c: 0,
   ex: 'ΔG° = −R·T·ln K → K = e<sup>−10 000 / (8,314 × 298,15)</sup> = <b>0,018</b>. ΔG° &gt; 0 ⇔ K &lt; 1. → 56 es 1/K: el signo invertido. → K = 1 corresponde a ΔG° = 0. → K es un cociente de concentraciones o presiones: no puede ser negativa.'},

  {st: 'Síntesis de Haber, ΔH° = −92,4 kJ y ΔS° = −199,0 J/K (integradora “B”). ¿Cuál es la respuesta completa a “en qué condiciones debería llevarse a cabo para que sea espontánea”?',
   opts: ['A alta temperatura, porque acelera la reacción', 'A cualquier temperatura, porque ΔH &lt; 0', 'A baja temperatura (por debajo de 464 K) y a alta presión, que corre el equilibrio hacia el NH<sub>3</sub>', 'Nunca, porque ΔS &lt; 0'],
   c: 2,
   ex: 'Con los dos negativos, ΔG° &lt; 0 si T &lt; 92 400 / 199,0 = <b>464 K</b>. Y como Δn<sub>gas</sub> = −2, la presión alta baja Q y hace ΔG = ΔG° + RT·ln Q más negativo. → La temperatura alta se usa por la velocidad, no por la espontaneidad: a 573 K, ΔG° = +21,7 kJ. → ΔH &lt; 0 no alcanza con ΔS &lt; 0. → ΔS &lt; 0 no impide la espontaneidad a baja T.'},

  {st: 'Termita: Fe<sub>2</sub>O<sub>3</sub>(s) + 2 Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) + 2 Fe(s), con ΔH°<sub>f</sub> Al<sub>2</sub>O<sub>3</sub> = −1668 y Fe<sub>2</sub>O<sub>3</sub> = −821 kJ/mol. ¿ΔH° de la reacción?',
   opts: ['−2489 kJ', '−847 kJ', '+847 kJ', '−1668 kJ'],
   c: 1,
   ex: 'Productos menos reactivos, con los elementos en cero: −1668 − (−821) = <b>−847 kJ</b>. → −2489 suma los dos ΔH°<sub>f</sub> en vez de restarlos. → +847 es reactivos menos productos. → −1668 se olvida del Fe<sub>2</sub>O<sub>3</sub>.'},

  {st: '¿Cuál de estas sustancias tiene ΔH°<sub>f</sub> = 0?',
   opts: ['O<sub>3</sub>(g)', 'Br<sub>2</sub>(g)', 'C(diamante)', 'O<sub>2</sub>(g)'],
   c: 3,
   ex: 'Vale cero la <b>forma más estable del elemento en su estado estándar</b>: el oxígeno como O<sub>2</sub>(g). → El ozono es otra forma del oxígeno, menos estable: ΔH°<sub>f</sub> ≈ +142,7 kJ/mol. → El bromo estándar es líquido; el gas tiene ΔH°<sub>f</sub> &gt; 0. → El carbono estándar es el grafito, no el diamante.'},

]);

registerReveals('fiuba-quimica-integradora', '4', [

  {st: '<b>Ejercicio propio T1 · Síntesis del metanol.</b> <span class="muted">No es de la cátedra; datos de tabla.</span><br><br>CO(g) + 2 H<sub>2</sub>(g) → CH<sub>3</sub>OH(g). Datos a 25 °C: ΔH°<sub>f</sub> (kJ/mol) CO(g) −110,5; CH<sub>3</sub>OH(g) −201,0. S° (J/mol·K) CO(g) 197,7; H<sub>2</sub>(g) 130,7; CH<sub>3</sub>OH(g) 239,8.<br>a) Calcular ΔH° y ΔS°.<br>b) Calcular ΔG° a 25 °C y a 250 °C, y la temperatura a partir de la cual deja de ser espontánea.<br>c) Calcular K a 25 °C.<br>d) Calcular el trabajo y ΔU por mol de metanol si la reacción ocurre a P y T constantes (25 °C).',
   ans: 'a) ΔH° = −90,5 kJ, ΔS° = −219,3 J/K · b) −25,1 kJ y +24,2 kJ; deja de serlo por encima de 412,7 K (139,5 °C) · c) K = 2,5·10<sup>4</sup> · d) W = +4,96 kJ, ΔU = −85,5 kJ',
   sol: '<pre class="code-block">a) ΔH° = −201,0 − (−110,5) = −90,5 kJ          (el H2 tiene ΔH°f = 0)<br>   ΔS° = 239,8 − (197,7 + 2 × 130,7) = −219,3 J/K   (el H2 sí tiene S°)<br><br>b) ΔG°(298 K) = −90 500 − 298,15 × (−219,3) = −25 120 J ≈ −25,1 kJ<br>   ΔG°(523 K) = −90 500 − 523,15 × (−219,3) = +24 230 J ≈ +24,2 kJ<br>   T cruce = 90 500 / 219,3 = 412,7 K = 139,5 °C<br><br>c) K = e^(25 120 / (8,314 × 298,15)) = 2,5·10⁴<br><br>d) Δn(gas) = 1 − 3 = −2<br>   W = −Δn·R·T = −(−2)(8,31)(298,15) = +4955 J ≈ +4,96 kJ<br>   ΔU = ΔH + W = −90,5 + 4,96 = −85,5 kJ</pre>El signo de ΔS° se predice antes de la cuenta: 3 mol de gas dan 1. Con los dos negativos es espontánea a baja temperatura: es la misma forma del Haber de la integradora “B”. El trabajo es positivo porque el volumen baja y el entorno comprime al sistema. Y conecta con el V/F 1 de la “A”: por ser exotérmica, subir la temperatura baja el rendimiento de equilibrio.'},

  {st: '<b>Ejercicio propio T2 · Naftaleno en bomba calorimétrica.</b> <span class="muted">No es de la cátedra.</span><br><br>Se queman por completo 0,640 g de naftaleno, C<sub>10</sub>H<sub>8</sub>(s), en una bomba calorimétrica a 25 °C, y se desprenden 25,7 kJ. El agua se forma líquida.<br>a) Escribir la ecuación de la combustión y calcular ΔU por mol.<br>b) Calcular ΔH de combustión y escribir la ecuación termoquímica.<br>c) Calcular el trabajo por mol si la combustión ocurriera a P y T constantes.',
   ans: 'a) ΔU = −5147 kJ/mol · b) ΔH = −5152 kJ/mol · c) W = +4,96 kJ/mol',
   sol: '<pre class="code-block">C10H8(s) + 12 O2(g) → 10 CO2(g) + 4 H2O(l)      Δn(gas) = 10 − 12 = −2<br>M = 128,16 g/mol → n = 0,640 / 128,16 = 4,994·10⁻³ mol<br><br>a) ΔU = −25,7 kJ / 4,994·10⁻³ mol = −5147 kJ/mol   (volumen constante: q = ΔU)<br>b) ΔH = ΔU + Δn·R·T = −5147 + (−2)(8,31·10⁻³)(298,15) = −5152 kJ/mol<br>   C10H8(s) + 12 O2(g) → 10 CO2(g) + 4 H2O(l)     ΔH°c (25 °C) = −5152 kJ/mol<br>c) W = −Δn·R·T = +4,96 kJ/mol</pre>Es el Ejercicio 2 de la integradora “A” con otro combustible. Lo que se cobra: <b>en la bomba se mide ΔU</b>, Δn cuenta sólo los gases (el naftaleno es sólido y el agua líquida), y el trabajo es positivo porque baja el número de moles de gas.'},

  {st: '<b>Ejercicio propio T3 · Calcinación de la caliza.</b> <span class="muted">No es de la cátedra; datos de tabla.</span><br><br>CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g). Datos: ΔH°<sub>f</sub> (kJ/mol) CaCO<sub>3</sub> −1206,9; CaO −635,1; CO<sub>2</sub> −393,5. S° (J/mol·K) CaCO<sub>3</sub> 92,9; CaO 39,8; CO<sub>2</sub> 213,7.<br>a) Calcular el calor necesario para calcinar 1,00 kg de caliza con 90 % de CaCO<sub>3</sub>, y la masa de CaO que se obtiene.<br>b) ¿Es espontánea a 25 °C? ¿Desde qué temperatura lo es? ¿Lo es en un horno a 900 °C?',
   ans: 'a) 1603 kJ; 504 g de CaO · b) No (ΔG° = +130,4 kJ); desde 1110 K (837 °C); a 900 °C sí (ΔG = −10,1 kJ)',
   sol: '<pre class="code-block">ΔH° = −635,1 − 393,5 − (−1206,9) = +178,3 kJ<br>ΔS° = 39,8 + 213,7 − 92,9 = +160,6 J/K<br><br>a) n(CaCO3) = 1000 × 0,90 / 100,09 = 8,992 mol<br>   calor = 8,992 × 178,3 = 1603 kJ   (absorbido)<br>   m(CaO) = 8,992 × 56,08 = 504 g<br><br>b) ΔG°(298 K) = 178 300 − 298,15 × 160,6 = +130 400 J → no espontánea<br>   T cruce = 178 300 / 160,6 = 1110 K ≈ 837 °C<br>   ΔG(1173 K) = 178 300 − 1173,15 × 160,6 = −10 110 J → espontánea</pre>ΔH &gt; 0 y ΔS &gt; 0 (se forma un gas): espontánea a <b>alta</b> temperatura. La pureza se aplica una sola vez, al pasar de la caliza al CaCO<sub>3</sub>. El cálculo a 900 °C supone ΔH y ΔS constantes con la temperatura, que es la aproximación de la cátedra.'},

]);

/* ============ SECCIÓN 5 · Parte A · lo del parcial que vuelve ============ */

registerExercises('fiuba-quimica-integradora', '5', [

  {st: 'Se introducen 2,00 g de agua en un recipiente de 20,0 L previamente evacuado, a 30 °C (P<sub>v</sub> = 31,8 mmHg). ¿Qué presión hay en el recipiente en el equilibrio?',
   opts: ['105 mmHg: toda el agua se evapora', '15,9 mmHg: se evapora la mitad', '31,8 mmHg: queda líquido y manda la presión de vapor', '760 mmHg'],
   c: 2,
   ex: 'Si se evaporara toda, P = nRT/V = 0,1110 × 0,0821 × 303,15 / 20,0 = 0,138 atm = 105 mmHg, <b>más</b> que P<sub>v</sub>: imposible, el vapor condensaría. Así que queda líquido y la presión es <b>la de vapor, 31,8 mmHg</b>. Se evaporan 0,606 g y quedan 1,394 g líquidos. → 105 mmHg es la cuenta de control, que justamente descarta “todo vapor”. → La mitad no tiene nada de especial. → 760 mmHg es la presión atmosférica, que no actúa en un recipiente cerrado y evacuado.'},

  {st: '¿Cuántas partículas hay en una celda cúbica centrada en las caras (FCC)?',
   opts: ['4', '2', '1', '14'],
   c: 0,
   ex: '8 vértices compartidos por 8 celdas y 6 caras compartidas por 2: 8 × 1/8 + 6 × 1/2 = <b>4</b>. → 2 es la BCC (8 × 1/8 + 1). → 1 es la simple. → 14 cuenta las posiciones sin dividir por las celdas que las comparten.'},

  {st: 'En una celda cúbica centrada en el cuerpo (BCC), ¿cómo se relacionan la arista a y el radio r de los átomos?',
   opts: ['a = 2r', 'a = 2√2·r', 'a = 4r', 'a = 4r/√3'],
   c: 3,
   ex: 'En la BCC los átomos se tocan sobre la <b>diagonal del cubo</b>, que mide a√3 y abarca 4 radios: a√3 = 4r → <b>a = 4r/√3</b>. Es la demostración que pide la pregunta 4 del bloque de Sólidos. → a = 2r es la simple (se tocan sobre la arista). → a = 2√2·r es la FCC (diagonal de una cara). → 4r no corresponde a ninguna.'},

  {st: 'Se mezclan 50,0 mL de HCl 0,100 M con 30,0 mL de Ba(OH)<sub>2</sub> 0,100 M. ¿Cuál es el pH final?',
   opts: ['7,00, porque es una neutralización', '12,10', '1,60', '12,52'],
   c: 1,
   ex: 'n(H<sup>+</sup>) = 0,00500 mol; n(OH<sup>−</sup>) = 2 × 0,0300 × 0,100 = 0,00600 mol: sobran <b>0,00100 mol de OH<sup>−</sup></b> en 80,0 mL → 0,0125 M → pOH 1,90 → <b>pH 12,10</b>. → pH 7 sólo si las cantidades fueran equivalentes. → 1,60 se olvida del 2 del Ba(OH)<sub>2</sub> y concluye que sobra ácido. → 12,52 divide por los 30 mL de la base en vez del volumen total.'},

  {st: '¿Por qué el etanol (78 °C) hierve a mucho más temperatura que el dimetil éter (−24 °C), si tienen la misma masa molar?',
   opts: ['Porque el éter es más volátil, sin otra razón', 'Porque el etanol es más pesado', 'Porque el etanol tiene un O-H y forma puentes de hidrógeno; el éter sólo dipolo-dipolo y London', 'Porque el éter tiene dos grupos metilo que lo hacen más polar'],
   c: 2,
   ex: 'A igual masa molar decide el <b>tipo</b> de fuerza: el etanol tiene H unido a O y forma <b>puentes de hidrógeno</b>; el éter no tiene H unido a O. Es el V/F 6 de la integradora “A”. → “Es más volátil” es la consecuencia, no la causa. → Son isómeros: igual masa. → Los metilos no agregan puente de hidrógeno.'},

  {st: 'El punto triple del CO<sub>2</sub> está en 5,11 atm y su punto crítico en 72,9 atm. ¿Por debajo de qué presión el CO<sub>2</sub> sólido sublima al calentarlo, sin fundir?',
   opts: ['Por debajo de 5,11 atm, la presión del punto triple', 'Por debajo de 72,9 atm, la presión crítica', 'Sólo en el vacío', 'Por debajo de 1 atm'],
   c: 0,
   ex: 'Por debajo de la presión del <b>punto triple</b> no existe el líquido: al calentar, el sólido cruza la curva de sublimación. Por eso el hielo seco sublima a 1 atm. Es el V/F 5 del 11/07/24. → La presión crítica es el final de la curva líquido-vapor y no decide si funde o sublima. → No hace falta vacío. → 1 atm está debajo de 5,11, pero el límite es 5,11.'},

  {st: 'Se hacen reaccionar 14,0 g de N<sub>2</sub> con 4,00 g de H<sub>2</sub>: N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub>. ¿Cuál es el limitante?',
   opts: ['El H<sub>2</sub>, porque hay menos masa', 'El H<sub>2</sub>, porque se necesitan 3 moles por cada N<sub>2</sub>', 'Ninguno: están en proporción estequiométrica', 'El N<sub>2</sub>: su cociente n/coeficiente (0,500) es menor que el del H<sub>2</sub> (0,661)'],
   c: 3,
   ex: 'n(N<sub>2</sub>) = 0,500 mol; n(H<sub>2</sub>) = 1,984 mol. Cocientes: 0,500/1 = 0,500 y 1,984/3 = 0,661 → limita el <b>N<sub>2</sub></b>. → Se compara en moles, no en masa. → El 3 ya está en el cociente: con 1,984 mol alcanza para 0,661 mol de N<sub>2</sub> y hay 0,500. → La proporción sería 1,500 mol de H<sub>2</sub> para 0,500 de N<sub>2</sub>, y hay más.'},

  {st: 'A un sistema en equilibrio se le agrega un catalizador. ¿Qué pasa?',
   opts: ['El equilibrio se corre hacia los productos', 'No se corre ni cambia K: sólo se llega antes al mismo equilibrio', 'Aumenta K', 'El equilibrio se corre hacia los reactivos'],
   c: 1,
   ex: 'Un catalizador acelera la reacción directa y la inversa por igual: el sistema llega <b>antes</b> al <b>mismo</b> equilibrio. K sólo cambia con la temperatura. → No hay desplazamiento en ningún sentido. → K no depende del camino de la reacción.'},

  {st: 'N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g) tiene K<sub>c</sub> = 0,50 a 400 °C. ¿Cuánto vale K<sub>p</sub>?',
   opts: ['0,50', '1,5·10<sup>3</sup>', '1,64·10<sup>−4</sup>', '9,0·10<sup>−3</sup>'],
   c: 2,
   ex: 'K<sub>p</sub> = K<sub>c</sub>·(RT)<sup>Δn</sup> con Δn = 2 − 4 = <b>−2</b> y RT = 0,0821 × 673,15 = 55,27: K<sub>p</sub> = 0,50 / 55,27<sup>2</sup> = <b>1,64·10<sup>−4</sup></b>. → 0,50 sería con Δn = 0. → 1,5·10<sup>3</sup> usa Δn = +2. → 9,0·10<sup>−3</sup> usa Δn = −1.'},

]);

registerReveals('fiuba-quimica-integradora', '5', [

  {st: '<b>Ejercicio propio P1 · Líquido-vapor.</b> <span class="muted">No es de la cátedra.</span><br><br>Se introducen 2,00 g de agua líquida en un recipiente de 20,0 L previamente evacuado, termostatizado a 30 °C. Dato: P<sub>v</sub>(agua, 30 °C) = 31,8 mmHg.<br>a) ¿Se evapora toda el agua? Justificar.<br>b) Calcular la presión del sistema y las masas de líquido y de vapor en el equilibrio.<br>c) ¿A partir de qué volumen habría sólo vapor? ¿Qué presión habría en 100 L?',
   ans: 'a) No · b) 31,8 mmHg; 0,606 g de vapor y 1,394 g de líquido · c) desde 66,0 L; en 100 L, 21,0 mmHg (vapor insaturado)',
   sol: '<pre class="code-block">n = 2,00 / 18,02 = 0,1110 mol ;  T = 303,15 K ;  Pv = 31,8 / 760 = 0,04184 atm<br><br>a) si todo fuera vapor: P = 0,1110 × 0,0821 × 303,15 / 20,0 = 0,138 atm = 105 mmHg<br>   105 &gt; 31,8 → no puede: queda líquido<br><br>b) P = Pv = 31,8 mmHg<br>   n(vapor) = 0,04184 × 20,0 / (0,0821 × 303,15) = 0,03362 mol = 0,606 g<br>   líquido = 2,00 − 0,606 = 1,394 g<br><br>c) V = 0,1110 × 0,0821 × 303,15 / 0,04184 = 66,0 L<br>   en 100 L: P = 0,1110 × 0,0821 × 303,15 / 100 = 0,0276 atm = 21,0 mmHg</pre>Es el Ejercicio 1 del 18/07/24 con agua. Las consideraciones: el volumen del líquido (1,4 mL) es despreciable frente a 20 L, y el vapor es gas ideal. Control de c): 21,0 &lt; 31,8 mmHg, vapor insaturado. Sistema de b): <b>heterogéneo</b>, un componente y dos fases.'},

  {st: '<b>Ejercicio propio P2 · Celda unitaria del cobre.</b> <span class="muted">No es de la cátedra.</span><br><br>El cobre cristaliza en una red cúbica centrada en las caras con una arista de 361,5 pm.<br>a) ¿Cuántos átomos hay por celda?<br>b) Calcular la densidad del cobre.<br>c) Calcular el radio atómico.',
   ans: 'a) 4 · b) 8,94 g/cm<sup>3</sup> · c) 127,8 pm',
   sol: '<pre class="code-block">a) 8 × 1/8 + 6 × 1/2 = 4 átomos<br>b) a = 361,5 pm = 3,615·10⁻⁸ cm → a³ = 4,724·10⁻²³ cm³<br>   ρ = 4 × 63,55 / (6,022·10²³ × 4,724·10⁻²³) = 8,94 g/cm³<br>c) FCC: se tocan sobre la diagonal de una cara → a√2 = 4r<br>   r = 361,5 / (2√2) = 127,8 pm</pre>Son las preguntas 4 y 5 del bloque de Sólidos de la guía de 185 y los ejercicios 5 a 7 de la guía G06C. El valor de tabla de la densidad del cobre es 8,96 g/cm<sup>3</sup>. El error más caro: no pasar la arista a cm antes de elevar al cubo.'},

  {st: '<b>Ejercicio propio P3 · Estequiometría tipo Haber.</b> <span class="muted">No es de la cátedra.</span><br><br>Se hacen reaccionar 14,0 g de N<sub>2</sub> con 4,00 g de H<sub>2</sub> según N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) → 2 NH<sub>3</sub>(g), con un rendimiento del 30 %.<br>a) Identificar el reactivo limitante.<br>b) Calcular la masa de NH<sub>3</sub> obtenida.<br>c) Calcular el volumen que ocupa ese NH<sub>3</sub> a 400 °C y 200 atm, suponiendo gas ideal.',
   ans: 'a) N<sub>2</sub> · b) 5,11 g · c) 82,8 mL',
   sol: '<pre class="code-block">n(N2) = 14,0 / 28,02 = 0,4996 mol ;  n(H2) = 4,00 / 2,016 = 1,984 mol<br>a) cocientes: 0,4996 / 1 = 0,4996 ;  1,984 / 3 = 0,6614 → limita el N2<br>b) NH3 teórico = 2 × 0,4996 = 0,9993 mol<br>   real = 0,9993 × 0,30 = 0,2998 mol × 17,03 = 5,11 g<br>c) V = 0,2998 × 0,0821 × 673,15 / 200 = 0,0828 L = 82,8 mL</pre>El rendimiento se aplica <b>una vez</b>, sobre el producto. Con presión en atm va R = 0,0821; a 200 atm el gas no es ideal, pero el examen espera la ecuación de gas ideal, como en la integradora “B”.'},

  {st: '<b>Ejercicio propio P4 · Neutralización con exceso.</b> <span class="muted">No es de la cátedra.</span><br><br>Se mezclan 50,0 mL de HCl 0,100 M con 30,0 mL de Ba(OH)<sub>2</sub> 0,100 M.<br>a) Escribir la reacción y los balances de carga y de masa de la solución final.<br>b) Calcular el pH final.<br>c) ¿Qué volumen de la solución de Ba(OH)<sub>2</sub> habría hecho falta para llegar a pH 7?',
   ans: 'b) pH 12,10 · c) 25,0 mL',
   sol: '<pre class="code-block">a) 2 HCl + Ba(OH)2 → BaCl2 + 2 H2O<br>   carga: [H+] + 2[Ba2+] = [Cl−] + [OH−]<br>   masa:  [Cl−] = 0,00500 / 0,0800 ;  [Ba2+] = 0,00300 / 0,0800<br><br>b) n(H+) = 0,0500 × 0,100 = 0,00500 mol<br>   n(OH−) = 2 × 0,0300 × 0,100 = 0,00600 mol → sobran 0,00100 mol de OH−<br>   [OH−] = 0,00100 / 0,0800 = 0,0125 M → pOH = 1,90 → pH = 12,10<br><br>c) n(Ba(OH)2) = 0,00500 / 2 = 0,00250 mol → V = 0,00250 / 0,100 = 25,0 mL</pre>Fuerte con fuerte: <b>una resta</b>, no un equilibrio. El Ba(OH)<sub>2</sub> aporta <b>dos</b> OH<sup>−</sup>, como el Ca(OH)<sub>2</sub> de la integradora del 18/07/24. El pH 7 de c) se justifica porque BaCl<sub>2</sub> es sal de ácido fuerte y base fuerte: no hidroliza.'},

]);

/* ============ SECCIÓN 6 · Parte B ============ */

registerExercises('fiuba-quimica-integradora', '6', [

  {st: 'V/F real (06/02/25): “Todos los alcoholes tienen menor presión de vapor que los alcanos a la misma temperatura.” ¿Qué argumento lo resuelve mejor?',
   opts: ['Un contraejemplo: a 25 °C el metanol tiene unos 127 mmHg y el decano unos 1,4 mmHg', 'Recordar que los alcoholes forman puentes de hidrógeno', 'Decir que la presión de vapor depende de la temperatura', 'Comparar el etanol con el propano'],
   c: 0,
   ex: 'Es falso por el cuantificador “todos”, y a un “todos” lo tumba <b>un contraejemplo</b>: un alcohol chico más volátil que un alcano grande. → Los puentes de hidrógeno son el argumento a favor del enunciado, no en contra. → La temperatura es la misma en los dos lados de la comparación. → Etanol contra propano confirma la regla para tamaños parecidos: no la tumba.'},

  {st: 'V/F real (“A”): “Para el siguiente proceso: Br<sub>2</sub>(l) → Br<sub>2</sub>(g) la variación de entalpía es negativa y la variación de entropía es positiva.”',
   opts: ['Verdadero: las dos afirmaciones son correctas', 'Falso, porque ΔS es negativa', 'Verdadero, porque la vaporización es espontánea', 'Falso: ΔS &gt; 0 está bien, pero vaporizar es endotérmico (ΔH &gt; 0)'],
   c: 3,
   ex: 'Son dos afirmaciones juntas: la de la entropía es correcta (líquido a gas, más desorden) y la de la entalpía no, porque vaporizar exige romper las fuerzas intermoleculares (unos 31 kJ/mol para el bromo). Con una falsa, el enunciado es <b>falso</b>. → ΔS es positiva. → Que sea espontánea o no depende de la temperatura y no dice nada del signo de ΔH.'},

  {st: '¿Por qué mecanismo es falso el V/F real “Los sólidos iónicos son más duros que los sólidos covalentes” (11/07/24)?',
   opts: ['Por un cuantificador explícito, como “todos” o “siempre”', 'Al revés: los covalentes en red, como el diamante, son los más duros', 'Por un término cambiado: “duro” en lugar de “frágil”', 'Porque una de dos afirmaciones es falsa'],
   c: 1,
   ex: 'La comparación está <b>invertida</b>: el diamante, covalente en red, es el patrón de dureza máxima (10 en la escala de Mohs) y el NaCl ronda 2,5. → No hay “todos” ni “siempre”. → Los iónicos son duros y además frágiles: no es un término cambiado. → Es una sola afirmación.'},

  {st: 'V/F b del 18/07/24: “es necesario que el número de moles de ambos sea igual” para neutralizar. ¿Dónde estaba el contraejemplo más rápido?',
   opts: ['En la tabla periódica que da la cátedra', 'En la guía de 185 preguntas', 'En el ítem c) del Ejercicio 2 del mismo examen: 0,004 mol de HCl se neutralizan con 0,002 mol de Ca(OH)<sub>2</sub>', 'En el Ejercicio 1, el del benceno'],
   c: 2,
   ex: 'El Ejercicio 2 c) pedía el volumen de Ca(OH)<sub>2</sub> para llevar el HCl a pH 7: <b>la mitad de moles de base</b>, porque cada Ca(OH)<sub>2</sub> aporta dos OH<sup>−</sup>. Quien lo resolvió ya tenía el contraejemplo escrito. → La tabla periódica no tiene contraejemplos. → La guía de 185 tiene la pregunta, no la cuenta. → El benceno es de líquido-vapor.'},

  {st: 'V/F del banco: “Si el ΔG° de una reacción es positivo, su constante de equilibrio es mayor que 1.”',
   opts: ['Falso: ΔG° = −RT·ln K, así que ΔG° &gt; 0 da ln K &lt; 0 y K &lt; 1', 'Verdadero: K crece con ΔG°', 'Falso: K no depende de ΔG°', 'Verdadero sólo a 25 °C'],
   c: 0,
   ex: 'De ΔG° = −R·T·ln K: si ΔG° &gt; 0, ln K &lt; 0 y <b>K &lt; 1</b>. Con ΔG° = +10 kJ a 25 °C, K = 0,018. → Es al revés: cuanto más positivo ΔG°, más chica K. → K depende directamente de ΔG°. → La relación vale a cualquier temperatura, con la T que corresponda.'},

  {st: 'V/F del banco: “En la pila Zn | Zn<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu, aumentar la concentración de Zn<sup>2+</sup> aumenta el potencial de la pila.”',
   opts: ['Verdadero: más iones, más corriente', 'Verdadero: el Zn<sup>2+</sup> es reactivo de la pila', 'Falso: el potencial no depende de las concentraciones', 'Falso: el Zn<sup>2+</sup> es producto, así que sube Q y baja E'],
   c: 3,
   ex: 'Global: Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu. El Zn<sup>2+</sup> está en el <b>numerador</b> de Q: si aumenta, sube Q y por Nernst <b>baja</b> E. Con [Zn<sup>2+</sup>] = 10 M y [Cu<sup>2+</sup>] = 1 M, E = 1,07 V. Es la pregunta 10 del bloque de Pilas. → El potencial no es la corriente. → El Zn<sup>2+</sup> se forma en el ánodo: es producto. → Nernst dice justamente que E depende de las concentraciones.'},

  {st: 'V/F real verdadero (18/07/24): “Según el Principio de Le Chatelier, un aumento de temperatura desplaza a un sistema en equilibrio en el sentido endotérmico.” ¿Cuál es la mejor justificación?',
   opts: ['“Es verdadero porque lo dice el principio de Le Chatelier”', 'Enunciar el principio, aplicar que subir T es agregar calor y que el sentido que lo consume es el endotérmico, y dar un ejemplo con K', 'Dar sólo un ejemplo: el Haber', 'Decir que K aumenta siempre con la temperatura'],
   c: 1,
   ex: 'Un verdadero se justifica con <b>el principio aplicado</b>: el sistema contrarresta la perturbación; subir T es agregar calor; el sentido que lo consume es el endotérmico. Y un ejemplo: en una exotérmica como el Haber, subir T corre hacia los reactivos y baja K. → Repetir el enunciado no es justificar. → Un ejemplo solo no demuestra un enunciado general. → K baja con T si la directa es exotérmica: “siempre aumenta” es falso.'},

  {st: 'V/F del banco: “Al diluir una solución de un ácido débil, su grado de disociación disminuye.”',
   opts: ['Verdadero: hay menos ácido para disociarse', 'Verdadero: el pH sube', 'Falso: el grado de disociación aumenta (ácido acético: 1,33 % a 0,10 M y 4,15 % a 0,010 M)', 'Falso: el grado de disociación no depende de la concentración'],
   c: 2,
   ex: 'Al diluir, el equilibrio HA ⇌ H<sup>+</sup> + A<sup>−</sup> se corre hacia donde hay más partículas: α ≈ √(K<sub>a</sub>/C) <b>aumenta</b>. Con el acético, de 1,33 % a 4,15 %. Es la pregunta 11 del bloque de Ácido-base. → Hay menos ácido en total, pero se disocia una fracción mayor. → El pH sí sube, pero eso no dice nada de α. → α depende de la concentración; lo que no depende es K<sub>a</sub>.'},

  {st: 'El 3 de la “B” (dos ácidos débiles HA y HB, con [A<sup>−</sup>] &gt; [B<sup>−</sup>] a igual concentración) trae tres juicios. ¿Cuál es la respuesta?',
   opts: ['a V, b F, c F, cada uno justificado por separado', 'Todo verdadero, porque HA es más fuerte', 'a V, b V, c F', 'a F, b F, c V'],
   c: 0,
   ex: 'Más A<sup>−</sup> a igual concentración es más disociación: <b>a) V</b>, HA es más fuerte; <b>b) F</b>, su K<sub>a</sub> es mayor, no menor; <b>c) F</b>, tiene más H<sup>+</sup> y pH menor. Son tres juicios y se corrigen por separado. → b y c están escritos al revés a propósito. → Las otras dos combinaciones fallan en b o en a.'},

  {st: '¿Cuál de estos enunciados es verdadero?',
   opts: ['Las CNPT y las condiciones estándar son lo mismo: 0 °C y 1 atm', 'Un sólido iónico conduce la corriente en estado sólido', 'Un catalizador aumenta el rendimiento de equilibrio', 'En un proceso reversible la entropía del universo no cambia'],
   c: 3,
   ex: 'Segundo principio: en un proceso <b>reversible</b>, ΔS<sub>universo</sub> = 0; en uno irreversible, &gt; 0. → CNPT es 0 °C y 1 atm; el estado estándar fija la presión (1 atm en la convención de la cátedra) y 1 M para solutos, a la temperatura indicada, en general 25 °C. → El iónico conduce fundido o disuelto, no sólido. → El catalizador no cambia el equilibrio.'},

]);

/* Banco propio: 45 V/F sobre la guía de 185 preguntas (elaboración propia) */

registerReveals('fiuba-quimica-integradora', '6', [

  {st: '<b>Banco · Sistemas materiales 5.</b> “Un sistema formado por agua líquida, hielo y vapor de agua en equilibrio tiene un solo componente y tres fases.”',
   ans: 'Verdadero',
   sol: 'Una <b>fase</b> es cada porción homogénea con propiedades intensivas propias, separada de las demás por una interfase; un <b>componente</b> es cada sustancia distinta. Hielo, agua líquida y vapor son tres fases de una sola sustancia: un componente, tres fases. Pasa en el <b>punto triple</b> del agua (0,006 atm y 0,01 °C), y la pregunta 5 del bloque de Sistemas materiales pide justamente ese ejemplo.'},

  {st: '<b>Banco · Estructura atómica 7.</b> “Dos isótopos de un mismo elemento tienen igual número de neutrones y distinto número de protones.”',
   ans: 'Falso',
   sol: 'Isótopos son átomos del <b>mismo elemento</b>, o sea con el mismo número de <b>protones</b> (Z), y distinto número de <b>neutrones</b>, por eso distinta masa. Está al revés. Ejemplo: <sup>12</sup>C y <sup>14</sup>C tienen 6 protones, y 6 y 8 neutrones. Si cambiara Z, sería otro elemento.'},

  {st: '<b>Banco · Estructura atómica 11.</b> “El ion Al<sup>3+</sup> (Z = 13) y el ion F<sup>−</sup> (Z = 9) son isoelectrónicos.”',
   ans: 'Verdadero',
   sol: 'Dos especies son isoelectrónicas si tienen el mismo número de electrones. En un ion, electrones = Z − carga: Al<sup>3+</sup> tiene 13 − 3 = <b>10</b> y F<sup>−</sup> tiene 9 + 1 = <b>10</b>. Los dos tienen la configuración del Ne, 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>. Lo que no comparten es el número de protones (13 y 9), y por eso el Al<sup>3+</sup> es mucho más chico.'},

  {st: '<b>Banco · Estructura electrónica 10.</b> “En un período, el radio atómico aumenta de izquierda a derecha porque se agregan electrones.”',
   ans: 'Falso',
   sol: 'En un período los electrones se agregan <b>al mismo nivel</b>, mientras la carga nuclear aumenta de a un protón. Los electrones del mismo nivel se apantallan poco entre sí, así que crece la <b>carga nuclear efectiva</b> y la nube se contrae: el radio <b>disminuye</b> de izquierda a derecha. Ejemplo en el período 3: el Na es mucho más grande que el Cl. Más electrones no implica más tamaño si no hay un nivel nuevo.'},

  {st: '<b>Banco · Estructura electrónica 11.</b> “La primera energía de ionización del sodio es menor que la del magnesio.”',
   ans: 'Verdadero',
   sol: 'La primera energía de ionización es la energía para sacar el electrón más externo de un átomo gaseoso. En un período aumenta hacia la derecha, porque crece la carga nuclear efectiva. El Na pierde su único electrón 3s<sup>1</sup>, que quedó solo sobre una configuración de gas noble; el Mg tiene 3s<sup>2</sup> con un protón más. Valores de tabla: Na 496 kJ/mol, Mg 738 kJ/mol.'},

  {st: '<b>Banco · Estructura electrónica 16.</b> “Los gases nobles tienen electronegatividad alta porque su capa de valencia está completa.”',
   ans: 'Falso',
   sol: 'La electronegatividad mide la tendencia de un átomo a atraer los electrones de un <b>enlace</b>. Con la capa de valencia completa, los gases nobles prácticamente no forman enlaces y no tienen dónde ubicar un electrón más: su electronegatividad es <b>prácticamente nula</b> y su afinidad electrónica muy baja, que es lo que pregunta la 16 del bloque. La capa completa explica la estabilidad, no la electronegatividad alta.'},

  {st: '<b>Banco · Magnitudes y compuestos 13.</b> “En el CO<sub>2</sub> el carbono tiene hibridación sp y la molécula es lineal.”',
   ans: 'Verdadero',
   sol: 'El carbono del CO<sub>2</sub> forma dos dobles enlaces, O=C=O: dos enlaces σ y dos π. La hibridación la fija el número de π: con <b>dos</b>, es <b>sp</b>, con los dos híbridos a 180°. Molécula lineal, y por eso apolar aunque los enlaces C=O sean polares. Es la misma tabla de los V/F reales de hibridación: ningún π sp<sup>3</sup>, uno sp<sup>2</sup>, dos sp.'},

  {st: '<b>Banco · Magnitudes y compuestos 3.</b> “Un mol de moléculas de O<sub>2</sub> y un mol de átomos de oxígeno tienen la misma masa.”',
   ans: 'Falso',
   sol: 'Un mol es siempre 6,022·10<sup>23</sup> <b>entidades</b>, pero hay que decir cuáles. Un mol de átomos de O pesa 16,00 g; un mol de moléculas de O<sub>2</sub>, cada una con dos átomos, pesa 32,00 g. Es la diferencia entre “cantidad de sustancia” y “masa” que pregunta la 3 del bloque: misma cantidad de entidades, distinta masa.'},

  {st: '<b>Banco · Uniones 2.</b> “El CCl<sub>4</sub> es una molécula apolar aunque sus enlaces C-Cl son polares.”',
   ans: 'Verdadero',
   sol: 'La polaridad de una molécula es la suma vectorial de los momentos dipolares de sus enlaces. El C-Cl es polar (el Cl es más electronegativo), pero el CCl<sub>4</sub> es <b>tetraédrico y simétrico</b>: los cuatro dipolos se cancelan y el momento dipolar total es cero. Otros ejemplos de moléculas apolares con enlaces polares, que es lo que pide la pregunta 2: CO<sub>2</sub> y BF<sub>3</sub>.'},

  {st: '<b>Banco · Uniones 10 y 11.</b> “La presión de vapor de un líquido depende de la cantidad de líquido que haya en el recipiente.”',
   ans: 'Falso',
   sol: 'La presión de vapor es la presión del vapor en <b>equilibrio</b> con su líquido a una temperatura dada. En el equilibrio la velocidad de evaporación iguala a la de condensación, y las dos dependen de la superficie de la misma manera: la presión resultante depende sólo de la <b>sustancia y la temperatura</b>. Con más o menos líquido, mientras quede algo, la presión es la misma. Es la idea del Ejercicio 1 de la integradora del 18/07/24.'},

  {st: '<b>Banco · Uniones 16.</b> “Si la curva de equilibrio sólido-líquido de una sustancia tiene pendiente negativa, el sólido es más denso que el líquido.”',
   ans: 'Falso',
   sol: 'Pendiente negativa significa que, al aumentar la presión, el sólido funde a <b>menor</b> temperatura: la presión favorece al líquido, que ocupa menos volumen. Entonces el líquido es más denso y el sólido <b>menos</b> denso. Es el caso del agua: el hielo flota. En casi todas las demás sustancias la pendiente es positiva y el sólido es el más denso.'},

  {st: '<b>Banco · Uniones 15.</b> “Por encima de su temperatura crítica, un gas no se puede licuar por compresión.”',
   ans: 'Verdadero',
   sol: 'El punto crítico es el extremo de la curva líquido-vapor. Por encima de la temperatura crítica desaparece la distinción entre líquido y vapor: la sustancia es un <b>fluido supercrítico</b>, y comprimirla aumenta su densidad sin que aparezca una interfase líquido-vapor. Ejemplo: el CO<sub>2</sub> tiene T<sub>c</sub> = 31,0 °C; a 25 °C se licua comprimiendo, a 40 °C no.'},

  {st: '<b>Banco · Uniones 18.</b> “El agua hierve a menos de 100 °C en la cima de una montaña porque allí su presión de vapor es mayor.”',
   ans: 'Falso',
   sol: 'Un líquido hierve cuando su presión de vapor iguala a la <b>presión externa</b>. La presión de vapor del agua a cada temperatura es la misma en la montaña que en el llano; lo que cambia es la presión atmosférica, que arriba es menor. Por eso la presión de vapor la alcanza a una temperatura más baja. Hay un punto de ebullición por cada presión externa, y el “normal” es el de 1 atm.'},

  {st: '<b>Banco · Gases 2.</b> “A igual temperatura, un gas real se aparta más del comportamiento ideal a presión alta que a presión baja.”',
   ans: 'Verdadero',
   sol: 'El modelo ideal supone moléculas <b>puntuales</b> y <b>sin interacciones</b>. A presión alta las moléculas están cerca: su volumen propio deja de ser despreciable y las fuerzas intermoleculares pesan. A presión baja están lejos y el modelo funciona bien. Es lo que corrige la ecuación de Van der Waals con sus términos <i>b</i> (volumen) y <i>a</i> (atracción).'},

  {st: '<b>Banco · Soluciones 8.</b> “La solubilidad de los gases en agua aumenta al calentar.”',
   ans: 'Falso',
   sol: 'Disolver un gas en agua es en general exotérmico, y al calentar las moléculas de gas ganan energía cinética y escapan de la solución: la solubilidad <b>disminuye</b> con la temperatura. Ejemplo: una gaseosa caliente pierde el gas más rápido, y en el agua tibia hay menos O<sub>2</sub> disuelto. Es el comportamiento opuesto al de la mayoría de los sólidos.'},

  {st: '<b>Banco · Soluciones 3.</b> “Al diluir una solución, la cantidad de soluto disminuye.”',
   ans: 'Falso',
   sol: 'Diluir es agregar <b>solvente</b>: la cantidad de soluto no cambia, cambian el volumen (aumenta) y la concentración (disminuye). Por eso vale C<sub>1</sub>·V<sub>1</sub> = C<sub>2</sub>·V<sub>2</sub>: los moles de soluto son los mismos antes y después. Es lo que pregunta la 3 del bloque: qué cambia y qué se conserva.'},

  {st: '<b>Banco · Soluciones 14.</b> “El K<sub>ps</sub> de una sal poco soluble es su solubilidad expresada en mol/L.”',
   ans: 'Falso',
   sol: 'El K<sub>ps</sub> es la constante del equilibrio entre el sólido y sus iones en solución saturada, el producto de las concentraciones de los iones elevadas a sus coeficientes. Se relaciona con la solubilidad s, pero no es s: para una sal AB, K<sub>ps</sub> = s<sup>2</sup>; para AB<sub>2</sub>, K<sub>ps</sub> = 4s<sup>3</sup>. Una sal AB con s = 1·10<sup>−5</sup> M tiene K<sub>ps</sub> = 1·10<sup>−10</sup>.'},

  {st: '<b>Banco · Reacciones 2.</b> “En una reacción redox, el agente oxidante es la especie que se oxida.”',
   ans: 'Falso',
   sol: 'El agente oxidante es el que <b>oxida a otro</b>, y para eso le saca electrones: él se <b>reduce</b>. El agente reductor es el que se oxida. En la pila Sn/Pb del V/F 6 del 06/02/25, el Pb<sup>2+</sup> se reduce y es el agente oxidante; el Sn se oxida y es el reductor.'},

  {st: '<b>Banco · Termodinámica 6.</b> “En una bomba calorimétrica, el calor medido es igual a la variación de energía interna de la reacción.”',
   ans: 'Verdadero',
   sol: 'Primer principio con la convención de la cátedra: ΔU = Q + W, con W = −P·ΔV. En la bomba el volumen es <b>constante</b>: ΔV = 0, W = 0 y ΔU = Q<sub>v</sub>. Es la demostración que pide la 6 del bloque de Termodinámica, y la base del Ejercicio 2 de la integradora “A”. Para pasar a ΔH: ΔH = ΔU + Δn<sub>gas</sub>·R·T.'},

  {st: '<b>Banco · Termodinámica 7.</b> “Las condiciones estándar y las CNPT son lo mismo: 0 °C y 1 atm.”',
   ans: 'Falso',
   sol: 'CNPT son <b>0 °C (273 K) y 1 atm</b>, y se usan para gases (22,4 L/mol). El estado estándar fija la <b>presión</b> (1 atm en la convención de la cátedra; 1 bar en la IUPAC) y <b>1 M</b> para los solutos, a la temperatura que se indique; los valores se tabulan en general a 25 °C. Por eso los ΔH° y E° de tabla son a 298 K, no a 273 K.'},

  {st: '<b>Banco · Termoquímica 14 y 15.</b> “El poder calorífico superior de un combustible es mayor que el inferior porque supone el agua producida en estado líquido.”',
   ans: 'Verdadero',
   sol: 'El PCS es el calor de combustión con el agua producida <b>condensada</b> (líquida); el PCI, con el agua como vapor. La diferencia es el calor de condensación del agua, que el PCS cuenta como liberado. Por eso PCS &gt; PCI siempre que el combustible tenga hidrógeno. Ejemplo: en la combustión del metano, ΔH con agua líquida es más negativo que con agua gaseosa en unos 88 kJ por mol de CH<sub>4</sub> (2 × 44).'},

  {st: '<b>Banco · Termoquímica 2.</b> “La entalpía estándar de formación del ozono, O<sub>3</sub>(g), es cero porque está formado por un solo elemento.”',
   ans: 'Falso',
   sol: 'ΔH°<sub>f</sub> = 0 vale sólo para la forma <b>más estable</b> del elemento en su estado estándar. Para el oxígeno es el O<sub>2</sub>(g). El ozono es otra forma, menos estable, y formarlo desde O<sub>2</sub> cuesta energía: ΔH°<sub>f</sub>(O<sub>3</sub>) ≈ +142,7 kJ/mol (valor de tabla). Lo mismo pasa con el diamante frente al grafito.'},

  {st: '<b>Banco · Termoquímica 4.</b> “Si una reacción se escribe al revés, su ΔH cambia de signo y conserva su valor absoluto.”',
   ans: 'Verdadero',
   sol: 'Es la ley de Lavoisier-Laplace, que pregunta la 4 del bloque: el calor necesario para descomponer un compuesto es igual al que se libera al formarlo. Como H es función de estado, ir de A a B y volver de B a A da ΔH total cero: ΔH(inversa) = −ΔH(directa). Ejemplo: si la combustión del grafito tiene ΔH = −393,5 kJ, la descomposición del CO<sub>2</sub> en C y O<sub>2</sub> tiene +393,5 kJ. Junto con Hess, es la base de todo cálculo con ecuaciones termoquímicas.'},

  {st: '<b>Banco · 2do principio 4.</b> “Una reacción con ΔS del sistema negativo no puede ser espontánea.”',
   ans: 'Falso',
   sol: 'El ΔS del sistema no es criterio de espontaneidad: lo es el ΔS del universo, o ΔG a P y T constantes. Con ΔS &lt; 0 y ΔH &lt; 0, ΔG = ΔH − TΔS es negativo a temperatura baja. Contraejemplos: el agua que se congela a −10 °C, y el Haber de la integradora “B”, espontáneo por debajo de 464 K con ΔS° = −199 J/K. El calor que liberan aumenta la entropía del entorno más de lo que baja la del sistema.'},

  {st: '<b>Banco · 2do principio 5.</b> “En un proceso reversible, la entropía del universo no cambia.”',
   ans: 'Verdadero',
   sol: 'Segundo principio: en todo proceso real (irreversible) ΔS<sub>universo</sub> &gt; 0, y en el límite reversible ΔS<sub>universo</sub> = 0. En un reversible, lo que gana de entropía el sistema lo pierde el entorno. Ejemplo: el hielo que funde a 0 °C y 1 atm, en equilibrio: ΔS<sub>sistema</sub> = +22,0 J/K·mol y ΔS<sub>entorno</sub> = −22,0 J/K·mol.'},

  {st: '<b>Banco · 2do principio 8.</b> “Si el ΔG° de una reacción es positivo, su constante de equilibrio es mayor que 1.”',
   ans: 'Falso',
   sol: 'ΔG° = −R·T·ln K. Si ΔG° &gt; 0, ln K &lt; 0 y <b>K &lt; 1</b>: en el equilibrio predominan los reactivos. Con ΔG° = +10 kJ a 25 °C, K = 0,018. Que ΔG° &gt; 0 no quiere decir que no se forme nada de producto: quiere decir que el equilibrio está corrido hacia los reactivos.'},

  {st: '<b>Banco · 2do principio 8.</b> “La constante de equilibrio de una reacción entre gases cambia si se comprime el recipiente a temperatura constante.”',
   ans: 'Falso',
   sol: 'K = e<sup>−ΔG°/RT</sup>, y ΔG° es el de los estados estándar a esa temperatura: <b>K sólo depende de T</b>, que es lo que pide justificar la 8 del bloque. Comprimir cambia las presiones parciales, o sea Q, y el sistema se desplaza (hacia menos moles de gas) hasta que Q vuelve a valer K. Se desplaza el equilibrio, no cambia la constante.'},

  {st: '<b>Banco · Sólidos 3.</b> “En una celda cúbica centrada en las caras hay 4 partículas por celda.”',
   ans: 'Verdadero',
   sol: 'Cada vértice lo comparten 8 celdas y cada cara, 2. FCC: 8 vértices × 1/8 + 6 caras × 1/2 = 1 + 3 = <b>4</b>. Como comparación, la simple tiene 1 y la centrada en el cuerpo, 2. Ejemplos de metales FCC: Cu, Al, Ag, Au.'},

  {st: '<b>Banco · Sólidos 6.</b> “El grafito y el diamante son sólidos covalentes, y por eso los dos son aislantes eléctricos.”',
   ans: 'Falso',
   sol: 'Los dos son redes covalentes de carbono, pero con estructuras distintas. En el diamante cada C está unido a 4 (sp<sup>3</sup>) y todos los electrones están localizados: aislante. En el grafito cada C está unido a 3 en capas planas (sp<sup>2</sup>) y le queda un electrón por átomo <b>deslocalizado</b> en la capa: conduce la corriente a lo largo de las capas. El tipo de sólido no alcanza para decidir la conductividad: hay que mirar si hay portadores móviles.'},

  {st: '<b>Banco · Sólidos 7.</b> “La conductividad de un semiconductor aumenta al subir la temperatura, al revés que la de un metal.”',
   ans: 'Verdadero',
   sol: 'En un semiconductor, al subir la temperatura más electrones pasan a estados donde se pueden mover: aumentan los <b>portadores</b> y la conductividad sube. En un metal los portadores ya están (el mar de electrones) y al subir la temperatura la red vibra más y los dispersa: la conductividad baja. Ejemplo: el silicio frente al cobre.'},

  {st: '<b>Banco · Equilibrio químico 6.</b> “Agregar un catalizador aumenta el rendimiento de equilibrio de una reacción.”',
   ans: 'Falso',
   sol: 'Un catalizador baja la energía de activación de la reacción directa y de la inversa por igual: el sistema llega <b>antes</b> al equilibrio, pero al <b>mismo</b> equilibrio, con la misma K. El rendimiento de equilibrio no cambia. Por eso en el Haber el catalizador sirve para trabajar más rápido, y el rendimiento se busca con la presión.'},

  {st: '<b>Banco · Equilibrio químico 4.</b> “Si el cociente de reacción Q es menor que K, la reacción avanza hacia los productos.”',
   ans: 'Verdadero',
   sol: 'Q tiene la misma forma que K pero con las concentraciones del momento. Si Q &lt; K, hay menos productos de los que habría en el equilibrio, y la reacción avanza <b>hacia los productos</b> hasta que Q = K. Si Q &gt; K, avanza hacia los reactivos. Es también la base de ΔG = ΔG° + RT·ln Q: con Q &lt; K, ΔG &lt; 0.'},

  {st: '<b>Banco · Equilibrio químico 8.</b> “En N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2 NO<sub>2</sub>(g), comprimir el recipiente desplaza el equilibrio hacia el NO<sub>2</sub>.”',
   ans: 'Falso',
   sol: 'Al comprimir aumenta la presión, y por Le Chatelier el sistema se corre hacia donde hay <b>menos moles de gas</b>: 1 mol de N<sub>2</sub>O<sub>4</sub> contra 2 de NO<sub>2</sub>. Se desplaza hacia el <b>N<sub>2</sub>O<sub>4</sub></b>. Formalmente, Q = [NO<sub>2</sub>]<sup>2</sup>/[N<sub>2</sub>O<sub>4</sub>] crece al bajar el volumen y queda mayor que K. Si los moles de gas fueran iguales a los dos lados, la presión no lo movería.'},

  {st: '<b>Banco · Ácido-base 9.</b> “K<sub>a</sub> · K<sub>b</sub> = K<sub>w</sub> para cualquier ácido y cualquier base.”',
   ans: 'Falso',
   sol: 'La relación vale sólo para un <b>par conjugado</b>: un ácido y la base que queda cuando pierde su H<sup>+</sup> (HA y A<sup>−</sup>, o NH<sub>4</sub><sup>+</sup> y NH<sub>3</sub>). Sumando sus dos equilibrios queda la autoionización del agua, y por eso el producto de las constantes es K<sub>w</sub>, y pK<sub>a</sub> + pK<sub>b</sub> = 14 a 25 °C. Para un ácido y una base que no son conjugados no hay ninguna relación.'},

  {st: '<b>Banco · Ácido-base 2.</b> “Al aumentar la temperatura, el K<sub>w</sub> aumenta y el agua pura queda con pH menor que 7, aunque sigue siendo neutra.”',
   ans: 'Verdadero',
   sol: 'La autoionización del agua es endotérmica: al subir T, K<sub>w</sub> aumenta (a 60 °C ronda 9,6·10<sup>−14</sup>, valor de tabla). En agua pura [H<sup>+</sup>] = [OH<sup>−</sup>] = √K<sub>w</sub>, así que el pH baja (unos 6,5 a 60 °C). Pero la solución sigue siendo <b>neutra</b>, porque neutro quiere decir [H<sup>+</sup>] = [OH<sup>−</sup>], no pH = 7. El 7 es el neutro a 25 °C.'},

  {st: '<b>Banco · Ácido-base 14.</b> “Un buffer de ácido acético y acetato tiene su máxima capacidad reguladora cuando el pH es igual al pK<sub>a</sub> del ácido.”',
   ans: 'Verdadero',
   sol: 'Henderson: pH = pK<sub>a</sub> + log(C<sub>b</sub>/C<sub>a</sub>). Con pH = pK<sub>a</sub>, C<sub>a</sub> = C<sub>b</sub>: hay la misma reserva de ácido para neutralizar una base agregada y de base para neutralizar un ácido, y la capacidad es máxima. El rango útil es pK<sub>a</sub> ± 1. Para el acético, pK<sub>a</sub> = 4,74: regula bien entre 3,7 y 5,7.'},

  {st: '<b>Banco · Ácido-base 11.</b> “Al diluir una solución de un ácido débil, su grado de disociación disminuye.”',
   ans: 'Falso',
   sol: 'El grado de disociación α ≈ √(K<sub>a</sub>/C) <b>aumenta</b> al diluir: el equilibrio se corre hacia donde hay más partículas disueltas. Ácido acético (K<sub>a</sub> = 1,8·10<sup>−5</sup>): α = 1,33 % a 0,10 M, 4,15 % a 0,010 M y 12,6 % a 0,0010 M. El pH sube, pero menos de lo que subiría con un ácido fuerte (de 2,88 a 3,38 al diluir diez veces).'},

  {st: '<b>Banco · Pilas 3.</b> “En una pila, los electrones pasan por el puente salino desde el ánodo hacia el cátodo.”',
   ans: 'Falso',
   sol: 'Los electrones van por el <b>conductor externo</b> (el cable), del ánodo al cátodo. Por el puente salino se mueven <b>iones</b>: los aniones hacia el ánodo, donde se forman cationes, y los cationes hacia el cátodo, donde se consumen. Así se mantiene la neutralidad eléctrica de cada semicelda. Sin puente salino, se acumularía carga y la pila dejaría de funcionar enseguida, que es lo que pregunta la 3 del bloque.'},

  {st: '<b>Banco · Pilas 11.</b> “Cuando una pila se descarga del todo, su potencial llega a cero y en ese momento Q es igual a K.”',
   ans: 'Verdadero',
   sol: 'Mientras funciona, la pila consume reactivos y forma productos: Q aumenta y por Nernst E baja. Cuando E = 0, ya no hay diferencia de potencial que mueva electrones y no circula corriente. Con E = 0, Nernst queda E° = (0,0592/n)·log Q, que es la misma expresión de K: <b>Q = K</b>, la reacción llegó al equilibrio. En el simulacro de la sección 8, la pila Ni | Ag baja de 1,091 a 1,047 V después de 1930 C.'},

  {st: '<b>Banco · Pilas 10.</b> “En la pila Zn | Zn<sup>2+</sup> ‖ Cu<sup>2+</sup> | Cu, aumentar la concentración de Zn<sup>2+</sup> aumenta el potencial de la pila.”',
   ans: 'Falso',
   sol: 'Global: Zn + Cu<sup>2+</sup> → Zn<sup>2+</sup> + Cu, n = 2, Q = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>]. El Zn<sup>2+</sup> es <b>producto</b>: si aumenta, sube Q y E = E° − 0,0296·log Q <b>baja</b>. Con [Zn<sup>2+</sup>] 1,0 M y [Cu<sup>2+</sup>] 0,10 M, E = 1,070 V; al revés, 1,130 V. Aumentar la [Cu<sup>2+</sup>], el reactivo, sí sube E.'},

  {st: '<b>Banco · Pilas 8.</b> “Si el E° de una pila es positivo, su reacción es espontánea en condiciones estándar y su ΔG° es negativo.”',
   ans: 'Verdadero',
   sol: 'ΔG° = −n·F·E°, con n y F positivos: E° &gt; 0 ⇔ <b>ΔG° &lt; 0</b> ⇔ reacción espontánea en condiciones estándar (y K &gt; 1). Ejemplo: la pila Zn | Ag de la integradora “B”, con E° = 1,56 V, ΔG° = −301 kJ y K ≈ 5·10<sup>52</sup>. Fuera del estado estándar el criterio es E (con Nernst), no E°.'},

  {st: '<b>Banco · Electrólisis 6.</b> “La electrólisis del NaCl fundido da sodio metálico en el cátodo, mientras que la del NaCl en solución acuosa da hidrógeno.”',
   ans: 'Verdadero',
   sol: 'En el fundido no hay agua: el único catión que se puede reducir es el Na<sup>+</sup>, y se deposita Na. En solución, compiten Na<sup>+</sup>/Na (−2,71 V) y H<sub>2</sub>O/H<sub>2</sub> (−0,83 V): se reduce el de mayor potencial, el agua, y sale H<sub>2</sub> con OH<sup>−</sup>. Por eso el sodio, el magnesio y el aluminio se obtienen de sales fundidas (pregunta 8 del bloque).'},

  {st: '<b>Banco · Electrólisis 1 y 2.</b> “En una electrólisis el ánodo es el polo negativo, igual que en una pila.”',
   ans: 'Falso',
   sol: 'En los dos tipos de celda el ánodo es donde ocurre la <b>oxidación</b>. Pero en la electrólisis la fuente externa le saca electrones al ánodo, así que está conectado al polo <b>positivo</b>; en la pila el ánodo es el que entrega electrones al circuito y es el negativo. El rol es el mismo, el signo se invierte. En el galvanizado del 06/02/25, las latas (cátodo) van al negativo.'},

  {st: '<b>Banco · Electrólisis 10.</b> “Con la misma carga, se deposita más masa de plata que de cobre.”',
   ans: 'Verdadero',
   sol: 'Leyes de Faraday: la misma carga mueve los mismos moles de electrones. Con 1 F (96 500 C): Ag<sup>+</sup> + e<sup>−</sup> → Ag deposita 1 mol, <b>107,87 g</b>; Cu<sup>2+</sup> + 2 e<sup>−</sup> → Cu deposita 0,5 mol, <b>31,77 g</b>. Dos razones juntas: la plata necesita un electrón por átomo y además tiene mayor masa molar.'},

  {st: '<b>Banco · Electrólisis 7.</b> “En una electrólisis de CuSO<sub>4</sub> con ánodo de cobre, la concentración de Cu<sup>2+</sup> disminuye a medida que se deposita cobre.”',
   ans: 'Falso',
   sol: 'Con <b>ánodo activo</b> de cobre, en el ánodo se oxida el cobre (0,34 V, menor que el 1,23 V del agua) y entra Cu<sup>2+</sup> a la solución; en el cátodo se deposita la misma cantidad. La [Cu<sup>2+</sup>] se mantiene. Con ánodo inerte (platino) sí bajaría, porque en el ánodo se oxidaría el agua. Es el ejercicio 4 de la guía G11B: con 1 F y ánodo de cobre la solución sigue en 2,5 M; con platino baja a 2 M.'},

]);

/* ============ SECCIÓN 7 · Las 5 integradoras ============ */

registerExercises('fiuba-quimica-integradora', '7', [

  {st: 'Integradora del 11/07/24, Ejercicio 1: Mg(s) / Mg<sup>2+</sup>(10<sup>−2</sup> M) // H<sup>+</sup>(pH = 3) / H<sub>2</sub>(g)(p = 0,8 atm) / Pt(s). ¿Cuánto vale el cociente de reacción Q de la global?',
   opts: ['8', '8000', '1,25·10<sup>−4</sup>', '0,8'],
   c: 1,
   ex: 'Global: Mg + 2 H<sup>+</sup> → Mg<sup>2+</sup> + H<sub>2</sub>. Q = [Mg<sup>2+</sup>]·p(H<sub>2</sub>)/[H<sup>+</sup>]<sup>2</sup> = 10<sup>−2</sup> × 0,8 / (10<sup>−3</sup>)<sup>2</sup> = <b>8000</b>, y E = 2,22 V. → 8 se olvida del cuadrado de [H<sup>+</sup>]. → 1,25·10<sup>−4</sup> es 1/Q: reactivos arriba. → 0,8 es sólo la presión del H<sub>2</sub>.'},

  {st: 'Integradora del 18/07/24, Ejercicio 2 b): 0,5 g de NaOH (0,0125 mol) en 400 mL de HCl de pH 2 (0,004 mol). ¿pH final?',
   opts: ['2,00', '7,00', '1,67', '12,33'],
   c: 3,
   ex: 'Dos fuertes: una resta. Sobran 0,0125 − 0,004 = 0,0085 mol de OH<sup>−</sup> en 0,400 L → 0,02125 M → pOH 1,67 → <b>pH 12,33</b>. → 2,00 es el pH antes de agregar la base. → 7,00 sólo si las cantidades fueran iguales. → 1,67 es el pOH.'},

  {st: 'Integradora del 06/02/25, Ejercicio 1 b): carga real 4,17·10<sup>6</sup> C en 18 horas. ¿Qué intensidad se usó?',
   opts: ['64,3 A', '54,7 A', '46,5 A', '32,2 A'],
   c: 0,
   ex: 't = 18 × 3600 = 64 800 s → I = 4,17·10<sup>6</sup> / 64 800 = <b>64,3 A</b>. → 54,7 A es la intensidad teórica, sin el rendimiento del 85 %. → 46,5 A multiplica por 0,85 en vez de dividir. → 32,2 A cuenta un electrón por Zn en vez de dos.'},

  {st: 'Integradora “A”, Ejercicio 1 d): la cuchara tiene un espesor e de cobre y tiene que llegar a “por lo menos, 3 veces el espesor obtenido”, ahora con eficiencia del 89 % y la misma corriente de 0,1 A. ¿Cuánto tiempo más?',
   opts: ['6,7 h: tres espesores más', '2 h: lo mismo que antes', '4,5 h: faltan dos espesores, con el 89 %', '4,0 h: dos espesores, sin la eficiencia'],
   c: 2,
   ex: 'Suponiendo, como en el ítem c), que las primeras 2 h fueron al 100 %, faltan <b>2e</b>: carga teórica 2 × 720 = 1440 C; real 1440 / 0,89 = 1618 C; t = 1618 / 0,1 = 16 180 s ≈ <b>4,5 h</b>. → 6,7 h agrega 3e, que daría 4 veces el espesor. → 2 h es el tiempo de un solo espesor al 100 %. → 4,0 h se olvida de la eficiencia nueva.'},

  {st: 'Integradora “A”, Ejercicio 2 a): en la bomba, 1,22 g de ácido benzoico (9,99·10<sup>−3</sup> mol) desprenden 31,2 kJ. ¿Cuál es la entalpía de combustión a 25 °C?',
   opts: ['−3123 kJ/mol', '−3124 kJ/mol', '−3227 kJ/mol', '−31,2 kJ/mol'],
   c: 1,
   ex: 'En la bomba se mide ΔU = −31,2 / 9,99·10<sup>−3</sup> = −3123 kJ/mol; con Δn<sub>gas</sub> = −0,5, ΔH = ΔU + Δn·R·T = −3123 − 1,24 = <b>−3124 kJ/mol</b>. → −3123 es ΔU, no ΔH. → −3227 es el valor de tabla: se usa el del enunciado. → −31,2 kJ es el calor de la muestra, no por mol.'},

  {st: 'Integradora “B”, Ejercicio 2 c): pila Zn | Zn<sup>2+</sup> (1,0 M) ‖ Ag<sup>+</sup> (x) | Ag con E° = 1,56 V y E = 1,2 V. ¿Cuánto vale [Ag<sup>+</sup>]?',
   opts: ['8,3·10<sup>−7</sup> M', '6,9·10<sup>−13</sup> M', '1,0 M', '9,1·10<sup>−4</sup> M'],
   c: 0,
   ex: '1,2 = 1,56 − 0,0296·log(1/[Ag<sup>+</sup>]<sup>2</sup>) → log(1/[Ag<sup>+</sup>]<sup>2</sup>) = 12,16 → [Ag<sup>+</sup>] = 10<sup>−6,08</sup> = <b>8,3·10<sup>−7</sup> M</b> (con 0,05916 V sale 8,2·10<sup>−7</sup>: es redondeo). → 6,9·10<sup>−13</sup> M se olvida del cuadrado. → 1,0 M daría E = E°. → 9,1·10<sup>−4</sup> M usa n = 1.'},

  {st: 'Integradora “B”, Ejercicio 1 a): se producen 1,86 g de NH<sub>3</sub> a partir de 5,85 g de N<sub>2</sub> con exceso de H<sub>2</sub>. ¿Cuál es el rendimiento?',
   opts: ['73,9 %', '100 %', '29,8 %', '26,1 %'],
   c: 3,
   ex: 'n(N<sub>2</sub>) = 5,85 / 28,01 = 0,2088 mol → NH<sub>3</sub> teórico = 0,4177 mol = 7,113 g → η = 1,86 / 7,113 = <b>26,1 %</b> <span class="muted">(con M(N<sub>2</sub>) = 28,02 sale 26,2 %: es redondeo)</span>. → 73,9 % es lo que no reaccionó. → 100 % supone que todo reacciona. → 29,8 % calcula sobre el H<sub>2</sub> de los datos del ítem c), que contradicen el “exceso” del enunciado.'},

  {st: 'Integradora del 18/07/24, Ejercicio 1 c): 7,8 g de benceno (0,0999 mol) a 20 °C en un recipiente de 30 L, sabiendo que desde 24,5 L ya es todo vapor. ¿Qué presión hay?',
   opts: ['74,7 mmHg: manda la presión de vapor', '37,4 mmHg: la mitad de la presión de vapor', '60,9 mmHg: ya no hay líquido y P = nRT/V', '4,2 mmHg: con la temperatura en °C'],
   c: 2,
   ex: 'Con 30 L &gt; 24,5 L no queda líquido: es un gas común, P = 0,0999 × 0,0821 × 293,15 / 30 = 0,0801 atm = <b>60,9 mmHg</b>, menos que P<sub>v</sub> (vapor insaturado). → 74,7 mmHg vale sólo mientras haya líquido. → La mitad no tiene relación con la cuenta. → 4,2 mmHg usa T = 20 en vez de 293,15 K.'},

]);

registerReveals('fiuba-quimica-integradora', '7', [

  {st: '<b>Integradora · 11/07/24 · Parte A · Ejercicio 1</b> (26 pts: a 10 · b 8 · c 8).<br><br>“Se tiene la siguiente pila que funciona a 25 °C: Mg(s) / Mg<sup>2+</sup>(10<sup>-2</sup> M) // H<sup>+</sup>(pH = 3) / H<sub>2</sub>(g)(p = 0,8 atm) / Pt(s)<br>DATOS: E°Mg<sup>2+</sup>/Mg° = −2,34 v; E°H<sup>+</sup>/H<sub>2</sub>° = 0 v, F = 96500 C/mol, R = 8,314 J/K.mol<br>a) Escribir las reacciones anódicas, catódicas y global balanceadas que describe el funcionamiento de la celda, la ecuación de Nernst para la reacción global de la celda y calcular el potencial de la celda en dichas condiciones<br>b) Realizar un diagrama completo y claro de la celda indicando, polaridad de los electrodos, circulación de los electrones y productos obtenidos en el ánodo y el cátodo<br>c) Si se quiere aumentar el potencial de la celda variando el pH en el cátodo justifique claramente en su hoja de examen, aplicando Nernst si el pH debe disminuir o aumentar para producir el efecto deseado.”',
   ans: 'a) Mg → Mg<sup>2+</sup> + 2 e<sup>−</sup>; 2 H<sup>+</sup> + 2 e<sup>−</sup> → H<sub>2</sub>; E° = 2,34 V; E = 2,22 V · b) Mg ánodo (−), Pt cátodo (+) con H<sub>2</sub>, electrones del Mg al Pt · c) hay que disminuir el pH: unos 59 mV por unidad',
   sol: '<pre class="code-block">Ánodo (oxidación):   Mg(s) → Mg2+ + 2 e−<br>Cátodo (reducción):  2 H+ + 2 e− → H2(g)<br>Global:              Mg(s) + 2 H+ → Mg2+ + H2(g)        n = 2<br>E° = 0 − (−2,34) = +2,34 V<br><br>E = E° − (RT/nF)·ln Q ,  Q = [Mg2+]·p(H2) / [H+]²<br>Q = (10−2 × 0,8) / (10−3)² = 8000<br>E = 2,34 − 0,012844 × ln 8000 = 2,34 − 0,1154 = 2,2246 V ≈ 2,22 V</pre><b>b)</b> Mg a la izquierda: ánodo, polo negativo, se disuelve como Mg<sup>2+</sup>. Pt a la derecha: cátodo, polo positivo, se forma H<sub>2</sub> (el platino sólo conduce). Electrones por el cable del Mg al Pt; en el puente salino, aniones al ánodo y cationes al cátodo.<br><br><b>c)</b> [H<sup>+</sup>] está en el denominador de Q y al cuadrado: bajar el pH sube [H<sup>+</sup>], baja Q y <b>sube E</b>. Con n = 2, cada unidad de pH mueve 0,0592 V: pH 2 da 2,2837 V y pH 4, 2,1654 V. → Errores típicos: restar al revés los E°, poner el Mg o el Pt en Q, olvidar el cuadrado (con Q = 8 sale 2,3133 V).'},

  {st: '<b>Integradora · 11/07/24 · Parte A · Ejercicio 2</b> (26 pts: a 8 · b 11 · c 7).<br><br>“Se prepara una mezcla con 20 g de Fe<sub>2</sub>O<sub>3</sub> y un exceso de aluminio metálico. Cuando se inflama la mezcla, se produce, con gran desprendimiento de calor, la reacción: Fe<sub>2</sub>O<sub>3</sub>(s) + 2 Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) + 2 Fe(s)<br>La entalpía de formación, en condiciones estándar, del Al<sub>2</sub>O<sub>3</sub>(s) es de −1.668 kJ/mol y la del Fe<sub>2</sub>O<sub>3</sub>(s) es de −821 kJ/mol.<br>a) Calcular los gramos de hierro y de óxido de aluminio que pueden obtenerse tras la reacción.<br>b) Escribir la ecuación termoquímica y calcular la cantidad de calor desprendida en la reacción<br>c) Si se sabe que ΔS reacción = −38,52 J·mol<sup>-1</sup>·K<sup>-1</sup>, explique y justifique si existiría alguna temperatura para la cual la reacción no sea espontánea”',
   ans: 'a) 13,99 g de Fe y 12,77 g de Al<sub>2</sub>O<sub>3</sub> · b) ΔH° = −847 kJ/mol; se desprenden 106,1 kJ · c) por encima de 21 989 K dejaría de serlo: existe en la cuenta, es inalcanzable en la práctica',
   sol: '<pre class="code-block">a) M(Fe2O3) = 159,69 g/mol → n = 20 / 159,69 = 0,12524 mol   (el Al está en exceso)<br>   Fe: 2 × 0,12524 = 0,25048 mol × 55,85 = 13,99 g<br>   Al2O3: 0,12524 mol × 101,96 = 12,77 g<br><br>b) ΔH° = −1668 − (−821) = −847 kJ/mol       (Fe y Al: ΔH°f = 0)<br>   Fe2O3(s) + 2 Al(s) → Al2O3(s) + 2 Fe(s)     ΔH° = −847 kJ/mol<br>   Q = 0,12524 × 847 = 106,1 kJ desprendidos<br><br>c) ΔH &lt; 0 y ΔS &lt; 0 → espontánea a baja T<br>   ΔG = 0 en T = 847 000 / 38,52 = 21 989 K</pre>Control de a): se consumen 0,25048 × 26,98 = 6,76 g de Al, y 20 + 6,76 = 13,99 + 12,77, se conserva la masa. En c) la respuesta completa tiene las dos mitades: <b>sí existe</b> en la cuenta (cualquier T &gt; 21 989 K) y es <b>inalcanzable</b>, casi cuatro veces la temperatura de la superficie del Sol: en la práctica la termita es espontánea a toda temperatura. Con 847 / 38,52 sin pasar a joule darías 21,99 K y concluirías lo contrario.'},

  {st: '<b>Integradora · 18/07/24 · Parte A · Ejercicio 1</b> (19 pts).<br><br>“En un recipiente de volumen variable se introducen 7,8 gr de benceno (C<sub>6</sub>H<sub>6</sub>) líquido a 20 ºC. Datos: P<sub>v</sub>(benceno)(20 ºC) = 74,7 mm Hg ; 760 mmHg = 1 atm.<br>a) Calcular cuál debería ser el volumen del recipiente para que exista un equilibrio equimolar líquido-vapor. indique qué consideraciones hace para los cálculos.<br>b) Calcular a partir de qué volumen existirá sólo vapor a esa temperatura. Justifique<br>c) Calcule la presión del sistema si el recipiente tiene un volumen de 30 L.”',
   ans: 'a) 12,2 L · b) a partir de 24,5 L · c) 0,0801 atm (60,9 mmHg).',
   sol: 'La idea de fondo: <b>mientras haya líquido, la presión es la presión de vapor y no depende del volumen</b>; lo que cambia con el volumen es cuánto líquido se evaporó.<pre class="code-block">M(C6H6) = 78,11 g/mol → n total = 7,8 / 78,11 = 0,0999 mol<br>Pv = 74,7 / 760 = 0,09829 atm ; T = 293,15 K<br><br>a) equimolar → n(vapor) = 0,04993 mol<br>   V = 0,04993 × 0,0821 × 293,15 / 0,09829 = 12,2 L<br><br>b) todo vapor → n(vapor) = 0,0999 mol<br>   V = 0,0999 × 0,0821 × 293,15 / 0,09829 = 24,5 L<br>   → para V ≥ 24,5 L no queda líquido<br><br>c) 30 L &gt; 24,5 L → todo vapor, insaturado<br>   P = nRT/V = 0,0999 × 0,0821 × 293,15 / 30 = 0,0801 atm = 60,9 mmHg</pre><b>Consideraciones</b> del ítem a), que valen puntos: el volumen del líquido es despreciable frente al del vapor, y el vapor se comporta como gas ideal.<br><br><b>Control</b> del ítem c): 0,0801 atm &lt; 0,0983 atm de presión de vapor → vapor insaturado, coherente con que no quede líquido. Si hubiera dado <b>más</b> que P<sub>v</sub>, el sistema habría condensado y la presión sería exactamente P<sub>v</sub>.'},

  {st: '<b>Integradora · 18/07/24 · Parte A · Ejercicio 2</b> (21 pts).<br><br>“Se agregan 0,5 g de hidróxido de sodio, NaOH, a 400 mL de una disolución acuosa de ácido clorhídrico, HCl(ac), cuyo pH = 2.<br>a) Escribir la ecuación correspondiente a la reacción y los balances correspondientes.<br>b) Calcular el pH de la disolución resultante. Suponer que no se produce variación en el volumen al añadir el sólido a la disolución acuosa.<br>c) Calcular el volumen de una solución de hidróxido de calcio, Ca(OH)<sub>2</sub> 0,15 M que sería necesario agregar a la disolución de ácido clorhídrico inicial, si se quisiera alcanzar un pH = 7.”',
   ans: 'b) pH = 12,33 · c) 13,3 mL de Ca(OH)<sub>2</sub> 0,15 M.',
   sol: '<pre class="code-block">a) NaOH(s) + HCl(ac) → NaCl(ac) + H2O(l)<br>   Carga: [Na+] + [H+] = [Cl−] + [OH−]<br>   Masa:  [Na+] = C(NaOH) ; [Cl−] = C(HCl)<br><br>b) n(NaOH) = 0,5 / 40,00 = 0,0125 mol<br>   pH = 2 → [HCl] = 10−2 M → n(HCl) = 0,01 × 0,400 = 0,004 mol<br>   0,0125 &gt; 0,004 → sobra BASE<br>   n(OH−) exceso = 0,0085 mol ; [OH−] = 0,0085 / 0,400 = 0,02125 M<br>   pOH = 1,67 → pH = 12,33<br><br>c) equivalencia: n(OH−) = n(H+) = 0,004 mol<br>   Ca(OH)2 aporta 2 OH− → n = 0,004 / 2 = 0,002 mol<br>   V = 0,002 / 0,15 = 0,01333 L = 13,3 mL</pre>Dos cosas que se cobran. En <b>b)</b>, los dos son electrolitos fuertes: <b>no hay equilibrio, hay una resta</b>, y manda lo que sobra. En <b>c)</b>, el pH 7 se justifica porque el producto es <b>CaCl<sub>2</sub>, sal de ácido fuerte con base fuerte</b>, que no hidroliza: en el punto de equivalencia el pH es exactamente 7. Con un ácido débil en lugar del HCl la equivalencia caería en pH básico y el ítem cambiaría por completo.<br><br>Y el clásico: el Ca(OH)<sub>2</sub> aporta <b>2 OH<sup>-</sup> por fórmula</b>. Sin ese 2 el volumen te da 26,7 mL.'},

  {st: '<b>Integradora · 06/02/25 · Parte A · Ejercicio 1</b> (22 pts).<br><br>“Se desea realizar un proceso de galvanizado (depósito de Zn°) por electrólisis de una solución de ZnSO4 sobre unas 4000 latas de hierro para conservas de alimentos. Sabiendo que se requiere un depósito de 0,3 g de Zn sobre cada lata y que el proceso tiene un 85% de Rendimiento<br>a) Escribir las reacciones anódica y catódica y molecular balanceadas, para el proceso del galvanizado de las latas, sabiendo que se oxida el agua.<br>b) Calcular la carga total y la intensidad utilizadas en la celda para realizar el galvanizado de las 4000 latas en 18 horas de trabajo<br>c) Calcular el volumen de O<sub>2</sub>(g) en dm<sup>3</sup>, obtenido en el proceso si se recoge en CNPT (P=1atm, T= 273K)<br>d) Indicar cuál es el pH final de la solución de la batea de galvanizado, si se utilizaron 100 L de solución sin cambio de volumen”',
   ans: 'a) 2 ZnSO<sub>4</sub> + 2 H<sub>2</sub>O → 2 Zn + O<sub>2</sub> + 2 H<sub>2</sub>SO<sub>4</sub> · b) Q = 4,17·10<sup>6</sup> C, I = 64,3 A · c) 205,6 dm<sup>3</sup> · d) pH = 0,44.',
   sol: '<pre class="code-block">a) Cátodo: Zn2+ + 2 e− → Zn        Ánodo: 2 H2O → O2 + 4 H+ + 4 e−<br>   2 ZnSO4 + 2 H2O → 2 Zn + O2 + 2 H2SO4<br><br>b) n(Zn) = 1200 / 65,38 = 18,35 mol → n(e−) = 36,71 mol<br>   Q = 36,71 × 96500 / 0,85 = 4,17·10⁶ C<br>   I = 4,17·10⁶ / 64 800 s = 64,3 A<br><br>c) n(O2) = 18,35 / 2 = 9,18 mol → V = 9,18 × 22,4 = 205,6 dm³<br><br>d) n(H+) = 36,71 mol en 100 L → [H+] = 0,367 M → pH = 0,44</pre>El rendimiento divide la carga: hace falta más que la teórica. En c), la copia corregida que circula tiene 205,5 dm<sup>3</sup> con el puntaje completo; si calculás el O<sub>2</sub> con toda la carga real darían 241,8 dm<sup>3</sup>, así que escribí el supuesto que usás.'},

  {st: '<b>Integradora · 06/02/25 · Parte A · Ejercicio 2</b> (18 pts).<br><br>“El amoníaco y el freón 12 CCl<sub>2</sub>F<sub>2</sub>, se han usado como fluidos de refrigeración. En un refrigerador se comprime un gas, que se condensa. La evaporación de ese líquido es la que proporciona el enfriamiento.<br>a) En función de la naturaleza de las atracciones intermoleculares en cada uno de esos compuestos, estime cuál tendrá mayor presión de vapor y realice un gráfico comparativo aproximado de Pv vs. T, Marcando en el mismo cuáles serían las temperaturas de ebullición<br>b) La entalpía de vaporización del amoníaco es 23,35 kJ/mol ¿Cuántos gramos de amoniaco hay que evaporar para congelar el agua que contiene una cubetera con 500 g agua, y cuya temperatura inicial es de 40°C<br>Datos: ΔHfusion H<sub>2</sub>O= 6,012 kJ/mol , Cp H<sub>2</sub>O(l)= 89,1 J / K· mol”',
   ans: 'a) El NH<sub>3</sub> es el más volátil (Teb −33 °C contra −30 °C del freón) · b) 194 g de NH<sub>3</sub>.',
   sol: '<b>a)</b> El NH<sub>3</sub> tiene puente de hidrógeno, pero es una molécula de 10 electrones; el CCl<sub>2</sub>F<sub>2</sub> es polar, sin puente de H, con 58 electrones y fuerzas de London mucho mayores. Deciden los datos: el NH<sub>3</sub> tiene mayor presión de vapor y menor temperatura de ebullición. Gráfico: dos curvas crecientes, la del NH<sub>3</sub> arriba, que cortan 1 atm en −33 °C y −30 °C.<pre class="code-block">b) n(H2O) = 500 / 18,02 = 27,75 mol<br>   q1 = 27,75 × 89,1 × 40 = 98,9 kJ    (enfriar de 40 a 0 °C)<br>   q2 = 27,75 × 6,012 = 166,8 kJ      (solidificar)<br>   n(NH3) = 265,7 / 23,35 = 11,38 mol → m = 194 g</pre>'},

  {st: '<b>Integradora sin fecha “A” · Parte A · Ejercicio 1</b>.<br><br>“Se quieren reciclar monedas de 10 pesos argentinos para realizar una electrodeposición en una cuchara de níquel y para esto se le ocurre aplicar los conceptos adquiridos en la materia Química. Las monedas de 10 pesos son de material de cobre. Estas se sumergen en una solución acuosa electrolítica de 0,5 M CuSO4 y 0,5 M H2SO4, y se conectan a un generador de corriente que suministra una corriente constante de 0,1 A. La reacción se lleva a cabo a una temperatura constante de 25°C durante un tiempo de 2 horas. La superficie expuesta de la cuchara de níquel es de 50 cm<sup>2</sup>. ρ<sub>cobre</sub> = 8,96 g/cm<sup>3</sup><br>a) Escribir las reacciones anódica, catódica y la reacción global.<br>b) Realizar un esquema de la instalación, indicando la marcha de los electrones y de los iones y la polaridad de los electrodos.<br>c) Calcular la cantidad de cobre (en gramos) que se depositará sobre la cuchara de níquel después de 2 horas de electrodeposición y el espesor del depósito de cobre sobre la cuchara.<br>d) Usted desea comercializar esa cuchara y le indican que debe tener, por lo menos, 3 veces el espesor obtenido en el punto anterior. Cuánto tiempo más debo dejarlo sabiendo que ahora el proceso presenta una eficiencia del 89%<br>E°(O2/H2O) = 1,23 V ; E°(H2O/H2) = −0,83 V ; E°(Cu2+/Cu) = 0,34 V ; E°(Ni2+/Ni) = −0,25 V”',
   ans: 'a) Ánodo: Cu → Cu<sup>2+</sup> + 2 e<sup>−</sup>; cátodo: Cu<sup>2+</sup> + 2 e<sup>−</sup> → Cu · c) 0,237 g y 5,3 µm · d) 16 180 s ≈ 4,5 h más.',
   sol: '<b>a)</b> Se oxida el cobre de las monedas (0,34 V, menor que el 1,23 V del agua) y se reduce el Cu<sup>2+</sup> sobre la cuchara, que va al polo negativo. La global es cobre que pasa de las monedas a la cuchara. <b>b)</b> Electrones de las monedas al generador y del generador a la cuchara; cationes hacia la cuchara, aniones hacia las monedas.<pre class="code-block">c) Q = 0,1 × 7200 = 720 C → n(Cu) = 720 / (2 × 96500) = 3,73·10⁻³ mol<br>   m = 0,237 g → V = 0,0265 cm³ → espesor = 0,0265 / 50 = 5,3·10⁻⁴ cm<br><br>d) faltan 2 espesores: Q = 1440 / 0,89 = 1618 C → t = 16 180 s</pre>“3 veces el espesor” es el total: falta agregar dos, no tres.'},

  {st: '<b>Integradora sin fecha “A” · Parte A · Ejercicio 2</b>.<br><br>“Se lleva a cabo la combustión completa de 1,22 g de ácido benzoico (C<sub>7</sub>H<sub>6</sub>O<sub>2</sub>) en estado sólido, en una bomba calorimétrica (a volumen constante). Si el calor desprendido en la reacción es de 31,2 kJ cuando se forma agua líquida como producto a 25°C, calcular:<br>a) La variación de entalpía de combustión a 25°C y escribir ecuación termoquímica<br>b) El trabajo realizado o consumido por un mol de ácido benzoico, si la combustión ocurriera a presión y temperatura constantes (25°C).”',
   ans: 'a) ΔH°<sub>c</sub> = −3124 kJ/mol · b) W = +1,24 kJ por mol (lo recibe el sistema).',
   sol: '<pre class="code-block">C7H6O2(s) + 15/2 O2(g) → 7 CO2(g) + 3 H2O(l)     Δn = −0,5<br>n = 1,22 / 122,12 = 9,99·10⁻³ mol<br>ΔU = −31,2 / 9,99·10⁻³ = −3123 kJ/mol   (bomba: Qv = ΔU)<br>ΔH = ΔU + Δn·R·T = −3123 − 1,24 = −3124 kJ/mol<br><br>W = −Δn·R·T = +0,5 × 8,31 × 298,15 = +1239 J</pre>W positivo con ΔU = Q + W: el gas disminuye y el entorno comprime al sistema.'},

  {st: '<b>Integradora sin fecha “B” · Parte A · Ejercicio 1</b>.<br><br>“A) El nitrógeno y el hidrógeno gaseosos reaccionan para formar amoníaco gaseoso por un proceso que se denomina Haber. La reacción que ocurre es la siguiente: N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g)<br>A una temperatura de 300°C se produjeron 1,86 g de NH<sub>3</sub> al reaccionar 5,85 g de N<sub>2</sub> con exceso de H<sub>2</sub>. Calcular:<br>a) El rendimiento de la reacción.<br>b) El volumen de amoníaco obtenido si la presión parcial del producto de la reacción fue 25,3 MPa.<br>c) La pureza del H<sub>2</sub> en la mezcla de reactivos si junto con el amoníaco obtenido quedan 0,385 moles de hidrógeno.<br>B) Establecer en qué condiciones debería llevarse a cabo la reacción para que sea espontánea, justificando la respuesta.<br>Datos: S° N<sub>2</sub> (g) = 191,5 J/mol K; S° H<sub>2</sub> (g) = 130,7 J/mol K; S° NH<sub>3</sub> (g) = 192,3 J/mol K; ΔHr = -92,4 kJ/molN<sub>2</sub>”',
   ans: 'a) 26,1 % · b) 20,6 cm<sup>3</sup> · c) 72,4 % en moles (15,9 % en masa) · B) espontánea por debajo de 464 K, y favorecida por presión alta.',
   sol: '<pre class="code-block">a) n(N2) = 0,2088 mol → NH3 teórico = 7,113 g → η = 1,86 / 7,113 = 26,1 %<br>b) V = 0,1092 × 0,0821 × 573,15 / 249,7 = 0,0206 L<br>c) H2 inicial = 1,5 × 0,1092 + 0,385 = 0,5488 mol<br>   x(H2) = 0,5488 / (0,5488 + 0,2088) = 72,4 %<br>B) ΔS° = −199,0 J/K → ΔG° &lt; 0 si T &lt; 92 400 / 199,0 = 464 K</pre>Ojo: con los datos de c) el H<sub>2</sub> no alcanza para todo el N<sub>2</sub> (harían falta 0,626 mol), o sea que no está en exceso. Resolvé a) sobre el N<sub>2</sub>, como dice el enunciado, y anotá la observación.'},

  {st: '<b>Integradora sin fecha “B” · Parte A · Ejercicio 2</b>.<br><br>“Se construye una pila en la cual uno de los electrodos es Zn metálico sumergido en una disolución acuosa 1,0 M de ZnSO<sub>4</sub>. El otro electrodo está constituido por un electrodo de Ag metálica sumergida en una disolución de iones Ag<sup>+</sup> de concentración desconocida.<br>a) Escribir las reacciones anódica, catódica y global, balanceadas, que describen el funcionamiento de la pila, justificando la respuesta.<br>b) Realizar un diagrama completo y claro de la celda indicando nombre y polaridad de los electrodos, circulación de los electrones y productos obtenidos en el ánodo y el cátodo.<br>c) Calcular la concentración de los iones Ag<sup>+</sup> de la disolución correspondiente, sabiendo que el potencial de la pila es 1,2 V.<br>d) Calcular la constante de equilibrio del proceso que tiene lugar en la pila.<br>Datos: E°(Zn2+/Zn)= −0,76 V; E°(Ag+/Ag)= 0,80 V; E°(O2/H2O)= 1,23 V ; E°(H2O/H2)= −0,83 V.”',
   ans: 'a) Zn + 2 Ag<sup>+</sup> → Zn<sup>2+</sup> + 2 Ag, E° = 1,56 V · c) [Ag<sup>+</sup>] = 8,3·10<sup>−7</sup> M · d) K ≈ 5·10<sup>52</sup>.',
   sol: '<b>a)</b> Se reduce el par de mayor E° (Ag<sup>+</sup>/Ag): la plata es el cátodo, polo positivo; el Zn es el ánodo, polo negativo. Los datos del agua no se usan.<pre class="code-block">c) 1,2 = 1,56 − (0,0592/2)·log(1 / [Ag+]²)<br>   log(1 / [Ag+]²) = 12,16 → [Ag+] = 8,3·10⁻⁷ M<br><br>d) log K = 2 × 1,56 / 0,0592 = 52,7 → K ≈ 5·10⁵²</pre>Sin el cuadrado de [Ag<sup>+</sup>] darías 6,9·10<sup>−13</sup> M.'},

]);

/* ============ SECCIÓN 8 · Simulacro ============ */

registerExercises('fiuba-quimica-integradora', '8', [

  {st: 'Simulacro, Ejercicio 1 a): Ni(s) | Ni<sup>2+</sup> (0,010 M) ‖ Ag<sup>+</sup> (0,50 M) | Ag(s), E° = 1,05 V. ¿Cuánto vale E a 25 °C?',
   opts: ['1,05 V', '1,100 V', '1,091 V', '1,009 V'],
   c: 2,
   ex: 'Q = [Ni<sup>2+</sup>]/[Ag<sup>+</sup>]<sup>2</sup> = 0,010 / 0,25 = 0,040 → E = 1,05 − 0,0296 × log 0,040 = 1,05 + 0,0414 = <b>1,091 V</b>. Q &lt; 1, así que E &gt; E°. → 1,05 V ignora las concentraciones. → 1,100 V se olvida del cuadrado de [Ag<sup>+</sup>] (Q = 0,02). → 1,009 V resta 0,0414 en vez de sumarlo.'},

  {st: 'Simulacro, Ejercicio 1 d): el electrodo de níquel perdió 0,587 g (0,01000 mol). ¿Cuánta masa ganó el electrodo de plata?',
   opts: ['2,16 g', '1,08 g', '0,587 g', '4,32 g'],
   c: 0,
   ex: 'Por la global, Ni + 2 Ag<sup>+</sup> → Ni<sup>2+</sup> + 2 Ag: por cada mol de Ni se depositan <b>dos</b> de Ag. 0,02000 mol × 107,87 = <b>2,16 g</b>, con 1930 C de carga. → 1,08 g toma un Ag por Ni. → 0,587 g supone que la masa pasa tal cual de un electrodo al otro. → 4,32 g cuenta cuatro Ag por Ni.'},

  {st: 'Simulacro, Ejercicio 2 a): 2 NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g), ΔH° = +135,6 kJ. ¿Qué calor intercambia la descomposición de 10,0 g (0,1190 mol) de NaHCO<sub>3</sub>?',
   opts: ['16,14 kJ', '135,6 kJ', '8,07 kJ liberados', '8,07 kJ absorbidos'],
   c: 3,
   ex: 'El ΔH es por <b>2 mol</b> de NaHCO<sub>3</sub>: q = 0,1190/2 × 135,6 = <b>8,07 kJ</b>, y como ΔH &gt; 0, el sistema los <b>absorbe</b>. → 16,14 kJ usa el ΔH por mol de NaHCO<sub>3</sub>, el doble. → 135,6 kJ es por mol de reacción, no por 10 g. → “Liberados” invierte el signo.'},

  {st: 'Simulacro, Ejercicio 2 c): ΔH° = +135,6 kJ y ΔS° = +334,1 J/K. ¿A partir de qué temperatura es espontánea la descomposición?',
   opts: ['0,406 K', '405,9 K (unos 133 °C)', '298 K', 'Nunca, porque ΔH &gt; 0'],
   c: 1,
   ex: 'Con los dos positivos es espontánea a <b>alta</b> temperatura: T &gt; 135 600 / 334,1 = <b>405,9 K</b>. Por eso en la alacena no se descompone y en el horno a 180 °C (ΔG = −15,8 kJ) sí. → 0,406 K divide kJ por J. → 298 K es 25 °C, donde ΔG° = +36,0 kJ: no espontánea. → ΔH &gt; 0 no lo impide si ΔS &gt; 0.'},

  {st: 'Simulacro, Ejercicio 2 b): la descomposición ocurre en un horno a 180 °C y 1 atm, con Δn<sub>gas</sub> = +2. ¿Cuánto vale el trabajo por mol de reacción, con la convención de la cátedra?',
   opts: ['−7,53 kJ: el sistema se expande y realiza trabajo sobre el entorno', '+7,53 kJ: el entorno comprime al sistema', '−2,99 kJ', '0: los sólidos no cambian de volumen'],
   c: 0,
   ex: 'W = −Δn·R·T = −2 × 8,31 × 453,15 = <b>−7531 J</b>: negativo, el sistema entrega trabajo porque se forman 2 mol de gas. ΔU = 135,6 − 7,53 = 128,1 kJ. → El signo positivo sería para una contracción. → −2,99 kJ usa T = 180 en vez de 453,15 K. → Los gases que se forman sí ocupan volumen.'},

  {st: 'Simulacro, Parte B 4: “Al diluir diez veces una solución de ácido acético, su pH aumenta una unidad.” ¿Qué pasa en realidad?',
   opts: ['Sube una unidad, como dice el enunciado', 'No cambia, porque el K<sub>a</sub> es el mismo', 'Sube unas 0,5 unidades: [H<sup>+</sup>] ≈ √(K<sub>a</sub>·C) se divide por √10', 'Baja 0,5 unidades'],
   c: 2,
   ex: 'Para un débil, [H<sup>+</sup>] ≈ √(K<sub>a</sub>·C): diluir diez veces divide [H<sup>+</sup>] por √10 ≈ 3,16, y el pH sube unas <b>0,5</b> unidades (de 2,88 a 3,38 con 0,10 y 0,010 M). El enunciado es falso. → Una unidad sería la de un ácido fuerte. → El K<sub>a</sub> no cambia, pero la concentración sí. → Diluir un ácido nunca baja el pH.'},

]);

registerReveals('fiuba-quimica-integradora', '8', [

  {st: '<b>Simulacro · Parte A · Ejercicio 1 · 22 puntos</b> (a 5 · b 5 · c 6 · d 6). <span class="muted">Examen propio, no de la cátedra.</span><br><br>Se construye una pila a 25 °C con un electrodo de níquel sumergido en 100 mL de NiSO<sub>4</sub> 0,010 M y un electrodo de plata sumergido en 100 mL de AgNO<sub>3</sub> 0,50 M, unidas por un puente salino de KNO<sub>3</sub>. Datos: E°(Ni<sup>2+</sup>/Ni) = −0,25 V; E°(Ag<sup>+</sup>/Ag) = 0,80 V; E°(O<sub>2</sub>/H<sub>2</sub>O) = 1,23 V; E°(H<sub>2</sub>O/H<sub>2</sub>) = −0,83 V.<br>a) Escribir las reacciones anódica, catódica y global balanceadas, justificando, y calcular el potencial de la pila.<br>b) Diagrama completo con nombre y polaridad de los electrodos, electrones, iones del puente salino y productos; notación de la pila.<br>c) Calcular ΔG° y K. ¿Qué indica su valor?<br>d) El electrodo de níquel perdió 0,587 g: carga que circuló, masa que ganó el de plata y potencial en ese momento.',
   ans: 'a) Ni → Ni<sup>2+</sup> + 2 e<sup>−</sup>; Ag<sup>+</sup> + e<sup>−</sup> → Ag; E° = 1,05 V; E = 1,091 V · c) ΔG° = −203 kJ; K ≈ 3·10<sup>35</sup> · d) 1930 C; 2,16 g de Ag; E = 1,047 V',
   sol: '<pre class="code-block">a) Ni(s) + 2 Ag+ → Ni2+ + 2 Ag(s)      n = 2 ;  E° = 0,80 − (−0,25) = 1,05 V<br>   Q = 0,010 / 0,50² = 0,040 → E = 1,05 − 0,0296 × log 0,040 = 1,091 V<br><br>c) ΔG° = −2 × 96 500 × 1,05 = −202 650 J ≈ −203 kJ<br>   log K = 2 × 1,05 / 0,0592 = 35,47 → K ≈ 3·10³⁵<br><br>d) n(Ni) = 0,587 / 58,69 = 0,01000 mol → n(e−) = 0,02000 mol → Q = 1930 C<br>   Ag = 0,02000 × 107,87 = 2,16 g<br>   [Ag+] = (0,050 − 0,020) / 0,100 = 0,300 M ;  [Ni2+] = (0,0010 + 0,0100) / 0,100 = 0,110 M<br>   E = 1,05 − 0,0296 × log(0,110 / 0,300²) = 1,047 V</pre>Justificación de a): se reduce el par de mayor E° y se oxida el de menor; el agua no participa porque no le gana a ninguno de los dos (−0,83 &lt; 0,80 para reducirse; 1,23 &gt; −0,25 para oxidarse). b) Ni ánodo (−), Ag cátodo (+), electrones por el cable del Ni a la Ag, NO<sub>3</sub><sup>−</sup> hacia el ánodo y K<sup>+</sup> hacia el cátodo. Notación: Ni(s) | Ni<sup>2+</sup> (0,010 M) ‖ Ag<sup>+</sup> (0,50 M) | Ag(s). c) K enorme: la reacción está totalmente desplazada a los productos. d) El potencial baja a medida que la pila se descarga.'},

  {st: '<b>Simulacro · Parte A · Ejercicio 2 · 18 puntos</b> (a 6 · b 6 · c 6). <span class="muted">Examen propio, no de la cátedra.</span><br><br>2 NaHCO<sub>3</sub>(s) → Na<sub>2</sub>CO<sub>3</sub>(s) + CO<sub>2</sub>(g) + H<sub>2</sub>O(g). Datos: ΔH°<sub>f</sub> (kJ/mol) NaHCO<sub>3</sub> −950,8; Na<sub>2</sub>CO<sub>3</sub> −1130,7; CO<sub>2</sub> −393,5; H<sub>2</sub>O(g) −241,8. S° (J/mol·K) 101,7; 135,0; 213,7; 188,8.<br>a) Ecuación termoquímica y calor al descomponer 10,0 g de NaHCO<sub>3</sub>; ¿se absorbe o se libera?<br>b) Trabajo y ΔU por mol de reacción en un horno a 180 °C y 1 atm; ¿quién hace trabajo sobre quién?<br>c) ΔS° y ΔG° a 25 °C; temperatura a partir de la cual es espontánea; ¿lo es a 180 °C?',
   ans: 'a) ΔH° = +135,6 kJ; 8,07 kJ absorbidos · b) W = −7,53 kJ (el sistema sobre el entorno), ΔU = 128,1 kJ · c) ΔS° = +334,1 J/K, ΔG° = +36,0 kJ; desde 405,9 K (133 °C); a 180 °C sí (−15,8 kJ)',
   sol: '<pre class="code-block">a) ΔH° = (−1130,7 − 393,5 − 241,8) − 2(−950,8) = +135,6 kJ<br>   n = 10,0 / 84,01 = 0,1190 mol → q = 0,1190 / 2 × 135,6 = 8,07 kJ absorbidos<br><br>b) Δn(gas) = +2 → W = −2 × 8,31 × 453,15 = −7531 J ≈ −7,53 kJ<br>   ΔU = ΔH + W = 135,6 − 7,53 = 128,1 kJ<br><br>c) ΔS° = 135,0 + 213,7 + 188,8 − 2 × 101,7 = +334,1 J/K<br>   ΔG°(298 K) = 135 600 − 298,15 × 334,1 = +35 990 J ≈ +36,0 kJ<br>   T cruce = 135 600 / 334,1 = 405,9 K ≈ 133 °C<br>   ΔG(453 K) = 135 600 − 453,15 × 334,1 = −15 800 J</pre>El ΔH es por 2 mol de NaHCO<sub>3</sub>: de ahí el /2. W &lt; 0 con la convención de la cátedra porque el sistema se expande (se forman 2 mol de gas). ΔH &gt; 0 y ΔS &gt; 0: espontánea a alta temperatura, se suponen ΔH y ΔS constantes con T.'},

  {st: '<b>Simulacro · Parte B · 60 puntos</b> (10 cada uno). <span class="muted">Examen propio, no de la cátedra.</span><br><br>Justificar mediante razonamiento deductivo si son V o F:<br>1) En la electrólisis de una solución acuosa de cloruro de sodio con electrodos inertes, en el cátodo se deposita sodio metálico.<br>2) Una reacción con ΔH &lt; 0 y ΔS &gt; 0 es espontánea a cualquier temperatura.<br>3) La presión de vapor de un líquido encerrado en un recipiente aumenta si se agranda el volumen del recipiente, mientras quede líquido.<br>4) Al diluir diez veces una solución de ácido acético, su pH aumenta una unidad.<br>5) Las especies Na<sup>+</sup>, Mg<sup>2+</sup> y Ne tienen el mismo número de electrones y, por lo tanto, el mismo radio.<br>6) Un metal que cristaliza en una red cúbica centrada en el cuerpo tiene 2 átomos por celda unitaria.',
   ans: '1 F · 2 V · 3 F · 4 F · 5 F · 6 V',
   sol: '<b>1 F.</b> En el cátodo compiten Na<sup>+</sup>/Na (−2,71 V) y H<sub>2</sub>O/H<sub>2</sub> (−0,83 V): se reduce el agua, sale H<sub>2</sub> y queda OH<sup>−</sup>. El sodio sale del NaCl fundido.<br><b>2 V.</b> ΔG = ΔH − TΔS: los dos términos son negativos a toda T &gt; 0, así que ΔG &lt; 0 siempre.<br><b>3 F.</b> La presión de vapor depende sólo de la temperatura: si se agranda el recipiente se evapora más líquido, y la presión vuelve a ser la misma.<br><b>4 F.</b> [H<sup>+</sup>] ≈ √(K<sub>a</sub>·C): diluir diez veces sube el pH unas 0,5 unidades (2,88 a 3,38), porque además crece el grado de disociación.<br><b>5 F.</b> Son isoelectrónicas (10 electrones), pero con 12, 11 y 10 protones: más carga nuclear achica la nube. Mg<sup>2+</sup> &lt; Na<sup>+</sup> &lt; Ne.<br><b>6 V.</b> 8 vértices × 1/8 + 1 en el centro = 2.<br><br>La justificación completa de cada uno, con el método de la sección 6, está en la resolución del texto de la sección 8.'},

]);
