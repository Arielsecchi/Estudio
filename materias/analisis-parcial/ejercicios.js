registerExercises('analisis-parcial', '1', [
  {st: 'Si en el enunciado aparece "intervalo cerrado [a, b]" + "máximo y mínimo absolutos", la receta es:', opts: ['Calcular f\'(x) y verlo en cualquier punto', 'Aplicar Weierstrass: evaluar f en los bordes a, b y en los críticos interiores', 'Aplicar L\'Hôpital', 'Buscar la asíntota'], c: 1, ex: 'Cuando es intervalo cerrado y la función es continua, Weierstrass garantiza que existen extremos. Solo hay 3 lugares posibles: bordes (a, b) y críticos interiores. Evaluás f en todos y comparás.'},
  {st: 'Si te dan "la tangente a f en x₀ = 1 es y = 3x + 1", lo PRIMERO que anotás al margen es:', opts: ['f(1) = 1 y f\'(1) = 3', 'f\'(1) = 3 y f(1) = 4', 'f(3) = 1', 'No se puede saber sin más datos'], c: 1, ex: 'La pendiente ES la derivada: f\'(x₀) = m = 3. La tangente toca al gráfico en el punto: f(x₀) = m·x₀ + b = 3·1 + 1 = 4. Esos dos datos están escondidos en la tangente y son medio ejercicio gratis.'},
  {st: 'Reemplazás en el límite y obtenés "0/0". ¿Qué hacés?', opts: ['Eso es 0, listo', 'Eso es indeterminación: aplicá factorización, conjugado, notable o L\'Hôpital según el tipo', 'Aplicás siempre L\'Hôpital sin pensar', 'El límite no existe'], c: 1, ex: '0/0 es una indeterminación, no un valor. Hay que "levantarla" con la técnica que corresponde según los componentes: polinomios → factorizar; raíces → conjugado; trig/log/exp → notable o L\'Hôpital.'},
  {st: 'En la fórmula del e: lim (1 + α(x))^β(x), las condiciones son:', opts: ['α → 1 y β → 0', 'α → 0 y β → ∞', 'α y β → ∞', 'No hay condiciones'], c: 1, ex: 'La forma 1^∞ se aplica cuando la "parte chica" α tiende a 0 y el exponente β tiende a infinito. El resultado es e elevado al límite del producto α·β.'},
  {st: 'En "continuidad con parámetro", la receta es:', opts: ['Calcular f\'(x) y evaluarla', 'Calcular el límite, igualarlo a f(x₀), despejar el parámetro', 'Hacer Bolzano', 'Buscar las asíntotas'], c: 1, ex: 'Continuidad en x₀ pide que el límite cuando x → x₀ coincida con f(x₀). Como f(x₀) tiene el parámetro, calculás el límite (con la técnica que corresponda) y despejás.'}
]);

registerExercises('analisis-parcial', '2', [
  {st: '¿Por qué el primer paso del estudio de función es el dominio (y no la derivada)?', opts: ['Por costumbre', 'Porque cualquier crítico que encuentres después tiene que estar en el dominio para ser válido', 'No es importante el orden', 'Para ahorrar tinta'], c: 1, ex: 'Si calculás los críticos antes que el dominio, no podés filtrar los que caen fuera. Y eso es la trampa #1 en parciales: que aparezca un valor que anula f\' pero no está en el dominio (típico con ln o √).'},
  {st: 'Si f\'(x) = (x − 7)/(x − 4)², ¿cuál es el signo de f\' en (4, 7)?', opts: ['Positivo', 'Negativo', 'Cero', 'No se puede saber'], c: 1, ex: 'Denominador (x−4)² siempre positivo. Numerador (x−7) en (4, 7) es negativo. Producto: negativo. Por eso f decrece en (4, 7).'},
  {st: 'En el estudio de f(x) = 6x/(16x²+1), los puntos críticos son x = ±1/4. La imagen es:', opts: ['ℝ', '[f(−1/4), f(1/4)]', '(0, +∞)', '[0, +∞)'], c: 1, ex: 'Por la forma de f, decrece en (−∞, −1/4), crece en (−1/4, 1/4), decrece en (1/4, +∞). Min absoluto en x=−1/4, máx absoluto en x=1/4. Imagen entre esos dos valores: [−3/4, 3/4].'},
  {st: 'Para f(x) = √x · e^(−36x²+2), el dominio es:', opts: ['ℝ', '[0, +∞)', '(0, +∞)', 'ℝ − {0}'], c: 1, ex: 'La raíz pide x ≥ 0 (incluyendo el 0, donde √0 = 0 está bien definido). El exponencial está bien para todo x. Dominio: [0, +∞).'},
  {st: 'En f(x) = √x · e^(−36x²+2), la imagen es:', opts: ['(0, f(1/12)]', '[0, f(1/12)]', '(0, +∞)', 'ℝ'], c: 1, ex: 'f(0) = 0 (alcanzado). Crece hasta el máximo en x = 1/12 (alcanzado). Después decrece y tiende a 0 (no se alcanza otra vez). Imagen: [0, f(1/12)].'},
  {st: 'Para encontrar la imagen necesitás:', opts: ['Solo el dominio', 'Solo los críticos', 'Los valores en los críticos + los límites en los bordes del dominio', 'La derivada segunda'], c: 2, ex: 'La imagen es el conjunto de valores que f toma. Para mapearla: valores en críticos (techos y pisos locales) + límites en bordes (a dónde se va). Sin esos dos no podés cerrar el conjunto.'}
]);

registerExercises('analisis-parcial', '3', [
  {st: 'Para f(x) = (cos(5x) − 1)/x² con f(0) = k − 1/2 continua, k =', opts: ['12', '−12', '−25/2', '0'], c: 1, ex: 'Notable: (cos(5x)−1)/x² = −(1−cos(5x))/(5x)² · 25 → −1/2 · 25 = −25/2. Igualar: k − 1/2 = −25/2, despejar: k = −12.'},
  {st: 'Para f(x) = ln(1+x²)/(e^(x²)−1) con f(0) = 2a − 3 continua, a =', opts: ['1', '2', '3', '−2'], c: 1, ex: 'Sustitución u = x² → 0. Producto de notables: ln(1+u)/u → 1 y u/(e^u − 1) → 1, total → 1. Igualar: 2a − 3 = 1 → a = 2.'},
  {st: 'Si reemplazando en el límite obtenés algo finito (no indeterminación), ¿qué hacés?', opts: ['Aplicás L\'Hôpital igual', 'Ese es directamente el valor del límite', 'Conjugado', 'Reemplazar por otro valor'], c: 1, ex: 'L\'Hôpital se aplica SOLO con 0/0 o ∞/∞. Si el reemplazo da un número finito, no hay nada que "levantar". El límite simplemente vale ese número.'},
  {st: 'Para f(x) = a·sen²(ax)/x² con f(0) = 64 continua, a =', opts: ['4', '8', '64', '−4'], c: 0, ex: 'a·sen²(ax)/x² = a·(sen(ax))²/x² = a·a²·(sen(ax)/(ax))² → a³·1 = a³. Igualar: a³ = 64 → a = 4.'},
  {st: 'En continuidad con parámetro, ¿cuál es el último paso?', opts: ['Calcular el límite', 'Igualar a f(x₀)', 'Despejar el parámetro', 'Verificar que f sea continua en otros puntos'], c: 2, ex: 'La receta tiene 3 pasos: (1) calcular el límite, (2) igualar a f(x₀) que tiene el parámetro, (3) despejar. La verificación en otros puntos no es parte de este tipo (las funciones partidas son continuas en cada rama).'}
]);

registerExercises('analisis-parcial', '4', [
  {st: 'Tangente a f en x₀=1 es y = 3x+1. h(x) = 3 + f(7x + e^x). h\'(0) =', opts: ['3', '8', '24', '7'], c: 2, ex: 'f\'(1)=3, f(1)=4. Cadena: h\'(x) = f\'(7x+e^x)·(7+e^x). En x=0: argumento = 7·0+e^0 = 1 (¡cierra!), factor = 7+1 = 8. h\'(0) = f\'(1)·8 = 3·8 = 24.'},
  {st: 'Misma h del ejercicio anterior. La recta tangente a h en x₀=0 es:', opts: ['y = 24x', 'y = 24x + 7', 'y = 7x + 24', 'y = 3x + 7'], c: 1, ex: 'h(0) = 3 + f(1) = 3+4 = 7. Pendiente h\'(0) = 24. Tangente: y − 7 = 24(x − 0) → y = 24x + 7. NO te olvides del +7.'},
  {st: 'Tangente a f en x=1 es y = 8x − 6. h(x) = ln(f(x)) + e^sen(x−1). h\'(1) =', opts: ['8', '5', '2', '0'], c: 1, ex: 'f\'(1)=8, f(1)=2. h\'(x) = f\'(x)/f(x) + e^sen(x−1)·cos(x−1). En x=1: 8/2 + e^0·cos(0) = 4 + 1 = 5.'},
  {st: 'Tangente a f en x=1 es y = 4x − 2. h(x) = ln(f(x)) + e^sen(x−1). h\'(1) =', opts: ['1', '2', '3', '4'], c: 2, ex: 'f\'(1)=4, f(1)=2. h\'(x) = f\'(x)/f(x) + e^sen(x−1)·cos(x−1). En x=1: 4/2 + 1·1 = 2+1 = 3.'},
  {st: '¿Por qué x=0 "cierra" perfectamente cuando la tangente está en x₀=1, en h(x) = 3 + f(7x + e^x)?', opts: ['Casualidad', 'Porque 7·0 + e^0 = 1, justo el x₀ donde tenemos f\'', 'Porque h(0) = 0', 'Porque la cadena así lo exige'], c: 1, ex: 'EN TODOS LOS PARCIALES, el x donde piden h\' está elegido para que el argumento interno caiga exactamente en el x₀ donde te dieron la tangente. Eso "cierra" el ejercicio. Si el argumento no cierra, el ejercicio sería irresoluble.'},
  {st: 'En f(x) = 2e^(x−1) + sen(1−x) − 3x·ln(2x−1), f\'(1) =', opts: ['−5', '5', '0', '−2'], c: 0, ex: 'Derivar término a término. 2e^(x−1) → 2e^(x−1) (en x=1: 2). sen(1−x) → −cos(1−x) (en 1: −1). −3x·ln(2x−1) producto: −3[ln(2x−1) + 2x/(2x−1)] (en 1: −3[0+2] = −6). Total: 2−1−6 = −5.'}
]);

registerExercises('analisis-parcial', '5', [
  {st: 'lim x→+∞ √(x²+12x) − √(x²+13) =', opts: ['0', '6', '12', '+∞'], c: 1, ex: '∞−∞ con raíces → conjugado. Numerador queda 12x−13, denominador √(x²+12x)+√(x²+13) ≈ 2x. Cociente → 12/2 = 6.'},
  {st: 'Si la tangente a f en x=1 es y = 3x + 2, lim x→1 [f(4x−3) − 5]/(x²−1) =', opts: ['3', '6', '12', '0'], c: 1, ex: 'f(1)=5, f\'(1)=3. Reemplazando: 0/0. L\'Hôpital con cadena: 4·f\'(4x−3)/(2x). En x=1: argumento=1, f\'(1)=3 → 4·3/2 = 6.'},
  {st: 'lim x→3 (2x − 6)/(4√(x+1) − 8) =', opts: ['0', '1', '2', '4'], c: 2, ex: '0/0 con raíz → conjugado. Multiplicar por (4√(x+1)+8). Después de simplificar (x−3) queda (4√(x+1)+8)/8 → (4·2+8)/8 = 16/8 = 2.'},
  {st: 'Para resolver lim x→0 (e^(2x) − 1)/x usás:', opts: ['Conjugado', 'Notable: vale 2', 'Factorización', 'No se puede'], c: 1, ex: 'Es 0/0 con exponencial. Notable: (e^u−1)/u → 1 con u=2x → (e^(2x)−1)/(2x) · 2 → 1·2 = 2. También sale por L\'Hôpital.'},
  {st: 'lim x→+∞ ln(x)/x =', opts: ['0', '1', '+∞', 'No existe'], c: 0, ex: '∞/∞. L\'Hôpital: (1/x)/1 = 1/x → 0. Por término dominante: el ln crece mucho más lento que x, así que el cociente tiende a 0.'},
  {st: 'lim x→+∞ ((x²−1)/(x²−5))^(2x²+1) =', opts: ['1', 'e', 'e^4', 'e^8'], c: 3, ex: 'Forma 1^∞. Reescribís: 1 + 4/(x²−5). α·β = 4(2x²+1)/(x²−5) → 8 (grados iguales, cociente de líderes). Resultado: e^8.'},
  {st: 'Trampa típica: lim x→+∞ (x + sen x)/x. Si aplicás L\'Hôpital sale (1 + cos x)/1 que oscila. ¿Cuánto vale el límite real?', opts: ['No existe', '1', '0', '+∞'], c: 1, ex: 'Reescribís sin L\'Hôpital: 1 + sen(x)/x. Como |sen x| ≤ 1 y x → ∞, sen(x)/x → 0. Total: 1+0 = 1. Moraleja: a veces L\'Hôpital no es la mejor herramienta.'}
]);

registerExercises('analisis-parcial', '6', [
  {st: 'f(x) = 2x² − 9·ln(x) en [1, e]. ¿Dónde está el mínimo absoluto?', opts: ['x = 1', 'x = 3/2', 'x = e', 'No existe'], c: 1, ex: 'f\'(x) = 4x − 9/x. Crítico: 4x²=9 → x=3/2 (descarto −3/2 porque ln solo acepta positivos). f(1)=2, f(3/2)≈0.85, f(e)≈5.78. Mínimo en x=3/2.'},
  {st: 'Misma función en [1, e]. ¿Dónde está el máximo absoluto?', opts: ['x = 1', 'x = 3/2', 'x = e', 'No existe'], c: 2, ex: 'Mismos valores: f(1)=2, f(3/2)≈0.85, f(e)≈5.78. Máximo: f(e) ≈ 5.78. NO está en el crítico, está en el borde.'},
  {st: 'f(x) = 15x + 80/x³ en [1, 3]. ¿Dónde está el mínimo absoluto?', opts: ['x = 1', 'x = 2', 'x = 3', 'En un borde'], c: 1, ex: 'f\'(x) = 15 − 240/x⁴. Crítico: x⁴=16 → x=±2. Solo x=2 en (1,3). f(1)=95, f(2)=40, f(3)≈47.96. Mínimo en x=2.'},
  {st: 'f(x) = 15x + 80/x³ en [1, 3]. ¿Dónde está el máximo absoluto?', opts: ['x = 1', 'x = 2', 'x = 3', 'No existe'], c: 0, ex: 'Mismos valores: f(1)=95, f(2)=40, f(3)≈47.96. Máximo: f(1)=95. Está en el borde izquierdo, no en el crítico.'},
  {st: '¿Por qué Weierstrass garantiza que los extremos absolutos existen?', opts: ['Por casualidad', 'Por ser intervalo cerrado y función continua', 'Por la derivada', 'Solo si hay críticos'], c: 1, ex: 'Weierstrass: si f es continua en [a, b] (cerrado y acotado), entonces alcanza máximo y mínimo absolutos. Si el intervalo es abierto o f es discontinua, NO se garantiza.'},
  {st: '¿Cuál es el error #1 en máx/mín absolutos?', opts: ['Calcular mal la derivada', 'Olvidarse de evaluar en los bordes del intervalo', 'No saber Weierstrass', 'Aplicar L\'Hôpital'], c: 1, ex: 'En muchos parciales el verdadero extremo está en un borde, no en el crítico. SIEMPRE evaluá en los 3 candidatos: a, b y críticos válidos.'}
]);

registerExercises('analisis-parcial', '7', [
  {st: 'lim x→+∞ ((x²+a)/(x²−6))^(2x²+1) = e^4. Hallar a.', opts: ['−2', '−4', '4', '6'], c: 1, ex: 'Reescribís 1 + (a+6)/(x²−6). α·β = (a+6)(2x²+1)/(x²−6) → 2(a+6). Igualar: 2(a+6) = 4 → a = −4.'},
  {st: 'lim x→+∞ ((x²+a)/(x²−6))^(2x²+1) = e^6. Hallar a.', opts: ['−3', '0', '3', '6'], c: 0, ex: 'Reescribís 1 + (a+6)/(x²−6). α·β = (a+6)(2x²+1)/(x²−6) → 2(a+6). Igualar: 2(a+6) = 6 → a = −3.'},
  {st: 'f(x) = sen²(x)/(2x) si x≠0, f(0)=0. f\'(0) =', opts: ['0', '1/2', '1', '2'], c: 1, ex: 'Cociente incremental: lim h→0 [sen²(h)/(2h)]/h = lim sen²(h)/(2h²) = (1/2) · (sen h/h)² → 1/2 · 1 = 1/2.'},
  {st: 'f(x) = (cos(6x)−1)/x si x>0, kx si x≤0. ¿Para qué k es derivable en 0?', opts: ['−18', '0', '18', '−6'], c: 0, ex: 'Por derecha: lim (cos(6h)−1)/h² = −18 (notable de 1/2 con factor 36). Por izquierda: lim kh/h = k. Igualar: k = −18.'},
  {st: 'En "forma del e", ¿cómo reescribís (x²+1)/(x²−5)?', opts: ['(x²+1)/(x²−5) = 1 + 6/(x²−5)', '(x²+1)/(x²−5) = 6/(x²−5)', '(x²+1)/(x²−5) = 1 + (x²+1)/(x²−5)', 'No se puede reescribir'], c: 0, ex: 'Sumás y restás 5: (x²−5+5+1)/(x²−5) = (x²−5)/(x²−5) + 6/(x²−5) = 1 + 6/(x²−5). Ahí α = 6/(x²−5) → 0.'}
]);

registerExercises('analisis-parcial', '8', [
  {st: 'En f(x) = (5x³+15x²)/(x²−9), ¿cuál es la asíntota oblicua?', opts: ['No tiene', 'y = 5x', 'y = 5x + 15', 'y = x'], c: 2, ex: 'Como no hay AH, busco AO. m = lim f(x)/x = 5. b = lim [f(x)−5x] = lim (15x²+45x)/(x²−9) = 15. AO: y = 5x + 15.'},
  {st: 'En f(x) = (5x³+15x²)/(x²−9), x = −3 es:', opts: ['Asíntota vertical', 'Un agujero (no es AV)', 'Un punto crítico', 'La imagen'], c: 1, ex: 'En x=−3 se cancela el factor (x+3) en numerador y denominador. Queda 5x²/(x−3), evaluado en −3: 45/(−6) = −15/2 finito. NO es AV (es un agujero).'},
  {st: 'Si cos(g(x)) = 2x − √(x²+5x+4) y g(0) = π/3, entonces g\'(0) =', opts: ['√3/2', '−√3/2', '3/4', '−3/4'], c: 1, ex: 'Derivar implícito: −sen(g(x))·g\'(x) = 2 − (2x+5)/[2√(x²+5x+4)]. En x=0: −(√3/2)·g\'(0) = 2 − 5/4 = 3/4. Despejar: g\'(0) = (3/4)·(−2/√3) = −√3/2.'},
  {st: 'En implícita, derivada de y² respecto de x (con y dependiente de x) es:', opts: ['2y', '2x·y', '2y·y\'', '2'], c: 2, ex: 'Aplicás cadena: el "afuera" es u² → 2u, el "adentro" es y → y\'. Producto: 2y · y\'.'},
  {st: 'En implícita, derivada de xy respecto de x es:', opts: ['y\'', 'y + xy\'', 'x·y\'', 'xy\''], c: 1, ex: 'Producto: (xy)\' = (x)\'·y + x·(y)\' = 1·y + x·y\' = y + xy\'.'}
]);

registerExercises('analisis-parcial', '9', [
  {st: 'Para f(x) = x² + 2/x, el dominio es:', opts: ['ℝ', 'ℝ − {0}', '(0, +∞)', '[0, +∞)'], c: 1, ex: 'El término 2/x exige x ≠ 0. El polinomio x² está bien para todo x. Dominio: ℝ − {0}.'},
  {st: 'Para f(x) = x² + 2/x, el único punto crítico (en el dominio) es:', opts: ['x = 0', 'x = 1', 'x = 2', 'x = −1'], c: 1, ex: 'f\'(x) = 2x − 2/x² = (2x³−2)/x². Cero cuando 2x³=2 → x=1. (x=0 está fuera del dominio.)'},
  {st: 'Para f(x) = x² + 2/x, la imagen es:', opts: ['(0, +∞)', '[3, +∞)', '(−∞, 3]', 'ℝ'], c: 3, ex: 'En (−∞, 0): x² → +∞ por izquierda, 2/x → −∞ cerca de 0 por izquierda. La función toma todos los valores. En (0, +∞): tiene mínimo en x=1 (f(1)=3) y va a +∞ en ambos extremos. Combinando ambas ramas, la imagen es TODA ℝ.'},
  {st: 'Para f(x) = e^(2x)/(9x²+2), las asíntotas son:', opts: ['Solo y=0 en −∞', 'y=0 en ambos infinitos', 'AV en x=0', 'No tiene asíntotas'], c: 0, ex: 'Dominio ℝ. lim −∞: e^(2x) → 0, denominador → +∞. AH y=0 en −∞. lim +∞: e^(2x) gana → +∞. No AH ni AO en +∞.'},
  {st: 'Para f(x) = e^(2x)/(9x²+2), los puntos críticos son:', opts: ['x = 0', 'x = 1/3', 'x = 1/3 y x = 2/3', 'x = 2/3'], c: 2, ex: 'f\'(x) = 2e^(2x)(9x²−9x+2)/(9x²+2)². Resolver 9x²−9x+2=0: discriminante 81−72=9, raíces x=(9±3)/18 → 2/3 y 1/3.'},
  {st: 'Para f(x) = e^(2x)/(9x²+2), la imagen es:', opts: ['ℝ', '[0, +∞)', '(0, +∞)', '(0, f(2/3))'], c: 2, ex: 'f es siempre positiva (numerador e^(2x)>0, denominador positivo). lim −∞: 0 (no alcanzado). lim +∞: +∞. Toma todos los valores positivos. Imagen: (0, +∞).'}
]);
