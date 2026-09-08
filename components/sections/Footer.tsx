import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Marquee from "@/components/ui/Marquee";
import { statements } from "@/content/copy";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-hair bg-ink">
      <div className="overflow-hidden border-b border-hair py-5">
        <Marquee
          items={statements.marquee}
          duration={38}
          className="eyebrow text-white/35"
          separator="◆"
        />
      </div>

      <div className="shell grid grid-cols-1 gap-x-10 gap-y-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo size="lg" />
          <p className="mt-8 max-w-xs font-display text-[15px] uppercase leading-snug tracking-[-0.01em] text-white/75 md:text-[17px]">
            {site.claim}
          </p>
        </div>

        <nav className="md:col-span-3">
          <p className="eyebrow text-white/35">Navegación</p>
          <ul className="mt-6 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[14px] text-white/65 transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow text-white/35">Contacto</p>
          <ul className="mt-6 flex flex-col gap-3 text-[14px]">
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 transition-colors hover:text-brand"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <Link href="#contacto" className="text-white/65 transition-colors hover:text-brand">
                Cotizá tu proyecto
              </Link>
            </li>
            <li className="text-white/40">Argentina</li>
            <li className="text-white/40">Sesiones con reserva previa</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-hair py-7 text-[11px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="eyebrow text-[9px]">{site.location}</p>
      </div>
    </footer>
  );
}
