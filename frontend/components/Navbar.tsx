"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cronología", href: "#cronologia" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/10 shadow-[0_4px_24px_-16px_rgba(31,31,31,0.4)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#inicio"
          data-testid="navbar-logo"
          className="group flex items-center gap-2.5"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink font-heading text-base font-extrabold text-cream transition-transform duration-300 group-hover:-rotate-6">
            J
          </span>
          <span className="font-heading text-[15px] font-extrabold leading-none tracking-tight">
            Expediente&nbsp;Jessy
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-testid={`navbar-link-${link.label.toLowerCase()}`}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-graytext transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contacto"
            data-testid="navbar-cta"
            className="hidden rounded-full bg-accentred px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accentred/30 sm:inline-block"
          >
            Reportar nueva personalidad
          </a>
          <button
            type="button"
            data-testid="navbar-menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-ink/15 bg-white/70 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-ink transition-all duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        data-testid="navbar-mobile-menu"
        className={`overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink transition-colors hover:bg-ink/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-accentred px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Reportar nueva personalidad
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
