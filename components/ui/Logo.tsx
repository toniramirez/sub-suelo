import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/**
 * Logo de Subsuelo Studio.
 *
 * Lee automáticamente los archivos de /public/brand:
 *   subsuelo-mark.(svg|png|webp)  -> isotipo (la "S" dorada), se usa en el header
 *   subsuelo-logo.(svg|png|webp)  -> lockup completo (S + SUBSUELO STUDIO), se usa en el footer
 *
 * Mientras no existan, muestra el lockup tipográfico. No hay que tocar código:
 * apenas aparecen los archivos, el sitio los usa.
 */
const BRAND_DIR = path.join(process.cwd(), "public", "brand");
const EXTENSIONS = ["svg", "png", "webp"] as const;

function findAsset(basename: string): string | null {
  try {
    for (const ext of EXTENSIONS) {
      if (fs.existsSync(path.join(BRAND_DIR, `${basename}.${ext}`))) {
        return `/brand/${basename}.${ext}`;
      }
    }
  } catch {
    /* noop */
  }
  return null;
}

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  /** "inline" = isotipo + palabra al lado (header). "stacked" = lockup completo (footer). */
  variant?: "inline" | "stacked";
};

export default function Logo({ className = "", size = "md", variant = "inline" }: Props) {
  const mark = findAsset("subsuelo-mark");
  const lockup = findAsset("subsuelo-logo");

  // Footer: si está el lockup completo, se usa tal cual.
  if (variant === "stacked" && lockup) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={lockup}
        alt={`${site.name} — ${site.claim}`}
        className={`h-auto w-[190px] md:w-[220px] ${className}`}
      />
    );
  }

  const markSize = size === "lg" ? "h-12" : size === "sm" ? "h-7" : "h-9";
  const wordSize = size === "lg" ? "text-[22px]" : size === "sm" ? "text-[13px]" : "text-[16px]";
  const subSize = size === "lg" ? "text-[11px]" : "text-[9px]";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {mark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={mark} alt="" aria-hidden="true" className={`${markSize} w-auto shrink-0`} />
      ) : null}

      <span className="flex flex-col leading-none">
        <span
          className={`font-display font-extrabold uppercase leading-none tracking-[0.01em] ${wordSize}`}
        >
          {site.wordmark}
        </span>
        <span
          className={`mt-[3px] flex items-center gap-2 uppercase leading-none tracking-[0.42em] text-white/70 ${subSize}`}
        >
          <span aria-hidden="true" className="h-px w-3 bg-brand/70" />
          {site.wordmarkSuffix}
        </span>
      </span>
    </span>
  );
}
