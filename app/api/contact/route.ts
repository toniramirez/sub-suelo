import { NextResponse } from "next/server";

export const runtime = "nodejs";

const REQUIRED = [
  "nombre",
  "artista",
  "instagram",
  "email",
  "whatsapp",
  "ciudad",
  "tipo",
  "servicio",
  "genero",
  "descripcion",
  "fecha",
  "presupuesto",
] as const;

const LABELS: Record<string, string> = {
  nombre: "Nombre",
  artista: "Nombre artístico",
  instagram: "Instagram",
  email: "Email",
  whatsapp: "WhatsApp",
  ciudad: "Ciudad / País",
  tipo: "Tipo de proyecto",
  servicio: "Servicio interesado",
  genero: "Género musical",
  link: "Link",
  descripcion: "Descripción",
  fecha: "Fecha estimada",
  presupuesto: "Presupuesto",
};

/**
 * Recepción de consultas.
 *
 * Configuración (variables de entorno, ver .env.example):
 *   RESEND_API_KEY + CONTACT_TO + CONTACT_FROM  -> envía la consulta por email
 *   CONTACT_WEBHOOK_URL                          -> reenvía el JSON a un webhook
 * Si no hay ninguna configurada, la consulta queda registrada en los logs del servidor.
 */
export async function POST(request: Request) {
  let payload: Record<string, string>;

  try {
    payload = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid-json" }, { status: 400 });
  }

  // Honeypot: los bots completan este campo oculto.
  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED.filter((key) => !String(payload[key] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json({ ok: false, error: "missing-fields", missing }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ ok: false, error: "invalid-email" }, { status: 400 });
  }

  const lines = Object.entries(LABELS)
    .filter(([key]) => payload[key])
    .map(([key, label]) => `${label}: ${payload[key]}`);

  const body = lines.join("\n");
  const subject = `Nueva consulta — ${payload.artista || payload.nombre} (${payload.servicio})`;

  let delivered = false;

  try {
    if (process.env.RESEND_API_KEY && process.env.CONTACT_TO) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM ?? "Subsuelo Studio <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO],
          reply_to: payload.email,
          subject,
          text: body,
        }),
      });
      delivered = res.ok;
    } else if (process.env.CONTACT_WEBHOOK_URL) {
      const res = await fetch(process.env.CONTACT_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, ...payload }),
      });
      delivered = res.ok;
    }
  } catch (err) {
    console.error("[contacto] fallo el envío:", err);
  }

  if (!delivered) {
    console.info(`[contacto] ${subject}\n${body}`);
  }

  return NextResponse.json({ ok: true, delivered });
}
