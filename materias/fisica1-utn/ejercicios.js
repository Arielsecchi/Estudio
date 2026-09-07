// Física I · UTN FRBA — guía madre del FINAL.
// Fuentes: 66 ejercicios de parcial de la cátedra Martinelli (2009-2017) con sus 16 hojas de
// solución oficial · 21 fotos de final de UTN.BA 2022-2025 (~10 finales distintos) ·
// 1er parcial 2023 del Prof. Dibarbora (FRBA) · ejercicio suelto de parcial 2025 ·
// resumen teórico de F. Cañete (UTN FRGP) · 18 exámenes de UTN San Rafael.
// Análisis completo en _fisica1_ingest/ESTADO.md. Sin registerReveals: los ejercicios resueltos
// viven en las 8 hijas.

/* ============ UNIDAD 1 · El formato del final y de dónde sale el material ============ */
registerExercises('fisica1-utn', '1', [

  {st: '¿Cómo es exactamente el final de Física I de UTN.BA y cómo se aprueba?',
   opts: [
     'Cuatro problemas repartidos en bloques A y B, y hay que sacar el 50% de cada bloque por separado',
     'Seis problemas de desarrollo más un multiple choice de teoría que es eliminatorio',
     'Seis problemas sueltos numerados 1 a 6, sin bloques, todo desarrollo, y se aprueba con el 50% del examen',
     'Cuatro problemas de desarrollo y un coloquio oral obligatorio sobre las hipótesis'
   ], c: 2,
   ex: 'Seis problemas corridos, numerados 1 a 6, cada uno con uno o dos incisos, <b>100% desarrollo</b>, y el criterio es el 50% <b>del examen</b>: no hay parte eliminatoria. Eso significa que <b>tres problemas enteros y bien resueltos te aprueban</b>, y que vos elegís cuáles tres. Es una libertad enorme que el formato de parcial no te daba. ▸ Por qué las otras: la <b>a</b> es el formato de los <i>parciales</i> de la cátedra Martinelli (bloques A1/A2 y B1/B2 con «50% de cada grupo», y en 2013 llegó a exigir «50% de cada problema») — es la cantera de donde salen los ejercicios, no el examen que rendís; la <b>b</b> inventa un multiple choice que no existe en ninguna de las 21 fotos de final; la <b>d</b> inventa un oral: ninguna hoja de final menciona instancia oral, y de hecho ni siquiera declara la duración del examen.'},

  {st: 'El encabezado del final imprime los momentos de inercia como dato: «Utilice, donde lo necesite, I(CM) disco = m R²/2, I(CM) barra = m L²/12». ¿Qué conclusión práctica te deja eso para estudiar?',
   opts: [
     'Que nadie te va a pedir deducir un momento de inercia por integración, pero Steiner sí lo tenés que saber, porque ese no te lo dan',
     'Que el cuerpo rígido pierde peso en el final, porque si te dan el dato el tema es más fácil',
     'Que te dan también el teorema de los ejes paralelos ya aplicado al cuerpo del problema',
     'Que conviene memorizar igual todos los momentos de inercia porque el encabezado a veces falta'
   ], c: 0,
   ex: 'El dato impreso te dice qué <b>no</b> van a preguntarte: no hay un solo ejercicio en todo el corpus que pida obtener <span class="m">I</span> integrando. Lo que sí te van a pedir es <b>usarlo bien</b>, y ahí aparece lo que el encabezado <i>no</i> te regala: <b>Steiner</b>, <span class="m">I = I<sub>CM</sub> + m d²</span>, que necesitás cada vez que el eje de giro no pasa por el centro de masa (péndulo físico con barra colgada de un extremo, disco montado lejos del pivote, rodadura resuelta desde el punto de contacto). ▸ Por qué las otras: la <b>b</b> lee al revés la evidencia — el cuerpo rígido aparece en <b>los 10 finales</b>, es el tema más pesado del examen, y que te den el <span class="m">I</span> es justamente la señal de que lo van a usar; la <b>c</b> es falsa: Steiner lo aplicás vos; la <b>d</b> es memorizar de más — el encabezado los trae, y cuando no, el propio enunciado del problema mete la esfera (<span class="m">I = 2/5 m r²</span>) o el cilindro adentro del texto.'},

  {st: 'Vos no cursaste con Martinelli, pero la guía está llena de ejercicios de sus parciales 2009-2017. ¿Cómo hay que leerlos?',
   opts: [
     'Son exactamente el examen que vas a rendir: mismo formato, mismo criterio de aprobación',
     'No sirven, porque son de otra cátedra y de hace más de diez años',
     'Sirven solo si terminás rindiendo el 2do parcial, no para el final',
     'Son la cantera de arquetipos y la única parte del material con solución oficial, pero su formato (4 problemas en bloques) no es el de tu final'
   ], c: 3,
   ex: 'A tu curso le pasaron esos parciales con la indicación de estudiar sobre ellos, y con razón: los 66 ejercicios no son 66 problemas distintos sino <b>13 moldes</b> con los números cambiados, y son <b>lo único del material que viene con clave de cátedra</b>. Cuando leas «2do parcial 2013, cátedra Martinelli», traducilo como <b>«este tipo de problema»</b>, nunca como «así te lo van a tomar». ▸ Por qué las otras: la <b>a</b> es el error de lectura más caro — Martinelli tomaba 4 problemas en bloques con 50% de cada grupo, tu final son 6 sueltos con 50% del total; la <b>b</b> tira a la basura la parte más sólida del material: el temario es estable y la física no caducó; la <b>c</b> ignora que <b>el final junta las dos mitades</b> — óptica, fluidos, Newton y energía viven en el 1er parcial, y también caen en el final.'},

  {st: 'Das vuelta la hoja del final y ves los seis problemas. ¿Cuál es la primera movida?',
   opts: [
     'Arrancar por el 1 y bajar en orden: la numeración va de menor a mayor dificultad',
     'Leer los seis enunciados completos antes de escribir nada, marcar tus tres seguros y resolver esos primero',
     'Empezar por el 6 y subir, porque el último suele ser el más corto',
     'Hacer los seis en paralelo, planteando las ecuaciones de todos y resolviéndolas después'
   ], c: 1,
   ex: 'La numeración es <b>arbitraria</b>, no creciente en dificultad: en el final del <b>2/3/2023</b> el problema 1 es conservación del momento angular (de lo más fino que hay en todo el examen) y el 3 es un plano inclinado con polea con masa, mucho más mecánico. Una pasada de lectura de los seis te cuesta tres minutos y te compra el 50%: identificás cuáles caen en tus temas fuertes y los resolvés con la cabeza fresca. ▸ Por qué las otras: la <b>a</b> te puede hacer quemar 25 minutos en el problema más difícil del examen y llegar sin aire a los tres que sí te salían; la <b>c</b> es la misma apuesta ciega, invertida; la <b>d</b> suena ordenada pero es la peor de todas — <b>medio problema puntúa mucho menos de lo que creés</b> (ver la pregunta de la grilla), así que dispersarte en seis planteos te deja seis medios.'},

  {st: 'En los finales corregidos que hay en el material, la grilla de arriba tiene un casillero por problema (1 a 6) con una letra adentro (B, R, M, B/R). ¿Qué consecuencia táctica tiene eso?',
   opts: [
     'Ninguna: la nota igual sale de sumar los puntos parciales de cada inciso',
     'Que las letras se convierten a número dividiendo por seis, así que da lo mismo cómo repartas el esfuerzo',
     'Que hay que hacer los seis sí o sí, porque un casillero vacío es una M automática',
     'Que conviene terminar tres problemas enteros antes que dejar seis empezados por la mitad, porque el corrector califica el problema completo'
   ], c: 3,
   ex: 'En los parciales de Martinelli 2011-2012 la grilla llegaba a tener casillero por inciso a) y b). En el final <b>ese desglose se perdió</b>: hay un casillero por problema y adentro va una calificación cualitativa. Con esa grilla, un problema planteado a medias no se lleva medio casillero — se lleva una R o una M. Por eso la aritmética del 50% se cumple mejor con <b>tres completos</b> que con seis a medio hacer. ▸ Por qué las otras: la <b>a</b> describe un esquema de puntos por inciso que en el final no existe (sí aparece, en cambio, en el ejercicio suelto de <b>2025</b>, que ya puntúa por ítem con 3 p, pero eso es un parcial); la <b>b</b> se inventa una conversión que no está en ninguna hoja; la <b>c</b> es el consejo opuesto al correcto: dejar tres en blanco y tres impecables es exactamente la estrategia que aprueba.'},

  {st: 'Hacés un ejercicio de Martinelli, comparás con la clave oficial y no te da igual. ¿Cuál es la lectura correcta?',
   opts: [
     'Puede ser la clave: hay tres erratas detectadas en las soluciones oficiales, y los finales directamente no tienen resolución oficial',
     'Si no coincide con la clave, seguro te equivocaste vos: la clave de cátedra es infalible',
     'Los finales sí traen resolución oficial, así que verificá contra esa y listo',
     'No hay ninguna solución oficial en todo el material: todo está resuelto desde cero'
   ], c: 0,
   ex: 'Las erratas concretas, para que las tengas fichadas: el <b>2do parcial 2011 A1</b> imprime <span class="m">a<sub>max</sub> = 1 m/s²</span> y <span class="m">F = 0,1 N</span> cuando corresponde 1000 m/s² y 100 N; el <b>2do parcial 2010 B2</b> escribe <span class="m">v = √(15/16 · g · h)</span> con la fracción invertida (aunque el resultado, 4 m/s, es correcto); y el <b>1er parcial 2016 A2</b> arrastra un «= 0» de más. Antes de dudar de vos, revisá el orden de magnitud: si tu número es 1000 veces el de la clave, sospechá de la clave. ▸ Por qué las otras: la <b>b</b> te hace desconfiar de una cuenta buena; la <b>c</b> es falsa y es el hueco más importante del material — <b>ninguno de los ~10 finales tiene clave de cátedra</b>, las resoluciones de las hijas están hechas desde cero y contrastadas contra el método de Martinelli; la <b>d</b> se pasa de largo: hay <b>16 hojas de solución oficial</b> de parcial, que son el material más sólido que tenés.'}

]);

/* ============ UNIDAD 2 · El mapa de frecuencias ============ */
registerExercises('fisica1-utn', '2', [

  {st: 'Sobre las 21 fotos de final de UTN.BA (≈ 10 finales distintos), ¿con qué frecuencia aparece cuerpo rígido / rodadura?',
   opts: [
     'En 3 de los 10 finales, más o menos como óptica',
     'En los 10 finales, sin excepción, y muchas veces en dos problemas del mismo examen',
     'En unos 5 de 10: es frecuente, pero se turna con choques',
     'Solo cuando el final no trae fluidos, porque se reparten el lugar'
   ], c: 1,
   ex: 'Es el número más contundente de todo el análisis y la razón por la que cuerpo rígido va <b>primero</b> en el plan de estudio: no falta en ninguna fecha. Aparece como rodadura en plano inclinado, cilindro con cuerda enrollada más polea, energía en rototraslación, y torque con aceleración angular. Y en el 2do parcial de Martinelli es <b>14 de 35 ejercicios, en las 9 de 9 fechas</b>. Si hay un solo tema que no podés dejar flojo, es este. ▸ Por qué las otras: la <b>a</b> confunde rígido con <b>óptica</b>, que sí aparece en 3 hojas de 10; la <b>c</b> subestima el tema y te llevaría a repartir horas que no conviene repartir; la <b>d</b> inventa una exclusión que no existe — hay finales con rígido <i>y</i> fluidos, y encima con rígido en dos problemas.'},

  {st: 'En los 35 ejercicios del 2do parcial de Martinelli, ¿cómo aparecen las oscilaciones (MAS)?',
   opts: [
     '4 ejercicios repartidos en 4 fechas, sin posición fija',
     '9 ejercicios pero concentrados en tres fechas, así que se puede saltear',
     'Aparece en el 1er parcial, no en el segundo',
     '9 ejercicios, en las 9 de 9 fechas, y siempre en la posición A2'
   ], c: 3,
   ex: 'Es el ejercicio más garantizado de todo el corpus: <b>ninguna fecha del 2do parcial se tomó sin un MAS</b>, y siempre en el mismo casillero (A2). En los finales sigue apareciendo en la mayoría de las fechas, con un agregado que en parcial no existe: el <b>péndulo físico con Steiner</b> (barra + disco, «un dispositivo para un reloj de péndulo antiguo»). Y son 7 verticales contra 2 horizontales: el vertical es <i>el</i> molde. ▸ Por qué las otras: la <b>a</b> son los números de «trabajo y energía como tema propio» en el 2do parcial (4 de 35); la <b>b</b> se contradice sola — 9 ejercicios en 9 fechas es uno por fecha, no un racimo; la <b>c</b> tiene el reparto al revés: en el <b>1er parcial el MAS aparece 0 de 31 veces</b>, porque los dos parciales de Martinelli no comparten ni un solo tema.'},

  {st: '«Óptica cae poco en los finales, la salteo y estudio otra cosa». ¿Qué dicen los números?',
   opts: [
     'Óptica es 7 de 31 en el 1er parcial (7 de 8 fechas, siempre en A1), baja a 3 hojas de 10 en los finales, pero en el 1er parcial 2023 de Dibarbora óptica + fluidos son 2 de 6 problemas = el 33%: es el tema con mejor relación puntos/hora',
     'Tiene razón: 3 hojas de 10 es poco y el tiempo rinde más en rígido',
     'Óptica no entra más: desapareció después de 2017',
     'Óptica cae en todos los finales, es el segundo tema más frecuente'
   ], c: 0,
   ex: 'La cuenta que importa no es «cuántas veces cae» sino <b>cuántos puntos te da por hora de estudio</b>. Óptica son <b>dos fórmulas</b> (espejos <span class="m">1/x + 1/x′ = 2/R</span>, lentes <span class="m">1/x − 1/x′ = 1/f</span>), <b>una convención de signos</b> y <b>una marcha de rayos</b>: se cierra en una tarde y cuando cae te regala un problema entero de los seis. Saltearla es tirar un problema barato para pelear uno caro. ▸ Por qué las otras: la <b>b</b> mira solo la frecuencia y no el costo de aprenderlo; la <b>c</b> es falsa — el parcial 2023 de FRBA tiene espejo esférico con marcha de rayos en el P3, y hay dos finales con espejos más uno de refracción con lámina de caras paralelas; la <b>d</b> exagera: el segundo tema más frecuente en los finales es <b>cantidad de movimiento y choques</b>, no óptica.'},

  {st: 'El choque plástico en el corpus de Martinelli:',
   opts: [
     '8 ejercicios repartidos entre los dos parciales',
     '3 ejercicios en total, es un tema menor',
     '8 de los 35 ejercicios del 2do parcial, en 8 de las 9 fechas, y 0 de 31 en el primero',
     '14 de 35, es el tema más frecuente del 2do parcial'
   ], c: 2,
   ex: 'Casi una por fecha, y siempre con el mismo molde: <b>tres etapas</b> — antes del choque (energía o cinemática), el choque (se conserva <span class="m">p</span>, <b>no</b> la energía) y después del choque (energía otra vez). Es, junto con MAS, el tema que <b>más rápido se domina</b>: aprendés a separar las tres etapas y el problema se resuelve casi solo. En los finales se mantiene y agrega variantes que el parcial no tiene: choque en 2D, choque elástico, explosión de dos carritos con un resorte comprimido, y partícula contra disco (que ya es momento angular). ▸ Por qué las otras: la <b>a</b> reparte mal — en el 1er parcial hay <b>cero</b> choques; la <b>b</b> son los ejercicios de movimiento circular (3 de 31); la <b>d</b> son los de <b>cuerpo rígido</b> (14 de 35), que sí es el tema más frecuente del segundo.'},

  {st: '¿Cuál es el verdadero peso de «trabajo y energía» en el 2do parcial de Martinelli?',
   opts: [
     'Bajo: solo 4 de los 35 ejercicios son de energía',
     'Aparece como tema propio en 4 de 35, pero ~25 de los 35 lo usan como método para resolver otra cosa',
     'Nulo: en el 2do parcial se resuelve todo con Newton y torques',
     'Alto como tema propio: 14 de 35'
   ], c: 1,
   ex: 'Esta es la diferencia entre contar <i>temas</i> y contar <i>herramientas</i>. Si mirás el título del ejercicio, energía casi no aparece en el segundo parcial. Si mirás la <b>resolución oficial</b>, está en todos lados: la velocidad con la que un cilindro llega al pie de la rampa, la altura que sube un bloque después de un choque, la compresión de un resorte — todo eso se hace con energía. Por eso energía va <b>tercera</b> en el plan y no quinta: no es un tema más, es el andamiaje. En el 1er parcial además sí es tema propio, 7 de 31 en las 8 de 8 fechas. ▸ Por qué las otras: la <b>a</b> se queda con la mitad del dato y te haría subestimar el tema; la <b>c</b> es falsa — Newton te da fuerzas y aceleraciones, energía te da velocidades y distancias, y el 2do parcial pide las dos cosas; la <b>d</b> son los ejercicios de cuerpo rígido.'},

  {st: 'Los 66 ejercicios de parcial se reducen a 13 arquetipos. Si te enfocás en seis de ellos —energía con resorte + rozamiento (9), choque plástico 1D en tres etapas (8), rodadura con cuerda enrollada / yo-yo (8), MAS vertical (7), polea con masa (6) y energía en rototraslación (4)—, ¿cuánto del corpus cubrís?',
   opts: [
     '18 de los 66 ejercicios: poco más de un cuarto',
     'Los 66: los otros siete arquetipos son variantes de estos seis',
     '30 de 66, pero repartidos en las ocho hijas, así que no ahorra tiempo',
     '42 de los 66: casi dos tercios, y viven todos en tres hijas (rígido, oscilaciones y choques) más el método de energía'
   ], c: 3,
   ex: '9 + 8 + 8 + 7 + 6 + 4 = <b>42</b>. Y lo importante no es el número sino <i>dónde</i> están concentrados: <b>cuerpo rígido</b> (yo-yo, polea con masa, rototraslación = 18), <b>oscilaciones</b> (MAS vertical = 7), <b>choques</b> (plástico 1D = 8) y <b>energía</b> (resorte con rozamiento = 9). En un final de seis problemas, esos temas ocupan típicamente <b>tres o cuatro</b>. Ahí está tu 50%, con margen. ▸ Por qué las otras: la <b>a</b> es la suma de los arquetipos <i>menos</i> frecuentes (circular 3, cinemática 4, MAS horizontal 2, rotación pura 1, y algo más); la <b>b</b> es falsa — óptica (7), Arquímedes con tercera fuerza (5) y bloques en plano inclinado (6) son moldes distintos y suman 18 ejercicios más; la <b>c</b> confunde el conteo: el punto de los arquetipos es justamente que <b>no</b> están repartidos parejo.'}

]);

/* ============ UNIDAD 3 · Las convenciones de la cátedra ============ */
registerExercises('fisica1-utn', '3', [

  {st: 'Estás resolviendo un problema del corpus y te sale un número que difiere ~2% de la clave. Tenés metido g = 9,8 por costumbre. ¿Qué pasa?',
   opts: [
     'Que con 9,8 no cierra ninguna clave: la cátedra usa g = 10 m/s² siempre, y el propio encabezado del final lo imprime',
     'Nada: 9,8 y 10 son equivalentes, la diferencia es despreciable',
     'Depende del tema: en fluidos va 9,8 y en dinámica va 10',
     'Hay que usar 9,81 para tener la precisión que pide la corrección'
   ], c: 0,
   ex: '<b>g = 10 m/s², sin excepciones.</b> Se verificó ejercicio por ejercicio contra las soluciones oficiales: los resultados de la cátedra solo salen con 10. Y no es solo cuestión de precisión: en un problema con etapas encadenadas (choque + rampa + resorte) ese 2% se amplifica y termina dándote un número que no coincide con nada. El parcial 2023 de Dibarbora lo imprime en el encabezado junto con <span class="m">δ<sub>agua</sub> = 1000 kg/m³ = 1 g/cm³</span> y <span class="m">1 litro = 1000 cm³</span>. ▸ <b>Ojo con el material de San Rafael</b> que aparece en las hijas: <b>allá usan g = 9,8</b>. Está todo renormalizado a 10 y sellado como «otra regional», pero si algún día agarrás un ejercicio crudo de esa fuente, cambiá la gravedad antes de empezar. ▸ Por qué las otras: la <b>b</b> subestima el arrastre del error en problemas de varias etapas; la <b>c</b> inventa una regla por tema que no existe; la <b>d</b> confunde precisión con convención — nadie te pide tres cifras de g, te piden usar la de la casa.'},

  {st: 'Un enunciado te da un plano inclinado de 37°. ¿Qué señal es eso, y qué valores usás?',
   opts: [
     'sen 37° = 0,5 y cos 37° = 0,87, que son los del triángulo 30-60-90',
     'Hay que sacarlo con calculadora y usar todos los decimales, o no coincide con la clave',
     'sen 37° = 0,60 y cos 37° = 0,80 — el triángulo 3-4-5: es la señal de que el problema fue diseñado para cerrar con números redondos',
     'Que el ángulo es un dato que no interesa: en un plano inclinado la masa y el ángulo se cancelan'
   ], c: 2,
   ex: 'El 37° (y su complemento, 53°) es la firma del triángulo <b>3-4-5</b>: 0,6 y 0,8 exactos, sin decimales feos. Cuando lo veas, esperá que la cuenta cierre redonda — y si no cierra, revisá el planteo, porque el problema estaba diseñado para que cerrara. La otra constante que la cátedra usa redondeada es <b>cos 30° = 0,866</b>. ▸ Por qué las otras: la <b>a</b> mezcla los valores de 30°; la <b>b</b> es contraproducente — arrastrar decimales te aleja de la clave en vez de acercarte, porque la clave misma usa 0,6 y 0,8; la <b>d</b> mete a la fuerza la advertencia de los «datos que no interesen» donde no va: en un plano inclinado <b>la masa</b> sí puede cancelarse (<span class="m">a = g(sen θ − μ cos θ)</span>), pero <b>el ángulo nunca</b>.'},

  {st: 'Los enunciados de Martinelli piden tres cosas <b>además</b> del resultado numérico, y las puntúan aparte. ¿Cuáles son?',
   opts: [
     'Cifras significativas, notación científica y unidades del SI',
     'Declarar el sistema de referencia, hacer el diagrama de cuerpo libre y decir las hipótesis',
     'Deducir el momento de inercia, verificar unidades y hacer el gráfico de la trayectoria',
     'Escribir en tinta, numerar las hojas y firmar cada carilla'
   ], c: 1,
   ex: 'Son tres cosas que se hacen en dos renglones cada una y que <b>puntúan solas</b>. El <b>sistema de referencia</b>: dibujá los ejes y decí dónde está el origen y hacia dónde apunta cada eje positivo (en plano inclinado, x paralelo al plano e y perpendicular). El <b>DCL</b>: uno por <i>cada</i> cuerpo, solo fuerzas reales, con su punto de aplicación — si hay dos bloques y una polea con masa, son <b>tres</b> DCL. Las <b>hipótesis</b>: «cuerda inextensible y sin masa», «rueda sin deslizar», «el resorte es ideal», «desprecio la resistencia del aire» — cada una <b>justifica una ecuación que vas a usar</b>, por eso las piden. El parcial 2023 de Dibarbora cambió la redacción pero pide lo mismo: «Entregar todos los desarrollos, cuentas y diagramas. Todas las magnitudes deben tener sus unidades». ▸ Por qué las otras: la <b>a</b> es el capítulo de mediciones, que en el corpus FRBA <b>no se evalúa nunca</b> como tal; la <b>c</b> es exactamente lo que <i>no</i> te piden — el momento de inercia te lo dan como dato; la <b>d</b> son formalidades de entrega (lo de la tinta sí aparece en Dibarbora), pero no son lo que puntúa.'},

  {st: 'Un ejercicio de hidrostática te da densidades en g/cm³ y profundidades en cm. ¿Cómo lo resolvés?',
   opts: [
     'Pasás todo a SI antes de empezar, siempre: kg/m³ y metros',
     'Resolvés en CGS y entregás en CGS: es el sistema que usó el enunciado',
     'Da igual el sistema porque en fluidos todo se cancela',
     'Resolvés en CGS (así lo hace la cátedra: con <span class="m">ρ<sub>agua</sub> = 1 g/cm³</span> las cuentas salen casi mentalmente) y al final pasás el resultado a SI, con 1 Pa = 10 din/cm²'
   ], c: 3,
   ex: 'Trabajar en CGS en hidrostática es una ventaja real: con la densidad del agua valiendo <b>1</b>, las densidades relativas se leen directo y las cuentas de flotación salen sin calculadora. Pero el resultado se entrega en SI. Las dos equivalencias que tenés que tener a mano: <b>1 g/cm³ = 1000 kg/m³</b> y <b>1 Pa = 10 din/cm²</b>. ▸ Por qué las otras: la <b>a</b> no está <i>mal</i>, pero te complica gratis y te aleja del camino de la clave; la <b>b</b> es el error concreto que se repite en los 6 ejercicios de fluidos del 1er parcial: buena física, unidades de entrega equivocadas; la <b>c</b> es falsa — las presiones y las fuerzas no se cancelan, y una fuerza en dinas no es una fuerza en newtons.'},

  {st: 'Las fórmulas de óptica de la cátedra son <span class="m">1/x + 1/x′ = 2/R</span> para espejos y <span class="m">1/x − 1/x′ = 1/f</span> para lentes, con <b>x positivo hacia la izquierda</b>. ¿Por qué importa tanto respetarlas al pie de la letra?',
   opts: [
     'No importa: cualquier convención de signos da el mismo resultado físico',
     'Porque son fórmulas aproximadas y solo valen para ángulos chicos',
     'Porque la de lentes lleva un signo menos que la de Sears no tiene, y porque la x crece contra el sentido de la luz incidente: mezclar convenciones te da vuelta los signos de todo el problema',
     'Porque los espejos usan f y las lentes usan R, y no se pueden intercambiar'
   ], c: 2,
   ex: 'La convención de signos es un <b>paquete cerrado</b>: la fórmula, el sentido positivo del eje y la interpretación del signo del resultado van juntos. Si tomás la ecuación de la cátedra y el criterio de signos de otro libro, el resultado te sale con el signo cambiado y un espejo cóncavo se te convierte en convexo. Sumale el control de <b>R vs f</b>: <span class="m">f = R/2</span>, y en la fórmula de espejos <b>el 2 y la R viajan siempre juntos</b> (<span class="m">2/R</span> o <span class="m">1/f</span>, nunca <span class="m">2/f</span>). ▸ Por qué las otras: la <b>a</b> es verdad solo si usás <i>una</i> convención completa y coherente, que es justo lo que no pasa cuando mezclás; la <b>b</b> confunde el criterio de signos con la aproximación paraxial, que es otra discusión y no cambia los signos; la <b>d</b> es falsa: <span class="m">f = R/2</span> convierte una en otra sin problema, y para lentes también se define <span class="m">f</span>.'},

  {st: 'Martinelli imprime en sus enunciados: «puede haber datos que no interesen». Terminás un problema y te sobró un dato. ¿Qué hacés?',
   opts: [
     'Escribís «el dato X no interviene porque…» y seguís: los distractores son deliberados',
     'Volvés atrás y buscás dónde meterlo: si te lo dieron, tiene que entrar',
     'Lo ignorás en silencio, sin mencionarlo',
     'Le mandás una consulta al docente durante el examen'
   ], c: 0,
   ex: 'Los tres formatos de distractor que más se repiten: <b>(1)</b> te dan <span class="m">μ<sub>e</sub></span> cuando el cuerpo <i>ya está deslizando</i> — si desliza, va <span class="m">μ<sub>d</sub></span>; <b>(2)</b> te dan masas que se cancelan — en un plano inclinado sin polea, <span class="m">a = g(sen θ − μ cos θ)</span> y la masa no aparece; <b>(3)</b> te dan una longitud o un ángulo que no entra, típicamente la <b>profundidad</b> en un problema de flotación, porque el empuje no depende de ella. Decir en una línea por qué el dato no entra <b>demuestra que entendiste el planteo</b> y es parte de las hipótesis que puntúan. ▸ La regla espejada: si te <i>falta</i> un dato, ahí sí volvé a leer, porque probablemente entendiste mal la geometría. ▸ Por qué las otras: la <b>b</b> es la reacción que la cátedra está midiendo con la trampa — forzar el dato te lleva a una ecuación falsa; la <b>c</b> desaprovecha un renglón que suma; la <b>d</b> no es una estrategia de examen.'}

]);

/* ============ UNIDAD 4 · Las trampas de la cátedra ============ */
registerExercises('fisica1-utn', '4', [

  {st: 'Un bloque <b>ya está deslizando</b> por un plano inclinado y el enunciado te da μ<sub>e</sub> = 0,5 y μ<sub>d</sub> = 0,3. ¿Cuál usás y por qué?',
   opts: [
     'μ<sub>e</sub> = 0,5, porque es el que aparece primero y es el que frena de verdad',
     'El promedio de los dos, 0,4',
     'μ<sub>e</sub> para el tramo de subida y μ<sub>d</sub> para el de bajada',
     'μ<sub>d</sub> = 0,3, porque el cuerpo desliza: el μ<sub>e</sub> solo sirve para decidir si arranca o para una condición límite'
   ], c: 3,
   ex: 'Es <b>la trampa más repetida de todo el corpus</b> y aparece en dinámica, en energía y en rodadura. La regla es simple: <b>hay deslizamiento relativo → μ<sub>d</sub></b>. El <span class="m">μ<sub>e</sub></span> responde otra pregunta: «¿el cuerpo arranca?» (<span class="m">mg sen θ > μ<sub>e</sub> mg cos θ</span>) o «¿hasta qué ángulo aguanta sin patinar?». ▸ El caso hermano, en rodadura: si un cilindro <b>rueda sin deslizar</b>, el rozamiento es <b>estático</b> y <b>no vale μ<sub>e</sub>N</b> — es una <b>incógnita</b> que se despeja de las ecuaciones, y <span class="m">μ<sub>e</sub> N</span> es apenas su cota superior. Escribir <span class="m">f = μ N</span> en un problema de rodadura es error de planteo, no de cuenta. ▸ Por qué las otras: la <b>a</b> es exactamente el reflejo que el distractor está buscando; la <b>b</b> promedia dos coeficientes que describen situaciones físicas distintas, no dos medidas de lo mismo; la <b>c</b> inventa una regla: el coeficiente depende de si hay deslizamiento, no del sentido del movimiento.'},

  {st: 'Un carrito recorre un rizo vertical de radio R. Planteás energía entre el punto más bajo y el más alto. ¿Qué altura va en el mgh?',
   opts: [
     'h = R, que es la distancia del centro al punto más alto',
     'h = 2R: el punto más alto está a dos radios del más bajo',
     'h = πR, que es medio perímetro del rizo',
     'h = R/2, porque hay que tomar la altura del centro de masa promedio'
   ], c: 1,
   ex: 'El punto más bajo y el más alto están separados por un <b>diámetro</b>. Con una cuerda o varilla de largo <span class="m">L</span> que da la vuelta entera, el desnivel es <b>2L</b>, no L. Es un error que da un número prolijo y con unidades correctas, así que no hay forma de detectarlo al final: hay que evitarlo al principio, dibujando el rizo con la cota. ▸ Y ya que estás en el punto más alto, la otra mitad de la trampa: <b>la normal apunta hacia el centro, o sea hacia abajo</b>, y se <i>suma</i> al peso: <span class="m">N + mg = m v²/R</span>. La condición límite para no caer es <span class="m">N = 0 → v²<sub>min</sub> = g R</span>. ▸ Por qué las otras: la <b>a</b> es el error clásico, y te subestima la energía necesaria justo a la mitad; la <b>c</b> confunde <b>altura</b> con <b>camino recorrido</b> — el arco importa para el trabajo del rozamiento, no para la energía potencial (la misma confusión que en el plano inclinado, donde <span class="m">h = d · sen θ</span>); la <b>d</b> mete un promedio que no viene al caso: la energía potencial se evalúa punto a punto.'},

  {st: 'Un cilindro de radio exterior R tiene una cuerda enrollada en un <b>eje interior de radio r</b>, y se tira de la cuerda. ¿Cómo escribís el torque de la tensión y el vínculo cinemático?',
   opts: [
     'τ = T·R y a<sub>cuerda</sub> = α·R: el radio del cuerpo es el que manda',
     'τ = T·(R − r), porque hay que restar los radios',
     'τ = T·r (el brazo es la distancia a la recta de acción de la cuerda) y a<sub>cuerda</sub> = α·r, mientras que si además rueda sin deslizar, a<sub>CM</sub> = α·R',
     'τ = T·R y a<sub>CM</sub> = α·r: se cruzan los radios'
   ], c: 2,
   ex: 'El molde del <b>yo-yo</b> aparece en 8 ejercicios del corpus y es donde más gente se cae. El torque se calcula con el <b>brazo</b>, que es la distancia perpendicular del eje de giro a <b>la recta de acción de la fuerza</b>: si la cuerda sale del eje de radio <span class="m">r</span>, el brazo es <span class="m">r</span>. Y hay <b>dos vínculos distintos que conviven</b>: la cuerda se desenrolla a <span class="m">a<sub>cuerda</sub> = α r</span> y el centro avanza a <span class="m">a<sub>CM</sub> = α R</span>. Cada radio con su vínculo. Lo mismo pasa cuando hay una polea con masa: <span class="m">a<sub>cuerda</sub> = α R<sub>polea</sub></span>, con el radio <i>de la polea</i>. ▸ Y no te olvides de <b>Steiner</b> si elegís tomar torques respecto del punto de contacto en vez del CM: <span class="m">I = I<sub>CM</sub> + m d²</span>. ▸ Por qué las otras: la <b>a</b> usa el radio exterior para la cuerda y es el error típico — te sobreestima el torque en un factor <span class="m">R/r</span>; la <b>b</b> inventa una resta de radios que no tiene sentido geométrico; la <b>d</b> tiene los dos radios cruzados, que es la peor combinación posible: mal el torque <i>y</i> mal el vínculo.'},

  {st: 'Las dos trampas del resorte, en el mismo examen. <b>(i)</b> Un bloque llega con velocidad v y comprime un resorte: te piden la <b>compresión máxima</b>. <b>(ii)</b> Una masa m cuelga de un resorte de constante k y longitud natural l₀ y oscila: te piden la <b>amplitud</b>. ¿Qué condición imponés en (i) y desde dónde medís en (ii)?',
   opts: [
     '(i) v = 0 (la compresión es máxima cuando el cuerpo se frena, y ahí la fuerza neta no es cero) · (ii) desde l<sub>eq</sub> = l₀ + mg/k, la posición de equilibrio, con ω = √(k/m)',
     '(i) ΣF = 0, que es donde el resorte está en equilibrio · (ii) desde l₀, la longitud natural',
     '(i) v = 0 · (ii) desde l₀, y ω = √(k/m) − g/l₀ porque la gravedad frena la oscilación',
     '(i) ΣF = 0 · (ii) desde l<sub>eq</sub>, pero con ω = √(k/m + g/l<sub>eq</sub>) porque hay que sumar el efecto del peso'
   ], c: 0,
   ex: 'Son dos confusiones distintas y las dos nacen de <b>elegir mal el punto de referencia</b>. <b>(i)</b> «Compresión máxima» y «equilibrio» son <b>puntos distintos</b>: donde <span class="m">v = 0</span> el resorte está máximamente comprimido y la fuerza es <b>máxima</b>; donde <span class="m">ΣF = 0</span> está el equilibrio, y ahí la <b>velocidad es máxima</b>. Justo al revés uno del otro. La compresión máxima se saca por <b>energía</b>: toda la cinética inicial (menos lo que se comió el rozamiento) se convirtió en <span class="m">½ k x²</span>. Es la trampa que gobierna los 9 ejercicios de energía con resorte. <b>(ii)</b> Si medís <span class="m">x</span> desde <span class="m">l<sub>eq</sub> = l₀ + mg/k</span>, la ecuación de movimiento queda <span class="m">m ẍ = −k x</span>: <b>el peso se fue</b>, porque su único efecto fue correr el centro de oscilación. De ahí sale la conclusión potente: <b>el MAS vertical tiene exactamente la misma frecuencia que el horizontal</b>. Y la <b>amplitud se mide desde l<sub>eq</sub></b>, nunca desde <span class="m">l₀</span> — es la trampa que define el arquetipo del MAS vertical (7 de los 9 ejercicios de oscilaciones). ▸ Por qué las otras: la <b>b</b> se come las dos, y en (i) te da la compresión de equilibrio <span class="m">mg/k</span> en vez de la máxima; la <b>c</b> acierta (i) pero mide la amplitud desde la referencia equivocada e inventa un término en <span class="m">ω</span> que no existe; la <b>d</b> acierta la referencia de (ii) pero cae en el error conceptual central —<b>la gravedad no entra en ω</b>, y sumarle un término te da un período más corto que el real— y además equivoca (i).'},

  {st: 'En un choque perfectamente plástico (los cuerpos quedan pegados) te piden la velocidad final y la energía perdida. ¿Qué conservás?',
   opts: [
     'Solo la cantidad de movimiento. La energía mecánica no se conserva, y la que se pierde (ΔE = E<sub>f</sub> − E<sub>i</sub> &lt; 0) suele ser justamente lo que te piden calcular',
     'Energía mecánica y cantidad de movimiento: las dos siempre se conservan en un choque',
     'Solo la energía: la cantidad de movimiento se pierde en el impacto',
     'Ninguna de las dos, porque hay fuerzas internas de deformación'
   ], c: 0,
   ex: 'Los 8 choques plásticos del corpus tienen todos el mismo esqueleto de <b>tres etapas</b>, y la clave es saber <i>qué</i> ley usar en cada una: <b>antes</b> del choque, energía o cinemática para llegar a la velocidad de impacto; <b>en</b> el choque, <b>solo</b> <span class="m">p<sub>i</sub> = p<sub>f</sub></span>, con <span class="m">m₁v₁ + m₂v₂ = (m₁+m₂)v<sub>f</sub></span>; <b>después</b>, energía otra vez para la altura que suben o la distancia que recorren. La energía que falta se fue en deformación y calor, y calcularla es una consigna habitual. ▸ Regla de bolsillo: <b>si quedan pegados, la energía no se conserva; si es elástico, sí</b>. ▸ Por qué las otras: la <b>b</b> es el error de planteo que define el arquetipo, y da un resultado numéricamente prolijo pero falso; la <b>c</b> tiene todo al revés — <span class="m">p</span> se conserva porque las fuerzas del choque son <b>internas</b> al sistema; la <b>d</b> confunde «hay disipación» con «no hay ley de conservación»: justamente porque las fuerzas son internas, <span class="m">p</span> se conserva.'},

  {st: 'Dos detalles de dos problemas distintos del mismo final: (i) el enunciado de óptica dice «se obtiene una imagen <b>real</b>, <b>tres veces mayor</b>, proyectada sobre una pantalla»; (ii) el de fluidos te da la <b>profundidad</b> a la que está sumergido un cuerpo. ¿Cómo los tratás?',
   opts: [
     'm = +3, y la profundidad entra en E = ρ V g',
     'm = +3, y la profundidad no entra en el empuje',
     'm = −3 (imagen real ⇒ invertida ⇒ aumento negativo), y la profundidad no entra en el empuje: E = ρ<sub>líq</sub> · V<sub>desplazado</sub> · g',
     'm = −3, y la profundidad entra en el empuje porque a más profundidad hay más presión'
   ], c: 2,
   ex: 'Dos distractores clásicos, uno por tema. <b>Óptica</b>: «real» y «proyectada sobre una pantalla» son sinónimos de <b>invertida</b>, y una imagen invertida tiene <b>aumento negativo</b>. Si escribís <span class="m">m = +3</span>, la distancia focal te sale con el signo cambiado y el espejo se te convierte de cóncavo en convexo — todo el resto del problema sale mal a partir de ahí. <b>Fluidos</b>: en <span class="m">E = ρ<sub>líq</sub> V<sub>desp</sub> g</span> <b>no aparece h por ningún lado</b>. Dos cuerpos idénticos, uno a 20 cm y otro a 3 m, reciben <b>el mismo empuje</b>. Lo que sí crece con la profundidad es la <b>presión</b> (<span class="m">p = p₀ + ρ g h</span>), y por eso el enunciado te da <span class="m">h</span>: la necesitás para <i>la otra</i> pregunta del problema, no para el empuje. ▸ Por qué las otras: la <b>a</b> se come las dos trampas juntas; la <b>b</b> acierta el empuje pero pierde el signo del aumento; la <b>d</b> acierta el signo pero cae en la confusión presión/empuje — que la presión sea mayor abajo es cierto, pero el empuje es la <i>resultante</i> de las presiones sobre todas las caras, y esa diferencia depende del <b>volumen</b>, no de la profundidad.'}

]);

/* ============ UNIDAD 5 · Qué NO entra (y qué de eso sí vuelve en el final) ============ */
registerExercises('fisica1-utn', '5', [

  {st: 'Sobre momentos de inercia, ¿qué sacás de la lista de estudio y qué dejás?',
   opts: [
     'Sacás todo: si te los dan como dato, el tema no se estudia',
     'Dejás la integración porque puede aparecer un cuerpo raro que no esté en el encabezado',
     'Sacás el cálculo por integración (no hay un solo ejercicio que lo pida), pero dejás Steiner, que no te lo dan y aparece en péndulo físico y en rodadura tomada desde el contacto',
     'Sacás Steiner también, porque el eje siempre pasa por el centro de masa'
   ], c: 2,
   ex: 'La distinción es fina y vale un problema entero. Que te <i>den</i> <span class="m">I<sub>CM</sub></span> no significa que el tema sea gratis: significa que el examen te va a pedir <b>trasladarlo</b>. Casos concretos que aparecen: barra colgada de un extremo → <span class="m">I = ⅓ m L²</span> (y no <span class="m">1/12</span>); disco montado lejos del pivote en el péndulo físico de «reloj antiguo»; cilindro cuyo torque tomás respecto del punto de contacto con el piso. ▸ Por qué las otras: la <b>a</b> es el atajo que te deja sin Steiner y con eso sin péndulo físico; la <b>b</b> gasta horas en una técnica que el encabezado del final vuelve innecesaria — cuando aparece un cuerpo que no está arriba (esfera maciza <span class="m">2/5 m r²</span>, cilindro <span class="m">½ m R²</span>), el <b>propio enunciado del problema</b> lo trae; la <b>d</b> es falsa, y es la trampa 13 de la unidad anterior.'},

  {st: '¿Cuál de estos grupos de temas puede salir de la lista con menos riesgo?',
   opts: [
     'Cuerpo rígido, choques y oscilaciones',
     'Fluidos y óptica, que caen poco en los finales',
     'Momento angular, péndulo físico y sistemas no inerciales',
     'Potencia (P = W/t, P = F·v), radio de giro, espejo plano y oscilaciones amortiguadas/forzadas: cero apariciones en el corpus'
   ], c: 3,
   ex: 'Son cuatro temas que el resumen teórico desarrolla y que <b>no aparecen ni una vez</b>: la cátedra pregunta trabajo y energía pero nunca la <i>tasa</i> a la que se entrega; los 7 ejercicios de óptica son de espejos <b>esféricos</b> y lentes, el plano no figura; y los 9 de oscilaciones son <b>MAS puro</b>, sin amortiguamiento ni resonancia. Si el tiempo es corto, estos son los primeros que se caen. ▸ Por qué las otras: la <b>a</b> es exactamente lo contrario — son los tres temas más frecuentes y los que te dan el 50%; la <b>b</b> es un error caro: <b>fluidos cae en 6 de 8 primeros parciales y en la mayoría de los finales</b> (y encima tu resumen no lo cubre), y óptica es el tema más barato del examen; la <b>c</b> es justo el paquete que el final <b>agrega</b> y que ningún parcial de Martinelli toca: es prioridad alta, no baja.'},

  {st: 'El resumen dedica páginas a calcular la posición del centro de masa de un sistema. ¿Qué hacés con eso?',
   opts: [
     'Lo estudiás completo: es la base del cuerpo rígido',
     'Sacás el cálculo de la posición (cero apariciones como consigna), pero no el concepto: el CM aparece usado todo el tiempo — velocidad del CM, aceleración del CM, energía en rototraslación',
     'Lo sacás entero, concepto incluido: en el final no aparece la palabra CM',
     'Lo estudiás porque en el final hay que localizar el CM del sistema barra + disco'
   ], c: 1,
   ex: 'Es la diferencia entre <i>localizarlo</i> y <i>usarlo</i>. Localizarlo (<span class="m">x<sub>CM</sub> = Σm<sub>i</sub>x<sub>i</sub> / Σm<sub>i</sub></span>) no se pide nunca. Usarlo es constante: <span class="m">ΣF = m a<sub>CM</sub></span>, la energía de un cuerpo que rueda es <span class="m">½ m v<sub>CM</sub>² + ½ I<sub>CM</sub> ω²</span>, y el vínculo de rodadura es <span class="m">a<sub>CM</sub> = α R</span>. Sin el concepto no escribís ninguna de esas tres. ▸ Por qué las otras: la <b>a</b> te hace estudiar la parte que no rinde; la <b>c</b> tira el concepto junto con el cálculo y te deja sin poder plantear rototraslación; la <b>d</b> confunde el péndulo físico — ahí lo que armás es el <b>momento de inercia total con Steiner</b>, no la posición del centro de masa.'},

  {st: 'En un final aparece «calcule el error relativo porcentual y compare con la especificación de fábrica». ¿Eso significa que hay que estudiar el capítulo de mediciones y cifras significativas?',
   opts: [
     'No: es propagación de errores aplicada a un resultado que ya calculaste —aparece dentro del problema del péndulo balístico— y el capítulo de mediciones como tal no se evalúa nunca en el corpus',
     'Sí: hay que estudiar mediciones completo, con cifras significativas y notación científica',
     'No, porque los errores de medición aparecen solo en San Rafael y no en FRBA',
     'Sí, pero solo la parte de cifras significativas, que es lo que puntúan'
   ], c: 0,
   ex: 'La consigna aparece <b>en una sola fecha</b> y viene pegada a un problema de física normal: resolvés el péndulo balístico, obtenés la velocidad de la bala, y recién ahí comparás contra el valor de fábrica con <span class="m">e% = |v<sub>calc</sub> − v<sub>fab</sub>| / v<sub>fab</sub> × 100</span>. Es media carilla de teoría, no un capítulo. ▸ Por qué las otras: la <b>b</b> te manda a estudiar un capítulo entero que <b>no cayó nunca</b> en los 84 exámenes analizados — ningún enunciado pide «exprese con la cantidad correcta de cifras significativas»; la <b>c</b> es falsa: el ejercicio del error relativo está en un final de <b>UTN.BA</b> (lo que sí aporta San Rafael es teoría de errores más desarrollada, útil como apoyo); la <b>d</b> inventa un criterio de corrección que no figura en ninguna hoja.'},

  {st: 'Aproximadamente el 40% del final son temas que ningún parcial de Martinelli toca. ¿Cuáles son?',
   opts: [
     'Potencia, radio de giro, espejo plano, oscilaciones amortiguadas y cifras significativas',
     'Nada: el final es una selección de los mismos ejercicios de los dos parciales',
     'Todo lo del 1er parcial, porque los finales solo toman los temas del segundo',
     'Momento angular · choque elástico y en 2D · péndulo físico con Steiner · sistemas no inerciales · hidrodinámica (Bernoulli, Torricelli, Venturi, tubo en U) · gravitación · errores de medición · óptica de prisma y lámina de caras paralelas · flotación cargada'
   ], c: 3,
   ex: 'Este es el motivo por el que estudiar <i>solo</i> con los parciales de Martinelli te deja corta. Ejemplos textuales de los finales: una masa que gira atada a una soga que pasa por un agujero y se acorta el radio (momento angular, final del <b>2/3/23</b>); «con una barra y un disco se construye un dispositivo para un reloj de péndulo antiguo» (péndulo físico con Steiner en dos cuerpos); una plataforma acelerada con polea y dos cuerpos ligados pidiendo la aceleración máxima sin deslizamiento (no inercial); un tanque presurizado del que sale un chorro y hay que calcular el <b>alcance</b> (Torricelli + tiro horizontal); «¿cuántos troncos hacen falta como mínimo para mantener a flote a tres niños de 40 kg?» (flotación cargada); «calcule el corrimiento lateral del rayo al atravesar la lámina» (Snell, y en ese final <b>es el problema 1</b>). Es justo el temario que el programa de San Rafael cubre, y por eso ese material entra en las hijas. ▸ Por qué las otras: la <b>a</b> es la lista de lo <b>salteable</b>, la opuesta; la <b>b</b> desmiente todos los ejemplos de arriba; la <b>c</b> es falsa — el final <b>junta las dos mitades</b>: óptica, fluidos, Newton y energía siguen entrando.'},

  {st: 'Leés que un tema es «salteable». ¿Qué tan fuerte es esa afirmación?',
   opts: [
     'Es definitiva: si no cayó en el corpus, no puede caer',
     'Es fuerte pero no infinita: sale de un corpus de 84 exámenes que tiene un agujero de cinco años (2018-2022) sin una sola hoja de FRBA — lo único que sí podés dar por seguro es que no vas a integrar para sacar un momento de inercia, porque eso está escrito en el encabezado del final',
     'Es débil: con 84 exámenes no se puede concluir nada',
     'Es definitiva para los parciales pero no dice nada de los finales'
   ], c: 1,
   ex: 'Hay que separar dos tipos de evidencia. La <b>estadística</b> («potencia no apareció en 84 exámenes») es muy buena pero probabilística, y tiene un hueco declarado: <b>entre 2018 y 2022 no hay ninguna hoja de FRBA</b>, y de 2018 en adelante todo lo que sabemos son dos papeles (el parcial 2023 de Dibarbora y el ejercicio suelto de 2025). La <b>documental</b> («los momentos de inercia van impresos en el encabezado») es certeza: no es una inferencia, está en la hoja. Si te sobra tiempo, dale una leída conceptual a potencia y a centro de masa — son dos páginas cada uno. ▸ Por qué las otras: la <b>a</b> convierte una probabilidad alta en un absoluto, y con un agujero de cinco años eso es imprudente; la <b>c</b> tira por la borda una muestra grande y consistente — es el mejor dato que hay; la <b>d</b> invierte el argumento: el recuento de los ~10 finales es <i>parte</i> del corpus, no está afuera.'}

]);

/* ============ UNIDAD 6 · El plan de estudio y el orden ============ */
registerExercises('fisica1-utn', '6', [

  {st: '¿Por qué el plan arranca con cuerpo rígido y no con el primer tema del programa?',
   opts: [
     'Porque es el de mayor peso (está en los 10 finales, muchas veces en dos problemas del mismo examen, y es 14 de 35 del 2do parcial) y a la vez el más largo de aprender: va primero, con la cabeza fresca y el calendario abierto',
     'Porque es el más fácil y sirve para agarrar confianza',
     'Porque el programa de la materia lo pone primero',
     'Porque los momentos de inercia vienen dados y entonces se resuelve solo'
   ], c: 0,
   ex: 'El criterio del plan no es el orden en que se enseña: es <b>maximizar puntos por hora</b>, y eso lo dicta la tabla de frecuencias. Rígido gana por goleada en peso y además es el que más tiempo pide, porque no es una fórmula sino un <b>sistema de tres ecuaciones</b> que hay que aprender a montar. ▸ Señal de que ya lo tenés: ante un cilindro con cuerda enrollada escribís sin dudar las tres —<b>Newton en el CM</b>, <b>torque respecto del CM</b> y <b>el vínculo a = αR</b>— y sabés cuál es cuál. ▸ Por qué las otras: la <b>b</b> es falsa, es el tema más difícil del examen; la <b>c</b> es justo el criterio que el plan descarta; la <b>d</b> confunde el dato con el trabajo — que te den <span class="m">I<sub>CM</sub></span> te ahorra una integral, no te ahorra plantear el problema (ni Steiner, que no te lo dan).'},

  {st: 'Después de rígido, el plan pone oscilaciones y choques juntos en el paso 2. ¿Por qué esos dos?',
   opts: [
     'Porque son los que más se parecen entre sí',
     'Porque son prerrequisito de fluidos y de óptica',
     'Porque son los más garantizados después de rígido (MAS: 9 de 9 fechas; choque plástico: 8 de 9) y a la vez los más rápidos de dominar: cada uno es un molde con dos o tres variantes. Mejor relación puntos/hora del final',
     'Porque son los únicos que tienen solución oficial'
   ], c: 2,
   ex: 'Es la combinación ideal: máxima probabilidad de aparecer, mínimo tiempo de aprendizaje. El MAS es esencialmente un molde (masa colgada de un resorte, 7 de 9 casos) y el choque plástico otro (tres etapas, 8 casos). ▸ Señales de que ya los tenés: en MAS sacás <span class="m">ω</span>, <span class="m">T</span>, <span class="m">A</span> y <span class="m">v(x)</span> de un vertical sin dudar dónde está <span class="m">l<sub>eq</sub></span>; en choques separás sin pensarlo las tres etapas y sabés en cuál se conserva <span class="m">p</span> y en cuál <span class="m">E</span>. Con los pasos 1 y 2 hechos ya tenés <b>tres o cuatro</b> problemas a tiro de un final de seis: literalmente el 50%. ▸ Por qué las otras: la <b>a</b> es falsa y además irrelevante como criterio; la <b>b</b> invierte la dependencia — fluidos y óptica son independientes de estos dos; la <b>d</b> es falsa: hay 16 hojas de solución oficial que cubren todos los temas de parcial.'},

  {st: 'Fluidos va en el paso 5, casi al final del plan. ¿Significa que es opcional?',
   opts: [
     'Sí: va último porque cae poco',
     'Va último porque es el más difícil de todos',
     'Va último porque solo entra hidrostática, que es media hora de estudio',
     'No: va tarde pero es obligatorio, y encima hay que estudiarlo desde cero — cae en 6 de 8 primeros parciales y en la mayoría de los finales, y el resumen de 52 páginas que tenés no lo cubre'
   ], c: 3,
   ex: 'Es <b>la trampa del plan de estudio</b>, y es la única del material donde tu teoría te miente por omisión: el resumen es de UTN <b>FRGP</b> (otra regional) y no cubre fluidos ni gravitación. Si armás el cronograma mirando el índice de ese resumen, fluidos <b>directamente no aparece</b> — y es un tema que cae todo el tiempo. Por eso la hija de fluidos es la única con la <b>teoría escrita de cero</b>: hidrostática completa (presión hidrostática, absoluta vs manométrica, Arquímedes, fuerza sobre superficies sumergidas) <b>y toda la hidrodinámica</b> (continuidad, Bernoulli, Torricelli, Venturi, tubo en U, tanque presurizado). Reservale tiempo de verdad: no es «repasar», es aprender el tema. ▸ Señal de que ya lo tenés: resolvés un Arquímedes con tercera fuerza en CGS y lo pasás a SI, y de un tanque presurizado sacás la velocidad de salida con Bernoulli y después el alcance del chorro con tiro horizontal. ▸ Por qué las otras: la <b>a</b> es falsa en los números; la <b>b</b> confunde «no tenés apunte» con «es difícil»; la <b>c</b> se olvida de la hidrodinámica, que en el final vale tanto como la hidrostática.'},

  {st: 'Óptica queda cuarta en el plan, después de energía y dinámica. ¿Con qué lógica?',
   opts: [
     'Porque hay que saber dinámica para entender la marcha de rayos',
     'Porque cae poco en los finales (3 hojas de 10) pero es baratísima: dos fórmulas, una convención de signos y una marcha de rayos. Se cierra en una tarde y te compra un problema entero, así que va después de lo pesado pero nunca se saltea',
     'Porque en el final óptica casi no entra y es un tema de relleno',
     'Porque es el tema más difícil y conviene dejarlo para el final'
   ], c: 1,
   ex: 'El lugar en la lista mide <b>urgencia</b>, no importancia. Óptica va cuarta porque puede esperar, pero rinde muchísimo cuando llega: su costo de aprendizaje es de los más bajos del examen y su premio es un problema completo de los seis. Acordate además de que en el parcial 2023 de Dibarbora óptica y fluidos son <b>2 de 6 problemas</b>. ▸ Señal de que ya la tenés: dado un espejo sacás <span class="m">x′</span> y el aumento con el signo correcto (imagen real ⇒ <span class="m">m</span> negativo), y <b>dibujás la marcha de rayos sin copiarla</b>. ▸ Por qué las otras: la <b>a</b> inventa una dependencia que no existe; la <b>c</b> es la lectura que te hace regalar un problema barato; la <b>d</b> es falsa — el más difícil y el más largo es cuerpo rígido, y por eso va primero.'},

  {st: 'Trabajo y energía junto con dinámica van en el paso 3, después de rígido, oscilaciones y choques. ¿Por qué no van primero, si son «lo básico»?',
   opts: [
     'Porque son temas menores en el final',
     'Porque el programa los pone al final',
     'Porque no son solo temas: son el método con el que se resuelven los otros (~25 de los 35 ejercicios del 2do parcial usan energía como herramienta), y al hacer los pasos 1 y 2 ya los usaste — llegás con medio camino hecho',
     'Porque energía solo sirve para el 1er parcial'
   ], c: 2,
   ex: 'Es una decisión deliberada y un poco contraintuitiva: en vez de estudiar la herramienta en abstracto y después buscar dónde aplicarla, la aprendés <b>usándola</b> en rodadura, en MAS y en choques, y recién después la formalizás. Cuando llegás al paso 3 no arrancás de cero: venís de haber planteado conservación de energía veinte veces. ▸ Señal de que ya lo tenés: elegís sin dudar entre <b>Newton</b> (cuando piden aceleración o fuerza) y <b>energía</b> (cuando piden velocidad o distancia), y sabés cuándo <b>no</b> podés usar energía —el choque plástico—. ▸ Por qué las otras: la <b>a</b> es falsa, energía está prácticamente en todos los finales, casi siempre embebida en otro problema; la <b>b</b> vuelve al criterio del programa, que el plan descarta; la <b>d</b> se contradice con el 2do parcial, donde energía es el método dominante aunque casi no sea el título del ejercicio.'},

  {st: 'Abrís una hija y el ejercicio dice «Final UTN.BA 14/02/24». ¿Qué información te está dando esa etiqueta?',
   opts: [
     'Que viene con resolución oficial de la cátedra, como todos los ejercicios fechados',
     'Que es material de otra regional y hay que renormalizar la gravedad',
     'Que el enunciado fue reconstruido porque el original estaba ilegible',
     'Que es el examen que rendís, en su formato real, pero que no hay resolución oficial: la resolución está hecha desde cero y contrastada contra el método de las claves de Martinelli'
   ], c: 3,
   ex: 'La procedencia no es adorno: te dice <b>cuánto pesa</b> cada cosa. El código completo: <b>«Parcial, cátedra Martinelli 2009-2017»</b> = tiene clave oficial contra la cual está verificado, es el material más sólido, pero su formato no es el de tu final. <b>«Final UTN.BA» con fecha</b> = formato real del examen, sin clave. <b>«dato reconstruido» en gris</b> = el original estaba ilegible (masa tapada por una firma, coeficientes tachados a mano en el del 26/05/22, gráfico v-t borroso en el del 14/02/24, o la recreación de memoria del 13/02/25 con anotaciones del tipo «no recuerdo qué datos daba»): la física vale igual, el número puede no ser el que salió ese día. <b>«UTN San Rafael»</b> = otra regional, entra porque cubre los temas que solo caen en final, y <b>allá usan g = 9,8</b> (acá está renormalizado a 10). <b>«1er parcial 2023, Prof. Dibarbora — FRBA»</b> = el puente: temario de Martinelli, formato de final. ▸ Por qué las otras: la <b>a</b> es falsa y es el hueco más grande del material — <b>ningún final tiene clave</b>; la <b>b</b> corresponde a la etiqueta de San Rafael; la <b>c</b> corresponde a la marca gris de «dato reconstruido», que es una advertencia distinta y aparece dentro del enunciado.'}

]);
