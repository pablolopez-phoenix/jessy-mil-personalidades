# Jessy: La de las Mil Personalidades 🕵️‍♀️

Landing page estática, humorística y editorial sobre las "múltiples vidas" de Jessy.
Construida con **Next.js (App Router) + TypeScript + Tailwind CSS**, lista para
desplegarse en **Cloudflare Pages**. Sin backend, sin base de datos.

## Stack

- Next.js 14 (App Router) con `output: 'export'` → exportación 100% estática
- TypeScript
- Tailwind CSS
- `next/image` (modo `unoptimized` para export estático)
- Tipografías: **Bricolage Grotesque** (headings) + **Inter** (body) vía `next/font`
- Formulario conectado a **Formspree** (AJAX)

## Estructura

```
app/
  layout.tsx        # Fuentes, metadata, layout raíz
  page.tsx          # Composición de todas las secciones
  globals.css       # Estilos base, grano de papel, animaciones reveal
components/
  Navbar.tsx        # Navegación fija + menú móvil + scroll suave
  Hero.tsx          # Portada con collage de fotos
  Dossier.tsx       # Expediente oficial / ficha dossier
  Timeline.tsx      # Cronología: 6 cards (una por personalidad)
  Gallery.tsx       # Galería de las 6 imágenes
  Testimonials.tsx  # 4 testimonios
  ReportForm.tsx    # Formulario Formspree
  Footer.tsx
  ScrollReveal.tsx  # Animaciones de entrada al hacer scroll
data/
  personalities.ts  # Datos de personalidades, testimonios, dossier y endpoint
public/
  images/           # jessy-oxxo.png, jessy-celebridad.png, etc.
```

## Desarrollo

```bash
yarn install
yarn dev          # http://localhost:3000
```

## Build estático (para Cloudflare Pages)

```bash
yarn build        # genera la carpeta ./out con el sitio estático
```

### Desplegar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En Cloudflare Pages → **Create project** → conecta el repo.
3. Configura el build:
   - **Framework preset:** Next.js (Static HTML Export) o "None"
   - **Build command:** `npx next build`
   - **Build output directory:** `out`
4. Deploy.

## ⚙️ Antes de producción — pendientes

1. **Reemplaza las imágenes placeholder** en `public/images/` por las fotos reales
   editadas de Jessy (mismos nombres de archivo):
   `jessy-oxxo.png`, `jessy-celebridad.png`, `jessy-imss.png`,
   `jessy-tupperware.png`, `jessy-chola.png`, `jessy-dr-simi.png`.
2. **Conecta Formspree:** en `data/personalities.ts` cambia
   `FORMSPREE_ENDPOINT` de `https://formspree.io/f/REEMPLAZAR_ID`
   por tu ID real de [Formspree](https://formspree.io/).
3. **Imagen OG (para compartir en WhatsApp/redes):** el archivo está en
   `public/og-image.png`. Para que la URL sea absoluta en producción, define la
   variable de entorno `NEXT_PUBLIC_SITE_URL` con tu dominio final
   (ej. `https://tu-dominio.pages.dev`) en Cloudflare Pages → Settings →
   Environment variables. Si no la defines, se usa un dominio por defecto.

> Este sitio fue creado con fines humorísticos y de burla autorizada entre compañeros.
