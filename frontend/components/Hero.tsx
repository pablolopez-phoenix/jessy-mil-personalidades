import Image from "next/image";
import { personalities } from "@/data/personalities";

export default function Hero() {
  const collage = [
    personalities[0],
    personalities[1],
    personalities[2],
    personalities[5],
  ];

  return (
    <section
      id="inicio"
      data-testid="hero-section"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-accentyellow/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-accentpink/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="reveal">
          <span
            data-testid="hero-eyebrow"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-graytext"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accentred" />
            Expediente clasificado · No. ∞
          </span>

          <h1
            data-testid="hero-title"
            className="mt-6 font-heading text-[2.6rem] font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-[4.25rem]"
          >
            Jessy: <span className="text-accentred">La de las</span>{" "}
            <span className="relative inline-block">
              Mil Personalidades
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 14"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 120 3 180 7c40 2 80 0 116-3"
                  stroke="#F2B533"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-7 font-heading text-lg font-semibold text-ink sm:text-xl"
          >
            Una biografía no autorizada… aunque completamente aprobada por la
            protagonista.
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-graytext sm:text-base">
            Nadie sabe exactamente dónde comenzó la leyenda. Algunos aseguran que
            fue en un Oxxo. Otros juran haberla visto trabajando en el IMSS.
            También hay quienes la recuerdan vendiendo Tupperware, conviviendo
            con figuras del espectáculo, representando al barrio con elegancia o
            posando junto al Dr. Simi. Lo único comprobado es esto:{" "}
            <span className="font-semibold text-ink">
              Jessy ha vivido más vidas que una telenovela.
            </span>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cronologia"
              data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-xl hover:shadow-ink/25"
            >
              Ver expediente completo
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#contacto"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accentred hover:text-accentred"
            >
              Reportar nueva personalidad
            </a>
          </div>
        </div>

        {/* Collage */}
        <div className="reveal relative mx-auto h-[400px] w-full max-w-md sm:h-[480px]">
          <div className="absolute right-6 top-2 z-20 rotate-[8deg] animate-stamp-in select-none rounded-md border-2 border-accentred px-3 py-1.5 font-heading text-xs font-extrabold uppercase tracking-widest text-accentred">
            Clasificado
          </div>

          {collage.map((p, i) => {
            const styles = [
              "left-0 top-4 -rotate-6 z-10",
              "right-2 top-0 rotate-3 z-20",
              "left-6 bottom-2 rotate-2 z-30",
              "right-0 bottom-6 -rotate-3 z-20",
            ];
            return (
              <figure
                key={p.id}
                className={`absolute h-44 w-36 overflow-hidden rounded-xl border-[5px] border-white bg-white shadow-card transition-transform duration-300 hover:z-40 hover:scale-105 sm:h-52 sm:w-44 ${styles[i]}`}
              >
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, 200px"
                  className="object-cover"
                  priority={i < 2}
                />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-ink/75 px-2 py-1 text-center text-[10px] font-semibold uppercase tracking-wider text-cream">
                  {p.year}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
