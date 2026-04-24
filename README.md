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

## Cómo agregar una materia nueva (automático, con la API de Claude)

`agregar_materia.py` usa la API de Claude para generar los 4 archivos de una materia nueva (`meta.json`, `theme.css`, `seccion.html`, `ejercicios.js`) a partir de los archivos fuente de esa materia.

**Formatos de entrada soportados**: `.pdf`, `.pptx`, `.docx`, imágenes (`.png`, `.jpg`, `.webp`, `.gif`), texto plano (`.txt`, `.md`, `.csv`, `.json`, `.html`, `.js`, `.py`, `.xml`) y `.zip` (se descomprime y procesa su contenido recursivamente).

### Setup (una sola vez)

**1. Instalar la dependencia**

```bash
pip install -r requirements.txt
```

Eso instala la librería `anthropic` (cliente oficial de la API).

**2. Conseguir una API key**

- Andá a https://console.anthropic.com/
- Crea cuenta con tu email (el de Claude Max NO sirve — la API es un producto aparte).
- Comprá créditos: **USD 5** alcanzan para varias materias (una materia gasta ~USD 0.05–0.30 según cuántos PDFs cargues).
- En **Settings → API Keys** creá una key nueva. Copiala.

**3. Guardar la key en `.env`**

```bash
cp .env.example .env
```

Abrí `.env` con un editor de texto y reemplazá el placeholder:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

`.env` está en `.gitignore` — nunca se sube al repo. **Nunca** pegues la key en ningún otro archivo, ni en commits, ni en chats.

---

### Uso — ejemplo concreto: agregar "Física B"

**Paso 1: elegir un slug**

El slug es el identificador corto en URL-style para la materia. Por ejemplo: `fisica-b`, `quimica`, `biologia`, `algebra-b`. Reglas:
- Solo minúsculas, números y guiones.
- Cortito pero descriptivo.
- Único (no puede chocar con una materia ya existente).

**Paso 2: crear la carpeta de entrada y poner los archivos**

```
uba-guias/
└── _entrada/
    └── fisica-b/
        ├── programa-2026.pdf
        ├── cronograma.pdf
        ├── practica-1.pdf
        ├── practica-2.pdf
        └── apuntes-catedra.pptx
```

Podés mezclar formatos libremente. Si tenés todo junto en un ZIP, podés dejarlo así:

```
_entrada/fisica-b/fisica-b-completo.zip
```

El script lo descomprime y procesa cada archivo adentro.

**Qué conviene cargar**: programa de la materia, cronograma, bibliografía/apuntes y al menos una práctica con ejercicios resueltos. Cuanto más material, mejores ejercicios genera.

**Paso 3: correr el script**

En Linux / macOS:
```bash
python3 agregar_materia.py fisica-b
```

En Windows (bash / cmd / powershell):
```bash
PYTHONIOENCODING=utf-8 python3 agregar_materia.py fisica-b
```

(El `PYTHONIOENCODING=utf-8` es para que la consola de Windows pueda mostrar los caracteres Unicode del log.)

**Paso 4: lo que hace el script**

```
-> 5 archivos procesados (12.3 MB): apuntes-catedra.pptx, cronograma.pdf, practica-1.pdf, practica-2.pdf, programa-2026.pdf
-> Consultando claude-sonnet-4-6...
OK creada materias/fisica-b/ con los 4 archivos
OK agregado "fisica-b" a _orden.txt
   tokens: in=48120 out=9840 cache(read=0, write=3210)
   costo estimado: ~$0.1680 USD
-> Ahora corre: python3 build.py
```

Detrás de escena:
- Lee todos los archivos de `_entrada/fisica-b/`.
- Convierte pptx/docx a texto; manda PDFs e imágenes como archivos nativos.
- Le pasa a Claude la materia `analisis` como ejemplo de formato (para que respete convenciones de ID, colores, estructura de `registerExercises`, etc.).
- Pide la salida en JSON estructurado con los 4 campos.
- Escribe los 4 archivos en `materias/fisica-b/` y agrega `fisica-b` a `_orden.txt`.

**Paso 5: regenerar `index.html`**

```bash
python3 build.py
```

(Windows: `PYTHONIOENCODING=utf-8 python3 build.py`)

**Paso 6: revisar en el browser**

Abrí `index.html` localmente. Verificá:
- La materia aparece en el drawer (menú lateral).
- Los colores y el ícono se ven bien.
- Las unidades tienen sentido (chequeá contra el programa real).
- Los ejercicios: **revisalos a mano antes de pushear**. La IA a veces inventa o comete errores matemáticos sutiles.

**Paso 7: commitear**

Si todo está OK:
```bash
git add materias/fisica-b/ materias/_orden.txt index.html
git commit -m "Agregar Fisica B"
git push
```

En 1–2 minutos GitHub Pages la publica en https://arielsecchi.github.io/Estudio/.

---

### Errores comunes

| Mensaje | Causa | Solución |
|---|---|---|
| `X Falta instalar la libreria` | Falta `anthropic` | `pip install -r requirements.txt` |
| `X Falta ANTHROPIC_API_KEY` | `.env` vacío o mal nombrado | Revisar que `.env` exista con la key |
| `X Ya existe materias/<slug>/` | La materia ya fue creada | Borrar la carpeta primero si querés regenerar |
| `X No hay archivos en _entrada/<slug>/` | Carpeta vacía o mal nombrada | Verificar el nombre del slug |
| `UnicodeEncodeError` (Windows) | Consola en cp1250 | Prefijar con `PYTHONIOENCODING=utf-8` |
| `authentication_error` de la API | Key inválida o sin créditos | Verificar en https://console.anthropic.com/ |

`_entrada/` está en `.gitignore`; los archivos fuente de las materias nunca se suben al repo.

## Formulario web para agregar materia (Fase 4)

Hay un formulario en `agregar.html` que permite subir archivos desde cualquier dispositivo (incluido el celular) sin tener que correr nada local. Requiere setup una vez en Cloudflare + GitHub Secrets.

### Arquitectura

```
[form agregar.html]  →  [Cloudflare Worker]  →  [GitHub Action]  →  [commit a main]
      navegador              valida código         corre Python          sitio actualizado
                             sube a R2            baja de R2
```

### Setup completo (una sola vez)

**1. Crear bucket R2 en Cloudflare**

- Crear cuenta gratis en https://cloudflare.com
- En el dashboard, ir a **R2** → **Create bucket** → nombre: `uba-guias-entrada`
- En **R2 → Manage R2 API Tokens** → **Create API Token** con permiso `Object Read & Write` para ese bucket. Guardá `Access Key ID` y `Secret Access Key`.
- El `Account ID` está arriba a la derecha del dashboard de R2.

**2. Desplegar el Worker**

Desde `worker/`:
```bash
cd worker
npm install
npx wrangler login
npx wrangler deploy
```

`wrangler deploy` te da la URL final del Worker (algo tipo `https://uba-guias-agregar.arielsecchi.workers.dev`). Anotala.

Configurar secrets del Worker (uno por vez, el comando pide que pegues el valor):
```bash
npx wrangler secret put ACCESS_CODE       # ej: "mi-codigo-2026" — el que vas a dar a la gente
npx wrangler secret put GITHUB_TOKEN      # PAT con permiso 'workflow' (ver punto 3)
npx wrangler secret put GITHUB_OWNER      # Arielsecchi
npx wrangler secret put GITHUB_REPO       # Estudio
```

**3. Crear GitHub Personal Access Token (PAT)**

- https://github.com/settings/tokens → **Generate new token (classic)**
- Scope: `repo` (o fine-grained: `Contents: read/write` + `Actions: write` sobre el repo `Arielsecchi/Estudio`)
- Copialo y pegalo cuando `wrangler secret put GITHUB_TOKEN` te lo pida.

**4. Agregar GitHub Secrets al repo**

En https://github.com/Arielsecchi/Estudio/settings/secrets/actions:
- `ANTHROPIC_API_KEY` → tu key de Anthropic
- `CF_R2_ACCOUNT_ID` → Cloudflare Account ID
- `CF_R2_ACCESS_KEY_ID` → del token R2
- `CF_R2_SECRET_ACCESS_KEY` → del token R2
- `CF_R2_BUCKET` → `uba-guias-entrada`

**5. Actualizar la URL del Worker en `agregar.html`**

Editá la constante `WORKER_URL` en `agregar.html` con la URL real que te dio `wrangler deploy`. Commiteá y pusheá.

### Cómo se usa

Abrís `https://arielsecchi.github.io/Estudio/agregar.html` desde cualquier dispositivo, llenás:
- Nombre de la materia
- Código de acceso (el que pusiste en Cloudflare como `ACCESS_CODE`)
- Archivos (soporta los mismos formatos que `agregar_materia.py`)

Click "Agregar materia". La Action tarda 2–5 minutos. Cuando termina, la materia aparece en el sitio.

### También podés disparar la Action manualmente

Si no querés usar el form, podés correr la Action desde GitHub:
- https://github.com/Arielsecchi/Estudio/actions/workflows/agregar-materia.yml → **Run workflow**
- Poné el slug, dejá `r2_prefix` vacío si ya commiteaste los archivos en `_entrada/<slug>/` temporalmente.

## Próximos pasos

- [x] Fase 1: repo en GitHub + Pages + CI con `build.py --check`.
- [x] Fase 2: `agregar_materia.py` genera las 4 piezas desde PDFs con la API de Claude.
- [x] Fase 3: GitHub Action `.github/workflows/agregar-materia.yml` corre el script y commitea.
- [x] Fase 4: formulario `agregar.html` + Cloudflare Worker para subir desde cualquier dispositivo.
