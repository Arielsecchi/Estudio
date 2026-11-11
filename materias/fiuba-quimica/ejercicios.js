// ============================================================
// QUÍMICA BÁSICA · FIUBA · CB040 · Cátedra Boeykens
// SECCIÓN 1 · Cómo se cursa CB040 y cómo se aprueba
// Fuentes: Reglamento para estudiantes de Química Básica 2026,
// Programa analítico CB040, Cronograma de actividades 2C2026,
// páginas "Evaluaciones integradoras" y "Exámenes libres" del
// campus de la cátedra, y los 9 exámenes reales que junté.
// ============================================================

registerExercises('fiuba-quimica', '1', [

  {st: 'El reglamento pide aprobar el 75 % de las Evaluaciones de Seguimiento. ¿Cuántas hay que aprobar?',
   opts: ['9 de 12', '11 de 14', '10 de 13', '8 de 11'], c: 0,
   ex: 'La tabla de actividades obligatorias del reglamento (páginas 2 y 3) lista <b>12 Evaluaciones de Seguimiento</b>, no 14: la numeración va del ES-01 al ES-14 pero <b>el ES-07 y el ES-11 no existen</b>. No figuran ni en el reglamento ni en el cronograma 2C2026. → 75 % de 12 = <b>9</b>. Podés desaprobar hasta <b>3</b>. → El error de contar 14 no es inocente: te hace creer que tenés margen para perder una más de las que podés.'},

  {st: 'Recursás la materia. El cuatrimestre pasado tenías el TP1V y el TP4BV aprobados con 100 y nueve ES aprobadas. ¿Qué te reconocen?',
   opts: ['Todo lo virtual: sólo repetís lo presencial', 'Las ES sí, los TP virtuales no', 'Nada de lo virtual: hacés las 19 actividades de nuevo', 'Te reconocen lo virtual si lo pedís por formulario'],
   c: 2,
   ex: 'Textual del reglamento: “<i>No se considerarán aprobadas actividades virtuales de cursadas anteriores. Los estudiantes que recursen deberán completar nuevamente todas las instancias virtuales.</i>” → Es total: <b>12 ES + 3 TPxV en SCORM + 4 cuestionarios de TP = 19 actividades desde cero</b>. → La única excepción del reglamento son los <b>TP presenciales de laboratorio</b>, y sólo del cuatrimestre <b>inmediato anterior</b>, con tres condiciones (formulario en plazo, 100 % de las actividades del cuatrimestre anterior y aval del profesor). Y el propio reglamento aclara que esa validación “<i>no exime al estudiante de realizar nuevamente todas las actividades virtuales obligatorias</i>”.'},

  {st: 'Rendís un parcial de tres ejercicios de 33, 33 y 34 puntos. Hacés los dos primeros perfectos y el tercero lo dejás en blanco. Sacás 66/100. ¿Aprobaste?',
   opts: ['Sí: 66 supera el mínimo de 60', 'Sí, pero con la nota mínima', 'No: falta el 50 % del tercer ejercicio', 'Depende del criterio del corrector'],
   c: 2,
   ex: 'La aprobación exige <b>dos condiciones simultáneas</b>: “<i>obtener un puntaje igual o superior a 60/100 puntos <b>y</b> tener al menos el 50 % de cada ejercicio resuelto correctamente</i>”. La misma frase está impresa al pie de los 9 exámenes reales que junté. → Con el tercer ejercicio en 0 % la segunda condición no se cumple y el examen está <b>desaprobado</b>, aunque el total sea 66. → La consecuencia práctica: cuando te queda poco tiempo, <b>conviene arrancar el ejercicio que falta antes que pulir el que ya tenés</b>. Medio ejercicio en los tres aprueba; dos enteros y uno vacío, no.'},

  {st: 'Vas a hacer el Cuestionario TP2 (masa molar del Mg). ¿Cuál es la condición?',
   opts: ['Nota ≥ 60, tres intentos', 'Nota ≥ 80, cinco intentos', 'Nota 100, intentos ilimitados', 'Nota ≥ 80, tres intentos'],
   c: 1,
   ex: 'Los <b>cuestionarios de TP</b> (TP1, TP2, TP3 y TP4AV) piden <b>≥ 80</b> y dan <b>cinco (5) intentos</b>. → No confundas los tres regímenes de la tabla: las <b>ES</b> son ≥ 60 con <b>tres</b> intentos; los <b>TPxV en SCORM</b> (TP0V, TP1V, TP4BV) piden llegar a <b>100</b> pero con intentos <b>ilimitados</b>, o sea que se hacen hasta que salen y no se pueden perder; y los cuestionarios de TP, ≥ 80 con cinco. → Además, sin el CTP2 aprobado <b>no entrás al laboratorio</b> a hacer el TP2.'},

  {st: 'El parcial es el viernes 30/10. ¿Cuándo es tu fecha límite real para tener las actividades obligatorias de los temas del parcial?',
   opts: ['El mismo 30/10, antes de las 18 h', 'El lunes 26/10 a las 23 h, que es el cierre del campus', 'Una semana antes: el viernes 23/10', 'No hay plazo, sólo hay que tenerlas antes de la EI'],
   c: 2,
   ex: 'El reglamento lo dice dos veces: “<i>Para estar en condiciones de rendir el parcial deben tener completas las actividades obligatorias requeridas correspondientes a los temas incluidos en el examen, <b>al menos una semana antes</b> de la fecha para rendir</i>”. → Con el parcial el 30/10, eso da el <b>viernes 23/10</b>. → El cierre del campus del <b>lunes 26/10 a las 23 h</b> es una fecha distinta y posterior: es cuándo se apagan las actividades, no hasta cuándo te habilitan a rendir. Si te apoyás en el 26 podés terminar con todo aprobado y sin derecho a rendir. Y el cronograma avisa que “<i>una vez cerradas las actividades virtuales obligatorias las mismas NO SE VOLVERÁN A ABRIR</i>”.'},

  {st: 'Tenés un turno médico el mismo día del 1er recuperatorio y pedís el diferido. ¿Cuál es el plazo de los comprobantes?',
   opts: ['Subirlos al menos 48 horas antes de la fecha del diferido', 'Subirlos el mismo día del diferido', 'Subirlos hasta 24 h después, con el aval del docente', 'No hacen falta comprobantes si avisás por campus'], c: 0,
   ex: 'El reglamento: “<i>Todos los comprobantes deben estar subidos <b>al menos 48 horas antes</b> de la fecha del diferido correspondiente y avisar por campus al profesor responsable <b>con acuse de recibo</b></i>”. → Son dos trámites, no uno: <b>aviso por campus con acuse</b> + <b>formulario de registro</b> con los certificados subidos, cuyo link está en el Aula de la cátedra. → Y para superposición por <b>cursada</b> hay un plazo extra más exigente: el comprobante de inscripción del SIU va subido <b>al menos una semana antes del examen</b>. → Si después no te presentás el día del diferido, perdés esa oportunidad; hay <b>una sola por cada una de las tres fechas</b>.'},

  {st: 'Aprobaste la cursada con nota 7 y rendís la evaluación integradora, donde sacás 9. ¿Qué nota se asienta en el SIU?',
   opts: ['9, que es la del examen final', '8, el promedio entre cursada y EI', '7, que es la de la cursada', 'La que decida el profesor responsable'], c: 1,
   ex: 'Textual: “<i>La nota de aprobación de la asignatura que se subirá al SIU será la que resulte del <b>promedio entre la nota de la cursada y la de la EI</b></i>”. → Por eso la nota de cursada no es un mero aprobado/desaprobado: sale de la ponderación de parciales y recuperatorios, TP de laboratorio, actividades virtuales obligatorias y actividad presencial en clase, y se te arrastra hasta el final. Aprobar el parcial en primera fecha con 85 y aprobarlo en el segundo recuperatorio con 60 no da lo mismo en diciembre del año siguiente.'},

  {st: 'Aprobaste la cursada en julio de 2026. Rendís la EI en agosto y en diciembre de 2026, y desaprobás las dos. ¿Hasta cuándo tenés para la tercera?',
   opts: ['Tenés tiempo indefinido mientras queden llamados', 'Hasta agotar la tercera oportunidad, sin límite de fecha', 'Hasta diciembre de 2027, dos años', 'Hasta julio de 2027: pasado un año de aprobada la cursada, vence'], c: 3,
   ex: 'Hay <b>dos relojes</b> y vence el que llegue primero: “<i>pasadas las tres oportunidades <b>o un lapso superior a 1 año</b> de aprobada la cursada, esta queda vencida y debe volver a recursar</i>”. → Con la cursada aprobada en julio de 2026, el año se cumple en <b>julio de 2027</b> aunque te quede una oportunidad sin usar. → Y ojo con el otro reloj: si usás las tres y las tres van mal, “<i>si un estudiante rinde 3 veces mal, se le asienta la desaprobación con un 2 (Dos)</i>”. → Prórrogas: sólo por “razón extraordinaria, fundamentada y debidamente justificada”.'},

  {st: 'El examen empieza a las 18 h y llegás 18:12. ¿Qué pasa?',
   opts: ['No entrás: el corte es a las 18 h en punto', 'Entrás, porque el corte son 15 minutos después del inicio', 'Entrás sólo con autorización del profesor responsable', 'Entrás pero rendís en la fecha del diferido'],
   c: 1,
   ex: 'Son <b>dos reglas distintas</b> y conviene no mezclarlas. La primera: “<i>los estudiantes deben presentarse <b>al menos 15 minutos antes</b> del horario de inicio</i>”. Es lo que te piden, no un corte. La segunda sí es el corte: “<i>No se permitirá la entrada <b>pasados los 15 minutos de inicio</b> del examen</i>”. → A las 18:12 todavía entrás; a las 18:16 no. → La página del campus sobre integradoras pide <b>20 minutos antes</b> para acreditar identidad: las dos fuentes de la cátedra no coinciden en ese número, así que llegá 20 minutos antes y cumplís las dos. → Y una vez adentro no podés salir del aula <b>antes de los 15 minutos de iniciado</b>, en ninguna circunstancia.'},

  {st: '¿Qué llevás al parcial y qué te dan?',
   opts: ["Llevás calculadora programable y tabla periódica; te dan las hojas", "Llevás todo salvo el celular, incluida la tabla periódica impresa", "Llevás lápiz y goma; la calculadora la presta la cátedra", "Llevás lapicera y calculadora científica no programable; la tabla periódica la dan ellos"],
   c: 3,
   ex: 'Al aula entran documento de identidad, hojas en blanco, <b>lapicera</b> y <b>calculadora científica común</b>. “<i>No se permitirá el uso de calculadoras programables</i>”. → La <b>tabla periódica la provee la cátedra</b>: los 9 exámenes reales que junté lo dicen en el encabezado (“<i>Obtenga los datos que necesite de la tabla periódica suministrada para el examen</i>”), junto con los valores de R. → Celulares, tablets y relojes inteligentes van <b>silenciados y en el bolso</b>, en el lugar designado del aula lejos de los bancos. → El examen se hace <b>en lapicera, no en lápiz</b>.'},

  {st: 'Terminaste antes y querés irte a los 90 minutos de un examen de 3 horas. ¿Qué perdés?',
   opts: ['Perdés la revisión del examen', 'Nada, la entrega es la entrega', 'Perdés 10 puntos de la nota', 'Perdés el derecho al recuperatorio'], c: 0,
   ex: 'La página de evaluaciones integradoras del campus es explícita: <b>quien se retira antes de que termine el examen pierde la revisión</b>. → Y el reglamento agrega que si te retirás antes del horario de finalización tenés que <b>entregar TODAS las hojas sobrantes</b>. → Importa más de lo que parece en esta materia: con la regla del 50 % de cada ejercicio, la revisión es la instancia donde discutís si un ejercicio está resuelto “al menos a la mitad” o no, que es exactamente lo que decide aprobado/desaprobado en los casos de borde.'},

  {st: 'Terminó la cursada, aprobaste todo y no te aparece la nota en el SIU. ¿Qué es lo más probable que falte?',
   opts: ["El escaneo de un informe de TP", "La aceptación del reglamento", "La inscripción a la EI", "Las encuestas del SIU sobre la asignatura"], c: 3,
   ex: 'Entre las actividades obligatorias, el reglamento incluye una que no está en la tabla de las 19 y que casi nadie mira: “<i>Luego de finalizada la cursada, y en un lapso <b>no mayor a 15 días</b>, deben completar las encuestas sobre la asignatura requeridas en el SIU <b>para poder registrar la nota de cursada</b></i>”. → Las otras tres opciones son requisitos reales pero de etapas anteriores: sin informe subido el TP no está aprobado y no habrías cerrado la cursada; aceptar el reglamento también es una actividad obligatoria pero del inicio; y la inscripción a la EI es posterior y por SIU-Guaraní (abre 7 días antes, cierra 48 h antes).'},

  {st: 'Un compañero que no cursó nunca quiere rendir libre y te pregunta cuántas oportunidades tiene. ¿Qué le decís?',
   opts: ["Una sola: si desaprueba una etapa, es 2 (dos) en el SIU", "Tres, igual que el regular", "Tres, pero en un mismo período de exámenes", "Dos: el escrito y su recuperatorio"], c: 0,
   ex: 'Textual del campus: “<i>El examen consta de 3 etapas, para pasar a la siguiente etapa deberá aprobar la anterior. En caso de no aprobar alguna etapa, el examen estará DESAPROBADO, 2 (dos). <b>No tiene 3 oportunidades como en los exámenes regulares.</b></i>” → Y las tres etapas ocupan <b>tres llamados distintos</b> del mismo período: práctico escrito en el 2do llamado, <b>evaluación de los TP de laboratorio presenciales</b> (experiencias, informes y cuestionarios) en el 3ro, y teórico integrador escrito en el 4to. → La etapa 2 no se puede preparar leyendo: es laboratorio de verdad. → Todo el detalle está en la guía “Química Básica · Examen libre”.'},

]);

registerReveals('fiuba-quimica', '1', [

  {st: 'Vas 13 semanas de cursada con este estado: 12 de 16 clases presenciales asistidas; TP1 y TP2 hechos con informe aprobado y TP3 faltaste (lo recuperaste con informe aprobado); 8 ES aprobadas de las 12; TP0V, TP1V y TP4BV en 100; los cuatro cuestionarios de TP en 85, 90, 80 y 82. ¿Mantenés la regularidad? Si no, ¿qué te falta exactamente y cuánto margen te queda?',
   ans: 'No. Te falta una ES: con 8 de 12 estás en 66,7 % y el umbral es 75 %, es decir 9. Todo lo demás cumple, con la asistencia justo en el límite.',
   sol: 'Chequeá los cuatro requisitos de regularidad uno por uno, que son independientes y todos eliminatorios. → <b>Asistencia presencial ≥ 75 %:</b> 12/16 = 75,0 % exacto. <b>Cumple, pero sin margen</b>: la próxima falta te deja en 11/16 = 68,8 % y perdés la regularidad. → <b>100 % de asistencia a los TP presenciales con informes aprobados:</b> son tres (TP1, TP2, TP3). Faltar al TP3 no te elimina si lo recuperaste y el informe está aprobado y <b>subido escaneado</b> a la tarea del aula virtual del curso; el reglamento dice que el TP “quedará definitivamente aprobado con la presentación y aprobación del informe” y que la validación se hace con esa subida. <b>Cumple.</b> → <b>75 % de las ES:</b> son <b>12</b> (ES-07 y ES-11 no existen). 75 % de 12 = <b>9</b>. Tenés 8. <b>No cumple.</b> Te falta exactamente una, y como cada ES da <b>tres intentos</b>, mientras la actividad siga abierta la podés recuperar. → <b>100 % de los TP virtuales:</b> los tres SCORM en 100 y los cuatro cuestionarios por encima de 80 (el mínimo es 80, así que el 80 justo del CTP3 cuenta). <b>Cumple.</b> → <b>Qué hacer:</b> aprobar una ES más antes del cierre (lunes 26/10 a las 23 h para las de los temas del parcial, lunes 30/11 a las 23 h para las restantes), porque “una vez cerradas las actividades virtuales obligatorias las mismas NO SE VOLVERÁN A ABRIR”.'},

  {st: 'Rendís el 2do recuperatorio. Son tres ejercicios de 30, 35 y 35 puntos. Te va así: Ejercicio 1 completo y correcto (30/30), Ejercicio 2 resuelto hasta la mitad exacta (17,5/35) y Ejercicio 3 planteado pero con un solo ítem de tres bien (12/35). Total 59,5. ¿Aprobaste? ¿Y si el Ejercicio 3 te hubiera dado 18/35?',
   ans: 'No aprobaste en ninguno de los dos casos, pero por motivos distintos: en el primero fallan las dos condiciones (59,5 < 60 y el Ej. 3 está en 34 %); en el segundo el 50 % de cada ejercicio se cumple pero el total, 65,5, ya alcanza. Con 18/35 sí aprobás.',
   sol: 'La regla es “60/100 <b>y</b> al menos el 50 % de cada ejercicio”, dos condiciones simultáneas. Se evalúan por separado. → <b>Caso 1.</b> Total: 30 + 17,5 + 12 = <b>59,5</b>, por debajo de 60 → falla la primera condición. Porcentajes por ejercicio: 30/30 = 100 %, 17,5/35 = 50,0 % (justo cumple) y 12/35 = <b>34,3 %</b> → falla también la segunda. <b>Desaprobado por partida doble.</b> → <b>Caso 2.</b> Con 18/35 en el tercero: total 30 + 17,5 + 18 = <b>65,5</b> ≥ 60 → primera condición cumplida. Porcentajes: 100 %, 50,0 % y 51,4 %, los tres ≥ 50 % → segunda condición cumplida. <b>Aprobado.</b> → Lo que enseña la comparación: los <b>6 puntos</b> que separan los dos casos no valen por lo que suman, valen porque cruzan el umbral del <b>50 % del ejercicio más flojo</b>. Por eso, con el reloj en contra, media hora puesta en el ejercicio que tenés en 34 % rinde muchísimo más que la misma media hora puesta en perfeccionar el que ya tenés en 90 %.'},

  {st: 'Estás anotado en un curso de los lunes. En 2C2026 hay tres feriados en lunes (17/08, 12/10 y 23/11) y además el 12/10 tenías el TP presencial de otro compañero de curso. Sobre 16 clases, ¿cuántas te quedan y qué margen de faltas tenés? ¿Qué dice el reglamento que podés hacer con las clases perdidas?',
   ans: 'Los feriados no cuentan como falta: se compensan asistiendo a otro curso esa misma semana o con actividades virtuales que elija tu profesor. El umbral sigue siendo 75 % de las clases efectivas, y ese 75 % hay que calcularlo sobre las clases que efectivamente se dictan en tu curso.',
   sol: 'El reglamento tiene una cláusula específica: “<i>En el caso que una clase presencial coincida con un día feriado o que no haya actividad presencial en la universidad, la misma puede ser compensada por los estudiantes <b>en otro curso en esa misma semana</b>, o a través de <b>actividades virtuales seleccionadas por el profesor</b> a cargo en el aula virtual del curso</i>”. → Es decir: el feriado no es una falta tuya, pero <b>tampoco es una clase regalada</b>. La compensación la tenés que hacer, y el que decide la modalidad virtual es tu profesor. → Con tres feriados en lunes, un curso de los lunes tiene tres semanas a compensar: la 1 (17/08), la 9 (12/10) y la 15 (23/11). Fijate que la semana 15 es la del <b>2do recuperatorio</b> (viernes 27/11) y la semana 9 arranca el bloque de ácido-base: son las dos peores semanas para perder contacto con el curso. → Sobre el margen: el 75 % se cuenta sobre las clases que se dictan, así que si tu curso llega a dictar 13 clases presenciales el umbral son 9,75 → <b>10 asistencias</b>, y podés faltar 3. Con 16 dictadas, 12 asistencias y 4 faltas. <b>No hagas la cuenta con 16 si tu curso dictó 13</b>: te sobran faltas que no tenés. → Aparte, recordá que la asistencia <b>se toma al finalizar la clase</b> con <b>20 minutos de tolerancia</b> al inicio: irte antes de que termine equivale a no haber ido.'},

]);

// ============================================================
// QUÍMICA BÁSICA · FIUBA · CB040 · Cátedra Boeykens
// SECCIÓN 2 · Sistemas materiales y operaciones unitarias
// Fuentes: teórica T01, guía G01 con su clave de
// respuestas, las 16 preguntas conceptuales del bloque
// "Sistemas Materiales" (Guía CB040 2C2025) y los exámenes
// reales del 27/06/25, Curso 2, Curso 3, EI 11/07/24 y 18/07/24.
// ============================================================

registerExercises('fiuba-quimica', '2', [

  {st: 'Pregunta conceptual 6 de la cátedra, textual: “La concentración es una propiedad extensiva porque al aumentar la masa disuelta de un determinado soluto aumenta su concentración”. ¿Verdadero o falso?',
   opts: ['Verdadero: al agregar soluto la concentración cambia, luego depende de la cantidad de materia', 'Verdadero sólo si la solución no está saturada', 'Falso, pero porque la concentración no es una propiedad sino una relación', 'Falso: la concentración es intensiva, y el enunciado confunde cambiar el sistema con tomar una porción de él'], c: 3,
   ex: '<b>Falso.</b> La concentración es <b>intensiva</b>: es el cociente de dos propiedades extensivas (masa o moles de soluto sobre masa o volumen de solución) y <b>todo cociente de dos extensivas es intensivo</b>. → El test que resuelve la pregunta: <b>partí la muestra al medio</b>. De un litro de solución 2 M tomás 100 mL y la porción sigue siendo 2 M: no se partió al medio, luego es intensiva. → La trampa está en la justificación, no en la afirmación: agregar más soluto <b>no es tomar una muestra más grande del mismo sistema, es preparar otro sistema</b>. El carácter intensivo o extensivo se define comparando porciones del <b>mismo</b> sistema. → El mismo argumento vale para densidad, presión, temperatura, pH y puntos de fusión y ebullición.'},

  {st: 'Pregunta conceptual 5: ¿puede existir un sistema material de un solo componente y tres fases?',
   opts: ['No: con un componente hay como máximo dos fases en equilibrio', 'Sí, pero sólo con mezclas de al menos dos sustancias', 'Sí, y el ejemplo es el punto triple: agua a 0,01 °C y 4,58 mmHg con hielo, líquido y vapor', 'Sólo por encima del punto crítico'], c: 2,
   ex: 'Fases y componentes son <b>ejes independientes</b>. En el <b>punto triple del agua</b> (0,01 °C y 4,58 mmHg, que son unos 6,0·10<sup>-3</sup> atm) coexisten en equilibrio <b>hielo, agua líquida y vapor</b>: <b>un componente, tres fases, dos interfases</b>. → El otro ejemplo posible son tres alótropos sólidos del carbono en el mismo frasco: un componente y tres fases, pero <b>sin equilibrio</b>; si el enunciado pide equilibrio, la respuesta es el punto triple. → La opción del punto crítico es justo la contraria: por encima del punto crítico <b>desaparece</b> la distinción líquido-vapor y quedan menos fases, no más.'},

  {st: 'Un sistema tiene sal disuelta en agua, corcho, virutas de hierro y granallas de plomo (G01, ejercicio 8). ¿Cuántas fases hay?',
   opts: ['4', '3', '5', 'Depende de cuántas virutas de hierro haya'], c: 0,
   ex: '<b>Cuatro fases</b>: la <b>solución</b> de sal en agua (una sola, aunque tenga dos componentes, porque es homogénea), el corcho, las virutas de hierro y las granallas de plomo. → Los dos errores clásicos están entre las opciones. <b>Cinco</b> sale de contar “sal” y “agua” por separado: la sal <b>disuelta</b> no forma fase propia. <b>“Depende de cuántas virutas”</b> sale de contar porciones en vez de tipos: todas las virutas de hierro tienen la misma composición y las mismas propiedades intensivas, así que son <b>una sola fase</b>. → Componentes, en cambio, son cinco o más: NaCl, agua, corcho, Fe y Pb.'},

  {st: 'De esta lista, ¿cuál NO es una sustancia simple? Ca · O<sub>3</sub> · C · NH<sub>3</sub>',
   opts: ['NH<sub>3</sub>', 'Ca', 'O<sub>3</sub>', 'C'], c: 0,
   ex: 'Lo que define “simple” es tener <b>un solo elemento</b>, no un solo átomo. → <b>Ca</b> monoatómica, <b>O<sub>3</sub></b> triatómica y <b>C</b> son las tres <b>simples</b>; <b>NH<sub>3</sub></b> tiene N e H, o sea <b>dos elementos</b>: es <b>compuesta</b>. → Son exactamente los ítems a, b, e y j del ejercicio 6 de la G01, y la clave de la cátedra los clasifica así: simples Ca, O<sub>3</sub> y C; compuestas CaO y NH<sub>3</sub>; mezclas heterogéneas leche vacuna y granito; soluciones azúcar en agua, nafta y agua con alcohol.'},

  {st: 'Tenés una mezcla de arena y limaduras de hierro. ¿Qué método usás y qué propiedad física aprovecha?',
   opts: ['Filtración: aprovecha el tamaño de partícula', 'Destilación: aprovecha la diferencia de puntos de ebullición', 'Imantación: aprovecha el ferromagnetismo del Fe', 'Cristalización: aprovecha la solubilidad'], c: 2,
   ex: 'La <b>separación magnética o imantación</b> aprovecha que el hierro es <b>ferromagnético</b>, igual que el níquel y el cobalto, y la arena no. Es un método <b>mecánico</b>: separa fases de un sistema heterogéneo sin que ningún componente cambie de estado ni reaccione. → La filtración no sirve: los dos son sólidos secos, no hay líquido que pase por un poro. La destilación y la cristalización son <b>métodos físicos de fraccionamiento</b>, para separar los componentes de un sistema <b>homogéneo</b>: acá el sistema es heterogéneo. → Ojo con la G01, ejercicio 4c: “<i>Una mezcla de arena y hierro es un ejemplo de sistema homogéneo porque los componentes se pueden separar fácilmente con un imán</i>” → <b>Falso</b>, y por partida doble: es heterogéneo, y la facilidad de separación no tiene nada que ver con la clasificación.'},

  {st: 'Pregunta conceptual 13: ¿por qué la destilación fraccionada permite separar líquidos con puntos de ebullición próximos y la simple no?',
   opts: ['Porque trabaja a mayor temperatura', 'Porque agrega un solvente que disuelve selectivamente uno de los dos', 'Porque separa por densidad en vez de por volatilidad', 'Porque la columna encadena muchos ciclos de vaporización-condensación y cada uno enriquece el vapor en el más volátil'], c: 3,
   ex: 'El <b>principio es el mismo</b> en las dos: diferencia de <b>puntos de ebullición</b>, o sea de volatilidad. Lo que cambia es el <b>número de etapas</b>. → Con T<sub>eb</sub> muy distintas, un solo ciclo de vaporización y condensación ya da un destilado casi puro y alcanza la <b>destilación simple</b>. Con T<sub>eb</sub> próximas, el vapor sale sólo un poco más rico en el componente volátil, y hace falta repetir muchas veces: eso es lo que hace la <b>columna de fraccionamiento</b>, donde el vapor sube, condensa parcialmente, vuelve a vaporizar y se enriquece en cada etapa. → Las otras opciones describen otras operaciones: agregar un solvente selectivo es <b>extracción</b>, y separar por densidad es <b>decantación</b> o <b>centrifugación</b>.'},

  {st: 'G01, ejercicio 3: “La temperatura de fusión no depende de las condiciones de presión”. ¿V o F, y con qué se justifica en un examen real?',
   opts: ['Verdadero: sólo la ebullición depende de la presión', 'Falso: la curva de fusión del diagrama de fases da un par (P, T) distinto para cada presión', 'Verdadero para sustancias puras, falso para mezclas', 'Falso, pero sólo por encima del punto crítico'],
   c: 1,
   ex: '<b>Falso.</b> Todo el mundo recuerda que el agua hierve por debajo de 100 °C en altura y se olvida de que la <b>fusión también corre con la presión</b>: en el diagrama de fases la <b>curva de fusión</b> es una curva, no una línea horizontal. → Esto cae textual en un examen real: la <b>Parte B de la evaluación integradora del 18/07/24</b>, ítem d, pide justificar “<i>Existen infinitos puntos de fusión para una sustancia simple</i>”. Respuesta: <b>Verdadero</b>, porque a cada presión le corresponde su propia temperatura de fusión y la curva tiene infinitos pares (P, T). → Las dos afirmaciones son la misma idea vista desde los dos lados, y la cátedra las toma en los dos formatos.'},

  {st: '¿Cuál es la diferencia entre sedimentación y decantación?',
   opts: ['Son sinónimos', 'Sedimentar usa centrífuga; decantar usa gravedad', 'Sedimentar es esperar a que el sólido baje por gravedad; decantar es volcar el líquido sobrenadante', 'Sedimentar separa líquidos; decantar separa sólidos'], c: 2,
   ex: 'La T01 se toma el trabajo de aclararlo con todas las letras (“<i>no confundir con decantación</i>”) porque es lo que más se erra en la ES-01. → <b>Sedimentación</b>: “<i>asentamiento por acción de la gravedad de las partículas sólidas que se hallan en suspensión en el seno de un líquido</i>”. Es <b>esperar</b>. → <b>Decantación</b>: “<i>paso por encima del borde o canto de un recipiente del líquido sobrenadante proveniente del proceso de sedimentación</i>”, y también la separación de <b>líquidos no miscibles</b> con ampolla de decantación. Es <b>volcar</b>. → Van una después de la otra, y las dos aprovechan la misma propiedad: la <b>diferencia de densidad</b>. La que reemplaza la gravedad por una fuerza mayor es la <b>centrifugación</b>.'},

  {st: 'Pregunta conceptual 10: ¿por qué la filtración sólo es efectiva para separar sólidos insolubles de líquidos?',
   opts: ['Porque las partículas de soluto disuelto son menores a 10 Å y atraviesan cualquier poro junto con el líquido', 'Porque el soluto disuelto reacciona con el papel de filtro', 'Porque el filtro sólo retiene partículas más densas que el líquido', 'Porque una solución no moja el medio filtrante'], c: 0,
   ex: 'La filtración aprovecha una sola propiedad: el <b>tamaño de partícula</b> frente al poro del medio filtrante. → En una <b>solución</b> el soluto está disperso en partículas <b>menores a 10 Å</b> (el criterio con el que la T01 define fase y sistema homogéneo), que son órdenes de magnitud más chicas que cualquier poro de papel, género o lana de vidrio: pasan con el líquido y quedan en el <b>filtrado</b>. → Por eso sal en agua <b>no se filtra</b>: se fracciona por <b>destilación</b> (si querés el agua también), o por <b>evaporación / cristalización</b> (si sólo te interesa la sal). → La densidad no interviene en la filtración: ésa es la propiedad de la sedimentación, la decantación, la centrifugación y la flotación.'},

  {st: 'Una solución tiene 15,0 % m/m y densidad 1,10 g/mL. ¿Cuánto vale el % m/V?',
   opts: ['13,6 % m/V', '16,5 % m/V', '15,0 % m/V', 'No se puede calcular sin la masa molar'], c: 1,
   ex: 'Tomá <b>100 g de solución</b>, que es lo que hace cómodo al % m/m: contienen <b>15,0 g</b> de soluto y ocupan V = 100 g / 1,10 g/mL = <b>90,9 mL</b>. → % m/V = 15,0 g / 90,9 mL · 100 = <b>16,5 g cada 100 mL</b>. → El atajo que sale de esa cuenta y conviene tener memorizado: <b>% m/V = % m/m · δ</b> con δ en g/mL → 15,0 · 1,10 = 16,5. Como δ &gt; 1, el % m/V es <b>mayor</b> que el % m/m; con un solvente menos denso que el agua sería al revés. → La opción 13,6 es el error de <b>dividir</b> por la densidad en vez de multiplicar. → La masa molar no hace falta para el % m/V, sí para el paso siguiente: 16,5 % m/V = 165 g/L, y sobre 58,44 g/mol da 2,82 M de NaCl.'},

  {st: 'G01, ejercicio 2: “la inflamabilidad de la acetona” es una propiedad...',
   opts: ['Física, porque se mide con un termómetro', 'Física, porque no cambia la composición de la acetona', 'Ni física ni química: es una propiedad de seguridad', 'Química, porque para observarla hay que provocar una combustión'], c: 3,
   ex: "El criterio de la T01: una propiedad es <b>física</b> si permite identificar la sustancia “<i>sin alterar su composición</i>” y <b>química</b> si es de las que “<i>relacionan los cambios de composición de una o varias sustancias cuando reaccionan con otras sustancias</i>”. → El punto de inflamabilidad es la temperatura mínima a la que la sustancia se inflama en contacto con el aire: para determinarlo hay que <b>quemar la acetona</b>, o sea provocar una reacción química. Es <b>propiedad química</b>, aunque se exprese en grados. → Ese detalle es la trampa de la opción que dice que <b>es física porque se mide con un termómetro</b>: <b>que la unidad sea una temperatura no la vuelve física</b>. Comparalo con el punto de ebullición del etanol (78 °C), que sí es <b>físico</b>: el etanol que hierve sigue siendo etanol."},

  {st: 'La yerba mate verde húmeda que se seca en un horno (G01, ejercicio 7). ¿Por qué el secado es un método físico y la calcinación no aplicaría?',
   opts: ["Porque en el secado el agua sólo cambia de estado, mientras que la calcinación implica una reacción química que destruiría la yerba", "Porque el secado no usa calor y la calcinación sí", "Porque el secado separa fases y la calcinación separa componentes", "Porque la calcinación sólo se aplica a líquidos"], c: 0,
   ex: 'La clave de la cátedra: “<i>Son dos procesos totalmente distintos. La calcinación es una separación química ya que hay una reacción química involucrada. El secado es una operación del tipo física</i>”. → En el <b>secado o evaporación</b> el agua pasa de <b>líquido a gas</b> y nada más: cambio de estado de agregación, sin reacción, y por eso entra en la categoría de <b>métodos físicos</b> de la T01. → La <b>calcinación</b> descompone químicamente un sólido con alta temperatura (el caso de manual es CaCO<sub>3</sub> → CaO + CO<sub>2</sub>) y aplicada a la yerba la destruiría en vez de secarla. → Los dos usan calor: la diferencia no es el calor, es <b>si cambia o no la identidad de las sustancias</b>.'},

  {st: 'El acero inoxidable es una aleación de hierro, cromo y níquel. ¿Cómo se clasifica?',
   opts: ['Heterogéneo, porque tiene tres metales distintos', 'Homogéneo: una sola fase con tres o más componentes', 'Sustancia compuesta, porque los tres elementos están unidos', 'Sistema inhomogéneo, porque la composición varía gradualmente'],
   c: 1,
   ex: "<b>Homogéneo</b>: una sola fase, sin interfases, con las mismas propiedades intensivas en todos sus puntos. La G01, ejercicio 4f, lo pone así y la clave contesta <b>Verdadero</b>: “<i>aunque el acero inoxidable está compuesto por varios elementos, estos se encuentran uniformemente distribuidos</i>”. Es una <b>solución sólida</b>. → La opción que dice que es <b>heterogéneo porque tiene tres metales distintos</b> es el error central de la unidad: <b>tener varios componentes no vuelve heterogéneo a un sistema</b>. Fases y componentes son ejes independientes. → Tampoco es sustancia compuesta: los metales no están combinados en proporción fija formando un compuesto, están <b>mezclados</b>, y la prueba es que la proporción de cromo y níquel se elige al fabricarlo. → Inhomogéneo sería un sistema cuyas propiedades varían <b>gradualmente y sin interfase</b>, como la atmósfera."},
  {st: "En una bebida gaseosa (CO<sub>2</sub> disuelto en agua), según la definición de T01 (el solvente es la sustancia en mayor abundancia cuyo estado físico es el mismo que el de la solución), ¿quién es el solvente y quién el soluto?",
   opts: ["El CO<sub>2</sub> es el solvente, porque es el gas y es el que “empuja” al agua a disolverse", "El agua es el solvente sólo por ser líquida: la abundancia no interviene en la definición", "El agua es el solvente (la más abundante y líquida, como la solución) y el CO<sub>2</sub> es el soluto", "Ninguno de los dos: en una solución no hay jerarquía entre los componentes"],
   c: 2,
   ex: "<b>Agua solvente, CO<sub>2</sub> soluto.</b> T01 pide las <b>dos condiciones juntas</b>: mayor abundancia y el mismo estado físico que la solución. La bebida es un líquido, el agua es líquida y es lo que más hay; el CO<sub>2</sub> es un gas en menor cantidad: el soluto. → Decir que el CO<sub>2</sub> es el solvente por ser gas inventa un criterio que no está en la definición: el estado que tiene que coincidir es el de la <b>solución</b>, que acá es líquido. → Decir que el agua lo es “sólo por líquida” se queda con una de las dos condiciones: la definición también exige que sea la sustancia de mayor abundancia. → Decir que no hay jerarquía contradice la definición misma: T01 distingue soluto (menor abundancia) de solvente (mayor abundancia) y G07 pide las masas de cada uno por separado. → Con un gas disuelto en un sólido (hidrógeno en níquel) el mismo criterio da el níquel como solvente: es sólido, como la solución."},
  {st: "En la figura de la torre de destilación fraccionada del petróleo de la T01 (G01, ejercicio 10), ¿qué par fracción-temperatura es correcto?",
   opts: ["Gas a 400 °C y asfalto a 20 °C", "Diésel (gasóleo) a 270 °C y lubricantes y ceras a 335 °C", "Gasolina a 190 °C y queroseno a 140 °C", "Fuel oil a 190 °C y diésel a 320 °C"],
   c: 1,
   ex: "El crudo entra a 400 °C y la torre se enfría hacia arriba: <b>gas 20 °C</b>, butano y propano 70 °C, gasolina 140 °C, queroseno 190 °C, <b>diésel (gasóleo) 270 °C</b>, fuel oil 320 °C, <b>lubricantes y ceras 335 °C</b> y, como residuo por el fondo, asfalto 350 °C. Arriba, frío, salen las fracciones más volátiles; abajo, caliente, las menos volátiles. → Gas a 400 °C y asfalto a 20 °C invierte la torre: 400 °C es la temperatura de entrada del crudo y no la de una fracción, y el gas, lo más volátil, es lo que sale más arriba y más frío. → Gasolina a 190 °C y queroseno a 140 °C intercambia los valores de las dos: la gasolina sale antes (140 °C) y el queroseno después (190 °C). → Fuel oil a 190 °C y diésel a 320 °C también están cruzados: el diésel sale a 270 °C y el fuel oil a 320 °C; los 190 °C son del queroseno. → Cada fracción es una mezcla de muchos hidrocarburos, así que la temperatura de la figura es la de la bandeja de donde se la retira y no un punto de ebullición único."}

]);

registerReveals('fiuba-quimica', '2', [

{st: "<b>Básico · Contar fases y componentes.</b> A 25 °C se disuelven como máximo 36 g de sal de mesa (NaCl) en 100 g de agua. Decí cuántos componentes y cuántas fases tiene cada sistema: a) 10 g de sal en 100 mL de agua; b) 50 g de sal en 100 mL de agua; c) agua y aceite, con un poco de sal disuelta en el agua; d) arena seca, un trozo de hierro y limaduras de hierro.",
 ans: "a) <b>2 componentes, 1 fase</b>. b) <b>2 componentes, 2 fases</b>. c) <b>3 componentes, 2 fases</b>. d) <b>2 componentes, 2 fases</b>.",
 sol: "<b>Paso 1 · qué se cuenta.</b> Los <b>componentes</b> son las sustancias distintas que hay; las <b>fases</b> son las porciones homogéneas separadas por una interfase. Son dos conteos independientes. → <b>a)</b> 100 mL de agua pesan unos 100 g y admiten hasta 36 g de sal: 10 g se disuelven por completo. Queda una solución: <b>2 componentes</b> (agua y sal) y <b>1 fase</b>. → <b>b)</b> Se disuelven 36 g y sobran 50 − 36 = 14 g. Esa sal sin disolver forma una fase aparte (cristales en el fondo) y la solución saturada es la otra: <b>2 componentes, 2 fases</b>. → <b>c)</b> Componentes: agua, aceite y sal, o sea <b>3</b>. Fases: el aceite y la solución acuosa (el agua con su sal disuelta es una sola), o sea <b>2</b>. → <b>d)</b> Componentes: arena y hierro, <b>2</b>. Fases: la arena y el hierro. Según el criterio de la sección, porciones de una misma sustancia son una sola fase: el trozo y las limaduras tienen la misma composición y las mismas propiedades intensivas, así que son <b>una sola fase</b>: <b>2 fases</b>. → <b>Control.</b> En a) y c) hay más componentes que fases, en d) hay tantas fases como componentes, y en ningún caso la sal disuelta cuenta como fase. → <b>Error típico:</b> contar la sal disuelta como una fase más, o contar el trozo y las limaduras de hierro como dos fases."},

{st: "<b>Básico · Composición centesimal de un sistema.</b> Un sistema material contiene 2,40 g de limaduras de hierro, 3,60 g de arena y 4,00 g de sal. Calculá el porcentaje en masa de cada componente.",
 ans: "<b>24,0 % de hierro, 36,0 % de arena y 40,0 % de sal</b>.",
 sol: "<b>Paso 1 · masa total.</b> Es la suma de todo lo que hay: 2,40 + 3,60 + 4,00 = <b>10,00 g</b>. → <b>Paso 2 · porcentaje de cada uno.</b> % = (masa del componente / masa total) · 100. Hierro: 2,40 / 10,00 · 100 = <b>24,0 %</b>. Arena: 3,60 / 10,00 · 100 = <b>36,0 %</b>. Sal: 4,00 / 10,00 · 100 = <b>40,0 %</b>. → <b>Control.</b> Los tres porcentajes tienen que sumar 100: 24,0 + 36,0 + 40,0 = 100,0. → <b>Error típico:</b> dividir por la masa de un solo componente en vez de por la masa total del sistema. Ojo con el nombre: acá la composición centesimal es la de un <b>sistema</b> (qué parte de la masa es cada componente); la de un <b>compuesto</b> a partir de su fórmula es la de la sección 4."},

{st: "<b>Básico · Masa de cada componente desde los porcentajes.</b> Una muestra de 250,0 g de un sistema tiene 12,0 % de carbón, 30,0 % de arena y el resto de sal. ¿Qué masa hay de cada componente?",
 ans: "<b>30,0 g de carbón, 75,0 g de arena y 145,0 g de sal</b>.",
 sol: "<b>Paso 1 · el porcentaje que falta.</b> Los porcentajes suman 100, así que la sal es 100 − 12,0 − 30,0 = <b>58,0 %</b>. → <b>Paso 2 · masa = porcentaje × masa total.</b> Carbón: 250,0 g · 0,120 = <b>30,0 g</b>. Arena: 250,0 g · 0,300 = <b>75,0 g</b>. Sal: 250,0 g · 0,580 = <b>145,0 g</b>. → <b>Control.</b> 30,0 + 75,0 + 145,0 = 250,0 g, la masa de la muestra. → <b>Error típico:</b> escribir 12,0 en vez de 0,120 al multiplicar (hay que dividir el porcentaje por 100) y obtener masas mayores que la muestra entera."},

{st: "<b>Básico · Pura o solución por la meseta.</b> Se calientan dos líquidos transparentes e incoloros, A y B, con la misma llama, y se anota la temperatura de cada uno cada 2 minutos. Los dos ya están hirviendo desde el minuto 5. Minuto 0: A 20 °C, B 20 °C. Minuto 2: A 60 °C, B 60 °C. Minuto 4: A 98 °C, B 98 °C. Minuto 6: A 100 °C, B 101 °C. Minuto 8: A 100 °C, B 103 °C. Minuto 10: A 100 °C, B 105 °C. ¿Cuál es una sustancia pura y cuál una solución? Justificá.",
 ans: "<b>A es una sustancia pura y B es una solución</b>.",
 sol: "<b>Paso 1 · qué mirar.</b> El criterio es lo que hace la temperatura <b>mientras el líquido cambia de estado</b>, o sea, desde que hierve (minuto 5 en adelante). → <b>Paso 2 · leer cada serie.</b> A marca 100 °C en los minutos 6, 8 y 10: la temperatura se queda quieta durante todo el cambio de estado. B marca 101, 103 y 105 °C: sigue subiendo aunque ya está hirviendo. → <b>Paso 3 · conclusión.</b> Una sustancia pura cambia de estado a temperatura constante, así que <b>A es pura</b> (el valor de 100 °C coincide con el agua a 1 atm). En una solución, en general, la temperatura varía durante el cambio porque la composición del líquido va cambiando a medida que se va el solvente: <b>B es una solución</b>. → <b>Control.</b> Los dos suben igual hasta el minuto 4: la diferencia aparece sólo en la ebullición, como en la curva de la teoría. → <b>Error típico:</b> mirar si la temperatura sube al principio, cuando todo líquido se calienta igual."},

{st: "<b>Intermedio · El orden de los métodos.</b> Tenés una mezcla seca de limaduras de hierro, arena y sal de mesa. Proponé el orden de los pasos para obtener los tres por separado, y para cada paso decí si es mecánico o físico y qué propiedad aprovecha.",
 ans: "<b>Imantación → disolver en agua → filtración → evaporación o cristalización de la solución</b>.",
 sol: "<b>Paso 1 · imantación (mecánico).</b> Se pasa un imán por la mezcla seca y se llevan las limaduras: aprovecha el <b>ferromagnetismo</b> del hierro. Va primero porque con la mezcla seca es directo, y con agua el hierro se mojaría y se oxidaría. → <b>Paso 2 · disolver la sal.</b> Con el hierro afuera quedan arena y sal. Se agrega agua y se agita: la sal se disuelve y la arena no. Ahora hay un sistema heterogéneo de dos fases (solución y arena). Disolver no separa nada todavía: es un paso previo, sin reacción química, que deja una fase líquida y una sólida para poder filtrar. → <b>Paso 3 · filtración (mecánico).</b> La arena, que es un sólido insoluble, no pasa por los poros del papel y queda como torta. La solución de sal pasa con el agua. Aprovecha el <b>tamaño de partícula</b>. → <b>Paso 4 · evaporación o cristalización (físico).</b> El filtrado es una solución homogénea. Se calienta para que el agua se evapore (<b>volatilidad</b> del solvente) y la sal queda como sólido. → <b>Control.</b> Salió hierro, arena y sal, y cada método usó una propiedad distinta. → <b>Error típico:</b> filtrar sin disolver antes (la sal seca queda mezclada con la arena en el papel), o evaporar antes de filtrar (la sal cristaliza pegada a la arena)."},

{st: "<b>Intermedio · Separaciones sucesivas y balance de masa.</b> Una muestra de 5,000 g de la mezcla de hierro, arena y sal se analiza así: con un imán se retiran las limaduras, que pesan 0,800 g. El resto se agita con agua y se filtra; la arena queda seca en el filtro y pesa 2,310 g. La sal no se pesó. Calculá el porcentaje en masa de cada componente de la muestra.",
 ans: "<b>16,0 % de hierro, 46,2 % de arena y 37,8 % de sal</b>.",
 sol: "<b>Paso 1 · qué se conserva.</b> La masa total no cambia: todo lo que sale en una etapa se resta de lo que había. → <b>Paso 2 · lo que queda tras el imán.</b> 5,000 − 0,800 = <b>4,200 g</b> de arena y sal. → <b>Paso 3 · la sal, por diferencia.</b> Al filtrar, la sal se fue disuelta con el agua, así que no se pesó. Es lo que le falta a la arena para llegar a 4,200 g: 4,200 − 2,310 = <b>1,890 g</b> de sal. → <b>Paso 4 · porcentajes sobre la muestra inicial.</b> Hierro: 0,800 / 5,000 · 100 = <b>16,0 %</b>. Arena: 2,310 / 5,000 · 100 = <b>46,2 %</b>. Sal: 1,890 / 5,000 · 100 = <b>37,8 %</b>. → <b>Control.</b> 16,0 + 46,2 + 37,8 = 100,0. → <b>Error típico, la base de cálculo:</b> calcular la sal como 1,890 / 4,200 = 45,0 % (o la arena como 55,0 %). Eso es el porcentaje dentro de lo que quedó después del imán, no de la muestra. Los porcentajes de la composición se calculan siempre sobre la masa de la muestra inicial, que es el sistema que se analiza."},

{st: "<b>Avanzado · Análisis de un carbón por pesadas sucesivas.</b> Se analiza una muestra de 2,000 g de carbón en tres etapas. 1) Se calienta a 105 °C hasta peso constante (hasta que la masa deja de bajar): queda un sólido de 1,940 g (se fue el agua). 2) Ese sólido se calienta a 950 °C sin aire hasta peso constante: quedan 1,420 g (se fueron los gases de la materia volátil). 3) El residuo se quema al aire hasta peso constante: quedan 0,180 g de ceniza (lo que se quemó es el carbón fijo). a) Calculá el porcentaje de humedad, de materia volátil, de carbón fijo y de ceniza de la muestra. b) ¿Qué porcentaje de materia volátil resulta si se lo calcula sobre la muestra seca?",
 ans: "a) <b>3,00 % de humedad, 26,0 % de materia volátil, 62,0 % de carbón fijo y 9,00 % de ceniza</b>. b) <b>26,8 %</b> sobre base seca.",
 sol: "<b>Paso 1 · cada componente es lo que se perdió en su etapa.</b> Humedad: 2,000 − 1,940 = <b>0,060 g</b>. Materia volátil: 1,940 − 1,420 = <b>0,520 g</b>. Carbón fijo (se quemó): 1,420 − 0,180 = <b>1,240 g</b>. Ceniza: es lo que queda, <b>0,180 g</b>. → <b>Paso 2 · control de masa.</b> 0,060 + 0,520 + 1,240 + 0,180 = 2,000 g, la muestra inicial. → <b>Paso 3 · porcentajes sobre la muestra inicial (a).</b> Humedad: 0,060 / 2,000 · 100 = <b>3,00 %</b>. Volátil: 0,520 / 2,000 · 100 = <b>26,0 %</b>. Carbón fijo: 1,240 / 2,000 · 100 = <b>62,0 %</b>. Ceniza: 0,180 / 2,000 · 100 = <b>9,00 %</b>. Suman 100,00 %. → <b>Paso 4 · base seca (b).</b> Es otra forma de expresar el resultado: se divide por la masa que queda sin el agua, 1,940 g. 0,520 / 1,940 · 100 = <b>26,8 %</b>. Sólo se usa si el enunciado lo pide, y entonces los porcentajes secos (26,8 %, 63,9 % y 9,28 %) suman 100 entre ellos (salvo redondeo), sin la humedad. → <b>Error típico, la base de cálculo:</b> dividir cada pérdida por la masa que había en el comienzo de <b>su</b> etapa (0,060 / 2,000, 0,520 / 1,940, 1,240 / 1,420). Da, por ejemplo, 3,00 %, 26,8 % y 87,3 %, mezcla bases distintas y no suma 100. Si el enunciado no dice otra cosa, la base es la muestra inicial."},


  {st: 'G01, ejercicio 1, textual: “Indique si las siguientes propiedades son intensivas o extensivas: a) El precio de un trozo de Pt. b) La humedad relativa de la atmósfera. c) La presión del aire en un neumático. d) La temperatura a la que funde el hielo. e) El color del cloruro de níquel. f) La energía producida cuando se quema un mol de gasolina. g) La dureza del hormigón.”',
   ans: 'Según la clave de la cátedra: a) extensiva, b) intensiva, c) EXTENSIVA, d) intensiva, e) intensiva, f) intensiva, g) intensiva. El ítem c) contradice la definición de la propia teórica: por el criterio general, la presión es intensiva.',
   sol: 'El test: <b>partí la muestra al medio y mirá si el valor se parte también</b>. → <b>a) Extensiva.</b> Medio trozo de platino cuesta la mitad: el precio sigue a la masa. La clave dice “<i>el precio dependerá de la cantidad de materia en el trozo</i>”. <b>El precio por gramo</b>, en cambio, sería intensivo. → <b>b) Intensiva.</b> La humedad relativa es un cociente entre la presión parcial de vapor y la presión de vapor de saturación a esa temperatura: media atmósfera tiene la misma humedad relativa. → <b>c) La clave de la cátedra dice EXTENSIVA</b>, con la justificación “<i>depende de la cantidad de aire en el neumático</i>”. <b>Eso contradice la definición de la T01</b> y el criterio con el que la propia cátedra responde la pregunta conceptual 6 sobre la concentración: si tomás la mitad del gas y la mitad del volumen, la presión no se parte al medio, luego es <b>intensiva</b>. Agregar aire no es “tomar una muestra más grande”, es cambiar el sistema, exactamente el razonamiento que la cátedra declara inválido cuando lo aplican a la concentración. <b>En el examen contestá según el criterio general (intensiva) y justificá con el test de partir la muestra</b>: una respuesta justificada con la definición de la teórica es defendible en la revisión. → <b>d) Intensiva.</b> El punto de fusión no depende de cuánto hielo tengas (sí de la presión, pero eso no lo vuelve extensivo). → <b>e) Intensiva.</b> El color depende de cómo la estructura del material interactúa con la luz, no de cuánto material haya. → <b>f) Intensiva</b>, y acá está la sutileza que la cátedra quiere: “<i>la cantidad de energía liberada está dada por una cantidad fija, es decir, un mol</i>”. <b>La palabra “por mol” es la que la vuelve intensiva.</b> Si el enunciado dijera “la energía producida al quemar el tanque de nafta”, sería extensiva. Es el mismo mecanismo que la densidad: un cociente contra una cantidad de materia. → <b>g) Intensiva.</b> La dureza es la misma en un bloque que en un cascote.'},

  {st: 'G01, ejercicio 3, textual: “Indique si las siguientes afirmaciones son verdaderas o falsas: a) Al disminuir la temperatura de una sustancia, sus partículas se separarán. b) Los estados de agregación de la materia son: sólido, líquido y gaseoso. c) El pasaje inverso de la fusión se llama condensación. d) La sublimación y deposición son procesos inversos. e) La temperatura de fusión no depende de las condiciones de presión. f) La temperatura de ebullición sí depende de las condiciones de presión.”',
   ans: 'a) Falso · b) Verdadero · c) Falso · d) Verdadero · e) Falso · f) Verdadero.',
   sol: '<b>a) Falso.</b> Al bajar la temperatura baja la energía cinética media de las partículas (E<sub>c</sub> ∝ T) y ganan las fuerzas de atracción: <b>las partículas se acercan</b>. Es la teoría cinética aplicada al revés de lo que dice el enunciado. La clave: “<i>al contrario, se acercarán</i>”. → <b>b) Verdadero.</b> Son los tres estados de agregación del programa. <span class="muted">El plasma existe pero no entra en el alcance de CB040.</span> → <b>c) Falso.</b> La inversa de la <b>fusión</b> (sólido → líquido) es la <b>solidificación</b> (líquido → sólido). La <b>condensación</b> es la inversa de la <b>vaporización</b>. Es el error de nombre más común de la unidad. → <b>d) Verdadero.</b> <b>Sublimación</b>: sólido → gas. <b>Deposición</b> o sublimación inversa: gas → sólido. Son los dos pasajes directos entre sólido y gas, sin pasar por líquido. → <b>e) Falso.</b> La temperatura de fusión <b>sí</b> depende de la presión: la curva de fusión del diagrama de fases asigna una T distinta a cada P. De ahí sale el “<i>existen infinitos puntos de fusión para una sustancia simple</i>” de la Parte B de la EI del 18/07/24, que es <b>Verdadero</b>. → <b>f) Verdadero.</b> El líquido hierve cuando su presión de vapor iguala a la presión externa: si baja la presión externa, hierve antes. Es el mismo diagrama de fases, ahora leído sobre la curva de vaporización. → <b>El par e-f es el mismo concepto preguntado dos veces</b>, una en negativo y otra en positivo, y la cátedra lo pone así a propósito.'},

  {st: 'G01, ejercicio 4, textual: “a) En un sistema homogéneo, todos sus componentes están distribuidos uniformemente, y no es posible distinguir sus partes a simple vista. b) El vinagre es considerado un sistema heterogéneo porque está formado por ácido acético disuelto en agua. c) Una mezcla de arena y hierro es un ejemplo de sistema homogéneo porque los componentes se pueden separar fácilmente con un imán. d) El agua salada es un sistema homogéneo ya que la sal se disuelve completamente en el agua, formando una solución uniforme. e) Un sistema heterogéneo se caracteriza por tener una composición uniforme y propiedades idénticas en todas sus partes. f) El acero inoxidable, una aleación de hierro, cromo y níquel, es considerado un sistema homogéneo porque sus componentes no se pueden distinguir a simple vista. g) Una mezcla de aceite y agua es un sistema homogéneo porque el aceite se disuelve completamente en el agua. h) El humo es un ejemplo de sistema heterogéneo porque consiste en partículas sólidas dispersas en un gas.”',
   ans: 'a) V · b) F · c) F · d) V · e) F · f) V · g) F · h) V.',
   sol: 'Fijate que la cátedra alterna afirmaciones donde falla la <b>clasificación</b> con otras donde falla la <b>justificación</b>: en el examen hay que decir <b>cuál de las dos cosas está mal</b>. → <b>a) Verdadero.</b> Es la definición de la T01: mismas propiedades intensivas en todos los puntos, una sola fase, sin interfases “<i>ni aun con el ultramicroscopio</i>”. → <b>b) Falso.</b> El vinagre es <b>homogéneo</b>: el ácido acético está uniformemente disuelto. La justificación del enunciado (“está formado por dos cosas”) es justamente la que <b>no</b> decide: dos componentes no implican dos fases. → <b>c) Falso por partida doble.</b> Arena y hierro es <b>heterogéneo</b>, y además la <b>facilidad de separación no tiene nada que ver</b> con la clasificación: un sistema homogéneo también se puede separar, sólo que con métodos físicos y no mecánicos. → <b>d) Verdadero.</b> Una solución: <b>2 componentes, 1 fase</b>. → <b>e) Falso.</b> La descripción del enunciado es la de un sistema <b>homogéneo</b>. El heterogéneo tiene propiedades intensivas <b>distintas</b> en distintos puntos e interfases. → <b>f) Verdadero.</b> Aleación = solución sólida = una fase. → <b>g) Falso.</b> Aceite y agua son <b>inmiscibles</b>: forman <b>dos fases</b> con una interfase visible, sistema heterogéneo. Y es justo el par que después separás por <b>decantación</b>, aprovechando la diferencia de densidad. → <b>h) Verdadero.</b> Partículas sólidas dispersas en un gas: dos fases. <span class="muted">La clave de la cátedra transcribe la justificación de este ítem pero se olvida de escribir “Verdadero”; la respuesta es V.</span>'},

  {st: 'G01, ejercicio 6, textual: “Clasificar los siguientes sistemas en sustancias simples, sustancias compuestas (o compuestos), mezclas heterogéneas o soluciones: a) Calcio (Ca) b) Ozono (O3) c) Azúcar disuelta en agua d) Óxido de calcio (CaO) e) Carbono (C) f) Leche vacuna g) Nafta h) Granito i) Agua y alcohol j) amoníaco (NH3)”',
   ans: 'Simples: Ca, O3 y C. Compuestas: CaO y NH3. Mezclas heterogéneas: leche vacuna y granito. Soluciones: azúcar en agua, nafta, y agua con alcohol.',
   sol: 'El árbol de decisión, en dos preguntas y en este orden. → <b>Primero: ¿una fase o varias?</b> Si hay más de una fase, es <b>mezcla heterogénea</b> y ahí termina. <b>Leche vacuna</b>: emulsión de glóbulos de grasa en agua, se ven al microscopio → heterogénea. <b>Granito</b>: cuarzo, feldespato y mica, se ven <b>a simple vista</b> → heterogénea. → <b>Segundo: ¿una sustancia o varias?</b> Si es homogéneo con varias sustancias, es <b>solución</b>. <b>Azúcar en agua</b> (sólido en líquido), <b>nafta</b> (mezcla homogénea de muchos hidrocarburos, que es justamente lo que sale de la destilación fraccionada del petróleo del ejercicio 10) y <b>agua y alcohol</b> (líquidos <b>miscibles</b>, una sola fase: comparalo con agua y aceite del ejercicio 4g, que son inmiscibles y dan heterogéneo). → Si es homogéneo con una sola sustancia, es <b>sustancia pura</b>, y ahí decide el <b>número de elementos</b>: <b>Ca</b> (monoatómica), <b>O<sub>3</sub></b> (triatómica, un solo elemento) y <b>C</b> son <b>simples</b>; <b>CaO</b> y <b>NH<sub>3</sub></b> son <b>compuestas</b>. → <b>Los dos que hacen caer gente son O<sub>3</sub> y NH<sub>3</sub></b>, y están puestos a propósito uno cerca del otro: manda el número de <b>elementos</b>, no el de átomos. → <span class="muted">Detalle del material: el enunciado numera los ítems con letras a) a j) y la clave de respuestas los numera con números 1 a 10. La equivalencia es directa: a=1, b=2, … j=10.</span>'},

  {st: 'Preparás 500 g de una solución acuosa disolviendo 80 g de KNO3 en agua. La densidad de la solución resultante es 1,09 g/mL. Calculá: a) el % m/m del soluto y del solvente; b) cuánta agua usaste; c) el % m/V; d) qué masa de solución necesitás para tener 25 g de KNO3.',
   ans: 'a) 16,0 % m/m de KNO3 y 84,0 % m/m de agua. b) 420 g de agua. c) 17,4 % m/V. d) 156,25 g de solución.',
   sol: 'Es la mezcla binaria que pide la pregunta conceptual 2, y la cadena completa que vas a repetir en estequiometría. → <b>a)</b> % m/m = m<sub>soluto</sub>/m<sub>solución</sub> · 100 = 80 / 500 · 100 = <b>16,0 % m/m</b>. El solvente es el complemento: 100 − 16,0 = <b>84,0 % m/m</b>. <b>En una mezcla binaria los dos porcentajes en masa suman siempre 100</b>, y eso es lo que hay que decir al ejemplificar. → <b>b)</b> m<sub>agua</sub> = 500 − 80 = <b>420 g</b>, que efectivamente es el 84,0 % de 500. → <b>c)</b> Con la densidad: el volumen de los 500 g de solución es V = 500 / 1,09 = <b>458,7 mL</b>, y % m/V = 80 / 458,7 · 100 = <b>17,4 g cada 100 mL</b>. Verificalo con el atajo: % m/V = % m/m · δ = 16,0 · 1,09 = 17,4. → <b>d)</b> Regla de tres con el % m/m, que es la forma en que este dato se usa de verdad: si en 100 g de solución hay 16,0 g de KNO<sub>3</sub>, para 25 g hacen falta 25 · 100 / 16,0 = <b>156,25 g de solución</b>. → <b>Los tres errores que se cobran acá:</b> poner los 420 g de <b>agua</b> en el denominador en vez de los 500 g de <b>solución</b> (daría 19,0 % y está mal); usar la densidad al revés, multiplicando en vez de dividir para obtener el volumen; y sumar volúmenes de soluto y solvente para el % V/V. <b>Los volúmenes no son aditivos</b>, por eso el % V/V se define sobre el volumen de la solución <b>medido</b>.'},

{st: "<b>Química General (CB103) · Básico · Tipo de dispersión.</b> Nombrá el tipo de dispersión y decí cuál es la fase dispersa y cuál la dispersante: a) el humo de un incendio; b) la niebla; c) la crema batida; d) la mayonesa; e) el agua con barro.",
 ans: "a) <b>humo</b> (sólido en gas). b) <b>niebla</b> (líquido en gas). c) <b>espuma</b> (gas en líquido). d) <b>emulsión</b> (líquido en líquido). e) <b>suspensión</b> (sólido en líquido).",
 sol: "<b>Paso 1 · mirar los dos estados.</b> La fase <b>dispersa</b> es la que está repartida en pequeñas porciones; la <b>dispersante</b> es la que la rodea. El nombre sale de la combinación. → <b>Paso 2 · aplicar.</b> a) Partículas sólidas (hollín) repartidas en aire: <b>humo</b>. b) Gotitas de agua líquida en aire: <b>niebla</b>. c) Burbujas de aire dentro de una crema líquida: <b>espuma</b>. d) Gotitas de aceite dentro de un líquido acuoso: <b>emulsión</b>. e) Partículas de tierra repartidas en agua: <b>suspensión</b>. → <b>Control.</b> Humo y niebla son los dos con un gas como dispersante, y se diferencian por el estado de lo que flota (sólido o líquido). → <b>Error típico:</b> confundir humo con niebla, o llamar emulsión a cualquier mezcla con un líquido: la emulsión necesita que <b>las dos</b> fases sean líquidas."}

]);

// ============================================================
// SECCIÓN 3 · ESTRUCTURA ATÓMICA, ESTRUCTURA ELECTRÓNICA Y TABLA PERIÓDICA
// Reveals: enunciados textuales de la guía G02 de la cátedra.
// Quizzes: elaboración propia sobre T02A, T02B, T02C, G02 y la Parte B
// de la evaluación integradora del 11/07/24.
// ============================================================

registerReveals('fiuba-quimica', '3', [

{st: "<b>Básico · Protones, neutrones y electrones.</b> Completá, para cada especie, cuántos protones, neutrones y electrones tiene: <b>a)</b> <sup>39</sup><sub>19</sub>K; <b>b)</b> <sup>133</sup><sub>55</sub>Cs<sup>+</sup>; <b>c)</b> <sup>79</sup><sub>34</sub>Se<sup>2-</sup>; <b>d)</b> <sup>27</sup><sub>13</sub>Al<sup>3+</sup>.",
 ans: "<b>a)</b> 19 p, 20 n, 19 e<sup>-</sup>. <b>b)</b> 55 p, 78 n, 54 e<sup>-</sup>. <b>c)</b> 34 p, 45 n, 36 e<sup>-</sup>. <b>d)</b> 13 p, 14 n, 10 e<sup>-</sup>.",
 sol: "<b>Paso 1 · las tres cuentas.</b> Protones = Z (el número de abajo). Neutrones = A − Z (el número de arriba menos el de abajo). Electrones = Z − carga: a un catión le faltan electrones y a un anión le sobran. → <b>Paso 2 · aplicarlas.</b> <b>a)</b> Es un átomo neutro: 19 p, 39 − 19 = <b>20 n</b>, 19 e<sup>-</sup>. → <b>b)</b> 55 p, 133 − 55 = <b>78 n</b>; la carga es +1, perdió un electrón: 55 − 1 = <b>54 e<sup>-</sup></b>. → <b>c)</b> 34 p, 79 − 34 = <b>45 n</b>; la carga es −2, ganó dos: 34 + 2 = <b>36 e<sup>-</sup></b>. → <b>d)</b> 13 p, 27 − 13 = <b>14 n</b>; la carga es +3: 13 − 3 = <b>10 e<sup>-</sup></b>. → <b>Control.</b> Protones más neutrones tiene que dar siempre A (19 + 20 = 39, 55 + 78 = 133, 34 + 45 = 79, 13 + 14 = 27). → <b>Error típico:</b> tocar los protones cuando hay carga. Un ion se forma ganando o perdiendo electrones; los protones y los neutrones no cambian."},

{st: "<b>Básico · Isótopos, isóbaros e isoelectrónicas.</b> Dadas las especies <b>A</b> = <sup>35</sup><sub>17</sub>Cl<sup>-</sup>, <b>B</b> = <sup>37</sup><sub>17</sub>Cl, <b>C</b> = <sup>40</sup><sub>18</sub>Ar, <b>D</b> = <sup>40</sup><sub>19</sub>K<sup>+</sup>, <b>E</b> = <sup>40</sup><sub>20</sub>Ca y <b>F</b> = <sup>39</sup><sub>19</sub>K, indicá cuáles son isótopos entre sí, cuáles son isóbaros entre sí y cuáles son isoelectrónicas entre sí.",
 ans: "<b>Isótopos:</b> A con B (Z = 17) y D con F (Z = 19). <b>Isóbaros:</b> C, D y E (número másico 40). <b>Isoelectrónicas:</b> A, C y D (18 e<sup>-</sup>).",
 sol: "<b>Paso 1 · una tabla corta.</b> De cada especie anotá Z (abajo), el número másico (arriba) y electrones = Z − carga. Especie A: Z 17, másico 35, 17 + 1 = 18 e<sup>-</sup>. B: Z 17, másico 37, 17 e<sup>-</sup>. C: Z 18, másico 40, 18 e<sup>-</sup>. D: Z 19, másico 40, 19 − 1 = 18 e<sup>-</sup>. E: Z 20, másico 40, 20 e<sup>-</sup>. F: Z 19, másico 39, 19 e<sup>-</sup>. → <b>Paso 2 · isótopos: mismo Z, distinto número másico.</b> A y B tienen Z = 17 y másico distinto (35 y 37); D y F tienen Z = 19 y másico distinto (40 y 39). Que una de las dos esté como ion no importa: sigue siendo el mismo elemento. → <b>Paso 3 · isóbaros: mismo número másico, distinto Z.</b> C, D y E tienen másico 40 y Z = 18, 19 y 20: son elementos distintos con la misma masa aproximada. → <b>Paso 4 · isoelectrónicas: mismo número de electrones.</b> A, C y D tienen 18; B tiene 17, F tiene 19 y E tiene 20. → <b>Control.</b> Cada letra tiene que aparecer en el grupo que le corresponde por el dato que se mira: Z, número másico o electrones. → <b>Error típico:</b> mezclar isóbaros con isoelectrónicas porque C, D y E parecen \"iguales\" (másico 40), pero sólo C y D tienen 18 electrones."},

{st: "<b>Básico · Configuración de un átomo.</b> Escribí la configuración electrónica del arsénico (Z = 33) en estado fundamental, comprobá que suma Z e indicá cuántos electrones desapareados tiene.",
 ans: "(1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>(4p)<sup>3</sup>, con <b>3 electrones desapareados</b>.",
 sol: "<b>Paso 1 · llenar en el orden de la lista.</b> Se va en el orden 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, llenando cada subnivel hasta su máximo (s: 2, p: 6, d: 10) y parando cuando se acaban los 33 electrones. → <b>Paso 2 · la cuenta.</b> 1s: 2 (quedan 31). 2s: 2 (29). 2p: 6 (23). 3s: 2 (21). 3p: 6 (15). 4s: 2 (13). 3d: 10 (3). 4p: los 3 que quedan, de un máximo de 6. → <b>Paso 3 · la configuración.</b> (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>(4p)<sup>3</sup>. → <b>Control.</b> 2 + 2 + 6 + 2 + 6 + 2 + 10 + 3 = 33 ✓. → <b>Paso 4 · desapareados.</b> Los tres electrones del 4p van en los tres orbitales, uno en cada uno (Hund): ↑ ↑ ↑. Los demás subniveles están completos, con todo apareado. Son <b>3</b>. → <b>Error típico:</b> escribir el 3d antes que el 4s por ir \"en orden de n\": el 4s se llena primero."},

{st: "<b>Intermedio · Configuración de un catión y de un anión.</b> Escribí la configuración electrónica de <b>a)</b> Co<sup>2+</sup> (Z = 27) y <b>b)</b> Br<sup>-</sup> (Z = 35), e indicá con qué gas noble es isoelectrónico el segundo y cuántos electrones desapareados tiene el primero.",
 ans: "<b>a)</b> Co<sup>2+</sup>: …(3p)<sup>6</sup>(3d)<sup>7</sup> (25 e<sup>-</sup>), con 3 desapareados. <b>b)</b> Br<sup>-</sup>: …(4s)<sup>2</sup>(3d)<sup>10</sup>(4p)<sup>6</sup> (36 e<sup>-</sup>), isoelectrónico con el kriptón.",
 sol: "<b>Paso 1 · primero el átomo neutro, después el ion.</b> Co (27 e<sup>-</sup>): (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>7</sup>. → <b>Paso 2 · Co<sup>2+</sup>: sacar dos electrones.</b> Salen los del nivel más alto, que son los del <b>4s</b>, y no los del 3d. Quedan 27 − 2 = 25 electrones: (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(3d)<sup>7</sup>. → <b>Paso 3 · desapareados del Co<sup>2+</sup>.</b> Siete electrones en cinco orbitales d: los cinco primeros uno por orbital y los dos siguientes aparean: ↑↓ ↑↓ ↑ ↑ ↑, o sea <b>3</b> desapareados. → <b>Paso 4 · Br<sup>-</sup>: agregar un electrón.</b> El Br tiene 35 e<sup>-</sup> y termina en (4p)<sup>5</sup>. El anión gana uno, 36 e<sup>-</sup>, y completa el 4p: (4s)<sup>2</sup>(3d)<sup>10</sup>(4p)<sup>6</sup>. Tiene 36 electrones, como el Kr (Z = 36). → <b>Control.</b> Suma de los superíndices: Co<sup>2+</sup> 2 + 2 + 6 + 2 + 6 + 7 = 25 ✓; Br<sup>-</sup> 2 + 2 + 6 + 2 + 6 + 2 + 10 + 6 = 36 ✓. → <b>Error típico:</b> sacarle al cobalto los electrones del 3d \"porque es el último que se llenó\". Al ionizar un metal de transición salen primero los del 4s."},

{st: "<b>Intermedio · Cuarteto del último electrón.</b> Escribí el cuarteto (n, l, m, s) del último electrón, el que distingue al elemento del anterior, de <b>a)</b> el nitrógeno (Z = 7) y <b>b)</b> el cloro (Z = 17).",
 ans: "<b>a)</b> N: (2, 1, +1, −1/2). <b>b)</b> Cl: (3, 1, 0, +1/2).",
 sol: "<b>Paso 1 · en qué subnivel entra el último electrón.</b> N: (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>3</sup>, el electrón 7 es el tercero del 2p, así que n = 2 y l = 1. Cl: …(3s)<sup>2</sup>(3p)<sup>5</sup>, el electrón 17 es el quinto del 3p, con n = 3 y l = 1. → <b>Paso 2 · en qué orbital (m) y con qué espín (s).</b> En un subnivel p los tres primeros electrones van uno por orbital, con m = −1, 0, +1 y s = −1/2 (convención de la guía); del cuarto al sexto se aparean en el mismo orden con s = +1/2. → <b>a)</b> El tercero del 2p es el de m = <b>+1</b>, con s = <b>−1/2</b>: (2, 1, +1, −1/2). → <b>b)</b> El quinto del 3p es el segundo que aparea: el cuarto fue m = −1, el quinto es m = <b>0</b>, con s = <b>+1/2</b>: (3, 1, 0, +1/2). → <b>Control.</b> En los dos l está entre 0 y n − 1 y m entre −1 y +1. → <b>Error típico:</b> poner m = 0 al sexto electrón por \"el del medio\" (el sexto es m = +1), o perder la cuenta de cuál lugar del subnivel toca. Hay que listar los seis lugares del subnivel en orden y marcar el que corresponde."},

{st: "<b>Intermedio · Grupo y período con Z grande.</b> Con los números atómicos 52, 48 y 59, indicá para cada elemento su CEE, su grupo y su período.",
 ans: "<b>Z = 52:</b> CEE (5s)<sup>2</sup>(5p)<sup>4</sup>, grupo 16, período 5. <b>Z = 48:</b> CEE (5s)<sup>2</sup>(4d)<sup>10</sup>, grupo 12, período 5. <b>Z = 59:</b> CEE (6s)<sup>2</sup>(4f)<sup>3</sup>, período 6, bloque f (sin número de grupo).",
 sol: "<b>Paso 1 · configuración completa.</b> Se llena hasta gastar los electrones, en el orden de la lista (…4p, 5s, 4d, 5p, 6s, 4f…). → <b>Z = 52:</b> …(4p)<sup>6</sup>(5s)<sup>2</sup>(4d)<sup>10</sup>(5p)<sup>4</sup>. Se elimina el 4d completo porque hay electrones en un subnivel de mayor energía (5p): CEE = (5s)<sup>2</sup>(5p)<sup>4</sup>. El diferenciador está en p: grupo 2 + 4 + 10 = <b>16</b> (los electrones de la CEE más 10); el n más alto es 5: período <b>5</b> (es el telurio). → <b>Z = 48:</b> …(5s)<sup>2</sup>(4d)<sup>10</sup>. Después del 4d no hay nada de mayor energía ocupado, así que el 4d se conserva: CEE = (5s)<sup>2</sup>(4d)<sup>10</sup>. Diferenciador en d: grupo 2 + 10 = <b>12</b>; período <b>5</b> (el cadmio). → <b>Z = 59:</b> …(5p)<sup>6</sup>(6s)<sup>2</sup>(4f)<sup>3</sup>. El 4f se llena después del 6s y los 3 electrones que quedan van ahí. Los 5s y 5p son un nivel intermedio y se eliminan; el 4f no está completo (3 de 14), así que se conserva, igual que el 3d del Sc. El diferenciador está en f: es un lantánido (el praseodimio), período <b>6</b>, y no tiene número de grupo. → <b>Control.</b> Sumas: 52 = 36 + 2 + 10 + 4 ✓; 48 = 36 + 2 + 10 ✓; 59 = 54 + 2 + 3 ✓. → <b>Error típico:</b> darle al Z = 59 un número de grupo: los elementos del bloque f se ubican por su período y por el subnivel f."},

{st: "<b>Intermedio · Ordenar radio, energía de ionización y electronegatividad.</b> Ordená Na, Mg, S y Cl de mayor a menor <b>a)</b> radio atómico, <b>b)</b> energía de ionización y <b>c)</b> electronegatividad, y escribí la causa en cada caso.",
 ans: "<b>a)</b> Radio: Na &gt; Mg &gt; S &gt; Cl. <b>b)</b> Energía de ionización: Cl &gt; S &gt; Mg &gt; Na. <b>c)</b> Electronegatividad: Cl &gt; S &gt; Mg &gt; Na.",
 sol: "<b>Paso 1 · ubicarlos.</b> Los cuatro están en el período 3: Na (grupo 1), Mg (2), S (16) y Cl (17), de izquierda a derecha en ese orden. Como comparten fila, lo único que cambia es Z. → <b>Paso 2 · la causa.</b> Al avanzar por el período el electrón nuevo entra en el mismo nivel (n = 3) y apantalla poco, así que la carga nuclear efectiva aumenta de Na a Cl. → <b>a)</b> Más Z<sub>ef</sub> atrae más a la nube y la achica: el radio disminuye hacia la derecha. Mayor a menor: <b>Na &gt; Mg &gt; S &gt; Cl</b>. → <b>b)</b> Si el núcleo atrae más a los electrones externos, cuesta más sacar uno: la energía de ionización aumenta hacia la derecha. Mayor a menor: <b>Cl &gt; S &gt; Mg &gt; Na</b>. → <b>c)</b> El mismo motivo hace que el núcleo atraiga con más fuerza los electrones de una unión. Los valores de la tabla de la sección 5 lo confirman: Cl 3,0 &gt; S 2,5 &gt; Mg 1,2 &gt; Na 0,9. → <b>Control.</b> El orden de a) es el inverso al de b) y c): lo que está más a la derecha es más chico y retiene más sus electrones. → <b>Error típico:</b> escribir sólo la flecha. Para que puntúe hay que nombrar la carga nuclear efectiva y que el nivel externo es el mismo."},

{st: "<b>Avanzado · Deducir con números atómicos consecutivos.</b> Tres elementos A, B y C tienen números atómicos consecutivos, Z, Z + 1 y Z + 2, en ese orden. B es un gas noble del período 3. <b>a)</b> Identificá A, B y C. <b>b)</b> ¿Qué tipo de unión forman A con C y C con C? <b>c)</b> ¿Quién tiene mayor radio, el ion A<sup>-</sup> o el ion C<sup>+</sup>? <b>d)</b> Ordená A, B y C por energía de ionización creciente.",
 ans: "<b>a)</b> A = Cl (Z = 17), B = Ar (18), C = K (19). <b>b)</b> A con C: iónica (KCl); C con C: metálica. <b>c)</b> Mayor radio: Cl<sup>-</sup>. <b>d)</b> K &lt; Cl &lt; Ar.",
 sol: "<b>Paso 1 · identificar a B.</b> El gas noble del período 3 es el argón, Z = 18 ((3s)<sup>2</sup>(3p)<sup>6</sup>). Entonces A tiene Z = 17 y C tiene Z = 19. → <b>Paso 2 · A y C por su configuración.</b> Z = 17: (3s)<sup>2</sup>(3p)<sup>5</sup>, grupo 17, período 3: <b>cloro</b>, un halógeno. Z = 19: …(3p)<sup>6</sup>(4s)<sup>1</sup>, grupo 1, período 4: <b>potasio</b>, un alcalino. Quedan a un lugar de distancia del gas noble, uno antes y otro después. → <b>b)</b> A con C es no metal con metal, con una diferencia de electronegatividad grande (3,0 − 0,8 = 2,2 &gt; 2): <b>iónica</b>, KCl. C con C es metal con metal: <b>metálica</b>. → <b>c)</b> El Cl<sup>-</sup> tiene 17 protones y 18 electrones; el K<sup>+</sup> tiene 19 protones y 18 electrones. Son isoelectrónicos, así que manda Z: los 19 protones del K<sup>+</sup> atraen más a los mismos 18 electrones y lo dejan más chico. El de mayor radio es el <b>Cl<sup>-</sup></b>. → <b>d)</b> La energía de ionización aumenta hacia la derecha en un período: el Ar (gas noble, con la capa completa) es el que más cuesta ionizar, después el Cl. El K, que está al comienzo del período 4 y tiene un solo electrón externo, muy apantallado, es el que menos. Creciente: <b>K &lt; Cl &lt; Ar</b>. → <b>Control.</b> En c) el ion con más protones es el más chico; en d) el orden coincide con la posición en la tabla: alcalino, halógeno, gas noble. → <b>Error típico:</b> ordenar los radios de Cl<sup>-</sup> y K<sup>+</sup> por la posición en la tabla (el K está más abajo, \"más grande\"). Eso vale para los átomos, pero estos iones tienen los mismos electrones."},


{st: 'Para las siguientes configuraciones electrónicas correspondientes a átomos neutros: <b>a)</b> (1s)<sup>2</sup> (2s)<sup>2</sup> (2p)<sup>3</sup> &nbsp; <b>b)</b> (1s)<sup>2</sup> (2s)<sup>2</sup> (2p)<sup>5</sup> &nbsp; <b>c)</b> (1s)<sup>2</sup> (2s)<sup>2</sup> (2p)<sup>6</sup> (3s)<sup>2</sup> (3p)<sup>6</sup> (4s)<sup>1</sup> &nbsp; <b>d)</b> (1s)<sup>2</sup> (2s)<sup>2</sup> (2p)<sup>6</sup> (3s)<sup>2</sup>. Indicar: <b>A)</b> grupo y período de cada elemento; <b>B)</b> cuál es el elemento de mayor tamaño y cuál el de menor. <i>(G02, ejercicio 6)</i>',
 ans: 'A) a) G 15, P 2 (N) · b) G 17, P 2 (F) · c) G 1, P 4 (K) · d) G 2, P 3 (Mg). B) El mayor es <b>c)</b> el potasio; el menor, <b>b)</b> el flúor.',
 sol: 'Primero contá los electrones para identificar el elemento, después sacá la CEE y aplicá la regla de T02C. → <b>a)</b> 2+2+3 = 7 e<sup>-</sup> → Z = 7 → <b>nitrógeno</b>. CEE = (2s)<sup>2</sup>(2p)<sup>3</sup>, diferenciador en p → G = 5 + 10 = <b>15</b>; P = <b>2</b> (el n más alto de la CEE). → <b>b)</b> 9 e<sup>-</sup> → <b>flúor</b>. CEE = (2s)<sup>2</sup>(2p)<sup>5</sup> → G = 7 + 10 = <b>17</b>, P = <b>2</b>. Halógeno, como corresponde a ns<sup>2</sup>np<sup>5</sup>. → <b>c)</b> 19 e<sup>-</sup> → <b>potasio</b>. CEE = (4s)<sup>1</sup>, diferenciador en s → G = <b>1</b>, P = <b>4</b>. Alcalino. → <b>d)</b> 12 e<sup>-</sup> → <b>magnesio</b>. CEE = (3s)<sup>2</sup> → G = <b>2</b>, P = <b>3</b>. Alcalinotérreo. → <b>B) El tamaño.</b> El radio atómico <b>crece al bajar en un grupo</b> (n mayor, orbitales más grandes) y <b>decrece al avanzar en un período</b> (Z<sub>ef</sub> mayor con el mismo n). El potasio es el que está más abajo y más a la izquierda de los cuatro: <b>el más grande</b>. El flúor está en el período 2 (n más chico) y casi al final de la fila (Z<sub>ef</sub> alta): <b>el más chico</b>. → Nota: N y F comparten período, así que entre esos dos gana el que está más a la izquierda (N &gt; F); K y Mg no comparten ni fila ni columna, pero K está a la vez más abajo y más a la izquierda, así que no hay ambigüedad.'},

{st: 'La configuración electrónica del ion X<sup>3−</sup> es (1s)<sup>2</sup> (2s)<sup>2</sup> (2p)<sup>6</sup> (3s)<sup>2</sup> (3p)<sup>6</sup>. <b>a)</b> ¿Cuál es el número atómico y el símbolo de X? <b>b)</b> ¿A qué grupo y periodo pertenece ese elemento? <i>(G02, ejercicio 8)</i>',
 ans: 'a) Z = <b>15</b>, es el <b>fósforo (P)</b>. b) <b>Grupo 15, período 3</b>. <span class="muted">(La clave de la guía dice “grupo 3 y período 15”: están invertidos.)</span>',
 sol: '<b>a)</b> Sumá los electrones de la configuración dada: 2+2+6+2+6 = <b>18 e<sup>-</sup></b>. Pero ésa es la configuración del <b>ion 3−</b>, que <b>ganó</b> 3 electrones. El átomo neutro tenía 18 − 3 = <b>15</b>, y en un átomo neutro N° e<sup>-</sup> = Z → <b>Z = 15 → fósforo</b>. → El error clásico acá es contestar “Z = 18, argón”, que es la especie con la que el P<sup>3−</sup> es <b>isoelectrónico</b>, no el elemento X. → <b>b)</b> La pregunta es por <b>el elemento</b>, así que hay que ubicar al P neutro, no al ion. CE del P: (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>3</sup> → CEE = (3s)<sup>2</sup>(3p)<sup>3</sup>, 5 electrones, diferenciador en p → <b>G = 5 + 10 = 15</b>; el n más alto de la CEE es 3 → <b>P = 3</b>. → <b>Control de sanidad</b>: la tabla tiene 7 períodos y 18 grupos. “Período 15” no existe: si te dio eso, escribiste los rótulos al revés (que es exactamente lo que hace la clave publicada de la guía).'},

{st: 'Agrupar las especies que son isoelectrónicas: O<sup>2-</sup>, C, F<sup>-</sup>, Na<sup>+</sup>, Ge<sup>2+</sup>, B<sup>-</sup>, Zn, justificando la respuesta. <i>(G02, ejercicio 9)</i>',
 ans: 'Tres grupos: <b>{C, B<sup>-</sup>}</b> con 6 e<sup>-</sup>, <b>{O<sup>2-</sup>, F<sup>-</sup>, Na<sup>+</sup>}</b> con 10 e<sup>-</sup> y <b>{Ge<sup>2+</sup>, Zn}</b> con 30 e<sup>-</sup>.',
 sol: 'Isoelectrónicas = <b>mismo número de electrones</b>. Contá con N° e<sup>-</sup> = Z − carga y no mires nada más. → <b>O<sup>2-</sup></b>: 8 + 2 = <b>10</b> → (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>. → <b>C</b>: 6 → (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>2</sup>. → <b>F<sup>-</sup></b>: 9 + 1 = <b>10</b>. → <b>Na<sup>+</sup></b>: 11 − 1 = <b>10</b>. → <b>Ge<sup>2+</sup></b>: 32 − 2 = <b>30</b> → (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>: se sacaron los dos electrones del <b>4p</b>, que es el subnivel de mayor energía ocupado. → <b>B<sup>-</sup></b>: 5 + 1 = <b>6</b> → misma CE que el carbono. → <b>Zn</b>: 30 → (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>, idéntica a la del Ge<sup>2+</sup>. → <b>Errata de la clave publicada</b>: escribe el Ge<sup>2+</sup> como “…3p<sup>6</sup>4s<sup>1</sup>3d<sup>10</sup>”, que suma 29 electrones y no 30. Es un tipeo: dos líneas más abajo la misma respuesta dice “30 electrones”. Va (4s)<sup>2</sup>. → <b>Moraleja operativa</b>: isoelectrónicas no quiere decir “parecidas” ni “del mismo grupo”. Es una cuenta de una línea; hacela siempre antes de opinar.'},

{st: 'Responder, justificando la respuesta: <b>a)</b> ¿Cuál es el número de electrones desapareados que presenta en su estado fundamental el átomo de selenio? <b>b)</b> Un electrón que se aloja en un orbital 3d, ¿puede tener el siguiente conjunto de números cuánticos (3, 2, 3, −1/2)? <b>c)</b> ¿Cuál de los 2 elementos tiene mayor radio atómico: el azufre o el selenio? <i>(G02, ejercicio 10)</i>',
 ans: 'a) <b>2</b> electrones desapareados. b) <b>No</b>: con l = 2, m sólo puede valer −2, −1, 0, 1 o 2. c) El <b>selenio</b>.',
 sol: '<b>a)</b> Se (Z = 34) → CE = (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>(4p)<sup>4</sup>. Control: suma 34 ✓. Todos los subniveles están completos salvo el <b>4p, con 4 electrones en 3 orbitales</b>. Por <b>Hund</b>, los tres primeros van desapareados (uno por orbital) y el cuarto aparea con uno de ellos: ↑↓ ↑ ↑ → <b>2 desapareados</b>. → El error frecuente es contestar 4 (contando todos los electrones del 4p) o 0 (suponiendo que se aparean de a dos desde el principio). → <b>b)</b> Los tres primeros números dicen “orbital 3d”: n = 3 ✓, l = 2 ✓ (l = 2 es justamente d), s = −1/2 ✓ (sólo puede ser ±1/2). El que falla es <b>m</b>: sus valores permitidos van de <b>−l a +l</b>, o sea de −2 a +2. <b>m = 3 no existe para l = 2.</b> Alcanza con que uno de los cuatro esté fuera de rango para que el cuarteto sea imposible. → <b>c)</b> S (Z = 16, período 3) y Se (Z = 34, período 4) están en el <b>mismo grupo 16</b>. Al <b>bajar</b> en un grupo aumenta n, los electrones externos ocupan orbitales más grandes y hay una capa más de apantallamiento → <b>el radio aumenta</b>. Como el selenio está debajo del azufre, <b>Se &gt; S</b>. → Ojo con el reflejo “más Z, más chico”: eso vale <b>dentro de un período</b> (o en una serie isoelectrónica), no al bajar en un grupo.'},

{st: '¿Cuáles son las combinaciones de valores (cuartetos) de los números cuánticos de los electrones 2°, 3°, 6°, 11° y 13° correspondientes al elemento Aluminio? <i>(G02, ejercicio 16)</i>',
 ans: 'e<sup>-</sup> 2: (1, 0, 0, +1/2) · e<sup>-</sup> 3: (2, 0, 0, −1/2) · e<sup>-</sup> 6: (2, 1, 0, −1/2) · e<sup>-</sup> 11: (3, 0, 0, −1/2) · e<sup>-</sup> 13: (3, 1, −1, −1/2).',
 sol: 'Escribí la CE del Al (Z = 13) y numerá los electrones <b>en el orden en que se van colocando</b>: (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>1</sup> → e<sup>-</sup> 1-2 en 1s, 3-4 en 2s, 5-10 en 2p, 11-12 en 3s, 13 en 3p. → <b>e<sup>-</sup> 2</b>: es el <b>segundo</b> del 1s → n = 1, l = 0, m = 0; como el primero ya tomó un espín, éste toma el otro → <b>(1, 0, 0, +1/2)</b>. → <b>e<sup>-</sup> 3</b>: primero del 2s → <b>(2, 0, 0, −1/2)</b>. → <b>e<sup>-</sup> 6</b>: segundo del 2p. Por <b>Hund</b> los tres primeros del 2p van desapareados en m = −1, 0, +1; el 5° toma m = −1 y el 6° toma <b>m = 0</b> → <b>(2, 1, 0, −1/2)</b>. → <b>e<sup>-</sup> 11</b>: primero del 3s → <b>(3, 0, 0, −1/2)</b>. → <b>e<sup>-</sup> 13</b>: único del 3p, primer valor de m → <b>(3, 1, −1, −1/2)</b>. → <b>La convención de espín</b>: la clave de la guía le da <b>−1/2 al primer electrón</b> de cada orbital y +1/2 al segundo. Es una convención, no una ley: muchos libros usan la opuesta. Lo que <b>no</b> es convención es que los dos electrones de un mismo orbital tengan <b>espines opuestos</b> (Pauli) y que los degenerados se llenen desapareados primero (Hund). Si usás la otra convención, decilo en la hoja y sé consistente. → <span class="muted">Los cinco cuartetos coinciden con la clave publicada, salvo que en el .txt extraído el n del primer renglón salió como 0; en la guía impresa es 1.</span>'},

{st: 'Indicar a qué elemento corresponde: <b>a)</b> aquel cuyo catión trivalente es isoelectrónico con el anión monovalente del primer halógeno; <b>b)</b> aquel cuyo anión divalente es isoelectrónico con el cuarto gas noble; <b>c)</b> aquel cuyo anión divalente es isoelectrónico con el catión divalente del tercer alcalino térreo. <i>(G02, ejercicio 18)</i>',
 ans: 'a) <b>Al</b> (Z = 13) · b) <b>Se</b> (Z = 34) · c) <b>S</b> (Z = 16).',
 sol: 'El procedimiento es siempre el mismo: <b>identificá la especie de referencia, contale los electrones, y despejá el Z de la incógnita con Z = N° e<sup>-</sup> + carga</b>. → <b>a)</b> Primer halógeno = <b>flúor</b> (grupo 17, período 2). Su anión monovalente F<sup>-</sup> tiene 9 + 1 = <b>10 e<sup>-</sup></b>. Buscamos X<sup>3+</sup> con 10 electrones → Z = 10 + 3 = <b>13</b> → <b>aluminio</b>. → <b>b)</b> Gases nobles en orden: He, Ne, Ar, <b>Kr</b> → el cuarto es el kriptón, con <b>36 e<sup>-</sup></b>. Buscamos X<sup>2−</sup> con 36 electrones → Z = 36 − 2 = <b>34</b> → <b>selenio</b>. → <b>c)</b> Alcalinotérreos en orden: Be, Mg, <b>Ca</b> → el tercero es el calcio; Ca<sup>2+</sup> tiene 20 − 2 = <b>18 e<sup>-</sup></b>. Buscamos X<sup>2−</sup> con 18 electrones → Z = 18 − 2 = <b>16</b> → <b>azufre</b>. → <b>Los dos errores que arruinan este ejercicio</b>: contar mal el ordinal (el <b>primer</b> halógeno es el F, no el Cl; el <b>primer</b> gas noble es el He, no el Ne) y equivocar el signo al despejar. Para un <b>catión</b> los electrones son <b>menos</b> que Z, así que Z = e<sup>-</sup> + carga; para un <b>anión</b> son más, así que Z = e<sup>-</sup> − carga.'},

{st: "<b>Química General (CB103) · Intermedio · Fundamental, excitada o imposible.</b> Clasificá cada configuración como fundamental, excitada o imposible: <b>a)</b> (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>5</sup>; <b>b)</b> (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>4</sup>(4s)<sup>1</sup>; <b>c)</b> (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>7</sup>(3s)<sup>1</sup>; <b>d)</b> (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(3d)<sup>1</sup>. Después escribí, con la convención de Química General, el cuarteto del electrón número 13 del aluminio.",
 ans: "<b>a)</b> fundamental (Cl); <b>b)</b> excitada (Cl); <b>c)</b> imposible; <b>d)</b> excitada (K). Electrón 13 del Al: <b>(3, 1, −1, +1/2)</b>.",
 sol: "<b>Paso 1 · contar electrones.</b> a) 2 + 2 + 6 + 2 + 5 = 17: cloro. b) 2 + 2 + 6 + 2 + 4 + 1 = 17: también cloro. c) 2 + 2 + 7 + 1 = 12. d) 2 + 2 + 6 + 2 + 6 + 1 = 19: potasio. → <b>Paso 2 · buscar lo imposible.</b> En c) el subnivel 2p tiene 7 electrones y su máximo es 6: viola Pauli, <b>imposible</b>. En las demás ningún subnivel pasa su máximo. → <b>Paso 3 · comparar con la fundamental.</b> a) es justo la del cloro: <b>fundamental</b>. b) tiene los mismos 17 electrones, pero uno del 3p pasó al 4s: es posible, y como no es la de menor energía, es <b>excitada</b>. d) la fundamental del potasio termina en (4s)<sup>1</sup> y acá el electrón está en el 3d, de más energía: <b>excitada</b>. → <b>Paso 4 · cuarteto del electrón 13 del Al.</b> Es el único del 3p: n = 3, l = 1. Es el primero del subnivel, entra en m = −1 y, en Química General, el primero de cada orbital lleva s = <b>+1/2</b>: <b>(3, 1, −1, +1/2)</b>. Con la convención de Química Básica sería (3, 1, −1, −1/2). → <b>Error típico:</b> llamar \"imposible\" a una excitada: si se pueden contar los electrones y ningún subnivel se pasa del máximo, la configuración es posible, sólo que no es la de menor energía."}

]);

registerExercises('fiuba-quimica', '3', [

{st: 'Parte B de la evaluación integradora del 11/07/24, ítem 1, textual: “Todas las especies siguientes son isoelectrónicas entre sí: O2- (Z = 8), F- (Z = 9), Li+ (Z = 3), He (Z = 2), Na+ (Z = 11)”. ¿Verdadero o falso, y por qué?',
 opts: ['Verdadero: todas alcanzan la configuración de un gas noble',
        'Falso: O<sup>2-</sup>, F<sup>-</sup> y Na<sup>+</sup> tienen 10 e<sup>-</sup>, pero Li<sup>+</sup> y He tienen 2',
        'Falso: el He no es un ion, así que no puede ser isoelectrónico con nada',
        'Verdadero: las cinco especies tienen 10 electrones'],
 c: 1,
 ex: "La cuenta N° e<sup>-</sup> = Z − carga da: O<sup>2-</sup> 10, F<sup>-</sup> 10, Na<sup>+</sup> 10, Li<sup>+</sup> 2, He 2. Hay <b>dos</b> grupos isoelectrónicos, no uno, y el enunciado dice “todas … entre sí” → <b>falso</b>. → La de <b>verdadero porque todas alcanzan la configuración de un gas noble</b> confunde dos cosas distintas: es cierto que las cinco tienen configuración de gas noble, pero de <b>dos gases nobles diferentes</b> (Ne y He), y ser isoelectrónicas exige el mismo número, no “un” gas noble cualquiera. → La que dice que <b>el He no es un ion</b> es falsa de raíz: isoelectrónico se define por el número de electrones y aplica a átomos neutros igual que a iones. El He es isoelectrónico con el Li<sup>+</sup> y con el H<sup>-</sup>. → La de <b>las cinco con 10 electrones</b> se olvida de contar el Li<sup>+</sup> y el He. → Ojo con la consigna: la Parte B pide “justificar mediante razonamiento deductivo”, así que en la hoja va la cuenta de las cinco especies, no sólo la palabra “Falso”."},

{st: 'El cloro natural es 75,77 % de <sup>35</sup>Cl (34,96885 u) y 24,23 % de <sup>37</sup>Cl (36,96590 u). ¿Cuál es su masa atómica promedio y por qué la tabla periódica trae 35,45?',
 opts: ['36,00 u, porque es el promedio entre 35 y 37',
        '35,45 u, porque el promedio está <b>ponderado por la abundancia</b> y el <sup>35</sup>Cl es tres veces más abundante',
        '35,45 u, porque el cloro tiene 35 protones y 0,45 neutrones extra',
        '35,00 u, porque hay que quedarse con el isótopo más abundante'],
 c: 1,
 ex: "m̄ = (34,96885·75,77 + 36,96590·24,23)/100 = <b>35,45 u</b> <span class=\"muted\">(con más cifras: 35,4527)</span>. → El promedio <b>simple</b> entre 35 y 37 daría 36 y es lo que propone la de <b>36,00 u</b>: está mal porque el promedio es <b>ponderado</b>, y como hay tres veces más <sup>35</sup>Cl el resultado se corre hacia 35. → La de <b>35 protones y 0,45 neutrones extra</b> es un disparate dimensional: los neutrones se cuentan en enteros y el número de protones del cloro es 17, no 35. → La de <b>35,00 u</b> ignora que la tabla informa el promedio de <b>todos</b> los isótopos naturales, no el del más abundante. → Detalle que se cobra: si en vez de las masas isotópicas metés los números másicos 35 y 37, te da 35,48 y ya no coincide con la tabla en el segundo decimal."},

{st: '¿Cuál es la configuración electrónica del Fe<sup>3+</sup> (Z = 26)?',
 opts: ['(1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>3</sup>',
        '(1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(3d)<sup>5</sup>',
        '(1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>1</sup>(3d)<sup>4</sup>',
        '(1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>6</sup>'],
 c: 1,
 ex: "El Fe neutro es …(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>6</sup> (26 e<sup>-</sup>). Para el ion 3+ hay que sacar <b>3</b> electrones, y salen del subnivel de <b>mayor n</b>: primero los <b>dos del 4s</b> y después uno del 3d → …(3p)<sup>6</sup><b>(3d)<sup>5</sup></b>, 23 e<sup>-</sup> ✓. → La que termina en <b>(4s)<sup>2</sup>(3d)<sup>3</sup></b> saca los tres del 3d y deja el 4s intacto: es el error más común de toda la unidad. Se <b>llena</b> 4s antes que 3d, pero una vez poblado el 3d queda por debajo del 4s en energía, así que se <b>vacía</b> el 4s primero. → La que termina en <b>(4s)<sup>1</sup>(3d)<sup>4</sup></b> saca uno del 4s y dos del 3d: mismo error a medias, y además rompe la regla de que el vaciado va por nivel completo antes de tocar el de abajo. → La que termina en <b>(4s)<sup>2</sup>(3d)<sup>6</sup></b> es el <b>átomo neutro</b>, con 26 electrones: no le sacó ninguno. Chequeo de tres segundos: sumá los superíndices y compará con Z − carga = 26 − 3 = 23."},

{st: 'Ordená de mayor a menor radio: O<sup>2-</sup> (Z = 8), F<sup>-</sup> (Z = 9), Na<sup>+</sup> (Z = 11), Mg<sup>2+</sup> (Z = 12).',
 opts: ['Mg<sup>2+</sup> &gt; Na<sup>+</sup> &gt; F<sup>-</sup> &gt; O<sup>2-</sup>, porque el radio crece con Z',
        'Na<sup>+</sup> &gt; Mg<sup>2+</sup> &gt; O<sup>2-</sup> &gt; F<sup>-</sup>, porque los cationes son más grandes',
        'O<sup>2-</sup> &gt; F<sup>-</sup> &gt; Na<sup>+</sup> &gt; Mg<sup>2+</sup>, porque a igual número de electrones manda Z: más protones, nube más contraída',
        'Los cuatro tienen el mismo radio, porque son isoelectrónicos'],
 c: 2,
 ex: "Las cuatro especies tienen <b>10 electrones</b> (8+2, 9+1, 11−1, 12−2), así que la nube electrónica es “la misma”: la única variable que queda es la carga del núcleo que tira de ella. A <b>mayor Z, mayor atracción y menor radio</b> → <b>O<sup>2-</sup> &gt; F<sup>-</sup> &gt; Na<sup>+</sup> &gt; Mg<sup>2+</sup></b>. → La que dice que <b>el radio crece con Z</b> invierte la causa: dentro de una serie isoelectrónica más Z significa más chico, no más grande. → La que dice que <b>los cationes son más grandes</b> usa una regla que no aplica: R<sub>catión</sub> &lt; R<sub>átomo</sub> &lt; R<sub>anión</sub> compara un elemento <b>consigo mismo</b> (Na vs Na<sup>+</sup>), no especies distintas entre sí. → La que dice que <b>los cuatro tienen el mismo radio</b> confunde isoelectrónico con idéntico: comparten el número de electrones, no el número de protones, y por eso los radios difieren."},

{st: 'Un átomo tiene CE (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>(4s)<sup>2</sup>(3d)<sup>10</sup>. ¿Cuál es su CEE, su grupo y su período?',
 opts: ['CEE = (4s)<sup>2</sup>, grupo 2, período 4',
        'CEE = (4s)<sup>2</sup>(3d)<sup>10</sup>, grupo 12, período 4',
        'CEE = (3d)<sup>10</sup>, grupo 10, período 3',
        'CEE = (4s)<sup>2</sup>(3d)<sup>10</sup>, grupo 12, período 3'],
 c: 1,
 ex: "Es el cinc (30 e<sup>-</sup>). La regla 3 de la CEE dice que los orbitales d se eliminan si están completos <b>y además</b> hay al menos un electrón en un orbital de mayor energía. Acá el 3d está completo, pero el 4p está <b>vacío</b>: falta la segunda condición, así que el (3d)<sup>10</sup> <b>se queda</b> → CEE = (4s)<sup>2</sup>(3d)<sup>10</sup>. Con el diferenciador en d, grupo = s + d = 2 + 10 = <b>12</b>; período = n más alto de la CEE = <b>4</b>. → La de <b>CEE = (4s)<sup>2</sup>, grupo 2</b> aplica la regla a medias y saca el 3d: te dejaría el cinc en el grupo 2, junto al magnesio y al calcio. Comparalo con el Kr, donde el 3d <b>sí</b> se va porque hay electrones en 4p. → La de <b>CEE = (3d)<sup>10</sup>, grupo 10, período 3</b> se olvida del 4s y toma el 3 del “3d” como período: el período sale del n más alto <b>de la CEE</b>, que es 4. → La de <b>grupo 12, período 3</b> acierta la CEE y el grupo pero repite ese mismo error de período."},

{st: 'La configuración real del cromo (Z = 24) es …(4s)<sup>1</sup>(3d)<sup>5</sup> y no la …(4s)<sup>2</sup>(3d)<sup>4</sup> que predice el orden de llenado. ¿Por qué?',
 opts: ['Porque 4s y 3d están muy cerca en energía y el subnivel d <b>semilleno</b> (5 e<sup>-</sup>, uno por orbital) es una configuración especialmente estable', 'Porque el principio de exclusión de Pauli prohíbe tener 4 electrones en un subnivel d', 'Porque el cromo es un metal y los metales llenan siempre el d antes que el s', 'Porque el cromo tiene un isótopo mayoritario con un electrón menos en el 4s'], c: 0,
 ex: 'La proximidad energética entre 4s y 3d hace que la ganancia por dejar el d <b>semilleno</b> alcance para pagar el costo de despoblar el 4s. Lo mismo pasa con el cobre, donde el premio es el d <b>completo</b>: …(4s)<sup>1</sup>(3d)<sup>10</sup> en vez de …(4s)<sup>2</sup>(3d)<sup>9</sup>. En los dos casos el 4s queda con <b>un</b> electrón, nunca con cero. → Pauli no tiene nada que ver: prohíbe cuatro números cuánticos iguales, y 3d<sup>4</sup> no viola nada (el d admite hasta 10). → “Los metales llenan el d antes que el s” es falso: el Sc, el Ti, el V, el Fe y muchos otros metales de transición tienen 4s<sup>2</sup>. Las excepciones son dos, no una regla. → Los isótopos difieren en <b>neutrones</b>, no en electrones: no pueden cambiar una configuración electrónica. → Procedencia: las excepciones no figuran en T02B ni en G02 y no aparecen en los 9 exámenes; son química estándar y conviene saberlas, sobre todo la del cobre, que reaparece en toda la electroquímica.'},

{st: '¿Cuál de estos cuartetos (n, l, m, s) es imposible?',
 opts: ['(2, 2, 1, +1/2)', '(3, 2, −2, +1/2)', '(2, 1, 0, −1/2)', '(4, 0, 0, −1/2)'], c: 0,
 ex: 'Las reglas se encadenan: <b>l va de 0 a n−1</b> y <b>m va de −l a +l</b>. En (2, <b>2</b>, 1, +1/2), con n = 2 el l sólo puede ser 0 o 1: <b>l = 2 es imposible</b>, porque no existe un subnivel 2d. → (3, 2, −2, +1/2) es un electrón 3d con m en el borde permitido (−2 ≤ m ≤ 2): válido. → (2, 1, 0, −1/2) es un 2p con m = 0: válido. → (4, 0, 0, −1/2) es un 4s: válido. → El método para estos ítems es mecánico: mirá n, calculá el rango de l, calculá el rango de m con el l que te dieron, y verificá que s sea ±1/2. Con que uno solo falle, el cuarteto no existe.'},

{st: '¿Por qué la mecánica cuántica dice que el electrón no tiene trayectoria alrededor del núcleo?',
 opts: ["Porque el electrón está quieto en el orbital", "Porque el electrón se mueve tan rápido que no se puede medir con los instrumentos actuales", "Porque el modelo de Bohr ya había demostrado que los electrones caen en espiral sobre el núcleo", "Porque el principio de incertidumbre de Heisenberg impide conocer a la vez la posición y la velocidad de una micropartícula, y una trayectoria es exactamente eso"],
 c: 3,
 ex: "Textual de T02B: Heisenberg (1927) enunció que “es imposible conocer simultáneamente y con precisión absoluta la posición y la velocidad de una micropartícula”, y eso “implica descartar la idea de los e<sup>-</sup> en trayectorias definidas con velocidad determinada. Así surge el concepto de <b>orbital</b>”: la región donde la probabilidad de encontrar al electrón es máxima. → La que dice que <b>el electrón está quieto en el orbital</b> es falsa: el electrón tiene energía cinética; lo que no tiene es una posición definida. → La que dice que <b>se mueve tan rápido que no se puede medir</b> confunde una <b>limitación fundamental</b> con una limitación técnica: no es que todavía no sepamos medirlo, es que las dos magnitudes no están simultáneamente definidas. → La que dice que <b>Bohr ya había demostrado que los electrones caen en espiral</b> mezcla dos cosas: la espiral es la <b>objeción de Maxwell al modelo de Rutherford</b>, y el modelo de Bohr se inventó justamente para evitarla, cuantificando la energía."},

{st: 'Un nucleido tiene A = 13 y su átomo neutro posee 7 electrones. Otro nucleido, isóbaro del primero, tiene 6 electrones. ¿Qué son y cuánto pesa cada uno, sumando las masas de sus partículas con los datos de T02A? <i>(base de G02, ej 4)</i>',
 opts: ["Son isótopos del mismo elemento, y pesan exactamente 13 u cada uno", "Son <sup>13</sup><sub>7</sub>N y <sup>13</sup><sub>6</sub>C, y pesan 13,00 u porque A es la masa", "No pueden existir: dos nucleidos con el mismo A son siempre el mismo elemento", "Son <sup>13</sup><sub>7</sub>N (7 p, 6 n) y <sup>13</sup><sub>6</sub>C (6 p, 7 n), y pesan ≈13,1 u, <b>no</b> exactamente 13"],
 c: 3,
 ex: "Átomo neutro → N° e<sup>-</sup> = Z. Uno tiene Z = 7 (nitrógeno) y 13 − 7 = <b>6 neutrones</b>; el otro Z = 6 (carbono) y 13 − 6 = <b>7 neutrones</b>. Mismo A, distinto Z → son <b>isóbaros</b>, que es justamente lo que niega la que dice que <b>no pueden existir</b>. → La que dice que <b>son isótopos del mismo elemento</b> confunde isóbaros con isótopos: los isótopos comparten Z, no A. → La que dice que <b>pesan 13,00 u porque A es la masa</b> es el error conceptual que la unidad quiere corregir: <b>A es un conteo de nucleones, no una masa</b>. Con las masas de T02A (protón 1,672·10<sup>-27</sup> kg, neutrón 1,675·10<sup>-27</sup> kg) sale 2,175·10<sup>-23</sup> g ≈ <b>13,10 u</b>. La clave de la guía responde 13,09 u y 2,1736·10<sup>-23</sup> g, la diferencia es sólo redondeo. El <sup>12</sup>C da exacto sólo porque la u está <b>definida</b> como su doceava parte. Ojo: sumar las partículas sueltas es la cuenta de la cátedra; las masas medidas son 13,006 u para el <sup>13</sup>N y 13,003 u para el <sup>13</sup>C, porque el núcleo pesa menos que la suma de sus partes (defecto de masa)."},

{st: 'La energía de ionización aumenta hacia la derecha en un período. ¿Cuál es la causa que hay que escribir en la hoja?',
 opts: ["Que aumenta el número de neutrones y el núcleo pesa más", "Que aumenta el número cuántico principal y los orbitales se agrandan", "Que aumenta la <b>carga nuclear efectiva</b> con el mismo n, el radio disminuye y los electrones externos quedan más atraídos", "Que los elementos de la derecha son metales y pierden electrones con facilidad"],
 c: 2,
 ex: "Textual de T02C: “al moverse hacia la derecha en un período aumenta la carga nuclear efectiva al aumentar Z, disminuyendo el radio atómico y por lo tanto hay una mayor atracción de los e<sup>-</sup> más externos, con lo cual resulta más difícil separarlos”. → Los neutrones no participan: no tienen carga y no atraen electrones. → Dentro de un período <b>n permanece constante</b>: lo que cambia es Z<sub>ef</sub>. Que n aumente es lo que pasa al bajar en un <b>grupo</b>, y ahí la EI <b>disminuye</b>. → La que dice que <b>los elementos de la derecha son metales</b> invierte todo: los metales están a la <b>izquierda</b>, y justamente por eso tienen EI baja (conceptual 12 del bloque). → Nota de examen: la conceptual 10 pide “explique la causa de dicha tendencia” y la 11 pide “explique”; la flecha sola no puntúa."},

{st: 'Un ion tiene 13 protones y 10 electrones. ¿Cómo se escribe?',
 opts: ['Al<sup>3-</sup>', 'Ne<sup>3+</sup>', 'Al<sup>3+</sup>', 'Al<sup>10+</sup>'], c: 2,
 ex: 'Carga = <b>Z − N° e<sup>-</sup></b> = 13 − 10 = <b>+3</b>, y Z = 13 identifica al <b>aluminio</b> → <b>Al<sup>3+</sup></b>. → Al<sup>3-</sup> tendría 16 electrones: el signo va al revés, porque perder electrones (negativos) deja carga positiva. → Ne<sup>3+</sup> es un error de identificación: el neón tiene Z = 10, y 10 es el número de <b>electrones</b> de esta especie, no de protones. Los protones no cambian nunca al formar un ion: si cambiaran, sería otro elemento. → Al<sup>10+</sup> confunde la carga con el número de electrones que quedan. → El Al<sup>3+</sup> es isoelectrónico con el Ne, con el Na<sup>+</sup>, con el F<sup>-</sup> y con el O<sup>2-</sup>: los cinco tienen 10 electrones.'},

{st: '¿Cuántos orbitales y cuántos electrones como máximo admite el nivel n = 3?',
 opts: ['9 orbitales y 18 electrones', '3 orbitales y 6 electrones', '5 orbitales y 10 electrones', '6 orbitales y 12 electrones'], c: 0,
 ex: 'Para n = 3, l puede valer 0, 1 y 2 → subniveles 3s (1 orbital), 3p (3 orbitales) y 3d (5 orbitales) = <b>9 orbitales</b>. Con 2 electrones por orbital (Pauli), <b>18 electrones</b>, que es <b>2n² = 2·9</b>. → “3 orbitales y 6 electrones” es sólo el subnivel p. → “5 y 10” es sólo el d. → “6 y 12” no corresponde a ninguna combinación válida. → El 2n² sirve de control instantáneo: n = 1 → 2, n = 2 → 8, n = 3 → 18, n = 4 → 32. Si tu configuración mete más electrones que eso en un nivel, está mal sin necesidad de revisar nada más.'},

{st: 'Un elemento A es alcalinotérreo del tercer período y un elemento B es el halógeno del segundo período. ¿Es cierto que el ion B<sup>-</sup> y el elemento A son isoelectrónicos? <i>(G02, ej 11c)</i>',
 opts: ["Sí: los dos tienen 10 electrones", "Sí, porque ambos alcanzan la configuración del neón", "No, porque un anión nunca puede ser isoelectrónico con un átomo neutro", "No: F<sup>-</sup> tiene 10 e<sup>-</sup> y el Mg tiene 12. El isoelectrónico del F<sup>-</sup> es el <b>Mg<sup>2+</sup></b>"],
 c: 3,
 ex: "A = alcalinotérreo (grupo 2) del período 3 → <b>Mg</b>, Z = 12, con <b>12 electrones</b>. B = halógeno (grupo 17) del período 2 → <b>F</b>, Z = 9; F<sup>-</sup> tiene 9 + 1 = <b>10 electrones</b>. 12 ≠ 10 → <b>no</b> son isoelectrónicos. → El que sí lo es: <b>Mg<sup>2+</sup></b>, con 12 − 2 = 10 e<sup>-</sup> y CE (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>. → La que dice que <b>ambos alcanzan la configuración del neón</b> confunde “el Mg tiende a formar Mg<sup>2+</sup>, que tiene configuración de neón” con “el Mg neutro tiene configuración de neón”: el Mg neutro es (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>, con dos electrones de más. → La que dice que <b>un anión nunca puede ser isoelectrónico con un átomo neutro</b> inventa una prohibición: el F<sup>-</sup> <b>sí</b> es isoelectrónico con el Ne neutro. Isoelectrónico se define sólo por el conteo."},
  {st: "Según el segundo postulado de Bohr (T02B), ¿cuándo gana o pierde energía el electrón y cuánta?",
   opts: ["Sólo cuando salta de una órbita permitida a otra: absorbe o emite un fotón cuya energía h·ν es igual a la diferencia de energías entre el estado final y el inicial", "Todo el tiempo: al girar está acelerado e irradia energía de a poco hasta caer sobre el núcleo", "Mientras se mueve dentro de una órbita permitida, que es donde emite el fotón; al saltar de órbita no intercambia energía", "Cuando pasa a una órbita más cercana al núcleo, y siempre emite la misma cantidad de energía, sin importar de qué órbita viene"],
   c: 0,
   ex: "El segundo postulado dice que el electrón <b>sólo</b> gana o pierde energía al <b>saltar</b> de una órbita permitida a otra, y que la energía del fotón absorbido o emitido es <b>h·ν = diferencia de energías entre el estado final y el inicial</b>. Sube con luz o calor → estado excitado; baja a la órbita n = 1 (la más cercana al núcleo, de menor energía) → estado fundamental, emitiendo esa energía. → La idea de que irradia todo el tiempo es la objeción de Maxwell al modelo de Rutherford, y es justamente lo que el <b>primer</b> postulado de Bohr resuelve: en una órbita permitida no absorbe ni emite energía. → Ubicar la emisión dentro de la órbita invierte los dos postulados: dentro de la órbita no hay intercambio, el intercambio ocurre en el salto. → Una cantidad fija de energía desconoce que el fotón depende de <b>las dos</b> órbitas: cada par inicial-final tiene su diferencia de energías."},
  {st: "El radio iónico es el de un átomo que perdió o ganó electrones hasta quedar con la estructura electrónica del gas noble más cercano. ¿Qué ion forma el azufre (Z = 16) y cómo es su radio frente al del átomo?",
   opts: ["S<sup>6+</sup>, con la CE del neón; su radio es menor que el del átomo", "S<sup>2+</sup>, que pierde los dos electrones del 3p; su radio es menor que el del átomo", "S<sup>2-</sup>, con la CE del argón; su radio es menor que el del átomo porque tiene más electrones", "S<sup>2-</sup>, con la CE del argón: gana 2 e<sup>-</sup> sin ganar protones, así que su radio es mayor que el del átomo"],
   c: 3,
   ex: "El gas noble más cercano al azufre (Z = 16) es el <b>argón</b> (Z = 18), a 2 electrones; el neón (Z = 10) está a 6. El S gana 2 e<sup>-</sup> y queda como <b>S<sup>2-</sup></b>, con (1s)<sup>2</sup>(2s)<sup>2</sup>(2p)<sup>6</sup>(3s)<sup>2</sup>(3p)<sup>6</sup>, 18 electrones. Sumó electrones sin sumar protones: más repulsión entre electrones, menos atracción por electrón, la nube se expande → <b>R<sub>anión</sub> &gt; R<sub>átomo</sub></b>. → S<sup>6+</sup> sí quedaría con la CE del neón, pero eso es arrancar 6 electrones cuando el argón queda a 2: el criterio es el gas noble <b>más cercano</b>. → S<sup>2+</sup> pierde los 2 electrones del 3p y deja 14 electrones, que no es la configuración de ningún gas noble. → Que el anión sea más chico “porque tiene más electrones” invierte la regla: es el catión el que se contrae, y el anión se expande por la repulsión entre sus electrones."},
  {st: "En un átomo con varios electrones, dentro de un mismo nivel n la energía de los orbitales crece en el orden ns &lt; np &lt; nd &lt; nf. ¿Cuál es la causa?",
   opts: ["El orbital s admite menos electrones que el p, y por eso queda más estabilizado", "Los orbitales con mayor l tienen mayor n, y a mayor n corresponde mayor energía", "Los orbitales s penetran más: pasan más tiempo cerca del núcleo, los apantalla menos el resto de los electrones, sienten una Z<sub>ef</sub> mayor y por eso tienen menor energía", "Los orbitales s son esféricos, y un orbital esférico siempre tiene menor energía que uno con lóbulos"],
   c: 2,
   ex: "La causa es la <b>penetración</b>: para un mismo n, un electrón s tiene más probabilidad de estar cerca del núcleo, atravesando las capas internas, que uno p, d o f (penetra s &gt; p &gt; d &gt; f). Pasa más tiempo por dentro de las capas internas, así que lo <b>apantallan menos</b>, siente una <b>Z<sub>ef</sub> mayor</b> y tiene menor energía. El mismo efecto explica por qué el 4s, muy penetrante, se llena antes que el 3d. → Que el s admita menos electrones (2 contra 6 del p) no explica nada: la capacidad del subnivel no entra en la carga nuclear que siente cada electrón. → Dentro de un nivel el n es el <b>mismo</b> para todos los subniveles (3s, 3p y 3d comparten n = 3): lo que cambia es l, así que n no puede ser la causa de la diferencia. → La forma esférica describe al orbital s, pero no es la causa: lo que ordena la energía es cuánta carga nuclear siente el electrón, y eso depende de cuánto penetra."},
  {st: "El <sup>12</sup>C (6 protones y 6 neutrones) es estable y el <sup>14</sup>C (6 protones y 8 neutrones) es radiactivo. ¿Cuál es la explicación correcta de cómo la relación protones/neutrones afecta la estabilidad del núcleo?",
   opts: ["La fuerza nuclear fuerte, atractiva y de muy corto alcance entre nucleones, mantiene unido el núcleo frente a la repulsión de los protones; en los núcleos livianos la relación n/p estable ronda 1, y el <sup>14</sup>C, con n/p = 1,33, tiene un exceso de neutrones que lo saca de la franja estable", "Los neutrones no tienen carga, así que cuantos más tenga un núcleo más estable es: al <sup>14</sup>C le sobra estabilidad", "Los electrones del carbono 14 son distintos de los del carbono 12, y eso lo vuelve radiactivo", "El <sup>14</sup>C es más pesado y los núcleos más pesados son siempre radiactivos"],
   c: 0,
   ex: "Dos fuerzas compiten en el núcleo: la <b>repulsión eléctrica</b> entre protones y la <b>fuerza nuclear fuerte</b>, que atrae entre nucleones a muy corto alcance y, dentro de ese alcance, es más intensa. El neutrón suma atracción sin sumar repulsión (carga 0). Por eso en los livianos la relación n/p estable ronda <b>1</b> y en los pesados crece hacia <b>1,5</b>; fuera de esa franja, por exceso de neutrones (<sup>14</sup>C, n/p = 1,33) o de protones (<sup>11</sup>C, n/p = 0,83), el núcleo es <b>inestable</b> y radiactivo. → “Cuantos más neutrones, más estable” es falso justamente por el <sup>14</sup>C: el exceso también desestabiliza. → Los electrones no participan: los isótopos <sup>12</sup>C y <sup>14</sup>C tienen los mismos 6 electrones y la misma química; lo que difiere es el núcleo. → Y no todo núcleo pesado es radiactivo: el <sup>208</sup>Pb, con 82 protones y 126 neutrones (n/p = 1,54), es estable."}

]);

// ============================================================
// SECCIÓN 4 · MAGNITUDES ATÓMICO-MOLECULARES: EL MOL
// Reveals: Ejercicio 2 del 1er Recuperatorio del 14/06/24 (textual) y
//          ejercicios 9, 11, 13 y 16 de la guía G03 de la cátedra (textuales,
//          con las claves de respuesta de la propia guía como control).
// Quizzes: elaboración propia sobre T03, G03 y los datos de CNPT del
//          parcial del 30/05/25 y del 1er recuperatorio del 14/06/24.
// Constantes y masas usadas (NA = 6,02·10^23; masas atómicas
// de tabla periódica: H 1,008 · C 12,01 · N 14,01 · O 16,00 · S 32,06 ·
// Cl 35,45 · Na 22,99 · F 19,00 · Al 26,98 · Fe 55,85 · K 39,10 · Ag 107,87).
// ============================================================

registerReveals('fiuba-quimica', '4', [

{st: "<b>Básico · De masa a moles, a átomos y al revés.</b> <b>a)</b> ¿Cuántos moles y cuántos átomos hay en 10,0 g de aluminio? <b>b)</b> ¿Qué masa tienen 0,300 mol de aluminio?",
 ans: "<b>a)</b> <b>0,371 mol</b> y <b>2,23·10<sup>23</sup> átomos</b>. <b>b)</b> <b>8,09 g</b>.",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Me dan una masa y me piden moles: hay que pasar de gramos a moles, y para eso se usa la masa molar. La del Al es 26,98 g/mol, que quiere decir que <b>1 mol de Al pesa 26,98 g</b>. → <b>Paso 2 · moles.</b> n = m / M = 10,0 g / 26,98 g/mol = <b>0,371 mol</b> (los gramos se cancelan y queda mol). → <b>Paso 3 · átomos.</b> Un mol son 6,02·10<sup>23</sup> átomos: N = 0,371 mol × 6,02·10<sup>23</sup> átomos/mol = <b>2,23·10<sup>23</sup> átomos</b>. → <b>Inciso b.</b> Ahora es al revés: m = n · M = 0,300 mol × 26,98 g/mol = 8,094 g = <b>8,09 g</b>. → <b>Control.</b> 10,0 g es menos que la masa de un mol (26,98 g), así que n tiene que dar menos de 1; y 0,300 mol es menos que un mol, así que la masa tiene que dar menos de 26,98 g. Las dos cosas se cumplen. <i>Error típico:</i> multiplicar por M cuando hay que dividir; el control de arriba lo atrapa."},

{st: "<b>Básico · Prefijos: mg, mmol y kmol.</b> <b>a)</b> Un suplemento contiene 85,0 mg de zinc. ¿Cuántos milimoles son y cuántos átomos hay? <b>b)</b> Un tanque contiene 2,40 kmol de N<sub>2</sub>. ¿Cuál es su masa en kg y cuántas moléculas tiene?",
 ans: "<b>a)</b> <b>1,30 mmol</b> y <b>7,83·10<sup>20</sup> átomos</b>. <b>b)</b> <b>67,2 kg</b> y <b>1,44·10<sup>27</sup> moléculas</b>.",
 sol: "<b>Paso 1 · primero la unidad base.</b> La masa molar y N<sub>A</sub> están en gramos y en moles, así que antes de usarlas se pasa todo a g y a mol. 85,0 mg × (1 g / 1000 mg) = <b>0,0850 g</b>. → <b>Paso 2 · moles de Zn.</b> M(Zn) = 65,38 g/mol, entonces n = 0,0850 g / 65,38 g/mol = 1,30·10<sup>-3</sup> mol. Como 1 mol = 1000 mmol: 1,30·10<sup>-3</sup> mol × 1000 mmol/mol = <b>1,30 mmol</b>. → <b>Paso 3 · átomos.</b> N = 1,30·10<sup>-3</sup> mol × 6,02·10<sup>23</sup> átomos/mol = <b>7,83·10<sup>20</sup> átomos</b>. → <b>Inciso b.</b> 2,40 kmol × 1000 mol/kmol = 2400 mol. M(N<sub>2</sub>) = 2 × 14,01 = 28,02 g/mol, entonces m = 2400 mol × 28,02 g/mol = 67 248 g, y 67 248 g × (1 kg / 1000 g) = <b>67,2 kg</b>. Moléculas: 2400 mol × 6,02·10<sup>23</sup> = <b>1,44·10<sup>27</sup> moléculas</b>. → <b>Control.</b> 85,0 mg es mucho menos que la masa de un mol de Zn (65 g), así que n tiene que ser mucho menor que 1 mol, y 1,30·10<sup>-3</sup> mol lo es; en cambio 2,40 kmol son 2400 mol, mucho más que uno. <i>Error típico:</i> mover el factor 1000 para el lado equivocado."},

{st: "<b>Básico · ¿Qué elemento es?</b> Con la tabla periódica: <b>a)</b> 1,50 mol de un elemento pesan 48,1 g. ¿Qué elemento es? <b>b)</b> 1,81·10<sup>23</sup> átomos de otro elemento pesan 8,12 g. ¿Cuál es?",
 ans: "<b>a)</b> M = <b>32,1 g/mol</b>: <b>azufre (S)</b>. <b>b)</b> M = <b>27,0 g/mol</b>: <b>aluminio (Al)</b>.",
 sol: "<b>Paso 1 · la idea.</b> La masa molar es la masa de un mol, así que M = m / n. Se calcula y se busca en la tabla el elemento cuya masa atómica coincide. → <b>Inciso a.</b> M = 48,1 g / 1,50 mol = 32,07 g/mol ≈ <b>32,1 g/mol</b>. En la tabla, el elemento con 32,06 es el <b>azufre</b>. → <b>Inciso b.</b> Acá no hay moles, hay átomos: primero se pasa a moles. n = N / N<sub>A</sub> = 1,81·10<sup>23</sup> / 6,02·10<sup>23</sup> mol<sup>-1</sup> = 0,3007 mol. Después M = 8,12 g / 0,3007 mol = 27,0 g/mol, que es el <b>aluminio</b> (26,98). → <b>Control.</b> El valor que calculás tiene que quedar a pocas décimas de uno de la tabla; si cae a mitad de camino entre dos elementos, revisá la cuenta. <i>Error típico:</i> dividir la masa por el número de átomos sin pasar antes a moles."},

{st: "<b>Intermedio · Contar átomos e iones dentro de una sal.</b> Se tienen 62,0 g de fosfato de calcio, Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub>. Calcular: <b>a)</b> los moles de unidades fórmula; <b>b)</b> el número de iones Ca<sup>2+</sup>; <b>c)</b> la masa de oxígeno que contiene.",
 ans: "<b>a)</b> <b>0,200 mol</b>. <b>b)</b> <b>3,61·10<sup>23</sup> iones Ca<sup>2+</sup></b>. <b>c)</b> <b>25,6 g de O</b>.",
 sol: "<b>Paso 1 · masa molar de la fórmula.</b> M = 3 × 40,08 + 2 × 30,97 + 8 × 16,00 = 120,24 + 61,94 + 128,00 = <b>310,18 g/mol</b>. El subíndice 2 de afuera del paréntesis multiplica al P y también a los 4 O: son 2 P y 8 O. → <b>Paso 2 · inciso a.</b> n = 62,0 g / 310,18 g/mol = <b>0,200 mol</b> de unidades fórmula. Es una sal: no hay moléculas, hay unidades fórmula. → <b>Paso 3 · inciso b.</b> Cada unidad fórmula tiene 3 Ca<sup>2+</sup>: 0,200 mol × 3 = 0,600 mol de iones, y 0,600 mol × 6,02·10<sup>23</sup> = <b>3,61·10<sup>23</sup> iones Ca<sup>2+</sup></b>. → <b>Paso 4 · inciso c.</b> Cada unidad tiene 8 átomos de O: 0,200 mol × 8 = 1,60 mol de átomos de O, y 1,60 mol × 16,00 g/mol = <b>25,6 g</b>. → <b>Control.</b> Los 25,6 g de O son menos que los 62,0 g totales, y 128 / 310,18 = 41,3 % de la sal es O: 0,413 × 62,0 g = 25,6 g. Coincide. <i>Error típico:</i> olvidarse del subíndice de afuera del paréntesis y contar 4 O en vez de 8."},

{st: "<b>Intermedio · Isótopos: promedio y abundancias.</b> <b>a)</b> El magnesio natural tiene tres isótopos: <sup>24</sup>Mg (23,985 u; 78,99 %), <sup>25</sup>Mg (24,986 u; 10,00 %) y <sup>26</sup>Mg (25,983 u; 11,01 %). Calcular su masa atómica. <b>b)</b> El boro natural tiene dos isótopos: <sup>10</sup>B (10,013 u) y <sup>11</sup>B (11,009 u), y su masa atómica es 10,81 u. Calcular la abundancia de cada uno.",
 ans: "<b>a)</b> <b>24,31 u</b>. <b>b)</b> <b>80,0 % de <sup>11</sup>B</b> y <b>20,0 % de <sup>10</sup>B</b>.",
 sol: "<b>Paso 1 · inciso a, promedio pesado.</b> Cada masa se multiplica por su fracción (el porcentaje dividido por 100) y se suma. 0,7899 × 23,985 = 18,946 · 0,1000 × 24,986 = 2,499 · 0,1101 × 25,983 = 2,861. Suma: <b>24,31 u</b>. → <b>Control.</b> Las fracciones suman 1 (78,99 + 10,00 + 11,01 = 100) y el resultado queda entre la masa menor y la mayor, más cerca de la del isótopo más abundante. → <b>Paso 2 · inciso b, al revés.</b> Dos incógnitas son dos fracciones, pero están ligadas: si la del <sup>11</sup>B es x, la del <sup>10</sup>B es 1 − x. Se plantea 10,81 = x · 11,009 + (1 − x) · 10,013. → <b>Paso 3 · despejar.</b> 10,81 = 10,013 + x · (11,009 − 10,013) → 10,81 − 10,013 = 0,996 x → 0,797 = 0,996 x → x = 0,800. → <b>Resultado.</b> <sup>11</sup>B: 80,0 %; <sup>10</sup>B: 1 − 0,800 = 20,0 %. → <b>Control.</b> 10,81 está mucho más cerca de 11 que de 10, así que el isótopo pesado tiene que ser el más abundante. <i>Error típico:</i> usar 10 y 11 en vez de las masas isotópicas, o dar dos abundancias que no suman 100 %."},

{st: "<b>Intermedio · Fórmula mínima desde masas.</b> Un óxido de fósforo contiene 3,10 g de fósforo y 4,00 g de oxígeno. Hallar su fórmula mínima.",
 ans: "<b>P<sub>2</sub>O<sub>5</sub></b>.",
 sol: "<b>Paso 1 · las masas ya están en gramos.</b> No hace falta pasar de porcentajes a gramos: se va directo a moles de átomos, porque la fórmula cuenta átomos y no gramos. P: 3,10 g / 30,97 g/mol = 0,1001 mol. O: 4,00 g / 16,00 g/mol = 0,2500 mol. → <b>Paso 2 · dividir por el menor</b> (0,1001): P = 1,000 y O = 0,2500 / 0,1001 = 2,497. → <b>Paso 3 · ¿entero?</b> 2,497 no es entero, pero está a 0,003 de 2,5, que es un ,5: se multiplica todo por 2. P = 2 y O = 4,99 ≈ 5. → <b>Resultado.</b> <b>P<sub>2</sub>O<sub>5</sub></b>. → <b>Control.</b> %P en P<sub>2</sub>O<sub>5</sub> = 61,94 / 141,94 = 43,6 %, y en la muestra 3,10 / 7,10 = 43,7 %. Coincide. <i>Error típico:</i> redondear 2,5 a 2 o a 3 y quedarse con PO<sub>2</sub> o PO<sub>3</sub>, que son otros compuestos."},

{st: "<b>Intermedio · Fórmula mínima y molecular desde porcentajes.</b> El ácido ascórbico (vitamina C) tiene 40,92 % de C, 4,58 % de H y 54,50 % de O, y su masa molar es de unos 176 g/mol. Hallar su fórmula mínima y su fórmula molecular.",
 ans: "Mínima <b>C<sub>3</sub>H<sub>4</sub>O<sub>3</sub></b>; molecular <b>C<sub>6</sub>H<sub>8</sub>O<sub>6</sub></b>.",
 sol: "<b>Paso 1 · base de 100 g.</b> Los porcentajes pasan a gramos: 40,92 g de C, 4,58 g de H y 54,50 g de O. → <b>Paso 2 · moles de átomos.</b> C: 40,92 / 12,01 = 3,407 mol · H: 4,58 / 1,008 = 4,544 mol · O: 54,50 / 16,00 = 3,406 mol. → <b>Paso 3 · dividir por el menor</b> (3,406): C = 1,000 · H = 1,334 · O = 1,000. → <b>Paso 4 · el decimal.</b> 1,334 es 4/3, no un uno medio: hay que multiplicar todo por <b>3</b>. C = 3 · H = 4 · O = 3, o sea mínima <b>C<sub>3</sub>H<sub>4</sub>O<sub>3</sub></b>. → <b>Paso 5 · molecular.</b> M<sub>mínima</sub> = 3 × 12,01 + 4 × 1,008 + 3 × 16,00 = 88,06 g/mol. n = 176 / 88,06 = 1,999, y como la masa molar viene redondeada se lo toma como <b>2</b>. Se multiplican los subíndices por 2: <b>C<sub>6</sub>H<sub>8</sub>O<sub>6</sub></b> (176,12 g/mol). → <b>Control.</b> Los porcentajes sumaban 100,00 y n dio entero. <i>Error típico:</i> redondear el 1,33 a 1 y quedarse con una fórmula que no tiene el H que corresponde."},

{st: "<b>Avanzado · Fórmula molecular de un compuesto con C, H y O por combustión.</b> La combustión completa de 1,50 g de un compuesto que contiene C, H y O produce 2,20 g de CO<sub>2</sub> y 0,900 g de H<sub>2</sub>O. Su masa molar aproximada es 90 g/mol. Hallar la fórmula mínima y la molecular.",
 ans: "Mínima <b>CH<sub>2</sub>O</b>; molecular <b>C<sub>3</sub>H<sub>6</sub>O<sub>3</sub></b>.",
 sol: "<b>Paso 1 · el C.</b> Todo el carbono de la muestra terminó en el CO<sub>2</sub>. n(CO<sub>2</sub>) = 2,20 g / 44,01 g/mol = 0,0500 mol, y cada CO<sub>2</sub> lleva un C: <b>0,0500 mol de C</b>, que pesan 0,0500 × 12,01 = 0,600 g. → <b>Paso 2 · el H.</b> Todo el hidrógeno terminó en el H<sub>2</sub>O. n(H<sub>2</sub>O) = 0,900 g / 18,02 g/mol = 0,0499 mol, y cada H<sub>2</sub>O lleva 2 H: <b>0,0999 mol de H</b>, que pesan 0,0999 × 1,008 = 0,101 g. → <b>Paso 3 · el O, por diferencia.</b> El O de los productos viene en parte del aire que alimentó la combustión, así que no se puede sacar de ahí. Lo que había en la muestra es lo que falta para llegar a 1,50 g: m(O) = 1,50 − 0,600 − 0,101 = 0,799 g, o sea 0,799 / 16,00 = <b>0,0499 mol de O</b>. → <b>Paso 4 · dividir por el menor</b> (0,0499): C = 1,00 · H = 2,00 · O = 1,00. Mínima <b>CH<sub>2</sub>O</b> (30,03 g/mol). → <b>Paso 5 · molecular.</b> n = 90 / 30,03 = 3,0 → <b>C<sub>3</sub>H<sub>6</sub>O<sub>3</sub></b> (90,08 g/mol). → <b>Control.</b> Las tres masas suman 0,600 + 0,101 + 0,799 = 1,500 g, que es la muestra. <i>Error típico:</i> sacar el O del CO<sub>2</sub> y del H<sub>2</sub>O, o no usar la masa de la muestra para la diferencia."},


{st: '<b>1er Recuperatorio · Química Básica CB040 · 14/06/24 · Ejercicio 2.</b> Enunciado textual, con las erratas de acentuación y de espaciado tal como están impresas: “<i>Se sabe que la combustión completa de un mol de combustible líquido que sólo contiene C e H, produce 220 g de CO<sub>2</sub> gaseoso y 108 g de H<sub>2</sub>O líquida.Se sabe ademas que la entalpia de combustion para dicho combustible es de -3537,06 kJ/mol.</i> <b>a)</b> <i>Con los datos de que dispone indique cual es la fórmula molecular del combustible propuesto e indique la fórmula desarrollada y el nombre de una posible sustancia que cumpla con la consigna del enunciado justificando su razonamiento. Escriba la ecuación termoquímica para el combustible.</i> <b>b)</b> <i>Si se sabe además que ΔH°<sub>f</sub> CO<sub>2</sub>(g)=−393,5 kJ/mol y ΔH°<sub>f</sub> H<sub>2</sub>O(l)=−286,0 kJ/mol, calcule la entalpia de formacion para el combustible líquido propuesto. Justifique su respuesta.</i> <b>c)</b> <i>Calcule la variación de energía interna para la combustión de 1 mol del combustible líquido a 25 C. Justifique su razonamiento</i>”',
 ans: '<b>a)</b> Fórmula molecular <b>C<sub>5</sub>H<sub>12</sub></b> (M = 72,15 g/mol). Sustancia posible: <b>n-pentano</b>, CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub>, líquido a temperatura ambiente. Ecuación termoquímica: C<sub>5</sub>H<sub>12</sub>(l) + 8 O<sub>2</sub>(g) → 5 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l), ΔH° = −3537,06 kJ/mol. → <b>b)</b> ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>, l) = <b>−146,44 kJ/mol</b>. → <b>c)</b> Δn<sub>gas</sub> = −3 → ΔU = <b>−3529,6 kJ/mol</b>.',
 sol: '<b>Ítem a · el dato que hace todo el trabajo.</b> El enunciado dice “la combustión completa de <b>un mol</b> de combustible”. Por eso los moles de producto que contás son <b>por molécula</b>: son directamente los subíndices, sin pasar por fórmula mínima ni necesitar la masa molar. → <b>Paso 1.</b> Combustión completa de un compuesto que sólo tiene C e H significa que <b>todo el C terminó en CO<sub>2</sub> y todo el H en H<sub>2</sub>O</b>: no hay otro destino. n(CO<sub>2</sub>) = 220 g ÷ 44,0 g/mol = <b>5,00 mol</b>, y como cada CO<sub>2</sub> lleva 1 C → <b>5 mol de C</b>. n(H<sub>2</sub>O) = 108 g ÷ 18,0 g/mol = <b>6,00 mol</b>, y como cada H<sub>2</sub>O lleva 2 H → <b>12 mol de H</b>. → <b>Paso 2.</b> Los subíndices son 5 y 12 → <b>C<sub>5</sub>H<sub>12</sub></b>, M = 5·12,01 + 12·1,008 = <b>72,15 g/mol</b>. → <b>Paso 3 · el control inverso, que es lo que evita entregar una fórmula errada.</b> Si 1 mol de C<sub>5</sub>H<sub>12</sub> quema completo da 5 mol de CO<sub>2</sub> y 6 mol de H<sub>2</sub>O: 5 × 44,01 = <b>220,0 g</b> ✓ y 6 × 18,02 = <b>108,1 g</b> ✓. <span class="muted">Con las masas molares completas (44,009 y 18,015) el paso 1 da 4,999 y 5,995 mol: 5 y 6 redondeando. El examen está armado con M = 44 y M = 18 exactos.</span> → <b>Paso 4 · qué sustancia concreta.</b> C<sub>5</sub>H<sub>12</sub> cumple C<sub>n</sub>H<sub>2n+2</sub> con n = 5: es un <b>alcano</b>, y tiene <b>tres isómeros</b>. El enunciado agrega una condición que no es decorativa: dice combustible <b>líquido</b>. n-pentano (hierve a ≈36 °C) y isopentano (≈28 °C) son líquidos; el <b>neopentano hierve a ≈9,5 °C, es gas</b> y queda descartado. Se responde <b>n-pentano, CH<sub>3</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub></b>, y se escribe la justificación: la fórmula admite tres isómeros y el enunciado pide líquido. → <b>Paso 5 · la ecuación termoquímica.</b> A la derecha hay 5·2 + 6·1 = 16 átomos de O → <b>8 mol de O<sub>2</sub></b>: C<sub>5</sub>H<sub>12</sub>(l) + 8 O<sub>2</sub>(g) → 5 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l), ΔH° = −3537,06 kJ/mol. Sin los estados de agregación no es termoquímica, y el agua va como <b>líquida</b>, que es lo que dice el enunciado. → <b>Ítem b</b> (es termoquímica; va acá para que el ejercicio quede cerrado): ΔH°<sub>comb</sub> = ΣΔH°<sub>f</sub>(productos) − ΣΔH°<sub>f</sub>(reactivos), con ΔH°<sub>f</sub>(O<sub>2</sub>) = 0 por ser elemento en su estado estándar → −3537,06 = [5(−393,5) + 6(−286,0)] − ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>) → ΔH°<sub>f</sub> = −3683,5 + 3537,06 = <b>−146,44 kJ/mol</b>. → <b>Ítem c:</b> ΔU = ΔH − Δn<sub>gas</sub>·R·T. Sólo cuentan las <b>especies gaseosas</b>: 5 mol de CO<sub>2</sub> salen, 8 mol de O<sub>2</sub> entran (el combustible y el agua son líquidos) → Δn = 5 − 8 = <b>−3</b>. ΔU = −3537,06 − (−3)(8,31·10<sup>-3</sup> kJ/mol·K)(298,15 K) = −3537,06 + 7,43 = <b>−3529,6 kJ/mol</b>. <span class="muted">Con R = 8,314 da −3529,62; con 8,31, −3529,63.</span><div class="trap"><div class="tr-t">Las erratas del enunciado y los tres modos de perder el ítem a</div>El original imprime “líquida.Se sabe ademas”, “entalpia de combustion”, “cual es la fórmula” y “a 25 C” sin tildes ni espacio: son erratas de tipeo del examen, no cambian nada del planteo. → <b>1 ·</b> Contestar sólo la fórmula molecular. El ítem pide <b>tres cosas</b>: fórmula molecular, fórmula desarrollada + nombre, y ecuación termoquímica. Con una de tres tenés un tercio, y el régimen exige el <b>50 % de cada ejercicio</b>. → <b>2 ·</b> Olvidar el ×2 del hidrógeno: 6 mol de H<sub>2</sub>O no son 6 mol de H, son <b>12</b>. Quien lo olvida entrega C<sub>5</sub>H<sub>6</sub>, que ni siquiera es un alcano. → <b>3 ·</b> Proponer neopentano o “pentano gaseoso”: el enunciado dice <b>líquido</b> y ahí se juega el punto de la justificación.</div>'},

{st: '<b>G03, ejercicio 11.</b> “Se sabe que la masa de 7,34·10<sup>25</sup> moléculas de XT<sub>3</sub> es de 4,15 kg y que 4,25 moles de átomos de X tienen una masa de 131,8 g. Calcular: <b>a) i)</b> La masa atómica de T, expresada en unidades de masa atómica; <b>ii)</b> La masa de un átomo de X, expresada en gramos. <b>b)</b> Identificar a los elementos X y T con sus símbolos.”',
 ans: '<b>a-i)</b> m<sub>T</sub> = <b>1,00 u</b> · <b>a-ii)</b> masa de un átomo de X = <b>5,15·10<sup>-23</sup> g</b> · <b>b)</b> <b>X = P (fósforo) y T = H (hidrógeno)</b>: el compuesto es <b>PH<sub>3</sub></b>.',
 sol: 'Es el esqueleto de conversiones recorrido <b>al revés</b>: en vez de ir de la fórmula a los gramos, vas de los gramos a la identidad del elemento. → <b>Paso 1 · la masa molar de X.</b> Te la dan casi hecha: 131,8 g corresponden a 4,25 mol de átomos → M<sub>X</sub> = 131,8 / 4,25 = <b>31,0 g/mol</b>. En la tabla periódica, 31,0 es el <b>fósforo</b> (30,96). → <b>Paso 2 · la masa de <i>un</i> átomo de X.</b> Acá es donde se cae medio curso: <b>no</b> es 31,0 g, que es la masa de un mol. Hay que dividir por N<sub>A</sub>: 31,0 g/mol ÷ 6,02·10<sup>23</sup> mol<sup>-1</sup> = <b>5,15·10<sup>-23</sup> g</b>. <span class="muted">Control de orden de magnitud: un átomo pesa 10<sup>-22</sup>-10<sup>-24</sup> g. Si te dio 10<sup>-3</sup> o 10<sup>46</sup>, multiplicaste por N<sub>A</sub> en vez de dividir.</span> → <b>Paso 3 · la masa molar del compuesto.</b> Primero número de moléculas → cantidad: n = 7,34·10<sup>25</sup> / 6,02·10<sup>23</sup> = <b>121,9 mol</b>. Y ahora M = m/n = 4150 g / 121,9 mol = <b>34,04 g/mol</b>. <span class="muted">Ojo con los 4,15 kg: pasalos a gramos antes de dividir.</span> → <b>Paso 4 · despejar T.</b> M(XT<sub>3</sub>) = M<sub>X</sub> + 3·m<sub>T</sub> → m<sub>T</sub> = (34,04 − 31,01) / 3 = <b>1,01 ≈ 1,00 u</b> → <b>hidrógeno</b>. → <b>Paso 5 · control.</b> PH<sub>3</sub> es la fosfina, y su masa molar es 30,96 + 3(1,008) = 34,0 g/mol ✓ coincide con lo calculado. Además la fórmula XT<sub>3</sub> es coherente: el P del grupo 15 forma tres enlaces simples con hidrógeno. <span class="muted">Con más cifras: 121,927 mol · 34,037 g/mol · 31,012 g/mol · 1,0083 u · 5,151·10<sup>-23</sup> g. La clave de G03 da 1,00 u, 5,15·10<sup>-23</sup> g y PH<sub>3</sub>.</span>'},

{st: '<b>G03, ejercicio 16.</b> “El volumen molar de una sustancia desconocida, C<sub>x</sub>H<sub>6</sub>O, es de 73,2 cm<sup>3</sup>/mol. Su densidad a 25,0 °C y a 1,00 atm de presión es de 0,792 g/cm<sup>3</sup>. Calcular: <b>a)</b> El número de átomos de carbono presentes en una molécula de C<sub>x</sub>H<sub>6</sub>O; <b>b)</b> El número de moléculas presentes en 50,0 mL de C<sub>x</sub>H<sub>6</sub>O.”',
 ans: '<b>a) x = 3</b> → la sustancia es C<sub>3</sub>H<sub>6</sub>O (propanona/acetona), M = 58,0 g/mol. <b>b) 4,11·10<sup>23</sup> moléculas.</b>',
 sol: '<b>Lo primero, y lo que decide el ejercicio: esto NO es un gas.</b> Te dan una <b>densidad</b> de 0,792 g/cm<sup>3</sup>, que es densidad de líquido (la de un gas anda en g/L), y un volumen molar de <b>73,2 cm<sup>3</sup>/mol</b>, tres órdenes de magnitud por debajo de los 22 400 cm<sup>3</sup>/mol de un gas. El “25 °C y 1,00 atm” está para fijar las condiciones de la densidad, <b>no</b> para que uses 22,4 L/mol. → <b>Paso 1 · sacar M del volumen molar.</b> De V<sub>M</sub> = M/ρ → <b>M = V<sub>M</sub> · ρ</b> = 73,2 cm<sup>3</sup>/mol × 0,792 g/cm<sup>3</sup> = <b>57,97 g/mol</b>. Fijate que los cm<sup>3</sup> se cancelan y queda g/mol: la coherencia dimensional te avisa si multiplicaste cuando había que dividir. → <b>Paso 2 · despejar x.</b> M = x·12,01 + 6·1,008 + 16,00 → 57,97 = 12,01x + 6,048 + 16,00 → 12,01x = 35,92 → <b>x = 2,99 ≈ 3</b>. → La fórmula es <b>C<sub>3</sub>H<sub>6</sub>O</b>, M = 58,08 g/mol: propanona (acetona), coherente con un líquido de densidad 0,79 a temperatura ambiente. → <b>Paso 3 · el ítem b, sin volver a la masa.</b> Como ya tenés el volumen molar, el camino corto es dividir directo: n = 50,0 cm<sup>3</sup> ÷ 73,2 cm<sup>3</sup>/mol = <b>0,683 mol</b> → N = 0,683 × 6,02·10<sup>23</sup> = <b>4,11·10<sup>23</sup> moléculas</b>. <span class="muted">El camino largo da lo mismo: m = ρ·V = 0,792 × 50,0 = 39,6 g → n = 39,6/58,0 = 0,683 mol. Con más cifras: M = 57,974 · x = 2,991 · n = 0,6831 · N = 4,112·10<sup>23</sup>. La clave de G03 da 3 átomos de C y 4,11·10<sup>23</sup> moléculas.</span> → <b>Y ojo con lo que pide:</b> dice “el <b>número</b> de moléculas”, así que la respuesta es 4,11·10<sup>23</sup> moléculas, no 0,683 mol. Si dijera “cantidad”, sería al revés.'},

{st: '<b>G03, ejercicio 13.</b> “Calcular cuál de los siguientes sistemas presenta menor número de átomos totales: <b>a)</b> 1,00 kg de aluminio; <b>b)</b> 7,50 mol de hierro; <b>c)</b> 1,81·10<sup>25</sup> moléculas de O<sub>3</sub>; <b>d)</b> 342 mg de sacarosa (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>).”',
 ans: 'El menor es <b>d)</b>, los 342 mg de sacarosa: <b>2,71·10<sup>22</sup> átomos totales</b>. El orden completo, de menor a mayor: d (2,71·10<sup>22</sup>) &lt; b (4,52·10<sup>24</sup>) &lt; a (2,23·10<sup>25</sup>) &lt; c (5,43·10<sup>25</sup>).',
 sol: 'El ejercicio parece de comparar, pero es de <b>llevar los cuatro sistemas a la misma unidad</b>: átomos. Cada uno entra al esqueleto por una puerta distinta, y ahí está la gracia. → <b>a) Entra por la masa.</b> n = 1000 g ÷ 26,98 g/mol = 37,06 mol de átomos de Al (el aluminio es atómico: 1 mol de Al = 1 mol de átomos) → N = 37,06 × 6,02·10<sup>23</sup> = <b>2,23·10<sup>25</sup> átomos</b>. → <b>b) Entra por la cantidad</b>, ya está en moles: 7,50 × 6,02·10<sup>23</sup> = <b>4,52·10<sup>24</sup> átomos</b>. No hay que dividir por 55,85: ese número no se usa en este ítem, sólo está para tentarte. → <b>c) Entra por el número de moléculas, y hay que multiplicar por la atomicidad</b>: cada O<sub>3</sub> tiene 3 átomos → 1,81·10<sup>25</sup> × 3 = <b>5,43·10<sup>25</sup> átomos</b>. Acá no interviene N<sub>A</sub> para nada: ya te dieron moléculas, no moles. → <b>d) Entra por la masa y arrastra la atomicidad más grande.</b> M(C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>) = 12(12,01) + 22(1,008) + 11(16,00) = <b>342,3 g/mol</b> → n = 0,342 g ÷ 342,3 = <b>9,99·10<sup>-4</sup> mol</b> (una milésima de mol: el dato está elegido para eso). Cada molécula tiene 12 + 22 + 11 = <b>45 átomos</b> → N = 9,99·10<sup>-4</sup> × 45 × 6,02·10<sup>23</sup> = <b>2,71·10<sup>22</sup> átomos</b>. <span class="muted">Con más cifras: 2,231·10<sup>25</sup> · 4,515·10<sup>24</sup> · 5,430·10<sup>25</sup> · 2,707·10<sup>22</sup>. La clave de G03 da 2,71·10<sup>22</sup>.</span> → <b>La trampa del ejercicio:</b> la sacarosa tiene 45 átomos por molécula, la atomicidad más alta de las cuatro, y aun así gana por lejos el “menor número”. La razón es la masa: 342 mg son mil veces menos materia que 1 kg. <b>La atomicidad no compensa tres órdenes de magnitud de masa</b>. Y quien resuelve de memoria, sin hacer las cuatro cuentas, elige c) o d) al azar.'},

{st: '<b>G03, ejercicio 9.</b> “Un dentífrico contiene entre sus componentes un 0,220 % de NaF (fluoruro de sodio). Se dispone de un envase que contiene 105 g de dentífrico. Determinar para el mismo: <b>a)</b> La masa de NaF contenida en el envase; <b>b)</b> La cantidad de cationes y la cantidad de aniones, expresadas en moles, presentes en 3,50 g de dentífrico; <b>c)</b> El número de aniones fluoruro (F<sup>-</sup>) presentes en el envase; <b>d)</b> El número de iones Na<sup>+</sup> presentes en 350 g de dentífrico.”',
 ans: '<b>a)</b> 0,231 g de NaF · <b>b)</b> 1,83·10<sup>-4</sup> mol de Na<sup>+</sup> y 1,83·10<sup>-4</sup> mol de F<sup>-</sup> · <b>c)</b> 3,31·10<sup>21</sup> iones F<sup>-</sup> · <b>d)</b> 1,10·10<sup>22</sup> iones Na<sup>+</sup>.',
 sol: 'Tres cosas se juegan acá: el porcentaje, la <b>relación iónica</b> de la fórmula y la diferencia entre <b>cantidad</b> y <b>número</b>. M(NaF) = 22,99 + 19,00 = <b>41,99 g/mol</b>. → <b>a)</b> El 0,220 % es %m/m: 105 g × 0,00220 = <b>0,231 g de NaF</b>. El resto del envase es pasta, no entra en ninguna cuenta. → <b>b)</b> Ojo, cambia la masa de partida: son <b>3,50 g de dentífrico</b>, no del envase. m(NaF) = 3,50 × 0,00220 = 7,70·10<sup>-3</sup> g → n = 7,70·10<sup>-3</sup> / 41,99 = <b>1,83·10<sup>-4</sup> mol de NaF</b>. Como el NaF se disocia 1:1 (una unidad fórmula aporta <b>un</b> Na<sup>+</sup> y <b>un</b> F<sup>-</sup>), hay <b>1,83·10<sup>-4</sup> mol de cationes y 1,83·10<sup>-4</sup> mol de aniones</b>. Pide “cantidad” → la respuesta va en <b>mol</b>. → <b>c)</b> Vuelve al envase: n(NaF) = 0,231 / 41,99 = 5,50·10<sup>-3</sup> mol → N(F<sup>-</sup>) = 5,50·10<sup>-3</sup> × 6,02·10<sup>23</sup> = <b>3,31·10<sup>21</sup> iones</b>. Pide “número” → la respuesta va en <b>iones</b>. → <b>d)</b> 350 g × 0,00220 = 0,770 g → n = 0,0183 mol → N = <b>1,10·10<sup>22</sup> iones Na<sup>+</sup></b>. Es exactamente 10/3 veces el ítem c porque 350 g son 10/3 de 105 g: <b>ése es el control</b>. <span class="muted">Con más cifras: 0,231 g · 1,834·10<sup>-4</sup> mol · 3,312·10<sup>21</sup> · 1,104·10<sup>22</sup>. Coincide con la clave de G03.</span> → <b>Lo conceptual que el ejercicio esconde:</b> el NaF es <b>iónico</b>. No existen “moléculas de NaF”: hay unidades fórmula en una red, y por eso el enunciado pregunta por <b>cationes y aniones</b>, no por moléculas. Es la misma distinción que G03 cobra explícitamente en el ejercicio 15c con el K<sub>2</sub>SO<sub>4</sub>.'},

{st: "<b>Química General (CB103) · Intermedio · Proporciones múltiples.</b> Dos óxidos de cobre tienen 88,8 % de Cu (óxido A) y 79,9 % de Cu (óxido B). <b>a)</b> Calcular los gramos de oxígeno que se combinan con 1 g de cobre en cada uno y comprobar que cumplen la ley de las proporciones múltiples. <b>b)</b> Hallar la fórmula mínima de cada óxido.",
 ans: "<b>a)</b> A: <b>0,126 g de O por g de Cu</b>; B: <b>0,252 g</b>; relación <b>1 : 2</b>. <b>b)</b> A: <b>Cu<sub>2</sub>O</b>; B: <b>CuO</b>.",
 sol: "<b>Paso 1 · el O de cada uno.</b> Los porcentajes dan 100 g de óxido. A: 100 − 88,8 = 11,2 g de O. B: 100 − 79,9 = 20,1 g de O. → <b>Paso 2 · por gramo de Cu.</b> A: 11,2 / 88,8 = <b>0,126 g O/g Cu</b>. B: 20,1 / 79,9 = <b>0,252 g O/g Cu</b>. → <b>Paso 3 · la relación.</b> 0,252 / 0,126 ≈ 2,0: con la misma masa de cobre, B tiene el doble de oxígeno que A. Es una relación de enteros chicos (1 : 2), como pide la ley. → <b>Paso 4 · fórmulas.</b> A: Cu = 88,8 / 63,55 = 1,397 mol y O = 11,2 / 16,00 = 0,700 mol; dividido por el menor, Cu = 2,00 y O = 1,00: <b>Cu<sub>2</sub>O</b>. B: Cu = 79,9 / 63,55 = 1,257 mol y O = 20,1 / 16,00 = 1,256 mol; dividido por el menor, 1,00 y 1,00: <b>CuO</b>. → <b>Control.</b> Con Cu<sub>2</sub>O hay 1 átomo de O cada 2 de Cu y con CuO hay 1 cada 1: el doble de O por átomo de cobre, que es la relación 1 : 2 del inciso a. <i>Error típico:</i> comparar los porcentajes de oxígeno (11,2 y 20,1) directamente: sólo sirve compararlos con la misma masa del otro elemento."}

]);

registerExercises('fiuba-quimica', '4', [

{st: 'La tabla del ejercicio 12 de G03 te hace completar, para el tetracloruro de carbono (CCl<sub>4</sub>), tres casilleros distintos: masa molecular en <b>u</b>, masa molecular en <b>g</b> y masa molar en <b>g/mol</b>. ¿Cuál es la terna correcta?',
 opts: ['153,8 u &nbsp;·&nbsp; 153,8 g &nbsp;·&nbsp; 153,8 g/mol',
        '153,8 u &nbsp;·&nbsp; 2,56·10<sup>-22</sup> g &nbsp;·&nbsp; 153,8 g/mol',
        '153,8 u &nbsp;·&nbsp; 2,56·10<sup>-22</sup> g &nbsp;·&nbsp; 2,56·10<sup>-22</sup> g/mol',
        '12,01 u &nbsp;·&nbsp; 2,56·10<sup>-22</sup> g &nbsp;·&nbsp; 153,8 g/mol'],
 c: 1,
 ex: "M(CCl<sub>4</sub>) = 12,01 + 4(35,45) = <b>153,81</b>. Ese número vive en dos escalas: <b>153,8 u es la masa de UNA molécula</b> y <b>153,8 g/mol es la masa de UN MOL</b>. La columna del medio pide la masa de una molécula pasada a gramos, que es dividir por N<sub>A</sub>: 153,81 ÷ 6,02·10<sup>23</sup> = <b>2,56·10<sup>-22</sup> g</b> (con más cifras: 2,555·10<sup>-22</sup>). → <b>La terna con 153,8 en las tres columnas falla</b> porque escribe 153,8 g como masa de una molécula: eso pesaría más de un décimo de kilo por molécula, absurdo por 23 órdenes de magnitud. Es el error de creer que “masa molecular en gramos” y “masa molar” son lo mismo. → <b>La que repite 2,56·10<sup>-22</sup> en vez de 153,8 g/mol falla</b> al revés: pone 2,56·10<sup>-22</sup> g/mol como masa molar, o sea que un mol (seiscientos mil trillones de moléculas) pesaría lo mismo que una sola. Se olvidó de multiplicar por N<sub>A</sub>: M = (masa de una molécula) · N<sub>A</sub>. → <b>La que empieza con 12,01 u</b> confunde la masa atómica del carbono con la masa molecular del compuesto: se olvidó de sumar los cuatro cloros, que aportan 141,8 de los 153,8."},

{st: 'Un enunciado te da <b>3,00 mol de un gas ideal a 2,00 atm y 127 °C</b> y te pide el volumen. ¿Cuánto ocupa?',
 opts: ['67,2 L', '98,6 L', '15,6 L', '49,3 L'], c: 3,
 ex: 'No es CNPT, así que <b>22,4 L/mol no sirve</b>: hay que ir a la ecuación de estado. V = nRT/P = 3,00 mol × 0,0821 L·atm/mol·K × 400,15 K ÷ 2,00 atm = <b>49,3 L</b> (con más cifras: 49,28). Fijate la coherencia dimensional: R en L·atm/mol·K exige <b>atm</b> y devuelve <b>litros</b>; si hubieras usado 8,31 J/mol·K con atm, el número no significaría nada. → <b>67,2 L</b> es 3,00 × 22,4: aplicar el volumen molar de CNPT a un gas que está al doble de presión y 127 grados más arriba. Es el error más caro de la unidad. → <b>98,6 L</b> es nRT sin dividir por la presión: se olvidó la P, y por eso da justo el doble del valor correcto. → <b>15,6 L</b> es haber puesto <b>127 en vez de 400,15</b>: temperatura en grados Celsius dentro de la ecuación de estado. En cualquier fórmula que traiga R, <b>T va en kelvin</b>: T(K) = t(°C) + 273,15.'},

{st: '¿En cuál de estos cuatro casos podés dividir directamente por <b>22,4 L/mol</b> para obtener los moles?',
 opts: ['5,00 L de O<sub>2</sub> medidos a 25 °C y 1 atm',
        '5,00 L de CO<sub>2</sub> medidos en CNPT',
        '5,00 L de N<sub>2</sub> medidos a 0 °C y 2 atm',
        '5,00 mL de etanol líquido a 0 °C y 1 atm'],
 c: 1,
 ex: '22,4 L/mol es V<sub>M</sub> = RT/P evaluado en <b>una sola condición</b>: gas, 0 °C y 1 atm. Las tres cosas juntas. El caso correcto es el único que dice explícitamente <b>CNPT</b>, que es como la cátedra abrevia esas condiciones (aparece así en el 1er recuperatorio del 14/06/24 y en el parcial del 30/05/25). → <b>25 °C y 1 atm</b>: la presión está bien pero la temperatura no. V<sub>M</sub> = 0,0821 × 298,15 / 1 = <b>24,5 L/mol</b>. Usar 22,4 te sobrestima los moles en más de un 9 %, y ese error se arrastra a todos los ítems que siguen. → <b>0 °C y 2 atm</b>: la temperatura está bien pero la presión es el doble, así que V<sub>M</sub> = 22,4/2 = <b>11,2 L/mol</b> y los moles te dan la mitad de lo que deberían. → <b>Etanol líquido</b>: 22,4 L/mol no se le aplica a un líquido en ninguna condición. Para líquidos y sólidos el volumen molar se saca de la densidad, V<sub>M</sub> = M/ρ, y depende de qué sustancia sea.'},

{st: 'La densidad del metanol (CH<sub>3</sub>OH) a 20,0 °C y 1,00 atm es 0,793 g·cm<sup>-3</sup> <span class="muted">(G03, ejercicio 14)</span>. ¿Cuál es su volumen molar en esas condiciones?',
 opts: ['40,4 cm<sup>3</sup>/mol', '22,4 L/mol', '25,4 cm<sup>3</sup>/mol', '24,5 L/mol'],
 c: 0,
 ex: 'Metanol a 20 °C es <b>líquido</b>, así que el volumen molar sale de la densidad: V<sub>M</sub> = M/ρ. M(CH<sub>3</sub>OH) = 12,01 + 4(1,008) + 16,00 = 32,04 g/mol → V<sub>M</sub> = 32,04 ÷ 0,793 = <b>40,4 cm<sup>3</sup>/mol</b> (con más cifras: 40,41; la clave de G03 da 40,4). Las unidades te lo confirman: (g/mol) ÷ (g/cm<sup>3</sup>) = cm<sup>3</sup>/mol. → <b>22,4 L/mol</b> es tratar un líquido como gas en CNPT, y además ni siquiera es CNPT (dice 20 °C). Sería decir que un mol de metanol ocupa 22 litros: <b>555 veces</b> el volumen real. → <b>24,5 L/mol</b> es el volumen molar de un gas a 25 °C y 1 atm: mismo error de estado de agregación, con la temperatura además cambiada. → <b>25,4 cm<sup>3</sup>/mol</b> es M·ρ en vez de M/ρ (32,04 × 0,793 = 25,41). Multiplicar en lugar de dividir: si controlás las unidades, ese producto te da g<sup>2</sup>/(mol·cm<sup>3</sup>), que no es un volumen.'},

{st: 'A la <b>misma presión y la misma temperatura</b>, comparás 1,00 mol de He (M = 4,00 g/mol) con 1,00 mol de SO<sub>2</sub> (M = 64,1 g/mol), los dos gaseosos. ¿Qué pasa con sus volúmenes?',
 opts: ['El SO<sub>2</sub> ocupa unas 16 veces más, porque su masa molar es 16 veces mayor',
        'El He ocupa más, porque al ser más liviano se expande',
        'No se puede saber sin conocer la densidad de cada gas',
        'Ocupan el mismo volumen: el volumen molar de un gas no depende de qué gas es, sólo de P y T'],
 c: 3,
 ex: "De la ecuación de estado con n = 1: <b>V<sub>M</sub> = R·T/P</b>. En esa expresión <b>no aparece la identidad del gas</b>: ni la masa molar, ni el tamaño de la molécula, ni la polaridad. A P y T fijas, un mol de cualquier gas ocupa lo mismo: en CNPT, 22,4 L, sea He, SO<sub>2</sub> o CO<sub>2</sub>. → <b>Las dos que le dan más volumen a uno de los gases (el SO<sub>2</sub> o el He)</b> confunden <b>masa</b> con <b>volumen</b>. Los dos globos ocupan lo mismo, pero el de SO<sub>2</sub> pesa 64,1 g y el de He 4,00 g: lo que cambia es la <b>densidad</b> (ρ = M/V<sub>M</sub>), no el volumen. De hecho ésa es la relación que se usa para identificar un gas a partir de su densidad. → <b>La que dice que no se puede saber sin la densidad</b> tiene la implicación al revés: la densidad no es un dato que haga falta, es un <b>resultado</b> que se calcula de M y V<sub>M</sub>. → Cuidado con generalizarlo a líquidos y sólidos: ahí V<sub>M</sub> = M/ρ y <b>sí</b> depende de la sustancia (metanol 40,4 cm<sup>3</sup>/mol, mentol 176 cm<sup>3</sup>/mol)."},

{st: 'G03 pide, para <b>46,0 g de sodio</b>, “la cantidad de átomos, expresada en moles, <b>y</b> el número de átomos presentes”. ¿Cuál es el par correcto?',
 opts: ['2,00 mol y 2,00 mol de átomos',
        '46,0 mol y 2,77·10<sup>25</sup> átomos',
        '1,20·10<sup>24</sup> mol y 2,00 átomos',
        '2,00 mol y 1,20·10<sup>24</sup> átomos'],
 c: 3,
 ex: "M(Na) = 22,99 g/mol → n = 46,0/22,99 = <b>2,00 mol</b> (cantidad) → N = 2,00 × 6,02·10<sup>23</sup> = <b>1,20·10<sup>24</sup> átomos</b> (número). Con más cifras: 2,0009 mol y 1,205·10<sup>24</sup>. → T03 le dedica una diapositiva entera titulada “¡IMPORTANTE!” a esto: <b>cantidad</b> se expresa en <b>mol</b>, <b>número</b> se expresa en <b>átomos, moléculas o iones</b>. Son dos respuestas distintas, no una repetida. → <b>La de 2,00 mol y 2,00 mol de átomos</b> contesta lo mismo dos veces y deja medio ítem sin hacer; en un examen que exige el 50 % de cada ejercicio, eso se paga. → <b>La de 46,0 mol</b> se saltea la división por la masa molar y usa los gramos como si fueran moles: 46,0 no es la cantidad, es la masa. → <b>La de 1,20·10<sup>24</sup> mol y 2,00 átomos</b> tiene los dos valores intercambiados y las unidades cruzadas: “1,20·10<sup>24</sup> mol” de sodio pesarían unos 2,8·10<sup>22</sup> kg, más de un tercio de la masa de la Luna."},

{st: '¿Cuántos <b>átomos de oxígeno</b> hay en 2,00 mol de sulfato de aluminio, Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>?',
 opts: ['1,20·10<sup>24</sup>', '4,82·10<sup>24</sup>', '24 átomos', '1,44·10<sup>25</sup>'], c: 3,
 ex: 'El paso que se olvida es el de la <b>atomicidad</b>, y no está en ninguna fórmula: sale de leer la fórmula química. El paréntesis con subíndice 3 multiplica todo lo de adentro → cada unidad fórmula tiene <b>4 × 3 = 12 átomos de O</b>. Entonces 2,00 mol × 12 = <b>24,0 mol de átomos de O</b> → N = 24,0 × 6,02·10<sup>23</sup> = <b>1,44·10<sup>25</sup> átomos</b> (con más cifras: 1,445·10<sup>25</sup>). → <b>1,20·10<sup>24</sup></b> es 2,00 × N<sub>A</sub>: contó unidades fórmula y las llamó átomos de oxígeno, olvidando la atomicidad por completo. → <b>4,82·10<sup>24</sup></b> es 2,00 × 4 × N<sub>A</sub>: leyó el SO<sub>4</sub> pero <b>ignoró el subíndice 3 de afuera del paréntesis</b>. Es el error específico de las fórmulas con paréntesis, y aparece igual en Ca(HCO<sub>3</sub>)<sub>2</sub> o Ca(OH)<sub>2</sub>. → <b>24 átomos</b> confunde moles con partículas: 24 es la cantidad en <b>mol</b>, y le falta el ×N<sub>A</sub> para ser un número de átomos.'},

{st: 'Un compuesto tiene fórmula mínima <b>CH<sub>2</sub></b> y masa molar <b>56 g/mol</b>. ¿Cuál es su fórmula molecular?',
 opts: ['CH<sub>2</sub>', 'C<sub>2</sub>H<sub>4</sub>', 'C<sub>4</sub>H<sub>8</sub>', 'C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>'],
 c: 2,
 ex: 'La molecular es (mínima)<sub>n</sub> con <b>n = M / M<sub>mínima</sub></b>. M(CH<sub>2</sub>) = 12,01 + 2(1,008) = <b>14,03 g/mol</b> → n = 56 / 14,03 = <b>3,99 ≈ 4</b> → multiplicás <b>todos</b> los subíndices por 4 → <b>C<sub>4</sub>H<sub>8</sub></b>, M = 56,1 g/mol ✓. → <b>CH<sub>2</sub></b> es contestar la mínima cuando te piden la molecular: pesa 14, un cuarto de lo que dice el enunciado, y ni siquiera existe como molécula estable. → <b>C<sub>2</sub>H<sub>4</sub></b> es n = 2, que corresponde a M = 28: se calculó mal el cociente o se lo redondeó por lo bajo. → <b>C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></b> agrega un oxígeno que no estaba en la mínima. Nunca aparecen elementos nuevos en el paso mínima → molecular: n multiplica los subíndices, no cambia el elenco de elementos. → El control final es siempre el mismo: recalculá M con la fórmula que entregaste y comparala con el dato.'},

{st: 'Una sustancia contiene <b>92,3 % de C y 7,7 % de H</b> en masa. ¿Cuál es su <b>fórmula mínima</b>?',
 opts: ['CH', 'CH<sub>2</sub>', 'C<sub>6</sub>H<sub>6</sub>', 'C<sub>2</sub>H<sub>2</sub>'],
 c: 0,
 ex: 'Tomás <b>100 g</b> para leer los porcentajes como gramos → 92,3 g C ÷ 12,01 = <b>7,69 mol</b> y 7,7 g H ÷ 1,008 = <b>7,64 mol</b> → dividís por el menor: C = 1,00 y H = 0,99 ≈ 1 → <b>CH</b> (relación H/C = 0,994). → <b>C<sub>6</sub>H<sub>6</sub></b> es la fórmula <b>molecular</b> del benceno, que efectivamente tiene esa composición, pero para llegar a ella hace falta el dato adicional de la masa molar (78 g/mol → n = 78/13,02 = 5,99 ≈ 6). El enunciado no la da, y además pide <b>mínima</b>. Leer “mínima” donde dice “molecular” o al revés es la manera más barata de perder el ítem entero. → <b>C<sub>2</sub>H<sub>2</sub></b> (acetileno) tiene la misma composición centesimal, pero tampoco es la mínima: es otra molecular posible. Todas las moleculares de la familia comparten la mínima CH. → <b>CH<sub>2</sub></b> corresponde a 85,6 % de C: redondeó 0,99 a 2, o se equivocó de división.'},

{st: 'La combustión completa de <b>1 mol</b> de un hidrocarburo produce 132 g de CO<sub>2</sub> y 72 g de H<sub>2</sub>O. ¿Cuál es su fórmula molecular?',
 opts: ['C<sub>3</sub>H<sub>4</sub>', 'C<sub>3</sub>H<sub>8</sub>', 'C<sub>3</sub>H<sub>8</sub>O', 'No se puede: falta la masa molar del hidrocarburo'],
 c: 1,
 ex: "Combustión completa de algo que sólo tiene C e H → <b>todo el C está en el CO<sub>2</sub> y todo el H en el H<sub>2</sub>O</b>. n(CO<sub>2</sub>) = 132/44,0 = <b>3,00 mol</b> → 3 mol de C. n(H<sub>2</sub>O) = 72/18,0 = <b>4,00 mol</b> → como cada molécula de agua lleva <b>dos</b> H, son <b>8 mol de H</b>. Como todo sale de <b>1 mol</b> de combustible, esos moles <b>son los subíndices</b> → <b>C<sub>3</sub>H<sub>8</sub></b>, el propano, M = 44,1 g/mol. Control inverso: 3 × 44,01 = 132,0 g ✓ y 4 × 18,02 = 72,1 g ✓. → <b>C<sub>3</sub>H<sub>4</sub></b> es el error clásico: tomó los 4 mol de H<sub>2</sub>O como 4 mol de H y se comió el factor 2. → <b>C<sub>3</sub>H<sub>8</sub>O</b> le mete un oxígeno de la nada: el enunciado dice <b>hidrocarburo</b>, y además el O de los productos vino del O<sub>2</sub> del aire, no del combustible. Si el compuesto tuviera oxígeno, habría que calcularlo por diferencia de masas, y para eso te tendrían que dar la masa de la muestra. → <b>La que dice que no se puede</b> sería correcta si el enunciado hablara de <i>una muestra</i> de masa cualquiera: ahí sólo llegás a la mínima. Pero dice <b>1 mol</b>, y ese dato reemplaza a la masa molar. Es exactamente la lectura que decide el Ejercicio 2 del 1er recuperatorio del 14/06/24."},

{st: 'La combustión completa de una <b>muestra de 5,60 g</b> de un hidrocarburo produce 17,6 g de CO<sub>2</sub> y 7,2 g de H<sub>2</sub>O. No te dan la masa molar. ¿Qué podés determinar?',
 opts: ['Sólo la fórmula mínima, CH<sub>2</sub>: la molecular podría ser C<sub>2</sub>H<sub>4</sub>, C<sub>3</sub>H<sub>6</sub>, C<sub>4</sub>H<sub>8</sub>…',
        'La fórmula molecular, que es CH<sub>2</sub>',
        'La fórmula molecular, que es C<sub>2</sub>H<sub>4</sub>, porque es el hidrocarburo más simple con esa proporción',
        'Nada: para cualquier fórmula hace falta conocer la densidad del gas'],
 c: 0,
 ex: "n(C) = 17,6/44,0 = <b>0,400 mol</b> → n(H) = 2 × 7,2/18,0 = <b>0,800 mol</b> → relación C:H = 0,400 : 0,800 = <b>1 : 2</b> → fórmula mínima <b>CH<sub>2</sub></b>. Control de masa: 0,400(12,01) + 0,800(1,008) = <b>5,61 g</b>, que cierra con los 5,60 g de la muestra, y de paso confirma que no hay oxígeno en el compuesto. → Pero <b>una proporción no fija una molécula</b>: C<sub>2</sub>H<sub>4</sub> (28,1), C<sub>3</sub>H<sub>6</sub> (42,1) y C<sub>4</sub>H<sub>8</sub> (56,1) tienen todos la misma composición centesimal. Para elegir entre ellas hace falta M, y sin M el ejercicio termina en la mínima. → <b>La que dice que la molecular es CH<sub>2</sub></b> confunde mínima con molecular: CH<sub>2</sub> no es una molécula estable, es una proporción. → <b>La que dice que la molecular es C<sub>2</sub>H<sub>4</sub></b> inventa un criterio: “el más simple” no es un argumento químico, y de hecho el compuesto podría ser cualquiera de los tres. → <b>La que dice que no se puede determinar nada</b> exagera: la mínima <b>sí</b> se determina, y además la densidad no es el único camino a M (también sirven la masa molar dada, un descenso crioscópico o, como en el examen del 14/06/24, que el enunciado diga “1 mol”). → <b>La diferencia con el quiz anterior es una sola palabra:</b> “un mol” versus “una muestra de 5,60 g”."},

{st: 'Calculás la composición centesimal del nitrato de amonio, NH<sub>4</sub>NO<sub>3</sub> (M = 80,05 g/mol). ¿Cuál es el porcentaje de <b>nitrógeno</b>?',
 opts: ["35,0 %", "17,5 %", "5,04 %", "60,0 %"],
 c: 0,
 ex: 'El nitrato de amonio tiene <b>dos</b> nitrógenos: uno en el catión NH<sub>4</sub><sup>+</sup> y otro en el anión NO<sub>3</sub><sup>-</sup>. %N = 2(14,01)/80,05 × 100 = <b>35,0 %</b>. → <b>17,5 %</b> es contar un solo N: exactamente la mitad. Es el error de leer la fórmula por partes en vez de contar los átomos totales, y es el motivo por el que este fertilizante se vende justamente por su alto contenido de N. → <b>5,04 %</b> es el porcentaje de <b>hidrógeno</b>, 4(1,008)/80,05: se equivocó de elemento. → <b>60,0 %</b> es aproximadamente el de <b>oxígeno</b>, 3(16,00)/80,05 = 59,96 %. → <b>El control que no se saltea nunca:</b> los porcentajes tienen que sumar 100. Acá 35,0 + 5,04 + 59,96 = 100,0 ✓. Si no te da 100 (±0,1 por redondeo), erraste una masa atómica o una atomicidad, y conviene encontrarlo antes de seguir.'},

{st: 'Un gas desconocido tiene una densidad de <b>1,25 g/L en CNPT</b>. ¿Cuál es su masa molar?',
 opts: ['1,25 g/mol', '28,0 g/mol', '17,9 g/mol', '22,4 g/mol'], c: 1,
 ex: 'En CNPT, un mol ocupa 22,4 L, así que la masa de ese mol es <b>M = ρ · V<sub>M</sub></b> = 1,25 g/L × 22,4 L/mol = <b>28,0 g/mol</b>. Los litros se cancelan y queda g/mol: la coherencia dimensional decide la operación. Con 28,0 el candidato es N<sub>2</sub> (28,02) o CO (28,01). → <b>17,9 g/mol</b> es 22,4/1,25: dividió cuando había que multiplicar. Las unidades lo delatan, porque eso da L<sup>2</sup>/(mol·g), que no es una masa molar. → <b>1,25 g/mol</b> confunde densidad con masa molar y se olvida del volumen molar: 1,25 g/mol sería casi hidrógeno. → <b>22,4 g/mol</b> copia el volumen molar como si fuera una masa: es la misma cifra pero es un volumen, no una masa. → Esta relación es la misma de siempre leída al revés, V<sub>M</sub> = M/ρ → M = ρ·V<sub>M</sub>, y vale para líquidos igual: sólo cambia que ahí V<sub>M</sub> se mide, no se saca de P y T.'},

{st: 'Haciendo una fórmula mínima, después de dividir por el menor te queda <b>C = 1,00 · H = 1,33 · O = 1,00</b>. ¿Cómo seguís?',
 opts: ['Redondeás el 1,33 a 1 → CHO', 'Multiplicás los tres por 2 → C<sub>2</sub>H<sub>3</sub>O<sub>2</sub>', 'Multiplicás los tres por 3 → C<sub>3</sub>H<sub>4</sub>O<sub>3</sub>', 'Dividís todo por 1,33 para que el H valga 1'], c: 2,
 ex: '1,33 es <b>4/3</b>, no “casi 1”. El paso 4 del procedimiento dice: multiplicá <b>todos</b> los subíndices por el entero más chico que los vuelva enteros → 1,33 × 3 = 3,99 ≈ <b>4</b> → <b>C<sub>3</sub>H<sub>4</sub>O<sub>3</sub></b>. → La tabla mental que conviene tener: <b>,5 → ×2 · ,33 o ,67 → ×3 · ,25 o ,75 → ×4</b>. → <b>Redondear a 1</b> te cambia la fórmula por un factor 3 en el hidrógeno y arruina todo lo que venga después (masa molar, ecuación balanceada, porcentajes). La tolerancia razonable es <b>0,05</b>: 1,98 es 2 y 2,97 es 3, pero 1,33 no es 1 ni de casualidad. → <b>×2</b> deja 2,66 en el hidrógeno, que sigue sin ser entero: no resolvió nada. → <b>Dividir por 1,33</b> rompe la regla básica del método: se divide por el <b>menor</b> de los cocientes, no por uno cualquiera, y hacerlo por 1,33 deja al C y al O en 0,75, que es peor. → Y si el problema aparece recién en el paso final (n = M/M<sub>mínima</sub> te da 2,4 en vez de un entero), el error está <b>antes</b>: revisá la masa molar o los porcentajes, no redondees a 2.'},

{st: 'Tenés <b>25,0 g de CO<sub>2</sub></b> y te preguntan el volumen que ocupan <b>en CNPT</b>. ¿Cuál es?',
 opts: ['12,7 L', '560 L', '13,9 L', '22,4 L'], c: 0,
 ex: 'Es la conversión encadenada completa, y <b>todo pasa por el mol</b>: masa → moles → volumen. M(CO<sub>2</sub>) = 44,01 g/mol → n = 25,0/44,01 = <b>0,568 mol</b> → V = n × V<sub>M</sub> = 0,568 × 22,4 = <b>12,7 L</b> (con más cifras: 12,72). → <b>560 L</b> es 25,0 × 22,4: multiplicó los <b>gramos</b> por el volumen molar, saltándose la división por M. El volumen molar multiplica <b>moles</b>, no gramos, y el resultado es un absurdo de veinte veces. → <b>13,9 L</b> usa 24,5 L/mol, el volumen molar a 25 °C y 1 atm: es el error simétrico del que usa 22,4 fuera de CNPT, y acá el enunciado <b>sí</b> dice CNPT. → <b>22,4 L</b> es contestar el volumen molar sin hacer ninguna cuenta: sería el volumen de <b>un mol</b>, o sea de 44,0 g, y vos tenés 25,0. → <b>Control de orden de magnitud:</b> 25 g de CO<sub>2</sub> son un poco más de medio mol, así que el volumen tiene que ser un poco más de la mitad de 22,4. Doce litros y pico cierra; 560 no.'},
  {st: "Una sustancia tiene una masa molar de 119 g/mol (G03, ejercicio 8). ¿Cuál es la masa, en gramos, de 3,01·10<sup>10</sup> moléculas?",
   opts: ["3,58·10<sup>12</sup> g", "1,98·10<sup>-22</sup> g", "5,95·10<sup>-12</sup> g", "3,95·10<sup>-9</sup> g"],
   c: 2,
   ex: "Masa de N moléculas = <b>N · M / N<sub>A</sub></b> = 3,01·10<sup>10</sup> · 119 / 6,02·10<sup>23</sup> = <b>5,95·10<sup>-12</sup> g</b>. Se llega igual en dos pasos: una molécula pesa 119 / 6,02·10<sup>23</sup> = 1,98·10<sup>-22</sup> g, y 3,01·10<sup>10</sup> de ellas pesan 5,95·10<sup>-12</sup> g. → 3,58·10<sup>12</sup> g multiplica la masa molar por el número de moléculas, como si cada molécula pesara 119 g: falta dividir por N<sub>A</sub>. → 1,98·10<sup>-22</sup> g es la masa de <b>una</b> molécula (M / N<sub>A</sub>), no de 3,01·10<sup>10</sup>. → 3,95·10<sup>-9</sup> g divide la masa molar por el número de moléculas del enunciado en vez de por N<sub>A</sub>: mezcla dos números que no tienen nada que ver. → Control de orden de magnitud: una molécula pesa del orden de 10<sup>-22</sup> g, y 10<sup>10</sup> moléculas, del orden de 10<sup>-12</sup> g."},
  {st: "Una sustancia tiene 5,9 % de H y 94,1 % de O en masa, y su masa molar es 34,0 g/mol. ¿Cuáles son su fórmula mínima y su fórmula molecular?",
   opts: ["Mínima HO y molecular HO: la masa molar confirma la fórmula mínima", "Mínima H<sub>2</sub>O<sub>2</sub> y molecular H<sub>2</sub>O<sub>2</sub>, porque 2 y 2 no tienen divisor común", "Mínima HO y molecular H<sub>2</sub>O<sub>2</sub> (peróxido de hidrógeno)", "Mínima H<sub>6</sub>O<sub>94</sub>, porque los porcentajes se usan directamente como subíndices"],
   c: 2,
   ex: "En 100 g: 5,9 g H ÷ 1,008 = <b>5,85 mol</b> y 94,1 g O ÷ 16,00 = <b>5,88 mol</b> → dividido por el menor, 1,00 : 1,00 → fórmula mínima <b>HO</b>, con M<sub>mínima</sub> = 17,01 g/mol. n = 34,0 / 17,01 = <b>2,00</b> → molecular <b>H<sub>2</sub>O<sub>2</sub></b>, el peróxido de hidrógeno. Es un ejemplo inorgánico en que la molecular difiere de la mínima, como pide la conceptual 10. → Quedarse con HO ignora la masa molar: 34,0 g/mol es el doble de lo que pesa HO, así que hay que multiplicar por 2. → H<sub>2</sub>O<sub>2</sub> no es una fórmula mínima: 2 y 2 sí tienen divisor común, el 2, y la mínima es HO. → H<sub>6</sub>O<sub>94</sub> usa los gramos de 100 g como si fueran átomos: hay que dividir cada masa por su masa atómica para pasar a moles de átomos antes de armar la relación."},

{st: "¿Cuántas cifras significativas tiene la medida 0,0500 g?",
 opts: ["1", "2", "3", "5"], c: 2,
 ex: "Son 3: el 5 y los dos ceros que vienen después de él, porque un cero final con coma indica que se midió hasta esa cifra. Los ceros de la izquierda sólo fijan la posición de la coma y no cuentan. Decir 1 es descartar los ceros finales, que sí valen. Decir 2 es contar uno solo de ellos. Decir 5 es contar también los ceros de la izquierda."},

{st: "Una balanza informa 12,11 g, otra 0,023 g y una tercera 1,5 g. ¿Cuánto da la suma, con las cifras significativas correctas?",
 opts: ["13,633 g", "13,6 g", "13,63 g", "14 g"], c: 1,
 ex: "Al sumar manda el dato con menos decimales: 1,5 tiene uno solo, así que el resultado se da con un decimal: 13,633 se redondea a 13,6 g. Dejar 13,633 g es conservar decimales que el dato de 1,5 g no garantiza. Dejar 13,63 g es quedarse con dos decimales, los de 12,11, que el dato de 1,5 g no sostiene. Dar 14 g es contar cifras significativas totales, regla que vale para multiplicar y dividir pero no para sumar."},

{st: "La densidad del aluminio es 2,70 g/cm<sup>3</sup>. ¿Cuánto vale en kg/m<sup>3</sup>?",
 opts: ["2,70·10<sup>-3</sup> kg/m<sup>3</sup>", "0,270 kg/m<sup>3</sup>", "2,70·10<sup>6</sup> kg/m<sup>3</sup>", "2,70·10<sup>3</sup> kg/m<sup>3</sup>"], c: 3,
 ex: "2,70 g/cm<sup>3</sup> × (1 kg / 1000 g) × (100 cm / 1 m)<sup>3</sup> = 2,70·10<sup>-3</sup> × 10<sup>6</sup> = 2,70·10<sup>3</sup> kg/m<sup>3</sup>: el g pasa a kg (÷ 1000) y el cm<sup>3</sup> pasa a m<sup>3</sup> (× 10<sup>6</sup>, el cubo de 100). El 2,70·10<sup>-3</sup> sale de convertir sólo la masa y olvidar el volumen. El 0,270 sale de usar 100 en vez de 100<sup>3</sup> para el volumen. El 2,70·10<sup>6</sup> sale de convertir sólo el volumen y olvidar la masa."},

{st: "Una presión de 0,500 atm, ¿cuánto vale en mmHg y en Pa?",
 opts: ["380 mmHg y 5,07·10<sup>4</sup> Pa", "6,58·10<sup>-4</sup> mmHg y 4,93·10<sup>-6</sup> Pa", "380 mmHg y 50,7 Pa", "380 mmHg y 5,07·10<sup>7</sup> Pa"], c: 0,
 ex: "Se multiplica por la equivalencia de 1 atm: 0,500 × 760 = 380 mmHg y 0,500 × 101 325 = 5,07·10<sup>4</sup> Pa (50 662,5 Pa). La opción de 6,58·10<sup>-4</sup> y 4,93·10<sup>-6</sup> divide por las equivalencias en vez de multiplicar. La de 50,7 Pa es el valor en kPa, no en Pa: falta el factor 1000. La de 5,07·10<sup>7</sup> Pa multiplica por 1000 de más, como si 1 atm fueran 101 325 kPa."}

]);

registerReveals('fiuba-quimica', '5', [

{st: "<b>Básico · Tipo de unión con la tabla.</b> Con la tabla de electronegatividades de la sección, decidí el tipo de unión entre cada par de átomos: a) Mg y O; b) H y Br; c) Br y Br; d) Fe y Ni; e) Al y Cl.",
 ans: "a) <b>iónica</b>; b) <b>covalente polar</b>; c) <b>covalente no polar</b>; d) <b>metálica</b>; e) <b>covalente polar</b> (compuesto molecular, AlCl<sub>3</sub>).",
 sol: "<b>Paso 1 · primero, ¿metal o no metal?</b> Es el filtro que manda: metal + no metal es iónico, metal + metal es metálico, no metal + no metal es covalente. → <b>Paso 2 · la cuenta de Δε, sólo donde hace falta.</b> <b>a)</b> Mg es metal y O no metal: iónica. Δε = 3,5 − 1,2 = 2,3 &gt; 2, y confirma. <b>b)</b> Dos no metales: covalente. Δε = 2,8 − 2,1 = 0,7: distinta ε, hay cargas parciales, <b>polar</b>. <b>c)</b> Dos no metales iguales: Δε = 0, <b>no polar</b>. <b>d)</b> Dos metales: <b>metálica</b>, sin mirar Δε (una aleación sigue siendo metálica). <b>e)</b> Al es metal y Cl no metal, pero es la excepción: Δε = 3,0 − 1,5 = 1,5 &lt; 2 y el AlCl<sub>3</sub> es <b>molecular</b>, covalente polar. → <b>Control.</b> Una unión iónica da Δε grande y no forma moléculas; las covalentes sí. <b>Error típico:</b> aplicar “metal + no metal = iónico” sin pensar en el Be y el Al con Cl, Br o I."},

{st: "<b>Básico · Fuerza dominante con el árbol.</b> Indicá la fuerza intermolecular dominante en cada sustancia pura: a) CH<sub>3</sub>OH; b) HBr; c) I<sub>2</sub>; d) KF.",
 ans: "a) <b>puente de hidrógeno</b>; b) <b>dipolo-dipolo</b>; c) <b>London</b>; d) <b>ninguna</b>: es iónico, lo que une es la atracción electrostática de la red.",
 sol: "<b>Paso 1 · ¿es iónico?</b> Sólo el KF (metal + no metal): no hay moléculas, entonces no hay fuerzas intermoleculares. → <b>Paso 2 · ¿hay H unido a N, O o F?</b> En el CH<sub>3</sub>OH el H está sobre el O: <b>puente de hidrógeno</b>. En el HBr el H está sobre el Br, que no vale: sigue el árbol. → <b>Paso 3 · ¿la molécula es polar?</b> HBr: diatómica con Δε = 2,8 − 2,1 = 0,7, un solo vector que nada cancela: <b>polar</b>, dipolo-dipolo. I<sub>2</sub>: dos átomos iguales, Δε = 0, <b>no polar</b>: sólo London. → <b>Control.</b> London está en todas, pero se pide la <b>dominante</b>. <b>Error típico:</b> poner puente de hidrógeno al HBr sólo porque tiene H."},

{st: "<b>Básico · Qué se vence al hervir.</b> Al hervir agua, ¿se rompen los enlaces O-H de las moléculas o se vencen las fuerzas entre moléculas? Justificalo con los datos: la energía media del enlace O-H (valor medio de tabla) es 463 kJ/mol y hervir un mol de agua a 100 °C pide 40,7 kJ.",
 ans: "<b>Se vencen fuerzas intermoleculares (puentes de hidrógeno)</b>: las moléculas de H<sub>2</sub>O quedan enteras.",
 sol: "<b>Paso 1 · qué haría falta para romper los O-H.</b> Cada molécula tiene dos: 2 × 463 = <b>926 kJ por mol</b> de agua. → <b>Paso 2 · qué se gasta en realidad.</b> Hervir un mol pide <b>40,7 kJ</b>. → <b>Paso 3 · comparar.</b> 926 / 40,7 ≈ 23: hervir cuesta unas 23 veces menos que romper los enlaces, así que no se rompen. Lo que se separa son moléculas enteras, que se mantenían juntas por <b>puentes de hidrógeno</b>. → <b>Control.</b> Al condensar el vapor se recupera H<sub>2</sub>O líquida, la misma sustancia; si se hubieran roto los O-H se habrían separado átomos de H y de O y no habría agua para condensar. <b>Error típico:</b> contestar “se rompen enlaces” en un V/F de cambio de estado de una sustancia molecular."},

{st: "<b>Intermedio · Lewis, geometría y polaridad.</b> Para el difluoruro de oxígeno, OF<sub>2</sub>: a) dibujá la estructura de Lewis; b) indicá geometría electrónica, geometría molecular, ángulo aproximado e hibridación del O; c) decidí si la molécula es polar y qué fuerza intermolecular domina.",
 ans: "a) 20 e<sup>-</sup>: O central con 2 uniones simples y <b>2 pares libres</b>, 3 pares libres en cada F. b) GE <b>tetraédrica</b>, GM <b>angular</b>, ángulo <b>&lt; 109,5°</b> (cerca de 103°), <b>sp<sup>3</sup></b>. c) <b>Polar</b>, fuerza dominante <b>dipolo-dipolo</b>.",
 sol: "<b>Paso 1 · contar.</b> 6 + 2 · 7 = <b>20 e<sup>-</sup></b>. → <b>Paso 2 · esqueleto.</b> El central es el menos electronegativo: O (3,5) contra F (4,0). Dos uniones O-F gastan 4 e<sup>-</sup>. → <b>Paso 3 · completar.</b> Cada F lleva 3 pares libres (12 e<sup>-</sup>) y quedan 20 − 4 − 12 = 4 e<sup>-</sup>, o sea <b>2 pares libres sobre el O</b>. Carga formal del O: 6 − 4 − 2 = 0; del F: 7 − 6 − 1 = 0 ✓. → <b>Paso 4 · dominios.</b> El O tiene 2 uniones + 2 pares libres = <b>4 dominios</b>: GE tetraédrica y, como dos de los cuatro son pares libres, GM <b>angular</b>; los pares libres ocupan más lugar y cierran el ángulo a menos de 109,5°; hibridación sp<sup>3</sup>. → <b>Paso 5 · polaridad.</b> Δε(O-F) = 4,0 − 3,5 = 0,5: enlaces polares. Como la molécula es angular y asimétrica, los dos vectores no se cancelan: <b>polar</b>. → <b>Paso 6 · fuerza.</b> No es iónico, no hay H unido a N, O o F y la molécula es polar: <b>dipolo-dipolo</b>. <b>Error típico:</b> decir lineal por ser “A-B-A”, olvidando los pares libres del central."},

{st: "<b>Intermedio · Ordenar cuatro por punto de ebullición.</b> Ordená de mayor a menor punto de ebullición: KF, CH<sub>3</sub>OH, HBr, C<sub>2</sub>H<sub>6</sub>. Indicá en cada caso qué une a las partículas.",
 ans: "<b>KF &gt; CH<sub>3</sub>OH &gt; HBr &gt; C<sub>2</sub>H<sub>6</sub></b>.",
 sol: "<b>Paso 1 · clasificar cada sustancia.</b> KF: metal + no metal, Δε = 4,0 − 0,8 = 3,2, <b>iónico</b>, atracción electrostática en una red. CH<sub>3</sub>OH: H sobre O, <b>puente de hidrógeno</b>. HBr: polar, H sobre Br, <b>dipolo-dipolo</b>. C<sub>2</sub>H<sub>6</sub>: no polar, <b>London</b>. → <b>Paso 2 · ordenar por intensidad.</b> Red iónica &gt; puente de hidrógeno &gt; dipolo-dipolo &gt; London. → <b>Paso 3 · mirar la masa por si hay desempate.</b> M(KF) ≈ 58, M(CH<sub>3</sub>OH) ≈ 32, M(HBr) ≈ 81, M(C<sub>2</sub>H<sub>6</sub>) ≈ 30. Una masa 2,5 veces mayor alcanza para que un London le gane a un dipolo-dipolo (el Br<sub>2</sub> contra el SO<sub>2</sub>), pero no para que un dipolo-dipolo le gane a un puente de hidrógeno, mucho más intenso: la mayor masa del HBr (81 contra 32) no lo pasa al metanol. Decide el tipo. → <b>Control.</b> Con datos de tabla: KF 1502 °C, CH<sub>3</sub>OH 65 °C, HBr −67 °C, C<sub>2</sub>H<sub>6</sub> −89 °C ✓. <b>Error típico:</b> poner el HBr arriba del metanol por tener más masa."},

{st: "<b>Intermedio · Solubilidad: predecir y justificar.</b> Predecí si se disuelve y justificá con la fuerza que aparece entre soluto y solvente: a) metanol en agua; b) KCl en hexano; c) aceite de cocina (no polar) en nafta; d) el mismo aceite en agua.",
 ans: "a) <b>sí</b>; b) <b>no</b>; c) <b>sí</b>; d) <b>no</b>.",
 sol: "<b>Paso 1 · clasificar soluto y solvente.</b> Metanol: polar con puentes de H. Agua: polar con puentes de H. KCl: iónico. Hexano, nafta y aceite: no polares. → <b>Paso 2 · mirar qué atracciones se pagan y cuáles se ganan.</b> <b>a)</b> Polar en polar: el metanol arma <b>puentes de hidrógeno con el agua</b>, y se disuelve. <b>b)</b> Iónico en no polar: el hexano sólo puede dar London, no solvata los iones y nada compensa la energía de la red: <b>no se disuelve</b>. <b>c)</b> No polar en no polar: aceite y nafta se atraen con <b>London</b> igual que consigo mismos; el intercambio no cuesta nada y se mezclan. <b>d)</b> No polar en agua: el aceite no puede dar puentes de H y los del agua se prefieren entre sí, así que <b>excluyen al aceite</b>. → <b>Control.</b> Es “lo semejante disuelve a lo semejante”; el único que mezcla un iónico es un solvente polar, por ion-dipolo. <b>Error típico:</b> decir que el KCl se disuelve en hexano porque “tiene iones y el hexano tiene carbonos”."},

{st: "<b>Intermedio · Fuerzas a partir de la presión de vapor.</b> A 20 °C, tres líquidos tienen presiones de vapor A = 122 mmHg, B = 44 mmHg y C = 17,5 mmHg. Son hexano, etanol y agua en algún orden. a) Ordenalos por intensidad de sus fuerzas intermoleculares. b) Asigná cada letra a su sustancia. c) Ordenalos por punto de ebullición.",
 ans: "a) <b>A &lt; B &lt; C</b>. b) <b>A = hexano, B = etanol, C = agua</b>. c) <b>C &gt; B &gt; A</b> (100 °C, 78 °C, 69 °C).",
 sol: "<b>Paso 1 · la regla de sentido contrario.</b> Más fuerza intermolecular, menos moléculas escapan al vapor: <b>presión de vapor más baja</b>. Entonces la de mayor presión (A, 122 mmHg) tiene las fuerzas más débiles y la de menor (C, 17,5 mmHg) las más fuertes: A &lt; B &lt; C. → <b>Paso 2 · asignar con la estructura.</b> El hexano es no polar: sólo London, la más débil, así que es A. Pesa más que el agua (86 contra 18), pero esa London no alcanza a un puente de hidrógeno (a diferencia del octano, de masa 114, que sí le gana al agua); lo confirma que A tenga la presión de vapor más alta, o sea las fuerzas más débiles. Etanol y agua hacen puentes de hidrógeno; el agua tiene dos H para donar y hasta 4 puentes por molécula, y el etanol uno solo (y su cadena estorba), así que el agua es C y el etanol B. → <b>Paso 3 · el punto de ebullición va con la fuerza.</b> C &gt; B &gt; A. → <b>Control.</b> Valores de tabla: 100 °C, 78 °C y 69 °C ✓. <b>Error típico:</b> asociar la presión de vapor más alta con la fuerza más alta."},

{st: "<b>Intermedio · Unión a partir de la posición en la tabla.</b> El elemento D tiene número atómico Z; el de número atómico Z + 1 es un gas noble y el de Z + 2 es un elemento E. Además, G es el halógeno ubicado un período más arriba que D. a) ¿A qué grupo pertenecen D y E? b) ¿Qué unión forman D y E y qué fórmula tiene el compuesto? c) ¿Y D con D? d) ¿Y D con G? Suponé que el gas noble es el argón (Z + 1 = 18) para hacer las cuentas con la tabla de la sección.",
 ans: "a) D es <b>halógeno</b> (grupo 17) y E <b>alcalino</b> (grupo 1). b) <b>Iónica</b>, KCl. c) <b>Covalente no polar</b>, Cl<sub>2</sub>. d) <b>Covalente polar</b>, ClF.",
 sol: "<b>Paso 1 · ubicar.</b> Un gas noble cierra su período; el elemento <b>anterior</b> (Z) está en el grupo 17: D es un halógeno. El que le sigue al gas noble (Z + 2) abre el período siguiente: grupo 1, un <b>alcalino</b>. Con Z + 1 = 18: Z = 17, D = Cl, y Z + 2 = 19, E = K. G es el halógeno del período anterior: el flúor (F). → <b>Paso 2 · D con E.</b> K es metal, Cl no metal: <b>iónica</b>. Δε = 3,0 − 0,8 = 2,2 &gt; 2 ✓. El K da 1 electrón y el Cl lo recibe, 1 a 1: <b>KCl</b>, red de K<sup>+</sup> y Cl<sup>-</sup>, sin moléculas. → <b>Paso 3 · D con D.</b> Dos no metales iguales: comparten un par, Δε = 0. Cl<sub>2</sub>: 14 e<sup>-</sup>, una unión simple y 3 pares libres en cada Cl, <b>covalente no polar</b>, molécula lineal por ser diatómica. → <b>Paso 4 · D con G.</b> Dos no metales distintos: covalente. Δε = 4,0 − 3,0 = 1,0 &gt; 0: <b>polar</b>. ClF: 14 e<sup>-</sup>, una unión simple, cargas parciales δ<sup>+</sup> en el Cl y δ<sup>-</sup> en el F; la molécula también es polar, porque un solo vector no se cancela. → <b>Control.</b> Los tres casos cubren el espectro: iónico (Δε = 2,2), covalente no polar (0) y covalente polar (1,0). <b>Error típico:</b> tomar Z + 1 como el elemento D, y no el anterior."},


  {st: '<b>G04, ejercicio 10 · el ejercicio-tipo completo.</b> “Dadas las fórmulas de las siguientes moléculas: Cl<sub>2</sub>; HCl; NCl<sub>3</sub>; HClO. a) Indicar el estado de oxidación del cloro en cada una; b) Graficar las estructuras de Lewis; c) Determinar la geometría molecular en cada caso y justifiquen utilizando TRePEV, según corresponda; d) Indicar la polaridad de las distintas moléculas y de cada uno de los enlaces entre los átomos que las forman; justifiquen las respuestas.” <span class="muted">(enunciado textual de la guía; la respuesta publicada es una imagen)</span>',
   ans: 'Cl: <b>0</b> en Cl<sub>2</sub>, <b>−1</b> en HCl, <b>−1</b> en NCl<sub>3</sub>, <b>+1</b> en HClO. Geometrías: Cl<sub>2</sub> y HCl <b>lineales</b> (diatómicas), NCl<sub>3</sub> <b>piramidal</b>, HClO <b>angular</b>. Polaridad de la molécula: Cl<sub>2</sub> <b>no polar</b>; HCl, NCl<sub>3</sub> y HClO <b>polares</b>.',
   sol: '<b>a) Estados de oxidación del Cl.</b> Cl<sub>2</sub>: elemento libre → <b>0</b>. HCl: el H es +1 y la suma da 0 → Cl = <b>−1</b>. NCl<sub>3</sub>: el Cl es apenas más electronegativo que el N, así que Cl = <b>−1</b> y N = +3. HClO: H = +1, O = −2, suma 0 → Cl = <b>+1</b>.<br><br><b>b) Lewis.</b> Cl<sub>2</sub>: 14 e<sup>-</sup> → una unión simple y <b>3 pares libres en cada Cl</b>. HCl: 8 e<sup>-</sup> → una simple y <b>3 pares libres en el Cl</b>. NCl<sub>3</sub>: 5 + 3·7 = <b>26 e<sup>-</sup></b> → N central, 3 uniones simples N-Cl, <b>1 par libre en el N</b> y 3 en cada Cl (6+18+2 = 26 ✓). HClO: 1 + 7 + 6 = <b>14 e<sup>-</sup></b> → ojo con el esqueleto: <b>el H va sobre el O</b>, no sobre el Cl (regla de los oxoácidos, T04A) → H-O-Cl, con <b>2 pares libres en el O</b> y 3 en el Cl (4 + 4 + 6 = 14 ✓).<br><br><b>c) Geometría.</b> Cl<sub>2</sub> y HCl son <b>diatómicas</b>: no hay átomo central, TRePEV no se aplica y la molécula es forzosamente <b>lineal</b>. Eso es lo que quiere decir el “según corresponda” de la consigna. NCl<sub>3</sub>: el N tiene 3 uniones + 1 par libre = <b>4 dominios</b> → GE tetraédrica, <b>GM piramidal</b>, ángulo &lt; 109,5° por el postulado 3 (el par libre ocupa más espacio y cierra el ángulo), sp<sup>3</sup>. HClO: el O tiene 2 uniones + 2 pares libres = <b>4 dominios</b> → GE tetraédrica, <b>GM angular</b>, ángulo &lt; 109,5°, sp<sup>3</sup>.<br><br><b>d) Polaridad.</b> Enlaces: Cl-Cl con Δε = 0 → <b>no polar</b>. H-Cl con Δε = 3,0 − 2,1 = 0,9 → <b>polar</b>. N-Cl con Δε ≈ 0 en la tabla redondeada de la cátedra (los dos valen 3,0) → <b>prácticamente no polar</b>. En el HClO: O-H con Δε = 1,4 y O-Cl con Δε = 0,5, los dos <b>polares</b>.<br>Moléculas: <b>Cl<sub>2</sub> no polar</b> (no hay dipolo que sumar). <b>HCl polar</b> (un solo enlace polar, nada que lo cancele). <b>HClO polar</b> (angular: los vectores no se cancelan). <b>NCl<sub>3</sub>: polar igual</b>, aunque sus enlaces sean casi no polares, porque el <b>par libre del N</b> desbalancea la pirámide; su μ es chico pero no nulo <span class="muted">(≈0,4 D de tabla)</span>. Es el caso inverso al del CO<sub>2</sub>: allá hay enlaces polares y molécula no polar; acá, enlaces casi no polares y molécula polar.<br><br><b>Bonus que el ejercicio no pide pero el examen sí.</b> Fuerza dominante: Cl<sub>2</sub> <b>London</b>; HCl <b>dipolo-dipolo</b>; NCl<sub>3</sub> <b>London</b> (M = 120,4 g/mol, con dipolo-dipolo débil); HClO <b>puente de hidrógeno</b> (tiene H unido a O).'},

  {st: '<b>G04, ejercicio 12 · la serie de London pura.</b> “A partir de los valores dados en la tabla, justifiquen las diferencias de puntos de ebullición (PEb) entre las sustancias indicadas, teniendo en cuenta las fuerzas intermoleculares presentes.” CH<sub>4</sub>: −161 °C · CF<sub>4</sub>: −128 °C · CCl<sub>4</sub>: 77 °C.',
   ans: 'Las tres son <b>tetraédricas, simétricas y no polares</b>, así que las tres tienen <b>únicamente fuerzas de London</b>. Como el tipo de fuerza es el mismo, el punto de ebullición lo decide sólo la <b>masa molar</b>: 16,0 &lt; 88,0 &lt; 153,8 g/mol, y por eso −161 &lt; −128 &lt; 77 °C.',
   sol: '<b>Por qué las tres son no polares.</b> Las tres tienen C central con <b>4 dominios y 0 pares libres</b> → GE = GM = <b>tetraédrica</b>, 109,5°, sp<sup>3</sup>. Los enlaces <b>sí</b> son polares (Δε(C-H) = 0,4, Δε(C-F) = 1,5, Δε(C-Cl) = 0,5), pero los cuatro vectores idénticos apuntando a los vértices de un tetraedro <b>suman cero</b>. μ<sub>T</sub> = 0 en las tres.<br><br><b>Por eso el ejercicio es limpio.</b> Al no haber dipolo permanente ni H sobre N/O/F, la <b>única</b> fuerza intermolecular posible es la de London. Estamos comparando la misma fuerza consigo misma, así que se aplica directo el criterio de T04B: “a mayor masa molecular, mayor fuerza de London”.<br><br><b>Los números.</b> M(CH<sub>4</sub>) = 16,04 · M(CF<sub>4</sub>) = 88,00 · M(CCl<sub>4</sub>) = 153,81 g/mol. El orden de masas reproduce exacto el orden de puntos de ebullición ✓.<br><br><b>La trampa que el ejercicio esconde y que hay que nombrar.</b> El CF<sub>4</sub> tiene los <b>enlaces más polares de los tres</b> (Δε = 1,5, el flúor es el elemento más electronegativo que existe) y aun así hierve 205 °C más abajo que el CCl<sub>4</sub>. → Porque la polaridad del <b>enlace</b> no interviene en las fuerzas intermoleculares si la molécula es no polar: lo que interviene es la <b>polarizabilidad</b> de la nube electrónica, que crece con el tamaño y el número de electrones. El CCl<sub>4</sub> tiene 74 electrones contra los 42 del CF<sub>4</sub> y los 10 del CH<sub>4</sub>.<br><br><b>Cómo se escribe en la hoja</b> (tres renglones, no más): “Las tres moléculas son tetraédricas y no polares, por lo que sólo presentan fuerzas de dispersión de London. A igual tipo de fuerza intermolecular, la intensidad crece con la masa molar y con el número de electrones. Como M(CH<sub>4</sub>) &lt; M(CF<sub>4</sub>) &lt; M(CCl<sub>4</sub>), el orden de puntos de ebullición es el observado.”'},

  {st: '<b>G04, ejercicio 11 · asignar la fuerza dominante.</b> “Indiquen el tipo de fuerzas intermoleculares presentes en cada una de las siguientes sustancias: a) CBr<sub>4</sub>; b) HNO; c) CH<sub>2</sub>Cl<sub>2</sub>; d) Cl<sub>2</sub>; e) HBr; f) CH<sub>3</sub>OH; g) CH<sub>3</sub>Cl; h) SeCl<sub>2</sub>; i) PI<sub>3</sub>”',
   ans: '<b>London</b> (no polares): CBr<sub>4</sub>, Cl<sub>2</sub>. <b>Puente de hidrógeno</b> (H sobre N u O): CH<sub>3</sub>OH y HNO. <b>Dipolo-dipolo</b> (polares, sin H sobre N/O/F): CH<sub>2</sub>Cl<sub>2</sub>, HBr, CH<sub>3</sub>Cl, SeCl<sub>2</sub>, PI<sub>3</sub>. En todas, además, hay London.',
   sol: '<b>Aplicando el árbol una por una:</b><br><b>a) CBr<sub>4</sub></b> · C central, 4 dominios, tetraédrica simétrica → <b>no polar</b> → <b>London</b>, y muy intensa: M = 331,6 g/mol. Es sólido a temperatura ambiente.<br><b>b) HNO</b> · el H está unido al N → <b>puente de hidrógeno</b>. <span class="muted">(La fórmula del enunciado es rara: HNO es el nitroxilo, una especie inestable. Sea cual sea la intención, el criterio no cambia: H sobre N ⇒ puente de hidrógeno.)</span><br><b>c) CH<sub>2</sub>Cl<sub>2</sub></b> · 20 e<sup>-</sup>, C central tetraédrico pero con <b>dos terminales distintos</b> → la simetría se rompe → <b>polar</b> → <b>dipolo-dipolo</b>. Los H cuelgan de un C, no de N/O/F: no hay puente de hidrógeno.<br><b>d) Cl<sub>2</sub></b> · Δε = 0 → <b>no polar</b> → <b>London</b> únicamente.<br><b>e) HBr</b> · Δε = 2,8 − 2,1 = 0,7 → <b>polar</b>. El Br <b>no</b> está en la lista N/O/F → <b>dipolo-dipolo</b>.<br><b>f) CH<sub>3</sub>OH</b> · metanol, con el H del grupo –OH pegado al O → <b>puente de hidrógeno</b>. Es lo que lo separa del CH<sub>3</sub>-O-CH<sub>3</sub>, que tiene el mismo O y ningún H sobre él.<br><b>g) CH<sub>3</sub>Cl</b> · tetraédrico asimétrico → <b>polar</b> → <b>dipolo-dipolo</b>.<br><b>h) SeCl<sub>2</sub></b> · 6 + 2·7 = 20 e<sup>-</sup> → Se central con 2 uniones + <b>2 pares libres</b> = 4 dominios → GE tetraédrica, <b>GM angular</b> → <b>polar</b> → <b>dipolo-dipolo</b>. Mismo esqueleto que el agua, sin puente de hidrógeno porque no tiene ningún H.<br><b>i) PI<sub>3</sub></b> · 5 + 3·7 = 26 e<sup>-</sup> → P central, 3 uniones + 1 par libre → <b>piramidal</b> → <b>polar</b> → dipolo-dipolo. → Pero decilo con la salvedad: Δε(P-I) = 2,5 − 2,1 = 0,4, un dipolo chico, y M = 411,7 g/mol, así que <b>en la práctica la London manda</b>. Es el mismo desempate por masa del Br<sub>2</sub> vs. SO<sub>2</sub>.<br><br><b>La frase que hay que agregar siempre.</b> “Las fuerzas de London están presentes en <b>todas</b> las sustancias; lo que indico en cada caso es la <b>dominante</b>.” T04B: London “es la fuerza intermolecular que ocurre entre todas las partículas y es la única fuerza entre átomos o moléculas no polares”.'},

  {st: '<b>Parcial 30/05/2025 · Ejercicio 1, parte II</b> <span class="muted">(textual · 10 puntos sobre 100)</span>. “II) Para el CaO y el CO<sub>2</sub>: dibuje la estructura de Lewis, indique tipos de enlace, fuerzas intermoleculares y polaridad del compuesto.” <span class="muted">(vienen de la parte I: la descomposición del CaCO<sub>3</sub> en cal y dióxido de carbono)</span>',
   ans: '<b>CaO</b>: unión <b>iónica</b> (metal + no metal, Δε = 2,5); no es una molécula sino una <b>red iónica</b>, así que no tiene fuerzas intermoleculares sino atracción electrostática entre iones; el concepto de polaridad molecular no aplica. <b>CO<sub>2</sub></b>: dos uniones <b>covalentes comunes dobles</b>, molécula <b>lineal</b>, enlaces <b>polares</b> pero molécula <b>NO polar</b> (μ<sub>T</sub> = 0), y por lo tanto sólo <b>fuerzas de London</b>.',
   sol: '<b>CaO.</b> Ca (metal, ε = 1,0) + O (no metal, ε = 3,5) → <b>Δε = 2,5 &gt; 2</b> → unión <b>iónica</b>, con <b>transferencia</b> de electrones: el Ca cede sus 2 electrones de valencia y el O los toma. Lewis: <b>[Ca]<sup>2+</sup></b> y <b>[ :O: ]<sup>2-</sup></b> con los 8 electrones del octeto y el anión entre corchetes con su carga, que es exactamente la convención que exige T04A para los iones. → No hay molécula de CaO: hay una <b>red iónica</b> tridimensional. Por eso el ítem “fuerzas intermoleculares” se contesta así: <b>no corresponden</b>; lo que mantiene unido al sólido es la <b>atracción electrostática entre iones</b>, mucho más intensa que cualquier fuerza intermolecular (T04B). Y “polaridad del compuesto”: no se define polaridad molecular en un compuesto iónico; lo que sí se puede decir es que <b>los enlaces son 100 % polares en el límite</b>, con transferencia completa.<br><br><b>CO<sub>2</sub>.</b> Σ e<sup>-</sup> = 4 + 2·6 = <b>16</b> → C central (menos electronegativo), O terminales → con uniones simples el C queda con 4 electrones: le faltan → subo las dos a <b>dobles</b> → O=C=O, con <b>2 pares libres en cada O</b> y <b>ninguno en el C</b>. Recuento: 8 (uniones) + 8 (pares libres) = 16 ✓. → Tipos de enlace: <b>dos uniones covalentes comunes dobles</b>, sin dativas. → TRePEV: el C tiene <b>2 dominios</b> (cada doble cuenta 1, postulado 4) y 0 pares libres → GE = GM = <b>lineal</b>, <b>180°</b>, <b>sp</b>. → Polaridad: Δε(C=O) = 1,0, los <b>enlaces son polares</b>; pero los dos vectores μ tienen igual módulo y direcciones opuestas sobre la misma recta, así que <b>se cancelan</b>: <b>μ<sub>T</sub> = 0, molécula NO polar</b>. → Fuerzas intermoleculares: al ser no polar y no tener H sobre N/O/F, sólo <b>London</b>, y con M = 44 g/mol son débiles. Por eso el CO<sub>2</sub> es un <b>gas</b> a temperatura ambiente mientras el CaO funde por encima de los 2500 °C.<br><br><b>El contraste que el ítem está buscando.</b> Los dos productos de la misma reacción, uno iónico y uno covalente, con propiedades opuestas por la <b>misma</b> razón: lo que los une. Escribí explícitamente la comparación al final: es lo que separa un 10/10 de un 6/10 en este ítem.'},

  {st: '<b>G06B, ejercicio 4 · siete comparaciones seguidas.</b> “¿Qué sustancia de cada par tendrá mayor punto de fusión y de ebullición? a) HCl o NaCl; b) C<sub>2</sub>H<sub>5</sub>OC<sub>2</sub>H<sub>5</sub> (dietiléter) o C<sub>4</sub>H<sub>9</sub>OH (butanol); c) CHI<sub>3</sub> o CHF<sub>3</sub>; d) H<sub>2</sub>O o CH<sub>3</sub>OH; e) BF<sub>3</sub> o BCl<sub>3</sub>; f) H<sub>2</sub>S o H<sub>2</sub>O; g) KBr o CH<sub>3</sub>Br. Fundamentar y escribir las estructuras de Lewis de cada sustancia.”',
   ans: 'a) <b>NaCl</b> · b) <b>butanol</b> · c) <b>CHI<sub>3</sub></b> · d) <b>H<sub>2</sub>O</b> · e) <b>BCl<sub>3</sub></b> · f) <b>H<sub>2</sub>O</b> · g) <b>KBr</b>. Cada par aísla un criterio distinto: unión iónica vs. molecular, tipo de fuerza a igual masa, masa a igual tipo de fuerza, y densidad de puentes de hidrógeno.',
   sol: '<b>a) NaCl &gt; HCl</b>: <b>unión química vs. fuerza intermolecular.</b> El NaCl es iónico (Δε = 2,1): red, atracción electrostática. El HCl es molecular con dipolo-dipolo. No hay comparación posible: cualquier iónico le gana a cualquier molecular. <span class="muted">(PF: 801 °C vs. −114 °C)</span><br><br><b>b) butanol &gt; dietiléter</b>: <b>tipo de fuerza, con la masa empatada.</b> Son <b>isómeros</b>: los dos son C<sub>4</sub>H<sub>10</sub>O, M = 74,1 g/mol. El butanol tiene el H sobre el O (-OH) → <b>puente de hidrógeno</b>. En el éter el O está entre dos carbonos, no hay H-O → sólo dipolo-dipolo. <span class="muted">(PE: 117 °C vs. 34,5 °C, según el ejercicio 3 de la misma guía)</span><br><br><b>c) CHI<sub>3</sub> &gt; CHF<sub>3</sub></b>: <b>masa, con el tipo de fuerza empatado.</b> Los dos son tetraédricos asimétricos y polares → dipolo-dipolo en los dos. Decide la London: M = 393,7 vs. 70,0 g/mol. <span class="muted">(el yodoformo es <b>sólido</b> a temperatura ambiente; el CHF<sub>3</sub> es gas)</span><br><br><b>d) H<sub>2</sub>O &gt; CH<sub>3</sub>OH</b>: <b>cuántos puentes por molécula.</b> Los dos hacen puente de hidrógeno, y acá el agua <b>pesa menos</b> (18,0 vs. 32,0 g/mol), así que la masa juega en contra. Gana igual porque el agua tiene <b>2 H donores y 2 pares libres aceptores</b> por molécula y puede armar hasta <b>cuatro</b> puentes, mientras el metanol tiene 1 H donor y su lado no polar (-CH<sub>3</sub>) estorba. <span class="muted">(PE: 100 °C vs. 64,7 °C)</span> → Es el único par de los siete donde ni el tipo ni la masa alcanzan: hay que hablar de <b>número de puentes</b>.<br><br><b>e) BCl<sub>3</sub> &gt; BF<sub>3</sub></b>: <b>London pura, con octeto incompleto de regalo.</b> El B se queda con <b>6 electrones</b> (excepción al octeto), 3 dominios, <b>trigonal plana</b>, sp<sup>2</sup>, y como es simétrica: <b>no polar</b> pese a tener enlaces muy polares. Sólo London → decide la masa: 117,2 vs. 67,8 g/mol.<br><br><b>f) H<sub>2</sub>O &gt; H<sub>2</sub>S</b>: <b>tipo de fuerza, contra la tendencia periódica.</b> Los dos son angulares y polares, y el H<sub>2</sub>S <b>pesa casi el doble</b> (34,1 vs. 18,0). Debería hervir más arriba y hierve 160 °C más abajo, porque el S <b>no está en la lista N/O/F</b>: el H<sub>2</sub>S no hace puente de hidrógeno y el agua sí. <span class="muted">(G04, ejercicio 14: PE(H<sub>2</sub>S) = −60,7 °C)</span><br><br><b>g) KBr &gt; CH<sub>3</sub>Br</b>: otra vez iónico vs. molecular. El KBr es metal + no metal (Δε = 2,0) → red iónica. El CH<sub>3</sub>Br es molecular polar → dipolo-dipolo. <span class="muted">(PF: 734 °C vs. −94 °C)</span><br><br><b>Lo que el ejercicio entrena, y es lo que se toma:</b> identificar <b>cuál de las tres variables</b> (tipo de unión, tipo de fuerza intermolecular, masa molar) está desempatando en cada par, y decirlo con esas palabras.'},

  {st: '<b>G04, ejercicio 9 · el puente con nomenclatura.</b> “El catión calcio forma una oxosal de fórmula Ca(BrO<sub>3</sub>)<sub>2</sub>. a) Dibujen la estructura de Lewis de la oxosal. b) Determinen la geometría y el valor aproximado del ángulo de enlace del anión que constituye al compuesto. c) Escriban el nombre de la oxosal del compuesto del punto a).”',
   ans: 'a) Un catión <b>[Ca]<sup>2+</sup></b> y <b>dos aniones bromato [BrO<sub>3</sub>]<sup>-</sup></b>, cada uno entre corchetes con su carga. b) El BrO<sub>3</sub><sup>-</sup> tiene <b>geometría piramidal</b> y <b>α menor a 109,5°</b> <span class="muted">(respuesta textual de la cátedra)</span>. c) <b>Bromato de calcio</b>.',
   sol: '<b>a) La estructura tiene dos partes y hay que dibujar las dos.</b> El Ca<sup>2+</sup> con el Br y los O de por medio es un compuesto <b>iónico</b> entre el catión metálico y el oxoanión; <b>dentro</b> del anión, en cambio, las uniones Br-O son <b>covalentes</b>. Esa mezcla es lo que el ejercicio quiere que veas: se escribe [Ca]<sup>2+</sup> y, entre corchetes y con la carga −1, la estructura covalente del bromato, repetida dos veces (o con un subíndice 2).<br><br><b>El anión, paso a paso.</b> Σ e<sup>-</sup> = 7 (Br) + 3·6 (O) + <b>1</b> (por la carga negativa) = <b>26 e<sup>-</sup></b> → Br central → tres uniones Br-O → completo octetos: si pongo las tres simples, el Br queda con 6, le agrego el par que sobra y queda con <b>3 uniones + 1 par libre</b>, pero entonces a dos O les falta → la solución de la cátedra es la de siempre: <b>dativas</b> desde el Br. Recuento final: 3 uniones (6 e<sup>-</sup>) + 1 par libre en el Br (2 e<sup>-</sup>) + pares libres en los O (18 e<sup>-</sup>) = 26 ✓.<br><br><b>b) TRePEV.</b> Lo que decide es que el Br tiene <b>3 uniones + 1 par libre = 4 dominios</b> → GE <b>tetraédrica</b> → GM <b>piramidal</b> → y por el postulado 3 (el par libre se repele con más intensidad y ocupa más espacio) el ángulo se <b>cierra</b> por debajo del ideal: <b>α &lt; 109,5°</b>. Ésa es literalmente la respuesta publicada.<br><br><b>c) El nombre.</b> BrO<sub>3</sub><sup>-</sup> = <b>bromato</b> (del ácido brómico, HBrO<sub>3</sub>, con el Br actuando +5), y el catión es el calcio → <b>bromato de calcio</b>. En la nomenclatura IUPAC con numeral de Stock que prefiere la cátedra: <b>bromato(V) de calcio</b>. → Y el chequeo de que la fórmula cierra: Ca<sup>2+</sup> con BrO<sub>3</sub><sup>-</sup> → hacen falta <b>dos</b> aniones por cada catión → Ca(BrO<sub>3</sub>)<sub>2</sub> ✓. Todo esto es la sección 6: sin saber armar el anión desde el nombre, este ejercicio no arranca.'}

]);

registerExercises('fiuba-quimica', '5', [

  {st: 'En los 9 exámenes reales que junté, ¿dónde aparece el ítem de estructura de Lewis y fuerzas intermoleculares?',
   opts: ['Como ejercicio independiente, en 7 de los 9',
          'Pegado al Ejercicio 1, casi siempre como su último ítem (el de estequiometría), en 7 de los 9',
          'Sólo en las dos Partes B de V/F de las evaluaciones integradoras',
          'En el Ejercicio 2, junto con termoquímica, en 8 de los 9'],
   c: 1,
   ex: "Correcta: <b>pegado como último ítem del Ejercicio 1</b>. Aparece en el Ejercicio 1 de 7 exámenes (parciales de los cursos 1, 2 y 3; 1er recuperatorio 14/06/24; 2do recuperatorio 6/12/24; parcial 30/05/25; 2do recuperatorio 27/06/25), como último ítem del ejercicio de estequiometría en seis de ellos (en el 2do recuperatorio del 6/12/24 es el ítem b del Ejercicio 1, que ahí trata de sólidos y fuerzas), y además como uno de los seis V/F de la EI del 11/07/24: 8 de 9 en total. → La de <b>ejercicio independiente</b> falla porque nunca es un ejercicio propio con puntaje propio. → La de <b>sólo en las dos Partes B</b> falla porque en las Partes B aparece una sola vez (el V/F de hibridación del 11/07/24). → La del <b>Ejercicio 2</b> confunde con termoquímica, que sí está en el Ejercicio 2 de 8 de los 9."},

  {st: 'Te dan CaO y te piden “indique las fuerzas intermoleculares”. ¿Qué contestás?',
   opts: ['Dipolo-dipolo, porque el enlace Ca-O es muy polar',
          'Ion-dipolo, porque hay iones',
          'No corresponden: es un compuesto iónico, no hay moléculas; lo que une a la red es la atracción electrostática entre iones',
          'Puente de hidrógeno, porque el O es muy electronegativo'],
   c: 2,
   ex: "Δε(Ca-O) = 3,5 − 1,0 = 2,5 &gt; 2, y es metal + no metal: <b>unión iónica</b>. T04A lo dice explícitamente: la unión iónica <b>NO forma moléculas</b>, forma redes iónicas. Sin moléculas no hay fuerzas <i>inter</i>moleculares. → La de <b>dipolo-dipolo</b> es el error más caro del tema. → La de <b>ion-dipolo</b> es tentadora pero incompleta: el ion-dipolo requiere <b>un ion y una molécula polar</b>, o sea que el CaO esté <b>disuelto</b> en agua; en el sólido puro no hay dipolos con quién interactuar. → La de <b>puente de hidrógeno</b> es imposible: no hay ningún H en el CaO."},

  {st: 'El CO<sub>2</sub> tiene dos enlaces C=O con Δε = 1,0, claramente polares. ¿Por qué la molécula es no polar?',
   opts: ['Porque los dos enlaces dobles se cancelan entre sí al ser del mismo orden',
          'Porque la molécula es lineal y los dos vectores momento dipolar tienen igual módulo y sentidos opuestos: la resultante es cero',
          'Porque el carbono no tiene pares libres, y sin pares libres nunca hay polaridad',
          'Porque el CO<sub>2</sub> es un gas, y los gases son no polares'],
   c: 1,
   ex: "La polaridad de la molécula es la <b>suma vectorial</b> de la de sus enlaces (T04B, regla del paralelogramo). El C tiene 2 dominios y 0 pares libres → molécula <b>lineal</b>, 180° → los dos μ se anulan → μ<sub>T</sub> = 0. → La que dice que <b>los enlaces dobles se cancelan por ser del mismo orden</b> mezcla orden de enlace con polaridad: no tienen nada que ver. → La que dice que <b>sin pares libres nunca hay polaridad</b> invierte la lógica: la ausencia de pares libres es <b>necesaria pero no suficiente</b>. El CH<sub>3</sub>Cl no tiene pares libres en el C y es polar, porque sus terminales no son todos iguales. → La que dice que <b>los gases son no polares</b> es falsa: el HCl y el NH<sub>3</sub> son gases polares."},

  {st: 'Aplicando el postulado 4 de TRePEV, ¿cuántos dominios electrónicos tiene el carbono en el eteno, CH<sub>2</sub>=CH<sub>2</sub>?',
   opts: ['2', '3', '4', '5'],
   c: 1,
   ex: "El postulado 4 de T04B dice que los pares de enlaces “simples, dobles o triples ocupan igual espacio que un enlace covalente dativo”: <b>cada unión cuenta 1, sin importar el orden</b>. El C del eteno tiene 2 uniones C-H + 1 unión C=C = <b>3 dominios</b>, 0 pares libres → trigonal plana, 120°, <b>sp<sup>2</sup></b>. → La de <b>4 dominios</b> es el error que produce la respuesta “sp<sup>3</sup> y tetraédrica” del V/F de la EI del 11/07/24: sale de contar el doble como dos. → La de <b>2 dominios</b> sería el etino. → La de <b>5 dominios</b> no corresponde a nada."},

  {st: 'Verdadero o falso: “En las siguientes moléculas el carbono tiene hibridación sp<sup>3</sup> y geometría tetraédrica: CH<sub>3</sub>-CH<sub>3</sub>, CH<sub>2</sub>=CH<sub>2</sub>, CH≡CH” <span class="muted">(EI 11/07/2024, Parte B, ítem 2, textual)</span>',
   opts: ['Verdadero: los tres son hidrocarburos y todos los carbonos de un hidrocarburo son sp<sup>3</sup>',
          'Falso: sólo el etano es sp<sup>3</sup> y tetraédrico; el eteno es sp<sup>2</sup> y trigonal plano, y el etino es sp y lineal',
          'Falso: los tres son sp<sup>2</sup>',
          'Verdadero para el etano y el eteno, falso sólo para el etino'],
   c: 1,
   ex: "Contando dominios: etano 4 → sp<sup>3</sup>, tetraédrico, 109,5°. Eteno 3 → sp<sup>2</sup>, trigonal plano, 120°. Etino 2 → sp, lineal, 180°. → El argumento deductivo que cierra la justificación: los orbitales híbridos sólo forman enlaces σ y los π salen de los p que quedaron <b>sin hibridar</b>; un C sp<sup>3</sup> no deja ningún p libre, así que <b>no podría tener ni el doble ni el triple</b>. La afirmación se contradice a sí misma. → La de <b>verdadero para el etano y el eteno, falso sólo para el etino</b> es el error de contar mal sólo el eteno."},

  {st: 'De estas cuatro sustancias, ¿cuál <b>no</b> forma puentes de hidrógeno?',
   opts: ['CH<sub>3</sub>OH (metanol)', 'NH<sub>3</sub>', 'HCl', 'HF'],
   c: 2,
   ex: 'El puente de hidrógeno “requiere un enlace H-X, con X = F, O, N” (T04B, textual). En el HCl el H está unido a <b>cloro</b>: muy electronegativo, sí, pero <b>demasiado grande</b> y fuera de la lista. El HCl tiene <b>dipolo-dipolo</b>, que es la fuerza que la propia teórica le asigna como ejemplo. → El metanol tiene su H sobre el O, el amoníaco sobre el N y el fluoruro de hidrógeno sobre el F: los tres sí.'},

  {st: 'Ordená en sentido <b>creciente</b> según la intensidad de la fuerza intermolecular dominante: metano, agua, cloruro de hidrógeno <span class="muted">(2do recuperatorio 6/12/2024, Ej. 1b)</span>',
   opts: ['H<sub>2</sub>O &lt; HCl &lt; CH<sub>4</sub>',
          'CH<sub>4</sub> &lt; HCl &lt; H<sub>2</sub>O',
          'CH<sub>4</sub> &lt; H<sub>2</sub>O &lt; HCl',
          'HCl &lt; CH<sub>4</sub> &lt; H<sub>2</sub>O'],
   c: 1,
   ex: "Metano: tetraédrico simétrico, μ<sub>T</sub> = 0 → <b>London</b>. Cloruro de hidrógeno: polar, H sobre Cl → <b>dipolo-dipolo</b>. Agua: H sobre O → <b>puente de hidrógeno</b>. Y la escala de T04B, creciente: London &lt; dipolo-dipolo &lt; puente de hidrógeno. → La de <b>CH<sub>4</sub> &lt; H<sub>2</sub>O &lt; HCl</b> pone el HCl arriba del agua, que es el error de querer desempatar por masa molar (36,5 vs. 18): acá no se desempata por masa porque los <b>tipos</b> de fuerza son distintos y están claramente ordenados. → La de <b>H<sub>2</sub>O &lt; HCl &lt; CH<sub>4</sub></b> invierte todo."},

  {st: 'De esas mismas tres sustancias, ¿cuál tiene la <b>presión de vapor</b> más alta?',
   opts: ["El metano, porque es el de fuerzas intermoleculares más débiles", "El agua, porque es la que más fuerzas intermoleculares tiene", "El cloruro de hidrógeno, porque es el de masa molar intermedia", "Las tres tienen la misma presión de vapor a la misma temperatura"],
   c: 0,
   ex: "Presión de vapor y punto de ebullición van <b>en sentidos opuestos</b>. Más fuerza intermolecular ⇒ más energía hace falta para que una molécula escape a la fase gaseosa ⇒ <b>menos</b> vapor en equilibrio ⇒ presión de vapor <b>más baja</b>. El metano tiene la fuerza más débil (sólo London, M = 16), así que la presión de vapor más alta y el punto de ebullición más bajo (−161 °C). → La que elige al <b>agua</b> es el error clásico: el agua tiene el <b>PE</b> más alto y la <b>presión de vapor más baja</b>. → La que dice que <b>las tres tienen la misma presión de vapor</b> confunde presión de vapor (propiedad de cada sustancia a cada temperatura) con presión total."},

  {st: 'T04B compara el octano (C<sub>8</sub>H<sub>18</sub>, M = 114 g/mol, sólo London, PE = 125,6 °C) con el agua (M = 18 g/mol, London + dipolo-dipolo + puente de H, PE = 100 °C). ¿Qué conclusión saca la cátedra de ese ejemplo?',
   opts: ["Que el agua en realidad no forma puentes de hidrógeno", "Que el punto de ebullición no depende de las fuerzas intermoleculares", "Que las fuerzas de London son siempre más intensas que el puente de hidrógeno", "Que lo que interesa es la magnitud de las fuerzas involucradas y no la cantidad de fuerzas"],
   c: 3,
   ex: "Es la viñeta textual de la lámina “Intensidad comparativa” de T04B: “lo que interesa es la <b>magnitud</b> de las fuerzas involucradas y <b>no la cantidad</b> de fuerzas”. El octano tiene un solo tipo de fuerza, la más débil de la lista, pero con 114 g/mol su London acumulada supera al puente de hidrógeno del agua. → La que dice que <b>las fuerzas de London son siempre más intensas que el puente de hidrógeno</b> generaliza mal: a igualdad de masa, el puente de hidrógeno gana siempre (comparar dietiléter vs. butanol, los dos de 74 g/mol). → La que dice que <b>el punto de ebullición no depende de las fuerzas intermoleculares</b> contradice toda la teórica."},

  {st: '¿Cuántos electrones de valencia hay que repartir en la estructura de Lewis del ion carbonato, CO<sub>3</sub><sup>2-</sup>?',
   opts: ["22", "26", "20", "24"],
   c: 3,
   ex: "4 (C, grupo 14) + 3·6 (O, grupo 16) = 22, y como el ion tiene carga <b>−2</b> se <b>suman</b> 2 electrones: <b>24</b>. → La de <b>22</b> es el error de olvidar la carga. → La de <b>20</b> es el de restarla en vez de sumarla (22 − 2). → La de <b>26</b> suma de más: cuenta la carga dos veces (22 + 2 + 2). Regla: carga negativa ⇒ sumás electrones; carga positiva ⇒ restás. → Con 24 e<sup>-</sup> el C queda con 3 dominios (dos simples y un doble, o la variante con dativas), sin pares libres: trigonal plano, 120°, sp<sup>2</sup>, y con <b>resonancia</b> entre las tres posiciones equivalentes del doble."},

  {st: 'En la respuesta del ejercicio 7 de G04, ¿cómo describe la cátedra los enlaces del H<sub>3</sub>PO<sub>4</sub>?',
   opts: ["Seis uniones covalentes simples (tres O-H y tres P-O) y una unión covalente dativa (P→O)", "Cuatro uniones dobles P=O y tres O-H", "Siete uniones covalentes simples, todas iguales", "Tres uniones iónicas P-O y una dativa"],
   c: 0,
   ex: "Es la respuesta textual de la guía, y define <b>cómo dibuja los oxoácidos esta cátedra</b>: el P central, cada H colgando de un O distinto, y el oxígeno sobrante enganchado con una <b>unión dativa</b>, nunca con octeto expandido. Agrega además que “los siete enlaces son covalentes polares”. → La de <b>cuatro uniones dobles P=O</b> no se puede armar: tres de los cuatro O ya tienen un H, así que a lo sumo hay una P=O (con cuatro dobles el P tendría 16 electrones). La versión de otros libros dibuja una sola P=O y deja al P con 10 electrones, pero no es la de CB040. → La de <b>tres uniones iónicas P-O</b> es imposible: el P y el O son los dos no metales, Δε = 1,4 &lt; 2."},

  {st: 'El Br<sub>2</sub> es líquido y el SO<sub>2</sub> gas a la misma temperatura, aunque el SO<sub>2</sub> es polar y el Br<sub>2</sub> no. ¿Cuál es la justificación correcta? <span class="muted">(Parcial Curso 3, Ej. 1c)</span>',
   opts: ["El Br<sub>2</sub> tiene M = 160 g/mol contra 64 del SO<sub>2</sub>: sus fuerzas de London acumuladas superan al dipolo-dipolo del SO<sub>2</sub>", "El SO<sub>2</sub> en realidad es no polar porque es angular", "El Br<sub>2</sub> forma puentes de hidrógeno entre sus átomos", "El SO<sub>2</sub> tiene una unión dativa y las dativas son más débiles que las comunes"],
   c: 0,
   ex: "Es el desempate por masa. El SO<sub>2</sub> tiene 18 e<sup>-</sup>, 3 dominios (1 doble + 1 dativa + 1 par libre), GM <b>angular</b> y <b>sí es polar</b>: dipolo-dipolo. El Br<sub>2</sub> tiene Δε = 0, es no polar y sólo tiene London, pero con 2,5 veces más masa. Mismo fenómeno que el Cl<sub>2</sub> vs. H<sub>2</sub>S de G04 y que el octano vs. agua de T04B. → La que dice que <b>el SO<sub>2</sub> es no polar por ser angular</b> es falsa: angular con dos terminales iguales y un par libre en el central ⇒ polar. → La que dice que <b>el Br<sub>2</sub> forma puentes de hidrógeno</b> es imposible, no hay H. → La que dice que <b>las dativas son más débiles que las comunes</b> es falsa: T04A dice que la dativa es “energéticamente igual al simple”."},

  {st: 'Ordenados de <b>mayor a menor</b> punto de fusión: CrCl<sub>3</sub>, Cl<sub>2</sub>, KCl y H<sub>2</sub>O <span class="muted">(2do recuperatorio 27/06/2025, Ej. 1e, 14 puntos)</span>',
   opts: ["H<sub>2</sub>O &gt; KCl &gt; CrCl<sub>3</sub> &gt; Cl<sub>2</sub>", "Cl<sub>2</sub> &gt; H<sub>2</sub>O &gt; KCl &gt; CrCl<sub>3</sub>", "CrCl<sub>3</sub> &gt; KCl &gt; H<sub>2</sub>O &gt; Cl<sub>2</sub>", "KCl &gt; CrCl<sub>3</sub> &gt; Cl<sub>2</sub> &gt; H<sub>2</sub>O"],
   c: 2,
   ex: "Primero se separan por <b>tipo de sólido</b>: CrCl<sub>3</sub> y KCl son metal + no metal ⇒ <b>sólidos iónicos</b>, y cualquier iónico funde muy por encima de cualquier molecular. Después, dentro de los iónicos, decide la carga: el Cr<sup>3+</sup> atrae mucho más fuerte que el K<sup>+</sup>, así que CrCl<sub>3</sub> &gt; KCl. Y entre los moleculares, el agua tiene <b>puente de hidrógeno</b> y el Cl<sub>2</sub> sólo London. → Datos de tabla que lo confirman: 1152, 770, 0 y −101 °C. → La de <b>KCl &gt; CrCl<sub>3</sub> &gt; Cl<sub>2</sub> &gt; H<sub>2</sub>O</b> invierte los dos iónicos y manda el agua al final."},

  {st: 'Una molécula tiene enlaces polares y es <b>no polar</b>. ¿Cuál de estas condiciones garantiza ese resultado?',
   opts: ["Que tenga al menos un par libre sobre el átomo central", "Que la Δε de cada enlace sea menor que 1,0", "Que tenga un número par de átomos", "Que todos los átomos terminales sean iguales y el átomo central no tenga pares libres"],
   c: 3,
   ex: "La simetría es lo que hace que los vectores μ se cancelen, y se rompe de <b>dos</b> maneras: un par libre en el central (H<sub>2</sub>O, NH<sub>3</sub>, SO<sub>2</sub>) o un terminal distinto de los otros (CH<sub>3</sub>Cl, CH<sub>2</sub>Cl<sub>2</sub>). Sin ninguna de las dos, los vectores se anulan: CO<sub>2</sub>, BF<sub>3</sub>, CH<sub>4</sub>, CCl<sub>4</sub>, SO<sub>3</sub>. → La que pide <b>al menos un par libre sobre el átomo central</b> dice exactamente lo contrario. → La de <b>Δε menor que 1,0</b> es irrelevante: el CF<sub>4</sub> tiene Δε = 1,5, la más alta de la serie CH<sub>4</sub>/CF<sub>4</sub>/CCl<sub>4</sub>, y es no polar. → La de <b>número par de átomos</b> no significa nada: el NH<sub>3</sub> tiene 4 átomos y el HCl tiene 2, y los dos son polares, mientras que el CO<sub>2</sub> tiene 3 (impar) y es no polar."},
  {st: "Según T04A (ejemplo de enlace dativo) y la respuesta de la cátedra al ejercicio 6 de G04, ¿cómo se cuentan las uniones del SO<sub>3</sub>?",
   opts: ["S central con 1 doble S=O y 2 dativas S→O: tres uniones S-O, sin expandir el octeto", "S central con tres dobles S=O, o sea 12 electrones alrededor del S", "S central con tres simples S-O y un par libre sobre el S", "S central con tres dativas S→O y ninguna doble"],
   c: 0,
   ex: "Σ e<sup>-</sup> = 6 + 3·6 = <b>24</b>. Con una doble y dos dativas el S queda con 4 uniones y ningún par libre, el O del doble con 2 pares libres y cada O dativo con 3: 8 + 4 + 12 = 24 ✓. Es el ejemplo de T04A, y por eso G04 ej. 6 responde que el SO<sub>3</sub> tiene dativa. Además la regla de dativas da 3 − 0 − 1 = 2. → Tres dobles expandiría el octeto del S hasta 12 electrones: es el dibujo de otros libros, no el de la cátedra, que no expande el octeto. → Tres simples con un par libre en el S no cierra: suma 26 electrones en vez de 24 y además daría una molécula piramidal, cuando el SO<sub>3</sub> es trigonal plano. → Tres dativas sin doble deja al S con sólo 6 electrones: T04A manda completar primero el octeto del átomo central con uniones comunes y recién después usar dativas."},
  {st: "T04B explica así el origen de la fuerza de London entre moléculas no polares:",
   opts: ["Dipolos permanentes que se orientan para atraerse entre sí", "Un H unido a N, O o F que se atrae con un par libre de la molécula vecina", "Las fluctuaciones temporales de la densidad electrónica generan un dipolo instantáneo que induce un dipolo en la molécula vecina, y los dos se atraen", "La atracción entre un ion y el extremo de signo opuesto de una molécula polar"],
   c: 2,
   ex: "Es la explicación de la lámina 16 de T04B: la nube se deforma un instante, aparece un dipolo temporal y éste <b>induce</b> otro en la vecina. Como ocurre en cualquier átomo o molécula, es la única fuerza posible entre He, N<sub>2</sub> o CH<sub>4</sub>. → Los dipolos permanentes que se orientan son el dipolo-dipolo, que exige μ<sub>T</sub> ≠ 0: una molécula no polar no lo tiene. → El H unido a N, O o F que se atrae con un par libre es el puente de hidrógeno, que requiere un enlace H-X con X = F, O, N: el CH<sub>4</sub> o el N<sub>2</sub> no lo tienen. → El ion y el extremo opuesto del dipolo describen el ion-dipolo, que necesita un ion, o sea un compuesto iónico disuelto."},
  {st: "En la TOM del H<sub>2</sub>, T04A2 combina los orbitales 1s como Ψ<sup>+</sup> = φ<sub>A</sub> + φ<sub>B</sub> y Ψ<sup>−</sup> = φ<sub>A</sub> − φ<sub>B</sub>. ¿Cuál afirmación es correcta?",
   opts: ["Ψ<sup>+</sup> es el antienlazante: tiene mayor energía y un nodo entre los núcleos", "Ψ<sup>+</sup> y Ψ<sup>−</sup> tienen la misma energía, porque salen de los mismos dos 1s", "Los dos electrones del H<sub>2</sub> ocupan Ψ<sup>−</sup>, porque Pauli exige un solo electrón por orbital molecular", "Los dos electrones del H<sub>2</sub> ocupan Ψ<sup>+</sup>, el enlazante, de menor energía que los 1s separados, con la densidad concentrada entre los núcleos"],
   c: 3,
   ex: "Ψ<sup>+</sup> es el orbital <b>enlazante</b> (Ψe): concentra la densidad electrónica entre los dos núcleos, tiene menor energía y da más atracción electrón-núcleo y menos repulsión entre núcleos. Los dos electrones entran ahí, apareados, y por eso el H<sub>2</sub> tiene menos energía que los dos H por separado. → Decir que Ψ<sup>+</sup> es el antienlazante invierte los nombres: el antienlazante es Ψ<sup>−</sup>, el que tiene el nodo y la mayor energía. → Que tengan la misma energía contradice el diagrama de niveles: de dos orbitales atómicos salen uno que baja y uno que sube. → Pauli no limita a uno por orbital sino a <b>dos</b>, con espines opuestos, así que los dos electrones caben en el de menor energía y no hay razón para subirlos al antienlazante."},
  {st: "¿Cómo describe T04A2 el benceno según la TEV y según la TOM?",
   opts: ["TEV: cada C es sp<sup>2</sup> con un p puro, y se escribe como resonancia entre formas límite. TOM: una nube π uniforme entre los seis núcleos, en dos “rosquillas”, una arriba y otra abajo del anillo", "Las dos dicen lo mismo: tres dobles enlaces fijos alternados con tres simples", "TEV: cada C es sp con dos p puros. TOM: seis orbitales σ en el plano del anillo, sin ningún π", "TEV: la nube π se reparte en dos rosquillas. TOM: cada C es sp<sup>2</sup> y se escribe como resonancia entre formas límite"],
   c: 0,
   ex: "Es el contraste de la lámina 20: la TEV ve <b>hibridación trigonal</b> (3 híbridos sp<sup>2</sup> + 1 p puro por C, con σ y π) y resonancia; la TOM ve un orbital molecular que comprende a los seis átomos, con la densidad repartida uniformemente. → Tres dobles fijos alternados es el dibujo de una sola forma límite, y ninguna de las dos teorías lo sostiene: la molécula real tiene los seis enlaces C-C iguales. → Un C sp tendría geometría lineal y dos π, y el benceno es plano con ángulos de 120°; además la TOM del benceno sí incluye los π, que son justamente la nube de las rosquillas. → La última invierte los roles: las rosquillas son el lenguaje de la TOM y la resonancia el de la TEV."}

]);

registerReveals('fiuba-quimica', '6', [

{st: "<b>Básico · Número de oxidación por la suma.</b> Calculá el número de oxidación de: a) el N en HNO<sub>2</sub>; b) el Mn en MnO<sub>4</sub><sup>-</sup>; c) el O en Na<sub>2</sub>O<sub>2</sub>.",
 ans: "a) N = <b>+3</b>. b) Mn = <b>+7</b>. c) O = <b>−1</b>.",
 sol: "<b>Paso 1 · la regla.</b> Se suman los números de oxidación multiplicados por la atomicidad de cada elemento. La suma da 0 en un compuesto neutro y da la carga en un ion. → <b>a) HNO<sub>2</sub>.</b> El H vale +1 y el O, −2: (+1) + N + 2(−2) = 0 → N = <b>+3</b>. → <b>b) MnO<sub>4</sub><sup>-</sup>.</b> Es un ion, así que la suma da −1 y no 0: Mn + 4(−2) = −1 → Mn = <b>+7</b>. → <b>c) Na<sub>2</sub>O<sub>2</sub>.</b> El Na vale siempre +1: 2(+1) + 2x = 0 → x = <b>−1</b>. Es un peróxido: con el O en −2 la suma no cerraría. → <b>Control.</b> Con los valores hallados, cada suma vuelve a dar 0, −1 y 0. → <b>Error típico:</b> en un ion igualar la suma a 0 en lugar de igualarla a la carga, y obtener Mn = +8."},

{st: "<b>Básico · Clasificar por la fórmula y el estado.</b> Decí a qué familia pertenece cada sustancia y cómo se llama: a) Na<sub>2</sub>O<sub>2</sub>; b) CaH<sub>2</sub>; c) HBr(g); d) HBr(ac); e) KHCO<sub>3</sub>; f) SO<sub>3</sub>.",
 ans: "a) peróxido, <b>peróxido de sodio</b>. b) hidruro metálico, <b>hidruro de calcio</b>. c) hidruro no metálico, <b>bromuro de hidrógeno</b>. d) hidrácido, <b>ácido bromhídrico</b>. e) sal ácida, <b>hidrogenocarbonato de potasio</b>. f) óxido ácido, <b>óxido de azufre (VI)</b>.",
 sol: "<b>Paso 1 · mirar con qué se combina cada elemento y en qué estado está.</b> → <b>a)</b> Metal con oxígeno, pero con O en −1 (2 Na = +2, 2 O = −2): no es un óxido sino un <b>peróxido</b>. → <b>b)</b> Metal con hidrógeno: el H está en −1 y es un <b>hidruro metálico</b>, hidruro de calcio. → <b>c) y d)</b> Es la misma fórmula con dos nombres: gaseoso es el hidruro no metálico, <b>bromuro de hidrógeno</b>; disuelto en agua, el hidrácido, <b>ácido bromhídrico</b>. → <b>e)</b> Tiene metal, H, C y O: viene de un oxoácido (el carbónico) neutralizado a medias. Es una <b>sal ácida</b>. → <b>f)</b> No metal con oxígeno: <b>óxido ácido</b>. El azufre vale +6 (S + 3(−2) = 0), por eso óxido de azufre (VI). → <b>Control.</b> Un solo elemento más el oxígeno es un óxido; si además hay H y otro elemento, mirá si viene de un ácido o de un hidróxido. En el KHCO<sub>3</sub> = K<sup>+</sup> + HCO<sub>3</sub><sup>-</sup>: al H<sub>2</sub>CO<sub>3</sub> le falta un H, pero conserva otro, por eso es sal ácida. → <b>Error típico:</b> llamar “ácido clorhídrico” o “bromhídrico” a la sustancia gaseosa: el nombre de ácido necesita el estado (ac)."},

{st: "<b>Básico · Los ácidos del bromo.</b> El bromo forma ácidos con oxígeno cuando actúa con +1, +3, +5 y +7. Escribí la fórmula y el nombre tradicional del ácido, y la fórmula y el nombre de su sal de sodio, para +5 y para +7.",
 ans: "+5: <b>HBrO<sub>3</sub></b>, ácido brómico; <b>NaBrO<sub>3</sub></b>, bromato de sodio. +7: <b>HBrO<sub>4</sub></b>, ácido perbrómico; <b>NaBrO<sub>4</sub></b>, perbromato de sodio.",
 sol: "<b>Paso 1 · el óxido y el agua.</b> Con +5, el óxido es Br<sub>2</sub>O<sub>5</sub>. Br<sub>2</sub>O<sub>5</sub> + H<sub>2</sub>O → H<sub>2</sub>Br<sub>2</sub>O<sub>6</sub>, y como todo es par se divide por 2: <b>HBrO<sub>3</sub></b>. Chequeo: (+1) + (+5) + 3(−2) = 0. → <b>Paso 2 · el nombre.</b> Con +5 corresponde -ico: ácido brómico. Al perder el H<sup>+</sup>, -ico pasa a -ato: BrO<sub>3</sub><sup>-</sup>, bromato. Con Na<sup>+</sup> el cruce es 1 a 1: <b>NaBrO<sub>3</sub></b>, bromato de sodio. → <b>Paso 3 · con +7.</b> Br<sub>2</sub>O<sub>7</sub> + H<sub>2</sub>O → H<sub>2</sub>Br<sub>2</sub>O<sub>8</sub> → <b>HBrO<sub>4</sub></b> (+1 + 7 − 8 = 0). Es el número más alto, el de los halógenos con prefijo per-: ácido <b>per</b>brómico y <b>per</b>bromato de sodio, NaBrO<sub>4</sub>. → <b>Control.</b> Los prefijos y los sufijos son los mismos que los del cloro. → <b>Error típico:</b> escribir “brómico” para ambos y olvidar el per- del +7."},

{st: "<b>Intermedio · Del óxido a la sal.</b> El dióxido de azufre reacciona con agua. a) Escribí la reacción y nombrá el ácido que se forma (tradicional). b) ¿Qué anión queda cuando ese ácido pierde sus dos H<sup>+</sup> y cómo se llama? c) Escribí la fórmula y el nombre de la sal que forma ese anión con Al<sup>3+</sup>.",
 ans: "a) SO<sub>2</sub> + H<sub>2</sub>O → <b>H<sub>2</sub>SO<sub>3</sub></b>, ácido sulfuroso. b) <b>SO<sub>3</sub><sup>2-</sup></b>, sulfito. c) <b>Al<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub></b>, sulfito de aluminio.",
 sol: "<b>Paso 1 · el número de oxidación.</b> En el SO<sub>2</sub>: S + 2(−2) = 0 → S = +4. → <b>Paso 2 · el ácido.</b> Se suman los átomos del óxido y del agua: SO<sub>2</sub> + H<sub>2</sub>O = H<sub>2</sub>SO<sub>3</sub>. No se divide por 2, porque hay un solo S. Chequeo: 2(+1) + 4 + 3(−2) = 0. El azufre usa su número menor, +4, así que es -oso: <b>ácido sulfuroso</b> (el sulfúrico es el de +6, H<sub>2</sub>SO<sub>4</sub>). → <b>Paso 3 · el anión.</b> Al perder los dos H<sup>+</sup> queda SO<sub>3</sub><sup>2-</sup>; -oso pasa a -ito: <b>sulfito</b>. → <b>Paso 4 · la sal.</b> Al<sup>3+</sup> y SO<sub>3</sub><sup>2-</sup>: la carga 3 del aluminio es el subíndice del sulfito y la carga 2 del sulfito es el del aluminio, con paréntesis porque el anión es poliatómico y se repite: <b>Al<sub>2</sub>(SO<sub>3</sub>)<sub>3</sub></b>. Chequeo: 2(+3) + 3(−2) = 0. → <b>Error típico:</b> llamarla sulfato: sulfato es el anión del ácido sulfúrico, con un O más."},

{st: "<b>Intermedio · De nombre a fórmula con cruce de cargas.</b> Escribí la fórmula de: a) hipoclorito de calcio; b) fosfato de calcio; c) dihidrogenofosfato de sodio.",
 ans: "a) <b>Ca(ClO)<sub>2</sub></b>. b) <b>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></b>. c) <b>NaH<sub>2</sub>PO<sub>4</sub></b>.",
 sol: "<b>Paso 1 · catión y anión con su carga.</b> → <b>a)</b> Ca<sup>2+</sup> y ClO<sup>-</sup> (hipoclorito, del ácido hipocloroso HClO). El calcio tiene carga 2, así que hacen falta dos ClO<sup>-</sup>; el anión tiene más de un átomo, entonces va entre paréntesis: <b>Ca(ClO)<sub>2</sub></b>. Chequeo: (+2) + 2(−1) = 0. → <b>b)</b> Ca<sup>2+</sup> y PO<sub>4</sub><sup>3-</sup>. Se cruzan las cargas: 3 Ca y 2 PO<sub>4</sub>, y ya no se puede simplificar: <b>Ca<sub>3</sub>(PO<sub>4</sub>)<sub>2</sub></b>. Chequeo: 3(+2) + 2(−3) = 0. → <b>c)</b> “Dihidrógeno” indica que al anión le quedan <b>dos</b> H: es el H<sub>2</sub>PO<sub>4</sub><sup>-</sup>, de carga −1. Con Na<sup>+</sup> se combinan 1 a 1 y no hace falta paréntesis: <b>NaH<sub>2</sub>PO<sub>4</sub></b>. Chequeo: (+1) + 2(+1) + (+5) + 4(−2) = 0. → <b>Error típico:</b> cruzar al revés y escribir Ca<sub>2</sub>(PO<sub>4</sub>)<sub>3</sub>: la suma da 2(+2) + 3(−3) = −5 y no 0."},

{st: "<b>Intermedio · De fórmula a nombre con el romano.</b> Nombrá en Stock (y en tradicional si corresponde): a) FeSO<sub>4</sub>; b) Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>; c) Cu(NO<sub>3</sub>)<sub>2</sub>; d) Na<sub>2</sub>SO<sub>3</sub>.",
 ans: "a) <b>sulfato de hierro (II)</b> (ferroso). b) <b>sulfato de hierro (III)</b> (férrico). c) <b>nitrato de cobre (II)</b> (cúprico). d) <b>sulfito de sodio</b>.",
 sol: "<b>Paso 1 · separar el anión.</b> En a) y b) es SO<sub>4</sub><sup>2-</sup> (sulfato); en c), NO<sub>3</sub><sup>-</sup> (nitrato); en d), SO<sub>3</sub><sup>2-</sup> (sulfito). → <b>Paso 2 · la carga del metal sale de la suma.</b> a) Un solo SO<sub>4</sub><sup>2-</sup> (−2): el Fe es <b>+2</b>. b) Tres SO<sub>4</sub><sup>2-</sup> suman −6, repartidos entre <b>dos</b> Fe: cada uno es +3. c) Dos NO<sub>3</sub><sup>-</sup> suman −2: el Cu es +2. Con el cobre, +1 es cuproso y +2 es cúprico. d) El sodio tiene un único número de oxidación, +1: no lleva romano. → <b>Control.</b> b) 2(+3) + 3(−2) = 0. → <b>Error típico:</b> tomar el subíndice del metal como número romano y escribir “hierro (II)” para el Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>; el romano es el número de oxidación y no la cantidad de átomos."},

{st: "<b>Intermedio · Sales ácidas de un ácido con tres H.</b> El ácido fosfórico, H<sub>3</sub>PO<sub>4</sub>, se neutraliza con NaOH en tres proporciones: 1 mol de ácido con 1 mol, con 2 mol y con 3 mol de NaOH. Escribí las tres reacciones balanceadas y nombrá cada sal.",
 ans: "1:1, <b>NaH<sub>2</sub>PO<sub>4</sub></b>, dihidrogenofosfato de sodio. 1:2, <b>Na<sub>2</sub>HPO<sub>4</sub></b>, hidrogenofosfato de sodio. 1:3, <b>Na<sub>3</sub>PO<sub>4</sub></b>, fosfato de sodio.",
 sol: "<b>Paso 1 · cada NaOH le saca un H<sup>+</sup> al ácido</b> (el OH<sup>-</sup> forma agua con él). → <b>Paso 2 · 1 mol de NaOH.</b> H<sub>3</sub>PO<sub>4</sub> + NaOH → NaH<sub>2</sub>PO<sub>4</sub> + H<sub>2</sub>O. Le quedan <b>dos</b> H al anión: <b>dihidrogeno</b>fosfato de sodio. → <b>Paso 3 · 2 mol.</b> H<sub>3</sub>PO<sub>4</sub> + 2 NaOH → Na<sub>2</sub>HPO<sub>4</sub> + 2 H<sub>2</sub>O. Le queda <b>un</b> H: <b>hidrogeno</b>fosfato de sodio. → <b>Paso 4 · 3 mol.</b> H<sub>3</sub>PO<sub>4</sub> + 3 NaOH → Na<sub>3</sub>PO<sub>4</sub> + 3 H<sub>2</sub>O. No queda H: fosfato de sodio, la sal neutra. → <b>Control.</b> En cada caso los átomos de cada elemento son iguales a los dos lados y los H que entran con el ácido son los que se van como agua más los que quedan en el anión. → <b>Error típico:</b> llamar “bifosfato” a la primera: no dice cuántos H quedan. Usá dihidrogenofosfato (quedan dos H) e hidrogenofosfato (queda uno)."},

{st: "<b>Avanzado · Cadena de formación con nombres y balanceo.</b> El hierro reacciona con oxígeno y forma óxido de hierro (III). Ese óxido, formalmente con agua, da un hidróxido, y el hidróxido, con ácido sulfúrico, da una sal y agua. a) Escribí y balanceá las tres reacciones. b) Nombrá cada especie en Stock (y el óxido en las tres nomenclaturas). c) ¿Cuántos mol de H<sub>2</sub>SO<sub>4</sub> neutralizan 4 mol de Fe(OH)<sub>3</sub>?",
 ans: "a) 4 Fe + 3 O<sub>2</sub> → 2 Fe<sub>2</sub>O<sub>3</sub>; Fe<sub>2</sub>O<sub>3</sub> + 3 H<sub>2</sub>O → 2 Fe(OH)<sub>3</sub>; 2 Fe(OH)<sub>3</sub> + 3 H<sub>2</sub>SO<sub>4</sub> → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6 H<sub>2</sub>O. b) Fe<sub>2</sub>O<sub>3</sub>: <b>óxido de hierro (III)</b> / óxido férrico / trióxido de dihierro; Fe(OH)<sub>3</sub>: <b>hidróxido de hierro (III)</b>; Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: <b>sulfato de hierro (III)</b>. c) <b>6 mol de H<sub>2</sub>SO<sub>4</sub></b>.",
 sol: "<b>Paso 1 · las fórmulas.</b> Hierro (III) con O<sup>2-</sup>: cruce 2 y 3, Fe<sub>2</sub>O<sub>3</sub>. Su hidróxido: Fe<sup>3+</sup> con OH<sup>-</sup>, Fe(OH)<sub>3</sub>. La sal con el sulfato: Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>. → <b>Paso 2 · balancear la primera.</b> Fe + O<sub>2</sub> → Fe<sub>2</sub>O<sub>3</sub>. El O<sub>2</sub> tiene 2 átomos de O y el Fe<sub>2</sub>O<sub>3</sub> tiene 3: el mínimo común múltiplo es 6 O, entonces 3 O<sub>2</sub> (6 O) y 2 Fe<sub>2</sub>O<sub>3</sub> (6 O). Eso pide 4 Fe: <b>4 Fe + 3 O<sub>2</sub> → 2 Fe<sub>2</sub>O<sub>3</sub></b>. → <b>Paso 3 · la segunda.</b> Fe<sub>2</sub>O<sub>3</sub> + 3 H<sub>2</sub>O → 2 Fe(OH)<sub>3</sub>: Fe 2 = 2, O 3 + 3 = 6 = 6, H 6 = 6. Es el camino formal para deducir la fórmula: el Fe<sub>2</sub>O<sub>3</sub> no reacciona de verdad con agua. → <b>Paso 4 · la tercera.</b> Para 2 Fe se necesitan 3 SO<sub>4</sub>, entonces 3 H<sub>2</sub>SO<sub>4</sub>; los 6 H del hidróxido y los 6 del ácido salen como <b>6 H<sub>2</sub>O</b>: <b>2 Fe(OH)<sub>3</sub> + 3 H<sub>2</sub>SO<sub>4</sub> → Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> + 6 H<sub>2</sub>O</b> (O: 6 + 12 = 18 = 12 + 6). → <b>Paso 5 · los nombres.</b> Fe: hierro. O<sub>2</sub>: oxígeno. Fe<sub>2</sub>O<sub>3</sub>: <b>óxido de hierro (III)</b>, en tradicional óxido férrico y en sistemática trióxido de dihierro. Fe(OH)<sub>3</sub>: hidróxido de hierro (III). H<sub>2</sub>SO<sub>4</sub>: ácido sulfúrico. Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>: sulfato de hierro (III). H<sub>2</sub>O: agua. → <b>Paso 6 · el ítem c).</b> La relación es 2 mol de Fe(OH)<sub>3</sub> : 3 mol de H<sub>2</sub>SO<sub>4</sub>. Con 4 mol: n = 4 × 3/2 = <b>6 mol</b>. → <b>Control.</b> Cada Fe(OH)<sub>3</sub> aporta 3 OH<sup>-</sup> y cada H<sub>2</sub>SO<sub>4</sub> aporta 2 H<sup>+</sup>: 4 × 3 = 12 OH<sup>-</sup> piden 12/2 = 6 mol de ácido. → <b>Error típico:</b> olvidar que el hierro es +3 y escribir Fe(OH)<sub>2</sub> o FeSO<sub>4</sub>, que son de hierro (II)."},


  {st: '<b>1er Recuperatorio · 14/06/24 · Ejercicio 1a (textual).</b> “5,0 gramos de una mezcla de 20 % en masa de carbonato de calcio y 80 % en masa de hidrogenocarbonato de calcio se calientan fuertemente hasta la descomposición total de ambos compuestos con un 90 % de rendimiento. <span class="muted">(la estequiometría y el pH de este ejercicio, en las secciones 8 y 11)</span> Las reacciones de descomposición se dan según las siguientes reacciones: Ca(HCO<sub>3</sub>)<sub>2</sub>(s) → CaO(s) + 2 CO<sub>2</sub>(g) + H<sub>2</sub>O(l) ; CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g). a) Calcule el volumen total de CO<sub>2</sub>(g) obtenido en ambas reacciones en CNPT por la descomposición de la mezcla.”',
   ans: '<b>V(CO<sub>2</sub>) = 1,20 L en CNPT</b> (0,05341 mol). El paso de nomenclatura es asignar el 20 % al CaCO<sub>3</sub> (M = 100,09 g/mol, 1 CO<sub>2</sub> por mol) y el 80 % al Ca(HCO<sub>3</sub>)<sub>2</sub> (M = 162,11 g/mol, <b>2</b> CO<sub>2</sub> por mol).',
   sol: '<b>Paso 0: traducir los dos nombres, que es de lo que va esta sección.</b><br>“Carbonato de calcio” → Ca<sup>2+</sup> + CO<sub>3</sub><sup>2-</sup> → cruce 2/2, simplifica → <b>CaCO<sub>3</sub></b> → chequeo: (+2) + (+4) + 3(−2) = 0 ✓ → M = 40,08 + 12,01 + 3(16,00) = <b>100,09 g/mol</b>.<br>“Hidrogenocarbonato de calcio” → Ca<sup>2+</sup> + HCO<sub>3</sub><sup>-</sup> → hacen falta <b>dos</b> aniones → <b>Ca(HCO<sub>3</sub>)<sub>2</sub></b> → chequeo: (+2) + 2(−1) = 0 ✓ → M = 40,08 + 2(1,008 + 12,011 + 3·15,999) = <b>162,11 g/mol</b>.<br><br><b>1) Masas de cada componente.</b> 20 % de 5,0 g = <b>1,0 g de CaCO<sub>3</sub></b> · 80 % de 5,0 g = <b>4,0 g de Ca(HCO<sub>3</sub>)<sub>2</sub></b>.<br><br><b>2) Moles.</b> n(CaCO<sub>3</sub>) = 1,0/100,09 = <b>9,99·10<sup>-3</sup> mol</b> · n(Ca(HCO<sub>3</sub>)<sub>2</sub>) = 4,0/162,11 = <b>2,467·10<sup>-2</sup> mol</b>.<br><br><b>3) CO<sub>2</sub> teórico, con la estequiometría de cada ecuación.</b> El CaCO<sub>3</sub> da 1 CO<sub>2</sub> por mol y el Ca(HCO<sub>3</sub>)<sub>2</sub> da <b>2</b>:<br>n(CO<sub>2</sub>) = 9,99·10<sup>-3</sup> · 1 + 2,467·10<sup>-2</sup> · 2 = <b>5,934·10<sup>-2</sup> mol</b>.<br><br><b>4) Rendimiento del 90 %.</b> n<sub>real</sub> = 0,90 · 5,934·10<sup>-2</sup> = <b>5,341·10<sup>-2</sup> mol</b>.<br><br><b>5) A volumen en CNPT.</b> V = 5,341·10<sup>-2</sup> mol × 22,4 L/mol = <b>1,196 L ≈ 1,20 L</b>.<br><br><b>El chequeo dimensional</b>: (g/(g/mol)) × (mol CO<sub>2</sub>/mol) × (L/mol) = L ✓.<br><br><b>Y lo que se pierde si la traducción falla.</b> Con “CaHCO<sub>3</sub>” (compuesto inexistente, M = 101,10) y relación 1:1 el resultado sería <b>1,00 L</b>: 17 % abajo, con las cuentas impecables. El único filtro es el chequeo Σ(nº ox × atomicidad) = 0, que descarta CaHCO<sub>3</sub> porque da +2 −1 = +1 ≠ 0.<br><br><b>Bonus, el ítem b) del mismo ejercicio</b>, que también depende de las fórmulas: el CaO total real es (9,99·10<sup>-3</sup> + 2,467·10<sup>-2</sup>) × 0,90 = <b>0,0312 mol</b> → en 10 L de agua da Ca(OH)<sub>2</sub> <b>3,12·10<sup>-3</sup> M</b> → base fuerte con <b>2</b> OH<sup>-</sup> por fórmula → [OH<sup>-</sup>] = 6,24·10<sup>-3</sup> → pOH = 2,20 → <b>pH = 11,80</b>. <span class="muted">El “2” sale del paréntesis del Ca(OH)<sub>2</sub>: otra vez nomenclatura.</span>'},

  {st: '<b>2do Recuperatorio · 27/06/25 · Ejercicio 1 (textual).</b> “Se desea preparar 20 g de cloruro crómico según la reacción: K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>(ac) + 14 HCl(ac) → 2 CrCl<sub>3</sub>(ac) + 3 Cl<sub>2</sub>(g) + 2 KCl(ac) + 7 H<sub>2</sub>O(l). a) Chequear si es correcto el balanceo de la ecuación aplicando el método del ión electrón; b) calcular la masa de dicromato de potasio impuro necesaria si el rendimiento de la reacción es 80 % y la pureza de la droga 75 %; c) ¿qué masa de cloruro de potasio se obtiene? d) ¿Qué volumen ocupa el gas obtenido si se mide en condiciones normales de presión y temperatura?” <span class="muted">(Resolvemos la parte que depende de la nomenclatura: identificar las cuatro especies y los ítems b, c y d. El ión-electrón del a) está en la sección 8.)</span>',
   ans: 'Cloruro crómico = <b>CrCl<sub>3</sub></b> (M = 158,35) · dicromato de potasio = <b>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub></b> (M = 294,18) · cloruro de potasio = <b>KCl</b> (74,55) · el gas es <b>Cl<sub>2</sub></b>. → b) <b>30,96 g</b> de dicromato impuro · c) <b>9,42 g</b> de KCl · d) <b>4,24 L</b> de Cl<sub>2</sub> en CNPT.',
   sol: '<b>Paso 0: los cuatro nombres.</b> En la ecuación hay <b>dos cloruros</b>, y el enunciado nunca los desambigua con la fórmula.<br>→ <b>“Cloruro crómico”</b>: sufijo -ico ⇒ el mayor número de oxidación del Cr entre los que forman cloruro ⇒ <b>Cr(+3)</b> → Cr<sup>3+</sup> + 3 Cl<sup>-</sup> ⇒ <b>CrCl<sub>3</sub></b>. En Stock, <b>cloruro de cromo (III)</b>. M = 51,996 + 3(35,45) = <b>158,35 g/mol</b>.<br>→ <b>“Dicromato de potasio”</b>: el anión dicromato es Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>, con Cr(+6) → dos K<sup>+</sup> ⇒ <b>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub></b> → chequeo: 2(+1) + 2(+6) + 7(−2) = 0 ✓ → M = <b>294,18 g/mol</b>.<br>→ <b>“Cloruro de potasio”</b> = KCl, M = <b>74,55</b>. → <b>“el gas obtenido”</b> es el <b>Cl<sub>2</sub></b>, el único (g) de la ecuación.<br><br><b>b) Masa de dicromato impuro.</b><br>n(CrCl<sub>3</sub>) = 20/158,35 = <b>0,12631 mol</b>.<br>Estequiometría 1 K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> : 2 CrCl<sub>3</sub> → n(dicromato) que <b>reaccionó</b> = 0,12631/2 = <b>0,06315 mol</b>.<br>Rendimiento 80 % → hay que <b>cargar más</b>: n = 0,06315/0,80 = <b>0,07894 mol</b> → m<sub>puro</sub> = 0,07894 × 294,18 = <b>23,22 g</b>.<br>Pureza 75 % → m<sub>impuro</sub> = 23,22/0,75 = <b>30,96 g</b>.<br>→ <b>Los dos porcentajes van los dos dividiendo</b>, y ninguno se aplica al producto: el rendimiento porque falta reactivo respecto del ideal, la pureza porque parte de la droga no es dicromato.<br><br><b>c) KCl.</b> La ecuación da 2 KCl por cada K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, la misma proporción que el CrCl<sub>3</sub> → n(KCl) = <b>0,12631 mol</b> → m = 0,12631 × 74,55 = <b>9,42 g</b>.<br><br><b>d) Cl<sub>2</sub> en CNPT.</b> 3 Cl<sub>2</sub> por cada dicromato que <b>reaccionó</b> (0,06315 mol, no los 0,07894 cargados) → n = 0,18946 mol → V = 0,18946 × 22,4 = <b>4,24 L</b>.<br><br><b>Si leés “cromoso” en vez de “crómico”</b>: CrCl<sub>2</sub>, M = 122,90 → 0,16274 mol → 28,8 % más → y b), c) y d) salen todos mal. No hay ningún chequeo interno del ejercicio que lo detecte.'},

  {st: '<b>2do Recuperatorio · 6/12/24 · Ejercicio 3a y 3b (textual).</b> “El laboratorio de control de una industria alimenticia debe verificar la calidad de un vinagre de cocina en cuya etiqueta indica que posee un 5 % m/V de ácido acético (ácido etanoico). Para ello se toman 3 ml de una muestra de vinagre, se le agrega un poco de agua destilada y unas gotas de fenolftaleína y se titula con una solución de hidróxido de sodio 0,1250 M, consumiendo 17,85 ml de la solución de hidróxido hasta el viraje del indicador. a) Escriba la reacción de neutralización y nombre todos los reactivos y productos involucrados. Indique cuál es el color de la fenolftaleína antes y después del punto de equivalencia. b) Indique si el vinagre ensayado cumple con las condiciones de calidad para ser puesto a la venta.”',
   ans: 'a) CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O → <b>ácido etanoico (acético) + hidróxido de sodio → etanoato de sodio (acetato de sodio) + agua</b>. Fenolftaleína: <b>incolora</b> antes, <b>rosa/fucsia</b> después. → b) <b>4,47 % m/V medido contra 5 % declarado: NO cumple.</b>',
   sol: '<b>a) Los cuatro nombres: es el ítem, y vale 8 puntos sobre 100 según la grilla impresa.</b><br>→ <b>CH<sub>3</sub>COOH</b>: dos carbonos ⇒ prefijo <b>et-</b>; grupo –COOH ⇒ <b>ácido …-oico</b> → <b>ácido etanoico</b>, nombre vulgar <b>ácido acético</b>. El enunciado te da los dos, pero no la fórmula.<br>→ <b>NaOH</b>: <b>hidróxido de sodio</b>. Sin romano: el Na sólo tiene +1.<br>→ <b>CH<sub>3</sub>COONa</b>: es una <b>sal</b>, no un éster → el sufijo del ácido pasa de -oico a <b>-ato</b> y sigue el metal → <b>etanoato de sodio</b> (vulgar: <b>acetato de sodio</b>). → Ojo: “etanoato de <b>etilo</b>” sería el éster CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>. Lo que va después de “de” decide: metal ⇒ sal, radical en -ilo ⇒ éster.<br>→ <b>H<sub>2</sub>O</b>: <b>agua</b> (hidruro no metálico del oxígeno, que conserva el nombre vulgar).<br>→ <b>Indicador</b>: la fenolftaleína vira en zona alcalina → <b>incolora</b> mientras hay ácido en exceso, <b>rosa</b> pasado el punto de equivalencia. Y acá el punto de equivalencia está a <b>pH &gt; 7</b>, porque el etanoato es la base conjugada de un ácido débil e hidroliza.<br><br><b>b) La verificación, que arranca en M = 60,05 g/mol.</b><br>Fórmula del ácido acético: C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> → M = 2(12,011) + 4(1,008) + 2(15,999) = <b>60,05 g/mol</b>. <b>El enunciado no la da.</b><br>n(NaOH) = 0,1250 mol/L × 0,01785 L = <b>2,2313·10<sup>-3</sup> mol</b>.<br>Relación 1:1 (el acético es monoprótico) → n(CH<sub>3</sub>COOH) = <b>2,2313·10<sup>-3</sup> mol</b> en 3,00 mL.<br>C = 2,2313·10<sup>-3</sup>/0,003 = <b>0,7438 M</b>.<br>% m/V = 0,7438 mol/L × 60,05 g/mol ÷ 10 = <b>4,47 g/100 mL = 4,47 % m/V</b>.<br>→ <b>4,47 &lt; 5,00 ⇒ el vinagre NO cumple con lo declarado en la etiqueta.</b> Está un <b>10,7 % por debajo</b>.<br><br><b>Bonus, el ítem c)</b>, que vuelve a depender de una fórmula: “si se reemplaza el titulante por <b>hidróxido de calcio</b> de igual concentración molar, ¿cuántos mililitros gastaría para titular 5 ml de vinagre?”. El Ca(OH)<sub>2</sub> aporta <b>2</b> OH<sup>-</sup> por fórmula → 2 CH<sub>3</sub>COOH + Ca(OH)<sub>2</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + 2 H<sub>2</sub>O → n(ácido en 5 mL) = 0,7438 × 0,005 = 3,719·10<sup>-3</sup> mol → n(Ca(OH)<sub>2</sub>) = la mitad = 1,859·10<sup>-3</sup> → V = 1,859·10<sup>-3</sup>/0,1250 = <b>14,88 mL</b>. Quien escriba “CaOH” gasta el doble.'},

  {st: '<b>G05A, ejercicios 9 y 10 · el ida y vuelta completo.</b> “9) Escribir la fórmula química de los compuestos siguientes: 1) sulfato de calcio; 2) hidrógenocarbonato de sodio; 3) sulfato de amonio; 4) hidrógenosulfuro de sodio; 5) hidróxido de cinc; 6) ácido fosfórico. 10) Escribir el nombre a los compuestos siguientes: 1) NaHSO<sub>3</sub>; 2) Ba(OH)<sub>2</sub>; 3) Na<sub>2</sub>CO<sub>3</sub>; 4) CaHPO<sub>4</sub>; 5) Fe(OH)<sub>2</sub>; 6) NH<sub>4</sub>NO<sub>3</sub>”',
   ans: '<b>9)</b> CaSO<sub>4</sub> · NaHCO<sub>3</sub> · (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> · NaHS · Zn(OH)<sub>2</sub> · H<sub>3</sub>PO<sub>4</sub>. → <b>10)</b> hidrogenosulfito de sodio (bisulfito) · hidróxido de bario · carbonato de sodio · hidrogenofosfato de calcio · hidróxido de hierro (II) o ferroso · nitrato de amonio.',
   sol: '<b>Ejercicio 9: de nombre a fórmula, con el cruce y el chequeo cada vez.</b><br>→ <b>Sulfato de calcio</b>: Ca<sup>2+</sup> + SO<sub>4</sub><sup>2-</sup> → cruce 2/2 → simplifica a 1/1 → <b>CaSO<sub>4</sub></b> → (+2) + (+6) + 4(−2) = 0 ✓<br>→ <b>Hidrógenocarbonato de sodio</b>: Na<sup>+</sup> + HCO<sub>3</sub><sup>-</sup> → 1/1 → <b>NaHCO<sub>3</sub></b> → (+1) + (−1) = 0 ✓ <span class="muted">(el bicarbonato de la farmacia)</span><br>→ <b>Sulfato de amonio</b>: NH<sub>4</sub><sup>+</sup> + SO<sub>4</sub><sup>2-</sup> → hacen falta 2 amonios → <b>(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></b> → el paréntesis es obligatorio, “NH<sub>8</sub>SO<sub>4</sub>” no significa nada.<br>→ <b>Hidrógenosulfuro de sodio</b>: Na<sup>+</sup> + HS<sup>-</sup> → <b>NaHS</b>. Sin oxígeno, por eso -uro y no -ito/-ato.<br>→ <b>Hidróxido de cinc</b>: Zn<sup>2+</sup> + OH<sup>-</sup> → <b>Zn(OH)<sub>2</sub></b>. El Zn tiene un solo número de oxidación: <b>no lleva romano</b>.<br>→ <b>Ácido fosfórico</b>: es el <b>orto</b>fosfórico → 3 H<sup>+</sup> + PO<sub>4</sub><sup>3-</sup> → <b>H<sub>3</sub>PO<sub>4</sub></b> → 3(+1) + (+5) + 4(−2) = 0 ✓ <span class="muted">(T05A muestra las tres hidrataciones del P<sub>2</sub>O<sub>5</sub>: meta HPO<sub>3</sub>, piro H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>, orto H<sub>3</sub>PO<sub>4</sub>; “fosfórico” a secas es el orto)</span><br><br><b>Ejercicio 10: de fórmula a nombre.</b><br>→ <b>NaHSO<sub>3</sub></b>: catión Na<sup>+</sup>, anión HSO<sub>3</sub><sup>-</sup> → tiene oxígeno y un H que sobró → <b>hidrogenosulfito de sodio</b> (bisulfito, sulfito ácido). Cuenta sobre el anión: (+1) + S + 3(−2) = −1 ⇒ <b>S = +4</b> ⇒ es sulf<b>ito</b>, no sulfato ✓<br>→ <b>Ba(OH)<sub>2</sub></b>: <b>hidróxido de bario</b>. Alcalino-térreo: sin romano.<br>→ <b>Na<sub>2</sub>CO<sub>3</sub></b>: <b>carbonato de sodio</b>. C = +4: 2(+1) + C + 3(−2) = 0 ✓<br>→ <b>CaHPO<sub>4</sub></b>: Ca<sup>2+</sup> + HPO<sub>4</sub><sup>2-</sup> → <b>hidrogenofosfato de calcio</b>. Ojo: el fosfórico es <b>triprótico</b>, así que además del PO<sub>4</sub><sup>3-</sup> y del HPO<sub>4</sub><sup>2-</sup> existe el H<sub>2</sub>PO<sub>4</sub><sup>-</sup> (dihidrogenofosfato). El prefijo cuenta los H.<br>→ <b>Fe(OH)<sub>2</sub></b>: el Fe tiene <b>dos</b> números de oxidación ⇒ el romano es <b>obligatorio</b> → 2 OH<sup>-</sup> ⇒ Fe(+2) ⇒ <b>hidróxido de hierro (II)</b>, tradicional <b>hidróxido ferroso</b>.<br>→ <b>NH<sub>4</sub>NO<sub>3</sub></b>: catión <b>amonio</b> NH<sub>4</sub><sup>+</sup> y anión <b>nitrato</b> NO<sub>3</sub><sup>-</sup> → <b>nitrato de amonio</b>. Es la única sal del ejercicio <b>sin metal</b>: el catión es poliatómico.<br><br><b>Los doce cruces cumplen</b> la condición x·q<sub>catión</sub> = y·|q<sub>anión</sub>|.'},

  {st: '<b>G05B, ejercicio 7 · leído al revés.</b> La clave de la guía publica estos once nombres. Escribí para cada uno la <b>fórmula semidesarrollada</b> (que es el camino que después pide el examen) y justificá la numeración: a) metilbutano; b) 1-cloro-3-metilbutano; c) 2-bromo-1-hexeno; d) 1,3-pentanodiol; e) 3-hidroxibutanal; f) dietilamina; g) ciclopentanona; h) etilmetiléter; i) 3-metilbutanoato de metilo; j) ácido 3-hidroxipropanoico; k) N-etiletanamida. <span class="muted">(Los nombres son tal cual los de la clave de G05B; las estructuras del enunciado original son imágenes.)</span>',
   ans: 'a) CH<sub>3</sub>-CH(CH<sub>3</sub>)-CH<sub>2</sub>-CH<sub>3</sub> · b) ClCH<sub>2</sub>-CH<sub>2</sub>-CH(CH<sub>3</sub>)-CH<sub>3</sub> · c) CH<sub>2</sub>=CBr-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>2</sub>-CH<sub>3</sub> · d) HOCH<sub>2</sub>-CH<sub>2</sub>-CHOH-CH<sub>2</sub>-CH<sub>3</sub> · e) CH<sub>3</sub>-CHOH-CH<sub>2</sub>-CHO · f) CH<sub>3</sub>CH<sub>2</sub>-NH-CH<sub>2</sub>CH<sub>3</sub> · g) ciclo de 5 C con un C=O · h) CH<sub>3</sub>CH<sub>2</sub>-O-CH<sub>3</sub> · i) (CH<sub>3</sub>)<sub>2</sub>CH-CH<sub>2</sub>-COO-CH<sub>3</sub> · j) HOCH<sub>2</sub>-CH<sub>2</sub>-COOH · k) CH<sub>3</sub>-CO-NH-CH<sub>2</sub>CH<sub>3</sub>',
   sol: '<b>a) metilbutano</b> → but- = 4 C, -ano = saturado, con un metilo colgando. Sólo hay una posición posible (en el C1 sería pentano), por eso la cátedra omite el localizador; la IUPAC estricta escribe <b>2-metilbutano</b>.<br><b>b) 1-cloro-3-metilbutano</b> → cadena de 4 C, Cl en el 1, metilo en el 3. El halógeno <b>no manda</b> la numeración por ser función; manda por ser el sustituyente que consigue los números más bajos: 1,3 gana a 2,4.<br><b>c) 2-bromo-1-hexeno</b> → 6 C con doble enlace entre C1 y C2 (el localizador indica el <b>primer</b> carbono del doble enlace) y Br en el C2. <b>El doble enlace tiene prioridad sobre el halógeno</b> para numerar.<br><b>d) 1,3-pentanodiol</b> → 5 C, dos OH en 1 y 3. “di-” va antes de “-ol”, y la <b>o</b> de “pentano” se conserva: pentano<b>diol</b>, no “pentandiol”.<br><b>e) 3-hidroxibutanal</b> → 4 C, aldehído en el extremo. <b>El CHO es forzosamente el C1</b> (T05B: “función siempre en C primario”), así que el OH queda en el <b>3</b>. Si numeraras al revés dirías “2-hidroxibutanal”, que es otro compuesto. El aldehído gana el sufijo y el alcohol baja a prefijo <b>hidroxi-</b>.<br><b>f) dietilamina</b> → amina <b>secundaria</b>: dos radicales iguales sobre el N ⇒ prefijo <b>di-</b>. Si fueran distintos, se nombraría N-sustituida (ver k).<br><b>g) ciclopentanona</b> → ciclo de 5 C con un C=O. En un ciclo la cetona no necesita localizador si es la única: el carbono del carbonilo es el 1 por definición.<br><b>h) etilmetiléter</b> → nomenclatura radicofuncional de T05B: los dos radicales unidos al O <b>por orden alfabético</b> (etil antes que metil) + la palabra éter. En nomenclatura sustitutiva sería <b>metoxietano</b>.<br><b>i) 3-metilbutanoato de metilo</b> → éster. <b>La parte “-ato” es el ácido</b> (ácido 3-metilbutanoico, 4 C con un metilo en el 3) y <b>“de metilo” es el alcohol</b> (CH<sub>3</sub>-). Se lee de derecha a izquierda respecto de cómo se dibuja: R-COO-R\'.<br><b>j) ácido 3-hidroxipropanoico</b> → 3 C, COOH en el C1 (siempre), OH en el C3. El ácido gana el sufijo por estar arriba de todo en la serie de prioridad.<br><b>k) N-etiletanamida</b> → amida <b>secundaria</b>: etanamida (CH<sub>3</sub>-CONH<sub>2</sub>) con un etilo que reemplaza un H <b>del nitrógeno</b>. La <b>N</b> mayúscula es el localizador: dice que el sustituyente no está en la cadena carbonada sino en el N. “2-etiletanamida” sería otra cosa (y de hecho imposible: la etanamida no tiene C2 sustituible así).<br><br><b>El patrón que se repite en los once</b>: primero identificás el <b>grupo funcional principal</b> por el sufijo, eso te fija el C1; después leés los localizadores de los prefijos. Nunca al revés.'},

  {st: '<b>2do Recuperatorio · 27/06/25 · Ejercicio 3b (textual).</b> “A partir de los datos de los siguientes ácidos débiles: Ka (HClO) = 10<sup>-7</sup>; Ka (HF) = 10<sup>-3</sup>; Ka (HCN) = 10<sup>-9</sup>; escribir ecuación de disociación del ácido, indicar <b>fórmula y nombre de sus bases conjugadas</b> y ordenarlas de mayor a menor basicidad justificando su respuesta.”',
   ans: 'HClO ⇌ H<sup>+</sup> + <b>ClO<sup>-</sup> hipoclorito</b> · HF ⇌ H<sup>+</sup> + <b>F<sup>-</sup> fluoruro</b> · HCN ⇌ H<sup>+</sup> + <b>CN<sup>-</sup> cianuro</b>. → Basicidad de mayor a menor: <b>CN<sup>-</sup> &gt; ClO<sup>-</sup> &gt; F<sup>-</sup></b>, porque a menor Ka del ácido, más fuerte la base conjugada (Kb = Kw/Ka).',
   sol: '<b>La parte de nomenclatura, que es la que el enunciado pide explícitamente.</b><br>→ <b>HClO</b> es un <b>oxoácido</b>: Cl con oxígeno. Cl a +1 ⇒ el más bajo de los cuatro ⇒ <b>hipocloroso</b> → su anión cambia <b>-oso por -ito</b> ⇒ <b>ClO<sup>-</sup>, hipoclorito</b>. <span class="muted">(Es el activo de la lavandina, NaClO, hipoclorito de sodio.)</span><br>→ <b>HF</b> es un <b>hidrácido</b>: no tiene oxígeno ⇒ ácido fluor<b>hídrico</b> → su anión cambia <b>-hídrico por -uro</b> ⇒ <b>F<sup>-</sup>, fluoruro</b>.<br>→ <b>HCN</b>: el anión CN<sup>-</sup> conserva el nombre <b>cianuro</b>; el ácido es el cianhídrico. En orgánica, el mismo grupo –C≡N da la familia de los <b>nitrilos</b> (T05B).<br>→ <b>La regla que resuelve las tres</b>: -oso ⇒ -ito · -ico ⇒ -ato · -hídrico ⇒ -uro. Es literal de T05A y sirve tanto para nombrar sales como para nombrar bases conjugadas, que son el mismo anión.<br><br><b>Las ecuaciones de disociación.</b><br>HClO(ac) ⇌ H<sup>+</sup>(ac) + ClO<sup>-</sup>(ac) · HF(ac) ⇌ H<sup>+</sup>(ac) + F<sup>-</sup>(ac) · HCN(ac) ⇌ H<sup>+</sup>(ac) + CN<sup>-</sup>(ac). → Doble flecha ⇌ porque son <b>débiles</b>: la simple → es para los fuertes.<br><br><b>El orden de basicidad.</b> Kb = Kw/Ka con Kw = 10<sup>-14</sup>:<br>Kb(CN<sup>-</sup>) = 10<sup>-14</sup>/10<sup>-9</sup> = <b>10<sup>-5</sup></b> · Kb(ClO<sup>-</sup>) = 10<sup>-14</sup>/10<sup>-7</sup> = <b>10<sup>-7</sup></b> · Kb(F<sup>-</sup>) = 10<sup>-14</sup>/10<sup>-3</sup> = <b>10<sup>-11</sup></b>.<br>→ <b>CN<sup>-</sup> &gt; ClO<sup>-</sup> &gt; F<sup>-</sup></b>. La frase para la hoja: “a menor Ka, más débil el ácido y más fuerte su base conjugada, porque Ka·Kb = Kw es constante a 25 °C”. <span class="muted">El desarrollo ácido-base está en la sección 11; acá lo que se cobra es <b>nombrar</b> los tres aniones.</span>'},

{st: "<b>Química General (CB103) · Intermedio · Sistemática y raíces latinas.</b> Nombrá en sistemática, en tradicional y en Stock: a) Pb(OH)<sub>4</sub>; b) SnCl<sub>2</sub>; c) Au<sub>2</sub>O<sub>3</sub>. Y d) nombrá el CS<sub>2</sub>.",
 ans: "a) <b>tetrahidróxido de plomo</b> · hidróxido plúmbico · hidróxido de plomo (IV). b) <b>dicloruro de estaño</b> · cloruro estannoso · cloruro de estaño (II). c) <b>trióxido de dioro</b> · óxido áurico · óxido de oro (III). d) <b>disulfuro de carbono</b>.",
 sol: "<b>Paso 1 · número de oxidación por la suma.</b> a) Pb + 4(−1) = 0 → +4. b) Sn + 2(−1) = 0 → +2. c) 2 Au + 3(−2) = 0 → +3. → <b>Paso 2 · Stock.</b> El número va en romano: plomo (IV), estaño (II), oro (III). → <b>Paso 3 · tradicional.</b> Con la raíz latina: plumb-, estann-, aur-. El plomo con +4 es el mayor, -ico: plúmbico. El estaño con +2 es el menor, -oso: estannoso. El oro con +3 es el mayor: áurico. → <b>Paso 4 · sistemática.</b> Cada elemento lleva el prefijo del subíndice, y el mono se omite en el primero: tetra-hidróxido, di-cloruro, tri-óxido de di-oro. → <b>Paso 5 · el CS<sub>2</sub>.</b> Son dos no metales: va primero el menos electronegativo (C) y el otro termina en -uro, con el prefijo del subíndice: <b>disulfuro</b> de carbono. No tiene nombre tradicional. → <b>Error típico:</b> escribir “tetrahidróxido de plomo (IV)”: en la sistemática el prefijo ya informa la cantidad, no se pone el romano."},

{st: "<b>Química General (CB103) · Intermedio · Meta, piro y orto.</b> a) Escribí la reacción del P<sub>2</sub>O<sub>5</sub> con 2 H<sub>2</sub>O, nombrá el ácido y el anión que queda cuando pierde todos sus H<sup>+</sup>. b) Nombrá el Na<sub>3</sub>HP<sub>2</sub>O<sub>7</sub> y comprobá el número de oxidación del fósforo. c) Escribí la fórmula del ácido que sale de SiO<sub>2</sub> + H<sub>2</sub>O y de su anión.",
 ans: "a) P<sub>2</sub>O<sub>5</sub> + 2 H<sub>2</sub>O → <b>H<sub>4</sub>P<sub>2</sub>O<sub>7</sub></b>, ácido pirofosfórico; anión <b>P<sub>2</sub>O<sub>7</sub><sup>4-</sup></b>, pirofosfato. b) <b>hidrogenopirofosfato de sodio</b> (pirofosfato ácido de sodio), P = +5. c) <b>H<sub>2</sub>SiO<sub>3</sub></b>, ácido metasilícico; <b>SiO<sub>3</sub><sup>2-</sup></b>, metasilicato.",
 sol: "<b>Paso 1 · a).</b> P<sub>2</sub>O<sub>5</sub> + 2 H<sub>2</sub>O: los átomos suman H<sub>4</sub>P<sub>2</sub>O<sub>7</sub>. Con dos moléculas de agua el prefijo es <b>piro</b>. Al perder los 4 H<sup>+</sup> queda P<sub>2</sub>O<sub>7</sub><sup>4-</sup>, pirofosfato (-ico pasa a -ato). → <b>Paso 2 · b).</b> El anión es HP<sub>2</sub>O<sub>7</sub><sup>3-</sup>: el pirofosfato todavía tiene un H, y los 3 Na<sup>+</sup> compensan la carga −3. Es hidrogenopirofosfato de sodio (también se lo llama pirofosfato ácido de sodio). Número de oxidación: 3(+1) + 1 + 2P + 7(−2) = 0 → 2P = 10 → <b>P = +5</b>. → <b>Paso 3 · c).</b> SiO<sub>2</sub> + H<sub>2</sub>O = H<sub>2</sub>SiO<sub>3</sub>, con una sola molécula de agua: <b>meta</b>silícico. Chequeo: 2(+1) + 4 + 3(−2) = 0. Perdiendo los 2 H<sup>+</sup>: SiO<sub>3</sub><sup>2-</sup>, metasilicato. Con 2 H<sub>2</sub>O sería el H<sub>4</sub>SiO<sub>4</sub>, ortosilícico. → <b>Error típico:</b> llamar fosfato al P<sub>2</sub>O<sub>7</sub><sup>4-</sup>: el fosfato es el PO<sub>4</sub><sup>3-</sup>."}

]);

registerExercises('fiuba-quimica', '6', [

  {st: 'El Ejercicio 1 del 1er Recuperatorio del 14/06/24 habla de “hidrogenocarbonato de calcio”. ¿Cuál es su fórmula y cuál el chequeo que la valida?',
   opts: ['CaHCO<sub>3</sub>, porque el nombre menciona un solo hidrógeno', 'Ca<sub>2</sub>HCO<sub>3</sub>, cruzando el 2 del calcio como subíndice del propio calcio', 'Ca(HCO<sub>3</sub>)<sub>2</sub>, porque el Ca es +2 y el HCO<sub>3</sub><sup>-</sup> es −1: hacen falta dos aniones para que la suma dé cero', 'CaCO<sub>3</sub>H, que es lo mismo escrito en otro orden'], c: 2,
   ex: '<b>Ca(HCO<sub>3</sub>)<sub>2</sub></b>: el catión Ca<sup>2+</sup> necesita dos aniones HCO<sub>3</sub><sup>-</sup> para neutralizarse. Chequeo: (+2) + 2(−1) = 0 ✓. M = 162,11 g/mol. → “CaHCO<sub>3</sub>” es el error clásico y <b>no existe</b>: daría carga neta +1. Con esa fórmula el volumen del ejercicio sale 1,00 L en vez de <b>1,20 L</b>, un 17 % de error indetectable. → “Ca<sub>2</sub>HCO<sub>3</sub>” invierte el cruce: el subíndice del catión sale de la carga del <b>anión</b>, no de la propia. → “CaCO<sub>3</sub>H” reordena átomos sin cambiar nada: sigue teniendo un solo hidrogenocarbonato y sigue dando +1.'},

  {st: 'El 2do Recuperatorio del 27/06/25 pide preparar “20 g de cloruro crómico”. En la ecuación aparecen CrCl<sub>3</sub> y KCl. ¿Cuál es el cloruro crómico y por qué?',
   opts: ['CrCl<sub>3</sub>: “crómico” es el cromo con el mayor de sus números de oxidación en cloruros, +3, y con Cl a −1 hacen falta tres', 'KCl, porque es el cloruro que se nombra primero en el enunciado', 'CrCl<sub>2</sub>, porque el sufijo -ico corresponde siempre al menor número de oxidación', 'Los dos, porque el enunciado no lo aclara y hay que sumar las dos masas'], c: 0,
   ex: '<b>CrCl<sub>3</sub></b>, M = 158,35 g/mol, en Stock “cloruro de cromo (III)”. → El sufijo <b>-ico es el MAYOR</b> número de oxidación y <b>-oso el menor</b> (T05A: “óxido ferroso, menor nro ox / óxido férrico, mayor nro ox”); la opción que los invierte es exactamente el error que arruina el ejercicio. → Con CrCl<sub>2</sub> los 20 g darían 0,16274 mol en vez de <b>0,12631</b>: 28,8 % de más, y los ítems b, c y d caen en cascada. → El KCl aparece nombrado aparte en el ítem c) como “cloruro de potasio”. → <b>Dato incómodo</b>: la tabla de números de oxidación de T05A ni siquiera lista el +3 del cromo; hay que sacarlo por la regla de la suma.'},

  {st: '¿Cuál es el número de oxidación del cromo en el K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>?',
   opts: ['+3', '+6', '+7, porque hay siete oxígenos', '+12, que es la suma de los dos cromos'], c: 1,
   ex: 'Planteás la suma: 2(+1) + 2·x + 7(−2) = 0 → 2 + 2x − 14 = 0 → 2x = 12 → <b>x = +6</b>. → El <b>+12</b> es el error de no dividir por la atomicidad: la suma total aportada por los dos cromos es +12, pero el número de oxidación es <b>por átomo</b>. Es el mismo error que la clave de G05A comete con el PO<sub>4</sub><sup>3-</sup> (“O: −4”). → El +3 es el del CrCl<sub>3</sub> del mismo examen, no el del dicromato. → El +7 no sale de contar oxígenos: la atomicidad del O no es su número de oxidación.'},

  {st: 'En el CH<sub>4</sub>, ¿cuánto vale el número de oxidación del carbono?',
   opts: ['+4, como dice la tabla de T05A', '0, porque es un hidrocarburo', '+1', '−4'], c: 3,
   ex: 'H = +1 (no está unido a un metal) → C + 4(+1) = 0 → <b>C = −4</b>. El carbono es más electronegativo que el hidrógeno, así que <b>gana</b> densidad electrónica y su número es negativo. → La tabla de la diapositiva 6 de T05A lista sólo “Carbono: +4” y la clave de G05A publica “CH<sub>4</sub>: C: +4, H: −1”, que está mal en los dos números: el H vale −1 <b>únicamente en hidruros metálicos</b> (NaH, CaH<sub>2</sub>). → Que sea hidrocarburo no lo vuelve cero: el 0 es para <b>elementos libres</b> (Cl<sub>2</sub>, Fe, O<sub>2</sub>).'},

  {st: '¿Cómo se nombra el Fe<sub>2</sub>O<sub>3</sub> en las tres nomenclaturas que lista T05A?',
   opts: ['Trióxido de dihierro (sistemática) · óxido ferroso (tradicional) · óxido de hierro (II) (Stock)', 'Óxido de trihierro · óxido ferroso · óxido de hierro (VI)', 'Trióxido de hierro · óxido de hierro · óxido férrico (III)', 'Trióxido de dihierro (sistemática) · óxido férrico (tradicional) · óxido de hierro (III) (Stock)'], c: 3,
   ex: 'Fe = +3: 2x + 3(−2) = 0 → x = +3 ⇒ <b>férrico</b> (mayor número) y <b>(III)</b>. → La opción con “ferroso / (II)” corresponde al <b>FeO</b>. → El “(VI)” sale de sumar los dos hierros sin dividir. → La sistemática cuenta <b>átomos</b>, no cargas: tres oxígenos ⇒ tri<b>óxido</b>, dos hierros ⇒ <b>di</b>hierro. → T05A dice que en el curso usan <b>preferentemente la IUPAC con numerales de Stock</b>, pero los enunciados de los exámenes escriben en tradicional: hay que manejar las dos.'},

  {st: '¿Qué diferencia hay entre HCl(g) y HCl(ac) para la cátedra?',
   opts: ['Ninguna: la misma fórmula tiene un solo nombre',
          'HCl(g) es “cloruro de hidrógeno” (hidruro no metálico) y HCl(ac) es “ácido clorhídrico” (hidrácido)',
          'HCl(g) es el ácido clorhídrico y HCl(ac) es el cloruro de hidrógeno',
          'Son isómeros con distinta fórmula desarrollada'],
   c: 1,
   ex: 'T05A lo marca explícitamente: “un cambio en el estado de agregación provoca que se denominen de diferente manera, pero fundamentalmente, cambian sus propiedades”. <b>Puro/gaseoso ⇒ cloruro de hidrógeno. En solución acuosa ⇒ ácido clorhídrico.</b> → Por eso G05A ejercicio 3, que pide “los compuestos binarios que forman con hidrógeno”, contesta “cloruro de hidrógeno” y no “ácido clorhídrico”. → No son isómeros: los isómeros son compuestos <b>distintos</b> con la misma fórmula molecular, y acá la sustancia es la misma en dos entornos.'},

  {st: 'T05A nombra el Ca(NO<sub>2</sub>)<sub>2</sub> como “nitrito de calcio” en tradicional y “nitrato(III) de calcio” en su estilo IUPAC. ¿Qué significa eso?',
   opts: ['Que en ese estilo IUPAC TODOS los oxoaniones terminan en -ato y el romano indica el número de oxidación: nitrato(III) = NO<sub>2</sub><sup>-</sup> = nitrito', 'Que son dos compuestos distintos y la diapositiva se equivocó', 'Que el nitrito de calcio en realidad se escribe Ca(NO<sub>3</sub>)<sub>2</sub>', 'Que el (III) es la carga del anión'], c: 0,
   ex: 'En el esquema “Nometal(ato)(nº ox) de Metal(nº ox)” de T05A el sufijo <b>-ato es fijo</b> y lo que discrimina es el <b>romano</b>: nitrato(III) = NO<sub>2</sub><sup>-</sup> (nitrito) y nitrato(V) = NO<sub>3</sub><sup>-</sup> (nitrato). Igual con sulfato(IV) = sulfito y bromato(I) = hipobromito. → <b>Si el enunciado trae romanos, leé el romano y no el sufijo.</b> → El (III) <b>no</b> es la carga: la carga del NO<sub>2</sub><sup>-</sup> es −1, mientras que el N está a +3. Confundir carga con número de oxidación es una de las trampas del tema. → El Ca(NO<sub>3</sub>)<sub>2</sub> no es el nitrito: es el <b>nitrato</b> de calcio, otro compuesto.'},

  {st: '“Bicarbonato de sodio”, “carbonato ácido de sodio” e “hidrogenocarbonato de sodio”…',
   opts: ['son tres compuestos distintos', 'son tres nombres del Na<sub>2</sub>CO<sub>3</sub>', 'son tres nombres del mismo compuesto, NaHCO<sub>3</sub>, en tres convenciones distintas', 'sólo el primero es válido para la cátedra'], c: 2,
   ex: 'Los tres son <b>NaHCO<sub>3</sub></b>. T05A enseña las dos primeras formas (“bi-” y “…ato ácido de…”) y <b>nunca escribe “hidrógeno-”</b>; G05A contesta con las tres y el examen del 14/06/24 escribe directamente “hidrogenocarbonato de calcio”. → Es una <b>contradicción real y sin resolver</b> entre teórica, guía y examen. → El Na<sub>2</sub>CO<sub>3</sub> es el carbonato de sodio <b>neutro</b>: la neutralización fue total y no quedó H. → Práctico: reconocé las tres al leer y escribí la de “hidrógeno-”, que es la IUPAC actual y la de los propios enunciados.'},

  {st: '¿Cuál es la fórmula del sulfato de aluminio?',
   opts: ['AlSO<sub>4</sub>', 'Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>', 'Al<sub>3</sub>(SO<sub>4</sub>)<sub>2</sub>', 'Al<sub>2</sub>SO<sub>4</sub>'], c: 1,
   ex: 'Al<sup>3+</sup> y SO<sub>4</sub><sup>2-</sup> → el cruce pone la carga de cada uno como subíndice del otro: <b>Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></b> → chequeo: 2(+3) + 3(−2) = 0 ✓. → “Al<sub>3</sub>(SO<sub>4</sub>)<sub>2</sub>” es el cruce hecho al revés y da 3(+3) + 2(−2) = +5 ≠ 0. → “AlSO<sub>4</sub>” da +1 y “Al<sub>2</sub>SO<sub>4</sub>” da +4. → <b>El chequeo de la suma descarta las tres</b> en cinco segundos, sin necesidad de acordarse de nada.'},

  {st: 'En el peróxido de hidrógeno, H<sub>2</sub>O<sub>2</sub>, ¿cuánto vale el número de oxidación del oxígeno?',
   opts: ['−2, como siempre', '0', '+1', '−1'], c: 3,
   ex: 'La tabla de T05A lo dice entre paréntesis: <b>O = −2, salvo −1 en peróxidos</b>. Acá: 2(+1) + 2x = 0 → <b>x = −1</b>. → Si insistieras con −2 te daría H = +2, que no existe: el hidrógeno sólo toma +1 o −1. → Ése es justamente el chequeo que detecta que estás frente a un peróxido y no a un óxido. → El 0 es para elementos libres (O<sub>2</sub>, O<sub>3</sub>), no para el oxígeno combinado.'},

  {st: 'CH<sub>3</sub>-CHOH-CH<sub>2</sub>-CHO. ¿Cómo se llama y por qué?',
   opts: ['4-hidroxibutanal, numerando desde el extremo del metilo', '2-butanol-4-al, nombrando las dos funciones con sufijo', '3-hidroxibutanal: el aldehído tiene prioridad sobre el alcohol, se lleva el sufijo -al y su carbono es el C1', '3-oxobutanol, porque el alcohol tiene prioridad'], c: 2,
   ex: '<b>3-hidroxibutanal</b>, que es la respuesta 7e de la clave de G05B. → En la serie de prioridad, <b>aldehído &gt; alcohol</b>: el aldehído se queda con el sufijo <b>-al</b> y el alcohol se degrada al prefijo <b>hidroxi-</b>. T05B lo dice: “cuando el alcohol no es el grupo funcional principal se nombra como hidroxi”. → El grupo CHO está <b>siempre en un C primario</b> (extremo), así que es forzosamente el <b>C1</b>: contando desde ahí, el OH cae en el 3. → Numerar desde el metilo da “4-hidroxibutanal”, que es el mismo dibujo con el nombre mal. → <b>Dos sufijos en un nombre no existen</b>: sólo el grupo principal lleva sufijo.'},

  {st: '“Etanoato de etilo” y “etanoato de sodio”…',
   opts: ['son un éster y una sal respectivamente: lo que sigue a “de” decide', 'son el mismo compuesto con dos nombres', 'son dos ésteres distintos', 'son dos sales distintas'], c: 0,
   ex: '<b>Etanoato de etilo = CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub>, un éster</b> (acetato de etilo, el solvente del quitaesmalte). <b>Etanoato de sodio = CH<sub>3</sub>COONa, una sal</b>. → La regla mecánica: si después de “de” viene un <b>radical orgánico terminado en -ilo</b>, es éster; si viene un <b>metal</b>, es sal. → Importa en el Ejercicio 3 del 6/12/24, donde el producto de CH<sub>3</sub>COOH + NaOH es el <b>etanoato de sodio</b> y hay que nombrarlo: llamarlo “etanoato de etilo” es cambiar de familia química.'},

  {st: 'El parcial del 30/05/25 pide los moles de etanol en 8 L de bioetanol con ρ = 0,789 kg/L, y no da la fórmula. ¿Cuántos moles son?',
   opts: ['137,0 mol, con M = 46,07 g/mol', '197,0 mol, con M = 32,04 g/mol', '68,5 mol, con M = 92,14 g/mol', '6312 mol, que es la masa en gramos'], c: 0,
   ex: 'Etanol = <b>C<sub>2</sub>H<sub>6</sub>O</b> (CH<sub>3</sub>CH<sub>2</sub>OH): et- = 2 carbonos, -ol = alcohol → M = 2(12,011) + 6(1,008) + 15,999 = <b>46,07 g/mol</b>. → m = 8 L × 0,789 kg/L = 6,312 kg = <b>6312 g</b> → n = 6312/46,07 = <b>137,0 mol</b>. → Los 197,0 mol salen de usar M = 32,04, que es el <b>metanol</b> (CH<sub>3</sub>OH): un carbono de diferencia, 44 % de error en los moles y un ejercicio de termoquímica entero perdido. → Confundir masa con cantidad (6312) es el error dimensional puro: gramos no son moles.'},

  {st: '¿En cuáles de estos compuestos el numeral de Stock es obligatorio: Na<sub>2</sub>O, FeO, CaO, CuCl<sub>2</sub>, Zn(OH)<sub>2</sub>?',
   opts: ['En todos, siempre se pone', 'Sólo en Na<sub>2</sub>O y CaO', 'Sólo en FeO y CuCl<sub>2</sub>', 'En ninguno, el romano es opcional'], c: 2,
   ex: 'T05A: “si el elemento tiene un solo nro de oxidación posible <b>no se coloca</b> el numeral de stock”. → <b>Fe</b> (+2/+3) y <b>Cu</b> (+1/+2) tienen más de uno ⇒ <b>óxido de hierro (II)</b> y <b>cloruro de cobre (II)</b> llevan romano obligatorio. → Na, Ca y Zn tienen uno solo ⇒ “óxido de sodio”, “óxido de calcio”, “hidróxido de cinc”, <b>sin</b> romano. Escribir “óxido de sodio (I)” es un error por sobrante. → Y omitirlo donde hace falta es peor: “óxido de hierro” a secas no distingue FeO de Fe<sub>2</sub>O<sub>3</sub>, que tienen masas molares de 71,84 y 159,69 g/mol.'},
  {st: "El mapa de T05A (diapositiva 5) clasifica los compuestos inorgánicos por su función química. ¿Cuántos grupos hay y cómo define el de las bases?",
   opts: ["Once, uno por cada fila de la tabla de funciones; las bases son compuestos binarios de un metal con oxígeno", "Cinco (óxidos, bases, ácidos, sales e hidruros); las bases son ternarias y resultan de un óxido básico con agua o de un metal activo con agua", "Cinco; las bases son compuestos binarios formados por hidrógeno y otro elemento, metal o no metal", "Tres (óxidos, ácidos y sales); las bases y los hidruros son casos particulares de esos tres"],
   c: 1,
   ex: "<b>Cinco grupos</b>: óxidos (binarios con oxígeno), bases (ternarias, de un óxido básico + agua o de un metal activo + agua, como el Ca(OH)<sub>2</sub>), ácidos (emiten H<sup>+</sup> en agua), sales (cationes y aniones unidos por enlace iónico) e hidruros (binarios con hidrógeno). → Contestar “once” confunde grupos con tipos y subtipos: las once filas de la tabla de funciones (óxido básico, óxido ácido, peróxido, hidróxido, los dos hidruros, hidrácido, oxoácido y las tres sales) caen todas dentro de los cinco. Además una base no es binaria: tiene tres elementos (metal, O y H). → La definición como compuesto binario de hidrógeno con otro elemento es la de los <b>hidruros</b>, que son otro grupo y no el de las bases. → Reducir a tres grupos borra dos que el mapa trae con definición, propiedades y ejemplos propios."},
  {st: "G05B pide el ácido ftálico como ácido benceno-1,2-dicarboxílico. ¿Cómo es esa molécula?",
   opts: ["Un anillo bencénico con dos carboxilos en carbonos opuestos, posición para", "Una cadena de seis carbonos con un carboxilo en cada extremo", "Un anillo bencénico con dos carboxilos separados por un carbono, posición meta", "Un anillo bencénico con dos carboxilos en carbonos vecinos, 1 y 2, posición orto"],
   c: 3,
   ex: "<b>Benceno-1,2-dicarboxílico</b>: dos grupos COOH colgando de un anillo (el sufijo <b>-carboxílico</b> se usa cuando el COOH está unido a un hidrocarburo cíclico), en los carbonos 1 y 2, que son vecinos: <b>orto</b> (o-). Es C<sub>6</sub>H<sub>4</sub>(COOH)<sub>2</sub>. → Con los carboxilos en carbonos opuestos sería el 1,4 (para), el ácido benceno-1,4-dicarboxílico, que es el tereftálico de G05B 5d. → Con un carbono en el medio sería el 1,3 (meta). → La cadena de seis carbonos con un carboxilo en cada extremo es el ácido hexanodioico (adípico, G05B 5b): ahí los COOH forman parte de la cadena y el nombre termina en -dioico, mientras que en el ftálico cuelgan de un anillo y termina en -dicarboxílico."},
  {st: "En G05B aparecen el 1,3-butadieno y el 2-bromo-1-hexeno con número, pero el ácido propenoico (acrílico) y el propenonitrilo sin número. ¿Qué regla de T05B lo explica?",
   opts: ["El localizador es el número del primer carbono del enlace múltiple y sólo se escribe con 4 o más carbonos; con varios enlaces va un número por cada uno y el di- se pega a la terminación", "El localizador se escribe siempre, incluso en el propeno; en el ácido acrílico se omite porque el carboxilo manda sobre el doble enlace", "El localizador sólo se escribe cuando hay más de un enlace múltiple, y el 2-bromo-1-hexeno es la excepción por llevar un halógeno", "El localizador es el número del último carbono del enlace múltiple, por eso el 2-bromo-1-hexeno lleva un 1"],
   c: 0,
   ex: "T05B (diapositivas 13 y 14): <b>el número que se escribe es el del primer carbono del enlace</b> y <b>sólo hace falta con 4 o más carbonos</b>, porque desde ahí el enlace puede estar en lugares distintos (1-buteno ≠ 2-buteno, 1-butino ≠ 2-butino). Con 2 o 3 carbonos no se escribe: eteno, propeno, etino, propino y, en los derivados de 3 C, propenoico y propenonitrilo. Con dos dobles enlaces se escribe un número por cada uno: CH<sub>2</sub>=CH-CH=CH<sub>2</sub> es el 1,3-butadieno (C<sub>4</sub>H<sub>6</sub>). → Decir que el número va siempre es falso: el propeno no lleva “1-”, y no es una cuestión del carboxilo sino de que con 3 carbonos el enlace sólo puede estar en un lugar. → Tampoco depende de que haya varios enlaces: el 1-buteno tiene uno solo y lleva número, y el halógeno del 2-bromo-1-hexeno no tiene que ver. → El número es el del <b>primer</b> carbono del enlace, no el del último: en el 2-bromo-1-hexeno el doble enlace une el C1 con el C2 y se escribe 1."},
  {st: "G05B 3 pide los polioles de cadena abierta de 3 carbonos (a lo sumo un OH por carbono). ¿Cómo se llama la glicerina y cuántos polioles C3 hay?",
   opts: ["1,2,3-propanodiol; hay 3", "1,2,3-propanotriol; hay 3: el 1,2-propanodiol, el 1,3-propanodiol y la glicerina", "1,2,3-propanotriol; hay 2, los dos dioles", "1,2,3-propanotriol; hay 4, porque el diol en 1,2 y el diol en 2,3 son moléculas distintas"],
   c: 1,
   ex: "<b>Tres OH ⇒ tri-</b>: la glicerina es el <b>1,2,3-propanotriol</b> (T05B la da como 1,2,3-propanotriol, glicerina). Con 3 carbonos y a lo sumo un OH por carbono hay tres moléculas distintas: los OH en 1 y 2, los OH en 1 y 3, y los OH en 1, 2 y 3. → “1,2,3-propanodiol” está mal por el prefijo: di- son dos OH, y tres necesitan tri-. → Decir que hay 2 deja afuera al triol, que también es un poliol. → Decir que hay 4 cuenta dos veces el diol en 1,2 y el diol en 2,3: son la misma molécula, numerada desde el otro extremo."}

]);

registerReveals('fiuba-quimica', '7', [

{st: "<b>Básico · Una sola variable cambia (Charles).</b> Un gas ocupa 3,00 L a 27 °C. Se lo calienta hasta 127 °C sin cambiar la presión ni la cantidad de gas. ¿Qué volumen ocupa ahora?",
 ans: "<b>4,00 L</b>.",
 sol: "<b>Paso 1 · qué cambia y qué no.</b> P y n no cambian, así que en P<sub>1</sub>V<sub>1</sub>/(n<sub>1</sub>T<sub>1</sub>) = P<sub>2</sub>V<sub>2</sub>/(n<sub>2</sub>T<sub>2</sub>) se tachan y queda V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub>. → <b>Paso 2 · temperaturas en kelvin.</b> T<sub>1</sub> = 27 + 273,15 = 300,15 K y T<sub>2</sub> = 127 + 273,15 = 400,15 K. → <b>Paso 3 · despejar.</b> V<sub>2</sub> = V<sub>1</sub> · T<sub>2</sub>/T<sub>1</sub> = 3,00 L · 400,15 K / 300,15 K = <b>4,00 L</b>. → <b>Control.</b> Se calentó, así que el volumen tiene que aumentar, y el cociente de temperaturas es mayor que 1. → <b>Error típico:</b> usar los °C: 3,00 · 127/27 da 14,1 L, que es absurdo."},

{st: "<b>Básico · PV = nRT con la presión en mmHg.</b> ¿Cuántos moles de gas hay en un recipiente de 5,00 L a 25 °C cuando la presión del gas es 912 mmHg?",
 ans: "<b>0,245 mol</b>.",
 sol: "<b>Paso 1 · todo a atm, litros y kelvin.</b> Como R = 0,0821 L·atm/(mol·K), la presión va en atm: 912 mmHg / 760 mmHg/atm = 1,20 atm. La temperatura: 25 + 273,15 = 298,15 K. El volumen ya está en litros. → <b>Paso 2 · despejar n.</b> n = PV/(RT) = 1,20 atm · 5,00 L / (0,0821 L·atm/(mol·K) · 298,15 K) = 6,00 / 24,48 = <b>0,245 mol</b>. → <b>Control.</b> A 25 °C y 1 atm un mol ocupa unos 24,5 L, así que 5,00 L a 1 atm son unos 0,20 mol; a 1,20 atm hay un 20 % más: 0,245 mol. → <b>Error típico:</b> reemplazar 912 directamente en la ecuación: da n = 186 mol, un número que ya a simple vista es imposible para 5 L."},

{st: "<b>Básico · ¿Más denso o menos denso que el aire?</b> Hay una pérdida de gas de garrafa (propano, C<sub>3</sub>H<sub>8</sub>, M = 44,10 g/mol) en una cocina a 20 °C y 1 atm. Calculá la densidad del propano y la del aire (M ≈ 29,0 g/mol) en esas condiciones, y decidí si el propano tiende a juntarse cerca del piso o del techo.",
 ans: "δ(propano) = <b>1,83 g/L</b>; δ(aire) = <b>1,20 g/L</b>. El propano es más denso y se acumula <b>cerca del piso</b>.",
 sol: "<b>Paso 1 · la fórmula.</b> δ = P·M/(R·T), con P en atm y T = 20 + 273,15 = 293,15 K. El denominador es el mismo para los dos gases: R·T = 0,0821 · 293,15 = 24,07 L·atm/mol. → <b>Paso 2 · propano.</b> δ = 1 · 44,10 / 24,07 = <b>1,83 g/L</b>. → <b>Paso 3 · aire.</b> δ = 1 · 29,0 / 24,07 = <b>1,20 g/L</b>. → <b>Paso 4 · conclusión.</b> A igual P y T, la densidad es proporcional a M: 44,10/29,0 = 1,52, el propano es 1,5 veces más denso que el aire. Un gas más denso baja y se junta a ras del piso. → <b>Control.</b> Para comparar con el aire ni siquiera hace falta calcular las densidades: alcanza con ver que 44,10 &gt; 29. → <b>Error típico:</b> pensar que “gas” significa “sube”: eso vale para los que tienen M menor que 29, como el metano (16) o el helio (4)."},

{st: "<b>Intermedio · Duplicar los kelvin, no los °C.</b> Un recipiente rígido y cerrado contiene un gas a 2,00 atm y 30 °C. a) Se lo calienta hasta 60 °C: ¿qué presión alcanza? b) ¿A qué temperatura habría que calentarlo para que la presión se duplique?",
 ans: "<b>a) 2,20 atm.</b> <b>b) 606 K = 333 °C</b>.",
 sol: "<b>Paso 1 · qué se tacha.</b> Recipiente rígido y cerrado: V y n no cambian, queda P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub>. → <b>Paso 2 · a) en kelvin.</b> T<sub>1</sub> = 303,15 K y T<sub>2</sub> = 333,15 K. P<sub>2</sub> = 2,00 atm · 333,15/303,15 = <b>2,20 atm</b>. La temperatura “se duplicó” en °C (de 30 a 60), pero la presión sólo subió un 10 %. → <b>Paso 3 · b) duplicar la presión.</b> Si P se duplica, T (en kelvin) también: T<sub>2</sub> = 2 · 303,15 K = 606,3 K, que son 606,3 − 273,15 = <b>333 °C</b>. → <b>Control.</b> En a) la temperatura absoluta pasó de 303 K a 333 K, un aumento de menos del 10 %, y la presión sube lo mismo. → <b>Error típico:</b> duplicar los °C. Usar los °C da 2,00 · 60/30 = 4,00 atm, que es una respuesta equivocada de a). “Duplicar la temperatura” siempre se lee como duplicar los kelvin."},

{st: "<b>Intermedio · Recipientes conectados.</b> Un recipiente A de 4,00 L contiene un gas a 3,00 atm y 25 °C. Una llave lo conecta con un recipiente B de 6,00 L vacío. Se abre la llave y se espera a que todo vuelva a 25 °C. ¿Cuál es la presión final y cuántos moles de gas quedan en B?",
 ans: "P final = <b>1,20 atm</b>; en B hay <b>0,294 mol</b>.",
 sol: "<b>Paso 1 · qué se conserva.</b> El gas no sale del conjunto (n no cambia) y la temperatura es la misma al principio y al final: es Boyle, P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub>. El volumen final es el de <b>los dos</b> recipientes: 4,00 + 6,00 = 10,00 L. → <b>Paso 2 · presión final.</b> P<sub>2</sub> = 3,00 atm · 4,00 L / 10,00 L = <b>1,20 atm</b>. → <b>Paso 3 · moles totales.</b> n = PV/(RT) con el estado inicial: 3,00 · 4,00 / (0,0821 · 298,15) = 12,00 / 24,48 = 0,490 mol. → <b>Paso 4 · cuántos en B.</b> El gas se reparte de forma uniforme y a la misma presión, así que cada recipiente tiene moles proporcionales a su volumen: en B está 6/10 del gas, 0,490 · 0,6 = <b>0,294 mol</b> (y 0,196 mol en A). → <b>Control.</b> Con P final: n<sub>B</sub> = 1,20 · 6,00 / 24,48 = 0,294 mol. → <b>Error típico:</b> usar sólo V = 4,00 L en la cuenta final: el gas ahora ocupa los dos recipientes."},

{st: "<b>Intermedio · Agregar un gas a otro que ya estaba.</b> Un recipiente rígido de 8,00 L contiene 0,200 mol de N<sub>2</sub> a 27 °C. Se le agregan 9,60 g de O<sub>2</sub> (M = 32,00 g/mol) a la misma temperatura. Calculá: a) la presión del N<sub>2</sub> antes de agregar el O<sub>2</sub>; b) la presión total después; c) la fracción molar de O<sub>2</sub>; d) la presión total si después se calienta hasta 127 °C.",
 ans: "<b>a) 0,616 atm.</b> <b>b) 1,54 atm.</b> <b>c) 0,600.</b> <b>d) 2,05 atm</b>.",
 sol: "<b>Paso 1 · a) el N<sub>2</sub> solo.</b> T = 300,15 K. P = nRT/V = 0,200 · 0,0821 · 300,15 / 8,00 = <b>0,616 atm</b>. → <b>Paso 2 · b) el O<sub>2</sub> agregado.</b> n(O<sub>2</sub>) = 9,60 g / 32,00 g/mol = 0,300 mol. Cada gas ocupa todo el volumen del recipiente (8,00 L): P(O<sub>2</sub>) = 0,300 · 0,0821 · 300,15 / 8,00 = 0,924 atm. El N<sub>2</sub> no se entera de que llegó el O<sub>2</sub>: sigue marcando 0,616 atm. Por Dalton, P<sub>total</sub> = 0,616 + 0,924 = <b>1,54 atm</b>. → <b>Paso 3 · c) fracción molar.</b> x(O<sub>2</sub>) = 0,300/(0,200 + 0,300) = <b>0,600</b>; como control, 0,924/1,54 = 0,600. → <b>Paso 4 · d) calentar.</b> El recipiente es rígido y n no cambia: P<sub>2</sub> = 1,54 atm · 400,15/300,15 = <b>2,05 atm</b>. Las fracciones molares no cambian con la temperatura. → <b>Error típico:</b> calcular la presión del O<sub>2</sub> con el volumen “que le queda” (8,00 menos algo): no hay tal cosa, cada gas ocupa todo el recipiente."},

{st: "<b>Intermedio · Líquido volátil en recipiente cerrado, por los dos métodos.</b> La acetona (M = 58,08 g/mol) tiene una presión de vapor de 230 mmHg a 25 °C. En un recipiente cerrado de 3,00 L, a 25 °C y vacío al principio, se coloca: a) 2,00 g de acetona; b) 4,00 g de acetona. En cada caso, ¿hay líquido en el equilibrio y cuál es la presión?",
 ans: "<b>a)</b> No queda líquido; P = <b>214 mmHg</b>. <b>b)</b> Queda líquido (1,85 g); P = <b>230 mmHg</b>.",
 sol: "<b>Pasos comunes.</b> P<sub>v</sub> = 230/760 = 0,3026 atm; T = 298,15 K; R·T = 0,0821 · 298,15 = 24,48 L·atm/mol. → <b>a) Método del volumen límite.</b> n = 2,00/58,08 = 0,03444 mol. Si todo estuviera vaporizado justo en la última gota, V<sub>lím</sub> = nRT/P<sub>v</sub> = 0,03444 · 24,48 / 0,3026 = 2,79 L. Como el recipiente (3,00 L) es <b>más grande</b> que V<sub>lím</sub>, la acetona se evapora toda: P = nRT/V = 0,03444 · 24,48 / 3,00 = 0,2810 atm = <b>214 mmHg</b>, menor que P<sub>v</sub>. Con el otro método (suponer todo vapor) llegás a lo mismo: P = 214 mmHg, menor que 230 mmHg, así que es vapor solo y esa es la presión real. → <b>b) Método de suponer todo vapor.</b> n = 4,00/58,08 = 0,06887 mol. Si todo fuera vapor: P = 0,06887 · 24,48 / 3,00 = 0,562 atm = 427 mmHg. Eso es <b>más que P<sub>v</sub></b> (230 mmHg), y un vapor no puede estar a más presión que la de vapor: se evapora sólo lo necesario y el resto queda líquido. Entonces P = <b>230 mmHg</b>. Moles de vapor: n<sub>v</sub> = 0,3026 · 3,00 / 24,48 = 0,0371 mol = 2,15 g; líquido: 4,00 − 2,15 = <b>1,85 g</b>. → <b>Control.</b> En b), V<sub>lím</sub> = 0,06887 · 24,48 / 0,3026 = 5,57 L, más grande que 3,00 L: los dos métodos dan la misma conclusión. → <b>Error típico:</b> usar n<sub>total</sub> con V = 3,00 L cuando queda líquido: da 427 mmHg, una presión mayor que P<sub>v</sub>."},

{st: "<b>Avanzado · Líquido volátil y aire en el mismo recipiente.</b> Un recipiente rígido de 5,00 L contiene aire a 1,00 atm y 25 °C. Se inyectan 3,00 g de agua líquida y se cierra. La presión de vapor del agua es 23,8 mmHg a 25 °C y 92,5 mmHg a 50 °C (M = 18,0 g/mol). a) ¿Queda agua líquida a 25 °C y cuál es la presión total? b) Se calienta hasta 50 °C: ¿hay todavía líquido y cuál es la presión total? Despreciá el volumen del líquido.",
 ans: "<b>a)</b> Sí, quedan unos 2,9 g; P total = <b>1,03 atm</b>. <b>b)</b> Sí, quedan unos 2,6 g; P total = <b>1,21 atm</b>.",
 sol: "<b>Paso 1 · cada gas ocupa todo el recipiente.</b> El aire y el vapor de agua se suman por Dalton: P<sub>total</sub> = P<sub>aire</sub> + P<sub>vapor</sub>. → <b>Paso 2 · a) ¿se evapora toda el agua?</b> n = 3,00/18,0 = 0,1667 mol. Si toda fuera vapor: P = 0,1667 · 0,0821 · 298,15 / 5,00 = 0,816 atm, mucho mayor que P<sub>v</sub> = 23,8/760 = 0,0313 atm. Es imposible, así que queda líquido y la presión del vapor es P<sub>v</sub>. Vapor: n<sub>v</sub> = 0,0313 · 5,00 / (0,0821 · 298,15) = 0,00640 mol = 0,115 g, así que quedan 3,00 − 0,12 = <b>2,9 g</b> de líquido. El aire no cambió (mismo V, T y n): 1,00 atm. P total = 1,00 + 0,0313 = <b>1,03 atm</b>. → <b>Paso 3 · b) a 50 °C.</b> T = 323,15 K. El aire, en un recipiente rígido: P = 1,00 · 323,15/298,15 = 1,084 atm. Para el agua, ahora P<sub>v</sub> = 92,5/760 = 0,1217 atm. Vapor máximo posible: n<sub>v</sub> = 0,1217 · 5,00 / (0,0821 · 323,15) = 0,02294 mol = 0,41 g, menos que los 3,00 g: sigue habiendo líquido (<b>2,6 g</b>) y el vapor está a P<sub>v</sub>. P total = 1,084 + 0,1217 = <b>1,21 atm</b>. → <b>Control.</b> La presión del vapor sólo depende de T mientras haya líquido, y el aire sigue la ley de los gases a V constante. → <b>Error típico:</b> aplicar PV = nRT al agua con los 3,00 g, o sumar a la presión total del aire la presión que saldría si toda el agua fuera vapor."},


  {st: '<b>2do Recuperatorio · 6/12/2024 · Ejercicio 1 COMPLETO (30 puntos).</b> Transcripción textual del examen.<br><br><b>a)</b> <span class="muted">(10 pts)</span> “Indicar si la siguiente sentencia es verdadera o falsa justificando su respuesta: Un sólido que cristaliza en el sistema cúbico centrado en el cuerpo tiene el triple de partículas por celda unitaria que uno que es cúbico simple y un tercio de uno que cristaliza en el sistema cúbico centrado en caras.”<br><br><b>b)</b> <span class="muted">(12 pts)</span> “Escriba la estructura de Lewis e indique el tipo de fuerza intermolecular dominante que se presenta en cada una de las siguientes sustancias: metano, agua y cloruro de hidrógeno y a continuación ordene esas sustancias de acuerdo a la intensidad de la fuerza dominante en sentido creciente. Defina punto de ebullición normal y presión de vapor de una sustancia y estime cuál de las sustancias anteriores tiene el valor más alto de cada propiedad, justificándose cuando corresponda.”<br><br><b>c)</b> <span class="muted">(8 pts)</span> “¿Cuál es la presión máxima a que puede sublimar un sólido? (sugerencia: muéstrala en un diagrama de fases).”',
   ans: '<b>a) FALSA</b>, y por partida doble: BCC tiene <b>2</b> partículas por celda, cúbico simple <b>1</b> y FCC <b>4</b>. O sea el <b>doble</b> del simple (no el triple) y <b>la mitad</b> del centrado en caras (no un tercio).<br><b>b)</b> Orden creciente de intensidad: <b>metano (London) &lt; cloruro de hidrógeno (dipolo-dipolo) &lt; agua (puente de hidrógeno)</b>. El punto de ebullición normal más alto lo tiene el <b>agua</b>; la presión de vapor más alta, el <b>metano</b>.<br><b>c)</b> La <b>presión del punto triple</b> de esa sustancia.',
   sol: '<b>a) El conteo, hecho a mano.</b> La regla de reparto de T06C: una partícula en un <b>vértice</b> se comparte entre 8 celdas y aporta <b>1/8</b>; una en el centro de una <b>cara</b> se comparte entre 2 y aporta <b>1/2</b>; una en el <b>centro del cuerpo</b> no se comparte con nadie y aporta <b>1</b>.<br><br>' +
        '→ <b>Cúbico simple:</b> 8 vértices · 1/8 = <b>1</b> partícula por celda.<br>' +
        '→ <b>Cúbico centrado en el cuerpo (BCC):</b> 8 vértices · 1/8 + 1 al centro = 1 + 1 = <b>2</b>.<br>' +
        '→ <b>Cúbico centrado en las caras (FCC):</b> 8 vértices · 1/8 + 6 caras · 1/2 = 1 + 3 = <b>4</b>.<br><br>' +
        'Ahora se contrasta con lo que afirma la sentencia. “El triple del cúbico simple”: 2/1 = <b>2</b>, es el <b>doble</b>, no el triple. “Un tercio del centrado en caras”: 2/4 = <b>1/2</b>, es <b>la mitad</b>, no un tercio. Las dos comparaciones están mal, así que la sentencia es <b>FALSA</b>.<br><br>' +
        '<span class="muted">Para que valga el ítem hay que <b>mostrar el conteo</b>, no sólo escribir 1, 2 y 4. La consigna dice “justificando su respuesta” y ahí están los 10 puntos.</span><br><br>' +
        '<b>b) Lewis, fuerza dominante y orden.</b><br><br>' +
        '→ <b>Metano, CH<sub>4</sub>:</b> 4 + 4·1 = 8 e<sup>-</sup> → C central con 4 uniones simples C-H y <b>ningún par libre</b>. 4 dominios → geometría <b>tetraédrica</b>. Los cuatro dipolos de enlace se cancelan por simetría → molécula <b>no polar</b> → fuerza dominante: <b>London</b> (dipolo inducido - dipolo inducido), la única posible entre moléculas no polares.<br>' +
        '→ <b>Agua, H<sub>2</sub>O:</b> 6 + 2·1 = 8 e<sup>-</sup> → O central, 2 uniones simples O-H y <b>2 pares libres</b>. 4 dominios → GE tetraédrica, <b>GM angular</b> → los dipolos no se cancelan → <b>polar</b>, y tiene H unido a O → fuerza dominante: <b>puente de hidrógeno</b>.<br>' +
        '→ <b>Cloruro de hidrógeno, HCl:</b> 1 + 7 = 8 e<sup>-</sup> → una unión simple H-Cl y <b>3 pares libres en el Cl</b>. Diatómica → <b>lineal</b>, polar (el Cl es mucho más electronegativo), pero el H está unido a Cl y <b>no</b> a N, O ni F → no hay puente de hidrógeno → fuerza dominante: <b>dipolo-dipolo</b>.<br><br>' +
        '<b>Orden creciente de intensidad</b>, según la escala comparativa de T04B (ión-dipolo &gt; puente de H &gt; dipolo-dipolo &gt; dipolo-dipolo inducido &gt; London):<br>' +
        '<b>CH<sub>4</sub> &lt; HCl &lt; H<sub>2</sub>O</b><br><br>' +
        '<b>Las dos definiciones</b>, que valen puntos escribirlas textuales:<br>' +
        '→ <b>Punto de ebullición normal:</b> la temperatura a la cual la <b>presión de vapor del líquido es igual a 1 atm</b>. Es único por sustancia, porque fija la presión externa.<br>' +
        '→ <b>Presión de vapor:</b> la presión que ejerce el vapor <b>en equilibrio con el líquido a una dada temperatura</b>. Depende sólo de la temperatura y de las fuerzas intermoleculares de la sustancia; <b>no</b> del volumen ni de la superficie del líquido.<br><br>' +
        '<b>Quién tiene el valor más alto de cada una.</b> Van al revés, y ése es todo el punto del ítem:<br>' +
        '→ <b>Punto de ebullición normal más alto: el AGUA.</b> Es la de fuerzas intermoleculares más intensas, así que hace falta más energía para separar las moléculas. Referencia: agua 100 °C, HCl −85 °C, CH<sub>4</sub> −161 °C.<br>' +
        '→ <b>Presión de vapor más alta (a una misma T): el METANO.</b> Es la de fuerzas más débiles, la más volátil, la que más fácil escapa de la fase líquida.<br><br>' +
        '<b>c) La presión máxima de sublimación.</b> Sublimar es pasar de sólido a vapor <b>sin pasar por líquido</b>. En el diagrama P vs T eso ocurre sobre la <b>curva de sublimación</b>, que va desde el origen hasta el <b>punto triple</b> y ahí se termina: por encima del punto triple ya no existe equilibrio sólido-vapor, porque en esa zona la fase estable entre el sólido y el vapor es el <b>líquido</b>.<br><br>' +
        '<b>Respuesta: la presión máxima a la que un sólido puede sublimar es la presión del PUNTO TRIPLE de esa sustancia.</b><br><br>' +
        'Cómo mostrarlo en el diagrama, que es lo que pide la sugerencia. Trazá dos líneas <b>horizontales</b> (calentamiento a P constante) y compará:<br><br>' +
        '<table class="tbl"><tr><th>Recorrido</th><th>Qué curvas cruza</th><th>Qué le pasa al sólido</th></tr>' +
        '<tr><td>Horizontal <b>por debajo</b> de P<sub>punto triple</sub></td><td>sólo la curva de <b>sublimación</b></td><td>pasa <b>directo a vapor</b>: sublima</td></tr>' +
        '<tr><td>Horizontal <b>exactamente a</b> P<sub>punto triple</sub></td><td>pasa <b>por</b> el punto triple</td><td>caso límite: coexisten las tres fases</td></tr>' +
        '<tr><td>Horizontal <b>por encima</b> de P<sub>punto triple</sub></td><td>primero <b>fusión</b>, después <b>vaporización</b></td><td><b>funde</b> y recién después hierve: no sublima</td></tr></table><br>' +
        '<b>El ejemplo que cierra la respuesta:</b> el CO<sub>2</sub>. Su punto triple está a <b>517 kPa ≈ 5,1 atm</b> (dato de T06B2), muy por encima de la presión atmosférica. Por eso el hielo seco a 1 atm <b>sublima</b> en vez de fundir: 1 atm está por debajo de los 5,1 atm del punto triple. Y por eso mismo, para tener CO<sub>2</sub> líquido hay que presurizarlo por encima de esos 5,1 atm.'},

  {st: '<b>Evaluación Integradora · 18/07/2024 · Ejercicio 1 COMPLETO.</b> Textual: “En un recipiente de volumen variable se introducen 7,8 gr de benceno (C<sub>6</sub>H<sub>6</sub>) líquido a 20 ºC. <b>Datos:</b> P<sub>v</sub> (benceno) (20 ºC) = 74,7 mm Hg ; 760 mmHg = 1 atm.<br><b>a)</b> Calcular cuál debería ser el volumen del recipiente para que exista un equilibrio equimolar líquido-vapor. indique qué consideraciones hace para los cálculos.<br><b>b)</b> Calcular a partir de qué volumen existirá sólo vapor a esa temperatura. Justifique<br><b>c)</b> Calcule la presión del sistema si el recipiente tiene un volumen de 30 L.”',
   ans: '<b>a) V ≈ 12,2 L</b> · <b>b)</b> a partir de <b>V ≈ 24,4 L</b> hay sólo vapor · <b>c)</b> como 30 L &gt; 24,4 L ya no queda líquido, así que la presión <b>no</b> es la de vapor: P = nRT/V = <b>0,080 atm ≈ 61 mmHg</b>.',
   sol: '<b>Los datos previos, comunes a los tres ítems.</b><br>' +
        'M(C<sub>6</sub>H<sub>6</sub>) = 6·12,011 + 6·1,008 = <b>78,11 g/mol</b> → n<sub>total</sub> = 7,8 / 78,11 = <b>0,0999 mol ≈ 0,100 mol</b> <span class="muted">(el enunciado eligió 7,8 g justamente para que dieran 0,1 mol redondos)</span>.<br>' +
        'P<sub>v</sub> = 74,7 / 760 = <b>0,0983 atm</b> → T = 20 + 273 = <b>293 K</b> → R = 0,0821 L·atm/mol·K <span class="muted">(el de la cabecera del examen; con atm y litros, que es lo que hay acá)</span>.<br><br>' +
        '<b>Las consideraciones que pide el ítem a.</b> Escribilas, son puntos:<br>' +
        '1) El <b>vapor se comporta como gas ideal</b>: legítimo, porque la presión es bajísima (0,098 atm) y el modelo ideal vale en el límite P → 0.<br>' +
        '2) El <b>volumen del líquido es despreciable</b> frente al del recipiente, así que V<sub>recipiente</sub> ≈ V<sub>vapor</sub>. <span class="muted">Verificable: 7,8 g de benceno líquido (δ ≈ 0,88 g/mL) ocupan ~8,9 mL contra 12 L. Es el 0,07 %.</span><br>' +
        '3) Sistema en <b>equilibrio a temperatura constante</b> → mientras haya líquido, la presión del sistema es exactamente P<sub>v</sub> y no depende del volumen.<br><br>' +
        '<b>a) Equilibrio equimolar.</b> “Equimolar líquido-vapor” significa <b>la mitad de los moles en cada fase</b>:<br>' +
        'n<sub>vapor</sub> = n<sub>líquido</sub> = 0,0999 / 2 = <b>0,0499 mol</b><br>' +
        'Como hay <b>dos fases en equilibrio</b>, la presión del sistema es P<sub>v</sub> = 0,0983 atm. La ecuación de estado se aplica <b>sólo a los moles que están en el vapor</b>:<br>' +
        'V = n<sub>vapor</sub>·R·T / P<sub>v</sub> = 0,0499 · 0,0821 · 293 / 0,0983 = <b>12,2 L</b><br><br>' +
        '<b>b) A partir de qué volumen hay sólo vapor.</b> El volumen límite es aquel en el que se vaporiza <b>la última gota</b>: todos los moles están en fase vapor y la presión todavía es P<sub>v</sub>. De ahí en adelante, agrandar el recipiente ya no puede evaporar nada más y la presión empieza a caer.<br>' +
        'V<sub>lím</sub> = n<sub>total</sub>·R·T / P<sub>v</sub> = 0,0999 · 0,0821 · 293 / 0,0983 = <b>24,4 L</b><br><br>' +
        '<b>La justificación</b> que pide el enunciado: para V &gt; 24,4 L el sistema no puede sostener la presión de vapor con sólo 0,0999 mol, así que no hay equilibrio líquido-vapor posible y <b>todo el benceno está vaporizado</b>. Notá el atajo: <b>V<sub>lím</sub> es exactamente el doble del volumen del ítem a</b>, porque el ítem a tenía la mitad de los moles a la misma presión y temperatura.<br><br>' +
        '<b>c) Presión con V = 30 L.</b> Primero la <b>comparación</b>, que es donde se define el ejercicio: 30 L <b>&gt;</b> 24,4 L → estamos pasados del volumen límite → <b>una sola fase, todo vapor, no queda líquido</b>. Entonces la presión <b>ya no es P<sub>v</sub></b> y sale de la ecuación de estado con todos los moles:<br>' +
        'P = n<sub>total</sub>·R·T / V = 0,0999 · 0,0821 · 293 / 30 = <b>0,0801 atm</b> = 0,0801 · 760 = <b>60,9 mmHg</b><br><br>' +
        '<b>Control de coherencia:</b> 60,9 mmHg &lt; 74,7 mmHg ✓. Tiene que dar <b>menor</b> que la presión de vapor, porque el vapor está insaturado. Si te diera mayor que 74,7 mmHg, te equivocaste: sería un vapor sobresaturado, que no existe en equilibrio. Condensaría hasta volver a 74,7.<br><br>' +
        '<span class="muted">Con T = 293,15 K en vez de 293 K los resultados son 12,23 L, 24,45 L y 0,0802 atm: la tercera cifra no se mueve.</span>'},

  {st: '<b>G06B, ejercicio 13 · el mismo ejercicio con otro líquido (entrenamiento).</b> “El CS<sub>2</sub> tiene una presión de vapor de 298 mmHg a 20 °C. Se coloca una muestra de 6 g de dicho material en un sistema cilindro-pistón móvil cerrado. Se lo mantiene sumergido en un baño termostático de agua, a la temperatura constante de 20 °C. a) ¿Cuál será el volumen máximo que alcanzará el sistema si se mantiene en equilibrio líquido-vapor? b) Si el pistón se regula de tal forma que el volumen del cilindro es de 3 L: b1) ¿Cuál es la presión del gas en el cilindro? b2) ¿Cuántas fases tiene el sistema? b3) ¿Qué masa de CS<sub>2</sub> hay en cada fase? c) Contestar las mismas preguntas del punto b), en el caso que el volumen del cilindro fuera de 7 L.”',
   ans: '<b>a) 4,84 L</b> · <b>b)</b> 0,392 atm · <b>2 fases</b> · 3,72 g en vapor y 2,28 g en líquido · <b>c)</b> 0,271 atm · <b>1 fase</b> · los 6 g en vapor. Coinciden exactamente con las respuestas publicadas por la cátedra.',
   sol: 'M(CS<sub>2</sub>) = 12,011 + 2·32,06 = <b>76,13 g/mol</b> → n = 6 / 76,13 = <b>0,0788 mol</b> → P<sub>v</sub> = 298/760 = <b>0,392 atm</b> → T = 293 K.<br><br>' +
        '<b>a) Volumen máximo en equilibrio.</b> Es el volumen límite: el vapor ocupa todo el recipiente a la presión P<sub>v</sub> con todos los moles.<br>' +
        'V<sub>máx</sub> = n·R·T / P<sub>v</sub> = 0,0788 · 0,0821 · 293 / 0,392 = <b>4,84 L</b> ✓<br>' +
        '<span class="muted">Por qué es un máximo: más allá de 4,84 L ya no queda líquido, y sin líquido no hay equilibrio líquido-vapor que mantener.</span><br><br>' +
        '<b>b) V = 3 L.</b> Comparación: 3 L &lt; 4,84 L → <b>sobra líquido</b>.<br>' +
        'b1) P = <b>P<sub>v</sub> = 0,392 atm</b>. Ojo: <b>no</b> se calcula con nRT/V. Mientras haya líquido, la presión la fija la sustancia, no el volumen.<br>' +
        'b2) <b>2 fases</b> (líquido y vapor en equilibrio).<br>' +
        'b3) n<sub>vapor</sub> = P<sub>v</sub>·V / (R·T) = 0,392 · 3 / (0,0821 · 293) = 0,0489 mol → m<sub>vapor</sub> = 0,0489 · 76,13 = <b>3,72 g</b> → m<sub>líquido</sub> = 6 − 3,72 = <b>2,28 g</b> ✓<br><br>' +
        '<b>c) V = 7 L.</b> Comparación: 7 L &gt; 4,84 L → <b>no queda líquido</b>.<br>' +
        'c1) P = n·R·T / V = 0,0788 · 0,0821 · 293 / 7 = <b>0,271 atm</b> ✓ <span class="muted">(menor que 0,392 ✓)</span><br>' +
        'c2) <b>1 fase</b> (sólo vapor).<br>' +
        'c3) Los <b>6 g completos</b> están en la fase vapor.<br><br>' +
        '<b>La estructura que se repite y hay que memorizar:</b> calculás V<sub>lím</sub>, comparás con el volumen que te dan y de esa comparación salen las tres respuestas juntas. Si V &lt; V<sub>lím</sub> → dos fases, P = P<sub>v</sub>, repartís masa. Si V &gt; V<sub>lím</sub> → una fase, P = nRT/V &lt; P<sub>v</sub>, toda la masa en vapor. Es exactamente el mismo esquema del benceno de la EI del 18/07/24.'},

  {st: '<b>EI 11/07/2024 · Parte B, V/F 5.</b> Textual: “Cuando se calienta un sólido a presión constante es posible que se funda o que pase a vapor, dependiendo que la presión sea superior o inferior a la crítica.” Justificar mediante razonamiento deductivo.',
   ans: '<b>FALSO.</b> La idea general está bien (al calentar a P constante el sólido funde o sublima según la presión), pero <b>la presión de referencia está equivocada</b>: la que decide es la del <b>punto triple</b>, no la <b>crítica</b>.',
   sol: '<b>Por qué la primera mitad de la frase es correcta.</b> Calentar a presión constante es recorrer una <b>línea horizontal</b> de izquierda a derecha en el diagrama P vs T, y efectivamente hay dos destinos posibles para el sólido: fundir (cruzar la curva sólido-líquido) o pasar directo a vapor (cruzar la curva de sublimación). Hasta ahí la sentencia describe algo real.<br><br>' +
        '<b>Por qué es falsa igual.</b> La presión que separa un caso del otro es la del <b>punto triple</b>, que es donde se cortan las tres curvas:<br>' +
        '→ Si P<sub>constante</sub> <b>&gt;</b> P<sub>punto triple</sub>, la horizontal pasa <b>por arriba</b> del punto triple y cruza primero la curva de <b>fusión</b>: el sólido <b>funde</b> y después, más a la derecha, hierve.<br>' +
        '→ Si P<sub>constante</sub> <b>&lt;</b> P<sub>punto triple</sub>, la horizontal pasa <b>por debajo</b> del punto triple y sólo puede cruzar la curva de <b>sublimación</b>: el sólido pasa <b>directo a vapor</b>, sin líquido.<br><br>' +
        '<b>Qué es en realidad la presión crítica</b> y por qué no viene al caso: la P<sub>c</sub> es la coordenada de presión del <b>punto crítico</b>, el extremo superior de la curva <b>líquido-vapor</b>. Lo que decide es si un gas se puede <b>licuar por compresión</b> (por encima de T<sub>c</sub> no se puede) y si existe una distinción nítida entre líquido y vapor. No tiene nada que ver con la fusión ni con la sublimación de un sólido.<br><br>' +
        '<b>Distancia entre los dos, con números de T06B2.</b> Para el CO<sub>2</sub>: punto triple 517 kPa (≈ 5,1 atm) y punto crítico 72,9 atm. Para el agua: punto triple 0,006 atm y punto crítico 218,3 atm. Son órdenes de magnitud distintos, así que confundirlos no es un detalle.<br><br>' +
        '<b>El contraejemplo que cierra la justificación.</b> El hielo seco a <b>1 atm</b> sublima a −78,5 °C. Y 1 atm está muy por <b>debajo</b> de la presión crítica del CO<sub>2</sub> (72,9 atm), lo cual, si la sentencia fuera cierta, tendría que hacerlo fundir o no según la crítica. Lo que realmente explica que sublime es que 1 atm está por debajo de los <b>5,1 atm del punto triple</b>. La sentencia predice con la variable equivocada.<br><br>' +
        '<span class="muted">La cátedra no publica clave de respuestas de las Partes B. Esta justificación se apoya en las diapositivas de T06B2 (punto triple, punto crítico y las tablas de datos) y en la pregunta conceptual 14 del bloque de diagramas de fase.</span>'},

  {st: '<b>EI 11/07/2024 · Parte B, V/F 6.</b> Textual: “Los sólidos iónicos son más duros que los sólidos covalentes.” Justificar mediante razonamiento deductivo.',
   ans: '<b>FALSO.</b> Es al revés: la tabla de propiedades de T06C clasifica a los <b>covalentes (atómicos) como “muy duros”</b> y a los <b>iónicos como “duros”</b>. El diamante raya al NaCl, no al revés.',
   sol: '<b>El dato de la cátedra.</b> La tabla “Propiedades de los Sólidos Cristalinos” de T06C tiene un renglón <b>Dureza</b> con estas entradas: atómico o covalente <b>muy duros</b> · iónico <b>duros</b> · molecular <b>blandos</b> (o medianamente duros si hay puente de hidrógeno) · metálico <b>variada</b>. La sentencia invierte los dos primeros.<br><br>' +
        '<b>El razonamiento deductivo</b>, que es lo que pide la consigna:<br>' +
        '→ En un sólido <b>covalente</b> (o atómico, como lo llama T06C) los nodos son <b>átomos no metálicos</b> unidos por <b>enlaces covalentes</b> en una red tridimensional continua. El carácter de esa interacción, dice la propia tabla, es <b>“muy fuerte”</b>. Rayar el cristal implica <b>romper enlaces covalentes</b>.<br>' +
        '→ En un sólido <b>iónico</b> los nodos son cationes y aniones unidos por <b>atracción electrostática</b>. La tabla la califica de <b>“fuerte”</b>, un escalón por debajo. Además el cristal iónico es <b>frágil</b>: un esfuerzo que desliza un plano enfrenta iones de igual carga, la repulsión se dispara y el cristal <b>se parte</b> en vez de deformarse.<br>' +
        '→ Interacción más fuerte → mayor dureza. Por lo tanto <b>covalente &gt; iónico</b> y la sentencia es falsa.<br><br>' +
        '<b>Los ejemplos que conviene citar:</b> el <b>diamante</b> (C, red covalente) es el sólido más duro que se conoce; el <b>carburo de silicio</b> y el <b>cuarzo</b> también son abrasivos. El <b>NaCl</b>, iónico, se raya con una uña de acero y se pulveriza con un mortero de cocina.<br><br>' +
        '<div class="trap"><div class="tr-t">No mezcles dureza con punto de fusión</div>Es la trampa de fondo del V/F. Son dos escalas distintas, y la tabla de T06C las tiene en renglones separados. En este caso van para el mismo lado (el covalente gana en las dos), pero el <b>metálico</b> muestra que no siempre: punto de fusión “generalmente alto” y dureza <b>“variada”</b>. El sodio se corta con un cuchillo y el tungsteno funde a 3400 °C. Deducir una de la otra es un error de método, aunque a veces acierte.</div>' +
        '<span class="muted">La cátedra no publica clave de las Partes B; la justificación sale de la tabla de T06C.</span>'},

  {st: '<b>EI 18/07/2024 · Parte B, V/F d.</b> Textual: “Existen infinitos puntos de fusión para una sustancia simple.” Justificar mediante razonamiento deductivo.',
   ans: '<b>VERDADERO.</b> El punto de fusión depende de la presión, y la curva sólido-líquido del diagrama de fases es una <b>curva continua</b>: a cada presión le corresponde una temperatura de fusión distinta, así que hay infinitos. El que es único es el <b>punto de fusión NORMAL</b>, el que corresponde a 1 atm.',
   sol: '<b>El razonamiento, en tres pasos.</b><br>' +
        '1) En el diagrama P vs T, el equilibrio sólido-líquido no es un punto: es una <b>curva</b> que arranca en el punto triple y sube. Cada punto de esa curva es un par (P, T) donde el sólido y el líquido coexisten.<br>' +
        '2) Un <b>punto de fusión</b> es, por definición, la temperatura a la que el sólido funde <b>a una presión dada</b>. O sea: es la abscisa de un punto de esa curva.<br>' +
        '3) Como la curva es continua y contiene infinitos puntos, hay <b>infinitos puntos de fusión</b>. Cambiar la presión cambia la temperatura de fusión. <b>Verdadero.</b><br><br>' +
        '<b>Lo que sí es único: el punto de fusión NORMAL.</b> Para poder hablar de “el” punto de fusión de una sustancia y tabularlo hay que <b>fijar la presión</b>, y la convención es <b>1 atm</b>. Ésa es toda la razón de ser de la palabra “normal” en “punto de fusión normal” y en “punto de ebullición normal”.<br><br>' +
        '<b>Que esto es la lectura de la cátedra se ve en su propia guía de preguntas conceptuales</b>, pregunta 18 del bloque de líquidos y diagramas de fase: “Defina el punto de ebullición normal. <b>¿Existen otros puntos de ebullición? ¿Qué características tienen?</b>”. La pregunta presupone que sí existen otros, y el razonamiento es idéntico para la fusión.<br><br>' +
        '<b>Un caso concreto para ilustrarlo:</b> el agua funde a 0 °C a 1 atm, pero como su curva de fusión tiene <b>pendiente negativa</b>, a mayor presión funde a <b>menor</b> temperatura. Ése es el mecanismo por el cual el hielo bajo presión se derrite. Cada presión, una temperatura de fusión distinta.<br><br>' +
        '<b>Sobre “sustancia simple”.</b> En el vocabulario de la cátedra una sustancia simple es la formada por un solo elemento (O<sub>2</sub>, Fe, S<sub>8</sub>) frente a una compuesta. El razonamiento no depende de eso: vale para <b>cualquier sustancia pura</b>, simple o compuesta, porque lo único que se usa es que tiene un diagrama de fases con una curva sólido-líquido.<br><br>' +
        '<span class="muted">Matiz que no hace falta escribir pero conviene saber: la curva de fusión no se extiende hacia abajo más allá del punto triple (por debajo de esa presión no existe fase líquida). El “infinitos” es correcto dentro del dominio donde hay líquido, que es el alcance de CB040. La cátedra no publica clave de las Partes B.</span>'}

]);

registerExercises('fiuba-quimica', '7', [

  {st: 'Un ejercicio te da una presión de 1520 mmHg, un volumen de 2,00 L y una temperatura de 27 °C, y la cabecera del examen ofrece R = 8,31 J/mol.K = 0,0821 L.atm/mol.K = 1,99 cal/mol.K. ¿Cuál es el camino correcto?',
   opts: ['Usar R = 8,31 directamente con mmHg y litros', 'Usar R = 1,99 porque las calorías son la unidad más general', 'Usar R = 8,31 con la presión en mmHg y el volumen pasado a m<sup>3</sup>', 'Pasar la presión a atm (1520/760 = 2,00 atm), la temperatura a 300 K, y usar R = 0,0821 con litros'], c: 3,
   ex: "<b>Correcta: pasar a atm y a kelvin, y usar R = 0,0821 con litros.</b> R = 0,0821 tiene unidades <b>L·atm/mol·K</b>: exige presión en atm y volumen en litros. Convertís las dos cosas en una sola línea al principio (1520 mmHg = 2,00 atm; 27 °C = 300 K) y después no volvés a pensar en unidades.<br><br><b>La de usar R = 8,31 directamente</b> mezcla R en joules con mmHg y litros: el resultado sale mal: con estos datos da un n 7,5 veces mayor que el correcto (1,22 mol en vez de 0,162 mol). <b>La de las calorías</b> confunde el rol de R = 1,99 cal/mol·K, que sirve para calcular <b>energía</b> (trabajo, ΔU), no para despejar volúmenes en PV = nRT con litros. <b>La de R = 8,31 con el volumen en m<sup>3</sup></b> arregla el volumen pero no la presión: R en J/mol·K va con <b>pascales</b>, no con mmHg. Que las tres versiones de R estén impresas en la misma línea del examen no las hace intercambiables: son el mismo número en tres sistemas distintos."},

  {st: 'Un enunciado dice: “se obtienen 3,00 moles de CO<sub>2</sub> gaseoso a 125 °C y 1 atm. Calcule el volumen”. ¿Cuánto da?',
   opts: ['67,2 L, porque 3,00 · 22,4', '98,0 L, calculado con PV = nRT', '73,4 L, usando el volumen molar a 25 °C (24,5 L/mol)', '22,4 L, porque el volumen molar es siempre 22,4 L'],
   c: 1,
   ex: "<b>Correcta: 98,0 L, calculado con PV = nRT.</b> T = 125 + 273 = 398 K → V = nRT/P = 3,00 · 0,0821 · 398 / 1 = <b>98,0 L</b>. <b>22,4 L/mol vale sólo en CNPT</b>, o sea a 1 atm <b>y 0 °C</b>. Acá la presión es 1 atm pero la temperatura son 125 °C: el volumen molar a esa temperatura es 32,7 L/mol, no 22,4.<br><br><b>La de multiplicar por 22,4</b> es el error clásico: aplicar 22,4 sólo porque hay 1 atm, ignorando la temperatura. Da 67,2 L, un 31 % menos. <b>La de 73,4 L</b> es 3,00 · 24,5: usa el volumen molar a 25 °C (298 K) en vez del de 125 °C (398 K). Corrige por la temperatura, pero con el dato equivocado. <b>La de 22,4 L</b> confunde volumen molar con volumen total. Buscá siempre en el enunciado las palabras “CNPT” o “condiciones normales”: si no están, es PV = nRT."},

  {st: 'Un recipiente <b>rígido y cerrado</b> con un gas se calienta de 27 °C a 327 °C. ¿Qué le pasa a la presión y con qué razonamiento?',
   opts: ['Se duplica, porque la temperatura se duplicó de 27 a 327', 'No cambia, porque el recipiente es rígido', 'Se duplica, porque 300 K → 600 K', 'Se multiplica por 12,1, que es 327/27'], c: 2,
   ex: "<b>Correcta: se duplica, porque 300 K pasa a 600 K.</b> Recipiente rígido y cerrado → V y n constantes → de P<sub>1</sub>V<sub>1</sub>/(n<sub>1</sub>T<sub>1</sub>) = P<sub>2</sub>V<sub>2</sub>/(n<sub>2</sub>T<sub>2</sub>) queda <b>P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub></b>. En kelvin: 27 °C = 300 K y 327 °C = 600 K → la temperatura absoluta se duplica → la presión se duplica.<br><br><b>La que duplica la presión por pasar de 27 a 327 °C</b> llega al resultado correcto por el camino equivocado, y ese camino falla en cuanto los números cambien: 27 → 327 en °C no es “duplicar” nada en la escala que importa. <b>La de multiplicar por 12,1</b> es el mismo error hecho explícito: 327/27 = 12,1 no significa nada, porque los cocientes de temperatura sólo tienen sentido en kelvin. <b>La que dice que no cambia</b> confunde volumen constante con estado constante: el volumen no cambia, pero la energía cinética de las moléculas sí, y por lo tanto los choques contra la pared también."},

  {st: 'La densidad de un gas es 2,50 g/L a 27 °C y 2,00 atm. ¿Cuál es su masa molar?',
   opts: ['30,8 g/mol', '56,0 g/mol', '15,4 g/mol', '61,6 g/mol'],
   c: 0,
   ex: "<b>Correcta: 30,8 g/mol.</b> M = δRT/P = 2,50 · 0,0821 · 300 / 2,00 = <b>30,8 g/mol</b>.<br><br>La fórmula sale de PV = nRT reemplazando n = m/M y despejando: <b>M = δRT/P</b> y su gemela <b>δ = PM/RT</b>. Tenelas escritas, porque el ejercicio 4 de G06A pide exactamente esto.<br><br><b>56,0</b> sale de usar 273 K, como si fuera CNPT, y además no dividir por P (2,50 · 0,0821 · 273 = 56,0). <b>61,6</b> es no dividir por P: el doble del correcto. <b>15,4</b> es dividir dos veces por P (61,6 / 2,00 / 2,00). Control rápido: a mayor presión, un gas es <b>más denso</b>; entonces para una misma densidad medida a mayor presión, la masa molar tiene que ser <b>menor</b>. Dividir por P va en la dirección correcta."},

  {st: 'Una mezcla de N<sub>2</sub> y O<sub>2</sub> en un recipiente rígido y cerrado se calienta de 25 °C a 100 °C. ¿Qué pasa con las fracciones molares y con las presiones parciales?',
   opts: ['Las fracciones molares aumentan y las presiones parciales también', 'Las fracciones molares no cambian y las presiones parciales aumentan', 'Las fracciones molares no cambian y las presiones parciales tampoco', 'Las fracciones molares cambian porque el O<sub>2</sub> es más pesado y se expande distinto'],
   c: 1,
   ex: "<b>Correcta: las fracciones molares no cambian y las presiones parciales aumentan.</b> La <b>fracción molar es un cociente de moles</b> (x<sub>A</sub> = n<sub>A</sub>/n<sub>total</sub>). En un recipiente cerrado no entra ni sale nada, así que los moles no cambian y las fracciones tampoco, pase lo que pase con P y T. Las <b>presiones parciales</b> sí suben, porque cada gas por separado cumple P<sub>A</sub> = n<sub>A</sub>RT/V y la T subió.<br><br>Éste es el ítem 8d de G06A, y la respuesta publicada por la cátedra es <b>Verdadero</b> para “si se aumenta la temperatura, la fracción molar de los gases no cambia”.<br><br><b>La que dice que las fracciones molares aumentan y la que dice que cambian porque el O<sub>2</sub> es más pesado</b> confunden fracción molar con presión parcial o con densidad. <b>La que dice que ni las fracciones ni las presiones parciales cambian</b> se olvida de que la presión sí depende de T. Y ojo con la del O<sub>2</sub> más pesado: la masa molar afecta la <b>velocidad media</b> de las moléculas, no cuántas hay."},

  {st: 'En la ecuación de van der Waals ( P + a·n<sup>2</sup>/V<sup>2</sup> )·( V − n·b ) = nRT, ¿qué corrige el término <b>n·b</b> y por qué se <b>resta</b>?',
   opts: ['Corrige las fuerzas atractivas; se resta porque las atracciones bajan la presión', 'Corrige la temperatura; se resta porque el gas real está más frío', 'Corrige el número de moles, que en un gas real es menor por asociación molecular', 'Corrige el volumen propio de las moléculas; se resta porque el volumen realmente disponible para moverse es menor que el del recipiente'], c: 3,
   ex: "<b>Correcta: corrige el volumen propio de las moléculas.</b> Cada término de van der Waals anula uno de los dos postulados del gas ideal:<br>→ <b>n·b</b> niega “las partículas son puntuales”. Las moléculas ocupan lugar, así que el espacio libre donde pueden moverse es V − nb, <b>menor</b> que el volumen del recipiente. Por eso se <b>resta</b>. La constante <b>b</b> crece con el tamaño de la molécula.<br>→ <b>a·n<sup>2</sup>/V<sup>2</sup></b> niega “no existen fuerzas atractivas”. Las atracciones frenan a las moléculas justo antes del choque contra la pared, así que la presión <b>medida</b> es menor que la ideal y hay que sumarle la diferencia. La constante <b>a</b> crece con la intensidad de las fuerzas intermoleculares.<br><br><b>La que dice que corrige las fuerzas atractivas</b> describe el otro término. <b>Las que dicen que corrige la temperatura o el número de moles</b> son inventos: van der Waals no toca ni T ni n."},

  {st: 'Para cierto gas en cierta condición se mide un factor de compresibilidad Z = 0,85. ¿Qué se concluye?',
   opts: ['Dominan las repulsiones: el gas ocupa más volumen que el ideal', 'El gas se comporta idealmente dentro del error experimental', 'El gas está a temperatura menor que el cero absoluto', 'Dominan las atracciones: el gas ocupa menos volumen que el ideal'], c: 3,
   ex: "<b>Correcta: dominan las atracciones y el gas ocupa menos volumen que el ideal.</b> T06-A define Z = V<sub>m</sub><sup>real</sup> / V<sub>m</sub><sup>ideal</sup>. Con Z = 0,85 el volumen molar real es un 15 % <b>menor</b> que el ideal: las moléculas se están <b>atrayendo</b> y por eso se juntan más de lo que predice el modelo. <b>Z &lt; 1 → dominan las atracciones.</b><br><br><b>La de las repulsiones</b> es el caso Z &gt; 1, típico de presiones muy altas, donde lo que pesa es el volumen propio de las moléculas y sus repulsiones. <b>La del comportamiento ideal</b> ignora que un 15 % es una desviación grande, no ruido. <b>La de la temperatura bajo el cero absoluto</b> no tiene sentido físico: Z es un cociente de volúmenes."},

  {st: 'Un recipiente cerrado contiene agua líquida en equilibrio con su vapor a 25 °C. Se duplica el volumen del recipiente <b>manteniendo la temperatura</b> y todavía queda algo de agua líquida. ¿Qué pasa con la presión de vapor?',
   opts: ['Se reduce a la mitad, por la ley de Boyle', 'No cambia: sigue siendo la presión de vapor del agua a 25 °C', 'Aumenta, porque se evapora más agua', 'Depende de cuánta agua líquida quede'],
   c: 1,
   ex: "<b>Correcta: no cambia, sigue siendo la presión de vapor del agua a 25 °C.</b> T06B1 le dedica una diapositiva entera: la presión de vapor <b>SÍ depende</b> de la temperatura y de las fuerzas intermoleculares, y <b>NO depende</b> del volumen de la fase líquida o vapor, ni del área de la superficie del líquido.<br><br>El mecanismo: al agrandar el recipiente la presión cae un instante, el equilibrio se corre hacia la vaporización, <b>se evapora más agua</b> hasta que la presión vuelve exactamente a 23,8 mmHg (el valor a 25 °C de la tabla de T06B1). Mientras <b>quede líquido</b>, el sistema siempre puede reponerla.<br><br><b>La que la reduce a la mitad</b> aplica Boyle donde no corresponde: Boyle vale para un gas solo, no para un vapor en equilibrio con su líquido; es justo la afirmación del ítem 11d de G06B (las presiones de vapor disminuyen cuando aumenta el volumen), marcada Falso por la cátedra. <b>La que dice que aumenta</b> confunde el mecanismo con el resultado: sí se evapora más, pero la presión final es la misma. <b>La que dice que depende de cuánta agua líquida quede</b> contradice lo mismo que dice T06B1: la presión de vapor no depende del volumen de la fase líquida ni de la fase vapor, sólo de la temperatura y de la sustancia. Recién cuando se evapora <b>la última gota</b> la presión empieza a bajar con el volumen."},

  {st: '¿Cuál es la definición de <b>punto de ebullición normal</b> que pide el 2do recuperatorio del 6/12/24?',
   opts: ['La temperatura a la que la presión de vapor del líquido es igual a 1 atm', 'La temperatura a la que el líquido empieza a formar burbujas', 'La temperatura a la que la presión de vapor iguala a la presión externa, cualquiera sea', 'La temperatura del punto crítico del líquido'], c: 0,
   ex: "<b>Correcta: la temperatura a la que la presión de vapor del líquido es igual a 1 atm.</b> Textual de T06B2: “Temperatura de ebullición normal es la temperatura a la cual la <b>presión de vapor del líquido es igual a 1 atm</b>”.<br><br><b>La de la presión externa, cualquiera sea, es la trampa fina</b>, y es la definición de <b>punto de ebullición</b> a secas, sin el “normal”. Como la presión externa puede ser cualquiera, <b>hay infinitos puntos de ebullición</b>; el “normal” es el que fija esa presión en 1 atm y por eso es único y tabulable. Escribir esa definición cuando te piden “normal” pierde puntos, porque justamente lo que evalúan es si sabés qué agrega la palabra.<br><br><b>La de las burbujas</b> es una descripción del fenómeno, no una definición operativa. <b>La que da la temperatura del punto crítico</b> confunde ebullición con el punto crítico, que es donde <b>termina</b> la curva líquido-vapor."},

  {st: 'Dos afirmaciones sobre viscosidad: (I) a mayor fuerza intermolecular, mayor viscosidad; (II) a mayor temperatura, mayor viscosidad de un líquido. ¿Cuál corresponde a T06B1?',
   opts: ['Sólo la I', 'Sólo la II', 'Las dos', 'Ninguna'],
   c: 0,
   ex: "<b>Correcta: sólo la I.</b> T06B1 tiene las dos frases impresas y la segunda va al revés de lo que dice el enunciado: “A mayor fuerza intermolecular, mayor viscosidad” ✓ y “<b>En el estado líquido, a mayor temperatura menor viscosidad</b>”.<br><br>Es intuitivo con aceite: frío cuesta que fluya, caliente corre solo. Al subir la temperatura las moléculas tienen más energía cinética y les cuesta menos vencer las atracciones que las traban.<br><br>Cuidado con extrapolarlo a los gases: ahí la viscosidad <b>aumenta</b> con la temperatura, por un mecanismo distinto. La frase de T06B1 dice explícitamente “en el estado líquido”. T06B1 agrega un tercer factor: la <b>geometría molecular</b>, “a mayor posibilidad de entrelazamiento, mayor viscosidad”."},

  {st: 'Se colocan 0,200 mol de un líquido volátil en un recipiente de volumen variable a temperatura constante. Se calcula que el volumen límite (última gota) es 15,0 L. Si el recipiente se fija en 10,0 L, ¿cuál es la presión del sistema?',
   opts: ['P = nRT/V con los 0,200 mol y V = 10,0 L', 'P = la presión de vapor del líquido a esa temperatura', 'P = nRT/V pero usando sólo los moles que quedan en el líquido', 'No se puede saber sin conocer la masa molar'],
   c: 1,
   ex: "<b>Correcta: P es la presión de vapor del líquido a esa temperatura.</b> 10,0 L &lt; 15,0 L → el recipiente es <b>más chico</b> que el volumen límite → <b>queda líquido sin evaporar</b> → hay dos fases en equilibrio → la presión es exactamente <b>P<sub>v</sub></b>, la presión de vapor a esa temperatura, y no depende del volumen.<br><br><b>La de P = nRT/V con los 0,200 mol</b> es el error más caro de este tipo de ejercicio: aplicar la ecuación de estado con <b>todos</b> los moles cuando parte del material sigue siendo líquido. Daría una presión mayor que P<sub>v</sub>, que es físicamente imposible en equilibrio (condensaría). Esa cuenta sólo vale si V &gt; V<sub>lím</sub>.<br><br><b>La de usar sólo los moles que quedan en el líquido</b> no tiene sentido: el líquido no contribuye a la presión del gas. <b>La que dice que no se puede saber sin la masa molar</b> es falsa: los moles ya están dados en el enunciado (0,200 mol) y, para la presión, alcanza con saber que hay dos fases.<br><br>Si te piden <b>cuántos moles hay en cada fase</b>, ahí sí usás la ecuación de estado <b>al revés</b>: n<sub>vapor</sub> = P<sub>v</sub>·V/(RT) y n<sub>líquido</sub> = n<sub>total</sub> − n<sub>vapor</sub>."},

  {st: 'Un sólido cristaliza en el sistema cúbico centrado en el cuerpo. ¿Cuántas partículas hay por celda unitaria y cómo se cuentan?',
   opts: ['9, porque hay 8 vértices y 1 centro', '4 = 8 vértices · 1/8 + 6 caras · 1/2', '3, porque es el triple del cúbico simple', '2 = 8 vértices · 1/8 + 1 al centro'], c: 3,
   ex: "<b>Correcta: 2 = 8 vértices · 1/8 + 1 al centro.</b> Una partícula en un <b>vértice</b> se comparte entre 8 celdas vecinas y aporta 1/8; la del <b>centro del cuerpo</b> no se comparte con nadie y aporta 1 entera. Total: 8·(1/8) + 1 = <b>2</b>.<br><br><b>La de 9 partículas</b> es exactamente el error que la pregunta busca: contar las partículas que se <b>ven</b> dibujadas sin repartirlas. <b>La de 4 partículas</b> es el conteo del <b>FCC</b>, que da 4 (8·1/8 + 6 caras·1/2). <b>La de 3 partículas</b> es la afirmación falsa del 2do recuperatorio del 6/12/24: BCC tiene el <b>doble</b> del cúbico simple (2 contra 1), no el triple, y <b>la mitad</b> del FCC (2 contra 4), no un tercio.<br><br>Los tres números que hay que tener automatizados: <b>cúbico simple 1 · BCC 2 · FCC 4</b> (y HCP 6)."},

  {st: 'Un sólido no conduce la corriente eléctrica en estado sólido, pero <b>fundido conduce muy bien</b>. Además es duro y frágil, y tiene punto de fusión alto. ¿Qué tipo de sólido es?',
   opts: ['Metálico', 'Covalente (atómico)', 'Iónico', 'Molecular'], c: 2,
   ex: "<b>Correcta: iónico.</b> Ese perfil es exclusivo del <b>iónico</b>, y así lo escribe la tabla de T06C en el renglón de conductividad eléctrica: “<b>Como sólido es aislante. Fundido o en solución es conductor</b>”. La razón: los iones existen siempre, pero en la red están <b>fijos</b> en sus posiciones; recién al fundir o disolver quedan libres para moverse y transportar carga.<br><br><b>La de metálico</b> falla porque el metálico conduce <b>también en estado sólido</b> (el mar de electrones deslocalizados está ahí desde el principio), y además es dúctil, no frágil. <b>La de covalente</b> falla porque el covalente tiene conductividad <b>baja</b> en cualquier estado. <b>La de molecular</b> falla en todo: los moleculares son blandos, de punto de fusión bajo y aislantes siempre.<br><br>Esto es el V/F 4 de la EI del 11/07/24: “Un sólido conductor de la corriente eléctrica posee aniones y cationes formando su estructura cristalina cúbica de cuerpo centrado” → <b>falso</b>, porque un sólido que conduce siendo sólido es <b>metálico</b>, y en la red metálica los nodos son <b>cationes</b>, no cationes y aniones."},

  {st: 'Ordená de mayor a menor <b>dureza</b> según la tabla de propiedades de T06C: diamante (covalente), NaCl (iónico), hielo seco (molecular).',
   opts: ['diamante &gt; NaCl &gt; hielo seco', 'NaCl &gt; diamante &gt; hielo seco', 'hielo seco &gt; NaCl &gt; diamante', 'los tres tienen dureza similar porque los tres son cristalinos'], c: 0,
   ex: "<b>Correcta: diamante &gt; NaCl &gt; hielo seco.</b> El renglón “Dureza” de T06C: atómico o covalente <b>muy duros</b> · iónico <b>duros</b> · molecular <b>blandos</b>. Sale del carácter de la interacción entre nodos: enlace covalente <b>muy fuerte</b> &gt; enlace iónico <b>fuerte</b> &gt; van der Waals <b>débil</b>.<br><br><b>La de NaCl &gt; diamante &gt; hielo seco</b> es la afirmación del V/F 6 de la EI del 11/07/24 (“Los sólidos iónicos son más duros que los sólidos covalentes”), que es <b>falsa</b>. <b>La de hielo seco &gt; NaCl &gt; diamante</b> es el orden exactamente inverso: el molecular es el más blando y el covalente el más duro. <b>La que dice que los tres tienen dureza similar</b> confunde “tener estructura ordenada” con “estar fuertemente unido”: el hielo seco es un cristal perfectamente ordenado y se deshace con la mano.<br><br>El par que usa la cátedra para fijar la idea: <b>CO<sub>2</sub> sublima a −78,5 °C</b> y <b>SiO<sub>2</sub> funde a ~1700 °C</b> con fórmulas análogas, porque en uno se vencen fuerzas intermoleculares y en el otro se rompen enlaces covalentes."},

  {st: '¿Cuál es la presión máxima a la que un sólido puede sublimar?',
   opts: ['La presión del punto triple de la sustancia', 'La presión crítica de la sustancia', '1 atm, por definición de sublimación', 'No hay máximo: un sólido puede sublimar a cualquier presión si se calienta lo suficiente'], c: 0,
   ex: "<b>Correcta: la presión del punto triple.</b> Es el ítem c del 2do recuperatorio del 6/12/24 (8 puntos). La <b>curva de sublimación</b> (equilibrio sólido-vapor) va desde el origen hasta el <b>punto triple</b> y ahí <b>termina</b>. Por encima de esa presión, calentar el sólido a P constante cruza primero la curva de <b>fusión</b>: aparece líquido, y ya no hay sublimación.<br><br><b>La de la presión crítica</b> es la confusión que explota el V/F 5 de la EI del 11/07/24. El punto crítico es el extremo <b>superior</b> de la curva líquido-vapor y decide si un gas se puede licuar comprimiendo; no tiene nada que ver con la sublimación. <b>La de 1 atm</b> confunde una condición particular con la definición. <b>La que dice que no hay máximo</b> es falsa: por encima de la presión del punto triple el sólido funde antes de vaporizar.<br><br>Regla de bolsillo: <b>fundir o sublimar → punto triple. Licuar o no licuar → punto crítico.</b>"},

  {st: 'El diagrama de fases de una sustancia muestra la curva sólido-líquido con <b>pendiente negativa</b>. ¿Qué se deduce?',
   opts: ['El sólido es más denso que el líquido y se hunde en él', 'La sustancia no tiene punto triple', 'El sólido es menos denso que el líquido y flota; aumentar la presión baja la temperatura de fusión', 'La sustancia sublima a cualquier presión'], c: 2,
   ex: "<b>Correcta: el sólido es menos denso que el líquido y flota.</b> Pendiente negativa → al aumentar P la temperatura de fusión <b>baja</b> → la presión favorece a la fase de <b>menor volumen</b>, que en este caso es el <b>líquido</b> → δ<sub>sólido</sub> &lt; δ<sub>líquido</sub> → el sólido <b>flota</b>. T06B2 lo escribe como “a mayor P aplicada, menor temperatura de fusión” y lista las sustancias que se comportan así: <b>H<sub>2</sub>O, Bi, Ge, Si, Ga</b>.<br><br><b>La del sólido más denso que el líquido</b> es el caso <b>normal</b>, de pendiente <b>positiva</b>, y es la respuesta publicada de G06B 16c para el diagrama de esa guía. <b>Las que dicen que no hay punto triple o que sublima a cualquier presión</b> no se siguen de nada: la pendiente de la curva de fusión no dice nada sobre la existencia del punto triple ni sobre la sublimación.<br><br>El porqué microscópico en el agua: en el hielo cada molécula forma el número máximo de puentes de hidrógeno, <b>cuatro</b>, y esa estructura hexagonal es <b>más espaciada</b> y por lo tanto menos densa que el agua líquida, donde sólo algunas moléculas los forman."},

  {st: 'Un gas está a una temperatura <b>superior</b> a su temperatura crítica. Se lo comprime isotérmicamente hasta presiones muy altas. ¿Qué se observa?',
   opts: ['Licua en cuanto se supera la presión de vapor', 'No licua: por encima de T<sub>c</sub> ninguna compresión produce líquido', 'Se solidifica directamente', 'Licua sólo si además se lo enfría por debajo de la presión crítica'],
   c: 1,
   ex: "<b>Correcta: no licua, por encima de T<sub>c</sub> ninguna compresión produce líquido.</b> Ésa es la definición operativa del punto crítico: por encima de <b>T<sub>c</sub></b> desaparece la distinción entre líquido y vapor y <b>no se puede licuar el gas por compresión</b>. En el diagrama P vs T, una vertical a T &gt; T<sub>c</sub> no cruza ninguna curva de equilibrio; en el diagrama P vs V, las isotermas por debajo de T<sub>c</sub> tienen un tramo horizontal de coexistencia que se acorta al subir T; la isoterma crítica es aquella en la que ese tramo se reduce a un punto, el punto crítico, de <b>pendiente cero</b>.<br><br>Por eso T06B2 usa dos palabras distintas: <b>vapor</b> es la fase gaseosa por debajo de T<sub>c</sub> (licuable comprimiendo) y <b>gas</b> la que está por encima. Y por encima de T<sub>c</sub> <b>y</b> P<sub>c</sub>, el plano de estado rotula la región como <b>fluido</b>: el fluido supercrítico, con densidad de líquido y difusividad de gas.<br><br><b>La que dice que licua al superar la presión de vapor</b> confunde presión de vapor con presión crítica. <b>La que dice que licua sólo si además se lo enfría</b> mezcla las dos coordenadas del punto crítico: enfriar sirve, pero hay que bajar de <b>T<sub>c</sub></b>, no de P<sub>c</sub>. <b>La que dice que se solidifica directamente</b> cambia la pregunta: se trata de licuar, y en el diagrama de la cátedra la vertical a T &gt; T<sub>c</sub> no cruza ninguna curva de equilibrio, así que la compresión no produce ningún cambio de fase.<br><br>Dato de escala de T06B2: el CO<sub>2</sub> tiene T<sub>c</sub> = 31,05 °C. Un día de verano en Buenos Aires ya está por encima: a 35 °C no hay forma de licuar CO<sub>2</sub> por más que lo comprimas."},
  {st: "Tres líquidos A, B y C tienen a 20 °C presiones de vapor de 17,5; 75 y 442 mmHg. Se dibujan sus curvas P<sub>v</sub> vs T en un mismo gráfico y se traza la horizontal de 760 mmHg. ¿Cómo quedan?",
   opts: ["A arriba y C abajo, porque A tiene más fuerza intermolecular y por eso más presión de vapor", "C arriba y A abajo, y la horizontal de 760 mmHg corta primero a A, que es la que hierve a menor temperatura", "C arriba y A abajo, y la horizontal de 760 mmHg corta primero a C: es la de menor temperatura de ebullición normal y la de menos fuerza intermolecular", "Las tres curvas se cruzan en 760 mmHg, porque a esa presión todas las sustancias hierven a la misma temperatura"],
   c: 2,
   ex: "A 20 °C la altura de cada curva es su presión de vapor: C (442 mmHg) queda arriba, después B (75) y abajo A (17,5). La más volátil es la de menos fuerza intermolecular, así que C es la de menos FIM, y como su curva es la más alta llega antes a 760 mmHg: corta primero la horizontal y tiene la menor temperatura de ebullición normal. Esa es la opción correcta.<br><br>La que pone a A arriba invierte la regla: más fuerza intermolecular significa <b>menos</b> presión de vapor, no más. La que ubica bien las curvas pero hace cortar primero a A se equivoca en la lectura: la curva más baja necesita más temperatura para llegar a 760 mmHg, de modo que corta última y es la de mayor temperatura de ebullición normal. La que hace coincidir las tres curvas en 760 mmHg confunde la presión, que sí es común, con la temperatura de corte, que es justamente el punto de ebullición normal y es distinto para cada sustancia."},
  {st: "El sodio cristaliza en una celda cúbica centrada en el cuerpo (BCC) de arista a = 4,3 Å. ¿Cuánto vale el radio del átomo y por qué?",
   opts: ["r = 1,86 Å, porque los átomos se tocan a lo largo de la diagonal del cuerpo y √3·a = 4r", "r = 2,15 Å, porque en toda celda cúbica los átomos se tocan a lo largo de la arista y a = 2r", "r = 1,52 Å, porque los átomos se tocan a lo largo de la diagonal de la cara y √2·a = 4r", "r = 3,72 Å, porque la diagonal del cuerpo vale √3·a y es igual a 2r"],
   c: 0,
   ex: "En el BCC el átomo central toca a los 8 de los vértices, y la línea que los une es la diagonal del cuerpo. Sobre ella entran un radio del vértice, un diámetro del átomo central y un radio del otro vértice: 4r. Pitágoras da la diagonal de la cara (b<sup>2</sup> = 2a<sup>2</sup>) y la del cuerpo (c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> = 3a<sup>2</sup>), así que √3·a = 4r y r = √3 · 4,3 / 4 = 1,86 Å. Esa es la correcta.<br><br>La que usa a = 2r (2,15 Å) vale sólo para la cúbica simple: en el BCC los átomos de la arista no se tocan entre sí, por eso da un radio 15 % mayor. La de 1,52 Å usa la diagonal de la cara, que es la línea de contacto de la FCC y no la del BCC. La de 3,72 Å toma la diagonal del cuerpo como 2r en vez de 4r, y de hecho 3,72 Å es el diámetro del átomo, no el radio."},
  {st: "En una celda cúbica de CaF<sub>2</sub> los Ca<sup>2+</sup> están en los vértices y en los centros de las caras, y los 8 F<sup>-</sup> están dentro de la celda. ¿Cuántos iones de cada tipo hay por celda y qué se comprueba con ese conteo?",
   opts: ["14 Ca<sup>2+</sup> y 8 F<sup>-</sup>, contando todos los iones que se ven dibujados", "4 Ca<sup>2+</sup> y 4 F<sup>-</sup>, porque los F<sup>-</sup> también se reparten entre celdas vecinas", "1 Ca<sup>2+</sup> y 2 F<sup>-</sup>, porque una celda unitaria siempre contiene la fórmula una sola vez", "4 Ca<sup>2+</sup> (8 · 1/8 + 6 · 1/2) y 8 F<sup>-</sup> (enteros, adentro de la celda): relación 4 : 8 = 1 : 2, la fórmula CaF<sub>2</sub>"],
   c: 3,
   ex: "La regla de reparto se aplica a cada especie por separado. Los Ca<sup>2+</sup> son los de una FCC: 8 vértices · 1/8 + 6 caras · 1/2 = 4. Los F<sup>-</sup> están adentro y no se comparten con ninguna celda vecina, así que cuentan enteros: 8. La relación 4 : 8 se reduce a 1 : 2, que es la fórmula, y esa es la verificación. Esa es la correcta.<br><br>La de 14 y 8 cuenta los iones dibujados sin repartirlos, que es el error de siempre con las celdas. La de 4 y 4 reparte también a los F<sup>-</sup> del interior, que no están sobre ningún borde. La de 1 y 2 supone que la celda tiene una sola unidad de fórmula, y no es así: la celda es la que repite la red y puede contener varias (acá cuatro)."},
  {st: "¿Qué diferencia hay entre cómo conduce la corriente un semiconductor como el silicio y un sólido iónico como el NaCl?",
   opts: ["En los dos conducen los iones; en el silicio son más chicos y se mueven mejor", "Los dos conducen igual en estado sólido, pero el semiconductor conduce más a bajas temperaturas", "En el semiconductor conducen electrones y huecos, que aparecen cuando algunos electrones saltan la brecha entre la banda de valencia y la de conducción (conduce más al calentar); en el NaCl sólido los iones están fijos y recién conduce fundido o disuelto, con transporte de materia", "El semiconductor conduce como un metal, con una banda semillena, y por eso su conductividad baja al calentar"],
   c: 2,
   ex: "Un semiconductor tiene la banda de valencia llena y la de conducción vacía, con una brecha pequeña. Calor o luz hacen saltar electrones a la banda de conducción y dejan huecos (el dopado agrega portadores de un solo tipo); ambos transportan carga, la conductividad sube con la temperatura y el cristal no cambia. En el NaCl sólido los únicos portadores posibles son los iones y están fijos en la red: sólo conduce fundido o disuelto, y ahí migran iones, o sea que hay transporte de materia. Esa es la correcta.<br><br>La que dice que en el silicio conducen iones se equivoca de portador: la red de silicio es covalente y neutra. La que dice que los dos conducen igual como sólidos ignora que el NaCl sólido es aislante. La que dice que conduce como un metal, con banda semillena y conductividad que baja al calentar, describe al metal y no al semiconductor: el semiconductor tiene brecha y su conductividad sube al calentar."}

]);

// SECCIÓN 8 · REACCIONES QUÍMICAS, REDOX Y ESTEQUIOMETRÍA
// Enunciados transcriptos textualmente de los exámenes reales de la cátedra
// (2do Recup. 27/06/25, 1er Recup. 14/06/24, parciales Curso 1 y Curso 3) y de
// la guía G08. Masas molares con
// valores de tabla periódica (Cr 52,00 · Cl 35,45 · K 39,10 · O 16,00 · Ca 40,08
// · C 12,01 · H 1,008 · Na 22,99 · N 14,01 · Mn 54,94) y R = 0,0821 L·atm/mol·K.

registerReveals('fiuba-quimica', '8', [

{st: "<b>Básico · Balancear por tanteo.</b> Balanceá la combustión completa del etano: C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O.",
 ans: "<b>2 C<sub>2</sub>H<sub>6</sub> + 7 O<sub>2</sub> → 4 CO<sub>2</sub> + 6 H<sub>2</sub>O</b>.",
 sol: "<b>Paso 1 · primero lo que está en una sola sustancia de cada lado, y el O<sub>2</sub> al final.</b> Carbono: 2 C en el etano, así que se necesitan 2 CO<sub>2</sub>: C<sub>2</sub>H<sub>6</sub> + O<sub>2</sub> → <b>2</b> CO<sub>2</sub> + H<sub>2</sub>O. → <b>Paso 2 · hidrógeno.</b> 6 H en el etano, y cada H<sub>2</sub>O tiene 2: hacen falta <b>3</b> H<sub>2</sub>O. → <b>Paso 3 · oxígeno.</b> A la derecha hay 2 · 2 + 3 · 1 = 7 átomos de O, y cada O<sub>2</sub> aporta 2: el coeficiente es 7/2. Queda C<sub>2</sub>H<sub>6</sub> + 7/2 O<sub>2</sub> → 2 CO<sub>2</sub> + 3 H<sub>2</sub>O. → <b>Paso 4 · sacar la fracción.</b> Se multiplica todo por 2: <b>2 C<sub>2</sub>H<sub>6</sub> + 7 O<sub>2</sub> → 4 CO<sub>2</sub> + 6 H<sub>2</sub>O</b>. → <b>Control.</b> C: 4 = 4. H: 12 = 12. O: 14 = 8 + 6 = 14. → <b>Error típico:</b> arreglar el oxígeno cambiando un subíndice (escribir H<sub>2</sub>O<sub>2</sub> o CO<sub>3</sub>): eso cambia la sustancia. Sólo se tocan los coeficientes."},

{st: "<b>Básico · Número de oxidación en fórmulas.</b> Calculá el número de oxidación de: <b>a)</b> el Mn en K<sub>2</sub>MnO<sub>4</sub>; <b>b)</b> el N en NH<sub>4</sub><sup>+</sup>; <b>c)</b> el Cl en KClO<sub>3</sub>; <b>d)</b> el H en CaH<sub>2</sub>.",
 ans: "<b>a)</b> +6. <b>b)</b> −3. <b>c)</b> +5. <b>d)</b> −1.",
 sol: "<b>Idea de todos los casos.</b> Se ponen los números que se conocen (K = +1, O = −2, H = +1, Ca = +2) y se despeja el que falta, sabiendo que la suma da <b>0</b> en un compuesto neutro y da <b>la carga</b> en un ion. → <b>a)</b> 2(+1) + x + 4(−2) = 0 ⟹ x = 8 − 2 = <b>+6</b>. → <b>b)</b> Es un ion con carga +1: x + 4(+1) = +1 ⟹ x = <b>−3</b>. → <b>c)</b> (+1) + x + 3(−2) = 0 ⟹ x = 6 − 1 = <b>+5</b>. → <b>d)</b> El H casi siempre es +1, pero en un hidruro metálico es −1. Acá el Ca es +2 (alcalinotérreo), así que 2 + 2x = 0 ⟹ x = <b>−1</b>. → <b>Control.</b> Volvé a sumar con el resultado: en a), 2 + 6 − 8 = 0 ✔. → <b>Error típico:</b> en el ion NH<sub>4</sub><sup>+</sup> igualar la suma a 0 en vez de a +1."},

{st: "<b>Intermedio · Masa de producto desde masa de reactivo.</b> El carbonato de calcio reacciona con el ácido clorhídrico según CaCO<sub>3</sub> + 2 HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O. Con 25,0 g de CaCO<sub>3</sub> y HCl en exceso, ¿cuántos gramos de CaCl<sub>2</sub> se forman y cuántos mol de HCl se consumen? (M: CaCO<sub>3</sub> = 100,1; CaCl<sub>2</sub> = 111,0 g/mol).",
 ans: "<b>27,7 g de CaCl<sub>2</sub></b> y <b>0,500 mol de HCl</b>.",
 sol: "<b>Paso 1 · la ecuación ya está balanceada</b> (Ca 1 = 1, C 1 = 1, Cl 2 = 2, H 2 = 2, O 3 = 3). El dato es el CaCO<sub>3</sub>, y el HCl \"en exceso\" dice que no limita: se parte del CaCO<sub>3</sub>. → <b>Paso 2 · gramos a moles.</b> n(CaCO<sub>3</sub>) = 25,0 g / 100,1 g/mol = <b>0,250 mol</b>. → <b>Paso 3 · moles a moles, con los coeficientes.</b> 1 CaCO<sub>3</sub> da 1 CaCl<sub>2</sub>: n(CaCl<sub>2</sub>) = 0,250 mol. 1 CaCO<sub>3</sub> gasta 2 HCl: n(HCl) = 0,250 · 2 = <b>0,500 mol</b>. → <b>Paso 4 · moles a gramos.</b> m(CaCl<sub>2</sub>) = 0,250 mol · 111,0 g/mol = <b>27,7 g</b>. → <b>Control.</b> La masa se conserva: 25,0 g de CaCO<sub>3</sub> + 18,2 g de HCl (0,500 mol · 36,46) = 43,2 g de reactivos, y los productos son 27,7 g de CaCl<sub>2</sub> + 11,0 g de CO<sub>2</sub> + 4,5 g de H<sub>2</sub>O = 43,2 g. → <b>Error típico:</b> pasar directo de gramos de un compuesto a gramos del otro: la relación 1:1 es de moles, no de gramos."},

{st: "<b>Intermedio · Un gas como producto.</b> Se agregan 6,54 g de cinc a un exceso de ácido clorhídrico: Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. ¿Qué volumen de H<sub>2</sub> se obtiene medido a 25 °C y 1 atm? (Zn = 65,4 g/mol; R = 0,0821 L·atm/mol·K).",
 ans: "<b>2,45 L de H<sub>2</sub></b>.",
 sol: "<b>Paso 1 · moles del dato.</b> n(Zn) = 6,54 g / 65,4 g/mol = <b>0,100 mol</b>. → <b>Paso 2 · coeficientes.</b> 1 Zn da 1 H<sub>2</sub>: n(H<sub>2</sub>) = 0,100 mol. → <b>Paso 3 · de moles de gas a volumen.</b> No son CNPT (la temperatura es 25 °C), así que se usa PV = nRT con T = 25 + 273 = 298 K: V = nRT / P = 0,100 · 0,0821 · 298 / 1 = <b>2,45 L</b>. → <b>Control.</b> A 25 °C un mol ocupa unos 24,5 L; una décima parte de mol, unos 2,45 L ✔. → <b>Error típico:</b> usar 22,4 L/mol, que da 2,24 L: ese valor es sólo para 0 °C y 1 atm."},

{st: "<b>Intermedio · Reactivo limitante con masas.</b> Se mezclan 10,0 g de Na con 10,0 g de Cl<sub>2</sub>: 2 Na + Cl<sub>2</sub> → 2 NaCl. Determiná el reactivo limitante, la masa de NaCl que se forma y la masa del reactivo que sobra. (Na = 22,99; Cl<sub>2</sub> = 70,90; NaCl = 58,5 g/mol).",
 ans: "Limita el <b>Cl<sub>2</sub></b>; se forman <b>16,5 g de NaCl</b> y sobran <b>3,51 g de Na</b>.",
 sol: "<b>Paso 1 · las dos cantidades en moles.</b> n(Na) = 10,0 / 22,99 = 0,435 mol. n(Cl<sub>2</sub>) = 10,0 / 70,90 = 0,141 mol. → <b>Paso 2 · cocientes n/coeficiente.</b> q(Na) = 0,435 / 2 = 0,217. q(Cl<sub>2</sub>) = 0,141 / 1 = 0,141. El menor es el del Cl<sub>2</sub>: <b>limita el Cl<sub>2</sub></b>. → <b>Paso 3 · producto, desde el limitante.</b> n(NaCl) = 0,141 · 2 = 0,282 mol ⟹ m = 0,282 · 58,5 = <b>16,5 g</b>. → <b>Paso 4 · lo que sobra.</b> El Cl<sub>2</sub> consume 0,282 mol de Na (0,141 · 2). Sobran 0,435 − 0,282 = 0,153 mol ⟹ 0,153 · 22,99 = <b>3,51 g de Na</b>. → <b>Control.</b> Se partió de 10,0 + 10,0 = 20,0 g, y quedan 16,5 + 3,51 = 20,0 g ✔. → <b>Error típico:</b> como hay la misma masa de los dos, creer que dan igual: tienen masas molares muy distintas, y el Na tiene tres veces más moles."},

{st: "<b>Intermedio · Muestra impura.</b> Se tratan 50,0 g de una caliza con 80,0 % de CaCO<sub>3</sub> con HCl en exceso: CaCO<sub>3</sub> + 2 HCl → CaCl<sub>2</sub> + CO<sub>2</sub> + H<sub>2</sub>O. ¿Qué volumen de CO<sub>2</sub> se desprende, medido en CNPT? (CaCO<sub>3</sub> = 100,1 g/mol).",
 ans: "<b>8,95 L de CO<sub>2</sub></b>.",
 sol: "<b>Paso 1 · pureza primero.</b> Sólo el CaCO<sub>3</sub> reacciona; el resto de la caliza no. m(CaCO<sub>3</sub>) = 50,0 g · 80,0/100 = <b>40,0 g</b>. → <b>Paso 2 · a moles.</b> n = 40,0 / 100,1 = <b>0,3996 mol</b>. → <b>Paso 3 · coeficientes.</b> 1 CaCO<sub>3</sub> da 1 CO<sub>2</sub>: n(CO<sub>2</sub>) = 0,3996 mol. → <b>Paso 4 · volumen en CNPT.</b> V = 0,3996 mol · 22,4 L/mol = <b>8,95 L</b>. → <b>Control.</b> Si la caliza fuera pura (50,0 g = 0,499 mol) saldrían 11,2 L; con 80 % tiene que salir 80 % de eso: 8,95 L ✔. → <b>Error típico:</b> usar los 50,0 g como si fueran todos CaCO<sub>3</sub> (11,2 L): las impurezas no entran en la cuenta."},

{st: "<b>Intermedio · Calcular el rendimiento.</b> Se calientan 12,25 g de KClO<sub>3</sub> y se descomponen según 2 KClO<sub>3</sub> → 2 KCl + 3 O<sub>2</sub>. Se recogen 3,90 g de O<sub>2</sub>. ¿Cuál fue el rendimiento? (KClO<sub>3</sub> = 122,55; O<sub>2</sub> = 32,00 g/mol).",
 ans: "<b>81,3 %</b>.",
 sol: "<b>Paso 1 · cuánto O<sub>2</sub> debería salir (lo teórico).</b> n(KClO<sub>3</sub>) = 12,25 / 122,55 = 0,1000 mol. La relación es 2 KClO<sub>3</sub> : 3 O<sub>2</sub>, así que n(O<sub>2</sub>) = 0,1000 · 3/2 = 0,1500 mol ⟹ m = 0,1500 · 32,00 = <b>4,80 g</b>. → <b>Paso 2 · lo que se obtuvo de verdad.</b> 3,90 g, el dato. → <b>Paso 3 · el cociente, sobre el producto.</b> R = 3,90 / 4,80 · 100 = <b>81,3 %</b>. → <b>Control.</b> Un rendimiento es menor o igual que 100 %. Si te da más, invertiste el cociente. → <b>Error típico:</b> comparar gramos de KClO<sub>3</sub> con gramos de O<sub>2</sub> sin pasar por la ecuación: el rendimiento compara dos valores <b>del mismo producto</b>, uno real y uno teórico."},

{st: "<b>Intermedio · Hemirreacción en medio ácido.</b> Escribí la hemirreacción balanceada del ion nitrato que pasa a NO en medio ácido: NO<sub>3</sub><sup>−</sup> → NO. Indicá cuántos electrones intervienen y si es oxidación o reducción.",
 ans: "<b>NO<sub>3</sub><sup>−</sup> + 4 H<sup>+</sup> + 3 e<sup>−</sup> → NO + 2 H<sub>2</sub>O</b>: 3 e<sup>−</sup>, una <b>reducción</b>.",
 sol: "<b>Paso 1 · qué cambia.</b> N: en NO<sub>3</sub><sup>−</sup> es +5 (x + 3(−2) = −1) y en NO es +2: <b>baja</b>, así que es una reducción y los electrones van a la izquierda. → <b>Paso 2 · el N ya está igualado</b> (1 de cada lado). → <b>Paso 3 · oxígeno con H<sub>2</sub>O.</b> Hay 3 O a la izquierda y 1 a la derecha: se suman 2 H<sub>2</sub>O a la derecha. NO<sub>3</sub><sup>−</sup> → NO + 2 H<sub>2</sub>O. → <b>Paso 4 · hidrógeno con H<sup>+</sup>.</b> Los 2 H<sub>2</sub>O tienen 4 H: se suman 4 H<sup>+</sup> a la izquierda. → <b>Paso 5 · cargas con electrones.</b> Izquierda: −1 + 4 = +3. Derecha: 0. Se suman 3 e<sup>−</sup> a la izquierda: <b>NO<sub>3</sub><sup>−</sup> + 4 H<sup>+</sup> + 3 e<sup>−</sup> → NO + 2 H<sub>2</sub>O</b>. → <b>Control.</b> Cargas: −1 + 4 − 3 = 0 contra 0 ✔. Los 3 e<sup>−</sup> coinciden con la baja de +5 a +2. → <b>Error típico:</b> poner los electrones a la derecha: en una reducción se ganan, son reactivo."},


  {st: '<b>2do Recuperatorio · Química Básica CB040 · 27/06/25 · Ejercicio 1 (40 pts).</b> “Se desea preparar 20 g de cloruro crómico según la reacción: K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> (ac) + 14 HCl (ac) --&gt; 2 CrCl<sub>3</sub> (ac) + 3 Cl<sub>2</sub> (g) + 2 KCl (ac) + 7 H<sub>2</sub>O (l). <b>a)</b> Chequear si es correcto el balanceo de la ecuación aplicando el método del ión electrón; <b>b)</b> calcular la masa de dicromato de potasio impuro necesaria si el rendimiento de la reacción es 80% y la pureza de la droga 75%; <b>c)</b> ¿qué masa de cloruro de potasio se obtiene? <b>d)</b> ¿Qué volumen ocupa el gas obtenido si se mide en condiciones normales de presión y temperatura?” <span class="muted">(el ítem e, de 14 puntos, pide tipo de sólido y fuerzas intermoleculares de cada producto, en la sección 5)</span>',
   ans: '<b>a)</b> El balanceo <b>es correcto</b>. <b>b)</b> 31,0 g de dicromato impuro. <b>c)</b> 9,42 g de KCl. <b>d)</b> 4,24 L de Cl<sub>2</sub> en CNPT. Reparto de la grilla: a = 9 pts, b = 9 pts, c = 4 pts, d = 4 pts.',
   sol: '<b>a) El chequeo por ión-electrón (9 puntos, el ítem más caro de los cuatro).</b> → Números de oxidación: en el dicromato, 2x + 7(−2) = −2 ⟹ <b>Cr = +6</b>; en CrCl<sub>3</sub>, <b>Cr = +3</b> ⟹ se <b>reduce</b> (3 e<sup>−</sup> por Cr, 6 por Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>). El Cl del HCl está en <b>−1</b> y en Cl<sub>2</sub> está en <b>0</b> ⟹ se <b>oxida</b>. Hay ácido en los reactivos ⟹ <b>medio ácido</b>. → <b>Reducción:</b> Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14 H<sup>+</sup> + 6 e<sup>−</sup> → 2 Cr<sup>3+</sup> + 7 H<sub>2</sub>O <span class="muted">(los 7 O se igualan con 7 H<sub>2</sub>O, los 14 H con 14 H<sup>+</sup>, y la carga −2+14 = +12 contra +6 pide 6 e<sup>−</sup> a la izquierda)</span>. → <b>Oxidación:</b> 2 Cl<sup>−</sup> → Cl<sub>2</sub> + 2 e<sup>−</sup>, multiplicada <b>× 3</b>: 6 Cl<sup>−</sup> → 3 Cl<sub>2</sub> + 6 e<sup>−</sup>. → <b>Suma:</b> Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + 14 H<sup>+</sup> + 6 Cl<sup>−</sup> → 2 Cr<sup>3+</sup> + 3 Cl<sub>2</sub> + 7 H<sub>2</sub>O. → <b>Espectadores:</b> los 14 HCl aportan 14 H<sup>+</sup> y 14 Cl<sup>−</sup>. Seis Cl<sup>−</sup> se oxidaron; de los 8 que quedan, <b>6 acompañan a los 2 Cr<sup>3+</sup></b> (2 CrCl<sub>3</sub>) y <b>2 acompañan a los 2 K<sup>+</sup></b> (2 KCl). 6 + 6 + 2 = 14 ✔ → <b>Control de átomos de la molecular:</b> izquierda K 2, Cr 2, O 7, H 14, Cl 14. Derecha: 2 CrCl<sub>3</sub> (Cr 2, Cl 6) + 3 Cl<sub>2</sub> (Cl 6) + 2 KCl (K 2, Cl 2) + 7 H<sub>2</sub>O (H 14, O 7) ⟹ Cl 6+6+2 = <b>14</b> ✔ → <b>Conclusión que hay que escribir:</b> el balanceo del enunciado <b>es correcto</b>. Que la consigna diga “chequear” no significa que esté mal: significa que tenés que demostrarlo. → <b>b) Masa de dicromato impuro.</b> M(CrCl<sub>3</sub>) = 52,00 + 3·35,45 = <b>158,35 g/mol</b> ⟹ n(CrCl<sub>3</sub>) que se quiere obtener = 20/158,35 = <b>0,1263 mol</b>. Eso es el producto <b>real</b>. → Rendimiento hacia atrás: n teórico = 0,1263/0,80 = <b>0,15788 mol</b>. → Estequiometría: 1 K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> ↔ 2 CrCl<sub>3</sub> ⟹ n(K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) = 0,15788/2 = <b>0,07894 mol</b>. → A masa: M(K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) = 2·39,10 + 2·52,00 + 7·16,00 = <b>294,2 g/mol</b> ⟹ m puro = 23,22 g. → Pureza al final, <b>dividiendo</b>: m impura = 23,22/0,75 = <b>30,96 ≈ 31,0 g de dicromato impuro</b>. → <b>Los tres resultados que te dan si te equivocás de lugar</b>: 23,2 g si te olvidás la pureza · 24,8 g si te olvidás el rendimiento · 19,8 g si multiplicás por 0,80 en vez de dividir. → <b>c) Masa de KCl.</b> KCl y CrCl<sub>3</sub> están los dos en 2 mol: relación <b>1:1</b>. Como los dos son productos, comparten el mismo rendimiento y podés ir directo entre reales: n(KCl) = <b>0,1263 mol</b> ⟹ m = 0,1263 · 74,55 = <b>9,42 g</b>. → Si en cambio calculás el KCl teórico y te olvidás de multiplicar por 0,80, te da 11,8 g. → <b>d) Volumen de Cl<sub>2</sub> en CNPT.</b> Relación Cl<sub>2</sub> : CrCl<sub>3</sub> = 3:2 ⟹ n(Cl<sub>2</sub>) real = 0,1263 · 3/2 = <b>0,18945 mol</b>. Dice “condiciones normales” ⟹ V = 0,18945 · 22,4 = <b>4,24 L</b>. → Control por PV = nRT: 0,18945 · 0,0821 · 273 / 1 atm = 4,25 L ✔ → <b>Ojo:</b> si usaras 25 °C darías 4,64 L, y si te olvidaras del rendimiento, 5,3 L.'},

  {st: '<b>1er Recuperatorio · Química Básica CB040 · 14/06/24 · Ejercicio 1.</b> “5,0 gramos de una mezcla de 20 % en masa de carbonato de calcio y 80 % en masa de hidrogenocarbonato de calcio se calientan fuertemente hasta la descomposición total de ambos compuestos con un 90 % de rendimiento. <span class="muted">(el pH del ítem b, resuelto en la sección 11)</span> Las reacciones de descomposición se dan según las siguientes reacciones: Ca(HCO<sub>3</sub>)<sub>2</sub>(s) → CaO(s) + 2 CO<sub>2</sub>(g) + H<sub>2</sub>O(l) ; CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g). <b>a)</b> Calcule el volumen total de CO<sub>2</sub>(g) obtenido en ambas reacciones en CNPT por la descomposición de la mezcla. <b>b)</b> Si el óxido de calcio total obtenido en ambas reacciones se disuelve en 10 litros de agua para formar hidróxido de calcio. Escriba la reacción correspondiente al proceso y calcule la concentración molar y el pH de la solución resultante.” <span class="muted">(el ítem c pide Lewis del CaO y del CO<sub>2</sub> y cuál es más soluble, en la sección 5)</span>',
   ans: '<b>a)</b> 1,20 L de CO<sub>2</sub> en CNPT. <b>b)</b> CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>; [Ca(OH)<sub>2</sub>] = 3,12·10<sup>-3</sup> M y <b>pH = 11,8</b>.',
   sol: '<b>Lo que hace distinto a este ejercicio:</b> hay <b>dos reacciones en paralelo</b> sobre la misma mezcla, y cada una tiene su propia relación estequiométrica. No hay reactivo limitante (no compiten entre sí): se resuelven por separado y se <b>suman los productos</b>. → <b>Paso 1 · repartir la masa.</b> m(CaCO<sub>3</sub>) = 5,0 · 0,20 = <b>1,0 g</b>; m(Ca(HCO<sub>3</sub>)<sub>2</sub>) = 5,0 · 0,80 = <b>4,0 g</b>. → <b>Paso 2 · a moles.</b> M(CaCO<sub>3</sub>) = 40,08 + 12,01 + 3·16,00 = <b>100,09 g/mol</b> ⟹ n = <b>0,00999 mol</b>. M(Ca(HCO<sub>3</sub>)<sub>2</sub>) = 40,08 + 2·(1,008 + 12,01 + 48,00) = <b>162,12 g/mol</b> ⟹ n = 4,0/162,12 = <b>0,02467 mol</b>. → <b>Chequeo de balanceo de la segunda</b>, que el enunciado da sin coeficientes explícitos: Ca 1=1, H 2=2, C 2=2, O 6 = 1+4+1 = 6 ✔ → <b>Paso 3 · a) CO<sub>2</sub>, con su coeficiente de cada rama.</b> El carbonato da <b>1</b> CO<sub>2</sub> por fórmula y el hidrogenocarbonato da <b>2</b>: n(CO<sub>2</sub>) teórico = 0,00999·1 + 0,02467·2 = 0,00999 + 0,04935 = <b>0,05934 mol</b>. → Rendimiento sobre el <b>producto</b>: n real = 0,05934 · 0,90 = <b>0,05340 mol</b>. → CNPT ⟹ V = 0,05340 · 22,4 = <b>1,20 L de CO<sub>2</sub></b>. → <b>El error del ítem:</b> poner coeficiente 1 en las dos ramas te da 0,0347 mol teóricos y 0,70 L, casi la mitad. El “2” del hidrogenocarbonato es todo el ejercicio. → <b>Paso 4 · b) CaO.</b> Las dos ramas dan <b>1</b> CaO por fórmula: n teórico = 0,00999 + 0,02467 = <b>0,03466 mol</b> ⟹ real = ·0,90 = <b>0,03120 mol</b> (= 1,75 g de CaO). → La reacción que pide escribir es <b>CaO(s) + H<sub>2</sub>O(l) → Ca(OH)<sub>2</sub>(ac)</b>, relación 1:1. → <b>Concentración:</b> 0,03120 mol en 10 L ⟹ <b>[Ca(OH)<sub>2</sub>] = 3,12·10<sup>-3</sup> M</b>. <span class="muted">Se supone que el volumen de solución es el del agua, 10 L: el enunciado no da densidad ni volumen final.</span> → <b>pH:</b> el Ca(OH)<sub>2</sub> es una base <b>fuerte</b> y aporta <b>dos</b> OH<sup>−</sup> por fórmula ⟹ [OH<sup>−</sup>] = 2 · 3,12·10<sup>-3</sup> = <b>6,24·10<sup>-3</sup> M</b> ⟹ pOH = −log(6,24·10<sup>-3</sup>) = 2,20 ⟹ <b>pH = 14 − 2,20 = 11,80</b>. → <b>La trampa del 2:</b> olvidarlo da pOH = 2,51 y pH = 11,49. El hidróxido de calcio es diprótico como base. El mismo detalle vuelve a caer en el Ejercicio 3 de varios exámenes. → <b>Una tensión del enunciado que conviene declarar:</b> dice “hasta la <b>descomposición total</b> de ambos compuestos” y a la vez “con un <b>90 % de rendimiento</b>”. Se resuelve leyendo “total” como que <b>ambos</b> compuestos se descomponen (y el bicarbonato llega hasta CaO, no se queda en CaCO<sub>3</sub> intermedio), y el 90 % como el rendimiento de los productos. Escribí esa lectura en la hoja: la cátedra pide en varios ejercicios “explicitando las suposiciones que realiza”.'},

  {st: '<b>Parcial · Química Básica CB040 · Curso 3 · Ejercicio 1 (a y b).</b> “El ácido bromhídrico y el ácido sulfúrico reaccionan según la ecuación: H<sub>2</sub>SO<sub>4</sub>(ac) + 2 HBr (l) → SO<sub>2</sub>(g) + Br<sub>2</sub>(l) + 2 H<sub>2</sub>O(l). Se sabe además que se formaron 10 moles de agua y que la reacción tiene un 85 % de rendimiento. <b>a)</b> Calcule el volumen necesario de solución de ácido sulfúrico del 98 %m/m y densidad 1,83 g/Ll para que la reacción ocurra. <b>b)</b> Si se utilizan además, para la reacción 15 moles de HBr, indique cuál será el reactivo limitante y la cantidad de moles del reactivo en exceso.”',
   ans: '<b>a)</b> 321 mL (0,321 L) de solución de H<sub>2</sub>SO<sub>4</sub>. <b>b)</b> Limitante: <b>H<sub>2</sub>SO<sub>4</sub></b>. De HBr hay dos lecturas, y la clave del examen no está publicada: <b>3,24 moles</b> de exceso estequiométrico o <b>5,0 moles</b> sin reaccionar con R = 85 %. Conviene escribir las dos con su rótulo.',
   sol: '<b>Primero, la errata:</b> el enunciado escribe la densidad como “<b>1,83 g/Ll</b>”. No existe esa unidad. Es <b>g/mL</b>: el Curso 2 usa la misma solución de sulfúrico (98 %m/m, 1,83) y ahí sí dice g/mL, y el valor real de la densidad del sulfúrico concentrado es 1,83 g/mL. Resolvelo con g/mL y <b>aclaralo en la hoja</b>. Si lo tomaras como g/L el volumen te daría mil veces más grande y el número sería absurdo. <span class="muted">(La otra errata de este examen está en el Ejercicio 2, que pide “las entalpías de combustión del etano” cuando el enunciado es de propano: copiaron del Curso 1.)</span> → <b>a) La cadena, idéntica a la del Curso 2.</b> El dato es un producto (10 mol de H<sub>2</sub>O) y es el <b>real</b>, porque “se formaron”. → Rendimiento hacia atrás: n(H<sub>2</sub>O) teórico = 10/0,85 = <b>11,765 mol</b>. → Estequiometría: 1 H<sub>2</sub>SO<sub>4</sub> ↔ 2 H<sub>2</sub>O ⟹ n(H<sub>2</sub>SO<sub>4</sub>) = 11,765/2 = <b>5,882 mol</b>. → A masa de soluto: · 98 g/mol = <b>576,5 g</b> de H<sub>2</sub>SO<sub>4</sub> puro. → A masa de solución (98 %m/m): 576,5/0,98 = <b>588,2 g</b> de solución. → A volumen (densidad): 588,2/1,83 = <b>321,4 mL ≈ 0,321 L</b>. Con M = 98,08 g/mol da 321,7 mL. → <b>b) Limitante.</b> Del ítem a) sabés que hay 5,882 mol de sulfúrico. Cocientes: q(H<sub>2</sub>SO<sub>4</sub>) = 5,882/<b>1</b> = 5,882 · q(HBr) = 15/<b>2</b> = 7,5. El menor manda ⟹ <b>limitante: H<sub>2</sub>SO<sub>4</sub></b>. → <b>Dos lecturas del “exceso”, y la clave no está publicada.</b> <b>A · exceso estequiométrico:</b> HBr necesario = 2 · 5,882 = 11,765 mol ⟹ 15 − 11,765 = <b>3,24 mol de HBr</b> (supone que el H<sub>2</sub>SO<sub>4</sub> reacciona entero, como con R = 100 %). <b>B · sin reaccionar con R = 85 %:</b> se formaron 10 mol de H<sub>2</sub>O, así que realmente se consumieron 10 mol de HBr y 5 mol de H<sub>2</sub>SO<sub>4</sub> ⟹ quedan 15 − 10 = <b>5,0 mol de HBr</b> y 5,882 − 5 = 0,88 mol de H<sub>2</sub>SO<sub>4</sub> (con R &lt; 100 % el limitante tampoco se consume entero; es el planteo de la clase de apoyo del 26/04, desarrollado en el recuadro sobre rendimiento menor al 100 %). → <b>Qué escribir:</b> las dos, cada una con su rótulo, y el limitante decidido por cociente. → <b>Por qué este ejercicio vale por tres:</b> comparalo renglón a renglón con el del Curso 2 que está resuelto en la sección. Cambia la reacción, cambian los números, y la secuencia de operaciones es <b>exactamente la misma</b>: dato de producto → (rendimiento) → relación molar → masa de soluto → masa de solución → volumen → cocientes → exceso. Los tres parciales de curso están construidos sobre esta plantilla.'},

  {st: '<b>Parcial · Química Básica CB040 · Curso 1 · 31/05/24 · Ejercicio 1 (a y b).</b> “En la producción industrial del ácido nítrico se obtiene, en la primera etapa óxido nítrico a partir de amoniaco y oxígeno según la siguiente reacción: 2 NH<sub>3</sub>(g) + 4 O<sub>2</sub>(g) → N<sub>2</sub>O<sub>5</sub>(g) + 3 H<sub>2</sub>O(g), se sabe además que 0,044 moles de NH<sub>3</sub> reaccionan con oxígeno y con un rendimiento del 90%: <b>a)</b> Calcule cuántos litros de vapor de agua medidos a 125 °C y 1 atm se forman. <b>b)</b> ¿Cuántos moles de oxígeno serán necesarios para que la reacción ocurra?”',
   ans: '<b>a)</b> 1,94 L de vapor de agua. <b>b)</b> 0,088 moles de O<sub>2</sub>, <b>sin</b> tocar el rendimiento.',
   sol: '<b>Paso 0 · chequear el balanceo</b>, que la cátedra da hecho pero conviene confirmar: N 2 = 2 ✔ · H 6 = 6 ✔ · O 8 = 5 + 3 = 8 ✔. Está balanceada. → <b>Una observación de nomenclatura que conviene anotar en la hoja:</b> el enunciado llama “óxido nítrico” al producto, y ese nombre corresponde al <b>NO</b>; la fórmula escrita, <b>N<sub>2</sub>O<sub>5</sub></b>, es el pentóxido de dinitrógeno (anhídrido nítrico). Resolvé con la <b>fórmula</b>, que es la que gobierna el balanceo y las masas, y si el ítem c) te pide la estructura de Lewis, dibujá <b>las dos</b> y declará por escrito sobre cuál comparás; por fuerzas gana el amoníaco con cualquiera de los dos, porque es el único con puente de hidrógeno. → <b>a) Vapor de agua.</b> Relación NH<sub>3</sub> : H<sub>2</sub>O = 2:3 ⟹ n(H<sub>2</sub>O) teórico = 0,044 · 3/2 = <b>0,066 mol</b>. → Rendimiento sobre el <b>producto</b>: n real = 0,066 · 0,90 = <b>0,0594 mol</b>. → <b>Acá está la trampa del ejercicio: 125 °C NO es CNPT.</b> Va PV = nRT con T = 125 + 273 = 398 K: V = 0,0594 · 0,0821 · 398,15 / 1 atm = <b>1,94 L</b>. → Con 22,4 L/mol darías 1,33 L, un 31 % menos. A 125 °C el volumen molar es <b>32,7 L/mol</b>, no 22,4. → <b>b) Moles de oxígeno: el ítem que separa a los que entendieron el rendimiento.</b> La pregunta es cuánto O<sub>2</sub> hace falta <b>para que la reacción ocurra</b>, o sea cuánto se consume junto con los 0,044 mol de NH<sub>3</sub>. Relación NH<sub>3</sub> : O<sub>2</sub> = 2:4 = 1:2 ⟹ n(O<sub>2</sub>) = 0,044 · 4/2 = <b>0,088 mol</b>. → <b>El rendimiento no entra.</b> Los reactivos que reaccionan lo hacen en proporción estequiométrica exacta; lo que rinde de menos es el producto que se recupera. Multiplicar por 0,90 y contestar 0,0792 mol es el error más frecuente del ítem. → <b>Regla para el examen:</b> mirá de qué lado de la flecha está lo que te piden. Izquierda (reactivo) ⟹ el rendimiento no toca el número. Derecha (producto) ⟹ el rendimiento entra, una sola vez.'},

  {st: '<b>G08, ejercicio 8.</b> “Se hacen reaccionar 2 moles de dióxido de manganeso con 6 moles de ácido clorhídrico. MnO<sub>2</sub>(s) + HCl(ac) → MnCl<sub>2</sub> + H<sub>2</sub>O(l) + Cl<sub>2</sub>(g). <b>a)</b> Determinar cuál es el reactivo limitante y el reactivo en exceso. ¿Cuál es la masa en exceso? <b>b)</b> ¿Cuántos moles se generan de sal? <b>c)</b> ¿Cuál es el volumen de cloro obtenido a 27 °C y 1,2 bar?”',
   ans: '<b>a)</b> Limitante <b>HCl</b>; en exceso MnO<sub>2</sub>, sobran 0,5 mol = <b>43,47 g</b>. <b>b)</b> 1,5 moles de MnCl<sub>2</sub>. <b>c)</b> 31,2 L con el dato del enunciado (la clave de la guía publica 36,9 dm³, que corresponde a 1 atm: ver abajo).',
   sol: '<b>Paso 0 · balancear, porque el enunciado la da SIN balancear.</b> Es la misma redox del ejemplo de T08A: Mn +4 → +2 (gana 2 e<sup>−</sup>), Cl −1 → 0 (pierde 1 e<sup>−</sup> cada uno). → Reducción: MnO<sub>2</sub> + 4 H<sup>+</sup> + 2 e<sup>−</sup> → Mn<sup>2+</sup> + 2 H<sub>2</sub>O · Oxidación: 2 Cl<sup>−</sup> → Cl<sub>2</sub> + 2 e<sup>−</sup> ⟹ iónica: MnO<sub>2</sub> + 4 H<sup>+</sup> + 2 Cl<sup>−</sup> → Mn<sup>2+</sup> + Cl<sub>2</sub> + 2 H<sub>2</sub>O. Los 4 H<sup>+</sup> vienen de 4 HCl, que aportan 4 Cl<sup>−</sup>: 2 se oxidan y 2 quedan con el Mn<sup>2+</sup>. → <b>Ecuación balanceada: MnO<sub>2</sub> + 4 HCl → MnCl<sub>2</sub> + 2 H<sub>2</sub>O + Cl<sub>2</sub></b>. Control: Mn 1=1, O 2=2, H 4=4, Cl 4 = 2+2 ✔ → <b>Si te salteás este paso, todo lo demás está mal</b>: con la ecuación sin balancear los cocientes darían 2 y 6, y elegirías el limitante equivocado. → <b>a) Cocientes.</b> q(MnO<sub>2</sub>) = 2/<b>1</b> = 2,0 · q(HCl) = 6/<b>4</b> = 1,5 ⟹ el menor es el del ácido ⟹ <b>limitante: HCl</b>. → Nótese que el HCl es el que está <b>en mayor cantidad</b> (6 contra 2) y aun así es el limitante: el coeficiente 4 se come la ventaja. → <b>Exceso:</b> MnO<sub>2</sub> consumido = 1,5 · 1 = 1,5 mol ⟹ sobran 2 − 1,5 = <b>0,5 mol</b>. M(MnO<sub>2</sub>) = 54,94 + 32,00 = 86,94 g/mol ⟹ <b>43,47 g de MnO<sub>2</sub> en exceso</b>. Coincide exactamente con la clave de la cátedra. → <b>b) Sal.</b> MnCl<sub>2</sub> : HCl = 1:4 ⟹ n = 6/4 = <b>1,5 mol de MnCl<sub>2</sub></b>. Coincide con la clave. → <b>c) Volumen de Cl<sub>2</sub> a 27 °C y 1,2 bar.</b> n(Cl<sub>2</sub>) = 6/4 = 1,5 mol. <b>No es CNPT</b>: va PV = nRT. Con R = 0,0821 L·atm/mol·K hay que pasar la presión a atmósferas: 1,2 bar / 1,01325 = <b>1,1843 atm</b> y T = 300 K ⟹ V = 1,5 · 0,0821 · 300 / 1,1843 = <b>31,2 L</b>. → Control por el otro camino, con R = 0,08314 L·bar/mol·K: 1,5 · 0,08314 · 300 / 1,2 = <b>31,2 L</b> ✔ Los dos sistemas de unidades dan lo mismo, que es exactamente el control que hay que hacer. → <b>Discrepancia con la clave de la guía, dicha sin maquillar:</b> la G08 publica <b>36,9 dm³</b>. Ese número es <b>1,5 · 0,0821 · 300 / 1 atm = 36,95 L</b>, o sea el volumen a <b>1 atm</b>, no a 1,2 bar. Con el dato que el propio enunciado da, la respuesta es 31,2 L. Si te toca algo así en el examen, resolvé con el dato del enunciado y <b>declará el criterio</b>.'},

  {st: '<b>G08, ejercicio 10.</b> “Para obtener amoníaco gaseoso se tratan 25 kg de cal (80 % de pureza de hidróxido de calcio) con 50 kg de cloruro de amonio, según la ecuación: Ca(OH)<sub>2</sub>(s) + NH<sub>4</sub>Cl(s) → NH<sub>3</sub>(g) + H<sub>2</sub>O + CaCl<sub>2</sub>. <b>a)</b> Determinar cuál es el reactivo limitante y el reactivo en exceso. ¿Cuánto reaccionó de cada uno? <b>b)</b> Determinar el volumen de amoníaco obtenido a 27 °C y 700 Torr. <b>c)</b> ¿Cuántos moles de sal se formaron?”',
   ans: '<b>a)</b> Limitante <b>Ca(OH)<sub>2</sub></b>: reaccionan 270 mol de Ca(OH)<sub>2</sub> y 540 mol de NH<sub>4</sub>Cl. <b>b)</b> 14,4 m³ (14 435 L) de NH<sub>3</sub>. <b>c)</b> 270 moles de CaCl<sub>2</sub>.',
   sol: '<b>Este ejercicio junta las tres conversiones de entrada de un solo golpe: pureza, unidades de masa grandes y un gas fuera de CNPT.</b> → <b>Paso 0 · balancear.</b> El enunciado la da sin coeficientes: <b>Ca(OH)<sub>2</sub> + 2 NH<sub>4</sub>Cl → 2 NH<sub>3</sub> + 2 H<sub>2</sub>O + CaCl<sub>2</sub></b>. Control: Ca 1=1 · Cl 2=2 · N 2=2 · H 2+8 = 6+4 = 10 ✔ · O 2=2 ✔ → <b>Paso 1 · pureza, antes que nada.</b> m(Ca(OH)<sub>2</sub> puro) = 25 kg · 0,80 = <b>20 kg = 20 000 g</b>. Los 5 kg restantes son impurezas y no entran a la ecuación. → <b>Paso 2 · a moles.</b> M(Ca(OH)<sub>2</sub>) = 40,08 + 2·(16,00 + 1,008) = <b>74,10 g/mol</b> ⟹ n = 20 000/74,10 = <b>269,9 mol</b>. M(NH<sub>4</sub>Cl) = 14,01 + 4·1,008 + 35,45 = <b>53,49 g/mol</b> ⟹ n = 50 000/53,49 = <b>934,8 mol</b>. → <b>Paso 3 · cocientes.</b> q(Ca(OH)<sub>2</sub>) = 269,9/<b>1</b> = 269,9 · q(NH<sub>4</sub>Cl) = 934,8/<b>2</b> = 467,4 ⟹ <b>limitante: Ca(OH)<sub>2</sub></b> (la cal), a pesar de que hay menos masa de cal que de cloruro de amonio y a pesar de la pureza. → <b>Cuánto reaccionó de cada uno:</b> los <b>269,9 ≈ 270 mol</b> de Ca(OH)<sub>2</sub> (todo el limitante) y 2 · 269,9 = <b>539,8 ≈ 540 mol</b> de NH<sub>4</sub>Cl. Sobran 934,8 − 539,8 = 395 mol de NH<sub>4</sub>Cl. Coincide con la clave de la cátedra. → <b>b) Volumen de NH<sub>3</sub>.</b> n(NH<sub>3</sub>) = 2 · 269,9 = <b>539,8 mol</b>. <b>27 °C y 700 Torr no es CNPT.</b> Conversiones: T = 300 K y P = 700/760 = <b>0,9211 atm</b>. → V = 539,8 · 0,0821 · 300 / 0,9211 = <b>14 435 L = 14,4 m³</b>. La clave de la guía publica 14,423 m³, diferencia de redondeo. → <b>Las dos conversiones de este ítem son las que se olvidan:</b> Torr → atm (dividir por 760) y °C → K (sumar 273). Cada una sola cambia el resultado en más de un 8 %. → <b>c) Sal.</b> CaCl<sub>2</sub> : Ca(OH)<sub>2</sub> = 1:1 ⟹ <b>270 moles de CaCl<sub>2</sub></b>. → <b>Cierre:</b> fijate que la pureza sólo actuó en el paso 1 y nunca más. Después de convertir 25 kg de cal en 20 kg de hidróxido puro, el 80 % desaparece del ejercicio.'},

]);

registerExercises('fiuba-quimica', '8', [

  {st: 'En 2 KMnO<sub>4</sub> + 3 KAsO<sub>2</sub> + 4 KOH → 2 MnO<sub>2</sub> + 3 K<sub>3</sub>AsO<sub>4</sub> + 2 H<sub>2</sub>O, el As pasa de +3 a +5 y el Mn de +7 a +4. ¿Cuál es el <b>agente reductor</b>?',
   opts: ['KMnO<sub>4</sub>, porque el Mn baja de +7 a +4', 'KAsO<sub>2</sub>, porque el As sube de +3 a +5', 'El As, escrito como elemento', 'KOH, porque aporta el medio básico'],
   c: 1,
   ex: "El agente reductor es <b>la sustancia que contiene al elemento que se oxida</b>, y oxidarse es <b>aumentar</b> el número de oxidación perdiendo electrones. El As sube de +3 a +5 ⟹ se oxida ⟹ KAsO<sub>2</sub> es el reductor (así lo escribe T08A). → La de <b>KMnO<sub>4</sub></b> es el error clásico: los nombres están cruzados. El KMnO<sub>4</sub>, donde el Mn <b>baja</b>, es el agente <b>oxidante</b>. → La del <b>As escrito como elemento</b> está mal por forma, no por concepto: el agente es la sustancia completa, no el elemento suelto; poner “As” donde va “KAsO<sub>2</sub>” cuesta el ítem. → El KOH no cambia ningún número de oxidación: es espectador."},

  {st: '¿Cuál es el número de oxidación del Cr en el ion dicromato, Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup>?',
   opts: ['+3', '+7', '+6', '+12'], c: 2,
   ex: 'La suma de los números de oxidación en un ion poliatómico es igual a <b>su carga</b>, no cero: 2x + 7·(−2) = <b>−2</b> ⟹ 2x = +12 ⟹ <b>x = +6</b>. → +12 es la trampa aritmética: es 2x, falta dividir por los dos átomos de Cr. → +3 es el número del Cr en el <b>producto</b> CrCl<sub>3</sub>, no en el dicromato; la diferencia +6 → +3 es justamente lo que hace que cada Cr gane 3 e<sup>−</sup>. → +7 es el del Mn en MnO<sub>4</sub><sup>−</sup>, no el del Cr acá.'},

  {st: '¿Cuál de estas reacciones <b>no</b> es redox?',
   opts: ['Fe<sub>2</sub>O<sub>3</sub> + 3 Mg → 3 MgO + 2 Fe', 'PCl<sub>5</sub> + 4 H<sub>2</sub>O → H<sub>3</sub>PO<sub>4</sub> + 5 HCl', '2 K + Br<sub>2</sub> → 2 KBr', 'Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>'],
   c: 1,
   ex: "El test es siempre el mismo: asignar números de oxidación a los dos lados y ver si alguno cambió. En PCl<sub>5</sub> + H<sub>2</sub>O el P está en <b>+5</b> de los dos lados y el Cl en <b>−1</b> de los dos lados ⟹ <b>no es redox</b>, se balancea al tanteo. Es el ejemplo que usa T08A para mostrarlo. → En la de <b>Fe<sub>2</sub>O<sub>3</sub> + Mg</b>, Fe pasa de +3 a 0 y Mg de 0 a +2. → En la de <b>K + Br<sub>2</sub></b>, K de 0 a +1 y Br de 0 a −1. → En la de <b>Zn + HCl</b>, Zn de 0 a +2 y H de +1 a 0. Las tres son redox."},

  {st: 'Estás balanceando por ión-electrón en <b>medio básico</b>. Según el procedimiento de T08A, ¿qué hacés después de igualar los oxígenos con H<sub>2</sub>O y los hidrógenos con H<sup>+</sup>?',
   opts: ['Nada distinto: en medio básico no se usan H<sup>+</sup> en ningún momento', 'Agregar OH<sup>−</sup> a <b>ambos</b> lados, tantos como H<sup>+</sup> haya, y combinarlos en H<sub>2</sub>O', 'Reemplazar cada H<sup>+</sup> por un OH<sup>−</sup> del mismo lado', 'Igualar los oxígenos con OH<sup>−</sup> en vez de con H<sub>2</sub>O desde el principio'],
   c: 1,
   ex: "T08A lo escribe así: “iguale los O utilizando H<sub>2</sub>O, luego iguale los H agregando H<sup>+</sup> […] y <b>OH<sup>−</sup> de ambos lados para neutralizar los H<sup>+</sup></b>”. Cada par H<sup>+</sup> + OH<sup>−</sup> se convierte en H<sub>2</sub>O y después se cancelan las aguas repetidas. → La clave es <b>ambos</b> lados: si agregás OH<sup>−</sup> de un solo lado, desbalanceás la carga y la masa. → Reemplazar H<sup>+</sup> por OH<sup>−</sup> cambia la carga en dos unidades por cada uno: destruye el balance que acabás de armar. → El medio básico <b>no</b> es un método distinto: es el mismo con un paso final agregado."},

  {st: 'Balanceada por ión-electrón, KMnO<sub>4</sub>(ac) + HCl(ac) → MnCl<sub>2</sub>(ac) + Cl<sub>2</sub>(g) + KCl(ac) + H<sub>2</sub>O(l) queda con los coeficientes (en el orden escrito):',
   opts: ['2 · 16 · 2 · 5 · 2 · 8', '1 · 8 · 1 · 3 · 1 · 4', '2 · 10 · 2 · 5 · 2 · 5', '1 · 16 · 1 · 5 · 2 · 8'],
   c: 0,
   ex: "El Mn pasa de +7 a +2 (gana 5 e<sup>−</sup>) y cada par de Cl<sup>−</sup> pierde 2 e<sup>−</sup>. Para igualar electrones: reducción ×2 (10 e<sup>−</sup>) y oxidación ×5 (10 e<sup>−</sup>). → Iónica: 2 MnO<sub>4</sub><sup>−</sup> + 16 H<sup>+</sup> + 10 Cl<sup>−</sup> → 2 Mn<sup>2+</sup> + 5 Cl<sub>2</sub> + 8 H<sub>2</sub>O. → Al armar la molecular hay que sumar los Cl<sup>−</sup> espectadores: 4 para los 2 MnCl<sub>2</sub> y 2 para los 2 KCl ⟹ 10 + 6 = <b>16 HCl</b>. Ese es el número que casi todos subestiman, y es el que da la clave de G08 (ej. 3d): <b>2 · 16 · 2 · 5 · 2 · 8</b>. → La de <b>2 · 10 · 2 · 5 · 2 · 5</b> cuenta sólo los 10 Cl<sup>−</sup> que se oxidan y se olvida de los espectadores; ahí el Cl no cierra (10 contra 16)."},

  {st: 'Se mezclan 500 mL de H<sub>3</sub>PO<sub>4</sub> 0,3 M (0,15 mol) con una solución que aporta 0,40 mol de NaOH, según H<sub>3</sub>PO<sub>4</sub> + 3 NaOH → Na<sub>3</sub>PO<sub>4</sub> + 3 H<sub>2</sub>O. ¿Cuál es el reactivo limitante? <span class="muted">(G08, ej. 9)</span>',
   opts: ['El H<sub>3</sub>PO<sub>4</sub>, porque hay menos moles', 'Ninguno: están en proporción estequiométrica', 'El H<sub>3</sub>PO<sub>4</sub>, porque tiene el coeficiente más chico', 'El NaOH, porque 0,40/3 = 0,133 &lt; 0,15/1 = 0,150'], c: 3,
   ex: "Es <b>el</b> ejercicio que desarma el error clásico. El limitante se decide por el <b>cociente n<sub>i</sub>/ν<sub>i</sub></b>, no por la cantidad: q(base) = 0,40/3 = <b>0,133</b> (con el dato exacto de la G08, 0,3996 mol, da 0,1332) y q(ácido) = 0,15/1 = <b>0,150</b>. Gana el menor ⟹ limitante <b>NaOH</b>, que es exactamente la respuesta de la clave de la cátedra. → La que dice <b>H<sub>3</sub>PO<sub>4</sub>, porque hay menos moles</b> es el razonamiento “el que está en menor cantidad”, que acá da la respuesta equivocada porque hacen falta <b>tres</b> NaOH por cada ácido. → Si estuvieran en proporción estequiométrica los dos cocientes serían iguales; 0,133 ≠ 0,150. → El coeficiente por sí solo no decide nada: lo que decide es el cociente."},

  {st: 'Se forman 3,66 moles de HCl según 2 NaCl(s) + H<sub>2</sub>SO<sub>4</sub>(ac) → Na<sub>2</sub>SO<sub>4</sub>(ac) + 2 HCl(ac). ¿Qué volumen de solución de H<sub>2</sub>SO<sub>4</sub> del 98 %m/m y densidad 1,83 g/mL hace falta? <span class="muted">(Parcial Curso 2, ítem a)</span>',
   opts: ['183 mL', '100 mL', '98 mL', '200 mL'],
   c: 1,
   ex: 'La cadena tiene cuatro eslabones y hay que hacerlos todos: n(H<sub>2</sub>SO<sub>4</sub>) = 3,66/2 = <b>1,83 mol</b> → m soluto = 1,83 · 98 = <b>179,3 g</b> → m solución = 179,3/0,98 = <b>183,0 g</b> → V = 183,0/1,83 = <b>100 mL</b>. Con M = 98,08 g/mol da 100,1 mL. → <b>183 mL es el distractor que se lleva a la mitad del curso</b>: es la <b>masa</b> de la solución en gramos, sin dividir por la densidad. → 200 mL sale de no dividir por 2 la relación 2 HCl : 1 H<sub>2</sub>SO<sub>4</sub>. → Que el resultado dé un número tan redondo es señal de que el camino fue el correcto: la cátedra diseña estos enunciados hacia atrás desde la respuesta.'},

  {st: 'En ese mismo ejercicio se usan 500 g de NaCl del 71 % de pureza. ¿Cuántos moles del reactivo en exceso <b>no reaccionaron</b>?',
   opts: ['2,41 mol de NaCl', '6,07 mol de NaCl', '3,66 mol de NaCl', '1,83 mol de H<sub>2</sub>SO<sub>4</sub>'],
   c: 0,
   ex: 'Pureza primero: 500 · 0,71 = <b>355 g</b> de NaCl puro ⟹ n = 355/58,5 = <b>6,07 mol</b>. → Cocientes: q(NaCl) = 6,07/2 = 3,03 contra q(H<sub>2</sub>SO<sub>4</sub>) = 1,83/1 = 1,83 ⟹ el limitante es el <b>ácido</b> y el NaCl está en exceso. → Consumido: 1,83 · 2 = 3,66 mol (el mismo número que los moles de HCl, porque 2 NaCl → 2 HCl). → <b>Sobrante = 6,07 − 3,66 = 2,41 mol</b>. Con M = 58,5 y con 58,44 da 2,41 en los dos casos. → 6,07 es todo el NaCl disponible, sin restar lo que reaccionó. → 3,66 es lo que <b>sí</b> reaccionó. → La última opción confunde limitante con exceso: del limitante no sobra nada, por definición.'},

  {st: 'Un enunciado te da un gas “medido a 25 °C y 1 atm”. ¿Cuánto ocupa un mol?',
   opts: ['22,4 L, que es el volumen molar de cualquier gas ideal', '24,47 L', '22,7 L', '24,47 L sólo si el gas es diatómico'],
   c: 1,
   ex: "El volumen molar sale de PV = nRT: V = R·T/P = 0,0821 · <b>298</b> / 1 = <b>24,47 L/mol</b>. → Los 22,4 L/mol valen <b>únicamente en CNPT</b>: 0 °C (273 K) y 1 atm ⟹ 0,0821 · 273 = 22,41 L/mol. → Usar 22,4 a 25 °C mete un <b>9,3 % de error</b> que arrastra todos los ítems siguientes, porque el número de moles entra en todo lo demás. → 22,7 L/mol corresponde a 0 °C y 1 <b>bar</b> (0,08314 · 273), que no es la convención de esta cátedra. → Y el volumen molar del gas ideal no depende de qué gas sea: la de <b>24,47 L sólo si el gas es diatómico</b> agrega una condición que no existe."},

  {st: 'Reaccionan 0,044 mol de NH<sub>3</sub> con un rendimiento del 90 % según 2 NH<sub>3</sub> + 4 O<sub>2</sub> → N<sub>2</sub>O<sub>5</sub> + 3 H<sub>2</sub>O. ¿Cuántos moles de O<sub>2</sub> son necesarios para que la reacción ocurra? <span class="muted">(Parcial Curso 1, 31/05/24, ítem b)</span>',
   opts: ["0,088 mol", "0,0792 mol (0,088 · 0,90)", "0,0978 mol (0,088 / 0,90)", "0,044 mol"],
   c: 0,
   ex: 'La relación es NH<sub>3</sub> : O<sub>2</sub> = 2:4 = 1:2 ⟹ n(O<sub>2</sub>) = 0,044 · 4/2 = <b>0,088 mol</b>. → <b>El rendimiento no toca este número.</b> R % está definido como producto obtenido sobre producto teórico: mide lo que se pierde <b>del lado de los productos</b>. Los reactivos que reaccionan lo hacen en proporción estequiométrica exacta. → 0,0792 es el error de aplicar el rendimiento sobre el reactivo, y es el más frecuente del ítem. → 0,0978 es el mismo error con la operación invertida. → 0,044 ignora el coeficiente 4/2. → Regla operativa: mirá de qué lado de la flecha está lo que te piden. Izquierda ⟹ el rendimiento no entra.'},

  {st: 'Se quieren obtener 20 g de CrCl<sub>3</sub> con rendimiento 80 % y una droga de dicromato del 75 % de pureza (K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> + 14 HCl → 2 CrCl<sub>3</sub> + 3 Cl<sub>2</sub> + 2 KCl + 7 H<sub>2</sub>O). ¿Qué masa de dicromato <b>impuro</b> hay que pesar? <span class="muted">(2do Recup. 27/06/25, ítem b)</span>',
   opts: ['23,2 g', '24,8 g', '19,8 g', '31,0 g'], c: 3,
   ex: 'n(CrCl<sub>3</sub>) real = 20/158,35 = 0,1263 mol → <b>rendimiento hacia atrás</b>: teórico = 0,1263/0,80 = 0,15788 mol → estequiometría 2:1 ⟹ n(K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>) = 0,07894 mol → m puro = 0,07894 · 294,2 = 23,22 g → <b>pureza hacia atrás</b>: 23,22/0,75 = <b>31,0 g</b>. → Los tres distractores son los tres olvidos: <b>23,2 g</b> si te olvidás de dividir por la pureza · <b>24,8 g</b> si te olvidás del rendimiento · <b>19,8 g</b> si multiplicás por 0,80 en vez de dividir. → La regla de dirección: como te piden un <b>reactivo</b> a partir de un <b>producto</b>, las dos correcciones van <b>dividiendo</b>.'},

  {st: 'Una muestra de CaCO<sub>3</sub> con arena se calienta (CaCO<sub>3</sub> → CaO + CO<sub>2</sub>) con 85 % de rendimiento y al final quedan 60 L de gas en CNPT y 240 g de mezcla sólida de arena, cal y CaCO<sub>3</sub>. ¿Cuál es la pureza del CaCO<sub>3</sub> en la muestra original? <span class="muted">(Parcial 30/05/25, ítem I-d)</span>',
   opts: ['77,8 %', '131,4 %', '88,1 %', '74,9 %'], c: 2,
   ex: 'n(CO<sub>2</sub>) = 60/22,4 = 2,679 mol → n(CaCO<sub>3</sub>) original = 2,679/0,85 = 3,151 mol = <b>315,4 g</b> → sin reaccionar = 0,473 mol = 47,3 g → m(CaO) = 2,679 · 56,08 = 150,2 g → <b>arena</b> = 240 − 150,2 − 47,3 = <b>42,5 g</b> → muestra original = 315,4 + 42,5 = <b>357,9 g</b> → pureza = 315,4/357,9 = <b>88,1 %</b>. → <b>77,8 %</b> sale de olvidarse del CaCO<sub>3</sub> sin reaccionar al calcular la arena: un número perfectamente creíble y perfectamente mal. → <b>131,4 %</b> sale de tomar los 240 g como la muestra original; es imposible y te avisa solo. → <b>74,9 %</b> sale de ignorar el rendimiento (usar 2,679 mol como si fuera todo el carbonato).'},

  {st: 'En ese mismo ejercicio, ¿qué control de una línea te confirma los cuatro ítems antes de entregar?',
   opts: ["Que la masa de CaO más la de CO<sub>2</sub> dé 240 g", "Que la pureza dé menor al 100 %", "Que masa de muestra original menos masa de CO<sub>2</sub> desprendido dé los 240 g de sólido final", "Que los moles de CaO sean iguales a los moles de CaCO<sub>3</sub> original"],
   c: 2,
   ex: "Lo único que abandona el sistema es el <b>CO<sub>2</sub> gaseoso</b>: todo lo demás (arena, cal, carbonato sin descomponer) queda en la mezcla sólida. Entonces tiene que valer masa inicial − masa de gas = masa final: <b>357,9 − 117,9 = 240,0 g</b> ✔, exactamente el dato del enunciado. Con masas molares precisas o redondeadas cierra igual, en 240,0. → La de <b>masa de CaO más masa de CO<sub>2</sub></b> suma el CO<sub>2</sub>, que ya salió del sólido, y deja afuera la arena y el CaCO<sub>3</sub> sin descomponer, que sí están en los 240 g: da 268,1 g (150,2 + 117,9), no 240. → Que la pureza sea menor al 100 % descarta el absurdo de 131 %, pero no detecta el 77,8 %, que es el error peligroso. → Los moles de CaO son los del carbonato que <b>reaccionó</b> (2,679), no los del original (3,151): son distintos justamente por el rendimiento."},

  {st: 'Sobre los 9 exámenes reales de CB040, la estequiometría con rendimiento y/o pureza:',
   opts: ['encabeza el Ejercicio 1 de 6 de los 9', 'aparece en los 9, siempre como Ejercicio 2', 'aparece sólo en los recuperatorios', 'aparece en 3 de los 9, los parciales de curso'], c: 0,
   ex: 'Contado a mano sobre los nueve exámenes distintos: la estequiometría es el Ejercicio 1 de los tres parciales de curso (C1, C2, C3), del 1er recuperatorio del 14/06/24, del parcial del 30/05/25 y del 2do recuperatorio del 27/06/25 ⟹ <b>6 de 9</b>. → Los otros tres abren con otra cosa: pila y ecuación de Nernst (EI 11/07/24), equilibrio líquido-vapor del benceno (EI 18/07/24) y sólidos cúbicos (2do recup. 6/12/24). → El Ejercicio <b>2</b> es el lugar de la <b>termoquímica</b>, que está en 8 de los 9. → Y en los seis, la estequiometría viene pegada a Lewis y fuerzas intermoleculares como último ítem del mismo ejercicio: son 40 puntos en una sola hoja.'},

  {st: 'Rendís un examen de CB040, sacás 85 puntos sobre 100 pero dejaste el Ejercicio 1 en blanco. ¿Aprobaste?',
   opts: ['Sí: 85 supera holgadamente los 60 puntos', 'Sí, si los otros dos ejercicios están perfectos', 'No: hay que hacer además al menos el 50 % de cada ejercicio', 'Depende del curso y del docente'], c: 2,
   ex: 'La frase está impresa al pie de <b>los nueve</b> exámenes, con la misma redacción: “El examen se aprueba con una nota igual o superior a <b>60/100</b> ptos y debe realizar el <b>50 % de cada ejercicio</b> correctamente”. Son <b>dos condiciones simultáneas</b>. → Con el Ejercicio 1 en blanco tenés 0 % de ese ejercicio: desaprobado, aunque el total sea 85. → La modalidad de las evaluaciones integradoras lo dice todavía más explícito: “Si no cumple AMBAS condiciones el examen estará desaprobado”. → Consecuencia práctica: <b>conviene repartir el tiempo entre los tres ejercicios antes que perfeccionar uno</b>. Media hoja bien resuelta en cada uno vale más que dos hojas impecables y una vacía.'},

  {st: '¿Cuántos moles de H<sub>2</sub>SO<sub>4</sub> hay en 50,0 mL de una solución al 98 %m/m con densidad 1,83 g/mL?',
   opts: ['0,500 mol', '0,933 mol', '89,7 mol', '0,915 mol'], c: 3,
   ex: 'Con %m/m hay que pasar por la <b>masa de solución</b> antes de tocar el porcentaje, y para eso hace falta la densidad: m(solución) = 50,0 · 1,83 = <b>91,5 g</b> → m(soluto) = 91,5 · 0,98 = <b>89,7 g</b> → n = 89,7/98,08 = <b>0,915 mol</b>. → <b>89,7</b> es la masa en gramos: es el paso anterior, sin dividir por la masa molar. → 0,933 sale de olvidarse del 98 % (usar los 91,5 g como si fueran todo ácido). → 0,500 no sale de ningún camino correcto: es el volumen en litros. → La cadena es siempre <b>mL → g de solución → g de soluto → mol</b>, en ese orden y sin saltear ninguno.'},
  {st: "En una reacción 1 A + 1 B → 1 C con <b>R = 80 %</b> se ponen 10 mol de A y 12 mol de B. ¿Cuántos mol de B quedan <b>sin reaccionar</b> al final?",
   opts: ["2 mol", "9,6 mol", "8 mol", "4 mol"],
   c: 3,
   ex: "<b>4 mol.</b> El limitante es A (q = 10 contra 12). Con R = 80 % se forman 0,80 · 10 = 8 mol de C, y ese producto real dicta lo que se consumió de verdad: 8 mol de A y 8 mol de B. Sin reaccionar de B: 12 − 8 = 4 mol (y también sobran 10 − 8 = 2 mol de A: con R &lt; 100 % el limitante tampoco se consume entero). <b>2 mol</b> es 12 − 10, el exceso estequiométrico, que sólo vale si el limitante reacciona entero (R = 100 %). <b>9,6 mol</b> aplica el rendimiento al reactivo (12 · 0,80), y el rendimiento se aplica al producto. <b>8 mol</b> son los mol de B que sí reaccionaron, no los que sobran."},
  {st: "Se hacen reaccionar 28 g de N<sub>2</sub> con <b>exceso de H<sub>2</sub></b> según N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub> (M(N<sub>2</sub>) = 28 g/mol). ¿Cuántos mol de NH<sub>3</sub> se forman teóricamente y cómo se llega?",
   opts: ["1 mol de NH<sub>3</sub>, porque 28 g de N<sub>2</sub> son 1 mol y la relación es 1:1", "No se puede calcular: sin la cantidad de H<sub>2</sub> no hay forma de comparar los cocientes n/ν", "3 mol de NH<sub>3</sub>, porque el exceso de H<sub>2</sub> aporta moles extra de producto", "2 mol de NH<sub>3</sub>, partiendo de 1 mol de N<sub>2</sub> como limitante y sin calcular ningún cociente"],
   c: 3,
   ex: "<b>2 mol, partiendo del N<sub>2</sub>.</b> Que el H<sub>2</sub> esté “en exceso” ya dice que no se agota, así que el N<sub>2</sub> es el limitante y no hay nada que comparar: n(N<sub>2</sub>) = 28/28 = 1 mol y la relación 1 N<sub>2</sub> : 2 NH<sub>3</sub> da 2 mol. La opción de <b>1 mol</b> ignora el coeficiente 2 del NH<sub>3</sub> (la relación es 1:2, no 1:1). La de <b>no se puede calcular</b> es falsa: el cociente sólo hace falta cuando el enunciado declara la cantidad de los dos reactivos, y acá la palabra “exceso” identifica al limitante. La de <b>3 mol</b> trata al exceso como si aportara producto: el producto lo manda el limitante, y el exceso es lo que sobra."},
  {st: "Una reacción forma 0,50 mol de H<sub>2</sub>O en estado <b>líquido</b> (M = 18 g/mol, ρ = 1,0 g/cm<sup>3</sup>). ¿Qué volumen ocupa el agua formada?",
   opts: ["9,0 cm<sup>3</sup>", "11,2 L, con 22,4 L/mol", "12,2 L, con PV = nRT a 25 °C y 1 atm", "18 cm<sup>3</sup>"],
   c: 0,
   ex: "<b>9,0 cm<sup>3</sup>.</b> El agua formada es líquida: no es gas ideal y PV = nRT no se aplica. m = 0,50 · 18 = 9,0 g y V = m/ρ = 9,0 g / (1,0 g/cm<sup>3</sup>) = 9,0 cm<sup>3</sup>. <b>11,2 L</b> usa los 22,4 L/mol de un gas en CNPT sobre un líquido. <b>12,2 L</b> es PV = nRT a 25 °C y 1 atm (0,50 · 0,0821 · 298): serviría si el agua estuviera como vapor, como en el ítem del C1 a 125 °C, pero acá es (l). <b>18 cm<sup>3</sup></b> es el volumen de 1 mol de agua líquida: te olvidaste de que son 0,50 mol."},
  {st: "En medio ácido, MnO<sub>4</sub><sup>−</sup> + 8 H<sup>+</sup> + 5 e<sup>−</sup> → Mn<sup>2+</sup> + 4 H<sub>2</sub>O. ¿Cuál es la <b>normalidad redox</b> de una solución de KMnO<sub>4</sub> 0,0200 M usada como oxidante en esta semirreacción?",
   opts: ["0,0200 N, igual a la molaridad", "0,00400 N", "0,100 N", "0,160 N"],
   c: 2,
   ex: "<b>0,100 N.</b> N = M · n<sub>e</sub>, con n<sub>e</sub> = 5 mol de e<sup>−</sup> ganados por mol de MnO<sub>4</sub><sup>−</sup> en esta semirreacción: 0,0200 · 5 = 0,100 equivalentes por litro. <b>0,0200 N</b> supone 1 equivalente por mol, que sería el MnO<sub>4</sub><sup>−</sup> pasando a MnO<sub>4</sub><sup>2−</sup> en medio básico, pero no es esta semirreacción: el equivalente depende de la reacción. <b>0,00400 N</b> divide por 5 en lugar de multiplicar: la masa equivalente se obtiene dividiendo la masa molar por n<sub>e</sub>, pero los equivalentes por litro crecen con n<sub>e</sub>. <b>0,160 N</b> usa el 8 de los H<sup>+</sup>: lo que cuenta son los electrones intercambiados, no los protones."}

]);

// SECCIÓN 9 · SOLUCIONES Y SOLUBILIDAD
// Enunciados transcriptos textualmente de los exámenes reales de la cátedra
// (Parcial Curso 2, 2do Recuperatorio 6/12/2024) y de la guía G07 “Soluciones”
// (ejercicios 5, 7 y 9, con las respuestas que publica la propia guía).
// Masas molares usadas:
// H 1,008 · C 12,011 · O 15,999 · S 32,06 · Cl 35,45 · Na 22,99 · Mn 54,94 ·
// M(H2SO4) = 98,07 ≈ 98 · M(CH3COOH) = 60,05 · M(HClO4) = 100,45 ·
// M(HCl) = 36,46 · M(H2O) = 18,02 · M(NaOH) = 40,00 · M(MnCl2) = 125,84.

registerReveals('fiuba-quimica', '9', [

{st: "<b>Básico · Diluir con C·V.</b> Se toman 20,0 mL de HCl 0,500 M y se llevan con agua hasta 250 mL de solución. ¿Qué concentración tiene la solución final?",
 ans: "<b>0,0400 M</b>.",
 sol: "<b>Paso 1 · qué se conserva.</b> Al diluir se agrega solvente y los moles de soluto no cambian, así que alcanza con calcular los de la solución concentrada: n = C × V = 0,500 mol/L × 0,0200 L = 0,0100 mol de HCl. → <b>Paso 2 · concentración final.</b> Esos 0,0100 mol quedan en 250 mL (0,250 L, que es el volumen de <b>solución</b> final, no el del agua agregada): C = 0,0100 mol / 0,250 L = <b>0,0400 M</b>. Es lo mismo que V<sub>c</sub>·C<sub>c</sub> = V<sub>d</sub>·C<sub>d</sub>: 20,0 × 0,500 = 250 × C<sub>d</sub>. → <b>Control.</b> El volumen pasó de 20 a 250 mL (12,5 veces más), así que la concentración tiene que ser 12,5 veces menor: 0,500/12,5 = 0,0400 M. → <b>Error típico:</b> dividir por 230 mL, que son los del agua que se agregó, en lugar de por los 250 mL de la solución."},

{st: "<b>Básico · Preparar en un matraz desde un sólido.</b> Se quieren preparar 250,0 mL de solución de NaOH 0,200 M a partir de NaOH sólido (M = 40,00 g/mol). ¿Qué masa hay que pesar y cómo se prepara?",
 ans: "<b>2,00 g de NaOH</b>, disueltos con poca agua en un matraz de 250,0 mL y llevados a la marca.",
 sol: "<b>Paso 1 · moles que tiene que haber.</b> n = M × V = 0,200 mol/L × 0,2500 L = 0,0500 mol de NaOH. → <b>Paso 2 · moles a gramos.</b> m = n × M = 0,0500 mol × 40,00 g/mol = <b>2,00 g</b>. → <b>Paso 3 · cómo se prepara.</b> Se pesan los 2,00 g, se pasan al matraz aforado de 250,0 mL, se disuelven con un poco de agua, se agrega agua hasta que el borde inferior del menisco toca la marca del cuello y se tapa y se invierte varias veces para mezclar (los cuatro pasos de la figura de la teoría). → <b>Control.</b> 2,00 g en 0,250 L son 8,00 g/L, o sea 0,800 % m/V: una solución diluida, razonable para 0,200 M. → <b>Error típico:</b> pesar los gramos y agregarlos a 250 mL de agua. Esa solución ocupa más de 250 mL y queda más diluida de lo pedido: el volumen final lo fija la marca del matraz, no el agua que se puso."},

{st: "<b>Básico · Masa desde un punto de la curva.</b> Una muestra de KClO<sub>3</sub> de masa desconocida se disuelve por completo, calentando, en 10,0 cm<sup>3</sup> de agua (δ = 1,00 g/cm<sup>3</sup>). Al enfriar despacio, los primeros cristales aparecen a 40 °C, temperatura a la que la solubilidad del KClO<sub>3</sub> es 14 g/100 g de agua. ¿Qué masa de KClO<sub>3</sub> tenía la muestra?",
 ans: "<b>1,4 g de KClO<sub>3</sub></b>.",
 sol: "<b>Paso 1 · qué dice el primer cristal.</b> Que aparezca el primer cristal significa que a 40 °C la solución recién llegó a la saturación: todo lo que había en la muestra estaba disuelto y es justo lo que la curva permite a esa temperatura. → <b>Paso 2 · solvente en las unidades de la curva.</b> Con agua, 1 cm<sup>3</sup> pesa 1 g: 10,0 cm<sup>3</sup> son 10,0 g de agua, la décima parte de los 100 g de la curva. → <b>Paso 3 · regla de tres.</b> Si 100 g de agua disuelven 14 g, 10,0 g de agua disuelven 14 × 10,0/100 = <b>1,4 g</b>. → <b>Control.</b> Es la décima parte de 14 g porque el solvente es la décima parte. → <b>Error típico:</b> contestar 14 g, olvidando que la curva está dada para 100 g de solvente y se tomaron sólo 10."},

{st: "<b>Intermedio · Preparar desde un hidrato.</b> Hay que preparar 500,0 mL de solución de CuSO<sub>4</sub> 0,100 M y el único reactivo disponible es sulfato de cobre(II) pentahidratado, CuSO<sub>4</sub>·5H<sub>2</sub>O. M(Cu) = 63,55; M(S) = 32,06; M(O) = 15,999; M(H<sub>2</sub>O) = 18,02 g/mol. a) ¿Qué masa de hidrato hay que pesar? b) ¿Qué molaridad se obtendría si se pesaran, por error, 7,98 g?",
 ans: "a) <b>12,5 g de CuSO<sub>4</sub>·5H<sub>2</sub>O</b>. b) <b>0,0639 M</b>.",
 sol: "<b>Paso 1 · moles de CuSO<sub>4</sub>.</b> n = 0,100 mol/L × 0,5000 L = 0,0500 mol. Cada mol de hidrato aporta 1 mol de CuSO<sub>4</sub>, así que hay que pesar 0,0500 mol de hidrato. → <b>Paso 2 · masa molar del hidrato, con el agua incluida.</b> M(CuSO<sub>4</sub>) = 63,55 + 32,06 + 4 × 15,999 = 159,61 g/mol; el agua de cristalización suma 5 × 18,02 = 90,10 g/mol; M(hidrato) = 159,61 + 90,10 = <b>249,71 g/mol</b>. → <b>Paso 3 · gramos.</b> m = 0,0500 mol × 249,71 g/mol = <b>12,49 g ≈ 12,5 g</b>, disueltos y llevados a 500,0 mL (como en la figura de la teoría). → <b>Paso 4 · el error de b.</b> 7,98 g es lo que pesaría el CuSO<sub>4</sub> anhidro (0,0500 × 159,61); en la balanza esos 7,98 g de hidrato son 7,98/249,71 = 0,0320 mol, y la molaridad es 0,0320/0,5000 = <b>0,0639 M</b>, un 36 % menos de lo pedido. → <b>Control.</b> El agua es 90,10/249,71 = 36,1 % de la masa del hidrato, y esa es justo la falta. → <b>Error típico:</b> usar la masa molar de la sal anhidra cuando el reactivo que se pesa es el hidrato."},

{st: "<b>Intermedio · Leer la curva: zonas y cuánto precipita.</b> La solubilidad del KNO<sub>3</sub> es 31,6 g/100 g de agua a 20 °C, 63,9 a 40 °C y 110 a 60 °C. a) A 40 °C se prepara una solución con 50 g de KNO<sub>3</sub> en 100 g de agua y otra con 80 g en 100 g de agua. Clasificá cada una. b) Se prepara una solución saturada a 60 °C con 250 g de agua y se enfría a 20 °C dejando que cristalice todo lo que pueda. ¿Qué masa de KNO<sub>3</sub> precipita?",
 ans: "a) 50 g: <b>no saturada</b>. 80 g: <b>saturada con 16,1 g sin disolver</b>. b) <b>196 g de KNO<sub>3</sub></b>.",
 sol: "<b>Paso 1 · comparar con el techo.</b> A 40 °C la curva da 63,9 g por cada 100 g de agua, y las dos soluciones tienen 100 g de agua, así que se comparan directo. 50 g &lt; 63,9 g: <b>no saturada</b>, admite 13,9 g más. 80 g &gt; 63,9 g: no se puede disolver todo; la solución queda <b>saturada</b> (63,9 g disueltos) con 80 − 63,9 = <b>16,1 g</b> de sólido en el fondo, o sea un sistema heterogéneo: la parte líquida está sobre la curva, y el resto es sólido. → <b>Paso 2 · cuánto tenía disuelto en b.</b> A 60 °C saturada: 110 g por cada 100 g de agua; con 250 g de agua son 110 × 2,5 = 275 g de KNO<sub>3</sub>. → <b>Paso 3 · cuánto puede quedar a 20 °C.</b> 31,6 × 2,5 = 79 g. → <b>Paso 4 · la diferencia precipita.</b> 275 − 79 = <b>196 g</b>. Lo mismo por cada 100 g de agua: 110 − 31,6 = 78,4 g, por 2,5 = 196 g. → <b>Control.</b> La solución final sigue saturada a 20 °C: 79 g disueltos en 250 g de agua. → <b>Error típico:</b> restar sin escalar por la masa de agua (110 − 31,6 = 78,4 g), que vale sólo para 100 g de solvente. Si en cambio se enfriara muy despacio y sin perturbar, podría quedar sobresaturada y no precipitar nada hasta que algo dispare la cristalización."},

{st: "<b>Intermedio · Concentrar: evaporar o agregar soluto.</b> Se tienen 400 g de solución de KNO<sub>3</sub> al 5,0 % m/m. Se quiere llevarla al 8,0 % m/m. a) ¿Cuántos gramos de agua hay que evaporar? b) Si en cambio se agrega KNO<sub>3</sub> sólido (sin evaporar nada), ¿cuántos gramos hay que agregar?",
 ans: "a) <b>150 g de agua</b>. b) <b>13,0 g de KNO<sub>3</sub></b>.",
 sol: "<b>Paso 1 · qué hay al principio.</b> m<sub>st</sub> = 0,050 × 400 g = 20,0 g de KNO<sub>3</sub>; m<sub>sv</sub> = 400 − 20,0 = 380 g de agua. → <b>Paso 2 · evaporar (a).</b> Se va sólo agua: los 20,0 g de soluto no cambian. En la solución final esos 20,0 g son el 8,0 %: m<sub>sc</sub> = 20,0/0,080 = 250 g. Se evaporaron 400 − 250 = <b>150 g</b>. → <b>Paso 3 · agregar soluto (b).</b> Ahora lo que no cambia es el agua: 380 g. Con x gramos agregados, el soluto es 20,0 + x y la solución 400 + x, y (20,0 + x)/(400 + x) = 0,080 ⟹ 20,0 + x = 32,0 + 0,080 x ⟹ 0,920 x = 12,0 ⟹ x = <b>13,0 g</b>. → <b>Control.</b> Con 13,04 g agregados: soluto 33,04 g sobre solución 413,04 g = 0,0800, o sea 8,0 %. → <b>Error típico:</b> en (b) calcular 3,0 % de 400 g = 12 g: el soluto agregado también engrosa la solución y por eso hacen falta 13,0 g y no 12."},

{st: "<b>Intermedio · Mezclar soluciones en masa.</b> Se mezclan 200 g de solución de NaCl al 10,0 % m/m con 300 g de solución de NaCl al 20,0 % m/m. La solución resultante tiene densidad 1,11 g/mL. M(NaCl) = 58,44 g/mol. Calculá su % m/m y su molaridad.",
 ans: "<b>16,0 % m/m</b> y <b>3,04 M</b>.",
 sol: "<b>Paso 1 · se suman las masas, no los porcentajes.</b> Soluto de la primera: 0,100 × 200 = 20,0 g; de la segunda: 0,200 × 300 = 60,0 g. Total: 80,0 g de NaCl en 200 + 300 = 500 g de solución. → <b>Paso 2 · % m/m.</b> 80,0/500 × 100 = <b>16,0 %</b>. Promediar 10 y 20 daría 15 %, que sólo vale si las masas fueran iguales. → <b>Paso 3 · volumen final, con la densidad del enunciado.</b> V = m<sub>sc</sub>/δ = 500 g / 1,11 g/mL = 450,5 mL. No se suman los volúmenes de las dos soluciones originales: la densidad de la mezcla es un dato nuevo y es la que manda. → <b>Paso 4 · molaridad.</b> n = 80,0 g / 58,44 g/mol = 1,369 mol; M = 1,369 mol / 0,4505 L = <b>3,04 M</b>. → <b>Control.</b> 16,0 % m/m × 1,11 = 17,8 % m/V; M = 10 × 16,0 × 1,11 / 58,44 = 3,04 M, el mismo resultado con el atajo de las conversiones."},

{st: "<b>Intermedio · Gas disuelto y presión parcial.</b> A 25 °C la constante de Henry del N<sub>2</sub> en agua es k = 6,1·10<sup>-4</sup> mol/(L·atm) (S = k·P). El aire tiene 78 % molar de N<sub>2</sub>. M(N<sub>2</sub>) = 28,01 g/mol. a) ¿Qué concentración de N<sub>2</sub> disuelto hay en agua en equilibrio con aire a 1,00 atm? b) ¿Y para un buzo cuyo aire está a 4,0 atm de presión total?",
 ans: "a) <b>4,8·10<sup>-4</sup> mol/L</b> (13 mg/L). b) <b>1,9·10<sup>-3</sup> mol/L</b> (53 mg/L).",
 sol: "<b>Paso 1 · presión parcial, no total.</b> Lo que empuja al N<sub>2</sub> dentro del líquido es su presión parcial: P<sub>N2</sub> = x × P<sub>total</sub> = 0,78 × 1,00 atm = 0,78 atm. → <b>Paso 2 · Henry (a).</b> S = k·P = 6,1·10<sup>-4</sup> mol/(L·atm) × 0,78 atm = <b>4,8·10<sup>-4</sup> mol/L</b>; en masa, 4,76·10<sup>-4</sup> × 28,01 = 0,0133 g/L = 13 mg/L. → <b>Paso 3 · el buzo (b).</b> La composición del aire es la misma, pero la presión total es 4,0 veces mayor: P<sub>N2</sub> = 0,78 × 4,0 = 3,12 atm y S = 6,1·10<sup>-4</sup> × 3,12 = <b>1,9·10<sup>-3</sup> mol/L</b> (53 mg/L). → <b>Control.</b> Con 4,0 veces la presión se disuelve 4,0 veces más gas: 4,76·10<sup>-4</sup> × 4 = 1,90·10<sup>-3</sup>. Al bajar la presión (cuando el buzo sube), ese exceso de unos 40 mg/L sale como burbujas. → <b>Error típico:</b> usar 1,00 atm o la presión total en lugar de la parcial del gas (que es el 78 % de la total)."},


  {st: '<b>Parcial · Química Básica CB040 · Curso 2 · Ejercicio 1, ítem a (textual)</b> <span class="muted">(el texto extraído viene sin espacios entre palabras; se restituyen)</span>. “<i>El cloruro de sodio reacciona con el ácido sulfúrico para formar sulfato de sodio y ácido clorhídrico según la siguiente reacción: 2 NaCl(s) + H<sub>2</sub>SO<sub>4</sub>(ac) → Na<sub>2</sub>SO<sub>4</sub>(ac) + 2 HCl(ac). Si se sabe que se forman 3,66 moles de HCl. a) Calcule el volumen necesario de solución de ácido sulfúrico del 98 %m/m y densidad 1,83 g/mL</i>” <span class="muted">→ Agregado propio, que el examen no pide: expresá además la concentración de ese sulfúrico comercial en % m/V, molaridad, molalidad y fracción molar, y decí para cuáles de las cuatro hizo falta la densidad.</span>',
   ans: 'Del examen: <b>V = 100 mL = 0,100 L</b> de solución de H<sub>2</sub>SO<sub>4</sub>. → Del agregado: el mismo ácido comercial es <b>179 % m/V · 18,3 M · ≈ 500 mol/kg · x(H<sub>2</sub>SO<sub>4</sub>) = 0,90</b>. La densidad hizo falta <b>sólo</b> para el % m/V y para la molaridad; la molalidad y la fracción molar salen sin tocarla.',
   sol: '<b>Parte del examen.</b> → <b>1 · relación molar.</b> La ecuación viene balanceada: 1 H<sub>2</sub>SO<sub>4</sub> por cada 2 HCl ⟹ n(H<sub>2</sub>SO<sub>4</sub>) = 3,66/2 = <b>1,83 mol</b>. <span class="muted">Este ítem no habla de rendimiento ni de pureza: eso entra recién en el ítem b.</span> → <b>2 · moles → gramos de SOLUTO.</b> 1,83 mol × 98 g/mol = <b>179,3 g de H<sub>2</sub>SO<sub>4</sub> puro</b>. → <b>3 · soluto → SOLUCIÓN, con el % m/m.</b> Esos 179,3 g son el 98 % de la masa de solución ⟹ m<sub>sc</sub> = 179,3/0,98 = <b>183,0 g de solución</b>. → <b>4 · masa → volumen, con la densidad.</b> V = 183,0/1,83 = <b>100,0 mL</b>. Con más cifras: 100,00 mL con M = 98,00 y 100,07 mL con M = 98,07. Está construido para dar redondo. → <b>Los cuatro volúmenes equivocados, calculados para que los reconozcas:</b> <b>98,0 mL</b> si dividís los 179,3 g de soluto por la densidad y te salteás el 98 % m/m (sólo 2 % de error: no lo vas a detectar por el número, lo detectás por el planteo) · <b>200 mL</b> si usás los 3,66 mol de HCl como si fueran de sulfúrico y te comés el 2:1 · <b>183 mL</b> si suponés δ = 1,00 g/mL “porque es una solución acuosa” · <b>100 litros</b> si leés la densidad como g/L. → <b>Parte agregada · las cuatro concentraciones del mismo ácido.</b> Tomo <b>dos bases de cálculo</b> según lo que necesito. → <b>Base 1 L de solución</b> (la que sirve para lo que se mide en volumen): m<sub>sc</sub> = 1000 mL × 1,83 g/mL = <b>1830 g</b> ⟹ m<sub>st</sub> = 0,98 × 1830 = <b>1793,4 g</b> de H<sub>2</sub>SO<sub>4</sub> ⟹ <b>% m/V = 179,3</b> (179 g de ácido en cada 100 mL, sí: más de 100) y <b>M = 1793,4/98 = 18,3 mol/L</b>. Con M = 98,07 da 18,29 M. → <b>Base 100 g de solución</b> (la que sirve para lo que se mide en masa): 98 g de ácido y <b>2 g de agua</b>, por m<sub>st</sub> + m<sub>sv</sub> = m<sub>sc</sub> ⟹ n(H<sub>2</sub>SO<sub>4</sub>) = 1,00 mol, n(H<sub>2</sub>O) = 2/18,02 = 0,111 mol ⟹ <b>molalidad = 1,00 mol / 0,002 kg de solvente = 500 mol/kg</b> (499,6 con M = 98,07) y <b>x(H<sub>2</sub>SO<sub>4</sub>) = 1,00/(1,00 + 0,111) = 0,900</b>, x(H<sub>2</sub>O) = 0,100. → <b>Lo que enseña el agregado:</b> las cuatro son <b>la misma solución</b> y los números van de 0,90 a 500. La molalidad de 500 mol/kg no es un error de cuenta: el denominador son los dos gramos de agua que quedan. Y fijate en qué momento entró δ: <b>sólo al pasar de la base “100 g” a la base “1 L”</b>, que es exactamente la frontera masa ↔ volumen. → <b>Guardate el 18,3 M</b>: con él, este ítem sale en un renglón, V = n/M = 1,83/18,3 = 0,100 L, y sirve igual para el Ejercicio 1a del Curso 3, que usa el mismo ácido con otros moles.'},

  {st: '<b>2do Recuperatorio · Química Básica CB040 · 6/12/2024 · Ejercicio 3, ítems a y d (textual)</b> <span class="muted">(el Ej. 3 vale 40 pts sobre 100: a = 8 pts, d = 12 pts, el ítem más caro del ejercicio)</span>. “<i>El laboratorio de control de una industria alimenticia debe verificar la calidad de un vinagre de cocina en cuya etiqueta indica que posee un 5% m/V de ácido acético (ácido etanoico).Para ello se toman 3 ml de una muestra de vinagre, se le agrega un poco de agua destilada y unas gotas de fenolftaleína y se titula con una solución de hidróxido de sodio 0,1250 M, consumiendo 17,85 ml de la solución de hidróxido hasta el viraje del indicador.<br>a) Escriba la reacción de neutralización y nombre todos los reactivos y productos involucrados. Indique cuál es el color de la fenolftaleína antes y después del punto de equivalencia.<br>d) Calcule el pH inicial del vinagre antes de realizar la titulación. Realice los balances de carga y de masa y justifique las suposiciones que hizo al realizar los cálculos. Dato: Ka = 1,8.10-5.</i>”',
   ans: '<b>a)</b> CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O · ácido acético (ácido etanoico) + hidróxido de sodio → acetato de sodio (etanoato de sodio) + agua. Fenolftaleína: <b>incolora</b> antes del punto de equivalencia, <b>rosa/fucsia</b> después. <b>d)</b> Con el 5 % m/V de la etiqueta ⟹ C = <b>0,8326 M</b> ⟹ <b>pH = 2,41</b>. Con la concentración que realmente arrojó la titulación (0,744 M) ⟹ <b>pH = 2,44</b>. Escribí cuál de las dos usaste y por qué.',
   sol: '<b>El paso de esta unidad, que es el que traba el ejercicio entero: 5 % m/V → molaridad.</b> → <b>5 % m/V son 5 g de ácido acético en 100 mL de SOLUCIÓN</b> (de vinagre), no en 100 mL de agua ni en 100 g de nada. Escalando a un litro: <b>50 g de ácido acético por litro de solución</b>. → M(CH<sub>3</sub>COOH) = 2(12,011) + 4(1,008) + 2(15,999) = <b>60,05 g/mol</b>. → C = 50 g·L<sup>-1</sup> / 60,05 g·mol<sup>-1</sup> = <b>0,8326 mol/L</b>. Con M redondeada a 60 da 0,8333, misma cosa a tres cifras. → <b>Fijate que acá no hay densidad y no hace falta:</b> el % m/V ya tiene el volumen de solución en el denominador, así que el único dato extra es la masa molar. Es la única conversión de la tabla que cruza a molaridad sin densidad. → <b>a) La neutralización.</b> CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O, relación <b>1:1</b> (el acético tiene un solo H ácido, el del –COOH; los otros tres del CH<sub>3</sub> no se ionizan). Nombres, que los piden explícitamente: <b>ácido acético o etanoico</b>, <b>hidróxido de sodio</b>, <b>acetato de sodio o etanoato de sodio</b>, <b>agua</b>. → Fenolftaleína: <b>incolora</b> en medio ácido y hasta el punto de equivalencia, <b>rosa</b> pasado el punto (vira aproximadamente entre pH 8,2 y 10). Es el indicador correcto acá porque el punto de equivalencia de un ácido <b>débil</b> con base fuerte cae en pH básico, por hidrólisis del acetato. → <b>d) El pH inicial.</b> Equilibrio: CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ CH<sub>3</sub>COO<sup>-</sup> + H<sub>3</sub>O<sup>+</sup>, K<sub>a</sub> = [CH<sub>3</sub>COO<sup>-</sup>][H<sub>3</sub>O<sup>+</sup>]/[CH<sub>3</sub>COOH] = 1,8·10<sup>-5</sup>. → <b>Balance de masa:</b> C = [CH<sub>3</sub>COOH] + [CH<sub>3</sub>COO<sup>-</sup>]. <b>Balance de carga:</b> [H<sub>3</sub>O<sup>+</sup>] = [CH<sub>3</sub>COO<sup>-</sup>] + [OH<sup>-</sup>]. → <b>Las dos suposiciones que hay que escribir:</b> (1) se desprecia [OH<sup>-</sup>] frente a [CH<sub>3</sub>COO<sup>-</sup>], o sea se desprecia la autoprotólisis del agua, lícito porque el medio es ácido; (2) C − x ≈ C, lícito porque α sale menor al 5 %. Con las dos: [H<sub>3</sub>O<sup>+</sup>] = √(K<sub>a</sub>·C). → <b>Con el 5 % m/V de la etiqueta:</b> √(1,8·10<sup>-5</sup> × 0,8326) = 3,871·10<sup>-3</sup> M ⟹ <b>pH = 2,41</b>. → <b>Con el vinagre realmente ensayado</b>, que del ítem b resultó 0,744 M (n = 0,1250 × 0,01785 = 2,231·10<sup>-3</sup> mol de ácido en 3,00 mL): √(1,8·10<sup>-5</sup> × 0,7438) = 3,659·10<sup>-3</sup> M ⟹ <b>pH = 2,44</b>. → <b>Cuál de los dos poner.</b> El ítem dice “<i>el pH inicial del vinagre</i>”, y el vinagre de este examen es el <b>ensayado</b>, que el propio ítem b demostró que no cumple la etiqueta: la respuesta coherente es <b>2,44</b>, calculada con la concentración medida. Pero la consigna pide “<i>justifique las suposiciones que hizo</i>”: escribí en la hoja cuál de las dos concentraciones tomaste y por qué. Con cualquiera de las dos, el pH difiere en <b>0,03 unidades</b>: el corrector no está buscando ahí el punto, está buscando el planteo. → <b>Control de a cuánto se ionizó:</b> α = 3,66·10<sup>-3</sup>/0,744 = <b>0,49 %</b>, muy por debajo del 5 % ⟹ la aproximación C − x ≈ C queda justificada por el propio resultado. Ése es el chequeo que cierra el ítem. → <b>La misma conversión, en los dos sentidos:</b> el parcial del Curso 3 te da el 5 % m/V y te pide el pH; este recuperatorio te hace medir la concentración y volver al % m/V para comparar con la etiqueta. Es la única unidad de concentración que la cátedra usa para el vinagre, en los dos exámenes.'},

  {st: '<b>G07 “Soluciones”, ejercicio 5 (textual).</b> “<i>Se desea preparar 500 ml de solución acuosa de HClO<sub>4</sub> de concentración 0,150 M. a) ¿Qué volumen de solución acuosa del mismo soluto de concentración 69,0 % m/m y densidad 1,32 g/cm<sup>3</sup> será necesario? b) Calcular los moles de soluto presentes en la solución obtenida.</i>”',
   ans: '<b>a)</b> <b>8,27 mL</b> del ácido perclórico comercial. <b>b)</b> <b>0,0750 mol</b>. Los dos coinciden con la clave que publica la guía.',
   sol: '<b>Éste es el ejercicio de laboratorio de verdad: “preparar una solución diluida a partir de una comercial”.</b> Se resuelve al revés que el del sulfúrico: arrancás por lo que querés y terminás en el volumen que tenés que pipetear. → <b>a) Cuatro pasos, cada uno con su unidad.</b> → <b>1 · lo que quiero, en moles.</b> n = M · V = 0,150 mol/L × 0,500 L = <b>0,0750 mol de HClO<sub>4</sub></b>. → <b>2 · moles → gramos de soluto.</b> M(HClO<sub>4</sub>) = 1,008 + 35,45 + 4(15,999) = <b>100,45 g/mol</b> ⟹ m<sub>st</sub> = 0,0750 × 100,45 = <b>7,534 g</b>. → <b>3 · soluto → solución, con el % m/m.</b> Esos gramos son el 69,0 % de la solución concentrada ⟹ m<sub>sc</sub> = 7,534/0,690 = <b>10,92 g de solución concentrada</b>. → <b>4 · masa → volumen, con δ.</b> V = 10,92/1,32 = <b>8,27 mL</b>. Con más cifras: 8,272 mL. → <b>b) La respuesta que parece trampa y no lo es: 0,0750 mol</b>, exactamente los mismos que calculaste en el paso 1. <b>Diluir no cambia los moles de soluto</b>: agregás agua, sube el volumen, baja la concentración, y el soluto es el mismo que sacaste del frasco. Si te dio otra cosa, revisá qué multiplicaste de más. → <b>El camino corto, si ya calculaste la molaridad del comercial:</b> M<sub>conc</sub> = 10 × 69,0 × 1,32 / 100,45 = <b>9,07 M</b> ⟹ V<sub>c</sub> = n/M<sub>c</sub> = 0,0750/9,07 = <b>8,27 mL</b>. Es V<sub>c</sub>·C<sub>c</sub> = V<sub>d</sub>·C<sub>d</sub> con las dos concentraciones en molaridad, que es lo que exige la aclaración de T07A “<i>siempre que C<sub>c</sub> y C<sub>d</sub> se expresen de la misma manera</i>”. → <b>Lo que NO podés hacer</b> es escribir V<sub>c</sub> × 69,0 = 500 × 0,150 mezclando un % m/m con una molaridad: no son la misma forma de expresión y el número que sale no significa nada. → <b>Cómo se prepara realmente, y por qué no aparece ningún “volumen de agua” en la cuenta:</b> se miden los 8,27 mL del concentrado, se vuelcan sobre <b>algo</b> de agua y recién después se lleva a enrase de <b>500 mL de solución</b>. Nunca se calcula “491,7 mL de agua”: ése es el error que supone volúmenes aditivos sin que nadie lo haya autorizado, y en un ácido concentrado además es peligroso al revés (siempre ácido sobre agua).'},

  {st: '<b>G07 “Soluciones”, ejercicio 7 (textual).</b> “<i>Se dispone de 0,520 kg de una solución acuosa de cloruro de hierro(III), 52,0 % m/V cuya densidad es 1,36g/cm<sup>3</sup>. Se le agrega 650 cm<sup>3</sup> de agua, densidad de 1,00 g/cm<sup>3</sup>. Calcular la concentración de la solución obtenida, expresada en % m/m.</i>”',
   ans: '<b>17,0 % m/m</b> de FeCl<sub>3</sub>. Coincide con la clave de la guía. Y no hace falta suponer volúmenes aditivos en ningún renglón.',
   sol: '<b>Es el ejercicio que enseña cuándo la hipótesis de volúmenes aditivos NO hace falta</b>, y por eso conviene tenerlo hecho: el resultado se pide en <b>% m/m</b>, y las <b>masas siempre se suman</b>, sin ninguna suposición, porque la masa se conserva. → <b>El detalle que hay que ver antes de calcular nada:</b> te dan <b>0,520 kg</b>, que es una <b>masa</b>, pero la concentración es <b>52,0 % m/V</b>, que tiene un <b>volumen</b> en el denominador. No se pueden juntar sin pasar por la densidad. Ahí es donde entra el 1,36. → <b>1 · masa de solución → volumen de solución.</b> V<sub>sc</sub> = 520 g / 1,36 g·cm<sup>-3</sup> = <b>382,4 cm<sup>3</sup></b>. → <b>2 · volumen → masa de soluto, con el % m/V.</b> 52,0 g de FeCl<sub>3</sub> por cada 100 cm<sup>3</sup> ⟹ m<sub>st</sub> = 0,520 × 382,4 = <b>198,8 g de FeCl<sub>3</sub></b>. → <b>3 · el agua agregada, a masa.</b> 650 cm<sup>3</sup> × 1,00 g/cm<sup>3</sup> = <b>650 g</b>. <span class="muted">Para eso te dan la densidad del agua: no para sumar volúmenes.</span> → <b>4 · el balance de masas.</b> m<sub>sc</sub> final = 520 + 650 = <b>1170 g</b>, y el soluto no cambió: siguen siendo 198,8 g. → <b>5 · % m/m.</b> 198,8/1170 × 100 = <b>16,99 ≈ 17,0 % m/m</b>. → <b>Dónde se cae la gente, los tres lugares:</b> (1) tratar los 0,520 kg como si fueran 520 cm<sup>3</sup> de solución, que da m<sub>st</sub> = 270,4 g y un 23,1 % m/m (está mal por un factor 1,36) · (2) poner en el denominador sólo el agua agregada (650 g) en vez de la solución entera · (3) intentar calcular el volumen final para “chequear” y suponer 382,4 + 650 = 1032,4 cm<sup>3</sup> sin declararlo, cuando el enunciado <b>no</b> autoriza volúmenes aditivos y además <b>no hace falta</b>: el resultado pedido es masa sobre masa. → <b>La regla que hay que llevarse:</b> antes de suponer nada sobre volúmenes, mirá la <b>unidad del resultado</b>. Si el resultado es % m/m, molalidad o fracción molar, todo se resuelve con masas y moles y la hipótesis sobra. Si el resultado es % m/V, molaridad o normalidad, necesitás un volumen de solución: o te lo dan, o lo sacás de una densidad, o tenés que suponer aditividad <b>y escribirlo</b>.'},

  {st: '<b>G07 “Soluciones”, ejercicio 9 (textual).</b> “<i>El ácido fosfórico se utiliza para facilitar la adherencia a la superficie dental de los adhesivos, en la fabricación de gaseosas, de fertilizantes, etc. Se diluye una porción de una solución de ácido fosfórico comercial 85 % m/m por agregado de agua hasta un volumen de 100 cm<sup>3</sup>. Se obtiene una solución 14,0 % m/m cuya densidad es 1,08 g/cm<sup>3</sup>. Calcular la masa de la porción del ácido comercial utilizada.</i>”',
   ans: '<b>17,8 g</b> de solución comercial al 85 % m/m. Coincide con la clave de la guía.',
   sol: '<b>El ejercicio más tramposo de la G07, y la trampa es de lectura, no de cuenta:</b> te piden la masa de la <b>porción de solución comercial</b>, no la masa de ácido fosfórico. Son dos números distintos (17,8 g contra 15,12 g) y el enunciado los distingue con una sola palabra. → <b>La estrategia: arrancar por el final, que es lo único que está completamente descripto.</b> → <b>1 · la solución diluida, entera.</b> Te dan V = 100 cm<sup>3</sup> y δ = 1,08 g/cm<sup>3</sup> ⟹ m<sub>sc</sub> = 100 × 1,08 = <b>108 g de solución diluida</b>. <span class="muted">Acá y sólo acá entra la densidad: es la única que cruza volumen → masa.</span> → <b>2 · cuánto ácido hay ahí adentro.</b> Es 14,0 % m/m ⟹ m(H<sub>3</sub>PO<sub>4</sub>) = 0,140 × 108 = <b>15,12 g</b>. → <b>3 · el invariante de toda dilución: ese H<sub>3</sub>PO<sub>4</sub> ya estaba en la porción.</b> Agregar agua no crea ni destruye soluto ⟹ los mismos 15,12 g estaban en la porción del comercial. → <b>4 · de soluto a solución comercial, con su % m/m.</b> Esos 15,12 g son el 85 % de la porción ⟹ m<sub>porción</sub> = 15,12/0,85 = <b>17,79 ≈ 17,8 g</b>. → <b>De yapa, para el control:</b> la porción llevaba 17,79 − 15,12 = <b>2,67 g de agua</b> propia, y como la solución final pesa 108 g, el agua <b>agregada</b> fue 108 − 17,79 = <b>90,2 g</b>. Nunca calculaste “volumen de agua agregada” y no hacía falta: el volumen que te dieron es el de la <b>solución final</b>. → <b>Los dos errores clásicos:</b> contestar <b>15,12 g</b>, que es el ácido puro y no la porción (leer mal la palabra “porción”), y armar V<sub>c</sub>·85 = 100·14,0 como si fuera una dilución de las de V·C. <b>No lo es</b>: los dos porcentajes son m/m, no hay volumen del lado concentrado y el 100 cm<sup>3</sup> es de solución final. La relación V<sub>c</sub>C<sub>c</sub> = V<sub>d</sub>C<sub>d</sub> exige que las dos concentraciones estén <b>referidas al volumen</b>. → <b>La forma general de todos estos ejercicios:</b> encontrá la magnitud que <b>no cambia</b> al diluir, los gramos (o los moles) de soluto, y escribí esa misma cantidad de las dos maneras, una desde cada solución. Toda dilución es una sola ecuación con ese invariante.'},

]);

registerExercises('fiuba-quimica', '9', [

  {st: 'La etiqueta de un vinagre dice <b>5 % m/V de ácido acético</b>. ¿Cuál de estos procedimientos prepara 250 mL de esa solución?',
   opts: ['Agregar 12,5 g de ácido acético a <b>250 mL de agua</b>', 'Disolver 12,5 g de ácido acético en agua y llevar a enrase de <b>250 mL de solución</b>', 'Disolver 5,00 g de ácido acético y llevar a 250 mL de solución', 'Pesar 12,5 g de ácido acético y completar hasta <b>250 g de solución</b>'], c: 1,
   ex: '<b>% m/V = g de soluto / 100 mL de SOLUCIÓN.</b> Para 250 mL hacen falta 5,00 × 2,5 = <b>12,5 g</b>, y el volumen que se lleva a 250 mL es el de la <b>solución terminada</b>, no el del agua. → La opción de los 250 mL de agua es el error central de la unidad: al disolver, el volumen final no es 250 mL, así que la concentración real queda <b>por debajo</b> del 5 % m/V. → 5,00 g en 250 mL sería 2,00 % m/V: se olvidó de escalar del 100 mL de la definición a los 250 mL pedidos. → 12,5 g en 250 g de solución es <b>5 % m/m</b>, otra unidad: sólo coincidiría con el % m/V si la densidad fuera exactamente 1,00 g/mL.'},

  {st: 'Una solución de NaOH es <b>20,0 % m/m</b> y tiene densidad <b>1,22 g/mL</b>. M(NaOH) = 40,00 g/mol. ¿Cuál es su <b>molaridad</b>?',
   opts: ['5,00 M', '24,4 M', '6,10 M', '6,25 M'], c: 2,
   ex: '<b>Base 100 g de solución:</b> 20,0 g de NaOH = 0,500 mol, y 80,0 g de agua. → El volumen de esos 100 g <b>no es 100 mL</b>: V = m/δ = 100/1,22 = <b>81,97 mL = 0,08197 L</b>. → M = 0,500/0,08197 = <b>6,10 mol/L</b>. Por el atajo: M = 10 · %m/m · δ / M<sub>st</sub> = 10 × 20,0 × 1,22/40,00 = 6,10 ✔ → <b>5,00 M</b> es el error más caro de la unidad: dividir por 0,100 L “porque son 100 g”. Vale sólo si δ = 1,00 g/mL, y acá te dieron 1,22 justamente porque no lo es. → <b>6,25</b> es la <b>molalidad</b> (0,500 mol / 0,0800 kg de solvente): dividiste por la masa de agua en vez del volumen de solución. → <b>24,4</b> es el <b>% m/V</b> (= 20,0 × 1,22), que no es una molaridad ni tiene unidades de mol/L.'},

  {st: 'Para la misma solución de NaOH del ítem anterior (20,0 % m/m, δ = 1,22 g/mL), ¿cuál es la <b>molalidad</b>?',
   opts: ['6,25 mol/kg', '5,00 mol/kg', '6,10 mol/kg', 'Faltan datos: sin el volumen de solvente no se puede'], c: 0,
   ex: '<b>m = moles de soluto / kg de SOLVENTE.</b> En 100 g de solución hay 0,500 mol de NaOH y m<sub>sv</sub> = 100 − 20,0 = <b>80,0 g = 0,0800 kg</b> (sale de m<sub>st</sub> + m<sub>sv</sub> = m<sub>sc</sub>) ⟹ m = 0,500/0,0800 = <b>6,25 mol/kg</b>. → <b>Y la densidad no se usa</b>: las dos, % m/m y molalidad, son masa sobre masa. Si la usaste, sobra. → <b>6,10</b> es la molaridad: dividiste por el volumen de solución. → La opción “faltan datos” es el reflejo equivocado: la molalidad pide <b>masa</b> de solvente, no volumen, y esa masa siempre sale por diferencia. → Comparalos: <b>M = 6,10 y m = 6,25 para la misma solución</b>, un 2,5 % de diferencia acá y un factor 27 en el sulfúrico concentrado. Si te dan iguales, dividiste dos veces por lo mismo.'},

  {st: 'Se toman <b>25,0 mL de HCl 2,00 M</b> y se llevan con agua hasta <b>250 mL</b> de solución. ¿Cuántos moles de HCl hay en la solución final?',
   opts: ['0,00500 mol', '0,500 mol', 'Menos de 0,0500 mol, porque al diluir baja la cantidad de ácido', '0,0500 mol'],
   c: 3,
   ex: "n = M · V = 2,00 × 0,0250 = <b>0,0500 mol</b> antes de diluir, y <b>exactamente los mismos 0,0500 mol</b> después. → <b>Diluir no cambia los moles de soluto:</b> agregás solvente, no sacás ni ponés soluto. Lo que cambia es el volumen (sube ×10) y por lo tanto la concentración (baja ×10, a 0,200 M). → De ahí sale V<sub>c</sub>·C<sub>c</sub> = V<sub>d</sub>·C<sub>d</sub>: los dos lados son el mismo n. → La de <b>“menos de 0,0500 mol”</b> confunde <b>cantidad</b> con <b>concentración</b>: la solución es más diluida y sin embargo tiene la misma cantidad de HCl. Es la pregunta 3 del bloque conceptual, y es la que después justifica que al diluir un ácido débil el α <b>suba</b> aunque haya menos ácido por litro."},

  {st: 'Se mezclan dos soluciones acuosas y se pide la concentración final. ¿En cuál de estos casos <b>NO</b> hace falta suponer que los volúmenes son aditivos?',
   opts: ['Cuando se pide la <b>molaridad</b> final', 'Nunca hace falta: los volúmenes de líquidos siempre se suman', 'Cuando se pide el <b>% m/V</b> final', 'Cuando se pide el <b>% m/m</b> final'],
   c: 3,
   ex: '<b>Las masas se suman siempre</b>, porque la masa se conserva: m<sub>st</sub> + m<sub>sv</sub> = m<sub>sc</sub> no es una hipótesis, es un balance. Por eso un <b>% m/m</b> (o una molalidad, o una fracción molar) sale sin suponer nada: es el ejercicio 7 de la G07. → <b>Los volúmenes NO se suman en general:</b> al mezclar líquidos las moléculas se reacomodan y el volumen final difiere de la suma (etanol + agua contrae). Por eso la molaridad y el % m/V, que tienen volumen de solución en el denominador, <b>sí</b> necesitan la hipótesis, o un dato de volumen final, o una densidad de la mezcla. → La cátedra la <b>imprime</b> cuando quiere que la uses: “considere que los volúmenes son aditivos” aparece en el Ej. 3c del parcial Curso 3 y en el Ej. 3a del 2do recu del 27/06/25. Si no está impresa y la necesitás, escribila: los Ejercicios 3 de los parciales de curso piden literalmente “explicitando las suposiciones que realiza en los cálculos”.'},

  {st: 'La solubilidad del O<sub>2</sub> en agua a 25 °C bajo una atmósfera de <b>O<sub>2</sub> puro a 1,00 atm</b> vale <b>S</b>. A la misma temperatura, bajo <b>aire a 1,00 atm total</b> (21 % molar de O<sub>2</sub>), la solubilidad del O<sub>2</sub> es:',
   opts: ['la misma, <b>S</b>, porque la presión total no cambió', '<b>0,21 · S</b>', '<b>0,79 · S</b>', '<b>S / 0,21</b>, casi cinco veces mayor'],
   c: 1,
   ex: "<b>Ley de Henry, tal como la escribe T07A: S = k · P, con P la presión PARCIAL del gas</b>, no la total. → Por Dalton, p(O<sub>2</sub>) = x(O<sub>2</sub>) · P<sub>total</sub> = 0,21 × 1,00 = <b>0,21 atm</b> ⟹ S<sub>aire</sub> = k × 0,21 = <b>0,21 · S</b>. → La de <b>la misma S</b> es el error típico: mirar el manómetro en vez de la composición. Es lo que hace que el agua en contacto con aire tenga muy poco O<sub>2</sub> disuelto aunque la presión atmosférica sea 1 atm. → 0,79 es la fracción del N<sub>2</sub>, otro gas con otra k. → Dividir por 0,21 invierte la proporcionalidad: Henry es <b>directa</b>, más presión parcial ⟹ más gas disuelto. → Como no te van a dar k, la forma operativa es <b>S<sub>1</sub>/P<sub>1</sub> = S<sub>2</sub>/P<sub>2</sub></b>. En los 9 exámenes reales no hay nada de Henry, ni cálculo ni pregunta: sólo aparece en el banco de preguntas conceptuales (la 11, la de la presión). Los ejemplos clásicos para contestarla son la gaseosa que se destapa y el buzo que asciende (complemento: no están en las teóricas de la cátedra)."},

  {st: 'Una sal se disuelve en agua <b>absorbiendo calor</b> (ΔH<sub>sol</sub> &gt; 0). Al aumentar la temperatura, su solubilidad:',
   opts: ['aumenta', 'disminuye', 'no cambia: la temperatura sólo afecta a los gases', 'aumenta o disminuye según la presión'],
   c: 0,
   ex: "<b>El criterio es uno solo: el efecto de la temperatura tiene el MISMO signo que ΔH<sub>sol</sub>.</b> Textual de T07A: “las sustancias que presentan entalpías de disolución <b>positivas</b> ven <b>favorecida</b> su solubilidad al aumentar la T”. → Es Le Chatelier sobre soluto(s) + calor ⇌ soluto(ac): si el proceso es endotérmico, el calor entra del lado de los reactivos, y calentar corre el equilibrio hacia disolver más. → Si fuera exotérmico (ΔH<sub>sol</sub> &lt; 0) pasaría lo contrario, y ése es justamente el caso de la mayoría de los gases en agua (T07A, diapositiva 8): por eso su solubilidad baja al calentar. → La presión prácticamente no afecta a sólidos y líquidos (son poco compresibles), así que la de <b>“aumenta o disminuye según la presión”</b> mezcla dos factores independientes. → No memorices dos reglas (una para sólidos, otra para gases): memorizá el signo de ΔH<sub>sol</sub> y la regla sale sola en los dos casos."},

  {st: 'Un frasco de gaseosa cerrado se deja al sol y se calienta. Antes de abrirlo, ¿qué le pasó al CO<sub>2</sub> <b>disuelto</b>?',
   opts: ['Aumentó, porque al subir la temperatura aumenta la solubilidad de todos los solutos',
          'Disminuyó, porque el CO<sub>2</sub> reaccionó con el agua y dejó de ser soluto',
          'No cambió, porque el frasco está cerrado y no puede salir gas',
          'Disminuyó, porque disolver un gas es exotérmico y además la temperatura le da energía cinética para escapar del líquido'],
   c: 3,
   ex: "Es la pregunta 8 del bloque conceptual. → <b>Disolver un gas es exotérmico:</b> el ΔH<sub>2</sub> (separar el soluto de sí mismo) es prácticamente nulo, porque en un gas casi no hay interacciones soluto-soluto que romper, así que domina el ΔH<sub>3</sub> negativo de la solvatación (complemento: T07A, diapositiva 5, sólo dice ΔH<sub>2</sub> &gt; 0 en general; que valga casi 0 para un gas no está en las teóricas de la cátedra). Con ΔH<sub>sol</sub> &lt; 0, subir T <b>desfavorece</b> la solubilidad. → El argumento cinético es el complemento: más temperatura, más moléculas del gas con energía suficiente para dejar la fase líquida. → La de <b>“aumentó”</b> generaliza mal: sólo los solutos con ΔH<sub>sol</sub> &gt; 0 ganan solubilidad al calentar, y los gases no están en ese grupo. → La de <b>“no cambió, porque el frasco está cerrado”</b> confunde el sistema: el frasco cerrado impide que el gas <b>se vaya</b>, pero no que salga del líquido. Pasa a la cámara de aire y sube la presión, que es por lo que la gaseosa caliente explota al abrirla. → La de <b>“disminuyó, porque el CO<sub>2</sub> reaccionó con el agua”</b> inventa una reacción: parte del CO<sub>2</sub> forma H<sub>2</sub>CO<sub>3</sub>, pero eso no es lo que gobierna el efecto de la temperatura, y T07A pide justamente que <b>no</b> haya reacción para hablar de solución."},

  {st: 'Una sal tiene solubilidad <b>60 g/100 g de agua a 60 °C</b> y <b>32 g/100 g de agua a 20 °C</b> <span class="muted">(valores del ejemplo, no de una tabla de la cátedra)</span>. Se prepara una solución <b>saturada a 60 °C con 200 g de agua</b> y se la enfría a 20 °C. ¿Cuánto sólido precipita?',
   opts: ['28 g', '56 g', '64 g', 'Nada, si se enfría lentamente'],
   c: 1,
   ex: "<b>Primero llevá todo a las unidades de la curva: g de soluto / 100 g de DISOLVENTE.</b> → Saturada a 60 °C con 200 g de agua ⟹ hay disueltos 60 × 2 = <b>120 g</b>. → A 20 °C el techo baja a 32 × 2 = <b>64 g</b>. → Precipita 120 − 64 = <b>56 g</b>. → <b>28 g</b> es la diferencia por cada 100 g de agua: te olvidaste de escalar a los 200 g reales, el error más frecuente de las curvas. → <b>64 g</b> es lo que <b>queda disuelto</b>, no lo que precipita: leíste el número del eje sin restar. → La de <b>“nada, si se enfría lentamente”</b> describe la <b>sobresaturación</b>: enfriando con mucho cuidado y sin perturbar, el exceso puede quedar disuelto en un estado <b>metaestable</b>. Pero eso no es el estado estable ni la lectura que pide la curva, y cualquier golpe o cristalito precipita los 56 g de golpe. → Ojo con el eje: dice 100 g de <b>agua</b>, no de solución. Los 120 g en 200 g de agua son 37,5 % m/m, no 60 %."},

  {st: 'A 25 °C, la solubilidad de una sal es 36 g/100 g de agua. Alguien prepara una solución con 30 g de esa sal en 100 g de agua a 25 °C. Sobre esa solución es correcto decir que:',
   opts: ['está saturada, porque tiene una concentración alta',
          'está insaturada: la <b>concentración</b> (30) es menor que la <b>solubilidad</b> (36), que es el techo a esa temperatura',
          'está sobresaturada y es metaestable',
          'es imposible saberlo sin conocer la densidad de la solución'],
   c: 1,
   ex: 'Es la pregunta 13 del bloque conceptual, y se contesta comparando dos cosas distintas. → <b>La concentración es cuánto soluto hay</b>: la elegís vos al preparar la solución, puede valer cualquier cosa. <b>La solubilidad es cuánto soluto puede haber</b> como máximo a esa temperatura, y es una propiedad de la pareja soluto-solvente. → 30 &lt; 36 ⟹ <b>insaturada</b>: todavía admite 6 g más por cada 100 g de agua, y no hay sólido en el fondo. → “Concentración alta” no significa nada sin el techo con el cual compararla: la misma concentración puede ser insaturada para una sal y sobresaturada para otra. → Sobresaturada exigiría más de 36 g <b>disueltos</b>, que se logra sólo enfriando con cuidado una saturada caliente. → La densidad no hace falta: los dos números ya están en la misma unidad, g/100 g de agua. Ése es el único requisito: <b>convertir antes de comparar</b>.'},

  {st: 'Una solución acuosa es <b>Ba(OH)<sub>2</sub> 0,150 M</b> y el hidróxido de bario es un electrolito fuerte. ¿Cuánto vale [OH<sup>-</sup>]?',
   opts: ['0,0750 M', '0,150 M', 'Depende de la densidad de la solución', '0,300 M'], c: 3,
   ex: 'Es la pregunta 4 del bloque conceptual. → Electrolito <b>fuerte</b> significa disociación total: Ba(OH)<sub>2</sub> → Ba<sup>2+</sup> + <b>2</b> OH<sup>-</sup>. La molaridad del ion sale de multiplicar la de la sal por su <b>subíndice</b>: [Ba<sup>2+</sup>] = 0,150 M pero <b>[OH<sup>-</sup>] = 2 × 0,150 = 0,300 M</b>. → Contestar 0,150 es el error que aparece en dos exámenes reales: en el Ej. 3a del 2do recu del 27/06/25, olvidar el 2 del Ba(OH)<sub>2</sub> cambia los moles de OH<sup>-</sup> de 7,2 a 3,6 y arruina toda la neutralización. → 0,0750 es dividir por 2 en vez de multiplicar. → La densidad no interviene: la molaridad ya está referida al litro de solución, y la estequiometría de la disociación no depende de ella. → Mismo criterio: NaCl 0,1 M ⟹ [Na<sup>+</sup>] = [Cl<sup>-</sup>] = 0,1 M · MnCl<sub>2</sub> 0,1 M ⟹ [Cl<sup>-</sup>] = 0,2 M.'},

  {st: '<b>G07, ejercicio 3.</b> Una solución de MnCl<sub>2</sub> es <b>3,00 % m/V</b>. M(MnCl<sub>2</sub>) = 125,84 g/mol, M(Cl) = 35,45. ¿Cuál es su concentración expresada como <b>% m/V de anión cloruro</b>?',
   opts: ['0,845 % m/V', '3,00 % m/V', '1,69 % m/V', '1,31 % m/V'], c: 2,
   ex: '<b>Base 100 mL de solución</b>, que es lo que fija el % m/V. → Hay 3,00 g de MnCl<sub>2</sub> ⟹ n = 3,00/125,84 = <b>0,02384 mol</b>. → Cada fórmula aporta <b>2</b> Cl<sup>-</sup> ⟹ n(Cl<sup>-</sup>) = 0,04768 mol ⟹ m = 0,04768 × 35,45 = <b>1,690 g en esos 100 mL</b> ⟹ <b>1,69 % m/V</b>. Coincide con la clave de la guía. → <b>0,845</b> es haber usado un solo cloruro por fórmula: el subíndice 2 es medio ejercicio. → <b>3,00</b> es no haber hecho nada: el porcentaje de la <b>sal</b> no es el de sus iones. → <b>1,31</b> es el del <b>catión</b> Mn<sup>2+</sup> (0,02384 × 54,94 = 1,310 g), la otra mitad del ejercicio: leíste bien pero contestaste el ion equivocado. → Control de cierre que conviene hacer siempre: 1,69 + 1,31 = <b>3,00</b> ✔ La suma de las partes tiene que devolver el todo.'},

  {st: 'El ácido sulfúrico comercial del parcial (Cursos 2 y 3) es <b>98 % m/m</b> con <b>δ = 1,83 g/mL</b>. ¿Cuánto vale su <b>% m/V</b>?',
   opts: ['179 % m/V', '98 % m/V, igual que el % m/m', '53,6 % m/V', 'Es imposible: un porcentaje no puede pasar de 100'], c: 0,
   ex: '<b>% m/V = % m/m · δ</b> (con δ en g/mL) = 98 × 1,83 = <b>179,3 % m/V</b>: hay 179 g de H<sub>2</sub>SO<sub>4</sub> en cada 100 mL de solución. Control: en 1 L hay 1830 g de solución, de los cuales el 98 % son 1793 g. → <b>El % m/V puede pasar de 100 sin ninguna contradicción</b>, porque no es una fracción: el numerador está en gramos y el denominador en mililitros. Es un número con unidades disfrazado de porcentaje. El que <b>nunca</b> puede pasar de 100 es el % m/m, que sí compara masa con masa. → 98 % m/V supone δ = 1,00 g/mL, que es el error de arrastre de toda la unidad. → 53,6 es dividir por la densidad en vez de multiplicar (98/1,83): siempre que uses δ, preguntate si el número tiene que subir o bajar. Un ácido más denso que el agua concentra <b>más</b> masa en el mismo volumen, así que el % m/V tiene que ser <b>mayor</b> que el % m/m.'},

  {st: 'Se pulveriza un sólido y se agita la mezcla mientras se disuelve. ¿Qué efecto tiene eso sobre la <b>solubilidad</b> del sólido a esa temperatura?',
   opts: ['Ninguno: la agitación y el grado de división cambian la <b>velocidad</b> de disolución, no el valor de s', 'La aumenta, porque hay más superficie de contacto', 'La disminuye, porque las partículas chicas precipitan antes', 'La aumenta sólo si el proceso es endotérmico'], c: 0,
   ex: 'Es la pregunta 10 del bloque conceptual, y separa dos cosas que se mezclan todo el tiempo: <b>cuánto se disuelve</b> y <b>cuán rápido se disuelve</b>. → La <b>solubilidad s</b> es un valor de <b>equilibrio</b>: la máxima cantidad de soluto que admite una cantidad dada de solvente a una temperatura específica. Depende de la naturaleza del par soluto-solvente y de la temperatura (y de la presión, si el soluto es un gas). <b>Nada más.</b> → Agitar y pulverizar aumentan la superficie de contacto y la renovación del solvente en la interfase: llegás <b>antes</b> al mismo techo, no lo levantás. Si dejás el terrón entero y esperás lo suficiente, se disuelve exactamente la misma cantidad. → T07A los menciona entre “otros factores”, y ahí es donde se genera la confusión: están en la lista de factores, pero de <b>velocidad</b>. → Sólo la <b>temperatura</b> mueve el valor de s, y su signo lo fija el de ΔH<sub>sol</sub>.'},

  {st: '¿Cuál de estas conversiones entre unidades de concentración <b>NO</b> necesita la densidad de la solución?',
   opts: ['% m/m → molaridad', 'molaridad → molalidad', '% m/V → molaridad', '% m/m → % m/V'], c: 2,
   ex: '<b>La densidad hace falta exactamente cuando la conversión cruza la frontera masa ↔ volumen</b>, y sólo entonces. → El <b>% m/V ya tiene volumen de solución en el denominador</b>, igual que la molaridad: pasar de uno a otro es sólo cambiar gramos por moles, que se hace con la masa molar. M = 10 · %m/V / M<sub>st</sub>. Es el caso del vinagre: 5 % m/V ⟹ 50 g/L ⟹ 50/60,05 = <b>0,8326 M</b>, sin ninguna densidad. → Las otras tres cruzan la frontera: % m/m (masa) → M o % m/V (volumen) y M (volumen) → m (masa de solvente). → <b>Corolario operativo para el examen: si el enunciado te dio una densidad, en algún renglón vas a pasar de gramos de solución a mililitros de solución. Si terminaste el ítem y no la usaste, revisá el planteo.</b> Y al revés: si necesitás cruzar esa frontera y no te la dieron, o el problema sale por otro lado o falta un dato. Decilo en la hoja en vez de inventar δ = 1.'},
  {st: "Dos soluciones acuosas saturadas, una de KNO<sub>3</sub> y otra de Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>, tienen un poco de sólido en el fondo a 20 °C y se calientan hasta 60 °C. Según las curvas de T07A:",
   opts: ["En las dos se disuelve el sólido, porque calentar siempre aumenta la solubilidad de un sólido.", "En la de KNO<sub>3</sub> precipita más sólido y en la de Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> se disuelve el que había.", "En la de KNO<sub>3</sub> el sólido se disuelve y queda insaturada; en la de Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> precipita más sólido.", "En ninguna cambia nada: la temperatura sólo afecta la solubilidad de los gases."],
   c: 2,
   ex: "<b>KNO<sub>3</sub> se disuelve y Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> precipita.</b> La curva del KNO<sub>3</sub> sube muy fuerte (de unos 30 g/100 g de agua a 20 °C a más de 100 g antes de los 60 °C): ΔH<sub>sol</sub> &gt; 0, el techo sube y el sólido del fondo se disuelve. La del Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> baja (de unos 5 g a 20 °C a unos 3 g a 60 °C): ΔH<sub>sol</sub> &lt; 0, el techo baja y precipita más sólido. Que <b>calentar siempre aumenta la solubilidad de un sólido</b> es la generalización falsa: la mayoría sube, pero no todos, y el gráfico trae un contraejemplo. Que <b>el KNO<sub>3</sub> precipite y el Ce<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub> se disuelva</b> invierte los signos: el efecto de la T tiene el mismo signo que ΔH<sub>sol</sub>. Que <b>la temperatura sólo afecte a los gases</b> también es falso: T07A la nombra entre los factores de la solubilidad de los sólidos y la curva de cada sal lo muestra."}

]);

// SECCIÓN 10 · TERMODINÁMICA, CALORIMETRÍA, TERMOQUÍMICA Y ESPONTANEIDAD
// Unidades 6, 7 y 13. El tema más rentable: Ejercicio 2 en 8 de los 9 exámenes reales.
//
// Los cinco reveals con enunciado de examen están transcriptos TAL CUAL de
// _fiuba_ingest/quimica_txt/parciales/ (C1- parcial, C2- parcial-, C3- parcial,
// 1er Recu-def-2024pdf, EI-2024-07-11-DEF, 2do rec-06-12-24, Parcial 30-05-2025,
// QUIMICA CB040- 2RECUP -1C25-). Las erratas de la cátedra van tal cual y se señalan aparte.
//
// Constantes usadas, en la coherencia dimensional
// que exige cada enunciado: R = 8,31 J/mol·K (C1/C2/C3, 1er Recup., EI 11/07, 6/12/24 y 30/05/25),
// R = 8,314 J/mol·K (27/06/25), T = 298 K. Masas molares con la tabla periódica de la cátedra:
// H 1,008 · C 12,01 · O 16,00 · Al 26,98 · Fe 55,85 → H2O 18,02 · CO2 44,01 · C5H12 72,15 ·
// C2H5OH 46,07 · C8H18 114,22 · Fe2O3 159,70 · Al2O3 101,96.

registerReveals('fiuba-quimica', '10', [

{st: "<b>Básico · Calor para calentar agua.</b> Se calientan 250 g de agua desde 20 °C hasta 80 °C para preparar mate. ¿Cuánto calor absorbe el agua? Dato: c del agua líquida = 4,184 J/(g·K).",
 ans: "<b>62,8 kJ</b> (62.760 J), absorbidos por el agua.",
 sol: "<b>Paso 1 · qué tipo de calor es.</b> La temperatura cambia y el agua sigue líquida: es calor <b>sensible</b>, Q = m·c·ΔT. → <b>Paso 2 · ΔT.</b> ΔT = 80 − 20 = 60 °C, que es lo mismo que 60 K: una diferencia de temperatura vale igual en °C que en K, no hace falta sumar 273. → <b>Paso 3 · la cuenta.</b> Q = 250 g × 4,184 J/(g·K) × 60 K = 62.760 J = <b>62,8 kJ</b>. El signo es positivo: el agua absorbe calor (Q &gt; 0, entra al sistema). → <b>Control.</b> Con el dato en calorías (c = 1 cal/(g·K); 1 cal = 4,184 J): 250 g × 1 cal/(g·K) × 60 K = 15.000 cal, y 15.000 × 4,184 = 62.760 J. → <b>Error típico:</b> dejar el resultado en J y compararlo después con datos que vienen en kJ, o sumar 273 a cada temperatura (no cambia nada, pero es una cuenta de más donde equivocarse)."},

{st: "<b>Básico · Calor para fundir hielo.</b> ¿Cuánto calor hace falta para fundir 50,0 g de hielo que ya está a 0 °C? Datos: ΔH<sub>fus</sub> = 6,03 kJ/mol; M(H<sub>2</sub>O) = 18,02 g/mol.",
 ans: "<b>16,7 kJ</b>.",
 sol: "<b>Paso 1 · qué tipo de calor es.</b> El hielo ya está a 0 °C y la temperatura no cambia mientras funde: es calor <b>latente</b>, Q = n·ΔH<sub>fus</sub>. Usar m·c·ΔT daría cero porque ΔT = 0, y sin embargo hace falta calor. → <b>Paso 2 · pasar a moles.</b> El ΔH<sub>fus</sub> viene por mol: n = 50,0 g / 18,02 g/mol = 2,775 mol. → <b>Paso 3 · la cuenta.</b> Q = 2,775 mol × 6,03 kJ/mol = <b>16,7 kJ</b>, positivo (la fusión absorbe calor). → <b>Control.</b> Con el dato clásico por gramo (80 cal/g; 1 cal = 4,184 J), 80 cal/g × 50,0 g = 4.000 cal = 4.000 × 4,184 J = 16,7 kJ. → <b>Error típico:</b> multiplicar los gramos por kJ/mol sin pasar a moles (da 301 kJ, unas 18 veces más)."},

{st: "<b>Básico · ΔH de combustión con entalpías de formación.</b> Calculá el ΔH° de la combustión completa del metano, CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l), y el calor que libera la combustión de 4,00 g de metano. Datos: ΔH°<sub>f</sub> (kJ/mol): CH<sub>4</sub>(g) −74,8 · CO<sub>2</sub>(g) −393,5 · H<sub>2</sub>O(l) −286,0; M(CH<sub>4</sub>) = 16,04 g/mol.",
 ans: "ΔH° = <b>−890,7 kJ</b> por mol de CH<sub>4</sub>; con 4,00 g se liberan <b>222 kJ</b> (Q = −222 kJ).",
 sol: "<b>Paso 1 · la fórmula.</b> ΔH°<sub>r</sub> = Σ n·ΔH°<sub>f</sub>(productos) − Σ n·ΔH°<sub>f</sub>(reactivos), donde n es el coeficiente de cada especie en la ecuación. → <b>Paso 2 · productos.</b> 1·(−393,5) + 2·(−286,0) = −393,5 − 572,0 = −965,5 kJ. → <b>Paso 3 · reactivos.</b> 1·(−74,8) + 2·0 = −74,8 kJ: el O<sub>2</sub> es un elemento en su forma más estable y su ΔH°<sub>f</sub> vale cero. → <b>Paso 4 · restar.</b> ΔH° = −965,5 − (−74,8) = <b>−890,7 kJ</b>. Como el coeficiente del metano es 1, es por mol de CH<sub>4</sub>. → <b>Paso 5 · pasar a la masa.</b> n = 4,00 g / 16,04 g/mol = 0,2494 mol, y Q = 0,2494 mol × (−890,7 kJ/mol) = <b>−222 kJ</b>: se liberan 222 kJ. → <b>Control.</b> Toda combustión es exotérmica, así que el ΔH tiene que dar negativo; y 4 g es un cuarto de mol, o sea un cuarto de 890 kJ. → <b>Error típico:</b> no multiplicar por 2 el ΔH°<sub>f</sub> del agua, o restar al revés (reactivos − productos), que da +890,7 kJ."},

{st: "<b>Intermedio · Calentar y vaporizar: dos tramos.</b> Una pava calienta 36,0 g de agua líquida desde 25 °C hasta que todo es vapor a 100 °C (sin recalentar el vapor), a 1 atm. ¿Cuánto calor absorbe? Datos: C<sub>p</sub>(H<sub>2</sub>O, l) = 75,23 J/(mol·K); ΔH<sub>vap</sub> = 40,70 kJ/mol; M(H<sub>2</sub>O) = 18,02 g/mol.",
 ans: "<b>92,6 kJ</b> en total (11,27 kJ para calentar y 81,31 kJ para vaporizar).",
 sol: "<b>Paso 1 · los tramos.</b> Desde 25 °C el líquido primero se calienta hasta 100 °C (tramo inclinado, sensible) y recién ahí se vaporiza (meseta, latente). Son dos tramos. → <b>Paso 2 · moles.</b> Los dos datos están por mol: n = 36,0 / 18,02 = 1,998 mol. → <b>Paso 3 · tramo sensible.</b> Q<sub>1</sub> = n·C<sub>p</sub>·ΔT = 1,998 mol × 75,23 J/(mol·K) × 75 K = 11.272 J = 11,27 kJ (pasá a kJ antes de sumar). → <b>Paso 4 · tramo latente.</b> Q<sub>2</sub> = n·ΔH<sub>vap</sub> = 1,998 mol × 40,70 kJ/mol = 81,31 kJ. → <b>Paso 5 · sumar.</b> Q = 11,27 + 81,31 = <b>92,6 kJ</b>. → <b>Control.</b> La vaporización es el 88 % del total (81,31/92,58): coincide con la curva de calentamiento de la teoría, donde la meseta de 100 °C es el tramo más largo. → <b>Error típico:</b> sumar 11.272 con 81,31 sin convertir las unidades, o saltear el tramo de calentamiento y calcular sólo n·ΔH<sub>vap</sub>."},

{st: "<b>Intermedio · Mezcla de agua fría y caliente.</b> En un recipiente aislado, de capacidad calorífica despreciable, se mezclan 200 g de agua a 15 °C con 100 g de agua a 85 °C. ¿Cuál es la temperatura final?",
 ans: "<b>38,3 °C</b>.",
 sol: "<b>Paso 1 · qué se conserva.</b> El recipiente es adiabático: lo que pierde el agua caliente lo gana la fría, ΣQ<sub>i</sub> = 0, y al final las dos están a la misma temperatura t<sub>f</sub>. → <b>Paso 2 · un Q por cuerpo.</b> Q<sub>fría</sub> = 200·c·(t<sub>f</sub> − 15), positivo; Q<sub>caliente</sub> = 100·c·(t<sub>f</sub> − 85), negativo. → <b>Paso 3 · igualar a cero.</b> Las dos son agua, así que c se cancela: 200·(t<sub>f</sub> − 15) + 100·(t<sub>f</sub> − 85) = 0 → 300·t<sub>f</sub> = 3.000 + 8.500 = 11.500 → <b>t<sub>f</sub> = 38,3 °C</b>. → <b>Control.</b> Tiene que quedar entre 15 y 85, y más cerca de 15 porque hay el doble de agua fría. Con c = 4,184 J/(g·K), la fría gana 200 × 4,184 × 23,3 = 19,5 kJ y la caliente pierde 100 × 4,184 × 46,7 = 19,5 kJ: iguales en módulo. → <b>Error típico:</b> promediar (15 + 85)/2 = 50 °C, que sólo vale si las dos masas son iguales."},

{st: "<b>Intermedio · Hess: invertir una ecuación.</b> Calculá el ΔH de C(grafito) + ½ O<sub>2</sub>(g) → CO(g) a partir de: (1) C(grafito) + O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH = −393,5 kJ; (2) CO(g) + ½ O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH = −283,0 kJ.",
 ans: "ΔH = <b>−110,5 kJ</b>.",
 sol: "<b>Paso 1 · mirar dónde está cada especie del objetivo.</b> La reacción buscada no se puede medir directamente (el carbón se quema en parte hasta CO<sub>2</sub>), pero Hess permite calcularla igual. El C(grafito) aparece sólo en (1) y del lado de los reactivos, igual que en el objetivo: (1) se usa tal cual. El CO aparece sólo en (2), pero como reactivo, y el objetivo lo tiene como producto: hay que <b>invertir (2)</b>. → <b>Paso 2 · invertir.</b> CO<sub>2</sub>(g) → CO(g) + ½ O<sub>2</sub>(g), con el signo cambiado: ΔH = +283,0 kJ. → <b>Paso 3 · sumar y cancelar.</b> C + O<sub>2</sub> + CO<sub>2</sub> → CO<sub>2</sub> + CO + ½ O<sub>2</sub>. Se cancela el CO<sub>2</sub> (está a los dos lados) y queda un ½ O<sub>2</sub> de los reactivos: C + ½ O<sub>2</sub> → CO, la ecuación buscada. → <b>Paso 4 · sumar los ΔH.</b> −393,5 + 283,0 = <b>−110,5 kJ</b>. → <b>Control.</b> Es el ΔH°<sub>f</sub> del CO. Quemar C a CO libera menos que quemarlo a CO<sub>2</sub> (−110,5 contra −393,5), porque el CO todavía puede quemarse. → <b>Error típico:</b> invertir la ecuación y olvidarse de cambiar el signo del ΔH, que da −676,5 kJ."},

{st: "<b>Intermedio · Signo de ΔS, ΔG y temperatura de cruce.</b> Para CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g): a) calculá ΔH° y ΔS° y decí qué signo tiene cada uno; b) ¿es espontánea a 25 °C y a 1.000 °C?; c) calculá la temperatura de cruce. Datos: ΔH°<sub>f</sub> (kJ/mol): CaCO<sub>3</sub> −1.206,9 · CaO −635,1 · CO<sub>2</sub> −393,5. S° (J/(mol·K)): CaCO<sub>3</sub> 92,9 · CaO 38,1 · CO<sub>2</sub> 213,8.",
 ans: "a) ΔH° = <b>+178,3 kJ</b>, ΔS° = <b>+159,0 J/K</b>. b) A 25 °C no (ΔG = +130,9 kJ); a 1.000 °C sí (ΔG = −24,1 kJ). c) T<sub>cruce</sub> = <b>1.121 K</b> (848 °C).",
 sol: "<b>Paso 1 · ΔH°.</b> Σ productos = −635,1 + (−393,5) = −1.028,6 kJ; Σ reactivos = −1.206,9 kJ. ΔH° = −1.028,6 − (−1.206,9) = <b>+178,3 kJ</b>: endotérmica. → <b>Paso 2 · ΔS°.</b> Con las S° de <b>todas</b> las especies (acá los elementos no valen cero): ΔS° = (38,1 + 213,8) − 92,9 = <b>+159,0 J/K</b>. El signo coincide con lo esperable: se produce un gas y Δn<sub>gas</sub> = +1. → <b>Paso 3 · qué fila de la tabla.</b> ΔH &gt; 0 y ΔS &gt; 0: la reacción es espontánea sólo al calentar, porque ΔG = ΔH − T·ΔS: a T baja manda ΔH (positivo) y a T alta manda −T·ΔS (negativo). → <b>Paso 4 · ΔG a cada temperatura (en kelvin).</b> A 298 K: ΔG = 178,3 − 298 × 0,1590 = <b>+130,9 kJ</b>, no espontánea. A 1.273 K (1.000 °C): ΔG = 178,3 − 1.273 × 0,1590 = <b>−24,1 kJ</b>, espontánea. → <b>Paso 5 · temperatura de cruce.</b> ΔG = 0 → T = ΔH/ΔS = 178.300 J / 159,0 J/K = <b>1.121 K</b>, o sea 1.121 − 273 = 848 °C. → <b>Control.</b> 25 °C está por debajo de 848 °C (no espontánea) y 1.000 °C por encima (espontánea): los dos resultados de ΔG son coherentes con la T de cruce. → <b>Error típico:</b> dejar ΔH en kJ y ΔS en J/K: la T de cruce sale 1,12, mil veces menos, y no tiene sentido. Y usar °C en lugar de K en ΔG = ΔH − T·ΔS."},


  {st: '<b>Parcial Química Básica CB040 · Curso 1 · 31/05/24 · Ejercicio 2</b> <span class="muted">(textual; es la plantilla que se repite en los tres parciales de curso)</span><br><br>“<i>Un secadero de yerba mate está evaluando si usar etano (C<sub>2</sub>H<sub>6</sub>) gaseoso o carbón (C) como combustible para sus hornos de secado y dispone de los siguientes datos</i>”<br><i>Sustancia: C<sub>2</sub>H<sub>6</sub>(g) · CO<sub>2</sub>(g) · H<sub>2</sub>O(l). ΔH°<sub>f</sub> [kJ/mol]: −84,7 · −393,5 · −286,0</i><br>“<i>a) Calcule las entalpías de combustión del etano y del carbón. Escriba las ecuaciones termoquímicas. ¿Cuál combustible será más conveniente si ambos tienen igual costo por mol de combustible? Justifique su respuesta. b) Si la combustión del etano se realiza a P y T constantes, indique, describiendo su razonamiento, si el sistema realiza trabajo sobre el entorno o el entorno sobre el sistema. c) ¿Cuál es la masa de hojas de yerba mate que se pueden secar, sabiendo que contienen un 70% de agua y se encuentran inicialmente a 25°C y se dispone de 1000 moles de etano como combustible para operar el horno de secado?</i>”<br><i>Datos: ΔH<sub>vap.agua</sub> = 40,88 kJ/mol &nbsp; Cp H<sub>2</sub>O(l) = 75,29 J/K.mol</i>',
   ans: '<b>a)</b> ΔH°<sub>c</sub>(etano) = <b>−1.560,3 kJ/mol</b> · ΔH°<sub>c</sub>(carbón) = <b>−393,5 kJ/mol</b>. A igual costo por mol conviene el <b>etano</b>: rinde 3,97 veces más calor por mol. <b>b)</b> Δn<sub>gases</sub> = −2,5 ⟹ W = <b>+6,19 kJ</b> ⟹ <b>el entorno realiza trabajo sobre el sistema</b> (se comprime). <b>c)</b> Se evaporan <b>604,3 kg de agua</b>, que son el 70 % de <b>863,3 kg de hojas de yerba</b>.',
   sol: '<b>a) Las dos entalpías de combustión.</b> Combustión completa, coeficiente <b>1</b> para el combustible (la ΔH°<sub>c</sub> está definida por mol de sustancia que se quema) y agua <b>líquida</b>:<br>C<sub>2</sub>H<sub>6</sub>(g) + 7/2 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l)<br>ΔH°<sub>c</sub> = [2·(−393,5) + 3·(−286,0)] − [1·(−84,7) + 3,5·<b>0</b>] = (−787 − 858) + 84,7 = <b>−1.560,3 kJ/mol</b><br>El <b>0</b> del O<sub>2</sub> escribilo: es la ΔH°<sub>f</sub> de un elemento en su forma más estable y el corrector quiere ver que sabés por qué se anula.<br>C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g) &nbsp;⟹&nbsp; ΔH°<sub>c</sub>(C) = ΔH°<sub>f</sub>(CO<sub>2</sub>) = <b>−393,5 kJ/mol</b>: la ecuación de combustión del grafito <b>es</b> la de formación del CO<sub>2</sub>. No hay nada que calcular.<br><b>Conveniencia:</b> 1.560,3 / 393,5 = <b>3,97</b> ⟹ conviene el etano. Fijate que el enunciado te fija el criterio (“igual costo <b>por mol</b>”): por eso se compara por mol y no por kilo. <span class="muted">Por gramo el ranking se acerca mucho, ver el quiz 12.</span><br><br><b>b) El signo del trabajo, con la convención de T10A (ΔU = Q + W, todo lo que entra es positivo).</b><br>W = −Δn<sub>gases</sub>·R·T, y Δn cuenta <b>sólo gases</b>: productos 2 mol de CO<sub>2</sub> (el H<sub>2</sub>O es <b>líquida</b> y no entra), reactivos 1 + 3,5 = 4,5 mol.<br>Δn = 2 − 4,5 = <b>−2,5 mol</b> → W = −(−2,5)·8,31·298 = <b>+6.191 J = +6,19 kJ</b><br>W &gt; 0 ⟹ <b>el entorno realiza trabajo sobre el sistema</b>. La prosa que pide “describiendo su razonamiento”: <i>desaparecen 4,5 moles de gas y aparecen 2, el volumen gaseoso cae, la atmósfera empuja el pistón hacia adentro y le entrega trabajo al sistema</i>.<br><br><b>c) La masa de yerba: dos calores, no uno.</b> El agua arranca a <b>25 °C</b> ⟹ primero hay que <b>calentarla</b> hasta 100 °C (sensible) y recién después <b>vaporizarla</b> (latente).<br>Q disponible = 1000 mol · 1.560,3 kJ/mol = <b>1.560.300 kJ</b><br>q por mol de agua = 75,29 J/(K·mol) · 75 K + 40.880 J/mol = 5.646,75 + 40.880 = <b>46.526,75 J/mol = 46,527 kJ/mol</b><br>n(H<sub>2</sub>O) = 1.560.300 / 46,527 = <b>33.535,5 mol</b><br>m(H<sub>2</sub>O) = 33.535,5 · 18,02 g/mol = 604.309 g = <b>604,3 kg</b><br>m(yerba) = 604,3 / 0,70 = <b>863,3 kg</b><br><span class="muted">Con M(H<sub>2</sub>O) redondeada a 18,00 g/mol el mismo cálculo da 603,6 kg de agua y 862,3 kg de yerba. La diferencia es puro redondeo de la masa molar (0,1 %): cualquiera de los dos pares se acepta, pero declará qué M usaste.</span><br><br><b>Los dos controles antes de entregar:</b> → el resultado (863 kg de hojas) es del orden de una carga de horno, no de 8 kg ni de 80 toneladas; → si hubieras usado sólo el ΔH<sub>vap</sub>, saltando el calor sensible, te habrían dado 38.167,8 mol → 687,8 kg de agua → <b>982,5 kg</b> de yerba, un <b>14 % de más</b>. El enunciado dice “se encuentran inicialmente a 25 °C” y te regala el Cp del agua líquida exactamente para que no te lo saltees.'},

  {st: '<b>Las dos variantes invertidas del mismo ejercicio · Cursos 2 y 3, 2024 · ítem c</b> <span class="muted">(textual)</span><br><br><b>Curso 2 (frutillas, metano, ΔH°<sub>f</sub> CH<sub>4</sub> = −74,8 kJ/mol):</b> “<i>c) Calcule el % de agua que contienen las frutillas si se sabe que se utilizaron 2467 moles de metano para operar el horno y se secaron 1000 Kg de frutillas frescas que se encontraban inicialmente a 25°C.</i>”<br><br><b>Curso 3 (nueces, propano, ΔH°<sub>f</sub> C<sub>3</sub>H<sub>8</sub> = −103,85 kJ/mol):</b> “<i>c) Calcule los moles de propano requeridos para operar el horno de secado si se necesitan secar 800 Kg de nueces frescas que contienen un 70% de agua y se encuentran inicialmente a 25°C.</i>”<br><br><i>Mismos datos adicionales en los dos: ΔH<sub>vap.agua</sub> = 40,88 KJ/mol · Cp H<sub>2</sub>O(l) = 75,29 J/K.mol · ΔH°<sub>f</sub> CO<sub>2</sub>(g) = −393,5 · ΔH°<sub>f</sub> H<sub>2</sub>O(l) = −286,0</i>',
   ans: '<b>Curso 2:</b> ΔH°<sub>c</sub>(metano) = −890,7 kJ/mol → Q = 2.197.357 kJ → 47.227,8 mol de agua = 851 kg → las frutillas tienen <b>≈ 85 % de agua</b>. <b>Curso 3:</b> ΔH°<sub>c</sub>(propano) = −2.220,65 kJ/mol → hay que evaporar 560 kg de agua = 31.076,6 mol → hacen falta <b>≈ 651 mol de propano</b>.',
   sol: '<b>El motor es el mismo de siempre: q por mol de agua = 46,527 kJ/mol</b> (75,29·75 J sensible + 40.880 J latente). Sólo cambia de qué lado de la igualdad está la incógnita.<br><br><b>Curso 2 · de moles de combustible a porcentaje de agua.</b><br>ΔH°<sub>c</sub>(CH<sub>4</sub>) = [(−393,5) + 2·(−286,0)] − [(−74,8)] = −965,5 + 74,8 = <b>−890,7 kJ/mol</b><br>Ecuación: CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l) → Δn = 1 − 3 = <b>−2</b> → W = +4.953 J, el entorno comprime.<br>Q = 2467 mol · 890,7 kJ/mol = <b>2.197.356,9 kJ</b><br>n(H<sub>2</sub>O) = 2.197.356,9 / 46,527 = <b>47.227,8 mol</b> → m = 47.227,8 · 18,02 = 851.045 g = <b>851,0 kg</b><br>% agua = 851,0 / 1000 · 100 = <b>85,1 %</b> <span class="muted">(con M = 18,00 da 850,1 kg y 85,0 %; el enunciado no fija la M, así que redondeá a 85 % y decí con qué M trabajaste)</span><br>Control de sanidad barato: <b>85 % de agua en una frutilla es creíble</b>. Si te hubiera dado 210 % o 3 %, te equivocaste de sentido en alguna división.<br><br><b>Curso 3 · de masa a secar a moles de combustible.</b><br>ΔH°<sub>c</sub>(C<sub>3</sub>H<sub>8</sub>) = [3·(−393,5) + 4·(−286,0)] − [(−103,85)] = (−1.180,5 − 1.144) + 103,85 = <b>−2.220,65 kJ/mol</b><br>Ecuación: C<sub>3</sub>H<sub>8</sub>(g) + 5 O<sub>2</sub>(g) → 3 CO<sub>2</sub>(g) + 4 H<sub>2</sub>O(l) → Δn = 3 − 6 = <b>−3</b> → W = +7.429 J.<br>Agua a evaporar = 800 kg · 0,70 = <b>560 kg</b> → n = 560.000 / 18,02 = <b>31.076,6 mol</b><br>Q necesario = 31.076,6 · 46,527 = <b>1.445.892 kJ</b><br>n(propano) = 1.445.892 / 2.220,65 = <b>651,1 mol</b> <span class="muted">(con M = 18,00: 31.111,1 mol de agua, 1.447.499 kJ y 651,8 mol de propano)</span><br><br><b>Errata del Curso 3, señalala y no la corrijas dentro de la cita:</b> su ítem a dice “<i>Calcule las entalpías de combustión <b>del etano</b> y del carbón</i>” cuando todo el ejercicio es de <b>propano</b>. El encabezado dice propano, el dato tabulado es la ΔH°<sub>f</sub> del C<sub>3</sub>H<sub>8</sub>(g) y el ítem b vuelve a decir “la combustión del propano”. Es copiado del Curso 1. Resolvé con propano y escribí una línea declarando la interpretación: declararla es gratis y te cubre si el corrector lee distinto.'},

  {st: '<b>2do Recuperatorio · Química Básica CB040 · 27/06/25 · Ejercicio 2 (30 pts: a = 8, b = 8, c = 14)</b> <span class="muted">(textual; es el mejor ejercicio de calorimetría de todos los exámenes)</span><br><br>“<i>Se queman completamente 700 moles de propano y 300 moles de butano. El 90% del calor total que produce la combustión se transfiere a 900 kg de agua que se halla a -5°C y permanece a 1atm. Se pide: a) Escribir las ecuaciones termoquímicas para cada uno de los combustibles; b) calcular el calor total generado en la combustión; c) determinar la situación final del agua (estados de agregación y cantidad de fases) que se halla inicialmente como hielo y bosquejar la curva de calentamiento correspondiente al proceso justificando su respuesta.</i>”<br><br><i>Datos: ΔH<sub>comb_propano</sub> = -2220kJ/mol ; ΔH<sub>comb_butano</sub> = -2878,6kJ/mol ; ΔH<sub>fusión_agua</sub> = 6,03kJ/mol ; ΔH<sub>vaporización_agua</sub> = 40,70kJ/mol ; Cp<sub>agua_sólida</sub> = 33,60J/(mol.K) ; Cp<sub>agua_líquida</sub> = 75,23J/(mol.K) ; Cp<sub>agua_vapor</sub> = 36,28J/(mol.K). &nbsp; R = 8,314 J/mol.K</i>',
   ans: '<b>a)</b> C<sub>3</sub>H<sub>8</sub>(g) + 5 O<sub>2</sub>(g) → 3 CO<sub>2</sub>(g) + 4 H<sub>2</sub>O(l), ΔH°<sub>c</sub> = −2.220 kJ &nbsp;·&nbsp; C<sub>4</sub>H<sub>10</sub>(g) + 13/2 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 5 H<sub>2</sub>O(l), ΔH°<sub>c</sub> = −2.878,6 kJ. <b>b)</b> Q<sub>total</sub> = <b>−2.417.580 kJ</b>; al agua llegan 2.175.822 kJ. <b>c)</b> El proceso termina <b>dentro de la meseta de vaporización</b>: agua a <b>100 °C y 1 atm en 2 fases</b>, con <b>241,1 kg líquidos y 658,9 kg de vapor</b> (se vaporizó el 73,2 %). El Cp del vapor <b>no se usa</b>.',
   sol: '<b>a) Dos ecuaciones, una por combustible (8 pts).</b> Coeficiente <b>1</b> en cada hidrocarburo, <b>estados de agregación en todas las especies</b> y agua <b>líquida</b> (combustión completa en condiciones estándar):<br>C<sub>3</sub>H<sub>8</sub>(g) + 5 O<sub>2</sub>(g) → 3 CO<sub>2</sub>(g) + 4 H<sub>2</sub>O(l) &nbsp; ΔH°<sub>c</sub> = −2.220 kJ<br>C<sub>4</sub>H<sub>10</sub>(g) + 13/2 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 5 H<sub>2</sub>O(l) &nbsp; ΔH°<sub>c</sub> = −2.878,6 kJ<br>El <b>13/2</b> incomoda pero es lo correcto. Si lo sacás multiplicando todo por 2, tenés que duplicar el ΔH y entonces ya no estás escribiendo la entalpía de <b>combustión</b>, que es por mol de sustancia quemada. <b>No se suman las dos ecuaciones en una sola:</b> son dos combustiones independientes.<br><br><b>b) Balance de energía de la mezcla (8 pts).</b> Q<sub>total</sub> = Σ n<sub>i</sub>·ΔH°<sub>c,i</sub>:<br>Q = 700·(−2.220) + 300·(−2.878,6) = −1.554.000 − 863.580 = <b>−2.417.580 kJ</b><br>Negativo porque el sistema libera. El <b>90 %</b> se aplica <b>acá</b>, sobre el calor, no sobre el resultado final:<br>Q<sub>útil</sub> = 0,90 · 2.417.580 = <b>2.175.822 kJ</b><br><br><b>c) La tabla de tramos con acumulados (14 pts, la mitad del ejercicio).</b><br>n(H<sub>2</sub>O) = 900.000 g / 18,02 g·mol⁻¹ = 49.944,5 mol ≈ <b>50.000 mol</b> <span class="muted">(el enunciado está armado para la M redonda de 18; usá 50.000 mol y lo digo abajo)</span><br>Cuatro tramos desde hielo a −5 °C. Ojo: <b>tres Cp distintos</b>, uno por fase.<br><b>1 · sensible</b> hielo −5 → 0 °C: 50.000 · 33,60 · 5 = 8.400.000 J = <b>8.400 kJ</b> &nbsp;(acum. 8.400)<br><b>2 · latente</b> fusión a 0 °C: 50.000 · 6,03 = <b>301.500 kJ</b> &nbsp;(acum. <b>309.900</b>)<br><b>3 · sensible</b> líquida 0 → 100 °C: 50.000 · 75,23 · 100 = 376.150.000 J = <b>376.150 kJ</b> &nbsp;(acum. <b>686.050</b>)<br><b>4 · latente</b> vaporización a 100 °C: 50.000 · 40,70 = <b>2.035.000 kJ</b> &nbsp;(acum. <b>2.721.050</b>)<br><br><b>La comparación es todo el ítem:</b> 686.050 &lt; <b>2.175.822</b> &lt; 2.721.050. El calor pasa el tramo 3 completo pero <b>no llega a terminar el tramo 4</b> ⟹ el proceso muere <b>dentro de la meseta de vaporización</b>, o sea a <b>100 °C</b>.<br>Q<sub>sobrante</sub> = 2.175.822 − 686.050 = <b>1.489.772 kJ</b><br>n<sub>vaporizados</sub> = 1.489.772 / 40,70 = <b>36.603,7 mol</b> → m<sub>vapor</sub> = 36.603,7 · 18 = 658.867 g = <b>658,9 kg</b><br>m<sub>líquido</sub> = 900 − 658,9 = <b>241,1 kg</b> → se vaporizó el <b>73,2 %</b><br><br><b>La respuesta redactada:</b> “<i>Situación final: agua a 100 °C y 1 atm, en equilibrio líquido-vapor. <b>Dos fases</b>: 241,1 kg de agua líquida y 658,9 kg de vapor de agua.</i>” El enunciado pregunta literal “estados de agregación y <b>cantidad de fases</b>”: contestá el número, con nombre y masa de cada fase.<br><br><b>El bosquejo (parte del puntaje).</b> Eje x = calor entregado (kJ), eje y = temperatura (°C). Cuatro tramos: subida corta y <b>empinada</b> de −5 a 0 (el Cp del hielo es el más chico de los tres, 33,60), <b>meseta</b> en 0 °C, subida <b>más suave</b> de 0 a 100 (Cp del líquido 75,23, más del doble), y <b>meseta en 100 °C cortada por la mitad</b>, con una flecha en 2.175.822 kJ marcando dónde se acabó el calor. Escribí los cuatro acumulados sobre el eje x: es lo que demuestra que hiciste el análisis y no adivinaste.<br><br><b>Tres controles y una lectura.</b> → 73,2 % está entre 0 y 100 %: si te hubiera dado 130 %, el calor alcanzaba para pasar la meseta entera y había que seguir al quinto tramo (vapor sobrecalentado). → El <b>Cp del vapor, 36,28, es un dato que no se usa</b>: está ahí para el que se pasa de largo. → Con M(H<sub>2</sub>O) = 18,02 los cuatro acumulados dan 8.390,7 / 309.556 / 685.289 / 2.718.030 kJ y el resultado es 659,9 kg de vapor contra 240,1 líquidos: <b>la conclusión no cambia</b>, seguís en la meseta. → Y la lectura que conviene decir en la hoja: la vaporización se come <b>2.035.000 de los 2.721.050 kJ</b> del recorrido total, un <b>75 %</b>. Por eso ΔH<sub>vap</sub> ≫ ΔH<sub>fus</sub> importa tanto: fundir sólo desarma la red, vaporizar tiene que separar las moléculas.<br><br><b>Sensibilidad, para entender qué mide el ejercicio:</b> con rendimiento 100 % (2.417.580 kJ) se vaporizarían 42.543,7 mol = <b>765,8 kg</b> (85,1 %) y <b>seguirías en la meseta</b>; con 70 % (1.692.306 kJ), 24.723,7 mol = <b>445,0 kg</b> (49,4 %), también en la meseta. El ejercicio está diseñado para caer en el tramo 4 sí o sí: si te dio vapor sobrecalentado o hielo, revisá la aritmética antes que el planteo.'},

  {st: '<b>Parcial Química Básica CB040 · 30/05/2025 · Ejercicio 2 (30 pts: a = 8, b = 10, c = 12)</b> <span class="muted">(textual, con la errata de tipeo del enunciado)</span><br><br>“<i>a) Escribir la ecuación termoquímica para la combustión de 1 mol de etanol (i), 1 bar de presión y 25 °C de temperatura. b) Calcular el trabajo de expansión intercambiado entre sistema y medio cuando se produce la combustión de 1 mol de etanol, y definir su signo. c) Suponiendo que se gastan 8 litros de bioetanol (etanol de fuente vegetal) para recorrer 100 Km en un auto mediano preparado para funcionar con bioetanol puro. Calcular los moles de octano necesarios para el mismo recorrido.</i>”<br><br><i>DATOS: ΔH°<sub>f</sub> H<sub>2</sub>O(l) = -285,8 KJ/mol; ΔH°<sub>f</sub> etanol (l) = -277 KJ/mol; ΔH°<sub>f</sub> CO<sub>2</sub>(g) = -393,5 KJ/mol; ρ(Etanol) = 0,789 Kg/litro; Cp H<sub>2</sub>O(l) = 4,186 KJ/Kg K; ΔH<sub>V</sub>(H<sub>2</sub>O) = 40,66 KJ/mol; ρ(H<sub>2</sub>O) = 1g/ml; ΔH°<sub>c</sub>(octano) = -5471 KJ/mol &nbsp; R = 8,31 J/mol.K = 0,0821 L.atm/mol.K &nbsp; 1 MPa = 9,869 atm</i>',
   ans: '<b>a)</b> C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l) &nbsp; ΔH°<sub>c</sub> = <b>−1.367,4 kJ</b>. <b>b)</b> Δn<sub>gases</sub> = 2 − 3 = <b>−1</b> ⟹ W = −(−1)·8,31·298 = <b>+2.476 J = +2,48 kJ</b>. Positivo: <b>no hay expansión, hay compresión</b>, el medio realiza trabajo sobre el sistema. <b>c)</b> 8 L de bioetanol = 137,0 mol = 187.346 kJ ⟹ hacen falta <b>34,2 moles de octano</b> (≈ 3,91 kg).',
   sol: '<b>a) La ecuación termoquímica (8 pts).</b> El etanol es <b>líquido</b> y el agua producto también:<br>C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l)<br>ΔH°<sub>c</sub> = [2·(−393,5) + 3·(−285,8)] − [(−277) + 3·<b>0</b>] = (−787 − 857,4) + 277 = <b>−1.367,4 kJ</b><br>Sin los (l) y los (g) el ítem no vale aunque el número esté bien: T10B define ecuación termoquímica como la ecuación balanceada <b>con su ΔH y con los estados físicos de todas las especies</b>.<br><span class="muted">El “(i)” del enunciado es un error de tipeo por “(l)” de líquido: se ve en que el dato tabulado dice “ΔH°<sub>f</sub> etanol (l)” y en que la densidad viene en kg/litro. Transcribilo tal cual y aclarálo al margen.</span><br><br><b>b) El trabajo, y la trampa que tiene el enunciado adentro (10 pts).</b> El enunciado dice “trabajo de <b>expansión</b>”, pero <b>no hay expansión</b>: hay que contar Δn y ver qué pasa de verdad.<br>Δn<sub>gases</sub> = (2 mol CO<sub>2</sub>) − (3 mol O<sub>2</sub>) = <b>−1 mol</b> → el H<sub>2</sub>O es <b>líquida</b> y no cuenta; el etanol también es líquido y tampoco cuenta.<br>W = −Δn·R·T = −(−1)·8,31·298 = <b>+2.476 J = +2,48 kJ</b><br>“<i>definir su signo</i>” ⟹ <b>W &gt; 0</b>: con la convención ΔU = Q + W de T10A (“todo lo que entra es positivo”), eso significa que <b>el medio realiza trabajo sobre el sistema</b>. El sistema se <b>contrae</b>: entran 3 moles de gas y salen 2, la atmósfera empuja el pistón hacia adentro. Escribilo en palabras, no dejes el signo suelto.<br>De yapa, el dato que casi siempre piden después: ΔU = ΔH − Δn·R·T = −1.367,4 − (−0,00248·1.000) = <b>−1.364,92 kJ/mol</b>. Difiere del ΔH en un <b>0,18 %</b>: si tu ΔU y tu ΔH difieren mucho más que eso, mezclaste J con kJ.<br><br><b>c) La comparación energética (12 pts).</b> La lógica es “<b>misma energía, distinto combustible</b>”: el auto necesita cierta cantidad de kJ para los 100 km, y hay que ver cuántos moles de octano los dan.<br>m(etanol) = 8 L · 0,789 kg/L = 6,312 kg = <b>6.312 g</b><br>n(etanol) = 6.312 / 46,07 g·mol⁻¹ = <b>137,0 mol</b><br>E = 137,0 · 1.367,4 = <b>187.346 kJ</b> <span class="muted">(≈ 1,87·10<sup>5</sup> kJ para 100 km)</span><br>n(octano) = 187.346 / 5.471 = <b>34,24 mol ≈ 34,2 mol</b><br>Si querés cerrar con una lectura que la cátedra valora (T10B2, poder calorífico): esos 34,2 mol de octano son 34,24 · 114,22 = <b>3,91 kg</b> contra 6,31 kg de etanol. El octano rinde un 61 % más por kilo (47,9 MJ/kg contra 29,7 MJ/kg), que es exactamente por qué el bioetanol puro exige tanques más grandes.<br><br><b>Un aviso sobre los datos.</b> Este enunciado trae <b>tres datos que ningún ítem usa</b> tal como está redactado: el Cp del agua líquida, el ΔH<sub>V</sub> del agua y la densidad del agua. Si te sobra un dato, no lo fuerces: releé qué te están pidiendo. Acá los ítems a, b y c cierran con ΔH°<sub>f</sub>, R, T, la densidad del etanol, su masa molar y el ΔH°<sub>c</sub> del octano, y nada más.'},

  {st: '<b>1er Recuperatorio · Química Básica CB040 · 14/06/24 · Ejercicio 2</b> <span class="muted">(textual; el ítem c es el único ΔU explícito de todos los exámenes)</span><br><br>“<i>Se sabe que la combustión completa de un mol de combustible líquido que sólo contiene C e H, produce 220 g de CO<sub>2</sub> gaseoso y 108 g de H<sub>2</sub>O líquida. Se sabe ademas que la entalpia de combustion para dicho combustible es de -3537,06 kJ/mol. a) Con los datos de que dispone indique cual es la fórmula molecular del combustible propuesto e indique la fórmula desarrollada y el nombre de una posible sustancia que cumpla con la consigna del enunciado justificando su razonamiento. Escriba la ecuación termoquímica para el combustible. b) Si se sabe además que ΔH°<sub>f</sub> CO<sub>2</sub>(g) = −393,5 kJ/mol y ΔH°<sub>f</sub> H<sub>2</sub>O(l) = −286,0 kJ/mol, calcule la entalpia de formacion para el combustible líquido propuesto. Justifique su respuesta. c) Calcule la variación de energía interna para la combustión de 1 mol del combustible líquido a 25 C. Justifique su razonamiento.</i>”<br><br><i>R = 8,31 J/mol.K</i>',
   ans: '<b>a)</b> <b>C<sub>5</sub>H<sub>12</sub></b> (pentano, CH<sub>3</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>3</sub>): C<sub>5</sub>H<sub>12</sub>(l) + 8 O<sub>2</sub>(g) → 5 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l), ΔH°<sub>c</sub> = −3.537,06 kJ. <b>b)</b> ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>, l) = <b>−146,44 kJ/mol</b>. <b>c)</b> Δn<sub>gases</sub> = 5 − 8 = −3 ⟹ ΔU = ΔH − Δn·R·T = −3.537,06 − (−7,429) = <b>−3.529,63 kJ/mol</b>.',
   sol: '<b>a) La fórmula molecular sale de los moles de cada producto.</b><br>n(CO<sub>2</sub>) = 220 / 44,01 = <b>5,0 mol</b> ⟹ todos esos C venían del combustible ⟹ <b>5 átomos de C</b> por molécula (era 1 mol de combustible).<br>n(H<sub>2</sub>O) = 108 / 18,02 = <b>6,0 mol</b> ⟹ cada H<sub>2</sub>O lleva 2 H ⟹ 12 mol de H ⟹ <b>12 átomos de H</b>.<br>Fórmula molecular: <b>C<sub>5</sub>H<sub>12</sub></b>, M = 72,15 g/mol. Sustancia posible: <b>n-pentano</b>, CH<sub>3</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>2</sub>−CH<sub>3</sub>. La justificación que pide el enunciado, en un renglón: <i>es líquido a 25 °C (punto de ebullición 36 °C) y sólo tiene C e H, como exige la consigna</i>. Ojo: como sólo hay C y H, <b>no hace falta cerrar el balance de O</b>. Si el compuesto tuviera oxígeno, el O de los productos no cuadraría con el O<sub>2</sub> consumido y habría que despejarlo.<br>Ecuación termoquímica, con el combustible en coeficiente 1 y <b>líquido</b>:<br>C<sub>5</sub>H<sub>12</sub>(l) + 8 O<sub>2</sub>(g) → 5 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l) &nbsp; ΔH°<sub>c</sub> = −3.537,06 kJ<br><span class="muted">Chequeo del O: izquierda 16 O; derecha 5·2 + 6·1 = 16 ✔</span><br><br><b>b) La sumatoria, despejando el reactivo en vez del producto.</b> Partís de la misma fórmula de siempre y despejás lo que no sabés:<br>ΔH°<sub>c</sub> = [5·ΔH°<sub>f</sub>(CO<sub>2</sub>) + 6·ΔH°<sub>f</sub>(H<sub>2</sub>O,l)] − [ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>) + 8·<b>0</b>]<br>−3.537,06 = [5·(−393,5) + 6·(−286,0)] − ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>) = (−1.967,5 − 1.716) − ΔH°<sub>f</sub><br>−3.537,06 = −3.683,5 − ΔH°<sub>f</sub> ⟹ <b>ΔH°<sub>f</sub>(C<sub>5</sub>H<sub>12</sub>, l) = −3.683,5 + 3.537,06 = −146,44 kJ/mol</b><br>Control: da <b>negativo y chico</b> comparado con el ΔH°<sub>c</sub>. Los hidrocarburos livianos tienen ΔH°<sub>f</sub> de dos cifras (−84,7 el etano, −103,85 el propano, −74,8 el metano) y ésta encaja en la serie. Si te hubiera dado <b>+146,44</b>, te olvidaste de que el combustible está del lado de los <b>reactivos</b> y va restando.<br><br><b>c) El ΔU, que es el ítem del que se trata todo esto.</b><br>ΔU = ΔH − Δn<sub>gases</sub>·R·T &nbsp;<span class="muted">(sale de ΔH = ΔU + Δ(PV) y de PV = nRT a T constante)</span><br>Δn<sub>gases</sub> = (5 mol CO<sub>2</sub>) − (8 mol O<sub>2</sub>) = <b>−3 mol</b>. <b>El C<sub>5</sub>H<sub>12</sub>(l) no cuenta y las 6 H<sub>2</sub>O(l) tampoco</b>: son fases condensadas y su ΔV se desestima (hipótesis explícita de T10B).<br>Δn·R·T = (−3)·8,31·298 = −7.429,1 J = <b>−7,429 kJ</b><br>ΔU = −3.537,06 − (−7,429) = <b>−3.529,63 kJ/mol</b><br><b>La justificación que pide el enunciado</b>, en dos renglones: <i>el ΔH tabulado es el calor a presión constante; a volumen constante el sistema no intercambia trabajo de expansión, y como en la combustión el número de moles gaseosos disminuye, el entorno comprime al sistema y le entrega W = +7,43 kJ. Ese trabajo entra al sistema, así que el calor liberado a V constante es en módulo algo menor que a P constante: |ΔU| &lt; |ΔH|.</i><br><br><b>Por qué este ítem se cobra tanto siendo tan chico el número.</b> 7,43 kJ sobre 3.537 kJ es un <b>0,21 %</b>: si contestás “ΔU ≈ ΔH” te da casi igual, pero el ítem se corrige por el <b>procedimiento</b>, que hayas identificado Δn contando sólo gases, que hayas convertido J a kJ, y que hayas explicado el signo. Los tres errores clásicos acá son: contar las 6 H<sub>2</sub>O(l) y sacar Δn = +3 (te da ΔU = −3.544,5, con el signo de la corrección invertido); sumar en vez de restar; y dejar el término en joules sumándolo a kilojoules, que te destruye el resultado por tres órdenes de magnitud.'},

  {st: '<b>Evaluación integradora · Química Básica CB040 · 11/07/24 · Ejercicio 2</b> <span class="muted">(textual; el único ejercicio de espontaneidad con número de todos los exámenes)</span><br><br>“<i>Se prepara una mezcla con 20 g de Fe<sub>2</sub>O<sub>3</sub> y un exceso de aluminio metálico. Cuando se inflama la mezcla, se produce, con gran desprendimiento de calor, la reacción: Fe<sub>2</sub>O<sub>3</sub>(s) + 2 Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) + 2 Fe(s). La entalpía de formación, en condiciones estándar, del Al<sub>2</sub>O<sub>3</sub>(s) es de -1.668 kJ/mol y la del Fe<sub>2</sub>O<sub>3</sub>(s) es de - 821 kJ/mol. a) Calcular los gramos de hierro y de óxido de aluminio que pueden obtenerse tras la reacción. b) Escribir la ecuación termoquímica y calcular la cantidad de calor desprendida en la reacción. c) Si se sabe que ΔS reacción = ‒38,52 J*mol‒1*K‒1, explique y justifique si existiría alguna temperatura para la cual la reacción no sea espontánea</i>”<br><br><i>R = 8,31 J/mol.K</i>',
   ans: '<b>a)</b> n(Fe<sub>2</sub>O<sub>3</sub>) = 0,1252 mol ⟹ <b>14,0 g de Fe</b> y <b>12,8 g de Al<sub>2</sub>O<sub>3</sub></b>. <b>b)</b> ΔH°<sub>r</sub> = −1.668 − (−821) = <b>−847 kJ</b> por mol de Fe<sub>2</sub>O<sub>3</sub>; para 20 g se desprenden <b>106,1 kJ</b>. <b>c)</b> Sí, matemáticamente: ΔH y ΔS son <b>ambos negativos</b>, así que ΔG se vuelve positivo por encima de <b>T = ΔH/ΔS = 21.989 K</b>. Pero esa temperatura es <b>físicamente inalcanzable</b>, así que en la práctica la reacción es espontánea a cualquier temperatura: por eso la termita se usa para soldar rieles.',
   sol: '<b>a) Estequiometría simple, con el aluminio en exceso.</b> El reactivo limitante es el Fe<sub>2</sub>O<sub>3</sub> porque el Al está declarado en exceso: no hay que compararlos.<br>M(Fe<sub>2</sub>O<sub>3</sub>) = 2·55,85 + 3·16,00 = <b>159,70 g/mol</b> → n = 20 / 159,70 = <b>0,1252 mol</b><br>m(Fe) = 2 · 0,1252 · 55,85 = <b>13,99 g ≈ 14,0 g</b> &nbsp;<span class="muted">(la relación es 2 Fe por cada Fe<sub>2</sub>O<sub>3</sub>)</span><br>m(Al<sub>2</sub>O<sub>3</sub>) = 0,1252 · 101,96 = <b>12,77 g ≈ 12,8 g</b><br><br><b>b) Ecuación termoquímica y calor real.</b> Todos los ΔH°<sub>f</sub> de <b>elementos</b> valen cero (Al(s) y Fe(s) son las formas más estables), así que la sumatoria se reduce a dos términos:<br>ΔH°<sub>r</sub> = [ΔH°<sub>f</sub>(Al<sub>2</sub>O<sub>3</sub>) + 2·0] − [ΔH°<sub>f</sub>(Fe<sub>2</sub>O<sub>3</sub>) + 2·0] = (−1.668) − (−821) = <b>−847 kJ</b><br>Fe<sub>2</sub>O<sub>3</sub>(s) + 2 Al(s) → Al<sub>2</sub>O<sub>3</sub>(s) + 2 Fe(s) &nbsp; ΔH°<sub>r</sub> = −847 kJ<br>Ese −847 es <b>por mol de Fe<sub>2</sub>O<sub>3</sub></b>, no por los 20 g. El calor efectivamente desprendido:<br>Q = 0,1252 mol · 847 kJ/mol = <b>106,1 kJ desprendidos</b> <span class="muted">(ΔH = −106,1 kJ para esta cantidad)</span><br>Contestá “se desprenden 106,1 kJ” y no “−847 kJ”: la pregunta es por la mezcla real. → Δn<sub>gases</sub> = <b>0</b> (todo sólido) ⟹ acá <b>ΔH = ΔU exactamente</b> y W = 0. Vale la pena decirlo, es medio renglón.<br><br><b>c) La temperatura de cruce, y por qué el número absurdo es parte de la respuesta.</b><br>ΔG = ΔH − T·ΔS, con <b>ΔH = −847 kJ</b> (negativo) y <b>ΔS = −38,52 J/(mol·K)</b> (también negativo). Signos <b>coincidentes</b> ⟹ estamos en el caso “espontánea en frío, deja de serlo al calentar”: el término −T·ΔS es <b>positivo</b> y crece con T hasta superar al ΔH.<br>Haciendo ΔG = 0: <b>T<sub>cruce</sub> = ΔH / ΔS</b>. Y acá está la trampa de unidades, que es lo que se cobra:<br>T = (−847 · <b>1.000</b> J) / (−38,52 J/K) = <b>21.989 K</b><br>Si te olvidás de pasar los kJ a J te da <b>21,99 K</b>, mil veces menos, y contestás exactamente lo contrario: que la reacción no es espontánea a temperatura ambiente. Es el error más caro del ítem.<br>Comprobación por los extremos: a 298 K, ΔG = −847 − 298·(−0,03852) = <b>−835,5 kJ</b> (muy espontánea); a 2.000 K, ΔG = <b>−770,0 kJ</b> (todavía espontánea); a 25.000 K, ΔG = <b>+116 kJ</b> (ya no).<br><br><b>La respuesta escrita, que es lo que pide “explique y justifique”.</b> “<i>Sí, existe: como ΔH &lt; 0 y ΔS &lt; 0, ΔG = ΔH − TΔS se hace positivo para T &gt; ΔH/ΔS = 21.989 K. Ahora bien, 21.989 K está muy por encima de cualquier temperatura alcanzable (la termita arde a unos 2.500 °C, un orden de magnitud por debajo), de modo que en todo rango real de trabajo ΔG &lt; 0 y la reacción es espontánea. La respuesta es afirmativa en el papel y negativa en la práctica, y hay que decir las dos cosas.</i>” → No tachés el resultado por absurdo: el ítem premia que lo calcules <b>y</b> que lo interpretes. → Y no confundas espontánea con violenta: que la termita libere 847 kJ/mol y arranque sola no es lo mismo que ser rápida. Eso lo decide la cinética, no el ΔG.'},

  {st: '<b>2do Recuperatorio · Química Básica CB040 · 6/12/2024 · Ejercicio 2 (30 pts: a = 6, b = 12, c = 12)</b> <span class="muted">(textual)</span><br><br>“<i>La reacción en fase gaseosa CO(g) + H<sub>2</sub>O(g) → CO<sub>2</sub>(g) + H<sub>2</sub>(g) se efectúa a temperatura constante y presión constante de 1 atm. Cuando se forman 200 moles de hidrógeno gaseoso el calor liberado es 8232 kJ. Se pide: a) escribir la ecuación termoquímica correspondiente; b) Con los datos de que dispone, determinar la entalpía de combustión estándar del monóxido de carbono y escribir su ecuación termoquímica; c) calcular los kilos de vapores de etanol a 78°C (pto de ebullición del etanol) y 1atm que se pueden obtener si se logra transferir el 70% del calor producido por la reacción del enunciado a etanol líquido que se halla a 25°C y 1atm.</i>”<br><br><i>Datos: ΔH°<sub>f</sub>_H<sub>2</sub>O(g) = -241,82 kJ/mol; ΔH°<sub>f</sub>_CO<sub>2</sub>(g) = -393,51 kJ/mol; ΔH<sub>vap</sub>_C<sub>2</sub>H<sub>6</sub>O = 43,5 kJ/mol; Cp<sub>C2H6O(l)</sub> = 0,112 kJ/mol.°C</i>',
   ans: '<b>a)</b> CO(g) + H<sub>2</sub>O(g) → CO<sub>2</sub>(g) + H<sub>2</sub>(g) &nbsp; ΔH°<sub>r</sub> = <b>−41,16 kJ</b> (por mol de reacción). <b>b)</b> Por Hess, sumando la del enunciado con la formación del H<sub>2</sub>O(g): CO(g) + ½ O<sub>2</sub>(g) → CO<sub>2</sub>(g), ΔH°<sub>c</sub> = <b>−282,98 kJ/mol</b>. <b>c)</b> Q<sub>útil</sub> = 5.762,4 kJ; cada mol de etanol pide 49,436 kJ ⟹ 116,56 mol ⟹ <b>5,37 kg de vapor de etanol</b>.',
   sol: '<b>a) El ΔH por mol de reacción, no los 8.232 kJ (6 pts).</b> La ecuación está balanceada con coeficiente 1 en el H<sub>2</sub>, así que el ΔH que va al costado es el de <b>1 mol</b> de H<sub>2</sub> formado:<br>ΔH°<sub>r</sub> = −8.232 kJ / 200 mol = <b>−41,16 kJ/mol</b><br>CO(g) + H<sub>2</sub>O(g) → CO<sub>2</sub>(g) + H<sub>2</sub>(g) &nbsp; ΔH°<sub>r</sub> = −41,16 kJ<br>Signo <b>negativo</b>: el enunciado dice “calor liberado”. Poner +8.232 al costado de la ecuación es el error que se lleva los 6 puntos enteros.<br><br><b>b) Hess en dos renglones (12 pts).</b> Objetivo: la combustión del CO, o sea CO(g) + ½ O<sub>2</sub>(g) → CO<sub>2</sub>(g).<br>Ecuación 1 (la del enunciado): CO(g) + H<sub>2</sub>O(g) → CO<sub>2</sub>(g) + H<sub>2</sub>(g) &nbsp; ΔH = −41,16 kJ<br>Ecuación 2 (la formación del agua gaseosa, que es el dato): H<sub>2</sub>(g) + ½ O<sub>2</sub>(g) → H<sub>2</sub>O(g) &nbsp; ΔH = −241,82 kJ<br>Sumando <b>tal como están</b>: el H<sub>2</sub>O(g) aparece a la izquierda en la 1 y a la derecha en la 2 ⟹ se cancela; el H<sub>2</sub> aparece a la derecha en la 1 y a la izquierda en la 2 ⟹ se cancela. Queda:<br><b>CO(g) + ½ O<sub>2</sub>(g) → CO<sub>2</sub>(g) &nbsp; ΔH°<sub>c</sub> = −41,16 + (−241,82) = −282,98 kJ/mol</b><br>Acá no hubo que invertir ni multiplicar nada: entraron derechas. El camino largo (despejar primero ΔH°<sub>f</sub>(CO) = −393,51 − (−282,98) = <b>−110,53 kJ/mol</b> y después armar la combustión) llega al mismo lado y cuesta el doble. → <b>Control cruzado gratis:</b> el 1er Recuperatorio del 14/06/24 da como dato ΔH°<sub>f</sub>(CO(g)) = −110.500 J/mol. Los datos de la cátedra son consistentes entre exámenes, y ese −110,53 que te sale acá lo confirma.<br><br><b>c) Calorimetría con cambio de fase, esta vez con etanol (12 pts).</b> Mismo procedimiento que con agua, con dos diferencias que hay que ver: el <b>Cp ya viene en kJ</b> (0,112 kJ/mol·°C, no hay que dividir por mil) y hay <b>un solo tramo sensible</b> más la meseta.<br>Q disponible = 0,70 · 8.232 = <b>5.762,4 kJ</b> &nbsp;<span class="muted">(el 70 % se aplica al calor de la reacción, antes de nada)</span><br>q por mol de etanol = Cp·ΔT + ΔH<sub>vap</sub> = 0,112 · (78 − 25) + 43,5 = 5,936 + 43,5 = <b>49,436 kJ/mol</b><br>n(etanol) = 5.762,4 / 49,436 = <b>116,56 mol</b><br>m = 116,56 · 46,07 g/mol = 5.370 g = <b>5,37 kg de vapores de etanol</b><br><b>Los dos errores que matan el ítem:</b> → saltear el calor sensible de 25 a 78 °C y hacer n = 5.762,4/43,5 = 132,5 mol → 6,10 kg, un <b>14 % de más</b> (el mismo error que en el secadero); → dividir el Cp por 1.000 “por costumbre” cuando <b>ya está en kJ</b>, con lo que el término sensible desaparece y volvés al mismo 6,10 kg. Leé la unidad del dato antes de convertir nada.<br>Control: el enunciado pide “los kilos de <b>vapores</b>”, o sea etanol que llegó a vaporizarse; como no hay tope de masa (el etanol líquido disponible no está limitado), acá no hay que comparar contra acumulados. Es el caso inverso al del 27/06/25, donde la masa estaba fijada y lo que se buscaba era hasta dónde llegaba el calor.'},

{st: "<b>Química General (CB103) · Avanzado · Hielo con agua caliente: ¿se derrite todo?</b> En un calorímetro adiabático de capacidad despreciable se hacen dos experimentos distintos. a) Se mezclan 20,0 g de hielo a 0 °C con 120,0 g de agua a 60 °C. b) Se mezclan 150,0 g de hielo a 0 °C con 100,0 g de agua a 50 °C. En cada caso, ¿cuál es la temperatura final y qué hay al terminar? Datos: c del agua líquida = 4,184 J/(g·K); calor de fusión del hielo = 80 cal/g = 334,7 J/g.",
 ans: "a) <b>40,0 °C</b>, todo agua líquida (140,0 g). b) <b>0 °C</b>, con <b>87,5 g de hielo y 162,5 g de agua</b> en equilibrio.",
 sol: "<b>Paso 1 · no sé cómo termina, así que comparo calores.</b> En el caso a), el agua caliente puede ceder, al enfriarse hasta 0 °C, 120,0 × 4,184 × 60 = 30.125 J. Fundir todo el hielo necesita 20,0 × 334,7 = 6.694 J. → <b>Paso 2 · decidir.</b> 30.125 &gt; 6.694: el agua cede de sobra, <b>todo el hielo funde</b> y la temperatura final es mayor que 0 °C. → <b>Paso 3 · ΣQ<sub>i</sub> = 0 con la fusión incluida (caso a).</b> El hielo gana el calor de fusión y después calienta sus 20,0 g de agua desde 0 °C hasta t<sub>f</sub>; el agua caliente se enfría desde 60 °C: 6.694 + 20,0 × 4,184 × t<sub>f</sub> + 120,0 × 4,184 × (t<sub>f</sub> − 60) = 0 → 6.694 + 585,76·t<sub>f</sub> − 30.124,8 = 0 → t<sub>f</sub> = 23.430,8 / 585,76 = <b>40,0 °C</b>. → <b>Paso 4 · caso b), comparar.</b> El agua caliente puede ceder 100,0 × 4,184 × 50 = 20.920 J. Fundir los 150,0 g de hielo necesita 150,0 × 334,7 = 50.205 J. → <b>Paso 5 · decidir.</b> 20.920 &lt; 50.205: <b>no alcanza</b> para fundir todo. Mientras quede hielo la temperatura es 0 °C. → <b>Paso 6 · cuánto funde.</b> Todo el calor cedido se gasta en fundir: m = 20.920 / 334,7 = 62,5 g. Quedan 150,0 − 62,5 = <b>87,5 g de hielo</b> y 100,0 + 62,5 = <b>162,5 g de agua</b>, a 0 °C. → <b>Control.</b> a) 40,0 °C queda entre 0 y 60. b) La masa total se conserva (87,5 + 162,5 = 250,0 g) y la fracción que fundió (62,5 de 150,0) está entre 0 y 100 %. → <b>Error típico:</b> aplicar de entrada la fórmula del promedio ponderado e ignorar la fusión: en a) daría 51,4 °C y en b) 20 °C, y las dos están mal porque el hielo antes de calentarse tiene que fundir. En b) además es una señal de alarma, porque 20 °C es imposible si todavía queda hielo."}

]);


registerExercises('fiuba-quimica', '10', [

  {st: 'Un gas encerrado en un cilindro con pistón <b>se expande</b> contra una presión externa constante mientras <b>absorbe 500 J de calor</b> del entorno. El trabajo intercambiado con el entorno vale <b>200 J en módulo</b>. Con la convención de esta cátedra (T10A: ΔU = Q + W, “todo lo que entra al sistema es positivo”), ¿cuánto vale ΔU?',
   opts: ['ΔU = +700 J', 'ΔU = −300 J', 'ΔU = −700 J', 'ΔU = +300 J'],
   c: 3,
   ex: '<b>+300 J.</b> El gas <b>se expande</b> ⟹ el sistema hace trabajo sobre el entorno ⟹ el trabajo <b>sale</b> del sistema ⟹ <b>W = −200 J</b>. Absorbe calor ⟹ <b>Q = +500 J</b>. ΔU = 500 + (−200) = <b>+300 J</b>. → <b>+700 J</b> es el resultado de usar ΔU = Q − W con W = −200, o de darle signo positivo al trabajo de expansión: es el error de importar la convención de otro libro. Media biblioteca escribe ΔU = Q − W definiendo W como el trabajo <b>hecho por</b> el sistema; con esa convención el número también da +300, pero hay que poner W = +200. Lo que no se puede es mezclar las dos. → <b>−300 J</b> invierte los dos signos. → <b>−700 J</b> hace las dos cosas mal. → Regla operativa: escribí “uso ΔU = Q + W, todo lo que entra es positivo” arriba de la hoja antes de la primera cuenta. Con la convención declarada, un signo discutible se defiende; sin declararla, no.'},

  {st: 'La combustión completa del butano se escribe C<sub>4</sub>H<sub>10</sub>(g) + 13/2 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 5 H<sub>2</sub>O(l). ¿Cuánto vale Δn<sub>gases</sub>?',
   opts: ['Δn = −3,5', 'Δn = +1,5', 'Δn = +1', 'Δn = 0, porque hay gases en los dos lados'],
   c: 0,
   ex: "<b>Δn = −3,5.</b> Δn cuenta <b>solamente las especies gaseosas</b>: productos gaseosos 4 (los 5 H<sub>2</sub>O son <b>líquidos</b>), reactivos gaseosos 1 + 6,5 = 7,5. Δn = 4 − 7,5 = <b>−3,5</b>. → <b>+1,5</b> es exactamente lo que te da si contás el agua líquida como gas: (4 + 5) − 7,5 = +1,5. Es el error más frecuente del tema y además <b>cambia el signo</b>, así que arrastra el signo del trabajo y el de la corrección de ΔU. → <b>+1</b> no corresponde a ninguna lectura correcta de la ecuación: ni a los gases solos (−3,5) ni al agua contada como gas (+1,5). → La de <b>“Δn = 0, porque hay gases en los dos lados”</b> es un no-argumento: Δn no pregunta si hay gases, pregunta cuántos moles gaseosos aparecen menos cuántos desaparecen. → Regla: en <b>toda</b> combustión completa de un hidrocarburo con agua líquida como producto, Δn sale <b>negativo</b>, porque el O<sub>2</sub> que entra es más que el CO<sub>2</sub> que sale."},

  {st: 'Para esa misma combustión del butano a P y T constantes, con T = 298 K y R = 8,31 J/mol·K, el trabajo vale <b>W = +8.667 J</b>. ¿Qué significa ese signo con la convención de la cátedra?',
   opts: ['El sistema realiza trabajo sobre el entorno, porque se expande', 'El entorno realiza trabajo sobre el sistema, porque el sistema se comprime', 'El sistema absorbe 8.667 J de calor del entorno', 'El signo es arbitrario: sólo importa el módulo'],
   c: 1,
   ex: "<b>El entorno trabaja sobre el sistema.</b> W = −Δn·R·T = −(−3,5)·8,31·298 = <b>+8.667 J</b>. En la “convención egoísta” de T10A, <b>todo lo que entra al sistema es positivo</b>, así que W &gt; 0 es trabajo <b>que recibe</b> el sistema. Físicamente: desaparecen 7,5 moles de gas y aparecen 4, el volumen gaseoso cae, y la atmósfera empuja el pistón hacia adentro. → La de <b>“el sistema realiza trabajo sobre el entorno”</b> es la lectura opuesta y es la que sale automáticamente si venís de un libro con ΔU = Q − W. → La de <b>“el sistema absorbe 8.667 J de calor”</b> confunde <b>W con Q</b>: son intercambios distintos, y de hecho acá el Q es del orden de los 2,9 millones de joules. → La de <b>“el signo es arbitrario”</b> es falsa y cara: el ítem b de los tres parciales de curso pide <b>exactamente</b> “indique si el sistema realiza trabajo sobre el entorno o el entorno sobre el sistema”, y el del 30/05/25 pide calcular el trabajo de expansión y definir su signo. El módulo no contesta esa pregunta."},

  {st: 'Si esa misma combustión del butano se escribiera con el agua como <b>vapor</b> (C<sub>4</sub>H<sub>10</sub>(g) + 13/2 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 5 H<sub>2</sub>O(g)), ¿qué le pasa al trabajo, a 298 K?',
   opts: ['Pasa de +8.667 J a −3.715 J: cambia de signo', 'No cambia: el trabajo depende de la reacción, no de cómo se escriba', 'Se anula, porque el número de moléculas es el mismo de los dos lados', 'Pasa de +8.667 J a +3.715 J: baja el módulo pero conserva el signo'], c: 0,
   ex: '<b>Cambia de signo: W = −3.715 J.</b> Con H<sub>2</sub>O(g) los cinco moles de agua <b>sí cuentan</b>: Δn = (4 + 5) − 7,5 = <b>+1,5</b> ⟹ W = −1,5·8,31·298 = <b>−3.715 J</b>. Negativo: ahora el sistema <b>se expande</b> y le entrega trabajo al entorno. → “<b>No cambia</b>” confunde “cómo se escribe” con “qué se escribe”: no es la misma reacción, porque el estado final del agua es distinto y por eso también cambia el ΔH (es la diferencia entre poder calorífico <b>superior</b> e <b>inferior</b>). → “<b>+3.715 J</b>” conserva el signo, que es justo lo que no pasa. → “<b>Se anula</b>” cuenta moléculas totales sin mirar el estado de agregación: 9 contra 7,5 no son iguales, y aunque lo fueran, lo que manda son los <b>moles gaseosos</b>. → Moraleja para el examen: antes de calcular Δn, mirá el <b>(l)</b> o el <b>(g)</b> del agua. Ese paréntesis decide el signo del trabajo.'},

  {st: 'Un enunciado dice “se miden 60 L de gas <b>en CNPT</b>” y otro dice “la reacción ocurre <b>en condiciones estándar</b>, 25 °C”. ¿Cuál de las dos afirmaciones es correcta?',
   opts: ['Son sinónimos: los dos significan 1 atm y 25 °C', 'CNPT es 1 atm y 0 °C, y ahí el volumen molar es 22,4 L; el estado estándar fija P = 1 atm pero no fija la temperatura', 'CNPT es 1 atm y 25 °C, y el estado estándar es 1 atm y 0 °C', 'Los dos usan volumen molar 22,4 L/mol, así que da lo mismo'], c: 1,
   ex: "<b>CNPT = 1 atm y 0 °C; estado estándar = 1 atm, T no especificada</b> (se reporta casi siempre a 25 °C). T10B lo escribe con signos de admiración porque es un clásico. → El volumen molar de <b>22,4 L/mol</b> vale <b>sólo en CNPT</b>. A 25 °C y 1 atm, V = R·T/P = 0,0821·298/1 = <b>24,47 L/mol</b>. Usar 22,4 a 25 °C te da un volumen <b>8,4 % chico</b>, y en un ejercicio de estequiometría con gases eso arruina el resultado. → La que dice que son <b>sinónimos</b> y la que pone <b>CNPT a 25 °C y el estándar a 0 °C</b> confunden las dos definiciones (la del CNPT a 25 °C además las cruza). → La de <b>“los dos usan volumen molar 22,4 L/mol”</b> es el error operativo concreto: no hay un volumen molar universal, hay uno por cada par (P, T). → Dónde aparece: el Ejercicio 1 del 30/05/25 da 60 L de gas “medidos en CNPT” y el del 27/06/25 pide el volumen del gas en condiciones normales de presión y temperatura, mientras que todos los ΔH°<sub>f</sub> tabulados son estándar a 25 °C. Los dos convenios conviven en el mismo examen."},

  {st: '¿En cuál de estas reacciones se cumple <b>ΔH = ΔU exactamente</b> (sin ninguna corrección)?',
   opts: ['CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l)', 'N<sub>2</sub>O<sub>4</sub>(g) → 2 NO<sub>2</sub>(g)', '2 H<sub>2</sub>(g) + O<sub>2</sub>(g) → 2 H<sub>2</sub>O(l)', 'C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g)'], c: 3,
   ex: '<b>C(s) + O<sub>2</sub>(g) → CO<sub>2</sub>(g).</b> ΔU = ΔH − Δn<sub>gases</sub>·R·T, y acá Δn = 1 − 1 = <b>0</b> (el carbono es <b>sólido</b> y no entra en la cuenta) ⟹ el término correctivo se anula y <b>ΔH = ΔU exactamente</b>, para cualquier T. Por eso el carbón es el único combustible de los exámenes con ΔH y ΔU idénticos. → El metano tiene Δn = 1 − 3 = <b>−2</b>. → El N<sub>2</sub>O<sub>4</sub> tiene Δn = 2 − 1 = <b>+1</b>. → La combustión del H<sub>2</sub> tiene Δn = 0 − 3 = <b>−3</b> (el agua es líquida y no cuenta, así que no quedan gases del lado de los productos). → Nota conceptual que el examen usa: ΔH es Q a <b>presión constante</b> (recipiente abierto), ΔU es Q a <b>volumen constante</b> (bomba calorimétrica). Si un enunciado dice “recipiente rígido”, el calor que te dan es ΔU y hay que convertir; los datos tabulados de combustión son siempre ΔH.'},

  {st: 'Se calientan <b>5 moles de agua líquida</b> desde 20 °C hasta 100 °C y después se los vaporiza por completo, a 1 atm. Datos: Cp(H<sub>2</sub>O, l) = 75,3 <b>J</b>/(mol·K); ΔH<sub>vap</sub> = 40,7 <b>kJ</b>/mol. ¿Cuánto calor hace falta?',
   opts: ['30,32 kJ', '203,5 kJ', '30.323,5 kJ', '233,62 kJ'],
   c: 3,
   ex: '<b>233,62 kJ.</b> Sensible: 5 · 75,3 · 80 = 30.120 J = <b>30,12 kJ</b>. Latente: 5 · 40,7 = <b>203,5 kJ</b>. Total = <b>233,62 kJ</b>. → <b>30,32 kJ</b> es el resultado clásico de sumar crudo <b>30.120 J + 203,5 kJ</b> tratando los dos números como si tuvieran la misma unidad: 30.323,5 “unidades” que después uno llama kJ. Error de <b>tres órdenes de magnitud</b> en el término latente. → <b>203,5 kJ</b> es olvidarse del calor sensible, el error del secadero: se come un 13 % del total y aparece en los tres parciales de curso, en el 6/12/24 y en el 27/06/25. → <b>30.323,5 kJ</b> es el mismo error de unidades pero al revés. → Regla de trabajo: <b>elegí una unidad al principio</b> (kJ, casi siempre) y convertí todos los Cp apenas los copiás del enunciado. No dejes la conversión para el final.'},

  {st: '¿Cuál de estas es una <b>ecuación termoquímica</b> bien escrita para la combustión de <b>1 mol</b> de etanol, según la definición de T10B?',
   opts: ['C<sub>2</sub>H<sub>5</sub>OH + 3 O<sub>2</sub> → 2 CO<sub>2</sub> + 3 H<sub>2</sub>O &nbsp; ΔH = −1.367,4 kJ', 'C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l) &nbsp; ΔH = −1.367,4 kJ', 'C<sub>2</sub>H<sub>5</sub>OH(l) + 3 O<sub>2</sub>(g) → 2 CO<sub>2</sub>(g) + 3 H<sub>2</sub>O(l)', '2 C<sub>2</sub>H<sub>5</sub>OH(l) + 6 O<sub>2</sub>(g) → 4 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l) &nbsp; ΔH°<sub>c</sub> = −1.367,4 kJ/mol'],
   c: 1,
   ex: "<b>La que trae los estados de agregación y el ΔH, con 1 mol de etanol.</b> T10B define ecuación termoquímica como “una ecuación química balanceada, <b>con su valor de ΔH y especificando los estados físicos de todas las especies</b>”. Las tres condiciones juntas. → La que escribe las especies a secas está balanceada y trae el ΔH pero <b>no tiene estados de agregación</b>: sin los (l) y los (g) el ΔH es ambiguo (con H<sub>2</sub>O(g) el valor sería otro) y el ítem no vale aunque el número esté bien. Es puntaje regalado y aparece en el ítem a de casi todos los Ejercicio 2 de los exámenes. → La que se queda en la ecuación química tiene los estados pero <b>le falta el ΔH</b>: es una ecuación química común. → La de <b>2 C<sub>2</sub>H<sub>5</sub>OH(l) + 6 O<sub>2</sub>(g)</b> tiene todo pero está <b>mal escrita como entalpía de combustión</b>: si duplicás los coeficientes, el ΔH se duplica (la entalpía es <b>extensiva</b>), así que ahí debería decir −2.734,8 kJ. La ΔH°<sub>c</sub> está definida <b>por mol de sustancia que se quema</b>, o sea con coeficiente <b>1</b> en el combustible. Es lo mismo que pasa con el 13/2 del butano: la fracción es fea pero es la correcta."},

  {st: '¿Cuál de estas entalpías estándar de formación <b>NO</b> vale cero a 25 °C?',
   opts: ['ΔH°<sub>f</sub> del C(diamante)', 'ΔH°<sub>f</sub> del O<sub>2</sub>(g)', 'ΔH°<sub>f</sub> del Br<sub>2</sub>(l)', 'ΔH°<sub>f</sub> del Na(s)'],
   c: 0,
   ex: '<b>El diamante.</b> La ΔH°<sub>f</sub> vale cero para un elemento <b>en su forma más estable</b> a 25 °C y 1 atm. Para el carbono esa forma es el <b>grafito</b>, no el diamante: T10B da el dato, ΔH°<sub>f</sub>(C, diamante) = <b>+1,9 kJ/mol</b>. → El O<sub>2</sub>(g), el Br<sub>2</sub>(l) y el Na(s) son las formas estables de sus elementos en esas condiciones, y por eso valen 0. Ojo con el bromo: es de los pocos elementos <b>líquidos</b> a temperatura ambiente y a veces se lo descarta por eso, pero el estado no importa. Importa que sea la forma más estable. → Por qué esto se cobra: en la sumatoria ΔH°<sub>r</sub> = Σn·ΔH°<sub>f</sub>(prod) − Σn·ΔH°<sub>f</sub>(react), los ceros de los elementos hacen desaparecer términos enteros. Escribí el “+ 3,5·0” del O<sub>2</sub> en la hoja: el corrector quiere ver que sabés por qué se anula, no que lo omitiste por olvido. → Contraste importante con la entropía: <b>S° de un elemento NO es cero</b>. S°(O<sub>2</sub>, g) = 205,14 J/mol·K. Los ceros son de las entalpías, no de las entropías.'},

  {st: 'Datos: ΔH°<sub>c</sub>(C, grafito) = −393,5 kJ/mol y ΔH°<sub>c</sub>(CO, g) = −283,0 kJ/mol. ¿Cuánto vale ΔH°<sub>f</sub>(CO, g)?',
   opts: ['−676,5 kJ/mol', '+110,5 kJ/mol', '−110,5 kJ/mol', 'No se puede: falta la ΔH°<sub>f</sub> del CO<sub>2</sub>'],
   c: 2,
   ex: "<b>−110,5 kJ/mol.</b> La formación del CO es C(s) + ½ O<sub>2</sub>(g) → CO(g). Armala por Hess: tomá la combustión del grafito <b>tal cual</b> [C(s) + O<sub>2</sub> → CO<sub>2</sub>, −393,5] e <b>invertí</b> la del CO [CO<sub>2</sub> → CO + ½ O<sub>2</sub>, <b>+283,0</b>]. Sumando se cancela el CO<sub>2</sub> y queda C(s) + ½ O<sub>2</sub> → CO(g), con ΔH = −393,5 + 283,0 = <b>−110,5 kJ/mol</b>. → <b>−676,5</b> es sumar los dos datos sin invertir ninguno: es el error de no mirar de qué lado tiene que quedar cada especie. → <b>+110,5</b> invierte la ecuación de más. → La de <b>“no se puede”</b> parece prudente pero es falsa: la ΔH°<sub>c</sub> del grafito <b>es</b> la ΔH°<sub>f</sub> del CO<sub>2</sub>, porque la ecuación de combustión del grafito y la de formación del CO<sub>2</sub> son literalmente la misma. Reconocer eso es medio ejercicio. → El número cierra con los exámenes: el 2do Recuperatorio del 6/12/24 lleva al mismo −110,53 kJ/mol y el 1er Recuperatorio del 14/06/24 lo da como dato, −110.500 J/mol."},

  {st: 'Un examen te da <b>ΔH°<sub>c</sub>(etanol) = −1.367,4 kJ/mol</b>, ΔH°<sub>f</sub>(CO<sub>2</sub>, g) = −393,5 y ΔH°<sub>f</sub>(H<sub>2</sub>O, l) = −285,8, y te pide la <b>entalpía de formación del etanol</b>. ¿Cuál es?',
   opts: ['−1.367,4 kJ/mol: la de combustión y la de formación son la misma', '−277,0 kJ/mol', '+277,0 kJ/mol', '−1.644,4 kJ/mol'],
   c: 1,
   ex: "<b>−277,0 kJ/mol.</b> Escribí la sumatoria y despejá el término que falta: ΔH°<sub>c</sub> = [2·(−393,5) + 3·(−285,8)] − [ΔH°<sub>f</sub>(etanol) + 3·0] ⟹ −1.367,4 = −1.644,4 − ΔH°<sub>f</sub> ⟹ ΔH°<sub>f</sub> = −1.644,4 + 1.367,4 = <b>−277,0 kJ/mol</b>. → La que dice que <b>la de combustión y la de formación son la misma</b> es el error conceptual de fondo: combustión y formación son <b>reacciones distintas</b>. La de formación arma el compuesto <b>desde sus elementos</b> (2 C(grafito) + 3 H<sub>2</sub>(g) + ½ O<sub>2</sub>(g) → C<sub>2</sub>H<sub>5</sub>OH(l)), la de combustión lo destruye con O<sub>2</sub>. Sólo coinciden en el caso especial del grafito y el CO<sub>2</sub>. → <b>+277,0</b> es olvidarse de que el combustible está del lado de los <b>reactivos</b> y por lo tanto va restando: es el error de signo más frecuente del ítem. → <b>−1.644,4</b> es la sumatoria de los productos, sin despejar nada. → Control barato: los hidrocarburos y alcoholes livianos tienen ΔH°<sub>f</sub> negativas y de <b>dos o tres cifras</b> (−74,8 el metano, −84,7 el etano, −103,85 el propano, −146,44 el pentano). Si te da −1.644, el orden de magnitud ya te está avisando. → El dato del parcial del 30/05/25 confirma la cuenta: ahí dan ΔH°<sub>f</sub>(etanol, l) = −277 kJ/mol."},

  {st: 'A igual costo <b>por mol</b>, el etano (ΔH°<sub>c</sub> = −1.560,3 kJ/mol, M = 30,07) le gana al metano (−890,7 kJ/mol, M = 16,04). Si el costo fuera igual <b>por kilogramo</b>, ¿qué pasa?',
   opts: ['Gana el metano: 55,5 kJ/g contra 51,9 kJ/g del etano', 'Sigue ganando el etano: siempre libera más calor', 'Empatan, porque el poder calorífico por gramo es el mismo para todos los hidrocarburos', 'No se puede comparar: el poder calorífico sólo se define por mol'],
   c: 0,
   ex: "<b>Gana el metano.</b> Por gramo: 890,7 / 16,04 = <b>55,53 kJ/g</b> contra 1.560,3 / 30,07 = <b>51,89 kJ/g</b>. El ranking <b>se da vuelta</b>. → La razón física: el metano es el hidrocarburo con mayor proporción de H, y el H rinde más energía por unidad de masa que el C. La serie es monótona y conviene tenerla: metano 55,53 &gt; etano 51,89 &gt; propano 50,35 &gt; butano 49,53 kJ/g. → “<b>Sigue ganando el etano</b>” confunde “más calor por mol” con “más calor”, sin decir por unidad de qué: es exactamente lo que el ítem a de los parciales de curso quiere que expliciten cuando dicen “<i>si ambos tienen igual costo <b>por mol</b> de combustible</i>”. Esa frase está puesta a propósito para fijar el criterio. → La de <b>“empatan”</b> es falsa, como muestran los cuatro números. → La de <b>“no se puede comparar”</b> también: T10B2 define poder calorífico <b>por unidad de masa, de volumen o de capacidad</b> (kcal/kg para sólidos, kcal/L para líquidos, kcal/Nm³ para gases). → Qué escribir en el examen: contestá con el criterio que fija el enunciado, y agregá un renglón diciendo que la conclusión cambiaría con otro criterio. Eso es lo que la cátedra llama justificar."},

  {st: 'Una reacción tiene ΔG° = −250 kJ a 25 °C, pero al mezclar los reactivos en un vaso <b>no se observa ningún cambio</b> ni después de una semana. ¿Qué se concluye?',
   opts: ['El ΔG° está mal calculado: con ΔG° &lt; 0 la reacción tiene que ocurrir', 'Nada contradictorio: ΔG° &lt; 0 dice que la reacción es termodinámicamente espontánea, no que sea rápida; la velocidad la decide la cinética', 'La reacción es espontánea sólo por encima de cierta temperatura', 'ΔG° &lt; 0 significa que la inversa es la espontánea'],
   c: 1,
   ex: "<b>No hay contradicción.</b> T10C lo dice explícito: los cambios espontáneos <b>no necesitan ser rápidos</b>. La termodinámica contesta “¿puede ocurrir?”; la cinética contesta “¿cuánto tarda?”. Son preguntas independientes y esta materia sólo responde la primera. → El ejemplo canónico: la conversión de diamante en grafito tiene ΔG° &lt; 0 a 25 °C y tarda tiempos geológicos; una mezcla de H<sub>2</sub> y O<sub>2</sub> a temperatura ambiente tiene ΔG° muy negativo y no pasa nada hasta que le acercás una chispa. → La de <b>“el ΔG° está mal calculado”</b> es el error puro. → La de <b>“espontánea sólo por encima de cierta temperatura”</b> inventa una condición que no está: con ΔG° = −250 kJ a 25 °C ya es espontánea ahí. → La de <b>“la inversa es la espontánea”</b> invierte el criterio: <b>ΔG &lt; 0 es la directa</b>, ΔG &gt; 0 es la inversa. → Cómo cae: es material típico de las Partes B de V/F de las evaluaciones integradoras, donde piden “justificar mediante razonamiento deductivo”. La justificación completa es una línea: <i>el signo de ΔG determina la dirección del cambio espontáneo, no su velocidad, que depende de la energía de activación y no aparece en ΔG</i>."},

  {st: 'Una reacción tiene <b>ΔS°<sub>sistema</sub> = +120 J/(mol·K)</b>. ¿Alcanza para afirmar que es espontánea?',
   opts: ['No: el criterio del segundo principio es ΔS del <b>universo</b>; con ΔS del sistema solo hace falta además el ΔH y la temperatura, vía ΔG = ΔH − TΔS', 'Sí: ΔS &gt; 0 es el criterio del segundo principio', 'Sí, pero sólo a temperaturas altas', 'No, porque el segundo principio exige ΔS &lt; 0'], c: 0,
   ex: '<b>No alcanza.</b> T10C es literal: “<i>el cambio de la entropía del sistema no constituye criterio de espontaneidad para el sistema estudiado, sólo nos indica si el mismo está más o menos ordenado</i>”. El criterio del segundo principio es <b>ΔS<sub>universo</sub> = ΔS<sub>sistema</sub> + ΔS<sub>entorno</sub> &gt; 0</b>, y el ΔS del entorno casi nunca lo podés calcular. Justamente por eso se define ΔG: para tener un criterio que use <b>sólo propiedades del sistema</b>. → Contraejemplo concreto: con ΔS = +120 J/(mol·K) pero ΔH = +200 kJ, a 298 K queda ΔG = 200 − 298·0,120 = <b>+164,2 kJ</b>, o sea <b>no espontánea</b>. Hace falta calentar por encima de 1.667 K para darla vuelta. → “<b>Sí, pero sólo a temperaturas altas</b>” es cierto <b>sólo si además ΔH &gt; 0</b>, y el enunciado no lo dice: si ΔH fuera negativo, sería espontánea a toda temperatura. → “<b>El segundo principio exige ΔS &lt; 0</b>” lo invierte directamente. → Es la pregunta 4 del bloque “2do principio” de la guía conceptual de la cátedra, casi textual.'},

  {st: '¿En cuál de estas reacciones se espera <b>ΔS° &lt; 0</b>?',
   opts: ['2 CO(g) → C(s) + CO<sub>2</sub>(g)', 'NH<sub>4</sub>Cl(s) → NH<sub>3</sub>(g) + HCl(g)', 'N<sub>2</sub>O<sub>4</sub>(g) → 2 NO<sub>2</sub>(g)', 'H<sub>2</sub>O(s) → H<sub>2</sub>O(l)'], c: 0,
   ex: '<b>2 CO(g) → C(s) + CO<sub>2</sub>(g).</b> Δn<sub>gas</sub> = 1 − 2 = <b>−1</b>: desaparece un mol de gas y aparece un sólido. Menos moles gaseosos ⟹ menos microestados accesibles ⟹ <b>ΔS &lt; 0</b>. → El NH<sub>4</sub>Cl pasa de <b>un sólido</b> a <b>dos gases</b>: Δn<sub>gas</sub> = +2, es el caso de mayor aumento de entropía de la lista. → El N<sub>2</sub>O<sub>4</sub> se parte en dos moléculas gaseosas: Δn<sub>gas</sub> = +1, ΔS &gt; 0. → La fusión del hielo también aumenta la entropía (sólido → líquido), aunque mucho menos que cualquiera de las dos anteriores: los cambios de fase mueven la S bastante menos que la aparición de moles gaseosos. → La regla operativa que sirve para no pensar de más: <b>mirá primero Δn de gases; si es distinto de cero, su signo manda sobre cualquier otra consideración</b>. Sólo si Δn<sub>gas</sub> = 0 pasás a mirar cambios de estado, disolución o número de partículas. → Sale de los ejercicios 2 y 7 de G10C.'},

  {st: 'Una reacción tiene <b>ΔH° = +178,3 kJ</b> y <b>ΔS° = +160,5 J/K</b>. ¿A partir de qué temperatura se vuelve espontánea?',
   opts: ['A partir de 1,11 K', 'Es espontánea a toda temperatura, porque ΔS &gt; 0', 'A partir de 1.110,9 K (≈ 838 °C)', 'Nunca: ΔH &gt; 0 la hace no espontánea siempre'],
   c: 2,
   ex: '<b>1.110,9 K, o sea unos 838 °C.</b> ΔH y ΔS tienen el <b>mismo signo</b> (los dos positivos) ⟹ hay temperatura de cruce. Hacé ΔG = 0: T<sub>cruce</sub> = ΔH/ΔS. Con las unidades unificadas: T = 178.300 J / 160,5 J/K = <b>1.110,9 K</b>. Por encima de esa T el término −TΔS supera al ΔH y ΔG se vuelve negativo. → <b>1,11 K</b> es el error de unidades: dividir 178,3 <b>kJ</b> por 160,5 <b>J</b>/K sin convertir. Factor 1.000 y una conclusión al revés: te haría contestar que es espontánea prácticamente siempre. Los ΔH vienen en kJ y los ΔS en J/K <b>casi sin excepción</b>: unificá antes de dividir. → “<b>Es espontánea a toda temperatura</b>” confunde ΔS con criterio de espontaneidad. → “<b>Nunca</b>” confunde ΔH con criterio: si fuera así, ninguna reacción endotérmica ocurriría nunca, y el hielo no se derretiría. → Y una advertencia de los exámenes: la T de cruce puede salir <b>físicamente absurda</b> y eso es parte de la respuesta, no un error. En el Ejercicio 2 de la evaluación integradora del 11/07/24 da <b>21.989 K</b>, y lo correcto es calcularla, decir que existe en el papel, y agregar que es inalcanzable.'},

  {st: 'Una reacción tiene <b>ΔG° = 0</b> a cierta temperatura. ¿Qué se puede afirmar?',
   opts: ['Que la reacción no ocurre: no hay cambio neto', 'Que K = 1: partiendo de reactivos puros la reacción avanza hasta una mezcla con reactivos y productos comparables', 'Que la mezcla ya está en equilibrio, cualesquiera sean las concentraciones', 'Que ΔH° = 0 y ΔS° = 0'],
   c: 1,
   ex: "<b>K = 1.</b> De ΔG°<sub>r</sub> = −R·T·ln K, si ΔG° = 0 entonces ln K = 0 y <b>K = 1</b>. La reacción <b>sí avanza</b>: lo que no hace es completarse. → La de <b>“la reacción no ocurre”</b> es el malentendido clásico. → La de <b>“la mezcla ya está en equilibrio”</b> confunde <b>ΔG° con ΔG</b>, que es la distinción de la pregunta 8 del bloque “2do principio” y la que sirve para armar V/F. <b>ΔG°</b> es la energía libre estándar (todas las especies en su estado estándar) y depende <b>sólo de la temperatura</b>; <b>ΔG</b> es la de la mezcla real y depende de Q, vía ΔG = ΔG° + R·T·ln Q. El equilibrio es <b>ΔG = 0</b>, sin el grado. T10C lo dice: “<i>en condiciones que no son del estado estándar, para predecir la dirección de la reacción, se debe usar ΔG<sub>r</sub> en vez de ΔG<sub>r</sub>°</i>”. → La de <b>“ΔH° = 0 y ΔS° = 0”</b> confunde ΔG° = 0 con que sus dos términos sean nulos: lo que pasa es que <b>ΔH° = T·ΔS°</b>, que es otra cosa (es justamente la temperatura de cruce). → Corolario deductivo que sirve para tumbar afirmaciones: una reacción con <b>ΔG° &lt; 0 no es espontánea en cualquier condición</b>. Si arrancás con Q &gt; K, avanza en sentido <b>inverso</b>."},

  {st: 'En el Ejercicio 2 del 27/06/25 se queman 700 mol de propano y 300 mol de butano (Q<sub>total</sub> = −2.417.580 kJ) y “<i>el 90% del calor total que produce la combustión se transfiere a 900 kg de agua</i>”. ¿Cómo se usa ese 90 %?',
   opts: ['Se calcula todo con 2.417.580 kJ y al final se toma el 90 % de la masa de vapor obtenida', 'Se aplica al ΔH°<sub>c</sub> de cada combustible antes de escribir las ecuaciones termoquímicas', 'Se aplica al Cp del agua, porque el rendimiento afecta la transferencia', 'Se aplica al calor <b>antes</b> de comparar: Q<sub>útil</sub> = 2.175.822 kJ, y ese número se compara contra la columna de acumulados de los tramos'],
   c: 3,
   ex: "<b>Al calor, antes de comparar.</b> El enunciado dice que al agua le <b>llega</b> el 90 %: Q<sub>útil</sub> = 0,90 · 2.417.580 = <b>2.175.822 kJ</b>, y <b>ese</b> es el número que se enfrenta a los acumulados (8.400 / 309.900 / 686.050 / 2.721.050 kJ) para decidir en qué tramo muere el proceso. Cae entre el tercero y el cuarto ⟹ termina dentro de la meseta de vaporización. → La de <b>tomar el 90 % de la masa de vapor al final</b> es tentadora y <b>está mal</b> porque la relación entre calor y masa vaporizada <b>no es proporcional</b>: hay tramos sensibles y latentes de por medio. Con el 100 % se vaporizarían 765,8 kg; el 90 % de eso sería 689,2 kg, y el resultado correcto es <b>658,9 kg</b>. El error no es chico. → “<b>Se aplica al ΔH°<sub>c</sub></b>” está mal porque las ecuaciones termoquímicas del ítem a son de la reacción, con su ΔH°<sub>c</sub> tabulado: el rendimiento del horno no cambia la termoquímica del propano. → “<b>Se aplica al Cp del agua</b>” no tiene sentido dimensional: el Cp es una propiedad del agua, no del equipo. → Mismo patrón en el 6/12/24, con “el 70 % del calor producido”: siempre se aplica <b>al calor</b>, apenas lo calculaste, y después se sigue."},
  {st: "En un calorímetro adiabático, cuya capacidad calorífica se desprecia, se mezclan <b>200 g de agua a 20,0 °C</b> (c = 4,18 J/(g·K)) con <b>100 g de un metal a 90,0 °C</b>. El equilibrio se alcanza a <b>24,0 °C</b>. ¿Cuánto vale el calor específico del metal?",
   opts: ["c = 8,4 J/(g·K)", "c = −0,51 J/(g·K)", "c = 0,51 J/(g·K)", "c = 0,13 J/(g·K)"],
   c: 2,
   ex: "<b>c = 0,51 J/(g·K).</b> Cada cuerpo tiene Q = m·c·(t<sub>f</sub> − t<sub>i</sub>). Agua: 200·4,18·(24,0 − 20,0) = <b>+3.344 J</b> (se calienta). Metal: 100·c·(24,0 − 90,0) = <b>−6.600·c</b> (se enfría). En el calorímetro adiabático en equilibrio, ΣQ<sub>i</sub> = 0 → 3.344 − 6.600·c = 0 → c = 3.344 / 6.600 = <b>0,507 J/(g·K)</b>. → <b>8,4</b> usa para el metal el mismo ΔT del agua (4 K) en lugar de su propia caída de 66 K: cada cuerpo tiene su ΔT, y lo único que comparten es la temperatura final. → <b>−0,51</b> arrastra hasta el resultado el signo negativo del Q del metal: los dos calores tienen signo opuesto justamente para cancelarse, y un calor específico es siempre positivo. → <b>0,13</b> cruza las masas, poniendo 200 g del lado del metal y 100 g del lado del agua. → Control antes de entregar: la temperatura final tiene que caer entre 20,0 y 90,0 °C, y el c de un metal tiene que dar bastante menos que el del agua."},
  {st: "La combustión del metano con el agua como <b>vapor</b>, CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g), tiene ΔH = −802 kJ por mol de CH<sub>4</sub>. Con ΔH<sub>vap</sub>(H<sub>2</sub>O) = 44 kJ/mol, ¿cuánto calor libera la combustión completa de <b>8,0 g de CH<sub>4</sub></b> (M = 16,0 g/mol) si el agua queda <b>líquida</b>?",
   opts: ["401 kJ", "357 kJ", "890 kJ", "445 kJ"],
   c: 3,
   ex: "<b>445 kJ.</b> Con agua líquida el calor es el PCS: |ΔH| = 802 + 2·44 = <b>890 kJ por mol</b> de CH<sub>4</sub>, porque los 2 mol de agua liberan 88 kJ más al condensarse. Después, la masa: n = 8,0 / 16,0 = 0,50 mol → Q = 0,50 · 890 = <b>445 kJ</b>. → <b>401 kJ</b> es 0,50 · 802: usa el valor del agua vapor (PCI) cuando el enunciado pide agua líquida. → <b>357 kJ</b> es 0,50 · (802 − 88): resta el calor de condensación en lugar de sumarlo; condensar el agua libera calor y no lo consume, así que el calor con agua líquida es mayor y no menor. → <b>890 kJ</b> es el calor de un mol entero de metano: falta el paso masa → moles, y 8,0 g son sólo medio mol."},
  {st: "Un horno que quema gas natural trabaja con <b>defecto de aire</b> y en los humos aparece CO. ¿Por qué baja el rendimiento energético?",
   opts: ["Porque el CO todavía puede oxidarse a CO<sub>2</sub> y la energía que le queda (≈ 283 kJ por mol de CO) sale por la chimenea sin aprovecharse", "Porque la formación de CO es endotérmica y absorbe calor de la llama", "Porque con poco aire el N<sub>2</sub> deja de salir con los humos y se acumula en el horno", "Porque en la combustión incompleta el agua sale como H<sub>2</sub>O(g) y no como H<sub>2</sub>O(l), y por eso se libera menos calor"],
   c: 0,
   ex: "<b>El CO conserva energía que no se liberó.</b> Con metano, la combustión completa libera 890,7 kJ/mol; la incompleta (CH<sub>4</sub> + 3/2 O<sub>2</sub> → CO + 2 H<sub>2</sub>O(l)) libera sólo 607,7, el 68 %, y los 283,0 kJ/mol restantes son la combustión pendiente del CO (CO + ½ O<sub>2</sub> → CO<sub>2</sub>). Esa energía se va con los humos, y encima el CO es tóxico. → La formación de CO <b>no es endotérmica</b>: la incompleta sigue siendo exotérmica (−607,7 kJ/mol), sólo que rinde menos. → El <b>N<sub>2</sub> no reacciona y sale con los humos</b> con cualquier relación aire-combustible, así que no se acumula. → El estado del agua no depende de que la combustión sea completa o incompleta: es la diferencia entre PCS y PCI, otro tema, y no explica el efecto del CO."},
  {st: "En un calorímetro adiabático con <b>100 g de agua</b> (c = 4,184 J/(g·K); capacidad calorífica del calorímetro despreciable) se disuelve una sal y la temperatura del agua <b>baja de 22,0 °C a 19,5 °C</b>. ¿Qué se concluye sobre la disolución?",
   opts: ["Es exotérmica: el agua perdió ≈ 1,05 kJ y eso es lo que liberó la disolución", "No se puede decir nada sin conocer la masa de sal disuelta", "Es endotérmica: el sistema tomó ≈ 1,05 kJ del agua, así que Q &gt; 0 para la disolución", "Es endotérmica, pero el calor que absorbe vale −1,05 kJ porque el ΔT es negativo"],
   c: 2,
   ex: "<b>Endotérmica, con Q<sub>disolución</sub> = +1,05 kJ.</b> Agua: Q = 100·4,184·(19,5 − 22,0) = <b>−1.046 J</b> (perdió calor). Calorímetro adiabático: ΣQ<sub>i</sub> = 0 → lo que perdió el agua lo ganó el sistema, Q<sub>disolución</sub> = <b>+1.046 J</b>. Q &gt; 0 es que el sistema absorbió calor del entorno, o sea endotérmica; la caída de temperatura del agua es la señal experimental. → <b>Exotérmica</b> confunde quién gana: si el agua pierde calor, alguien lo recibió, y ese es el sistema; una disolución exotérmica <b>calentaría</b> el agua. → <b>−1,05 kJ</b> es el calor del <b>agua</b>, no el del sistema: los dos tienen el mismo módulo y signo opuesto, y lo que absorbe el sistema vale +1,05 kJ. → <b>Sin la masa de sal</b> sí se puede: que sea endotérmica y cuánto calor se intercambió salen del agua; la masa de sal sólo hace falta para expresarlo por gramo o por mol."},
  {st: "En la Parte B de la evaluación integradora del 18/07/24 aparece: “<i>Las reacciones con valores positivos de ΔS° siempre son espontáneas a alta temperatura</i>”. ¿Es verdadera o falsa? (Usá ΔG = ΔH − T·ΔS con ΔH y ΔS constantes.)",
   opts: ["Falsa: la espontaneidad la decide ΔS del universo, y el ΔS del sistema no es criterio", "Falsa: si ΔH &gt; 0 la reacción no es espontánea a ninguna temperatura", "Verdadera: con ΔS &gt; 0 el término −T·ΔS es negativo y a T suficientemente alta gana; si ΔH &lt; 0 ya era espontánea a toda T, y si ΔH &gt; 0 lo es por encima de ΔH/ΔS", "Verdadera sólo si ΔH &lt; 0; con ΔH &gt; 0 ocurre lo contrario"],
   c: 2,
   ex: "<b>Verdadera.</b> Con ΔS &gt; 0 el término −T·ΔS es negativo y su módulo crece con T. Si ΔH &lt; 0, ΔG es negativo a toda temperatura, a una alta también. Si ΔH &gt; 0, ΔG es positivo en frío y se vuelve negativo por encima de T<sub>cruce</sub> = ΔH/ΔS. En los dos casos, a temperatura lo bastante alta, es espontánea. → “Falsa porque el ΔS del sistema no es criterio” usa algo cierto (T10C) para una conclusión falsa: el enunciado no dice que ΔS alcance, dice que a T alta el término entrópico domina, y ΔS<sub>univ</sub> = ΔS<sub>sist</sub> − ΔH/T tiende a ΔS<sub>sist</sub> &gt; 0 cuando T crece. → “Falsa porque ΔH &gt; 0 no es espontánea nunca” ignora la fila + / +: CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g) (el ejemplo de T10C) no es espontánea en frío y sí al calentar. → “Verdadera sólo si ΔH &lt; 0” da vuelta el caso: con ΔH &lt; 0 es espontánea siempre, y con ΔH &gt; 0 lo es por encima de T<sub>cruce</sub>; por eso hace falta la palabra “alta”. → Ojo con la redacción: si el enunciado dijera “a toda temperatura”, sería falso."},
  {st: "El ΔH<sub>vap</sub> del agua a 100 °C y 1 atm es 40,88 kJ/mol. ¿Cuánto vale la entropía de vaporización del agua en esas condiciones?",
   opts: ["+408,8 J/(K·mol), dividiendo por 100 °C", "−109,6 J/(K·mol), tomando el signo del calor que cede el entorno", "+0,1096 J/(K·mol), dividiendo 40,88 kJ por 373,15 K y llamándole J", "+109,6 J/(K·mol)"],
   c: 3,
   ex: "<b>+109,6 J/(K·mol).</b> A 1 atm el agua hierve a 100 °C = 373,15 K; en la transición la T es constante, el calor se intercambia reversiblemente y, a P constante, ese calor es ΔH. Entonces ΔS<sub>vap</sub> = ΔH<sub>vap</sub>/T<sub>vap</sub> = 40.880 / 373,15 = +109,6 J/(K·mol), positiva porque pasa a la fase más desordenada. Es la misma expresión del V/F del 06/02/25, que vale sólo a la temperatura de la transición. → Dividir por 100 °C es el error de dejar la T en grados Celsius: en ΔS = q<sub>rev</sub>/T la T va en kelvin. → −109,6 J/(K·mol) es la entropía del <b>entorno</b> (ΔS<sub>ent</sub> = −ΔH<sub>sist</sub>/T), no la del sistema; sumadas dan ΔS<sub>universo</sub> = 0, que es justo lo que corresponde a una transición en equilibrio (reversible). → 0,1096 sale de dividir kJ por K y llamarle J: error de un factor 1.000 en las unidades."},
  {st: "La temperatura normal de fusión del NH<sub>3</sub> es −78 °C. Para la <b>solidificación del NH<sub>3</sub> a −80 °C y 1 atm</b>, ¿qué signos tienen ΔH, ΔS y ΔG?",
   opts: ["ΔH &lt; 0, ΔS &lt; 0, ΔG &gt; 0", "ΔH &lt; 0, ΔS &lt; 0, ΔG &lt; 0", "ΔH &gt; 0, ΔS &gt; 0, ΔG &lt; 0", "ΔH &lt; 0, ΔS &lt; 0, ΔG = 0"],
   c: 1,
   ex: "<b>ΔH &lt; 0, ΔS &lt; 0, ΔG &lt; 0.</b> Solidificar libera calor (ΔH &lt; 0) y ordena (ΔS &lt; 0). Y −80 °C está por debajo de la temperatura de fusión, del lado donde lo espontáneo es congelar: como ΔH = T<sub>f</sub>·ΔS, resulta ΔG = ΔS·(T<sub>f</sub> − T) = (−)·(195 K − 193 K) &lt; 0. → ΔG &gt; 0 es lo que daría solidificar por encima de −78 °C (por ejemplo a −75 °C), donde lo espontáneo es fundir. → ΔH &gt; 0, ΔS &gt; 0 y ΔG &lt; 0 son los signos de la <b>fusión</b> por encima de la temperatura de fusión, no de la solidificación: al invertir el sentido se invierten ΔH y ΔS. → ΔG = 0 es sólo a −78 °C justos, el equilibrio (proceso reversible); a −80 °C hay dos grados de diferencia y el sistema ya no está en equilibrio."},
  {st: "Una reacción a presión y temperatura constantes desprende 50 kJ (ΔH<sub>sist</sub> = −50 kJ) a 300 K. ¿Cuánto vale el cambio de entropía del <b>entorno</b>?",
   opts: ["−167 J/K, porque ΔS<sub>ent</sub> = ΔH<sub>sist</sub>/T", "0, porque el entorno es tan grande que su entropía no cambia", "+167 J/K: el entorno recibe los 50 kJ y ΔS<sub>ent</sub> = −ΔH<sub>sist</sub>/T", "+0,167 J/K, dividiendo 50 kJ por 300 K sin pasar a J"],
   c: 2,
   ex: "<b>+167 J/K.</b> A P y T constantes el entorno recibe el calor que el sistema desprende: q<sub>ent</sub> = −ΔH<sub>sist</sub> = +50 kJ, y su cambio de entropía es q<sub>ent</sub>/T = +50.000 / 300 = <b>+166,7 J/K</b>. Es la expresión ΔS<sub>ent</sub> = −ΔH<sub>sist</sub>/T de T10C, y es el término que, sumado al del sistema y multiplicado por −T, da ΔG = ΔH − T·ΔS. → −167 J/K copia el signo del sistema: el entorno no pierde desorden cuando el sistema le entrega calor, lo gana. → “No cambia” confunde que el entorno no cambie de <b>temperatura</b> con que no cambie de <b>entropía</b>: justamente la entropía del entorno depende de cuánto calor absorbe o desprende el sistema. → +0,167 sale de dividir kJ por K y llamarle J: error de un factor 1.000."}

]);

// ==========================================================================
// QUÍMICA BÁSICA (CB040) · FIUBA · Cátedra Boeykens
// Sección 11 · Equilibrio químico, ácido-base, solubilidad y complejos
// Unidades 8, 10 y 11 del programa.
//
// Fuentes: teóricas T09A, T09B1-T09B5, T09C, T09D; guías G09A (Equilibrio
// químico, 10 ejercicios con clave) y G09B (Equilibrio iónico, 3 partes con
// clave); guía de preguntas conceptuales (bloques “Equilibrio químico”, 9
// preguntas, y “Equilibrio ácido-base”, 15); y los 9 exámenes reales.
// Reveals 1 a 7: Ejercicio 3 de los parciales de Curso 3 y Curso 2, del
// parcial del 30/05/2025, del 1er recuperatorio del 14/06/24, del 2do
// recuperatorio del 6/12/2024 y del 2do recuperatorio del 27/06/25, más el
// Ejercicio 1 del 14/06/24. Todos textuales.
//
// Notación: HTML plano (<sub>, <sup>) + Unicode. Sin MathJax, sin LaTeX.
// ==========================================================================

registerExercises('fiuba-quimica', '11', [

  {st: 'Ejercicio 7 de la <b>G09A</b>: el carbamato de amonio se descompone según NH<sub>4</sub>NH<sub>2</sub>CO<sub>2</sub>(s) ⇌ 2 NH<sub>3</sub>(g) + CO<sub>2</sub>(g). Partiendo de carbamato <b>puro</b> en un recipiente rígido a 500 K, en el equilibrio p(CO<sub>2</sub>) = 0,300 atm. ¿Cuánto vale K<sub>p</sub>?',
   opts: ['0,108', '0,0270', '0,180', 'Faltan datos: hace falta la concentración del sólido'],
   c: 0,
   ex: "Dos cosas al mismo tiempo. <b>(1)</b> El sólido puro <b>no entra</b> en la expresión: K<sub>p</sub> = p<sub>NH3</sub><sup>2</sup>·p<sub>CO2</sub>, y nada más (regla literal de la T09A: “las especies puras con estado de agregación líquido o sólido no se colocan”). <b>(2)</b> Como se partió de carbamato puro, todo el gas sale de la misma descomposición y la estequiometría manda: <b>p(NH<sub>3</sub>) = 2·p(CO<sub>2</sub>) = 0,600 atm</b>. → K<sub>p</sub> = (0,600)<sup>2</sup>·0,300 = <b>0,108</b>, que es exactamente la clave de la guía. → <b>0,0270</b> sale de usar 0,300 atm para los dos gases: te olvidaste de que el amoníaco viene de a dos. → <b>0,180</b> es 0,600·0,300, o sea escribir K<sub>p</sub> sin el exponente 2 (el coeficiente estequiométrico es el exponente, siempre). → La de <b>“faltan datos”</b> es la trampa de fondo: un sólido puro no tiene “concentración” variable, su actividad vale 1 y ya está adentro del valor de K."},

  {st: 'Ejercicio 10 de la <b>G09A</b>: 2 NO(g) + O<sub>2</sub>(g) ⇌ 2 NO<sub>2</sub>(g). Con las concentraciones de equilibrio medidas a 230 °C se obtiene K<sub>c</sub> = 6,48·10<sup>5</sup>. ¿Cuánto vale K<sub>p</sub> a esa temperatura?',
   opts: ['1,57·10<sup>4</sup>', '2,68·10<sup>7</sup>', '6,48·10<sup>5</sup>', '1,55·10<sup>2</sup>'],
   c: 0,
   ex: 'K<sub>p</sub> = K<sub>c</sub>·(R·T)<sup>Δn</sup> con <b>Δn = 2 − 3 = −1</b> (dos moles gaseosos del lado de los productos contra tres del lado de los reactivos) y T = 230 + 273 = <b>503 K</b>. R·T = 0,0821·503 = 41,30, así que K<sub>p</sub> = 6,48·10<sup>5</sup>/41,30 = <b>1,57·10<sup>4</sup></b>, que es la clave de la guía. → <b>2,68·10<sup>7</sup></b> es multiplicar en vez de dividir: es haber puesto Δn = +1, el error de contar “productos menos reactivos” al revés o de olvidar que el O<sub>2</sub> también cuenta. → <b>6,48·10<sup>5</sup></b> es suponer Δn = 0, que sería cierto sólo si hubiera la misma cantidad de moles gaseosos de los dos lados. → <b>1,55·10<sup>2</sup></b> es el error de <b>coherencia dimensional</b>: usar R = 8,31 J/mol·K cuando K<sub>p</sub> se construye con presiones en atm. Con atmósferas va 0,0821 L·atm/mol·K, siempre.'},

  {st: 'Ejercicio 8 de la <b>G09A</b>: en una cámara de combustión rígida a 950 °C ocurre CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) ⇌ CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(g), K<sub>c</sub> = 38,3. En un momento se mide [CH<sub>4</sub>] = 0,200 M, [O<sub>2</sub>] = 2,40 M, [CO<sub>2</sub>] = 1,80 M y [H<sub>2</sub>O] = 3,60 M. Unos minutos más tarde, ¿la concentración de metano será mayor, menor o igual a 0,200 M?',
   opts: ['Menor', 'Mayor', 'Igual: el sistema ya está en equilibrio', 'No se puede decidir sin conocer K<sub>p</sub>'],
   c: 0,
   ex: "Se calcula <b>Q</b> con la misma fórmula que K y las concentraciones del momento: Q = ([CO<sub>2</sub>]·[H<sub>2</sub>O]<sup>2</sup>)/([CH<sub>4</sub>]·[O<sub>2</sub>]<sup>2</sup>) = (1,80·3,60<sup>2</sup>)/(0,200·2,40<sup>2</sup>) = 23,328/1,152 = <b>20,25</b>. Como <b>Q = 20,25 &lt; K<sub>c</sub> = 38,3</b>, el sistema tiene de más los reactivos y avanza <b>hacia los productos</b>: consume metano, así que [CH<sub>4</sub>] será <b>menor</b> que 0,200 M. Es la clave de la guía. → “Mayor” es haber comparado al revés, o haber armado Q dado vuelta (reactivos sobre productos). → “Igual” exigiría Q = K, y 20,25 no es 38,3. → La de <b>“no se puede decidir sin conocer K<sub>p</sub>”</b> confunde: K<sub>p</sub> no agrega información acá porque las concentraciones ya están en M y la constante dada también es K<sub>c</sub>. → La frase que hay que escribir en la hoja, porque el enunciado pide justificar: <b>Q siempre camina hacia K</b>; si Q es chico tiene que crecer, y crece cuando crece el numerador, que son los productos."},

  {st: 'Con la reacción del ejercicio 2 de la <b>G09A</b> (H<sub>2</sub>(g) + Br<sub>2</sub>(g) ⇌ 2 HBr(g) a 1000 K, con K<sub>c</sub> = 3,80·10<sup>3</sup>), el sistema está en equilibrio y se comprime el recipiente <b>a la mitad del volumen</b> a temperatura constante. ¿Qué pasa con la cantidad de HBr?',
   opts: ['No cambia: Δn de gases es 0, así que la presión no desplaza este equilibrio', 'Aumenta, porque al comprimir el sistema va hacia el producto', 'Disminuye, porque al comprimir se favorece la disociación', 'Aumenta, y además K<sub>c</sub> aumenta'],
   c: 0,
   ex: "La segunda de las tres condiciones que la T09A pone para la perturbación por presión: “sólo afectan el equilibrio de reacciones que ocurren <b>con cambio en el número de moles gaseosos</b>”. Acá hay <b>2 moles gaseosos de cada lado</b> (1 + 1 a la izquierda, 2 a la derecha): <b>Δn = 0</b>, y comprimir multiplica todas las concentraciones por el mismo factor, que se cancela en Q porque el numerador y el denominador tienen el mismo grado. Q sigue valiendo K y <b>nada se mueve</b>. → Las que dicen que <b>va hacia el producto</b> o que <b>se favorece la disociación</b> aplican el reflejo “comprimir manda hacia el lado con menos moles” sin haber contado los moles: acá no hay un lado con menos. → La que dice que <b>K<sub>c</sub> aumenta</b> agrega el error más caro del bloque: <b>la única perturbación que cambia el valor de K es la temperatura</b>. Comprimir a T constante deja K quieta aunque el equilibrio se desplace, y acá ni siquiera se desplaza."},

  {st: 'Un reactor industrial está en equilibrio a temperatura constante y se le agrega un <b>catalizador</b>. ¿Qué cambia?',
   opts: ['Aumenta el rendimiento porque acelera la reacción directa', 'Aumenta K<sub>c</sub> y por lo tanto la cantidad de producto', 'Desplaza el equilibrio hacia el lado exotérmico', 'Nada de la composición: sólo se llega antes al mismo equilibrio'], c: 3,
   ex: "El catalizador <b>acelera la reacción directa y la inversa en la misma medida</b>: baja la energía de activación de las dos ramas por igual (lo de la energía de activación es complemento: no está en las teóricas de la cátedra). Cambia el <b>tiempo</b> que tarda el sistema en llegar, no el lugar al que llega. La clave de la G09A (ejercicio 1-f) declara <b>incorrecta</b> la afirmación “la presencia de un catalizador modifica el valor de la constante de equilibrio”, y la 1-b declara incorrecta “cuanto más rápidamente ocurra una reacción, mayor será la cantidad de producto en el equilibrio”. → Ahí está la separación que hay que tener escrita: la <b>velocidad</b> es cinética, la <b>posición</b> del equilibrio es termodinámica. → La de <b>“aumenta el rendimiento porque acelera la reacción directa”</b> supone que se acelera sólo una rama; la que dice <b>aumenta K<sub>c</sub></b> y la que dice <b>desplaza el equilibrio hacia el lado exotérmico</b> le atribuyen al catalizador un poder que sólo tiene la temperatura. → Hermano del mismo error: agregar un <b>gas inerte a volumen constante</b>. Sube la presión total pero deja intactas las presiones parciales y las concentraciones, así que tampoco desplaza nada."},

  {st: 'Ejercicio 3 de la <b>G09A</b>: PCl<sub>5</sub>(g) ⇌ PCl<sub>3</sub>(g) + Cl<sub>2</sub>(g), K<sub>c</sub>(298 K) = 5,50, en un recipiente de 4,00 dm<sup>3</sup>. El ítem b) pregunta si K<sub>c</sub> cambiaría con un recipiente de otro volumen a la <b>misma</b> temperatura. ¿Qué pasa?',
   opts: ['K<sub>c</sub> cambia porque Δn = +1', 'K<sub>c</sub> no cambia; lo que cambia son las concentraciones de equilibrio y las cantidades de cada especie', 'No cambia nada: ni K<sub>c</sub> ni las concentraciones', 'K<sub>c</sub> baja al aumentar el volumen'], c: 1,
   ex: "La clave de la guía contesta <b>“no”</b>, y la T09A lo dice en una línea: “el valor de K<sub>c</sub> <b>sólo depende de la temperatura</b>”. Cambiar el volumen, la presión o las cantidades iniciales <b>no toca K</b>. → Pero ojo con confundir “K no cambia” con “no pasa nada” (la que dice <b>no cambia nada</b>): como Δn = +1, agrandar el recipiente <b>sí desplaza</b> el equilibrio hacia el lado con más moles gaseosos, o sea hacia la descomposición, y las concentraciones de equilibrio son otras. Las dos cosas conviven: <b>misma K, distinta composición</b>. → Las que dicen <b>K<sub>c</sub> cambia porque Δn = +1</b> o <b>K<sub>c</sub> baja al aumentar el volumen</b> son el error inverso, y es el que se cobra en el ítem de justificación: si escribís que K cambió por una perturbación que no es de temperatura, perdés el punto aunque el sentido del desplazamiento esté bien. → Con los datos del ejercicio: [PCl<sub>5</sub>] = 0,0600 M, [Cl<sub>2</sub>] = 0,0705 M → [PCl<sub>3</sub>] = 5,50·0,0600/0,0705 = 4,68 M → n = 4,68·4,00 = <b>18,7 mol</b>, la clave del ítem a)."},

  {st: 'Ejercicio 9 de la <b>G09A</b>: la reacción H<sub>2</sub>(g) + Cl<sub>2</sub>(g) ⇌ 2 HCl(g) es <b>exotérmica</b>. Con los tres gases en equilibrio en un recipiente rígido, <b>se aumenta la temperatura</b>. ¿Qué pasa con la cantidad de HCl y con K<sub>c</sub>?',
   opts: ['n(HCl) disminuye y K<sub>c</sub> disminuye', 'n(HCl) aumenta y K<sub>c</sub> aumenta', 'n(HCl) disminuye y K<sub>c</sub> queda constante', 'n(HCl) aumenta y K<sub>c</sub> queda constante'],
   c: 0,
   ex: "Aumentar T desplaza el equilibrio en el <b>sentido endotérmico</b>, porque el sistema evoluciona cancelando la perturbación y el sentido que absorbe calor es el endotérmico. Si la <b>directa</b> es exotérmica, el sentido endotérmico es el <b>inverso</b>: el equilibrio se corre hacia los reactivos, <b>n(HCl) disminuye</b>. Y como la temperatura es la única perturbación que mueve el valor de la constante, <b>K<sub>c</sub> también disminuye</b>. Es la clave de la guía (ítem 9c). → La de <b>n(HCl) aumenta y K<sub>c</sub> aumenta</b> es el reflejo “si quiero más producto, caliento”, que está mal la mitad de las veces: hay que mirar el <b>signo de ΔH</b> primero. → Las que dejan <b>K<sub>c</sub> constante</b> son el error simétrico del quiz anterior: con temperatura, K <b>sí</b> cambia. → Contraste útil, con dos de los exámenes: en el SbCl<sub>5</sub> del 30/05/25 el enunciado escribe ΔH &lt; 0 y hay que <b>enfriar</b>; en el C + H<sub>2</sub>O del 14/06/24, ΔH° = +131,3 kJ/mol y hay que <b>calentar</b>."},

  {st: 'Ejercicio 1-a) de la parte 2 de la <b>G09B</b>: se mezclan 200 cm<sup>3</sup> de ácido sulfúrico 0,05 M con 40 cm<sup>3</sup> de hidróxido de sodio 0,5 M a 25 °C (α = 1 para todos los electrolitos, volúmenes aditivos). ¿Cuál es el pH de la solución resultante?',
   opts: ['12,62', '1,08', '7,00', '1,38'], c: 2,
   ex: 'Aritmética de moles, con el factor 2 en el <b>ácido</b>: n(H<sup>+</sup>) = 0,200 L · 0,05 M · <b>2</b> = 0,0200 mol, porque el H<sub>2</sub>SO<sub>4</sub> es <b>diprótico</b>; n(OH<sup>-</sup>) = 0,040 L · 0,5 M = 0,0200 mol. <b>Se igualan exactamente</b>, no sobra nada, y el Na<sub>2</sub>SO<sub>4</sub> se toma como sal de ácido fuerte con base fuerte: no hidroliza. <b>pH = 7</b>, que es la clave de la guía. → <b>12,62</b> es olvidar el 2 del sulfúrico: te quedarían 0,0100 mol de OH<sup>-</sup> sobrantes en 240 cm<sup>3</sup>, o sea 0,0417 M y pOH 1,38. → <b>1,38</b> es ese mismo cálculo con el pOH anotado en el renglón del pH. → <b>1,08</b> es ignorar la base y dividir 0,0200 mol por el volumen total. → El factor 2 en este ejercicio está del lado del <b>ácido</b>, no de la base: por eso conviene contar siempre <b>moles de H<sup>+</sup> contra moles de OH<sup>-</sup></b> y no moles de fórmula contra moles de fórmula.'},

  {st: 'Ejercicio 2 de la parte 2 de la <b>G09B</b>: se tienen 1,5 L de una solución de HCl de pH = 1 y se quiere llegar a pH = 3. ¿Qué volumen de Ca(OH)<sub>2</sub> 0,3 M hay que agregar? (α = 1, volúmenes aditivos)',
   opts: ['493 cm<sup>3</sup>', '247 cm<sup>3</sup>', '250 cm<sup>3</sup>', '25 cm<sup>3</sup>'], c: 1,
   ex: 'pH = 1 en un ácido fuerte es [H<sub>3</sub>O<sup>+</sup>] = 0,1 M → n(H<sup>+</sup>) = 0,15 mol. Al agregar V litros de base: n(OH<sup>-</sup>) = 0,3·V·<b>2</b> = 0,6·V, porque el <b>Ca(OH)<sub>2</sub> aporta dos OH<sup>-</sup> por fórmula</b>. Y el volumen final es (1,5 + V), así que hay que resolver (0,15 − 0,6V)/(1,5 + V) = 10<sup>-3</sup> → 0,1485 = 0,601·V → <b>V = 0,2471 L = 247 cm<sup>3</sup></b>, la clave de la guía. → <b>493 cm<sup>3</sup></b> es exactamente el doble: es haber usado 0,3 mol/L de OH<sup>-</sup> en vez de 0,6. → <b>250 cm<sup>3</sup></b> es el volumen que neutraliza <b>todo</b> el ácido (0,15/0,6), que te deja en pH 7 y no en 3: el enunciado pide una solución todavía ácida. → Y el paso que más se saltea es el denominador: el volumen final <b>no</b> es 1,5 L. Escribí V total arriba de todo antes de dividir.'},

  {st: 'Ejercicio 3 del parcial del <b>Curso 2</b>: producto de limpieza con amoníaco, se quiere pH = 10,5, dato <b>pK<sub>b</sub> = 4,74</b>. Al resolver el equilibrio te queda x = 3,16·10<sup>-4</sup> M. ¿Cuál es el pH?',
   opts: ['3,50', '4,74', '9,26', '10,50'], c: 3,
   ex: 'En una <b>base</b> débil el equilibrio es B + H<sub>2</sub>O ⇌ BH<sup>+</sup> + OH<sup>-</sup>: lo que sale de la raíz es <b>[OH<sup>-</sup>]</b>, no [H<sub>3</sub>O<sup>+</sup>]. pOH = −log(3,16·10<sup>-4</sup>) = 3,50 → <b>pH = 14 − 3,50 = 10,50</b>, que es el dato que el enunciado había pedido: cierra. → <b>3,50</b> es el error clásico de aplicarle a una base la fórmula del ácido: te da el pH <b>simétrico respecto de 7</b>, y un producto de limpieza con amoníaco de pH 3,5 es un absurdo químico. El chequeo de sensatez es de dos segundos: <b>amoníaco = base = pH &gt; 7</b>. → <b>4,74</b> es confundir el pH con el pK<sub>b</sub> del dato. → <b>9,26</b> es 14 − 4,74, o sea el pK<sub>a</sub> del par conjugado (NH<sub>4</sub><sup>+</sup>), que es un número real y útil pero no es el pH. → Los tres parciales de curso te dan la constante <b>sin avisar</b> cuál es: C1 da pK<sub>a</sub>, C2 da pK<sub>b</sub>, C3 da K<sub>a</sub>. Mirá la letra antes de reemplazar.'},

  {st: 'Ejercicio 6 de la parte 1 de la <b>G09B</b>: una solución de metilamina tiene pH = 10,93 y en el equilibrio está <b>33,9 % disociada</b>. La clave publica pK<sub>b</sub> = 3,54. ¿Qué pasa si resolvés sin la aproximación?',
   opts: ['Da lo mismo, 3,54', 'Da 3,54, pero cambia la concentración inicial', 'Da pK<sub>b</sub> = 3,36: la clave usó K<sub>b</sub> = x<sup>2</sup>/C<sub>0</sub> cuando C<sub>0</sub>/x = 2,95 y ese criterio no se cumple', 'No se puede: haría falta resolver una cúbica'], c: 2,
   ex: "[OH<sup>-</sup>] = 10<sup>-(14−10,93)</sup> = 8,51·10<sup>-4</sup> M, y de α = x/C<sub>0</sub> sale C<sub>0</sub> = 8,51·10<sup>-4</sup>/0,339 = <b>2,51·10<sup>-3</sup> M</b>, que <b>sí</b> coincide con la clave. La diferencia está en el último paso: K<sub>b</sub> <b>exacta</b> = x<sup>2</sup>/(C<sub>0</sub> − x) = 4,37·10<sup>-4</sup> → <b>pK<sub>b</sub> = 3,36</b>; K<sub>b</sub> <b>aproximada</b> = x<sup>2</sup>/C<sub>0</sub> = 2,89·10<sup>-4</sup> → pK<sub>b</sub> = 3,54, que es el número impreso. → Con α = 33,9 % la aproximación C<sub>0</sub> − x ≈ C<sub>0</sub> está tirando a la basura un tercio de la base: el criterio de la T09B2 es <b>C<sub>0</sub>/x ≥ 100</b> y acá vale <b>2,95</b>. → La de <b>“haría falta resolver una cúbica”</b> confunde dos cosas: la cúbica aparece si además querés el aporte del agua; acá con el balance de masa alcanza y es una cuenta de un renglón. → Lo que hay que llevarse: el enunciado de los parciales dice “<b>explicitando las suposiciones que realiza</b>”, y la T09B2 remata “debe confirmar que se cumple la suposición”. Declarar que el criterio falla y resolver exacto vale más que aplicarla en silencio."},

  {st: 'Se titula amoníaco 0,1 M (K<sub>b</sub> = 1,8·10<sup>-5</sup>) con HCl 0,1 M. ¿Qué pH tiene el <b>punto de equivalencia</b>?',
   opts: ['Menor que 7 (≈ 5,3): la sal formada, NH<sub>4</sub>Cl, hidroliza en forma ácida', 'Exactamente 7,00, porque los moles de ácido y de base se igualan', 'Mayor que 7, porque el amoníaco es una base', 'Depende del indicador que se use'],
   c: 0,
   ex: "La T09B4 lo dice en tres renglones: fuerte con fuerte da <b>pH = 7</b>; ácido débil con base fuerte da <b>pH &gt; 7</b>; <b>base débil con ácido fuerte da pH &lt; 7</b>. En la equivalencia no queda amoníaco ni HCl: queda <b>NH<sub>4</sub>Cl</b>, sal de base débil con ácido fuerte, y el catión hidroliza: NH<sub>4</sub><sup>+</sup> + H<sub>2</sub>O ⇌ NH<sub>3</sub> + H<sub>3</sub>O<sup>+</sup>. → Con números: al igualar volúmenes la sal queda 0,05 M, K<sub>ha</sub> = K<sub>w</sub>/K<sub>b</sub> = 5,56·10<sup>-10</sup> → [H<sub>3</sub>O<sup>+</sup>] = √(5,56·10<sup>-10</sup>·0,05) = 5,27·10<sup>-6</sup> → <b>pH = 5,28</b>. → La de <b>“exactamente 7,00”</b> es la trampa número 4 de la sección: “se igualaron los moles” define el punto de equivalencia, <b>no</b> el pH 7. → La de <b>“mayor que 7”</b> confunde el reactivo con el producto: la base se consumió toda. → La de <b>“depende del indicador”</b> invierte la lógica: el indicador <b>no fija</b> el pH, se elige para que su viraje caiga en el salto; acá conviene uno que vire en zona ácida, no fenolftaleína."},

  {st: '¿Cuál de estas dos soluciones tiene <b>menor</b> pH: ácido acético 0,1 M (K<sub>a</sub> = 1,8·10<sup>-5</sup>) o HCl 1,0·10<sup>-3</sup> M?',
   opts: ["El HCl, porque un ácido fuerte siempre da menor pH que uno débil", "El ácido acético: pH 2,87 contra 3,00 del HCl", "Los dos el mismo pH: la fuerza cambia α, no el pH", "No se puede comparar sin el K<sub>a</sub> del HCl"],
   c: 1,
   ex: 'x = √(K<sub>a</sub>·C<sub>0</sub>) = √(1,8·10<sup>-5</sup>·0,1) = <b>1,34·10<sup>-3</sup> M</b> → pH = <b>2,87</b>, contra el pH 3,00 del HCl 10<sup>-3</sup> M. El débil <b>está cien veces más concentrado</b>, y aunque sólo se ionice el 1,3 %, ese 1,3 % de 0,1 M supera el 100 % de 0,001 M. → Es exactamente la afirmación 7-g de la G09B parte 1 (“una solución de un ácido débil nunca podrá tener un pH inferior al de una solución de un ácido fuerte”), que es <b>falsa</b>. → La T09B2 lo dice de frente: “el pH dependerá de la magnitud de K<sub>a</sub> o K<sub>b</sub> <b>y</b> de la concentración”. Las <b>dos</b> cosas. → “Fuerte” no es sinónimo de “ácido”: fuerte describe cuánto se disocia, ácido describe cuántos protones hay en el vaso. Confundirlos es el error que la cátedra pregunta como V/F y como cuenta.'},

  {st: 'Ejercicio 1-e) de la parte 1 de la <b>G09B</b>: calcular el pH de una solución de HNO<sub>3</sub> <b>10<sup>-8</sup> M</b>.',
   opts: ["8,00, aplicando pH = −log C", "6,00", "No tiene pH definido porque el ácido está demasiado diluido", "≈ 7,0: a esa dilución manda la autoionización del agua"],
   c: 3,
   ex: "La clave de la guía da <b>7,0</b>. La razón de fondo: pH = −log(10<sup>-8</sup>) = 8 diría que <b>agregarle ácido al agua la volvió básica</b>, lo cual es imposible. Con C tan chico, el H<sub>3</sub>O<sup>+</sup> que aporta el agua (10<sup>-7</sup> M) es <b>diez veces mayor</b> que el que aporta el ácido y no se puede despreciar. → El balance completo es [H<sub>3</sub>O<sup>+</sup>] = C + K<sub>w</sub>/[H<sub>3</sub>O<sup>+</sup>], que da [H<sub>3</sub>O<sup>+</sup>] = 1,05·10<sup>-7</sup> M → <b>pH = 6,98</b>, o sea apenas por debajo de 7, como corresponde. → Esto <b>es</b> el criterio de la primera suposición de la T09B2: sólo se desprecia el agua si [H<sub>3</sub>O<sup>+</sup>]/[OH<sup>-</sup>] ≥ 100, y acá vale 1,1. → Regla operativa para el examen: por debajo de <b>10<sup>-6</sup> M</b> de ácido o base fuerte, el atajo pH = −log C deja de servir. → La de <b>6,00</b> es el pH de un ácido 10<sup>-6</sup> M, cien veces más concentrado que éste: con 10<sup>-8</sup> M el agua pesa más que el ácido y el pH queda pegado a 7. → La de <b>“no tiene pH definido”</b> es un no-contesta: la solución tiene pH perfectamente definido, sólo hay que calcularlo bien."},

  {st: 'K<sub>ps</sub>(AgCl) = 1,8·10<sup>-10</sup> y K<sub>ps</sub>(Mg(OH)<sub>2</sub>) = 1,5·10<sup>-11</sup>. ¿Cuál de los dos es <b>más soluble</b> en agua pura?',
   opts: ['El AgCl, porque el K<sub>ps</sub> más chico es el del Mg(OH)<sub>2</sub>', 'Los dos igual: el K<sub>ps</sub> es la solubilidad', 'No se puede decidir sin las masas molares', 'El Mg(OH)<sub>2</sub>: s = 1,55·10<sup>-4</sup> M contra 1,34·10<sup>-5</sup> M del AgCl'], c: 3,
   ex: "Distinta <b>estequiometría</b>, distinta relación entre K<sub>ps</sub> y s. AgCl es 1:1 → K<sub>ps</sub> = s<sup>2</sup> → s = √(1,8·10<sup>-10</sup>) = <b>1,34·10<sup>-5</sup> M</b>. Mg(OH)<sub>2</sub> es 1:2 → K<sub>ps</sub> = s·(2s)<sup>2</sup> = <b>4s<sup>3</sup></b> → s = ∛(1,5·10<sup>-11</sup>/4) = <b>1,55·10<sup>-4</sup> M</b>. El Mg(OH)<sub>2</sub> tiene un K<sub>ps</sub> <b>12 veces menor</b> y es <b>11,6 veces más soluble</b>. → Es literal la observación 4 de la T09C: el K<sub>ps</sub> “no indica si una sustancia es más soluble que otra” y “sólo pueden compararse en forma directa las sales con <b>igual estequiometría</b>”. La que dice que es más soluble el <b>AgCl</b> es exactamente el atajo que la teórica prohíbe. → La de <b>“los dos igual”</b> es la observación 3 de la misma diapositiva: <b>K<sub>ps</sub> ≠ S</b>, son números distintos ligados por la estequiometría. → La de <b>“no se puede decidir sin las masas molares”</b> confunde el paso final: las masas molares hacen falta para pasar de mol/L a g/L, no para comparar solubilidades molares."},

  {st: 'Ejercicio 3 de la parte 3 de la <b>G09B</b>: se añade lentamente nitrato de cobre (II) sólido a 200 cm<sup>3</sup> de una solución 0,001 M de KOH. K<sub>ps</sub>(Cu(OH)<sub>2</sub>) = 1,6·10<sup>-19</sup>. ¿Qué concentración de Cu<sup>2+</sup> hace falta para que empiece a precipitar?',
   opts: ['1,6·10<sup>-19</sup> M', '1,6·10<sup>-13</sup> M', '1,6·10<sup>-16</sup> M', '8,0·10<sup>-17</sup> M'], c: 1,
   ex: 'La precipitación arranca cuando el producto iónico <b>alcanza</b> el K<sub>ps</sub>: Q = K<sub>ps</sub>. Para Cu(OH)<sub>2</sub> ⇌ Cu<sup>2+</sup> + 2 OH<sup>-</sup> la expresión es [Cu<sup>2+</sup>]·[OH<sup>-</sup>]<sup>2</sup>, con el <b>exponente 2</b> que sale del coeficiente. El KOH es base fuerte: [OH<sup>-</sup>] = 10<sup>-3</sup> M → [Cu<sup>2+</sup>] = 1,6·10<sup>-19</sup>/(10<sup>-3</sup>)<sup>2</sup> = 1,6·10<sup>-19</sup>/10<sup>-6</sup> = <b>1,6·10<sup>-13</sup> M</b>. → <b>1,6·10<sup>-16</sup></b> es no elevar al cuadrado (dividir por 10<sup>-3</sup>), y <b>8,0·10<sup>-17</sup></b> es dividir por 2 en vez de elevar: los dos errores clásicos del exponente. → <b>Atención con la clave de la guía</b>: imprime “1,6·10<sup>-19</sup> M”, que es el propio K<sub>ps</sub> copiado. Recontalo vos (con [OH<sup>-</sup>] = 10<sup>-3</sup> el divisor es 10<sup>-6</sup>) y quedate con 1,6·10<sup>-13</sup>. → Detalle del enunciado: el nitrato de cobre entra <b>sólido</b>, así que el volumen no cambia y no hay que recalcular la concentración de OH<sup>-</sup> por dilución. Cuando en cambio mezclás dos soluciones, ese paso es obligatorio.'},

  {st: 'El Mg(OH)<sub>2</sub> (K<sub>ps</sub> = 1,5·10<sup>-11</sup>) tiene solubilidad 1,55·10<sup>-4</sup> M en agua pura. ¿Cuánto vale su solubilidad en NaOH 0,1 M?',
   opts: ['La misma: el NaOH no participa del equilibrio del Mg(OH)<sub>2</sub>', '1,5·10<sup>-10</sup> M', '1,5·10<sup>-9</sup> M, unas 10<sup>5</sup> veces menos', 'Mayor, porque el medio básico ayuda a disolverlo'], c: 2,
   ex: "<b>Efecto de ion común</b>, que es Le Chatelier aplicado al equilibrio heterogéneo: el OH<sup>-</sup> que ya está en la solución empuja el equilibrio Mg(OH)<sub>2</sub>(s) ⇌ Mg<sup>2+</sup> + 2 OH<sup>-</sup> <b>hacia el sólido</b>. → Acá [OH<sup>-</sup>] lo fija el NaOH en 0,1 M (lo que aporta el sólido, del orden de 10<sup>-9</sup>, es despreciable frente a eso), así que K<sub>ps</sub> = s·(0,1)<sup>2</sup> → <b>s = 1,5·10<sup>-11</sup>/10<sup>-2</sup> = 1,5·10<sup>-9</sup> M</b>: unas <b>100.000 veces menos</b> soluble que en agua pura. → <b>1,5·10<sup>-10</sup></b> sale de olvidar el cuadrado del OH<sup>-</sup> (dividir 1,5·10<sup>-11</sup> por 0,1 en vez de por 0,1<sup>2</sup>). → La de <b>“la misma”</b> no ve el ion común: el OH<sup>-</sup> del NaOH es <b>el mismo ion</b> que el del sólido, la solución no distingue de dónde vino. → La de <b>“mayor”</b> confunde “básico” con “solubilizante”: para el Mg(OH)<sub>2</sub>, el medio básico es justamente el que lo hace precipitar. Lo que lo disolvería es <b>acidificar</b>, porque el H<sub>3</sub>O<sup>+</sup> consume OH<sup>-</sup> y corre el equilibrio hacia los iones."},

  {st: 'La pregunta conceptual 5 del bloque ácido-base pide los balances de masa y de carga con un ejemplo <b>de base débil</b>. Para amoníaco de concentración C<sub>0</sub>, ¿cuál es el balance de <b>carga</b>?',
   opts: ["C<sub>0</sub> = [NH<sub>3</sub>] + [NH<sub>4</sub><sup>+</sup>]", "[NH<sub>4</sub><sup>+</sup>] = [OH<sup>-</sup>]", "[NH<sub>4</sub><sup>+</sup>] + [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>-</sup>]", "[NH<sub>4</sub><sup>+</sup>] + [OH<sup>-</sup>] = [H<sub>3</sub>O<sup>+</sup>]"],
   c: 2,
   ex: "El balance de carga dice que la solución es <b>eléctricamente neutra</b>: la suma de las concentraciones de cargas positivas iguala a la de las negativas. En una solución de NH<sub>3</sub> los cationes son NH<sub>4</sub><sup>+</sup> y H<sub>3</sub>O<sup>+</sup>, y el único anión es OH<sup>-</sup> → <b>[NH<sub>4</sub><sup>+</sup>] + [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>-</sup>]</b>. → La de <b>C<sub>0</sub> = [NH<sub>3</sub>] + [NH<sub>4</sub><sup>+</sup>]</b> es el balance de <b>masa</b> (el nitrógeno que pusiste está o como NH<sub>3</sub> o como NH<sub>4</sub><sup>+</sup>): es correcta como ecuación, pero no es la que se pregunta. → La de <b>[NH<sub>4</sub><sup>+</sup>] = [OH<sup>-</sup>]</b> es el balance de carga <b>ya simplificado</b>, después de despreciar [H<sub>3</sub>O<sup>+</sup>] frente a [NH<sub>4</sub><sup>+</sup>]: es el <b>resultado de una suposición</b>, no el balance. Escribir el simplificado como si fuera el balance te hace perder el punto justamente porque el enunciado pide explicitar las suposiciones. → La de <b>[NH<sub>4</sub><sup>+</sup>] + [OH<sup>-</sup>] = [H<sub>3</sub>O<sup>+</sup>]</b> pone el OH<sup>-</sup> del lado de las cargas positivas. → Los tres parciales de curso empiezan el Ejercicio 3 con “escriba los <b>balances y expresiones</b>”: son cuatro renglones que se escriben de memoria y valen puntos aunque después resuelvas con la fórmula corta."},

  {st: 'Ejercicio 8 de la parte 2 de la <b>G09B</b>: preparar 200 mL de una solución reguladora de <b>pH = 5,1</b> con soluciones de ácido acético y de acetato de sodio, ambas 0,1 M. pK<sub>a</sub> = 4,74, volúmenes aditivos. ¿Qué volumen de cada una?',
   opts: ['139 mL de ácido y 61 mL de acetato', '61 mL de ácido y 139 mL de acetato', '100 mL y 100 mL', 'Es imposible: con pK<sub>a</sub> = 4,74 no se puede regular a pH 5,1'], c: 1,
   ex: "Henderson: pH = pK<sub>a</sub> + log(C<sub>b</sub>/C<sub>a</sub>) → log(C<sub>b</sub>/C<sub>a</sub>) = 5,1 − 4,74 = 0,36 → <b>C<sub>b</sub>/C<sub>a</sub> = 2,29</b>. Como las dos soluciones madre tienen la <b>misma molaridad</b>, el cociente de concentraciones es directamente el cociente de volúmenes: V<sub>b</sub>/V<sub>a</sub> = 2,29 con V<sub>a</sub> + V<sub>b</sub> = 200 mL → V<sub>a</sub> = 200/3,29 = <b>60,8 ≈ 61 mL de ácido</b> y <b>139 mL de acetato</b>, la clave de la guía. → La de <b>139 mL de ácido y 61 mL de acetato</b> es el mismo cálculo con el cociente <b>invertido</b>, y te deja en pH = 4,38. El control mental que lo evita: si el <b>pH pedido es mayor que el pK<sub>a</sub></b>, tiene que mandar la <b>base conjugada</b>, o sea más volumen de acetato. → La de <b>100 mL y 100 mL</b> daría el log igual a cero, es decir pH = pK<sub>a</sub> = 4,74, que es donde el buffer tiene su <b>máxima capacidad reguladora</b> pero no es el pH pedido. → La de <b>“es imposible”</b> desconoce el rango útil que da la T09B5: pH = pK<sub>a</sub> ± 1, o sea de 3,74 a 5,74. 5,1 está cómodo adentro."},

  {st: 'Ejercicio 4 de la parte 3 de la <b>G09B</b>: se disuelven 0,5 mol del hexacianoferrato de potasio y 0,5 mol de KCN hasta completar 1 L. Dato: <b>K<sub>i</sub> = 1,29·10<sup>-37</sup></b> (constante de <b>inestabilidad</b>). ¿Cuánto vale la concentración de catión ferroso?',
   opts: ["1,29·10<sup>-37</sup> M", "2,48·10<sup>38</sup> M", "4,03·10<sup>-39</sup> M", "4,12·10<sup>-36</sup> M"],
   c: 3,
   ex: 'K<sub>i</sub> es la constante de <b>disociación</b> del complejo, así que la ecuación se escribe de complejo a iones: [Fe(CN)<sub>6</sub>]<sup>4-</sup> ⇌ Fe<sup>2+</sup> + <b>6</b> CN<sup>-</sup> → K<sub>i</sub> = [Fe<sup>2+</sup>]·[CN<sup>-</sup>]<sup>6</sup>/[complejo]. Con el complejo prácticamente sin disociar (K<sub>i</sub> ≈ 10<sup>-37</sup>) queda [complejo] ≈ 0,5 M, y el CN<sup>-</sup> libre lo fija el <b>KCN</b> en 0,5 M → [Fe<sup>2+</sup>] = 1,29·10<sup>-37</sup>·0,5/(0,5)<sup>6</sup> = <b>4,13·10<sup>-36</sup> M</b> (la clave imprime 4,12·10<sup>-36</sup>; la diferencia es de redondeo). → <b>1,29·10<sup>-37</sup></b> es usar [CN<sup>-</sup>] a la primera potencia: el exponente 6 sale del coeficiente estequiométrico, como en cualquier K. → <b>2,48·10<sup>38</sup></b> es haber tomado el dato como K<sub>f</sub> y usar su inversa. Regla para no equivocarse: <b>si el dato es muchísimo menor que 1 es K<sub>i</sub></b> y el complejo va en el denominador; si es enorme (la T09D tabula K<sub>f</sub> de 10<sup>3</sup> a 10<sup>42</sup>) es K<sub>f</sub> y va al revés. Además, una concentración de 10<sup>38</sup> M no existe: el control de sensatez solo descarta la opción. → <b>4,03·10<sup>-39</sup></b> invierte el cociente 0,5/(0,5)<sup>6</sup>. → <span class="muted">El enunciado de la guía escribe la sal como “K<sub>2</sub>[Fe(CN)<sub>6</sub>]” y pide catión <b>ferroso</b>: con dos potasios el hierro no sería Fe(II). Es errata de la guía; el ejercicio se resuelve con el ion ferrocianuro.</span>'},
  {st: "Ejercicio 5 de la <b>G09A</b>: en un recipiente rígido de 20,0 dm<sup>3</sup> a 350 °C hay 2,00 mol de O<sub>2</sub>, se agregan 2,00 mol de CO<sub>2</sub> y <b>no hay CO</b>. Reacción: 2 CO + O<sub>2</sub> ⇌ 2 CO<sub>2</sub>. En el equilibrio [CO<sub>2</sub>] = 0,0480 M. ¿Cómo es el gráfico de concentración contra tiempo?",
   opts: ["Las tres curvas se encuentran en 0,0480 M y quedan iguales: en el equilibrio las concentraciones son iguales", "El CO<sub>2</sub> baja de 0,100 M a 0,0480 M, el CO sube de 0 a 0,0520 M y el O<sub>2</sub> baja de 0,100 M a 0,0740 M", "El CO<sub>2</sub> baja de 0,100 M a 0,0480 M, el CO sube de 0 a 0,0520 M y el O<sub>2</sub> sube de 0,100 M a 0,126 M", "Sólo se mueve el CO<sub>2</sub>, que baja a 0,0480 M; el CO queda en 0 y el O<sub>2</sub> en 0,100 M"],
   c: 2,
   ex: "Como no hay CO, Q = [CO<sub>2</sub>]<sup>2</sup>/([CO]<sup>2</sup>[O<sub>2</sub>]) es infinito y está por encima de K: el sistema evoluciona hacia los <b>reactivos</b> (2 CO<sub>2</sub> → 2 CO + O<sub>2</sub>). El CO<sub>2</sub> pierde 0,0520 M, y por la estequiometría el CO gana 0,0520 M y el O<sub>2</sub> gana la mitad, 0,0260 M: termina en <b>0,126 M</b>. Con esos valores K<sub>c</sub> = 0,0480<sup>2</sup>/(0,0520<sup>2</sup>·0,126) = 6,76, la clave de la guía. → La que dice que las tres curvas se encuentran y quedan iguales confunde “constantes” con “iguales”: las concentraciones finales son 0,0480, 0,0520 y 0,126 M, distintas entre sí. → La que baja el O<sub>2</sub> a 0,0740 M le pone el signo al revés: la reacción inversa <b>produce</b> O<sub>2</sub>, no lo consume. → La que mueve sólo el CO<sub>2</sub> rompe la estequiometría: cada especie cambia en proporción a su coeficiente y todas llegan a la meseta en el mismo instante."},
  {st: "A una solución de ácido acético 0,10 M se le agregan 0,010 mol de acetato de sodio por cada 100 mL de solución, sin cambio de volumen. Respecto del ácido solo, ¿qué pasa con el pH y con el grado de disociación α del ácido?",
   opts: ["El pH baja y α sube: la sal aporta más especies disociadas y por lo tanto más H<sub>3</sub>O<sup>+</sup>", "El pH no cambia: el Na<sup>+</sup> y el acetato de la sal son iones espectadores", "El pH sube y α sube: la sal es básica y además aumenta la cantidad de iones en la solución", "El pH sube y α baja: el acetato es un ion común y corre el equilibrio hacia el ácido sin disociar"],
   c: 3,
   ex: "El acetato es la <b>base conjugada</b> del ácido: ya está en el equilibrio CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + CH<sub>3</sub>COO<sup>-</sup>. Al subir [CH<sub>3</sub>COO<sup>-</sup>], Q queda por encima de K<sub>a</sub> y el equilibrio se desplaza <b>hacia la izquierda</b>: el ácido se disocia menos, baja [H<sub>3</sub>O<sup>+</sup>] y el pH sube. Con números: solo, pH = 2,87 y α = 1,3 %; con acetato 0,10 M, [H<sub>3</sub>O<sup>+</sup>] = K<sub>a</sub>·C<sub>a</sub>/C<sub>b</sub> = 1,8·10<sup>-5</sup> M, pH = 4,74 y α = 0,018 %. → La que dice “el pH baja y α sube” va contra Le Chatelier: agregar un producto de la ionización no puede favorecer la ionización. → La de “iones espectadores” acierta con el Na<sup>+</sup>, que viene de una base fuerte y no hace nada, pero el acetato <b>no</b> es espectador: es una de las especies del equilibrio. → La de “pH sube y α sube” acierta con el pH pero no con α: la disociación cae unas 75 veces; que haya más iones en total no la aumenta, porque el aporte viene de la sal y no del ácido."},
  {st: "Ejercicio 1 de la parte 3 de la <b>G09B</b>: el K<sub>ps</sub> del Mg(OH)<sub>2</sub> es 1,5·10<sup>-11</sup>. ¿Qué pH tiene una solución saturada de ese hidróxido?",
   opts: ["10,19", "10,49", "3,51", "8,89"],
   c: 1,
   ex: "Primero K<sub>ps</sub> → s. Mg(OH)<sub>2</sub> es 1:2: K<sub>ps</sub> = s·(2s)<sup>2</sup> = 4s<sup>3</sup> → s = ∛(1,5·10<sup>-11</sup>/4) = 1,55·10<sup>-4</sup> M. Después la concentración de OH<sup>-</sup>: <b>[OH<sup>-</sup>] = 2s</b> = 3,11·10<sup>-4</sup> M → pOH = 3,51 → <b>pH = 14 − 3,51 = 10,49</b>, que es la clave. → <b>10,19</b> sale de tomar [OH<sup>-</sup>] = s, olvidando que cada fórmula aporta dos OH<sup>-</sup> (pOH = 3,81). → <b>3,51</b> es el pOH: falta el último paso, pH = 14 − pOH. → <b>8,89</b> sale de tratar al Mg(OH)<sub>2</sub> como una sal 1:1 (s = √K<sub>ps</sub> = 3,87·10<sup>-6</sup> M, [OH<sup>-</sup>] = 7,75·10<sup>-6</sup> M): la estequiometría 1:2 cambia la relación entre K<sub>ps</sub> y s."},
  {st: "Tres ácidos débiles tienen pK<sub>a</sub> = 3,2 (HX), 4,7 (HY) y 9,2 (HZ). Ordená sus bases conjugadas de <b>mayor a menor</b> basicidad.",
   opts: ["X<sup>-</sup> &gt; Y<sup>-</sup> &gt; Z<sup>-</sup>", "No se pueden ordenar: sólo los ácidos tienen constante, las bases conjugadas no", "Z<sup>-</sup> &gt; Y<sup>-</sup> &gt; X<sup>-</sup>", "Las tres son igual de básicas: K<sub>w</sub> es una constante"],
   c: 2,
   ex: "Para un par conjugado pK<sub>a</sub> + pK<sub>b</sub> = 14, así que pK<sub>b</sub> = 10,8 (X<sup>-</sup>), 9,3 (Y<sup>-</sup>) y 4,8 (Z<sup>-</sup>). <b>Menor pK<sub>b</sub> = mayor K<sub>b</sub> = base más fuerte</b>: Z<sup>-</sup> &gt; Y<sup>-</sup> &gt; X<sup>-</sup>. El HZ es el ácido más débil (el pK<sub>a</sub> más alto) y por eso su conjugada es la base más fuerte: el orden de basicidad es el inverso del de acidez. → La que ordena X<sup>-</sup> primero confunde la fuerza del ácido con la de su base conjugada: el ácido más fuerte (HX) tiene la conjugada más débil. → La que dice que no se pueden ordenar ignora que toda base conjugada tiene K<sub>b</sub> = K<sub>w</sub>/K<sub>a</sub>. → La de “igual de básicas” toma K<sub>w</sub> constante como si fijara cada factor: K<sub>a</sub>·K<sub>b</sub> = K<sub>w</sub> fija sólo el producto, y si K<sub>a</sub> sube, K<sub>b</sub> baja."}

]);


registerReveals('fiuba-quimica', '11', [

{st: "<b>Básico · Escribir Kc y Kp.</b> Escribí las expresiones de K<sub>c</sub> y de K<sub>p</sub> y calculá Δn de los gases para: a) N<sub>2</sub>(g) + 3 H<sub>2</sub>(g) ⇌ 2 NH<sub>3</sub>(g). b) CaCO<sub>3</sub>(s) ⇌ CaO(s) + CO<sub>2</sub>(g). c) 2 H<sub>2</sub>S(g) ⇌ 2 H<sub>2</sub>(g) + S<sub>2</sub>(g).",
 ans: "a) K<sub>c</sub> = [NH<sub>3</sub>]<sup>2</sup>/([N<sub>2</sub>]·[H<sub>2</sub>]<sup>3</sup>), K<sub>p</sub> = p(NH<sub>3</sub>)<sup>2</sup>/(p(N<sub>2</sub>)·p(H<sub>2</sub>)<sup>3</sup>), Δn = −2. b) K<sub>c</sub> = [CO<sub>2</sub>], K<sub>p</sub> = p(CO<sub>2</sub>), Δn = +1. c) K<sub>c</sub> = [H<sub>2</sub>]<sup>2</sup>·[S<sub>2</sub>]/[H<sub>2</sub>S]<sup>2</sup>, K<sub>p</sub> = p(H<sub>2</sub>)<sup>2</sup>·p(S<sub>2</sub>)/p(H<sub>2</sub>S)<sup>2</sup>, Δn = +1.",
 sol: "<b>Paso 1 · la regla.</b> Productos arriba y reactivos abajo, cada especie elevada a su coeficiente. K<sub>c</sub> usa concentraciones (mol/L) y K<sub>p</sub> usa presiones parciales (atm). Los sólidos y líquidos puros no se escriben, porque su concentración ya está incluida en K. → <b>Paso 2 · a).</b> Los coeficientes son 1, 3 y 2, así que [H<sub>2</sub>] va al cubo y [NH<sub>3</sub>] al cuadrado. Δn = 2 − (1 + 3) = <b>−2</b>. → <b>Paso 3 · b).</b> El CaCO<sub>3</sub> y el CaO son sólidos: no aparecen. Queda un solo gas, el CO<sub>2</sub>, y K<sub>c</sub> = [CO<sub>2</sub>]. Δn = 1 − 0 = <b>+1</b>, porque los sólidos no cuentan. → <b>Paso 4 · c).</b> Coeficientes 2, 2 y 1: [H<sub>2</sub>] y [H<sub>2</sub>S] van al cuadrado y [S<sub>2</sub>] a la primera. Δn = (2 + 1) − 2 = <b>+1</b>. → <b>Control.</b> Las dos constantes se relacionan con K<sub>p</sub> = K<sub>c</sub>·(R·T)<sup>Δn</sup>; por eso en a) K<sub>p</sub> ≠ K<sub>c</sub>, ya que Δn no es cero. → <b>Error típico:</b> escribir el CaCO<sub>3</sub> y el CaO en la expresión, o contar los sólidos para Δn."},

{st: "<b>Básico · Q contra K y el sentido.</b> Para H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2 HI(g) se tiene K<sub>c</sub> = 50 a cierta temperatura. En un recipiente de 2,00 L hay 0,400 mol de H<sub>2</sub>, 0,200 mol de I<sub>2</sub> y 1,60 mol de HI. a) ¿Está en equilibrio? ¿Hacia dónde evoluciona? b) ¿Y si en lugar de 1,60 mol hubiera 2,40 mol de HI?",
 ans: "a) <b>Q = 32 &lt; K<sub>c</sub></b>: no está en equilibrio y evoluciona <b>hacia los productos</b> (se forma más HI). b) <b>Q = 72 &gt; K<sub>c</sub></b>: evoluciona <b>hacia los reactivos</b>.",
 sol: "<b>Paso 1 · concentraciones del momento.</b> Se divide cada cantidad por el volumen: [H<sub>2</sub>] = 0,400/2,00 = 0,200 M; [I<sub>2</sub>] = 0,200/2,00 = 0,100 M; [HI] = 1,60/2,00 = 0,800 M. → <b>Paso 2 · Q.</b> Se escribe igual que K<sub>c</sub> pero con estos valores: Q = [HI]<sup>2</sup>/([H<sub>2</sub>]·[I<sub>2</sub>]) = (0,800)<sup>2</sup>/(0,200 · 0,100) = 0,640/0,0200 = <b>32</b>. → <b>Paso 3 · comparar.</b> Q = 32 es menor que K<sub>c</sub> = 50: hay de menos productos (o de más reactivos) respecto del equilibrio, así que la reacción avanza hacia la derecha y se forma HI hasta que Q llegue a 50. → <b>Paso 4 · b).</b> Con 2,40 mol, [HI] = 1,20 M y Q = (1,20)<sup>2</sup>/(0,200 · 0,100) = 1,44/0,0200 = <b>72</b>. Como Q &gt; K<sub>c</sub>, hay de más productos y la reacción retrocede: se consume HI y se forman H<sub>2</sub> e I<sub>2</sub>. → <b>Control.</b> Acá Δn = 0, así que el volumen se cancela: con moles directamente también sale 1,60<sup>2</sup>/(0,400 · 0,200) = 32. Eso no vale cuando Δn ≠ 0. → <b>Error típico:</b> comparar al revés (Q &lt; K no significa que retroceda)."},

{st: "<b>Básico · pH de un ácido y una base fuertes.</b> Calculá el pH de: a) HCl 0,0200 M. b) Ba(OH)<sub>2</sub> 0,00500 M (25 °C).",
 ans: "a) <b>pH = 1,70</b>. b) <b>pH = 12,00</b>.",
 sol: "<b>Paso 1 · a).</b> El HCl es un ácido fuerte y monoprótico: se disocia por completo y cada HCl da un H<sub>3</sub>O<sup>+</sup>, así que [H<sub>3</sub>O<sup>+</sup>] = 0,0200 M. pH = −log(0,0200) = <b>1,70</b>. → <b>Paso 2 · b) cuántos OH<sup>-</sup> por fórmula.</b> El Ba(OH)<sub>2</sub> es una base fuerte que libera <b>dos</b> OH<sup>-</sup> por unidad: [OH<sup>-</sup>] = 2 × 0,00500 = 0,0100 M. → <b>Paso 3 · pOH y pH.</b> pOH = −log(0,0100) = 2,00 y pH = 14,00 − 2,00 = <b>12,00</b>. → <b>Control.</b> Un ácido tiene que dar pH menor que 7 y una base mayor que 7: 1,70 y 12,00 lo cumplen. → <b>Error típico:</b> olvidar el factor 2 del hidróxido: con 0,00500 M el pOH sería 2,30 y el pH 11,70."},

{st: "<b>Intermedio · Kc desde una concentración en equilibrio.</b> Se colocan 0,500 mol de N<sub>2</sub>O<sub>4</sub>(g) en un recipiente rígido de 2,00 L. A cierta temperatura se establece el equilibrio N<sub>2</sub>O<sub>4</sub>(g) ⇌ 2 NO<sub>2</sub>(g) y se encuentra que hay 0,200 mol de NO<sub>2</sub>. Calculá K<sub>c</sub> y el porcentaje de descomposición del N<sub>2</sub>O<sub>4</sub>.",
 ans: "<b>K<sub>c</sub> = 0,0500</b>; <b>20,0 % de descomposición</b>.",
 sol: "<b>Paso 1 · tabla en moles.</b> Si se descomponen x mol de N<sub>2</sub>O<sub>4</sub>, aparecen 2x mol de NO<sub>2</sub> (el coeficiente es el factor). Inicial: 0,500 y 0. Cambio: −x y +2x. Equilibrio: 0,500 − x y 2x. → <b>Paso 2 · la incógnita.</b> El dato dice que 2x = 0,200 mol, entonces x = 0,100 mol. En el equilibrio hay 0,500 − 0,100 = 0,400 mol de N<sub>2</sub>O<sub>4</sub> y 0,200 mol de NO<sub>2</sub>. → <b>Paso 3 · a concentraciones.</b> K<sub>c</sub> se calcula con mol/L: [N<sub>2</sub>O<sub>4</sub>] = 0,400/2,00 = 0,200 M y [NO<sub>2</sub>] = 0,200/2,00 = 0,100 M. → <b>Paso 4 · K<sub>c</sub>.</b> K<sub>c</sub> = [NO<sub>2</sub>]<sup>2</sup>/[N<sub>2</sub>O<sub>4</sub>] = (0,100)<sup>2</sup>/0,200 = 0,0100/0,200 = <b>0,0500</b>. → <b>Paso 5 · porcentaje.</b> Se descompuso x sobre lo inicial: 0,100/0,500 = 0,200, o sea <b>20,0 %</b>. → <b>Control.</b> Los cambios guardan la proporción de la ecuación: el NO<sub>2</sub> formado (0,200 mol) es el doble del N<sub>2</sub>O<sub>4</sub> consumido (0,100 mol). → <b>Error típico:</b> usar los moles sin dividir por 2,00 L: daría (0,200)<sup>2</sup>/0,400 = 0,100, el doble del valor correcto, porque acá Δn = +1 y el volumen no se cancela."},

{st: "<b>Intermedio · Concentraciones en equilibrio desde Kc.</b> Para H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2 HI(g), K<sub>c</sub> = 50 a cierta temperatura. En un recipiente se colocan H<sub>2</sub> e I<sub>2</sub>, ambos a 0,100 M, y nada de HI. Calculá las concentraciones en el equilibrio y el porcentaje de H<sub>2</sub> que reaccionó.",
 ans: "[HI] = <b>0,156 M</b>; [H<sub>2</sub>] = [I<sub>2</sub>] = <b>0,0220 M</b>; reaccionó el <b>78 %</b> del H<sub>2</sub>.",
 sol: "<b>Paso 1 · tabla con x en mol/L.</b> Si reacciona x de H<sub>2</sub> (y x de I<sub>2</sub>), se forman 2x de HI. Inicial: 0,100; 0,100; 0. Cambio: −x; −x; +2x. Equilibrio: 0,100 − x; 0,100 − x; 2x. → <b>Paso 2 · reemplazar en K<sub>c</sub>.</b> K<sub>c</sub> = (2x)<sup>2</sup>/((0,100 − x)(0,100 − x)) = (2x)<sup>2</sup>/(0,100 − x)<sup>2</sup> = 50. → <b>Paso 3 · resolver.</b> Los dos lados son cuadrados perfectos, así que se saca la raíz: 2x/(0,100 − x) = √50 = 7,07. Entonces 2x = 0,707 − 7,07x, 9,07x = 0,707 y x = <b>0,0780</b>. (Si el planteo no fuera un cuadrado perfecto, se arma la ecuación cuadrática, como en el pH del ácido débil.) → <b>Paso 4 · concentraciones.</b> [HI] = 2x = 0,156 M; [H<sub>2</sub>] = [I<sub>2</sub>] = 0,100 − 0,0780 = 0,0220 M. → <b>Paso 5 · porcentaje.</b> 0,0780/0,100 = 0,780, o sea 78 %. → <b>Control.</b> Se reemplaza: (0,156)<sup>2</sup>/(0,0220)<sup>2</sup> = 0,02434/0,000484 ≈ 50. → <b>Error típico:</b> poner x en el HI en lugar de 2x (el coeficiente es el factor del cambio) o dar x = 0,100 como si reaccionara todo."},

{st: "<b>Intermedio · pH de un ácido débil y chequeo.</b> El ácido acético tiene K<sub>a</sub> = 1,8·10<sup>-5</sup>. Calculá el pH y el grado de disociación de una solución a) 0,250 M y b) 0,0100 M, comprobando en cada caso si la aproximación C<sub>0</sub> − x ≈ C<sub>0</sub> es válida.",
 ans: "a) <b>pH = 2,67</b>, α = 0,85 %. b) <b>pH = 3,38</b>, α = 4,2 % (hay que resolver la cuadrática).",
 sol: "<b>Paso 1 · equilibrio y tabla.</b> CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + CH<sub>3</sub>COO<sup>-</sup>. Con x = [H<sub>3</sub>O<sup>+</sup>] = [CH<sub>3</sub>COO<sup>-</sup>], queda K<sub>a</sub> = x<sup>2</sup>/(C<sub>0</sub> − x). El agua aporta poco, porque la solución es ácida. → <b>Paso 2 · a) con la aproximación.</b> x = √(K<sub>a</sub>·C<sub>0</sub>) = √(1,8·10<sup>-5</sup> · 0,250) = √(4,5·10<sup>-6</sup>) = 2,12·10<sup>-3</sup> M. Chequeo: C<sub>0</sub>/x = 0,250/2,12·10<sup>-3</sup> = 118, que es mayor que 100: la aproximación vale. pH = −log(2,12·10<sup>-3</sup>) = <b>2,67</b>; α = 2,12·10<sup>-3</sup>/0,250 = 0,0085, o sea 0,85 %. → <b>Paso 3 · b) probar la aproximación.</b> x = √(1,8·10<sup>-5</sup> · 0,0100) = 4,24·10<sup>-4</sup> M. Chequeo: C<sub>0</sub>/x = 0,0100/4,24·10<sup>-4</sup> = 23,6, que es menor que 100: <b>no vale</b>. → <b>Paso 4 · cuadrática.</b> x<sup>2</sup> + K<sub>a</sub>·x − K<sub>a</sub>·C<sub>0</sub> = 0 → x = [−1,8·10<sup>-5</sup> + √((1,8·10<sup>-5</sup>)<sup>2</sup> + 4 · 1,8·10<sup>-5</sup> · 0,0100)]/2 = (−1,8·10<sup>-5</sup> + 8,49·10<sup>-4</sup>)/2 = 4,15·10<sup>-4</sup> M. pH = <b>3,38</b>; α = 4,15·10<sup>-4</sup>/0,0100 = 4,2 %. → <b>Control.</b> Al diluir de 0,250 a 0,0100 M el pH sube, pero menos de lo que subiría en un ácido fuerte, y α crece. → <b>Error típico:</b> dar por válida la aproximación sin chequearla: acá habría dado 3,37 en lugar de 3,38, un error chico pero un criterio que sí se evalúa."},

{st: "<b>Intermedio · Buffer con Henderson y ácido agregado.</b> Una solución reguladora de 100 mL contiene 0,0200 mol de ácido acético y 0,0100 mol de acetato de sodio (pK<sub>a</sub> = 4,74). a) ¿Qué pH tiene? b) ¿Qué pH tiene después de agregar 0,00500 mol de HCl (sin cambio de volumen)? c) ¿Qué pH tendrían 100 mL de agua pura con esa misma cantidad de HCl?",
 ans: "a) <b>pH = 4,44</b>. b) <b>pH = 4,04</b>. c) <b>pH = 1,30</b>.",
 sol: "<b>Paso 1 · a) Henderson.</b> pH = pK<sub>a</sub> + log(C<sub>b</sub>/C<sub>a</sub>). Como los dos están en el mismo volumen, el cociente de concentraciones es el de moles: 0,0100/0,0200 = 0,500. pH = 4,74 + log(0,500) = 4,74 − 0,30 = <b>4,44</b>. → <b>Paso 2 · b) qué hace el HCl.</b> El ácido fuerte reacciona por completo con la base conjugada: CH<sub>3</sub>COO<sup>-</sup> + H<sub>3</sub>O<sup>+</sup> → CH<sub>3</sub>COOH + H<sub>2</sub>O. Se gastan 0,00500 mol de acetato y se forman 0,00500 mol de ácido: acetato 0,0100 − 0,0050 = 0,0050 mol; ácido 0,0200 + 0,0050 = 0,0250 mol. → <b>Paso 3 · nuevo pH.</b> pH = 4,74 + log(0,0050/0,0250) = 4,74 + log(0,200) = 4,74 − 0,70 = <b>4,04</b>. El pH bajó sólo 0,40 unidades. → <b>Paso 4 · c) sin buffer.</b> En agua, 0,00500 mol en 0,100 L dan [H<sub>3</sub>O<sup>+</sup>] = 0,0500 M y pH = −log(0,0500) = <b>1,30</b>. → <b>Control.</b> El agua pasó de pH 7 a 1,30 (casi 6 unidades) y el buffer sólo de 4,44 a 4,04: eso es regular el pH. → <b>Error típico:</b> aplicar Henderson sin haber hecho antes la reacción con el ácido fuerte, o sumar el HCl al ácido débil sin restarlo de la base."},

{st: "<b>Intermedio · Kps y solubilidad con ion común.</b> El K<sub>ps</sub> del cromato de plata, Ag<sub>2</sub>CrO<sub>4</sub>, es 1,1·10<sup>-12</sup> (M = 331,7 g/mol). a) Calculá su solubilidad en agua pura, en mol/L y en g/L. b) Calculá su solubilidad en una solución de K<sub>2</sub>CrO<sub>4</sub> 0,0100 M.",
 ans: "a) <b>6,5·10<sup>-5</sup> M</b> = <b>0,0216 g/L</b>. b) <b>5,2·10<sup>-6</sup> M</b> (unas 12 veces menos).",
 sol: "<b>Paso 1 · equilibrio y Kps.</b> Ag<sub>2</sub>CrO<sub>4</sub>(s) ⇌ 2 Ag<sup>+</sup> + CrO<sub>4</sub><sup>2-</sup>. Si se disuelven s mol/L de sal, [Ag<sup>+</sup>] = 2s y [CrO<sub>4</sub><sup>2-</sup>] = s. K<sub>ps</sub> = [Ag<sup>+</sup>]<sup>2</sup>·[CrO<sub>4</sub><sup>2-</sup>] = (2s)<sup>2</sup>·s = 4s<sup>3</sup>. → <b>Paso 2 · a) despejar s.</b> s = ∛(K<sub>ps</sub>/4) = ∛(1,1·10<sup>-12</sup>/4) = ∛(2,75·10<sup>-13</sup>) = <b>6,5·10<sup>-5</sup> mol/L</b>. → <b>Paso 3 · pasar a g/L.</b> 6,50·10<sup>-5</sup> mol/L × 331,7 g/mol = <b>0,0216 g/L</b>. → <b>Paso 4 · b) ion común.</b> El K<sub>2</sub>CrO<sub>4</sub> ya aporta CrO<sub>4</sub><sup>2-</sup> 0,0100 M. Lo que disuelve el sólido suma un poco más, pero s es muchísimo menor que 0,0100, así que [CrO<sub>4</sub><sup>2-</sup>] ≈ 0,0100 M. Entonces K<sub>ps</sub> = (2s)<sup>2</sup> · 0,0100 = 0,0400·s<sup>2</sup>, y s = √(1,1·10<sup>-12</sup>/0,0400) = √(2,75·10<sup>-11</sup>) = <b>5,2·10<sup>-6</sup> mol/L</b>. → <b>Control.</b> Es menor que en agua pura (Le Chatelier: hay un ion de más del lado de los productos). Además 5,2·10<sup>-6</sup> ≪ 0,0100, así que la aproximación es válida. → <b>Error típico:</b> en a) usar s<sup>2</sup> o (2s)<sup>2</sup> sin el tercer factor, y en el último paso olvidarse de multiplicar por la masa molar."},


{st: '<b>Ejercicio 3 · Parcial de Química Básica CB040, Curso 3</b> <span class="muted">(textual)</span><br>“<i>El vinagre de cocina es una solución acuosa que tiene una concentración de 5 % m/V de ácido acético. Dato: Ka (CH<sub>3</sub>COOH) = 1,75x10<sup>-5</sup><br>a) Escriba los balances y expresiones que describen los equilibrios en el sistema dado y calcule el pH que tiene el vinagre explicitando las suposiciones que realiza en los cálculos..<br>b) Calcule % de ionización (alfa) del ácido acético en el vinagre<br>c) Calcule en pH que tendrá la solución resultante de mezclar 5 mL de vinagre con 95 mL de agua (considere que los volúmenes son aditivos)</i>”',
 ans: 'C<sub>0</sub> = 0,8326 M → <b>a) pH = 2,42</b> · <b>b) α = 0,458 %</b> · <b>c) pH = 3,07</b> (y α sube a 2,05 %).',
 sol: '<b>Paso 0 · el 5 % m/V a molaridad.</b> 5 % m/V son 5 g en 100 mL, o sea <b>50 g/L</b>. Con M(CH<sub>3</sub>COOH) = 60,05 g/mol: C<sub>0</sub> = 50/60,05 = <b>0,8326 M</b>. Sin este paso el resto no arranca, y es el único lugar donde entra la masa molar. → <b>a) Balances y expresiones.</b> Equilibrios: CH<sub>3</sub>COOH + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + CH<sub>3</sub>COO<sup>-</sup> y 2 H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + OH<sup>-</sup>. Expresiones: K<sub>a</sub> = [CH<sub>3</sub>COO<sup>-</sup>][H<sub>3</sub>O<sup>+</sup>]/[CH<sub>3</sub>COOH] y K<sub>w</sub> = [H<sub>3</sub>O<sup>+</sup>][OH<sup>-</sup>]. Balance de masa: C<sub>0</sub> = [CH<sub>3</sub>COOH] + [CH<sub>3</sub>COO<sup>-</sup>]. Balance de carga: [H<sub>3</sub>O<sup>+</sup>] = [CH<sub>3</sub>COO<sup>-</sup>] + [OH<sup>-</sup>]. → <b>Suposiciones, escritas:</b> (1) la solución es ácida, se desprecia [OH<sup>-</sup>] en el balance de carga y queda [H<sub>3</sub>O<sup>+</sup>] ≈ [CH<sub>3</sub>COO<sup>-</sup>] = x; (2) el ácido está poco disociado, C<sub>0</sub> − x ≈ C<sub>0</sub>. → x = √(K<sub>a</sub>·C<sub>0</sub>) = √(1,75·10<sup>-5</sup>·0,8326) = <b>3,817·10<sup>-3</sup> M</b> → <b>pH = −log(3,817·10<sup>-3</sup>) = 2,42</b>. → <b>Chequeo de las suposiciones, que el enunciado pide:</b> C<sub>0</sub>/x = 0,8326/3,817·10<sup>-3</sup> = <b>218 ≥ 100 ✔</b> y C<sub>0</sub>/K<sub>a</sub> = 4,8·10<sup>4</sup> ≥ 1000 ✔. Por control, la cuadrática exacta x<sup>2</sup> + K<sub>a</sub>x − K<sub>a</sub>C<sub>0</sub> = 0 da x = 3,809·10<sup>-3</sup> y <b>el mismo pH 2,42</b>. → <b>b) α</b> = x/C<sub>0</sub> = 3,817·10<sup>-3</sup>/0,8326 = 4,58·10<sup>-3</sup> → <b>0,458 %</b>. De cada mil moléculas de ácido acético del vinagre, menos de cinco están ionizadas: eso es lo que significa “débil”. → <b>c) La dilución.</b> Ojo con el volumen final: 5 mL <b>más</b> 95 mL son 100 mL, así que se diluye <b>20 veces</b>, no 19. C(dil) = 0,8326·5/100 = <b>0,0416 M</b> → x(dil) = √(1,75·10<sup>-5</sup>·0,0416) = 8,54·10<sup>-4</sup> → <b>pH = 3,07</b>. → Y acá el chequeo <b>falla</b>: C(dil)/x(dil) = <b>49 &lt; 100</b>. Hay que declararlo y resolver por cuadrática: x(dil) = 8,45·10<sup>-4</sup>, que da <b>el mismo pH 3,07</b> a dos decimales. No cambia la nota, pero <b>escribir que el criterio no se cumple sí la cambia</b>, porque el enunciado ordena explicitar las suposiciones. → <b>Lo que el ítem c enseña (ley de dilución de Ostwald):</b> diluir 20 veces subió el pH sólo <b>0,65 unidades</b> (un ácido fuerte habría subido 1,30) mientras que α pasó de 0,458 % a <b>2,05 %</b>, es decir se multiplicó por 4,5 = √20. Al diluir, el equilibrio se corre hacia la disociación para compensar. <span class="muted">Los números coinciden con los resultados auditados por la cátedra para este parcial.</span>'},

{st: '<b>Ejercicio 3 · Parcial del 30/05/2025</b> <span class="muted">(textual · 30 puntos)</span><br>“<i>Se colocan 4 moles de SbCl<sub>5</sub> puro en un recipiente rígido de 3 litros, a 182°C. Ocurre la siguiente reacción: SbCl<sub>5</sub>(g) ↔ SbCl<sub>3</sub>(g) + Cl<sub>2</sub>(g) &nbsp; ΔH &lt; 0. Establecido el equilibrio, se encontró que el sistema contenía 0,17 moles de cloro gaseoso.<br>a) Calcular Kc y Kp a 182°C. Escriba la expresiones de ambas.<br>b) Calcule el porcentaje de descomposición del SbCl<sub>5</sub>.<br>c) Si se desea obtener más SbCl<sub>3</sub>, ¿conviene agregar o remover Cl<sub>2</sub> del sistema? Justifique.<br>d) Con el mismo propósito, ¿conviene aumentar o disminuir la temperatura? Justifique.</i>”',
 ans: '<b>a)</b> K<sub>c</sub> = 2,52·10<sup>-3</sup> y K<sub>p</sub> = 0,094 · <b>b)</b> 4,25 % · <b>c)</b> <b>remover</b> Cl<sub>2</sub> · <b>d)</b> <b>bajar</b> la temperatura.',
 sol: '<b>a) La tabla ICE, primero en moles.</b> El cloro del equilibrio <b>es</b> el avance de la reacción, porque se partió de SbCl<sub>5</sub> puro: x = 0,17 mol. Estequiometría 1:1:1 → se descompusieron 0,17 mol de SbCl<sub>5</sub> y se formaron 0,17 mol de SbCl<sub>3</sub>. Equilibrio: 3,83 · 0,17 · 0,17 mol. → <b>Y ahora el paso que decide el ejercicio: dividir por V = 3 L</b>, porque K<sub>c</sub> se calcula con concentraciones. [SbCl<sub>5</sub>] = 1,2767 M, [SbCl<sub>3</sub>] = [Cl<sub>2</sub>] = 0,05667 M. Si te quedás en moles, el número sale mal por un factor V<sup>Δn</sup> = 3. → K<sub>c</sub> = [SbCl<sub>3</sub>][Cl<sub>2</sub>]/[SbCl<sub>5</sub>] = (0,05667)<sup>2</sup>/1,2767 = <b>2,52·10<sup>-3</sup></b>. → Para K<sub>p</sub>: Δn = 2 − 1 = <b>+1</b> y T = 182 + 273 = <b>455 K</b> → K<sub>p</sub> = p<sub>SbCl3</sub>·p<sub>Cl2</sub>/p<sub>SbCl5</sub> = K<sub>c</sub>·(R·T)<sup>1</sup> = 2,52·10<sup>-3</sup>·0,0821·455 = <b>0,094</b>. Control por el camino largo: p(SbCl<sub>5</sub>) = 47,69 atm, p(SbCl<sub>3</sub>) = p(Cl<sub>2</sub>) = 2,117 atm → 2,117<sup>2</sup>/47,69 = 0,094 ✔. → <b>b) % de descomposición</b> = 0,17/4 = 0,0425 → <b>4,25 %</b>. Coherente con K<sub>c</sub> = 2,5·10<sup>-3</sup> &lt;&lt; 1: el equilibrio está muy corrido a la izquierda. → <b>c) Remover Cl<sub>2</sub>.</b> El cloro es un <b>producto</b>: al sacarlo, Q = [SbCl<sub>3</sub>][Cl<sub>2</sub>]/[SbCl<sub>5</sub>] cae por debajo de K<sub>c</sub>, y con <b>Q &lt; K</b> el sistema evoluciona hacia la derecha para reponerlo, formando de paso más SbCl<sub>3</sub>. Agregar Cl<sub>2</sub> haría exactamente lo contrario. Es el truco industrial estándar: sacar producto para forzar la conversión. → <b>d) Bajar la temperatura.</b> El enunciado escribe <b>ΔH &lt; 0</b>: la directa es <b>exotérmica</b>. Bajar T desplaza el equilibrio en el sentido exotérmico (hacia los productos) y además <b>aumenta el valor de K<sub>c</sub></b>. → El reflejo “si quiero más producto, caliento” acá te da <b>menos</b> SbCl<sub>3</sub>, y encima te hace decir que K no cambia cuando sí cambia: dos errores en un solo renglón. → <b>Cómo se redacta la justificación de c) y d):</b> nombrá la perturbación, escribí qué le pasa a Q (o al sentido endotérmico/exotérmico), y recién después el sentido del desplazamiento. Los 12 puntos de c) + d) son de <b>justificación</b>, no de cuenta.'},

{st: '<b>Ejercicio 3 · 1er Recuperatorio del 14/06/24</b> <span class="muted">(textual)</span><br>“<i>Un método industrial de obtención de combustible gaseoso emplea la reacción entre el carbón y el vapor de agua: C(s) + H<sub>2</sub>O(g) &lt;==&gt; CO(g) + H<sub>2</sub>(g). En un ensayo a 800 °C se determinó que cuando las presiones parciales del monóxido de carbono y el hidrógeno son iguales a 6,151 atm y la del vapor de agua 2,649 atm el sistema se halla en equilibrio.<br>a) En un recipiente cerrado de 500 L se colocan 10 kg de carbón, 50 moles de vapor de agua y un reciclo de 10 moles de CO y 30 moles de H<sub>2</sub>. Si se mantiene la temperatura constante a 800 °C, ¿se obtendrá más hidrógeno? Justifique el razonamiento utilizado.<br>b) Se sabe que a la temperatura de trabajo Δ H°f(H2O(g)) = -241820 J/mol y Δ H°f_(CO(g)) = -110500 J/mol. Explique en detalle cómo aplica el principio de Le Chatelier para decidir si conviene trabajar a alta o baja temperatura a los efectos de obtener más combustible.<br>c) Analice si un aumento de presión sobre el sistema reaccionante conduce o no a más producto, emplee el principio de Le Chatelier en su justificación.<br>d) Cuando en el reactor con carbón en exceso se colocan 55 moles de vapor de agua, al alcanzar el equilibrio se forman 37,6 moles de H<sub>2</sub>. Calcular los kilos de H<sub>2</sub> que se obtienen por cada tonelada de vapor de agua si se trabaja alcanzando el 80 % de la conversión de equilibrio en esas condiciones.</i>”',
 ans: 'K<sub>p</sub> = 14,28 → <b>a)</b> sí, porque Q<sub>p</sub> = 1,06 &lt; K<sub>p</sub> · <b>b)</b> <b>alta</b> temperatura (ΔH° = +131,3 kJ/mol, endotérmica) · <b>c)</b> <b>no</b>: con Δn = +1, subir P va hacia los reactivos · <b>d)</b> ≈ <b>61 kg de H<sub>2</sub></b> por tonelada de vapor.',
 sol: '<b>Paso 0 · K<sub>p</sub> del ensayo.</b> El carbono es <b>sólido puro</b> y no va en la expresión: K<sub>p</sub> = p<sub>CO</sub>·p<sub>H2</sub>/p<sub>H2O</sub> = (6,151·6,151)/2,649 = <b>14,28</b>. Sin esto no hay ítem a). → <b>a) Q contra K.</b> Los moles hay que pasarlos a presiones parciales con p = nRT/V, con T = 800 + 273 = <b>1073 K</b> y V = 500 L. El factor común es RT/V = 0,0821·1073/500 = <b>0,17619 atm/mol</b> → p(H<sub>2</sub>O) = 8,809 atm · p(CO) = 1,762 atm · p(H<sub>2</sub>) = 5,286 atm. El carbón <b>no aporta presión</b>. → Q<sub>p</sub> = (1,762·5,286)/8,809 = <b>1,06</b>, trece veces por debajo de K<sub>p</sub> = 14,28. Como <b>Q &lt; K</b> el sistema evoluciona hacia los productos: <b>sí, se obtendrá más hidrógeno</b>. → El reciclo de CO y H<sub>2</sub> está puesto para que sospeches que ya hay demasiado producto; el número dice que no. Y los <b>10 kg de carbón</b> son un dato con función, no relleno: garantizan que hay sólido presente (sin sólido no hay equilibrio heterogéneo) y que el carbono no es limitante en d). Si los pasaste a moles y los metiste en Q, perdiste el ítem entero. → <b>b) Le Chatelier con temperatura.</b> Primero el ΔH° por ley de Hess, con ΔH°<sub>f</sub> del C(s) y del H<sub>2</sub>(g) iguales a cero por ser elementos en su estado estándar: ΔH° = (−110.500 + 0) − (0 − 241.820) = <b>+131.320 J/mol = +131,3 kJ/mol</b>. → ΔH° &gt; 0: la directa es <b>endotérmica</b>. Aumentar T desplaza el equilibrio en el sentido endotérmico (hacia los productos) y <b>aumenta K<sub>p</sub></b>. <b>Conviene alta temperatura</b>, y por eso el ensayo se hizo a 800 °C. → Sin el signo de ΔH este ítem <b>no tiene respuesta</b>: fijate que la cátedra te dio los dos ΔH°<sub>f</sub> justamente para que lo calcules. → <b>c) Le Chatelier con presión.</b> Contá los moles <b>gaseosos</b>: izquierda 1 (sólo el H<sub>2</sub>O, el carbono es sólido), derecha 2 → <b>Δn = +1</b>. Un aumento de presión desplaza hacia el lado con <b>menos</b> moles gaseosos, o sea hacia los reactivos: <b>no, aumentar la presión no conduce a más producto</b>. Industrialmente conviene presión baja. → Acá el sólido se cobra dos veces: si contaste el C como gas te da Δn = 0 y contestás que la presión no afecta, que es otra respuesta equivocada. → <b>d) Los dos rendimientos encadenados.</b> Con 55 mol de agua se forman 37,6 mol de H<sub>2</sub>, y como H<sub>2</sub>O:H<sub>2</sub> es 1:1, la <b>conversión de equilibrio</b> es 37,6/55 = 0,6836 → <b>68,36 %</b>. Trabajando al <b>80 % de eso</b>: 0,8·0,6836 = <b>0,5469 → 54,69 %</b>. → 1 tonelada de vapor = 1.000.000/18,02 = <b>55.494 mol</b> → n(H<sub>2</sub>) = 55.494·0,5469 = 30.350 mol → m = 30.350·2,016 = 61.186 g = <b>61,2 kg</b>. <span class="muted">Con M(H<sub>2</sub>O) = 18 y M(H<sub>2</sub>) = 2 redondos da 60,8 kg: diferencia de redondeo, no de método.</span> → <b>La trampa deliberada:</b> “80 % <b>de</b> la conversión de equilibrio” no es “conversión del 80 %”. Quien calcula 55.494·0,80·2 g se lleva 88,8 kg, un 45 % de más.'},

{st: '<b>Ejercicio 3 · 2do Recuperatorio del 6/12/2024</b> <span class="muted">(textual · 40 puntos: a=8, b=10, c=10, d=12)</span><br>“<i>El laboratorio de control de una industria alimenticia debe verificar la calidad de un vinagre de cocina en cuya etiqueta indica que posee un 5 % m/V de ácido acético (ácido etanoico). Para ello se toman 3 ml de una muestra de vinagre, se le agrega un poco de agua destilada y unas gotas de fenolftaleína y se titula con una solución de hidróxido de sodio 0,1250 M, consumiendo 17,85 ml de la solución de hidróxido hasta el viraje del indicador.<br>a) Escriba la reacción de neutralización y nombre todos los reactivos y productos involucrados. Indique cuál es el color de la fenolftaleína antes y después del punto de equivalencia.<br>b) Indique si el vinagre ensayado cumple con las condiciones de calidad para ser puesto a la venta. Realice los cálculos pertinentes para justificar su respuesta.<br>c) Si se reemplaza el titulante por hidróxido de calcio de igual concentración molar, ¿cuántos mililitros gastaría para titular una muestra de 5 ml de vinagre? Escriba la reacción de neutralización y Justifique su respuesta.<br>d) Calcule el pH inicial del vinagre antes de realizar la titulación. Realice los balances de carga y de masa y justifique las suposiciones que hizo al realizar los cálculos. Dato: Ka = 1,8.10<sup>-5</sup>.</i>”',
 ans: '<b>a)</b> CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O; fenolftaleína <b>incolora antes</b>, <b>rosa fucsia después</b> · <b>b)</b> 4,47 % m/V: <b>NO cumple</b> · <b>c)</b> 14,9 mL · <b>d)</b> pH = 2,44.',
 sol: '<b>a) Reacción y nombres.</b> CH<sub>3</sub>COOH + NaOH → CH<sub>3</sub>COONa + H<sub>2</sub>O: <b>ácido acético</b> (etanoico) + <b>hidróxido de sodio</b> → <b>acetato de sodio</b> (etanoato de sodio) + <b>agua</b>. El enunciado pide nombrar los <b>cuatro</b>, y son 8 puntos. → Fenolftaleína: <b>incolora antes</b> del punto de equivalencia (medio ácido o casi neutro), <b>rosa fucsia después</b>, porque la primera gota de NaOH en exceso lleva el pH por encima de 8,2. → <b>b) Cumple o no.</b> n(NaOH) = 0,01785 L·0,1250 M = <b>2,2313·10<sup>-3</sup> mol</b>; estequiometría 1:1 → ésos son los moles de ácido en los 3 mL → C = 2,2313·10<sup>-3</sup>/0,003 = <b>0,7438 M</b> → %m/V = 0,7438·60,05 = 44,66 g/L = <b>4,47 % m/V</b>. Contra el 5 % declarado, el vinagre tiene un <b>10,7 % menos</b> de ácido acético: <b>no cumple</b> y no puede venderse con ese rótulo. → <b>El “poco de agua destilada” no entra en ningún cálculo</b>: diluye la muestra pero no cambia los moles de ácido, que es lo único que la titulación mide. Por eso el enunciado no dice cuánta es. El volumen que importa es el de la <b>alícuota original, 3 mL</b>. → <b>c) Con Ca(OH)<sub>2</sub>, dos cambios a la vez.</b> Reacción: <b>2 CH<sub>3</sub>COOH + Ca(OH)<sub>2</sub> → Ca(CH<sub>3</sub>COO)<sub>2</sub> + 2 H<sub>2</sub>O</b>. n(ácido) en 5 mL = 0,7438·0,005 = 3,719·10<sup>-3</sup> mol → n(Ca(OH)<sub>2</sub>) = 3,719·10<sup>-3</sup>/<b>2</b> = 1,859·10<sup>-3</sup> mol → V = 1,859·10<sup>-3</sup>/0,1250 = 0,014875 L = <b>14,88 ≈ 14,9 mL</b>. → Control mental de dos segundos: con NaOH, 5 mL de vinagre habrían gastado 17,85·(5/3) = 29,75 mL; con una base que aporta el <b>doble</b> de OH<sup>-</sup> por mol, la mitad → 14,88 ✔. Si te olvidás del 2 te da 29,75 y el ítem entero (10 puntos) se cae. → <b>d) pH inicial.</b> Balance de masa: C<sub>0</sub> = [CH<sub>3</sub>COOH] + [CH<sub>3</sub>COO<sup>-</sup>]. Balance de carga: [H<sub>3</sub>O<sup>+</sup>] = [CH<sub>3</sub>COO<sup>-</sup>] + [OH<sup>-</sup>]. Suposiciones: solución ácida → se desprecia [OH<sup>-</sup>] y queda [H<sub>3</sub>O<sup>+</sup>] ≈ [CH<sub>3</sub>COO<sup>-</sup>] = x; ácido poco disociado → C<sub>0</sub> − x ≈ C<sub>0</sub>. → <b>C<sub>0</sub> es 0,7438 M, la concentración medida en b), no el 5 % de la etiqueta</b>: el ítem viene después del b) justamente para eso. x = √(1,8·10<sup>-5</sup>·0,7438) = 3,66·10<sup>-3</sup> → <b>pH = 2,44</b>, con C<sub>0</sub>/x = 203 ≥ 100 ✔ y α = 0,49 %. <span class="muted">Con el 0,8326 M de la etiqueta y el mismo K<sub>a</sub> = 1,8·10<sup>-5</sup> de este examen daría 2,41; con el K<sub>a</sub> = 1,75·10<sup>-5</sup> del parcial del Curso 3 daría 2,42. La diferencia es chica, pero el número que corresponde acá es el que sale de la concentración medida.</span> → <b>Extra que cierra el ítem a) y no lo pide el examen:</b> en la equivalencia todo el ácido es acetato, n = 2,2313·10<sup>-3</sup> mol en 3 + 17,85 = 20,85 mL → C = 0,107 M; hidroliza con K<sub>hb</sub> = K<sub>w</sub>/K<sub>a</sub> = 5,56·10<sup>-10</sup> → [OH<sup>-</sup>] = 7,71·10<sup>-6</sup> → <b>pH = 8,89</b>, adentro del viraje de la fenolftaleína (8,2-10) ✔. Con anaranjado de metilo (2,4-4,4) habrías cortado la titulación muchísimo antes.'},

{st: '<b>Ejercicio 3 · 2do Recuperatorio del 27/06/25</b> <span class="muted">(textual · 30 puntos: a=20, b=10)</span><br>“<i>a) Se mezclan 9 L de solución acuosa de HCl 0,9 M con 12 L de solución acuosa de hidróxido de bario 0,3M. Escribir la ecuación de la reacción que tiene lugar y calcular el pH de la solución obtenida explicitando el razonamiento utilizado. Considerar volúmenes aditivos.<br>b) A partir de los datos de los siguientes ácidos débiles: Ka (HClO) = 10<sup>-7</sup> ; Ka (HF) = 10<sup>-3</sup> ; Ka (HCN) = 10<sup>-9</sup>; escribir ecuación de disociación del ácido, indicar fórmula y nombre de sus bases conjugadas y ordenarlas de mayor a menor basicidad justificando su respuesta.</i>”',
 ans: '<b>a)</b> 2 HCl + Ba(OH)<sub>2</sub> → BaCl<sub>2</sub> + 2 H<sub>2</sub>O → sobran 0,9 mol de H<sup>+</sup> en 21 L → <b>pH = 1,37</b> · <b>b)</b> <b>CN<sup>-</sup> &gt; ClO<sup>-</sup> &gt; F<sup>-</sup></b>.',
 sol: '<b>a) Aritmética de moles, con el factor 2 del hidróxido de bario.</b> Ecuación: <b>2 HCl + Ba(OH)<sub>2</sub> → BaCl<sub>2</sub> + 2 H<sub>2</sub>O</b> (iónica neta: H<sub>3</sub>O<sup>+</sup> + OH<sup>-</sup> → 2 H<sub>2</sub>O). → n(H<sup>+</sup>) = 9 L·0,9 M = <b>8,1 mol</b>. → n(OH<sup>-</sup>) = 12 L·0,3 M·<b>2</b> = <b>7,2 mol</b>, porque el <b>Ba(OH)<sub>2</sub> aporta dos OH<sup>-</sup> por fórmula</b>. → Exceso de ácido = 8,1 − 7,2 = <b>0,9 mol</b>, en V total = 9 + 12 = <b>21 L</b> → [H<sub>3</sub>O<sup>+</sup>] = 0,9/21 = 4,29·10<sup>-2</sup> M → <b>pH = 1,37</b>. → No hay equilibrio que resolver: los dos son fuertes, se disocian por completo y el BaCl<sub>2</sub> es sal de fuerte con fuerte, no hidroliza. Lo único que decide es la resta. → <b>Cuánto cuesta el factor 2:</b> con 3,6 mol de OH<sup>-</sup> el exceso pasa a 4,5 mol y el pH cae a <b>0,67</b>. Son <b>0,7 unidades de pH</b>, un factor 5 en la concentración de protones, en un ítem de <b>20 de los 100 puntos del examen</b>. La cátedra eligió hidróxido de <b>bario</b> (y no de sodio) exactamente para esto. → <b>b) Las conjugadas, en tres pasos.</b> Ecuaciones: HCN + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + CN<sup>-</sup> · HClO + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + ClO<sup>-</sup> · HF + H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + F<sup>-</sup>. → Fórmulas y nombres: <b>CN<sup>-</sup> ion cianuro</b>, <b>ClO<sup>-</sup> ion hipoclorito</b>, <b>F<sup>-</sup> ion fluoruro</b>. → K<sub>b</sub> = K<sub>w</sub>/K<sub>a</sub>: CN<sup>-</sup> → 10<sup>-14</sup>/10<sup>-9</sup> = <b>10<sup>-5</sup></b> · ClO<sup>-</sup> → 10<sup>-14</sup>/10<sup>-7</sup> = <b>10<sup>-7</sup></b> · F<sup>-</sup> → 10<sup>-14</sup>/10<sup>-3</sup> = <b>10<sup>-11</sup></b>. → Orden de mayor a menor basicidad: <b>CN<sup>-</sup> &gt; ClO<sup>-</sup> &gt; F<sup>-</sup></b>. → <b>La justificación, en una línea:</b> como K<sub>a</sub>·K<sub>b</sub> = K<sub>w</sub> es constante, el orden de basicidad de las conjugadas es <b>exactamente el inverso</b> del orden de acidez de los ácidos. El HF es el más fuerte de los tres y por eso su conjugada es la base más débil. → Con los K<sub>a</sub> dados en potencias redondas de 10 el ejercicio se resuelve <b>sin calculadora</b>: sólo hay que ordenar exponentes. Escribir las tres K<sub>b</sub> igual vale, porque el enunciado pide justificar.'},

{st: '<b>Ejercicio 3 · Parcial de Química Básica CB040, Curso 2</b> <span class="muted">(textual · el hermano del vinagre, pero con una base)</span><br>“<i>Se quiere preparar un producto de limpieza de base acuosa que contiene amoniaco, tal que presente un pH = 10,5. Dato: pKb (amoniaco) = 4,74<br>a) Escriba los balances y expresiones que describen los equilibrios en el sistema dado y calcule la concentración inicial de amoniaco (en molaridad) para fabricar el producto explicitando las suposiciones que realiza en los cálculos.<br>b) Calcule % de ionización (alfa) del amoniaco.<br>c) Si se quiere sustituir el amoniaco por hidróxido de sodio calcular la concentración molar de este último para obtener un producto con el mismo pH. Justificar su respuesta</i>”',
 ans: '<b>a)</b> C<sub>0</sub> = 5,81·10<sup>-3</sup> M por la vía exacta (la aproximada da 5,50·10<sup>-3</sup>, un 5,4 % de error) · <b>b)</b> α = 5,44 % · <b>c)</b> NaOH 3,16·10<sup>-4</sup> M, unas <b>18 veces menos</b> concentrado.',
 sol: '<b>Por qué este ejercicio está acá:</b> es el único de los tres parciales de curso donde <b>la aproximación x &lt;&lt; C no se cumple</b>, y encima el dato viene como <b>pK<sub>b</sub></b> y no como K<sub>a</sub>. Los dos anzuelos del bloque en un solo ejercicio. → <b>a) Balances y expresiones.</b> Equilibrios: NH<sub>3</sub> + H<sub>2</sub>O ⇌ NH<sub>4</sub><sup>+</sup> + OH<sup>-</sup> y 2 H<sub>2</sub>O ⇌ H<sub>3</sub>O<sup>+</sup> + OH<sup>-</sup>. Expresiones: K<sub>b</sub> = [NH<sub>4</sub><sup>+</sup>][OH<sup>-</sup>]/[NH<sub>3</sub>] y K<sub>w</sub>. Balance de masa: C<sub>0</sub> = [NH<sub>3</sub>] + [NH<sub>4</sub><sup>+</sup>]. Balance de carga: [NH<sub>4</sub><sup>+</sup>] + [H<sub>3</sub>O<sup>+</sup>] = [OH<sup>-</sup>]. → <b>Suposición 1:</b> la solución es básica (pOH = 3,5 ≤ 6), se desprecia [H<sub>3</sub>O<sup>+</sup>] y queda <b>[OH<sup>-</sup>] ≈ [NH<sub>4</sub><sup>+</sup>] = x</b>. → El pH está <b>dado</b>, así que x se conoce de entrada: pOH = 14 − 10,5 = 3,5 → <b>x = [OH<sup>-</sup>] = 3,162·10<sup>-4</sup> M</b>. Y K<sub>b</sub> = 10<sup>-4,74</sup> = <b>1,82·10<sup>-5</sup></b>. → El ejercicio va <b>al revés</b> (te dan el pH y pedís C<sub>0</sub>), y en esa dirección la forma exacta es más simple que la cuadrática, porque x ya lo tenés: <b>C<sub>0</sub> = x<sup>2</sup>/K<sub>b</sub> + x</b> = (3,162·10<sup>-4</sup>)<sup>2</sup>/1,82·10<sup>-5</sup> + 3,162·10<sup>-4</sup> = 5,495·10<sup>-3</sup> + 3,162·10<sup>-4</sup> = <b>5,81·10<sup>-3</sup> M</b>. → <b>El chequeo, que acá falla:</b> C<sub>0</sub>/x = 5,81·10<sup>-3</sup>/3,162·10<sup>-4</sup> = <b>18,4 &lt; 100 ✘</b>. La aproximada C<sub>0</sub> ≈ x<sup>2</sup>/K<sub>b</sub> = 5,50·10<sup>-3</sup> M se equivoca en un <b>5,4 %</b>. No es catastrófico, pero el enunciado ordena explicitar las suposiciones: lo que puntúa es <b>declarar que el criterio no se cumple y usar la forma exacta</b>, que además es un término más de suma. → <b>b) α</b> = x/C<sub>0</sub> = 3,162·10<sup>-4</sup>/5,81·10<sup>-3</sup> = <b>5,44 %</b>. Fijate que α y el error de la aproximación dan el mismo número: no es casualidad, el término que se desprecia <b>es</b> α·C<sub>0</sub>. → <b>c) El NaOH equivalente.</b> El NaOH es base fuerte, se disocia por completo y aporta un OH<sup>-</sup> por fórmula → para pOH = 3,5 hace falta <b>C(NaOH) = 3,16·10<sup>-4</sup> M</b>, directo. → <b>La justificación que vale el punto:</b> hacen falta <b>18,4 veces menos</b> moles de NaOH que de amoníaco para el mismo pH, y ese cociente es exactamente <b>1/α</b>. El NaOH entrega todos sus OH<sup>-</sup>; el amoníaco, el 5,44 %. Ésa es, escrita con números, la diferencia entre fuerte y débil. → <b>Control de sensatez del ejercicio entero:</b> si en algún renglón te da pH 3,5 en vez de 10,5, tomaste x como [H<sub>3</sub>O<sup>+</sup>]: amoníaco es base, pH &gt; 7.'},

{st: '<b>Ejercicio 1 · 1er Recuperatorio del 14/06/24</b> <span class="muted">(textual · el ácido-base escondido adentro de un ejercicio de estequiometría)</span><br>“<i>5,0 gramos de una mezcla de 20 % en masa de carbonato de calcio y 80 % en masa de hidrogenocarbonato de calcio se calientan fuertemente hasta la descomposición total de ambos compuestos con un 90 % de rendimiento. <span class="muted">(la estequiometría del ítem a, en la sección 8)</span> Las reacciones de descomposición se dan según las siguientes reacciones: Ca(HCO<sub>3</sub>)<sub>2</sub>(s) → CaO(s) + 2 CO<sub>2</sub>(g) + H<sub>2</sub>O(l) ; CaCO<sub>3</sub>(s) → CaO(s) + CO<sub>2</sub>(g)<br>a) Calcule el volumen total de CO<sub>2</sub>(g) obtenido en ambas reacciones en CNPT por la descomposición de la mezcla<br>b) Si el óxido de calcio total obtenido en ambas reacciones se disuelve en 10 litros de agua para formar hidróxido de calcio. Escriba la reacción correspondiente al proceso y calcule la concentración molar y el pH de la solución resultante<br>c) Escriba la estructura de lewis del óxido de calcio y del dióxido de carbono e indique cuál de ellos es más soluble en agua justificando su respuesta en función de su estructura</i>”',
 ans: '<b>a)</b> 1,20 L de CO<sub>2</sub> en CNPT · <b>b)</b> CaO + H<sub>2</sub>O → Ca(OH)<sub>2</sub>; C = 3,12·10<sup>-3</sup> M y <b>pH = 11,80</b> · <b>c)</b> el <b>CaO</b>.',
 sol: '<b>a) Estequiometría de la mezcla.</b> 5,0 g con 20 % / 80 % → 1,0 g de CaCO<sub>3</sub> y 4,0 g de Ca(HCO<sub>3</sub>)<sub>2</sub>. Masas molares: CaCO<sub>3</sub> = 100,09 g/mol → <b>0,00999 mol</b>; Ca(HCO<sub>3</sub>)<sub>2</sub> = 162,11 g/mol → <b>0,02467 mol</b>. → El CO<sub>2</sub> sale <b>1:1</b> del carbonato pero <b>2:1</b> del hidrogenocarbonato: n(CO<sub>2</sub>) = (0,00999·1 + 0,02467·<b>2</b>)·0,90 = <b>0,0534 mol</b> → V = 0,0534·22,4 = <b>1,20 L</b> en CNPT. Perder el 2 acá te baja el volumen a 0,70 L. → <b>b) El ácido-base.</b> Reacción: <b>CaO(s) + H<sub>2</sub>O(l) → Ca(OH)<sub>2</sub>(ac)</b>. Los dos compuestos dan <b>1 CaO cada uno</b>: n(CaO) = (0,00999 + 0,02467)·0,90 = <b>0,0312 mol</b> → C = 0,0312/10 L = <b>3,12·10<sup>-3</sup> M</b>. → Y ahora el factor 2, que es lo que la cátedra viene a medir: el Ca(OH)<sub>2</sub> es base fuerte y aporta <b>dos OH<sup>-</sup> por fórmula</b> → [OH<sup>-</sup>] = 2·3,12·10<sup>-3</sup> = <b>6,24·10<sup>-3</sup> M</b> → pOH = 2,20 → <b>pH = 11,80</b>. → Sin el 2 te da pH = 11,49: <b>0,31 unidades</b> de diferencia, que en la corrección es la diferencia entre el ítem bien y el ítem mal. → Control de coherencia: 3,12·10<sup>-3</sup> M está muy por debajo del límite de solubilidad del Ca(OH)<sub>2</sub> (del orden de 0,02 M), así que se disuelve todo y la hipótesis de base fuerte totalmente disociada se sostiene. → <b>c)</b> El <b>CaO</b> es un sólido <b>iónico</b> que <b>reacciona</b> con el agua dando Ca(OH)<sub>2</sub> (es literalmente el ítem b); el <b>CO<sub>2</sub></b> es una molécula <b>lineal y no polar</b> (O=C=O, dos dobles enlaces, momentos dipolares que se cancelan) con sólo fuerzas de dispersión, poco soluble. <span class="muted">El detalle de Lewis y de las fuerzas intermoleculares está en la sección 5 de esta guía.</span> → <b>Ambigüedad del enunciado, para que no te trabe:</b> dice “hasta la <b>descomposición total</b> de ambos compuestos <b>con un 90 % de rendimiento</b>”, que son dos cosas en tensión. La lectura estándar es la que hicimos, aplicar el 90 %. Si en cambio tomaras descomposición completa, a) daría 1,33 L y b) daría pH 11,84: <b>la respuesta de b) casi no se mueve</b>, así que el ítem del pH no depende de cómo lo leas. Escribí en la hoja cuál interpretación usaste y seguí.'}

]);

/* ===================== 12 · ELECTROQUÍMICA ===================== */

registerReveals('fiuba-quimica', '12', [

{st: "<b>Básico · Ánodo y cátodo desde la reacción.</b> Una pila funciona con la reacción espontánea Fe(s) + Cu<sup>2+</sup>(ac) → Fe<sup>2+</sup>(ac) + Cu(s). a) Escribí la semirreacción que ocurre en cada electrodo. b) Indicá cuál es el ánodo y cuál el cátodo, y su polaridad. c) ¿Por dónde y en qué sentido van los electrones? d) ¿Qué pasa con la masa de cada barra?",
 ans: "a) Fe → Fe<sup>2+</sup> + 2e<sup>−</sup> y Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu. b) <b>Ánodo (−): Fe. Cátodo (+): Cu</b>. c) <b>Del Fe al Cu</b> por el cable externo. d) <b>La barra de Fe pierde masa y la de Cu gana</b>.",
 sol: "<b>Paso 1 · quién se oxida y quién se reduce.</b> En la reacción el Fe pasa de número de oxidación 0 a +2: perdió electrones, se <b>oxida</b>. El Cu<sup>2+</sup> pasa de +2 a 0: ganó electrones, se <b>reduce</b>. → <b>Paso 2 · semirreacciones.</b> Oxidación: <b>Fe(s) → Fe<sup>2+</sup>(ac) + 2e<sup>−</sup></b>. Reducción: <b>Cu<sup>2+</sup>(ac) + 2e<sup>−</sup> → Cu(s)</b>. Los electrones que pierde una son los que gana la otra (2 y 2), así que la suma da la reacción del enunciado. → <b>Paso 3 · nombres y signos.</b> Donde hay oxidación está el <b>ánodo</b>, y en una pila el ánodo es el polo negativo: el Fe es el ánodo (−). Donde hay reducción está el <b>cátodo</b>, polo positivo: el Cu es el cátodo (+). → <b>Paso 4 · electrones y masas.</b> Los electrones los entrega el ánodo y los recibe el cátodo, así que van por el cable <b>del Fe al Cu</b>. El Fe se disuelve como Fe<sup>2+</sup> (la barra pierde masa) y sobre el Cu se deposita Cu metálico (la barra gana masa). → <b>Control.</b> Oxidación en el ánodo y reducción en el cátodo vale siempre; lo que cambia entre pila y electrólisis es el signo, no esta regla. → <b>Error típico:</b> decidir ánodo y cátodo por la posición en el dibujo en lugar de por la semirreacción."},

{st: "<b>Básico · E° de una pila con la tabla.</b> Se arma la pila Pb(s) / Pb<sup>2+</sup>(1 M) // Ag<sup>+</sup>(1 M) / Ag(s). Con E°(Ag<sup>+</sup>/Ag) = +0,80 V y E°(Pb<sup>2+</sup>/Pb) = −0,13 V, calculá E°<sub>celda</sub> y decidí si la pila funciona tal como está escrita.",
 ans: "<b>E°<sub>celda</sub> = +0,93 V</b>, positivo: la pila funciona como está escrita.",
 sol: "<b>Paso 1 · quién es quién.</b> En la notación el ánodo va a la izquierda y el cátodo a la derecha: el Pb es el ánodo (se oxida) y la Ag<sup>+</sup> es el cátodo (se reduce). → <b>Paso 2 · restar.</b> E°<sub>celda</sub> = E°<sub>cátodo</sub> − E°<sub>ánodo</sub> = 0,80 − (−0,13) = <b>+0,93 V</b>. Se copian los dos valores de la tabla tal cual y el menos de la fórmula hace el resto. → <b>Paso 3 · lectura.</b> Positivo significa reacción espontánea: la pila anda con el sentido en que está escrita. La global es Pb + 2Ag<sup>+</sup> → Pb<sup>2+</sup> + 2Ag, con n = 2. → <b>Control.</b> La Ag<sup>+</sup> tiene mayor E° que el Pb<sup>2+</sup>, así que se reduce ella y se oxida el Pb, justo como dice la notación. → <b>Error típico:</b> multiplicar el E° de la plata por 2 porque aparece 2Ag<sup>+</sup> en la global. Un potencial no depende de cuántos moles reaccionan: el 2 va a n, no a E°."},

{st: "<b>Básico · Notación con electrodo inerte.</b> Una pila tiene como ánodo una barra de Pb en Pb<sup>2+</sup> 1 M. El cátodo es un alambre de Pt sumergido en una solución con Fe<sup>3+</sup> 1 M y Fe<sup>2+</sup> 1 M, donde el Fe<sup>3+</sup> se reduce a Fe<sup>2+</sup>. Escribí la notación de la pila y calculá E°<sub>celda</sub> con E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = +0,77 V y E°(Pb<sup>2+</sup>/Pb) = −0,13 V.",
 ans: "<b>Pb(s) / Pb<sup>2+</sup>(1 M) // Fe<sup>3+</sup>(1 M), Fe<sup>2+</sup>(1 M) / Pt(s)</b>; <b>E°<sub>celda</sub> = +0,90 V</b>.",
 sol: "<b>Paso 1 · orden.</b> La notación va del ánodo al cátodo, con // en el puente salino. Primero el ánodo: Pb(s) / Pb<sup>2+</sup>(1 M). → <b>Paso 2 · el cátodo.</b> El Fe<sup>3+</sup> y el Fe<sup>2+</sup> están disueltos en la misma solución, y el electrodo es un Pt que sólo conduce. Las especies de una misma fase se separan con coma, no con barra, y el electrodo inerte va en el extremo: <b>Fe<sup>3+</sup>(1 M), Fe<sup>2+</sup>(1 M) / Pt(s)</b>. → <b>Paso 3 · juntar.</b> <b>Pb(s) / Pb<sup>2+</sup>(1 M) // Fe<sup>3+</sup>(1 M), Fe<sup>2+</sup>(1 M) / Pt(s)</b>. → <b>Paso 4 · E°.</b> E°<sub>celda</sub> = 0,77 − (−0,13) = <b>+0,90 V</b>, positivo, y por eso la pila funciona en ese sentido. La global es Pb + 2Fe<sup>3+</sup> → Pb<sup>2+</sup> + 2Fe<sup>2+</sup>, con n = 2. → <b>Control.</b> El Fe<sup>3+</sup> no pasa a Fe metálico: sólo baja a Fe<sup>2+</sup>, que es lo que dice el enunciado y lo que corresponde a su potencial. → <b>Error típico:</b> escribir Fe<sup>3+</sup> / Fe<sup>2+</sup> con una barra, como si fueran dos fases distintas."},

{st: "<b>Básico · ¿Hay reacción o no?</b> Con E°(H<sup>+</sup>/H<sub>2</sub>) = 0,00 V, E°(Cu<sup>2+</sup>/Cu) = +0,34 V y E°(NO<sub>3</sub><sup>−</sup>/NO, en medio ácido) = +0,96 V, decidí: a) si un trozo de cobre se disuelve en HCl 1 M liberando H<sub>2</sub>; b) si se disuelve en HNO<sub>3</sub> 1 M formando Cu<sup>2+</sup> y NO.",
 ans: "a) <b>No</b>: E° = −0,34 V. b) <b>Sí</b>: E° = +0,62 V.",
 sol: "<b>Paso 1 · plantear la pila posible.</b> Disolver el cobre es oxidarlo: el Cu es el ánodo (Cu → Cu<sup>2+</sup>). Lo que cambia es el oxidante que lo ataca, que es el cátodo. → <b>Paso 2 · caso a.</b> Con HCl el oxidante es el H<sup>+</sup>: E°<sub>celda</sub> = E°<sub>cátodo</sub> − E°<sub>ánodo</sub> = 0,00 − 0,34 = <b>−0,34 V</b>. Es negativo: la reacción no es espontánea y el cobre <b>no</b> se disuelve en HCl. → <b>Paso 3 · caso b.</b> Con HNO<sub>3</sub> el oxidante es el NO<sub>3</sub><sup>−</sup> en medio ácido: E°<sub>celda</sub> = 0,96 − 0,34 = <b>+0,62 V</b>. Es positivo: el cobre <b>sí</b> se disuelve. → <b>Control.</b> Es la misma regla de la tabla de potenciales (la escala de la figura): un oxidante ataca a un metal sólo si está por encima de él. El H<sup>+</sup> (0,00 V) queda debajo del Cu (0,34 V); el nitrato (0,96 V) queda arriba. → <b>Error típico:</b> pensar que un ácido ataca a cualquier metal. Sólo ataca a los que tienen E° menor que el del oxidante del ácido."},

{st: "<b>Básico · Masa depositada con Faraday.</b> Una solución de AgNO<sub>3</sub> se electroliza con electrodos inertes con una corriente de 3,00 A durante 40,0 minutos. ¿Cuántos moles de electrones circulan y qué masa de plata se deposita en el cátodo? M(Ag) = 107,87 g/mol; F = 96 500 C/mol.",
 ans: "<b>0,0746 mol de e<sup>−</sup></b> y <b>8,05 g de Ag</b>.",
 sol: "<b>Paso 1 · tiempo en segundos.</b> 40,0 min × 60 = 2400 s. → <b>Paso 2 · carga.</b> Q = I · t = 3,00 A × 2400 s = <b>7200 C</b>. → <b>Paso 3 · moles de electrones.</b> n<sub>e</sub> = Q / F = 7200 C / 96 500 C/mol = <b>0,0746 mol</b>. → <b>Paso 4 · moles de plata.</b> La semirreacción es Ag<sup>+</sup> + e<sup>−</sup> → Ag: cada electrón deposita un átomo, z = 1, así que n(Ag) = 0,0746 mol. → <b>Paso 5 · masa.</b> m = 0,0746 mol × 107,87 g/mol = <b>8,05 g</b>. → <b>Control.</b> 1 F deposita 1 mol de Ag (107,87 g); 0,0746 F deben depositar 0,0746 de esa masa: 8,05 g. → <b>Error típico:</b> usar 40 en lugar de 2400 s: el tiempo siempre va en segundos."},

{st: "<b>Intermedio · ΔG° y constante de equilibrio desde E°.</b> Para la pila Zn(s) / Zn<sup>2+</sup>(1 M) // Ag<sup>+</sup>(1 M) / Ag(s), con E°(Ag<sup>+</sup>/Ag) = +0,80 V y E°(Zn<sup>2+</sup>/Zn) = −0,76 V, calculá E°<sub>celda</sub>, ΔG° en kJ y la constante de equilibrio de la reacción a 25 °C (usá 0,0592 V). F = 96 500 C/mol.",
 ans: "<b>E° = +1,56 V</b>; <b>ΔG° = −301 kJ</b>; <b>K ≈ 5·10<sup>52</sup></b>.",
 sol: "<b>Paso 1 · reacción y n.</b> Zn → Zn<sup>2+</sup> + 2e<sup>−</sup> y 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag, así que la global es Zn + 2Ag<sup>+</sup> → Zn<sup>2+</sup> + 2Ag, con <b>n = 2</b>. → <b>Paso 2 · E°.</b> E°<sub>celda</sub> = 0,80 − (−0,76) = <b>+1,56 V</b>. → <b>Paso 3 · ΔG°.</b> ΔG° = −n·F·E° = −2 × 96 500 C/mol × 1,56 V = −301 080 J/mol = <b>−301 kJ/mol</b>. Con F en C/mol y E en V el resultado sale en <b>J</b>; se pasa a kJ al final. → <b>Paso 4 · K.</b> ln K = n·F·E° / (R·T) se escribe con logaritmo decimal dividiendo por 2,303, y a 25 °C 2,303·R·T / F = 0,0592 V, así que log K = n·E° / 0,0592. Entonces log K = n·E° / 0,0592 = 2 × 1,56 / 0,0592 = 52,7, o sea <b>K = 10<sup>52,7</sup> ≈ 5·10<sup>52</sup></b>. → <b>Control.</b> E° positivo, ΔG° negativo y K enorme cuentan la misma historia: la reacción está casi completamente corrida hacia los productos. Si usás ln K = nFE°/RT con R = 8,314 J/(mol·K) da entre 5,6·10<sup>52</sup> (T = 298,15 K) y 6,0·10<sup>52</sup> (T = 298 K): el valor exacto depende de la constante elegida, el orden de magnitud no. → <b>Error típico:</b> dejar ΔG° en J y compararlo como si fuera kJ, o olvidar el n al calcular log K."},

{st: "<b>Intermedio · Nernst con una concentración distinta de 1 M.</b> Se arma la pila Cd(s) / Cd<sup>2+</sup>(1,00 M) // Ag<sup>+</sup>(0,010 M) / Ag(s) a 25 °C. Con E°(Ag<sup>+</sup>/Ag) = +0,80 V y E°(Cd<sup>2+</sup>/Cd) = −0,40 V, calculá la fem (usá 0,0592 V).",
 ans: "<b>E = 1,08 V</b>.",
 sol: "<b>Paso 1 · global y n.</b> Cd → Cd<sup>2+</sup> + 2e<sup>−</sup> y 2Ag<sup>+</sup> + 2e<sup>−</sup> → 2Ag dan Cd + 2Ag<sup>+</sup> → Cd<sup>2+</sup> + 2Ag, con <b>n = 2</b>. → <b>Paso 2 · E°.</b> E° = 0,80 − (−0,40) = <b>1,20 V</b>. → <b>Paso 3 · Q.</b> Productos sobre reactivos, sin los sólidos y con cada concentración elevada a su coeficiente: Q = [Cd<sup>2+</sup>] / [Ag<sup>+</sup>]<sup>2</sup> = 1,00 / (0,010)<sup>2</sup> = 1,00 / 1,0·10<sup>−4</sup> = <b>1,0·10<sup>4</sup></b>. → <b>Paso 4 · Nernst.</b> E = E° − (0,0592 / n)·log Q = 1,20 − (0,0592 / 2) × log(10<sup>4</sup>) = 1,20 − 0,0296 × 4 = 1,20 − 0,118 = <b>1,08 V</b>. → <b>Control.</b> Diluir la Ag<sup>+</sup> (un reactivo) hace que la reacción empuje menos: la fem tiene que dar <b>menor</b> que E° = 1,20 V, y así da. → <b>Error típico:</b> escribir [Ag<sup>+</sup>] sin elevar al cuadrado. Con el exponente olvidado Q = 100 y la fem daría 1,14 V, que está mal."},

{st: "<b>Intermedio · Tiempo para depositar una masa, con rendimiento.</b> Se quiere depositar 5,00 g de cobre electrolizando una solución de CuSO<sub>4</sub> con 2,50 A. a) ¿Cuánto tiempo hace falta si todo el paso de corriente se aprovecha? b) ¿Y si el rendimiento de corriente es del 90 %? M(Cu) = 63,55 g/mol; F = 96 500 C/mol.",
 ans: "a) <b>6,07·10<sup>3</sup> s ≈ 101 min</b>. b) <b>6,75·10<sup>3</sup> s ≈ 112 min</b>.",
 sol: "<b>Paso 1 · moles de Cu.</b> n(Cu) = 5,00 g / 63,55 g/mol = 0,0787 mol. → <b>Paso 2 · moles de electrones.</b> La semirreacción es Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu, con z = 2: n<sub>e</sub> = 2 × 0,0787 = 0,157 mol. → <b>Paso 3 · carga.</b> Q = n<sub>e</sub> · F = 0,157 mol × 96 500 C/mol = 1,52·10<sup>4</sup> C. → <b>Paso 4 · tiempo ideal.</b> t = Q / I = 15 185 C / 2,50 A = <b>6074 s</b>, o sea 6074 / 60 = <b>101 min</b> (a). → <b>Paso 5 · con rendimiento.</b> Si sólo el 90 % de la corriente deposita cobre, hay que dejar pasar más carga: t<sub>real</sub> = t<sub>ideal</sub> / 0,90 = 6074 / 0,90 = <b>6749 s ≈ 112 min</b> (b). → <b>Control.</b> Con rendimiento menor que 100 % el tiempo tiene que ser mayor que el ideal, y 112 min es más que 101 min. → <b>Error típico:</b> multiplicar por 0,90 en lugar de dividir: eso daría un tiempo menor que el ideal, imposible. (Para una masa dada se divide; para una corriente dada, la masa se multiplica por el rendimiento.)"},


  {
    st: '<b>Evaluación Integradora del 11/07/24 · Ejercicio 1 (textual)</b><br><br>“<i>Se tiene la siguiente pila que funciona a 25°C: Mg (s) / Mg 2+ (10-2 M) // H+ (pH=3) / H2 (g) (p=0,8 atm) / Pt(s)<br>.DATOS: E°Mg2+/Mg°= - 2,34v; E°H+/H2°= 0 v , F= 96500 C /mol , R= 8,314 J/K.mol<br>a) Escribir las reacciones anódicas, catódicas y global balanceadas que describe el funcionamiento de la celda, la ecuación de Nernst para la reacción global de la celda y calcular el potencial de la celda en dichas condiciones<br>b) Realizar un diagrama completo y claro de la celda indicando, polaridad de los electrodos, circulación de los electrones y productos obtenidos en el ánodo y el cátodo<br>c) Si se quiere aumentar el potencial de la celda variando el pH en el cátodo justifique claramente en su hoja de examen, aplicando Nernst si el pH debe disminuir o aumentar para producir el efecto deseado.</i>”<br><br><span class="muted">Es uno de los cuatro ejercicios de electroquímica que aparecen en la Parte A de las integradoras que se conocen.</span>',
    ans: 'a) Mg(s) + 2H<sup>+</sup> → Mg<sup>2+</sup> + H<sub>2</sub>(g), n = 2, E°celda = +2,34 V, Q = 8000 y <b>E<sub>celda</sub> = 2,22 V</b>. b) Ánodo Mg (-) donde se consume la barra de Mg, cátodo Pt (+) donde burbujea H<sub>2</sub>; electrones de Mg a Pt por el cable. c) <b>El pH del cátodo debe DISMINUIR</b>: cada unidad de pH menos suma 59,2 mV.',
    sol: '<b>a) Semirreacciones, global, Nernst y potencial</b><br><br>La notación ya dice quién es quién: a la izquierda del // está el ánodo, a la derecha el cátodo.<br><br>Ánodo (oxidación): <b>Mg(s) → Mg<sup>2+</sup>(ac) + 2e<sup>-</sup></b> &nbsp; E° = -2,34 V<br>Cátodo (reducción): <b>2H<sup>+</sup>(ac) + 2e<sup>-</sup> → H<sub>2</sub>(g)</b> &nbsp; E° = 0,00 V<br>Global: <b>Mg(s) + 2H<sup>+</sup>(ac) → Mg<sup>2+</sup>(ac) + H<sub>2</sub>(g)</b> &nbsp;&nbsp; <b>n = 2</b><br><br>Los electrones ya están igualados (2 y 2), así que no hay que multiplicar nada. Verificación de espontaneidad:<br>E°celda = E°cátodo - E°ánodo = 0 - (-2,34) = <b>+2,34 V &gt; 0</b> → la pila funciona en ese sentido, y la notación del enunciado está bien escrita.<br><br><b>Ecuación de Nernst para la reacción global:</b><br>E = E°celda - (0,0592/n)·log Q, con Q = [Mg<sup>2+</sup>]·p<sub>H2</sub> / [H<sup>+</sup>]²<br><br>El Mg(s) es sólido puro: no va en Q. El H<sub>2</sub> es gas: entra con su presión en atm. El H<sup>+</sup> va <b>al cuadrado</b> porque la global lleva 2H<sup>+</sup>.<br><br>Datos: [Mg<sup>2+</sup>] = 10<sup>-2</sup> M; p<sub>H2</sub> = 0,8 atm; pH = 3 → <b>[H<sup>+</sup>] = 10<sup>-3</sup> M</b>.<br><br>Q = (10<sup>-2</sup> · 0,8) / (10<sup>-3</sup>)² = 8·10<sup>-3</sup> / 10<sup>-6</sup> = <b>8000</b> &nbsp;·&nbsp; log 8000 = 3,903<br><br>E = 2,34 V - (0,0592/2)·3,903 = 2,34 - 0,1155 = <b>2,22 V</b><br><br><span class="muted">Con la forma general E = E° - (RT/nF)·ln Q y R = 8,314 J/K·mol, T = 298 K, F = 96500 C/mol: RT/nF = 0,012844 V y ln 8000 = 8,987 → E = 2,34 - 0,1154 = 2,2246 V. Con 0,059 en vez de 0,0592: 2,2249 V. Las tres formas dan <b>2,22 V</b>.</span><br><br><b>Control cruzado por electrodo</b> (opcional, pero si te sobra tiempo hacelo):<br>E(Mg<sup>2+</sup>/Mg) = -2,34 - (0,0592/2)·log(1/10<sup>-2</sup>) = -2,34 - 0,0592 = <b>-2,3992 V</b><br>E(H<sup>+</sup>/H<sub>2</sub>) = 0 - (0,0592/2)·log(0,8/(10<sup>-3</sup>)²) = -0,0296·log(8·10<sup>5</sup>) = <b>-0,1747 V</b><br>fem = -0,1747 - (-2,3992) = <b>2,2245 V</b> → coincide.<br><br><b>b) El diagrama, descripto en texto</b><br><br>En la hoja va dibujado; acá va lo que el dibujo tiene que mostrar, que es lo que se corrige:<br><br><table class="tbl"><tr><th>Elemento</th><th>Semicelda izquierda</th><th>Semicelda derecha</th></tr><tr><td>Nombre</td><td><b>ÁNODO</b></td><td><b>CÁTODO</b></td></tr><tr><td>Polaridad</td><td><b>negativo (-)</b></td><td><b>positivo (+)</b></td></tr><tr><td>Electrodo</td><td>Barra de <b>Mg(s)</b></td><td><b>Pt(s)</b> inerte, con burbujeo de H<sub>2</sub> a 0,8 atm</td></tr><tr><td>Solución</td><td>Mg<sup>2+</sup> 10<sup>-2</sup> M</td><td>H<sup>+</sup> 10<sup>-3</sup> M (pH = 3)</td></tr><tr><td>Reacción</td><td>Mg(s) → Mg<sup>2+</sup> + 2e<sup>-</sup> (oxidación)</td><td>2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub>(g) (reducción)</td></tr><tr><td>Producto</td><td><b>Mg<sup>2+</sup> que pasa a la solución</b>: la barra de Mg pierde masa y se va consumiendo</td><td><b>H<sub>2</sub> gaseoso</b>, que burbujea sobre el Pt. El Pt no cambia de masa: sólo conduce</td></tr></table><br><b>Circulación de electrones</b>: por el conductor externo, <b>desde el Mg(-) hacia el Pt(+)</b>. Dibujá la flecha sobre el cable, no dentro de la solución: en la solución no circulan electrones, circulan iones.<br><b>Puente salino</b> entre los dos vasos, con la doble barra de la notación. Los <b>aniones</b> del puente migran hacia la <b>semicelda anódica</b> (para compensar el Mg<sup>2+</sup> que se genera) y los <b>cationes</b> hacia la <b>catódica</b> (para compensar el H<sup>+</sup> que se consume).<br><b>Voltímetro</b> intercalado en el cable, marcando 2,22 V.<br><br><b>c) ¿El pH del cátodo debe subir o bajar?</b><br><br>El razonamiento, en cuatro pasos, aplicando Nernst como pide el enunciado:<br><br>1. En Q, el pH entra por el <b>[H<sup>+</sup>] al cuadrado en el denominador</b>: Q = [Mg<sup>2+</sup>]·p<sub>H2</sub>/[H<sup>+</sup>]².<br>2. Se quiere <b>aumentar E</b>. Como E = E° - (0,0592/n)·log Q, con el signo menos adelante, <b>aumentar E exige disminuir Q</b>.<br>3. Q disminuye si <b>aumenta [H<sup>+</sup>]</b> (está en el denominador y elevado al cuadrado, así que pesa doble).<br>4. Aumentar [H<sup>+</sup>] es <b>bajar el pH</b>. → <b>El pH del cátodo debe DISMINUIR</b>, es decir, la solución catódica debe volverse más ácida.<br><br><b>Forma cerrada, que conviene escribir porque cuantifica la respuesta</b>: log Q = log(8·10<sup>-3</sup>) + 2·pH, así que<br>E = E° - 0,0592·pH - (0,0592/2)·log(8·10<sup>-3</sup>) → <b>dE/dpH = -0,0592 V por unidad de pH</b>.<br><br>Punto por punto: pH 4 → 2,165 V &nbsp;·&nbsp; pH 3 → <b>2,2245 V</b> &nbsp;·&nbsp; pH 2 → 2,284 V &nbsp;·&nbsp; pH 1 → 2,343 V. Cada unidad de pH que baja suma exactamente 59,2 mV.<br><br><span class="muted">Chequeo de coherencia con Le Chatelier: el H<sup>+</sup> es <b>reactivo</b> de la global. Más reactivo = equilibrio más corrido hacia productos = más fuerza impulsora = más potencial. Da lo mismo, y si en el examen no te sale la cuenta, este argumento cualitativo bien escrito ya vale.</span><br><br><b>Extras que el ejercicio no pide pero que la cátedra puede agregar</b>: ΔG° = -n·F·E°celda = -2 · 96500 C/mol · 2,34 V = <b>-451 620 J = -451,6 kJ/mol</b> (negativo → espontánea, consistente con E° &gt; 0). Y ln K = nFE°/RT = 182,2 → <b>K ≈ 10<sup>79</sup></b>: la reacción está corrida por completo hacia los productos.'
  },

  {
    st: '<b>Parte B de la Evaluación Integradora del 18/07/24 · ítem e (textual)</b><br><br>“<i>Justificar mediante razonamiento deductivo si los siguientes enunciados son V o F:<br>e) Si se desea emplear un proceso electrolítico para recubrir una pieza metálica con cobre, ésta deberá ser el ánodo de la celda.</i>”<br><br><span class="muted">Vale, junto con los otros cinco V/F, los 60 puntos de la Parte B de ese examen.</span>',
    ans: '<b>FALSO.</b> La pieza a recubrir tiene que ser el <b>cátodo</b>, porque ahí es donde ocurre la reducción Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu(s), que es la que deposita el metal.',
    sol: 'El razonamiento deductivo que pide la consigna, en tres pasos encadenados:<br><br>→ <b>1. Recubrir con cobre = depositar Cu metálico.</b> El cobre está en la solución como <b>Cu<sup>2+</sup></b> y tiene que terminar como <b>Cu(s)</b> adherido a la pieza. Pasar de Cu<sup>2+</sup> a Cu<sup>0</sup> es <b>ganar dos electrones</b>: es una <b>reducción</b>.<br><br>→ <b>2. La reducción ocurre siempre en el cátodo.</b> Esto vale en la celda galvánica y en la electrolítica sin excepción: es la definición de cátodo, no una convención de signo.<br><br>→ <b>3. Por lo tanto la pieza debe ser el CÁTODO</b>, y en una celda electrolítica el cátodo es el polo <b>negativo</b>, conectado al borne negativo de la fuente. El enunciado dice ánodo: <b>es FALSO</b>.<br><br><b>Qué pasaría si la conectaras como ánodo</b>: en el ánodo ocurre la <b>oxidación</b>, así que la pieza, si es de un metal atacable, se oxidaría y <b>se disolvería</b> en el electrolito. En vez de recubrirla, la estarías corroyendo. Es exactamente lo que se hace a propósito en el <b>refinado electrolítico del cobre</b>, donde el cobre bruto va como ánodo para disolverse y el cobre puro se deposita en el cátodo.<br><br><b>Cómo se completa la respuesta</b> (la cátedra corrige la justificación, no el V/F suelto): el montaje típico de cobreado lleva un baño de <b>CuSO<sub>4</sub></b>, la <b>pieza como cátodo (-)</b> y un <b>ánodo de cobre (+)</b>, que se oxida y va reponiendo el Cu<sup>2+</sup> que se consume en el cátodo. Con ánodo de cobre la concentración de Cu<sup>2+</sup> se mantiene constante; con ánodo inerte se oxidaría el agua (2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>-</sup>) y el baño se iría empobreciendo. Esto es literalmente el problema 4 de la G11B, resuelto en el ejercicio modelo de electrólisis 2.<br><br><b>De dónde viene el error</b>: de trasladar el signo de la pila a la cuba. En la <b>pila</b> el cátodo es positivo; el reflejo es “lo que se deposita va en el positivo”, y como en la cuba el positivo es el ánodo, se elige mal. La cadena correcta es siempre <b>reducción → cátodo</b>, y recién después se le pone el signo.'
  },

  {
    st: '<b>Parte B de la Evaluación Integradora del 11/07/24 · ítem 4 (textual)</b><br><br>“<i>Justificar mediante razonamiento deductivo si los siguientes enunciados son V o F:<br>4) Un sólido conductor de la corriente eléctrica posee aniones y cationes formando su estructura cristalina cúbica de cuerpo centrado</i>”',
    ans: '<b>FALSO</b>, y por dos motivos independientes: un sólido que conduce es <b>metálico</b> y su red tiene <b>cationes y electrones deslocalizados, no aniones</b>; y además la estructura cúbica de cuerpo centrado no es la única ni es exclusiva de nada.',
    sol: 'Es un V/F de electroquímica y de sólidos a la vez: engancha la clasificación de conductores de T11A con los tipos de sólido de la <b>sección 7</b>. Se desarma en dos afirmaciones, y basta que una falle:<br><br>→ <b>Primera afirmación: “posee aniones y cationes”.</b> Un sólido que conduce la corriente <b>en estado sólido</b> es un <b>sólido metálico</b>, un conductor de <b>1<sup>a</sup> especie</b> según la T11A: conduce <b>sin descomponerse</b> y sus únicos portadores son <b>electrones</b>. Su red está formada por <b>cationes metálicos inmersos en un mar de electrones deslocalizados</b>. <b>No hay aniones.</b><br>Los sólidos que sí tienen aniones y cationes en la red son los <b>iónicos</b>, y son conductores de <b>2<sup>a</sup> especie</b>: <b>no conducen en estado sólido</b> (los iones están fijos en sus posiciones) y recién conducen <b>fundidos o en solución</b>, cuando los iones quedan libres para migrar, y conducen <b>descomponiéndose</b>. Un cristal de NaCl seco es aislante.<br><br>→ <b>Segunda afirmación: “estructura cristalina cúbica de cuerpo centrado”.</b> Es una sobreespecificación falsa. Los metales cristalizan en <b>cúbica centrada en el cuerpo</b> (Fe-α, Na, K, Cr), <b>cúbica centrada en las caras</b> (Cu, Ag, Au, Al) o <b>hexagonal compacta</b> (Zn, Mg, Ti). No hay ninguna razón para que un conductor tenga que ser bcc. Y el NaCl, que sí es iónico, es cúbico centrado en las caras.<br><br><b>Cómo se escribe la respuesta en la hoja</b>: “<i>Falso. Un sólido que conduce la corriente eléctrica en estado sólido es un sólido metálico, cuya red está formada por cationes metálicos y electrones deslocalizados, sin aniones; es un conductor de 1<sup>a</sup> especie y conduce sin descomponerse. Los sólidos con aniones y cationes en la red son los iónicos, que no conducen en estado sólido y sólo lo hacen fundidos o disueltos, por migración iónica. Además, los sólidos metálicos cristalizan en varios sistemas (bcc, fcc, hcp), no solamente en cúbico centrado en el cuerpo.</i>”<br><br><span class="muted">Contraejemplo válido para cerrar, si querés: el <b>grafito</b> conduce la corriente y es un sólido <b>covalente</b>, sin iones de ningún tipo. Conduce por sus electrones π deslocalizados. La cátedra lo usa como electrodo inerte precisamente por eso.</span>'
  },

  {
    st: '<b>Ejercicio modelo de la cátedra · “modelo de pilas 4”, de la carpeta de ejercicios modelo del Drive (textual). La G11A actual llega al ejercicio 10</b><br><br>“<i>G6A.22. La siguiente pila: Cr / Cr3+ (1,25.10-6 M) // Ag+ (0,035M) / Ag produce una fem de 1,57 volts a 25°C.<br>Sabiendo que E°(Ag+/Ag)= 0,80 V; y las masas molares son (g/mol): Ag: 107,87; Cr: 52.<br>a) Identifique las reacciones anódicas y catódicas y escriba la ecuación de la reacción total.<br>b) Calcule el potencial estándar de reducción (E°) del electrodo Cr3+/Cr.<br>c) Realice un esquema de la pila indicando todos los elementos que la constituyen, polaridad de los electrodos (ánodo y cátodo), migración de iones y movimiento de electrones.<br>d) Calcule el aumento de masa del cátodo de la pila cuando el ánodo disminuye su masa en 100 mg.</i>”<br><br><span class="muted">Es material resuelto de la propia cátedra: la resolución completa está en el archivo “modelo de pilas 4” de la carpeta Ejercicios modelo.</span>',
    ans: 'a) 3Ag<sup>+</sup> + Cr → Cr<sup>3+</sup> + 3Ag, n = 3. b) <b>E°(Cr<sup>3+</sup>/Cr) = -0,74 V</b>. c) Cr como ánodo (-) y Ag como cátodo (+). d) <b>0,6223 g de Ag</b> se depositan en el cátodo.',
    sol: '<b>a) Semirreacciones y global</b><br><br>El enunciado ya da la pila en notación: el Cr está a la izquierda → es el <b>ánodo</b> y se oxida; la Ag está a la derecha → es el <b>cátodo</b> y se reduce.<br><br>Anódica (oxidación): <b>Cr → Cr<sup>3+</sup> + 3e<sup>-</sup></b><br>Catódica (reducción): <b>Ag<sup>+</sup> + 1e<sup>-</sup> → Ag</b> &nbsp;&nbsp;<b>× 3</b> para igualar los electrones<br>Total: <b>3Ag<sup>+</sup> + Cr → Cr<sup>3+</sup> + 3Ag</b> &nbsp;&nbsp; <b>n = 3</b><br><br><span class="muted">La cátedra lo rotula “balance de cargas”: hay que multiplicar la catódica por 3 para que los 3e<sup>-</sup> que cede el Cr sean los mismos 3e<sup>-</sup> que toman las tres Ag<sup>+</sup>.</span><br><br><b>b) Nernst, usada al revés</b><br><br>Primero la pregunta que la cátedra pone explícita en la diapositiva: <b>¿son condiciones estándar?</b> Concentraciones 1 M, T 25 °C, p 1 atm. Acá <b>[Cr<sup>3+</sup>] = 1,25·10<sup>-6</sup> M y [Ag<sup>+</sup>] = 0,035 M</b>: no son 1 M. → <b>Hay que usar Nernst.</b><br><br>Ruta por electrodo, que es la que usa el modelo:<br>fem = E(Ag<sup>+</sup>/Ag) - E(Cr<sup>3+</sup>/Cr), con cada uno calculado por Nernst como E = E° - (0,059/n)·log(Red/Ox).<br><br>1,57 = [0,80 - (0,059/1)·log(1/0,035)] - [E°(Cr<sup>3+</sup>/Cr) - (0,059/3)·log(1/1,25·10<sup>-6</sup>)]<br><br>Término de la plata: (0,059/1)·log(1/0,035) = 0,059 · 1,4559 = <b>0,0859 V</b><br>Término del cromo: (0,059/3)·log(1/1,25·10<sup>-6</sup>) = 0,019667 · 5,9031 = <b>0,1161 V</b><br><br>1,57 = 0,80 - 0,0859 - E°(Cr<sup>3+</sup>/Cr) + 0,1161<br>E°(Cr<sup>3+</sup>/Cr) = 0,80 - 0,0859 + 0,1161 - 1,57 = <b>-0,74 V</b><br><br><span class="muted">Con más cifras: -0,73981 V → -0,74 V. Coincide con el valor que publica la cátedra.</span><br><br><b>Los dos lugares donde este ítem se pierde:</b> (1) usar n = 3 también en el término de la plata (el n de Nernst por electrodo es el de <b>esa</b> semirreacción: 1 para Ag<sup>+</sup>/Ag y 3 para Cr<sup>3+</sup>/Cr); (2) olvidar el <b>paréntesis completo</b> del ánodo al restarlo, con lo que el -0,1161 entra con el signo cambiado y el resultado sale -0,97 V.<br><br><b>c) El esquema</b><br><br><table class="tbl"><tr><th></th><th>Izquierda</th><th>Derecha</th></tr><tr><td>Electrodo</td><td>Barra de <b>Cr</b></td><td>Barra de <b>Ag</b></td></tr><tr><td>Rol y polaridad</td><td><b>ÁNODO (-)</b>, oxidación</td><td><b>CÁTODO (+)</b>, reducción</td></tr><tr><td>Solución</td><td>Cr<sup>3+</sup> 1,25·10<sup>-6</sup> M</td><td>Ag<sup>+</sup> 0,035 M</td></tr><tr><td>Masa del electrodo</td><td><b>Disminuye</b> (el Cr pasa a la solución)</td><td><b>Aumenta</b> (se deposita Ag)</td></tr></table>Electrones: por el cable externo, <b>del Cr a la Ag</b>. Iones del puente salino: <b>aniones hacia la cuba del Cr</b>, <b>cationes hacia la cuba de la Ag</b>. Voltímetro en el cable marcando 1,57 V.<br><br><b>d) La estequiometría, que acá no necesita Faraday</b><br><br>Ojo con este ítem: no piden corriente ni tiempo, así que <b>no hace falta F</b>. Alcanza con la relación molar de la reacción total <b>1 Cr : 3 Ag</b>.<br><br>n(Cr) = 0,100 g / 52 g/mol = <b>1,923·10<sup>-3</sup> mol</b><br>n(Ag) = 3 · 1,923·10<sup>-3</sup> = <b>5,77·10<sup>-3</sup> mol</b><br>m(Ag) = 5,77·10<sup>-3</sup> mol · 107,87 g/mol = <b>0,6223 g</b><br><br><span class="muted">Con más cifras: 0,62233 g. Coincide con la respuesta de la cátedra.</span><br><br>→ Fijate que el cátodo <b>gana 6,2 veces más masa</b> de la que pierde el ánodo, aunque circule exactamente la misma carga. Es la segunda ley de Faraday en estado puro: la masa depositada es proporcional al <b>equivalente</b>, y el equivalente de la Ag (107,87/1 = 107,87 g) es mucho mayor que el del Cr (52/3 = 17,33 g).'
  },

  {
    st: '<b>Ejercicio modelo de la cátedra · “modelo de electrolisis 1” = problema 3 de la G11B (textual)</b><br><br>“<i>ELECTRÓLISIS / CORROSIÓN: EJERCICIO 4<br>Una solución de sulfato de cobre (II) se electroliza con electrodos inertes durante 5 h 21 min 40 s con unas intensidad de 5 A. Calcular cuántos gramos de Cu y qué volumen de oxígeno en condiciones normales de presión y temperatura se obtienen.</i>”<br><br><span class="muted">Es material resuelto de la cátedra. El problema 3 de la G11B es el mismo con 5 h justas: respuestas publicadas 29,6 g de Cu y 5,22 L de O<sub>2</sub>.</span>',
    ans: '<b>31,8 g de Cu</b> en el cátodo y <b>5,6 L de O<sub>2</sub> en CNPT</b> en el ánodo. El tiempo está elegido para que circule exactamente <b>1 Faraday</b>.',
    sol: '<b>1. Qué ocurre en cada electrodo</b><br><br>Especies presentes: Cu<sup>2+</sup>, SO<sub>4</sub><sup>2-</sup>, H<sub>2</sub>O, y electrodos <b>inertes</b>.<br><br>Cátodo (-), reducción: el Cu<sup>2+</sup> no viene de un metal del grupo I, II ni del Al → <b>se reduce el metal</b>:<br><b>Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu(s)</b> &nbsp;&nbsp;<span class="muted">(z = 2)</span><br><br>Ánodo (+), oxidación: el SO<sub>4</sub><sup>2-</sup> es un anión oxigenado con el azufre en su <b>máximo estado de oxidación</b>: se acerca al ánodo por su carga pero <b>no puede oxidarse más</b>. → <b>Se oxida el agua</b>:<br><b>2H<sub>2</sub>O → O<sub>2</sub>(g) + 4H<sup>+</sup> + 4e<sup>-</sup></b> &nbsp;&nbsp;<span class="muted">(z = 4)</span> → la zona anódica se acidifica.<br><br>Global (×2 la catódica para igualar los 4 electrones):<br><b>2Cu<sup>2+</sup> + 2H<sub>2</sub>O → 2Cu(s) + O<sub>2</sub>(g) + 4H<sup>+</sup></b><br><br><b>2. La carga</b><br><br>t = 5 h · 3600 s/h + 21 min · 60 s/min + 40 s = 18 000 + 1260 + 40 = <b>19 300 s</b><br>Q = I · t = 5 A · 19 300 s = <b>96 500 C = exactamente 1 Faraday</b> → n(e<sup>-</sup>) = <b>1 mol</b><br><br><span class="muted">El tiempo no es caprichoso: la cátedra lo eligió para que la cuenta cierre en 1 F redondo y se vea la estequiometría sin decimales.</span><br><br><b>3. Masa de cobre</b><br><br>n(Cu) = n(e<sup>-</sup>)/z = 1/2 = <b>0,5 mol</b><br>m(Cu) = 0,5 mol · 63,6 g/mol = <b>31,8 g</b><br><br><span class="muted">Con M = 63,55 g/mol da 31,78 g. La cátedra usa 63,6 y presenta el razonamiento como regla de tres: “63,6 g = 2 Faraday = 2 × 96500 C”, entonces 96500 C → 31,8 g Cu.</span><br><br><b>4. Volumen de oxígeno en CNPT</b><br><br>Dos caminos, los dos válidos:<br>→ <b>Por la corriente</b>: n(O<sub>2</sub>) = n(e<sup>-</sup>)/4 = 1/4 = 0,25 mol.<br>→ <b>Por estequiometría desde el Cu</b>, que es el que usa el modelo: la global dice que por cada <b>2 mol de Cu</b> se libera <b>1 mol de O<sub>2</sub></b>. 31,8 g Cu = 0,5 mol Cu → 0,25 mol O<sub>2</sub>.<br><br>V = 0,25 mol · 22,4 L/mol = <b>5,6 L en CNPT</b><br><br><b>5. Control cruzado con el problema 3 de la G11B</b> (misma cuba, 5 h justas, 5 A):<br>Q = 5 · 18 000 = 90 000 C → n(e<sup>-</sup>) = 90 000/96 500 = 0,9326 mol → n(Cu) = 0,4663 mol → <b>m = 29,6 g</b>; n(O<sub>2</sub>) = 0,2332 mol → <b>V = 5,22 L</b>. Coincide con las respuestas publicadas de la guía.<br><br><div class="trap"><div class="tr-t">El error que se lleva puestos los dos ítems</div>Usar <b>el mismo z</b> para el cobre y para el oxígeno. Son <b>z = 2</b> y <b>z = 4</b>: el mol de electrones se reparte distinto en cada electrodo. Y el segundo error: pasar 5 h 21 min 40 s a “5,36 h” y multiplicar por 5 A. La carga sale en <b>A·h</b>, no en coulomb, y el resultado queda 3600 veces chico.</div>'
  },

  {
    st: '<b>Problema 4 de la G11A “Celdas galvánicas” (textual)</b><br><br>“<i>4. Hallar el potencial de los siguientes electrodos:<br>a) Fe, en una solución de FeCl2 0,01 M a 25 °C. (Fe2+ /Fe0) = -0,4402 V.<br>b) Pt, en solución 0,1 M de HCl, en contacto con H2 a una presión de 0,2 atm y 25 °C.<br>c) Armar una pila con ambos electrodos y las soluciones correspondientes. Realizar un esquema que contenga la marcha de iones, electrones y la polaridad de los electrodos. Escribir la notación convencional de la pila y determinar la fem inicial producida.</i>”<br><br><span class="muted">Respuestas publicadas por la cátedra: a) -0,4992 V; b) -0,0384 V; c) ΔE = 0,4608 V.</span>',
    ans: 'a) <b>E(Fe<sup>2+</sup>/Fe) = -0,4992 V</b>. b) <b>E(H<sup>+</sup>/H<sub>2</sub>) = -0,0384 V</b>. c) El Fe es el ánodo, el Pt el cátodo; <b>fem = 0,4608 V</b>; notación: Fe(s)/Fe<sup>2+</sup>(ac, 0,01 M)//H<sup>+</sup>(ac, 0,1 M)/H<sub>2</sub>(g, 0,2 atm)/Pt(s).',
    sol: 'Este es el ejercicio que enseña la <b>ruta por electrodo</b>, que es la que hay que dominar cuando el enunciado pide “el potencial de cada electrodo”. La fórmula, siempre con potenciales de reducción:<br><br><b>E = E° - (0,059/n) · log (Red / Ox)</b><br><br><b>a) Electrodo de hierro</b><br><br>Semirreacción como reducción: Fe<sup>2+</sup> + 2e<sup>-</sup> → Fe(s), n = 2.<br>Lado <b>reducido</b>: Fe(s), sólido puro → <b>no va</b>, queda 1 en el numerador.<br>Lado <b>oxidado</b>: Fe<sup>2+</sup> → 0,01 en el denominador.<br><br>E = -0,4402 - (0,059/2)·log(1/0,01) = -0,4402 - 0,0295·2 = -0,4402 - 0,059 = <b>-0,4992 V</b><br><br>→ Ojo al FeCl<sub>2</sub>: es 0,01 M en la <b>sal</b>, y como cada FeCl<sub>2</sub> aporta un Fe<sup>2+</sup>, <b>[Fe<sup>2+</sup>] = 0,01 M</b>. El Cl<sup>-</sup> es 0,02 M pero no participa de esta semirreacción: es ion espectador.<br><br><b>b) Electrodo de hidrógeno fuera de condiciones estándar</b><br><br>Semirreacción: 2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub>(g), n = 2, E° = 0,00 V.<br>Lado <b>reducido</b>: H<sub>2</sub>(g) → su presión, 0,2 (sin unidad).<br>Lado <b>oxidado</b>: H<sup>+</sup> → 0,1, elevado a su coeficiente <b>2</b>.<br><br>E = 0 - (0,059/2)·log(0,2 / 0,1²) = -0,0295·log(20) = -0,0295 · 1,301 = <b>-0,0384 V</b><br><br>→ El HCl es ácido fuerte, así que [H<sup>+</sup>] = 0,1 M. Y el coeficiente 2 del H<sup>+</sup> va como <b>exponente</b>: si ponés 0,2/0,1 en vez de 0,2/0,01, el log te da 0,301 en vez de 1,301 y el potencial sale -0,0089 V. Es el mismo error que en el examen del 11/07/24.<br><br><b>c) La pila</b><br><br>¿Quién es el ánodo? El que tiene <b>menor potencial</b>, porque se oxida más fácil: -0,4992 &lt; -0,0384 → el <b>Fe es el ánodo (-)</b> y el <b>electrodo de hidrógeno sobre Pt es el cátodo (+)</b>.<br><br>fem = E<sub>cátodo</sub> - E<sub>ánodo</sub> = -0,0384 - (-0,4992) = <b>+0,4608 V</b> → positiva, la pila funciona.<br><br><b>Notación convencional</b>: <span class="code">Fe(s) / Fe<sup>2+</sup>(ac, 0,01 M) // H<sup>+</sup>(ac, 0,1 M) / H<sub>2</sub>(g, 0,2 atm) / Pt(s)</span><br>El Pt queda a la <b>derecha</b> porque la hemicelda inerte es el cátodo.<br><br>Reacciones: ánodo Fe(s) → Fe<sup>2+</sup> + 2e<sup>-</sup>; cátodo 2H<sup>+</sup> + 2e<sup>-</sup> → H<sub>2</sub>(g); global Fe(s) + 2H<sup>+</sup> → Fe<sup>2+</sup> + H<sub>2</sub>(g). Electrones del Fe al Pt por el cable; aniones del puente hacia la cuba del Fe, cationes hacia la del Pt.<br><br><span class="muted">Con la constante 0,059 que usa la cátedra: -0,49920 / -0,038380 / 0,46082. Coinciden exactamente con las tres respuestas publicadas.</span><br><br><b>Chequeo por la otra ruta</b>: E°celda = 0 - (-0,4402) = 0,4402 V y Q = [Fe<sup>2+</sup>]·p<sub>H2</sub>/[H<sup>+</sup>]² = (0,01·0,2)/0,01 = 0,2 → E = 0,4402 - 0,0295·log(0,2) = 0,4402 + 0,0206 = <b>0,4608 V</b>. Idéntico. <span class="muted">Cuando Q &lt; 1 el término se suma: no te asustes si el potencial sube por encima del estándar.</span>'
  }

]);


registerExercises('fiuba-quimica', '12', [

  {
    st: 'En una pila galvánica, ¿en qué sentido circulan los electrones y cuál es la polaridad de cada electrodo?',
    opts: [
      'Del cátodo (-) al ánodo (+), por el puente salino',
      'Del ánodo (-) al cátodo (+), por el conductor externo',
      'Del ánodo (+) al cátodo (-), por el conductor externo',
      'Del cátodo (+) al ánodo (-), por el conductor externo'
    ],
    c: 1,
    ex: "Correcta: <b>del ánodo (-) al cátodo (+), por el conductor externo</b>. En la <b>pila</b>, por convención el ánodo es el polo <b>negativo</b> y el cátodo el <b>positivo</b>, y los electrones van siempre del ánodo al cátodo <b>por el circuito externo</b> (T11A). → La que va <b>del cátodo (-) al ánodo (+), por el puente salino</b> falla dos veces: invierte el sentido y hace circular electrones por el puente salino, cuando por el puente circulan <b>iones</b>, no electrones. En la solución no hay electrones libres. → La de <b>ánodo (+) a cátodo (-)</b> tiene el sentido correcto pero los signos invertidos: ésos son los signos de la <b>celda electrolítica</b>. → La de <b>cátodo (+) a ánodo (-)</b> invierte el sentido: si los electrones fueran del cátodo al ánodo, la oxidación estaría recibiendo electrones, lo cual es una contradicción con la definición."
  },

  {
    st: 'La pila del examen del 11/07/24 se da así: <b>Mg(s) / Mg<sup>2+</sup>(10<sup>-2</sup> M) // H<sup>+</sup>(pH=3) / H<sub>2</sub>(g)(p=0,8 atm) / Pt(s)</b>. ¿Qué te está diciendo esa línea?',
    opts: [
      'Que el Mg es el cátodo, porque está escrito primero',
      'Que el Mg es el ánodo y se oxida, y que el H<sup>+</sup> se reduce sobre un Pt inerte que es el cátodo',
      'Que el Pt es el ánodo, porque los electrodos inertes van siempre en el ánodo',
      'Que hay tres hemiceldas, porque hay tres barras simples'
    ],
    c: 1,
    ex: "Correcta: <b>el Mg es el ánodo y se oxida, y el H<sup>+</sup> se reduce sobre un Pt inerte que es el cátodo</b>. Por convención el <b>ánodo va a la izquierda</b> y el <b>cátodo a la derecha</b>, separados por la doble barra del puente salino. → La de <b>“el Mg es el cátodo”</b> invierte la convención: lo que está escrito primero es el ánodo, no el cátodo (regla PIANO: en la <b>P</b>ila el electrodo de la <b>I</b>zquierda es el <b>Á</b>nodo, <b>N</b>egativo, y ocurre la <b>O</b>xidación). → La de <b>“el Pt es el ánodo”</b> inventa una regla: el electrodo inerte va en <b>un extremo</b>, y de qué lado depende de si la hemicelda inerte es el ánodo o el cátodo; acá está a la derecha, o sea en el cátodo. → La de <b>“hay tres hemiceldas”</b> confunde las barras: la <b>barra simple es una interfase</b> (un cambio de fase), no una hemicelda. Hay dos hemiceldas, separadas por la doble barra."
  },

  {
    st: 'El problema 3 de la G11A da la pila <b>Cu(s)/Cu<sup>2+</sup>//H<sup>+</sup>/H<sub>2</sub>(g)/Pt</b> en condiciones estándar y pide corregir la notación si hace falta. Con E°(Cu<sup>2+</sup>/Cu) = +0,34 V y E°(H<sup>+</sup>/H<sub>2</sub>) = 0 V, ¿cuál es la corrección?',
    opts: [
      'Está bien escrita: el cobre siempre es ánodo frente al hidrógeno',
      'Hay que invertirla: Pt/H<sub>2</sub>(g)(1 atm)/H<sup>+</sup>(1 M)//Cu<sup>2+</sup>(1 M)/Cu(s)',
      'Hay que sacar el Pt, porque con hidrógeno no hace falta electrodo inerte',
      'Hay que cambiar la doble barra por una simple, porque no hay puente salino'
    ],
    c: 1,
    ex: "Correcta: <b>hay que invertirla</b>, y es la respuesta publicada de la guía. Se reduce el de <b>mayor</b> potencial de reducción: 0,34 &gt; 0, así que el Cu<sup>2+</sup> se reduce y el cobre es el <b>cátodo</b>, que va a la derecha; el electrodo de hidrógeno pasa a ser el ánodo y su Pt inerte queda ahora a la <b>izquierda</b>. → La de <b>“está bien escrita”</b> es exactamente el error que la guía quiere detectar: frente al hidrógeno, el cobre es cátodo (E° positivo) y el cinc es ánodo (E° negativo); no hay “siempre”. → La de <b>“sacar el Pt”</b> es falsa: el H<sub>2</sub> es un gas y necesita un metal inerte que haga de contacto eléctrico. Sin Pt no hay electrodo. → La de <b>“cambiar la doble barra por una simple”</b> confunde piezas: la doble barra representa el puente salino, que en esta pila hace falta porque hay dos compartimentos separados. Chequeo rápido: escrita como está, la fem daría negativa; ése es el síntoma de una notación invertida."
  },

  {
    st: 'Con E°(Cu<sup>2+</sup>/Cu) = +0,34 V y E°(Zn<sup>2+</sup>/Zn) = -0,76 V, ¿cuánto vale E°celda de la pila de Daniell?',
    opts: ['-0,42 V', '+0,42 V', '+1,10 V', '-1,10 V'],
    c: 2,
    ex: "Correcta: <b>+1,10 V</b>. E°celda = E°cátodo - E°ánodo = 0,34 - (-0,76) = <b>+1,10 V</b>, y es positivo, como corresponde a una pila espontánea. → Las de <b>-0,42 V</b> y <b>+0,42 V</b> salen de hacer 0,34 - 0,76, o sea de <b>cambiarle el signo al -0,76 antes de restarlo</b> “porque se oxida”. Es el error de signo más frecuente del tema: la tabla ya da potenciales de reducción y la fórmula ya trae el menos. → La de <b>-1,10 V</b> sale de restar al revés (ánodo menos cátodo). Control de un renglón: <b>si la fem de una pila te da negativa, algo invertiste</b>."
  },

  {
    st: '¿Cuál es la función del puente salino y qué pasaría si no estuviera?',
    opts: [
      'Transportar los electrones de una hemicelda a la otra; sin él la pila no cerraría el circuito eléctrico',
      'Permitir el contacto eléctrico entre las soluciones sin que se mezclen, e impedir la acumulación de cargas; sin él la pila se detiene casi de inmediato',
      'Aportar los iones que se reducen en el cátodo; sin él no habría reacción catódica',
      'Mantener constante la temperatura de las dos hemiceldas'
    ],
    c: 1,
    ex: "Correcta: <b>el contacto eléctrico entre las soluciones, sin que se mezclen y sin acumulación de cargas</b>, y es textual de la T11A: “<i>permite el contacto eléctrico entre las soluciones, impide que las soluciones se mezclen e impide la acumulación de cargas</i>”. Sin puente, la cuba anódica acumularía carga positiva (Mg<sup>2+</sup>, Zn<sup>2+</sup>) y la catódica carga negativa; esa separación de cargas frena el flujo de electrones enseguida. → La de <b>“transportar los electrones”</b> es el error clásico: por el puente circulan <b>iones</b>, no electrones. Los electrones van por el cable externo. → La de <b>“aportar los iones que se reducen en el cátodo”</b> es falsa: los iones que se reducen ya están en el electrolito de la cuba catódica; el KCl del puente sólo compensa cargas y no participa de la redox. → La de <b>“mantener constante la temperatura”</b> no tiene nada que ver: el puente no cumple ninguna función térmica."
  },

  {
    st: 'En la pila Zn(s)/Zn<sup>2+</sup>//Cu<sup>2+</sup>/Cu(s), ¿hacia dónde migran los iones del puente salino mientras la pila funciona?',
    opts: [
      'Los aniones hacia la cuba del Zn y los cationes hacia la del Cu',
      'Los aniones hacia la cuba del Cu y los cationes hacia la del Zn',
      'Todos los iones hacia el cátodo, porque es el polo positivo',
      'No migran: el puente salino sólo aísla las dos soluciones'
    ],
    c: 0,
    ex: "Correcta: <b>los aniones hacia la cuba del Zn y los cationes hacia la del Cu</b>. Regla: <b>aniones al ánodo, cationes al cátodo</b> (y vale igual en la pila y en la electrólisis). Acá el ánodo es el Zn: ahí se está generando Zn<sup>2+</sup>, así que la solución acumularía carga positiva y necesita <b>aniones</b> que la compensen. En el cátodo se consume Cu<sup>2+</sup>, la solución quedaría con exceso de carga negativa y necesita <b>cationes</b>. → La de <b>aniones hacia la cuba del Cu y cationes hacia la del Zn</b> invierte la compensación y agravaría el desbalance. → La de <b>“todos los iones hacia el cátodo”</b> confunde migración con polaridad: el signo del electrodo en la pila es una convención sobre los <b>bornes</b>, no un campo que atraiga a todos los iones al mismo lado. → La de <b>“no migran”</b> contradice el propósito del puente: si no migrara nada, la pila se detendría por acumulación de cargas."
  },

  {
    st: 'Para la pila del examen del 11/07/24 (Mg + 2H<sup>+</sup> → Mg<sup>2+</sup> + H<sub>2</sub>, E°celda = 2,34 V, n = 2), ¿cuánto vale ΔG° y qué indica?',
    opts: [
      '-451,6 kJ/mol; la reacción es espontánea en condiciones estándar',
      '+451,6 kJ/mol; la reacción es no espontánea y habría que forzarla',
      '-225,8 kJ/mol; la reacción es espontánea',
      '-451,6 J/mol; la reacción es apenas espontánea'
    ],
    c: 0,
    ex: "Correcta: <b>-451,6 kJ/mol, espontánea</b>. ΔG° = -n·F·E°celda = -2 · 96500 C/mol · 2,34 V = -451 620 J/mol = <b>-451,6 kJ/mol</b>. Negativo → espontánea, consistente con E° &gt; 0. → La de <b>+451,6 kJ/mol</b> le pone el signo al revés: olvidar el menos de la fórmula da un ΔG positivo y te lleva a concluir lo contrario. → La de <b>-225,8 kJ/mol</b> usa n = 1: n es el número de <b>electrones intercambiados</b> en la global balanceada, y acá son 2. → La de <b>-451,6 J/mol</b> tiene el número bien pero la unidad mal por un factor 1000: n·F·E sale en <b>joules</b> por mol, y 451 620 J son 451,6 kJ, que no es “apenas” nada. La constante de equilibrio asociada es del orden de 10<sup>79</sup>."
  },

  {
    st: 'Para la reacción global Mg(s) + 2H<sup>+</sup>(ac) → Mg<sup>2+</sup>(ac) + H<sub>2</sub>(g), ¿cuál es el cociente Q correcto?',
    opts: [
      'Q = [Mg<sup>2+</sup>]·p<sub>H2</sub> / ([Mg]·[H<sup>+</sup>]<sup>2</sup>)',
      'Q = [Mg<sup>2+</sup>]·p<sub>H2</sub> / [H<sup>+</sup>]<sup>2</sup>',
      'Q = [Mg<sup>2+</sup>]·p<sub>H2</sub> / [H<sup>+</sup>]',
      'Q = [H<sup>+</sup>]<sup>2</sup> / ([Mg<sup>2+</sup>]·p<sub>H2</sub>)'
    ],
    c: 1,
    ex: "Correcta: <b>Q = [Mg<sup>2+</sup>]·p<sub>H2</sub> / [H<sup>+</sup>]<sup>2</sup></b>. Productos sobre reactivos, cada uno elevado a su <b>coeficiente en la global balanceada</b>: el H<sup>+</sup> lleva coeficiente 2, así que va al cuadrado. → La que lleva <b>[Mg]·[H<sup>+</sup>]<sup>2</sup></b> abajo mete el Mg(s) en el denominador: los <b>sólidos puros no entran</b> en Q (tampoco el agua ni los líquidos puros). → La que divide por <b>[H<sup>+</sup>]</b> a secas olvida el exponente 2 del H<sup>+</sup>. Con los datos del examen eso cambia Q de 8000 a 8 y el potencial de 2,22 V a 2,31 V: 0,089 V de diferencia, suficiente para perder el ítem. → La de <b>[H<sup>+</sup>]<sup>2</sup> / ([Mg<sup>2+</sup>]·p<sub>H2</sub>)</b> está dada vuelta, reactivos sobre productos: eso es 1/Q, y usarlo cambia el signo del término de Nernst."
  },

  {
    st: 'En la celda Zn(s)|Zn<sup>2+</sup>(1 M)||Cu<sup>2+</sup>(1 M)|Cu(s), si se <b>aumenta la concentración de Zn<sup>2+</sup></b>, ¿qué pasa con el potencial de la celda?',
    opts: ["Aumenta, porque hay más iones y más conductividad", "No cambia, porque el Zn(s) es un sólido puro", "Se anula, porque la celda deja de ser estándar", "Disminuye, porque el Zn<sup>2+</sup> es un producto y su aumento sube Q"],
    c: 3,
    ex: "Correcta: <b>disminuye, porque el Zn<sup>2+</sup> es un producto y su aumento sube Q</b>. Q = [Zn<sup>2+</sup>]/[Cu<sup>2+</sup>]; subir el numerador sube Q, y como E = E° - (0,0592/n)·log Q, con Q mayor el potencial <b>baja</b>. Es la pregunta conceptual 10 del bloque “Pilas”, y es Le Chatelier con otro traje: acumular producto reduce la fuerza impulsora. → La de <b>“aumenta”</b> confunde potencial con conductividad: la fem <b>no</b> depende de la conductividad ni del tamaño de los electrodos, sólo de la naturaleza de las especies, sus concentraciones y la temperatura. → La de <b>“no cambia”</b> mezcla especies: el sólido puro que no entra en Q es el Zn(s), pero el <b>Zn<sup>2+</sup> disuelto sí entra</b>. → La de <b>“se anula”</b> es un no sequitur: salir de condiciones estándar no anula el potencial, simplemente obliga a usar Nernst."
  },

  {
    st: 'Ítem c del examen del 11/07/24: en la pila Mg/Mg<sup>2+</sup>//H<sup>+</sup>/H<sub>2</sub>/Pt, si se quiere <b>aumentar</b> el potencial de la celda variando el pH del cátodo, ¿el pH debe subir o bajar?',
    opts: ["Debe aumentar, porque menos H<sup>+</sup> favorece la reducción", "Es indistinto: el pH afecta al ánodo, no al cátodo", "Debe aumentar hasta pH 7, porque el potencial es máximo en medio neutro", "Debe disminuir: más [H<sup>+</sup>] baja Q y sube E, a razón de 59,2 mV por unidad de pH"],
    c: 3,
    ex: "Correcta: <b>debe disminuir</b>. El H<sup>+</sup> está en el <b>denominador</b> de Q y elevado al cuadrado: Q = [Mg<sup>2+</sup>]·p<sub>H2</sub>/[H<sup>+</sup>]². Aumentar [H<sup>+</sup>] baja Q, y con Q más chico el término -(0,0592/n)·log Q resta menos, o sea que E sube. En números: pH 4 → 2,165 V; pH 3 → 2,2245 V; pH 2 → 2,284 V; pH 1 → 2,343 V, exactamente 59,2 mV por escalón. → La de <b>“debe aumentar, porque menos H<sup>+</sup> favorece la reducción”</b> invierte el razonamiento: el H<sup>+</sup> es <b>reactivo</b> de la global, y menos reactivo es menos fuerza impulsora. → La de <b>“es indistinto”</b> es falsa: el pH define [H<sup>+</sup>], que es justamente la especie que se reduce en el cátodo. → La de <b>“debe aumentar hasta pH 7”</b> inventa un óptimo que no existe: E es monótona decreciente con el pH, sin máximo interior."
  },

  {
    st: 'V/F de la Parte B de la EI del 18/07/24: “Si se desea emplear un proceso electrolítico para recubrir una pieza metálica con cobre, ésta deberá ser el ánodo de la celda”.',
    opts: [
      'Verdadero: el ánodo es el polo positivo y ahí se deposita el metal',
      'Verdadero, siempre que el ánodo sea de cobre',
      'Falso: la pieza debe ser el cátodo, porque depositar Cu<sup>2+</sup> como Cu(s) es una reducción',
      'Falso: la pieza no debe ser ningún electrodo, sólo se sumerge en el baño'
    ],
    c: 2,
    ex: "Correcta: <b>falso, la pieza debe ser el cátodo</b>, y es el V/F de electrólisis de la EI del 18/07/24. Pasar de Cu<sup>2+</sup> a Cu<sup>0</sup> es <b>ganar electrones</b> = reducción, y la reducción ocurre <b>siempre</b> en el cátodo, tanto en la pila como en la cuba. → La de <b>“el ánodo es el polo positivo y ahí se deposita el metal”</b> confunde el signo con el rol: en la electrólisis el ánodo es efectivamente el polo positivo, pero ahí ocurre la <b>oxidación</b>, no la deposición. → La de <b>“verdadero, siempre que el ánodo sea de cobre”</b> mezcla dos cosas ciertas para llegar a una falsa: el ánodo <b>sí</b> suele ser de cobre (para reponer el Cu<sup>2+</sup> que se consume), pero eso no convierte a la pieza en ánodo. → La de <b>“la pieza no debe ser ningún electrodo”</b> es falsa: para que se deposite metal, la pieza tiene que estar conectada al circuito y recibir electrones. → Si la conectaras como ánodo, la pieza se <b>oxidaría y se disolvería</b>: eso es exactamente el refinado electrolítico del cobre, donde el cobre bruto va de ánodo a propósito."
  },

  {
    st: 'V/F de la Parte B de la EI del 11/07/24: “Un sólido conductor de la corriente eléctrica posee aniones y cationes formando su estructura cristalina cúbica de cuerpo centrado”.',
    opts: ["Verdadero: todos los sólidos conductores son iónicos", "Verdadero, pero sólo si el sólido está fundido", "Falso, porque los sólidos iónicos son cúbicos centrados en las caras y no en el cuerpo", "Falso: un sólido que conduce es metálico y su red tiene cationes con electrones deslocalizados, sin aniones; y además no tiene por qué ser cúbica de cuerpo centrado"],
    c: 3,
    ex: "Correcta: <b>falso, el sólido conductor es metálico, sin aniones en la red</b>. Un sólido que conduce <b>en estado sólido</b> es un <b>sólido metálico</b>: conductor de 1<sup>a</sup> especie, conduce <b>sin descomponerse</b> y su único portador son los <b>electrones</b> deslocalizados sobre una red de cationes. → La de <b>“verdadero: todos los sólidos conductores son iónicos”</b> es la afirmación del enunciado y es justamente lo falso: los sólidos <b>iónicos</b> tienen aniones y cationes pero <b>no conducen en estado sólido</b> (los iones están fijos) y sólo conducen fundidos o disueltos, y ahí conducen <b>descomponiéndose</b>. → La de <b>“verdadero, pero sólo si el sólido está fundido”</b> se contradice sola: si está fundido ya no es un sólido. → La de <b>los sólidos iónicos cúbicos centrados en las caras</b> llega a “falso” por un motivo que no alcanza: es cierto que el NaCl es fcc, pero no todos los sólidos iónicos lo son (el CsCl es cúbico simple, sección 7), y además eso no refuta el enunciado. Lo que lo refuta es que un conductor sólido no tiene aniones en la red. Contestar “falso” con la razón equivocada no suma en un examen que pide <b>razonamiento deductivo</b>."
  },

  {
    st: 'En una <b>celda electrolítica</b>, ¿qué signo tienen el ánodo y el cátodo, y dónde ocurre cada media reacción?',
    opts: ["Ánodo (+) con oxidación y cátodo (-) con reducción", "Ánodo (-) con oxidación y cátodo (+) con reducción, igual que en la pila", "Ánodo (+) con reducción y cátodo (-) con oxidación", "Los signos dependen del electrolito que se use"],
    c: 0,
    ex: "Correcta: <b>ánodo (+) con oxidación y cátodo (-) con reducción</b>, y es la trampa central del tema. <b>Lo que cambia entre pila y electrólisis es el signo de los electrodos, no dónde ocurre cada media reacción</b>: oxidación en el ánodo y reducción en el cátodo siempre. → La de <b>ánodo (-) y cátodo (+)</b> copia los signos de la pila, que son los opuestos: en la cuba es la fuente externa la que fija los bornes, y su borne <b>positivo</b> es el que arranca electrones a la especie que se oxida. → La de <b>ánodo (+) con reducción</b> da vuelta las medias reacciones, que es lo único que nunca cambia: ánodo viene de oxidación por definición. → La de <b>“los signos dependen del electrolito”</b> es falsa: los signos los fija la fuente, no el electrolito. → Truco para reconstruirlo sin memorizar: el <b>anión</b> es negativo, va al electrodo <b>positivo</b>, y el anión se oxida → el ánodo es el positivo."
  },

  {
    st: 'Problema 5 de la G11B: por una cuba con solución acuosa de sulfato de zinc circulan <b>2,0 A durante 1 hora</b> con electrodos inertes. ¿Qué masa se deposita en el cátodo? <span class="muted">(M<sub>Zn</sub> = 65,4 g/mol)</span>',
    opts: ["2,44 g", "1,22 g", "4,88 g", "0,075 g"],
    c: 0,
    ex: "Correcta: <b>2,44 g</b>. La cadena completa es Q = I·t = 2,0 A · 3600 s = 7200 C → n(e<sup>-</sup>) = 7200/96500 = 0,0746 mol → n(Zn) = 0,0746/<b>2</b> = 0,0373 mol → m = 0,0373 · 65,4 = <b>2,44 g</b>. Coincide con la respuesta publicada de la guía. → La de <b>1,22 g</b> es el resultado de dividir dos veces por z, o de usar z = 4. → La de <b>4,88 g</b> sale de <b>olvidar el z = 2</b> y tomar los moles de electrones como si fueran moles de zinc: es el error más frecuente de las leyes de Faraday. → La de <b>0,075 g</b> son los moles de electrones informados como si fueran gramos. <span class=\"muted\">Errata del material: la respuesta publicada de la guía dice “2,44 g <b>Cu</b>”, pero el problema es de sulfato de zinc. El número está bien, la etiqueta no.</span>"
  },

  {
    st: 'Si por tres cubas en serie circula <b>1 Faraday</b>, y en cada una se deposita un metal distinto a partir de Ag<sup>+</sup>, Cu<sup>2+</sup> y Au<sup>3+</sup>, ¿cuántos moles de cada metal se depositan?',
    opts: ["1 mol de cada uno, porque circuló la misma carga", "1 mol de Ag, 2 mol de Cu y 3 mol de Au", "1 mol de Ag, 0,5 mol de Cu y 0,333 mol de Au", "Depende de la concentración de cada solución"],
    c: 2,
    ex: "Correcta: <b>1 mol de Ag, 0,5 mol de Cu y 0,333 mol de Au</b>. 1 F = 1 mol de electrones, y cada catión necesita <b>z</b> electrones: Ag<sup>+</sup> + 1e<sup>-</sup> → Ag (z = 1, sale 1 mol); Cu<sup>2+</sup> + 2e<sup>-</sup> → Cu (z = 2, salen 0,5 mol); Au<sup>3+</sup> + 3e<sup>-</sup> → Au (z = 3, salen 0,333 mol). Es la <b>segunda ley de Faraday</b>: misma carga, masas proporcionales a los equivalentes. → La de <b>“1 mol de cada uno”</b> confunde <b>n de electrones con moles de sustancia</b>, que es la quinta trampa de la sección: la carga es la misma, los moles no. → La de <b>1, 2 y 3 mol</b> multiplica cuando hay que dividir. → La de <b>“depende de la concentración”</b> es falsa: la <b>cantidad</b> depositada la fija la carga, no la concentración. La concentración importa para otra cosa (si se agota el catión el proceso se detiene o pasa a reducir agua), pero mientras haya catión disponible la masa depende sólo de Q."
  },

  {
    st: 'En la electrólisis de una solución acuosa concentrada de NaCl con electrodos inertes, ¿qué se obtiene en cada electrodo y por qué?',
    opts: ["Na(s) en el cátodo y O<sub>2</sub> en el ánodo, porque el agua se oxida más fácil que el Cl<sup>-</sup>", "Na(s) en el cátodo y Cl<sub>2</sub> en el ánodo, igual que con NaCl fundido", "H<sub>2</sub> en el cátodo y O<sub>2</sub> en el ánodo, porque el Cl<sup>-</sup> es un anión oxigenado", "H<sub>2</sub> y HO<sup>-</sup> en el cátodo y Cl<sub>2</sub> en el ánodo; el Cl<sup>-</sup> gana por sobrepotencial pese a que el E° del agua es menor"],
    c: 3,
    ex: "Correcta: <b>H<sub>2</sub> y HO<sup>-</sup> en el cátodo y Cl<sub>2</sub> en el ánodo</b>, y es el proceso cloro-soda. <b>Cátodo</b>: el Na<sup>+</sup> es de un metal del grupo I, con E° mucho más negativo que el del agua, así que se reduce el <b>agua</b>: 2H<sub>2</sub>O + 2e<sup>-</sup> → H<sub>2</sub>(g) + 2HO<sup>-</sup>, y por eso se produce NaOH. <b>Ánodo</b>: la tabla diría que se oxida el agua (1,23 V) antes que el Cl<sup>-</sup> (1,36 V), pero el <b>sobrepotencial</b> del oxígeno invierte el resultado en la práctica y se libera <b>Cl<sub>2</sub></b>. → La de <b>Na(s) en el cátodo y O<sub>2</sub> en el ánodo</b> tiene los dos electrodos mal. → La de <b>Na(s) en el cátodo y Cl<sub>2</sub> en el ánodo</b> es el resultado de la sal <b>fundida</b> (celda de Downs), donde no hay agua que compita: en solución acuosa nunca se obtiene sodio metálico. Ésa es exactamente la pregunta conceptual 6 del bloque “Electrólisis”. → La de <b>H<sub>2</sub> en el cátodo y O<sub>2</sub> en el ánodo</b> llama “oxigenado” al cloruro, que no tiene oxígeno; la regla del anión oxigenado en su máximo estado de oxidación aplica a SO<sub>4</sub><sup>2-</sup>, NO<sub>3</sub><sup>-</sup> y PO<sub>4</sub><sup>3-</sup>, no al Cl<sup>-</sup>."
  },
  {st: "Un acumulador de plomo se descarga hasta que el ácido sulfúrico disminuye en <b>294 g</b> (M = 98 g/mol). Según la global de descarga Pb + PbO<sub>2</sub> + 2H<sub>2</sub>SO<sub>4</sub> → 2PbSO<sub>4</sub> + 2H<sub>2</sub>O, ¿qué carga circuló y cuánto Pb se consumió?",
   opts: ["193 000 C y 1,0 mol de Pb", "579 000 C y 3,0 mol de Pb", "289 500 C y 1,5 mol de Pb", "289 500 C y 3,0 mol de Pb"],
   c: 2,
   ex: "Correcta: 289 500 C y 1,5 mol de Pb. 294 g / 98 g/mol = 3 mol de H<sub>2</sub>SO<sub>4</sub>. La global dice que 2 mol de ácido van con 2 F y con 1 mol de Pb, o sea 1 F y 0,5 mol de Pb por cada mol de ácido: 3 mol de ácido son 3 F = 289 500 C y 1,5 mol de Pb (también se consumen 1,5 mol de PbO<sub>2</sub> y se forman 3 mol de PbSO<sub>4</sub> y 3 mol de H<sub>2</sub>O). → La de 193 000 C y 1,0 mol de Pb es lo que dice la ecuación tal como está escrita (196 g de ácido): no se escaló a los 294 g del enunciado. → La de 579 000 C y 3,0 mol de Pb toma 2 F y 1 mol de Pb por cada mol de ácido, cuando esas cantidades corresponden a cada dos moles. → La de 289 500 C y 3,0 mol de Pb acierta la carga pero calcula el plomo 1 a 1 con el ácido, olvidando el coeficiente 2 del H<sub>2</sub>SO<sub>4</sub> en la global."},
  {st: "G11B problema 1a: se electroliza una solución acuosa neutra de <b>KNO<sub>3</sub></b> con electrodos inertes. ¿Qué se obtiene y qué papel cumple el KNO<sub>3</sub>?",
   opts: ["K(s) en el cátodo y NO<sub>2</sub> en el ánodo; el KNO<sub>3</sub> es el reactivo que se descompone", "H<sub>2</sub> en el cátodo y O<sub>2</sub> en el ánodo; el KNO<sub>3</sub> se va consumiendo hasta agotarse", "K(s) en el cátodo y O<sub>2</sub> en el ánodo; el KNO<sub>3</sub> aporta el catión que se reduce", "H<sub>2</sub> en el cátodo y O<sub>2</sub> en el ánodo (global 2H<sub>2</sub>O → 2H<sub>2</sub> + O<sub>2</sub>); el KNO<sub>3</sub> no reacciona y sólo aporta los iones que conducen la corriente"],
   c: 3,
   ex: "Correcta la que da H<sub>2</sub> y O<sub>2</sub> con el KNO<sub>3</sub> como simple conductor. El K<sup>+</sup> es de un metal del grupo I, así que en el cátodo se reduce el agua (2H<sub>2</sub>O + 2e<sup>-</sup> → H<sub>2</sub> + 2OH<sup>-</sup>); el NO<sub>3</sub><sup>-</sup> es oxigenado con el N en su máximo estado de oxidación, no puede oxidarse más, y en el ánodo se oxida el agua (2H<sub>2</sub>O → O<sub>2</sub> + 4H<sup>+</sup> + 4e<sup>-</sup>). Sumadas dan la electrólisis del agua, y el electrolito sólo lleva la corriente: es su papel. → La de K(s) y NO<sub>2</sub> supone que la sal se descompone, pero el potasio nunca se deposita en solución acuosa (el agua se reduce antes) y el nitrato no se oxida. → La de H<sub>2</sub> y O<sub>2</sub> con el KNO<sub>3</sub> consumiéndose tiene bien los productos pero mal el electrolito: lo que se gasta es agua, y la sal queda como estaba, igual que el H<sub>2</sub>SO<sub>4</sub> en la electrólisis del agua. → La de K(s) y O<sub>2</sub> acierta el ánodo pero deposita potasio en el cátodo, que sólo ocurre en la sal fundida."},
  {st: "Se electroliza una solución acuosa de <b>Fe<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub></b> con electrodos inertes. Datos: E°(Fe<sup>3+</sup>/Fe<sup>2+</sup>) = 0,77 V; E°(Fe<sup>2+</sup>/Fe) = -0,44 V; E°(H<sub>2</sub>O/H<sub>2</sub>) = -0,83 V. ¿Qué ocurre en el cátodo mientras haya Fe<sup>3+</sup> en la solución?",
   opts: ["Fe<sup>3+</sup> + e<sup>-</sup> → Fe<sup>2+</sup>, porque es el proceso de mayor potencial de reducción", "Fe<sup>3+</sup> + 3e<sup>-</sup> → Fe(s), porque el catión de un metal que no es del grupo I se reduce a metal", "2H<sub>2</sub>O + 2e<sup>-</sup> → H<sub>2</sub> + 2OH<sup>-</sup>, porque en una solución de sulfato siempre se reduce el agua", "Fe<sup>2+</sup> + 2e<sup>-</sup> → Fe(s), porque es el proceso de menor potencial de reducción"],
   c: 0,
   ex: "Correcta la reducción de Fe<sup>3+</sup> a Fe<sup>2+</sup>. En el cátodo se reduce la especie de <b>mayor</b> potencial de reducción, y entre 0,77 V, -0,44 V y -0,83 V gana el de 0,77 V: el Fe<sup>3+</sup> se reduce, pero sólo hasta Fe<sup>2+</sup>. → La reducción directa a Fe(s) aplica la regla corta (“el catión de otro metal se reduce a metal”) sin comparar potenciales: el hierro metálico recién puede aparecer cuando ya no quede Fe<sup>3+</sup>. → La del agua es la regla de los cationes del grupo I, II o del Al, y lo que se reduce en el cátodo lo decide el catión, no el anión sulfato; el hierro no es de esos, y además el agua (-0,83 V) tiene un potencial menor que los dos pares del hierro. → La de Fe<sup>2+</sup> a Fe(s) invierte el criterio: se reduce el de mayor potencial, no el de menor, y además al principio no hay Fe<sup>2+</sup> en la solución."},
  {st: "En la electrólisis de <b>NaCl acuoso concentrado</b> con electrodos inertes, ¿cuál es la ecuación molecular global y qué se obtiene por cada faraday?",
   opts: ["2NaCl → 2Na + Cl<sub>2</sub>: 1 mol de Na por faraday", "2NaCl + 2H<sub>2</sub>O → 2NaOH + Cl<sub>2</sub> + H<sub>2</sub>: 2 mol de NaOH y 1 mol de Cl<sub>2</sub> por faraday", "2NaCl + 2H<sub>2</sub>O → 2NaOH + Cl<sub>2</sub> + H<sub>2</sub>: 1 mol de NaOH, 0,5 mol de Cl<sub>2</sub> y 0,5 mol de H<sub>2</sub> por faraday", "2NaCl + 2H<sub>2</sub>O → 2NaOH + Cl<sub>2</sub> + H<sub>2</sub>: 1 mol de NaOH y 1 mol de Cl<sub>2</sub> por faraday"],
   c: 2,
   ex: "Correcta la que da 1 mol de NaOH, 0,5 mol de Cl<sub>2</sub> y 0,5 mol de H<sub>2</sub>. Las semirreacciones son 2Cl<sup>-</sup> → Cl<sub>2</sub> + 2e<sup>-</sup> y 2H<sub>2</sub>O + 2e<sup>-</sup> → H<sub>2</sub> + 2OH<sup>-</sup>; sumadas dan la iónica neta y, agregando el Na<sup>+</sup> espectador, la molecular. En esa global pasan 2 mol de electrones (2 F) y salen 2 NaOH, 1 Cl<sub>2</sub> y 1 H<sub>2</sub>: por 1 F, la mitad de cada uno, o sea 1 mol de NaOH y 0,5 mol de cada gas. → La de 2NaCl → 2Na + Cl<sub>2</sub> es la sal fundida (celda de Downs): en solución acuosa se reduce el agua y el sodio no se forma. → La de 2 mol de NaOH y 1 mol de Cl<sub>2</sub> por faraday toma las cantidades de la ecuación, que corresponden a 2 F, como si fueran por 1 F. → La de 1 mol de NaOH y 1 mol de Cl<sub>2</sub> por faraday mantiene bien el NaOH pero olvida que el Cl<sub>2</sub> es la mitad de los moles de NaOH (relación 2 : 1)."}

]);

registerExercises('fiuba-quimica', '13', [
  {st: "En el TP1, a 1 cm³ del lavado de la arena le agregás 3 gotas de AgNO<sub>3</sub> al 1 % y aparece una turbidez blanquecina. ¿Cómo lo interpretás y qué ecuación iónica neta lo describe?",
   opts: ["Quedan iones Cu<sup>2+</sup> en el lavado: Cu<sup>2+</sup>(ac) + 2 OH<sup>−</sup>(ac) → Cu(OH)<sub>2</sub>(s)", "El lavado terminó: la turbidez es AgNO<sub>3</sub> que no reaccionó y precipita, Ag<sup>+</sup>(ac) + NO<sub>3</sub><sup>−</sup>(ac) → AgNO<sub>3</sub>(s)", "Quedan iones Cl<sup>−</sup> en el lavado, así que hay que seguir lavando: Ag<sup>+</sup>(ac) + Cl<sup>−</sup>(ac) → AgCl(s)", "Quedan iones Cl<sup>−</sup>, pero ya podés parar: la prueba es de screening y un positivo no cuenta"],
   c: 2,
   ex: "El AgNO<sub>3</sub> reconoce el <b>cloruro</b>: la turbidez blanca es AgCl, un precipitado, y quiere decir que el lavado <b>no alcanzó</b>. La neta es Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl(s): el Cu<sup>2+</sup> y el NO<sub>3</sub><sup>−</sup> son espectadores y se cancelan. → Se sigue lavando hasta que dé negativo. → La ecuación del Cu(OH)<sub>2</sub> describe la otra prueba, la del NaOH, que da una turbidez celeste o azulada y no blanca. → Decir que precipita el AgNO<sub>3</sub> inventa un precipitado que no existe: el nitrato de plata es soluble, y la turbidez aparece justamente porque el Ag<sup>+</sup> encuentra Cl<sup>−</sup>. → Y parar porque “un positivo no cuenta” da vuelta el sentido del screening: el que sí cuenta es el positivo (se sospecha la sustancia); el que no confirma nada es el negativo."},
  {st: "En el último lavado de la arena, la prueba de Cu<sup>2+</sup> con NaOH no da turbidez. ¿Qué podés escribir en el informe?",
   opts: ["Que no hay Cu<sup>2+</sup> en el lavado, con certeza absoluta", "Que el NaOH no reaccionó porque la solución estaba a un pH menor que 7", "Que el Cu(OH)<sub>2</sub> es soluble en agua y por eso no se ve", "Que no se detectó Cu<sup>2+</sup> con esta técnica; como es de screening, un negativo no confirma la ausencia total"],
   c: 3,
   ex: "Según la guía de TP1 2025, las reacciones de reconocimiento son técnicas de <b>screening</b>: un positivo hace sospechar la sustancia, pero que no den <b>no confirma su total ausencia</b>, porque puede haber trazas por debajo de lo que se ve. → Por eso se escribe “no se detectó”. → Afirmar ausencia con certeza absoluta le pide a la técnica más de lo que da. → Tampoco es un problema de pH: el NaOH aporta OH<sup>−</sup>, que son lo que precipita al Cu<sup>2+</sup>; un pH apenas menor que 7 no impide la prueba (sólo un medio francamente ácido disolvería el Cu(OH)<sub>2</sub>). → Y el Cu(OH)<sub>2</sub> es un hidróxido poco soluble: justamente precipita, y eso es lo que se ve cuando la prueba da positiva."},
  {st: "La guía de TP1 2024 termina con el secado de la arena en el crisol, y la de 2025 con la calcinación del papel de filtro con la arena húmeda. ¿Cuál es la diferencia conceptual entre los dos pasos?",
   opts: ["El secado es un cambio físico (se evapora el agua); la calcinación es un cambio químico (el papel se quema) y no es una operación de separación de fases", "Los dos son cambios físicos: sólo cambia la temperatura del crisol", "La calcinación es una filtración hecha a alta temperatura", "El secado es químico y la calcinación es física, porque requiere más calor"],
   c: 0,
   ex: "Secar la arena es <b>evaporar agua</b>: cambia el estado de agregación de una sustancia y nada más, o sea un cambio físico. Calcinar el papel es <b>quemarlo</b>: la celulosa reacciona con el oxígeno y desaparecen sustancias y aparecen otras, o sea un cambio químico. Por eso la calcinación no figura entre los métodos de separación de fases (la sección 2 avisa que la cátedra la usa como distractor). → Decir que los dos son físicos pasa por alto que en el papel hay una reacción química. → La calcinación no es una filtración: no hay medio poroso ni se retiene un sólido, y la filtración además es un método mecánico. → Invertir los rótulos confunde el criterio: lo que decide si un cambio es químico o físico es si cambia la identidad de las sustancias, no cuánto calor se necesita."},
  {st: "En el TP2 la presión atmosférica es 756,0 mmHg y la temperatura del agua es 20 °C (presión de vapor del agua a esa temperatura: 17,5 mmHg). Dentro de la probeta, el nivel de agua quedó 13,6 cm por encima del nivel del vaso. Con ρ(Hg)/ρ(H<sub>2</sub>O) = 13,6, ¿qué presión tiene el H<sub>2</sub> que entra en PV = nRT?",
   opts: ["738,5 mmHg", "748,5 mmHg", "728,5 mmHg", "773,5 mmHg"],
   c: 2,
   ex: "La columna: 13,6 cm son 136 mm de agua, y 136 / 13,6 = <b>10,0 mmHg</b>. Con el nivel de adentro más alto, el gas está a menos presión que la atmósfera, así que P(H<sub>2</sub>) = P<sub>atm</sub> − P<sub>vap</sub> − P<sub>col</sub> = 756,0 − 17,5 − 10,0 = <b>728,5 mmHg</b> (0,9586 atm). → 738,5 mmHg sale de olvidarse de la columna (756,0 − 17,5). → 748,5 mmHg suma la columna en vez de restarla (756,0 − 17,5 + 10,0): ese signo corresponde al caso contrario, con el nivel de adentro más bajo que el de afuera. → 773,5 mmHg suma el vapor de agua (756,0 + 17,5), que invierte el razonamiento: el vapor es una parte de la presión total, no un agregado a ella."},
  {st: "Al invertir la probeta en el TP2 entraron, sin que lo notes, unos 3 mL de aire. Al final leés 71,5 mL de gas. ¿Cómo queda la masa molar del Mg que calculás?",
   opts: ["Mayor que la real: el aire agrega masa al sistema", "Igual a la real: el aire no es H<sub>2</sub> y no se cuenta", "Mayor que la real: con aire en la probeta el H<sub>2</sub> se desprende menos", "Menor que la real, alrededor de un 4 %: el volumen leído incluye aire, se calculan moles de H<sub>2</sub> de más y M = m/n baja"],
   c: 3,
   ex: "La probeta no distingue gases: los 71,5 mL se leen como si todos fueran H<sub>2</sub>, así que n = PV/RT sale <b>de más</b>, y como la masa de Mg es la que pesaste, M = m/n sale <b>de menos</b>. Los 3 mL de aire sobre 71,5 mL son alrededor de un 4 %, y ése es el orden del error en M. → Pensar que el aire suma masa confunde dos cosas: la masa del numerador es la de la balanza, y el aire no entra ahí. → Decir que el aire no se cuenta olvida que tu cálculo sí lo cuenta: lo único que existe en la cuenta es el volumen leído. → Y el desprendimiento de H<sub>2</sub> depende del Mg y del HCl, no de lo que haya en la probeta: no se desprende menos, sólo se lee de más."},
  {st: "En el TP2 la reacción es exotérmica. Leés el volumen apenas cesa el desprendimiento, con el gas todavía tibio, y en la cuenta usás la temperatura ambiente. ¿Qué le pasa a la masa molar calculada?",
   opts: ["Sale menor que la real: el volumen a mayor temperatura es más grande y se calculan moles de H<sub>2</sub> de más", "Sale mayor que la real: a mayor temperatura sube la masa molar", "No cambia: en un gas ideal n sólo depende de la masa de Mg", "Sale mayor que la real: a mayor temperatura el Mg reacciona de menos"],
   c: 0,
   ex: "Un gas tibio ocupa <b>más volumen</b> que el mismo gas a temperatura ambiente. Si lo leés tibio pero calculás con T ambiente en n = PV/RT, el volumen es mayor del que corresponde a esa T y n sale <b>de más</b>; como M = m/n, M sale <b>de menos</b>. La solución es esperar a que el gas vuelva a temperatura ambiente antes de leer. → La masa molar no depende de la temperatura del ensayo: es una propiedad del elemento, y lo que sube es el error de la medición, no la masa molar. → Es cierto que n del gas sólo depende de la masa de Mg que reaccionó, pero el cálculo no lo sabe: lo estima desde P, V y T, y un V medido a otra T lo falsea. → Y el Mg no reacciona de menos: con HCl en exceso reacciona completo, y más rápido si hace calor."},
  {st: "Antes de titular, ¿con qué se enjuaga cada elemento del montaje?",
   opts: ["Los dos con agua destilada: el agua no cambia los moles de nada", "La bureta con un poco del titulante y el Erlenmeyer con agua destilada", "La bureta con agua destilada y el Erlenmeyer con la solución problema, para no perder analito", "La bureta con la solución problema y el Erlenmeyer con el titulante"],
   c: 1,
   ex: "La bureta se enjuaga (se “purga”) con el <b>titulante</b>: lo que quede en las paredes tiene que ser de la misma solución que se va a medir, porque si quedara agua diluiría el titulante y haría falta más volumen. El Erlenmeyer se enjuaga con <b>agua destilada</b>: el agua no cambia los moles de analito de la alícuota, que es lo único que la titulación mide. → Enjuagar todo con agua sirve para el Erlenmeyer, porque el agua es inocua ahí, pero en la bureta diluye el titulante. → Enjuagar el Erlenmeyer con la solución problema deja moles de analito de más pegados al vidrio y el gasto sube. → Y enjuagar la bureta con el analito y el Erlenmeyer con el titulante hace todo al revés: contamina el titulante con otra solución y deja titulante de más en el recipiente que debería tener sólo analito."},
  {st: "Se titulan 25,00 mL de H<sub>2</sub>SO<sub>4</sub> de concentración desconocida con NaOH 0,1000 M y el gasto es 20,00 mL. ¿Cuál es la concentración molar del H<sub>2</sub>SO<sub>4</sub>?",
   opts: ["0,08000 M", "0,04000 M", "0,02000 M", "0,1250 M"],
   c: 1,
   ex: "H<sub>2</sub>SO<sub>4</sub> + 2 NaOH → Na<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O. n(NaOH) = 0,1000 · 0,02000 = 2,000 mmol, y por la relación 1 : 2, n(H<sub>2</sub>SO<sub>4</sub>) = 1,000 mmol. C = 1,000 / 25,00 = <b>0,04000 M</b>. → 0,08000 M sale de contar 1 : 1 (2,000 / 25,00): es la normalidad del ácido, no su molaridad. → 0,02000 M divide por 2 dos veces. → 0,1250 M invierte los volúmenes (0,1000 · 25,00 / 20,00) y además ignora la relación molar."},
  {st: "Un compañero titula vinagre con NaOH usando anaranjado de metilo (viraje de pH 2,4 a 4,4) en lugar de fenolftaleína. ¿Qué pasa con su resultado?",
   opts: ["El indicador vira mucho antes del punto de equivalencia (que está en pH ≈ 8,7), el gasto da de menos y la concentración calculada da por debajo de la real", "Nada: cualquier indicador sirve, porque el punto de equivalencia siempre está en pH 7", "El indicador vira después del punto de equivalencia, el gasto da de más y la concentración da por encima de la real", "El indicador no vira nunca, porque el anaranjado de metilo sólo sirve para bases"],
   c: 0,
   ex: "Ácido débil con base fuerte: en la equivalencia hay acetato, que hidroliza, y el pH es <b>mayor que 7</b> (8,7 en el ejemplo de esta sección). El anaranjado de metilo se pasa de rojo a amarillo entre pH 2,4 y 4,4, un valor que la solución alcanza cuando todavía falta neutralizar buena parte del ácido. Cortás la titulación <b>antes</b>, el gasto es de menos y la concentración calculada queda por debajo. → Decir que cualquier indicador sirve, porque la equivalencia está siempre en pH 7, es el error más frecuente del tema: sólo vale para ácido fuerte con base fuerte. → Vira antes, no después: después del punto de equivalencia el pH ya superó 8, muy lejos de 4,4. → Y vira: es un indicador ácido-base que funciona en cualquier titulación; lo que falla es que su intervalo no coincide con el salto de pH de ésta."},
  {st: "Una salpicadura de ácido te cae en el antebrazo durante un TP. ¿Qué hacés primero?",
   opts: ["Neutralizar enseguida con bicarbonato sobre la piel", "Agua abundante y corriente unos 15 minutos, sacando la ropa mojada, y avisar al docente", "Secar con un trapo y seguir con la práctica si no duele", "Esperar a terminar la práctica para avisar, así no se frena al grupo"],
   c: 1,
   ex: "Sobre la piel y los ojos se lava con <b>agua abundante y corriente durante unos 15 minutos</b>, sacando la ropa que se mojó, y se avisa al docente siempre, aunque parezca poco. → No se neutraliza sobre la piel: la neutralización también libera calor y agrega una segunda lesión; el bicarbonato es para la mesada. → Secar y seguir deja el ácido sobre la piel, y que no duela todavía no significa que no esté dañando. → Esperar al final retrasa el lavado justo cuando cada minuto cuenta. <span class=\"muted\">Complemento: no está en las teóricas de la cátedra.</span>"}
]);

registerReveals('fiuba-quimica', '13', [
  {st: "TP2 · informe completo. <b>Datos</b>: cinta de Mg de <b>0,0615 g</b> con HCl 1 M en exceso (25 cm³). El H<sub>2</sub> se recoge sobre agua en una probeta de 100 cm³: <b>V = 63,0 mL</b>. Temperatura del agua: <b>19,0 °C</b>. Presión atmosférica: <b>763,0 mmHg</b>. El nivel de agua dentro de la probeta quedó <b>9,5 cm por encima</b> del nivel del vaso. P<sub>vap</sub> del agua a 19 °C = <b>16,5 mmHg</b>. ρ(Hg)/ρ(H<sub>2</sub>O) = 13,6. R = 0,0821 L·atm/mol·K. Valor tabulado: 24,31 g/mol. <br>a) Calculá P<sub>col</sub> y P(H<sub>2</sub>). <br>b) Calculá n(H<sub>2</sub>), n(Mg) y M, y controlá que el HCl esté en exceso. <br>c) Error porcentual con signo, y qué fuentes de error son compatibles con ese signo. <br>d) Cuánto habría dado sin restar P<sub>vap</sub>, sin restar la columna y sin ninguna de las dos. <br>e) ¿Qué volumen de más en la lectura explicaría todo el desvío? <span class=\"muted\">(Elaboración propia: datos verosímiles, no de la cátedra.)</span>",
   ans: "P(H<sub>2</sub>) = 739,5 mmHg; n(H<sub>2</sub>) = n(Mg) = 2,556·10<sup>-3</sup> mol; <b>M = 24,06 g/mol</b>; error <b>−1,0 %</b>. Sin las dos correcciones habría dado 23,32 g/mol (−4,1 %). El desvío equivale a unos 0,6 mL de más en la lectura.",
   sol: "<b>a) La presión.</b> P<sub>col</sub> = 95 mm de agua / 13,6 = <b>6,99 mmHg</b> ≈ 7,0. Con el nivel de adentro más alto, la columna resta:<br>P(H<sub>2</sub>) = P<sub>atm</sub> − P<sub>vap</sub> − P<sub>col</sub> = 763,0 − 16,5 − 7,0 = <b>739,5 mmHg</b> = 739,5 / 760 = <b>0,9730 atm</b><br><br><b>b) Moles y masa molar.</b> T = 292,15 K → R·T = 0,0821 · 292,15 = 23,99 L·atm/mol.<br>n(H<sub>2</sub>) = 0,9730 · 0,0630 / 23,99 = <b>2,556·10<sup>-3</sup> mol</b> = n(Mg), porque la relación es 1 : 1.<br>M = 0,0615 / 2,556·10<sup>-3</sup> = <b>24,06 g/mol</b><br>Exceso: hacen falta 2 · 2,556 = 5,11 mmol de HCl y hay 25 mmol (casi cinco veces más): el Mg es el limitante.<br><br><b>c) Error.</b> (24,06 − 24,31) / 24,31 · 100 = <b>−1,0 %</b>. M quedó baja, así que son compatibles las fuentes que inflan el volumen leído o n(H<sub>2</sub>): aire que entró a la probeta al invertirla, o haber leído con el gas todavía tibio. No son compatibles la capa de MgO, las fugas ni las burbujas pegadas al vidrio, que empujan M hacia arriba. Y no restar P<sub>vap</sub> ya está descartado: lo restaste.<br><br><b>d) Qué hubiera pasado.</b> Sin P<sub>vap</sub>: P = 763,0 − 7,0 = 756,0 mmHg → M = 23,54 g/mol (−3,2 %). Sin la columna: P = 763,0 − 16,5 = 746,5 mmHg → M = 23,84 g/mol (−1,9 %). Sin ninguna: P = 763,0 mmHg → M = 23,32 g/mol (−4,1 %). Las dos omisiones empujan M hacia abajo, así que las correcciones recuperan tres de los cuatro puntos de error.<br><br><b>e) El volumen que explica el desvío.</b> Para que M valiera 24,31 harían falta n = 0,0615 / 24,31 = 2,530·10<sup>-3</sup> mol, o sea V = nRT/P = 2,530·10<sup>-3</sup> · 23,99 / 0,9730 = 62,4 mL. Leíste 63,0: la diferencia es <b>0,6 mL</b>, menos que una división, si la probeta se gradúa de a 1 mL. Por eso la conclusión honesta del informe es que el valor tabulado es compatible con el resultado dentro de lo que permite leer ese instrumento."},
  {st: "TP3 · concentración de un ácido diprótico. Se miden con pipeta aforada <b>25,00 mL</b> de una solución de H<sub>2</sub>SO<sub>4</sub> de concentración desconocida, se pasan al Erlenmeyer con un poco de agua destilada y fenolftaleína, y se titulan con <b>NaOH 0,1048 M</b>. Gastos: <b>21,60 · 21,70 · 21,65 mL</b>. <br>a) Escribí la ecuación molecular y la iónica neta, y decidí qué gasto usás. <br>b) Calculá la concentración del H<sub>2</sub>SO<sub>4</sub> en M y en N. <br>c) ¿Qué habrías informado si te olvidabas de la relación molar? <br>d) pH del punto de equivalencia e indicadores que sirven. <br>e) Si el ácido fuera CH<sub>3</sub>COOH de la misma molaridad, ¿cuánto gastarías y qué indicador necesitás? K<sub>a</sub> = 1,8·10<sup>-5</sup>. <span class=\"muted\">(Elaboración propia: datos verosímiles, no de la cátedra.)</span>",
   ans: "H<sub>2</sub>SO<sub>4</sub> + 2 NaOH → Na<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O; gasto 21,65 mL; <b>C = 0,04538 M (0,09076 N)</b>. Sin el factor 2 habrías informado 0,0908 M, el doble. Equivalencia a pH ≈ 7: sirven fenolftaleína y anaranjado de metilo. Con CH<sub>3</sub>COOH de igual molaridad gastarías 10,83 mL y necesitás fenolftaleína (pH de equivalencia 8,62).",
   sol: "<b>a) Ecuación y gasto.</b> H<sub>2</sub>SO<sub>4</sub>(ac) + 2 NaOH(ac) → Na<sub>2</sub>SO<sub>4</sub>(ac) + 2 H<sub>2</sub>O. Iónica neta: H<sup>+</sup>(ac) + OH<sup>−</sup>(ac) → H<sub>2</sub>O. Los tres gastos difieren en 0,10 mL como máximo: son concordantes y se usa el promedio, (21,60 + 21,70 + 21,65) / 3 = <b>21,65 mL</b>. El agua destilada que se agregó no interviene en la cuenta.<br><br><b>b) Concentración.</b> n(NaOH) = 0,1048 · 0,02165 = <b>2,269·10<sup>-3</sup> mol</b>. Por la relación 1 : 2, n(H<sub>2</sub>SO<sub>4</sub>) = 2,269·10<sup>-3</sup> / 2 = <b>1,134·10<sup>-3</sup> mol</b>. C = 1,134·10<sup>-3</sup> / 0,02500 = <b>0,04538 M</b>. Como cada H<sub>2</sub>SO<sub>4</sub> aporta dos H<sup>+</sup>, N = 2 · 0,04538 = <b>0,09076 N</b>. Control con V<sub>a</sub>·N<sub>a</sub> = V<sub>t</sub>·N<sub>t</sub>: 25,00 · 0,09076 = 21,65 · 0,1048 = 2,269 meq.<br><br><b>c) El olvido.</b> Si contás 1 : 1 informás 2,269·10<sup>-3</sup> / 0,02500 = 0,0908 M: <b>el doble</b>, un error de +100 %. Ese número es la normalidad, no la molaridad.<br><br><b>d) Punto de equivalencia e indicador.</b> Ácido fuerte con base fuerte: la sal, Na<sub>2</sub>SO<sub>4</sub>, casi no cambia el pH, así que el punto de equivalencia está en pH ≈ 7. <span class=\"muted\">(Con más rigor el sulfato es una base muy débil y lo sube a ≈ 7,2; no cambia nada para elegir el indicador.)</span> El salto de pH es muy grande: con 0,1 mL de diferencia respecto de la equivalencia el pH va de ≈ 3,6 a ≈ 10,4 (sin contar el agua agregada). Sirven la fenolftaleína (8,2 a 10) y el anaranjado de metilo (2,4 a 4,4), porque los dos intervalos caen dentro del salto.<br><br><b>e) Ácido acético de igual molaridad.</b> n(CH<sub>3</sub>COOH) = 0,04538 · 0,02500 = 1,134·10<sup>-3</sup> mol, relación 1 : 1 → V = 1,134·10<sup>-3</sup> / 0,1048 = <b>10,83 mL</b>: <b>la mitad</b>, porque el ácido acético aporta un solo H<sup>+</sup>. En la equivalencia hay acetato: 1,134 mmol en 25,00 + 10,83 = 35,83 mL → 0,03167 M. K<sub>b</sub> = K<sub>w</sub> / K<sub>a</sub> = 5,56·10<sup>-10</sup> → [OH<sup>−</sup>] = √(5,56·10<sup>-10</sup> · 0,03167) = 4,19·10<sup>-6</sup> M → <b>pH = 8,62</b>. Es mayor que 7 por la hidrólisis del acetato, y el anaranjado de metilo ya no sirve: viraría mucho antes de la equivalencia. Acá hace falta fenolftaleína."},
  {st: "TP3 · base débil titulada con ácido fuerte. Un limpiador amoniacal: <b>5,00 mL</b> se llevan a <b>250,0 mL</b> en un matraz (dilución 1 : 50). Alícuotas de <b>25,00 mL</b> de esa dilución, con agua destilada e indicador, se titulan con <b>HCl 0,1020 M</b>. Gastos: <b>12,40 · 12,50 · 12,45 mL</b>. M(NH<sub>3</sub>) = 17,03 g/mol. K<sub>b</sub>(NH<sub>3</sub>) = 1,8·10<sup>-5</sup>. <br>a) Escribí la ecuación molecular y la iónica neta, y decidí qué gasto usás. <br>b) Calculá la concentración de la dilución y del limpiador, en M, g/L y % m/V. <br>c) pH del punto de equivalencia e indicador adecuado. <br>d) ¿Qué habría pasado con fenolftaleína? <span class=\"muted\">(Elaboración propia: datos verosímiles, no de la cátedra.)</span>",
   ans: "NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl; gasto 12,45 mL; dilución <b>0,05080 M</b>; limpiador <b>2,540 M = 43,25 g/L = 4,33 % m/V</b>. Equivalencia a <b>pH = 5,36</b> (menor que 7): anaranjado de metilo. Con fenolftaleína el gasto habría sido ≈ 8 % menor.",
   sol: "<b>a) Ecuación y gasto.</b> NH<sub>3</sub>(ac) + HCl(ac) → NH<sub>4</sub>Cl(ac), relación 1 : 1. Iónica neta: NH<sub>3</sub>(ac) + H<sup>+</sup>(ac) → NH<sub>4</sub><sup>+</sup>(ac) (el NH<sub>3</sub> es una base débil: no se escribe disociado). Gasto promedio: (12,40 + 12,50 + 12,45) / 3 = <b>12,45 mL</b>, con 0,10 mL de dispersión.<br><br><b>b) Concentración.</b> n(HCl) = 0,1020 · 0,01245 = <b>1,270·10<sup>-3</sup> mol</b> = n(NH<sub>3</sub>) en la alícuota. C de la dilución = 1,270·10<sup>-3</sup> / 0,02500 = <b>0,05080 M</b>. Del limpiador: 0,05080 · 50 = <b>2,540 M</b>. En g/L: 2,540 · 17,03 = <b>43,25 g/L</b> → <b>4,33 % m/V</b>. Si te olvidás del factor de dilución informás 0,0865 % m/V.<br><br><b>c) pH de equivalencia.</b> En la equivalencia hay NH<sub>4</sub><sup>+</sup>: 1,270 mmol en 25,00 + 12,45 = 37,45 mL → 0,03391 M. K<sub>a</sub>(NH<sub>4</sub><sup>+</sup>) = K<sub>w</sub> / K<sub>b</sub> = 5,56·10<sup>-10</sup> → [H<sup>+</sup>] = √(5,56·10<sup>-10</sup> · 0,03391) = 4,34·10<sup>-6</sup> M → <b>pH = 5,36</b>. Es menor que 7 por la hidrólisis ácida del catión. El indicador adecuado es el anaranjado de metilo (rojo a amarillo, 2,4 a 4,4): con 0,1 mL de diferencia el pH va de ≈ 7,2 a ≈ 3,6, y el indicador vira en la parte baja de ese salto, muy cerca de la equivalencia.<br><br><b>d) Fenolftaleína.</b> Se decolora a pH 8,2. Con pK<sub>a</sub>(NH<sub>4</sub><sup>+</sup>) = 9,26, ese pH se alcanza cuando [NH<sub>3</sub>] / [NH<sub>4</sub><sup>+</sup>] = 10<sup>(8,2 − 9,26)</sup> = 0,088, o sea cuando todavía queda ≈ 8 % del NH<sub>3</sub> sin neutralizar. Verías el cambio con ≈ 92 % del gasto y la concentración daría ≈ 8 % más baja: un error sistemático que ningún promedio de titulaciones corrige."}
]);

// ============================================================
// SECCIÓN 14 · Química General (CB103)
// ============================================================

registerExercises('fiuba-quimica', '14', [

{st: "Se disuelven 0,10 mol de cada uno de estos solutos, por separado, en 1,00 kg de agua. Suponiendo comportamiento ideal, ¿cuál solución congela a la temperatura más baja?",
 opts: ["La de glucosa.", "La de NaCl.", "La de CaCl<sub>2</sub>.", "La de urea."], c: 2,
 ex: "El descenso depende del número de partículas, no de cuáles son. El CaCl<sub>2</sub> se separa en tres iones (i = 3) y da ΔT<sub>c</sub> = 3 × 1,86 × 0,10 = 0,558 °C, así que congela a −0,558 °C. El NaCl aporta dos partículas (i = 2) y baja 0,372 °C. La glucosa y la urea no se disocian (i = 1) y bajan 0,186 °C cada una, iguales entre sí aunque sean sustancias distintas."},

{st: "¿Por qué una solución acuosa de un soluto no volátil hierve a más de 100 °C a 1 atm?",
 opts: ["Porque su presión de vapor es menor que la del agua pura a cada temperatura, y hay que calentarla más para que llegue a 1 atm.", "Porque el soluto aumenta la presión externa que hay que vencer.", "Porque las moléculas de agua se atraen entre sí con más fuerza cuando hay soluto.", "Porque el soluto absorbe parte del calor que se le entrega a la solución."], c: 0,
 ex: "Un líquido hierve cuando su presión de vapor iguala la presión externa. Como el soluto no volátil baja la presión de vapor de la solución, hace falta una temperatura mayor para alcanzar 1 atm. La presión externa no cambia: es la de la atmósfera. El efecto no depende de que el soluto cambie las atracciones entre moléculas de agua, porque es una propiedad que sólo cuenta cuántas partículas hay. Tampoco es que el soluto \"se quede\" con parte del calor: el ascenso se explica solo con la presión de vapor."},

{st: "Una misma molalidad de un no electrolito se disuelve en agua y, por separado, en benceno. ¿En cuál de los dos solventes sube más la temperatura de ebullición?",
 opts: ["En el agua, porque tiene mayor temperatura de ebullición.", "En ninguno más que en el otro: la molalidad es la misma, así que el ascenso es el mismo.", "En el agua, porque forma puentes de hidrógeno con el soluto.", "En el benceno, porque su K<sub>eb</sub> (2,53 °C·kg/mol) es mayor que la del agua (0,512)."], c: 3,
 ex: "ΔT<sub>eb</sub> = K<sub>eb</sub> · m: con la misma m, manda la constante del solvente. La del benceno es casi cinco veces la del agua, y entonces el ascenso también. Pensar que es igual porque m es igual olvida que K es propiedad del solvente. Y ni la temperatura de ebullición del solvente ni los puentes de hidrógeno con el soluto aparecen en la fórmula."},

{st: "A 37 °C se tiene una solución de NaCl 0,15 M (ideal). ¿Con cuál de estas soluciones de glucosa es isotónica?",
 opts: ["Glucosa 0,15 M.", "Glucosa 0,30 M.", "Glucosa 0,075 M.", "Glucosa 0,45 M."], c: 1,
 ex: "Dos soluciones a la misma temperatura son isotónicas si tienen igual i · M. El NaCl aporta i · M = 2 × 0,15 = 0,30 mol/L de partículas, y la glucosa (i = 1) necesita 0,30 M. Con 0,15 M la glucosa tiene la mitad de partículas por litro que el NaCl. Con 0,075 M tiene la cuarta parte. Con 0,45 M tendría una vez y media las partículas del NaCl: es lo que saldría de usar i = 3 (la del CaCl<sub>2</sub>) para el NaCl."},

{st: "Una sal binaria (ν = 2) en agua produce un descenso crioscópico 1,6 veces mayor que el de la misma cantidad de un no electrolito. ¿Qué indica?",
 opts: ["Que la sal no se disocia en el agua (i = 1).", "Que la sal se disocia por completo (i = 2).", "Que la sal está disociada en un 60 % (α = 0,6).", "Que la sal está disociada en un 160 % (α = 1,6)."], c: 2,
 ex: "El cociente entre el descenso medido y el de un no electrolito es el factor i = 1,6. Con ν = 2, i = 1 + α, así que α = 0,6. Si no se disociara el cociente sería 1, y con disociación total, 2. Un grado de disociación de 1,6 no existe: α es una fracción y no puede superar 1."},

{st: "En un recipiente cerrado se disuelven 2,0 mol de un no electrolito no volátil en 18 mol de agua. ¿Cuánto vale la presión de vapor de la solución, en función de la P° del agua a esa temperatura?",
 opts: ["0,90 · P°", "0,10 · P°", "0,11 · P°", "1,11 · P°"], c: 0,
 ex: "La fracción molar del solvente es x<sub>sv</sub> = 18/(18 + 2) = 0,90, y P = x<sub>sv</sub> · P° = 0,90 · P°. El 0,10 es la fracción molar del soluto, que da el <i>descenso</i> (ΔP = 0,10 · P°), no la presión de la solución. El 0,11 sale de dividir 2/18 (cociente de moles, no fracción molar). Y 1,11 · P° sería una presión mayor que la del solvente puro, imposible con un soluto no volátil."},

{st: "Dos líquidos A y B forman una mezcla ideal, con P°<sub>A</sub> &gt; P°<sub>B</sub> a cierta temperatura. Si el líquido tiene x<sub>A</sub> = 0,50, ¿qué se puede decir del vapor en equilibrio?",
 opts: ["Tiene y<sub>A</sub> = 0,50, porque la composición se conserva al evaporar.", "Tiene y<sub>A</sub> menor que 0,50.", "Tiene y<sub>A</sub> = 1, porque sólo se evapora A.", "Tiene y<sub>A</sub> mayor que 0,50."], c: 3,
 ex: "y<sub>A</sub> = x<sub>A</sub> · P°<sub>A</sub>/P, y P es un promedio ponderado de P°<sub>A</sub> y P°<sub>B</sub>, menor que P°<sub>A</sub>. Entonces el cociente P°<sub>A</sub>/P supera 1 y y<sub>A</sub> &gt; x<sub>A</sub>: el vapor es más rico en el más volátil. Que la composición se conserve ocurre sólo en los puros o en un azeótropo. Que se evapore únicamente A ignora que B también tiene presión de vapor. Y y<sub>A</sub> menor que 0,50 invertiría cuál es el más volátil."},

{st: "En el diagrama de presión contra composición de una mezcla ideal, un punto entre la recta del líquido y la curva del vapor representa:",
 opts: ["Sólo líquido, con la composición que indica la horizontal.", "Dos fases en equilibrio: un líquido y un vapor, con las composiciones que marcan los extremos de la horizontal.", "Sólo vapor, con la composición que indica la horizontal.", "Una mezcla inestable que no puede existir."], c: 1,
 ex: "Entre las dos curvas la presión es intermedia: demasiado baja para que todo sea líquido y demasiado alta para que todo sea vapor. El sistema se separa en un líquido, cuya composición x está donde la horizontal toca la recta, y un vapor, cuya composición y está donde toca la curva. Sólo líquido está por arriba de la recta; sólo vapor, por debajo de la curva. La región central es perfectamente estable."},

{st: "El benceno hierve a 80,1 °C y el tolueno a 110,6 °C (1 atm). Una mezcla ideal de los dos a 1 atm hierve:",
 opts: ["A una temperatura entre 80,1 y 110,6 °C que depende de la composición.", "Siempre a 95,35 °C, el promedio de las dos temperaturas de ebullición.", "A 80,1 °C, porque el más volátil hierve primero y define la temperatura.", "A más de 110,6 °C, porque cada componente es un soluto del otro."], c: 0,
 ex: "La mezcla hierve cuando la suma de las presiones parciales llega a 1 atm. Con más benceno hierve más cerca de 80,1 °C; con más tolueno, más cerca de 110,6 °C. No es el promedio simple, porque las curvas no son rectas. Tampoco es 80,1 °C: la mezcla tiene tolueno, que aporta poca presión y obliga a calentar más que para el benceno puro. Y no supera la ebullición del más alto: la suma de presiones parciales es mayor que la de uno solo."},

{st: "Una mezcla de dos líquidos tiene un azeótropo de ebullición mínima (presión de vapor máxima). ¿Qué es cierto?",
 opts: ["La desviación es negativa: las atracciones A-B son mayores que las A-A y B-B.", "La desviación es positiva, y una destilación simple termina separando los dos componentes puros.", "La desviación es positiva, y en el azeótropo líquido y vapor tienen la misma composición, por lo que la destilación simple no lo separa más.", "La mezcla es ideal y el azeótropo aparece por casualidad en x = 0,5."], c: 2,
 ex: "Una presión de vapor máxima, por encima de la recta de Raoult, es desviación positiva: A-B se atraen menos que A-A y B-B, por lo que se escapan más moléculas. Esa composición hierve a la temperatura más baja y su vapor sale con la misma composición que el líquido, de modo que la destilación no puede enriquecerlo (el etanol con agua, a unos 95 % de etanol en masa). La desviación negativa da un azeótropo de ebullición máxima, no mínima. Y una mezcla ideal no tiene azeótropo."}

]);

registerReveals('fiuba-quimica', '14', [

{st: "<b>Básico · Descenso crioscópico de una solución.</b> Se disuelven 18,0 g de glucosa (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, M = 180,16 g/mol) en 250 g de agua. ¿A qué temperatura congela la solución? K<sub>c</sub>(agua) = 1,86 °C·kg/mol.",
 ans: "<b>−0,74 °C</b>.",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Un no electrolito (i = 1) en agua; piden la temperatura de congelación, así que el camino es ΔT<sub>c</sub> = K<sub>c</sub> · m → <b>Paso 2 · molalidad.</b> n = 18,0 g / 180,16 g/mol = 0,0999 mol. Los kilos son los del solvente: 250 g = 0,250 kg, entonces m = 0,0999 / 0,250 = 0,400 mol/kg → <b>Paso 3 · el descenso.</b> ΔT<sub>c</sub> = 1,86 × 0,400 = 0,743 °C → <b>Paso 4 · la temperatura.</b> El agua pura congela a 0 °C y la solución más abajo: T<sub>c</sub> = 0 − 0,743 = <b>−0,74 °C</b>. → <b>Control.</b> Un descenso de décimas de grado para una solución 0,4 molal es lo esperable. Error típico: contestar \"0,74 °C\", que es el descenso y no la temperatura."},

{st: "<b>Básico · Presión de vapor con soluto no volátil.</b> Se disuelven 36,0 g de glucosa (M = 180,16 g/mol) en 200 g de agua a 25 °C. La presión de vapor del agua pura a esa temperatura es 23,76 mmHg. Calculá la presión de vapor de la solución y su descenso.",
 ans: "<b>P = 23,34 mmHg</b>; <b>ΔP = 0,42 mmHg</b>.",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Un solvente volátil y un soluto que no se evapora: vale Raoult, P = x<sub>sv</sub> · P° → <b>Paso 2 · moles.</b> n(glucosa) = 36,0 / 180,16 = 0,1998 mol y n(agua) = 200 / 18,02 = 11,10 mol → <b>Paso 3 · fracción molar del solvente.</b> x<sub>sv</sub> = 11,10 / (11,10 + 0,1998) = 0,9823 → <b>Paso 4 · la presión.</b> P = 0,9823 × 23,76 = <b>23,34 mmHg</b>, y ΔP = 23,76 − 23,34 = <b>0,42 mmHg</b>. También sale de ΔP = x<sub>st</sub> · P° = 0,01769 × 23,76 = 0,42. → <b>Control.</b> La solución tiene menos presión de vapor que el agua pura, y la diferencia es pequeña porque el soluto es apenas el 1,8 % de las moléculas. Error típico: usar la fracción molar del soluto como si fuera la del solvente y obtener 0,42 mmHg como presión."},

{st: "<b>Intermedio · Atomicidad con un ascenso ebulloscópico.</b> Se disuelven 1,28 g de azufre en 50,0 g de benceno y la temperatura de ebullición sube 0,253 °C. K<sub>eb</sub>(benceno) = 2,53 °C·kg/mol; A<sub>r</sub>(S) = 32,06. El azufre es no volátil y no electrolito. ¿Cuántos átomos tiene la molécula de azufre disuelta?",
 ans: "<b>8 átomos</b> (S<sub>8</sub>, M ≈ 256 g/mol).",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Hay que llegar a la masa molar del soluto y de ahí a los átomos por molécula. No hay disociación, i = 1 → <b>Paso 2 · molalidad.</b> De ΔT<sub>eb</sub> = K<sub>eb</sub> · m: m = 0,253 / 2,53 = 0,100 mol/kg → <b>Paso 3 · moles de soluto.</b> n = m × kg de solvente = 0,100 × 0,0500 = 5,00·10<sup>−3</sup> mol → <b>Paso 4 · masa molar.</b> M = 1,28 g / 5,00·10<sup>−3</sup> mol = 256 g/mol → <b>Paso 5 · átomos.</b> x = M / A<sub>r</sub> = 256 / 32,06 = 7,99 ≈ <b>8</b>. La molécula es S<sub>8</sub>. → <b>Control.</b> x tiene que dar un número entero (o casi): si da 7,5 hay un dato mal tomado. Error típico: dividir por los 50,0 g sin pasar a kilos, o usar la masa de la solución en lugar de la del solvente."},

{st: "<b>Intermedio · Factor i y grado de disociación.</b> Se disuelven 0,100 mol de un electrolito débil HA (se disocia en H<sup>+</sup> y A<sup>−</sup>) en 500 g de agua. La solución congela a −0,484 °C. K<sub>c</sub>(agua) = 1,86 °C·kg/mol. Calculá el factor de van 't Hoff y el grado de disociación.",
 ans: "<b>i = 1,30</b>; <b>α = 0,30</b> (30 %).",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Si HA no se disociara, el descenso sería K<sub>c</sub> · m. Lo medido es mayor, y esa diferencia dice cuántas partículas hay de más → <b>Paso 2 · el descenso ideal sin disociar.</b> m = 0,100 mol / 0,500 kg = 0,200 mol/kg; ΔT<sub>sin disociar</sub> = 1,86 × 0,200 = 0,372 °C → <b>Paso 3 · el descenso medido.</b> La temperatura es −0,484 °C, entonces ΔT<sub>c</sub> = 0,484 °C → <b>Paso 4 · el factor i.</b> i = ΔT medido / (K<sub>c</sub> · m) = 0,484 / 0,372 = <b>1,30</b> → <b>Paso 5 · α.</b> Con ν = 2: i = 1 + α(2 − 1) = 1 + α, así que α = 1,30 − 1 = <b>0,30</b>. → <b>Control.</b> i tiene que estar entre 1 (no se disocia) y ν = 2 (disociación total): 1,30 cumple. Error típico: leer el −0,484 °C como si fuera el descenso con signo y dar un i negativo, o dar α = i."},

{st: "<b>Intermedio · Presiones de vapor de los puros desde una mezcla.</b> A 20 °C, una solución ideal de pentano y hexano con fracción molar de pentano en el líquido x = 0,400 tiene una presión de vapor total de 243 torr, y el vapor tiene una fracción molar de pentano y = 0,701. Calculá la presión de vapor de cada componente puro a 20 °C y decí cuál es el más volátil.",
 ans: "<b>P°(pentano) ≈ 426 torr</b>; <b>P°(hexano) ≈ 121 torr</b>. El más volátil es el pentano.",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> Tengo composición del líquido (x), del vapor (y) y la presión total. Raoult da la presión parcial en función de x, y Dalton la da en función de y: P<sub>i</sub> = x<sub>i</sub> · P°<sub>i</sub> = y<sub>i</sub> · P → <b>Paso 2 · pentano.</b> Igualo: 0,400 · P°<sub>pentano</sub> = 0,701 × 243 = 170,3 torr, así que P°<sub>pentano</sub> = 170,3 / 0,400 = <b>426 torr</b> → <b>Paso 3 · hexano.</b> Las fracciones del hexano son 1 − 0,400 = 0,600 en el líquido y 1 − 0,701 = 0,299 en el vapor: 0,600 · P°<sub>hexano</sub> = 0,299 × 243 = 72,7 torr, entonces P°<sub>hexano</sub> = 72,7 / 0,600 = <b>121 torr</b> → <b>Paso 4 · más volátil.</b> Es el de mayor presión de vapor a la misma temperatura: el pentano. Coincide con que el vapor es más rico en pentano que el líquido (0,701 contra 0,400). → <b>Control.</b> Con esos P°, P = 0,400 × 426 + 0,600 × 121 = 170,4 + 72,6 = 243 torr. Error típico: usar x en lugar de y en la presión parcial, o suponer que el vapor tiene la misma composición que el líquido."},

{st: "<b>Avanzado · Raoult, presión osmótica y solución isotónica.</b> Se disuelven 18,0 g de Na<sub>2</sub>SO<sub>4</sub> en 450 g de agua a 25 °C. La densidad de la solución es 1,03 g/mL y la presión de vapor del agua pura a 25 °C es 23,76 mmHg. Suponé comportamiento ideal (disociación total). <b>a)</b> ¿Cuál es la presión de vapor de la solución? <b>b)</b> ¿Cuál es su presión osmótica a 25 °C? <b>c)</b> ¿Qué masa de glucosa (M = 180,16 g/mol) hay que disolver en agua hasta formar 250 mL de solución para que sea isotónica con ésta?",
 ans: "<b>a)</b> <b>23,40 mmHg</b>. <b>b)</b> <b>20,5 atm</b>. <b>c)</b> <b>37,7 g</b> de glucosa.",
 sol: "<b>Paso 1 · contar partículas.</b> M(Na<sub>2</sub>SO<sub>4</sub>) = 142,04 g/mol: n = 18,0 / 142,04 = 0,1267 mol. Se disocia en 2 Na<sup>+</sup> + SO<sub>4</sub><sup>2−</sup>, así que i = 3 y hay 3 × 0,1267 = 0,3802 mol de partículas → <b>Paso 2 · a) Raoult.</b> n(agua) = 450 / 18,02 = 24,97 mol; x<sub>sv</sub> = 24,97 / (24,97 + 0,3802) = 0,9850. P = 0,9850 × 23,76 = <b>23,40 mmHg</b> (ΔP = 0,36 mmHg) → <b>Paso 3 · b) la molaridad.</b> La π pide M, o sea litros de <i>solución</i>: m<sub>sc</sub> = 450 + 18,0 = 468 g, V = 468 / 1,03 = 454,4 mL = 0,4544 L. En partículas: i · M = 0,3802 / 0,4544 = 0,8367 mol/L → <b>Paso 4.</b> π = (i · M) · R · T = 0,8367 × 0,08206 × 298,15 = <b>20,5 atm</b> → <b>Paso 5 · c) isotónica.</b> La glucosa tiene que igualar i · M = 0,8367 mol/L con i = 1. En 0,250 L hacen falta 0,8367 × 0,250 = 0,2092 mol, o sea 0,2092 × 180,16 = <b>37,7 g</b>, que se llevan a 250 mL de solución (no a 250 mL de agua). → <b>Control.</b> ΔP chico y π de decenas de atmósferas es lo habitual: la presión osmótica es mucho más sensible que la presión de vapor. Error típico: dividir por el volumen de agua en vez del de la solución, o usar i = 2 por mirar sólo los dos Na<sup>+</sup>."},

{st: "<b>Avanzado · Clausius-Clapeyron, grado de disociación y Raoult.</b> Se disuelven 0,500 mol de un soluto no volátil AB en 1,000 kg de agua; AB se disocia en un 35 % según AB → A<sup>+</sup> + B<sup>−</sup>. Calculá la presión de vapor de la solución a 80 °C. Datos: el agua hierve a 100 °C a 1 atm, ΔH<sub>vap</sub> = 41,0 kJ/mol (suponé constante entre 80 y 100 °C), R = 8,314 J/(mol·K).",
 ans: "<b>0,467 atm</b> (355 mmHg).",
 sol: "<b>Paso 1 · qué me dan y qué me piden.</b> No me dan la P° del agua a 80 °C, pero sí un punto de la curva (1 atm a 373,15 K) y el ΔH<sub>vap</sub>: sirve la ecuación de Clausius-Clapeyron (sección 15). Después, Raoult con partículas → <b>Paso 2 · P° a 80 °C.</b> ln(P°/1 atm) = −(ΔH<sub>vap</sub>/R) · (1/T<sub>2</sub> − 1/T<sub>1</sub>) = −(41 000/8,314) · (1/353,15 − 1/373,15) = −4931 × 1,518·10<sup>−4</sup> = −0,7484, así que P° = e<sup>−0,7484</sup> = 0,473 atm (359,6 mmHg) → <b>Paso 3 · factor i.</b> ν = 2 y α = 0,35: i = 1 + 0,35 × (2 − 1) = 1,35 → <b>Paso 4 · partículas.</b> n<sub>partículas</sub> = 0,500 × 1,35 = 0,675 mol, y n(agua) = 1000 / 18,02 = 55,49 mol → <b>Paso 5 · Raoult.</b> x<sub>sv</sub> = 55,49 / (55,49 + 0,675) = 0,9880; P = 0,9880 × 0,4731 = <b>0,467 atm</b>, o 0,467 × 760 = 355 mmHg. → <b>Control.</b> La tabla da 355,1 mmHg para el agua <i>pura</i> a 80 °C; el 359,6 de la ecuación se pasa un 1,3 % por suponer ΔH<sub>vap</sub> constante, y la solución queda 1,2 % abajo de su P°. Error típico: aplicar Raoult con x calculado sin disociar (0,500 mol) y perder el 35 %."},

{st: "<b>Avanzado · Fórmula molecular por combustión y crioscopía.</b> La combustión completa de 5,81 g de un compuesto orgánico formado por C, H y O produce 13,21 g de CO<sub>2</sub> y 5,41 g de H<sub>2</sub>O. Por otra parte, 8,70 g del compuesto disueltos en 120 g de benceno bajan el punto de congelación 3,20 °C (K<sub>c</sub> = 5,12 °C·kg/mol; no electrolito). Calculá la fórmula empírica y la molecular.",
 ans: "Empírica <b>C<sub>3</sub>H<sub>6</sub>O</b>; molecular <b>C<sub>6</sub>H<sub>12</sub>O<sub>2</sub></b> (M = 116 g/mol).",
 sol: "<b>Paso 1 · la empírica por combustión.</b> Todo el C pasa al CO<sub>2</sub> y todo el H al H<sub>2</sub>O (sección 4). n(C) = 13,21 / 44,01 = 0,3002 mol, que son 0,3002 × 12,011 = 3,605 g. n(H) = 2 × 5,41 / 18,015 = 0,6006 mol, que son 0,605 g → <b>Paso 2 · el oxígeno por diferencia.</b> m(O) = 5,81 − 3,605 − 0,605 = 1,600 g, o sea n(O) = 1,600 / 15,999 = 0,1000 mol → <b>Paso 3 · relación.</b> Divido por el menor (0,1000): C 3,00 : H 6,01 : O 1,00. La empírica es <b>C<sub>3</sub>H<sub>6</sub>O</b>, con M<sub>emp</sub> = 58,08 g/mol → <b>Paso 4 · masa molar por crioscopía.</b> m = ΔT / K<sub>c</sub> = 3,20 / 5,12 = 0,625 mol/kg; n = 0,625 × 0,120 = 0,0750 mol; M = 8,70 / 0,0750 = <b>116 g/mol</b> → <b>Paso 5 · la molecular.</b> x = 116 / 58,08 = 2,00, entonces C<sub>6</sub>H<sub>12</sub>O<sub>2</sub>. → <b>Control.</b> x tiene que ser entero. La combustión da la proporción de átomos y la crioscopía da el tamaño; sin la segunda, C<sub>3</sub>H<sub>6</sub>O no se distingue de C<sub>6</sub>H<sub>12</sub>O<sub>2</sub>. Error típico: hacer la relación en gramos en lugar de en moles, o usar los 120 g de solvente como si fueran la masa de la solución."},

{st: "<b>Avanzado · Varios solutos y un insoluble.</b> A 900 g de agua a 30 °C se le agregan 15,0 g de sacarosa (C<sub>12</sub>H<sub>22</sub>O<sub>11</sub>, M = 342,30 g/mol), 6,0 g de KCl (M = 74,55 g/mol) y 4,0 g de arena (SiO<sub>2</sub>, insoluble). Datos: δ de la solución = 1,02 g/mL; P°(agua, 30 °C) = 31,8 mmHg; K<sub>eb</sub>(agua) = 0,512 °C·kg/mol. Suponé comportamiento ideal. Calculá <b>a)</b> la temperatura de ebullición a 1 atm, <b>b)</b> la presión osmótica a 30 °C y <b>c)</b> la presión de vapor a 30 °C.",
 ans: "<b>a)</b> <b>100,12 °C</b>. <b>b)</b> <b>5,64 atm</b>. <b>c)</b> <b>31,67 mmHg</b>.",
 sol: "<b>Paso 1 · contar las partículas de los solutos.</b> La arena no se disuelve, no es soluto y no aporta nada. Sacarosa: n = 15,0 / 342,30 = 0,04382 mol, i = 1. KCl: n = 6,0 / 74,55 = 0,08049 mol, i = 2, que son 0,1610 mol de iones. Total: 0,04382 + 0,1610 = <b>0,2048 mol de partículas</b> → <b>Paso 2 · a) ebullición.</b> Es a 1 atm y pide molalidad: m = 0,2048 / 0,900 kg = 0,2275 mol/kg; ΔT<sub>eb</sub> = 0,512 × 0,2275 = 0,1165 °C; T<sub>eb</sub> = 100 + 0,12 = <b>100,12 °C</b> → <b>Paso 3 · b) presión osmótica.</b> Pide M, con el volumen de la <i>solución</i> y sin contar la arena: m<sub>sc</sub> = 900 + 15,0 + 6,0 = 921 g, V = 921 / 1,02 = 903 mL = 0,903 L. i · M = 0,2048 / 0,903 = 0,2268 mol/L; T = 303,15 K. π = 0,2268 × 0,08206 × 303,15 = <b>5,64 atm</b> → <b>Paso 4 · c) presión de vapor.</b> n(agua) = 900 / 18,02 = 49,94 mol; x<sub>sv</sub> = 49,94 / (49,94 + 0,2048) = 0,9959; P = 0,9959 × 31,8 = <b>31,67 mmHg</b>. → <b>Control.</b> Con tan pocas partículas todo cambia poco: ΔT<sub>eb</sub> de décimas y P apenas debajo de P°. Errores típicos: sumar los 4,0 g de arena a la masa de la solución (da 5,62 atm en vez de 5,64) o contar el KCl con i = 1; y calcular la presión de vapor o la π a 100 °C por haber hecho antes la ebullición."},

{st: "<b>Avanzado · Dos líquidos mezclados por volumen.</b> A 25 °C se mezclan 60,0 mL de hexano (δ = 0,659 g/mL; M = 86,18 g/mol) con 40,0 mL de octano (δ = 0,703 g/mL; M = 114,23 g/mol) y se obtiene una solución ideal con presión de vapor 103,2 torr. Se agrega más hexano, a temperatura constante, hasta que la fracción molar de hexano en el líquido es 0,800: la presión de vapor es ahora 123,6 torr. <b>a)</b> ¿Cuál es la composición del líquido original? <b>b)</b> ¿Cuáles son las presiones de vapor de los puros a 25 °C? <b>c)</b> ¿Cuál es la composición del vapor en equilibrio con el líquido original?",
 ans: "<b>a)</b> <b>x(hexano) = 0,651</b>; x(octano) = 0,349. <b>b)</b> <b>P°(hexano) ≈ 151 torr</b>; <b>P°(octano) ≈ 14 torr</b>. <b>c)</b> <b>y(hexano) = 0,952</b>; y(octano) = 0,048.",
 sol: "<b>Paso 1 · a) volumen → masa → moles.</b> m(hexano) = 60,0 × 0,659 = 39,54 g, n = 39,54 / 86,18 = 0,4588 mol. m(octano) = 40,0 × 0,703 = 28,12 g, n = 28,12 / 114,23 = 0,2462 mol. x(hexano) = 0,4588 / (0,4588 + 0,2462) = <b>0,6508</b>, y x(octano) = 0,3492. Para el cálculo siguiente guardo cuatro cifras → <b>Paso 2 · b) planteo.</b> Raoult más Dalton para la mezcla: P = x · P°<sub>H</sub> + (1 − x) · P°<sub>O</sub> = P°<sub>O</sub> + x · (P°<sub>H</sub> − P°<sub>O</sub>). Con dos mezclas hay dos ecuaciones y dos incógnitas → <b>Paso 3 · resto las dos.</b> 123,6 − 103,2 = (0,800 − 0,6508) · (P°<sub>H</sub> − P°<sub>O</sub>), o sea P°<sub>H</sub> − P°<sub>O</sub> = 20,4 / 0,1492 = 136,7 torr → <b>Paso 4 · despejo.</b> De la primera: P°<sub>O</sub> = 103,2 − 0,6508 × 136,7 = <b>14,2 torr</b>, y P°<sub>H</sub> = 14,2 + 136,7 = <b>150,9 torr</b> → <b>Paso 5 · c) vapor.</b> y(hexano) = x · P°<sub>H</sub> / P = 0,6508 × 150,9 / 103,2 = <b>0,952</b>, y y(octano) = 1 − 0,952 = <b>0,048</b>. → <b>Control.</b> El hexano es el más volátil (mayor P°) y su fracción pasa de 0,651 en el líquido a 0,952 en el vapor, como corresponde. Además P = 0,6508 × 150,9 + 0,3492 × 14,2 = 98,2 + 5,0 = 103,2 torr. Error típico: tomar los 60,0 mL y 40,0 mL como fracciones (0,60 y 0,40) sin pasar por la densidad y los moles; o restar presiones con x redondeada a tres cifras (0,651), que mueve P°<sub>O</sub> de 14,2 a 14,1; con dos cifras (0,65) llega a 14,8."}

]);

// ============================================================
// SECCIÓN 15 · Química General (CB103)
// ============================================================

registerExercises('fiuba-quimica', '15', [

{st: "Un líquido X permanece líquido, a 1 atm, durante todo un calentamiento de −10 °C a 85 °C. ¿Qué se puede asegurar?",
 opts: ["A 85 °C ya está hirviendo, porque es la temperatura más alta del recorrido.", "Su punto de fusión normal es mayor que −10 °C.", "A 5 °C hay vapor de X sobre el líquido, aunque no esté hirviendo.", "A 25 °C es un gas, porque a esa temperatura se evapora."], c: 2,
 ex: "Un líquido se evapora a cualquier temperatura, porque su presión de vapor nunca es cero: a 5 °C hay un poco de vapor sobre el líquido, y esa es la correcta. En cambio hierve recién cuando su presión de vapor iguala a la externa, que es 1 atm. La que dice que a 85 °C ya hierve no se puede asegurar: que siga líquido sólo indica que su punto de ebullición normal no es menor que 85 °C, y la temperatura más alta del recorrido no prueba que hierva. La del punto de fusión falla porque era líquido ya a −10 °C, entonces funde por debajo de esa temperatura. La que dice que a 25 °C es un gas confunde evaporarse con ser gas: el enunciado dice que siguió líquido en todo el recorrido."},

{st: "Se mide la presión de vapor de un líquido a varias temperaturas y se grafica ln P contra 1/T (T en kelvin). Resulta una recta de pendiente −5,20·10<sup>3</sup> K. ¿Cuánto vale su entalpía de vaporización?",
 opts: ["43,2 kJ/mol", "−43,2 kJ/mol", "0,626 kJ/mol", "5,20 kJ/mol"], c: 0,
 ex: "La pendiente de esa recta es −ΔH<sub>vap</sub>/R, así que ΔH<sub>vap</sub> = −pendiente · R = 5,20·10<sup>3</sup> · 8,31 = 4,32·10<sup>4</sup> J/mol = 43,2 kJ/mol. La del signo negativo toma el signo de la pendiente, pero la pendiente es negativa justamente por el signo menos de la fórmula: la entalpía de vaporización es positiva, porque evaporar cuesta energía. La de 0,626 kJ/mol divide por R en lugar de multiplicar. La de 5,20 kJ/mol toma el valor de la pendiente como si ya fuera la entalpía, sin multiplicar por R."},

{st: "Se recoge un gas sobre agua a 30 °C (presión de vapor del agua: 31,8 mmHg) y la presión atmosférica es 750 mmHg. ¿Cuál es la presión del gas seco?",
 opts: ["750 mmHg", "782 mmHg", "31,8 mmHg", "718 mmHg"], c: 3,
 ex: "Adentro, el gas y el vapor de agua hacen entre los dos la presión atmosférica, así que P<sub>gas</sub> = 750 − 31,8 = 718 mmHg, y esa es la correcta. La de 750 mmHg ignora el vapor de agua y toma toda la presión como del gas. La de 782 mmHg suma el vapor en lugar de restarlo. La de 31,8 mmHg es la presión del vapor de agua, no la del gas."},

{st: "Aire a 20 °C está saturado de vapor de agua (presión de vapor 17,54 mmHg). Se lo calienta a 40 °C a presión total constante, sin agregar ni sacar agua (presión de vapor a 40 °C: 55,32 mmHg). ¿Cuánto vale la humedad relativa?",
 opts: ["100 %, porque no se agregó ni se sacó agua.", "32 %", "315 %", "50 %, porque la temperatura se duplicó."], c: 1,
 ex: "Al calentar a presión total constante, la presión parcial del vapor de agua no cambia (17,54 mmHg) pero la de saturación sube a 55,32 mmHg: HR = 17,54/55,32 · 100 = 32 %, y esa es la correcta. La de 100 % supone que la humedad relativa depende de la cantidad de agua, y depende también de la temperatura. La de 315 % invierte el cociente (55,32/17,54) y además una humedad relativa no puede superar 100 % en equilibrio. La de 50 % usa la relación de las temperaturas en °C (40/20), que no tiene nada que ver con la presión de vapor."},

{st: "A la misma presión y temperatura, se deja efundir helio (M = 4,00 g/mol) y metano (M = 16,0 g/mol) por un orificio muy pequeño. ¿Qué pasa?",
 opts: ["El metano sale más rápido, por ser más pesado.", "El helio sale 4,0 veces más rápido.", "El helio sale 2,0 veces más rápido.", "Salen a la misma velocidad, porque están a la misma temperatura."], c: 2,
 ex: "Por la ley de Graham, v<sub>He</sub>/v<sub>CH₄</sub> = √(16,0/4,00) = 2,0: el helio, más liviano, sale 2,0 veces más rápido, y esa es la correcta. La del metano más rápido invierte el sentido: el más pesado es el más lento. La de 4,0 veces usa el cociente de masas sin la raíz cuadrada. La de igual velocidad confunde la energía cinética media, que sí es igual a igual temperatura, con la velocidad, que depende de la masa."},

{st: "El N<sub>2</sub> y el He están a 300 K. ¿Cuál afirmación es correcta?",
 opts: ["Tienen la misma energía cinética media por molécula, y el He se mueve más rápido.", "El N<sub>2</sub> tiene mayor energía cinética media, porque tiene mayor masa.", "Tienen la misma velocidad media, pero distinta energía cinética media.", "El He tiene mayor energía cinética media, porque se mueve más rápido."], c: 0,
 ex: "La energía cinética media sólo depende de la temperatura (3/2·RT por mol), así que es igual en los dos gases a 300 K. Como E<sub>c</sub> = ½·M·u<sup>2</sup>, el de menor masa, el helio, tiene mayor velocidad, y esa es la correcta. La que le da más energía al N<sub>2</sub> por su masa olvida que la velocidad menor compensa exactamente la masa mayor. La que supone la misma velocidad con distinta energía invierte la relación. La que le da más energía al helio porque va más rápido ignora que su masa es menor."},

{st: "A 25 °C y 5 atm, ¿cuál de estos gases se aparta más del comportamiento ideal?",
 opts: ["He, a = 0,0346 atm·L<sup>2</sup>/mol<sup>2</sup>", "H<sub>2</sub>, a = 0,2476 atm·L<sup>2</sup>/mol<sup>2</sup>", "N<sub>2</sub>, a = 1,370 atm·L<sup>2</sup>/mol<sup>2</sup>", "NH<sub>3</sub>, a = 4,225 atm·L<sup>2</sup>/mol<sup>2</sup>"], c: 3,
 ex: "Una a grande indica atracciones intensas, y los gases con atracciones intensas se apartan más del ideal, sobre todo cuando están cerca de su licuefacción: el amoníaco, con la a mayor y puentes de hidrógeno, es el que más se aparta. El helio es el más ideal, porque casi no tiene atracciones ni tamaño. El hidrógeno también tiene una a pequeña. El nitrógeno se aparta más que el helio y el hidrógeno, pero menos que el amoníaco."},

{st: "A 25 °C (298 K) y comprimiendo, ¿cuáles de estos gases se pueden licuar? Temperaturas críticas: N<sub>2</sub> 126,2 K; CH<sub>4</sub> 190,6 K; CO<sub>2</sub> 304,2 K; NH<sub>3</sub> 405,5 K.",
 opts: ["Los cuatro, con presión suficiente.", "CO<sub>2</sub> y NH<sub>3</sub>.", "Sólo el NH<sub>3</sub>, porque el CO<sub>2</sub> es gas a temperatura ambiente.", "Ninguno, porque a 25 °C todos son gases."], c: 1,
 ex: "Un gas se licúa por compresión sólo si su temperatura es menor que la crítica. A 298 K, el CO<sub>2</sub> (304,2 K) y el NH<sub>3</sub> (405,5 K) están por debajo de su temperatura crítica y se licúan; el N<sub>2</sub> y el CH<sub>4</sub> están por encima y no, por mucho que se los comprima. La que dice que se licúan los cuatro olvida la temperatura crítica. La que excluye al CO<sub>2</sub> confunde ser gas a presión ambiente con no poder licuarse: la temperatura crítica del CO<sub>2</sub> es apenas mayor que 298 K, y comprimido a unas 64 atm se licúa. La que dice que ninguno se licúa toma el estado a 1 atm como si no pudiera cambiar."},

{st: "El CO<sub>2</sub> (T<sub>c</sub> = 31,1 °C, P<sub>c</sub> = 72,9 atm) se comprime isotérmicamente a 40 °C hasta 100 atm. ¿Qué se observa?",
 opts: ["Se licúa al llegar a unas 64 atm, la presión de vapor que tiene a 25 °C.", "Se licúa cuando la presión pasa de 72,9 atm, que es la presión crítica.", "Nunca aparece una superficie de separación: se vuelve un fluido denso, supercrítico.", "Se solidifica, por la presión tan alta."], c: 2,
 ex: "A 40 °C la temperatura es mayor que la crítica (31,1 °C), así que ninguna presión produce una fase líquida separada: el gas se va volviendo más denso y queda un fluido supercrítico, y esa es la correcta. La de las 64 atm usa un dato de 25 °C: a 40 °C ya no hay presión de vapor, porque la curva de vaporización termina en el punto crítico. La de la presión crítica confunde las dos coordenadas del punto crítico: lo que decide si hay licuefacción es la temperatura. La de la solidificación inventa un cambio de fase que no está en el recorrido de la compresión a esa temperatura."},

{st: "2 CO + O<sub>2</sub> → 2 CO<sub>2</sub>. Se mezclan 5,0 L de CO y 4,0 L de O<sub>2</sub>, medidos a la misma presión y temperatura, y reaccionan por completo. ¿Qué volumen de gas hay al final, a esa presión y temperatura?",
 opts: ["6,5 L", "9,0 L", "5,0 L", "2,5 L"], c: 0,
 ex: "El CO es el limitante: 5,0 L de CO reaccionan con 2,5 L de O<sub>2</sub> y forman 5,0 L de CO<sub>2</sub>; sobran 4,0 − 2,5 = 1,5 L de O<sub>2</sub>. El gas final es 5,0 + 1,5 = 6,5 L, y esa es la correcta. La de 9,0 L suma los volúmenes iniciales como si nada hubiera reaccionado. La de 5,0 L cuenta sólo el producto y olvida el oxígeno que sobra. La de 2,5 L es el oxígeno que se consumió, no el gas que queda."}

]);

registerReveals('fiuba-quimica', '15', [

{st: "<b>Básico · Leer la ebullición en la tabla del agua.</b> Con una bomba de vacío se regula la presión sobre agua líquida. Usá la tabla de presión de vapor del agua de la teoría. <b>a)</b> El agua está a 70 °C y la presión se baja a 200 mmHg: ¿hierve? <b>b)</b> ¿A qué temperatura hierve el agua cuando la presión es 355 mmHg? <b>c)</b> El agua está a 60 °C y la presión es 300 mmHg: ¿hierve?",
 ans: "<b>a)</b> sí, hierve. <b>b)</b> <b>80 °C</b>. <b>c)</b> no hierve.",
 sol: "<b>Paso 1 · la regla.</b> El agua hierve cuando su presión de vapor iguala a la presión externa, o la supera. Entonces se compara siempre P<sub>v</sub>(T) del agua con la presión de afuera. → <b>Paso 2 · a).</b> A 70 °C la tabla da P<sub>v</sub> = 233,7 mmHg. Como 233,7 &gt; 200, el agua ya tiene más presión de vapor que la que la comprime, y <b>hierve</b> (a esa presión lo haría ya a una temperatura más baja). → <b>Paso 3 · b).</b> Se busca 355 mmHg en la columna de P<sub>v</sub>: la fila es la de 355,1 mmHg, que corresponde a <b>80 °C</b>. → <b>Paso 4 · c).</b> A 60 °C la tabla da 149,4 mmHg, menor que los 300 mmHg de afuera: el agua <b>no hierve</b>, apenas se evapora de a poco. → <b>Control.</b> Sin la bomba, a 760 mmHg el agua hierve a 100 °C; con 355 mmHg hierve a mucho menos, y con 200 mmHg todavía a menos. A menos presión, menos temperatura de ebullición. → <b>Error típico:</b> pensar que el agua \"hierve a 100 °C\" siempre; eso es sólo a 1 atm."},

{st: "<b>Básico · Humedad relativa y vapor por metro cúbico.</b> El aire de un cuarto está a 30 °C y la presión parcial de su vapor de agua es 15,9 mmHg (la presión de vapor del agua a 30 °C es 31,82 mmHg). <b>a)</b> ¿Cuál es la humedad relativa? <b>b)</b> ¿Cuántos gramos de vapor de agua hay en cada metro cúbico de aire? <b>c)</b> Si el aire se calienta hasta 40 °C a presión constante, sin agregar ni sacar agua, ¿cuánto vale la humedad relativa? (a 40 °C, P<sub>v</sub> = 55,32 mmHg).",
 ans: "<b>a)</b> <b>50,0 %</b>. <b>b)</b> <b>15,1 g/m<sup>3</sup></b>. <b>c)</b> <b>28,7 %</b>.",
 sol: "<b>Paso 1 · la fórmula.</b> HR = P<sub>vapor real</sub> / P<sub>v</sub>(T) · 100. → <b>Paso 2 · a).</b> HR = 15,9 / 31,82 · 100 = <b>50,0 %</b>: el aire tiene la mitad del vapor que podría tener a 30 °C. → <b>Paso 3 · b).</b> Los moles por litro salen de P/(R·T): (15,9/760 atm) / (0,0821 · 303,15) = 0,02092 / 24,89 = 8,41·10<sup>−4</sup> mol/L. En 1 m<sup>3</sup> = 1000 L hay 0,841 mol, y con M(H<sub>2</sub>O) = 18,02 g/mol son 0,841 · 18,02 = <b>15,1 g</b>. → <b>Paso 4 · c).</b> No se agregó agua y la presión total no cambia, así que la presión parcial del vapor sigue siendo 15,9 mmHg; lo que cambió es la de saturación, que subió a 55,32 mmHg. HR = 15,9 / 55,32 · 100 = <b>28,7 %</b>. → <b>Control.</b> Saturado a 30 °C habría 30,3 g/m<sup>3</sup> (el doble de b), coherente con HR = 50 %. Al calentar, la HR baja. → <b>Error típico:</b> en c) usar 55,32 mmHg como presión del vapor real; el aire más caliente no tiene más vapor, tiene más capacidad."},

{st: "<b>Intermedio · Combinación de volúmenes y cambio de condiciones.</b> La combustión del propano en fase gaseosa es C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O. Se mezclan 2,00 L de propano con 15,0 L de O<sub>2</sub>, y se queman por completo con todos los volúmenes medidos a la misma presión y temperatura (por encima de 100 °C, así que el agua queda como gas). <b>a)</b> ¿Qué reactivo sobra y cuántos litros? <b>b)</b> ¿Qué volumen total de gas hay al final, a esa P y T? <b>c)</b> Suponé que la reacción ocurrió a 200 °C y 1,00 atm: el CO<sub>2</sub> formado ocupa 6,00 L. ¿Qué volumen ocuparía a 25 °C y 1,00 atm?",
 ans: "<b>a)</b> sobran <b>5,00 L de O<sub>2</sub></b>. <b>b)</b> <b>19,0 L</b>. <b>c)</b> <b>3,78 L</b>.",
 sol: "<b>Paso 1 · a).</b> A igual P y T los volúmenes están en la proporción de los coeficientes: 1 de propano pide 5 de O<sub>2</sub>. Para 2,00 L de propano hacen falta 2,00 · 5 = 10,0 L de O<sub>2</sub>. Hay 15,0 L, así que el propano es el limitante y sobran 15,0 − 10,0 = <b>5,00 L de O<sub>2</sub></b>. → <b>Paso 2 · b).</b> Con el limitante se calculan los productos: CO<sub>2</sub> = 2,00 · 3 = 6,00 L y H<sub>2</sub>O = 2,00 · 4 = 8,00 L. El gas final es el que sobra más los productos: 5,00 + 6,00 + 8,00 = <b>19,0 L</b>. → <b>Paso 3 · c).</b> Ahora cambia sólo la temperatura a presión constante, así que V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub> con kelvin: V<sub>2</sub> = 6,00 · 298,15 / 473,15 = <b>3,78 L</b>. → <b>Control.</b> Se enfría, el volumen baja. Y los 19,0 L finales son más que los 17,0 L iniciales porque 6 moles de gas dan 7. → <b>Error típico:</b> aplicar la proporción de volúmenes a gases medidos a distintas P y T: sólo vale si son las mismas."},

{st: "<b>Intermedio · Gas recogido sobre agua.</b> El zinc reacciona con el ácido clorhídrico: Zn + 2 HCl → ZnCl<sub>2</sub> + H<sub>2</sub>. El hidrógeno se recoge sobre agua en una probeta, con el nivel de adentro igual al de afuera, y se miden 312 mL a 23 °C con una presión atmosférica de 748 mmHg (P<sub>v</sub> del agua a 23 °C = 21,1 mmHg). <b>a)</b> ¿Cuántos moles de H<sub>2</sub> se obtuvieron? <b>b)</b> ¿Qué masa de Zn reaccionó? <b>c)</b> ¿Qué volumen ocuparía ese H<sub>2</sub> seco en CNPT?",
 ans: "<b>a)</b> <b>0,01227 mol</b>. <b>b)</b> <b>0,802 g de Zn</b>. <b>c)</b> <b>0,275 L</b> (275 mL).",
 sol: "<b>Paso 1 · presión del hidrógeno solo.</b> La probeta contiene H<sub>2</sub> y vapor de agua, y entre los dos hacen la presión atmosférica. P(H<sub>2</sub>) = 748 − 21,1 = 726,9 mmHg = 726,9/760 = 0,9564 atm. → <b>Paso 2 · a).</b> n = P·V/(R·T) = 0,9564 · 0,312 L / (0,0821 · 296,15) = 0,2984 / 24,31 = <b>0,01227 mol</b>. → <b>Paso 3 · b).</b> Por la ecuación, 1 mol de Zn da 1 mol de H<sub>2</sub>, así que n(Zn) = 0,01227 mol y m = 0,01227 · 65,38 = <b>0,802 g</b>. → <b>Paso 4 · c).</b> En CNPT 1 mol ocupa 22,4 L: V = 0,01227 · 22,4 = 0,2749 L = <b>0,275 L</b>. Es menor que los 312 mL medidos porque en la probeta el gas está a 23 °C y además ocupa su lugar el vapor de agua. → <b>Control.</b> Con 748 mmHg enteros el resultado habría sido un 3 % mayor (0,01263 mol): ése es el error que cuesta el vapor de agua. → <b>Error típico:</b> usar la presión atmosférica completa como presión del gas."},

{st: "<b>Intermedio · Aire que burbujea por un líquido volátil.</b> Por una botella con etanol (C<sub>2</sub>H<sub>5</sub>OH, M = 46,07 g/mol) se hace burbujear aire lentamente a 25 °C, y salen 5,00 L de gas saturado de vapor de etanol, a la presión de 1 atm. La presión de vapor del etanol a 25 °C es 59,0 mmHg. <b>a)</b> ¿Qué masa de etanol se evaporó? <b>b)</b> ¿Qué fracción molar del gas que sale es vapor de etanol?",
 ans: "<b>a)</b> <b>0,731 g</b>. <b>b)</b> <b>0,0776</b> (7,76 %).",
 sol: "<b>Paso 1 · qué significa \"saturado\".</b> El gas sale en equilibrio con el etanol líquido, y por eso la presión parcial del vapor de etanol es su presión de vapor: P(etanol) = 59,0 mmHg = 59,0/760 = 0,07763 atm. → <b>Paso 2 · a).</b> El vapor ocupa los 5,00 L del gas que sale, a 25 °C = 298,15 K: n = P·V/(R·T) = 0,07763 · 5,00 / (0,0821 · 298,15) = 0,3882 / 24,48 = 0,01586 mol. La masa evaporada es m = n·M = 0,01586 · 46,07 = <b>0,731 g</b>. → <b>Paso 3 · b).</b> Por Dalton, x = P(etanol)/P<sub>total</sub> = 0,07763 / 1 = <b>0,0776</b>. → <b>Control.</b> Un poco menos de 1 g de etanol en 5 L de gas, un líquido bastante volátil: es razonable. El 92 % restante del gas es aire. → <b>Error típico:</b> calcular los moles con la presión total (1 atm) en lugar de la presión parcial del vapor."},

{st: "<b>Intermedio · Clausius-Clapeyron con dos presiones de vapor.</b> El etanol tiene una presión de vapor de 134 mmHg a 40 °C y de 350 mmHg a 60 °C. <b>a)</b> Calculá su entalpía de vaporización. <b>b)</b> Calculá su presión de vapor a 50 °C. <b>c)</b> Estimá su temperatura de ebullición normal.",
 ans: "<b>a)</b> <b>41,6 kJ/mol</b>. <b>b)</b> <b>220 mmHg</b>. <b>c)</b> <b>78,1 °C</b>.",
 sol: "<b>Paso 1 · todo a kelvin.</b> T<sub>1</sub> = 313,15 K y T<sub>2</sub> = 333,15 K. → <b>Paso 2 · a).</b> ln(P<sub>2</sub>/P<sub>1</sub>) = ln(350/134) = 0,9600. 1/T<sub>2</sub> − 1/T<sub>1</sub> = 3,0016·10<sup>−3</sup> − 3,1933·10<sup>−3</sup> = −1,917·10<sup>−4</sup> K<sup>−1</sup>. ΔH<sub>vap</sub> = −R · ln(P<sub>2</sub>/P<sub>1</sub>) / (1/T<sub>2</sub> − 1/T<sub>1</sub>) = −8,31 · 0,9600 / (−1,917·10<sup>−4</sup>) = 4,162·10<sup>4</sup> J/mol = <b>41,6 kJ/mol</b>. → <b>Paso 3 · b).</b> Con T<sub>3</sub> = 323,15 K y el punto de 40 °C: ln(P<sub>3</sub>/134) = −(41 620/8,31) · (1/323,15 − 1/313,15) = −5008 · (−9,882·10<sup>−5</sup>) = 0,4949, así que P<sub>3</sub> = 134 · e<sup>0,4949</sup> = <b>220 mmHg</b>. → <b>Paso 4 · c).</b> La ebullición normal es P = 760 mmHg. Desde el punto de 60 °C: ln(760/350) = 0,7752 y 1/T = 1/333,15 − 8,31 · 0,7752 / 41 620 = 3,0016·10<sup>−3</sup> − 1,548·10<sup>−4</sup> = 2,8468·10<sup>−3</sup>, o sea T = 351,3 K = <b>78,1 °C</b>. → <b>Control.</b> La presión de 50 °C (220) cae entre 134 y 350, y la temperatura de ebullición (78,1 °C) cae por encima de 60 °C porque 760 &gt; 350. → <b>Error típico:</b> restar al revés (1/T<sub>1</sub> − 1/T<sub>2</sub>) y obtener una entalpía negativa; la ΔH<sub>vap</sub> siempre es positiva."},

{st: "<b>Intermedio · Presión de van der Waals contra ideal.</b> Calculá la presión con la ecuación de van der Waals y con la de los gases ideales, y concluí en cada caso. <b>a)</b> 2,00 mol de CH<sub>4</sub> en 1,50 L a 300 K (a = 2,283 atm·L<sup>2</sup>/mol<sup>2</sup>, b = 0,0428 L/mol). <b>b)</b> 1,00 mol de N<sub>2</sub> en 0,120 L a 600 K (a = 1,370 atm·L<sup>2</sup>/mol<sup>2</sup>, b = 0,0387 L/mol).",
 ans: "<b>a)</b> real <b>30,8 atm</b>, ideal 32,8 atm (<b>P real &lt; P ideal</b>). <b>b)</b> real <b>511 atm</b>, ideal 410 atm (<b>P real &gt; P ideal</b>).",
 sol: "<b>Paso 1 · la ecuación despejada.</b> P = nRT/(V − nb) − a·n<sup>2</sup>/V<sup>2</sup>; el primer término corrige el volumen propio y el segundo, las atracciones. → <b>Paso 2 · a).</b> nRT = 2,00 · 0,0821 · 300 = 49,26 atm·L. V − nb = 1,50 − 2,00 · 0,0428 = 1,4144 L, y 49,26/1,4144 = 34,83 atm. El término de atracción es 2,283 · 2,00<sup>2</sup> / 1,50<sup>2</sup> = 4,06 atm. P<sub>real</sub> = 34,83 − 4,06 = <b>30,8 atm</b>. Ideal: 49,26/1,50 = <b>32,8 atm</b>. → <b>Paso 3 · b).</b> nRT = 1,00 · 0,0821 · 600 = 49,26 atm·L. V − nb = 0,120 − 0,0387 = 0,0813 L, y 49,26/0,0813 = 605,9 atm. Atracción: 1,370 / 0,120<sup>2</sup> = 95,1 atm. P<sub>real</sub> = 605,9 − 95,1 = <b>511 atm</b>. Ideal: 49,26/0,120 = <b>410 atm</b>. → <b>Paso 4 · conclusión.</b> En a) la presión real es menor (Z = 30,77/32,84 = 0,94): domina la atracción, que \"frena\" las moléculas antes de la pared. En b) la presión real es mayor (Z = 1,24): el volumen está tan comprimido que domina el volumen propio de las moléculas, que dejan menos lugar libre. → <b>Control.</b> El mismo método da resultados a ambos lados del ideal; lo que decide es quién pesa más, el primer o el segundo término. → <b>Error típico:</b> en a) usar V − b = 1,50 − 0,0428 en lugar de V − nb = 1,50 − 2,00 · 0,0428: el volumen propio se descuenta por cada mol que hay."},

{st: "<b>Avanzado · Volumen con van der Waals por aproximaciones sucesivas.</b> Un mol de CO<sub>2</sub> (a = 3,658 atm·L<sup>2</sup>/mol<sup>2</sup>, b = 0,0429 L/mol) está a 0 °C y ejerce una presión de 20,0 atm. <b>a)</b> ¿Qué volumen ocupa si se lo trata como gas ideal? <b>b)</b> ¿Qué volumen ocupa como gas real? <b>c)</b> ¿Qué se concluye?",
 ans: "<b>a)</b> <b>1,121 L</b>. <b>b)</b> <b>0,987 L</b>. <b>c)</b> el gas real ocupa un 12 % menos que el ideal (Z = 0,88): dominan las atracciones.",
 sol: "<b>Paso 1 · a), el gas ideal.</b> V = nRT/P = 1,00 · 0,0821 · 273,15 / 20,0 = 22,43 / 20,0 = <b>1,121 L</b>. → <b>Paso 2 · por qué hay que iterar.</b> En la ecuación (P + a·n<sup>2</sup>/V<sup>2</sup>)·(V − nb) = nRT la incógnita V aparece en dos lugares, y despejarla da una ecuación cúbica. Se despeja V de un solo lado: V = nRT/(P + a·n<sup>2</sup>/V<sup>2</sup>) + nb, y se la evalúa una y otra vez empezando con el V ideal. → <b>Paso 3 · b), las aproximaciones.</b> Con V<sub>0</sub> = 1,121 L: V<sub>1</sub> = 22,43 / (20,0 + 3,658/1,121<sup>2</sup>) + 0,0429 = 22,43 / 22,91 + 0,0429 = 1,022 L. Con V<sub>1</sub>: V<sub>2</sub> = 22,43 / (20,0 + 3,658/1,022<sup>2</sup>) + 0,0429 = 0,997 L. Con V<sub>2</sub>: V<sub>3</sub> = 0,990 L; con V<sub>3</sub>: V<sub>4</sub> = 0,988 L; con V<sub>4</sub>: V<sub>5</sub> = 0,987 L; y V<sub>6</sub> = 0,987 L, ya no cambia. → <b>Paso 4 · comprobación en la ecuación.</b> Se reemplaza en la ecuación: P = 22,43/(0,987 − 0,0429) − 3,658/0,987<sup>2</sup> = 23,75 − 3,75 = 20,0 atm ✓. → <b>Paso 5 · c).</b> El gas real ocupa 0,987 L contra 1,121 L del ideal, un 12 % menos, y Z = P·V/(nRT) = 20,0 · 0,987 / 22,43 = <b>0,88</b>. Z &lt; 1: a 0 °C el CO<sub>2</sub> está relativamente cerca de su licuefacción y las atracciones (a grande) son más importantes que el volumen propio. → <b>Control.</b> Cada aproximación mejora la anterior y se detiene del lado de abajo de 1,121 L: el término de atracción sube la presión efectiva, y por eso el volumen es menor. → <b>Error típico:</b> dejar la cuenta en V<sub>1</sub> sin seguir; hay que repetir hasta que el tercer decimal quede fijo."},

{st: "<b>Avanzado · Recipiente cerrado con aire y agua líquida.</b> Un recipiente rígido de 10,0 L contiene aire seco a 1,00 atm y 25 °C. Se introducen 2,00 g de agua líquida (cuyo volumen se desprecia), se cierra y se calienta hasta 60 °C. P<sub>v</sub>(H<sub>2</sub>O, 60 °C) = 149,4 mmHg. <b>a)</b> ¿Queda agua líquida a 60 °C? <b>b)</b> ¿Cuántos gramos de agua hay en el vapor y cuántos en el líquido? <b>c)</b> ¿Cuál es la presión total y la humedad relativa del aire del recipiente?",
 ans: "<b>a)</b> sí, queda líquida. <b>b)</b> <b>1,30 g</b> de vapor y <b>0,70 g</b> de líquido. <b>c)</b> <b>1,31 atm</b> (999 mmHg) y <b>HR = 100 %</b>.",
 sol: "<b>Paso 1 · ¿se evapora todo?</b> n(H<sub>2</sub>O) = 2,00 / 18,02 = 0,1110 mol. Si se evaporara todo, la presión del vapor sería P = n·R·T/V = 0,1110 · 0,0821 · 333,15 / 10,0 = 0,3036 atm. La presión de vapor del agua a 60 °C es 149,4/760 = 0,1966 atm, menor que 0,3036: no puede haber tanto vapor, así que <b>queda líquido</b> y el vapor está saturado. → <b>Paso 2 · b), el reparto.</b> El vapor tiene P<sub>v</sub> = 0,1966 atm: n<sub>vapor</sub> = P<sub>v</sub>·V/(R·T) = 0,1966 · 10,0 / (0,0821 · 333,15) = 0,07187 mol, que son 0,07187 · 18,02 = <b>1,30 g</b>. El resto, 2,00 − 1,30 = <b>0,70 g</b>, sigue líquido. → <b>Paso 3 · c), el aire.</b> El aire está en un recipiente rígido y cerrado, con n y V constantes, así que su presión sube con la temperatura: P<sub>aire</sub> = 1,00 · 333,15/298,15 = 1,117 atm. → <b>Paso 4 · presión total.</b> Por Dalton, P<sub>total</sub> = P<sub>aire</sub> + P<sub>v</sub> = 1,117 + 0,1966 = <b>1,31 atm</b> = 999 mmHg. → <b>Paso 5 · humedad relativa.</b> Con líquido presente, el vapor está saturado: P<sub>vapor real</sub> = P<sub>v</sub>(60 °C), así que HR = <b>100 %</b>. → <b>Control.</b> El vapor (0,1966 atm) es menor que lo que daría evaporar todo (0,3036 atm), que es lo que corresponde cuando sobra líquido. → <b>Error típico:</b> calcular el vapor con todos los moles del agua (que sería sobresaturado) o olvidar que el aire también aumenta su presión al calentarse."},

{st: "<b>Avanzado · Entalpía de vaporización con el punto triple.</b> El agua tiene su punto triple a 273,16 K y 4,58 mmHg, y su punto de ebullición normal a 373,15 K. <b>a)</b> Estimá la entalpía de vaporización del agua usando esos dos puntos de la curva de vaporización. <b>b)</b> Comparala con el valor de 40,7 kJ/mol a 100 °C y explicá la diferencia.",
 ans: "<b>a)</b> <b>43,3 kJ/mol</b>. <b>b)</b> es un 6 % mayor que el valor a 100 °C, porque ΔH<sub>vap</sub> no es realmente constante.",
 sol: "<b>Paso 1 · los dos puntos.</b> La curva de vaporización une el punto triple con el punto crítico, así que ambos puntos pertenecen a ella: (T<sub>1</sub>, P<sub>1</sub>) = (273,16 K; 4,58 mmHg) y (T<sub>2</sub>, P<sub>2</sub>) = (373,15 K; 760 mmHg). → <b>Paso 2 · Clausius-Clapeyron.</b> ln(P<sub>2</sub>/P<sub>1</sub>) = ln(760/4,58) = 5,1117. 1/T<sub>2</sub> − 1/T<sub>1</sub> = 2,6799·10<sup>−3</sup> − 3,6609·10<sup>−3</sup> = −9,810·10<sup>−4</sup> K<sup>−1</sup>. → <b>Paso 3 · a).</b> ΔH<sub>vap</sub> = −R · 5,1117 / (−9,810·10<sup>−4</sup>) = 8,31 · 5,1117 / 9,810·10<sup>−4</sup> = 4,330·10<sup>4</sup> J/mol = <b>43,3 kJ/mol</b>. → <b>Paso 4 · b).</b> El valor de 100 °C es 40,7 kJ/mol, y el resultado queda 6 % por encima. La ecuación supone que ΔH<sub>vap</sub> es constante entre los dos puntos y que el vapor es ideal; pero 0 °C y 100 °C están lejos entre sí, y ΔH<sub>vap</sub> del agua baja al subir la temperatura (a 0 °C es casi 45 kJ/mol). Lo que se obtiene es un promedio sobre todo el intervalo. → <b>Control.</b> Con puntos más cercanos entre sí (por ejemplo 90 y 100 °C) el resultado se acerca a 40,7. → <b>Error típico:</b> usar °C en las inversas: con 0,01 °C el 1/T se dispara y el resultado no tiene sentido. Siempre kelvin."}

]);

// ============================================================
// SECCIÓN 16 · Química General (CB103)
// ============================================================

registerExercises('fiuba-quimica', '16', [

{st: "Un gas ideal se expande de forma isotérmica y reversible. ¿Cuál de estas afirmaciones es correcta?",
 opts: ["Q = 0, porque la temperatura no cambia.", "W = 0, porque la temperatura no cambia.", "ΔU = 0, y el calor que absorbe es igual, en módulo, al trabajo que entrega.", "ΔU &gt; 0, porque el gas absorbe calor."], c: 2,
 ex: "La energía interna de un gas ideal sólo depende de la temperatura: si T es constante, ΔU = 0, y por el primer principio Q = −W. Como el gas se expande, W &lt; 0 y entonces Q &gt; 0: absorbe calor y lo devuelve entero como trabajo. Decir que Q = 0 confunde isoterma con adiabática. Decir que W = 0 confunde isoterma con isocórica: el volumen sí cambia, y con logaritmo. Y que ΔU &gt; 0 porque entra calor olvida que el trabajo que sale compensa lo que entra."},

{st: "Un mol de un gas ideal monoatómico se calienta 10,0 K, una vez dentro de un recipiente rígido y otra con un pistón libre que mantiene la presión constante. ¿Cuánto más calor hace falta en el segundo caso?",
 opts: ["83,1 J, que es R·ΔT: el trabajo de empujar el pistón.", "8,31 J, que es R.", "Ninguno: ΔT es el mismo y entonces el calor es el mismo.", "125 J, que es 3/2·R·ΔT."], c: 0,
 ex: "A volumen constante todo el calor sube la energía interna: Q<sub>V</sub> = n·C<sub>V</sub>·ΔT. A presión constante hace falta lo mismo para subir U y además el trabajo que hace el gas al empujar el pistón: Q<sub>P</sub> = n·C<sub>P</sub>·ΔT, con C<sub>P</sub> − C<sub>V</sub> = R. La diferencia es 1·8,31·10,0 = 83,1 J. Los 8,31 J son R sin multiplicar por ΔT. Que el calor sea igual porque ΔT lo es olvida el trabajo. Y 3/2·R·ΔT = 125 J es el propio Q<sub>V</sub> de este gas, no la diferencia."},

{st: "Un gas ideal recorre un ciclo en el plano P-V en sentido horario. Al completarlo, ¿qué se cumple?",
 opts: ["ΔU &gt; 0 y W = 0.", "W &gt; 0 y Q &lt; 0.", "ΔU = 0 y Q = W.", "ΔU = 0, W &lt; 0 y Q = −W &gt; 0."], c: 3,
 ex: "Al volver al estado inicial, ΔU = 0 y entonces Q = −W. En sentido horario la expansión ocurre a presión más alta que la compresión: el gas entrega más trabajo del que recibe, así que W &lt; 0 y Q &gt; 0. Decir ΔU &gt; 0 con W = 0 ignora que es un ciclo. Los signos W &gt; 0 y Q &lt; 0 son los del sentido antihorario. Y Q = W con el mismo signo viola el primer principio, porque la suma de ambos tiene que ser ΔU = 0."},

{st: "Un sistema pasa del estado A al estado B por tres caminos distintos. ¿Qué magnitud vale lo mismo en los tres?",
 opts: ["El calor intercambiado.", "El cambio de energía interna.", "El trabajo realizado.", "Ninguna: depende del camino."], c: 1,
 ex: "La energía interna es función de estado: su cambio sólo depende de A y de B. El calor y el trabajo son funciones de camino y cambian de un camino a otro, pero siempre de modo que su suma Q + W dé el mismo ΔU. En el plano P-V se ve porque el área bajo cada camino (el trabajo) es distinta. Decir que ninguna magnitud se conserva confunde las funciones de camino con todas las magnitudes."},

{st: "El calor de neutralización por mol de agua es prácticamente el mismo con HCl y NaOH que con HNO<sub>3</sub> y KOH. ¿Por qué?",
 opts: ["Porque los dos ácidos tienen la misma masa molar.", "Porque el cloruro y el nitrato absorben el mismo calor al disolverse.", "Porque en los dos casos se forma la misma sal.", "Porque en ambos la reacción neta es H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O y los demás iones son espectadores."], c: 3,
 ex: "Los ácidos y bases fuertes están completamente disociados, así que lo único que ocurre es la unión de H<sup>+</sup> y OH<sup>−</sup> para dar agua, con unos −57,2 kJ por mol de agua. Los otros iones no participan. Las masas molares del HCl (36,5 g/mol) y del HNO<sub>3</sub> (63,0 g/mol) no son iguales, y de todos modos no intervienen en un ΔH por mol de agua. Las sales son distintas (NaCl y KNO<sub>3</sub>). Y los iones espectadores no absorben calor en la reacción."},

{st: "Al neutralizar ácido acético con NaOH se mide un calor por mol de agua algo menor que con HCl y NaOH. ¿Cuál es la explicación?",
 opts: ["El ácido acético es débil y está casi sin ionizar: su ionización resta algo del calor que libera la formación del agua.", "El ácido acético tiene menos moles de H<sup>+</sup> por litro.", "La sal que se forma, el acetato de sodio, absorbe parte del calor.", "La neutralización del ácido acético es endotérmica."], c: 0,
 ex: "Para neutralizarse, el ácido débil tiene que ionizarse, y a la formación del agua se suma esa ionización, que aquí resta algo de calor: queda un ΔH algo menos negativo (unos −55,6 kJ/mol de agua). Los moles de H<sup>+</sup> por litro no importan: el calor se calcula por mol de agua formada. Que la sal absorba calor no es la causa. Y la neutralización sigue siendo exotérmica, apenas menos que con un ácido fuerte."},

{st: "En un calorímetro se mezclan 50 mL de HCl 1,0 M con 100 mL de NaOH 1,0 M y la temperatura sube un cierto ΔT. Se repite con 50 mL de HCl 1,0 M y 200 mL de NaOH 1,0 M. ¿Cuánto vale ahora el aumento de temperatura?",
 opts: ["El mismo ΔT, porque el limitante es el mismo.", "El doble, porque hay el doble de base.", "El 60 % del ΔT original.", "1,67 veces el ΔT original."], c: 2,
 ex: "El limitante es el ácido en los dos casos, así que se forman los mismos 0,050 mol de agua y se libera el mismo calor. Pero ese calor se reparte en una masa mayor: 250 g contra 150 g. Como ΔT = Q/(m·c), el aumento es 150/250 = 0,60 del anterior. Quedarse en \"el mismo ΔT\" olvida que el exceso también hay que calentarlo. El doble pensaría que la base extra reacciona. Y 1,67 es el cociente al revés, 250/150."},

{st: "Una bomba calorimétrica da ΔU = −885,8 kJ/mol para CH<sub>4</sub>(g) + 2 O<sub>2</sub>(g) → CO<sub>2</sub>(g) + 2 H<sub>2</sub>O(l) a 298 K. ¿Cuánto vale ΔH de esa reacción?",
 opts: ["−885,8 kJ/mol, porque la bomba mide ΔH.", "−890,8 kJ/mol.", "−880,8 kJ/mol.", "−888,3 kJ/mol."], c: 1,
 ex: "ΔH = ΔU + Δn·R·T con Δn = 1 − 3 = −2 (el agua líquida no cuenta): ΔH = −885,8 + (−2)·8,31·10<sup>−3</sup>·298 = −885,8 − 5,0 = −890,8 kJ/mol. La bomba trabaja a volumen constante y mide ΔU, no ΔH. El valor −880,8 sale de restar el término con el signo cambiado. Y −888,3 usa Δn = −1, o sea cuenta mal los moles de gas."},

{st: "Un grupo mide el calor de neutralización de HCl con NaOH en un vaso mal aislado, sin corregir la curva de temperatura. Comparado con −57,2 kJ/mol, su valor de ΔH es:",
 opts: ["Menos negativo: error por defecto, porque el ΔT leído es menor que el real.", "Más negativo: error por exceso, porque el vaso aporta calor.", "Igual, porque el ΔH de la reacción no depende del calorímetro.", "Positivo, porque el vaso pierde calor."], c: 0,
 ex: "El vaso pierde calor al ambiente mientras se mide, así que la temperatura máxima que se lee queda por debajo de la que se habría alcanzado. Con un ΔT menor, el Q calculado es menor y también el |ΔH|: sale menos negativo que el de tabla, por defecto. El ΔH de la reacción no cambia, pero el valor que se mide sí. Un vaso mal aislado no aporta calor. Y el signo sigue siendo negativo, porque la reacción es exotérmica y la temperatura sube."},

{st: "Un gas ideal se comprime rápidamente dentro de un cilindro térmicamente aislado. ¿Qué pasa con su temperatura?",
 opts: ["No cambia, porque no entra ni sale calor.", "Baja, porque el gas pierde energía.", "Sube, porque Q = 0 y el trabajo que recibe aumenta su energía interna.", "Sube, porque el gas absorbe calor del entorno."], c: 2,
 ex: "En una evolución adiabática Q = 0, así que ΔU = W. Al comprimir, W &gt; 0 y la energía interna aumenta; como U de un gas ideal sólo depende de T, la temperatura sube. Que no entre calor no implica que T sea constante: eso es una isoterma, en la que sí hay calor. El gas no pierde energía, la recibe. Y decir que absorbe calor contradice que el cilindro esté aislado: el calentamiento es por trabajo."}

]);

registerReveals('fiuba-quimica', '16', [

{st: "<b>Básico · Isobárica: W, ΔU, Q y ΔH.</b> Se calientan 2,00 mol de un gas ideal diatómico (C<sub>V</sub> = 5/2·R, C<sub>P</sub> = 7/2·R) de 300 K a 450 K, manteniendo la presión constante. R = 8,31 J/(mol·K). Calculá W, ΔU, Q y ΔH.",
 ans: "W = <b>−2,49 kJ</b>; ΔU = <b>+6,23 kJ</b>; Q = ΔH = <b>+8,73 kJ</b>.",
 sol: "<b>Paso 1 · qué se mantiene.</b> La presión: es isobárica. Entonces el calor es Q = n·C<sub>P</sub>·ΔT y es igual a ΔH. → <b>Paso 2 · trabajo.</b> W = −P·ΔV = −n·R·ΔT = −2,00 mol · 8,31 J/(mol·K) · 150 K = <b>−2.493 J</b>. Es negativo porque el gas se expande al calentarse. → <b>Paso 3 · energía interna.</b> C<sub>V</sub> = 5/2 · 8,31 = 20,775 J/(mol·K) (seguí con las tres cifras); ΔU = n·C<sub>V</sub>·ΔT = 2,00 · 20,775 · 150 = <b>+6.233 J</b>. → <b>Paso 4 · calor y entalpía.</b> C<sub>P</sub> = 7/2 · 8,31 = 29,085 J/(mol·K); Q = ΔH = 2,00 · 29,085 · 150 = <b>+8.726 J</b>. → <b>Control.</b> ΔU = Q + W: 8.726 − 2.493 = 6.233 J. También ΔH − ΔU = n·R·ΔT = 2.493 J. → <b>Error típico:</b> usar C<sub>V</sub> para el calor porque \"el gas se calienta\": a presión constante el calor es n·C<sub>P</sub>·ΔT."},

{st: "<b>Básico · Calor de neutralización.</b> En un calorímetro de capacidad calorífica despreciable se mezclan 50,0 mL de HCl 1,00 M con 50,0 mL de NaOH 1,00 M, los dos a 21,0 °C. La temperatura sube hasta 27,8 °C. Usá c = 4,184 J/(g·K) y δ = 1,00 g/mL. Calculá el ΔH de neutralización por mol de agua y comparalo con el valor de tabla, −57,2 kJ/mol.",
 ans: "ΔH = <b>−56,9 kJ/mol de agua</b> (error de 0,5 % por defecto).",
 sol: "<b>Paso 1 · calor que gana la solución.</b> Masa: 50,0 + 50,0 = 100 mL → 100 g. ΔT = 27,8 − 21,0 = 6,8 °C. Q<sub>ganado</sub> = m·c·ΔT = 100 g · 4,184 J/(g·K) · 6,8 K = <b>2.845 J</b>. → <b>Paso 2 · calor de la reacción.</b> La reacción libera lo que la solución gana: Q<sub>reacción</sub> = <b>−2.845 J</b> (exotérmica, porque la T sube). → <b>Paso 3 · moles de agua.</b> Ácido: 0,0500 L · 1,00 M = 0,0500 mol; base: 0,0500 mol. Reaccionan 1 a 1 (H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O) y no sobra ninguno: se forman <b>0,0500 mol de agua</b>. → <b>Paso 4 · por mol.</b> ΔH = −2.845 J / 0,0500 mol = −56.900 J/mol = <b>−56,9 kJ/mol</b>. → <b>Control.</b> Contra −57,2 kJ/mol: (56,9 − 57,2)/57,2 = −0,5 %, o sea 0,5 % por defecto, tal como se espera si el vaso pierde un poquito de calor. → <b>Error típico:</b> escribir el resultado positivo: la T subió, la reacción es exotérmica y el ΔH es negativo. O dejarlo en J sin pasarlo a kJ por mol."},

{st: "<b>Intermedio · Isoterma reversible con logaritmo.</b> 0,500 mol de un gas ideal a 300 K y 10,0 L se comprimen isotérmica y reversiblemente hasta 2,50 L. R = 8,31 J/(mol·K) = 0,0821 L·atm/(mol·K). a) Presión inicial y final. b) W, ΔU, ΔH y Q. c) ¿Cuánto trabajo haría falta si se comprimiera contra una presión externa constante igual a la presión final? Usá 1 L·atm = 101,3 J.",
 ans: "a) <b>1,23 atm y 4,93 atm</b>. b) W = <b>+1,73 kJ</b>; ΔU = ΔH = <b>0</b>; Q = <b>−1,73 kJ</b>. c) <b>3,74 kJ</b>, más del doble.",
 sol: "<b>Paso 1 · presiones.</b> P = n·R·T/V. Inicial: 0,500 · 0,0821 · 300 / 10,0 = <b>1,23 atm</b>. Final: 0,500 · 0,0821 · 300 / 2,50 = <b>4,93 atm</b>. Como T es constante, P·V no cambia: 1,23 · 10,0 = 4,93 · 2,50 = 12,3 L·atm. → <b>Paso 2 · trabajo reversible.</b> W = −n·R·T·ln(V<sub>2</sub>/V<sub>1</sub>) = −0,500 · 8,31 · 300 · ln(2,50/10,0) = −1.246,5 · (−1,3863) = <b>+1.728 J</b>. Es positivo: se comprime, el entorno trabaja sobre el gas. → <b>Paso 3 · el resto.</b> Es una isoterma de gas ideal: ΔU = 0 y ΔH = 0. Por el primer principio, Q = ΔU − W = <b>−1.728 J</b>: el gas entrega al entorno todo el trabajo que recibe, en forma de calor. → <b>Paso 4 · contra presión fija (c).</b> W = −P<sub>ext</sub>·ΔV = −4,926 atm · (2,50 − 10,0) L = +36,95 L·atm = 36,95 · 101,3 = <b>3.743 J</b>. → <b>Control.</b> Entre los mismos estados, comprimir de golpe cuesta 3.743 J y comprimir despacio (reversible) sólo 1.728 J: la vía reversible es la que menos trabajo exige al comprimir. → <b>Error típico:</b> poner V<sub>1</sub>/V<sub>2</sub> al revés (signo cambiado: un trabajo negativo para una compresión) o usar logaritmo decimal en vez de natural (un valor 2,3 veces menor)."},

{st: "<b>Intermedio · Camino y función de estado.</b> Un sistema pasa del estado A al estado B por el camino I: recibe 250 J de calor y realiza 90 J de trabajo. a) ¿Cuánto vale ΔU de A a B? b) Por el camino II el sistema realiza 30 J de trabajo: ¿cuánto calor intercambia? c) Vuelve de B a A por el camino III, en el que recibe 55 J de trabajo: ¿cuánto calor intercambia y en qué sentido? d) El camino II pasa por un estado D, con A → D a volumen constante y D → B a presión constante. Si U<sub>A</sub> = 100 J y U<sub>D</sub> = 180 J, hallá el calor de cada tramo de II.",
 ans: "a) <b>ΔU = +160 J</b>. b) <b>Q = +190 J</b>. c) <b>Q = −215 J</b> (el sistema libera calor). d) <b>Q<sub>AD</sub> = +80 J</b> y <b>Q<sub>DB</sub> = +110 J</b>.",
 sol: "<b>Paso 1 · signos.</b> Con la convención de la cátedra, lo que entra al sistema es positivo. Camino I: Q = +250 J; el sistema <b>realiza</b> trabajo, así que W = −90 J. → <b>Paso 2 · ΔU (a).</b> ΔU = Q + W = 250 − 90 = <b>+160 J</b>. → <b>Paso 3 · camino II (b).</b> ΔU es función de estado: es el mismo, 160 J. Con W = −30 J: Q = ΔU − W = 160 − (−30) = <b>+190 J</b>. Menos trabajo entregado, menos calor necesario. → <b>Paso 4 · regreso (c).</b> De B a A, ΔU cambia de signo: −160 J. Si recibe 55 J de trabajo, W = +55 J y Q = ΔU − W = −160 − 55 = <b>−215 J</b>: libera calor. → <b>Paso 5 · tramos de II (d).</b> En A → D el volumen es constante, así que W = 0 y Q<sub>AD</sub> = ΔU<sub>AD</sub> = 180 − 100 = <b>+80 J</b>. Todo el trabajo de II (−30 J) ocurre en D → B. U<sub>B</sub> = U<sub>A</sub> + 160 = 260 J, así que ΔU<sub>DB</sub> = 260 − 180 = 80 J y Q<sub>DB</sub> = 80 − (−30) = <b>+110 J</b>. → <b>Control.</b> 80 + 110 = 190 J, igual que en (b). → <b>Error típico:</b> querer que el calor sea el mismo por todos los caminos: lo que no cambia es ΔU."},

{st: "<b>Intermedio · Neutralización con exceso, ácido distinto y base débil.</b> Se mezclan 50,0 mL de HNO<sub>3</sub> de concentración desconocida con 100,0 mL de KOH 1,00 M, los dos a 22,0 °C, en un calorímetro de capacidad despreciable. La base está en exceso y la temperatura sube hasta 30,2 °C. Datos: ΔH de neutralización (ácido y base fuertes) = −57,2 kJ/mol de agua; c = 4,184 J/(g·K); δ = 1,00 g/mL. a) Hallá la concentración del ácido. b) Si el ácido fuera H<sub>2</sub>SO<sub>4</sub> y diera el mismo ΔT, ¿qué concentración tendría? c) Si se reemplazara el KOH por 100,0 mL de NH<sub>3</sub> 1,00 M (ΔH de neutralización con esa base = −52,0 kJ/mol de agua) y se usara el HNO<sub>3</sub> del punto a, ¿cuál sería la temperatura final?",
 ans: "a) <b>1,80 M</b>. b) <b>0,900 M</b>. c) <b>29,5 °C</b>, algo menos que los 30,2 °C.",
 sol: "<b>Paso 1 · calor y moles de agua (a).</b> Masa: 150,0 mL → 150,0 g; ΔT = 8,2 °C. Q = 150,0 · 4,184 · 8,2 = 5.146 J. La reacción libera ese calor: −5.146 J. Moles de agua formados: 5.146 J / 57.200 J/mol = <b>0,0900 mol</b>. → <b>Paso 2 · el limitante.</b> La base está en exceso (0,100 mol de KOH contra 0,0900 mol), así que el que fija los moles de agua es el ácido: 0,0900 mol de HNO<sub>3</sub> en 0,0500 L. C = 0,0900 / 0,0500 = <b>1,80 M</b>. → <b>Paso 3 · H<sub>2</sub>SO<sub>4</sub> (b).</b> Los moles de H<sup>+</sup> que reaccionan son los mismos, 0,0900 mol, pero cada mol de H<sub>2</sub>SO<sub>4</sub> aporta 2: n(H<sub>2</sub>SO<sub>4</sub>) = 0,0900/2 = 0,0450 mol y C = 0,0450/0,0500 = <b>0,900 M</b>. El parámetro que cambia es la relación entre moles de ácido y moles de agua. → <b>Paso 4 · base débil (c).</b> El ácido sigue siendo el limitante: se forman 0,0900 mol de agua, ahora con −52,0 kJ/mol: Q = 0,0900 · 52.000 = 4.680 J. ΔT = 4.680 / (150,0 · 4,184) = 7,46 °C y T<sub>final</sub> = 22,0 + 7,46 = <b>29,5 °C</b>. → <b>Control.</b> Con la base débil sube menos (7,5 contra 8,2 °C): se libera menos calor por mol de agua porque la ionización del NH<sub>3</sub> absorbe algo de calor. → <b>Error típico:</b> dividir el calor por los moles de base (0,100 mol) en vez de los del ácido limitante."},

{st: "<b>Intermedio · Capacidad calorífica del calorímetro.</b> En un calorímetro con 100,0 g de agua a 20,0 °C se agregan 100,0 g de agua a 60,0 °C. El calorímetro parte a la misma temperatura que el agua fría. La temperatura final de equilibrio es 38,6 °C. a) Calculá la capacidad calorífica del calorímetro. b) Con ese calorímetro, que parte a 21,0 °C como las soluciones, 50,0 mL de HCl 1,00 M y 50,0 mL de NaOH 1,00 M, ambos a 21,0 °C, suben hasta 27,0 °C. Calculá ΔH por mol de agua. c) ¿Cuánto habría dado si se despreciara el calorímetro? Usá c = 4,184 J/(g·K).",
 ans: "a) <b>63,0 J/°C</b>. b) <b>−57,8 kJ/mol</b>. c) <b>−50,2 kJ/mol</b>, 12 % menos en módulo que el valor de tabla.",
 sol: "<b>Paso 1 · qué se conserva (a).</b> El sistema está aislado: lo que cede el agua caliente lo ganan el agua fría y el calorímetro. El calorímetro parte de la misma T que el agua fría. → <b>Paso 2 · calor cedido y calor ganado por el agua.</b> Q<sub>cedido</sub> = 100,0 · 4,184 · (60,0 − 38,6) = 8.954 J. Q<sub>agua fría</sub> = 100,0 · 4,184 · (38,6 − 20,0) = 7.782 J. → <b>Paso 3 · lo que falta es del calorímetro.</b> 8.954 − 7.782 = 1.172 J, que subieron 38,6 − 20,0 = 18,6 °C al calorímetro: C<sub>cal</sub> = 1.172 / 18,6 = <b>63,0 J/°C</b>. → <b>Paso 4 · neutralización (b).</b> Masa 100 g, ΔT = 6,0 °C. Q<sub>ganado</sub> = (100 · 4,184 + 63,0) · 6,0 = (418,4 + 63,0) · 6,0 = 2.888 J. Moles de agua: 0,0500. ΔH = −2.888 / 0,0500 = <b>−57,8 kJ/mol</b>. → <b>Paso 5 · sin calorímetro (c).</b> Sólo la solución: 418,4 · 6,0 = 2.510 J, y ΔH = −2.510 / 0,0500 = <b>−50,2 kJ/mol</b>. Contra −57,2: (50,2 − 57,2)/57,2 = −12 %, por defecto. → <b>Control.</b> Con C<sub>cal</sub> el resultado (−57,8) queda a 1 % del valor de tabla. → <b>Error típico:</b> ignorar C<sub>cal</sub>: el calor que se lleva el calorímetro \"desaparece\" y el ΔH medido queda demasiado chico."},

{st: "<b>Avanzado · Tres procesos, gráfico P-V y ciclo.</b> 1,00 mol de un gas ideal monoatómico (C<sub>V</sub> = 3/2·R) está en el estado A: 4,00 atm y 400 K. Realiza reversiblemente: (I) una compresión isobárica hasta la mitad del volumen; (II) un calentamiento isocórico hasta 400 K; (III) una expansión isotérmica hasta el volumen inicial. R = 8,31 J/(mol·K) = 0,0821 L·atm/(mol·K). a) Hallá V, P y T de los estados A, B (fin de I) y C (fin de II) y dibujá los tres procesos en un gráfico P-V. b) Calculá W, ΔU y Q de cada proceso y del ciclo completo. c) ¿En qué sentido se recorre y qué significa el signo del trabajo neto?",
 ans: "b) I: W = <b>+1.662 J</b>, ΔU = −2.493 J, Q = −4.155 J. II: W = <b>0</b>, ΔU = +2.493 J, Q = +2.493 J. III: W = <b>−2.304 J</b>, ΔU = 0, Q = +2.304 J. Ciclo: ΔU = <b>0</b>, W = <b>−642 J</b>, Q = <b>+642 J</b>. c) Sentido horario: el gas convierte calor en trabajo.",
 sol: "<b>Paso 1 · estados (a).</b> A: V<sub>A</sub> = n·R·T/P = 1,00 · 0,0821 · 400 / 4,00 = <b>8,21 L</b>. B (fin de I, isobárica): V<sub>B</sub> = 8,21/2 = 4,105 L, P = 4,00 atm y T<sub>B</sub> = P·V/(n·R) = 4,00 · 4,105 / 0,0821 = <b>200 K</b>. C (fin de II, isocórica): V<sub>C</sub> = 4,105 L, T<sub>C</sub> = 400 K y P<sub>C</sub> = 1,00 · 0,0821 · 400 / 4,105 = <b>8,00 atm</b>. La expansión (III) lleva de C a A por la hipérbola P·V = 32,84 L·atm. <div class=\"fig\"> <svg viewBox=\"0 0 460 290\" width=\"552\" role=\"img\" aria-label=\"Plano P-V con tres evoluciones de 1,00 mol de gas. De A (8,21 L, 4,00 atm) a B (4,1 L, 4,00 atm) una compresión isobárica, de B a C (4,1 L, 8,00 atm) un calentamiento isocórico, y de C a A una expansión isotérmica que cierra el ciclo en sentido horario.\"> <defs> <marker id=\"fqui16e1a\" markerUnits=\"userSpaceOnUse\" markerWidth=\"13\" markerHeight=\"12\" refX=\"9\" refY=\"5\" orient=\"auto\"><path d=\"M1 1 L9.5 5 L1 9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker> </defs> <path d=\"M70 250 L440 250\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" marker-end=\"url(#fqui16e1a)\"/> <path d=\"M70 250 L70 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.3\" marker-end=\"url(#fqui16e1a)\"/> <text x=\"440\" y=\"272\" font-size=\"14\" text-anchor=\"end\" font-style=\"italic\" fill=\"currentColor\">V (L)</text> <text x=\"78\" y=\"22\" font-size=\"14\" text-anchor=\"start\" font-style=\"italic\" fill=\"currentColor\">P (atm)</text> <text x=\"217.8\" y=\"272\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">4,1</text> <path d=\"M217.8 250 L217.8 255\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/> <text x=\"365.6\" y=\"272\" font-size=\"14\" text-anchor=\"middle\" fill=\"currentColor\">8,2</text> <path d=\"M365.6 250 L365.6 255\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/> <text x=\"62\" y=\"167\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">4</text> <path d=\"M66 162 L70 162\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/> <text x=\"62\" y=\"79\" font-size=\"14\" text-anchor=\"end\" fill=\"currentColor\">8</text> <path d=\"M66 74 L70 74\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/> <path d=\"M217.8 162 L217.8 74 L217.8 74 L223.9 81 L230.1 87.5 L236.3 93.6 L242.4 99.1 L248.6 104.3 L254.7 109.2 L260.9 113.7 L267 118 L273.2 122 L279.4 125.8 L285.5 129.3 L291.7 132.7 L297.8 135.8 L304 138.8 L310.1 141.7 L316.3 144.4 L322.5 147 L328.6 149.4 L334.8 151.8 L340.9 154 L347.1 156.1 L353.2 158.2 L359.4 160.1 L365.6 162 L365.6 162 Z\" fill=\"var(--accent)\" fill-opacity=\"0.22\" stroke=\"none\" stroke-width=\"0\" stroke-linejoin=\"round\"/> <path d=\"M217.8 162 L217.8 250\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.1\" stroke-dasharray=\"4 4\"/> <path d=\"M365.6 162 L365.6 250\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.1\" stroke-dasharray=\"4 4\"/> <path d=\"M70 162 L365.6 162\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.1\" stroke-dasharray=\"4 4\"/> <path d=\"M70 74 L217.8 74\" fill=\"none\" stroke=\"var(--text-muted)\" stroke-width=\"1.1\" stroke-dasharray=\"4 4\"/> <path d=\"M365.6 162 L219.8 162\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.3\" stroke-linejoin=\"round\" marker-end=\"url(#fqui16e1a)\"/> <path d=\"M217.8 162 L217.8 76\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.3\" stroke-linejoin=\"round\" marker-end=\"url(#fqui16e1a)\"/> <path d=\"M217.8 74 L223.9 81 L230.1 87.5 L236.3 93.6 L242.4 99.1 L248.6 104.3 L254.7 109.2 L260.9 113.7 L267 118 L273.2 122 L279.4 125.8 L285.5 129.3 L291.7 132.7 L297.8 135.8 L304 138.8 L310.1 141.7 L316.3 144.4 L322.5 147 L328.6 149.4 L334.8 151.8 L340.9 154 L347.1 156.1\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.3\" stroke-linejoin=\"round\"/> <path d=\"M347.1 156.1 L364.6 161.5\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.3\" marker-end=\"url(#fqui16e1a)\"/> <circle cx=\"365.6\" cy=\"162\" r=\"4\" fill=\"currentColor\"/> <text x=\"373.6\" y=\"182\" font-size=\"15\" text-anchor=\"start\" fill=\"currentColor\">A</text> <circle cx=\"217.8\" cy=\"162\" r=\"4\" fill=\"currentColor\"/> <text x=\"209.8\" y=\"182\" font-size=\"15\" text-anchor=\"end\" fill=\"currentColor\">B</text> <circle cx=\"217.8\" cy=\"74\" r=\"4\" fill=\"currentColor\"/> <text x=\"209.8\" y=\"66\" font-size=\"15\" text-anchor=\"end\" fill=\"currentColor\">C</text> <text x=\"293.2\" y=\"182\" font-size=\"15\" text-anchor=\"middle\" fill=\"currentColor\">I</text> <text x=\"207.8\" y=\"118\" font-size=\"15\" text-anchor=\"end\" fill=\"currentColor\">II</text> <text x=\"318.4\" y=\"133.3\" font-size=\"15\" text-anchor=\"start\" fill=\"currentColor\">III</text> </svg> <div class=\"fig-cap\">Los tres procesos: I isobárico (A a B), II isocórico (B a C) y III isotérmico (C a A). El área encerrada es el trabajo neto del ciclo. A y C están sobre la isoterma de 400 K; B está a 200 K.</div></div> → <b>Paso 2 · proceso I.</b> W = −n·R·ΔT = −1,00 · 8,31 · (200 − 400) = <b>+1.662 J</b> (comprimir: W &gt; 0). ΔU = n·C<sub>V</sub>·ΔT = 1,00 · 12,465 · (−200) = <b>−2.493 J</b>. Q = ΔU − W = −2.493 − 1.662 = <b>−4.155 J</b>, que coincide con n·C<sub>P</sub>·ΔT = 5/2 · 8,31 · (−200). → <b>Paso 3 · proceso II.</b> El volumen es constante: W = <b>0</b>; ΔU = 12,465 · (+200) = <b>+2.493 J</b>; Q = ΔU = <b>+2.493 J</b>. → <b>Paso 4 · proceso III.</b> Isoterma: ΔU = 0. W = −n·R·T·ln(V<sub>A</sub>/V<sub>C</sub>) = −1,00 · 8,31 · 400 · ln 2 = <b>−2.304 J</b>; Q = −W = <b>+2.304 J</b>. → <b>Paso 5 · ciclo.</b> W = 1.662 + 0 − 2.304 = <b>−642 J</b>; ΔU = −2.493 + 2.493 + 0 = <b>0</b>; Q = −4.155 + 2.493 + 2.304 = <b>+642 J</b>. → <b>Paso 6 · sentido (c).</b> En el gráfico se va de A a B hacia la izquierda, de B a C hacia arriba y de C a A hacia abajo y a la derecha: sentido <b>horario</b>. El área encerrada, 642 J, es el trabajo neto: W &lt; 0 significa que el gas entrega más trabajo del que recibe, con un calor neto de entrada igual. → <b>Control.</b> ΔU del ciclo es cero y Q = −W: 642 J contra −642 J. → <b>Error típico:</b> darle trabajo a la isocórica (no hay área) o olvidar que, para ir de B a C, el gas se calienta de 200 a 400 K: ese calor entra y suma al balance."},

{st: "<b>Avanzado · Ciclo triangular con cp y cv por gramo.</b> 0,100 mol de un gas ideal (M = 40,0 g/mol; c<sub>P</sub> = 0,520 J/(g·K); c<sub>V</sub> = 0,312 J/(g·K)) parte del estado A, 1,00 atm y 300 K, y recorre el ciclo triangular A → B → C → A: A → B isocórico hasta 2,00 atm; B → C en línea recta en el plano P-V hasta 1,00 atm y el doble del volumen de A; C → A isobárico. R = 0,0821 L·atm/(mol·K); 1 L·atm = 101,3 J. a) Hallá V<sub>A</sub>, T<sub>B</sub> y T<sub>C</sub>. b) Calculá ΔU, W y Q de cada tramo. c) Calculá ΔU, W y Q del ciclo en ese sentido y en el contrario (A → C → B → A).",
 ans: "a) V<sub>A</sub> = <b>2,463 L</b>; T<sub>B</sub> = T<sub>C</sub> = <b>600 K</b>. b) A→B: ΔU = 374 J, W = 0, Q = +374 J. B→C: ΔU = 0, W = −374 J, Q = +374 J. C→A: ΔU = −374 J, W = +250 J, Q = −624 J. c) A→B→C→A: ΔU = <b>0</b>, W = <b>−125 J</b>, Q = <b>+125 J</b>; en sentido contrario, W = <b>+125 J</b> y Q = <b>−125 J</b>.",
 sol: "<b>Paso 1 · volumen y temperaturas (a).</b> V<sub>A</sub> = n·R·T/P = 0,100 · 0,0821 · 300 / 1,00 = <b>2,463 L</b>. B: mismo volumen y P = 2,00 atm, así que T<sub>B</sub> = 600 K (la P se duplica a V constante). C: V<sub>C</sub> = 2 · 2,463 = 4,926 L y P = 1,00 atm: T<sub>C</sub> = 1,00 · 4,926 / (0,100 · 0,0821) = <b>600 K</b>. Masa del gas: 0,100 mol · 40,0 g/mol = 4,00 g. → <b>Paso 2 · A → B (isocórico).</b> ΔU = m·c<sub>V</sub>·ΔT = 4,00 · 0,312 · 300 = <b>+374 J</b>; W = 0; Q = ΔU = <b>+374 J</b>. → <b>Paso 3 · B → C (recta).</b> B y C tienen la misma T de 600 K, así que ΔU = <b>0</b> aunque el camino no sea una isoterma: ΔU sólo depende de los extremos. El trabajo es el área bajo la recta, un trapecio de bases 2,00 y 1,00 atm y altura 2,463 L: (2,00 + 1,00)/2 · 2,463 = 3,695 L·atm = 374 J, con signo menos (expansión): W = <b>−374 J</b>, y Q = ΔU − W = <b>+374 J</b>. → <b>Paso 4 · C → A (isobárico).</b> ΔU = 4,00 · 0,312 · (300 − 600) = <b>−374 J</b>; W = −P·ΔV = −1,00 · (2,463 − 4,926) = +2,463 L·atm = <b>+250 J</b> (compresión); Q = −374 − 250 = <b>−624 J</b>, y se controla con m·c<sub>P</sub>·ΔT = 4,00 · 0,520 · (−300) = −624 J. → <b>Paso 5 · ciclo A → B → C → A (c).</b> ΔU = 374 + 0 − 374 = <b>0</b>. Con los valores sin redondear: W = 0 − 374,3 + 249,5 = −124,8 ≈ <b>−125 J</b>. Q = 374,4 + 374,3 − 623,9 = 124,8 ≈ <b>+125 J</b>. El área del triángulo es ½ · (2,00 − 1,00) atm · 2,463 L = 1,232 L·atm = 125 J: es |W|. El sentido es horario, por eso W &lt; 0. → <b>Paso 6 · sentido contrario.</b> Recorrer el mismo triángulo al revés cambia el signo de todo lo que no es ΔU: ΔU = <b>0</b>, W = <b>+125 J</b> y Q = <b>−125 J</b>. → <b>Control.</b> c<sub>P</sub> − c<sub>V</sub> = 0,208 J/(g·K), y multiplicado por M da 8,32 J/(mol·K) = R. → <b>Error típico:</b> asignar ΔU ≠ 0 a B → C porque \"no es una isoterma\", o calcular el W del ciclo sin su signo."},

{st: "<b>Avanzado · Metal con ácido: curva, C del calorímetro y error.</b> En un calorímetro de capacidad calorífica 35 J/°C se hacen reaccionar 3,27 g de Zn (M = 65,38 g/mol) con 100,0 mL de HCl 2,00 M: Zn(s) + 2 HCl(ac) → ZnCl<sub>2</sub>(ac) + H<sub>2</sub>(g). La temperatura inicial es de 20,0 °C; la máxima que se lee es 35,4 °C y, al prolongar hacia atrás el tramo de enfriamiento hasta el instante de la mezcla, se obtiene 36,0 °C. Usá c = 4,184 J/(g·K) y δ = 1,00 g/mL. Datos: ΔH°<sub>f</sub> HCl(ac) = −167,2 y ZnCl<sub>2</sub>(ac) = −488,2 kJ/mol. a) Calculá el calor de reacción por mol de Zn. b) Calculá el error relativo porcentual contra el valor teórico, por defecto o por exceso, e indicá qué supuestos hiciste. c) ¿Qué valor saldría con el máximo leído, sin extrapolar?",
 ans: "a) <b>−145,0 kJ/mol de Zn</b>. b) Teórico <b>−153,8 kJ/mol</b>; error de <b>5,7 % por defecto</b>. c) <b>−139,6 kJ/mol</b> (9,2 % por defecto).",
 sol: "<b>Paso 1 · limitante.</b> n(Zn) = 3,27 / 65,38 = 0,0500 mol. n(HCl) = 0,1000 L · 2,00 M = 0,200 mol, y la ecuación pide 2 por cada Zn, o sea 0,100 mol: el ácido está en exceso y el <b>limitante es el Zn</b>. → <b>Paso 2 · ΔT corregido (a).</b> Con la extrapolación: ΔT = 36,0 − 20,0 = <b>16,0 °C</b>. → <b>Paso 3 · calor.</b> Masa de la solución ≈ 100 g (se desprecia el Zn). Q<sub>ganado</sub> = (100,0 · 4,184 + 35) · 16,0 = 453,4 · 16,0 = 7.254 J. Q<sub>reacción</sub> = −7.254 J. → <b>Paso 4 · por mol de Zn.</b> ΔH = −7.254 J / 0,05002 mol = −145.040 J/mol = <b>−145,0 kJ/mol</b>. → <b>Paso 5 · teórico (b).</b> ΔH°<sub>r</sub> = ΔH°<sub>f</sub>(ZnCl<sub>2</sub>) − 2 · ΔH°<sub>f</sub>(HCl) = −488,2 − 2 · (−167,2) = <b>−153,8 kJ/mol</b> (el Zn y el H<sub>2</sub> valen cero). → <b>Paso 6 · error.</b> |−145,0 − (−153,8)| / 153,8 = 8,8/153,8 = 5,7 %. El valor medido es menos negativo que el teórico: error <b>por defecto</b>. Supuestos: la solución tiene el c y la densidad del agua; el Zn está puro y reacciona por completo; el calorímetro es adiabático salvo la pérdida que corrige la extrapolación. Fuentes de la diferencia: pérdidas de calor no corregidas del todo, un c algo menor que el del agua para esa solución o una capa de óxido en el metal. → <b>Paso 7 · sin extrapolar (c).</b> ΔT = 35,4 − 20,0 = 15,4 °C: Q = 453,4 · 15,4 = 6.982 J y ΔH = −6.982 / 0,05002 = <b>−139,6 kJ/mol</b>, error 9,2 % por defecto. Por eso se extrapola: el máximo leído ya perdió calor mientras subía. → <b>Control.</b> ΔT esperado sin pérdidas: 153,8 · 0,05002 · 1.000 / 453,4 = 17,0 °C, y se midieron 16,0 °C corregidos: coherente con un error de unos 6 %. → <b>Error típico:</b> usar los moles de HCl en lugar de los del Zn limitante."},

{st: "<b>Avanzado · Bomba calorimétrica: de ΔU a ΔH.</b> Para calibrar una bomba calorimétrica se quema 1,000 g de ácido benzoico (ΔU de combustión = −26,43 kJ/g) y la temperatura del agua sube 2,40 °C. Luego se quema 0,700 g de ciclohexano, C<sub>6</sub>H<sub>12</sub>(l) (M = 84,16 g/mol), y la temperatura sube 2,96 °C. T = 298 K, R = 8,31 J/(mol·K). a) Hallá la capacidad calorífica del conjunto. b) Calculá ΔU de combustión del ciclohexano por mol. c) Calculá ΔH, escribí la ecuación termoquímica y comparala con el valor de tabla, −3.920 kJ/mol.",
 ans: "a) <b>11,01 kJ/°C</b>. b) ΔU = <b>−3.919 kJ/mol</b>. c) ΔH = <b>−3.926,5 kJ/mol</b>; C<sub>6</sub>H<sub>12</sub>(l) + 9 O<sub>2</sub>(g) → 6 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l), ΔH = −3.926,5 kJ; error de 0,17 % por exceso.",
 sol: "<b>Paso 1 · calibración (a).</b> El calor que libera el ácido benzoico es 1,000 g · 26,43 kJ/g = 26,43 kJ, y lo absorbe todo el conjunto (agua, bomba y accesorios): C = 26,43 kJ / 2,40 °C = 11,0125 ≈ <b>11,01 kJ/°C</b> (seguí con 11,0125). → <b>Paso 2 · calor del ciclohexano (b).</b> Q = C · ΔT = 11,0125 · 2,96 = 32,60 kJ. Moles: 0,700 g / 84,16 g/mol = 8,317·10<sup>−3</sup> mol. La bomba es rígida, así que el calor liberado es ΔU y, por la convención, negativo: ΔU = −32,60 kJ / 8,317·10<sup>−3</sup> mol = <b>−3.919 kJ/mol</b>. → <b>Paso 3 · de ΔU a ΔH (c).</b> Ecuación: C<sub>6</sub>H<sub>12</sub>(l) + 9 O<sub>2</sub>(g) → 6 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l). Sólo cuentan los gases: Δn = 6 − 9 = <b>−3</b>. ΔH = ΔU + Δn · R · T = −3.919,1 + (−3) · 8,31·10<sup>−3</sup> · 298 = −3.919,1 − 7,4 = <b>−3.926,5 kJ/mol</b>. La ecuación termoquímica con el ΔH por mol de ciclohexano: C<sub>6</sub>H<sub>12</sub>(l) + 9 O<sub>2</sub>(g) → 6 CO<sub>2</sub>(g) + 6 H<sub>2</sub>O(l), ΔH = −3.926,5 kJ. → <b>Paso 4 · error.</b> (3.926,5 − 3.920)/3.920 = 0,17 %, por exceso (más negativo). → <b>Control.</b> ΔH es algo más negativo que ΔU porque Δn &lt; 0: el entorno comprime al sistema a presión constante y entrega energía. → <b>Error típico:</b> escribir −3.919 kJ/mol como el ΔH de la ecuación: es el ΔU que midió la bomba, y la ecuación termoquímica pide ΔH."}

]);

// ==== INTERACTIVO: NOMENCLATURA (inicio) ====
// ============================================================
// NOMENCLATURA INORGÁNICA · generador de ejercicios con corrector (motor)
// Arma los compuestos con sus fórmulas y sus nombres, sortea ejercicios, lee lo que escribe el
// estudiante y dice qué está bien y qué no. No toca la página: se expone en NOMEN_MOTOR para
// poder probarlo fuera del navegador. Las convenciones son las de la sección 6 de la guía.
// ============================================================
(function () {
  'use strict';

  const ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];
  const PRE = ['', 'mono', 'di', 'tri', 'tetra', 'penta', 'hexa', 'hepta'];
  const mcd = (a, b) => (b ? mcd(b, a % b) : a);
  const sig = (q) => (q > 0 ? '+' + q : q < 0 ? '−' + (-q) : '0');
  const b = (t) => '<b>' + t + '</b>';
  const lista = (xs) => (xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1]);

  // ---------------------------------------------------------- elementos
  // Los que usa el generador y los que aparecen por confusión de símbolos.
  const ELEM = {
    H: 'hidrógeno', O: 'oxígeno', Li: 'litio', Na: 'sodio', K: 'potasio', Ag: 'plata', Mg: 'magnesio', Ca: 'calcio',
    Ba: 'bario', Zn: 'cinc', Al: 'aluminio', Fe: 'hierro', Cu: 'cobre', Cr: 'cromo', Co: 'cobalto', Mn: 'manganeso',
    Pb: 'plomo', Sn: 'estaño', Ni: 'níquel', Au: 'oro', F: 'flúor', Cl: 'cloro', Br: 'bromo', I: 'iodo', S: 'azufre',
    N: 'nitrógeno', P: 'fósforo', C: 'carbono', Si: 'silicio',
    Hg: 'mercurio', B: 'boro', Be: 'berilio', Sr: 'estroncio', Cs: 'cesio', Rb: 'rubidio', Pt: 'platino', As: 'arsénico',
    Se: 'selenio', Sb: 'antimonio', Cd: 'cadmio', Ti: 'titanio', He: 'helio', Ne: 'neón', Ar: 'argón', U: 'uranio',
    V: 'vanadio', W: 'wolframio', Y: 'itrio', Bi: 'bismuto', Mo: 'molibdeno', In: 'indio', Te: 'telurio', Os: 'osmio',
    Ir: 'iridio', Ga: 'galio', Ge: 'germanio', Kr: 'criptón', Xe: 'xenón', Sc: 'escandio', Po: 'polonio', Ra: 'radio',
    No: 'nobelio', Hf: 'hafnio', Ta: 'tantalio', Nb: 'niobio', Tc: 'tecnecio', Ru: 'rutenio', Rh: 'rodio', Pd: 'paladio',
    La: 'lantano', Ce: 'cerio', Pu: 'plutonio', Am: 'americio', Es: 'einstenio', Pa: 'protactinio', Np: 'neptunio',
    Ac: 'actinio', At: 'astato', Fr: 'francio', Rn: 'radón', Tl: 'talio', Re: 'renio', Zr: 'circonio',
  };
  // sólo estos entran cuando se lee una fórmula escrita toda en minúsculas o toda en mayúsculas
  const PROPIOS = ['H', 'O', 'Li', 'Na', 'K', 'Ag', 'Mg', 'Ca', 'Ba', 'Zn', 'Al', 'Fe', 'Cu', 'Cr', 'Co', 'Mn', 'Pb', 'Sn',
    'Ni', 'Au', 'F', 'Cl', 'Br', 'I', 'S', 'N', 'P', 'C', 'Si'];

  // ---------------------------------------------------------- cationes
  // ox: números de oxidación como catión · tr: adjetivo de la tradicional para cada uno
  // ptr: nivel desde el que la tradicional se pide (0 Química Básica, 1 Química General, 9 nunca: sólo se acepta)
  // nv: nivel del elemento · w: cuánto sale en el sorteo · nums: cómo se le dice al estudiante qué números tiene
  const METALES = [
    { s: 'Li', n: 'litio', ox: [1], tr: ['lítico'], w: 1 },
    { s: 'Na', n: 'sodio', ox: [1], tr: ['sódico'], w: 3 },
    { s: 'K', n: 'potasio', ox: [1], tr: ['potásico'], w: 3 },
    { s: 'Ag', n: 'plata', ox: [1], tr: ['argéntico'], w: 1.5 },
    { s: 'Mg', n: 'magnesio', ox: [2], tr: ['magnésico'], w: 2 },
    { s: 'Ca', n: 'calcio', ox: [2], tr: ['cálcico'], w: 3 },
    { s: 'Ba', n: 'bario', ox: [2], tr: ['bárico'], w: 1.5 },
    { s: 'Zn', n: 'cinc', ox: [2], tr: [null], w: 1.5 },
    { s: 'Al', n: 'aluminio', ox: [3], tr: ['alumínico'], w: 2 },
    { s: 'Fe', n: 'hierro', ox: [2, 3], tr: ['ferroso', 'férrico'], ptr: 0, w: 3, nums: '+2 y +3' },
    { s: 'Cu', n: 'cobre', ox: [1, 2], tr: ['cuproso', 'cúprico'], ptr: 0, w: 3, nums: '+1 y +2' },
    { s: 'Cr', n: 'cromo', ox: [2, 3], tr: ['cromoso', 'crómico'], ptr: 0, w: 0.8, nums: '+2 y +3 cuando forma cationes, y +6 en cromatos y dicromatos',
      deCat: 'de los dos números que usa el cromo como catión (+2 y +3; el +6 es el de cromatos y dicromatos)' },
    { s: 'Co', n: 'cobalto', ox: [2, 3], tr: ['cobaltoso', 'cobáltico'], ptr: 9, w: 0.5, nums: '+2 y +3' },
    { s: 'Mn', n: 'manganeso', ox: [2, 4], tr: ['manganoso', null], ptr: 9, w: 0.5, nums: '+2, +4 y +7' },
    { s: 'Pb', n: 'plomo', ox: [2, 4], tr: ['plumboso', 'plúmbico'], ptr: 1, w: 0.9, nums: '+2 y +4' },
    { s: 'Sn', n: 'estaño', ox: [2, 4], tr: ['estannoso', 'estánnico'], ptr: 1, w: 0.7, nums: '+2 y +4' },
    { s: 'Ni', n: 'níquel', ox: [2, 3], tr: ['niqueloso', 'niquélico'], ptr: 9, nv: 1, w: 1, nums: '+2 y +3' },
    { s: 'Au', n: 'oro', ox: [1, 3], tr: ['auroso', 'áurico'], ptr: 1, nv: 1, w: 1, nums: '+1 y +3' },
  ];
  const AMONIO = { s: 'NH4', n: 'amonio', ox: [1], tr: ['amónico'], w: 1.5, poli: [{ s: 'N', n: 1 }, { s: 'H', n: 4 }] };

  // un catión concreto: el metal con uno de sus números
  function cationes(filtro) {
    const out = [];
    METALES.concat([AMONIO]).forEach((m) => m.ox.forEach((q, i) => {
      const c = { m: m, q: q, multi: m.ox.length > 1, adj: m.tr[i] || null, nv: m.nv || 0, w: m.w * (m.s === 'Cr' && q === 2 ? 0.35 : 1) };
      c.st = 'de ' + m.n + (c.multi ? ' (' + ROM[q] + ')' : '');
      c.ptr = c.multi && c.adj ? m.ptr : 9;
      c.orden = c.multi ? (i === 0 ? 'menor' : 'mayor') : null;
      if (!filtro || filtro(c)) out.push(c);
    }));
    return out;
  }
  const sinMn4 = (c) => !(c.m.s === 'Mn' && c.q === 4);
  const deUnNumero = (c) => !c.multi;

  // ---------------------------------------------------------- aniones sin oxígeno
  const URO = [
    { s: 'F', q: 1, uro: 'fluoruro', hid: 'fluorhídrico', w: 1 },
    { s: 'Cl', q: 1, uro: 'cloruro', hid: 'clorhídrico', w: 3 },
    { s: 'Br', q: 1, uro: 'bromuro', hid: 'bromhídrico', w: 1.5 },
    { s: 'I', q: 1, uro: 'ioduro', hid: 'iodhídrico', w: 1.2 },
    { s: 'S', q: 2, uro: 'sulfuro', hid: 'sulfhídrico', w: 2 },
  ];

  // ---------------------------------------------------------- no metales con oxígeno
  // ad: adjetivos del óxido y del ácido, en el orden de ox · romOpc: el romano se puede omitir
  const NOMETALES = [
    { s: 'Cl', n: 'cloro', ox: [1, 3, 5, 7], ad: ['hipocloroso', 'cloroso', 'clórico', 'perclórico'], w: 2, nums: '+1, +3, +5 y +7' },
    { s: 'Br', n: 'bromo', ox: [1, 3, 5, 7], ad: ['hipobromoso', 'bromoso', 'brómico', 'perbrómico'], w: 0.8, nums: '+1, +3, +5 y +7' },
    { s: 'I', n: 'iodo', ox: [1, 3, 5, 7], ad: ['hipoiodoso', 'iodoso', 'iódico', 'periódico'], w: 0.7, nums: '+1, +3, +5 y +7' },
    { s: 'S', n: 'azufre', ox: [4, 6], ad: ['sulfuroso', 'sulfúrico'], w: 2.5, nums: '+4 y +6' },
    { s: 'N', n: 'nitrógeno', ox: [3, 5], ad: ['nitroso', 'nítrico'], w: 2.5, nums: '+3 y +5', ambiguo: true },
    { s: 'P', n: 'fósforo', ox: [3, 5], ad: ['fosforoso', 'fosfórico'], w: 1.2, nums: '+3 y +5', nvOx: [1, 0] },
    { s: 'C', n: 'carbono', ox: [4], ad: ['carbónico'], w: 2, nums: '+4 (y +2 en el CO)', conRom: true },
    { s: 'Si', n: 'silicio', ox: [4], ad: ['silícico'], w: 0.7, nums: '+4', conRom: true, romOpc: true },
  ];

  // ---------------------------------------------------------- oxoaniones y sus ácidos
  // x: átomo central · nx, no: cuántos átomos · q: carga · nh: hidrógenos del ácido (los que perdió)
  // an: nombre del anión · ac: adjetivo del ácido · iu: nombre con el romano, como en la teórica
  // raro: sólo con cationes de un número · sinAcido: no se pide el ácido · agua: moléculas de agua por óxido
  const OXO = [];
  (function () {
    const halo = [['Cl', 'clor', 'clór'], ['Br', 'brom', 'bróm'], ['I', 'iod', 'iód']];
    halo.forEach((h, k) => {
      const [s, r, ra] = h;
      [['hipo' + r + 'ito', 'hipo' + r + 'oso', 1, 1], [r + 'ito', r + 'oso', 2, 3], [r + 'ato', ra + 'ico', 3, 5],
        ['per' + r + 'ato', 'per' + ra + 'ico', 4, 7]].forEach((d) => {
        OXO.push({ id: s + 'O' + d[2], x: s, nx: 1, no: d[2], q: 1, an: d[0], ac: d[1], ox: d[3], iu: r + 'ato(' + ROM[d[3]] + ')',
          raro: k > 0, w: k === 0 ? 2 : 0.45 });
      });
    });
    OXO.push({ id: 'NO2', x: 'N', nx: 1, no: 2, q: 1, an: 'nitrito', ac: 'nitroso', ox: 3, iu: 'nitrato(III)', w: 2 });
    OXO.push({ id: 'NO3', x: 'N', nx: 1, no: 3, q: 1, an: 'nitrato', ac: 'nítrico', ox: 5, iu: 'nitrato(V)', w: 3 });
    OXO.push({ id: 'SO3', x: 'S', nx: 1, no: 3, q: 2, an: 'sulfito', ac: 'sulfuroso', ox: 4, iu: 'sulfato(IV)', w: 2 });
    OXO.push({ id: 'SO4', x: 'S', nx: 1, no: 4, q: 2, an: 'sulfato', ac: 'sulfúrico', ox: 6, iu: 'sulfato(VI)', w: 3 });
    OXO.push({ id: 'CO3', x: 'C', nx: 1, no: 3, q: 2, an: 'carbonato', ac: 'carbónico', ox: 4, iu: 'carbonato(IV)', w: 3 });
    OXO.push({ id: 'PO4', x: 'P', nx: 1, no: 4, q: 3, an: 'fosfato', anAlt: ['ortofosfato'], ac: 'fosfórico', acAlt: ['ortofosfórico'],
      ox: 5, iu: 'fosfato(V)', w: 2.5, agua: 3 });
    OXO.push({ id: 'SiO3', x: 'Si', nx: 1, no: 3, q: 2, an: 'silicato', anAlt: ['metasilicato'], ac: 'silícico', acAlt: ['metasilícico'],
      ox: 4, iu: 'silicato(IV)', raro: true, w: 0.7 });
    OXO.push({ id: 'CrO4', x: 'Cr', nx: 1, no: 4, q: 2, an: 'cromato', ac: 'crómico', ox: 6, raro: true, sinAcido: true, w: 0.8 });
    OXO.push({ id: 'Cr2O7', x: 'Cr', nx: 2, no: 7, q: 2, an: 'dicromato', anAlt: ['bicromato'], ac: 'dicrómico', ox: 6, raro: true, sinAcido: true, w: 1 });
    OXO.push({ id: 'MnO4', x: 'Mn', nx: 1, no: 4, q: 1, an: 'permanganato', ac: 'permangánico', ox: 7, raro: true, sinAcido: true, w: 1 });
    // sólo en Química General
    OXO.push({ id: 'PO3m', x: 'P', nx: 1, no: 3, q: 1, an: 'metafosfato', ac: 'metafosfórico', ox: 5, raro: true, nv: 1, w: 0.6, agua: 1 });
    OXO.push({ id: 'P2O7', x: 'P', nx: 2, no: 7, q: 4, an: 'pirofosfato', ac: 'pirofosfórico', ox: 5, raro: true, nv: 1, w: 0.6, agua: 2 });
    OXO.push({ id: 'PO3f', x: 'P', nx: 1, no: 3, q: 3, an: 'fosfito', ac: 'fosforoso', ox: 3, raro: true, nv: 1, w: 0.6, agua: 3 });
    OXO.push({ id: 'SiO4', x: 'Si', nx: 1, no: 4, q: 4, an: 'ortosilicato', ac: 'ortosilícico', ox: 4, raro: true, nv: 1, w: 0.5, agua: 2 });
  })();
  const oxo = (id) => OXO.filter((a) => a.id === id)[0];

  // aniones que conservan hidrógeno (sales ácidas). de: el anión del que salen · h: los H que le quedan
  const ACIDOS = [
    { id: 'HCO3', de: 'CO3', h: 1, q: 1, bi: 'bicarbonato', w: 3 },
    { id: 'HSO4', de: 'SO4', h: 1, q: 1, bi: 'bisulfato', w: 2 },
    { id: 'HSO3', de: 'SO3', h: 1, q: 1, bi: 'bisulfito', w: 1.5 },
    { id: 'HS', de: null, h: 1, q: 1, bi: 'bisulfuro', w: 1 },
    { id: 'HPO4', de: 'PO4', h: 1, q: 2, bi: null, w: 1.5 },
    { id: 'H2PO4', de: 'PO4', h: 2, q: 1, bi: null, w: 1.5 },
    { id: 'HP2O7', de: 'P2O7', h: 1, q: 3, bi: null, w: 0.4, nv: 1 },
  ];

  // ---------------------------------------------------------- fórmulas
  // Una fórmula es una lista de partes: {s, n} (un símbolo) o {g: [...], n} (un grupo entre paréntesis).
  const el = (s, n) => ({ s: s, n: n });
  const gr = (g, n) => ({ g: g, n: n });
  const partesCat = (c, n) => (c.m.poli ? [gr(c.m.poli, n)] : [el(c.m.s, n)]);
  const partesOxo = (a) => [el(a.x, a.nx), el('O', a.no)];

  function plana(f) {                       // sin grupos de subíndice 1
    const out = [];
    f.forEach((p) => { if (p.g && p.n === 1) p.g.forEach((x) => out.push(x)); else out.push(p); });
    return out;
  }
  const txtParte = (p) => (p.g ? '(' + p.g.map(txtParte).join('') + ')' + (p.n > 1 ? p.n : '') : p.s + (p.n > 1 ? p.n : ''));
  const clave = (f) => plana(f).map(txtParte).join('');
  const htmlParte = (p) => (p.g ? '(' + p.g.map(htmlParte).join('') + ')' + (p.n > 1 ? '<sub>' + p.n + '</sub>' : '')
    : p.s + (p.n > 1 ? '<sub>' + p.n + '</sub>' : ''));
  const fHTML = (f, est) => plana(f).map(htmlParte).join('') + (est ? '(' + est + ')' : '');
  function atomos(f, mult, acc) {
    acc = acc || {};
    f.forEach((p) => {
      if (p.g) atomos(p.g, (mult || 1) * p.n, acc);
      else acc[p.s] = (acc[p.s] || 0) + (mult || 1) * p.n;
    });
    return acc;
  }
  const claveAtomos = (f) => { const a = atomos(f); return Object.keys(a).sort().map((s) => s + a[s]).join(' '); };
  // iones escritos para una explicación: Fe3+, SO4 2-
  const carga = (q, signo) => '<sup>' + (q > 1 ? q : '') + signo + '</sup>';
  const ionCat = (c) => (c.m.poli ? 'NH<sub>4</sub>' : c.m.s) + carga(c.q, '+');
  const ionDe = (partes, q) => partes.map(htmlParte).join('') + carga(q, '-');

  // ---------------------------------------------------------- el universo de compuestos
  const U = [];
  const FAMILIAS = {
    oxb: { g: 'ox', n: 'óxido básico', art: 'un' }, oxa: { g: 'ox', n: 'óxido ácido', art: 'un' },
    per: { g: 'ox', n: 'peróxido', art: 'un' }, hid: { g: 'hid', n: 'hidróxido', art: 'un' },
    hme: { g: 'hh', n: 'hidruro metálico', art: 'un' }, hnm: { g: 'hh', n: 'hidruro no metálico', art: 'un' },
    hac: { g: 'hh', n: 'hidrácido', art: 'un' }, oxo: { g: 'oxo', n: 'oxoácido', art: 'un' },
    sbi: { g: 'sbi', n: 'sal binaria', art: 'una' }, bnm: { g: 'sbi', n: 'compuesto binario de dos no metales', art: 'un' },
    oxs: { g: 'oxs', n: 'oxosal', art: 'una' }, sac: { g: 'sac', n: 'sal ácida', art: 'una' },
    ext: { g: null, n: 'compuesto', art: 'un' },
  };
  const GRUPOS = [
    { id: 'ox', n: 'Óxidos', sub: [['oxb', 45], ['oxa', 40], ['per', 15]] },
    { id: 'hid', n: 'Hidróxidos', sub: [['hid', 100]] },
    { id: 'hh', n: 'Hidruros e hidrácidos', sub: [['hme', 30], ['hnm', 35], ['hac', 35]] },
    { id: 'oxo', n: 'Oxoácidos', sub: [['oxo', 100]] },
    { id: 'sbi', n: 'Sales binarias', sub: [['sbi', 92], ['bnm', 8]] },
    { id: 'oxs', n: 'Oxosales', sub: [['oxs', 100]] },
    { id: 'sac', n: 'Sales ácidas', sub: [['sac', 100]] },
  ];

  function agregar(c) {
    c.nom = c.nom || {};
    ['st', 'tr', 'si', 'iu'].forEach((k) => { c.nom[k] = (c.nom[k] || []).filter(Boolean); });
    c.pide = Object.assign({ st: 9, tr: 9, si: 9 }, c.pide || {});
    c.nv = c.nv || 0;
    c.w = c.w === undefined ? 1 : c.w;
    c.clave = clave(c.f);
    c.id = c.fam + ':' + c.clave + (c.est ? '.' + c.est : '');
    U.push(c);
    return c;
  }

  const OXIDO = { 1: 'monóxido', 2: 'dióxido', 3: 'trióxido', 4: 'tetróxido', 5: 'pentóxido', 7: 'heptóxido' };
  const OXIDO_ALT = { 1: ['monoóxido'], 4: ['tetraóxido'], 5: ['pentaóxido'], 7: ['heptaóxido'] };
  const conPre = (n, palabra) => (n > 1 ? PRE[n] : '') + palabra;

  // óxidos de metales y de no metales
  function oxido(s, nombre, q) {
    const d = mcd(q, 2), nx = 2 / d, no = q / d;
    const de = ' de ' + conPre(nx, nombre);
    return { f: [el(s, nx), el('O', no)], si: [OXIDO[no] + de].concat((OXIDO_ALT[no] || []).map((x) => x + de)), nx: nx, no: no };
  }
  cationes((c) => !c.m.poli).forEach((c) => {
    const o = oxido(c.m.s, c.m.n, c.q);
    agregar({ fam: 'oxb', f: o.f, cat: c, q: c.q, nv: c.nv, w: c.w, nx: o.nx, no: o.no,
      nom: { st: ['óxido ' + c.st], tr: [c.adj && 'óxido ' + c.adj], si: o.si },
      pide: { st: 0, tr: c.ptr, si: 0 } });
  });
  NOMETALES.forEach((x) => x.ox.forEach((q, i) => {
    const o = oxido(x.s, x.n, q);
    const st = ['óxido de ' + x.n + ' (' + ROM[q] + ')'];
    if (x.romOpc) st.push('óxido de ' + x.n);
    agregar({ fam: 'oxa', f: o.f, nm: x, q: q, i: i, nx: o.nx, no: o.no, nv: x.nvOx ? x.nvOx[i] : 0, w: x.w,
      nom: { st: st, tr: ['óxido ' + x.ad[i], 'anhídrido ' + x.ad[i]], si: o.si },
      pide: { st: 0, tr: 0, si: 0 }, noMostrar: x.ambiguo ? { tr: 1 } : null });
  }));

  // peróxidos: el grupo O2 con carga 2-, que no se simplifica
  [['H', 'hidrógeno', 1, 2.5], ['Na', 'sodio', 1, 2], ['K', 'potasio', 1, 1], ['Ca', 'calcio', 2, 1], ['Ba', 'bario', 2, 1.5]].forEach((d) => {
    agregar({ fam: 'per', f: [el(d[0], d[2] === 1 ? 2 : 1), el('O', 2)], per: { s: d[0], n: d[1], q: d[2] }, w: d[3],
      nom: { st: ['peróxido de ' + d[1]].concat(d[0] === 'H' ? ['agua oxigenada'] : []), si: ['dióxido de ' + (d[2] === 1 ? 'di' : '') + d[1]] }, pide: { st: 0 } });
  });

  // hidróxidos
  cationes((c) => sinMn4(c) && !c.m.poli).forEach((c) => {
    // con un metal de varios números, "hidróxido de cobre" sería el Stock sin romano: ahí el mono- se escribe
    const si = c.q === 1 && c.multi ? ['monohidróxido de ' + c.m.n]
      : [conPre(c.q, 'hidróxido') + ' de ' + c.m.n].concat(c.q === 1 ? ['monohidróxido de ' + c.m.n] : []);
    const st = 'hidróxido ' + c.st;
    agregar({ fam: 'hid', f: [el(c.m.s, 1), gr([el('O', 1), el('H', 1)], c.q)], cat: c, q: c.q, nv: c.nv, w: c.w,
      nom: { st: [st], tr: [c.adj && 'hidróxido ' + c.adj], si: si },
      pide: { st: 0, tr: c.ptr, si: si[0] === st ? 9 : 1 } });
  });

  // hidruros metálicos (H con -1)
  cationes((c) => ['Li', 'Na', 'K', 'Mg', 'Ca', 'Ba', 'Al', 'Fe'].indexOf(c.m.s) >= 0).forEach((c) => {
    const si = [conPre(c.q, 'hidruro') + ' de ' + c.m.n].concat(c.q === 1 ? ['monohidruro de ' + c.m.n] : []);
    const st = 'hidruro ' + c.st;
    agregar({ fam: 'hme', f: [el(c.m.s, 1), el('H', c.q)], cat: c, q: c.q, nv: c.nv, w: c.w,
      nom: { st: [st], tr: [c.adj && 'hidruro ' + c.adj], si: si },
      pide: { st: 0, tr: c.ptr, si: si[0] === st ? 9 : 1 } });
  });

  // hidruros no metálicos (el gas) e hidrácidos (el mismo compuesto, disuelto)
  URO.forEach((a) => {
    const f = [el('H', a.q), el(a.s, 1)];
    agregar({ fam: 'hnm', f: f, est: 'g', an: a, w: a.w,
      nom: { st: [a.uro + ' de hidrógeno'], si: a.q > 1 ? [a.uro + ' de dihidrógeno'] : [] }, pide: { st: 0 } });
    agregar({ fam: 'hac', f: f, est: 'ac', an: a, w: a.w, nom: { tr: ['ácido ' + a.hid] }, pide: { tr: 0 } });
  });
  agregar({ fam: 'hnm', f: [el('N', 1), el('H', 3)], est: 'g', amoniaco: true, w: 2.5,
    nom: { tr: ['amoníaco'], si: ['trihidruro de nitrógeno'] }, pide: { tr: 0, si: 1 } });

  // sales binarias
  cationes(sinMn4).forEach((c) => URO.forEach((a) => {
    const d = mcd(c.q, a.q), nc = a.q / d, na = c.q / d;
    const st = a.uro + ' ' + c.st;
    const cola = ' de ' + conPre(nc, c.m.n);
    // "sulfuro de hierro" sería el Stock sin romano: con un metal de varios números y uno de cada uno, el mono- se escribe
    const ambiguo = c.multi && nc === 1 && na === 1;
    const si = c.m.poli ? [] : ambiguo ? ['mono' + a.uro + cola] : [conPre(na, a.uro) + cola].concat(na === 1 ? ['mono' + a.uro + cola] : []);
    // pesos del sorteo: los ioduros y fluoruros de metales de varios números salen poco, y los ioduros que no existen, nunca
    const noExiste = a.s === 'I' && ['Fe3', 'Cu2', 'Pb4', 'Co3', 'Ni3', 'Au3'].indexOf(c.m.s + c.q) >= 0;
    const raro = noExiste ? 0 : c.q >= 3 && ['Co', 'Ni', 'Pb'].indexOf(c.m.s) >= 0 ? 0.3 : c.multi && (a.s === 'I' || a.s === 'F') ? 0.4 : 1;
    agregar({ fam: 'sbi', f: partesCat(c, nc).concat([el(a.s, na)]), cat: c, an: a, nc: nc, na: na, nv: c.nv, w: raro * c.w * a.w / 2,
      nom: { st: [st], tr: [c.adj && a.uro + ' ' + c.adj], si: si },
      pide: { st: 0, tr: c.ptr, si: si.length && si[0] !== st ? 1 : 9 } });
  }));

  // binarios de dos no metales (Química General)
  [[[el('C', 1), el('S', 2)], 'disulfuro de carbono', 'sulfuro de carbono (IV)', 'C', 'S', 4, 2],
    [[el('C', 1), el('Cl', 4)], 'tetracloruro de carbono', 'cloruro de carbono (IV)', 'C', 'Cl', 4, 1],
    [[el('P', 1), el('Cl', 3)], 'tricloruro de fósforo', 'cloruro de fósforo (III)', 'P', 'Cl', 3, 1],
    [[el('P', 1), el('Cl', 5)], 'pentacloruro de fósforo', 'cloruro de fósforo (V)', 'P', 'Cl', 5, 1],
    [[el('S', 1), el('F', 6)], 'hexafluoruro de azufre', 'fluoruro de azufre (VI)', 'S', 'F', 6, 1]].forEach((d) => {
    agregar({ fam: 'bnm', f: d[0], nv: 1, w: 1, bn: { a: d[3], b: d[4], qa: d[5], qb: d[6] },
      nom: { si: [d[1]], st: [d[2]] }, pide: { si: 1, st: 1 } });
  });

  // oxoácidos
  OXO.filter((a) => !a.sinAcido).forEach((a) => {
    agregar({ fam: 'oxo', f: [el('H', a.q), el(a.x, a.nx), el('O', a.no)], oxo: a, nv: a.nv || 0, w: a.w,
      nom: { tr: ['ácido ' + a.ac].concat((a.acAlt || []).map((x) => 'ácido ' + x)), iu: [a.iu && a.iu + ' de hidrógeno'] },
      pide: { tr: 0 } });
  });

  // oxosales
  OXO.forEach((a) => {
    cationes((c) => sinMn4(c) && (!a.raro || deUnNumero(c)) && !(a.nv && (c.m.poli || c.m.s === 'Ag'))).forEach((c) => {
      const d = mcd(c.q, a.q), nc = a.q / d, na = c.q / d;
      const anes = [a.an].concat(a.anAlt || []);
      // las combinaciones que casi no se ven (clorito cuproso, carbonato férrico) salen poco
      const raro = (c.multi && /^(ClO1|ClO2|ClO4|SO3|NO2)$/.test(a.id)) || (c.q >= 3 && a.id === 'CO3' && c.m.s !== 'Al') || (c.q === 4 && a.id === 'PO4') || (c.m.s === 'Ag' && ['NO3', 'SO4', 'CO3', 'PO4', 'CrO4'].indexOf(a.id) < 0) ? 0.3 : 1;
      agregar({ fam: 'oxs', f: partesCat(c, nc).concat([gr(partesOxo(a), na)]), cat: c, oxo: a, nc: nc, na: na,
        nv: Math.max(c.nv, a.nv || 0), w: raro * c.w * a.w / 3,
        nom: { st: anes.map((n) => n + ' ' + c.st), tr: c.adj ? anes.map((n) => n + ' ' + c.adj) : [], iu: [a.iu && a.iu + ' ' + c.st] },
        pide: { st: 0, tr: c.ptr } });
    });
  });

  // sales ácidas
  const hidrogeno = (h) => (h === 2 ? 'dihidrogeno' : 'hidrogeno');
  ACIDOS.forEach((a) => {
    const base = a.de ? oxo(a.de) : null;
    const neutro = base ? base.an : 'sulfuro';
    const formas = [hidrogeno(a.h) + neutro, neutro + (a.h === 2 ? ' diácido' : ' ácido')];
    if (a.bi) formas.push(a.bi);
    if (a.id === 'HPO4') formas.push('fosfato monoácido', 'monohidrogenofosfato');
    const iu = base && base.iu ? hidrogeno(a.h) + base.iu : null;
    const atomosAn = [el('H', a.h)].concat(base ? partesOxo(base) : [el('S', 1)]);
    const sirve = (c) => (a.nv ? ['Na', 'K'].indexOf(c.m.s) >= 0
      : ['Li', 'Na', 'K', 'Mg', 'Ca', 'Ba', 'NH4', 'Al'].indexOf(c.m.s) >= 0 || (c.m.s === 'Fe') || (c.m.s === 'Cu' && c.q === 2));
    cationes(sirve).forEach((c) => {
      const d = mcd(c.q, a.q), nc = a.q / d, na = c.q / d;
      // "carbonato ácido de sodio": el catión va después de la palabra ácido
      const con = (cola) => formas.map((x) => x + ' ' + cola);
      agregar({ fam: 'sac', f: partesCat(c, nc).concat([gr(atomosAn, na)]), cat: c, acido: a, oxo: base, nc: nc, na: na,
        nv: Math.max(c.nv, a.nv || 0), w: (c.multi ? 0.5 : 1) * c.w * a.w / 3,
        nom: { st: con(c.st), tr: c.adj ? con(c.adj) : [], iu: [iu && iu + ' ' + c.st] },
        pide: { st: 0, tr: c.ptr } });
    });
  });

  // compuestos que no se sortean pero conviene reconocer cuando alguien los escribe
  [[[el('H', 2), el('O', 1)], ['agua']], [[el('C', 1), el('O', 1)], ['monóxido de carbono', 'óxido de carbono (II)']],
    [[el('N', 1), el('O', 1)], ['monóxido de nitrógeno', 'óxido de nitrógeno (II)']],
    [[el('N', 1), el('O', 2)], ['dióxido de nitrógeno', 'óxido de nitrógeno (IV)']],
    [[el('N', 2), el('O', 1)], ['monóxido de dinitrógeno', 'óxido de nitrógeno (I)']],
    [[el('C', 1), el('H', 4)], ['metano']]].forEach((d) => {
    agregar({ fam: 'ext', f: d[0], w: 0, nom: { st: d[1] } });
  });

  // el nombre con el que se menciona un compuesto en una explicación, y su rótulo principal
  U.forEach((c) => {
    c.comun = c.nom.st.length && c.fam !== 'bnm' ? 'st' : c.nom.tr.length ? 'tr' : c.nom.si.length ? 'si' : 'st';
    c.nombre = c.nom[c.comun][0];
  });

  // ---------------------------------------------------------- cómo se lee un nombre escrito
  const ARAB = { 1: 'i', 2: 'ii', 3: 'iii', 4: 'iv', 5: 'v', 6: 'vi', 7: 'vii' };
  function normNombre(texto) {
    const marcas = {};
    let s = String(texto || '').slice(0, 200).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    s = s.replace(/[‐-―−]/g, '-').replace(/["“”«».,;:!?¿¡]/g, ' ');
    s = s.replace(/\[/g, '(').replace(/\]/g, ')').trim();
    const est = /\(\s*(g|ac|aq|l|s)\s*\)$/.exec(s);
    if (est) { marcas.estado = est[1] === 'aq' ? 'ac' : est[1]; s = s.slice(0, est.index); }
    s = s.replace(/^(?:el|la|los|las|un|una)\s+/, '');
    // el número de oxidación entre paréntesis: romano, o un número común que se pasa a romano y se avisa
    s = s.replace(/\s*\(\s*\+?\s*([1-7])\s*\+?\s*\)/g, (t, n) => { marcas.arabigo = true; return '(' + ARAB[n] + ')'; });
    s = s.replace(/\s*\(\s*([ivx]+)\s*\)/g, '($1)');
    // un paréntesis que no cierra, y un romano o un número sueltos después de una palabra
    s = s.replace(/\s*\(\s*(iii|ii|iv|vii|vi|v|i)(?=\s|$)/g, (t, r) => { marcas.sinParentesis = true; return '(' + r + ')'; });
    s = s.replace(/([a-z])\s+(iii|ii|iv|vii|vi|v|i)(?=\s|$)/g, (t, a, r) => { marcas.sinParentesis = true; return a + '(' + r + ')'; });
    s = s.replace(/([a-z])\s+\+?([1-7])\+?(?=\s|$)/g, (t, a, n) => { marcas.arabigo = true; return a + '(' + ARAB[n] + ')'; });
    s = s.replace(/-/g, '').replace(/\s+/g, ' ').trim();
    s = s.replace(/yod/g, 'iod').replace(/\bzinc\b/g, 'cinc').replace(/\b((?:di|mono)?hidrogeno) (?=[a-z])(?!de\b)/g, '$1');
    return { k: s, marcas: marcas };
  }

  // índice de todos los nombres aceptados: nombre normalizado -> [{c, lab, i}]
  const INDICE = new Map();
  const POR_FORMULA = new Map();
  U.forEach((c) => {
    ['st', 'tr', 'si', 'iu'].forEach((lab) => c.nom[lab].forEach((n, i) => {
      const k = normNombre(n).k;
      if (!INDICE.has(k)) INDICE.set(k, []);
      INDICE.get(k).push({ c: c, lab: lab, i: i });
    }));
    if (!POR_FORMULA.has(c.clave)) POR_FORMULA.set(c.clave, []);
    POR_FORMULA.get(c.clave).push(c);
  });

  // distancia de edición con trasposiciones, cortada en `tope`
  function distancia(a, b2, tope) {
    if (Math.abs(a.length - b2.length) > tope) return tope + 1;
    let ant2 = null, ant = [];
    for (let j = 0; j <= b2.length; j++) ant.push(j);
    for (let i = 1; i <= a.length; i++) {
      const fila = [i];
      let min = i;
      for (let j = 1; j <= b2.length; j++) {
        const costo = a[i - 1] === b2[j - 1] ? 0 : 1;
        let v = Math.min(ant[j] + 1, fila[j - 1] + 1, ant[j - 1] + costo);
        if (ant2 && i > 1 && j > 1 && a[i - 1] === b2[j - 2] && a[i - 2] === b2[j - 1]) v = Math.min(v, ant2[j - 2] + 1);
        fila.push(v);
        if (v < min) min = v;
      }
      if (min > tope) return tope + 1;
      ant2 = ant; ant = fila;
    }
    return ant[b2.length];
  }

  // ¿`a` puede ser `b2` mal tipeado? Devuelve la distancia (1 o 2), o 9 si no. El error tiene que estar en una sola
  // palabra y ser chico para su largo. No es tipeo si falta o sobra un prefijo entero (di-, hipo-, per-), si sólo
  // cambia la terminación (-ito por -ato, -oso por -ico) ni si sólo cambia el romano: eso es otro compuesto.
  const TERMINACION = /(ato|ito|oso|ico|uro)$/;
  const PREFIJO = /^(?:bi|di|tri|mono|hipo|per|meta|piro|orto)/;
  const ROMS = /\((?:i|ii|iii|iv|v|vi|vii)\)/g;
  function tipeo(a, b2) {
    const pa = a.split(' '), pb = b2.split(' ');
    if (pa.length !== pb.length) return a.replace(/ /g, '') === b2.replace(/ /g, '') ? 1 : 9;
    let total = 0;
    for (let i = 0; i < pa.length; i++) {
      if (pa[i] === pb[i]) continue;
      if (total) return 9;
      const x = pa[i], y = pb[i], corta = x.length < y.length ? x : y, larga = corta === x ? y : x;
      if (larga !== corta && larga.slice(larga.length - corta.length) === corta) return 9;
      if (x.replace(ROMS, '') === y.replace(ROMS, '')) return 9;
      if (x.replace(PREFIJO, '') === y.replace(PREFIJO, '')) return 9;         // dicarbonato por bicarbonato
      const tx = TERMINACION.exec(x.replace(ROMS, '')), ty = TERMINACION.exec(y.replace(ROMS, ''));
      if (tx && ty && tx[1] !== ty[1] && x.slice(0, tx.index) === y.slice(0, ty.index)) return 9;
      const d = distancia(x, y, 2);
      if (d > (Math.min(x.length, y.length) >= 9 ? 2 : 1)) return 9;
      total = d;
    }
    return total || 9;
  }

  // ---------------------------------------------------------- cómo se lee una fórmula escrita
  const SUB = '₀₁₂₃₄₅₆₇₈₉';
  function limpiarFormula(texto) {
    let s = String(texto || '').trim().slice(0, 200);
    s = s.replace(/[₀-₉]/g, (d) => String(SUB.indexOf(d))).replace(/<\/?sub>/gi, '');
    s = s.replace(/_\{(\d+)\}/g, '$1').replace(/[\s_·.]/g, '').replace(/[[{]/g, '(').replace(/[\]}]/g, ')');
    let est = null;
    const m = /\((g|ac|aq|l|s)\)$/i.exec(s);
    if (m && m.index > 0) { est = m[1].toLowerCase() === 'aq' ? 'ac' : m[1].toLowerCase(); s = s.slice(0, m.index); }
    return { s: s, est: est };
  }

  // Devuelve todas las lecturas posibles de un tramo de letras como símbolos.
  function lecturas(letras, estricto) {
    const out = [];
    const ir = (i, acc) => {
      if (out.length > 40) return;
      if (i === letras.length) { out.push(acc); return; }
      for (let largo = 2; largo >= 1; largo--) {
        if (i + largo > letras.length) continue;
        const tramo = letras.substr(i, largo);
        let sim;
        if (estricto) {
          if (!/^[A-Z][a-z]?$/.test(tramo)) continue;
          sim = tramo;
        } else {
          sim = tramo.charAt(0).toUpperCase() + tramo.slice(1).toLowerCase();
          if (PROPIOS.indexOf(sim) < 0) continue;
        }
        ir(i + largo, acc.concat([sim]));
      }
    };
    ir(0, []);
    return out;
  }

  // texto -> {lecturas: [fórmula], error}. Cada lectura es una lista de partes como las del universo.
  function leerFormula(s) {
    if (!s) return { error: 'vacio' };
    const ajeno = Array.from(s).filter((ch) => /[^A-Za-z0-9()]/.test(ch))[0];
    if (ajeno) return { error: 'caracter', dato: ajeno };
    if (/^[0-9]/.test(s)) return { error: 'numero_inicial' };
    const mezcla = /[a-z]/.test(s) && /[A-Z]/.test(s);
    const fichas = s.match(/[A-Za-z]+|[0-9]+|[()]/g);
    const armar = (estricto) => {
      // cada tramo de letras tiene varias lecturas: se combinan todas
      let combos = [[]];
      for (let i = 0; i < fichas.length; i++) {
        const t = fichas[i];
        if (/^[A-Za-z]/.test(t)) {
          const ls = lecturas(t, estricto);
          if (!ls.length) return { error: 'simbolo', dato: t };
          const nuevo = [];
          combos.forEach((c) => ls.forEach((l) => { if (nuevo.length < 60) nuevo.push(c.concat(l.map((x) => ({ sim: x })))); }));
          combos = nuevo;
        } else combos = combos.map((c) => c.concat([t]));
      }
      const fs = [];
      for (let k = 0; k < combos.length; k++) {
        const r = arbol(combos[k]);
        if (r.error) return r;
        fs.push(r.f);
      }
      return { lecturas: fs };
    };
    if (mezcla) {
      const r = armar(true);
      const flojo = armar(false);
      const conocidos = !r.error && r.lecturas.every((f) => Object.keys(atomos(f)).every((x) => ELEM[x]));
      if (conocidos) return { lecturas: r.lecturas, otras: flojo.error ? [] : flojo.lecturas };
      if (!flojo.error) return { lecturas: flojo.lecturas, mayusculas: true };
      return r;
    }
    // todo en minúsculas o todo en mayúsculas: primero la lectura literal, después las demás
    const lit = /[A-Z]/.test(s) ? armar(true) : { error: 'simbolo' };
    const flojo = armar(false);
    if (flojo.error && lit.error) return flojo.error === 'simbolo' && lit.dato ? lit : flojo;
    const fs = (lit.error ? [] : lit.lecturas).slice();
    const vistas = {};
    fs.forEach((f) => { vistas[clave(f)] = 1; });
    (flojo.error ? [] : flojo.lecturas).forEach((f) => { if (!vistas[clave(f)]) { vistas[clave(f)] = 1; fs.push(f); } });
    return { lecturas: fs, literal: lit.error ? null : clave(lit.lecturas[0]), sinCaja: true };
  }

  // fichas ({sim} | número | paréntesis) -> partes
  function arbol(fichas) {
    const f = [];
    let grupo = null;
    for (let i = 0; i < fichas.length; i++) {
      const t = fichas[i];
      const destino = grupo || f;
      if (t === '(') {
        if (grupo) return { error: 'anidado' };
        grupo = [];
      } else if (t === ')') {
        if (!grupo) return { error: 'parentesis' };
        if (!grupo.length) return { error: 'grupo_vacio' };
        f.push(gr(grupo, 1));
        grupo = null;
      } else if (typeof t === 'string') {
        const n = parseInt(t, 10);
        const ultimo = destino[destino.length - 1];
        const previo = fichas[i - 1];
        if (n === 0 || t.length > 2) return { error: 'numero' };
        if (previo === '(' || !ultimo && !(previo === ')')) return { error: 'numero_suelto' };
        if (previo === ')') f[f.length - 1].n = n;
        else if (typeof previo === 'string') return { error: 'numero_suelto' };
        else ultimo.n = n;
      } else destino.push(el(t.sim, 1));
    }
    if (grupo) return { error: 'parentesis' };
    if (!f.length) return { error: 'vacio' };
    return { f: f };
  }

  // ---------------------------------------------------------- sorteo de ejercicios
  const ROTULO = { st: 'de Stock', tr: 'tradicional', si: 'sistemática' };
  const pideEn = (c, lab, cfg) => cfg.nomen[lab] && c.nom[lab].length > 0 && c.pide[lab] <= cfg.nivel;
  // las nomenclaturas que se le pueden pedir a un compuesto en este nivel, y si todas le dan el mismo nombre
  const posibles = (c, cfg) => ['st', 'tr', 'si'].filter((l) => c.nom[l].length > 0 && c.pide[l] <= cfg.nivel);
  function unNombre(c, cfg) {
    const d = {};
    posibles(c, cfg).forEach((l) => { d[normNombre(c.nom[l][0]).k] = 1; });
    return Object.keys(d).length <= 1;
  }

  function elegir(items, peso, azar) {
    let total = 0;
    items.forEach((x) => { total += peso(x); });
    let r = azar() * total;
    for (let i = 0; i < items.length; i++) { r -= peso(items[i]); if (r <= 0) return items[i]; }
    return items[items.length - 1];
  }

  // cfg: {dir: 'fn' | 'nf' | 'mix', grupos: [ids], nomen: {st, tr, si}, nivel: 0 | 1}
  function generar(cfg, azar, recientes) {
    azar = azar || Math.random;
    recientes = recientes || [];
    // Si no están elegidas las tres nomenclaturas, entran los compuestos que tienen nombre en alguna de las elegidas
    // y los que se llaman igual en todas (cloruro de sodio, ácido sulfúrico).
    const todas = cfg.nomen.st && cfg.nomen.tr && cfg.nomen.si;
    const sirve = (c) => todas || unNombre(c, cfg) || posibles(c, cfg).some((l) => cfg.nomen[l]);
    const base = (fam, filtro) => U.filter((c) => c.fam === fam && c.nv <= cfg.nivel && c.w > 0 && (!filtro || sirve(c)));
    let grupos = GRUPOS.filter((g) => cfg.grupos.indexOf(g.id) >= 0);
    const conNombre = grupos.filter((g) => g.sub.some((x) => base(x[0], true).length));
    const filtrar = conNombre.length > 0;
    if (filtrar) grupos = conNombre;
    const g = grupos[Math.floor(azar() * grupos.length)] || GRUPOS[0];
    const disponibles = (fam) => base(fam, filtrar);
    const subs = g.sub.filter((x) => disponibles(x[0]).length);
    const fam = elegir(subs, (x) => x[1], azar)[0];
    let pozo = disponibles(fam);
    const frescos = pozo.filter((c) => recientes.indexOf(c.id) < 0);
    if (frescos.length) pozo = frescos;
    const c = elegir(pozo, (x) => x.w, azar);
    const dir = cfg.dir === 'mix' ? (azar() < 0.5 ? 'fn' : 'nf') : cfg.dir;
    return dir === 'fn' ? ejercicioFN(c, cfg, azar) : ejercicioNF(c, cfg, azar);
  }

  // de la fórmula al nombre: se pide una nomenclatura sólo si el compuesto tiene nombres distintos en más de una
  function ejercicioFN(c, cfg, azar) {
    const labs = posibles(c, cfg).filter((l) => cfg.nomen[l]);
    let lab = null;
    if (!unNombre(c, cfg) && labs.length && !c.amoniaco) lab = elegir(labs, (l) => ({ st: 3, tr: 2, si: 1.2 }[l]), azar);
    return { dir: 'fn', c: c, lab: lab, guia: lab || (c.amoniaco ? 'tr' : labs[0] || posibles(c, cfg)[0]) || c.comun };
  }

  // del nombre a la fórmula: se muestra un nombre en alguna de las nomenclaturas elegidas
  function ejercicioNF(c, cfg, azar) {
    let labs = ['st', 'tr', 'si'].filter((l) => pideEn(c, l, cfg) && !(c.noMostrar && c.noMostrar[l]));
    if (!labs.length) labs = [c.comun];
    let lab = elegir(labs, (l) => ({ st: 3, tr: 2.4, si: 1.2 }[l]), azar);
    let i = 0;
    if (c.fam === 'sac' && (lab === 'st' || lab === 'tr')) {
      // hidrogeno-, "ácido de" o bi-: las tres aparecen en los enunciados
      const r = azar();
      const formas = c.acido.bi ? 3 : 2;
      i = r < 0.5 ? 0 : r < 0.75 || formas === 2 ? 1 : 2;
    } else if ((lab === 'st' || c.fam === 'oxo') && c.nom.iu.length && cfg.nomen.st && azar() < 0.12) {
      lab = 'iu';                                       // el estilo con el romano en el anión, de vez en cuando
    }
    return { dir: 'nf', c: c, lab: lab, guia: lab, i: i, mostrado: c.nom[lab][i] };
  }

  // ---------------------------------------------------------- la cuenta de los números de oxidación
  const veces = (n, q) => (n > 1 ? n : '') + '(' + sig(q) + ')';
  function chequeoIones(c) {                         // 2(+3) + 3(−2) = 0
    const qa = c.fam === 'oxb' || c.fam === 'oxa' ? 2 : c.fam === 'hid' || c.fam === 'hme' ? 1 : c.an ? c.an.q : c.acido ? c.acido.q : c.oxo.q;
    const nc = c.nx || c.nc || 1, na = c.no || c.na || c.q;
    return veces(nc, c.q || c.cat.q) + ' + ' + veces(na, -qa) + ' = 0';
  }

  // ---------------------------------------------------------- la resolución, paso a paso
  const fam = (c) => FAMILIAS[c.fam];
  const F = (c) => b(fHTML(c.f, c.est));
  const numsDe = (m) => (m.ox.length > 1 ? 'tiene más de un número de oxidación (' + m.nums + ')' : 'tiene un solo número de oxidación (' + sig(m.ox[0]) + ')');

  // de dónde sale la carga del catión cuando el dato es un nombre
  function cargaPorNombre(c, lab) {
    const cat = c.cat, m = cat.m;
    if (m.poli) return 'El amonio es el catión ' + ionCat(cat) + '.';
    if (!cat.multi) return 'El ' + m.n + ' ' + numsDe(m) + ': ' + ionCat(cat) + '.';
    if (lab === 'tr' && cat.adj) return '“' + may(cat.adj) + '” termina en ' + (cat.orden === 'menor' ? '-oso, el menor ' : '-ico, el mayor ') +
      (m.deCat || 'de los números del ' + m.n + ' (' + m.nums + ')') + ': ' + ionCat(cat) + '.';
    return 'El (' + ROM[cat.q] + ') es el número de oxidación del ' + m.n + ': ' + ionCat(cat) + '.';
  }
  // cómo se arma la fórmula a partir de dos iones
  function cruceTxt(qc, qa, crudo, final, numeros) {
    if (qc === qa) return (qc === 1 ? 'Un ' + sig(1) + ' y un ' + sig(-1) : 'Son iguales y de signo contrario (' + sig(qc) + ' y ' + sig(-qa) + ')') +
      ': alcanza con uno de cada uno → ' + final + '.';
    if (mcd(qc, qa) > 1) return 'Cruce: ' + crudo + ', y se simplifica dividiendo por ' + mcd(qc, qa) + ' → ' + final + '.';
    return 'Cruce: ' + (numeros ? 'el número de cada elemento' : 'la carga de cada ion') + ', sin el signo, pasa a ser el subíndice del otro → ' + final + '.';
  }
  const conSub = (txt, n, grupo) => (grupo && n > 1 ? '(' + txt + ')' : txt) + (n > 1 ? '<sub>' + n + '</sub>' : '');
  const crudoHTML = (c, an, qa, grupoAn) => conSub(c.m.poli ? 'NH<sub>4</sub>' : c.m.s, qa, c.m.poli) + conSub(an, c.q, grupoAn);
  // de dónde sale el número de oxidación cuando el dato es la fórmula
  function sumaTxt(n, x, resto, total, q) {
    return (n > 1 ? n : '') + x + ' + ' + resto + ' = ' + total + ' → ' + x + ' = ' + b(sig(q));
  }
  // prefijo y sufijo de un no metal. AFIJO: cómo se escribe; LUGAR: qué lugar ocupa ese número entre los suyos
  const AFIJO4 = ['hipo-…-oso', '-oso', '-ico', 'per-…-ico'];
  const LUGAR4 = ['el más bajo', 'el segundo', 'el tercero', 'el más alto'];
  // del número al nombre: "+6 es el mayor de los dos números del azufre (+4 y +6), y lleva -ico"
  function ponerSufijo(x, i) {
    const n = x.ox.length, q = sig(x.ox[i]);
    if (n === 1) return 'el ' + x.n + ' usa ' + q + ', y lleva -ico';
    if (n === 2) return q + ' es el ' + (i ? 'mayor' : 'menor') + ' de los dos números del ' + x.n + ' (' + x.nums + '), y lleva ' + (i ? '-ico' : '-oso');
    return q + ' es ' + LUGAR4[i] + ' de los cuatro números del ' + x.n + ' (' + x.nums + '), y lleva ' + AFIJO4[i];
  }
  // del nombre al número: "-ico es el mayor de los dos números del azufre (+4 y +6): +6"
  function leerSufijo(x, i) {
    const n = x.ox.length, q = b(sig(x.ox[i]));
    if (n === 1) return 'el ' + x.n + ' usa ' + q;
    if (n === 2) return (i ? '-ico' : '-oso') + ' es el ' + (i ? 'mayor' : 'menor') + ' de los dos números del ' + x.n + ' (' + x.nums + '): ' + q;
    return AFIJO4[i] + ' es ' + LUGAR4[i] + ' de los cuatro números del ' + x.n + ' (' + x.nums + '): ' + q;
  }
  const may = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  const noMetalDe = (a) => NOMETALES.filter((x) => x.s === a.x)[0];
  const indiceOx = (x, q) => x.ox.indexOf(q);

  // cómo se llega del óxido al ácido (el camino formal de la guía)
  function formacionAcido(a) {
    const x = noMetalDe(a);
    const acido = fHTML([el('H', a.q), el(a.x, a.nx), el('O', a.no)]);
    if (!x) return '';
    const o = oxido(a.x, x.n, a.ox), ox = fHTML(o.f), agua = a.agua || 1;
    if (o.nx === 2) {                                  // X2On: el número de oxidación es impar
      if (agua === 1) {
        const bruto = fHTML([el('H', 2), el(a.x, 2), el('O', o.no + 1)]);
        return ox + ' + H<sub>2</sub>O → ' + bruto + ', y como todo es par se divide por 2: ' + b(acido) + '.';
      }
      const moles = (2 * agua) / a.q;                  // moléculas de ácido que salen
      return ox + ' + ' + agua + ' H<sub>2</sub>O → ' + (moles > 1 ? moles + ' ' : '') + b(acido) + '.';
    }
    return ox + ' + ' + (agua > 1 ? agua + ' ' : '') + 'H<sub>2</sub>O → ' + b(acido) + '.';
  }
  function chequeoAcido(a, h) {                       // 2(+1) + (+6) + 4(−2) = 0, o = la carga si le faltan H
    const nh = h === undefined ? a.q : h;
    const partes = [];
    if (nh) partes.push(veces(nh, 1));
    partes.push(veces(a.nx, a.ox), veces(a.no, -2));
    return partes.join(' + ') + ' = ' + sig(nh - a.q).replace('+', '');
  }
  // de dónde viene un oxoanión
  function origenAnion(a) {
    const x = noMetalDe(a);
    const ion = ionDe(partesOxo(a), a.q);
    if (!x) return 'El ' + a.an + ' es el anión ' + b(ion) + ' (' + ELEM[a.x] + ' con ' + sig(a.ox) + ').';
    const suf = /ito$/.test(a.an) ? '-ito viene de -oso' : '-ato viene de -ico';
    return '“' + may(a.an) + '”: ' + suf + '. Es el ácido ' + a.ac + ', ' +
      fHTML([el('H', a.q), el(a.x, a.nx), el('O', a.no)]) + ' (' + x.n + ' con ' + sig(a.ox) + '), sin ' + (a.q > 1 ? 'sus' : 'su') + ' H<sup>+</sup>: ' + b(ion) + '.';
  }

  // todos los nombres que se le muestran al final: [[rótulo, [nombres]]]
  function todosLosNombres(c, nivel) {
    nivel = nivel === undefined ? 1 : nivel;
    const cuantos = c.fam === 'sac' ? (c.acido.bi ? 3 : 2) : 1;
    const hay = { st: c.nom.st.length > 0, tr: c.nom.tr.length > 0 && c.pide.tr <= nivel,
      si: c.nom.si.length > 0 && c.pide.si <= nivel, iu: c.nom.iu.length > 0 };
    const solo = Object.keys(hay).filter((l) => hay[l]).length === 1;
    const filas = [];
    if (hay.st) filas.push([solo ? 'Nombre' : 'Stock', c.nom.st.slice(0, c.fam === 'per' ? 2 : cuantos)]);
    if (hay.tr) filas.push([c.amoniaco ? 'Nombre propio' : solo ? 'Nombre' : 'Tradicional', c.nom.tr.slice(0, cuantos)]);
    if (hay.si) filas.push(['Sistemática', c.nom.si.slice(0, 1)]);
    if (hay.iu) filas.push(['Con el romano en el anión', c.nom.iu.slice(0, 1)]);
    return filas;
  }

  // pasos de la resolución, en el sentido del ejercicio. `lab` es la nomenclatura con la que se explica.
  function resolver(ej) {
    const c = ej.c, pasos = [];
    const p = (t) => { if (t) pasos.push(t); };
    const NF = ej.dir === 'nf';
    const lab = ej.guia || ej.lab || c.comun;

    if (c.fam === 'oxb' || c.fam === 'oxa') {
      const metal = c.fam === 'oxb', x = metal ? c.cat.m : c.nm, s = x.s, q = c.q;
      if (NF) {
        if (lab === 'si') {
          p('En la sistemática los prefijos cuentan los átomos: ' + OXIDO[c.no] + (c.no > 1 ? ' son ' : ' es ') + c.no + ' O y ' +
            (c.nx > 1 ? 'di' + x.n + ' son 2 ' + s : x.n + ', sin prefijo, es 1 ' + s) + '. Se escribe directo: ' + F(c) + '.');
        } else {
          p('“Óxido”: un elemento con oxígeno, y el O vale −2.');
          if (metal) p(cargaPorNombre(c, lab));
          else if (lab === 'tr') p('“' + may(x.ad[c.i]) + '”: ' + leerSufijo(x, c.i) + '.');
          else p('El (' + ROM[q] + ') es el número de oxidación del ' + x.n + ': ' + b(sig(q)) + '.');
          p(cruceTxt(q, 2, conSub(s, 2) + conSub('O', q), F(c), true));
        }
        p('Chequeo: ' + chequeoIones(c) + '.');
      } else {
        p((metal ? 'Metal' : 'No metal') + ' con oxígeno: es ' + fam(c).art + ' ' + b(fam(c).n) + '. El O vale −2.');
        p('Número de oxidación del ' + x.n + ': ' + sumaTxt(c.nx, 'x', veces(c.no, -2), '0', q) + '.');
        if (lab === 'si') {
          p('Sistemática: los prefijos cuentan los átomos tal como están escritos (' + c.no + ' O y ' + (c.nx > 1 ? '2 ' + s : '1 ' + s + ', que no lleva prefijo') + '): ' + b(c.nom.si[0]) + '.');
        } else if (metal) nombrarConCation(c, lab, p);
        else if (lab === 'tr') p('Tradicional: ' + ponerSufijo(x, c.i) + ': ' + b(c.nom.tr[0]) + '. También se le dice anhídrido ' + x.ad[c.i] + '.');
        else p('Stock: el romano es ese número: ' + b(c.nom.st[0]) + '.' + (x.romOpc ? ' Como el silicio usa siempre +4, también vale sin el romano.' : ''));
      }
    } else if (c.fam === 'per') {
      const d = c.per, cuantos = d.q === 1 ? 2 : 1;
      if (NF) {
        p('“Peróxido”: el oxígeno vale −1 y va de a dos, como el grupo O<sub>2</sub><sup>2-</sup>.');
        p(d.q === 1 ? 'El ' + d.n + ' vale +1: hacen falta dos para compensar el −2 del grupo → ' + F(c) + '.'
          : 'El ' + d.n + ' vale +2 y compensa justo el −2 del grupo → ' + F(c) + '.');
        p('No se simplifica: el 2 del oxígeno es del grupo. Chequeo: ' + veces(cuantos, d.q) + ' + 2(−1) = 0.');
      } else {
        p('Parece un óxido, pero hay que hacer la suma. ' + (d.s === 'H' ? 'El H vale +1' : 'El ' + d.n + ' sólo tiene ' + sig(d.q)) + ': ' +
          veces(cuantos, d.q) + ' + 2x = 0 → x = ' + b('−1') + '.');
        p('Oxígeno con −1: es un ' + b('peróxido') + ', no un óxido → ' + b(c.nom.st[0]) + '. No lleva romano.');
      }
    } else if (c.fam === 'hid' || c.fam === 'hme') {
      const cat = c.cat, m = cat.m, esH = c.fam === 'hme';
      const an = esH ? 'H<sup>-</sup>' : 'OH<sup>-</sup>';
      if (NF) {
        if (lab === 'si') {
          p('En la sistemática el prefijo cuenta los ' + (esH ? 'hidrógenos' : 'grupos OH') + ': ' + (c.q > 1 ? PRE[c.q] + ' son ' + c.q : 'sin prefijo es uno') + ' → ' + F(c) + '.');
        } else {
          p(esH ? '“Hidruro” de un metal: el hidrógeno vale −1 (' + an + ').' : '“Hidróxido”: un metal con el grupo ' + an + ', que vale −1.');
          p(cargaPorNombre(c, lab));
          p((c.q > 1 ? 'Hacen falta ' + c.q + ' ' + an + ' para compensar el ' + sig(c.q) : 'Alcanza con uno de cada uno') + ' → ' + F(c) +
            (!esH && c.q > 1 ? ', con paréntesis porque el grupo OH se repite.' : '.'));
        }
        p('Chequeo: ' + chequeoIones(c) + '.');
      } else {
        p(esH ? 'Metal con hidrógeno: es un ' + b('hidruro metálico') + ', y acá el H vale −1.'
          : 'Metal con el grupo OH: es un ' + b('hidróxido') + '. Cada OH<sup>-</sup> vale −1.');
        p('Número de oxidación del ' + m.n + ': ' + sumaTxt(1, 'x', veces(c.q, -1), '0', c.q) + '.');
        nombrarConCation(c, lab, p);
      }
    } else if (c.amoniaco) {
      if (NF) {
        p(lab === 'si' ? 'Trihidruro: tri son 3 H. El nitrógeno se escribe primero → ' + F(c) + '.'
          : 'Amoníaco es el nombre propio del ' + b(fHTML(c.f)) + ' (N con −3 y H con +1). Hay que saberlo de memoria.');
        p('Chequeo: (−3) + 3(+1) = 0.');
      } else {
        p('No metal con hidrógeno: es un ' + b('hidruro no metálico') + '. x + 3(+1) = 0 → el N vale −3.');
        p('Tiene nombre propio: ' + b('amoníaco') + '. No forma un hidrácido: en agua da una solución básica.');
        if (lab === 'si') p('En la sistemática, tri son 3 H: ' + b(c.nom.si[0]) + '.');
      }
    } else if (c.fam === 'hnm' || c.fam === 'hac') {
      const a = c.an, gas = c.fam === 'hnm';
      if (NF) {
        p(gas ? '“' + may(a.uro) + ' de hidrógeno”: el ' + ELEM[a.s] + ' con ' + sig(-a.q) + ' y el H con +1.'
          : '“Ácido ' + a.hid + '”: la terminación -hídrico avisa que no tiene oxígeno. Es el ' + a.uro + ' de hidrógeno disuelto en agua.');
        p((a.q > 1 ? 'Hacen falta ' + a.q + ' H' : 'Alcanza con un H') + ' → ' + b(fHTML(c.f)) + '. ' +
          (gas ? 'Como sustancia pura es un gas: ' + F(c) + '.' : 'Como ácido va con (ac): ' + F(c) + '.'));
      } else {
        p('Hidrógeno con un no metal, sin oxígeno. Lo que decide el nombre es el estado.');
        p(gas ? '(g): es la sustancia pura, un ' + b('hidruro no metálico') + ' → ' + b(c.nom.st[0]) + '.'
          : '(ac): está disuelto en agua, es un ' + b('hidrácido') + ' → ' + b(c.nom.tr[0]) + '.');
        p(gas ? 'Disuelto en agua, el mismo compuesto se llama ácido ' + a.hid + '.' : 'Puro y gaseoso, el mismo compuesto se llama ' + a.uro + ' de hidrógeno.');
      }
    } else if (c.fam === 'sbi') {
      const cat = c.cat, a = c.an, ian = a.s + carga(a.q, '-');
      if (NF) {
        if (lab === 'si') {
          p('En la sistemática los prefijos cuentan los átomos: ' + (c.na > 1 ? PRE[c.na] + a.uro + ' son ' + c.na : a.uro + ', sin prefijo, es 1') + ' ' + a.s +
            (c.nc > 1 ? ' y di' + cat.m.n + ' son 2 ' + cat.m.s : '') + ' → ' + F(c) + '.');
        } else {
          p('“' + may(a.uro) + '”: termina en -uro, así que no tiene oxígeno. Es el anión ' + b(ian) + '.');
          p(cargaPorNombre(c, lab));
          p(cruceTxt(cat.q, a.q, crudoHTML(cat, a.s, a.q), F(c)));
        }
        p('Chequeo: ' + chequeoIones(c) + '.');
      } else {
        p((cat.m.poli ? 'El amonio (que ocupa el lugar del metal)' : 'Metal') + ' con un no metal, sin oxígeno: es una ' + b('sal binaria') + '. El anión es ' + ian + ', ' + b(a.uro) + '.');
        if (cat.m.poli) p('El catión es el amonio, ' + ionCat(cat) + ' → ' + b(c.nom.st[0]) + '.');
        else {
          p('Número de oxidación del ' + cat.m.n + ': ' + sumaTxt(c.nc, 'x', veces(c.na, -a.q), '0', cat.q) + '.');
          nombrarConCation(c, lab, p);
        }
      }
    } else if (c.fam === 'bnm') {
      const d = c.bn, n2 = c.f[1].n;
      if (NF) {
        p(lab === 'si' ? 'Dos no metales, en sistemática: el prefijo cuenta los átomos del que termina en -uro (' + PRE[n2] + ' son ' + n2 + ') → ' + F(c) + '.'
          : 'El (' + ROM[d.qa] + ') es el número de oxidación del ' + ELEM[d.a] + ', y el ' + ELEM[d.b] + ' usa ' + sig(-d.qb) + ' → ' + F(c) + '.');
        p('Chequeo: (' + sig(d.qa) + ') + ' + veces(n2, -d.qb) + ' = 0.');
      } else {
        p('Dos no metales: se escribe primero el menos electronegativo (' + d.a + ') y el otro termina en -uro.');
        p(lab === 'st' ? 'Stock: x + ' + veces(n2, -d.qb) + ' = 0 → x = ' + sig(d.qa) + ' → ' + b(c.nom.st[0]) + '.'
          : 'Sistemática: el prefijo cuenta los átomos → ' + b(c.nom.si[0]) + '. No tiene nombre tradicional.');
      }
    } else if (c.fam === 'oxo') {
      const a = c.oxo, x = noMetalDe(a), i = indiceOx(x, a.ox);
      if (NF) {
        if (lab === 'iu') p('En este estilo todos los nombres terminan en -ato y el romano es el número de oxidación del ' + x.n + ': ' + b(sig(a.ox)) + '. Es el ácido ' + a.ac + '.');
        else p('“' + may(c.nom.tr[0]) + '”: ' + leerSufijo(x, i) + '.' + (prefijoAgua(a) ? ' ' + prefijoAgua(a) : ''));
        p('Sale de su óxido con agua: ' + formacionAcido(a));
        p('Chequeo: ' + chequeoAcido(a) + '.');
      } else {
        p('Hidrógeno, un no metal y oxígeno: es un ' + b('oxoácido') + '.');
        p('Número de oxidación del ' + x.n + ': ' + veces(a.q, 1) + ' + ' + (a.nx > 1 ? a.nx : '') + 'x + ' + veces(a.no, -2) + ' = 0 → x = ' + b(sig(a.ox)) + '.');
        p(may(ponerSufijo(x, i)) + ': ' + b(c.nom.tr[0]) + '.' + (prefijoAgua(a) ? ' ' + prefijoAgua(a) : ''));
      }
    } else if (c.fam === 'oxs') {
      const cat = c.cat, a = c.oxo, ion = ionDe(partesOxo(a), a.q), anTxt = fHTML(partesOxo(a));
      if (NF) {
        if (lab === 'iu') p('En este estilo todos los aniones terminan en -ato y el romano es el número de oxidación del ' + ELEM[a.x] + ': ' + sig(a.ox) + '. Es el ' + b(a.an) + ', ' + ion + '.');
        else p(origenAnion(a));
        p(cargaPorNombre(c, lab === 'iu' ? 'st' : lab));
        p(cruceTxt(cat.q, a.q, crudoHTML(cat, anTxt, a.q, true), F(c)) + (c.na > 1 ? ' El paréntesis va porque el anión se repite.' : ''));
        p('Chequeo: ' + chequeoIones(c) + '.');
      } else {
        p('Un catión y un anión con oxígeno: es una ' + b('oxosal') + '. El anión es ' + ion + ', ' + b(a.an) +
          (noMetalDe(a) ? ' (del ácido ' + a.ac + ': ' + ELEM[a.x] + ' con ' + sig(a.ox) + ').' : ' (' + ELEM[a.x] + ' con ' + sig(a.ox) + ').'));
        if (cat.m.poli) p('El catión es el amonio, ' + ionCat(cat) + ' → ' + b(c.nom.st[0]) + '.');
        else {
          p('Número de oxidación del ' + cat.m.n + ': ' + sumaTxt(c.nc, 'x', veces(c.na, -a.q), '0', cat.q) + '.');
          nombrarConCation(c, lab, p);
        }
      }
    } else if (c.fam === 'sac') {
      const cat = c.cat, a = c.acido, base = c.oxo;
      const partesAn = [el('H', a.h)].concat(base ? partesOxo(base) : [el('S', 1)]);
      const ion = ionDe(partesAn, a.q), anTxt = fHTML(partesAn);
      const neutro = base ? base.an : 'sulfuro';
      const ionNeutro = base ? ionDe(partesOxo(base), base.q) : 'S' + carga(2, '-');
      const queda = a.h === 2 ? 'conserva dos H' : 'conserva un H';
      const anion = c.nom.st[0].split(' ')[0];
      if (NF) {
        const m = normNombre(ej.mostrado || '').k;
        p((/^bi/.test(m) ? '“Bi-” es la forma vieja de decir que el anión conserva un H. '
          : / (di|mono)?acido /.test(m) ? '“' + (a.h === 2 ? 'Diácido' : 'Ácido') + '” acá quiere decir que el anión ' + queda + '. '
            : '“' + may(hidrogeno(a.h)) + '-” dice cuántos H conserva el anión. ') +
          'Es el ' + neutro + ', ' + ionNeutro + ', que ' + queda + ' → ' + b(ion) + '. Cada H que conserva le saca una carga negativa.');
        p(cargaPorNombre(c, lab === 'iu' ? 'st' : lab));
        p(cruceTxt(cat.q, a.q, crudoHTML(cat, anTxt, a.q, true), F(c)) + (c.na > 1 ? ' El paréntesis va porque el anión se repite.' : ''));
        p('Chequeo: ' + chequeoIones(c) + '.');
      } else {
        p('Un catión y un anión que conserva hidrógeno: es una ' + b('sal ácida') + '. El anión es ' + ion + ': un ' + neutro + ' (' + ionNeutro + ') que ' + queda + '.');
        p('Ese anión se llama ' + b(anion) + ': el prefijo cuenta los H que le quedan.');
        if (cat.m.poli) p('El catión es el amonio, ' + ionCat(cat) + ' → ' + b(c.nom.st[0]) + '.');
        else {
          p('Número de oxidación del ' + cat.m.n + ': ' + sumaTxt(c.nc, 'x', veces(c.na, -a.q), '0', cat.q) + '.');
          nombrarConCation(c, lab, p);
        }
      }
    }
    return pasos.map(genero);
  }
  function prefijoAgua(a) {
    if (a.id === 'PO4') return '“Fosfórico” a secas es el orto: el óxido con 3 moléculas de agua.';
    if (a.id === 'PO3m') return 'Meta- es el óxido con 1 molécula de agua.';
    if (a.id === 'P2O7') return 'Piro- es el óxido con 2 moléculas de agua.';
    if (a.id === 'PO3f') return 'Como el fosfórico, se arma con 3 moléculas de agua.';
    if (a.id === 'SiO4') return 'Orto- es el óxido con 2 moléculas de agua (con 1 sale el metasilícico).';
    return '';
  }
  // último paso de fórmula a nombre: lo que va antes del catión ya está; falta el catión, con romano o sin él
  function nombrarConCation(c, lab, p) {
    const cat = c.cat, m = cat.m;
    if (lab === 'tr' && cat.adj) {
      p('Tradicional: ' + sig(cat.q) + ' es el ' + cat.orden + ' ' + (m.deCat || 'de los números del ' + m.n + ' (' + m.nums + ')') + ', y lleva ' + (cat.orden === 'menor' ? '-oso' : '-ico') + ': ' + b(c.nom.tr[0]) + '.');
    } else if (lab === 'si' && c.nom.si.length) {
      p('Sistemática: los prefijos cuentan los átomos tal como están escritos, y no lleva romano: ' + b(c.nom.si[0]) + '.');
    } else {
      p('El ' + m.n + ' ' + numsDe(m) + ', así que ' + (cat.multi ? 'lleva romano' : 'no lleva romano') + ': ' + b(c.nom.st[0]) + '.');
    }
  }

  // ---------------------------------------------------------- pistas (sin dar la respuesta)
  function pista(ej) {
    const c = ej.c, NF = ej.dir === 'nf', lab = ej.lab;
    if (NF) {
      if (lab === 'si') return 'En la sistemática cada prefijo dice cuántos átomos hay de ese elemento: mono 1, di 2, tri 3, tetra 4, penta 5, hexa 6, hepta 7.';
      switch (c.fam) {
        case 'oxb': case 'oxa': return 'Es un óxido: el oxígeno vale −2. Sacá del nombre el número de oxidación del otro elemento y cruzá las cargas.';
        case 'per': return 'En un peróxido el oxígeno vale −1 y va de a dos (O<sub>2</sub><sup>2-</sup>). No se simplifica.';
        case 'hid': return 'El hidróxido es el grupo OH<sup>-</sup>. Hacen falta tantos como la carga del metal.';
        case 'hme': return 'En un hidruro metálico el H vale −1. Hacen falta tantos como la carga del metal.';
        case 'hnm': return c.amoniaco ? 'Es un nombre propio: nitrógeno con −3 e hidrógeno con +1.' : 'El H vale +1 y el no metal usa su número negativo.';
        case 'hac': return 'Los ácidos terminados en -hídrico no tienen oxígeno: H más el no metal, en solución acuosa.';
        case 'sbi': return 'La terminación -uro es de un anión sin oxígeno. Escribí el catión y el anión con sus cargas y cruzalas.';
        case 'bnm': return 'El romano es el número de oxidación del primer elemento; el que termina en -uro usa su número negativo.';
        case 'oxo': return 'Buscá el número de oxidación del no metal por el sufijo (-oso el menor, -ico el mayor), armá su óxido y sumale agua.';
        case 'oxs': return '-ito viene de -oso y -ato viene de -ico. Escribí el anión con su carga, el catión con la suya, y cruzalas.';
        case 'sac': return 'El anión conserva hidrógeno, y cada H que conserva le saca una carga negativa. Después cruzá con el catión.';
      }
    }
    switch (c.fam) {
      case 'oxb': case 'oxa': return lab === 'si' ? 'Contá los átomos como están escritos y ponele a cada uno su prefijo.' : 'El O vale −2. Con la suma igual a cero sacás el número de oxidación del otro elemento.';
      case 'per': return 'Hacé la suma con el número del metal (o del H): fijate cuánto le queda al oxígeno.';
      case 'hid': case 'hme': return 'Cada ' + (c.fam === 'hid' ? 'OH' : 'H') + ' vale −1. Mirá si el metal tiene un solo número de oxidación o más de uno.';
      case 'hnm': case 'hac': return c.amoniaco ? 'Este compuesto tiene nombre propio, y hay que saberlo de memoria.' : 'Mirá el estado: (g) y (ac) llevan nombres distintos.';
      case 'sbi': return 'Sin oxígeno, el anión termina en -uro. El número del metal sale de la suma.';
      case 'bnm': return 'Son dos no metales: el segundo termina en -uro.';
      case 'oxo': return 'Calculá el número de oxidación del no metal: 1 por cada H, −2 por cada O, y la suma da cero.';
      case 'oxs': return 'Separá el catión del anión. El anión termina en -ito o -ato, y el número del metal sale de la suma.';
      case 'sac': return 'El anión conserva hidrógeno: nombralo con hidrogeno- adelante, y después el catión.';
    }
    return '';
  }

  // ---------------------------------------------------------- corrector de nombres
  // Devuelve {v: 'ok' | 'casi' | 'mal' | 'vacio', msg, nota}. 'casi' no cuenta como error: se vuelve a escribir.
  const ES = (c) => F(c) + (c.fam === 'ext' ? '' : ', ' + fam(c).art + ' ' + fam(c).n);
  const conH = (c) => c.fam === 'hnm' || c.fam === 'hac';
  const mismoCation = (a, o) => !!(a.cat && o.cat && a.cat.m === o.cat.m);
  const mismoAnion = (a, o) => a.an === o.an && a.oxo === o.oxo && a.acido === o.acido;
  // dos aniones (o dos ácidos) del mismo elemento con el mismo número de oxidación: lo que cambia es otra cosa
  function mismoNumero(a) {
    return 'En los dos el ' + ELEM[a.x] + ' tiene ' + sig(a.ox) + ': lo que cambia es ' +
      (a.x === 'Cr' ? 'cuántos átomos de cromo tiene el anión (di- son dos).' : 'el prefijo (meta, piro u orto), que dice con cuánta agua se armó el ácido.');
  }

  // qué mirar cuando se escribió el nombre de otro compuesto
  function compararNombres(obj, otro) {
    if (otro.clave === obj.clave && otro.est !== obj.est) return 'La fórmula es la misma, pero el estado cambia el nombre: fijate si dice (g) o (ac).';
    if (obj.fam === 'per' && (otro.fam === 'oxb' || otro.clave === 'H2O')) return 'Hacé la suma: con el número de oxidación del ' + obj.per.n + ', ¿cuánto le queda a cada oxígeno?';
    if (otro.fam === 'ext') return '';
    if (otro.fam === 'per' && (obj.fam === 'oxb' || obj.fam === 'oxa')) return 'En un peróxido el oxígeno vale −1. Acá, hacé la suma y fijate cuánto vale.';
    if (conH(obj) && conH(otro)) return obj.an && otro.an ? 'Es el mismo tipo de compuesto, pero con otro no metal: mirá bien el símbolo.' : '';
    const mc = mismoCation(obj, otro), ma = mismoAnion(obj, otro);
    if (mc && obj.cat.q !== otro.cat.q && otro.fam === obj.fam && ma) {
      return 'Ahí el ' + obj.cat.m.n + ' tiene ' + sig(otro.cat.q) + '. Calculá su número de oxidación en esta fórmula con la suma igual a cero.';
    }
    if (obj.fam === 'oxa' && otro.fam === 'oxa' && obj.nm === otro.nm) return 'Ahí el ' + obj.nm.n + ' tiene ' + sig(otro.q) + '. Calculá cuánto vale acá con la suma igual a cero.';
    if (obj.oxo && otro.oxo && obj.oxo !== otro.oxo && obj.oxo.x === otro.oxo.x && otro.fam === obj.fam) {
      if (obj.oxo.ox === otro.oxo.ox) return mismoNumero(obj.oxo);
      return 'El ' + ELEM[obj.oxo.x] + ' no tiene el mismo número de oxidación en los dos: contá los oxígenos y hacé la suma.';
    }
    if (obj.fam === 'sac' && otro.fam === 'oxs' && obj.oxo === otro.oxo) return 'Es la sal neutra. Acá el anión conserva hidrógeno.';
    if (obj.fam === 'oxs' && otro.fam === 'sac' && obj.oxo === otro.oxo) return 'Es una sal ácida, con hidrógeno en el anión. Acá el anión no tiene H.';
    if (obj.fam === 'sac' && otro.fam === 'sac' && mc && obj.cat.q === otro.cat.q) return 'Fijate cuántos H conserva el anión y de qué ácido viene.';
    if (otro.fam !== obj.fam) return 'Lo que tenés que nombrar es ' + fam(obj).art + ' ' + fam(obj).n + '.';
    if (obj.cat && otro.cat && !mc && ma) return 'El anión es ese, pero el catión no: mirá bien el símbolo del metal.';
    if (mc && obj.cat.q === otro.cat.q && !ma) return 'El catión es ese, pero el anión no: miralo átomo por átomo.';
    return '';
  }

  function corregirNombre(ej, texto) {
    const obj = ej.c, lab = ej.lab;
    const crudo = String(texto || '').trim();
    if (crudo.length > 120) return { v: 'casi', msg: 'Eso es demasiado largo para ser el nombre de un compuesto.' };
    const n = normNombre(crudo), k = n.k;
    if (!k) return { v: 'vacio' };
    const hits = INDICE.get(k) || [];
    const propios = hits.filter((h) => h.c === obj);
    if (propios.length) {
      if (n.marcas.estado && obj.est && n.marcas.estado !== obj.est && !obj.amoniaco) {
        return { v: 'mal', msg: 'El nombre va con otro estado: fijate que acá la fórmula dice (' + obj.est + '), y el estado cambia el nombre.' };
      }
      if (n.marcas.arabigo) return { v: 'casi', msg: 'El número de oxidación se escribe en romanos y entre paréntesis, por ejemplo (III).' };
      if (n.marcas.sinParentesis) return { v: 'casi', msg: 'Vas bien, pero el romano va entre paréntesis, por ejemplo (III).' };
      const labs = propios.map((h) => h.lab);
      if (!lab || labs.indexOf(lab) >= 0 || (lab === 'st' && labs.indexOf('iu') >= 0)) {
        return { v: 'ok', lab: labs.indexOf(lab) >= 0 ? lab : labs[0] };
      }
      const cual = { st: 'la de Stock', tr: 'la tradicional', si: 'la sistemática', iu: 'la que lleva el romano en el anión' }[labs[0]];
      return { v: 'casi', msg: 'Ese nombre está bien, pero es ' + cual + '. Acá se pide la ' + ROTULO[lab] + '.' };
    }
    const otros = hits.filter((h) => h.c !== obj);
    if (otros.length) {
      const o = otros[0].c, extra = compararNombres(obj, o);
      return { v: 'mal', msg: 'Ese es el nombre de ' + ES(o) + '.' + (extra ? ' ' + extra : '') };
    }
    // ¿escribió una fórmula donde va el nombre?
    if (!/\s/.test(crudo) && /[A-Z]/.test(crudo) && (/[0-9()]/.test(crudo) || crudo.length <= 5)) {
      const lf = leerFormula(limpiarFormula(crudo).s);
      if (!lf.error && !lf.mayusculas && (!lf.sinCaja || lf.literal)) return { v: 'casi', msg: 'Eso parece una fórmula. Acá se pide el nombre.' };
    }
    const cerca = casiNombre(obj, lab, k, n.marcas);
    if (cerca) return cerca;
    // errores de tipeo: lo más parecido entre todos los nombres que existen
    let mejor = 3, deObj = false, deOtro = null;
    INDICE.forEach((hs, clv) => {
      const d = tipeo(k, clv);
      if (d > 2 || d > mejor) return;
      if (d < mejor) { mejor = d; deObj = false; deOtro = null; }
      hs.forEach((h) => { if (h.c === obj) deObj = true; else if (!deOtro) deOtro = { c: h.c, n: h.c.nom[h.lab][h.i] }; });
    });
    if (mejor <= 2) {
      if (deObj && !deOtro) return { v: 'casi', msg: 'Casi: revisá cómo está escrito, hay alguna letra de más, de menos o cambiada.' };
      if (deObj && deOtro) return { v: 'casi', msg: 'Revisá cómo está escrito: por una letra puede ser el nombre de otro compuesto (por ejemplo -ito y -ato, u -oso e -ico).' };
      const extra = compararNombres(obj, deOtro.c);
      return { v: 'mal', msg: 'No reconozco ese nombre. Se parece a “' + deOtro.n + '”, que es ' + ES(deOtro.c) + '.' + (extra ? ' ' + extra : '') };
    }
    return { v: 'mal', msg: 'No reconozco ese nombre. ' + pista(ej) };
  }

  // errores frecuentes que no llegan a ser el nombre de otro compuesto
  function casiNombre(obj, lab, k, marcas) {
    const sinRom = (x) => x.replace(ROMS, '');
    const romDe = (x) => (x.match(ROMS) || [''])[0];
    const tieneRom = sinRom(k) !== k;
    const cat = obj.cat;
    const claves = (l) => obj.nom[l].map((x) => normNombre(x).k);
    const st = claves('st'), iu = claves('iu'), si = claves('si');
    const todas = st.concat(claves('tr'), si, iu);
    // sistemática con romano
    if (tieneRom && si.indexOf(sinRom(k)) >= 0 && st.indexOf(sinRom(k)) < 0) {
      return { v: 'mal', msg: 'En la sistemática los prefijos ya dicen cuántos átomos hay: no se le agrega el romano.' };
    }
    // el mismo nombre con los romanos distintos: falta, sobra o está mal alguno
    const mSt = st.filter((x) => sinRom(x) === sinRom(k))[0], mIu = iu.filter((x) => sinRom(x) === sinRom(k))[0];
    if (mSt || mIu) {
      const pk = k.split(' '), ps = (mSt || mIu).split(' '), pi = mIu ? mIu.split(' ') : null;
      const ultimo = pk.length - 1;
      for (let i = 0; i < ultimo; i++) {                    // el anión: el romano es optativo, pero si está tiene que ser el suyo
        const rk = romDe(pk[i]);
        if (rk && (!pi || rk !== romDe(pi[i]))) {
          return { v: 'mal', msg: obj.oxo && pi ? 'Revisá el romano del anión: es el número de oxidación del ' + ELEM[obj.oxo.x] + ', y sale de la suma igual a cero.'
            : 'Ahí no va un romano: el romano acompaña al elemento que puede tener más de un número de oxidación.' };
        }
      }
      const rk = romDe(pk[ultimo]), rs = romDe(ps[ultimo]);
      if (!rk && rs) {
        if (cat && cat.multi) return { v: 'mal', msg: 'Falta el número romano: el ' + cat.m.n + ' ' + numsDe(cat.m) + ' y sin el romano no se sabe cuál es.' };
        return { v: 'mal', msg: 'Falta el número romano: ese no metal forma más de un compuesto de este tipo y hay que decir cuál es.' };
      }
      if (rk && !rs) {
        if (obj.fam === 'per') return { v: 'mal', msg: 'Los peróxidos no llevan romano.' };
        if (cat && !cat.multi) return { v: 'mal', msg: 'El ' + cat.m.n + ' ' + numsDe(cat.m) + ': no lleva romano. El romano se pone sólo cuando hay que distinguir entre dos compuestos.' };
        return { v: 'mal', msg: 'Ese nombre no lleva romano.' };
      }
      if (rk && rs && rk !== rs) {
        const quien = cat ? 'del ' + cat.m.n : obj.nm ? 'del ' + obj.nm.n : 'del primer elemento';
        return { v: 'mal', msg: 'Revisá el romano: es el número de oxidación ' + quien + ', no un subíndice ni la carga del anión. Sale de la suma igual a cero.' };
      }
    }
    // el ácido sin la palabra "ácido"
    if ((obj.fam === 'oxo' || obj.fam === 'hac') && todas.indexOf('acido ' + k) >= 0) {
      return { v: 'casi', msg: 'Falta la palabra “ácido” adelante.' };
    }
    // sistemática con algún prefijo de menos, de más o cambiado
    const sinPref = (x) => x.replace(/\b(?:mono|mon|di|tri|tetra|tetr|penta|pent|hexa|hepta|hept)(?=oxido|hidroxido|hidruro|cloruro|bromuro|ioduro|fluoruro|sulfuro)/g, '')
      .replace(/\bde (?:mono|di|tri|tetra)(?=[a-z]{3})/g, 'de ');
    if (!tieneRom && si.length && k.indexOf('oxido de') !== 0 && sinPref(k) !== k && sinPref(k) === sinPref(si[0])) {
      return { v: 'mal', msg: 'Revisá los prefijos: cada uno tiene que decir cuántos átomos hay de ese elemento, tal como están escritos en la fórmula.' };
    }
    // el óxido sin su prefijo, en la sistemática
    if (lab === 'si' && (obj.fam === 'oxb' || obj.fam === 'oxa') && si.some((x) => x.replace(/^[a-z]+oxido/, 'oxido') === k)) {
      return { v: 'casi', msg: 'En la sistemática el óxido también lleva su prefijo: mon-, di-, tri-, pent-, hept-.' };
    }
    // "de" + adjetivo
    if (cat && cat.adj && k.indexOf('de ' + normNombre(cat.adj).k) >= 0) {
      return { v: 'casi', msg: 'Con el adjetivo en -oso o -ico no va “de”: se dice, por ejemplo, “óxido férrico”.' };
    }
    // el mismo nombre con otra terminación u otro prefijo (fosfito por fosfato, hipoclorato por hipoclorito)
    const pal = k.split(' ');
    for (let i = 0; i < pal.length; i++) {
      const base = sinRom(pal[i]), rom = pal[i].slice(base.length), fin = base.slice(-3);
      if (['ato', 'ito', 'oso', 'ico'].indexOf(fin) < 0) continue;
      const otra = { ato: 'ito', ito: 'ato', oso: 'ico', ico: 'oso' }[fin];
      const cambios = [[base.slice(0, -3) + otra, 'fin']];
      ['hipo', 'per'].forEach((pf) => cambios.push([base.indexOf(pf) === 0 ? base.slice(pf.length) : pf + base, 'pre']));
      for (let j = 0; j < cambios.length; j++) {
        const cand = pal.slice(0, i).concat([cambios[j][0] + rom], pal.slice(i + 1)).join(' ');
        if (todas.indexOf(cand) < 0) continue;
        return { v: 'mal', msg: cambios[j][1] === 'fin'
          ? 'Revisá la terminación: -oso e -ito corresponden al número de oxidación menor; -ico y -ato, al mayor.'
          : 'Revisá el prefijo: hipo- va con el número de oxidación más bajo y per- con el más alto.' };
      }
    }
    if (marcas.arabigo) return { v: 'mal', msg: 'El número de oxidación se escribe en romanos, y además revisá el resto del nombre.' };
    return null;
  }

  // ---------------------------------------------------------- corrector de fórmulas
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const ERRORES_LECTURA = {
    caracter: (d) => 'No entiendo el carácter “' + esc(d) + '”. Una fórmula lleva sólo símbolos, números y paréntesis.',
    numero_inicial: () => 'Una fórmula no empieza con un número: los subíndices van después de cada símbolo.',
    simbolo: (d) => 'No reconozco “' + esc(d) + '” como símbolos de elementos. Cada símbolo empieza con mayúscula y, si tiene segunda letra, va en minúscula.',
    anidado: () => 'No hacen falta paréntesis dentro de paréntesis.',
    parentesis: () => 'Hay un paréntesis que no abre o no cierra.',
    grupo_vacio: () => 'Hay un paréntesis vacío.',
    numero: () => 'Revisá los subíndices: hay un número que no puede ser.',
    numero_suelto: () => 'Hay un número que no está detrás de un símbolo ni de un paréntesis.',
  };
  // familias donde no hay iones: se habla de elementos y de números de oxidación, no de cargas
  const covalente = (c) => ['oxa', 'bnm', 'hnm', 'hac', 'oxo'].indexOf(c.fam) >= 0;

  // ¿la fórmula escrita son los mismos dos iones del objetivo, con otras cantidades? -> {nc, na}
  function comoIones(f, obj) {
    const O = obj.f;
    if (O.length !== 2) return null;
    const igual = (a, b2) => JSON.stringify(a) === JSON.stringify(b2);
    const cuerpo = (p) => (p.g ? p.g : [el(p.s, 1)]);                // el ion, una sola vez
    const cat = cuerpo(O[0]), an = cuerpo(O[1]);
    // quita del frente de `resto` una copia del ion (como grupo con subíndice, o suelto)
    const tomar = (resto, ion) => {
      if (!resto.length) return null;
      const p = resto[0];
      if (p.g && igual(p.g, ion)) return { n: p.n, resto: resto.slice(1) };
      if (ion.length === 1 && !p.g && p.s === ion[0].s) return { n: p.n, resto: resto.slice(1) };
      if (ion.length > 1 && resto.length >= ion.length && igual(resto.slice(0, ion.length), ion)) return { n: 1, resto: resto.slice(ion.length) };
      return null;
    };
    const a = tomar(f, cat);
    if (!a) return null;
    const c2 = tomar(a.resto, an);
    if (!c2 || c2.resto.length) return null;
    return { nc: a.n, na: c2.n };
  }
  function cargasDe(obj) {
    if (obj.fam === 'oxb' || obj.fam === 'oxa') return [obj.q, 2];
    if (obj.fam === 'hid' || obj.fam === 'hme') return [obj.q, 1];
    if (obj.fam === 'per') return [obj.per.q, 1];
    if (obj.fam === 'hnm' || obj.fam === 'hac') return obj.an ? [1, obj.an.q] : null;
    if (obj.fam === 'oxo') return [1, obj.oxo.q];
    if (obj.fam === 'bnm') return [obj.bn.qa, obj.bn.qb];
    if (obj.cat) return [obj.cat.q, obj.an ? obj.an.q : obj.acido ? obj.acido.q : obj.oxo.q];
    return null;
  }

  // qué mirar cuando se escribió la fórmula de otro compuesto conocido
  function compararFormulas(ej, otro) {
    const obj = ej.c, lab = ej.lab;
    if (obj.fam === 'per' && (otro.fam === 'oxb' || otro.clave === 'H2O')) return 'En el peróxido el oxígeno vale −1 y va de a dos, como grupo O<sub>2</sub><sup>2-</sup>, que no se simplifica.';
    if (otro.fam === 'ext') return '';
    if (otro.fam === 'per' && (obj.fam === 'oxb' || obj.fam === 'oxa')) return 'Acá el nombre dice óxido, no peróxido: el oxígeno vale −2.';
    if (conH(obj) && conH(otro)) return obj.an && otro.an && obj.an !== otro.an ? 'Es el mismo tipo de compuesto, pero con otro no metal: revisá cuál nombra.' : '';
    const mc = mismoCation(obj, otro), ma = mismoAnion(obj, otro);
    if (mc && obj.cat.q !== otro.cat.q && otro.fam === obj.fam && ma) {
      if (lab === 'tr') return 'Mirá el sufijo del metal: -oso es el menor de sus números de oxidación e -ico, el mayor.';
      if (lab === 'si') return 'Los prefijos del nombre dicen cuántos átomos hay de cada uno.';
      return 'Mirá el romano del nombre: es el número de oxidación del ' + obj.cat.m.n + '.';
    }
    if (obj.fam === 'oxa' && otro.fam === 'oxa' && obj.nm === otro.nm) {
      return lab === 'si' ? 'Los prefijos del nombre dicen cuántos átomos hay de cada uno.'
        : lab === 'tr' ? 'Mirá el prefijo y el sufijo: cada uno corresponde a un número de oxidación del ' + obj.nm.n + '.'
          : 'Mirá el romano del nombre: es el número de oxidación del ' + obj.nm.n + '.';
    }
    if (obj.oxo && otro.oxo && obj.oxo !== otro.oxo && obj.oxo.x === otro.oxo.x && otro.fam === obj.fam) {
      if (obj.oxo.ox === otro.oxo.ox) return mismoNumero(obj.oxo);
      if (lab === 'iu') return 'Mirá el romano del anión: es el número de oxidación del ' + ELEM[obj.oxo.x] + '.';
      const prefijo = /^(hipo|per)/.test(obj.oxo.an) || /^(hipo|per)/.test(otro.oxo.an) ? ' y el prefijo' : '';
      if (obj.fam === 'oxo') return 'Mirá la terminación' + prefijo + ': -oso es el número de oxidación menor del no metal e -ico, el mayor.';
      return 'Mirá la terminación' + prefijo + ': -ito viene de -oso (el número menor) y -ato de -ico (el mayor).';
    }
    if (obj.fam === 'sac' && otro.fam === 'oxs') return 'Es la sal neutra. En una sal ácida el anión conserva hidrógeno.';
    if (obj.fam === 'oxs' && otro.fam === 'sac') return 'Es una sal ácida. El nombre no dice hidrogeno-, bi- ni ácido: el anión no lleva H.';
    if (obj.fam === 'sac' && otro.fam === 'sac' && mc && obj.cat.q === otro.cat.q) return 'Revisá cuántos H conserva el anión y cuál es su carga.';
    if (obj.fam === 'oxs' && otro.fam === 'sbi') return 'La terminación -uro es de un anión sin oxígeno; -ito y -ato llevan oxígeno.';
    if (obj.fam === 'sbi' && otro.fam === 'oxs') return 'La terminación -uro avisa que el anión no tiene oxígeno.';
    if (obj.fam === 'hid' && otro.fam === 'oxb') return 'El hidróxido lleva el grupo OH.';
    if (obj.fam === 'oxb' && otro.fam === 'hid') return 'El óxido es sólo el metal con oxígeno, sin H.';
    if (obj.fam === 'oxo' && otro.fam === 'oxa') return 'Al ácido se llega sumándole agua a ese óxido.';
    if (obj.fam === 'oxo' && conH(otro)) return 'Ese compuesto no tiene oxígeno. Los ácidos terminados en -oso y en -ico sí tienen.';
    if (obj.fam === 'hac' && otro.fam === 'oxo') return 'Los ácidos terminados en -hídrico no tienen oxígeno.';
    if (otro.fam !== obj.fam) return 'El nombre es de ' + fam(obj).art + ' ' + fam(obj).n + '.';
    if (obj.cat && otro.cat && !mc && ma) return 'El anión está bien, pero el metal no es ese: revisá su símbolo.';
    if (mc && obj.cat.q === otro.cat.q && !ma) return 'El catión está bien, pero el anión no es ese.';
    return '';
  }

  function corregirFormula(ej, texto) {
    const obj = ej.c;
    const crudo = String(texto || '').trim();
    if (crudo.length > 60) return { v: 'casi', msg: 'Eso es demasiado largo para ser una fórmula.' };
    const L = limpiarFormula(crudo);
    if (!L.s) return { v: 'vacio' };
    // ¿escribió un nombre donde va la fórmula?
    if (/[a-záéíóúñ]{4,}\s+[a-záéíóúñ]{2,}/i.test(crudo) || INDICE.has(normNombre(crudo).k)) return { v: 'casi', msg: 'Eso parece un nombre. Acá se pide la fórmula.' };
    const r = leerFormula(L.s);
    if (r.error) return { v: 'casi', msg: (ERRORES_LECTURA[r.error] || ERRORES_LECTURA.numero)(r.dato) };
    const cov = covalente(obj);
    const exacta = r.lecturas.filter((f) => clave(f) === obj.clave)[0];
    if (exacta) {
      if (r.mayusculas) return { v: 'casi', msg: 'Los átomos están bien, pero revisá las mayúsculas: cada símbolo empieza con mayúscula y, si tiene segunda letra, va en minúscula.' };
      if (L.est && obj.est && L.est !== obj.est && !obj.amoniaco) {
        return { v: 'mal', msg: obj.est === 'ac' ? 'La fórmula está bien, pero el estado no: un ácido terminado en -hídrico es ese compuesto disuelto en agua, y va con (ac).'
          : 'La fórmula está bien, pero el estado no: ese nombre es el de la sustancia pura, que es un gas, y va con (g).' };
      }
      const notas = [];
      if (r.sinCaja && r.literal !== obj.clave) notas.push('Ojo con las mayúsculas: se escribe ' + fHTML(obj.f) + '. Cada símbolo empieza con mayúscula y, si tiene segunda letra, va en minúscula.');
      if (exacta.some((p) => p.g && p.n === 1)) notas.push('El paréntesis no hace falta cuando el grupo aparece una sola vez.');
      if (obj.est && !L.est && !obj.amoniaco) notas.push(obj.est === 'ac' ? 'Como es un ácido en solución, completo se escribe ' + fHTML(obj.f, 'ac') + '.' : 'Como es la sustancia gaseosa, completo se escribe ' + fHTML(obj.f, 'g') + '.');
      return { v: 'ok', nota: notas.join(' ') };
    }
    // la fórmula de otro compuesto conocido
    for (let i = 0; i < r.lecturas.length; i++) {
      const otros = POR_FORMULA.get(clave(r.lecturas[i]));
      if (!otros) continue;
      const o = otros.filter((x) => x.est === (L.est || obj.est))[0] || otros[0];
      const doble = otros.length > 1 && !L.est && !conH(obj);
      const quien = doble ? b(fHTML(o.f)) + ' (' + otros.map((x) => x.nombre).join(' o ') + ')'
        : b(fHTML(o.f, L.est ? o.est : null)) + ', ' + (o.fam === 'ext' ? '' : 'el ') + o.nombre;
      const extra = compararFormulas(ej, o);
      return { v: 'mal', msg: 'Eso es ' + quien + '.' + (extra ? ' ' + extra : '') };
    }
    const f = r.lecturas[0];
    if (r.otras && r.otras.some((x) => clave(x) === obj.clave)) {
      const mios = Object.keys(atomos(f)).filter((x) => !atomos(obj.f)[x]);
      return { v: 'casi', msg: 'Revisá mayúsculas y minúsculas' + (mios.length ? ': escrito así, ' + b(mios[0]) + ' es el símbolo del ' + ELEM[mios[0]] + '.' : '.') };
    }
    const escrita = clave(f), ob = obj.clave;
    const top = plana(f), topObj = plana(obj.f);
    const cargas = cargasDe(obj);
    // mismos átomos, mal agrupados o en otro orden
    if (claveAtomos(f) === claveAtomos(obj.f)) {
      if (escrita.replace(/[()]/g, '') === ob.replace(/[()]/g, '') && /\(/.test(ob)) return { v: 'casi', msg: 'Los átomos están, pero revisá dónde van los paréntesis.' };
      if (obj.amoniaco) return { v: 'casi', msg: 'Los átomos están bien, pero en el amoníaco se escribe primero el nitrógeno.' };
      if (top.length === 2 && topObj.length === 2 && clave([top[1], top[0]]) === ob) {
        return { v: 'casi', msg: 'Los átomos están bien, pero el orden no: primero se escribe ' + (obj.cat ? 'el catión (el metal)' : conH(obj) ? 'el hidrógeno' : 'el elemento menos electronegativo') + ' y después el resto.' };
      }
      return { v: 'casi', msg: 'Tiene los átomos justos, pero no están escritos como corresponde. ' + (cov ? 'Revisá el orden de los elementos.' : 'Agrupá cada ion (el poliatómico entre paréntesis si se repite) y poné primero el catión.') };
    }
    // el paréntesis: falta, o está pero con el subíndice adentro
    if (/\(/.test(ob) && escrita === ob.replace(/[()]/g, '')) {
      const g = obj.f.filter((p) => p.g && p.n > 1)[0];
      if (/\(/.test(L.s)) return { v: 'mal', msg: 'El paréntesis está, pero el subíndice quedó adentro: tiene que ir afuera, para que afecte a todo el grupo ' + fHTML(g.g) + '.' };
      return { v: 'mal', msg: 'Falta el paréntesis. Así como está, el subíndice ' + g.n + ' afecta sólo al último átomo y no a todo el grupo ' + fHTML(g.g) + '.' };
    }
    // peróxidos: simplificado, o con átomos de más
    if (obj.fam === 'per' && top.every((p) => !p.g)) {
      if (clave(top.map((p) => el(p.s, p.n * 2))) === ob) return { v: 'mal', msg: 'En los peróxidos no se simplifica: el oxígeno va de a dos, como grupo O<sub>2</sub><sup>2-</sup>.' };
      for (let d = 2; d <= 4; d++) {
        if (top.every((p) => p.n % d === 0) && clave(top.map((p) => el(p.s, p.n / d))) === ob) {
          return { v: 'mal', msg: 'Sobran átomos: alcanza con un solo grupo O<sub>2</sub><sup>2-</sup>. Dividí los subíndices por ' + d + '.' };
        }
      }
    }
    // sin simplificar
    if (obj.fam !== 'per') {
      const d = f.reduce((a, p) => mcd(a, p.n), 0);
      if (d > 1 && clave(f.map((p) => (p.g ? gr(p.g, p.n / d) : el(p.s, p.n / d)))) === ob) {
        return { v: 'mal', msg: (cov ? 'Los elementos' : 'Los iones') + ' están bien, pero los subíndices se simplifican: dividilos por ' + d + '.' };
      }
    }
    // los mismos iones con otras cantidades
    const io = cargas && comoIones(f, obj);
    if (io) {
      const suma = io.nc * cargas[0] - io.na * cargas[1];
      const cuenta = veces(io.nc, cargas[0]) + ' + ' + veces(io.na, -cargas[1]) + ' = ' + sig(suma);
      const nc0 = topObj[0].n, na0 = topObj.length === 2 ? topObj[1].n : 1;
      if (suma !== 0 && io.nc === na0 && io.na === nc0 && nc0 !== na0) {
        return { v: 'mal', msg: 'El cruce quedó al revés: ' + (cov ? 'el número de cada elemento' : 'la carga de cada ion') + ' pasa a ser el subíndice del otro. Así como está, la suma da ' + cuenta + '.' };
      }
      if (suma !== 0) {
        return { v: 'mal', msg: (cov ? 'Los elementos son esos, pero los números de oxidación no se compensan: ' : 'Los iones son esos, pero las cargas no se compensan: ') + cuenta + '. Tiene que dar cero.' };
      }
    }
    // un solo símbolo cambiado
    if (top.length === topObj.length) {
      const dif = [];
      const aplana = (ps) => { const o = []; ps.forEach((p) => { if (p.g) { o.push('(' + p.n); p.g.forEach((x) => o.push(x)); o.push(')'); } else o.push(p); }); return o; };
      const A = aplana(top), B = aplana(topObj);
      if (A.length === B.length) {
        let igual = true;
        for (let i = 0; i < A.length; i++) {
          if (typeof A[i] === 'string' || typeof B[i] === 'string') { if (A[i] !== B[i]) igual = false; continue; }
          if (A[i].n !== B[i].n) igual = false;
          if (A[i].s !== B[i].s) dif.push([A[i].s, B[i].s]);
        }
        if (igual && dif.length === 1) {
          const mio = dif[0][0], bueno = dif[0][1];
          return { v: 'mal', msg: 'Revisá un símbolo: ' + b(mio) + (ELEM[mio] ? ' es ' + ELEM[mio] : ' no es el símbolo de ningún elemento') + '. ¿Cuál es el símbolo del ' + ELEM[bueno] + '?' };
        }
      }
    }
    const raros = Object.keys(atomos(f)).filter((s) => !ELEM[s]);
    if (raros.length) return { v: 'mal', msg: 'No conozco el símbolo ' + b(raros[0]) + '. Revisá los símbolos de los elementos.' };
    if (r.mayusculas) return { v: 'casi', msg: ERRORES_LECTURA.simbolo(L.s) };
    return { v: 'mal', msg: 'No es esa fórmula. ' + pista(ej) };
  }

  // "la plata" es el único elemento femenino de la lista
  const genero = (t) => String(t).replace(/\bdel plata\b/g, 'de la plata').replace(/\bEl plata\b/g, 'La plata').replace(/\bel plata\b/g, 'la plata');
  function corregir(ej, texto) {
    let r;
    try { r = ej.dir === 'fn' ? corregirNombre(ej, texto) : corregirFormula(ej, texto); }
    catch (e) { r = { v: 'casi', msg: 'No pude leer eso. Revisá cómo está escrito.' }; }
    if (r.msg) r.msg = genero(r.msg);
    return r;
  }

  // lo que se muestra mientras se escribe una fórmula: sólo si se lee de una única manera
  function vistaFormula(texto) {
    const L = limpiarFormula(texto);
    if (!L.s || L.s.length > 60) return '';
    const r = leerFormula(L.s);
    if (r.error || r.mayusculas) return '';
    if (r.sinCaja && (r.literal === null || r.lecturas.length > 1)) return '';
    return fHTML(r.lecturas[0], L.est);
  }

  // el enunciado de un ejercicio, para la página
  function enunciado(ej) {
    const c = ej.c;
    if (ej.dir === 'nf') return { pide: 'Escribí la fórmula de', dato: ej.mostrado, esFormula: false };
    return { pide: ej.lab ? 'Nombrá en la nomenclatura ' + ROTULO[ej.lab] : 'Escribí el nombre de', dato: fHTML(c.f, c.est), esFormula: true };
  }
  const respuesta = (ej) => (ej.dir === 'nf' ? fHTML(ej.c.f, ej.c.est) : ej.c.nom[ej.guia || ej.lab || ej.c.comun][0]);

  globalThis.NOMEN_MOTOR = {
    U: U, GRUPOS: GRUPOS, FAMILIAS: FAMILIAS, INDICE: INDICE, POR_FORMULA: POR_FORMULA, ELEM: ELEM,
    generar: generar, corregir: corregir, corregirNombre: corregirNombre, corregirFormula: corregirFormula,
    resolver: resolver, pista: pista, enunciado: enunciado, respuesta: respuesta, todosLosNombres: todosLosNombres,
    vistaFormula: vistaFormula, normNombre: normNombre, leerFormula: leerFormula, limpiarFormula: limpiarFormula,
    clave: clave, claveAtomos: claveAtomos, atomos: atomos, fHTML: fHTML, ejercicioFN: ejercicioFN, ejercicioNF: ejercicioNF,
  };
})();

// ============================================================
// NOMENCLATURA INORGÁNICA · generador de ejercicios con corrector (la parte que se ve)
// Dibuja el generador dentro de cada <div class="nmc" data-nomen>. Las cuentas y los textos de la
// corrección salen del motor (NOMEN_MOTOR); acá sólo están la pantalla y lo que elige el estudiante.
// ============================================================
(function () {
  'use strict';
  if (typeof document === 'undefined' || !globalThis.NOMEN_MOTOR) return;
  const N = globalThis.NOMEN_MOTOR;

  const GUARDADO = 'nomen-opciones';
  const SENTIDOS = [['fn', 'De la fórmula al nombre'], ['nf', 'Del nombre a la fórmula'], ['mix', 'Los dos']];
  const NOMEN = [['st', 'Stock'], ['tr', 'Tradicional'], ['si', 'Sistemática']];
  const TECLAS = { nf: ['(', ')', '2', '3', '4', '5', '6', '7'], fn: ['(I)', '(II)', '(III)', '(IV)', '(V)', '(VI)', '(VII)'] };
  const lista = (xs) => (xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + ' y ' + xs[xs.length - 1]);
  let cuenta = 0;

  function opcionesGuardadas() {
    const base = { dir: 'mix', grupos: N.GRUPOS.map((g) => g.id), nomen: { st: 1, tr: 1, si: 1 }, nivel: 0 };
    try {
      const o = JSON.parse(localStorage.getItem(GUARDADO) || 'null');
      if (!o) return base;
      if (SENTIDOS.some((s) => s[0] === o.dir)) base.dir = o.dir;
      const gs = (o.grupos || []).filter((id) => N.GRUPOS.some((g) => g.id === id));
      if (gs.length) base.grupos = gs;
      const nm = {};
      NOMEN.forEach((x) => { nm[x[0]] = o.nomen && o.nomen[x[0]] ? 1 : 0; });
      if (nm.st || nm.tr || nm.si) base.nomen = nm;
      base.nivel = o.nivel === 1 ? 1 : 0;
    } catch (e) { /* sin lugar donde guardar, se usan las de siempre */ }
    return base;
  }

  function armar(raiz) {
    const id = 'nmc' + (++cuenta);
    const cfg = opcionesGuardadas();
    const estado = { ej: null, abierto: false, errores: 0, pista: false, recientes: [] };
    const puntos = { hechos: 0, primera: 0, grupos: {} };

    const chip = (clase, valor, texto, activo) => '<button type="button" class="nmc-chip ' + clase + '" data-v="' + valor + '" aria-pressed="' + (activo ? 'true' : 'false') + '">' + texto + '</button>';
    raiz.innerHTML =
      '<div class="nmc-cab"><div class="nmc-t">Generador de ejercicios</div>' +
      '<p class="nmc-sub">Sale un compuesto al azar entre más de 600, escribís la respuesta y se corrige sola, con el porqué.</p></div>' +
      '<div class="nmc-ops"><button type="button" class="nmc-ops-b" aria-expanded="false" aria-controls="' + id + '-ops">' +
        '<span class="nmc-ops-t">Qué practicar</span><span class="nmc-ops-r"></span></button><div class="nmc-ops-c" id="' + id + '-ops" hidden>' +
        '<div class="nmc-grupo" role="group" aria-label="Sentido del ejercicio"><div class="nmc-rot">Sentido</div><div class="nmc-chips">' +
          SENTIDOS.map((s) => chip('nmc-dir', s[0], s[1], cfg.dir === s[0])).join('') + '</div></div>' +
        '<div class="nmc-grupo" role="group" aria-label="Familias de compuestos"><div class="nmc-rot">Familias</div><div class="nmc-chips">' +
          N.GRUPOS.map((g) => chip('nmc-fam', g.id, g.n, cfg.grupos.indexOf(g.id) >= 0)).join('') + '</div></div>' +
        '<div class="nmc-grupo" role="group" aria-label="Nomenclaturas"><div class="nmc-rot">Nomenclaturas</div><div class="nmc-chips">' +
          NOMEN.map((x) => chip('nmc-nom', x[0], x[1], !!cfg.nomen[x[0]])).join('') + '</div>' +
          '<p class="nmc-nota-op">La sistemática se pide sólo en los óxidos, salvo que sumes Química General.</p></div>' +
        '<label class="nmc-nivel"><input type="checkbox" class="nmc-cb"' + (cfg.nivel ? ' checked' : '') + '> <span>Sumar lo que es sólo de Química General <span class="cod">CB103</span></span></label>' +
      '</div></div>' +
      '<div class="nmc-ej">' +
        '<p class="nmc-pide" id="' + id + '-pide"></p><p class="nmc-dato" id="' + id + '-dato"></p>' +
        '<form class="nmc-form" novalidate>' +
          '<label class="nmc-lab" for="' + id + '-in">Tu respuesta</label>' +
          '<input class="nmc-in" id="' + id + '-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" maxlength="80" aria-describedby="' + id + '-pide ' + id + '-dato">' +
          '<div class="nmc-vista" aria-hidden="true"></div>' +
          '<div class="nmc-teclas" role="group" aria-label="Teclas rápidas"></div>' +
          '<div class="nmc-bot"><button type="submit" class="nmc-b nmc-b1">Corregir</button>' +
          '<button type="button" class="nmc-b nmc-pista">Pista</button><button type="button" class="nmc-b nmc-ver">Ver la respuesta</button></div>' +
        '</form>' +
        '<div class="nmc-fb" role="status" aria-live="polite"></div>' +
        '<div class="nmc-res" hidden></div>' +
        '<div class="nmc-voz" role="status" aria-live="polite"></div>' +
      '</div>' +
      '<div class="nmc-pie" hidden><span class="nmc-puntos"></span><button type="button" class="nmc-cero">Empezar de cero</button></div>';

    const q = (s) => raiz.querySelector(s);
    const entrada = q('.nmc-in'), fb = q('.nmc-fb'), res = q('.nmc-res'), vista = q('.nmc-vista'), teclas = q('.nmc-teclas');
    const botones = [q('.nmc-b1'), q('.nmc-pista'), q('.nmc-ver')];

    // ---------- lo que se elige
    function resumen() {
      const fams = cfg.grupos.length === N.GRUPOS.length ? 'todas las familias'
        : cfg.grupos.length === 1 ? N.GRUPOS.filter((g) => g.id === cfg.grupos[0])[0].n.toLowerCase() : cfg.grupos.length + ' familias';
      const sentido = { fn: 'de la fórmula al nombre', nf: 'del nombre a la fórmula', mix: 'en los dos sentidos' }[cfg.dir];
      const noms = NOMEN.filter((x) => cfg.nomen[x[0]]).map((x) => (x[0] === 'st' ? x[1] : x[1].toLowerCase()));
      q('.nmc-ops-r').textContent = fams + ', ' + sentido + ', ' + lista(noms) + (cfg.nivel ? ', con Química General' : '');
    }
    function guardar() {
      try { localStorage.setItem(GUARDADO, JSON.stringify(cfg)); } catch (e) { /* no pasa nada si no se puede */ }
    }
    function pintarChips() {
      raiz.querySelectorAll('.nmc-dir').forEach((c) => c.setAttribute('aria-pressed', String(c.dataset.v === cfg.dir)));
      raiz.querySelectorAll('.nmc-fam').forEach((c) => c.setAttribute('aria-pressed', String(cfg.grupos.indexOf(c.dataset.v) >= 0)));
      raiz.querySelectorAll('.nmc-nom').forEach((c) => c.setAttribute('aria-pressed', String(!!cfg.nomen[c.dataset.v])));
    }
    q('.nmc-ops-b').addEventListener('click', () => {
      const cerrado = q('.nmc-ops-c').hidden;
      q('.nmc-ops-c').hidden = !cerrado;
      q('.nmc-ops-b').setAttribute('aria-expanded', String(cerrado));
    });
    q('.nmc-ops-c').addEventListener('click', (ev) => {
      const c = ev.target.closest('.nmc-chip');
      if (!c) return;
      const v = c.dataset.v, antes = JSON.stringify(cfg);
      if (c.classList.contains('nmc-dir')) cfg.dir = v;
      else if (c.classList.contains('nmc-fam')) {
        const i = cfg.grupos.indexOf(v);
        if (i < 0) cfg.grupos = N.GRUPOS.map((g) => g.id).filter((g) => g === v || cfg.grupos.indexOf(g) >= 0);
        else if (cfg.grupos.length > 1) cfg.grupos.splice(i, 1);          // siempre queda una
      } else {
        const queda = NOMEN.filter((x) => cfg.nomen[x[0]] && x[0] !== v).length;
        if (!cfg.nomen[v]) cfg.nomen[v] = 1;
        else if (queda) cfg.nomen[v] = 0;                                   // siempre queda una
      }
      pintarChips();
      if (JSON.stringify(cfg) === antes) return;
      resumen(); guardar(); nuevo(false);
    });
    q('.nmc-cb').addEventListener('change', (ev) => { cfg.nivel = ev.target.checked ? 1 : 0; resumen(); guardar(); nuevo(false); });

    // ---------- un ejercicio
    function nuevo(conFoco) {
      const ej = N.generar(cfg, Math.random, estado.recientes);
      estado.ej = ej; estado.abierto = true; estado.errores = 0; estado.pista = false;
      estado.recientes.push(ej.c.id);
      if (estado.recientes.length > 14) estado.recientes.shift();
      const e = N.enunciado(ej);
      q('.nmc-pide').textContent = e.pide + ':';
      q('.nmc-dato').innerHTML = e.dato;
      q('.nmc-dato').classList.toggle('nmc-formula', e.esFormula);
      entrada.value = ''; entrada.disabled = false;
      entrada.placeholder = ej.dir === 'nf' ? 'La fórmula, por ejemplo Ca(OH)2' : 'El nombre, por ejemplo óxido de sodio';
      entrada.classList.toggle('nmc-in-f', ej.dir === 'nf');
      vista.textContent = '';
      vista.hidden = ej.dir !== 'nf';                    // la lectura de lo escrito sólo sirve para las fórmulas
      teclas.innerHTML = TECLAS[ej.dir].map((t) => '<button type="button" class="nmc-tecla" tabindex="-1" data-t="' + t + '">' + t + '</button>').join('');
      botones.forEach((x) => { x.disabled = false; });
      fb.className = 'nmc-fb'; fb.innerHTML = '';
      res.hidden = true; res.innerHTML = '';
      q('.nmc-voz').textContent = '';
      if (conFoco) entrada.focus();
    }

    function aviso(clase, titulo, texto) {
      fb.className = 'nmc-fb nmc-fb-' + clase;
      fb.innerHTML = (titulo ? '<div class="nmc-fb-t">' + titulo + '</div>' : '') + '<div>' + texto + '</div>';
    }

    function cerrar(acerto, nota) {
      const ej = estado.ej, c = ej.c;
      estado.abierto = false;
      entrada.disabled = true;
      botones.forEach((x) => { x.disabled = true; });
      const primera = acerto && !estado.errores && !estado.pista;
      const g = N.FAMILIAS[c.fam].g;
      puntos.hechos++; if (primera) puntos.primera++;
      puntos.grupos[g] = puntos.grupos[g] || { n: 0, ok: 0 };
      puntos.grupos[g].n++; if (primera) puntos.grupos[g].ok++;
      fb.className = 'nmc-fb'; fb.innerHTML = '';
      const nombres = N.todosLosNombres(c, cfg.nivel);
      res.className = 'nmc-res ' + (acerto ? 'nmc-res-ok' : 'nmc-res-ver');
      res.innerHTML =
        '<div class="nmc-res-t">' + (acerto ? '¡Correcto!' : 'La respuesta') + '</div>' +
        '<p class="nmc-resp"><b>' + N.fHTML(c.f, c.est) + '</b> es ' + N.FAMILIAS[c.fam].art + ' ' + N.FAMILIAS[c.fam].n + ': <b>' + (ej.dir === 'nf' ? ej.mostrado : N.respuesta(ej)) + '</b>.</p>' +
        (nota ? '<p class="nmc-nota">' + nota + '</p>' : '') +
        '<div class="nmc-sec">Cómo se llega</div><div class="nmc-pasos" role="list">' +
          N.resolver(ej).map((p, i) => '<div class="nmc-paso" role="listitem"><span class="nmc-n">' + (i + 1) + '</span><div>' + p + '</div></div>').join('') + '</div>' +
        (nombres.length > 1 || nombres[0][1].length > 1 ? '<div class="nmc-sec">Sus nombres</div><div class="nmc-nombres" role="list">' +
          nombres.map((x) => '<div class="nmc-nombre" role="listitem"><span>' + x[0] + '</span><div>' + x[1].join('<br>') + '</div></div>').join('') + '</div>' : '') +
        '<button type="button" class="nmc-b nmc-b1 nmc-sig">Otro ejercicio</button>';
      res.hidden = false;
      // para quien usa lector de pantalla: el resultado, corto
      q('.nmc-voz').textContent = (acerto ? 'Correcto. ' : 'La respuesta: ') + N.fHTML(c.f, c.est).replace(/<[^>]+>/g, '') + ', ' + (ej.dir === 'nf' ? ej.mostrado : N.respuesta(ej)) + '.';
      pintarPuntos();
      const sig = q('.nmc-sig');
      sig.focus({ preventScroll: true });
      const quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (res.scrollIntoView) res.scrollIntoView({ block: 'nearest', behavior: quieto ? 'auto' : 'smooth' });
    }

    function pintarPuntos() {
      let t = '';
      if (puntos.hechos) {
        t = 'A la primera: ' + puntos.primera + ' de ' + puntos.hechos + '.';
        const flojos = N.GRUPOS.filter((g) => puntos.grupos[g.id] && puntos.grupos[g.id].n >= 3 && puntos.grupos[g.id].ok * 2 < puntos.grupos[g.id].n)
          .map((g) => g.n.toLowerCase());
        if (flojos.length) t += ' Para repasar: ' + lista(flojos) + '.';
      }
      q('.nmc-puntos').textContent = t;
      q('.nmc-pie').hidden = !puntos.hechos;
    }

    q('.nmc-form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      if (!estado.abierto) return;
      const r = N.corregir(estado.ej, entrada.value);
      if (r.v === 'ok') { cerrar(true, r.nota); return; }
      if (r.v === 'vacio') aviso('pista', '', 'Escribí tu respuesta y después tocá Corregir.');
      else if (r.v === 'casi') aviso('casi', 'Casi', r.msg);
      else { estado.errores++; aviso('mal', 'Todavía no', r.msg + ' Podés corregirla y probar de nuevo.'); }
      entrada.focus();
    });
    q('.nmc-pista').addEventListener('click', () => {
      if (!estado.abierto) return;
      estado.pista = true;
      aviso('pista', 'Pista', N.pista(estado.ej));
      entrada.focus();
    });
    q('.nmc-ver').addEventListener('click', () => { if (estado.abierto) { estado.errores++; cerrar(false, ''); } });
    res.addEventListener('click', (ev) => { if (ev.target.closest('.nmc-sig')) nuevo(true); });
    q('.nmc-cero').addEventListener('click', () => {
      puntos.hechos = 0; puntos.primera = 0; puntos.grupos = {};
      pintarPuntos();
      (estado.abierto ? entrada : q('.nmc-sig') || entrada).focus();      // el botón se esconde: el foco no queda en el aire
    });

    // ---------- escribir
    entrada.addEventListener('input', () => {
      const h = estado.ej && estado.ej.dir === 'nf' ? N.vistaFormula(entrada.value) : '';
      vista.innerHTML = h ? 'Se lee: <b>' + h + '</b>' : '';
    });
    // las teclas rápidas escriben donde está el cursor, sin sacar el teclado del celular
    teclas.addEventListener('pointerdown', (ev) => { if (ev.target.closest('.nmc-tecla')) ev.preventDefault(); });
    teclas.addEventListener('click', (ev) => {
      const t = ev.target.closest('.nmc-tecla');
      if (!t || entrada.disabled) return;
      let txt = t.dataset.t;
      const a = entrada.selectionStart === null ? entrada.value.length : entrada.selectionStart;
      const z = entrada.selectionEnd === null ? a : entrada.selectionEnd;
      if (txt.length > 1 && /[a-záéíóúñ]$/i.test(entrada.value.slice(0, a))) txt = ' ' + txt;      // "hierro" + " (III)"
      entrada.value = entrada.value.slice(0, a) + txt + entrada.value.slice(z);
      entrada.focus();
      entrada.setSelectionRange(a + txt.length, a + txt.length);
      entrada.dispatchEvent(new Event('input'));
    });

    resumen();
    pintarPuntos();
    nuevo(false);
  }

  function iniciar() {
    document.querySelectorAll('.nmc[data-nomen]').forEach((r) => {
      if (r.dataset.listo) return;
      r.dataset.listo = '1';
      armar(r);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
// ==== INTERACTIVO: NOMENCLATURA (fin) ====

// ==== INTERACTIVO: TABLA PERIODICA (inicio) ====
// Datos de los 118 elementos. Lo arma armar_datos.py: no se edita a mano.
// [Z, símbolo, nombre, masa atómica, tipo, estado a 25 °C, electronegatividad, radio en pm, clase de radio,
//  energía de ionización en kJ/mol, números de oxidación, configuración real según PubChem]
globalThis.TABLA_DATOS = [
  [1, "H", "hidrógeno", "1,008", "nm", "g", 2.1, 32, "c", 1312, "+1, −1", "1s1"],
  [2, "He", "helio", "4,0026", "gn", "g", null, 46, "c", 2372, "", "1s2"],
  [3, "Li", "litio", "6,94", "al", "s", 1.0, 152, "m", 520, "+1", "[He]2s1"],
  [4, "Be", "berilio", "9,0122", "at", "s", 1.5, 112, "m", 900, "+2", "[He]2s2"],
  [5, "B", "boro", "10,81", "md", "s", 2.0, 85, "c", 801, "+3", "[He]2s2 2p1"],
  [6, "C", "carbono", "12,011", "nm", "s", 2.5, 75, "c", 1086, "−4, +4 (+2 en el CO)", "[He]2s2 2p2"],
  [7, "N", "nitrógeno", "14,007", "nm", "g", 3.0, 71, "c", 1402, "−3, +3, +5", "[He] 2s2 2p3"],
  [8, "O", "oxígeno", "15,999", "nm", "g", 3.5, 63, "c", 1314, "−2 (−1 en los peróxidos)", "[He]2s2 2p4"],
  [9, "F", "flúor", "18,998", "ha", "g", 4.0, 64, "c", 1681, "−1", "[He]2s2 2p5"],
  [10, "Ne", "neón", "20,180", "gn", "g", null, 67, "c", 2081, "", "[He]2s2 2p6"],
  [11, "Na", "sodio", "22,990", "al", "s", 0.9, 186, "m", 496, "+1", "[Ne]3s1"],
  [12, "Mg", "magnesio", "24,305", "at", "s", 1.2, 160, "m", 738, "+2", "[Ne]3s2"],
  [13, "Al", "aluminio", "26,982", "mp", "s", 1.5, 143, "m", 578, "+3", "[Ne]3s2 3p1"],
  [14, "Si", "silicio", "28,085", "md", "s", 1.8, 116, "c", 787, "+4", "[Ne]3s2 3p2"],
  [15, "P", "fósforo", "30,974", "nm", "s", 2.1, 111, "c", 1012, "−3, +3, +5", "[Ne]3s2 3p3"],
  [16, "S", "azufre", "32,06", "nm", "s", 2.5, 103, "c", 1000, "−2, +4, +6", "[Ne]3s2 3p4"],
  [17, "Cl", "cloro", "35,45", "ha", "g", 3.0, 99, "c", 1251, "−1, +1, +3, +5, +7", "[Ne]3s2 3p5"],
  [18, "Ar", "argón", "39,95", "gn", "g", null, 96, "c", 1521, "", "[Ne]3s2 3p6"],
  [19, "K", "potasio", "39,098", "al", "s", 0.8, 227, "m", 419, "+1", "[Ar]4s1"],
  [20, "Ca", "calcio", "40,078", "at", "s", 1.0, 197, "m", 590, "+2", "[Ar]4s2"],
  [21, "Sc", "escandio", "44,956", "tr", "s", 1.3, 162, "m", 633, "+3", "[Ar]4s2 3d1"],
  [22, "Ti", "titanio", "47,867", "tr", "s", 1.5, 147, "m", 659, "+2, +3, +4", "[Ar]4s2 3d2"],
  [23, "V", "vanadio", "50,942", "tr", "s", 1.6, 134, "m", 651, "+2, +3, +4, +5", "[Ar]4s2 3d3"],
  [24, "Cr", "cromo", "51,996", "tr", "s", 1.6, 128, "m", 653, "+2, +3, +6", "[Ar]3d5 4s1"],
  [25, "Mn", "manganeso", "54,938", "tr", "s", 1.5, 127, "m", 717, "+2, +4, +7", "[Ar]4s2 3d5"],
  [26, "Fe", "hierro", "55,845", "tr", "s", 1.8, 126, "m", 762, "+2, +3", "[Ar]4s2 3d6"],
  [27, "Co", "cobalto", "58,933", "tr", "s", 1.9, 125, "m", 760, "+2, +3", "[Ar]4s2 3d7"],
  [28, "Ni", "níquel", "58,693", "tr", "s", 1.9, 124, "m", 737, "+2, +3", "[Ar]4s2 3d8"],
  [29, "Cu", "cobre", "63,546", "tr", "s", 1.9, 128, "m", 745, "+1, +2", "[Ar]4s1 3d10"],
  [30, "Zn", "cinc", "65,38", "tr", "s", 1.6, 134, "m", 906, "+2", "[Ar]4s2 3d10"],
  [31, "Ga", "galio", "69,723", "mp", "s", 1.6, 135, "m", 579, "+3", "[Ar]4s2 3d10 4p1"],
  [32, "Ge", "germanio", "72,630", "md", "s", 1.8, 121, "c", 762, "+2, +4", "[Ar]4s2 3d10 4p2"],
  [33, "As", "arsénico", "74,922", "md", "s", 2.0, 121, "c", 947, "−3, +3, +5", "[Ar]4s2 3d10 4p3"],
  [34, "Se", "selenio", "78,971", "nm", "s", 2.4, 116, "c", 941, "−2, +4, +6", "[Ar]4s2 3d10 4p4"],
  [35, "Br", "bromo", "79,904", "ha", "l", 2.8, 114, "c", 1140, "−1, +1, +3, +5, +7", "[Ar]4s2 3d10 4p5"],
  [36, "Kr", "kriptón", "83,798", "gn", "g", null, 117, "c", 1351, "", "[Ar]4s2 3d10 4p6"],
  [37, "Rb", "rubidio", "85,468", "al", "s", 0.8, 248, "m", 403, "+1", "[Kr]5s1"],
  [38, "Sr", "estroncio", "87,62", "at", "s", 1.0, 215, "m", 549, "+2", "[Kr]5s2"],
  [39, "Y", "itrio", "88,906", "tr", "s", 1.2, 180, "m", 600, "+3", "[Kr]5s2 4d1"],
  [40, "Zr", "circonio", "91,224", "tr", "s", 1.4, 160, "m", 640, "+4", "[Kr]5s2 4d2"],
  [41, "Nb", "niobio", "92,906", "tr", "s", 1.6, 146, "m", 652, "+3, +5", "[Kr]5s1 4d4"],
  [42, "Mo", "molibdeno", "95,95", "tr", "s", 1.8, 139, "m", 684, "+6", "[Kr]5s1 4d5"],
  [43, "Tc", "tecnecio", "[97]", "tr", "s", 1.9, 136, "m", 687, "+4, +6, +7", "[Kr]5s2 4d5"],
  [44, "Ru", "rutenio", "101,07", "tr", "s", 2.2, 134, "m", 710, "+3", "[Kr]5s1 4d7"],
  [45, "Rh", "rodio", "102,91", "tr", "s", 2.2, 134, "m", 720, "+3", "[Kr]5s1 4d8"],
  [46, "Pd", "paladio", "106,42", "tr", "s", 2.2, 137, "m", 804, "+2, +3", "[Kr]4d10"],
  [47, "Ag", "plata", "107,87", "tr", "s", 1.9, 144, "m", 731, "+1", "[Kr]5s1 4d10"],
  [48, "Cd", "cadmio", "112,41", "tr", "s", 1.7, 151, "m", 868, "+2", "[Kr]5s2 4d10"],
  [49, "In", "indio", "114,82", "mp", "s", 1.7, 167, "m", 558, "+3", "[Kr]5s2 4d10 5p1"],
  [50, "Sn", "estaño", "118,71", "mp", "s", 1.8, 140, "c", 709, "+2, +4", "[Kr]5s2 4d10 5p2"],
  [51, "Sb", "antimonio", "121,76", "md", "s", 1.9, 140, "c", 834, "−3, +3, +5", "[Kr]5s2 4d10 5p3"],
  [52, "Te", "telurio", "127,60", "md", "s", 2.1, 136, "c", 869, "−2, +4, +6", "[Kr]5s2 4d10 5p4"],
  [53, "I", "iodo", "126,90", "ha", "s", 2.5, 133, "c", 1008, "−1, +1, +3, +5, +7", "[Kr]5s2 4d10 5p5"],
  [54, "Xe", "xenón", "131,29", "gn", "g", null, 131, "c", 1170, "", "[Kr]5s2 4d10 5p6"],
  [55, "Cs", "cesio", "132,91", "al", "s", 0.7, 265, "m", 376, "+1", "[Xe]6s1"],
  [56, "Ba", "bario", "137,33", "at", "s", 0.9, 222, "m", 503, "+2", "[Xe]6s2"],
  [57, "La", "lantano", "138,91", "la", "s", 1.1, 187, "m", 538, "+3", "[Xe]6s2 5d1"],
  [58, "Ce", "cerio", "140,12", "la", "s", 1.1, 181, "m", 534, "+3, +4", "[Xe]6s2 4f1 5d1"],
  [59, "Pr", "praseodimio", "140,91", "la", "s", 1.1, 182, "m", 527, "+3", "[Xe]6s2 4f3"],
  [60, "Nd", "neodimio", "144,24", "la", "s", 1.1, 181, "m", 533, "+3", "[Xe]6s2 4f4"],
  [61, "Pm", "prometio", "[145]", "la", "s", null, 183, "m", 535, "+3", "[Xe]6s2 4f5"],
  [62, "Sm", "samario", "150,36", "la", "s", 1.2, 180, "m", 545, "+2, +3", "[Xe]6s2 4f6"],
  [63, "Eu", "europio", "151,96", "la", "s", null, 180, "m", 547, "+2, +3", "[Xe]6s2 4f7"],
  [64, "Gd", "gadolinio", "157,25", "la", "s", 1.2, 180, "m", 593, "+3", "[Xe]6s2 4f7 5d1"],
  [65, "Tb", "terbio", "158,93", "la", "s", null, 177, "m", 566, "+3", "[Xe]6s2 4f9"],
  [66, "Dy", "disprosio", "162,50", "la", "s", 1.2, 178, "m", 573, "+3", "[Xe]6s2 4f10"],
  [67, "Ho", "holmio", "164,93", "la", "s", 1.2, 176, "m", 581, "+3", "[Xe]6s2 4f11"],
  [68, "Er", "erbio", "167,26", "la", "s", 1.2, 176, "m", 589, "+3", "[Xe]6s2 4f12"],
  [69, "Tm", "tulio", "168,93", "la", "s", 1.3, 175, "m", 597, "+3", "[Xe]6s2 4f13"],
  [70, "Yb", "iterbio", "173,05", "la", "s", null, 176, "m", 603, "+2, +3", "[Xe]6s2 4f14"],
  [71, "Lu", "lutecio", "174,97", "la", "s", 1.3, 173, "m", 524, "+3", "[Xe]6s2 4f14 5d1"],
  [72, "Hf", "hafnio", "178,49", "tr", "s", 1.3, 159, "m", 659, "+4", "[Xe]6s2 4f14 5d2"],
  [73, "Ta", "tantalio", "180,95", "tr", "s", 1.5, 146, "m", 728, "+5", "[Xe]6s2 4f14 5d3"],
  [74, "W", "wolframio", "183,84", "tr", "s", 1.7, 139, "m", 759, "+6", "[Xe]6s2 4f14 5d4"],
  [75, "Re", "renio", "186,21", "tr", "s", 1.9, 137, "m", 760, "+4, +6, +7", "[Xe]6s2 4f14 5d5"],
  [76, "Os", "osmio", "190,23", "tr", "s", 2.2, 135, "m", 814, "+3, +4", "[Xe]6s2 4f14 5d6"],
  [77, "Ir", "iridio", "192,22", "tr", "s", 2.2, 135, "m", 865, "+3, +4", "[Xe]6s2 4f14 5d7"],
  [78, "Pt", "platino", "195,08", "tr", "s", 2.2, 138, "m", 864, "+2, +4", "[Xe]6s1 4f14 5d9"],
  [79, "Au", "oro", "196,97", "tr", "s", 2.4, 144, "m", 890, "+1, +3", "[Xe]6s1 4f14 5d10"],
  [80, "Hg", "mercurio", "200,59", "tr", "l", 1.9, 151, "m", 1007, "+1, +2", "[Xe]6s2 4f14 5d10"],
  [81, "Tl", "talio", "204,38", "mp", "s", 1.8, 170, "m", 589, "+1, +3", "[Xe]6s2 4f14 5d10 6p1"],
  [82, "Pb", "plomo", "207,2", "mp", "s", 1.9, 144, "c", 716, "+2, +4", "[Xe]6s2 4f14 5d10 6p2"],
  [83, "Bi", "bismuto", "208,98", "mp", "s", 1.9, 151, "c", 703, "+3, +5", "[Xe]6s2 4f14 5d10 6p3"],
  [84, "Po", "polonio", "[209]", "mp", "s", 2.0, 145, "c", 812, "+2, +4", "[Xe]6s2 4f14 5d10 6p4"],
  [85, "At", "astato", "[210]", "ha", "s", 2.2, 147, "c", 899, "−1, +1, +3, +5, +7", "[Xe]6s2 4f14 5d10 6p5"],
  [86, "Rn", "radón", "[222]", "gn", "g", null, 142, "c", 1037, "", "[Xe]6s2 4f14 5d10 6p6"],
  [87, "Fr", "francio", "[223]", "al", "s", 0.7, null, "", 393, "+1", "[Rn]7s1"],
  [88, "Ra", "radio", "[226]", "at", "s", 0.9, 201, "c", 509, "+2", "[Rn]7s2"],
  [89, "Ac", "actinio", "[227]", "ac", "s", 1.1, 186, "c", 519, "+3", "[Rn]7s2 6d1"],
  [90, "Th", "torio", "232,04", "ac", "s", 1.3, 179, "m", 609, "+4", "[Rn]7s2 6d2"],
  [91, "Pa", "protactinio", "231,04", "ac", "s", 1.5, 163, "m", 568, "+4, +5", "[Rn]7s2 5f2 6d1"],
  [92, "U", "uranio", "238,03", "ac", "s", 1.4, 156, "m", 598, "+3, +4, +5, +6", "[Rn]7s2 5f3 6d1"],
  [93, "Np", "neptunio", "[237]", "ac", "s", 1.4, 155, "m", 605, "+3, +4, +5, +6", "[Rn]7s2 5f4 6d1"],
  [94, "Pu", "plutonio", "[244]", "ac", "s", 1.3, 159, "m", 585, "+3, +4, +5, +6", "[Rn]7s2 5f6"],
  [95, "Am", "americio", "[243]", "ac", "s", 1.3, 173, "m", 578, "+3, +4, +5, +6", "[Rn]7s2 5f7"],
  [96, "Cm", "curio", "[247]", "ac", "s", 1.3, 174, "m", 581, "+3", "[Rn]7s2 5f7 6d1"],
  [97, "Bk", "berkelio", "[247]", "ac", "s", 1.3, 170, "m", 601, "+3, +4", "[Rn]7s2 5f9"],
  [98, "Cf", "californio", "[251]", "ac", "s", 1.3, 186, "m", 608, "+3", "[Rn]7s2 5f10"],
  [99, "Es", "einstenio", "[252]", "ac", "s", 1.3, 186, "m", 619, "+3", "[Rn]7s2 5f11"],
  [100, "Fm", "fermio", "[257]", "ac", "s", 1.3, null, "", 627, "+3", "[Rn] 5f12 7s2"],
  [101, "Md", "mendelevio", "[258]", "ac", "s", 1.3, null, "", 635, "+2, +3", "[Rn]7s2 5f13"],
  [102, "No", "nobelio", "[259]", "ac", "s", 1.3, null, "", 642, "+2, +3", "[Rn]7s2 5f14"],
  [103, "Lr", "lawrencio", "[266]", "ac", "s", 1.3, null, "", null, "+3", "[Rn]7s2 5f14 6d1"],
  [104, "Rf", "rutherfordio", "[267]", "tr", "", null, null, "", null, "", ""],
  [105, "Db", "dubnio", "[268]", "tr", "", null, null, "", null, "", ""],
  [106, "Sg", "seaborgio", "[269]", "tr", "", null, null, "", null, "", ""],
  [107, "Bh", "bohrio", "[270]", "tr", "", null, null, "", null, "", ""],
  [108, "Hs", "hasio", "[269]", "tr", "", null, null, "", null, "", ""],
  [109, "Mt", "meitnerio", "[278]", "tr", "", null, null, "", null, "", ""],
  [110, "Ds", "darmstatio", "[281]", "tr", "", null, null, "", null, "", ""],
  [111, "Rg", "roentgenio", "[282]", "tr", "", null, null, "", null, "", ""],
  [112, "Cn", "copernicio", "[285]", "tr", "", null, null, "", null, "", ""],
  [113, "Nh", "nihonio", "[286]", "mp", "", null, null, "", null, "", ""],
  [114, "Fl", "flerovio", "[289]", "mp", "", null, null, "", null, "", ""],
  [115, "Mc", "moscovio", "[290]", "mp", "", null, null, "", null, "", ""],
  [116, "Lv", "livermorio", "[293]", "mp", "", null, null, "", null, "", ""],
  [117, "Ts", "teneso", "[294]", "ha", "", null, null, "", null, "", ""],
  [118, "Og", "oganesón", "[294]", "gn", "", null, null, "", null, "", ""],
];

// ============================================================
// TABLA PERIÓDICA INTERACTIVA (motor)
// Con los datos de TABLA_DATOS arma, para cada elemento, la configuración electrónica por el orden de
// llenado, la CEE, el grupo, el período y el bloque con las reglas de la sección 3 de la guía, y las
// preguntas de comparación de propiedades. No toca la página: se expone en TABLA_MOTOR para probarlo aparte.
// ============================================================
(function () {
  'use strict';
  const D = globalThis.TABLA_DATOS;
  if (!D) return;
  const b = (t) => '<b>' + t + '</b>';
  const num = (v) => String(v).replace('.', ',');
  const may = (t) => t.charAt(0).toUpperCase() + t.slice(1);

  // orden de llenado: [n, l]. Cada subnivel lleva 2(2l + 1) electrones.
  const ORDEN = [[1, 0], [2, 0], [2, 1], [3, 0], [3, 1], [4, 0], [3, 2], [4, 1], [5, 0], [4, 2], [5, 1], [6, 0], [4, 3], [5, 2], [6, 1], [7, 0], [5, 3], [6, 2], [7, 1]];
  const L = 'spdf';
  const cabe = (l) => 2 * (2 * l + 1);
  const nombreSub = (x) => x.n + L[x.l];

  // configuración por el orden de llenado: [{n, l, e}]
  function configuracion(z) {
    const out = [];
    let quedan = z;
    for (let i = 0; i < ORDEN.length && quedan > 0; i++) {
      const e = Math.min(quedan, cabe(ORDEN[i][1]));
      out.push({ n: ORDEN[i][0], l: ORDEN[i][1], e: e });
      quedan -= e;
    }
    return out;
  }
  // la configuración real que da la fuente ("[Ar]3d5 4s1"), puesta en el orden de llenado
  const NUCLEOS = { He: 2, Ne: 10, Ar: 18, Kr: 36, Xe: 54, Rn: 86 };
  function configReal(texto) {
    if (!texto) return null;
    const mapa = {};
    const nuc = /^\[(\w+)\]/.exec(texto);
    if (nuc) configuracion(NUCLEOS[nuc[1]]).forEach((x) => { mapa[nombreSub(x)] = x.e; });
    (texto.match(/\d[spdf]\d+/g) || []).forEach((t) => { mapa[t.slice(0, 2)] = parseInt(t.slice(2), 10); });
    return ORDEN.map((o) => ({ n: o[0], l: o[1], e: mapa[o[0] + L[o[1]]] || 0 })).filter((x) => x.e > 0);
  }
  const igual = (a, c) => a.length === c.length && a.every((x, i) => x.n === c[i].n && x.l === c[i].l && x.e === c[i].e);
  // como la escribe la cátedra: (1s)2(2s)2(2p)6
  const ceHTML = (cfg) => cfg.map((x) => '<span class="tp-nb">(' + nombreSub(x) + ')<sup>' + x.e + '</sup></span>').join('<wbr>');
  const ceTexto = (cfg) => cfg.map((x) => '(' + nombreSub(x) + ')' + x.e).join('');

  // CEE: los subniveles del último nivel en adelante, sin los d y f completos si después hay algún electrón
  function cee(cfg) {
    const periodo = Math.max.apply(null, cfg.map((x) => x.n));
    const desde = cfg.findIndex((x) => x.n === periodo && x.l === 0);
    const externos = cfg.slice(desde);
    return externos.filter((x, i) => !(x.l >= 2 && x.e === cabe(x.l) && externos.slice(i + 1).some((y) => y.e > 0)));
  }

  // grupo, período y bloque con las reglas de la guía
  function ubicar(z, cfg) {
    const ult = cfg[cfg.length - 1], v = cee(cfg);
    const periodo = Math.max.apply(null, cfg.map((x) => x.n));
    const bloque = L[ult.l];
    const total = v.reduce((a, x) => a + x.e, 0);
    let grupo = null, como;
    if (z === 2) { grupo = 18; como = 'El helio va en el grupo 18 aunque su electrón diferenciador está en un s: su único nivel está completo y es inerte como los gases nobles.'; }
    else if (bloque === 's') { grupo = total; como = 'Electrón diferenciador en un s: el grupo es el número de electrones de la CEE, ' + b(total) + '.'; }
    else if (bloque === 'p') { grupo = total + 10; como = 'Electrón diferenciador en un p: el grupo es el número de electrones de la CEE más 10, ' + total + ' + 10 = ' + b(grupo) + '.'; }
    else if (bloque === 'd') {
      const s = v.filter((x) => x.l === 0)[0].e;
      grupo = s + ult.e;
      como = 'Electrón diferenciador en un d: el grupo es la suma de los electrones s y d, ' + s + ' + ' + ult.e + ' = ' + b(grupo) + '.';
    } else como = 'Electrón diferenciador en un f: no lleva número de grupo. Se ubica por el período, en las dos filas de abajo.';
    return { grupo: grupo, periodo: periodo, bloque: bloque, como: como, comoPeriodo: 'El nivel más alto de la CEE es el ' + periodo + ': período ' + b(periodo) + '.' };
  }

  const TIPOS = {
    al: { n: 'metal alcalino', c: 'metal' }, at: { n: 'metal alcalinotérreo', c: 'metal' }, tr: { n: 'metal de transición', c: 'metal' },
    mp: { n: 'metal del bloque p', c: 'metal' }, md: { n: 'metaloide', c: 'metaloide' }, nm: { n: 'no metal', c: 'no metal' },
    ha: { n: 'halógeno', c: 'no metal' }, gn: { n: 'gas noble', c: 'no metal' }, la: { n: 'lantánido', c: 'metal' }, ac: { n: 'actínido', c: 'metal' },
  };
  const ESTADOS = { s: 'sólido', l: 'líquido', g: 'gas' };
  const GRUPOS = { 1: 'alcalinos', 2: 'alcalinotérreos', 13: 'grupo del boro', 14: 'grupo del carbono', 15: 'grupo del nitrógeno', 16: 'calcógenos', 17: 'halógenos', 18: 'gases nobles' };

  const E = D.map((f) => {
    const cfg = configuracion(f[0]);
    const real = configReal(f[11]);
    // Cr y Cu se escriben con su configuración real (así lo pide la guía): su CEE y su ubicación salen de esa
    const base = (f[1] === 'Cr' || f[1] === 'Cu') && real ? real : cfg;
    const u = ubicar(f[0], base);
    return { z: f[0], s: f[1], n: f[2], masa: f[3], tipo: f[4], est: f[5], en: f[6], radio: f[7], claseRadio: f[8], ei: f[9], ox: f[10],
      cfg: cfg, cee: cee(base), real: real && !igual(real, cfg) ? real : null,
      grupo: u.grupo, periodo: u.periodo, bloque: u.bloque, como: u.como, comoPeriodo: u.comoPeriodo };
  });
  const porSimbolo = {};
  E.forEach((e) => { porSimbolo[e.s] = e; });

  // dónde va cada elemento en la grilla: fila y columna en la tabla entera y en la de representativos
  E.forEach((e) => {
    if (e.bloque === 'f') { e.fila = e.periodo + 3; e.col = 3 + e.z - (e.periodo === 6 ? 57 : 89); }
    else { e.fila = e.periodo; e.col = e.grupo; }
    e.rep = e.bloque === 's' || e.bloque === 'p';
    e.colRep = e.rep ? (e.grupo <= 2 ? e.grupo : e.grupo - 10) : null;
  });

  // ---------------------------------------------------------- propiedades periódicas
  const PROPS = {
    radio: { n: 'Radio atómico', u: 'pm', mayor: 'mayor radio atómico', per: 'disminuye', gru: 'aumenta',
      leyenda: 'El radio atómico disminuye a lo largo de un período, porque aumenta la carga nuclear efectiva, y aumenta al bajar en un grupo, porque hay una capa más. Cuanto más color, más grande.' },
    ei: { n: 'Energía de ionización', u: 'kJ/mol', mayor: 'mayor energía de ionización', per: 'aumenta', gru: 'disminuye',
      leyenda: 'La energía de ionización aumenta a lo largo de un período y disminuye al bajar en un grupo, con dos quiebres típicos: el B está por debajo del Be y el O por debajo del N. Cuanto más color, más energía.' },
    en: { n: 'Electronegatividad', u: '', mayor: 'mayor electronegatividad', per: 'aumenta', gru: 'disminuye',
      leyenda: 'La electronegatividad aumenta a lo largo de un período y disminuye al bajar en un grupo. El máximo es el flúor (4,0) y los gases nobles no tienen valor. Cuanto más color, más electronegativo.' },
  };
  const valor = (e, p) => (p === 'radio' ? e.radio : p === 'ei' ? e.ei : e.en);
  const RANGOS = {};
  Object.keys(PROPS).forEach((p) => {
    const vs = E.map((e) => valor(e, p)).filter((v) => v !== null && v !== undefined);
    RANGOS[p] = [Math.min.apply(null, vs), Math.max.apply(null, vs)];
  });
  // de 0 a 5 para pintar el mapa; null si no hay dato
  function nivel(e, p) {
    const v = valor(e, p);
    if (v === null || v === undefined) return null;
    const r = RANGOS[p];
    return Math.min(5, Math.floor(6 * (v - r[0]) / (r[1] - r[0])));
  }
  const valorTexto = (e, p) => {
    const v = valor(e, p);
    return v === null || v === undefined ? 'sin dato' : num(p === 'en' ? v.toFixed(1) : v) + (PROPS[p].u ? ' ' + PROPS[p].u : '');
  };

  // ---------------------------------------------------------- el juego: ¿cuál es mayor?
  // Sólo elementos representativos de los períodos 2 a 6, y sólo pares del mismo período o del mismo grupo en los que
  // el dato va en el sentido de la tendencia con margen. Los dos quiebres de la energía de ionización que enseña la
  // guía (Be y B, N y O) entran aparte, con su explicación.
  const QUIEBRES = { 'Be-B': 'El electrón externo del B está en un 2p, de más energía que el 2s del Be, y por eso cuesta menos sacarlo.',
    'N-O': 'En el O hay dos electrones en un mismo orbital 2p, y esa repulsión facilita sacar uno. El N tiene sus tres 2p con un electrón cada uno.' };
  const PARES = {};
  Object.keys(PROPS).forEach((p) => {
    const cand = E.filter((e) => e.rep && e.periodo >= 2 && e.periodo <= 6 && valor(e, p) !== null && valor(e, p) !== undefined && (p === 'ei' || e.tipo !== 'gn') &&
      !(p !== 'ei' && e.periodo === 6 && e.bloque === 'p'));      // del Tl al At los datos cambian mucho de una tabla a otra
    const out = [];
    cand.forEach((a) => cand.forEach((c) => {
      const mismoPer = a.periodo === c.periodo && a.grupo < c.grupo, mismoGru = a.grupo === c.grupo && a.periodo < c.periodo;
      if (!mismoPer && !mismoGru) return;
      const va = valor(a, p), vc = valor(c, p);
      // quién debería ser mayor según la tendencia: a es el de la izquierda (o el de arriba)
      const creceDerecha = PROPS[p].per === 'aumenta';
      const esperado = mismoPer ? (creceDerecha ? c : a) : (PROPS[p].gru === 'aumenta' ? c : a);
      const real = va > vc ? a : c;
      const margen = Math.abs(va - vc) / Math.max(va, vc);
      if (p === 'ei' && QUIEBRES[a.s + '-' + c.s]) out.push({ p: p, a: a, c: c, gana: real, tipo: 'quiebre' });
      else if (real === esperado && va !== vc && margen >= 0.08) out.push({ p: p, a: a, c: c, gana: real, tipo: mismoPer ? 'periodo' : 'grupo' });
    }));
    PARES[p] = out;
  });

  function pregunta(azar, cuales) {
    azar = azar || Math.random;
    const ps = (cuales && cuales.length ? cuales : Object.keys(PROPS));
    const p = ps[Math.floor(azar() * ps.length)];
    const par = PARES[p][Math.floor(azar() * PARES[p].length)];
    const alReves = azar() < 0.5;
    return { p: p, uno: alReves ? par.c : par.a, otro: alReves ? par.a : par.c, gana: par.gana, tipo: par.tipo, a: par.a, c: par.c };
  }
  function explicar(q) {
    const P = PROPS[q.p], a = q.a, c = q.c;
    const datos = ' ' + a.s + ': ' + valorTexto(a, q.p) + '. ' + c.s + ': ' + valorTexto(c, q.p) + '.';
    if (q.tipo === 'quiebre') {
      return 'Es uno de los dos quiebres de la tendencia. Por estar más a la derecha, el ' + c.n + ' debería tener más energía de ionización, pero tiene menos. ' + QUIEBRES[a.s + '-' + c.s] + datos;
    }
    if (q.tipo === 'periodo') {
      const base = 'Están en el mismo período (' + a.periodo + '): tienen la misma cantidad de niveles, pero el ' + c.n + ' tiene más protones y más carga nuclear efectiva. ';
      if (q.p === 'radio') return base + 'Atrae más a sus electrones y es más chico: el radio disminuye hacia la derecha.' + datos;
      if (q.p === 'ei') return base + 'Retiene más a su electrón externo y cuesta más sacárselo: la energía de ionización aumenta hacia la derecha.' + datos;
      return base + 'Atrae más a los electrones de una unión: la electronegatividad aumenta hacia la derecha.' + datos;
    }
    const base = 'Están en el mismo grupo (' + a.grupo + '): el ' + c.n + ' tiene más niveles, así que sus electrones externos están más lejos del núcleo y más apantallados. ';
    if (q.p === 'radio') return base + 'Por eso es más grande: el radio aumenta al bajar en un grupo.' + datos;
    if (q.p === 'ei') return base + 'Por eso cuesta menos sacarle un electrón: la energía de ionización disminuye al bajar en un grupo.' + datos;
    return base + 'Por eso atrae menos a los electrones de una unión: la electronegatividad disminuye al bajar en un grupo.' + datos;
  }

  // ---------------------------------------------------------- la ficha de un elemento, en renglones [rótulo, texto]
  function ficha(e) {
    const filas = [];
    const t = TIPOS[e.tipo];
    // el At y el Ts son halógenos, pero la guía no los cuenta entre los no metales
    const clase = t.c !== t.n && e.tipo !== 'md' && e.s !== 'At' && e.s !== 'Ts' ? ' (' + t.c + ')' : '';
    filas.push(['Tipo', may(t.n) + clase + (e.est ? ', ' + ESTADOS[e.est] + ' a 25 °C' : '')]);
    filas.push(['Ubicación', (e.grupo ? 'Grupo ' + e.grupo + (e.z === 1 ? ' (aunque no es un alcalino)' : GRUPOS[e.grupo] ? ' (' + GRUPOS[e.grupo] + ')' : '') : 'Sin número de grupo') + ', período ' + e.periodo + ', bloque ' + e.bloque]);
    filas.push(['CE por el orden de llenado', ceHTML(e.cfg)]);
    if (e.real) {
      filas.push(['CE real', ceHTML(e.real) + '. ' + (e.s === 'Cr' || e.s === 'Cu'
        ? 'Es una de las dos excepciones que conviene saber: el d ' + (e.s === 'Cr' ? 'semilleno' : 'completo') + ' baja la energía. Si el enunciado no dice nada, se escribe esta.'
        : 'Es una excepción que no hace falta saber: alcanza con el orden de llenado.')]);
    }
    filas.push(['CEE', ceHTML(e.cee)]);
    filas.push(['Cómo se ubica', e.comoPeriodo + ' ' + e.como]);
    filas.push(['Radio atómico', e.radio ? num(e.radio) + ' pm (' + (e.claseRadio === 'm' ? 'metálico' : 'covalente') + ')' : 'sin dato']);
    filas.push(['Energía de ionización', e.ei ? num(e.ei) + ' kJ/mol' : 'sin dato']);
    filas.push(['Electronegatividad', e.en !== null && e.en !== undefined ? num(e.en.toFixed(1)) : e.tipo === 'gn' ? 'no tiene (gas noble)' : 'sin dato']);
    if (e.ox) filas.push(['Números de oxidación', e.ox]);
    return filas;
  }

  globalThis.TABLA_MOTOR = { E: E, porSimbolo: porSimbolo, TIPOS: TIPOS, PROPS: PROPS, PARES: PARES, ORDEN: ORDEN,
    configuracion: configuracion, cee: cee, ubicar: ubicar, ceHTML: ceHTML, ceTexto: ceTexto, nivel: nivel, valor: valor,
    valorTexto: valorTexto, pregunta: pregunta, explicar: explicar, ficha: ficha };
})();

// ============================================================
// TABLA PERIÓDICA INTERACTIVA (la parte que se ve)
// Dibuja la tabla dentro de cada <div class="tp" data-tabla>: la grilla de elementos, lo que muestran los
// colores, la ficha del elemento elegido y las preguntas de "¿cuál es mayor?". Los datos y las reglas
// salen del motor (TABLA_MOTOR).
// ============================================================
(function () {
  'use strict';
  if (typeof document === 'undefined' || !globalThis.TABLA_MOTOR) return;
  const T = globalThis.TABLA_MOTOR;
  const MODOS = [['tipo', 'Familias'], ['bloque', 'Bloques'], ['radio', 'Radio'], ['ei', 'Energía de ionización'], ['en', 'Electronegatividad']];
  const ORDEN_TIPOS = ['al', 'at', 'tr', 'mp', 'md', 'nm', 'ha', 'gn', 'la', 'ac'];
  const may = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  let cuenta = 0;

  function armar(raiz) {
    const id = 'tp' + (++cuenta);
    const est = { modo: 'tipo', toda: raiz.clientWidth - 36 >= 720, sel: null, q: null, respondida: false, hechas: 0, bien: 0 };

    raiz.innerHTML =
      '<div class="tp-cab"><div class="tp-t">Tabla periódica</div>' +
      '<div class="tp-sub">Tocá un elemento para ver sus datos y cómo se ubica a partir de su configuración. Con los botones elegís qué muestran los colores.</div></div>' +
      '<div class="tp-modos" role="group" aria-label="Qué muestran los colores">' +
        MODOS.map((m) => '<button type="button" class="tp-chip" data-m="' + m[0] + '" aria-pressed="' + (m[0] === est.modo) + '">' + m[1] + '</button>').join('') + '</div>' +
      '<div class="tp-leyenda" aria-live="polite"></div>' +
      '<div class="tp-marco" tabindex="-1"><div class="tp-grilla" role="group" aria-label="Tabla periódica de los elementos"></div></div>' +
      '<div class="tp-barra"><button type="button" class="tp-b tp-ver"></button><span class="tp-aviso"></span></div>' +
      '<div class="tp-lu" hidden>Con el orden de llenado, el Lu y el Lr quedan en el grupo 3. Muchas tablas los dibujan abajo, junto a los lantánidos y los actínidos.</div>' +
      '<div class="tp-ficha"></div>' +
      '<div class="tp-juego"><div class="tp-j-t">¿Cuál es mayor?</div><div class="tp-j-p"></div>' +
        '<div class="tp-j-ops"></div><div class="tp-j-fb" role="status" aria-live="polite"></div>' +
        '<div class="tp-j-pie"><button type="button" class="tp-b tp-b1 tp-j-sig" hidden>Otra pregunta</button><span class="tp-j-puntos"></span></div></div>' +
      '<div class="tp-nota">Masas atómicas de la IUPAC. Energías de ionización de PubChem (NIH) y del NIST. Electronegatividad de Pauling, con los valores de la tabla clásica. El radio es el metálico en los metales y el covalente en los demás.</div>';

    const q = (s) => raiz.querySelector(s);
    const grilla = q('.tp-grilla'), fichaEl = q('.tp-ficha'), leyenda = q('.tp-leyenda');
    const celdas = {};

    // ---------- la grilla
    grilla.innerHTML =
      T.E.map((e) => '<button type="button" class="tp-e" data-z="' + e.z + '" tabindex="-1" aria-pressed="false" aria-label="' + may(e.n) + ', ' + e.s + ', número atómico ' + e.z + '">' +
        '<span class="tp-z" aria-hidden="true">' + e.z + '</span><span class="tp-s" aria-hidden="true">' + e.s + '</span></button>').join('');
    grilla.querySelectorAll('.tp-e').forEach((c) => { celdas[c.dataset.z] = c; });
    const cabeceras = [];
    for (let g = 1; g <= 18; g++) {
      const s = document.createElement('span');
      s.className = 'tp-g'; s.setAttribute('aria-hidden', 'true'); s.textContent = g;
      grilla.insertBefore(s, grilla.firstChild);
      cabeceras.push([g, s]);
    }
    const rotulosF = [['6', '57 a 70'], ['7', '89 a 102']].map((x, i) => {
      const s = document.createElement('span');
      s.className = 'tp-rf'; s.setAttribute('aria-hidden', 'true'); s.textContent = x[1];
      s.style.gridRow = String(10 + i); s.style.gridColumn = '1 / span 2';
      grilla.appendChild(s);
      return s;
    });

    const sep = document.createElement('span');
    sep.className = 'tp-sep'; sep.style.gridRow = '9'; sep.style.gridColumn = '1 / -1';
    grilla.appendChild(sep);
    const visible = (e) => est.toda || e.rep;
    // fila 1: los números de grupo; filas 2 a 8: los períodos; fila 9: separación; filas 10 y 11: el bloque f
    const lugar = (e) => (est.toda ? [e.bloque === 'f' ? e.periodo + 4 : e.periodo + 1, e.col] : [e.periodo + 1, e.colRep]);
    function pintarGrilla() {
      grilla.className = 'tp-grilla ' + (est.toda ? 'tp-toda' : 'tp-rep');
      cabeceras.forEach((x) => {
        const g = x[0], col = est.toda ? g : (g <= 2 ? g : g >= 13 ? g - 10 : 0);
        x[1].hidden = !col;
        x[1].style.gridRow = '1'; x[1].style.gridColumn = String(col || 1);
      });
      rotulosF.forEach((s) => { s.hidden = !est.toda; });
      sep.hidden = !est.toda;
      T.E.forEach((e) => {
        const c = celdas[e.z], v = visible(e);
        c.hidden = !v;
        if (!v) return;
        const l = lugar(e);
        c.style.gridRow = String(l[0]); c.style.gridColumn = String(l[1]);
        let clase = 'tp-e ';
        if (est.modo === 'tipo') clase += 'tp-c-' + e.tipo;
        else if (est.modo === 'bloque') clase += 'tp-k-' + e.bloque;
        else { const n = T.nivel(e, est.modo); clase += n === null ? 'tp-nd' : 'tp-n' + n; }
        if (est.sel === e) clase += ' tp-sel';
        if (est.q && (est.q.uno === e || est.q.otro === e)) clase += ' tp-duelo';
        c.className = clase;
        c.setAttribute('aria-pressed', String(est.sel === e));
      });
      const foco = est.sel && visible(est.sel) ? est.sel : T.E[0];
      T.E.forEach((e) => { celdas[e.z].tabIndex = e === foco ? 0 : -1; });
      q('.tp-ver').textContent = est.toda ? 'Ver sólo los representativos' : 'Ver toda la tabla';
      const marco = q('.tp-marco');
      q('.tp-aviso').textContent = est.toda && marco.scrollWidth > marco.clientWidth + 2 ? 'Deslizá la tabla de costado para ver el resto.' : '';
      q('.tp-lu').hidden = !est.toda;
    }

    function pintarLeyenda() {
      let h;
      if (est.modo === 'tipo') {
        const hay = {};
        T.E.filter(visible).forEach((e) => { hay[e.tipo] = 1; });
        h = '<div class="tp-chapas">' + ORDEN_TIPOS.filter((t) => hay[t]).map((t) => '<span class="tp-chapa"><i class="tp-c-' + t + '"></i>' + may(T.TIPOS[t].n) + '</span>').join('') + '</div>';
      } else if (est.modo === 'bloque') {
        const hayB = {};
        T.E.filter(visible).forEach((e) => { hayB[e.bloque] = 1; });
        h = '<div class="tp-chapas">' + ['s', 'p', 'd', 'f'].filter((k) => hayB[k]).map((k) => '<span class="tp-chapa"><i class="tp-k-' + k + '"></i>Bloque ' + k + '</span>').join('') + '</div>' +
          '<div class="tp-ley-t">El bloque lo da el subnivel donde entra el último electrón (el electrón diferenciador).</div>';
      } else {
        const P = T.PROPS[est.modo];
        const conDato = T.E.filter((e) => T.valor(e, est.modo) !== null && T.valor(e, est.modo) !== undefined);
        const orden = conDato.slice().sort((a, c) => T.valor(a, est.modo) - T.valor(c, est.modo));
        const min = orden[0], max = orden[orden.length - 1];
        h = '<div class="tp-escala"><span>' + min.s + ' ' + T.valorTexto(min, est.modo) + '</span>' +
          [0, 1, 2, 3, 4, 5].map((n) => '<i class="tp-n' + n + '"></i>').join('') + '<span>' + max.s + ' ' + T.valorTexto(max, est.modo) + '</span>' +
          '<span class="tp-chapa"><i class="tp-nd"></i>sin dato</span></div><div class="tp-ley-t">' + P.leyenda + '</div>';
      }
      leyenda.innerHTML = h;
    }

    // ---------- la ficha
    function pintarFicha() {
      const e = est.sel;
      if (!e) { fichaEl.innerHTML = '<div class="tp-f-vacia">Todavía no elegiste ningún elemento.</div>'; return; }
      const sinMasa = e.masa.charAt(0) === '[';
      fichaEl.innerHTML =
        '<div class="tp-f-cab"><div class="tp-f-sim tp-c-' + e.tipo + '"><span class="tp-f-z">' + e.z + '</span><span class="tp-f-s">' + e.s + '</span></div>' +
        '<div><div class="tp-f-n">' + may(e.n) + '</div><div class="tp-f-sub">Z = ' + e.z + ' · ' +
        (sinMasa ? 'no tiene masa atómica fija; número de masa de su isótopo de vida más larga: ' + e.masa.slice(1, -1) : 'masa atómica ' + e.masa) + '</div></div></div>' +
        '<div class="tp-f-filas">' + T.ficha(e).map((f) => '<div class="tp-f-fila"><span>' + f[0] + '</span><div>' + f[1] + '</div></div>').join('') + '</div>';
    }
    function elegir(e, conFoco) {
      est.sel = e;
      pintarGrilla(); pintarFicha();
      if (conFoco) celdas[e.z].focus({ preventScroll: true });
    }

    grilla.addEventListener('click', (ev) => {
      const c = ev.target.closest('.tp-e');
      if (!c) return;
      elegir(T.E[+c.dataset.z - 1], false);
      const r = fichaEl.getBoundingClientRect();
      if (r.top > window.innerHeight - 120 && fichaEl.scrollIntoView) {
        const quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        fichaEl.scrollIntoView({ block: 'nearest', behavior: quieto ? 'auto' : 'smooth' });
      }
    });
    // con el teclado: las flechas llevan al elemento vecino en esa dirección
    grilla.addEventListener('keydown', (ev) => {
      const paso = { ArrowLeft: [0, -1], ArrowRight: [0, 1], ArrowUp: [-1, 0], ArrowDown: [1, 0] }[ev.key];
      const c = ev.target.closest('.tp-e');
      if (!paso || !c) return;
      ev.preventDefault();
      const yo = T.E[+c.dataset.z - 1], l = lugar(yo);
      let mejor = null, dist = 1e9;
      T.E.filter(visible).forEach((e) => {
        if (e === yo) return;
        const m = lugar(e), df = m[0] - l[0], dc = m[1] - l[1];
        let d;
        if (paso[1]) {                                   // izquierda o derecha: el más cercano de la misma fila
          if (df !== 0 || dc * paso[1] <= 0) return;
          d = Math.abs(dc);
        } else {                                         // arriba o abajo: la fila más cercana y, en ella, la columna más cercana
          if (df * paso[0] <= 0) return;
          d = Math.abs(dc) * 100 + Math.abs(df);
        }
        if (d < dist) { dist = d; mejor = e; }
      });
      if (mejor) elegir(mejor, true);
    });

    raiz.querySelector('.tp-modos').addEventListener('click', (ev) => {
      const c = ev.target.closest('.tp-chip');
      if (!c || c.dataset.m === est.modo) return;
      est.modo = c.dataset.m;
      raiz.querySelectorAll('.tp-chip').forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.m === est.modo)));
      pintarGrilla(); pintarLeyenda();
    });
    q('.tp-ver').addEventListener('click', () => {
      est.toda = !est.toda;
      if (est.sel && !visible(est.sel)) { est.sel = null; pintarFicha(); }      // el elegido ya no está en la tabla
      pintarGrilla(); pintarLeyenda();
    });

    // ---------- ¿cuál es mayor?
    const ops = q('.tp-j-ops'), fb = q('.tp-j-fb'), sig = q('.tp-j-sig');
    function nuevaPregunta(conFoco) {
      est.q = T.pregunta(Math.random);
      est.respondida = false;
      q('.tp-j-p').innerHTML = '¿Cuál tiene <b>' + T.PROPS[est.q.p].mayor + '</b>?';
      ops.innerHTML = [est.q.uno, est.q.otro].map((e) => '<button type="button" class="tp-j-op" data-s="' + e.s + '"><b>' + e.s + '</b><span>' + e.n + '</span></button>').join('');
      fb.className = 'tp-j-fb'; fb.innerHTML = '';
      sig.hidden = true;
      pintarGrilla();
      if (conFoco) ops.querySelector('.tp-j-op').focus();
    }
    ops.addEventListener('click', (ev) => {
      const o = ev.target.closest('.tp-j-op');
      if (!o || est.respondida) return;
      est.respondida = true;
      const acerto = o.dataset.s === est.q.gana.s;
      est.hechas++; if (acerto) est.bien++;
      ops.querySelectorAll('.tp-j-op').forEach((x) => {
        x.disabled = true;
        if (x.dataset.s === est.q.gana.s) x.classList.add('tp-ok');
        else if (x === o) x.classList.add('tp-ko');
      });
      fb.className = 'tp-j-fb ' + (acerto ? 'tp-fb-ok' : 'tp-fb-ko');
      fb.innerHTML = '<div class="tp-fb-t">' + (acerto ? '¡Correcto!' : 'No: es el ' + est.q.gana.n) + '</div><div>' + T.explicar(est.q) + '</div>';
      q('.tp-j-puntos').textContent = 'Bien: ' + est.bien + ' de ' + est.hechas + '.';
      sig.hidden = false;
      sig.focus({ preventScroll: true });
      const quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (fb.scrollIntoView) fb.scrollIntoView({ block: 'nearest', behavior: quieto ? 'auto' : 'smooth' });
    });
    sig.addEventListener('click', () => nuevaPregunta(true));

    pintarLeyenda();
    pintarFicha();
    nuevaPregunta(false);
  }

  function iniciar() {
    document.querySelectorAll('.tp[data-tabla]').forEach((r) => {
      if (r.dataset.listo) return;
      // dentro de una sección plegada el ancho todavía es cero: se arma cuando se abre
      const plegado = r.closest('details:not([open])');
      if (plegado && !r.clientWidth) {
        plegado.addEventListener('toggle', function alAbrir() {
          if (plegado.open && !r.dataset.listo) { r.dataset.listo = '1'; armar(r); plegado.removeEventListener('toggle', alAbrir); }
        });
        return;
      }
      r.dataset.listo = '1';
      armar(r);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
// ==== INTERACTIVO: TABLA PERIODICA (fin) ====
