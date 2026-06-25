"use client";

import { useState } from "react";
import { FORMSPREE_ENDPOINT } from "@/data/personalities";

type Status = "idle" | "submitting" | "success" | "error";

export default function ReportForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      data-testid="contact-section"
      className="relative bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="reveal mb-10 text-center">
          <span className="inline-block rounded-full bg-accentyellow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accentyellow">
            Sección 05 · Reporte ciudadano
          </span>
          <h2
            data-testid="contact-title"
            className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl"
          >
            ¿Has visto otra personalidad de Jessy?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-graytext sm:text-base">
            Si conoces una etapa perdida, profesión alterna o versión inédita de
            Jessy, repórtala aquí para fines estrictamente históricos.
          </p>
        </div>

        {status === "success" ? (
          <div
            data-testid="contact-success"
            className="reveal rounded-3xl border-2 border-accentgreen/40 bg-accentgreen/10 p-10 text-center"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accentgreen text-2xl font-bold text-white">
              ✓
            </div>
            <h3 className="mt-5 font-heading text-2xl font-extrabold">
              Testimonio recibido
            </h3>
            <p className="mt-3 text-graytext">
              Gracias por tu aporte al expediente. Nuestro equipo de
              investigadores no solicitados lo revisará con el rigor que no
              merece.
            </p>
            <button
              type="button"
              data-testid="contact-reset"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accentred hover:text-accentred"
            >
              Reportar otra personalidad
            </button>
          </div>
        ) : (
          <form
            data-testid="contact-form"
            onSubmit={handleSubmit}
            className="reveal rounded-3xl border border-ink/10 bg-cream p-6 shadow-card sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nombre del testigo"
                name="nombre"
                placeholder="¿Quién reporta?"
                testid="field-nombre"
                required
              />
              <Field
                label="Personalidad detectada"
                name="personalidad"
                placeholder="Ej. Jessy, agente secreta"
                testid="field-personalidad"
                required
              />
              <Field
                label="Año aproximado"
                name="anio"
                placeholder="Ej. 2026"
                testid="field-anio"
              />
              <Field
                label="Correo (opcional)"
                name="correo"
                type="email"
                placeholder="tu@correo.com"
                testid="field-correo"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="relato"
                className="mb-1.5 block text-sm font-semibold text-ink"
              >
                Relato de los hechos
              </label>
              <textarea
                id="relato"
                name="relato"
                rows={5}
                required
                data-testid="field-relato"
                placeholder="Describe la escena con el mayor detalle (y dramatismo) posible…"
                className="w-full resize-y rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-graytext/60 focus:border-accentred focus:ring-2 focus:ring-accentred/20"
              />
            </div>

            {status === "error" && (
              <p
                data-testid="contact-error"
                className="mt-4 rounded-lg bg-accentred/10 px-4 py-3 text-sm font-medium text-accentred"
              >
                No pudimos enviar el reporte. Verifica que el formulario esté
                conectado a Formspree e inténtalo de nuevo.
              </p>
            )}

            <button
              type="submit"
              data-testid="contact-submit"
              disabled={status === "submitting"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accentred px-6 py-4 font-heading text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b0352a] hover:shadow-xl hover:shadow-accentred/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
            >
              {status === "submitting" ? "Enviando…" : "Enviar testimonio"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  testid,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  testid: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        data-testid={testid}
        className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-graytext/60 focus:border-accentred focus:ring-2 focus:ring-accentred/20"
      />
    </div>
  );
}
