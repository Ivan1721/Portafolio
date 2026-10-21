# CLAUDE.md

Guía para Claude Code (claude.ai/code) en este repositorio.

## Qué es

Sitio estático (HTML, CSS y JavaScript sin compilación) en GitHub Pages. Dos portafolios en ramas
distintas:

| Rama | Contenido | Quién la usa |
|---|---|---|
| `Ivan` | Portafolio académico de Iván García-Fernández (esqueleto) | rama de trabajo local |
| `avi` | Portafolio estudiantil de Avril San Martín (copia de `master` del 21-10-2026) | |
| `master` | El portafolio de Avril; **GitHub Pages publica desde aquí** | no tocar sin pedirlo: cambia el sitio público |

`Ivan` es una rama huérfana: no comparte historial con `master` ni con `avi`. No unirlas.

## Acceso a GitHub (SSH)

- Remoto: `origin` = `git@github.com:Ivan1721/Portafolio.git` (SSH, usuario de GitHub `Ivan1721`).
- La autenticación usa la **clave SSH ya configurada en esta máquina**, la misma con que se suben `~/pika_ros` y `~/milo_ws`. Comprobarla con `ssh -T git@github.com`, que debe responder `Hi Ivan1721!`.
- Para subir: `git push origin Ivan` (o `avi`).
- **Nunca** escribir tokens ni el contenido de claves en archivos, URLs del remoto ni en el chat, y no abrir `~/.ssh`. Si `ssh -T` falla, pedirle al usuario que revise su agente SSH en vez de buscar la clave.

## Convenciones

- Textos y mensajes de commit en español.
- Lo pendiente del esqueleto está marcado con `<span class="falta">[…]</span>`; no inventar publicaciones, cargos ni fechas: dejar la marca hasta que el usuario dé el dato.
- Cabecera y pie se repiten en cada página: un cambio de navegación o de contacto va en todas.
- Archivos pesados (PDF, video) en `assets/`; revisar el tamaño antes de subirlos.
