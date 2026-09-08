"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CTA, nav } from "@/content/site";

/** El logo se recibe como prop porque se resuelve en el servidor (lee /public/brand). */
export default function Header({ logo }: { logo: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled || open
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[72px] items-center justify-between gap-8 md:h-[84px]">
        <Link href="#inicio" onClick={() => setOpen(false)} aria-label="Subsuelo Studio — inicio">
          {logo}
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="eyebrow text-white/60 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contacto"
            className="brand-gradient bevel-sm hidden h-10 items-center px-6 eyebrow text-black transition-all duration-500 hover:brightness-110 sm:inline-flex"
          >
            {CTA.primary}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-white transition-all duration-500 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-6 bg-white transition-all duration-500 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden bg-black/95 backdrop-blur-xl transition-[max-height,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="shell flex flex-col gap-1 py-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display border-b border-white/10 py-4 text-[clamp(2rem,9vw,3rem)] text-white/85 transition-colors hover:text-brand"
            >
              <span className="mr-4 align-super font-sans text-[10px] tracking-[0.2em] text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="brand-gradient bevel-sm mt-6 inline-flex items-center justify-center py-4 eyebrow text-black"
          >
            {CTA.primary}
          </Link>
        </div>
      </div>
    </header>
  );
}
