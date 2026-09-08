import type { Media } from "@/lib/types";

/** Sección 1 — Hero */
export const hero = {
  eyebrow: "Argentina — Music Studio & Label",
  title: ["Todo lo que un artista necesita", "en un solo equipo."],
  subtext:
    "Producción musical, grabación, audiovisual, prensa y estrategia para transformar proyectos musicales en carreras profesionales.",
  ticker: [
    "Producción musical",
    "Grabación",
    "Mezcla & Mastering",
    "Videoclips",
    "Dirección creativa",
    "Prensa",
    "Estrategia",
    "Distribución",
  ],
  media: [
    { alt: "Artista de Subsuelo en sesión de fotos editorial", ratio: "3/4" },
    { alt: "Detalle de sesión de grabación en el estudio", ratio: "1/1" },
  ] as Media[],
};

/** Sección 2 — Manifiesto */
export const manifesto = {
  eyebrow: "Manifiesto",
  title: ["No hacemos solo música.", "Construimos proyectos."],
  paragraphs: [
    "En Subsuelo reunimos producción musical, grabación, contenido audiovisual, estrategia, prensa y distribución dentro de un mismo equipo.",
    "Desde una primera idea hasta un lanzamiento completo, desarrollamos cada proyecto buscando que sonido, imagen y comunicación hablen el mismo idioma.",
    "No queremos ser simplemente el lugar donde grabás una canción. Queremos ser el equipo que te ayuda a llevarla más lejos.",
  ],
  pillars: [
    { index: "01", word: "Producir" },
    { index: "02", word: "Crear" },
    { index: "03", word: "Comunicar" },
    { index: "04", word: "Lanzar" },
  ],
};

/** Sección 4 — Proyecto 360° */
export const pipeline = {
  eyebrow: "Proyecto 360°",
  title: ["De una idea", "a un lanzamiento."],
  paragraphs: [
    "Un proyecto musical tiene muchas partes. En Subsuelo buscamos que todas trabajen en la misma dirección.",
    "Sonido, imagen, contenido, estrategia y lanzamiento coordinados por un mismo equipo.",
  ],
  steps: [
    { index: "01", title: "Idea", note: "Dirección artística y concepto" },
    { index: "02", title: "Producción", note: "Composición, arreglos y beats" },
    { index: "03", title: "Grabación", note: "Sesiones, edición y mezcla" },
    { index: "04", title: "Imagen", note: "Videoclip, contenido y arte" },
    { index: "05", title: "Lanzamiento", note: "Calendario y materiales" },
    { index: "06", title: "Prensa", note: "Medios, radios y campañas" },
    { index: "07", title: "Distribución", note: "Entrega y seguimiento" },
  ],
};

/** Sección 9 — El estudio */
export const studio = {
  eyebrow: "El estudio",
  title: ["Donde las ideas", "toman forma."],
  paragraphs: [
    "Un espacio pensado para trabajar sin apuro: cabina, control, equipamiento y la gente que sabe usarlo.",
    "Las sesiones son únicamente con reserva previa.",
  ],
  media: [
    { alt: "Vista general del control room del estudio", ratio: "16/9" },
    { alt: "Productor trabajando frente a los monitores", ratio: "4/5" },
    { alt: "Detalle de equipamiento outboard y previos", ratio: "1/1" },
    { alt: "Músico grabando en la cabina", ratio: "4/5" },
  ] as Media[],
};

/** Sección 10 — Contacto */
export const contact = {
  eyebrow: "Contacto",
  title: "¿Qué querés crear?",
  subtext: "Contanos tu proyecto y armamos una propuesta a medida.",
  projectTypes: [
    "Single",
    "EP",
    "Álbum",
    "Videoclip",
    "Contenido para redes",
    "Lanzamiento completo",
    "Otro",
  ],
  services: [
    "Producción musical",
    "Grabación",
    "Mezcla / Mastering",
    "Videoclip",
    "Contenido audiovisual",
    "Marketing",
    "Prensa",
    "Lanzamiento",
    "Proyecto integral",
    "Otro",
  ],
  budgets: [
    "Prefiero recibir asesoramiento",
    "Proyecto inicial",
    "Producción profesional",
    "Producción integral / 360°",
  ],
};

/** Frases editoriales que se usan como respiros entre secciones */
export const statements = {
  services: "Hacemos que las partes funcionen como un todo.",
  work: "Una canción es solo el principio.",
  marquee: ["Sonido", "Imagen", "Estrategia", "Un solo equipo"],
};
