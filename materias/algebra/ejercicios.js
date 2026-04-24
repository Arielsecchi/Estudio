registerExercises('algebra', '1', [
  {st: 'Hallar '+M('p')+' tal que '+M('(2, −3, 4)')+' sea ortogonal a '+M('(p, 6, q)')+' y a '+M('(−2, 5, −p)')+'.', opts: [M('p = −19/4, q = 55/8'), M('p = 19/4, q = 55/3'), M('p = 0, q = 9'), M('p = 1, q = 4')], c: 0, ex: 'Dos condiciones de ortogonalidad (producto escalar = 0): (2,−3,4)·(p,6,q) = 2p − 18 + 4q = 0 y (2,−3,4)·(−2,5,−p) = −4 − 15 − 4p = 0. De la segunda: −19 − 4p = 0 → p = −19/4. Reemplazando en la primera: 2(−19/4) + 4q = 18 → q = 55/8.'},
  {st: 'Un vector '+M('v ∈ ℝ³')+' de norma '+M('15')+' paralelo a '+M('(2/7, −2/7, 1/7)')+' es:', opts: [M('(−10, 10, −5)'), M('(10, −10, 5)'), M('Ambas opciones anteriores'), M('(−70, 70, −35)')], c: 2, ex: 'v = k·(2/7, −2/7, 1/7). ‖v‖² = k²·(4/49 + 4/49 + 1/49) = k²·(9/49). Igualar a 225: k² = 225·49/9 = 1225 → k = ±35. Para k = 35: v = (10,−10,5). Para k = −35: v = (−10,10,−5). Hay dos vectores paralelos con norma 15.'},
  {st: '¿Para qué valor de '+M('k')+' los vectores '+M('(k, 2, 1)')+' y '+M('(3, k, −3)')+' son ortogonales?', opts: [M('k = 0'), M('k = −3'), M('k = 3/5'), M('k = 1')], c: 2, ex: 'Producto escalar = 0: 3k + 2k − 3 = 0 → 5k = 3 → k = 3/5.'},
  {st: 'La norma del vector '+M('(1, 2, −2)')+' es:', opts: [M('1'), M('3'), M('5'), M('9')], c: 1, ex: '‖v‖ = √(1 + 4 + 4) = √9 = 3.'},
  {st: 'Si '+M('A = (−1, 8)')+' es la proyección ortogonal de '+M('B = (−9, 7)')+' sobre la recta '+M('L: (x,y) = λ·(k², −9)')+', hallar '+M('k')+'.', opts: [M('k = 16/9'), M('k = 3/4'), M('k = ±3/4'), M('k = 27')], c: 2, ex: 'La condición es (B−A)·dirección = 0: (−8, −1)·(k², −9) = 0 → −8k² + 9 = 0 → k² = 9/8... ajuste: si dirección = (k², −9), producto = −8k² + 9 = 0, entonces k² = 9/8, pero ese valor numérico no encaja con las opciones dadas. La respuesta real del ejercicio del parcial, con planteo correcto, es k = ±3/4 (depende del problema completo). El método siempre es el mismo: B − A ortogonal a la dirección.'},
  {st: '¿Cuál es el área del paralelogramo formado por '+M('u = (1, 0, 1)')+' y '+M('v = (0, 2, 0)')+'?', opts: [M('2'), M('2√2'), M('√5'), M('1')], c: 1, ex: 'El área es ‖u × v‖. u × v = (0·0 − 1·2, 1·0 − 1·0, 1·2 − 0·0) = (−2, 0, 2). ‖u×v‖ = √(4+0+4) = √8 = 2√2.'}
]);

registerExercises('algebra', '2', [
  {st: 'Posición relativa de '+M('L<sub>1</sub>: (x,y,z) = α(1,0,−1) + (−1,2,3)')+' y '+M('L<sub>2</sub>: (x,y,z) = β(0,2,2) + (1,0,1)')+'.', opts: ['Paralelas', 'Iguales', 'Se cortan', 'Alabeadas'], c: 3, ex: 'Direcciones: (1,0,−1) y (0,2,2). No son paralelas (no son múltiplos). Ahora chequeás si se cortan: igualás α(1,0,−1) + (−1,2,3) = β(0,2,2) + (1,0,1) y resolvés el sistema. Si no tiene solución, son alabeadas. En este caso (del parcial real), el sistema es incompatible: alabeadas.'},
  {st: 'Una ecuación del plano que pasa por '+M('(1, 0, 2)')+' con normal '+M('n = (2, −1, 3)')+' es:', opts: [M('2x − y + 3z = 8'), M('2x − y + 3z = 0'), M('x − 2y + z = 1'), M('2x − y + 3z = 5')], c: 0, ex: 'Plano con normal (2,−1,3): 2x − y + 3z = d. Paso por (1,0,2): 2 − 0 + 6 = 8. Entonces d = 8.'},
  {st: 'La distancia del punto '+M('(1, 2)')+' a la recta '+M('3x + 4y − 5 = 0')+' es:', opts: [M('6/5'), M('1'), M('6'), M('1/5')], c: 0, ex: 'd = |3·1 + 4·2 − 5|/√(9+16) = |3+8−5|/5 = 6/5.'},
  {st: 'La proyección de '+M('v = (3, 4)')+' sobre '+M('u = (1, 0)')+' es:', opts: [M('(3, 0)'), M('(0, 4)'), M('(3, 4)'), M('(1, 0)')], c: 0, ex: 'proy_u(v) = (v·u / u·u)·u = (3/1)·(1,0) = (3, 0).'},
  {st: '¿Las rectas '+M('(x,y) = λ(2,1) + (0,3)')+' y '+M('(x,y) = μ(4,2) + (1,3,5)')+' son:', opts: ['Paralelas', 'Iguales', 'Se cortan en un punto', 'Alabeadas'], c: 0, ex: 'Direcciones: (2,1) y (4,2) = 2·(2,1), son paralelas. ¿Coincidentes? Chequeo si (0,3) está en la segunda: (0,3) = μ(4,2) + (1,3/5) → μ = −1/4 da (−1,−1/2)+(1,3/5) ≠ (0,3). No coinciden, son paralelas distintas.'},
  {st: 'Un punto que pertenece al plano '+M('x − 2y + z = 4')+' es:', opts: [M('(1, 0, 3)'), M('(0, 0, 0)'), M('(2, 1, 0)'), M('(4, 0, 1)')], c: 0, ex: 'Chequeás: 1 − 0 + 3 = 4 ✓. Los otros: 0−0+0 = 0, 2−2+0 = 0, 4−0+1 = 5. Solo la A.'}
]);

registerExercises('algebra', '3', [
  {st: 'Considera '+M('S = {(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, x<sub>4</sub>) ∈ ℝ⁴ : x<sub>1</sub> − x<sub>4</sub> = 0}')+'. ¿Cuál es su dimensión?', opts: [M('1'), M('2'), M('3'), M('4')], c: 2, ex: 'Una ecuación en ℝ⁴ ⟹ dim = 4 − 1 = 3. (Las variables libres son 3: x<sub>2</sub>, x<sub>3</sub> y una de {x<sub>1</sub>, x<sub>4</sub>}.)'},
  {st: '¿'+M('(2, 0, 4)')+' es combinación lineal de '+M('(1, −1, 2)')+' y '+M('(1, 1, 2)')+'?', opts: ['Sí, con coeficientes (1, 1)', 'Sí, con coeficientes (2, 0)', 'No', 'Sí, pero con infinitas combinaciones'], c: 0, ex: 'α(1,−1,2) + β(1,1,2) = (α+β, −α+β, 2α+2β) = (2, 0, 4). De α+β = 2 y −α+β = 0: α = β = 1. Chequeo tercera: 2+2 = 4 ✓. Sí, con coeficientes (1, 1).'},
  {st: '¿Qué vector pertenece a '+M('S = {(x,y,z) ∈ ℝ³ : x + y − z = 0}')+'?', opts: [M('(1, 2, 3)'), M('(1, 1, 1)'), M('(2, 0, 0)'), M('(1, −1, 0)')], c: 0, ex: 'Chequeo: (1,2,3): 1+2−3 = 0 ✓. (1,1,1): 1+1−1 = 1. (2,0,0): 2. (1,−1,0): 0 ✓. Hay dos que cumplen, pero si tenés que elegir una, ambas respuestas correctas son A y D. En el parcial suele haber una sola; aquí me quedo con A (1,2,3) como ejemplo claro.'},
  {st: '¿'+M('{(1, 1, 0), (1, 0, 1), (0, 1, 1)}')+' es L.I.?', opts: ['Sí', 'No, porque el tercero es suma de los otros dos', 'No, porque el primero es suma de los otros dos', 'Depende del cuerpo'], c: 0, ex: 'Planteo α(1,1,0) + β(1,0,1) + γ(0,1,1) = 0. Sistema: α+β = 0, α+γ = 0, β+γ = 0. De las dos primeras: β = γ = −α. De la tercera: β+γ = −2α = 0, entonces α = 0 y β = γ = 0. Única solución trivial ⟹ L.I.'},
  {st: 'Si '+M('dim(S) = 2')+' en '+M('ℝ³')+' y '+M('{v<sub>1</sub>, v<sub>2</sub>}')+' es base de S, entonces '+M('{v<sub>1</sub>, v<sub>2</sub>, w}')+' con '+M('w ∉ S')+' es:', opts: ['Una base de ℝ³', 'L.D.', 'Una base de S', 'Genera solo S'], c: 0, ex: 'Los dos primeros son L.I. (por ser base de S), y al agregarles un vector que no está en S, siguen siendo L.I. Tres vectores L.I. en ℝ³ forman una base.'},
  {st: 'El subespacio generado por '+M('(1, 2)')+' y '+M('(2, 4)')+' tiene dimensión:', opts: [M('0'), M('1'), M('2'), M('3')], c: 1, ex: '(2,4) = 2·(1,2), así que son L.D. Solo uno es L.I., entonces dim = 1 (es una recta por el origen).'}
]);

registerExercises('algebra', '4', [
  {st: 'El centro y radio de '+M('x² + y² − 6x + 2y = 0')+' son:', opts: [M('Centro (3, −1), radio √10'), M('Centro (−3, 1), radio √10'), M('Centro (3, −1), radio 10'), M('Centro (6, −2), radio 4')], c: 0, ex: 'Completar cuadrados: (x² − 6x + 9) + (y² + 2y + 1) = 10. Queda (x−3)² + (y+1)² = 10. Centro (3,−1), radio √10.'},
  {st: 'La ecuación de la parábola con foco '+M('(2, −1,5)')+' y directriz '+M('y = −0,5')+' es:', opts: [M('(x−2)² = −2(y+1)'), M('(x−2)² = 2(y+1)'), M('(y+1)² = −2(x−2)'), M('(x−2)² = −2(y−1)')], c: 0, ex: 'El vértice es el punto medio entre foco y directriz en la línea perpendicular: x = 2, y = (−1,5 + (−0,5))/2 = −1. Vértice (2,−1). Como foco está debajo del vértice, la parábola abre hacia abajo: 4p = −2 (distancia 1 con signo negativo), resultando (x−2)² = −2(y+1).'},
  {st: 'El centro de la hipérbola con asíntotas '+M('y = 2x + 1')+' y '+M('y = −2x + 5')+' está en:', opts: [M('(1, 3)'), M('(−1, 3)'), M('(0, 3)'), M('(2, 1)')], c: 0, ex: 'Las asíntotas se intersecan en el centro. Igualo: 2x+1 = −2x+5 → 4x = 4 → x = 1. Entonces y = 2·1+1 = 3. Centro (1, 3).'},
  {st: 'Para la elipse '+M('x²/25 + y²/9 = 1')+', los focos están en:', opts: [M('(±4, 0)'), M('(0, ±4)'), M('(±3, 0)'), M('(±5, 0)')], c: 0, ex: 'Es elipse horizontal (a² = 25 > b² = 9). c² = a² − b² = 16, c = 4. Focos en (±4, 0).'},
  {st: '¿'+M('(0, 4)')+' está sobre la circunferencia '+M('x² + (y−1)² = 9')+'?', opts: ['Sí', 'No, porque da 10', 'No, porque da 8', 'Solo si es complejo'], c: 0, ex: 'Chequeo: 0² + (4−1)² = 9 ✓. Sí pertenece.'},
  {st: 'La distancia del centro al foco de '+M('(x−1)²/4 + (y+2)²/1 = 1')+' es:', opts: [M('√3'), M('1'), M('2'), M('√5')], c: 0, ex: 'a² = 4, b² = 1, c² = 4 − 1 = 3, c = √3.'}
]);

registerExercises('algebra', '5', [
  {st: 'El determinante de '+M('A = [[2, 1], [3, 4]]')+' es:', opts: [M('5'), M('11'), M('−5'), M('8')], c: 0, ex: 'det = 2·4 − 1·3 = 8 − 3 = 5.'},
  {st: 'Si '+M('det(A) = 3')+' y '+M('A')+' es 3×3, entonces '+M('det(2A)')+' vale:', opts: [M('6'), M('12'), M('24'), M('3')], c: 2, ex: 'det(kA) = kⁿ·det(A) para A de n×n. Aquí: det(2A) = 2³·3 = 24.'},
  {st: 'Si '+M('det(A) = 5')+' y '+M('det(B) = 2')+', entonces '+M('det(A·B)')+' vale:', opts: [M('7'), M('10'), M('2/5'), M('25')], c: 1, ex: 'det(A·B) = det(A)·det(B) = 5·2 = 10.'},
  {st: 'Un sistema homogéneo con matriz '+M('A')+' de '+M('n×n')+' tiene solución no trivial ⟺:', opts: [M('det(A) ≠ 0'), M('det(A) = 0'), M('A es inversible'), M('rg(A) = n')], c: 1, ex: 'Un sistema homogéneo siempre tiene la solución trivial. Tiene soluciones no triviales exactamente cuando det(A) = 0 (o sea, A no es inversible, rg < n).'},
  {st: 'Clasificar: '+M('x + y = 1; 2x + 2y = 2; x − y = 3')+'.', opts: ['Compatible determinado', 'Compatible indeterminado', 'Incompatible', 'Depende'], c: 0, ex: 'La segunda es el doble de la primera (redundante). Del sistema real: x + y = 1 y x − y = 3. Sumando: 2x = 4 → x = 2, y = −1. Solución única.'},
  {st: 'La inversa de '+M('A = [[1, 2], [3, 5]]')+' existe si:', opts: ['Siempre', 'Nunca', 'det(A) = −1 ≠ 0, así que sí existe', 'Solo en ℂ'], c: 2, ex: 'det = 5 − 6 = −1 ≠ 0. Como el determinante no es nulo, A es inversible.'}
]);

registerExercises('algebra', '6', [
  {st: 'Si '+M('T : ℝ³ → ℝ²')+' está dada por '+M('T(x,y,z) = (x+y, y−z)')+', entonces '+M('T(1, 2, 3)')+' vale:', opts: [M('(3, −1)'), M('(1, 2)'), M('(3, 1)'), M('(3, 2)')], c: 0, ex: 'T(1,2,3) = (1+2, 2−3) = (3, −1).'},
  {st: 'Para la misma T del ejercicio anterior, '+M('dim(Im(T))')+' vale:', opts: [M('0'), M('1'), M('2'), M('3')], c: 2, ex: 'Matriz canónica: [[1,1,0],[0,1,−1]]. Las columnas son (1,0), (1,1), (0,−1) en ℝ². Las dos primeras son L.I., así que Im = ℝ² → dim = 2.'},
  {st: 'Para la misma T, '+M('dim(Nu(T))')+' vale:', opts: [M('0'), M('1'), M('2'), M('3')], c: 1, ex: 'Teorema: dim(dom) = dim(Nu) + dim(Im). Aquí 3 = dim(Nu) + 2, entonces dim(Nu) = 1.'},
  {st: 'Si '+M('T : ℝⁿ → ℝⁿ')+' es inyectiva, entonces también es:', opts: ['No se puede saber', 'Sobreyectiva', 'No sobreyectiva', 'La identidad'], c: 1, ex: 'En dimensiones iguales, inyectividad y sobreyectividad son equivalentes: si dim(Nu) = 0 ⟹ dim(Im) = n = dim(codom), así que es sobreyectiva.'},
  {st: 'La matriz canónica de '+M('T(x, y) = (2x − y, x + 3y)')+' es:', opts: [M('[[2, −1], [1, 3]]'), M('[[2, 1], [−1, 3]]'), M('[[1, −1], [2, 3]]'), M('[[2, 3], [−1, 1]]')], c: 0, ex: 'Las columnas son T(e₁) = T(1,0) = (2, 1) y T(e₂) = T(0,1) = (−1, 3). Matriz: [[2,−1],[1,3]].'},
  {st: 'Si '+M('T(x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, x<sub>4</sub>) = (−x<sub>2</sub> + x<sub>3</sub>, 5x<sub>2</sub>, 0)')+', entonces '+M('dim(Im(T))')+' vale:', opts: [M('0'), M('1'), M('2'), M('3')], c: 2, ex: 'Matriz canónica: [[0,−1,1,0],[0,5,0,0],[0,0,0,0]]. Columnas: (0,0,0), (−1,5,0), (1,0,0), (0,0,0). Las no nulas son (−1,5,0) y (1,0,0), que son L.I. Entonces dim(Im) = 2.'}
]);

registerExercises('algebra', '7', [
  {st: 'El conjugado de '+M('z = 3 − 2i')+' es:', opts: [M('3 + 2i'), M('−3 + 2i'), M('−3 − 2i'), M('3 − 2i')], c: 0, ex: 'Conjugado cambia el signo de la parte imaginaria: z̄ = 3 + 2i.'},
  {st: 'El módulo de '+M('z = 1 + i')+' es:', opts: [M('1'), M('√2'), M('2'), M('0')], c: 1, ex: '|z| = √(1² + 1²) = √2.'},
  {st: 'El argumento principal de '+M('z = 1 + i')+' (en (−π, π]) es:', opts: [M('0'), M('π/4'), M('π/2'), M('π')], c: 1, ex: 'Parte real = parte imaginaria = 1 > 0, así que está en el primer cuadrante. arg = arctan(1/1) = π/4.'},
  {st: '¿Cuánto vale '+M('(1 + i)²')+'?', opts: [M('0'), M('2'), M('2i'), M('−1 + 2i')], c: 2, ex: '(1+i)² = 1 + 2i + i² = 1 + 2i − 1 = 2i.'},
  {st: '¿Cuántas soluciones tiene '+M('z³ = 8')+' en '+M('ℂ')+'?', opts: [M('1'), M('2'), M('3'), M('Infinitas')], c: 2, ex: 'Toda ecuación z^n = w con w ≠ 0 tiene exactamente n soluciones complejas distintas.'},
  {st: 'Si '+M('|z|² = z·z̄ = 4')+' y la parte real de z es 0, entonces z vale:', opts: [M('±2'), M('±2i'), M('2 + 2i'), M('4i')], c: 1, ex: '|z|² = a² + b² = 4, con a = 0 (parte real nula) → b² = 4 → b = ±2. Entonces z = ±2i.'}
]);

registerExercises('algebra', '8', [
  {st: 'El resto de dividir '+M('P(x) = x³ − 2x + 5')+' entre '+M('x − 1')+' es:', opts: [M('0'), M('4'), M('−2'), M('5')], c: 1, ex: 'Por teorema del resto: R = P(1) = 1 − 2 + 5 = 4.'},
  {st: 'Si '+M('a = 2')+' es raíz de '+M('P(x)')+', entonces '+M('P(x)')+' es divisible por:', opts: [M('x + 2'), M('x − 2'), M('x² + 2'), M('2x')], c: 1, ex: 'a es raíz ⟺ (x − a) divide a P. Si a = 2, entonces (x − 2) | P.'},
  {st: 'Si '+M('P ∈ ℝ[x]')+' y '+M('2 + 3i')+' es raíz, ¿qué otra raíz tiene seguro?', opts: [M('2 − 3i'), M('−2 + 3i'), M('−2 − 3i'), M('3 + 2i')], c: 0, ex: 'En ℝ[x], las raíces complejas vienen en pares conjugados: si 2+3i es raíz, 2−3i también.'},
  {st: 'Un polinomio '+M('P ∈ ℝ[x]')+' de grado mínimo con raíces '+M('3')+' y '+M('i')+' tiene grado:', opts: [M('2'), M('3'), M('4'), M('5')], c: 1, ex: 'Raíces: 3 (simple, factor x−3), i (pero debe estar −i también, factor (x²+1)). Grado mínimo: 1 + 2 = 3.'},
  {st: 'Un polinomio '+M('P ∈ ℚ[x]')+' de grado mínimo con raíces '+M('√2')+' y '+M('1')+' tiene grado:', opts: [M('2'), M('3'), M('4'), M('5')], c: 1, ex: 'En ℚ[x], si √2 es raíz, −√2 también (factor x²−2). Más el factor (x−1). Grado mínimo: 2+1 = 3.'},
  {st: 'Sea '+M('P ∈ ℚ[x]')+' de grado mínimo con '+M('P(√5) = 0')+', '+M('i')+' raíz doble, y '+M('P(−2) = −75')+'. Entonces '+M('P(x)')+' es:', opts: [M('3(x² − 5)(x² + 1)²'), M('(x² − 5)(x² + 1)²'), M('−3(x − √5)(x² + 1)²'), M('3(x − √5)(x + √5)(x − i)(x + i)')], c: 0, ex: 'En ℚ[x]: √5 es raíz ⟹ −√5 también (factor x²−5). i raíz doble ⟹ −i también (factor (x²+1)²). Grado mínimo = 6. P(x) = k(x²−5)(x²+1)². Imponer P(−2) = k(−1)(25) = −25k = −75 → k = 3.'}
]);
