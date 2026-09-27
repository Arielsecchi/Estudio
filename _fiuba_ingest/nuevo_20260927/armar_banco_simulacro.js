#!/usr/bin/env node
/*
  Arma el banco del generador de simulacros de la guía de examen del 1er parcial de
  Anatomía e Histología Funcional (materias/fiuba-anatomia-parcial) y lo escribe dentro
  de su ejercicios.js, entre los comentarios

      // BANCO SIMULACRO · inicio
      // BANCO SIMULACRO · fin

  como  globalThis.BANCO_SIM_ANAT_P1 = { mc: [...], dev: [...] }.
  Lo que haya entre los dos comentarios se reemplaza entero cada vez que se corre.
  El generador (el código que viene después del comentario de fin) no se toca.

  Uso, desde la raíz del repo uba-guias:
      node _fiuba_ingest/nuevo_20260927/armar_banco_simulacro.js            escribe el banco
      node _fiuba_ingest/nuevo_20260927/armar_banco_simulacro.js --probar   sólo informa, no escribe
      node _fiuba_ingest/nuevo_20260927/armar_banco_simulacro.js --forzar   escribe aunque haya
                                                                             preguntas que no coinciden con el mapa
      node _fiuba_ingest/nuevo_20260927/armar_banco_simulacro.js --probar --ver-reparto
                                                                             muestra cada explicación antes y después
                                                                             de cambiar de lugar la correcta

  En el banco, las preguntas propias de las guías cambian de lugar la correcta (ver "reparto de la
  correcta" más abajo): en las guías cae en la B casi la mitad de las veces. Las reales del campus y
  las modelo del repaso van con sus opciones tal cual.

  De dónde sale cada cosa (carpeta banco_simulacro/, al lado de este script):
    · Opción múltiple: se evalúan con node los ejercicios.js de las tres guías de Anatomía
      (fiuba-anatomia = M, fiuba-anatomia-parcial = P, fiuba-anatomia-parcial-preguntas = Q)
      con registerExercises y registerReveals de mentira, y cada pregunta toma su clave
      (letra + unidad + # + índice, por ejemplo P7#15), que es también su id en el banco.
    · mapa_mc.json dice de qué clase (1 a 6) y de qué área es cada clave, su origen (real del
      campus, modelo del repaso o guía), cuáles son copias exactas de otra (duplicado_de),
      cuáles son casi iguales (casi_igual) y cuáles adelantan una a desarrollar (pisa_desarrollo).
      Las de clase null (2do parcial, formato del parcial, método) quedan afuera.
    · simulacro_fijo_u8.json tiene las 20 de opción múltiple del simulacro fijo viejo
      (P8#0 a P8#19), que ya no están en la guía.
    · desarrollo.json tiene las preguntas a desarrollar. La de la trapeciometacarpiana va con
      "fija": true y sale siempre. "no_junto_con" marca pares que no pueden salir juntos.
    · mapa_extra.json (opcional) clasifica preguntas nuevas que el mapa no conoce, o saca del
      banco una que el mapa sí conoce (con "clase": null).

  Para sumar preguntas nuevas (por ejemplo, las que mande el docente):
    · Opción múltiple: agregalas a una guía como siempre (registerExercises). Si caen al final
      de una unidad que es toda de una clase (por ejemplo M3, P4 no), toman esa clase solas.
      Si no, el script las lista como "sin clasificar": sumalas a mapa_extra.json con su clase,
      área y origen, y volvé a correr. Agregalas AL FINAL de la unidad: si se insertan en el
      medio, se corren los índices y el script avisa que no coinciden con el mapa.
    · A desarrollar: sumalas a banco_simulacro/desarrollo.json con id, area, clase, tema,
      consigna, ans, sol, fuente y origen.
*/
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const AQUI = __dirname;
const REPO = path.resolve(AQUI, '..', '..');
const DATOS = path.join(AQUI, 'banco_simulacro');
const MATERIAS = path.join(REPO, 'materias');
const DESTINO = path.join(MATERIAS, 'fiuba-anatomia-parcial', 'ejercicios.js');
const INICIO = '// BANCO SIMULACRO · inicio';
const FIN = '// BANCO SIMULACRO · fin';
const TOPE_KB = 600;

const GUIAS = [ // el orden decide cuál queda cuando dos enunciados son idénticos y el mapa no lo sabe
  { letra: 'P', slug: 'fiuba-anatomia-parcial' },
  { letra: 'M', slug: 'fiuba-anatomia' },
  { letra: 'Q', slug: 'fiuba-anatomia-parcial-preguntas' },
];
const CUOTA = { 1: 3, 2: 3, 3: 3, 4: 4, 5: 4, 6: 3 };

const args = new Set(process.argv.slice(2));
const PROBAR = args.has('--probar');
const FORZAR = args.has('--forzar');

const errores = [];
const avisos = [];
const leerJSON = (f, opcional) => {
  const p = path.join(DATOS, f);
  if (!fs.existsSync(p)) {
    if (opcional) return null;
    throw new Error('falta ' + p);
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'));
};

// ---------- texto ----------
const sinEtiquetas = (s) => String(s || '')
  .replace(/<[^>]*>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ').trim();
const normal = (s) => sinEtiquetas(s).toLowerCase();
// Rótulos de numeración que no tienen sentido dentro de un simulacro armado al azar.
const limpiarEnunciado = (st) => String(st)
  .replace(/^\s*<b>\s*Parte A · \d+\/20\.\s*<\/b>\s*/, '')
  .replace(/^\s*<b>\s*Práctica \d+ · [^<]*<\/b>\s*/, '');
const normalOrigen = (o) => {
  const t = String(o || '').toLowerCase();
  if (t.includes('modelo del repaso')) return 'modelo del repaso';
  if (t === 'real del campus') return 'real del campus';
  return 'guía';
};

// ---------- carga de las guías ----------
function cargarGuia(slug) {
  const archivo = path.join(MATERIAS, slug, 'ejercicios.js');
  let src = fs.readFileSync(archivo, 'utf8');
  // El banco que ya esté escrito no se vuelve a leer como fuente.
  const i = src.indexOf(INICIO), f = src.indexOf(FIN);
  if (i !== -1 && f !== -1) src = src.slice(0, i) + src.slice(f + FIN.length);
  const unidades = [];
  const ctx = {
    registerExercises: (s, unidad, lista) => unidades.push({ unidad: String(unidad), lista }),
    registerReveals: () => {},
    F: (n, d) => n + '/' + d,
    M: (s) => s,
    console,
  };
  ctx.window = ctx;
  vm.runInNewContext(src, ctx, { filename: archivo });
  return unidades;
}

const mapa = leerJSON('mapa_mc.json');
const desarrollo = leerJSON('desarrollo.json');
const fijo = leerJSON('simulacro_fijo_u8.json');
const extra = leerJSON('mapa_extra.json', true) || {};
const extraPreg = extra.preguntas || {};
const extraUni = extra.unidades || {};

const porClave = new Map();
const unidadMapa = new Map();
const LETRA = { 'fiuba-anatomia': 'M', 'fiuba-anatomia-parcial': 'P', 'fiuba-anatomia-parcial-preguntas': 'Q' };
for (const u of mapa.unidades) {
  unidadMapa.set(LETRA[u.guia] + u.unidad, u);
  for (const p of u.preguntas) porClave.set(p.clave, p);
}

// Todas las preguntas de opción múltiple, con su clave.
const crudas = [];
for (const g of GUIAS) {
  const unidades = cargarGuia(g.slug);
  const vistas = new Set();
  for (const u of unidades) {
    if (vistas.has(u.unidad)) avisos.push(`${g.slug}: la unidad ${u.unidad} se registra dos veces; se toman las dos`);
    vistas.add(u.unidad);
    if (g.letra === 'P' && u.unidad === '8') {
      avisos.push('fiuba-anatomia-parcial todavía tiene la unidad 8: se usa la de simulacro_fijo_u8.json y se ignora la de la guía');
      continue;
    }
    u.lista.forEach((q, i) => crudas.push({ clave: `${g.letra}${u.unidad}#${i}`, letra: g.letra, unidad: u.unidad, i, q }));
  }
}
fijo.preguntas.forEach((q, i) => crudas.push({ clave: `P8#${i}`, letra: 'P', unidad: '8', i, q }));

// ---------- clasificación ----------
const sinClasificar = [];
const noCoinciden = [];
const clasificadas = [];
for (const r of crudas) {
  let info = null;
  const m = porClave.get(r.clave);
  if (extraPreg[r.clave]) {
    info = Object.assign({ origen: 'guía' }, extraPreg[r.clave]);
  } else if (m) {
    // El mapa guarda el comienzo del enunciado: si no coincide, se corrieron los índices.
    const a = normal(r.q.st).slice(0, 60), b = normal(m.enunciado).slice(0, 60);
    const n = Math.min(a.length, b.length, 60);
    if (a.slice(0, n) !== b.slice(0, n)) { noCoinciden.push(`${r.clave}: la guía dice "${a.slice(0, 50)}" y el mapa "${b.slice(0, 50)}"`); continue; }
    if (m.duplicado_de) continue; // copia exacta: queda la canónica
    info = { clase: m.clase, area: m.area, origen: m.origen, casi_igual: m.casi_igual, pisa_desarrollo: m.pisa_desarrollo };
  } else {
    const ku = r.letra + r.unidad;
    const eu = extraUni[ku];
    const um = unidadMapa.get(ku);
    if (eu) info = Object.assign({ origen: 'guía' }, eu);
    else if (um && typeof um.clase === 'number' && (um.area === 'histologia' || um.area === 'anatomia')) info = { clase: um.clase, area: um.area, origen: 'guía' };
    else if (um && um.clase === null && um.area === 'fuera') continue; // unidad entera fuera del 1er parcial
    else { sinClasificar.push(`${r.clave}: ${sinEtiquetas(r.q.st).slice(0, 90)}`); continue; }
  }
  if (info.clase === null || info.clase === undefined || info.area === 'fuera') continue;
  clasificadas.push(Object.assign({}, r, { info }));
}

// ---------- validación, repetidas y armado de cada pregunta ----------
const vistasSt = new Map();
const mc = [];
for (const r of clasificadas) {
  const q = r.q;
  const { clase, area } = r.info;
  if (![1, 2, 3, 4, 5, 6].includes(clase)) { errores.push(`${r.clave}: clase ${clase} fuera de 1 a 6`); continue; }
  const areaOk = clase <= 4 ? 'histologia' : 'anatomia';
  if (area !== 'histologia' && area !== 'anatomia') { errores.push(`${r.clave}: área "${area}"`); continue; }
  if (area !== areaOk) avisos.push(`${r.clave}: clase ${clase} con área ${area} (se respeta el mapa)`);
  if (!q.st || !Array.isArray(q.opts) || q.opts.length < 2 || !Number.isInteger(q.c) || q.c < 0 || q.c >= q.opts.length || !q.ex) {
    errores.push(`${r.clave}: pregunta incompleta (st, opts, c o ex)`); continue;
  }
  const st = limpiarEnunciado(q.st);
  const k = normal(st);
  if (vistasSt.has(k)) { avisos.push(`${r.clave}: mismo enunciado que ${vistasSt.get(k)}, entra una sola vez`); continue; }
  vistasSt.set(k, r.clave);
  const item = { id: r.clave, clase, area, origen: normalOrigen(r.info.origen), st, opts: q.opts, c: q.c, ex: q.ex };
  if (r.info.casi_igual && r.info.casi_igual.length) item.casi = r.info.casi_igual.slice();
  if (r.info.pisa_desarrollo && r.info.pisa_desarrollo.length) item.pisa = r.info.pisa_desarrollo.slice();
  mc.push(item);
}
mc.sort((a, b) => a.clase - b.clase);

// ---------- reparto de la correcta ----------
// En las guías la correcta cae en la B casi la mitad de las veces (en P3 son 10 de 10), y el
// simulacro muestra las opciones en orden. Para que marcar siempre la misma letra no rinda, en
// las preguntas propias de las guías (las reales del campus y las modelo del repaso van tal cual)
// la correcta cambia de lugar con otra opción, elegida por un hash del id: el reparto queda
// parejo y cada pregunta sale siempre igual aunque se sumen otras al banco. Las letras que cita la
// explicación ("(B)", "la b") se cambian con el mismo intercambio, y también los ordinales ("la
// primera opción") en las preguntas de ORDINALES, que se revisaron una por una.
const LETRAS = 'ABCDEFGH';
const ORDINAL = ['primera', 'segunda', 'tercera', 'cuarta'];
// Preguntas cuya explicación nombra opciones por su orden ("La tercera confunde...").
const ORDINALES = new Set(['M2#5', 'M2#12', 'M3#1', 'M3#8', 'M4#9', 'M4#10', 'M4#11', 'M4#12', 'M5#5', 'M5#6', 'M5#7', 'M5#8', 'M5#12',
  'M6#6', 'M6#8', 'M6#9', 'M6#10', 'M6#11', 'M6#12', 'M10#1', 'M10#4', 'M10#6', 'M11#4', 'M11#6']);
// Posiciones que no se mueven porque la explicación las nombra de una forma que no se reescribe.
const QUIETAS = {
  'P6#8': 'todas', // "los tres primeros son obvios y el cuarto parece del mismo grupo"
  'M3#5': [0, 1], // "Las dos primeras opciones son la misma inversión"
};
const hash = (s) => { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; } return h >>> 0; };
const permutadas = [];
function repartir(q) {
  if (q.origen !== 'guía') return;
  const n = q.opts.length;
  const quietas = new Set();
  if (QUIETAS[q.id] === 'todas') return;
  (QUIETAS[q.id] || []).forEach((i) => quietas.add(i));
  // "Ninguna...", "Todas...", "Ambas..." se quedan donde están, como en cualquier examen.
  q.opts.forEach((o, i) => { if (/^\s*(A ninguna|Ninguna|Todas|Ambas)\b/i.test(sinEtiquetas(o))) quietas.add(i); });
  const c = q.c;
  if (quietas.has(c)) return;
  // Con 4 opciones, el lugar nuevo sale con pesos que compensan a las reales y las modelo, que van
  // tal cual y cargan la C y la D (en las 26 reales, la C es la correcta en 14): cada simulacro trae
  // al menos 3 reales y 1 modelo, y así lo que se ve queda cerca de un cuarto por letra.
  const h = hash(q.id);
  let t = n === 4 ? [32, 58, 75, 100].findIndex((x) => h % 100 < x) : h % n;
  for (let k = 0; k < n && quietas.has(t); k++) t = (t + 1) % n;
  if (quietas.has(t) || t === c) return;
  const cambio = (x) => { const i = LETRAS.indexOf(x.toUpperCase()); const j = i === c ? t : i === t ? c : i; const y = LETRAS[j]; return x === x.toUpperCase() ? y : y.toLowerCase(); };
  let ex = q.ex;
  // "(B)"
  ex = ex.replace(/\(([A-Ha-h])\)/g, (m, x) => '(' + cambio(x) + ')');
  // "la b", "La B", "las c", "opción B"
  ex = ex.replace(/(?<![\p{L}\p{N}])([Ll]as?|[Oo]pci[oó]n(?:es)?) ([A-Ha-h])(?![\p{L}\p{N}-])/gu, (m, a, x) => a + ' ' + cambio(x));
  if (ORDINALES.has(q.id)) {
    // "la primera opción", "La tercera confunde", "La última opción", "opción 3"
    ex = ex.replace(/(?<![\p{L}])([Ll]a) (primera|segunda|tercera|cuarta|última)(?= (?:opción|es|se|usa|inventa|confunde|invierte|describe|cambia|atribuye|atribuyen|contradice|contradicen|trae|traen|pide|salta|mezcla|elige|le|fusiona|y la)(?![\p{L}]))/gu,
      (m, a, o) => {
        const i = o === 'última' ? n - 1 : ORDINAL.indexOf(o);
        const j = i === c ? t : i === t ? c : i;
        return a + ' ' + (o === 'última' && j === n - 1 ? 'última' : ORDINAL[j]);
      });
    ex = ex.replace(/(?<![\p{L}])([Oo]pci[oó]n) ([1-9])(?![\p{N}])/gu, (m, a, d) => { const i = +d - 1; const j = i === c ? t : i === t ? c : i; return a + ' ' + (j + 1); });
  }
  const opts = q.opts.slice();
  opts[c] = q.opts[t]; opts[t] = q.opts[c];
  permutadas.push({ id: q.id, de: LETRAS[c], a: LETRAS[t], exAntes: q.ex, exDespues: ex });
  q.opts = opts; q.c = t; q.ex = ex;
}
mc.forEach(repartir);

// ---------- a desarrollar ----------
const dev = [];
const idsDev = new Set();
for (const p of desarrollo.preguntas) {
  if (idsDev.has(p.id)) { errores.push(`desarrollo: id repetido ${p.id}`); continue; }
  idsDev.add(p.id);
  for (const k of ['id', 'area', 'clase', 'consigna', 'ans', 'sol']) if (!p[k]) errores.push(`desarrollo ${p.id}: falta ${k}`);
  if (p.area !== (p.clase <= 4 ? 'histologia' : 'anatomia')) errores.push(`desarrollo ${p.id}: clase ${p.clase} con área ${p.area}`);
  const d = { id: p.id, area: p.area, clase: p.clase, tema: p.tema || '', consigna: p.consigna, ans: p.ans, sol: p.sol, fuente: p.fuente || '', origen: normalOrigen(p.origen) };
  if (p.fija) d.fija = true;
  dev.push(d);
}
// no_junto_con, en los dos sentidos
const noJunto = new Map(dev.map((d) => [d.id, new Set()]));
for (const p of desarrollo.preguntas) for (const x of (p.no_junto_con || [])) {
  const otro = typeof x === 'string' ? x : x.id;
  if (!idsDev.has(otro)) { errores.push(`desarrollo ${p.id}: no_junto_con apunta a ${otro}, que no existe`); continue; }
  noJunto.get(p.id).add(otro); noJunto.get(otro).add(p.id);
}
for (const d of dev) { const s = noJunto.get(d.id); if (s.size) d.no_junto = [...s].sort(); }
const fijas = dev.filter((d) => d.fija);
if (fijas.length !== 1 || fijas[0].area !== 'anatomia') errores.push(`tiene que haber exactamente una a desarrollar fija y de anatomía (hay ${fijas.length})`);
for (const q of mc) if (q.pisa) {
  const malos = q.pisa.filter((x) => !idsDev.has(x));
  if (malos.length) avisos.push(`${q.id}: pisa_desarrollo apunta a ${malos.join(', ')}, que no está en desarrollo.json`);
  q.pisa = q.pisa.filter((x) => idsDev.has(x));
  if (!q.pisa.length) delete q.pisa;
}

// ---------- informe ----------
const cuenta = (arr, f) => arr.reduce((o, x) => { const k = f(x); o[k] = (o[k] || 0) + 1; return o; }, {});
const planteos = (arr) => { // cada grupo de casi iguales cuenta una vez
  const g = new Set(); let sueltas = 0;
  for (const q of arr) { if (q.casi) g.add(q.casi[0]); else sueltas++; }
  return g.size + sueltas;
};
console.log('Opción múltiple:', mc.length, JSON.stringify(cuenta(mc, (q) => q.area)));
for (const c of [1, 2, 3, 4, 5, 6]) {
  const de = mc.filter((q) => q.clase === c);
  console.log(`  clase ${c}: ${de.length} (planteos distintos: ${planteos(de)}; van ${CUOTA[c]} por simulacro)`);
}
console.log('  por origen:', JSON.stringify(cuenta(mc, (q) => q.origen)));
console.log('  letra de la correcta:', JSON.stringify(cuenta(mc, (q) => LETRAS[q.c])), `(${permutadas.length} de las guías cambiaron de lugar la correcta)`);
if (args.has('--ver-reparto')) permutadas.forEach((p) => console.log(`\n## ${p.id}: ${p.de} -> ${p.a}\n  antes:   ${sinEtiquetas(p.exAntes)}\n  después: ${sinEtiquetas(p.exDespues)}`));
console.log('A desarrollar:', dev.length, JSON.stringify(cuenta(dev, (d) => d.area + ' ' + d.clase)), 'fija:', fijas.map((d) => d.id).join(', '));
console.log('  por origen:', JSON.stringify(cuenta(dev, (d) => d.origen)));
if (sinClasificar.length) { console.log(`\nSIN CLASIFICAR (${sinClasificar.length}): sumalas a banco_simulacro/mapa_extra.json y volvé a correr`); sinClasificar.forEach((s) => console.log('  ' + s)); }
if (noCoinciden.length) { console.log(`\nNO COINCIDEN CON EL MAPA (${noCoinciden.length}): ¿se insertó una pregunta en el medio de una unidad?`); noCoinciden.forEach((s) => console.log('  ' + s)); }
if (avisos.length) { console.log(`\nAvisos (${avisos.length}):`); avisos.forEach((s) => console.log('  ' + s)); }
if (errores.length) { console.log(`\nERRORES (${errores.length}):`); errores.forEach((s) => console.log('  ' + s)); process.exit(1); }

// ---------- escritura ----------
// La versión sale del contenido, no de la fecha: correrlo otro día sin cambios deja el archivo igual.
const banco = { version: 'h' + require('crypto').createHash('sha1').update(JSON.stringify({ mc, dev })).digest('hex').slice(0, 12), mc, dev };
// Una pregunta por línea, para que los cambios se lean en un diff. "</" se escapa porque el
// banco termina dentro de un <script> de la página.
const LS = new RegExp(String.fromCharCode(0x2028), 'g'), PS = new RegExp(String.fromCharCode(0x2029), 'g');
const BARRA = String.fromCharCode(92); // la barra invertida, escrita así para que ninguna herramienta la coma
const js = (v) => JSON.stringify(v).split('</').join('<' + BARRA + '/').replace(LS, BARRA + 'u2028').replace(PS, BARRA + 'u2029');
const lineas = [
  INICIO,
  '// Lo escribe _fiuba_ingest/nuevo_20260927/armar_banco_simulacro.js: no editar a mano, se pisa al volver a correrlo.',
  '// mc: opción múltiple de las clases 1 a 6 (clave = guía + unidad + # + índice; M madre, P esta guía, Q preguntas explicadas).',
  '// En las propias de las guías la correcta ya viene cambiada de lugar (y las letras de la explicación con ella).',
  '// dev: a desarrollar. fija = sale siempre; no_junto = no salen en el mismo simulacro.',
  'globalThis.BANCO_SIM_ANAT_P1 = {',
  '"version": ' + js(banco.version) + ',',
  '"mc": [',
  mc.map(js).join(',\n'),
  '],',
  '"dev": [',
  dev.map(js).join(',\n'),
  ']',
  '};',
  FIN,
];
const bloque = lineas.join('\n');
const kb = Buffer.byteLength(bloque, 'utf8') / 1024;
const RAYA = String.fromCharCode(0x2014), CORTA = String.fromCharCode(0x2013);
const rayas = bloque.split(RAYA).length - 1;
const rayasCortas = (bloque.match(new RegExp(' [' + CORTA + '-] ', 'g')) || []).length;
console.log(`\nBanco: ${kb.toFixed(1)} KB (${mc.length} de opción múltiple y ${dev.length} a desarrollar)`);
console.log(`Rayas en el texto del banco (vienen de las guías): ${rayas} largas y ${rayasCortas} cortas usadas como raya`);
if (kb > TOPE_KB) console.log(`OJO: pasa de ${TOPE_KB} KB.`);
if (noCoinciden.length && !FORZAR) { console.log('\nNo se escribió nada: corregí el mapa o corré con --forzar.'); process.exit(1); }
if (PROBAR) { console.log('\n--probar: no se escribió nada.'); process.exit(0); }

let actual = fs.readFileSync(DESTINO, 'utf8');
const crlf = actual.includes('\r\n');
const conEol = (s) => (crlf ? s.replace(/\r?\n/g, '\r\n') : s);
const ini = actual.indexOf(INICIO), fin = actual.indexOf(FIN);
let nuevo;
if (ini !== -1 && fin !== -1 && fin > ini) nuevo = actual.slice(0, ini) + conEol(bloque) + actual.slice(fin + FIN.length);
else if (ini === -1 && fin === -1) nuevo = actual.replace(/\s*$/, '') + conEol('\n\n' + bloque + '\n');
else { console.log('ERROR: en ejercicios.js hay uno solo de los dos comentarios del banco.'); process.exit(1); }
fs.writeFileSync(DESTINO, nuevo);

// Comprobación: el archivo escrito se evalúa y el banco tiene lo que se escribió.
const ctx = { registerExercises: () => {}, registerReveals: () => {}, F: () => '', M: () => '', console };
ctx.window = ctx;
vm.runInNewContext(fs.readFileSync(DESTINO, 'utf8'), ctx, { filename: DESTINO });
const leido = ctx.BANCO_SIM_ANAT_P1;
if (!leido || leido.mc.length !== mc.length || leido.dev.length !== dev.length) { console.log('ERROR: el banco escrito no se lee bien'); process.exit(1); }
console.log(`Escrito en ${path.relative(REPO, DESTINO)} (${(Buffer.byteLength(nuevo, 'utf8') / 1024).toFixed(1)} KB en total).`);
