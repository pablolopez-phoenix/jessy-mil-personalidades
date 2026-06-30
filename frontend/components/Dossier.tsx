import { dossierFacts } from "@/data/personalities";

export default function Dossier() {
  return (
    <section
      data-testid="dossier-section"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.85fr]">
        <div className="reveal">
          <span className="inline-block rounded-full bg-accentgreen/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentgreen">
            Sección 01 · Pruebas
          </span>
          <h2
            data-testid="dossier-title"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
          >
            Expediente oficial de Jessy
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-graytext sm:text-base">
            Después de años de investigación no solicitada, recopilamos las
            pruebas más importantes de las múltiples vidas de Jessy. Cada
            fotografía revela una etapa distinta de su historia, un rol
            inesperado y una nueva razón para pensar que jamás la hemos conocido
            del todo.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <p className="font-heading text-3xl font-extrabold text-accentred">
                9
              </p>
              <p className="text-xs uppercase tracking-wide text-graytext">
                Vidas documentadas
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-extrabold text-accentyellow">
                ∞
              </p>
              <p className="text-xs uppercase tracking-wide text-graytext">
                Vidas por confirmar
              </p>
            </div>
            <div>
              <p className="font-heading text-3xl font-extrabold text-accentgreen">
                0%
              </p>
              <p className="text-xs uppercase tracking-wide text-graytext">
                Probabilidad de aburrirse
              </p>
            </div>
          </div>
        </div>

        {/* Dossier card */}
        <div className="reveal" style={{ transitionDelay: "120ms" }}>
          <div
            data-testid="dossier-card"
            className="relative rotate-1 rounded-2xl border border-ink/10 bg-cream p-6 shadow-card transition-transform duration-300 hover:rotate-0 sm:p-8"
          >
            <div className="absolute -right-3 -top-3 rotate-[10deg] rounded-md border-2 border-accentred bg-white px-2.5 py-1 font-heading text-[10px] font-extrabold uppercase tracking-widest text-accentred">
              Top Secret
            </div>

            <div className="mb-5 flex items-center gap-3 border-b border-dashed border-ink/20 pb-4">
              <div className="grid h-12 w-12 place-items-center rounded-lg bg-ink font-heading text-xl font-extrabold text-cream">
                J
              </div>
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-wide">
                  Ficha de identificación
                </p>
                <p className="text-xs text-graytext">Acceso restringido</p>
              </div>
            </div>

            <dl className="space-y-3.5">
              {dossierFacts.map((fact) => (
                <div key={fact.label} className="file-row text-sm">
                  <dt className="text-graytext">{fact.label}</dt>
                  <span className="dots" aria-hidden="true" />
                  <dd
                    className={`text-right font-heading font-bold ${
                      fact.flag ? "text-accentred" : "text-ink"
                    }`}
                  >
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-center justify-between rounded-lg bg-white px-4 py-3 text-xs text-graytext">
              <span className="font-mono">FILE #JSY-2020-2025</span>
              <span className="inline-flex items-center gap-1.5 font-semibold text-accentgreen">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accentgreen" />
                En seguimiento
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
