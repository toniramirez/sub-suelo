import { ChevronRight } from "@/components/ui/icons";
import type { Media } from "@/lib/types";

type Props = {
  media: Media;
  className?: string;
  /** Índice editorial que se imprime en la esquina (01, 02...). */
  index?: string;
  /** Muestra la leyenda descriptiva mientras no haya foto real. */
  caption?: boolean;
  priority?: boolean;
  sizes?: string;
};

/**
 * Contenedor de imagen con proporción fija.
 * Mientras media.src esté vacío muestra una placa oscura con la descripción
 * de la foto que va en ese lugar. Al cargar la foto real, el encuadre se mantiene.
 */
export default function Frame({
  media,
  className = "",
  index,
  caption = true,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  const ratio = media.ratio ?? "4/5";

  return (
    <div
      className={`group relative overflow-hidden bg-void ${
        media.src ? "" : "ring-1 ring-inset ring-white/12"
      } ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {media.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt={media.alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          sizes={sizes}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          style={{ objectPosition: media.position ?? "center" }}
        />
      ) : (
        <div
          aria-label={media.alt}
          role="img"
          className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
          style={{
            backgroundColor: "#0b0b0b",
            backgroundImage:
              "radial-gradient(120% 90% at 24% 8%, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 55%), radial-gradient(90% 70% at 88% 96%, rgba(255,229,0,0.07) 0%, rgba(255,229,0,0) 60%), linear-gradient(180deg, #131313 0%, #070707 100%)",
          }}
        />
      )}

      {/* Velo inferior: sostiene la lectura del texto sobre cualquier foto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

      {index ? (
        <span className="pointer-events-none absolute left-4 top-4 font-display text-[11px] tracking-[0.2em] text-brand">
          {index}
        </span>
      ) : null}

      {!media.src && caption ? (
        <span className="pointer-events-none absolute bottom-4 left-4 right-10 flex items-start gap-2 eyebrow text-[10px] text-white/45">
          <ChevronRight className="mt-[0.15em] shrink-0 text-[9px] text-brand" />
          {media.alt}
        </span>
      ) : null}
    </div>
  );
}
