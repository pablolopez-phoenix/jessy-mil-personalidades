# PRD — Jessy: La de las Mil Personalidades

## Problema original
Landing page estática humorística/editorial en Next.js (App Router) + TypeScript
sobre una compañera de trabajo ("Jessy") con 6 personalidades editadas. Estética
mezcla de biografía falsa-documental, expediente/archivo y museo digital. Lista
para Cloudflare Pages, formulario vía Formspree, imágenes en /public/images.
Sin backend, sin base de datos.

## Decisiones del usuario
- Imágenes: placeholders generados (se reemplazarán por las reales).
- Formspree: placeholder `https://formspree.io/f/REEMPLAZAR_ID`.
- Headings: Bricolage Grotesque. Body: Inter.
- Proyecto Next.js nuevo en /app/frontend.

## Stack / Arquitectura
- Next.js 14 App Router, `output: 'export'` (estático), TypeScript, Tailwind CSS.
- Supervisor corre `yarn start` (= `next dev -H 0.0.0.0 -p 3000`) para el preview.
- Build de producción: `next build` → carpeta `out/` para Cloudflare Pages.
- Componentes: Navbar, Hero, Dossier, Timeline, Gallery, Testimonials, ReportForm,
  Footer, ScrollReveal. Datos en `data/personalities.ts`.

## Paleta y tipografía
- Crema #F8F4EE, blanco, negro suave #1F1F1F, gris #555, rojo #C63D2F,
  amarillo #F2B533, verde #3B7A57, rosa #E88DB2.

## Implementado (2026-06-25)
- Navbar fija con scroll suave + menú móvil + CTA "Reportar nueva personalidad".
- Hero con collage de 4 fotos, sello "Clasificado", 2 CTAs.
- Expediente oficial con card dossier (ficha de datos).
- Cronología: 6 cards (2020-2025) con imagen, año, título, descripción y frase.
- Galería de 6 imágenes con hover zoom + **LIGHTBOX** (abrir al click; cerrar con
  X, Escape y click en backdrop; navegación prev/next con flechas y teclado;
  bloqueo de scroll del body).
- 4 testimonios.
- Formulario Formspree (AJAX) con estados submitting/success/error.
- Footer con disclaimer.
- Animaciones reveal SSR-safe (contenido siempre visible).
- **6 fotos reales** de Jessy colocadas en /public/images.
- **Imagen OG** personalizada en /public/og-image.png + metadata OpenGraph/Twitter
  (metadataBase con fallback; configurable vía NEXT_PUBLIC_SITE_URL).
- QA frontend: iteration_1 41/41 + iteration_2 19/19 checks pasados, sin bugs.
- Build estático `next build` → `out/` verificado OK (listo para Cloudflare Pages).

## Pendientes / Backlog
- P0 (usuario): poner ID real de Formspree en `FORMSPREE_ENDPOINT` (data/personalities.ts).
- P0 (usuario, opcional): definir `NEXT_PUBLIC_SITE_URL` en Cloudflare para OG absoluto.
- P1: aria-live en mensajes de éxito/error del formulario (a11y).
- P2: compartir en redes (botones), favicon personalizado.
