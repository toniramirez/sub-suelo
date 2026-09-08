import type { Media } from "@/lib/types";

export type Member = {
  alias: string;
  realName?: string;
  role: string;
  bio: string;
  instagram?: string;
  media: Media;
  /** El fundador ocupa el bloque destacado de la sección. */
  featured?: boolean;
};

export const team: Member[] = [
  {
    alias: "Tonny Producer",
    realName: "Antonio Ramirez",
    role: "Founder / Producer",
    bio: "Fundador de Subsuelo y responsable de la dirección creativa del estudio. Trabaja la producción y el desarrollo artístico como una sola cosa: el sonido, la imagen y la manera en que un proyecto se presenta al mundo.",
    instagram: "",
    media: { alt: "Retrato de Antonio Ramirez (Tonny Producer) en el estudio", ratio: "4/5" },
    featured: true,
  },
  {
    alias: "Tin Rios",
    realName: "Agustin Rios",
    role: "Producer",
    bio: "Producción y arreglos. Construye la base sobre la que se apoya cada canción.",
    instagram: "",
    media: { alt: "Retrato de Agustin Rios (Tin Rios)", ratio: "3/4" },
  },
  {
    alias: "Casio",
    realName: "Octavio Suarez",
    role: "Producer",
    bio: "Producción y sonido. Trabaja el detalle: la textura que hace que un tema se reconozca.",
    instagram: "",
    media: { alt: "Retrato de Octavio Suarez (Casio)", ratio: "3/4" },
  },
  {
    alias: "Tiago USA",
    role: "Marketing / Playlist Strategy",
    bio: "Estrategia digital y pitching. Se ocupa de que la música llegue al oyente correcto.",
    instagram: "",
    media: { alt: "Retrato de Tiago USA", ratio: "3/4" },
  },
  {
    alias: "Martin Moya",
    role: "Filmmaker",
    bio: "Dirección y cámara. Traduce el sonido en imagen, del concepto al color final.",
    instagram: "",
    media: { alt: "Retrato de Martin Moya en rodaje", ratio: "3/4" },
  },
];
