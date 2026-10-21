# Portafolio académico — Iván García-Fernández

Esqueleto de sitio personal de investigador (rama `Ivan`). Es HTML, CSS y un poco de JavaScript,
sin herramientas de compilación: se abre `index.html` en el navegador o se publica con GitHub Pages.

## Ramas del repositorio

| Rama | Contenido |
|---|---|
| `Ivan` | Este portafolio académico (esqueleto, en construcción) |
| `avi` | Portafolio estudiantil de Avril San Martín (copia de `master` del 21-10-2026) |
| `master` | El mismo portafolio de Avril; GitHub Pages publica desde aquí (<https://ivan1721.github.io/Portafolio/>) |

## Estructura

```
index.html           Inicio: foto, cargo, resumen, intereses y noticias
investigacion.html   Líneas de investigación, con figura por línea
publicaciones.html   Revistas, congresos y tesis
proyectos.html       Proyectos con enlaces a código
docencia.html        Cursos, tutorías y material
cv.html              CV en secciones y enlace al PDF
css/estilos.css      Estilos (modo claro y oscuro automáticos)
js/main.js           Menú en pantallas angostas
assets/img/          foto.jpg y figuras
assets/docs/         cv.pdf y PDFs de publicaciones
```

## Cómo completarlo

- Lo pendiente está marcado como `[…]` con la clase `falta` (fondo amarillo). Al completar un texto, quitar el `<span class="falta">`.
- Foto: `assets/img/foto.jpg` (cuadrada). CV: `assets/docs/cv.pdf`.
- El pie de página repite los enlaces de contacto (correo, ORCID, Google Scholar, LinkedIn) en cada página: cambiarlos en todas.
- Para buscar lo pendiente: `grep -n 'class="falta"' *.html`.
