/**
 * SUBSUELO STUDIO — Configuración general del sitio.
 * Editar acá: navegación, textos globales, redes y CTA.
 */

export const site = {
  name: "Subsuelo Studio",
  wordmark: "SUBSUELO",
  wordmarkSuffix: "STUDIO",
  claim: "Todo lo que un artista necesita en un solo equipo.",
  location: "Argentina — Music Studio & Label",
  url: "https://subsuelostudio.com",
  instagramHandle: "@subsuelostudio",
  instagramUrl: "https://instagram.com/subsuelostudio",
  /** Completar con el número real en formato internacional sin signos: 549351xxxxxxx */
  whatsappNumber: "",
  whatsappMessage: "Hola Subsuelo, quiero cotizar un proyecto.",
  email: "hola@subsuelostudio.com",
} as const;

export const CTA = {
  primary: "Cotizá tu proyecto",
  secondary: "Conocé Subsuelo",
  form: "Quiero cotizar mi proyecto",
} as const;

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Artistas", href: "#artistas" },
  { label: "Equipo", href: "#equipo" },
  { label: "Trabajos", href: "#trabajos" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const whatsappLink = site.whatsappNumber
  ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`
  : null;
