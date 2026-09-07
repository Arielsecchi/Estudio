# Fuente del PDF `superposicion-nodo-b-fiuba-electronica.pdf`

Resolución completa del ejercicio de la ficha **"Circuitos con múltiples fuentes,
superposición"** de la cátedra Veiga (FIUBA, TB157 / TB063): los 4 puntos del
enunciado más las dos preguntas del "Para pensar".

El PDF se genera acá y se commitea a la raíz del repo, igual que
`integrales-directas-am-a-segundo-parcial.pdf`. Está linkeado desde la sección 6
(Superposición) de `materias/fiuba-electronica/seccion.html`.

## Archivos

| Archivo | Qué hace |
|---|---|
| `svglib.py`  | mini librería de esquemáticos en SVG: cables, resistores, baterías, masa, flechas de corriente y de malla |
| `figuras.py` | las 11 figuras del apunte, dibujadas con `svglib` sobre una grilla común |
| `doc.py`     | el texto del apunte + el CSS de impresión; ensambla todo en un HTML |

Todas las figuras son **SVG inline**, sin imágenes rasterizadas: el PDF queda
vectorial y liviano, y se puede reimprimir a cualquier tamaño.

## Cómo regenerarlo

```bash
cd pdf-src/superposicion-nodo-b
python3 doc.py documento.html
chromium --headless --disable-gpu --no-pdf-header-footer \
         --print-to-pdf=../../superposicion-nodo-b-fiuba-electronica.pdf documento.html
```

Cualquier Chromium/Chrome sirve. El HTML intermedio (`documento.html`) es
descartable y no se commitea.

## Si querés tocar algo

- **El texto**: está todo en `doc.py`, en la función `build()`, en orden de lectura.
- **Una figura**: en `figuras.py`. El circuito del enunciado se dibuja con
  `main_circuit(G, ...)`, que acepta flags (`refs`, `meshes`, `kcl`,
  `passivate`) para producir las distintas variantes sin repetir geometría.
  `G_FULL` y `G_MID` son las dos grillas (figura a ancho completo y figura de dos paneles).
- **Verificar el resultado**: para chequear que no rompiste una figura, abrí
  `documento.html` en el navegador antes de imprimir.
