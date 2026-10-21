# Portafolio académico — Iván García-Fernández

Sitio personal de investigador (rama `Ivan`). Es HTML, CSS y un poco de JavaScript,
sin herramientas de compilación: se abre `index.html` en el navegador o se publica con GitHub Pages.

## Ramas del repositorio

| Rama | Contenido |
|---|---|
| `Ivan` | Este portafolio académico (contenido completo desde el 21-10-2026) |
| `avi` | Portafolio estudiantil de Avril San Martín (copia de `master` del 21-10-2026) |
| `master` | Este portafolio académico desde el pull request de `Ivan` (21-10-2026); GitHub Pages publica desde aquí (<https://ivan1721.github.io/Portafolio/>) |

## Estructura

```
index.html           Inicio: perfil, cifras, intereses, la plataforma y noticias
investigacion.html   Tesis (pregunta, hipótesis, objetivos, resultados preliminares) y las otras cuatro líneas
trayectoria.html     Línea de tiempo 2020–2028: formación, I+D, publicaciones, docencia, comunidad y lo planificado
publicaciones.html   Manuscritos, congresos, presentaciones y tesis, con estado y DOI
proyectos.html       Proyectos de I+D (Fondecyt, Núcleo Milenio, Endowment, Prueba de Concepto) y software con enlaces
docencia.html        Ayudantías, formación de estudiantes, material y divulgación
cv.html              CV completo; el botón «Imprimir o guardar como PDF» usa los estilos de impresión
css/estilos.css      Estilos (modo claro y oscuro automáticos, impresión del CV)
js/main.js           Menú en pantallas angostas
assets/img/          Figuras e ilustraciones (ver abajo)
```

## Imágenes

| Archivo | Origen |
|---|---|
| `plataforma.svg`, `esfera_vistas.svg`, `milo.svg`, `operador.svg` | Biblioteca de ilustraciones de ActivePerceptionArms (`paper/figures/bocetos/illustrator/biblioteca/`, generada por `docs/estado_del_arte/scripts/biblioteca_svg.py`) |
| `metodo_nbv.png`, `escena_nbv.jpg` | Figuras 1 y 2 del proyecto de tesis (`docs/proyecto_tesis/figuras/` de ActivePerceptionArms), reducidas |
| `segmentacion_d405.jpg` | Predicción de YOLO11 sobre una imagen de la D405 de la pinza (`Ultralytics/imagenes_comparacion/apple_red_yolo11.png`) |
| `arm-viz.jpg` | Captura de <https://ivan1721.github.io/arm-viz/> |

## Fuentes del contenido

Al 21-10-2026: el CV en LaTeX (`CV_Ivan_Garcia_2026-10.tex`), el proyecto de tesis de la candidatura
(`docs/proyecto_tesis/borrador_proyecto_tesis.md` de ActivePerceptionArms), los textos de la postulación ANID 2027 y los
README de los repositorios públicos.

## Pendiente

- Foto: `assets/img/foto.jpg` (cuadrada). Mientras no exista, el inicio muestra un círculo vacío.
- Enlaces a Google Scholar y LinkedIn: están marcados como `[…]` con la clase `falta` en el pie de todas las páginas.
- Para buscar lo pendiente: `grep -n 'class="falta"' *.html`.
