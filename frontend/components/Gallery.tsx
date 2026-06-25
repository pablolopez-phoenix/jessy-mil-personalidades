"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { personalities } from "@/data/personalities";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? personalities[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % personalities.length)),
    []
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? i : (i - 1 + personalities.length) % personalities.length
      ),
    []
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  return (
    <section
      id="galeria"
      data-testid="gallery-section"
      className="relative bg-ink py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-block rounded-full bg-accentyellow/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentyellow">
            Sección 03 · Archivo visual
          </span>
          <h2
            data-testid="gallery-title"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-cream sm:text-5xl"
          >
            Galería de vidas pasadas
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-cream/70 sm:text-base">
            Cada imagen es una prueba irrefutable de que Jessy no ha tenido una
            vida normal. Explora su archivo visual y descubre por qué ya nadie
            sabe cuál es su versión original.{" "}
            <span className="text-cream/50">Toca una foto para ampliarla.</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {personalities.map((p, i) => (
            <button
              type="button"
              key={p.id}
              onClick={() => setOpenIndex(i)}
              data-testid={`gallery-item-${p.id}`}
              aria-label={`Ampliar: ${p.title}`}
              className={`reveal group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-left outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accentyellow ${
                i === 0 ? "col-span-2 row-span-1 md:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              <span className="pointer-events-none absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/15 text-cream opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="block text-xs font-semibold uppercase tracking-wider text-accentyellow">
                  {p.year}
                </span>
                <span className="block font-heading text-sm font-bold leading-snug text-cream sm:text-base">
                  {p.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          data-testid="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          style={{ animation: "reveal-up 0.25s ease-out both" }}
        >
          <button
            type="button"
            data-testid="gallery-lightbox-close"
            aria-label="Cerrar"
            onClick={close}
            className="absolute right-4 top-4 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-cream transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev / Next */}
          <button
            type="button"
            data-testid="gallery-lightbox-prev"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-cream transition-colors hover:bg-white/20 sm:left-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18 9 12l6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            data-testid="gallery-lightbox-next"
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 text-cream transition-colors hover:bg-white/20 sm:right-6"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image card */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-2xl"
          >
            <div className="relative w-full" style={{ aspectRatio: "3 / 4", maxHeight: "72vh" }}>
              <Image
                src={active.image}
                alt={active.alt}
                fill
                sizes="(max-width: 768px) 92vw, 640px"
                className="object-cover"
                priority
              />
              <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 font-heading text-sm font-extrabold text-cream backdrop-blur">
                {active.year}
              </span>
            </div>
            <figcaption className="bg-white px-5 py-4">
              <p className="font-heading text-lg font-extrabold leading-tight text-ink">
                {active.title}
              </p>
              <p className="mt-1 font-heading text-sm font-bold italic text-accentred">
                “{active.quote}”
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
