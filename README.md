# Guías UBA XXI

Sitio estático con guías de estudio y ejercicios autocorregibles para materias del CBC / UBA XXI. Hoy tiene Análisis Matemático A, Álgebra A, Pensamiento Computacional y Física, pero está pensado para agregar materias nuevas fácilmente.

## Estructura

```
.
├── index.html              ← archivo final (GENERADO por build.py, no editar a mano)
├── build.py                ← junta las piezas en index.html
├── template.html           ← esqueleto base con placeholders
├── assets/
│   ├── base.css            ← CSS común (layout, componentes)
│   └── app.js              ← drawer, theme toggle, sistema de quiz
└── materias/
    ├── _orden.txt          ← orden de las materias en el drawer (una por línea)
    └── <slug>/
        ├── meta.json       ← nombre, cátedra, colores, ícono
        ├── theme.css       ← reglas [data-subject="slug"] (light + dark)
        ├── seccion.html    ← <header>, <nav>, <details> de cada unidad
        └── ejercicios.js   ← llamadas a registerExercises('slug', ...)
```

## Cómo buildear

```bash
python3 build.py              # genera index.html
python3 build.py --check      # verifica que index.html coincide con el build
python3 build.py -o out.html  # escribe en otra ruta
```

## Cómo agregar una materia nueva (a mano)

1. Crear `materias/NUEVA/` con los 4 archivos (`meta.json`, `theme.css`, `seccion.html`, `ejercicios.js`).
2. Agregar `NUEVA` al final de `materias/_orden.txt`.
3. Correr `python3 build.py`.
4. Abrir `index.html` en el browser para verificar.

El formato de cada archivo se puede consultar mirando cualquier materia existente como modelo.

## Cómo agregar una materia nueva (automático, con PDFs)

`agregar_materia.py` usa la API de Claude para generar los 4 archivos a partir de los PDFs de la materia (programa, cronograma, bibliografía, práctica).

### Setup (una sola vez)

1. Instalar la dependencia:
   ```bash
   pip install -r requirements.txt
   ```
2. Conseguir una API key en https://console.anthropic.com/ (requiere comprar créditos, ~USD 5 alcanza para varias materias).
3. Copiar `.env.example` a `.env` y poner la clave real:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```
   `.env` está en `.gitignore`, no se sube al repo.

### Uso

1. Crear `_entrada/<slug>/` y poner ahí los PDFs de la materia (programa, cronograma, etc.).
2. Correr:
   ```bash
   python3 agregar_materia.py <slug>
   ```
   (En Windows: `PYTHONIOENCODING=utf-8 python3 agregar_materia.py <slug>`)
3. El script crea `materias/<slug>/` con los 4 archivos y actualiza `_orden.txt`.
4. Correr `python3 build.py` para regenerar `index.html`.
5. Revisar el resultado en el browser — los ejercicios generados por la IA conviene revisarlos a mano antes de pushear.

`_entrada/` está en `.gitignore`; los PDFs de las materias no se suben al repo.

## Próximos pasos

- [x] Fase 1: repo en GitHub + Pages + CI con `build.py --check`.
- [x] Fase 2: `agregar_materia.py` genera las 4 piezas desde PDFs con la API de Claude.
- [ ] Fase 3: GitHub Action que corre ese script y hace commit.
- [ ] Fase 4: formulario web para disparar la Action.
