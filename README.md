# Welcome to my cave

Blog personal hecho con [Hugo](https://gohugo.io/) y el tema propio `cave` (estilo blog 2010s, negro y morado, modo claro y oscuro).

## Arrancar en tu compu

1. Instala Hugo **extended** (0.128 o más nuevo). En Mac: `brew install hugo`.
2. Dentro de esta carpeta:

   ```bash
   hugo server -D
   ```

3. Abre http://localhost:1313. Los cambios se ven al guardar. `-D` también muestra los borradores.

## Escribir un post

```bash
hugo new posts/mi-post.md
```

Edita el archivo en `content/posts/` y cambia `draft: true` a `draft: false` cuando esté listo.

- **Etiquetas:** `tags: ["tecnología", "viajes"]`. Aparecen solas en la barra lateral y en `/tags/`.
- **Resumen:** lo que va antes de `<!--more-->` es lo que se ve en la portada.
- **Imágenes:** ponlas en `static/img/` y úsalas así: `![texto](/img/foto.jpg)`.

## Lo que tienes que personalizar (`hugo.toml`)

| Clave | Qué es |
|---|---|
| `baseURL` | Tu dominio final |
| `params.subtitle` | El lema bajo el título |
| `params.goatcounter` | Código de GoatCounter para el contador de visitas |
| `menus.main` | Enlaces del "Menú principal" |

También edita `content/sobre-mi.md` y borra los posts de ejemplo.

## Contador de visitas (GoatCounter, gratis)

1. Crea una cuenta en https://www.goatcounter.com y elige un código, por ejemplo `welcometomycave`.
2. En GoatCounter, entra a *Settings* y activa **"Allow adding visitor counts on your website"**.
3. En `hugo.toml` pon `goatcounter = "welcometomycave"`.

El contador solo registra visitas en producción (`hugo` sin `server`). Mientras no lo configures, muestra `000000`.

## Modo claro / oscuro

- La primera vez, el blog usa el modo del sistema del visitante.
- Si el visitante presiona el botón, su elección se guarda en su navegador.
- Sin JavaScript, el blog sigue el modo del sistema.
- Los colores están como variables al inicio de `themes/cave/assets/css/main.css`. El bloque `:root` es el modo claro y `[data-theme="dark"]` es el oscuro.

## Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub (rama `main`).
2. En el repositorio entra a **Settings → Pages → Source: GitHub Actions**.
3. Cada `git push` publica el blog solo, con `.github/workflows/hugo.yml`.

También funciona en Netlify o Cloudflare Pages: comando `hugo --minify`, carpeta `public`.

## Dónde está cada cosa

```
hugo.toml                       configuración
content/posts/                  tus posts
content/sobre-mi.md             página "Sobre mí"
content/archivo.md              página de archivo (lista por mes)
static/img/                     avatar, favicon e imágenes
themes/cave/layouts/            plantillas HTML
themes/cave/layouts/partials/   header, barra lateral, footer, contador
themes/cave/assets/css/main.css estilos y paleta
themes/cave/assets/js/theme.js  botón de tema y buscador
```
