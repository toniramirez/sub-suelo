/**
 * Métricas del estudio.
 * ⚠️ VALORES PLACEHOLDER — reemplazar por las cifras reales antes de publicar.
 * "value" es numérico para la animación; "suffix" agrega +, M+, etc.
 */
export type Stat = {
  value: number;
  suffix: string;
  label: string;
  /** true = todavía es un número de ejemplo */
  placeholder: boolean;
};

export const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Artistas", placeholder: true },
  { value: 80, suffix: "+", label: "Lanzamientos", placeholder: true },
  { value: 10, suffix: "M+", label: "Reproducciones", placeholder: true },
  { value: 40, suffix: "+", label: "Videoclips", placeholder: true },
  { value: 120, suffix: "+", label: "Producciones", placeholder: true },
];
