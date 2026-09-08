import fs from "node:fs";
import path from "node:path";
import { site } from "@/content/site";

/**
 * Logo de Subsuelo.
 * Si existe un archivo del isotipo en /public/brand (svg > png > webp) lo usa.
 * Mientras tanto muestra el lockup tipográfico, alineado a la estética del logo.
 *
 * Para activar el logo oficial: guardá el archivo como
 *   public/brand/subsuelo-mark.svg   (recomendado, solo la "S")
 *   public/brand/subsuelo-mark.png
 */
const CANDIDATES = [
  "subsuelo-mark.svg",
  "subsuelo-mark.png",
  "subsuelo-mark.webp",
] as const;

function findMark(): string | null {
  try {
    const dir = path.join(process.cwd(), "public", "brand");
    for (const file of CANDIDATES) {
      if (fs.existsSync(path.join(dir, file))) return `/brand/${file}`;
    }
  } catch {
    /* noop */
  }
  return null;
}

export default function Logo({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const mark = findMark();
  const markSize = size === "lg" ? "h-11" : size === "sm" ? "h-6" : "h-8";
  const wordSize =
    size === "lg" ? "text-[22px]" : size === "sm" ? "text-[13px]" : "text-[16px]";
  const subSize = size === "lg" ? "text-[11px]" : "text-[9px]";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {mark ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={mark}
          alt=""
          aria-hidden="true"
          className={`${markSize} w-auto shrink-0`}
        />
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
