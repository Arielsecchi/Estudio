// ============ DRAWER / MENÚ ============
function toggleDrawer(){
  document.getElementById('drawer').classList.toggle('open');
  document.getElementById('drawer-overlay').classList.toggle('open');
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

function switchSubject(subject){
  document.querySelectorAll('.subject').forEach(s => s.classList.remove('active'));
  document.getElementById('subject-' + subject).classList.add('active');
  document.documentElement.setAttribute('data-subject', subject);
  document.querySelectorAll('.drawer-item').forEach(it => {
    it.classList.toggle('active', it.getAttribute('data-target') === subject);
  });
  // Asegura que el grupo al que pertenece la materia activa este expandido
  const activeItem = document.querySelector('.drawer-item[data-target="' + subject + '"]');
  if (activeItem) {
    const group = activeItem.closest('.drawer-group');
    if (group && group.classList.contains('collapsed')) {
      group.classList.remove('collapsed');
      saveCatState();
    }
  }
  try { localStorage.setItem('uba-subject', subject); } catch(e) {}
  closeDrawer();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleCat(btn){
  const group = btn.closest('.drawer-group');
  group.classList.toggle('collapsed');
  saveCatState();
}

function saveCatState(){
  try {
    const stored = {};
    document.querySelectorAll('.drawer-group').forEach(g => {
      stored[g.getAttribute('data-cat')] = g.classList.contains('collapsed');
    });
    localStorage.setItem('uba-cats-collapsed', JSON.stringify(stored));
  } catch(e) {}
}

function restoreCatState(){
  try {
    const raw = localStorage.getItem('uba-cats-collapsed');
    if (!raw) return;
    const stored = JSON.parse(raw);
    document.querySelectorAll('.drawer-group').forEach(g => {
      const cat = g.getAttribute('data-cat');
      if (stored[cat]) g.classList.add('collapsed');
    });
  } catch(e) {}
}

// ============ TEMA ============
function applyTheme(theme){
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('theme-btn').textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('theme-btn').textContent = '🌙';
  }
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('uba-theme', next); } catch(e) {}
  applyTheme(next);
}

// ============ SISTEMA DE QUIZ ============
window.EX = {}; // ejercicios por subject:unit
const state = {};

function registerExercises(subject, unit, list){
  window.EX[subject + '-' + unit] = list;
}

function renderQuizzes(){
  let totalBySubject = {};
  document.querySelectorAll('.quiz-wrap').forEach(wrap => {
    const subject = wrap.getAttribute('data-subject');
    const unit = wrap.getAttribute('data-qz');
    const key = subject + '-' + unit;
    const list = window.EX[key];
    if (!list) return;
    totalBySubject[subject] = (totalBySubject[subject] || 0) + list.length;
    let html = '<div class="quiz-title">Ejercicios · Unidad ' + unit + '</div>';
    list.forEach((q, idx) => {
      const id = subject + '-' + unit + '-' + idx;
      html += '<div class="qex" id="qex-' + id + '">';
      html += '<div class="qex-h"><span class="qex-n">' + unit + '.' + (idx+1) + '</span></div>';
      html += '<div class="qex-st">' + q.st + '</div>';
      html += '<div class="qex-opts">';
      q.opts.forEach((o, i) => {
        html += '<button class="qex-opt" onclick="pickQ(\'' + subject + '\',\'' + unit + '\',' + idx + ',' + i + ')">' + o + '</button>';
      });
      html += '</div><div class="qex-fb-wrap"></div></div>';
    });
    wrap.innerHTML = html;
  });
  window.totalBySubject = totalBySubject;
  updateAllScores();
}

function pickQ(subject, unit, idx, picked){
  const key = subject + '-' + unit;
  const q = window.EX[key][idx];
  const correct = (picked === q.c);
  const stateKey = subject + '-' + unit + '-' + idx;
  if (state[stateKey] !== undefined) return;
  state[stateKey] = correct;

  const container = document.getElementById('qex-' + stateKey);
  const btns = container.querySelectorAll('.qex-opt');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === q.c) b.classList.add('ok');
    else if (i === picked) b.classList.add('ko');
  });
  const title = correct ? '¡Correcto!' : 'Incorrecto — la correcta está en verde';
  const fbWrap = container.querySelector('.qex-fb-wrap');
  fbWrap.innerHTML = '<div class="qex-fb ' + (correct?'ok':'ko') + '"><div class="qex-fb-t">' + title + '</div><div>' + q.ex + '</div></div>';
  updateAllScores();
}

function updateAllScores(){
  ['analisis','algebra','pc','fisica'].forEach(subject => {
    const total = (window.totalBySubject || {})[subject] || 0;
    let correct = 0, done = 0;
    Object.keys(state).forEach(k => {
      if (k.startsWith(subject + '-')) {
        done++;
        if (state[k]) correct++;
      }
    });
    const el = document.getElementById('global-score-' + subject);
    if (el) {
      el.textContent = 'Puntaje: ' + correct + ' / ' + total + ' correctas (' + done + ' respondidas)';
    }
    // por sección
    Object.keys(window.EX).forEach(k => {
      if (!k.startsWith(subject + '-')) return;
      const list = window.EX[k];
      let c = 0, d = 0;
      list.forEach((_, idx) => {
        const sk = k + '-' + idx;
        if (state[sk] !== undefined) { d++; if (state[sk]) c++; }
      });
      const unit = k.split('-').slice(1).join('-');
      const ssEl = document.getElementById('ss-' + subject + '-' + unit);
      if (ssEl) ssEl.textContent = d === 0 ? '' : c + '/' + list.length;
    });
  });
}


// ============ HELPERS PARA EJERCICIOS ============
const F = (n,d) => '<span class="frac"><span>'+n+'</span><span>'+d+'</span></span>';
const M = s => '<span class="m">'+s+'</span>';

// ============ INIT ============
(function(){
  // Tema guardado
  let saved = null;
  try { saved = localStorage.getItem('uba-theme'); } catch(e) {}
  if (saved) applyTheme(saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');

  // Estado colapsado de categorias del drawer
  restoreCatState();

  // Materia guardada (default: la primera)
  let savedSubject = null;
  try { savedSubject = localStorage.getItem('uba-subject'); } catch(e) {}
  switchSubject(savedSubject || 'analisis');
})();

// Navegación del índice: abre details al hacer click
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
    const id = e.target.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
    }
  }
});

// Render quizzes después de cargar todo
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(renderQuizzes, 100);
});
