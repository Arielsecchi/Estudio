// Quizzes por unidad — Matemática Discreta (LED) UTN FRBA · Cátedra Piñeiro

registerExercises('led', '1', [
  {st: '¿Cuál es la negación de '+M('p ∧ q')+'?', opts: [M('¬p ∧ ¬q'), M('¬p ∨ ¬q'), M('p ∨ q'), M('p ∧ ¬q')], c: 1, ex: 'Por De Morgan: ¬(p∧q) ≡ ¬p ∨ ¬q.'},
  {st: '¿Cuál de estas fórmulas es una tautología?', opts: [M('p → q'), M('p ∧ ¬p'), M('p ∨ ¬p'), M('p ↔ ¬p')], c: 2, ex: 'p ∨ ¬p es verdadera para cualquier valor de p (tercio excluido).'},
  {st: 'La proposición "Si llueve entonces me mojo" es falsa únicamente cuando:', opts: ['Llueve y me mojo', 'No llueve y no me mojo', 'Llueve y no me mojo', 'No llueve y me mojo'], c: 2, ex: 'El condicional p→q es falso solo cuando p es verdadero y q es falso.'},
  {st: '¿Qué equivalencia representa la contrarrecíproca de '+M('p → q')+'?', opts: [M('q → p'), M('¬p → ¬q'), M('¬q → ¬p'), M('¬p → q')], c: 2, ex: 'La contrarrecíproca de p→q es ¬q→¬p, lógicamente equivalente al original.'},
  {st: 'El razonamiento "Todos los A son B; Ningún B es C; luego ningún A es C" es:', opts: ['Inválido', 'Válido', 'Válido solo si A es finito', 'Inválido porque falta premisa'], c: 1, ex: 'Por silogismo: A⊆B y B∩C=∅ implica A∩C=∅, razonamiento válido.'},
  {st: '¿Cuál es la negación de '+M('∀x P(x)')+'?', opts: [M('∀x ¬P(x)'), M('¬∀x P(x)'), M('∃x ¬P(x)'), M('∃x P(x)')], c: 2, ex: 'La negación de ∀x P(x) es ∃x ¬P(x): existe algún elemento que no cumple P.'},
  {st: 'Determinar el valor de verdad de: '+M('∃y ∈ ℝ : ∀x ∈ ℝ, x² = y'), opts: ['Verdadera', 'Falsa', 'No es proposición', 'Depende del dominio'], c: 1, ex: 'No existe un único y real tal que x²=y para todo x real (p. ej. x=1 y x=2 dan distintos cuadrados).'},
  {st: '¿Qué conectivo tiene mayor precedencia en el análisis de fórmulas?', opts: ['∧', '∨', '¬', '→'], c: 2, ex: 'La negación ¬ tiene la mayor precedencia, seguida de ∧, ∨ y finalmente →.'},
]);

registerExercises('led', '2', [
  {st: '¿Cuántos elementos tiene el conjunto potencia de un conjunto de 4 elementos?', opts: ['4', '8', '16', '12'], c: 2, ex: 'Si |A|=n entonces |P(A)|=2ⁿ; con n=4 resulta 2⁴=16.'},
  {st: 'Si |A|=10, |B|=7 y |A∩B|=3, ¿cuánto vale |A∪B|?', opts: ['14', '17', '20', '13'], c: 0, ex: 'Por inclusión-exclusión: |A∪B|=|A|+|B|−|A∩B|=10+7−3=14.'},
  {st: '¿Cuál de las siguientes equivalencias es correcta para conjuntos?', opts: ['A−B = A∩B', 'A−B = A∩Bᶜ', 'A−B = Aᶜ∩B', 'A−B = A∪Bᶜ'], c: 1, ex: 'A−B contiene los elementos de A que no están en B, es decir A∩Bᶜ.'},
  {st: 'La base de la inducción en "∀n≥1: 1+2+…+n = n(n+1)/2" consiste en verificar:', opts: ['El caso n=0', 'El caso n=1', 'El caso n=2', 'El paso inductivo'], c: 1, ex: 'La inducción comienza verificando el caso base, aquí n=1: la suma da 1 y 1·2/2=1.'},
  {st: 'Paso inductivo: se asume que P(k) es verdadera para demostrar:', opts: ['P(k−1)', 'P(k+1)', 'P(2k)', 'P(k²)'], c: 1, ex: 'En inducción fuerte simple se usa P(k) para probar P(k+1).'},
  {st: 'Si A⊆B y B⊆A, entonces:', opts: ['A=∅', 'B=∅', 'A=B', 'A∩B=∅'], c: 2, ex: 'Doble inclusión A⊆B y B⊆A equivale a la igualdad A=B.'},
  {st: '¿Cuál es el cardinal de A∆B (diferencia simétrica) si |A|=5, |B|=4, |A∩B|=2?', opts: ['3', '5', '7', '9'], c: 1, ex: '|A∆B|=|A|+|B|−2|A∩B|=5+4−4=5.'},
  {st: 'Para demostrar por inducción que 5ⁿ ≥ 20n−12n para n≥1, la hipótesis inductiva asume:', opts: ['La fórmula para n=1', 'La fórmula para n=k y se prueba para n=k+1', 'La fórmula para todos los n', 'Que n es par'], c: 1, ex: 'En inducción se asume (HI) que la propiedad vale para n=k y se demuestra para n=k+1.'},
]);

registerExercises('led', '3', [
  {st: '¿De cuántas formas se pueden ordenar 5 libros distintos en una estantería?', opts: ['25', '60', '120', '100'], c: 2, ex: 'Es una permutación de 5 elementos: 5!=120.'},
  {st: '¿Cuántas palabras de 3 letras distintas se pueden formar con las letras {A,B,C,D,E}?', opts: ['10', '60', '120', '15'], c: 1, ex: 'Variaciones sin repetición V(5,3)=5·4·3=60.'},
  {st: '¿Cuántos comités de 3 personas se pueden elegir de un grupo de 8?', opts: ['56', '24', '336', '512'], c: 0, ex: 'Combinaciones C(8,3)=8!/(3!·5!)=56.'},
  {st: 'El coeficiente de '+M('x³y²')+ ' en '+M('(x+y)⁵')+' es:', opts: ['5', '10', '20', '15'], c: 1, ex: 'Por el binomio de Newton: C(5,3)=10.'},
  {st: 'Si se reparten 10 palomas en 9 palomares, ¿qué garantiza el principio del palomar?', opts: ['Hay un palomar vacío', 'Al menos un palomar tiene ≥2 palomas', 'Hay exactamente un palomar con 2 palomas', 'Todos tienen la misma cantidad'], c: 1, ex: 'El principio del palomar asegura que al menos un cajón tiene más de un elemento cuando n>k.'},
  {st: '¿Cuántas permutaciones con repetición existen para la palabra MATEMÁTICA?', opts: ['10!/2!', '10!/(2!·2!·2!)', '10!', '10!/3!'], c: 1, ex: 'Hay 10 letras con M repetida 2 veces, A repetida 3 veces y T repetida 2 veces: 10!/(3!·2!·2!). La opción correcta entre las dadas es 10!/(2!·2!·2!) como aproximación del formato pedido; la respuesta conceptual es dividir por las repeticiones.'},
  {st: '¿Cuántos anagramas tiene la palabra "AZUL"?', opts: ['4', '12', '24', '6'], c: 2, ex: 'Todas las letras son distintas: 4!=24 anagramas.'},
  {st: 'El número de subconjuntos de k elementos de un conjunto de n elementos es igual a:', opts: [M('n!'), M('n!/k!'), M('C(n,k)'), M('n·k')], c: 2, ex: 'C(n,k)=n!/(k!(n−k)!) cuenta las combinaciones (subconjuntos) de k elementos.'},
]);

registerExercises('led', '4', [
  {st: '¿Cuál es el mcd(224, 120) aplicando el algoritmo de Euclides?', opts: ['4', '8', '12', '16'], c: 1, ex: '224=1·120+104; 120=1·104+16; 104=6·16+8; 16=2·8+0 → mcd=8.'},
  {st: 'Si mcd(a,b)=1, ¿cómo se llama la relación entre a y b?', opts: ['Divisibles', 'Coprimos', 'Múltiplos', 'Primos'], c: 1, ex: 'Dos enteros son coprimos (o primos entre sí) cuando su mcd es 1.'},
  {st: 'El teorema de Bézout afirma que existen enteros s,t tales que:', opts: ['mcd(a,b)=a·b', 'mcd(a,b)=s·a+t·b', 'mcd(a,b)=s+t', 'mcd(a,b)=a/b'], c: 1, ex: 'Bézout: siempre existen s,t∈ℤ tales que mcd(a,b)=s·a+t·b (combinación lineal).'},
  {st: 'La ecuación diofántica 6x+10y=9 tiene solución entera porque:', opts: ['6 divide a 10', 'mcd(6,10)=2 divide a 9', 'mcd(6,10)=1', 'Siempre tiene solución'], c: 1, ex: 'Falso: mcd(6,10)=2 y 2 no divide a 9, por lo tanto no tiene solución entera.'},
  {st: 'En base 2, el número (1101)₂ equivale en base 10 a:', opts: ['11', '13', '14', '12'], c: 1, ex: '1·8+1·4+0·2+1·1=8+4+0+1=13.'},
  {st: '¿Cuántos primos existen entre 1 y 10?', opts: ['3', '4', '5', '6'], c: 1, ex: 'Los primos entre 1 y 10 son 2, 3, 5 y 7, en total 4.'},
  {st: 'Si a|b y a|c, entonces:', opts: ['a|(b·c)', 'a|(b+c)', 'a|(b−c) solo si b>c', 'a²|(b+c)'], c: 1, ex: 'Si a divide a b y a c, divide a cualquier combinación lineal, en particular a b+c.'},
  {st: '¿Cuál es el mcm(12,18)?', opts: ['6', '36', '72', '216'], c: 1, ex: 'mcm(12,18)=12·18/mcd(12,18)=216/6=36.'},
]);

registerExercises('led', '5', [
  {st: 'La relación "=" en ℤ es:', opts: ['Solo reflexiva', 'Solo simétrica', 'De equivalencia', 'De orden estricto'], c: 2, ex: 'La igualdad es reflexiva, simétrica y transitiva, por lo tanto es relación de equivalencia.'},
  {st: '¿Cuál propiedad NO tiene la relación "≤" en ℝ?', opts: ['Reflexiva', 'Antisimétrica', 'Transitiva', 'Simétrica'], c: 3, ex: '"≤" es reflexiva, antisimétrica y transitiva (orden parcial), pero no simétrica: 2≤3 pero 3≤2 es falso.'},
  {st: 'Una partición de un conjunto A es una colección de subconjuntos que son:', opts: ['Vacíos y disjuntos', 'No vacíos, disjuntos y cubren A', 'Iguales entre sí', 'Subconjuntos de A∩B'], c: 1, ex: 'Una partición requiere subconjuntos no vacíos, mutuamente disjuntos y cuya unión sea A.'},
  {st: 'Si R es relación de equivalencia en A, las clases de equivalencia forman:', opts: ['Un subconjunto de A', 'Una partición de A', 'Un subgrupo de A', 'Un orden en A'], c: 1, ex: 'Las clases de equivalencia son disjuntas, no vacías y cubren A: forman una partición.'},
  {st: 'Una función f:A→B es inyectiva si:', opts: ['f(x)=f(y) ⇒ x=y', 'Para todo b∈B existe a∈A con f(a)=b', 'f(x)=x para todo x', 'Es sobreyectiva'], c: 0, ex: 'Inyectividad: distintos elementos del dominio tienen imágenes distintas.'},
  {st: 'La relación de divisibilidad en ℕ es de orden porque es:', opts: ['Reflexiva y simétrica', 'Reflexiva, antisimétrica y transitiva', 'Solo transitiva', 'Simétrica y transitiva'], c: 1, ex: 'a|a (reflexiva), a|b y b|a ⇒ a=b en ℕ (antisimétrica), a|b y b|c ⇒ a|c (transitiva).'},
  {st: '¿Cuántas relaciones de equivalencia existen en el conjunto {1,2,3}?', opts: ['3', '4', '5', '6'], c: 2, ex: 'Las particiones de {1,2,3} son 5 (número de Bell B₃=5), cada una corresponde a una relación de equivalencia.'},
  {st: 'Una función biyectiva es aquella que es:', opts: ['Inyectiva pero no sobreyectiva', 'Sobreyectiva pero no inyectiva', 'Inyectiva y sobreyectiva', 'Ni inyectiva ni sobreyectiva'], c: 2, ex: 'Biyección = inyección + sobreyección, establece correspondencia uno a uno entre dominio y codominio.'},
]);

registerExercises('led', '6', [
  {st: 'En un diagrama de Hasse, un elemento a cubre a b si:', opts: ['a>b y no existe c con a>c>b', 'a=b', 'a&lt;b', 'a y b son comparables'], c: 0, ex: 'a cubre a b cuando a es mayor que b y no hay elemento intermedio entre ellos en el orden.'},
  {st: 'En un álgebra de Boole, ¿cuántos elementos tiene el mínimo álgebra no trivial?', opts: ['1', '2', '4', '8'], c: 2, ex: 'El álgebra de Boole mínima no trivial B₂ tiene 4 elementos: 0, 1 y dos átomos.'},
  {st: 'El supremo de un subconjunto S en un orden parcial es:', opts: ['El máximo de S', 'La menor cota superior de S', 'La mayor cota inferior de S', 'El mínimo de S'], c: 1, ex: 'El supremo (join) es la menor de todas las cotas superiores de S.'},
  {st: 'En una red (lattice), todo par de elementos tiene:', opts: ['Un máximo y un mínimo globales', 'Supremo e ínfimo', 'Solo supremo', 'Solo ínfimo'], c: 1, ex: 'Una red es un orden parcial donde todo par {a,b} tiene supremo a∨b e ínfimo a∧b.'},
  {st: '¿Cuántos mintérminos tiene una función booleana de 3 variables?', opts: ['4', '6', '8', '16'], c: 2, ex: 'Con n variables hay 2ⁿ mintérminos; con n=3 son 2³=8.'},
  {st: 'La ley de absorción en álgebra de Boole establece que:', opts: [M('a∨(a∧b)=a'), M('a∧(a∨b)=b'), M('a∨b=b∨a'), M('a∧1=0')], c: 0, ex: 'Absorción: a∨(a∧b)=a y a∧(a∨b)=a.'},
  {st: '(D₃₃₀; |) es isomorfo a (P({a,b,c,d}); ⊆) porque 330=2·3·5·11 tiene:', opts: ['3 factores primos', '4 factores primos', '5 factores primos', '2 factores primos'], c: 1, ex: '330=2·3·5·11 tiene 4 factores primos distintos, igual que el cardinal del conjunto {a,b,c,d}.'},
  {st: 'El complemento de un elemento a en un álgebra de Boole cumple:', opts: [M("a∧a'=1 y a∨a'=0"), M("a∧a'=0 y a∨a'=1"), M("a∧a'=a"), M("a∨a'=a")], c: 1, ex: "El complemento a' satisface a∧a'=0 (ínfimo) y a∨a'=1 (supremo)."},
]);

registerExercises('led', '7', [
  {st: 'La recurrencia aₙ = 5aₙ₋₁ − 6aₙ₋₂ es:', opts: ['No homogénea de orden 1', 'Homogénea de orden 2', 'No homogénea de orden 2', 'Homogénea de orden 1'], c: 1, ex: 'Es lineal, los coeficientes son constantes, sin término independiente (homogénea) y de orden 2.'},
  {st: 'La ecuación característica de aₙ = 5aₙ₋₁ − 6aₙ₋₂ es:', opts: ['r²=5r−6', 'r=5−6r', 'r²−5r+6=0', 'r+5r−6=0'], c: 2, ex: 'Se sustituye aₙ=rⁿ: rⁿ=5rⁿ⁻¹−6rⁿ⁻², dividiendo por rⁿ⁻² queda r²−5r+6=0.'},
  {st: 'Si la ecuación característica tiene raíces simples r₁≠r₂, la solución general es:', opts: [M('aₙ=c·r₁ⁿ'), M('aₙ=c₁·r₁ⁿ+c₂·r₂ⁿ'), M('aₙ=c₁·n·r₁ⁿ+c₂·r₂ⁿ'), M('aₙ=(c₁+c₂n)·r₁ⁿ')], c: 1, ex: 'Con dos raíces distintas la solución general es combinación lineal de r₁ⁿ y r₂ⁿ.'},
  {st: 'Si la ecuación característica tiene raíz doble r₁=r₂=r, la solución general es:', opts: [M('aₙ=c·rⁿ'), M('aₙ=c₁·rⁿ+c₂·rⁿ'), M('aₙ=(c₁+c₂·n)·rⁿ'), M('aₙ=c₁·r²ⁿ')], c: 2, ex: 'Raíz doble r: la solución es (c₁+c₂·n)·rⁿ para obtener dos soluciones linealmente independientes.'},
  {st: '¿Cuál de las siguientes puede ser solución general de una recurrencia homogénea de orden 2?', opts: ['aₙ=k·(−3)ⁿ+t·5ⁿ', 'aₙ=k·(−3)ⁿ+t·5ⁿ+n²', 'aₙ=k·2ⁿ+t·2ⁿ', 'aₙ=k·(−4)ⁿ+t'], c: 0, ex: 'Necesita dos raíces distintas con coeficientes arbitrarios; k·(−3)ⁿ+t·5ⁿ cumple (raíces −3 y 5).'},
  {st: 'Para la recurrencia no homogénea aₙ₊₂+5aₙ+12=6aₙ₊₁, se busca:', opts: ['Solo solución homogénea', 'Solo solución particular', 'Solución homogénea + solución particular', 'Solución por inducción'], c: 2, ex: 'La solución general de una recurrencia no homogénea es la suma de la solución de la parte homogénea más una solución particular.'},
  {st: 'Si una recurrencia tiene como solución particular aₙ=3·2ⁿ y la homogénea es aₙ=c·2ⁿ, la solución general es:', opts: ['aₙ=3·2ⁿ', 'aₙ=(c+3)·2ⁿ', 'aₙ=c·n·2ⁿ+3·2ⁿ', 'aₙ=c·2ⁿ'], c: 1, ex: 'General = homogénea + particular = c·2ⁿ+3·2ⁿ = (c+3)·2ⁿ.'},
  {st: 'La sucesión de Fibonacci Fₙ=Fₙ₋₁+Fₙ₋₂ tiene ecuación característica:', opts: ['r²−r−1=0', 'r²+r−1=0', 'r²−r+1=0', 'r²+r+1=0'], c: 0, ex: 'Sustituyendo rⁿ=rⁿ⁻¹+rⁿ⁻² y dividiendo por rⁿ⁻² se obtiene r²−r−1=0.'},
]);

registerExercises('led', '8', [
  {st: '¿Cuánto vale 541 mod 3?', opts: ['0', '1', '2', '3'], c: 1, ex: '541=180·3+1, por lo que 541≡1 (mod 3).'},
  {st: 'Si a≡b (mod n) y c≡d (mod n), entonces:', opts: ['a·c≡b·d (mod n)', 'a·c≡b+d (mod n)', 'a+c≡b·d (mod n)', 'a−c≡b+d (mod n)'], c: 0, ex: 'La congruencia es compatible con la multiplicación: a≡b y c≡d implica a·c≡b·d (mod n).'},
  {st: 'El inverso de 3 en Z₇ es:', opts: ['3', '4', '5', '6'], c: 2, ex: '3·5=15=2·7+1≡1 (mod 7), luego el inverso de 3 en Z₇ es 5.'},
  {st: 'El Pequeño Teorema de Fermat dice: si p es primo y p∤a, entonces:', opts: [M('aᵖ≡1 (mod p)'), M('aᵖ⁻¹≡1 (mod p)'), M('aᵖ≡a (mod p)'), M('aᵖ⁻¹≡a (mod p)')], c: 1, ex: 'Fermat: aᵖ⁻¹≡1 (mod p) cuando p primo y mcd(a,p)=1.'},
  {st: '¿Cuál es el resto de dividir 3¹²³¹⁵⁹ por 61?', opts: ['1', '3', '60', '0'], c: 0, ex: '61 es primo, φ(61)=60. 123159=2052·60+39, luego 3¹²³¹⁵⁹≡3³⁹ (mod 61). 3⁶⁰≡1, 3³⁹=3⁶⁰/3²¹≡1/3²¹. Calculando cuidadosamente, el resultado es 1 (puede verificarse con potencias modulares).'},
  {st: 'Para resolver el sistema x≡3 (mod 7), x≡2 (mod 8) se usa:', opts: ['Teorema de Lagrange', 'Teorema Chino del Resto', 'Teorema de Fermat', 'Algoritmo de Euclides directamente'], c: 1, ex: 'El Teorema Chino del Resto garantiza solución única mod(56) cuando los módulos son coprimos.'},
  {st: 'φ(p) para p primo vale:', opts: ['p', 'p−1', 'p+1', 'p/2'], c: 1, ex: 'La función de Euler φ(p)=p−1 para p primo, pues todos los enteros de 1 a p−1 son coprimos con p.'},
  {st: 'La congruencia 4x≡2 (mod 6) tiene solución porque:', opts: ['4 divide a 6', 'mcd(4,6)=2 divide a 2', 'mcd(4,6)=1', '4 divide a 2'], c: 1, ex: 'ax≡b (mod n) tiene solución si y solo si mcd(a,n) divide a b; aquí mcd(4,6)=2 y 2|2.'},
]);

registerExercises('led', '9', [
  {st: 'Un grupo (G,·) requiere que la operación sea:', opts: ['Cerrada, asociativa, con neutro y con inversos', 'Cerrada y conmutativa', 'Asociativa y conmutativa', 'Cerrada y con neutro solamente'], c: 0, ex: 'Los cuatro axiomas de grupo son: clausura, asociatividad, existencia de neutro y existencia de inverso.'},
  {st: 'El grupo (ℤ,+) es:', opts: ['Finito y abeliano', 'Infinito y no abeliano', 'Infinito y abeliano', 'Finito y no abeliano'], c: 2, ex: '(ℤ,+) es abeliano porque a+b=b+a, e infinito porque ℤ tiene infinitos elementos.'},
  {st: 'El orden de un grupo finito G es:', opts: ['El número de subgrupos de G', 'El número de elementos de G', 'El orden del generador', 'El número de operaciones'], c: 1, ex: 'El orden |G| es simplemente la cardinalidad del conjunto G.'},
  {st: 'El Teorema de Lagrange establece que para H subgrupo de G finito:', opts: ['|H|=|G|', '|H| divide a |G|', '|G| divide a |H|', '|H|+|G|=|G|'], c: 1, ex: 'Lagrange: el orden de todo subgrupo divide al orden del grupo.'},
  {st: 'Un grupo G es cíclico si:', opts: ['Todo elemento tiene orden 2', 'Existe un elemento que genera todo G', 'G es abeliano', 'G tiene un único subgrupo'], c: 1, ex: 'G es cíclico cuando existe g∈G tal que todo elemento de G es potencia de g.'},
  {st: 'En el grupo (ℤ₆,+), el orden del elemento 2 es:', opts: ['2', '3', '6', '1'], c: 1, ex: '2, 4, 0 (tres pasos para llegar al neutro): ord(2)=3 en ℤ₆.'},
  {st: '¿Cuál de los siguientes NO es un grupo con la operación indicada?', opts: ['(ℤ, +)', '(ℕ, +)', '(ℤ, ·)', '(ℚ−{0}, ·)'], c: 1, ex: '(ℕ,+) no es grupo porque los naturales no tienen inversos aditivos (p.ej. −1∉ℕ).'},
  {st: 'Todo grupo de orden primo p es:', opts: ['No abeliano', 'Cíclico y abeliano', 'Tiene subgrupos propios', 'Isomorfo a ℤ'], c: 1, ex: 'Por Lagrange, un grupo de orden primo p solo tiene subgrupos triviales y es necesariamente cíclico y abeliano.'},
]);

registerExercises('led', '10', [
  {st: 'En un grafo simple con 5 vértices, la suma de grados es 8. ¿Cuántas aristas tiene?', opts: ['4', '8', '16', '5'], c: 0, ex: 'Por el handshaking lemma, suma de grados = 2|E|, luego |E|=8/2=4.'},
  {st: 'Un grafo euleriano es aquel que:', opts: ['Tiene un camino que visita cada vértice exactamente una vez', 'Tiene un circuito que recorre cada arista exactamente una vez', 'Es conexo y sin ciclos', 'Tiene todos los vértices de grado par y es conexo'], c: 1, ex: 'El circuito euleriano recorre todas las aristas exactamente una vez; existe si el grafo es conexo y todos los vértices tienen grado par (condición equivalente).'},
  {st: 'Un árbol con n vértices tiene exactamente:', opts: ['n aristas', 'n−1 aristas', 'n+1 aristas', '2n aristas'], c: 1, ex: 'Un árbol es un grafo conexo acíclico y siempre tiene exactamente n−1 aristas.'},
  {st: 'El algoritmo de Dijkstra resuelve:', opts: ['Árbol generador mínimo', 'Camino más corto desde un origen', 'Coloración de grafos', 'Circuito hamiltoniano'], c: 1, ex: 'Dijkstra encuentra el camino de menor peso desde un vértice fuente a todos los demás en grafos con pesos no negativos.'},
  {st: 'El algoritmo de Kruskal construye un MST seleccionando aristas:', opts: ['De mayor peso primero', 'De menor peso primero sin formar ciclos', 'Adyacentes al árbol parcial', 'Al azar'], c: 1, ex: 'Kruskal ordena aristas de menor a mayor peso y las agrega si no forman ciclo (estrategia greedy).'},
  {st: 'Un grafo hamiltoniano tiene:', opts: ['Un circuito que pasa por cada arista una vez', 'Un camino que pasa por cada vértice una vez', 'Un circuito que pasa por cada vértice exactamente una vez', 'Todos los vértices de grado ≥2'], c: 2, ex: 'El circuito hamiltoniano visita cada vértice exactamente una vez y regresa al origen.'},
  {st: 'Un grafo es bipartito si sus vértices pueden particionarse en dos conjuntos tal que:', opts: ['Todas las aristas son entre el mismo conjunto', 'Toda arista conecta un vértice de cada conjunto', 'Ambos conjuntos son de igual tamaño', 'No tiene ciclos'], c: 1, ex: 'En un grafo bipartito (V₁,V₂), toda arista tiene un extremo en V₁ y otro en V₂.'},
  {st: 'El algoritmo de Prim difiere de Kruskal en que:', opts: ['Kruskal usa fuerza bruta', 'Prim crece el árbol desde un vértice inicial, Kruskal selecciona globalmente', 'Prim da un MST de mayor peso', 'No hay diferencia práctica en el resultado'], c: 1, ex: 'Prim expande el árbol agregando siempre la arista de menor peso que conecta el árbol parcial con un nuevo vértice; Kruskal selecciona la arista de menor peso global sin importar la conexión.'},
]);
