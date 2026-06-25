import { testimonials, accentMap } from "@/data/personalities";

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      data-testid="testimonials-section"
      className="relative py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="inline-block rounded-full bg-accentpink/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentpink">
            Sección 04 · Declaraciones
          </span>
          <h2
            data-testid="testimonials-title"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
          >
            Testimonios de testigos no siempre confiables
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-graytext sm:text-base">
            Recopilados de pasillos, filas del súper y conversaciones que jamás
            debieron grabarse.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((t, i) => {
            const a = accentMap[t.accent];
            return (
              <figure
                key={i}
                data-testid={`testimonial-${i + 1}`}
                className="reveal group relative rounded-2xl border border-ink/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardhover sm:p-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span
                  className={`font-heading text-5xl font-extrabold leading-none ${a.text}`}
                  aria-hidden="true"
                >
                  “
                </span>
                <blockquote className="-mt-3 text-[15px] leading-relaxed text-ink sm:text-base">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/10 pt-4">
                  <span
                    className={`grid h-9 w-9 place-items-center rounded-full ${a.soft} ${a.text} font-heading text-sm font-extrabold`}
                  >
                    ?
                  </span>
                  <span className="text-sm font-semibold text-graytext">
                    — {t.author}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
