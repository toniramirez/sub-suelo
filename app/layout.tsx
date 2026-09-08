import type { Metadata, Viewport } from "next";
import { Archivo, Inter_Tight } from "next/font/google";
import { site } from "@/content/site";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Subsuelo Studio — Producción musical y sello discográfico | Argentina",
    template: "%s | Subsuelo Studio",
  },
  description:
    "Estudio de producción musical y sello discográfico en Argentina. Producción, grabación, mezcla y mastering, videoclips, prensa, marketing musical y distribución. Cuarteto, cumbia y música urbana.",
  keywords: [
    "Subsuelo Studio",
    "estudio musical Argentina",
    "estudio de grabación Argentina",
    "producción musical Argentina",
    "productores musicales Argentina",
    "producción musical Córdoba",
    "estudio de grabación Córdoba",
    "videoclips Argentina",
    "marketing musical Argentina",
    "sello discográfico Argentina",
    "cuarteto",
    "cumbia",
    "música urbana",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: site.url,
    siteName: site.name,
    title: "Subsuelo Studio — Todo lo que un artista necesita en un solo equipo.",
    description:
      "Producción musical, grabación, audiovisual, prensa y estrategia. Estudio y sello discográfico en Argentina.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Subsuelo Studio",
    description: "Todo lo que un artista necesita en un solo equipo.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["MusicGroup", "ProfessionalService"],
  name: site.name,
  alternateName: "Subsuelo",
  description:
    "Estudio de producción musical y sello discográfico en Argentina. Producción, grabación, mezcla y mastering, audiovisual, prensa, marketing y distribución.",
  url: site.url,
  slogan: site.claim,
  areaServed: "Worldwide",
  address: { "@type": "PostalAddress", addressCountry: "AR" },
  sameAs: [site.instagramUrl],
  knowsAbout: ["Cuarteto", "Cumbia", "Música urbana", "Producción musical"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={`${archivo.variable} ${interTight.variable}`}>
      <body className="grain antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
