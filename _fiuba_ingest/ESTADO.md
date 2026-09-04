# ESTADO — Guías FIUBA, reconstrucción completa · TERMINADA

Spec: `PLAN-2026-08-19.md` · Auditoría del campus: `AUDITORIA-CAMPUS.md` · Fuentes: `INSUMOS.md`
Estilo obligatorio para los redactores: `BRIEF-ESTILO.md`

**Cinco materias, 12 guías publicadas.** Última verificación: **2026-09-04**, build en verde,
auditorías estructurales y de rutas sin hallazgos, y las páginas revisadas en el navegador en
escritorio y teléfono.

**2026-09-04 · las dos guías de Bioingeniería llevan figuras.** 16 diagramas de circuito en la madre
y 2 en el integrador, en **SVG inline** con `currentColor` y `var(--accent)`, así que siguen el tema
claro/oscuro y escalan solos. Se generan con `_figuras_bio.py` + `_figuras_bio_b.py` y se insertan
con `_insertar_figuras.py` (idempotente: detecta la figura por su `aria-label`). Para mirarlas sin
navegador, `_render_figuras.py` las pasa a PNG con PyMuPDF.

## Línea de base del campus · 2026-09-04

Módulos por curso, para comparar en el próximo chequeo. El inventario sale de
`core_courseformat_get_state` y quedó volcado en `_campus_20260904.json`.

| Curso | Materia | Módulos | Antes | Últ. chequeo |
|---|---|---|---|---|
| **1256** | **CB002 Álgebra Lineal (Palacios)** | **26** | 20 (25/8) | **4/9** |
| 1405 | CB110 Anatomía e Histología (Iurman) | 41 | 41 (25/8) | 4/9 |
| 198 | TB021/TA130 Algoritmos (Azcurra) | 146 | 146 (26/8) | 4/9 |
| **1269** | **TB063/TB157 Bioingeniería (Veiga)** | **104** | 72 (30/8) | **4/9** |
| 1259 | CB040 Química Básica (Boeykens) | 22 | 22 (25/8) | 25/8 |

> El 142 que figuraba antes para Algoritmos era un conteo viejo: contra el manifiesto del 26/8
> (146 actividades) el curso está **idéntico**, actividad por actividad. Lo único que cambió es
> el nombre del foro: «1er. Cuatrimestre 2026» → «**2do. Cuatrimestre 2026**».

En Anatomía **sigue sin haber** respiratorio, cardiovascular, digestivo ni urinario, el cronograma
de la etiqueta «Fechas importantes» está sin tocar y el último aviso del foro es de julio.

### Chequeo del 2026-09-04 · qué apareció, sin ingerir todavía

**Álgebra Lineal (1256) — 7 archivos nuevos, ninguno ingerido:**

- Sección **«Talleres»**, que antes no existía: **Taller 1** (clase 21/8), **2** (26/8), **3** (28/8),
  **4** (2/9) y **5** (4/9). Es material de clase a clase, del cuatrimestre en curso.
- En Unidad 1: **«clase teórica virtual 2-9-26»** y **«taller virtual 2-9-26»**.
- Aviso del foro del 1/9 (Palacios): **la clase del miércoles 2/9 fue virtual**, por Meet.

**Bioingeniería (1269) — 32 actividades nuevas desde el 30/8, ninguna ingerida:**

| Sección | Novedades |
|---|---|
| **Módulo 1** (23 → 33) | «Señales en el dominio del tiempo» + presentación · **«Señales fisiológicas bioeléctricas»** · **Osciloscopio** (presentación + laboratorio) · actividad obligatoria **«Resolver circuito con dos fuentes»** (página, últ. modificación 31/8) · video de potenciómetro |
| **Módulo 2** (nuevo, 5) | **Superposición** · **Fuentes de tensión y corriente** · **Ejercicios Incrementales Parte 3** |
| **Extras** (12) | Tutoriales de **LTspice** (2 wikis + video de simulación en DC), **KiCad**, **Falstad** (wiki + dos actividades optativas: tensión/corriente/resistores y fuentes/generadores), «Proto por dentro» |
| **Trabajos Prácticos** (4) | **«TP1 - Resistores (2C-2026)»** — el enunciado del TP de este cuatrimestre · y el TPG **partido en dos**: uno para Electrónica y **otro para Bioingeniería** · videos de diseño de PCBs para el TPG |

Además, el foro **«Armado de Grupos»** ya tiene el primer hilo (Grupo 1 - IIE, 3/9).

Nada desapareció ni se renombró en 1269: los 72 ítems del 30/8 siguen con el mismo cmid y el mismo
nombre.

**Qué de esto pide trabajo de guía**, por si se retoma: la actividad obligatoria del circuito con dos
fuentes y el TP1 del cuatrimestre son enunciados reales que hoy no están en la guía; Superposición y
Fuentes de tensión y corriente son material de cátedra sobre secciones que la guía **ya cubre**
(secciones 6 y 3), así que ahí lo que corresponde es contrastar, no agregar; y osciloscopio, señales
bioeléctricas y los simuladores son tema nuevo que la guía toca sólo de refilón.

### Bioingeniería (1269): novedades del 30/8, ingeridas

El aula se reorganizó y pasó de 3 a **5 secciones visibles**: se agregaron **Módulo 1** (23 items) y
**Cuestionarios** (2). Total 72 actividades; las secciones 2, 3, 4, 6 y 8 existen pero están ocultas.
El detalle actividad por actividad, con dónde quedó cada cosa en las guías, está en
`bio1269/COBERTURA.md`. Lo grueso:

- **"Presentación de la asignatura" cambió de archivo**: la parte b es la vieja (hash idéntico), pero
  la parte a es nueva — 29 diapositivas con la lista de instrumentos de evaluación (que **sí nombra
  el examen parcial**), el ciclo de Corrección #1 y #2 del escrito, plan/créditos/12 h semanales, ABP,
  los dos proyectos textuales, compromisos, normas de convivencia y los contenidos mínimos.
- **Apunte "Mediciones e incertidumbres"** (obligatorio para el TP1) con las Ec. 1 a 6. Trajo una
  **corrección de fondo a la guía**: la cátedra propaga incertidumbres **en cuadratura** (GUM), no
  linealmente. Las tres partes de la sección 2 que enseñaban la suma lineal quedaron con las dos.
- Presentaciones nuevas: **Multímetro DC** (DT-830D + tabla del Sonel CMM-10), **Ley de Ohm**,
  **Modelos** (R→P→F→M→C) y **Leyes de Kirchhoff** (55 diapositivas).
- **Cuestionario en clase** el 27/8, 15 min, 1 intento, revisión no permitida. Formato nuevo.
- Canales nuevos: grupo de Telegram, foro "Armado de Grupos", sala de Meet.
- **No se pudo bajar**: "Ejercicios incrementales" Partes 1 y 2 — apuntan a una actividad oculta.

## Lo que quedó

| # | Materia | Slug | Secciones | Items | Commit |
|---|---|---|---|---|---|
| 02 | Anatomía e Histología Funcional | `fiuba-anatomia` | 18 | 199 | `cc2d5c1` |
| 02 | · Primer parcial · 29/9 | `fiuba-anatomia-parcial` | 8 | 120 | `0b6576b` |
| 02 | · Segundo parcial · 17/11 | `fiuba-anatomia-segundo-parcial` | 8 | 106 | `0b6576b` |
| 01 | Álgebra Lineal | `fiuba-algebra-lineal` | 8 | 234 | `66b3139` |
| 01 | · Primer parcial · 21/10 | `fiuba-algebra-lineal-parcial` | 10 | 177 | `5d21174` |
| 01 | · Segundo parcial · 2/12 | `fiuba-algebra-lineal-segundo-parcial` | 10 | 81 | `5d21174` |
| 03 | Algoritmos y Programación I | `fiuba-algoritmos` | 12 | 255 | `71941fe` |
| 03 | · Parcial e integrador | `fiuba-algoritmos-parcial` | 7 | 60 | `c40b053` |
| 04 | Introducción a la Bioingeniería | `fiuba-electronica` | 12 | **257** | `6af8cc0` + Módulo 1 (30/8) |
| 04 | · Examen integrador | `fiuba-electronica-integrador` | 7 | 88 | `c049de8` |
| 05 | Química Básica | `fiuba-quimica` | 12 | 252 | `dc570ed` |
| 05 | · Examen libre | `fiuba-quimica-libre` | 7 | 124 | `dc570ed` |

Infraestructura: sitio partido en una página por materia (`24f943b`, `c8bafc1`, `f2ad0a1`).
Correcciones que trajo Ariel: `cff0fc2`. Revisión final en tres pasadas: `072f8b6`, `7b2eeaf`,
`e98e100`, `2925f9e`.

**Ojo con el slug de la 04:** la materia es **Introducción a la Bioingeniería (TB157)**; el curso
se dicta junto con Introducción a la Ing. Electrónica (TB063) y por eso el slug quedó
`fiuba-electronica`. El nombre visible sí dice Bioingeniería. No renombrar el slug sin migrar
también `m/fiuba-electronica.html`.

## Restricciones que pidió Ariel

- **No instalar ninguna aplicación.** El compilador de C ya está: `cl.exe` de Visual Studio
  Community 2022, verificado. Limitación conocida: MSVC no acepta `int v[n]` con `n` variable.
- **No entrar a cursos ajenos del campus.** El curso 1107 (Orecchia) resultó legible sin
  matricularse y no tiene parciales; los cursos 15 y 100 piden matriculación y no se tocan.

## Herramientas propias que quedaron en esta carpeta

| Script | Para qué |
|---|---|
| `_auditar_materias.py` | auditoría estructural de las materias: wraps vacíos, índices que no cierran, ids mal numerados, clases CSS inventadas, JS inválido |
| `_chequear_rutas.py` | verifica que ninguna ruta relativa del sitio generado quede rota |
| `_auditar_codeblock.py` | cuenta bloques de código y detecta la mezcla `<br>` + salto real |
| `_arreglar_codeblock.py` | convierte `div.code-block` en `pre.code-block` |
| `_verificar_banco.py` | chequea que las preguntas reales estén verbatim y con la clave intacta |
| `_ensamblar.py` | arma `seccion.html` + `ejercicios.js` desde las piezas de `build/<materia>/` |
| `_doc2txt.py` | extrae texto de `.doc` de Word 97 (Word COM se cuelga en esta máquina) |
| `_repartir.py` | reparte las 39 preguntas reales de Anatomía entre los dos parciales |
| `_veredictos.py` | resume los veredictos de los revisores de un run de workflow |
| `_algebra_guias.py`, `_algebra_resto.py` | parten y extraen el material de Álgebra |
| `_temas_hijas.py`, `_temas_hijas2.py` | generan el `theme.css` de cada guía hija |
| `wf_*.js` | los workflows de construcción, completado y revisión de cada materia |

`wf_revision_final.js` toma la lente por `args`: `{"pasada": 1}` hechos contra la fuente,
`2` coherencia entre guías, `3` lectura de estudiante en el navegador.

## Lecciones, para la próxima

- **`git add <directorio>` arrastra lo que no querés.** Pasó dos veces: una subió páginas cuyos
  fuentes no estaban commiteados, y otra se llevó **915 archivos** de material suelto. Agregar
  siempre por ruta, y **mirar `git show --stat` antes de pushear**.
- **Un `meta.json` sin commitear rompe las 41 páginas.** El drawer se arma con todas las materias
  y va en todas las páginas: cualquier cambio en cualquier `meta.json` las toca a todas.
- **Compilar encuentra lo que razonar no.** Los veredictos graves de Algoritmos fueron salidas
  publicadas como "reales" que ningún programa producía, y dos programas que no linkeaban.
- **Un workflow por vez.** Las veces que se agotó el límite fue por correr dos workflows de 12
  agentes en paralelo.
- **Que los revisores no lean archivos enteros.** Para verificar hechos, el método es extraer las
  afirmaciones con `Grep` y verificar ésas; leer 1 MB de guía agota el presupuesto sin verificar
  nada. Para revisar el render, medir en el navegador en vez de leer el HTML.
- **Los revisores también se equivocan.** En el conteo de encabezados de los 21 parciales de
  Álgebra, dos dieron números distintos y ninguno era correcto. Cuando dos verificaciones se
  contradicen, la desempata contar a mano.
- **Decirles que no toquen git.** Los agentes de una hija commitearon y pushearon solos. Salió
  bien, pero la publicación la decide el orquestador después de verificar.
- **El brief tiene que decir `pre.code-block`, no `div`.** El CSS define el selector sobre `pre`;
  con un `div` el programa colapsa en un renglón.

## Notas por materia

### 02 · Anatomía e Histología Funcional

La guía cubría citología, tejidos, endócrino y nervioso: menos de la mitad del programa. El
cronograma que apareció en el campus tiene **16 clases y dos parciales** (29/9 y 17/11).

Material que apareció y no estaba descargado: tres clases alojadas en **Google Slides/Docs**
(osteología, artrología y miología, biomecánica), una cuarta sobre sistema nervioso, cuatro papers,
y la carpeta de bibliografía en Drive con 11 capítulos que resultaron traer **1116 preguntas del
libro con solución**. Ese banco se usó como referencia de alcance y para verificar respuestas;
**no se copió**.

**Ocho de los 16 temas están escritos desde la bibliografía oficial**, no desde material de la
cátedra, porque a la fecha de la ingesta la cátedra no lo había publicado (son las clases del 15/9
en adelante). Está marcado en la guía. Cuando suban esas clases, conviene contrastar.

Limitación declarada: de las 13 preguntas reales del segundo parcial, casi todas son de endócrino
y nervioso. **De respiratorio, cardiovascular, digestivo y urinario no hay ninguna pregunta real.**

### 01 · Álgebra Lineal

Régimen: dos parciales de 5 problemas, se aprueba con 3. Primer parcial 21/10, segundo 2/12. Tres
recuperatorios, cada uno recupera **un** parcial. Se permite un **resumen manuscrito de 4 carillas**
y hay que justificar teóricamente todo resultado no visto en clase, con posible oral. Por eso la
guía va con demostraciones y propone qué escribir en cada carilla.

El PDF de guías trae las **cuatro** con capa de texto: Guía 1 en p.3, Guía 2 en p.13, Guía 3 en
p.24, Guía 4 en p.34. El `Guia 4.pdf` suelto es la misma Guía 4 escaneada.

**Aparecieron 14 segundos parciales reales**, diez del régimen actual, con encabezado impreso de la
cátedra. Están en `build/algebra/segundos_parciales_encontrados.md` y copiados junto al material del
campus. Salieron de carpetas públicas de Drive enlazadas desde `github.com/JoacoPorro/Algebra2`.
Quedan 12 más de 2016-2018 sin transcribir, por si hace falta ampliar el corpus.

Los 21 primeros parciales, contados a mano sobre los encabezados: 7 primeros parciales en fecha,
2 diferidos, 7 recuperatorios rotulados, 3 que dicen "Primer parcial (R)" pero están fechados
después de terminado el cuatrimestre (o sea recuperatorios) y 2 sin encabezado. Todos evalúan
unidades 1 a 3. La frecuencia de transformaciones lineales es **18/19, no 19/19**.

### 03 · Algoritmos y Programación I

**Dato que trajo Ariel de clase y que gobierna las dos guías: el profesor dijo que los ejercicios
del parcial los eligen de las guías**, quizá con el enunciado un poco más específico. Por eso la
madre no es material de apoyo: es el temario, con las 9 guías resueltas y **cada programa compilado
y ejecutado**. Y la hija entrena el "un poco más específico" agregando restricciones a cada
ejercicio.

La cátedra **no publica enunciados de parcial**: los siete archivos de la sección "Notas" son
planillas de calificaciones. Lo más cercano son las 12 consignas de tarea del campus, de las cuales
9 traen enunciado y 3 no.

### 04 · Introducción a la Bioingeniería

**Este cuatrimestre no hay parciales**: se aprueba con actividades obligatorias y un examen
integrador, y el método de evaluación pide **fundamentar las decisiones con los conceptos teóricos**,
no sólo llegar al número.

El corpus del integrador son 4 parciales reales (2018-2021) y los 5 coloquios de 2022 del zip
"DESAFÍO: parecen iguales, pero...". Los cinco coloquios son **el mismo circuito con una variación**
—qué resistor está cortocircuitado y el ciclo de trabajo— y la guía los pone lado a lado. Cuatro
ejes se repiten en los nueve exámenes (medición, respuesta en frecuencia, transitorio RC y máxima
transferencia) y cubren 51 de 66 ítems.

Tres errores del material quedaron documentados en vez de replicados: la fecha del coloquio 3
(dice 2022, es 2023, y se arrastra al 4 y al 5), el parcial 2020 que habla de cuatro preguntas
teniendo tres problemas, y que **la figura de la onda de los coloquios es un dibujo genérico
reutilizado y no está a escala** — la misma figura acompaña enunciados de 20 % y de 80 % de ciclo.

## Pendientes, ninguno bloqueante

1. **Anatomía**: contrastar los 8 temas escritos desde bibliografía cuando la cátedra publique esas
   clases.
2. **Álgebra**: quedan 12 segundos parciales de 2016-2018 sin transcribir.
3. **Algoritmos**: si alguna vez aparece un parcial real, esa guía mejora mucho.
4. **Ajeno a este trabajo**: `analisis-segundo-parcial` usa las clases `dl-btn`, `yes` y `no`, que
   no existen en `base.css`. El botón de descarga del PDF se ve como texto plano. El enlace
   funciona; es sólo cosmético.

## 05 · Química Básica (CB040) — agregada el 2026-08-25

Curso **1259**, la *página de asignatura* de la cátedra **Boeykens** (coordinación Saralegui). No es
un aula de curso: por eso es legible sin estar matriculado. Formato «Mosaico», o sea que cada
sección vive en `/course/section.php?id=…` y se renderiza por JS — **el fetch a `course/view.php`
siempre devuelve la portada**, hay que navegar a cada sección de verdad.

El material de estudio **no está en el campus**: está en un Drive de la cátedra que sólo abre con
cuenta `@fi.uba.ar`. Son 75 archivos, bajados a `Campus FIUBA\Contenido nuevo\05 - Quimica Basica
(Boeykens)\`: 32 teóricas, 17 guías de problemas, 11 exámenes, 8 ejercicios modelo de pilas y
electrólisis, 2 clases de apoyo y 5 documentos administrativos.

**Ojo con tres teóricas**: `T06B1-Prop.Líquidos`, `T06B2-Diag.Fases` y `T06C-Teorica Sólidos` **no
tienen capa de texto**. Hay que renderizarlas a PNG con PyMuPDF y leerlas visualmente.

### El régimen del libre, que gobierna la guía hija

Tres etapas **eliminatorias** en tres llamados distintos: práctico escrito en el 2º, laboratorio en
el 3º, teórico integrador en el 4º. **Una sola oportunidad**: si cae cualquiera, va 2 (dos) al SIU.
La inscripción son **dos trámites**: mail al departamento con copia a la coordinación 10 días antes
del 2º llamado, y anotarse en el SIU en el **LLAMADO 2 como «LIBRE»**. Falta uno y no hay mesa.

**Dos cosas que la cátedra no publica** y conviene preguntar en ese mail: con cuánto se aprueba la
etapa de laboratorio, y qué experiencias toman (el texto dice «las que el docente indique»).

### El corpus

**9 exámenes distintos de 11 archivos** (dos duplicados, confirmados por md5 del texto normalizado)
y **185 preguntas conceptuales en 16 bloques**. Los tres parciales de curso son **la misma plantilla**
con las variables cambiadas, por eso la guía los pone en tabla de tres columnas en vez de repetirlos.

Frecuencias contadas: termoquímica es el Ejercicio 2 en **8 de 9**; estequiometría encabeza **6 de 9**;
Lewis y fuerzas intermoleculares aparece pegado al Ejercicio 1 en **7 de 9**; ácido-base cierra **5 de 9**.
Por puntaje: termoquímica 236, ácido-base 193, estequiometría 129 y Lewis 85 — **643 de 900, el 71,4 %**.

Contraste que vale la pena: en el teórico integrador **electroquímica es el bloque más grande** (23 de
las 185 preguntas), y en la parte práctica casi no aparece. Es lo último que se dicta.

**Nueve erratas** en los enunciados, documentadas en vez de corregidas. La peor es el «óxido nítrico»
del Curso 1: el enunciado lo nombra así pero escribe N₂O₅, y **la respuesta del ítem c se invierte**
según qué especie tomes (con NO gana el amoníaco por puente de hidrógeno; el N₂O₅ es sólido a 25 °C).
La guía resuelve por **fuerzas**, que es lo que pide la consigna y da el mismo resultado con las dos.

### Lecciones de esta ingesta

- **El verificador tenía razón y yo no.** Dos entradas de `QUIMICA-VERIFICADO.md` estaban mal: conté
  el pentano como gas en el Δn (el enunciado dice «combustible **líquido**» tres veces y hierve a
  36 °C) y calculé el pH de equivalencia con datos de otro ejercicio. Las guías estaban bien. Si
  hubiera «corregido» las guías contra mi propia referencia, metía el error en cuatro archivos.
- **Una tabla índice escrita antes que las secciones queda corrida.** La de la madre describía un
  plan viejo: no tenía fila para §8 y partía §11 en dos. Hay que regenerarla **contra los archivos
  finales**, no contra el plan.
- **El programa analítico de CB040 no numera unidades.** El «las 11 unidades» que apareció en tres
  lugares era inventado. La fuente para semanas y evaluaciones es el **cronograma**, no el programa.
- **Las auditorías por lente funcionan, pero hay que correrlas hasta el final.** De cinco, dos
  cayeron por límite de sesión: justamente la de fidelidad a la fuente, que es la que habría
  encontrado las dos semanas mal (§9 decía «semana 9» siendo la 5; §11 «8, 10 y 11» siendo 8, 9 y 10).

## Auditoría de fidelidad a la fuente · 2026-08-25 (commit `f657688`)

Seis lentes sobre la fuente —citas verbatim, reglas del régimen, nombres de archivo, preguntas
conceptuales, material de terceros y números de la hija—, cada hallazgo pasado por un refutador.
39 confirmados, 7 refutados, 24 aplicados.

**La lección más cara: las grillas de corrección son imágenes embebidas en el PDF.** `get_text()` no
las ve, así que no están en `quimica_txt/`. Dos lentes concluyeron que la guía había inventado los
puntajes; las rendericé con PyMuPDF y las leí, y la guía tenía razón. Los nueve exámenes valen 100
puntos, la Parte B vale 48 en la integradora del 11/07/24 y 60 en la del 18/07/24, y los tres
parciales de curso tienen la grilla **idéntica** (11·11·13 / 12·8·15 / 13·7·10). El error real
estaba al revés: la madre decía «sin grilla» en cinco exámenes que sí la traen. Tabla completa en
`QUIMICA-VERIFICADO.md`.

**Segunda trampa de conteo**: «explique» y «justifique» llevan **q**, no **c**. Buscar el stem
`explic` da 4 y parece que la guía infló el número por seis. Caí en esto antes de darme cuenta.

Errores reales que sí había: la trampa del hidróxido de bario estaba mal planteada (olvidar el
factor 2 deja el ácido en exceso con pH 0,67, no base con pH 12,4); el factor del K<sub>p</sub> con
la R equivocada era 10² y no 10⁴; el C<sub>p</sub> aparece en seis de los nueve exámenes y no en
ocho; dos citas se habían acortado y se restituyeron verbatim; dos afirmaciones no tenían respaldo
en el material y se sacaron; y «186 preguntas conceptuales» eran 185, en cuatro lugares.

**Pendiente menor**: el cronograma de integradoras que publica la hija es el de julio-agosto de 2026
y **ya pasó**. Está declarado como tal y ahora dice dónde buscar las fechas vigentes, pero cuando la
cátedra publique el período siguiente conviene actualizarlo. El texto del campus quedó transcripto
en `QUIMICA-CORPUS.md` con su procedencia, que era lo que faltaba para poder auditarlo.

## Decisión de Ariel · 2026-08-25: la rinde libre, a fin de año

Confirmado por Ariel contra el texto del campus: **va a rendir Química Básica libre**, y **a fin de
año**. El campus dice «*los EXÁMENES LIBRES se toman en las fechas de los llamados regulares*», así
que el libre **no está atado al período de julio-agosto**: la FIUBA abre un período de integradoras
después de cada cuatrimestre y se puede elegir cualquiera. Lo que no se puede es partir las etapas
entre dos períodos, porque el 2º, 3º y 4º llamado tienen que ser los de la misma tanda.

Eso quedó escrito en la sección 1 de la hija, en un bloque propio, junto con la advertencia de que
los 10 días para mandar el mail se cuentan contra el calendario **del período que elija**, no contra
la tabla de julio-agosto de 2026 que la guía muestra como modelo de la forma.

La fecha exacta del período de fin de año **todavía no está publicada**: el cronograma de cursada
2C2026 llega hasta el 2do recuperatorio del 27/11 y las integradoras van aparte. Hay que mirarlas en
la sección «EVALUACIONES INTEGRADORAS» del curso 1259 cuando salgan.

**Ojo con la vigencia del documento de modalidad**: el que está publicado se titula «MODALIDAD DE
EXÁMENES LIBRES EN QUÍMICA BÁSICA CB040 - **2025**». Sigue siendo el vigente en el campus a agosto de
2026, y la guía lo marca como versión 2025.
