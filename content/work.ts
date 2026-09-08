import type { Media } from "@/lib/types";

export type Work = {
  artist: string;
  title: string;
  year: string;
  /** Rol de Subsuelo: Producción, Video, Estrategia, Lanzamiento, Mix & Master... */
  roles: string[];
  /** Links de escucha/visualización. Se activan solos cuando cargás la URL. */
  spotify?: string;
  youtube?: string;
  media: Media;
};

/** Para agregar un trabajo nuevo: copiar un bloque y cambiar los datos. */
export const works: Work[] = [
  {
    artist: "Gonzalo Sarfatti",
    title: "Nombre del lanzamiento",
    year: "2025",
    roles: ["Producción", "Mix & Master", "Video"],
    media: { alt: "Portada del lanzamiento de Gonzalo Sarfatti", ratio: "1/1" },
  },
  {
    artist: "Picky SZ",
    title: "Nombre del lanzamiento",
    year: "2025",
    roles: ["Producción", "Estrategia"],
    media: { alt: "Portada del lanzamiento de Picky SZ", ratio: "1/1" },
  },
  {
    artist: "CAPE",
    title: "Nombre del lanzamiento",
    year: "2025",
    roles: ["Producción", "Video", "Lanzamiento"],
    media: { alt: "Portada del lanzamiento de CAPE", ratio: "1/1" },
  },
  {
    artist: "Maxi García",
    title: "Nombre del lanzamiento",
    year: "2024",
    roles: ["Mix & Master", "Video"],
    media: { alt: "Portada del lanzamiento de Maxi García", ratio: "1/1" },
  },
  {
    artist: "Artista invitado",
    title: "Nombre del lanzamiento",
    year: "2024",
    roles: ["Producción", "Prensa"],
    media: { alt: "Portada de lanzamiento", ratio: "1/1" },
  },
  {
    artist: "Artista invitado",
    title: "Nombre del lanzamiento",
    year: "2024",
    roles: ["Producción integral 360°"],
    media: { alt: "Portada de lanzamiento", ratio: "1/1" },
  },
];
