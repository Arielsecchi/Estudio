// Física I · UTN FRBA · Óptica geométrica
// Fuentes: 1os parciales de la cátedra Martinelli 2009, 2010, 2011, 2012, 2014, 2016 y 2017 (UTN FRBA);
// 1er parcial 2023 tema A (Prof. Dibarbora, UTN.BA); y 3 problemas de finales de UTN.BA relevados
// (lámina de caras paralelas, espejo del dentista del final 12/12/23 y espejo que proyecta el triple).
// Convención de la cátedra en TODAS las resoluciones: origen en el espejo / centro óptico,
// x positivo hacia la izquierda (lado del objeto), y positivo hacia arriba.

/* ============ UNIDAD 1 · CONVENCIÓN DE SIGNOS (solo quiz) ============ */
registerExercises('fisica1-utn-optica', '1', [
  {st: 'Con la convención de la cátedra (luz que llega desde la izquierda, origen en el espejo o en el centro óptico, x positivo hacia la izquierda), ¿qué signo tiene siempre la posición de un objeto real?',
   opts: ['x &lt; 0, porque el objeto está antes del origen.',
          'x &gt; 0, porque el objeto está del lado hacia el que apunta el eje x positivo.',
          'x = 0, porque el objeto se mide desde el foco.',
          'Depende: x &gt; 0 en espejos y x &lt; 0 en lentes.'],
   c: 1,
   ex: 'Es la única constante de todos los problemas de la unidad: el eje x apunta hacia la izquierda, que es justo el lado donde está el objeto real, así que <b>x &gt; 0 siempre</b> (salvo que el enunciado hable explícitamente de un objeto virtual, cosa que no pasa en ninguno de los ejercicios relevados). Por eso, si terminás un problema con x negativo, no es que descubriste algo raro: te equivocaste en el signo del aumento. ▸ Por qué las otras: la primera confunde "antes" en el camino de la luz con el signo del eje; la tercera mide desde el foco cuando el origen está en el vértice o en el centro óptico; la cuarta inventa una diferencia que no existe: lo que cambia entre espejo y lente es el signo de x′ de la imagen real, no el del objeto.'},

  {st: 'Un ESPEJO esférico forma una imagen que "cae sobre una pantalla plana". ¿Qué signos quedan fijados con esa sola frase?',
   opts: ['x′ &lt; 0 y A &gt; 0 (imagen virtual y derecha).',
          'x′ &gt; 0 y A &gt; 0 (imagen real y derecha).',
          'x′ &lt; 0 y A &lt; 0 (imagen virtual e invertida).',
          'x′ &gt; 0 y A &lt; 0 (imagen real e invertida).'],
   c: 3,
   ex: 'Una pantalla solo recoge luz que efectivamente llega hasta ahí: <b>pantalla = imagen real</b>. En un espejo la luz vuelve para el lado del objeto, así que la imagen real queda delante del espejo, con <b>x′ &gt; 0</b>. Y con objeto real, imagen real implica siempre <b>imagen invertida</b>, o sea <b>A &lt; 0</b>. Los dos signos salen de la misma palabra, por eso "cae sobre una pantalla" nunca es decorativo (parciales 2012 y 2014). ▸ Por qué las otras: las dos que ponen x′ &lt; 0 tratan la imagen como virtual, y una imagen virtual no se puede proyectar porque no hay luz ahí; la segunda acierta el x′ pero deja A positivo, que es la trampa nº 1 de la guía.'},

  {st: '"Un espejo esférico cóncavo forma una imagen invertida, 4 veces mayor, de un objeto real" (1er parcial 2009). ¿Qué valor de aumento entra en las ecuaciones?',
   opts: ['A = +4', 'A = −4', 'A = +0,25', 'A = −0,25'],
   c: 1,
   ex: '"4 veces mayor" te da el <b>módulo</b> (|A| = 4) y "invertida" te da el <b>signo</b>: <b>A = −4</b>. El enunciado nunca te escribe el signo, lo tenés que poner vos. Con A = −4 sale x′ = 4x, separación |x − x′| = 60 cm ⟹ x = 20 cm, x′ = 80 cm y R = 32 cm. ▸ Por qué las otras: con A = +4 obtenés x′ = −4x (imagen virtual), la ecuación te devuelve f negativa —un espejo convexo— y eso contradice el "cóncavo" del propio enunciado; con |A| = 0,25 estás invirtiendo la razón y calculando el objeto como 4 veces mayor que la imagen, al revés de lo que dice el texto.'},

  {st: 'Resolviste un espejo y te quedó 1/x + 1/x′ = 1/16 cm⁻¹. El enunciado pide <b>el radio de curvatura</b>. ¿Qué contestás?',
   opts: ['R = 8 cm', 'R = 16 cm', 'R = 32 cm', 'R = 64 cm'],
   c: 2,
   ex: 'La ecuación de la cátedra ya lo trae escrito: <b>1/x + 1/x′ = 1/f = 2/R</b>, o sea <b>R = 2f</b>. Si 1/f = 1/16 cm⁻¹ entonces f = 16 cm y <b>R = 32 cm</b>. Subrayá en el enunciado si te piden f o R antes de arrancar: el parcial 2009 y el 2017 piden <b>el radio</b>, mientras que el 2012 y el 2014 piden <b>la distancia focal</b>. ▸ Por qué las otras: 16 cm es la distancia focal, la respuesta a otra pregunta; 8 cm sale de dividir f por 2 en vez de multiplicar; 64 cm sale de duplicar dos veces. Ojo: en <b>lentes delgadas</b> esta relación no existe, ahí f es f y no hay ningún R que calcular.'},

  {st: 'Un espejo forma una imagen real de un objeto real: x = 20 cm y x′ = 80 cm. ¿Cuánto vale la distancia entre el objeto y la imagen?',
   opts: ['60 cm, porque la separación es |x − x′|.',
          '100 cm, porque hay que sumar x + x′.',
          '40 cm, porque hay que restar y dividir por 2.',
          'No se puede saber sin conocer f.'],
   c: 0,
   ex: 'x y x′ se miden <b>sobre el mismo eje, desde el mismo origen y con el mismo sentido positivo</b>, así que la separación es siempre <b>|x − x′|</b> = |20 − 80| = 60 cm. La resta se encarga sola de los signos. Fijate que en el espejo del dentista (x = 1,5 cm, x′ = −6 cm) la misma fórmula da |1,5 − (−6)| = 7,5 cm: la resta termina sumando porque la imagen está detrás del espejo. Por eso el módulo de la resta funciona en los dos casos y "sumar" no. ▸ Por qué las otras: x + x′ = 100 cm es la trampa nº 3 y arruina el problema entero (en el 2009 te devuelve x = 12 cm en vez de 20); 40 cm no sale de ninguna cuenta con sentido; y f no hace falta, la separación es un dato puramente geométrico.'},

  {st: 'En una LENTE delgada, con objeto real, ¿qué implica que la imagen sea REAL?',
   opts: ['x′ &gt; 0, del mismo lado que el objeto, y la imagen es derecha.',
          'x′ &gt; 0, del otro lado de la lente, y la imagen es invertida.',
          'x′ &lt; 0, del otro lado de la lente, y la imagen es invertida.',
          'x′ &lt; 0, del mismo lado que el objeto, y la imagen es derecha.'],
   c: 2,
   ex: 'En una lente la luz atraviesa y sigue de largo, así que la imagen real se forma <b>del otro lado</b>, y con x positivo hacia la izquierda eso significa <b>x′ &lt; 0</b>. Como A = +x′/x en lentes, un x′ negativo da A negativo, o sea <b>invertida</b>. Todo cierra solo: no hace falta memorizar la orientación aparte. ▸ Por qué las otras: las dos que ponen x′ &gt; 0 describen la imagen <b>virtual</b> de la lente (caso lupa: mismo lado, derecha); y la última mezcla el signo correcto con el lado equivocado. Acordate de que en <b>espejos</b> es al revés: ahí la imagen real tiene x′ &gt; 0.'}
]);

/* ============ UNIDAD 2 · ESPEJOS ESFÉRICOS ============ */
registerReveals('fisica1-utn-optica', '2', [
  {st: '<b>1)</b> Un espejo esférico cóncavo forma una imagen invertida, 4 veces mayor, de un objeto real. La distancia entre el objeto y la imagen es 60cm.<br>a) Calcule la posición del objeto, la posición de la imagen y el radio de curvatura del espejo.<br>b) Dibuje a escala la marcha de rayos.<br><span class="muted">1er parcial 2009, tema 1 — 22/10/09 — Dra. Patricia Martinelli, UTN FRBA.</span>',
   ans: 'a) x = 20 cm · x′ = 80 cm · R = 32 cm (f = 16 cm). Imagen real, invertida y 4 veces mayor. b) El objeto queda entre F (16 cm) y C (32 cm).',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice V del espejo, x positivo hacia la izquierda (lado del objeto), y positivo hacia arriba. Esto va escrito en la hoja: se puntúa aparte.<br><br><b>Paso 2 · Traducción a signos.</b> Objeto real ⟹ x &gt; 0. "Invertida" ⟹ A &lt; 0; "4 veces mayor" ⟹ |A| = 4. Entonces <b>A = −4</b>.<br><br><b>Paso 3 · Aumento.</b> A = y′/y = −x′/x = −4 ⟹ <b>x′ = 4x</b>. Como x &gt; 0, queda x′ &gt; 0: imagen <b>real</b>, delante del espejo, del mismo lado que el objeto. Coherente con "invertida".<br><br><b>Paso 4 · Separación objeto–imagen.</b> |x − x′| = 60 cm ⟹ 4x − x = 60 cm ⟹ 3x = 60 cm ⟹ <b>x = 20 cm</b> y <b>x′ = 4·20 = 80 cm</b>.<br><br><b>Paso 5 · Ecuación del espejo.</b> 1/x + 1/x′ = 1/f = 2/R<br>1/20 + 1/80 = 4/80 + 1/80 = 5/80 = 1/16 cm⁻¹<br>⟹ f = 16 cm y, como piden el <b>radio</b>, <b>R = 2f = 32 cm</b>.<br><br><b>Paso 6 · Chequeo de coherencia.</b> f = +16 cm &gt; 0 ⟹ espejo cóncavo, tal como dice el enunciado. Y el objeto (20 cm) quedó <b>entre F = 16 cm y C = 32 cm</b>, que es exactamente la zona donde un cóncavo da imagen real, invertida y ampliada. Todo cierra.<br><br><b>Paso 7 · Inciso b).</b> Escala sugerida: 1 cm de hoja = 10 cm reales. Marcá V, F a 16 cm y C a 32 cm; el objeto a 20 cm; trazá el rayo paralelo al eje (se refleja por F), el que pasa por F (sale paralelo) y el que va al vértice (refleja simétrico). Los tres se cortan a 80 cm, del lado del objeto, con la flecha <b>hacia abajo</b> y 4 veces más larga.'},

  {st: '<b>A1:</b> Un objeto, de altura 0.6cm, se encuentra delante de un espejo esférico cóncavo. Se desea que la imagen de dicho objeto se forme sobre una pantalla ubicada a 8m del espejo y que el tamaño de la misma sea 2.4cm.<br>a) Determine en qué posición debe estar el objeto y qué distancia focal debe tener el espejo. Indique si la imagen es real o virtual y si es directa o invertida.<br>b) Realice a escala el trazado de rayos.<br><span class="muted">1er parcial 2012 — 18/10/12 — Prof. H. Patricia Martinelli, UTN FRBA.</span>',
   ans: 'a) x = 2 m · f = 1,6 m (R = 3,2 m) · A = −4 · imagen REAL e INVERTIDA, de 2,4 cm. b) F a 1,6 m, C a 3,2 m, objeto a 2 m, pantalla a 8 m.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice, x positivo hacia la izquierda, y positivo hacia arriba.<br><br><b>Paso 2 · Leer bien el dato de los 8 m.</b> "Una pantalla ubicada a 8m del espejo" es la <b>posición de la imagen</b>: <b>x′ = 8 m</b>, no la del objeto. Confundir esto arruina los dos incisos.<br><br><b>Paso 3 · Traducción a signos.</b> Se forma sobre una pantalla ⟹ imagen <b>real</b> ⟹ x′ &gt; 0 y, con objeto real, <b>invertida</b> ⟹ y′ = <b>−2,4 cm</b> (el enunciado da el tamaño, vos ponés el signo).<br><br><b>Paso 4 · Aumento.</b> A = y′/y = −2,4/0,6 = <b>−4</b>. Y A = −x′/x ⟹ −4 = −8 m / x ⟹ <b>x = 8/4 = 2 m</b>.<br><br><b>Paso 5 · Ecuación del espejo.</b> 1/x + 1/x′ = 1/f<br>1/2 m + 1/8 m = 4/8 + 1/8 = 5/8 m⁻¹<br>⟹ <b>f = 8/5 = 1,6 m</b> (y R = 2f = 3,2 m, por si lo piden).<br><br><b>Paso 6 · Unidades.</b> El objeto viene en cm y las distancias en m: el <b>aumento es adimensional</b>, así que y′ sale en cm sin convertir nada; pero para calcular f pasá todo a metros antes de escribir la ecuación.<br><br><b>Paso 7 · Coherencia.</b> f = 1,6 m &gt; 0 ⟹ cóncavo ✓. El objeto a 2 m quedó entre F = 1,6 m y C = 3,2 m ⟹ zona de imagen real, invertida y ampliada ✓. Y |A| = x′/x = 8/2 = 4 = 2,4/0,6 ✓.<br><br><b>Respuesta del a):</b> el objeto va a <b>2 m</b> del espejo, la focal debe ser <b>1,6 m</b>, y la imagen es <b>real e invertida</b>.'},

  {st: '<b>A1:</b> Un objeto de altura 2mm se encuentra 10cm delante de un espejo esférico. La imagen de dicho objeto cae sobre una pantalla plana colocada 40cm delante del espejo.<br>a) Calcule la distancia focal del espejo, e indique si el mismo es cóncavo o convexo.<br>b) Determine el tamaño de la imagen, y si es directa o invertida.<br><span class="muted">1er parcial 2014 — curso I1021 — 21/8/2014 — Prof. Patricia Martinelli, UTN.BA.</span>',
   ans: 'a) f = 8 cm &gt; 0 ⟹ espejo CÓNCAVO (R = 16 cm). b) A = −4 ⟹ y′ = −8 mm: imagen de 8 mm, real e INVERTIDA.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice, x positivo hacia la izquierda, y positivo hacia arriba.<br><br><b>Paso 2 · Traducción.</b> y = 2 mm; x = 10 cm; la imagen <b>cae sobre una pantalla colocada delante del espejo</b> ⟹ es <b>real</b> y está del lado del objeto ⟹ <b>x′ = +40 cm</b>.<br><br><b>Paso 3 · Inciso a), ecuación del espejo.</b><br>1/x + 1/x′ = 1/f<br>1/10 cm + 1/40 cm = 4/40 + 1/40 = 5/40 = 1/8 cm⁻¹<br>⟹ <b>f = 8 cm</b>. Como <b>f &gt; 0, el espejo es CÓNCAVO</b> (y R = 2f = 16 cm).<br><br><b>Paso 4 · Inciso b), aumento.</b><br>A = y′/y = −x′/x = −40/10 = <b>−4</b><br>y′ = A · y = −4 · 2 mm = <b>−8 mm</b>.<br>El módulo es el tamaño (<b>8 mm</b>) y el signo menos dice que la imagen es <b>invertida</b>. Contestar solo "8 mm" deja el inciso b) incompleto: el enunciado pregunta explícitamente si es directa o invertida.<br><br><b>Paso 5 · Trampas de este ejercicio.</b> Si por costumbre le ponés x′ = −40 cm te queda 1/10 − 1/40 = 3/40 ⟹ f = 13,3 cm, un número que no cierra con nada y que además te hace dudar del tipo de espejo. Y las <b>unidades vienen mezcladas a propósito</b>: el objeto en mm y las distancias en cm. Como el aumento es adimensional, y′ sale en mm directo; lo que sí tiene que estar en una sola unidad es la ecuación de f.<br><br><b>Paso 6 · Coherencia.</b> f = 8 cm, C = 16 cm, objeto a 10 cm: queda <b>entre F y C</b>, la zona de imagen real, invertida y ampliada ✓ (|A| = 4).'},

  {st: '<b>A1:</b> La imagen de un objeto por un espejo esférico cóncavo es real, está ubicada a 15 cm del vértice del espejo y tiene la mitad de tamaño que el objeto.<br>a) Determine la posición del objeto y el radio del espejo.<br>b) Realice a escala el trazado de rayos.<br><span class="muted">1er parcial 2017 — curso R1022 — 26/6/2017 — Prof. Patricia Martinelli, UTN FRBA.</span>',
   ans: 'a) x = 30 cm · f = 10 cm · <b>R = 20 cm</b>. b) Objeto a 30 cm (más allá de C = 20 cm), imagen real, invertida y de la mitad de tamaño, a 15 cm.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice V, x positivo hacia la izquierda, y positivo hacia arriba.<br><br><b>Paso 2 · Traducción a signos.</b> La imagen es <b>real</b> ⟹ en un espejo eso es <b>x′ &gt; 0</b> ⟹ <b>x′ = 15 cm</b>. "La mitad de tamaño" da |A| = 0,5, y como imagen real con objeto real es siempre invertida, <b>A = −0,5</b>.<br><br><b>Paso 3 · Aumento.</b> A = −x′/x ⟹ −0,5 = −15 cm / x ⟹ <b>x = 30 cm</b>.<br><br><b>Paso 4 · Ecuación del espejo.</b><br>1/x + 1/x′ = 1/f = 2/R<br>1/30 + 1/15 = 1/30 + 2/30 = 3/30 = 1/10 cm⁻¹<br>⟹ f = 10 cm ⟹ <b>R = 2f = 20 cm</b>. Piden <b>el radio</b>: contestar 10 cm es error.<br><br><b>Paso 5 · Trampa del signo.</b> Con A = +0,5 llegás a x = −30 cm, o sea un <b>objeto virtual</b>, que acá es físicamente imposible: el enunciado habla de "un objeto" delante de un espejo. Ese absurdo es la señal de que el signo del aumento está mal.<br><br><b>Paso 6 · Coherencia.</b> f = 10 cm, C = 20 cm y el objeto a 30 cm: queda <b>más allá de C</b>, que es la zona de imagen real, invertida y <b>menor</b> ✓ — justo lo que dice el enunciado.<br><br><b>Paso 7 · Inciso b).</b> Escala 1 cm de hoja = 5 cm reales. Marcá V, F (10 cm), C (20 cm), objeto (30 cm) e imagen (15 cm). Rayo paralelo → refleja por F; rayo por F → sale paralelo; rayo al vértice → refleja simétrico respecto del eje. Los tres se cortan a 15 cm, con la flecha hacia abajo y la mitad de alta.'},

  {st: '<b>3.</b> Determinar el tipo y el radio de un espejo esférico de manera que colocado a una distancia de 45 cm de un objeto, se obtiene una imagen derecha y de un tamaño cinco veces menor que el del objeto. Realizar cuentas y marcha de rayos(esquema)<br><span class="muted">1er parcial 2023, tema A — Prof. Dibarbora, UTN.BA. El examen no trae fecha: el año viene del catálogo del archivo. Encabezado con g = 10 m/s². La transcripción respeta la redacción original.</span>',
   ans: 'A = +0,2 · x′ = −9 cm (imagen VIRTUAL, detrás del espejo) · f = −11,25 cm · <b>R = −22,5 cm ⟹ espejo CONVEXO</b> de 22,5 cm de radio.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice, x positivo hacia la izquierda, y positivo hacia arriba (misma convención que usa toda la guía).<br><br><b>Paso 2 · Traducción a signos.</b> Objeto real a 45 cm ⟹ <b>x = 45 cm</b>. "Derecha" ⟹ A &gt; 0; "cinco veces menor" ⟹ |A| = 1/5. Entonces <b>A = +0,2</b>. Acá el signo <i>sí</i> te lo dan (la palabra "derecha"), aprovechalo.<br><br><b>Paso 3 · Posición de la imagen.</b><br>A = −x′/x ⟹ x′ = −A·x = −0,2 · 45 cm = <b>−9 cm</b><br>x′ &lt; 0 ⟹ la imagen está <b>detrás</b> del espejo: es <b>virtual</b>. Coherente con "derecha" (regla: imagen virtual con objeto real ⟹ derecha).<br><br><b>Paso 4 · Ecuación del espejo.</b><br>1/x + 1/x′ = 1/f<br>1/45 + 1/(−9) = 1/45 − 5/45 = −4/45 cm⁻¹<br>⟹ <b>f = −45/4 = −11,25 cm</b><br>⟹ <b>R = 2f = −22,5 cm</b>.<br><br><b>Paso 5 · Responder las dos preguntas.</b> El enunciado pide <b>tipo</b> y <b>radio</b>: f &lt; 0 y R &lt; 0 ⟹ es un espejo <b>CONVEXO</b>, con foco y centro de curvatura detrás, y su radio mide <b>22,5 cm</b> en módulo. No hace falta adivinar el tipo al principio: te lo da el signo de f al final.<br><br><b>Paso 6 · Coherencia.</b> Un convexo con objeto real da <b>siempre</b> imagen virtual, derecha y menor, para cualquier posición del objeto: es el único tipo compatible con "derecha y cinco veces menor" a la vez. |A| = |x′|/x = 9/45 = 0,2 ✓.<br><br><b>Paso 7 · Esquema pedido.</b> Espejo convexo, F a 11,25 cm y C a 22,5 cm <b>detrás</b>. Rayo paralelo al eje → se refleja divergiendo, con su prolongación pasando por F; rayo al vértice → refleja simétrico. Las <b>prolongaciones en línea de trazos</b> se cortan a 9 cm detrás del espejo: ahí va la imagen, derecha y de 1/5 del tamaño.'}
]);

registerExercises('fisica1-utn-optica', '2', [
  {st: 'Un objeto está 10 cm delante de un espejo esférico y su imagen cae sobre una pantalla colocada 40 cm delante del espejo (1er parcial 2014). ¿Cuánto vale f y de qué espejo se trata?',
   opts: ['f = 8 cm ⟹ cóncavo.',
          'f = 13,3 cm ⟹ cóncavo.',
          'f = −8 cm ⟹ convexo.',
          'f = 50 cm ⟹ cóncavo.'],
   c: 0,
   ex: 'La pantalla está <b>delante</b> del espejo, del mismo lado que el objeto: la imagen es real, con <b>x′ = +40 cm</b>. Entonces 1/10 + 1/40 = 5/40 = 1/8 ⟹ <b>f = 8 cm</b>, positivo, o sea <b>cóncavo</b>. ▸ Por qué las otras: 13,3 cm sale de meter x′ = −40 cm por costumbre (1/10 − 1/40 = 3/40), el error que la propia resolución marca; f = −8 cm invierte el signo del resultado y te hace contestar "convexo", que es justo la respuesta equivocada del inciso a); 50 cm sale de sumar mal las fracciones (5/40 leído como 40/5·... ) y no corresponde a ninguna cuenta válida.'},

  {st: 'Objeto de 0,6 cm, imagen de 2,4 cm sobre una pantalla ubicada a 8 m del espejo cóncavo (1er parcial 2012). ¿Qué aumento y qué posición del objeto salen?',
   opts: ['A = +4 y x = 2 m.',
          'A = −4 y x = 2 m.',
          'A = −4 y x = 32 m.',
          'A = −0,25 y x = 32 m.'],
   c: 1,
   ex: 'Pantalla ⟹ imagen real ⟹ invertida ⟹ y′ = −2,4 cm, así que <b>A = y′/y = −2,4/0,6 = −4</b>. Con A = −x′/x y x′ = 8 m: −4 = −8/x ⟹ <b>x = 2 m</b>. Y el objeto queda entre F = 1,6 m y C = 3,2 m, la zona correcta para una imagen real, invertida y ampliada. ▸ Por qué las otras: A = +4 ignora que la imagen proyectada es invertida; x = 32 m sale de <i>multiplicar</i> 8 por 4 en vez de dividir; y A = −0,25 invierte la razón entre imagen y objeto (sería el objeto el 4 veces mayor).'},

  {st: 'La imagen que da un espejo cóncavo es real, está a 15 cm del vértice y tiene la mitad de tamaño que el objeto (1er parcial 2017). ¿Dónde está el objeto?',
   opts: ['A 7,5 cm del vértice.',
          'A 30 cm del vértice.',
          'A −30 cm del vértice (objeto virtual).',
          'A 15 cm, igual que la imagen.'],
   c: 1,
   ex: 'Imagen real en un espejo ⟹ x′ = +15 cm. "La mitad de tamaño" + real + objeto real ⟹ <b>A = −0,5</b>. De A = −x′/x: −0,5 = −15/x ⟹ <b>x = 30 cm</b>. Después 1/30 + 1/15 = 1/10 ⟹ f = 10 cm y R = 20 cm. ▸ Por qué las otras: 7,5 cm sale de multiplicar 15 por 0,5 en vez de dividir; −30 cm es exactamente lo que obtenés si tomás A = +0,5, y un objeto virtual acá es imposible (es la señal de que el signo está mal); 15 cm supondría A = −1, o sea el objeto en C y la imagen del mismo tamaño, que no es lo que dice el enunciado.'},

  {st: 'Espejo CONVEXO y objeto real, en cualquier posición. ¿Cómo es siempre la imagen?',
   opts: ['Real, invertida y menor.',
          'Virtual, invertida y mayor.',
          'Depende de si el objeto está dentro o fuera del foco.',
          'Virtual, derecha y menor, entre el vértice y el foco, detrás del espejo.'],
   c: 3,
   ex: 'Un convexo tiene f &lt; 0 y con objeto real da <b>siempre</b> imagen virtual, derecha y reducida, apretada entre V y F por detrás. Por eso el problema del parcial 2023 ("derecha y cinco veces menor") tiene que dar convexo, y por eso un convexo <b>nunca</b> puede proyectar nada sobre una pantalla. ▸ Por qué las otras: "real e invertida" es lo que hace un cóncavo con el objeto fuera del foco; "invertida y mayor" no la produce ningún espejo convexo; y no depende de la posición del objeto: esa dependencia es propia del cóncavo, que sí cambia de comportamiento según las zonas ①②③.'},

  {st: 'Un espejo colocado a 45 cm de un objeto da una imagen derecha y cinco veces menor (1er parcial 2023, Prof. Dibarbora). ¿Qué radio tiene?',
   opts: ['R = +22,5 cm, espejo cóncavo.',
          'R = −22,5 cm, espejo convexo.',
          'R = −11,25 cm, espejo convexo.',
          'R = −9 cm, espejo convexo.'],
   c: 1,
   ex: 'Derecha ⟹ A = +0,2. x′ = −A·x = −9 cm (virtual, detrás). 1/45 − 1/9 = −4/45 ⟹ f = −11,25 cm ⟹ <b>R = 2f = −22,5 cm</b>: <b>convexo</b> de 22,5 cm de radio. ▸ Por qué las otras: el signo + le cambia el tipo al espejo y contradice que la imagen sea derecha y menor; −11,25 cm es <b>la distancia focal</b>, no el radio (la trampa nº 2, y acá el enunciado pide el radio); −9 cm es la posición de la imagen x′, otro número del problema.'},

  {st: 'Espejo cóncavo con f = 16 cm y el objeto a 20 cm del vértice. Sin hacer ninguna cuenta, ¿cómo va a ser la imagen?',
   opts: ['Virtual, derecha y mayor.',
          'Real, invertida y menor.',
          'Real, invertida y mayor.',
          'No se forma imagen.'],
   c: 2,
   ex: 'Con f = 16 cm, el centro de curvatura está en C = 2f = 32 cm. El objeto a 20 cm cae <b>entre F y C</b>: esa es la zona ② y da imagen <b>real, invertida y ampliada</b>, más allá de C. Este chequeo de 10 segundos es el que valida el resultado del parcial 2009 (x = 20, x′ = 80, A = −4) antes de entregar. ▸ Por qué las otras: "virtual, derecha y mayor" es la zona ③, con el objeto <b>dentro</b> del foco (x &lt; 16 cm), que es el caso del espejo del dentista; "real, invertida y menor" pasa con el objeto <b>más allá de C</b> (el parcial 2017, x = 30 cm); y "no se forma imagen" ocurre solo justo en x = f, donde los rayos reflejados salen paralelos.'}
]);

/* ============ UNIDAD 3 · LENTES DELGADAS ============ */
registerReveals('fisica1-utn-optica', '3', [
  {st: '<b>A1:</b> Una lente produce una imagen ampliada y directa de un objeto colocado 20cm delante de ella. Si el tamaño de la imagen es 1.5 veces el tamaño del objeto:<br>a) Determine la posición de la imagen y la distancia focal de la lente. Indique si la imagen es real o virtual, y si la lente es convergente o divergente.<br>b) Realice a escala la marcha de rayos.<br><span class="muted">1er parcial 2010 — 26/10/10 — cátedra Martinelli, UTN FRBA.</span>',
   ans: 'a) x′ = +30 cm · f = +60 cm · imagen VIRTUAL y derecha, del mismo lado que el objeto · lente CONVERGENTE. b) Objeto dentro del foco: caso lupa.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el centro óptico de la lente, x positivo hacia la izquierda (lado del objeto), y positivo hacia arriba.<br><br><b>Paso 2 · Traducción.</b> x = 20 cm. "Ampliada" ⟹ |A| = 1,5; <b>"directa" significa derecha</b> ⟹ A &gt; 0. Entonces <b>A = +1,5</b>.<br><br><b>Paso 3 · Posición de la imagen.</b> En lentes el aumento va con signo <b>más</b>: A = y′/y = <b>+x′/x</b>.<br>x′ = A·x = 1,5 · 20 cm = <b>+30 cm</b><br>x′ &gt; 0 ⟹ la imagen está <b>del mismo lado que el objeto</b> ⟹ es <b>VIRTUAL</b> y derecha.<br><br><b>Paso 4 · Ecuación de las lentes.</b> Ojo que acá <b>resta</b>: 1/x − 1/x′ = 1/f<br>1/20 − 1/30 = (3 − 2)/60 = 1/60 cm⁻¹<br>⟹ <b>f = +60 cm</b> ⟹ f &gt; 0 ⟹ lente <b>CONVERGENTE</b>.<br><br><b>Paso 5 · Coherencia (y la trampa del ejercicio).</b> "Convergente" no quiere decir "imagen real": acá x = 20 cm &lt; f = 60 cm, o sea el objeto está <b>dentro del foco</b>, que es exactamente la condición del <b>modo lupa</b> ⟹ imagen virtual, derecha y ampliada ✓. Si en cambio tomás A = −1,5 te sale x′ = −30 cm y f = 12 cm: una convergente con imagen real e invertida, que contradice el "directa" del enunciado. El número sale, pero el problema está mal.<br><br><b>Paso 6 · Inciso b).</b> Escala 1 cm de hoja = 10 cm reales. Lente convergente (flecha vertical de doble punta), F y F′ a 60 cm de cada lado, objeto a 20 cm. Rayo paralelo al eje → se refracta pasando por F′; rayo por el centro óptico → sigue derecho. Los dos <b>divergen</b> después de la lente: sus <b>prolongaciones en línea de trazos</b> se cortan a 30 cm del lado del objeto, dando la imagen virtual, derecha y 1,5 veces más alta.'},

  {st: '<b>A1:</b> Un objeto se encuentra delante de una lente divergente cuya distancia focal, en módulo, vale 30cm. El tamaño de la imagen que se forma tiene la mitad de tamaño que el objeto.<br>a) Determine las posiciones del objeto y de la imagen, e indique si la imagen es real o virtual y si es directa o invertida. Indique claramente el sistema de coordenadas utilizado.<br>b) Realice a escala la marcha de rayos.<br><span class="muted">1er parcial 2011 — 20/10/11 — Prof. H. Patricia Martinelli, UTN FRBA.</span>',
   ans: 'a) x = 30 cm · x′ = +15 cm · imagen VIRTUAL (mismo lado que el objeto), DIRECTA y de la mitad de tamaño. b) Imagen entre la lente y el foco.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en la lente, x positivo hacia la izquierda (lado del objeto), y positivo hacia arriba. El enunciado pide explícitamente indicarlo: escribilo.<br><br><b>Paso 2 · El dato del módulo.</b> Dice "distancia focal, <b>en módulo</b>, vale 30cm" y dice <b>divergente</b>: entonces <b>f = −30 cm</b>. Meter +30 en la ecuación da un resultado sin sentido físico.<br><br><b>Paso 3 · El signo del aumento sale antes de calcular.</b> Una lente divergente con objeto real da <b>siempre</b> imagen virtual, derecha y menor. Virtual en una lente ⟹ x′ &gt; 0, y como A = +x′/x con x &gt; 0, el aumento es <b>positivo</b>: <b>A = +0,5</b>. Con A = −0,5 llegás a un objeto virtual, que en este problema no existe.<br><br><b>Paso 4 · Relacionar x y x′.</b> A = x′/x = 0,5 ⟹ <b>x′ = 0,5x</b>.<br><br><b>Paso 5 · Ecuación de las lentes.</b> 1/x − 1/x′ = 1/f<br>1/x − 1/(0,5x) = −1/30 cm⁻¹<br>1/x − 2/x = −1/30 ⟹ −1/x = −1/30<br>⟹ <b>x = 30 cm</b> y, de (3), <b>x′ = 0,5 · 30 = 15 cm</b>.<br><br><b>Paso 6 · Respuestas cualitativas.</b> x′ = +15 cm &gt; 0 ⟹ la imagen se forma <b>del mismo lado que el objeto</b> ⟹ <b>VIRTUAL</b>; A = +0,5 &gt; 0 ⟹ <b>DIRECTA</b> (derecha), y de la mitad de altura. Todo consistente con la última fila de la tabla de la unidad.<br><br><b>Paso 7 · Inciso b).</b> Escala 1 cm de hoja = 10 cm reales. Lente divergente (flecha vertical con las puntas hacia adentro), foco a 30 cm, objeto a 30 cm. Rayo paralelo al eje → emerge divergiendo, con la <b>prolongación</b> pasando por el foco; rayo por el centro óptico → sigue derecho. Las prolongaciones en línea de trazos se cortan a 15 cm, del lado del objeto: imagen derecha, virtual, de altura y/2.'},

  {st: '<b>Problema A1:</b> Un objeto colocado frente a una lente convergente de abscisa focal f, produce una imagen real a 60 cm de la misma. En cambio, cuando la distancia entre el objeto y la lente es un tercio de la anterior, se obtiene una imagen virtual a 60 cm de la lente.<br>a) Calcule f.<br>b) Determine la distancia entre el objeto y la lente en cada caso.<br><span class="muted">1er parcial 2016 — curso R1022 — 1/8/2016 — Prof. Patricia Martinelli, UTN.BA. <b>Enunciado reconstruido a partir de la resolución oficial</b>: del 2016 tenemos la resolución, no la hoja de enunciados.</span>',
   ans: 'a) f = 30 cm. b) Primer caso x₁ = 60 cm (= 2f, imagen real a 60 cm del otro lado); segundo caso x₂ = 20 cm (dentro del foco, imagen virtual a 60 cm del mismo lado).',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el centro óptico, x positivo hacia la izquierda, y positivo hacia arriba. Lente convergente ⟹ f &gt; 0.<br><br><b>Paso 2 · La clave: los dos "60 cm" NO son la misma incógnita.</b> En una lente, imagen <b>real</b> ⟹ x′ &lt; 0 (del otro lado) e imagen <b>virtual</b> ⟹ x′ &gt; 0 (mismo lado). Entonces:<br>• Primer caso: <b>x′₁ = −60 cm</b><br>• Segundo caso: <b>x′₂ = +60 cm</b><br>Mismo número, signos opuestos. Ese es el corazón del problema.<br><br><b>Paso 3 · El otro dato.</b> "La distancia entre el objeto y la lente es un tercio de la anterior" se refiere a la distancia <b>objeto–lente</b>: <b>x₂ = x₁/3</b>.<br><br><b>Paso 4 · Las dos ecuaciones.</b> Con 1/x − 1/x′ = 1/f:<br>(1) 1/x₁ − 1/(−60) = 1/f ⟹ <b>1/x₁ + 1/60 = 1/f</b><br>(2) 1/(x₁/3) − 1/60 = 1/f ⟹ <b>3/x₁ − 1/60 = 1/f</b><br><br><b>Paso 5 · Igualar y despejar.</b><br>1/x₁ + 1/60 = 3/x₁ − 1/60<br>2/60 = 2/x₁<br>⟹ <b>x₁ = 60 cm</b> y <b>x₂ = x₁/3 = 20 cm</b>.<br>Reemplazando en (1): 1/f = 1/60 + 1/60 = 2/60 ⟹ <b>f = 30 cm</b>.<br><br><b>Paso 6 · Coherencia.</b> x₁ = 60 cm = <b>2f</b>: un objeto en 2f da imagen real, invertida y del <b>mismo tamaño</b> a 2f del otro lado, y efectivamente |x′₁| = 60 cm ✓. x₂ = 20 cm &lt; f = 30 cm: el objeto quedó <b>dentro del foco</b>, que es la condición para imagen virtual ✓, con A = x′₂/x₂ = 60/20 = +3 (derecha y tres veces mayor). Los dos casos cierran.'}
]);

registerExercises('fisica1-utn-optica', '3', [
  {st: 'Una lente produce una imagen "ampliada y directa", 1,5 veces el tamaño del objeto (1er parcial 2010). ¿Qué aumento entra en las ecuaciones?',
   opts: ['A = −1,5', 'A = +1,5', 'A = −0,67', 'A = +0,67'],
   c: 1,
   ex: '"Directa" es sinónimo de <b>derecha</b>, o sea no invertida: <b>A = +1,5</b>. Con eso sale x′ = +30 cm (imagen virtual, del mismo lado) y f = +60 cm, lente convergente en modo lupa. ▸ Por qué las otras: A = −1,5 es el error que la propia resolución señala: te da x′ = −30 cm y f = 12 cm, o sea una imagen real e invertida que contradice la palabra "directa" del enunciado; y los 0,67 invierten la razón (sería la imagen la más chica), cuando el enunciado dice claramente "ampliada".'},

  {st: 'Mismo problema: x = 20 cm y A = +1,5. ¿Dónde queda la imagen y qué lente es?',
   opts: ['x′ = +30 cm, f = +60 cm, convergente, imagen virtual.',
          'x′ = −30 cm, f = +12 cm, convergente, imagen real.',
          'x′ = +30 cm, f = −60 cm, divergente, imagen virtual.',
          'x′ = −30 cm, f = −12 cm, divergente, imagen real.'],
   c: 0,
   ex: 'En lentes A = <b>+</b>x′/x ⟹ x′ = 1,5 · 20 = <b>+30 cm</b>, positivo, o sea del <b>mismo lado que el objeto</b>: imagen <b>virtual</b>. Después 1/20 − 1/30 = 1/60 ⟹ <b>f = +60 cm</b> ⟹ <b>convergente</b>. Y el objeto (20 cm) está dentro del foco (60 cm): caso lupa. ▸ Por qué las otras: la segunda es exactamente lo que obtenés con A = −1,5; la tercera mezcla el x′ correcto con una f de signo imposible (con esos datos la ecuación da +60); y la cuarta acumula los dos errores. Recordá que una <b>divergente nunca</b> da imagen real con objeto real.'},

  {st: '"Un objeto se encuentra delante de una lente divergente cuya distancia focal, en módulo, vale 30cm. La imagen tiene la mitad de tamaño" (1er parcial 2011). ¿Qué f y qué A entran?',
   opts: ['f = +30 cm y A = +0,5', 'f = +30 cm y A = −0,5', 'f = −30 cm y A = −0,5', 'f = −30 cm y A = +0,5'],
   c: 3,
   ex: 'Divergente ⟹ <b>f = −30 cm</b>: el enunciado te da el <b>módulo</b>, el signo lo ponés vos. Y una divergente con objeto real da siempre imagen <b>virtual y derecha</b>, así que <b>A = +0,5</b>. Las dos cosas se deducen antes de calcular nada, mirando la última fila de la tabla. Después sale x = 30 cm y x′ = 15 cm. ▸ Por qué las otras: cualquier opción con f = +30 cm está describiendo una lente convergente, que no es la del enunciado; y A = −0,5 te lleva a un objeto virtual, un absurdo en este problema.'},

  {st: '¿En qué caso una lente CONVERGENTE da una imagen virtual, derecha y ampliada?',
   opts: ['Nunca: una convergente siempre da imagen real.',
          'Cuando el objeto está entre f y 2f.',
          'Cuando el objeto está dentro del foco (x &lt; f).',
          'Cuando el objeto está más allá de 2f.'],
   c: 2,
   ex: 'Es el <b>modo lupa</b>: con el objeto <b>dentro del foco</b>, los rayos emergentes divergen y lo que se corta son sus prolongaciones, del mismo lado que el objeto. Pasa en el parcial 2010 (x = 20 cm, f = 60 cm) y en el segundo caso del 2016 (x = 20 cm, f = 30 cm, A = +3). ▸ Por qué las otras: "nunca" es la creencia que la resolución del 2010 marca como error; entre f y 2f la imagen es real, invertida y mayor; y más allá de 2f es real, invertida y menor. Fuera del foco, la imagen de una convergente es siempre real.'},

  {st: 'En el parcial 2016 los dos casos dan "60 cm": imagen real a 60 cm en uno y virtual a 60 cm en el otro. ¿Qué valores de x′ hay que escribir?',
   opts: ['x′₁ = +60 cm y x′₂ = +60 cm',
          'x′₁ = −60 cm y x′₂ = +60 cm',
          'x′₁ = +60 cm y x′₂ = −60 cm',
          'x′₁ = −60 cm y x′₂ = −60 cm'],
   c: 1,
   ex: 'En una LENTE, imagen <b>real</b> ⟹ x′ &lt; 0 (del otro lado, donde va la luz) e imagen <b>virtual</b> ⟹ x′ &gt; 0 (mismo lado que el objeto). Por eso <b>x′₁ = −60 cm</b> y <b>x′₂ = +60 cm</b>: el mismo número con signos opuestos. Con eso, más x₂ = x₁/3, salen x₁ = 60 cm, x₂ = 20 cm y f = 30 cm. ▸ Por qué las otras: si ponés los dos con el mismo signo estás diciendo que las dos imágenes son del mismo tipo, y el enunciado dice que una es real y la otra virtual — el sistema te queda incompatible o te devuelve una f absurda. La tercera opción, además, usa el criterio de los <b>espejos</b>, donde la imagen real sí tiene x′ &gt; 0.'}
]);

/* ============ UNIDAD 4 · MARCHA DE RAYOS (solo quiz) ============ */
registerExercises('fisica1-utn-optica', '4', [
  {st: '¿Cuál de estos NO es un rayo notable en un espejo esférico?',
   opts: ['El rayo paralelo al eje óptico, que se refleja pasando por F.',
          'El rayo que pasa por F, que se refleja paralelo al eje.',
          'El rayo dirigido al centro de curvatura C, que vuelve sobre sí mismo.',
          'Un rayo cualquiera que sale del objeto formando 45° con el eje.'],
   c: 3,
   ex: 'Los rayos notables son los cuatro que se pueden trazar <b>sin calcular ningún ángulo</b>: paralelo → F, por F → paralelo, hacia C → vuelve sobre sí mismo, y al vértice → refleja simétrico respecto del eje. Un rayo a 45° cualquiera también existe en la realidad, pero para saber por dónde sale tendrías que aplicar la ley de reflexión punto a punto: no sirve para construir. ▸ Por qué las otras: las tres primeras son exactamente los rayos ①, ② y ③ de la tabla de la unidad, y las resoluciones oficiales usan esos (más el del vértice, que es el ④).'},

  {st: 'En una LENTE delgada, el rayo que pasa por el centro óptico...',
   opts: ['se refracta pasando por el foco imagen F′.',
          'sigue derecho, sin desviarse.',
          'vuelve sobre sí mismo.',
          'emerge paralelo al eje óptico.'],
   c: 1,
   ex: 'Es el rayo más fácil de todos y nunca falla: por el centro óptico <b>sigue derecho</b>. En una lente delgada las dos caras son ahí paralelas entre sí, así que el rayo se comporta como en una lámina de espesor despreciable: sale sin desviarse. Usalo siempre como uno de los dos rayos del dibujo. ▸ Por qué las otras: "pasa por F′" es lo que hace el rayo <b>paralelo al eje</b> (rayo ①); "emerge paralelo" es lo que hace el rayo que <b>entra por el foco objeto F</b> (rayo ②); y "vuelve sobre sí mismo" es el rayo que va al centro de curvatura C, que existe en <b>espejos</b>, no en lentes.'},

  {st: 'El inciso b) dice "realice a escala el trazado de rayos" y entregás un esquema prolijo pero sin proporciones entre las distancias. ¿Qué pasa?',
   opts: ['Basta con aclarar al costado "esquema, no está a escala".',
          'Puntúa igual: lo que se corrige es el inciso a).',
          'No resuelve el inciso b): el enunciado pide literalmente "a escala" y el inciso puntúa aparte.',
          'Puntúa la mitad de forma automática.'],
   c: 2,
   ex: 'Cinco de los siete ejercicios de parcial relevados (2009, 2010, 2011, 2012 y 2017) tienen el mismo inciso b) pidiendo el dibujo <b>a escala</b>, y en las grillas de corrección el b) puntúa aparte del a). Elegí una escala cómoda (por ejemplo 1 cm de hoja = 5 cm reales), <b>escribila</b> y respetala: si f = 10, x = 30 y x′ = 15, el objeto tiene que quedar al doble de distancia que la imagen y al triple que el foco. ▸ Por qué las otras: aclarar que no está a escala no cambia lo que pide la consigna; el a) y el b) se corrigen por separado, así que uno no cubre al otro; y no existe ninguna regla de "medio punto automático".'},

  {st: 'La imagen del problema resultó VIRTUAL. ¿Cómo se dibuja?',
   opts: ['Se trazan las prolongaciones de los rayos hacia atrás en línea de trazos, y la imagen se marca donde se cortan esas prolongaciones.',
          'Los rayos reflejados se cortan detrás del espejo y se dibujan en línea llena hasta ahí.',
          'No se dibuja nada, porque una imagen virtual no existe.',
          'Se dibuja igual que una imagen real, solo que más chica.'],
   c: 0,
   ex: 'Cuando la imagen es virtual los rayos reales <b>divergen y nunca se cortan</b>: lo que se corta son sus prolongaciones. Esas prolongaciones van en <b>línea de trazos</b> —y solo ahí— y la flecha de la imagen se marca como virtual. Es lo que pasa en el espejo convexo, en la lupa del 2010 y en la divergente del 2011. ▸ Por qué las otras: dibujar en línea llena detrás del espejo dice que la luz pasa por ahí, y no pasa (por eso no se puede proyectar sobre una pantalla); "no existe" es falso, la imagen se ve perfectamente, lo que no se puede es recogerla; y dibujarla como real borra justamente la información que se está evaluando.'},

  {st: 'Calculaste A = −4 en el inciso a), pero en el dibujo del b) pusiste la imagen derecha y del mismo tamaño que el objeto. ¿Qué consecuencia tiene?',
   opts: ['Ninguna: el inciso a) ya está resuelto y puntúa aparte.',
          'El dibujo manda, así que hay que rehacer el a).',
          'Se compensa si aclarás la escala usada.',
          'El dibujo contradice la cuenta —con A = −4 la imagen va invertida y 4 veces más alta— y esa incoherencia hace perder los dos incisos.'],
   c: 3,
   ex: 'El punto 6 de lo que se puntúa del dibujo es justamente que <b>coincida con la cuenta</b>: signo del aumento (invertida o derecha), tamaño relativo y lado en el que queda la imagen. Un dibujo que contradice el a) le dice al corrector que no entendiste tu propio resultado. Usalo al revés: el dibujo es tu control de calidad del a). ▸ Por qué las otras: el b) puntúa aparte pero no de forma independiente del contenido; el dibujo no "manda" sobre la cuenta, los dos tienen que decir lo mismo; y la escala es otro requisito distinto, no compensa una imagen dibujada al revés.'}
]);

/* ============ UNIDAD 5 · PRISMA, LÁMINA Y EJERCICIOS DE DISEÑO ============ */
registerReveals('fisica1-utn-optica', '5', [
  {st: '<b>1-</b> Se tiene un prisma de caras paralelas, rodeado de aire. El mismo tiene un índice de refracción n = 1,5. Se hace incidir un haz de luz monocromático en la cara superior del prisma, formando este haz, un ángulo α = 45°, con respecto a la normal a la superficie del prisma. Se quiere que el corrimiento lateral del rayo valga una distancia d = 21 mm. Determine el espesor que debe tener dicho prisma de caras paralelas.<br><span class="muted">Final de Física I, UTN.BA — problema 1. La hoja relevada no muestra encabezado ni fecha. <b>Dato reconstruido:</b> el índice n = 1,5 está parcialmente tapado por una firma en lapicera roja; se lee con seguridad el "5" final y el patrón indica 1,5.</span>',
   ans: 'β = 28,1° · α − β = 16,9° · <b>e ≈ 63,8 mm</b> (≈ 6,4 cm). El rayo emergente sale paralelo al incidente.',
   sol: '<b>Paso 1 · Qué es esto.</b> El enunciado lo llama "prisma de caras paralelas", pero es una <b>lámina</b>: dos caras planas y paralelas con aire de los dos lados. No busques la fórmula de la desviación mínima de un prisma triangular: no va acá.<br><br><b>Paso 2 · Snell en la cara superior.</b> Los ángulos se miden <b>desde la normal</b> (el enunciado te lo aclara). Con n₁ = 1 (aire):<br>1 · sen α = n · sen β<br>sen β = sen 45° / 1,5 = 0,7071 / 1,5 = <b>0,4714</b><br>⟹ <b>β = 28,1°</b>, y cos β = 0,882.<br><br><b>Paso 3 · Chequeo del ángulo límite (opcional pero rápido).</b> Al salir por la cara de abajo va del vidrio al aire: sen θ<sub>L</sub> = 1/n = 0,667 ⟹ θ<sub>L</sub> = 41,8°. Como β = 28,1° &lt; 41,8°, <b>no hay reflexión total</b> y el rayo sale. Bien.<br><br><b>Paso 4 · El rayo sale paralelo.</b> En la cara inferior la normal tiene la misma dirección, así que Snell al revés devuelve el ángulo de salida igual a α = 45°. <b>No hay desviación angular neta</b>: lo único que cambia es la posición. Ese corrimiento perpendicular al rayo es d.<br><br><b>Paso 5 · Geometría.</b> El camino recorrido <b>dentro</b> del vidrio no es el espesor: es la hipotenusa<br>L = e / cos β<br>y el corrimiento perpendicular a la dirección del rayo es<br>d = L · sen(α − β) = <b>e · sen(α − β) / cos β</b><br><br><b>Paso 6 · Despejar el espesor.</b><br>e = d · cos β / sen(α − β)<br>α − β = 45° − 28,1° = 16,9° ⟹ sen 16,9° = 0,290<br>e = 21 mm · 0,882 / 0,290<br><b>e ≈ 63,8 mm ≈ 6,4 cm</b><br><br><b>Paso 7 · Errores que descuentan.</b> Si te olvidás del <b>cos β del denominador</b> y escribís d = e·sen(α − β), te queda e = 21/0,290 = 72,3 mm: casi 9 mm de más. Y si medís los 45° desde la <b>cara</b> en vez de desde la normal, cambia todo el problema desde la primera línea.'},

  {st: '<b>6.</b> Un dentista necesita un pequeño espejo que produzca una imagen derecha y aumentada 4 veces cuando coloque el espejo a 1,5 cm de un diente. Calcule el radio de curvatura del espejo.<br><span class="muted">Final UTN.BA del 12/12/23 — problema 6 (enunciado digital, texto completo y legible).</span>',
   ans: 'A = +4 · x′ = −6 cm (imagen VIRTUAL, 6 cm detrás del espejo) · f = +2 cm ⟹ <b>R = 2f = 4 cm</b>, espejo CÓNCAVO.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice del espejo, x positivo hacia la izquierda (lado del diente), y positivo hacia arriba.<br><br><b>Paso 2 · Traducción a signos.</b> El diente es un objeto real a 1,5 cm ⟹ <b>x = 1,5 cm</b>. "Derecha" ⟹ A &gt; 0; "aumentada 4 veces" ⟹ |A| = 4. Entonces <b>A = +4</b>.<br><br><b>Paso 3 · Posición de la imagen.</b> En espejos A = −x′/x:<br>x′ = −A · x = −4 · 1,5 cm = <b>−6 cm</b><br>x′ &lt; 0 ⟹ la imagen está <b>detrás</b> del espejo: es <b>virtual</b>. Coherente: derecha y virtual van siempre juntas con objeto real.<br><br><b>Paso 4 · Ecuación del espejo.</b><br>1/x + 1/x′ = 1/f<br>1/1,5 + 1/(−6) = 4/6 − 1/6 = 3/6 = 1/2 cm⁻¹<br>⟹ <b>f = 2 cm</b><br><br><b>Paso 5 · Lo que piden.</b> El enunciado pide <b>el radio de curvatura</b>:<br><b>R = 2f = 4 cm</b><br>Contestar 2 cm es la trampa nº 2. Y como f &gt; 0, el espejo es <b>cóncavo</b>.<br><br><b>Paso 6 · Coherencia física.</b> f = 2 cm y el diente está a 1,5 cm: el objeto quedó <b>dentro del foco</b> (zona ③ del cóncavo), que es exactamente la única configuración que da imagen <b>virtual, derecha y ampliada</b> ✓. Es el mismo principio del espejo de maquillaje. Un espejo convexo no serviría: da siempre imágenes derechas pero <b>menores</b>.<br><br><b>Paso 7 · Chequeo extra.</b> Separación diente–imagen: |x − x′| = |1,5 − (−6)| = 7,5 cm. Acá la resta termina sumando, porque la imagen está del otro lado del espejo: por eso la fórmula con módulo funciona siempre y "sumar" no.'},

  {st: '<b>6</b> Por medio de un espejo esférico se quiere proyectar la imagen de un objeto sobre una pantalla, de modo que la misma tenga el triple de tamaño del objeto. La pantalla está colocada a 2 m del objeto. Indique de qué tipo de espejo se trata y calcule su distancia focal.<br><span class="muted">Final de Física I, UTN.BA — problema 6. La hoja relevada (compuesta en LaTeX, 6 problemas) no muestra encabezado ni fecha; el mismo enunciado aparece en dos fotos distintas del material.</span>',
   ans: 'A = −3 · x = 1 m · x′ = 3 m · <b>f = 0,75 m &gt; 0 ⟹ espejo CÓNCAVO</b> (R = 1,5 m). Imagen real e invertida.',
   sol: '<b>Paso 1 · Sistema de referencia.</b> Origen en el vértice, x positivo hacia la izquierda, y positivo hacia arriba.<br><br><b>Paso 2 · Traducción a signos.</b> "Proyectar sobre una pantalla" ⟹ imagen <b>real</b> ⟹ x′ &gt; 0 y, con objeto real, <b>invertida</b>. "El triple de tamaño" ⟹ |A| = 3. Entonces <b>A = −3</b>.<br><br><b>Paso 3 · Relación entre x y x′.</b> A = −x′/x = −3 ⟹ <b>x′ = 3x</b>.<br><br><b>Paso 4 · La distancia de 2 m.</b> Es la separación entre <b>el objeto y la pantalla</b>, o sea entre objeto e imagen:<br>|x − x′| = 2 m ⟹ |x − 3x| = 2x = 2 m<br>⟹ <b>x = 1 m</b> y <b>x′ = 3 m</b>.<br>Si acá sumás en vez de restar (x + x′ = 4x = 2 m) te sale x = 0,5 m y todo el problema queda mal.<br><br><b>Paso 5 · Ecuación del espejo.</b><br>1/x + 1/x′ = 1/f<br>1/1 + 1/3 = 3/3 + 1/3 = 4/3 m⁻¹<br>⟹ <b>f = 3/4 = 0,75 m</b> (y R = 2f = 1,5 m, por si lo piden).<br><br><b>Paso 6 · Responder "de qué tipo se trata".</b> No hace falta adivinarlo al principio: planteás con f como incógnita y el <b>signo que sale</b> te lo dice. Como <b>f = +0,75 m &gt; 0</b>, el espejo es <b>CÓNCAVO</b>.<br><br><b>Paso 7 · Coherencia.</b> f = 0,75 m ⟹ C = 1,5 m. El objeto a 1 m quedó <b>entre F y C</b>: la zona de imagen real, invertida y ampliada ✓, con la imagen a 3 m, más allá de C ✓. Y de paso: un espejo <b>convexo</b> jamás podría hacer esto, porque con objeto real da siempre imágenes virtuales y menores — ni proyecta sobre una pantalla ni agranda.'}
]);

registerExercises('fisica1-utn-optica', '5', [
  {st: 'Un rayo entra en una lámina de caras paralelas con α = 45° respecto de la normal. ¿Cómo sale por la otra cara?',
   opts: ['Desviado un ángulo α − β respecto de la dirección incidente.',
          'Paralelo al rayo incidente, pero corrido lateralmente una distancia d.',
          'Perpendicular a la cara de salida.',
          'No sale: se refleja totalmente adentro.'],
   c: 1,
   ex: 'Las dos caras son <b>paralelas</b>, así que la normal de salida tiene la misma dirección que la de entrada: Snell aplicado dos veces devuelve el rayo con el mismo ángulo α con el que entró. <b>No hay desviación angular neta</b>; lo único que cambia es la <b>posición</b>, y ese corrimiento perpendicular es la d que te piden. ▸ Por qué las otras: α − β es el ángulo que usa la fórmula del corrimiento, no la desviación de salida; "perpendicular a la cara" sería el caso de incidencia normal (α = 0), otro problema; y no hay reflexión total porque adentro el rayo viaja a β = 28,1°, muy por debajo del ángulo límite de 41,8°.'},

  {st: 'Ley de Snell con aire (n₁ = 1), α = 45° y una lámina de n = 1,5. ¿Cuánto vale el ángulo β dentro del vidrio?',
   opts: ['30°', '28,1°', '41,8°', '45°, igual que el de entrada.'],
   c: 1,
   ex: 'sen β = sen 45° / 1,5 = 0,7071/1,5 = 0,4714 ⟹ <b>β = 28,1°</b>. Al pasar a un medio ópticamente más denso el rayo <b>se acerca a la normal</b>, por eso β &lt; α. ▸ Por qué las otras: 30° saldría si sen β fuera 0,5, o sea con n = 1,414, no 1,5; <b>41,8° es el ángulo límite</b> de este vidrio (sen θ<sub>L</sub> = 1/1,5), un número del mismo problema pero que responde otra pregunta; y 45° adentro solo pasaría si no hubiera cambio de medio.'},

  {st: 'En una lámina de espesor e, ¿cuánto mide el camino L que recorre el rayo DENTRO del vidrio?',
   opts: ['L = e', 'L = e · cos β', 'L = e / cos β', 'L = e · sen β'],
   c: 2,
   ex: 'El espesor <b>e se mide perpendicular a las caras</b>; el rayo entra oblicuo, así que recorre la hipotenusa de un triángulo cuyo cateto adyacente al ángulo β es e: <b>L = e / cos β</b>, siempre <b>mayor</b> que el espesor. De ahí sale d = L·sen(α − β) = e·sen(α − β)/cos β. ▸ Por qué las otras: L = e solo valdría con incidencia normal; e·cos β es <b>menor</b> que e, imposible para un camino oblicuo; y e·sen β es la componente horizontal del recorrido, otro segmento del dibujo.'},

  {st: 'Un dentista quiere una imagen derecha y 4 veces mayor con el espejo a 1,5 cm del diente (final del 12/12/23). Antes de calcular nada, ¿qué espejo puede ser?',
   opts: ['Convexo, porque los convexos dan imágenes derechas.',
          'Cóncavo, con el diente dentro del foco: imagen virtual, derecha y ampliada.',
          'Plano, porque solo un plano da imágenes derechas del mismo lado.',
          'Divergente de f = −2 cm.'],
   c: 1,
   ex: 'Derecha + ampliada + objeto real solo lo consigue un <b>cóncavo con el objeto dentro del foco</b> (zona ③), que da imagen virtual. Y las cuentas lo confirman: x′ = −6 cm, f = +2 cm, R = 4 cm, con el diente a 1,5 cm &lt; f = 2 cm ✓. ▸ Por qué las otras: el convexo da derechas, sí, pero <b>siempre menores</b>, nunca 4 veces mayores; el plano da imágenes derechas pero <b>del mismo tamaño</b> (A = +1); y "divergente de f = −2 cm" es la descripción de un convexo, con el signo de f al revés del que sale de la cuenta.'},

  {st: 'Espejo que debe proyectar sobre una pantalla una imagen del triple de tamaño, con la pantalla a 2 m del objeto. ¿Cuáles son las dos ecuaciones correctas?',
   opts: ['A = +3 y x + x′ = 2 m',
          'A = −3 y x + x′ = 2 m',
          'A = −3 y |x − x′| = 2 m',
          'A = +3 y |x − x′| = 2 m'],
   c: 2,
   ex: 'Pantalla ⟹ imagen real ⟹ <b>invertida</b> ⟹ A = <b>−3</b>; y la separación objeto–imagen en esta convención es siempre <b>|x − x′|</b>. Con x′ = 3x queda 2x = 2 m ⟹ x = 1 m, x′ = 3 m y f = +0,75 m: espejo cóncavo. ▸ Por qué las otras: A = +3 supone imagen derecha, imposible en una imagen proyectada; y x + x′ = 2 m es la trampa nº 3 — te daría 4x = 2 m ⟹ x = 0,5 m, x′ = 1,5 m y una f distinta, con todo el problema mal aunque las cuentas siguientes estén prolijas.'},

  {st: '¿Podría un espejo CONVEXO proyectar sobre una pantalla una imagen ampliada de un objeto real?',
   opts: ['Sí, si el objeto está muy cerca del vértice.',
          'Sí, si el radio es lo bastante grande.',
          'Solo si la pantalla se pone detrás del espejo.',
          'No: con objeto real un convexo da siempre imagen virtual, derecha y menor, así que ni proyecta ni agranda.'],
   c: 3,
   ex: 'Es el razonamiento que te ahorra la mitad del problema del final: como <b>f &lt; 0</b> y x &gt; 0, la ecuación del espejo obliga a x′ &lt; 0 para cualquier posición del objeto, o sea imagen <b>siempre virtual</b> (detrás), derecha y reducida. Ninguna pantalla puede recoger eso. Por eso, si el enunciado habla de proyectar y ampliar, el espejo tiene que ser cóncavo, y lo confirmás con el signo de f al final. ▸ Por qué las otras: acercar el objeto o agrandar el radio cambia <b>cuánto</b> mide la imagen, pero nunca su carácter virtual; y poner la pantalla detrás del espejo no sirve, porque ahí no llega luz: la imagen virtual se ve, no se recoge.'}
]);
