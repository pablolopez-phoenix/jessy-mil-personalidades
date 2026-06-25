import Image from "next/image";
import { personalities } from "@/data/personalities";

export default function Gallery() {
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
            sabe cuál es su versión original.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
          {personalities.map((p, i) => (
            <figure
              key={p.id}
              data-testid={`gallery-item-${p.id}`}
              className={`reveal group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${
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
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-1 p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-accentyellow">
                  {p.year}
                </span>
                <p className="font-heading text-sm font-bold leading-snug text-cream sm:text-base">
                  {p.title}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
