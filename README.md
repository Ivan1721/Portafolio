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
js/main.js               # Menú móvil, animaciones, placeholders
assets/img/              # Fotos e insignia
assets/docs/             # PDFs (desafío e informe)
```

## ⚠️ Archivos pendientes de agregar

Para completar la rúbrica hay que subir estos archivos (los nombres deben
coincidir exactamente):

| Archivo | Qué es | Lo pide la rúbrica |
|---|---|---|
| `assets/img/cenizas.jpg` | Evidencia del ensayo de cenizas | Análisis de laboratorio |
| `assets/img/grasa.jpg` | Evidencia del ensayo de grasa | Análisis de laboratorio |
| `assets/img/cromatografia.jpg` | Evidencia de la cromatografía | Análisis de laboratorio |
| `assets/docs/desafio-1.pdf` | PDF oficial del Desafío 1 | Desafío 1 y PDF (10%) |
| `assets/docs/informe-tecnico.pdf` | Informe técnico final | Análisis de laboratorio |
| `assets/img/espectrofotometria.jpg` | Evidencia práctica T.A.I. (opcional) | — |
| `assets/img/extraccion-grasa.jpg` | Evidencia práctica T.A.F.Q. (opcional) | — |

Ya agregados ✅:

- `assets/img/insignia.png` — insignia del colegio (encabezado de todas las páginas)
- `assets/img/colegio.jpg` — foto oficial del colegio (Inicio, sección "Mi colegio")
- `assets/img/avril.jpg` — foto personal (¿Quién soy?)
- `assets/img/reflexion.jpg` — Avril trabajando en la eliminación de humedad (soporte de la reflexión)
- `assets/img/pesada-balanza.jpg`, `assets/img/humedad.jpg` y `assets/img/humedad-desecador.jpg` — evidencias de % Humedad
- `assets/img/preparacion-muestras.jpg` — preparación de muestras (P.M.A.O.)
- `assets/docs/pmao-analisis-humedad-cenizas.pdf` — contenidos de humedad y cenizas (P.M.A.O.)
- `assets/docs/tai-cromatografia-papel.pdf` — contenidos de cromatografía en papel (T.A.I.)
- `assets/docs/tai-espectrofotometria.pdf` — guía de espectrofotometría (T.A.I.)
- `assets/docs/tafq-extraccion-grasa.pdf` — guía de extracción etérea (T.A.F.Q.)

> Los PDF ya no se cargan automáticamente al abrir cada página: se muestran
> al presionar "Ver documento aquí" o se bajan con "Descargar PDF".

> Nota: `assets/img/PMAO.zip` (el zip original de las fotos) queda solo en tu
> computador — está en `.gitignore` y no se subirá a GitHub.

Mientras falten, el sitio muestra un recuadro "📷 Imagen pendiente" en su lugar
(la insignia simplemente se oculta).

## También pendiente de revisar

- **Datos de resultados**: las tablas de los análisis traen valores de
  ejemplo marcados con "(ejemplo)" — reemplazarlos por los datos reales.
- **Conclusiones**: ajustarlas a los resultados obtenidos.
- **Nombre completo del módulo P.M.A.O.**: agregarlo en `pmao.html` si el
  profesor lo exige (hay un comentario `⚠️` indicando dónde).

## Publicar cambios

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Los cambios aparecen en el sitio publicado en 1–2 minutos.
