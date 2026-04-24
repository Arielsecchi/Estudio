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

## Próximos pasos

- [ ] Fase 2: script que procesa PDFs de una materia y genera los 4 archivos automáticamente usando la API de Claude.
- [ ] Fase 3: GitHub Action que corre ese script y hace commit.
- [ ] Fase 4: formulario web para disparar la Action.
