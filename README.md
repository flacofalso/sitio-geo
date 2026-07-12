# Sitio SEO/GEO — Proyecto base

Sitio estático en Astro optimizado para búsqueda tradicional (Google) y para
citación en asistentes de IA (ChatGPT, Claude, Gemini, Perplexity).

## Por qué esta base técnica

- **HTML estático puro**: los crawlers de IA en su mayoría no ejecutan
  JavaScript. Astro renderiza todo en build; el contenido existe en el HTML.
- **Schema JSON-LD automático**: `Base.astro` inyecta Organization + Person en
  todas las páginas, Article en posts, y el componente `FAQ` genera FAQPage.
- **robots.txt permisivo con bots de IA** y `llms.txt` incluidos en `/public`.
- **Sitemap automático** vía `@astrojs/sitemap`.

## Puesta en marcha

```bash
npm install
npm run dev        # servidor local en http://localhost:4321
npm run build      # genera /dist para producción
```

## Antes de desplegar (checklist)

1. Edita `src/config.js` con tu dominio, nombre real, email y perfiles
   (LinkedIn, etc.). **Todo el schema se alimenta de ahí.**
2. Reemplaza `tudominio.cl` en `public/robots.txt` y `public/llms.txt`.
3. Completa `src/pages/sobre-mi.astro` con tu experiencia real (E-E-A-T).
4. Revisa el artículo de ejemplo en `src/pages/blog/` — es tu plantilla.

## Despliegue en Cloudflare Pages (recomendado, gratis)

1. Sube el proyecto a un repo de GitHub.
2. En Cloudflare Pages: "Create project" → conecta el repo.
3. Framework preset: **Astro**. Build command: `npm run build`.
   Output: `dist`.
4. Conecta tu dominio en la pestaña "Custom domains".
5. Bonus: en el panel de Cloudflare tendrás analytics de bots gratis para
   monitorear visitas de GPTBot, ClaudeBot y PerplexityBot.

## Después de desplegar

1. **Google Search Console**: verifica el dominio y envía el sitemap
   (`https://tudominio.cl/sitemap-index.xml`).
2. **Bing Webmaster Tools**: importa desde GSC. Bing alimenta a ChatGPT
   Search — no es opcional.
3. **IndexNow**: en Bing Webmaster Tools genera una API key y colócala como
   archivo `.txt` en `/public`. Cada vez que publiques, notifica la URL
   (se puede automatizar con un script en el build).
4. Verifica el schema con https://validator.schema.org y la prueba de
   resultados enriquecidos de Google.

## Flujo de creación de contenido (con Claude)

Para cada nuevo artículo:

1. Copia `src/pages/blog/que-es-geo-como-aparecer-en-ia.astro` con un nuevo
   nombre de archivo (el nombre define la URL).
2. Sigue el checklist comentado al inicio del archivo: H1 = la consulta
   objetivo, AnswerBox con respuesta autónoma, datos con fuente y fecha,
   FAQ al final.
3. **Regla de oro**: tú verificas cada dato y cada fuente antes de publicar,
   y agregas experiencia propia (casos, números, contexto chileno). Google
   penaliza contenido masivo de IA sin valor agregado; 30-50 páginas
   excelentes superan a 500 mediocres.
4. Publica a ritmo constante (2-4 piezas/semana máximo) — la consistencia
   pesa más que el volumen.

## Estructura

```
src/
  config.js                 ← ÚNICO lugar donde defines tu entidad/marca
  layouts/Base.astro        ← layout con schema, meta y estilos globales
  components/
    AnswerBox.astro         ← bloque de respuesta directa (answer-first)
    FAQ.astro               ← FAQ visible + schema FAQPage automático
  pages/
    index.astro             ← home
    sobre-mi.astro          ← página de autor (E-E-A-T)
    blog/
      index.astro           ← listado automático de guías
      que-es-geo-....astro  ← artículo ejemplo / plantilla
public/
  robots.txt                ← permisivo con crawlers de IA
  llms.txt                  ← resumen curado del sitio para LLMs
```
