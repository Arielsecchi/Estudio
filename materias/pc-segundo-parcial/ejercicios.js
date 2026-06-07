// Ejercicios PC · 2° Parcial — TRANSCRIPTOS TAL CUAL de parciales reales (cátedra Camejo/Balbiano, 2023-2025).
// Cada ejercicio indica su origen (año · tema · ejercicio). La opción correcta es la marcada con X en el parcial original.
// En los ejercicios "¿cuál versión funciona?", las 4 versiones se muestran como bloques en el enunciado
// y las opciones son las etiquetas (1/2/3/4 o A/B/C/D), igual que se marca en la matriz de respuestas.

registerExercises('pc-segundo-parcial', '1', [
  {st: '¿Cómo es el 2° parcial de PC (cátedra Camejo/Balbiano)?', opts: ['Hay que escribir programas completos desde cero', 'Son entre 9 y 13 preguntas de opción múltiple, una sola correcta, que se vuelcan en una matriz', 'Es un examen oral', 'Es un único ejercicio largo de programación'], c: 1, ex: 'Según los parciales 2023–2025: es 100% opción múltiple, entre 9 y 13 preguntas (2025: 9 · 2024: 10 · 2023: 11 a 13), cada una con UNA sola respuesta correcta que se marca con una X en una matriz de opciones. "Sólo se considerarán las respuestas anotadas en la matriz". ▸ Por qué las otras: nunca se programa desde cero ni es oral; son varias preguntas, no una.'},
  {st: 'En el parcial, cada pregunta tiene uno de DOS formatos posibles. ¿Cuáles son?', opts: ['Verdadero/Falso y desarrollo', 'O predecís la salida de un programa, o elegís cuál de 4 versiones de un código cumple lo pedido', 'Multiple choice y completar huecos', 'Solo armar tablas de verdad'], c: 1, ex: 'Los dos formatos reales: (1) "¿Qué imprime / qué contiene / cómo queda el archivo?" → trazás la ejecución y elegís la salida correcta; (2) "¿Cuál de estas 4 versiones funciona?" → comparás 4 fragmentos casi iguales y detectás el que cumple. ▸ Por eso practicar trazando código es exactamente lo que vas a hacer el día del parcial.'},
  {st: 'En el parcial 2025 (9 preguntas), ¿cómo se reparte el puntaje?', opts: ['Todas las preguntas valen lo mismo', 'Las preguntas 1 a 5 valen 1 punto cada una; las 6 a 9 valen 2 puntos (o 0)', 'Solo cuentan las últimas 4', 'Cada pregunta vale 2 puntos'], c: 1, ex: 'Del encabezado real 2025: "Las preguntas de la 1 a la 5 inclusive permiten acumular 1 punto; de la 6 a la 9 cada una acumula 2 puntos o 0". Las últimas (2 puntos) son las más integradoras: predicción de salida con map/filter, elegir la estructura de datos correcta y pandas. ▸ Conviene asegurar las primeras y no dejar sin responder las de 2 puntos.'}
]);

registerExercises('pc-segundo-parcial', '2', [
  {st: `¿Cuál de los siguientes diccionarios tiene todas sus claves numéricas (tipo int, float o complex)?`, opts: [`<code>{'1':2, '23':5, '0':13}</code>`, `<code>{1:'uno', 2:'dos', True:'V', False:'F'}</code>`, `<code>{0:'3', 2:66, 5:3.45, 1:[-2,5]}</code>`, `<code>{('1','0'):2, ('3','5'):44}</code>`], c: 2, ex: `La consigna pide claves de tipo int/float/complex. En la opción C las claves son 0, 2, 5 y 1: todas enteras (lo que esté del lado del VALOR —incluso una lista— no importa). ▸ Opción A: las claves '1', '23' y '0' van entre comillas → son strings. ▸ Opción B (la trampa): True y False son bool; aunque bool es subtipo de int, el parcial no la da por válida porque pide int/float/complex, y además 1 y True son la MISMA clave (colisionan). ▸ Opción D: las claves son tuplas, no números. ▸ <i>(Parcial real 2025 · T1 · E1)</i>`},
  {st: `¿Cuál de los siguientes diccionarios tiene todas sus claves numéricas (tipo int, float o complex)?`, opts: [`<code>a = True</code> &nbsp; <code>{a:'verano', True:False, 1.25:'invierno'}</code>`, `<code>a = 1</code> &nbsp; <code>{True:a, 1:'uno', 4:'cuatro'}</code>`, `<code>a = str(True)</code> &nbsp; <code>{a[0]:0, 2:66, 5:3.45, a:[-2,5]}</code>`, `<code>a = int(True)</code> &nbsp; <code>{2:('1','0'), a:('3','5')}</code>`], c: 3, ex: `Hay que resolver primero cuánto vale <code>a</code>. ▸ Opción D: <code>a = int(True)</code> vale 1, así que las claves son 2 y 1: ambas enteras (los valores son tuplas, no importa). ✓ ▸ Opción A: <code>a = True</code> → claves True (bool) y 1.25; además a y True colisionan. ▸ Opción B: claves True (bool), 1 y 4; True y 1 colisionan. ▸ Opción C: <code>a = str(True)</code> es 'True', entonces a[0] es 'T' y a es 'True' → claves string. ▸ <i>(Parcial real 2025 · T5 · E1)</i>`},
  {st: `¿Cuál versión de la función <code>ingreso()</code> valida correctamente los datos de acceso a una cuenta de mail? Deben coincidir usuario y password.
<pre class="code-block"># users contiene  mail: [password, usuario]
users = {'info@usina.com.ar': ['X25fc230', 'joanaBur'],
         'iro@hotmail.com':   ['Irma1211', 'rojas_27'],
         'ergo@gmail.com':    ['joacoS01', 'infoGENERAL']}

while not ingreso(users):
    print('Datos de Acceso Erróneos')</pre>
<b>Opción 1</b>
<pre class="code-block">def ingreso(usr):
    usuario = input('Usuario: ')
    passw = input('Password: ').lower()
    resp = False
    for datos in usr:
        if usr[datos][0] == usuario:
            resp = True
    return resp</pre>
<b>Opción 2</b>
<pre class="code-block">def ingreso(usr):
    usuario = input('Usuario: ')
    passw = input('Password: ')
    resp = False
    for datos in usr:
        if usr[datos] == [passw, usuario]:
            resp = True
    return resp</pre>
<b>Opción 3</b>
<pre class="code-block">def ingreso(usr):
    usuario = input('Usuario: ')
    passw = input('Password: ')
    return usuario in usr or passw in usr</pre>
<b>Opción 4</b>
<pre class="code-block">def ingreso(usr):
    usuario = input('Usuario: ').lower()
    passw = input('Password: ').lower()
    return usuario in usr and passw in usr</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 1, ex: `Cada clave (un mail) guarda la lista <code>[password, usuario]</code>. Al recorrer <code>for datos in usr</code>, <code>datos</code> es cada mail (la clave) y <code>usr[datos]</code> es su lista <code>[password, usuario]</code>. La Opción 2 compara <code>usr[datos] == [passw, usuario]</code>: exige que coincidan los DOS datos, en ese orden. ▸ Opción 1: compara <code>usr[datos][0]</code> (el password guardado) contra <code>usuario</code> (lo tipeado como usuario) → mezcla los campos y valida uno solo; encima hace <code>.lower()</code> al password. ▸ Opciones 3 y 4: <code>usuario in usr</code> / <code>passw in usr</code> preguntan si ese texto es una CLAVE (un mail) del diccionario, no los datos de acceso. ▸ <i>(Parcial real 2023 · T8 · Ej. 0208)</i>`},
  {st: `Para que <code>estructura[0] = 'primero'</code> se ejecute SIN error, <code>estructura</code> puede ser:`, opts: [`Una lista vacía <code>[]</code>`, `Una tupla de dos elementos`, `Un diccionario`, `La cadena nula <code>''</code>`], c: 2, ex: `En un diccionario, <code>d[0] = 'primero'</code> CREA la clave 0 (o la pisa) — siempre funciona. ▸ La lista vacía da <code>IndexError</code> (no hay posición 0 para asignar). ▸ La tupla es inmutable (<code>TypeError</code>). ▸ El string es inmutable (<code>TypeError</code>). ▸ <i>(Parcial real 2024 · T7 · Ej 0507)</i>`},
  {st: `¿Qué <b>NO</b> debería ser <code>estructura</code> para que <code>dato = estructura[0][1]</code> se ejecute sin problemas?`, opts: [`Una lista de strings`, `Una lista de tuplas`, `Una tupla de strings`, `Una string`], c: 3, ex: `<code>estructura[0][1]</code> necesita que <code>estructura[0]</code> sea indexable con <code>[1]</code>. ▸ Lista de strings: <code>estructura[0]</code> es un string y <code>[1]</code> es su 2° carácter (anda). ▸ Lista de tuplas / tupla de strings: <code>estructura[0]</code> es una tupla o string, <code>[1]</code> anda. ▸ Una string sola: <code>estructura[0]</code> es UN carácter y <code>[1]</code> se va de rango → <code>IndexError</code>. Por eso "una string" es la que NO sirve. ▸ <i>(Parcial real 2024 · T4 · Ej 0504)</i>`}
]);

registerExercises('pc-segundo-parcial', '3', [
  {st: `¿Qué contiene <code>b</code>?
<pre class="code-block">def organiza(n):
    if n % 3 == 0 and n % 2 == 0 or n &lt; 100:
        return True
    else:
        return False

a = [15, -150, 150, 66]
b = list(filter(organiza, a))</pre>`, opts: [`<code>[15, -150, 150, 66]</code>`, `<code>[-150, 66]</code>`, `<code>[15, 66]</code>`, `<code>[]</code>`], c: 0, ex: `Por precedencia, <code>and</code> se evalúa ANTES que <code>or</code>, así que la condición es <code>(n%3==0 and n%2==0) or (n &lt; 100)</code>. ▸ 15: es &lt; 100 → True. ▸ -150: &lt; 100 → True. ▸ 150: múltiplo de 3 y de 2 → True (no necesita el &lt; 100). ▸ 66: &lt; 100 → True. Pasan los cuatro. ▸ La trampa es creer que 150 (que no es &lt; 100) queda afuera, pero sí es múltiplo de 6. ▸ <i>(Parcial real 2023 · T8 · Ej. 0108)</i>`},
  {st: `Dado el programa, ¿cuál debería ser la línea faltante para que la salida sea <code>['ASA', 'UTO', 'ANCO', 'ARTEL', 'EMÁFORO']</code>?
<pre class="code-block">def edita1(pal):
    return pal[1:].upper()
def edita2(pal):
    return pal[0].upper()
def edita3(pal):
    return len(pal) &gt; 5

palabras = ['casa', 'auto', 'banco', 'cartel', 'semáforo']
............................   # línea de código faltante
print(nuevaLista)</pre>`, opts: [`<code>nuevaLista = list(map(palabras, edita2))</code>`, `<code>nuevaLista.append(map(edita1, palabras))</code>`, `<code>nuevaLista = list(map(edita1, palabras))</code>`, `<code>nuevaLista = list(map(edita3, palabras))</code>`], c: 2, ex: `La salida saca la 1ª letra de cada palabra y la pasa a mayúsculas: eso es <code>edita1</code> (<code>pal[1:].upper()</code>). <code>map</code> la aplica a cada palabra y <code>list()</code> la materializa. ▸ Opción A: invierte los argumentos (es <code>map(función, secuencia)</code>, no al revés). ▸ Opción B: usa <code>.append</code> sobre una lista que todavía no existe y no convierte con <code>list()</code>. ▸ Opción D: usa <code>edita3</code>, que devuelve True/False (largo &gt; 5), no transforma el texto. ▸ <i>(Parcial real 2025 · T1 · E7)</i>`},
  {st: `¿Cuál es la salida del siguiente programa?
<pre class="code-block">def edita(txt):
    return txt.upper()
def patron(txt):
    return ('á' in txt) or ('ó' in txt)

ciudades = ['anillaco', 'san javier', 'la dársena', 'fiambalá']
mostrar = list(filter(patron, ciudades))
salida = list(map(edita, mostrar))
print(salida)</pre>`, opts: [`<code>['anillaco', 'san javier', 'la dársena', 'fiambalá']</code>`, `<code>['ANILLACO', 'SAN JAVIER']</code>`, `<code>[]</code>`, `<code>['LA DÁRSENA', 'FIAMBALÁ']</code>`], c: 3, ex: `Primero <code>filter(patron, ...)</code> deja las que tienen 'á' u 'ó': "la dársena" y "fiambalá" (las otras no tienen esas tildes). Después <code>map(edita, ...)</code> las pasa a mayúsculas → <code>['LA DÁRSENA', 'FIAMBALÁ']</code>. ▸ Lógica clave: primero SELECCIONAR (filter), después TRANSFORMAR (map). ▸ Opción B son las que NO tienen á/ó; A no aplica el map; C implicaría que ninguna tiene á/ó. ▸ <i>(Parcial real 2025 · T1 · E9)</i>`},
  {st: `Dado el programa, ¿cuál debería ser la línea faltante para que la salida sea <code>[(36, 0), (14007, 1), (33, 1), (20, 0)]</code>?
<pre class="code-block">def calc1(num):
    return num % 2 != 0
def calc2(num):
    return num * 2
def calc3(num):
    return (num, num % 2)

numeros = [36, 14007, 33, 20]
............................   # línea de código faltante
print(nuevaLista)</pre>`, opts: [`<code>nuevaLista.sort(map(numeros, calc3))</code>`, `<code>nuevaLista = list(map(calc3, numeros))</code>`, `<code>nuevaLista = list(map(calc2, numeros))</code>`, `<code>nuevaLista.append(map(calc1, numeros))</code>`], c: 1, ex: `La salida son tuplas <code>(num, num%2)</code> — el número y su resto al dividir por 2 (0 si es par, 1 si es impar): eso es <code>calc3</code>. <code>map(calc3, numeros)</code> las genera y <code>list()</code> las muestra. ▸ Opción A usa <code>.sort</code> con argumentos inválidos. ▸ Opción C usa <code>calc2</code> (num*2) → daría [72, 28014, 66, 40]. ▸ Opción D usa <code>calc1</code> (True/False) y <code>.append</code> sobre una lista inexistente. ▸ <i>(Parcial real 2025 · T5 · E7)</i>`},
  {st: `¿Cuál es la salida del siguiente programa?
<pre class="code-block">def edita(txt):
    return txt[2:].lower()
def patron(txt):
    cant = 0
    for voc in 'aeiou':
        if voc in txt:
            cant += 1
    return cant &gt; 1

frutas = ['CIRUELA', 'FRUTILLA', 'MANZANA', 'NARANJA']
salida = list(map(edita, frutas))
mostrar = list(filter(patron, salida))
print(mostrar)</pre>`, opts: [`<code>['ciruela', 'frutilla', 'naranja']</code>`, `<code>['MANZANA', 'NARANJA']</code>`, `<code>['manzan', 'naranj']</code>`, `<code>['ruela', 'utilla']</code>`], c: 3, ex: `OJO al orden. PRIMERO <code>map(edita)</code> sobre TODAS: saca las 2 primeras letras y pasa a minúscula → 'CIRUELA'→'ruela', 'FRUTILLA'→'utilla', 'MANZANA'→'nzana', 'NARANJA'→'ranja'. DESPUÉS <code>filter(patron)</code> deja las que tienen MÁS DE UNA vocal distinta: 'ruela' (u,e,a) y 'utilla' (u,i,a) sí; 'nzana' y 'ranja' solo tienen 'a'. Resultado: <code>['ruela', 'utilla']</code>. ▸ B no transforma (mayúsculas); A y C no aplican bien edita o filter. ▸ <i>(Parcial real 2025 · T5 · E9)</i>`},
  {st: `¿Cuál es la salida del siguiente programa?<pre class="code-block">def nomMes(mes):
    meses = {1:'enero', 2:'febrero', 3:'marzo', 4:'abril', 5:'mayo', 6:'junio',
             7:'julio', 8:'agosto', 9:'septiembre', 10:'octubre', 11:'noviembre', 12:'diciembre'}
    return meses[mes].upper()

meses = [10, 5, 2, 6, 7, 9]
nombres = list(map(nomMes, meses))
print(nombres)</pre>`, opts: [`<code>['JUNIO']</code>`, `<code>[0, 0, 0, 0, 0, 0]</code>`, `<code>[9, 7, 6, 2, 5, 10]</code>`, `<code>['OCTUBRE', 'MAYO', 'FEBRERO', 'JUNIO', 'JULIO', 'SEPTIEMBRE']</code>`], c: 3, ex: `<code>map(nomMes, meses)</code> aplica nomMes a cada número de <code>[10, 5, 2, 6, 7, 9]</code>: busca el nombre en el diccionario y lo pasa a mayúsculas. 10→OCTUBRE, 5→MAYO, 2→FEBRERO, 6→JUNIO, 7→JULIO, 9→SEPTIEMBRE. ▸ map devuelve la MISMA cantidad de elementos (transforma, no filtra). ▸ <i>(Parcial real 2024 · T4 · Ej 0204)</i>`}
]);

registerExercises('pc-segundo-parcial', '4', [
  {st: `Dado el archivo <code>carreras.txt</code> (alumnos anotados por carrera), ¿con cuál conjunto de modos de apertura funciona el programa? Al finalizar deben quedar 3 archivos nuevos (quimica-alumnos.txt, industrial-alumnos.txt, civil-alumnos.txt), cada uno con sus alumnos.
<pre class="code-block">def abre(archivo, modo):
    nombre = open(archivo, modo)
    return nombre

alumnos = abre('carreras.txt', …)        # modo 1?
tit = alumnos.readline()
tit = tit.strip('\\n').lower()
archivo = tit + '-alumnos.txt'
lista = abre(archivo, …)                  # modo 2?
for lin in alumnos:
    if ',' in lin:
        lista.write(lin)
    else:
        lista.close()
        tit = lin.strip('\\n').lower()
        archivo = tit + '-alumnos.txt'
        lista = abre(archivo, …)          # modo 3?
alumnos.close()
lista.close()</pre>`, opts: [`<code>modo 1 'r' · modo 2 'w' · modo 3 'r'</code>`, `<code>modo 1 'a' · modo 2 'r' · modo 3 'r'</code>`, `<code>modo 1 'r' · modo 2 'w' · modo 3 'w'</code>`, `<code>modo 1 'w' · modo 2 'w' · modo 3 'w'</code>`], c: 2, ex: `<code>alumnos</code> (carreras.txt) sólo se LEE (readline + for) → modo <code>'r'</code>. <code>lista</code> se ESCRIBE (write) y se reabre para cada carrera → <code>'w'</code> en ambos casos. Por eso C: r, w, w. ▸ A pone <code>'r'</code> en el modo 3 (no podría escribir). ▸ B abre el de lectura como <code>'a'</code> y los de escritura como <code>'r'</code>. ▸ D abre carreras.txt en <code>'w'</code> → lo BORRARÍA antes de poder leerlo. ▸ <i>(Parcial real 2025 · T1 · E4)</i>`},
  {st: `Dados <code>vtas-suc1.txt</code> y <code>vtas-suc2.txt</code> (ventas mensuales), ¿con cuál conjunto de modos funciona? Al final debe quedar <code>vtas-semestre.txt</code> con el total, y <code>vtas-suc1.txt</code> debe tener agregadas al final las líneas de <code>vtas-suc2.txt</code>.
<pre class="code-block">total = 0
suc1 = open('vtas-suc1.txt', …)          # modo 1?
todas = suc1.readlines()
suc1.close()
for elem in todas:
    lin = elem.strip('\\n').split(',')
    total += float(lin[1])
suc2 = open('vtas-suc2.txt', …)          # modo 2?
todas = suc2.readlines()
suc2.close()
for elem in todas:
    lin = elem.strip('\\n').split(',')
    total += float(lin[1])
linea = 'Total ventas semestre suc 1 y 2: $' + str(total)
semestre = open('vtas-semestre.txt', …)  # modo 3?
semestre.write(linea)
semestre.close()
suc1 = open('vtas-suc1.txt', …)          # modo 4?
for elem in todas:
    suc1.write(elem)
suc1.close()</pre>`, opts: [`<code>modo 1 'r' · modo 2 'r' · modo 3 'w' · modo 4 'a'</code>`, `<code>modo 1 'a' · modo 2 'a' · modo 3 'w' · modo 4 'w'</code>`, `<code>modo 1 'r' · modo 2 'r+' · modo 3 'r' · modo 4 'r'</code>`, `<code>modo 1 'w' · modo 2 'r' · modo 3 'a' · modo 4 'w'</code>`], c: 0, ex: `suc1 y suc2 se LEEN (readlines) → <code>'r'</code> y <code>'r'</code>. vtas-semestre.txt se crea para escribir → <code>'w'</code>. suc1 se reabre para AGREGAR al final (sin borrar) las líneas de suc2 → <code>'a'</code>. Por eso A: r, r, w, a. ▸ El modo 4 debe ser <code>'a'</code>: con <code>'w'</code> (D) borraría suc1 en vez de agregar. ▸ C abre todo en lectura (no podría escribir). ▸ B abre los de lectura en <code>'a'</code>. ▸ <i>(Parcial real 2025 · T5 · E4)</i>`},
  {st: `¿Cuál versión de <code>abreParaLeer()</code> evita que el programa se interrumpa si el archivo no existe (y, sólo si no existe, lo crea)?
<pre class="code-block">datos = abreParaLeer('uno.txt')
...
datos.close()</pre>
<b>Opción 1</b>
<pre class="code-block">def abreParaLeer(arch):
    a = open(arch, 'r')
    try:
        return a
    except FileNotFoundError:
        a = open(arch, 'w')
        a.close()
        a = open(arch, 'r')
        return a</pre>
<b>Opción 2</b>
<pre class="code-block">def abreParaLeer(arch):
    try:
        a = open(arch, 'r')
        return a
    except FileNotFoundError:
        print('No existe', arch)</pre>
<b>Opción 3</b>
<pre class="code-block">def abreParaLeer(arch):
    a = open(arch, 'w')
    try:
        a = open(arch)
        return a
    except:
        a = open(arch, 'w')
        a.close()
        a = open(arch, 'r')
        return a</pre>
<b>Opción 4</b>
<pre class="code-block">def abreParaLeer(arch):
    try:
        a = open(arch, 'r')
        return a
    except FileNotFoundError:
        a = open(arch, 'w')
        a.close()
        a = open(arch, 'r')
        return a</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 3, ex: `El <code>open(arch, 'r')</code> que puede fallar tiene que estar DENTRO del <code>try</code>. La Opción 4 intenta abrir en 'r'; si salta <code>FileNotFoundError</code>, crea el archivo con 'w', lo cierra y lo reabre en 'r' para devolverlo. ▸ Opción 1: el open('r') está FUERA del try → si no existe, explota antes de entrar al try. ▸ Opción 2: maneja el error pero NO crea el archivo (devuelve None → <code>datos.close()</code> falla). ▸ Opción 3: abre primero en 'w' (¡borra/crea el archivo siempre!), desvirtuando el "sólo si no existe". ▸ <i>(Parcial real 2023 · T8 · Ej. 0308)</i>`},
  {st: `¿Cuál versión de <code>guarda()</code> genera <code>personal.txt</code> con EXACTAMENTE este contenido?
<pre class="code-block">pa,ANA PAZ
ai,INÉS ALZA
os,SERGIO ORTIZ</pre>
<pre class="code-block">nombres = {'ana':'paz', 'inés':'alza', 'sergio':'ortiz'}
guarda(nombres, 'personal.txt')</pre>
<b>Opción 1</b>
<pre class="code-block">def guarda(dicci, arch):
    dat = open(arch, 'a', encoding='utf-8')
    for nom in dicci:
        inicio = dicci[nom][0].upper() + nom[0] + ','
        dat.write(inicio + '\\n' + nom + ' ' + dicci[nom])
    dat.close()</pre>
<b>Opción 2</b>
<pre class="code-block">def guarda(dicci, arch):
    dat = open(arch, 'W', encoding='utf-8')
    for nom in dicci:
        inicio = nom[0] + dicci[nom][1].upper() + ','
        fin = nom + ' ' + dicci[nom].upper() + '\\n'
        dat.write(inicio + '\\n' + fin)
    arch.close()</pre>
<b>Opción 3</b>
<pre class="code-block">def guarda(dicci, arch):
    dat = open(arch, 'w', encoding='utf-8')
    lineas = []
    for nom in dicci:
        inicio = dicci[nom][0] + nom[0] + ','
        fin = nom.upper() + ' ' + dicci[nom].upper()
        lineas.append(inicio + fin + '\\n')
    dat.writelines(lineas)
    dat.close()</pre>
<b>Opción 4</b>
<pre class="code-block">def guarda(dicci, arch):
    dat = open(arch, 'r', encoding='utf-8')
    lineas = []
    for nom in dicci:
        inicio = nom[1] + nom[0] + ','
        fin = nom.upper() + ' ' + nom[1].upper() + '\\n'
        lineas.append(inicio + fin)
    dat.writelines(lineas)
    arch.close()</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 2, ex: `Para 'ana':'paz' la línea debe ser <code>pa,ANA PAZ</code>: el inicio es <code>dicci[nom][0] + nom[0] + ','</code> = 'p' + 'a' + ',' = 'pa,', y el fin es <code>nom.upper() + ' ' + dicci[nom].upper()</code> = 'ANA PAZ'. La Opción 3 arma justo eso, abre en 'w' y usa writelines. ▸ Opción 1: pone <code>dicci[nom][0].upper()</code> ('P') y mete un <code>\\n</code> en el medio. ▸ Opción 2: usa modo <code>'W'</code> (mayúscula → modo inválido, ValueError) y hace <code>arch.close()</code> (arch es el nombre, no el archivo). ▸ Opción 4: abre en <code>'r'</code> (lectura → no puede escribir) y usa <code>nom[1]</code> en vez de los datos del diccionario. ▸ <i>(Parcial real 2023 · T8 · Ej. 0408)</i>`},
  {st: `¿Cuál es la estructura de <code>archivo.txt</code> para que el programa imprima la salida indicada?
<pre class="code-block">archivo = open("archivo.txt", "r")
lineas = archivo.readlines()
archivo.close()
for linea in lineas:
    campos = linea.split(";")
    nombre = tuple(campos[0].split(","))
    direccion = tuple(campos[1].split(","))
    print(f"Nombre: {nombre[0]} {nombre[1]}")
    print(f"Dirección: {direccion[0]} {direccion[1]}")</pre>
<pre class="code-block">Nombre: Luis Huergo
Dirección: Paseo Colón 850
Nombre: Elisa Bachofen
Dirección: Las Heras 2214</pre>`, opts: [`<code>nombre apellido;calle altura;código postal localidad</code>`, `<code>nombre,apellido;calle,altura;código postal,localidad</code>`, `<code>nombre;apellido,calle;altura,código postal;localidad</code>`, `<code>nombre,apellido,calle,altura,código postal,localidad</code>`], c: 1, ex: `La línea se parte PRIMERO por <code>;</code> (campos) y cada campo por <code>,</code> (split anidado). <code>campos[0].split(",")</code> debe dar (nombre, apellido) → "Luis,Huergo"; <code>campos[1].split(",")</code> → (calle, altura) → "Paseo Colón,850". Entonces cada línea es <code>nombre,apellido;calle,altura;…</code> → opción 2. ▸ La 1 separa todo con espacios (el split(",") no dividiría nada). ▸ La 3 mezcla ; y , al revés. ▸ La 4 usa solo comas (no habría ';' para separar los campos). ▸ <i>(Parcial real 2023 · T8 · Ej. 0908)</i>`},
  {st: `¿Cómo queda el archivo <code>instrucciones.txt</code> luego de ejecutar el programa? (receta.txt contiene una lista de "Ingredientes", la palabra "Preparación", y debajo los pasos: cremar manteca con azúcar, integrar las yemas, saborizar, incorporar secos, estirar masa, cortar discos, hornear.)
<pre class="code-block">def leer(arch):
    receta = open(arch, 'r', encoding='utf-8')
    lineas = receta.readlines()
    receta.close()
    pasos = []
    i = 0
    bandera = True
    while i &lt; len(lineas) and bandera:
        if 'Preparación' in lineas[i]:
            bandera = False
        i += 1
    while i &lt; len(lineas):
        pasos.append(lineas[i])
        i += 1
    return pasos

def guarda(lista, arch):
    datos = open(arch, 'w', encoding='utf-8')
    for i in range(len(lista)):
        desc = lista[i].strip('\\n').capitalize()
        datos.write(str(i+1) + ' - ' + desc + '\\n')
    datos.close()

pasos = leer('receta.txt')
guarda(pasos, 'instrucciones.txt')</pre>
<b>Opción 1</b>: la lista de ingredientes tal cual.
<b>Opción 2</b>: los pasos EN MAYÚSCULAS, sin numerar.
<b>Opción 3</b>:
<pre class="code-block">1 - Cremar manteca con azúcar
2 - Integrar las yemas
3 - Saborizar
4 - Incorporar secos
5 - Estirar masa
6 - Cortar discos
7 - Hornear</pre>
<b>Opción 4</b>: todos los pasos pegados en una sola línea.`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 2, ex: `<code>leer()</code> saltea todo hasta encontrar 'Preparación' (con la bandera) y devuelve SÓLO los pasos siguientes. <code>guarda()</code> los numera (<code>str(i+1) + ' - '</code>) y los <code>.capitalize()</code> (primera letra en mayúscula). Resultado: "1 - Cremar manteca con azúcar", etc. → Opción 3. ▸ Opción 1 son los ingredientes (justo lo que leer descarta). ▸ Opción 2 usa MAYÚSCULAS completas (<code>.capitalize()</code> sólo pone la 1ª) y sin numerar. ▸ Opción 4 no separa por líneas (faltaría el <code>\\n</code>). ▸ <i>(Parcial real 2023 · T8 · Ej. 1008)</i>`}
]);

registerExercises('pc-segundo-parcial', '5', [
  {st: `¿Cuál programa realiza un ingreso validado de un número PAR? (no acepta impares · no debe fallar si se ingresa algo que no es entero · debe insistir hasta lograrlo)
<b>Opción 1</b>
<pre class="code-block">for i in range(3):
    numPar = int(input('Ingresá un número par: '))
    if numPar &lt; 0 or numPar % 2 != 0:
        print('No es par')
print(numPar)</pre>
<b>Opción 2</b>
<pre class="code-block">pide = True
while pide:
    try:
        numPar = int(input('Ingresá un número par: '))
        if numPar &gt; 0 and numPar % 2 == 0:
            pide = False
        else:
            print('No es par')
    except ValueError:
        print('Debe ser número entero')
print(numPar)</pre>
<b>Opción 3</b>
<pre class="code-block">pide = False
while pide:
    try:
        numPar = int(input('Ingresá un número par: '))
        if numPar &lt; 0 or numPar % 2 != 0:
            pide = False
        else:
            print('No es par')
    except ValueError:
        print('Debe ser número entero')
print(numPar)</pre>
<b>Opción 4</b>
<pre class="code-block">try:
    numPar = int(input('Ingresá un número par: '))
except:
    print('No es un número')
if numPar &gt; 0 and numPar % 2 == 0:
    print(numPar)</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 1, ex: `Hacen falta tres cosas: (1) un bucle que INSISTA (while), (2) un try/except ValueError para no fallar con texto, (3) cortar SÓLO cuando el dato es válido. La Opción 2 cumple las tres: <code>while pide</code> con <code>pide = True</code>, try/except, y <code>pide = False</code> sólo si es par. ▸ Opción 1: usa <code>for</code> (3 intentos fijos) y sin try (un texto rompe el <code>int()</code>). ▸ Opción 3: arranca con <code>pide = False</code> → el while NO entra nunca. ▸ Opción 4: no tiene bucle (no insiste) y, si el int falla, igual usa <code>numPar</code> después. ▸ <i>(Parcial real 2025 · T1 · E5)</i>`},
  {st: `¿Cuál programa realiza un ingreso validado de un número en el intervalo cerrado [1, 15]? (debe ser ≥ 1 y ≤ 15 · no debe fallar con texto · debe insistir)
<b>Opción 1</b>
<pre class="code-block">sigue = True
while sigue:
    try:
        num = float(input('Número entre 1 y 15: '))
        if num &lt;= 15 and num &gt;= 1:
            sigue = False
        else:
            print('No está en el intervalo válido')
    except ValueError:
        print('Debe ser un número')
print(num)</pre>
<b>Opción 2</b>
<pre class="code-block">while True:
    try:
        num = float(input('Número entre 1 y 15: '))
    except ValueError:
        print('Debe ser un número')
if num &gt;= 1 and num &lt;= 15:
    print(num)</pre>
<b>Opción 3</b>
<pre class="code-block">sigue = True
while not sigue:
    try:
        num = float(input('Número entre 1 y 15: '))
        if num &lt;= 15 and num &gt;= 1:
            print(num)
        else:
            print('No está en el intervalo válido')
        sigue = False
    except ValueError:
        print('Debe ser un número')
print(num)</pre>
<b>Opción 4</b>
<pre class="code-block">num = float(input('Número entre 1 y 15: '))
try:
    if num &gt; 15 and num &lt; 1:
        print(num)
    else:
        print('No está en el intervalo válido')
except ValueError:
    print('Debe ser un número')</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 0, ex: `La Opción 1 insiste con <code>while sigue</code> (arranca en True), captura <code>ValueError</code>, y corta (<code>sigue = False</code>) sólo cuando <code>1 &lt;= num &lt;= 15</code>. ▸ Opción 2: <code>while True</code> sin forma de cortar y valida FUERA del bucle → bucle infinito. ▸ Opción 3: arranca con <code>while not sigue</code> y sigue=True → no entra nunca. ▸ Opción 4: no tiene bucle (no insiste), pone el try DESPUÉS del input (el <code>float()</code> que puede fallar queda afuera) y la condición <code>num &gt; 15 and num &lt; 1</code> es imposible. ▸ <i>(Parcial real 2025 · T5 · E5)</i>`},
  {st: `Con estos ingresos del usuario — <code>s</code>, <code>S</code>, <code>SIPI</code>, <code>DALE</code>, <code>si</code>, <code>sisi</code> — ¿qué contendrá <code>nombres</code> al finalizar?
<pre class="code-block">nombres = ['julio', 'ana', 'inés', 'juan', 'lía']
sigue = True
respSi = ('s', 'si', 'sipi', 'sisi', 'oki', 'dale')
while sigue:
    opc = input('Saca? (si/no) ')
    if opc.lower() in respSi:
        try:
            elimina = nombres.pop()
        except IndexError:
            sigue = False
    else:
        sigue = False</pre>`, opts: [`<code>[]</code> (lista vacía)`, `<code>['julio', 'ana', 'inés', 'juan', 'lía']</code>`, `<code>['juan', 'lía']</code>`, `<code>['julio']</code>`], c: 0, ex: `Las 6 respuestas (s, S, SIPI, DALE, si, sisi) están todas en <code>respSi</code> gracias al <code>.lower()</code>, así que cada una hace un <code>pop()</code> (saca el último). La lista tiene 5 elementos: los primeros 5 pop la vacían y el 6° pop sobre lista vacía lanza <code>IndexError</code>, que el except captura cortando el ciclo. Queda <code>[]</code>. ▸ Si alguna respuesta hubiera sido "no", cortaría antes (else). ▸ Las demás opciones implican menos pops de los que ocurren. ▸ <i>(Parcial real 2023 · T8 · Ej. 0708)</i>`},
  {st: `¿Cuál de los siguientes códigos valida que se ingrese un nombre SIN tilde, insistiendo hasta lograrlo? (Válidos: lucas, Pedro, JUAN · Inválidos: Úrsula, Inés, 9ema). Nota: <code>isalpha()</code> da True si el texto tiene sólo letras.
<b>Opción 1</b>
<pre class="code-block">def tilde(n):
    voc = 'ÁÉÍÓÚ'
    marca = False
    for letra in n.lower():
        if letra in voc:
            marca = True
    return True
nom = input('Nombre sin acentos: ')
while tilde(nom) or not nom.isalpha():
    nom = input('Nombre sin acentos: ')</pre>
<b>Opción 2</b>
<pre class="code-block">def tilde(n):
    voc = 'ÁÉÍÓÚ'
    for letra in voc:
        if letra in n.lower():
            marca = True
        else:
            marca = False
    return marca
nom = input('Nombre sin acentos: ')
while tilde(nom) or not nom.isalpha():
    nom = input('Nombre sin acentos: ')</pre>
<b>Opción 3</b>
<pre class="code-block">def tilde(n):
    voc = 'ÁÉÍÓÚ'
    n = n.upper()
    marca = False
    for letra in voc:
        if letra in n:
            marca = True
    return marca
nom = input('Nombre sin acentos: ')
while not (tilde(nom) == False and nom.isalpha()):
    nom = input('Nombre sin acentos: ')</pre>
<b>Opción 4</b>
<pre class="code-block">def tilde(n):
    voc = 'ÁÉÍÓÚ'
    marca = False
    for letra in n.upper():
        if letra in voc:
            marca = True
    return marca
nom = input('Nombre sin acentos: ')
if nom.isalpha() or tilde(nom):
    print('Válido')
else:
    print('Inválido')</pre>`, opts: [`Opción 1`, `Opción 2`, `Opción 3`, `Opción 4`], c: 2, ex: `La 3 es la única correcta: <code>tilde()</code> pasa el nombre a mayúsculas y devuelve True si hay alguna vocal acentuada (sin pisar la marca), y el <code>while</code> insiste mientras NO se cumpla (no tiene tilde Y es alfabético). ▸ Opción 1: <code>tilde</code> tiene <code>return True</code> fijo → rechaza todo siempre. ▸ Opción 2: pisa <code>marca</code> en cada vuelta del for, así que sólo cuenta la última vocal. ▸ Opción 4: no tiene bucle (no insiste) y la condición <code>isalpha() or tilde()</code> está mal armada. ▸ <i>(Parcial real 2024 · T4 · Ej 0104)</i>`}
]);

registerExercises('pc-segundo-parcial', '6', [
  {st: `Dado el DataFrame <code>resfrios</code>:
<pre class="code-block">       mes  humedad  cantidad
0    enero       60         2
1  febrero       75        23
2    marzo       79        32
3    abril       68        31
4     mayo       62        45
5    junio       55        61</pre>
¿Cuál instrucción produce esta salida?
<pre class="code-block">       mes  humedad  cantidad
0    enero       60         2
1  febrero       75        23
3    abril       68        31</pre>`, opts: [`<code>resfrios.tail(3)</code>`, `<code>resfrios[['cantidad','mes']]</code>`, `<code>resfrios.loc[resfrios.index[[1,3,5]]]</code>`, `<code>resfrios[resfrios['cantidad']&lt;32]</code>`], c: 3, ex: `La salida son las filas 0, 1 y 3: las que tienen <code>cantidad</code> menor a 32 (2, 23 y 31). Eso es el filtro booleano <code>resfrios[resfrios['cantidad']&lt;32]</code>. ▸ <code>tail(3)</code> da las ÚLTIMAS 3 filas (3, 4, 5). ▸ <code>resfrios[['cantidad','mes']]</code> selecciona columnas, no filtra filas. ▸ <code>loc[...[1,3,5]]</code> tomaría las filas 1, 3 y 5. ▸ <i>(Parcial real 2025 · T1 · E3)</i>`},
  {st: `Dado el DataFrame <code>resfrios</code> (columna humedad = 60, 75, 79, 68, 62, 55), ¿qué salida produce <code>print(resfrios['humedad'].sum())</code>?`, opts: [`<code>75</code>`, `<code>399</code>`, `El DataFrame completo`, `<code>6</code>`], c: 1, ex: `<code>.sum()</code> de una columna devuelve UN número: la suma de todos sus valores. 60+75+79+68+62+55 = 399. ▸ 75 es un solo valor. ▸ No devuelve el DataFrame. ▸ 6 sería la cantidad de filas (<code>.count()</code>). ▸ <i>(Parcial real 2025 · T1 · E6)</i>`},
  {st: `Dado el DataFrame <code>menu</code>:
<pre class="code-block">         día      plato  calorías
0      lunes      guiso     750.0
1     martes      pasta       NaN
2  miércoles  milanesas     560.0
3     jueves     pastel       NaN
4    viernes      guiso     800.0
5     sábado      asado     750.0</pre>
¿Cuál instrucción produce esta salida?
<pre class="code-block">       día  plato  calorías
0    lunes  guiso     750.0
4  viernes  guiso     800.0</pre>`, opts: [`<code>menu[(~menu['calorías'].isnull()) &amp; (menu['plato']=='guiso')]</code>`, `<code>menu.sort_values(by=['día','calorías'])</code>`, `<code>menu[(menu['plato']&gt;'p') &amp; (menu['plato']&lt;'q')]</code>`, `<code>menu[['calorías','plato']]</code>`], c: 0, ex: `La salida son las filas de 'guiso' que ADEMÁS tienen calorías (no NaN): filas 0 y 4. El filtro combina dos condiciones con <code>&amp;</code> y paréntesis: <code>~isnull()</code> (no nulo) Y <code>plato=='guiso'</code>. ▸ <code>sort_values</code> ordena, no filtra. ▸ La opción C filtra platos entre 'p' y 'q' (comparando strings), no 'guiso'. ▸ La D selecciona columnas. ▸ <i>(Parcial real 2025 · T5 · E3)</i>`},
  {st: `Dado el DataFrame <code>menu</code> (mismo de arriba; pasta y pastel tienen calorías NaN), ¿qué salida produce <code>print(menu[(menu['calorías'].isnull())])</code>?
<b>Opción A</b>: una columna suelta de calorías.
<b>Opción B</b>:
<pre class="code-block">      día  plato  calorías
0   lunes  guiso     750.0
1  martes  pasta       NaN</pre>
<b>Opción C</b>:
<pre class="code-block">      día   plato  calorías
1  martes   pasta       NaN
3  jueves  pastel       NaN</pre>
<b>Opción D</b>: las filas 0, 4 y 5 (las que SÍ tienen calorías).`, opts: ['Opción A', 'Opción B', 'Opción C', 'Opción D'], c: 2, ex: `<code>.isnull()</code> marca True donde calorías es NaN: filas 1 (pasta) y 3 (pastel). <code>menu[...]</code> deja esas filas completas → Opción C. ▸ Las opciones B y D incluyen filas con calorías (que justamente NO son nulas). ▸ La A no es una tabla de filas. ▸ Para quedarte con las que NO son nulas usarías <code>~menu['calorías'].isnull()</code>. ▸ <i>(Parcial real 2025 · T5 · E6)</i>`},
  {st: `Dado el DataFrame <code>lluvias</code> (columnas localidad, mes, mm; abril tiene 65 y 96; marzo tiene 120 y 115; julio 30; octubre 72; enero 110), ¿qué instrucción produce esta salida?
<pre class="code-block">mes
abril       80.5
enero      110.0
julio       30.0
marzo      117.5
octubre     72.0</pre>`, opts: [`<code>lluvias.describe()</code>`, `<code>lluvias.groupby('mes')['mm'].mean()</code>`, `<code>lluvias.loc[1:3, ['mes','mm']]</code>`, `<code>lluvias.head(4)</code>`], c: 1, ex: `La salida agrupa por mes y promedia mm: abril (65 y 96 → 80.5), marzo (120 y 115 → 117.5), etc. Eso es <code>groupby('mes')['mm'].mean()</code> (devuelve un valor por mes, ordenado por mes). ▸ <code>describe()</code> da estadísticas (count, mean, std…) de las columnas numéricas. ▸ <code>.loc[1:3]</code> toma filas por índice. ▸ <code>head(4)</code> da las primeras 4 filas. ▸ <i>(Parcial real 2023 · T8 · Ej. 0508)</i>`},
  {st: `Para el DataFrame <code>vue</code> (columnas nombre, dni, fila, asiento, tarifa), ¿qué operación produce esta salida?<pre class="code-block">asiento
A     6
C    22
D    11
F    14</pre>`, opts: [`<code>vue[vue['tarifa'].isnull()]</code>`, `<code>vue.loc[:, ['dni', 'tarifa']]</code>`, `<code>vue.groupby('asiento')['fila'].max()</code>`, `<code>vue.iloc[2:]</code>`], c: 2, ex: `La salida agrupa por <code>asiento</code> y devuelve el MÁXIMO de <code>fila</code> de cada grupo: <code>vue.groupby('asiento')['fila'].max()</code> (A→6, C→22, D→11, F→14). ▸ <code>isnull()</code> filtra filas con nulos. ▸ <code>loc[:, [...]]</code> selecciona columnas. ▸ <code>iloc[2:]</code> toma filas por posición. ▸ <i>(Parcial real 2024 · T4 · Ej 0904)</i>`},
  {st: `Dado el DataFrame <code>verduleria</code>:<pre class="code-block">    producto  Stock Unidad  Precio   Hoja
0     Tomate    1.0  cajón    3100  False
1    Lechuga    NaN   None    4150   True
2   Espinaca    NaN  atado    1250   True
3    Cebolla    2.0  bolsa    4150  False
4       Papa    5.0  bolsa     970  False</pre>¿Qué muestra <code>print(verduleria.groupby('Unidad')['Precio'].max())</code>?
<b>Opción A</b>: el DataFrame completo, las 5 filas de productos.
<b>Opción B</b>: una tabla con las columnas Precio y Producto.
<b>Opción C</b><pre class="code-block">Unidad
atado    1250
bolsa    4150
cajón    3100</pre>
<b>Opción D</b>: solo las filas de Lechuga y Cebolla.`, opts: [`Opción A`, `Opción B`, `Opción C`, `Opción D`], c: 2, ex: `<code>groupby('Unidad')</code> junta las filas por unidad y <code>['Precio'].max()</code> toma el precio MÁXIMO de cada grupo: atado→1250, bolsa→(4150 y 970)→4150, cajón→3100. El grupo None/NaN se descarta. Da la Opción C. ▸ Las otras no agrupan: muestran el DataFrame entero o filas sueltas. ▸ <i>(Ejemplo oficial de la cátedra 2025 · T1 · Ej 8)</i>`},
  {st: `Dado el DataFrame <code>resfrios</code> con <code>humedad = [60, 75, 79, 68, 60, 60]</code> y <code>cantidad = [2, 23, 32, 31, 45, 61]</code>, ¿qué muestra <code>print(resfrios['humedad'].value_counts())</code>?
<b>Opción A</b>: el DataFrame completo ordenado.
<b>Opción B</b>: una tabla con cantidad y mes.
<b>Opción C</b><pre class="code-block">humedad
60    108
68     31
75     23
79     32</pre>
<b>Opción D</b><pre class="code-block">humedad
60    3
75    1
79    1
68    1</pre>`, opts: [`Opción A`, `Opción B`, `Opción C`, `Opción D`], c: 3, ex: `<code>value_counts()</code> cuenta CUÁNTAS VECES aparece cada valor de la columna: el 60 aparece 3 veces; el 75, el 79 y el 68 una vez cada uno → Opción D (ordenado de mayor a menor frecuencia). ▸ La Opción C suma la <code>cantidad</code> por cada humedad (60: 2+45+61 = 108), no cuenta repeticiones. ▸ A y B muestran tablas que value_counts no produce. ▸ <i>(Ejemplo oficial de la cátedra 2025 · T4 · Ej 6)</i>`},
  {st: `Para el DataFrame <code>alumnos</code>:<pre class="code-block">  apellido  nota  ejer realizados  año carrera  prom gral
0   Giunta    10              35            1       8.75
1    Terra     2               5            2       7.00
2   Kempes    10              18            2       6.25
3  Ardiles     6              27            1       9.00</pre>¿Qué instrucción produce esta salida (las filas ordenadas alfabéticamente por apellido)?<pre class="code-block">  apellido  nota  ejer realizados  año carrera  prom gral
3  Ardiles     6              27            1       9.00
0   Giunta    10              35            1       8.75
2   Kempes    10              18            2       6.25
1    Terra     2               5            2       7.00</pre>`, opts: [`<code>alumnos.sort_values('apellido')</code>`, `<code>alumnos.tail(2)</code>`, `<code>alumnos.groupby('año carrera')['nota'].min()</code>`, `<code>alumnos[['prom gral','nota','apellido']]</code>`], c: 0, ex: `<code>sort_values('apellido')</code> reordena TODAS las filas según la columna apellido en orden alfabético (Ardiles, Giunta, Kempes, Terra), conservando todas las columnas. ▸ <code>tail(2)</code> da las últimas 2 filas. ▸ <code>groupby(...).min()</code> agrupa y resume (no devuelve la tabla entera). ▸ <code>alumnos[[...]]</code> selecciona columnas. ▸ <i>(Ejemplo oficial de la cátedra 2024 · T1 · Ej 1)</i>`}
]);

registerExercises('pc-segundo-parcial', '7', [
  {st: `Querés un gráfico de BARRAS verticales con estos datos (el parcial mostraba un gráfico de barras): <code>altura = [1.83, 1.56, 2.00, 1.72, 1.69]</code> y <code>jugadores = ['Juan', 'Mauro', 'Sebas', 'Nacho', 'Aldo']</code>, con los jugadores en el eje x y la altura como valor. ¿Cuál instrucción usás?`, opts: [`<code>ax.scatter(altura, jugadores)</code>`, `<code>ax.barh(jugadores)</code>`, `<code>ax.set_title(altura)</code>`, `<code>ax.bar(jugadores, altura)</code>`], c: 3, ex: `Un gráfico de barras verticales con categorías en x y valores en y es <code>ax.bar(categorías, valores)</code> = <code>ax.bar(jugadores, altura)</code>. ▸ <code>scatter</code> dibuja puntos y además invierte los ejes. ▸ <code>barh</code> es horizontal y le falta el argumento de valores. ▸ <code>set_title</code> pone un título, no dibuja barras. ▸ <i>(Parcial real 2025 · T1 · E2)</i>`},
  {st: `Querés un gráfico de LÍNEA del precio del dólar a lo largo de los meses (el parcial mostraba una línea): <code>precioDol = [1195, 1200, 1215, 1235, 1370]</code> y <code>meses = ['diciembre', 'enero', 'febrero', 'marzo', 'abril']</code>. ¿Cuál instrucción usás?`, opts: [`<code>ax.plot(meses, precioDol)</code>`, `<code>plt.set_label(x, 'Precio final Dólar en $')</code>`, `<code>ax.scatter(precioDol)</code>`, `<code>ax.bar(precioDol)</code>`], c: 0, ex: `Una línea que une los puntos (x, y) es <code>ax.plot(meses, precioDol)</code>. ▸ <code>set_label</code> no es una función válida de pyplot. ▸ <code>scatter</code> dibuja puntos sueltos y le falta un argumento. ▸ <code>bar</code> son barras y también le falta un argumento. ▸ <i>(Parcial real 2025 · T5 · E2)</i>`},
  {st: `¿Cuál opción describe correctamente el gráfico que produce este código?
<pre class="code-block">x = [0, 1, 2, 3, 4]
x_lineal = [0, 2, 4, 6, 8]
x_bar = [0, 2, 1, 6, 3]
fig, ax = plt.subplots(nrows=3, ncols=3)
ax[1, 1].plot(x, x_lineal)
ax[2, 2].bar(x, x_bar)
plt.show()</pre>`, opts: [`Se hará una grilla de 9 gráficos. En el centro hay un gráfico de línea y en la esquina inferior derecha, uno de barras.`, `Se hará una grilla de 9 gráficos. En la esquina superior izquierda hay una línea y en el centro, uno de barras.`, `Se hará una grilla de 9 gráficos con dos gráficos, uno de línea y uno de barras, ambos en el centro.`, `Ninguna de las opciones describe lo que ocurre.`], c: 0, ex: `<code>subplots(nrows=3, ncols=3)</code> crea una grilla 3×3 (9 ejes). Se indexa <code>ax[fila, columna]</code> empezando en 0. <code>ax[1,1]</code> es el del CENTRO → línea (plot). <code>ax[2,2]</code> es la esquina inferior derecha → barras (bar). Por eso la opción 1. ▸ La superior izquierda sería <code>ax[0,0]</code>; el centro es <code>ax[1,1]</code> (eso descarta la 2 y la 3). ▸ <i>(Parcial real 2023 · T1 · Ej. 0901)</i>`},
  {st: `¿Cuál opción describe correctamente el gráfico que produce este código?<pre class="code-block">x = [0, 1, 2, 3, 4, 5]
x_cubica = [0, 1, 8, 27, 64, 125]
x_bar = [2, 3, 1, 6, 2, 1]
fig, ax = plt.subplots(nrows=4, ncols=5)
ax[0, 4].plot(x, x_cubica)
ax[2, 3].bar(x, x_bar)
plt.show()</pre>`, opts: [`Una grilla de 20 gráficos con DOS de línea: uno en la 1ª fila y 4ª columna, y otro en la 3ª fila y 4ª columna.`, `Una grilla de 20 gráficos con una línea y unas barras: la línea en la 1ª fila y 5ª columna, las barras en la 3ª fila y 4ª columna.`, `Una grilla de 20 gráficos con la línea en la 1ª fila y 4ª columna, y las barras en la 2ª fila y 3ª columna.`, `Ninguna de las opciones describe lo que ocurre.`], c: 1, ex: `<code>subplots(nrows=4, ncols=5)</code> crea una grilla de 4×5 = 20 ejes, indexados <code>ax[fila, columna]</code> desde 0. <code>ax[0, 4]</code> = 1ª fila (índice 0), 5ª columna (índice 4) → línea (plot). <code>ax[2, 3]</code> = 3ª fila (índice 2), 4ª columna (índice 3) → barras (bar). Eso es la opción 2. ▸ <i>(Parcial real 2023 · Camejo · Ej 0902)</i>`}
]);

registerExercises('pc-segundo-parcial', '8', [
  {st: `Dado el programa, ¿cuál opción de la estructura <code>estaciones</code> produce la salida indicada?
<pre class="code-block">estaciones = ...   # ??
primSemes = [0, 10000, 25000, 67500, 48000, 33000, 29000]
print('Ventas Colección Sweaters Invierno 2025')
for i in range(1, len(primSemes)):
    print(estaciones[i][0], '$', primSemes[i],
          estaciones[i][1].upper())</pre>
<pre class="code-block">Ventas Colección Sweaters Invierno 2025
enero $ 10000 VERANO
febrero $ 25000 VERANO
marzo $ 67500 VERANO-OTOÑO
abril $ 48000 OTOÑO
mayo $ 33000 OTOÑO
junio $ 29000 OTOÑO-INVIERNO</pre>
<b>Opción 1</b>
<pre class="code-block">estaciones = ['enero','verano','febrero','verano','marzo',
              'verano-otoño','abril','otoño','mayo','otoño',
              'junio','otoño-invierno']</pre>
<b>Opción 2</b>
<pre class="code-block">estaciones = {1:['enero','verano'], 2:['febrero','verano'],
              3:['marzo','verano-otoño'], 4:['abril','otoño'],
              5:['mayo','otoño'], 6:['junio','otoño-invierno']}</pre>
<b>Opción 3</b>
<pre class="code-block">estaciones = {'enero':'verano', 'febrero':'verano',
              'marzo':'verano-otoño', 'abril':'otoño',
              'mayo':'otoño', 'junio':'otoño-invierno'}</pre>
<b>Opción 4</b>
<pre class="code-block">estaciones = {'0':['enero','verano'], '1':['febrero','verano'],
              '2':['marzo','verano-otoño'], '3':['abril','otoño'],
              '4':['mayo','otoño'], '5':['junio','otoño-invierno']}</pre>`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 1, ex: `El código usa <code>estaciones[i]</code> con <code>i</code> entero de 1 a 6, y de cada uno toma <code>[0]</code> (mes) y <code>[1]</code> (estación). Necesita un diccionario con claves ENTERAS 1..6, cada una con una lista <code>[mes, estación]</code>: eso es la Opción 2. ▸ Opción 1 es una lista plana: <code>estaciones[1]</code> sería 'verano' y <code>'verano'[0]</code> daría 'v'. ▸ Opción 3 usa los meses como clave (<code>estaciones[1]</code> → KeyError). ▸ Opción 4 tiene claves string '0'..'5' (<code>estaciones[1]</code> con el int 1 → KeyError, y arranca en '0'). ▸ <i>(Parcial real 2025 · T1 · E8)</i>`},
  {st: `Dado el programa, ¿cuál opción de la estructura <code>flores</code> produce la salida indicada (al ingresar "lilium")?
<pre class="code-block">flores = ...   # ??
proveedores = ['', 'Don Pedro', 'Cartagena Rosas', 'Escobar II',
               'El Brocal', 'Vivero Sarrundis']
tipo = input('Qué tipo de flor necesita? ')
print('Lista de Proveedores de', tipo)
for clave in flores:
    if tipo.lower() in flores[clave]:
        print(proveedores[clave])</pre>
<pre class="code-block">Qué tipo de flor necesita? lilium
Lista de Proveedores de lilium
Vivero Sarrundis
Don Pedro
Escobar II</pre>
<b>Opción 1</b>: diccionario con claves en MAYÚSCULAS ('DON PEDRO': [...], 'EL BROCAL': [...], …).
<b>Opción 2</b>: una lista plana con todas las flores.
<b>Opción 3</b>
<pre class="code-block">flores = {2:['rosa monocolor','rosa bicolor','rosa rococó','gerbera'],
          5:['gerbera','jazmín','lilium','margarita natural'],
          1:['lilium','lisianto','gisófila','rosa rococó'],
          4:['rosa bicolor','clavel bicolor'],
          3:['lilium','margarita natural','margarita teñida']}</pre>
<b>Opción 4</b>: diccionario con claves de 2 letras ('CR': [...], 'VS': [...], …).`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 2, ex: `El código hace <code>proveedores[clave]</code>, así que la clave tiene que ser un ENTERO (índice de la lista proveedores). Por cada clave cuya lista contenga 'lilium' imprime <code>proveedores[clave]</code>. Sólo la Opción 3 usa claves enteras (2,5,1,4,3): recorriéndolas en ese orden, las que tienen 'lilium' son la 5 → proveedores[5]='Vivero Sarrundis', la 1 → 'Don Pedro' y la 3 → 'Escobar II'. ▸ Opciones 1 y 4 usan strings como clave → <code>proveedores[clave]</code> da TypeError. ▸ Opción 2 es una lista plana, no un diccionario clave→lista. ▸ <i>(Parcial real 2025 · T5 · E8)</i>`},
  {st: `Dado el DataFrame <code>cobertura</code>:
<pre class="code-block">      región     provincia  sucursales
0       cuyo      san juan           3
1    litoral      santa fé           0
2       cuyo       mendoza           5
3  patagonia        chubut           2
4       cuyo      san luis           1
5      pampa  buenos aires           8</pre>
¿Qué se muestra al ejecutar estas instrucciones?
<pre class="code-block">cobertura['región'] = cobertura['región'].map({'cuyo':'centro', 'pampa':'centro'})
cobertura[(cobertura['región'].isnull() == False)]</pre>
<b>Opción 1</b>: solo columnas región y sucursales, con 'cuyo' y 'pampa' sin cambiar.
<b>Opción 2</b>: una sola fila (la 5).
<b>Opción 3</b>
<pre class="code-block">      región     provincia  sucursales
0     centro      san juan           3
2     centro       mendoza           5
4     centro      san luis           1
5     centro  buenos aires           8</pre>
<b>Opción 4</b>: las 6 filas (incluyendo litoral y patagonia), solo columnas región y provincia.`, opts: ['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4'], c: 2, ex: `<code>.map({...})</code> reemplaza cada valor por el del diccionario: 'cuyo'→'centro', 'pampa'→'centro', y los que NO son claves ('litoral', 'patagonia') quedan como <code>NaN</code>. Después <code>isnull() == False</code> deja las filas NO nulas: las 0, 2, 4 y 5, con todas sus columnas y región='centro' → Opción 3. ▸ Opción 1 no aplica el map y descarta una columna. ▸ Opción 2 deja una sola fila. ▸ Opción 4 no filtra los nulos y pierde la columna sucursales. ▸ <i>(Parcial real 2023 · T8 · Ej. 1108)</i>`}
]);
