/** Contenedor de imagen: mantiene la proporción al reemplazar el placeholder. */
export type Media = {
  /** Ruta a la foto real (ej: "/fotos/artistas/cape.jpg"). Vacío = placeholder. */
  src?: string;
  /** Descripción de la foto que va en este lugar. Se usa como alt y como leyenda del placeholder. */
  alt: string;
  /** Proporción del contenedor: "3/4", "4/5", "16/9", "1/1"... */
  ratio?: string;
  /** Ajuste del encuadre cuando se carga la foto real. */
  position?: string;
};
