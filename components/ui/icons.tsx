/**
 * Iconografía del sitio.
 *
 * Todos son SVG dibujados a mano: escalan con el font-size (1em) y toman el color
 * del texto (currentColor). No se usan glifos tipográficos (↗ ▸ ◆) porque en mobile
 * el sistema los reemplaza por emoji de color y rompen la estética.
 */

type IconProps = {
  className?: string;
  /** Grosor del trazo. Bajarlo en tamaños grandes, subirlo en los chicos. */
  strokeWidth?: number;
};

const base = {
  viewBox: "0 0 24 24",
  width: "1em",
  height: "1em",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false as const,
};

/** Flecha diagonal: acciones y links externos. */
export function ArrowUpRight({ className = "", strokeWidth = 2 }: IconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="M7 17 17 7" />
      <path d="M8.5 7H17v8.5" />
    </svg>
  );
}

/** Chevron a la derecha: viñetas de listado y pasos del recorrido. */
export function ChevronRight({ className = "", strokeWidth = 2.4 }: IconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="m10 6 6 6-6 6" />
    </svg>
  );
}

/** Chevron hacia abajo: selects del formulario. */
export function ChevronDown({ className = "", strokeWidth = 2.2 }: IconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

/**
 * Separador de las cintas horizontales.
 * Doble chevron: retoma la geometría angular del isotipo.
 */
export function Separator({ className = "", strokeWidth = 2.2 }: IconProps) {
  return (
    <svg {...base} strokeWidth={strokeWidth} className={className}>
      <path d="m8 7 5 5-5 5" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}
