export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-cream font-heading text-base font-extrabold text-ink">
                J
              </span>
              <span className="font-heading text-lg font-extrabold tracking-tight">
                Expediente Jessy
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Este sitio fue creado con fines humorísticos, documentales y de
              burla autorizada entre compañeros. La protagonista conoce y aprueba
              el proyecto. Cualquier parecido con una leyenda real es
              completamente intencional.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5 text-sm">
            {[
              { label: "Inicio", href: "#inicio" },
              { label: "Cronología", href: "#cronologia" },
              { label: "Galería", href: "#galeria" },
              { label: "Testimonios", href: "#testimonios" },
              { label: "Contacto", href: "#contacto" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-cream/70 transition-colors hover:text-accentyellow"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Expediente Jessy. Caso permanentemente
            abierto.
          </p>
          <p className="font-mono">FILE #JSY-∞ · CLASIFICADO</p>
        </div>
      </div>
    </footer>
  );
}
