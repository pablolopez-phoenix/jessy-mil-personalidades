import Image from "next/image";
import { personalities, accentMap } from "@/data/personalities";

export default function Timeline() {
  return (
    <section
      id="cronologia"
      data-testid="timeline-section"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-block rounded-full bg-accentred/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentred">
            Sección 02 · Cronología
          </span>
          <h2
            data-testid="timeline-title"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
          >
            Las múltiples vidas de Jessy
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-graytext sm:text-base">
            Una línea de tiempo verificada por testigos no siempre confiables.
            Cada etapa, un personaje. Cada personaje, una leyenda.
          </p>
        </div>

        <ol className="mt-14 space-y-10 sm:space-y-16">
          {personalities.map((p, i) => {
            const a = accentMap[p.accent];
            const reverse = i % 2 === 1;
            return (
              <li
                key={p.id}
                data-testid={`timeline-card-${p.id}`}
                className="reveal group grid gap-0 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardhover md:grid-cols-2"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[360px] ${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full ${a.bg} px-3.5 py-1.5 font-heading text-sm font-extrabold text-white shadow-sm`}
                  >
                    {p.year}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                    {p.tag}
                  </span>
                </div>

                <div className="flex flex-col justify-center p-7 sm:p-10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`grid h-7 w-7 place-items-center rounded-full ${a.soft} ${a.text} font-heading text-xs font-extrabold`}
                    >
                      0{p.id}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-graytext">
                      Etapa documentada
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                    {p.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-relaxed text-graytext">
                    {p.description}
                  </p>

                  <blockquote
                    className={`mt-6 border-l-4 ${a.border} ${a.soft} rounded-r-lg px-4 py-3`}
                  >
                    <p className="font-heading text-base font-bold italic text-ink sm:text-lg">
                      “{p.quote}”
                    </p>
                  </blockquote>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
