# Portafolio Digital Estudiantil — Avril Darix San Martín Jiménez

Portafolio profesional de **4° Año Medio, Especialidad Química Industrial**
(Centro Politécnico Particular de Ñuñoa, 2026), construido según la rúbrica
del Desafío N.º 1 — Módulos integrados P.M.A.O. · T.A.I.

**Sitio publicado:** <https://ivan1721.github.io/Portafolio/>

📅 **Fecha de entrega: 31 de julio 2026** — el link se envía al correo del
profesor a partir del lunes 20 de julio.

## Estructura del sitio

```
index.html               # Inicio: presentación (10–20 líneas), colegio, contacto
quien-soy.html           # ¿Quién soy?: perfil + reflexión académica/laboral
pmao.html                # P.M.A.O.: presentación del módulo + subpáginas
├── pmao-desafio1.html   # Desafío 1 (PDF embebido)
├── pmao-humedad.html    # Análisis 1: % Humedad
├── pmao-cenizas.html    # Análisis 2: % Cenizas
├── pmao-grasa.html      # Análisis 3: % Grasa
├── pmao-cromatografia.html  # Análisis 4: Cromatografía
└── pmao-informe.html    # Análisis 5: Informe Técnico (PDF embebido)
tai.html                 # T.A.I.: espectrofotometría (guía PDF embebida)
tafq.html                # T.A.F.Q.: extracción etérea de grasa (guía PDF embebida)
css/styles.css           # Estilos (paleta cálida en :root)
js/main.js               # Menú móvil, animaciones, visor de PDF, placeholders
assets/img/              # Fotos e insignia
assets/docs/             # PDFs (desafío, contenidos, guías e informe)
assets/video/            # Videos de las prácticas
```

## ⚠️ Archivos pendientes de agregar

Para completar la rúbrica hay que subir estos archivos (los nombres deben
coincidir exactamente):

| Archivo | Qué es | Lo pide la rúbrica |
|---|---|---|
| `assets/img/cromatografia.jpg` | Foto real del cromatograma de la práctica | Análisis de laboratorio |
| `assets/docs/informe-tecnico.pdf` | Informe técnico final | Análisis de laboratorio |
| `assets/img/extraccion-grasa.jpg` | Evidencia práctica T.A.F.Q. (opcional) | — |

Ya agregados ✅:

- `assets/img/insignia.png` — insignia del colegio (encabezado de todas las páginas)
- `assets/img/colegio.jpg` — foto oficial del colegio (Inicio, sección "Mi colegio")
- `assets/img/avril.jpg` — foto personal (¿Quién soy?)
- `assets/img/reflexion.jpg` — Avril trabajando en la eliminación de humedad (soporte de la reflexión)
- `assets/img/pesada-balanza.jpg`, `assets/img/humedad.jpg` y `assets/img/humedad-desecador.jpg` — evidencias de % Humedad
- `assets/img/preparacion-muestras.jpg` — preparación de muestras (P.M.A.O.)
- `assets/img/espectrofotometria.jpg` y `assets/img/espectrofotometria-cubeta.jpg` — evidencias de espectrofotometría (T.A.I.)
- `assets/img/cenizas1.jpg` y `assets/img/cenizas2.jpg` — antes y después del ensayo de % Cenizas
- `assets/video/grasa-solvente.mp4` — video del manto calefactor con el balón y el solvente (% Grasa)
- `assets/docs/desafio-1.pdf` — PDF oficial del Desafío N.º 1 (subpágina Desafío 1)
- `assets/img/grasa1.jpg` y `assets/img/grasa2.jpg` — mantos calefactores y pesada de la grasa extraída (% Grasa)
- `assets/img/cromatografia-esquema.jpg` — esquema ilustrativo de la técnica (Cromatografía)
- `assets/docs/pmao-analisis-humedad-cenizas.pdf` — contenidos de humedad y cenizas (P.M.A.O.)
- `assets/docs/pmao-analisis-grasas.pdf` — contenidos de análisis de grasas (P.M.A.O.)
- `assets/docs/tai-cromatografia-papel.pdf` — contenidos de cromatografía en papel (T.A.I.)
- `assets/docs/tai-espectrofotometria.pdf` — guía de espectrofotometría (T.A.I.)
- `assets/docs/tafq-extraccion-grasa.pdf` — guía de extracción etérea (T.A.F.Q.)

> Los PDF ya no se cargan automáticamente al abrir cada página: se muestran
> al presionar "Ver documento aquí" o se bajan con "Descargar PDF".

> Nota: `assets/img/PMAO.zip` (el zip original de las fotos) queda solo en tu
> computador — está en `.gitignore` y no se subirá a GitHub.

Mientras falten, el sitio muestra un recuadro "📷 Imagen pendiente" en su lugar
(la insignia simplemente se oculta).

## Checklist de entrega

**Contenido pendiente (además de los archivos de arriba):**

- [ ] **Datos reales en las tablas**: las 4 tablas de análisis (humedad,
  cenizas, grasa, cromatografía) traen valores marcados con "(ejemplo)".
  Datos ya capturados en fotos: pesada de humedad 1,0290 g y balón con
  grasa 132,94 g — faltan las masas iniciales para calcular los %.
- [ ] **Conclusiones**: ajustar las 4 conclusiones a los resultados reales.
- [ ] **Reflexión (¿Quién soy?)**: que Avril la lea y agregue frases propias.
- [ ] **Foto de perfil más personal** (retrato con delantal) — la actual es
  de espaldas y muy similar a la de la reflexión.
- [ ] **Nombre completo del módulo P.M.A.O.** en `pmao.html` (opcional).

**Estado según la rúbrica (32 pts):**

| Dimensión | Estado |
|---|---|
| Inicio: encabezado e identidad (15%) | ✅ Completo |
| Inicio: presentación 10–20 líneas (15%) | ✅ Completo |
| Inicio: identidad del colegio (10%) | ✅ Completo |
| ¿Quién soy?: presentación e imagen (10%) | ✅ (mejorable: foto retrato) |
| ¿Quién soy?: reflexión (15%) | ✅ (recomendado: toque personal) |
| P.M.A.O.: presentación del módulo (10%) | ✅ Completo |
| P.M.A.O.: Desafío 1 con PDF (10%) | ✅ Completo |
| P.M.A.O.: 5 subpáginas de análisis (15%) | ⚠️ Falta el Informe Técnico en PDF |

**Antes de entregar:**

- [ ] Publicar los últimos cambios (`git add . && git commit && git push`)
- [ ] Revisar el sitio publicado página por página (PDFs, fotos, video)
- [ ] Enviar el link al profesor entre el **20 y el 31 de julio de 2026**

## Publicar cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Los cambios aparecen en el sitio publicado en 1–2 minutos.
