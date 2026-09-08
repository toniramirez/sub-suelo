import type { Media } from "@/lib/types";

export type Release = { title: string; year: string; link?: string };

export type Artist = {
  slug: string;
  name: string;
  genre: string;
  line: string;
  releases: Release[];
  /** Links de escucha. Dejar vacío hasta tener las URLs reales. */
  spotify?: string;
  youtube?: string;
  instagram?: string;
  media: Media;
};

export const artists: Artist[] = [
  {
    slug: "gonzalo-sarfatti",
    name: "Gonzalo Sarfatti",
    genre: "Cuarteto",
    line: "Voz de cuarteto contemporáneo. Producción, imagen y lanzamientos desarrollados en Subsuelo.",
    releases: [
      { title: "Título del single", year: "2025" },
      { title: "Título del single", year: "2024" },
    ],
    media: { alt: "Retrato editorial de Gonzalo Sarfatti", ratio: "3/4" },
  },
  {
    slug: "picky-sz",
    name: "Picky SZ",
    genre: "Urbano",
    line: "Sonido urbano con identidad propia. Producción y dirección audiovisual integradas.",
    releases: [
      { title: "Título del single", year: "2025" },
      { title: "Título del EP", year: "2024" },
    ],
    media: { alt: "Retrato editorial de Picky SZ", ratio: "3/4" },
  },
  {
    slug: "cape",
    name: "CAPE",
    genre: "Urbano / Experimental",
    line: "Cruce entre urbano y experimentación sonora. Proyecto desarrollado de punta a punta.",
    releases: [
      { title: "Título del single", year: "2025" },
      { title: "Título del single", year: "2025" },
    ],
    media: { alt: "Retrato editorial de CAPE", ratio: "3/4" },
  },
  {
    slug: "maxi-garcia",
    name: "Maxi García",
    genre: "Cumbia",
    line: "Cumbia con producción moderna. Sonido, contenido y estrategia bajo la misma dirección.",
    releases: [
      { title: "Título del single", year: "2025" },
      { title: "Título del single", year: "2024" },
    ],
    media: { alt: "Retrato editorial de Maxi García", ratio: "3/4" },
  },
];
