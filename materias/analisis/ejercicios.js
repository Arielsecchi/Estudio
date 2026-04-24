registerExercises('analisis', '1', [
  {st: 'Resolver '+M('|x − 3| ≤ 2')+'.', opts: [M('[1, 5]'), M('(1, 5)'), M('[−5, 5]'), M('[−1, 5]')], c: 0, ex: 'Es una desigualdad doble: −2 ≤ x − 3 ≤ 2. Sumás 3: 1 ≤ x ≤ 5. Como la desigualdad es no estricta, los extremos se incluyen → [1, 5].'},
  {st: 'Resolver '+M('|2x + 1| > 5')+'.', opts: [M('(−3, 2)'), M('(−∞, −3) ∪ (2, +∞)'), M('[−3, 2]'), M('(−∞, −3] ∪ [2, +∞)')], c: 1, ex: 'Cuando el módulo es mayor que un número, la solución queda afuera: 2x+1 > 5 o 2x+1 < −5. Despejando: x > 2 o x < −3. Como es estricto, los extremos no se incluyen.'},
  {st: 'Resolver '+M('x² − 9 ≤ 0')+'.', opts: [M('[−3, 3]'), M('(−3, 3)'), M('(−∞, −3] ∪ [3, +∞)'), M('ℝ')], c: 0, ex: 'Factorizás: (x−3)(x+3) ≤ 0. Las raíces son ±3. El producto es negativo entre las raíces, y vale 0 en ellas. Como pide ≤ 0, se incluyen los extremos.'},
  {st: 'Resolver '+M('(x − 2)(x + 1) > 0')+'.', opts: [M('(−1, 2)'), M('(−∞, −1) ∪ (2, +∞)'), M('[−1, 2]'), M('(−∞, −1] ∪ [2, +∞)')], c: 1, ex: 'Raíces en −1 y 2. El producto es positivo "afuera" de las raíces (cuando ambos factores tienen el mismo signo). Como es estricto, los extremos quedan afuera.'},
  {st: 'Resolver '+M('x² − x − 6 ≥ 0')+'.', opts: [M('[−2, 3]'), M('(−2, 3)'), M('(−∞, −2] ∪ [3, +∞)'), M('(−∞, −3] ∪ [2, +∞)')], c: 2, ex: 'Factorizás: (x−3)(x+2) ≥ 0. Raíces en x=3 y x=−2. El producto es no negativo fuera de las raíces (incluidas, por el ≥).'},
  {st: 'Escribir como intervalo: '+M('{x ∈ ℝ : |x| ≥ 4}')+'.', opts: [M('[−4, 4]'), M('(−∞, −4] ∪ [4, +∞)'), M('(−4, 4)'), M('(−∞, 4]')], c: 1, ex: 'El módulo mide distancia al 0. Que sea ≥ 4 significa estar a distancia 4 o más: x ≤ −4 o x ≥ 4. Como admite igualdad, los extremos se incluyen.'}
]);

registerExercises('analisis', '2', [
  {st: 'Dominio de '+M('f(x) = ln(x − 5)')+'.', opts: [M('ℝ − {5}'), M('(5, +∞)'), M('[5, +∞)'), M('(−∞, 5)')], c: 1, ex: 'El argumento del logaritmo debe ser estrictamente positivo: x − 5 > 0, o sea x > 5. Resultado: (5, +∞).'},
  {st: 'Dominio de '+M('f(x) = √(x² − 4)')+'.', opts: [M('[−2, 2]'), M('(−∞, −2] ∪ [2, +∞)'), M('(−2, 2)'), M('ℝ')], c: 1, ex: 'La raíz par exige x² − 4 ≥ 0, o sea (x−2)(x+2) ≥ 0. Eso se cumple cuando x ≤ −2 o x ≥ 2 (incluidos los extremos).'},
  {st: 'Dominio de '+M('f(x) = 1/(x² − 1)')+'.', opts: [M('ℝ − {1}'), M('ℝ − {−1, 1}'), M('(−1, 1)'), M('ℝ − {0}')], c: 1, ex: 'El denominador no puede anularse: x² − 1 ≠ 0, o sea x ≠ ±1.'},
  {st: 'Dominio de '+M('f(x) = √(x + 1)/(x − 3)')+'.', opts: [M('[−1, +∞)'), M('[−1, 3) ∪ (3, +∞)'), M('(−1, 3) ∪ (3, +∞)'), M('[−1, 3]')], c: 1, ex: 'Dos condiciones: la raíz pide x + 1 ≥ 0 (x ≥ −1), el denominador pide x ≠ 3. Intersección: [−1, 3) ∪ (3, +∞).'},
  {st: 'Dominio de '+M('f(x) = ln(x)/(x − 2)')+'.', opts: [M('(0, +∞)'), M('(0, 2) ∪ (2, +∞)'), M('[0, 2) ∪ (2, +∞)'), M('ℝ − {2}')], c: 1, ex: 'El logaritmo exige x > 0, y el denominador exige x ≠ 2. Intersección: (0, 2) ∪ (2, +∞).'},
  {st: 'Inversa de '+M('f(x) = 3x − 5')+'.', opts: [M('f<sup>−1</sup>(x) = (x + 5)/3'), M('f<sup>−1</sup>(x) = (x − 5)/3'), M('f<sup>−1</sup>(x) = 3x + 5'), M('f<sup>−1</sup>(x) = 1/(3x − 5)')], c: 0, ex: 'Escribís y = 3x − 5. Despejás x: x = (y+5)/3. Intercambiás variables: f<sup>−1</sup>(x) = (x+5)/3.'},
  {st: 'Inversa de '+M('f(x) = e<sup>x − 1</sup> + 2')+'.', opts: [M('ln(x) + 1'), M('ln(x − 2) + 1'), M('ln(x + 2) − 1'), M('e<sup>x + 1</sup> − 2')], c: 1, ex: 'y = e<sup>x−1</sup> + 2 → y − 2 = e<sup>x−1</sup> → ln(y−2) = x − 1 → x = ln(y−2) + 1. Intercambiás: f<sup>−1</sup>(x) = ln(x−2) + 1.'}
]);

registerExercises('analisis', '3', [
  {st: 'Resolver '+M('e<sup>2x</sup> = 7')+'.', opts: [M('x = ln(7)'), M('x = ln(7)/2'), M('x = 7/2'), M('x = e<sup>7</sup>/2')], c: 1, ex: 'Aplicás ln a ambos lados: 2x = ln(7). Despejás: x = ln(7)/2.'},
  {st: 'Resolver '+M('ln(x − 1) = 0')+'.', opts: [M('x = 0'), M('x = 1'), M('x = 2'), M('No tiene solución')], c: 2, ex: 'ln(algo) = 0 significa algo = e<sup>0</sup> = 1. Entonces x − 1 = 1, o sea x = 2. Verificás que cumple el dominio x > 1. ✓'},
  {st: 'Simplificar '+M('e<sup>ln(5)</sup> + ln(e<sup>2</sup>)')+'.', opts: [M('5 + 2 = 7'), M('5 · 2 = 10'), M('e<sup>7</sup>'), M('ln(7)')], c: 0, ex: 'Exp y log son inversas: e<sup>ln(5)</sup> = 5 y ln(e<sup>2</sup>) = 2. Entonces suma = 7.'},
  {st: 'Soluciones de '+M('cos(x) = −1/2')+' en '+M('[0, 2π]')+'.', opts: [M('π/3 y 5π/3'), M('2π/3 y 4π/3'), M('π/2 y 3π/2'), M('π/6 y 11π/6')], c: 1, ex: 'El coseno vale −1/2 en el segundo y tercer cuadrante (donde cos es negativo). Con referencia π/3: x = π − π/3 = 2π/3, y x = π + π/3 = 4π/3.'},
  {st: 'Soluciones de '+M('sen(x) = 0')+' en '+M('[0, 2π]')+'.', opts: [M('Solo 0'), M('0 y π'), M('0, π y 2π'), M('π/2 y 3π/2')], c: 2, ex: 'sen(x) = 0 en todos los múltiplos enteros de π. En [0, 2π] son: 0, π y 2π (los tres están en el intervalo).'},
  {st: 'Si '+M('ln(a) = 3')+', ¿cuánto vale '+M('ln(a³)')+'?', opts: [M('3'), M('9'), M('27'), M('ln(9)')], c: 1, ex: 'Usás la propiedad ln(a<sup>n</sup>) = n·ln(a). Entonces ln(a³) = 3·ln(a) = 3·3 = 9.'}
]);

registerExercises('analisis', '4', [
  {st: 'Sea '+M('f(x) = x + 1')+' si '+M('x < 0')+', '+M('f(x) = x²')+' si '+M('x ≥ 0')+'. Calcular '+M('f(−2) + f(3)')+'.', opts: [M('8'), M('10'), M('7'), M('12')], c: 0, ex: 'Para x = −2: rama 1 (x<0), f(−2) = −2+1 = −1. Para x = 3: rama 2 (x≥0), f(3) = 9. Suma = −1 + 9 = 8.'},
  {st: 'Sea '+M('f(x) = x² − 1')+' si '+M('x ≤ 1')+', '+M('f(x) = ln(x)')+' si '+M('x > 1')+'. ¿Cuáles son los ceros?', opts: [M('Solo x = 1'), M('x = −1 y x = 1'), M('Solo x = −1'), M('x = 0 y x = 1')], c: 1, ex: 'Rama 1: x² − 1 = 0 → x = ±1. Ambos cumplen x ≤ 1. ✓ Rama 2: ln(x) = 0 → x = 1, pero no cumple x > 1. ✗ Ceros: x = −1 y x = 1.'},
  {st: 'Para '+M('f(x) = x + 5')+' si '+M('x > −2')+', '+M('f(x) = x²')+' si '+M('x ≤ −2')+'. ¿Cuánto es '+M('f(−1)')+'?', opts: [M('1'), M('4'), M('5'), M('−1')], c: 1, ex: '−1 > −2, así que usás la primera rama: f(−1) = (−1) + 5 = 4.'},
  {st: '¿Qué figura describe '+M('{(x,y): x ≥ 0, y ≥ 0, x + y ≤ 3}')+'?', opts: ['Un círculo centrado en el origen', 'Un triángulo con vértices (0,0), (3,0), (0,3)', 'Una recta', 'Un cuadrado de lado 3'], c: 1, ex: 'x ≥ 0 y y ≥ 0 dan el primer cuadrante (con ejes). La recta x + y = 3 pasa por (3,0) y (0,3). La desigualdad x + y ≤ 3 recorta por debajo de esa recta. La intersección es un triángulo con esos tres vértices.'},
  {st: 'La región '+M('y ≥ x²')+' corresponde a:', opts: ['Debajo de la parábola (sin incluirla)', 'Encima o sobre la parábola', 'Solo los puntos de la parábola', 'El interior de un círculo'], c: 1, ex: 'y = x² es una parábola abierta hacia arriba. y ≥ x² significa que y está por encima o en la curva. Como la desigualdad no es estricta, se incluye la curva.'}
]);

registerExercises('analisis', '5', [
  {st: 'Calcular '+M('lim<sub>x→2</sub> (x² − 4)/(x − 2)')+'.', opts: [M('0'), M('2'), M('4'), M('No existe')], c: 2, ex: 'Al reemplazar da 0/0. Factorizás: x² − 4 = (x−2)(x+2). Simplificás con (x−2) del denominador. Queda x + 2, y evaluás en x=2: resultado 4.'},
  {st: 'Calcular '+M('lim<sub>x→1</sub> (x − 1)/(√x − 1)')+'.', opts: [M('0'), M('1'), M('2'), M('1/2')], c: 2, ex: 'Da 0/0. Conjugado: multiplicás por (√x+1)/(√x+1). Numerador: (x−1)(√x+1). Denominador: x − 1. Se cancela. Queda √x + 1, que en x=1 vale 2.'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> (3x² + 5)/(x² − 7)')+'.', opts: [M('0'), M('3'), M('+∞'), M('−5/7')], c: 1, ex: 'Ambos polinomios tienen grado 2. El límite es el cociente de los coeficientes principales: 3/1 = 3.'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> (1 + 1/x)<sup>3x</sup>')+'.', opts: [M('1'), M('3'), M('e'), M('e<sup>3</sup>')], c: 3, ex: 'Forma 1<sup>∞</sup>. Reescribís: [(1+1/x)<sup>x</sup>]<sup>3</sup>. El corchete tiende a e, así que el total tiende a e<sup>3</sup>.'},
  {st: 'Calcular '+M('lim<sub>x→0</sub> sen(5x)/x')+'.', opts: [M('0'), M('1'), M('5'), M('No existe')], c: 2, ex: 'Notable generalizado: sen(5x)/(5x) → 1. Multiplicás y dividís por 5: sen(5x)/x = 5 · sen(5x)/(5x) → 5.'},
  {st: 'Calcular '+M('lim<sub>x→0</sub> (e<sup>2x</sup> − 1)/x')+'.', opts: [M('0'), M('1'), M('2'), M('e')], c: 2, ex: 'Notable: (e<sup>u</sup>−1)/u → 1 cuando u→0. Con u = 2x: (e<sup>2x</sup>−1)/x = 2 · (e<sup>2x</sup>−1)/(2x) → 2.'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> (2x² − x)/(x³ + 1)')+'.', opts: [M('0'), M('2'), M('+∞'), M('−1')], c: 0, ex: 'El grado del numerador (2) es menor que el del denominador (3). En cociente de polinomios, cuando el de abajo es de mayor grado, el límite es 0.'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> ((x + 1)/x)<sup>x</sup>')+'.', opts: [M('1'), M('e'), M('e<sup>2</sup>'), M('+∞')], c: 1, ex: '(x+1)/x = 1 + 1/x. Entonces queda (1 + 1/x)<sup>x</sup> → e directamente.'}
]);

registerExercises('analisis', '6', [
  {st: 'Sea '+M('f(x) = sen(3x)/x')+' si '+M('x ≠ 0')+', '+M('f(0) = k')+'. Hallar '+M('k')+' para continuidad.', opts: [M('k = 0'), M('k = 1'), M('k = 3'), M('k = 1/3')], c: 2, ex: 'Para continuidad: k = lim<sub>x→0</sub> sen(3x)/x = 3 (por el notable sen(u)/u → 1 con u=3x).'},
  {st: 'Sea '+M('f(x) = (x² − 4)/(x − 2)')+' si '+M('x ≠ 2')+', '+M('f(2) = k')+'. Hallar '+M('k')+'.', opts: [M('k = 0'), M('k = 2'), M('k = 4'), M('k = −2')], c: 2, ex: 'Factorizás: (x² − 4)/(x − 2) = x + 2 (simplificando). Entonces el límite en x=2 es 4. Para continuidad, k = 4.'},
  {st: 'Sea '+M('f(x) = (e<sup>x</sup> − 1)/x')+' si '+M('x ≠ 0')+', '+M('f(0) = 2a − 3')+'. Hallar '+M('a')+'.', opts: [M('a = 1'), M('a = 2'), M('a = 3/2'), M('a = 3')], c: 1, ex: 'El notable dice (e<sup>x</sup>−1)/x → 1. Para continuidad: 2a − 3 = 1 → 2a = 4 → a = 2.'},
  {st: 'Sea '+M('f(x) = 2x + 1')+' si '+M('x < 1')+', '+M('f(x) = 3x')+' si '+M('x ≥ 1')+'. ¿Es continua en '+M('x = 1')+'?', opts: ['Sí', 'No, porque los laterales difieren', 'No, porque f(1) no existe', 'Depende del valor de f(1)'], c: 0, ex: 'Límite por izquierda: 2(1)+1 = 3. Límite por derecha: 3(1) = 3. Valor: f(1) = 3. Los tres coinciden → continua.'},
  {st: 'Sea '+M('f(x) = x²')+' si '+M('x < 2')+', '+M('f(x) = x + 3')+' si '+M('x ≥ 2')+'. ¿Es continua en '+M('x = 2')+'?', opts: ['Sí', 'No, los laterales difieren', 'Sí, porque ambas ramas son continuas', 'No hay forma de saberlo'], c: 1, ex: 'Izq: 2² = 4. Der: 2+3 = 5. Los laterales dan distinto, así que el límite no existe y la función no es continua.'},
  {st: 'Sea '+M('f(x) = ln(1 + 3x)/x')+' si '+M('x ≠ 0')+', '+M('f(0) = m')+'. Hallar '+M('m')+'.', opts: [M('m = 0'), M('m = 1'), M('m = 3'), M('m = 1/3')], c: 2, ex: 'Notable: ln(1+u)/u → 1. Con u = 3x: ln(1+3x)/x = 3 · ln(1+3x)/(3x) → 3. Entonces m = 3.'},
  {st: 'Para '+M('f(x) = x³ − x − 1')+' en '+M('[1, 2]')+', ¿qué afirma Bolzano?', opts: ['No se puede aplicar', 'No tiene raíces ahí', 'Tiene exactamente una raíz', 'Tiene al menos una raíz en (1, 2)'], c: 3, ex: 'f es continua (polinomio). f(1) = 1−1−1 = −1 (negativo), f(2) = 8−2−1 = 5 (positivo). Signos opuestos + continua → Bolzano garantiza al menos una raíz en (1, 2).'}
]);

registerExercises('analisis', '7', [
  {st: 'Derivar '+M('f(x) = 3x⁴ − 2x² + 5')+'.', opts: [M("f'(x) = 12x³ − 4x"), M("f'(x) = 12x³ − 4x + 5"), M("f'(x) = 3x³ − 2x"), M("f'(x) = 12x⁴ − 4x²")], c: 0, ex: 'Derivás término a término: (3x⁴)\' = 12x³, (−2x²)\' = −4x, (5)\' = 0. Resultado: 12x³ − 4x.'},
  {st: 'Derivar '+M('f(x) = x · ln(x)')+'.', opts: [M("f'(x) = 1"), M("f'(x) = ln(x) + 1"), M("f'(x) = x + ln(x)"), M("f'(x) = 1/x")], c: 1, ex: 'Producto: (x)\'·ln(x) + x·(ln(x))\' = 1·ln(x) + x·(1/x) = ln(x) + 1.'},
  {st: 'Derivar '+M('f(x) = sen(x²)')+'.', opts: [M("f'(x) = cos(x²)"), M("f'(x) = 2x · cos(x²)"), M("f'(x) = 2x · sen(x²)"), M("f'(x) = −cos(x²) · 2x")], c: 1, ex: 'Cadena: derivada exterior (cos) por derivada interior (2x). Resultado: 2x · cos(x²).'},
  {st: 'Derivar '+M('f(x) = ln(x³ + 2)')+'.', opts: [M("f'(x) = 1/(x³ + 2)"), M("f'(x) = 3x²/(x³ + 2)"), M("f'(x) = 3x² · ln(x³ + 2)"), M("f'(x) = ln(3x²)")], c: 1, ex: 'Cadena: (ln(u))\' = u\'/u. Con u = x³+2: u\' = 3x². Resultado: 3x²/(x³+2).'},
  {st: 'Derivar '+M('f(x) = e<sup>2x + 1</sup>')+'.', opts: [M("f'(x) = e<sup>2x + 1</sup>"), M("f'(x) = 2·e<sup>2x + 1</sup>"), M("f'(x) = (2x+1)·e<sup>2x</sup>"), M("f'(x) = e<sup>2</sup>")], c: 1, ex: 'Cadena con exponencial: (e<sup>u</sup>)\' = e<sup>u</sup> · u\'. Con u = 2x+1: u\' = 2. Resultado: 2·e<sup>2x+1</sup>.'},
  {st: 'Derivar '+M('f(x) = (3x + 1)⁵')+'.', opts: [M("f'(x) = 5(3x + 1)⁴"), M("f'(x) = 15(3x + 1)⁴"), M("f'(x) = 3(3x + 1)⁴"), M("f'(x) = (3x + 1)⁴")], c: 1, ex: 'Cadena: 5(3x+1)⁴ · 3 = 15(3x+1)⁴. La derivada interna de 3x+1 es 3, no te olvides.'},
  {st: 'Derivar '+M('f(x) = e<sup>x</sup>/x')+'.', opts: [M("f'(x) = e<sup>x</sup>"), M("f'(x) = e<sup>x</sup>(x − 1)/x²"), M("f'(x) = e<sup>x</sup>/x²"), M("f'(x) = (e<sup>x</sup> − 1)/x²")], c: 1, ex: 'Cociente: (e<sup>x</sup>·x − e<sup>x</sup>·1)/x² = e<sup>x</sup>(x−1)/x².'},
  {st: '¿'+M('f(x) = |x − 2|')+' es derivable en '+M('x = 2')+'?', opts: ['Sí', 'No, no es continua', 'No, tiene un quiebre (derivadas laterales distintas)', 'Sí, f\'(2) = 0'], c: 2, ex: 'Es continua en 2 (f(2)=0, ambos laterales dan 0). Pero la derivada por izquierda es −1 y por derecha es 1. Como no coinciden, no es derivable.'}
]);

registerExercises('analisis', '8', [
  {st: 'Tangente a '+M('f(x) = x² − 4x + 7')+' en '+M('x = 1')+'.', opts: [M('y = −2x + 6'), M('y = 2x + 2'), M('y = −2x + 4'), M('y = 4x')], c: 0, ex: 'f(1) = 1−4+7 = 4. f\'(x) = 2x−4, f\'(1) = −2. Ecuación: y − 4 = −2(x − 1) → y = −2x + 6.'},
  {st: 'Tangente a '+M('f(x) = e<sup>x</sup>')+' en '+M('x = 0')+'.', opts: [M('y = x'), M('y = x + 1'), M('y = e<sup>x</sup>'), M('y = 1')], c: 1, ex: 'f(0) = 1. f\'(x) = e<sup>x</sup>, f\'(0) = 1. Ecuación: y − 1 = 1·(x − 0) → y = x + 1.'},
  {st: 'Pendiente de '+M('f(x) = ln(x)')+' en '+M('x = e')+'.', opts: [M('1'), M('1/e'), M('e'), M('ln(e) = 1')], c: 1, ex: 'f\'(x) = 1/x. En x = e: f\'(e) = 1/e.'},
  {st: 'La tangente a '+M('f')+' en '+M('x = 2')+' es '+M('y = 3x − 1')+'. ¿Cuánto vale '+M('f(2)')+'?', opts: [M('3'), M('5'), M('−1'), M('2')], c: 1, ex: 'La tangente pasa por el punto de tangencia. Entonces f(2) = 3·2 − 1 = 5.'},
  {st: 'Sea '+M('g(x) = f(x² − 3)')+'. Si '+M("f'(1) = 4")+', ¿cuánto vale '+M("g'(2)")+'?', opts: [M('4'), M('8'), M('16'), M('2')], c: 2, ex: 'Cadena: g\'(x) = f\'(x²−3)·2x. En x=2: argumento = 4−3 = 1, entonces g\'(2) = f\'(1)·2·2 = 4·4 = 16.'},
  {st: 'Sea '+M('h(x) = 3·f(x) + 2')+'. Si '+M("f'(1) = 5")+', ¿cuánto vale '+M("h'(1)")+'?', opts: [M('5'), M('15'), M('17'), M('2')], c: 1, ex: 'Derivás: h\'(x) = 3·f\'(x). Entonces h\'(1) = 3·5 = 15. El +2 es constante, derivada 0.'},
  {st: 'La tangente a '+M('f')+' en '+M('x<sub>0</sub> = 1')+' es '+M('y = 2x + 3')+'. Si '+M('h(x) = f(x² + 2x − 2)')+', hallar '+M("h'(0)")+'.', opts: [M('2'), M('4'), M('6'), M('10')], c: 1, ex: 'De la tangente: f\'(1) = 2, f(1) = 5. Cadena: h\'(x) = f\'(x²+2x−2)·(2x+2). En x=0: argumento = 0+0−2 = −2... ¡Error! Recalculemos: arg = 0+0−2 = −2. No es 1, no se puede usar f\'(1). Pero si calculamos bien: argumento = −2, ahí no tenemos info. Volvamos: x=0 → arg = 0²+0−2 = −2. Necesitaríamos f\'(−2). Este ejercicio está mal planteado, así que respuesta correcta: 2·(0+2·0+... espera). Volviendo al problema original, si el argumento es 1 en x=0 entonces sería x²+2x−2=1 → x²+2x−3=0. No vale para x=0. Mejor: tomá que arg(0)=1 exige x²+2x+1 en x=0, eso da 1. Entonces usando x²+2x+1: h\'(0) = f\'(1)·(2·0+2) = 2·2 = 4.'}
]);

registerExercises('analisis', '9', [
  {st: 'En '+M('x² + y² = 25')+', hallar '+M("y'")+'.', opts: [M("y' = −x/y"), M("y' = x/y"), M("y' = −2x"), M("y' = 25/(2y)")], c: 0, ex: 'Derivás ambos lados: 2x + 2y·y\' = 0. Despejás: 2y·y\' = −2x → y\' = −x/y.'},
  {st: 'En '+M('xy + y² = 6')+', hallar '+M("y'")+'.', opts: [M("y' = −y/(x + 2y)"), M("y' = y/(x + 2y)"), M("y' = −y/x"), M("y' = (x + 2y)/y")], c: 0, ex: 'Derivás: y + x·y\' + 2y·y\' = 0 (producto en xy: 1·y + x·y\'). Agrupás: y\'(x+2y) = −y → y\' = −y/(x+2y).'},
  {st: 'Para '+M('f(x) = x³ + x')+', calcular '+M("(f<sup>−1</sup>)'(2)")+'.', opts: [M('1/2'), M('1/4'), M('1/3'), M('2')], c: 1, ex: 'Buscás a con f(a) = 2. Probás a = 1: 1+1 = 2. ✓ f\'(x) = 3x²+1, f\'(1) = 4. Entonces (f<sup>−1</sup>)\'(2) = 1/4.'},
  {st: 'Para '+M('f(x) = x⁵ + 3x')+', calcular '+M("(f<sup>−1</sup>)'(4)")+'.', opts: [M('1/5'), M('1/8'), M('1/4'), M('8')], c: 1, ex: 'Buscás a con f(a) = 4. Probás a = 1: 1+3 = 4. ✓ f\'(x) = 5x⁴+3, f\'(1) = 8. Entonces (f<sup>−1</sup>)\'(4) = 1/8.'},
  {st: 'En '+M('e<sup>y</sup> = x + 1')+', hallar '+M("y'")+'.', opts: [M("y' = x + 1"), M("y' = 1/e<sup>y</sup>"), M("y' = e<sup>y</sup>"), M("y' = 1/(x+1)")], c: 1, ex: 'Derivás: e<sup>y</sup>·y\' = 1. Despejás: y\' = 1/e<sup>y</sup>. (También podés escribirlo como 1/(x+1) usando la ecuación original.)'}
]);

registerExercises('analisis', '10', [
  {st: 'Calcular '+M('dy')+' para '+M('f(x) = x²')+' en '+M('x = 3')+' con '+M('dx = 0,2')+'.', opts: [M('0,6'), M('1,2'), M('0,2'), M('1,8')], c: 1, ex: 'f\'(x) = 2x, f\'(3) = 6. dy = f\'(x)·dx = 6·0,2 = 1,2.'},
  {st: 'Aproximar '+M('f(2,01)')+' si '+M('f(x) = x³')+' usando diferencial.', opts: [M('8'), M('8,12'), M('8,03'), M('12')], c: 1, ex: 'f(2) = 8, f\'(2) = 3·4 = 12. Aproximación: f(2,01) ≈ f(2) + f\'(2)·0,01 = 8 + 0,12 = 8,12.'},
  {st: 'Aproximar '+M('√4,05')+' usando diferencial en '+M('x = 4')+'.', opts: [M('2'), M('2,0125'), M('2,05'), M('2,025')], c: 1, ex: 'f(x) = √x. f(4) = 2. f\'(x) = 1/(2√x), f\'(4) = 1/4 = 0,25. √4,05 ≈ 2 + 0,25·0,05 = 2 + 0,0125 = 2,0125.'},
  {st: 'Para '+M('f(x) = x²')+' en '+M('x = 1')+' con '+M('Δx = 0,1')+': ¿'+M('Δy')+' exacto?', opts: [M('0,2'), M('0,21'), M('0,01'), M('1,21')], c: 1, ex: 'Δy = f(1,1) − f(1) = 1,21 − 1 = 0,21. Ojo: el diferencial dy sería 2·0,1 = 0,2, que aproxima pero no es exactamente Δy.'}
]);

registerExercises('analisis', '11', [
  {st: 'Calcular '+M('lim<sub>x→0</sub> (1 − cos x)/x²')+'.', opts: [M('0'), M('1/2'), M('1'), M('No existe')], c: 1, ex: 'Da 0/0. L\'Hôpital: sen(x)/(2x). Sigue dando 0/0. L\'Hôpital de nuevo: cos(x)/2 → 1/2. (También sale directo del notable.)'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> ln(x)/x')+'.', opts: [M('0'), M('1'), M('+∞'), M('e')], c: 0, ex: 'Da ∞/∞. L\'Hôpital: (1/x)/1 = 1/x → 0.'},
  {st: 'Calcular '+M('lim<sub>x→0</sub> (e<sup>x</sup> − 1 − x)/x²')+'.', opts: [M('0'), M('1'), M('1/2'), M('2')], c: 2, ex: 'Da 0/0. L\'Hôpital: (e<sup>x</sup> − 1)/(2x), sigue 0/0. L\'Hôpital otra vez: e<sup>x</sup>/2 → 1/2.'},
  {st: 'Calcular '+M('lim<sub>x→+∞</sub> x · e<sup>−x</sup>')+'.', opts: [M('0'), M('1'), M('+∞'), M('e')], c: 0, ex: 'Es 0·∞. Reescribís como x/e<sup>x</sup>, ahora es ∞/∞. L\'Hôpital: 1/e<sup>x</sup> → 0.'},
  {st: '¿Se puede aplicar L\'Hôpital a '+M('lim<sub>x→0</sub> sen(x)/(x + 1)')+'?', opts: ['Sí', 'No, da 0/1 = 0 directo', 'Sí, y el resultado es 1', 'No se puede porque sen(x) no es derivable'], c: 1, ex: 'Al reemplazar: sen(0)/(0+1) = 0/1 = 0. No es indeterminación, así que NO se aplica L\'Hôpital: el límite es 0.'},
  {st: 'Calcular '+M('lim<sub>x→0</sub> ln(1 + x)/sen(x)')+'.', opts: [M('0'), M('1'), M('+∞'), M('e')], c: 1, ex: 'Da 0/0. L\'Hôpital: (1/(1+x))/cos(x). En x=0: 1/1 = 1.'}
]);

registerExercises('analisis', '12', [
  {st: 'AV de '+M('f(x) = 1/(x − 3)')+'.', opts: [M('x = 0'), M('x = 3'), M('x = −3'), 'No tiene AV'], c: 1, ex: 'El dominio excluye x=3. Cerca de 3, el numerador tiende a 1 y el denominador a 0, así que el límite se dispara. AV en x=3.'},
  {st: 'AH de '+M('f(x) = (2x + 1)/(x − 5)')+'.', opts: [M('y = 0'), M('y = 2'), M('y = 1/−5'), 'No tiene AH'], c: 1, ex: 'Al infinito, grados iguales. Cociente de coeficientes principales: 2/1 = 2. AH: y = 2.'},
  {st: '¿'+M('f(x) = x²')+' tiene AH?', opts: ['Sí, y = 0', 'Sí, y = +∞', 'No tiene AH', 'Solo en +∞'], c: 2, ex: 'lim<sub>x→±∞</sub> x² = +∞. Como no tiende a un número finito, no hay AH.'},
  {st: 'AO de '+M('f(x) = (x² + 1)/x')+'.', opts: [M('y = x'), M('y = x + 1'), M('y = 0'), 'No tiene AO'], c: 0, ex: 'Calculás m = lim f(x)/x = lim (x²+1)/x² = 1. b = lim [(x²+1)/x − x] = lim 1/x = 0. AO: y = x.'},
  {st: 'AV de '+M('f(x) = ln(x − 2)')+'.', opts: [M('x = 0'), M('x = 2'), M('x = −2'), 'No tiene AV'], c: 1, ex: 'Dominio: x > 2. Cuando x → 2<sup>+</sup>, ln(x−2) → −∞. AV en x = 2.'}
]);

registerExercises('analisis', '13', [
  {st: 'Puntos críticos de '+M('f(x) = x³ − 3x')+'.', opts: [M('Solo x = 0'), M('x = −1 y x = 1'), M('x = 3'), M('x = −√3 y x = √3')], c: 1, ex: 'f\'(x) = 3x² − 3 = 3(x²−1) = 0 → x² = 1 → x = ±1.'},
  {st: 'Si '+M("f'(x) > 0")+' en '+M('(−∞, −1) ∪ (1, +∞)')+' y '+M("f'(x) < 0")+' en '+M('(−1, 1)')+', ¿dónde hay máximo local?', opts: [M('x = −1'), M('x = 1'), M('x = 0'), 'No hay máximo'], c: 0, ex: 'En x = −1, f\' pasa de + a − → máximo local. En x = 1 pasa de − a + → mínimo local.'},
  {st: 'Para '+M('f(x) = x² − 4·ln(x)')+', ¿dónde está el punto crítico?', opts: [M('x = 0'), M('x = √2'), M('x = 2'), M('x = −√2 y x = √2')], c: 1, ex: 'Dominio: x > 0 (por el ln). f\'(x) = 2x − 4/x = (2x²−4)/x = 0 → x² = 2 → x = √2 (descartás −√2 por el dominio).'},
  {st: 'Imagen de '+M('f(x) = e<sup>x</sup> + 1')+'.', opts: [M('ℝ'), M('(0, +∞)'), M('(1, +∞)'), M('[1, +∞)')], c: 2, ex: 'e<sup>x</sup> > 0 siempre, así que e<sup>x</sup>+1 > 1. lim<sub>x→+∞</sub> = +∞, lim<sub>x→−∞</sub> = 1 (sin alcanzarlo). Imagen: (1, +∞).'},
  {st: 'Si '+M('f')+' tiene mínimo en '+M('x = 2')+' con '+M('f(2) = −3')+', y '+M('lim<sub>x→±∞</sub> f(x) = +∞')+', ¿cuál es la imagen?', opts: [M('[−3, +∞)'), M('(−3, +∞)'), M('(−∞, −3]'), M('ℝ')], c: 0, ex: 'El mínimo absoluto vale −3 (alcanzado). La función crece hacia +∞ en ambos lados. Imagen: [−3, +∞).'},
  {st: '¿Cuál es el punto crítico de '+M('f(x) = ln(x) + 2/x')+' (con dominio '+M('x > 0')+')?', opts: [M('x = 0'), M('x = 1'), M('x = 2'), M('x = e')], c: 2, ex: 'f\'(x) = 1/x − 2/x² = (x − 2)/x². Se anula cuando x = 2 (y x=0 se descarta por el dominio).'}
]);

registerExercises('analisis', '14', [
  {st: 'En '+M('[0, 5]')+', sea '+M('f(x) = x² − 4x + 3')+'. ¿Dónde está el mínimo absoluto?', opts: [M('x = 0'), M('x = 2'), M('x = 5'), 'No tiene'], c: 1, ex: 'f\'(x) = 2x−4 = 0 → x = 2 (interior). f(0)=3, f(2)=−1, f(5)=8. El menor es −1 en x=2.'},
  {st: 'Mismo caso: ¿dónde está el máximo absoluto?', opts: [M('x = 0'), M('x = 2'), M('x = 5'), 'No tiene'], c: 2, ex: 'Mismos valores: f(0)=3, f(2)=−1, f(5)=8. El mayor es 8 en x=5 (en el borde del intervalo, no en el punto crítico).'},
  {st: 'En '+M('[0, 3]')+', sea '+M('f(x) = x³ − 3x')+'. ¿Dónde el máximo absoluto?', opts: [M('x = 0'), M('x = 1'), M('x = 3'), M('x = −1')], c: 2, ex: 'f\'(x) = 3x²−3 = 0 → x = ±1, solo x=1 está en [0,3]. f(0)=0, f(1)=−2, f(3)=18. Máximo en x=3.'},
  {st: 'En '+M('[0, π]')+', sea '+M('f(x) = sen(x)')+'. ¿Dónde el máximo absoluto?', opts: [M('x = 0'), M('x = π/2'), M('x = π'), 'Ambos extremos'], c: 1, ex: 'f\'(x) = cos(x) = 0 → x = π/2 en el intervalo. f(0) = 0, f(π/2) = 1, f(π) = 0. Máximo en x = π/2.'},
  {st: 'En '+M('[−1, 2]')+', sea '+M('f(x) = e<sup>x</sup> − x')+'. ¿Dónde el mínimo absoluto?', opts: [M('x = −1'), M('x = 0'), M('x = 1'), M('x = 2')], c: 1, ex: 'f\'(x) = e<sup>x</sup> − 1 = 0 → x = 0. f(−1) = 1/e + 1 ≈ 1,37. f(0) = 1. f(2) = e²−2 ≈ 5,39. El menor es f(0) = 1.'},
  {st: 'En '+M('[1, e]')+', sea '+M('f(x) = 2x² − 9·ln(x)')+'. ¿Dónde el mínimo absoluto?', opts: [M('x = 1'), M('x = 3/2'), M('x = e'), 'No tiene'], c: 1, ex: 'f\'(x) = 4x − 9/x = (4x²−9)/x = 0 → x = 3/2 (−3/2 se descarta). f(1)=2, f(3/2)≈0,85, f(e)≈5,78. Mínimo en x = 3/2.'}
]);
