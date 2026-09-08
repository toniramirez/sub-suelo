# SUBSUELO STUDIO — Sitio oficial

Sitio one-page editorial para Subsuelo Studio: estudio de producción musical + sello discográfico.
Next.js 16 (App Router) + TypeScript + Tailwind CSS 4. Sin dependencias de animación: todo es CSS + IntersectionObserver.

---

## Arrancar el proyecto

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
```

---

## Dónde se edita cada cosa

Todo el contenido vive en `/content`. **No hace falta tocar componentes para actualizar el sitio.**

| Archivo | Qué controla |
|---|---|
| `content/site.ts` | Nombre, claim, navegación, Instagram, **WhatsApp**, email, URL del sitio |
| `content/copy.ts` | Hero, manifiesto, recorrido 360°, estudio, opciones del formulario |
| `content/services.ts` | Los 5 servicios: título, texto, listados, CTA |
| `content/artists.ts` | Roster de artistas y sus lanzamientos |
| `content/team.ts` | Equipo (el fundador lleva `featured: true`) |
| `content/work.ts` | Grilla de trabajos / lanzamientos |
| `content/stats.ts` | Números de la sección de métricas |

### Agregar un trabajo nuevo
Copiar un bloque en `content/work.ts` y cambiar los datos. La grilla se acomoda sola.

### Activar Spotify / YouTube
En `content/work.ts` y `content/artists.ts`, completar `spotify:` y/o `youtube:` con la URL.
Los links aparecen automáticamente; mientras estén vacíos el sitio muestra "Próximamente".

### Activar WhatsApp
En `content/site.ts`, completar `whatsappNumber` con el número en formato internacional sin signos
(ej: `5493511234567`). El botón se activa solo en la sección de contacto.

---

## Fotografía

Cada imagen es un objeto `Media`:

```ts
{ src: "/fotos/artistas/cape.jpg", alt: "Retrato de CAPE", ratio: "3/4", position: "center top" }
```

- Mientras `src` esté vacío se muestra una placa oscura con la descripción de la foto que va ahí.
- Al cargar la foto real **el encuadre se mantiene**: el contenedor conserva la proporción (`ratio`)
  y la imagen se recorta con `object-cover`.
- `position` ajusta el encuadre (`"center top"`, `"center"`, `"50% 30%"`...).

Guardar las fotos en `/public` (por ejemplo `/public/fotos/...`) y referenciarlas desde `/content`.

**Proporciones usadas:** retratos `3/4` y `4/5`, portadas `1/1`, planos del estudio `16/9`.

---

## Logo

Guardar el isotipo en `public/brand/subsuelo-mark.svg` (o `.png` con fondo transparente).
El sitio lo detecta solo y lo muestra en el header y el footer junto al lockup tipográfico.
Ver `public/brand/LEEME.txt`.

El favicon está en `app/icon.svg` — reemplazarlo por el isotipo oficial cuando esté el vectorial.

---

## Formulario de contacto

El formulario postea a `/api/contact`. Para recibir las consultas, copiar `.env.example` a `.env.local`
y completar **una** de estas dos opciones:

**Email (recomendado, vía [Resend](https://resend.com)):**
```
RESEND_API_KEY=re_xxxxx
CONTACT_TO=hola@subsuelostudio.com
CONTACT_FROM="Subsuelo Studio <web@subsuelostudio.com>"
```

**Webhook (Zapier, Make, n8n, Slack):**
```
CONTACT_WEBHOOK_URL=https://...
```

Sin configurar nada, el sitio funciona igual y las consultas quedan en los logs del servidor.
El formulario tiene honeypot anti-spam y validación de campos obligatorios.

---

## Identidad visual

- **Amarillo de marca:** se cambia en una sola línea, en `app/globals.css` → `--color-brand`
  (junto a `--color-brand-hi` y `--color-brand-lo`, que arman el degradado dorado del logo).
- **Tipografías:** Archivo (titulares) + Inter Tight (textos), cargadas con `next/font`.
- **Geometría:** las clases `.bevel` y `.bevel-sm` reproducen el corte angular del isotipo.

---

## Pendientes antes de publicar

- [ ] Reemplazar las fotos placeholder por fotografía real
- [ ] Cargar el logo en `public/brand/`
- [ ] **Reemplazar los números de `content/stats.ts`** (hoy son valores de ejemplo)
- [ ] Completar el número de WhatsApp en `content/site.ts`
- [ ] Cargar los títulos reales de lanzamientos y sus links de Spotify / YouTube
- [ ] Ajustar las bios del equipo
- [ ] Configurar el envío del formulario (`.env.local`)
- [ ] Actualizar `site.url` con el dominio definitivo (afecta SEO, sitemap y Open Graph)
- [ ] Agregar `app/opengraph-image.jpg` (1200×630) para compartir en redes
