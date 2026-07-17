# Portafolio — Iván García

Portafolio personal hecho con HTML, CSS y JavaScript puros. Sin dependencias,
listo para publicarse gratis en **GitHub Pages**.

## Estructura

```
Portafolio/
├── index.html          # Página principal (todas las secciones)
├── css/
│   └── styles.css      # Estilos (colores y fuentes en :root)
├── js/
│   └── main.js         # Menú móvil, scroll y animaciones
├── assets/
│   └── img/            # Coloca aquí tu foto e imágenes de proyectos
└── README.md
```

## Personalizar

1. **Textos**: edita `index.html` — nombre, descripción, sección "Sobre mí".
2. **Proyectos**: duplica los bloques `<article class="project-card">` con tus
   proyectos reales y sus enlaces.
3. **Colores**: cambia las variables al inicio de `css/styles.css` (`:root`).
4. **Foto**: guarda tu foto en `assets/img/` y reemplaza el `div.hero__avatar`
   por una etiqueta `<img>`.

## Ver en local

Abre `index.html` directamente en el navegador, o si tienes Python:

```bash
python -m http.server 8000
# luego visita http://localhost:8000
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en <https://github.com/new> (por ejemplo
   `portafolio`, público, **sin** README inicial).
2. En esta carpeta ejecuta:

   ```bash
   git add .
   git commit -m "Primer commit: portafolio inicial"
   git remote add origin https://github.com/Ivan1721/portafolio.git
   git branch -M main
   git push -u origin main
   ```

3. En GitHub: **Settings → Pages → Source: Deploy from a branch →
   Branch: `main` / `(root)` → Save**.
4. En 1–2 minutos tu portafolio estará en línea en
   `https://ivan1721.github.io/portafolio/`.

> 💡 Si nombras el repositorio `Ivan1721.github.io`, la URL será directamente
> `https://ivan1721.github.io`.
