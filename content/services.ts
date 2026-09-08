import type { Media } from "@/lib/types";

export type Service = {
  id: string;
  index: string;
  title: string;
  lede: string;
  body?: string[];
  items: string[];
  note?: string;
  cta?: string;
  media: Media;
};

export const servicesIntro = {
  eyebrow: "Servicios",
  title: ["Un equipo.", "Todo el proyecto."],
  text: "Producción, grabación, audiovisual, prensa y distribución dentro de la misma estructura. Un proyecto no pasa de mano en mano: se desarrolla adentro.",
};

export const services: Service[] = [
  {
    id: "produccion",
    index: "01",
    title: "Producción musical",
    lede: "Desarrollamos canciones desde la primera idea hasta el master final.",
    items: [
      "Producción musical",
      "Composición",
      "Beats",
      "Arreglos",
      "Dirección musical",
      "Dirección vocal",
      "Grabación",
      "Edición",
      "Mezcla",
      "Mastering",
    ],
    note: "Podés llegar con una canción terminada o simplemente con una idea.",
    cta: "Hablemos de tu música",
    media: {
      alt: "Productor trabajando en la consola durante una sesión de producción",
      ratio: "4/5",
    },
  },
  {
    id: "grabacion",
    index: "02",
    title: "Grabación",
    lede: "El equipo importa. Quién está detrás, todavía más.",
    body: [
      "Instalaciones, equipamiento y criterio técnico al servicio de una sola cosa: que la toma correcta quede grabada.",
      "Cada sesión se dirige. Se decide qué se busca, cómo se llega y cuándo está. El resultado no depende del catálogo de equipos: depende de la gente que los usa.",
    ],
    items: [
      "Sesiones de voz",
      "Dirección vocal",
      "Instrumentos y sesionistas",
      "Producción en vivo",
      "Edición y comping",
      "Preparación de mezcla",
    ],
    cta: "Reservá una sesión",
    media: {
      alt: "Cabina de grabación con artista registrando una toma de voz",
      ratio: "4/5",
    },
  },
  {
    id: "audiovisual",
    index: "03",
    title: "La música también se ve.",
    lede: "Dirección, cámara y postproducción pensadas desde el mismo lugar donde nace el sonido.",
    items: [
      "Concepto creativo",
      "Dirección",
      "Guion",
      "Producción",
      "Filmación",
      "Iluminación",
      "Dirección de fotografía",
      "Edición",
      "Color",
      "Videoclips",
      "Visualizers",
      "Contenido vertical",
      "Reels",
      "Contenido para lanzamientos",
    ],
    cta: "Quiero un videoclip",
    media: {
      alt: "Rodaje de videoclip: cámara e iluminación en set nocturno",
      ratio: "4/5",
    },
  },
  {
    id: "prensa",
    index: "04",
    title: "Prensa & Marketing",
    lede: "Una buena canción necesita una estrategia a su altura.",
    body: [
      "No se trata de conseguir notas sueltas. Se trata de construir el lanzamiento: qué se cuenta, cuándo, en qué orden y frente a quién.",
    ],
    items: [
      "Estrategia de lanzamiento",
      "Comunicación",
      "Prensa",
      "Medios",
      "Radios",
      "Entrevistas",
      "Influencers",
      "Campañas",
      "Marketing musical",
      "Estrategia digital",
      "Playlist pitching",
      "EPK / Press Kit",
      "Contenido",
    ],
    cta: "Armemos tu lanzamiento",
    media: {
      alt: "Sesión de dirección creativa y planificación de campaña sobre mesa de trabajo",
      ratio: "4/5",
    },
  },
  {
    id: "distribucion",
    index: "05",
    title: "Distribución",
    lede: "Tu música preparada para llegar a donde tiene que llegar.",
    body: [
      "Acompañamos la planificación, la preparación y la distribución digital de cada lanzamiento: calendario, materiales, entrega a plataformas y seguimiento.",
    ],
    items: [
      "Planificación de calendario",
      "Preparación de entregables",
      "Distribución digital",
      "Metadata y assets",
      "Seguimiento del lanzamiento",
    ],
    media: {
      alt: "Detalle de artwork y materiales de un lanzamiento sobre superficie oscura",
      ratio: "4/5",
    },
  },
];
