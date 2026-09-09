"use client";

import { useState } from "react";
import { ChevronDown } from "@/components/ui/icons";
import { contact } from "@/content/copy";
import { CTA } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldBase =
  "w-full border-b border-white/18 bg-transparent pb-3 pt-2 text-[15px] text-white placeholder:text-white/25 outline-none transition-colors duration-300 focus:border-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState(contact.budgets[0]);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request-failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("No pudimos enviar la consulta. Escribinos por WhatsApp o Instagram.");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-white/15 bevel px-8 py-16 text-center" data-reveal>
        <p className="eyebrow text-brand">Consulta recibida</p>
        <h3 className="display mt-6 text-[clamp(1.8rem,4vw,3rem)]">Gracias.</h3>
        <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-dim">
          Vamos a revisar tu proyecto y te respondemos con una propuesta a medida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-x-10 gap-y-9 md:grid-cols-2">
      {/* Anti-spam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field label="Nombre" name="nombre" required placeholder="Tu nombre" />
      <Field label="Nombre artístico" name="artista" required placeholder="Cómo te presentás" />
      <Field label="Instagram" name="instagram" required placeholder="@usuario" />
      <Field label="Email" name="email" type="email" required placeholder="tu@email.com" />
      <Field label="WhatsApp" name="whatsapp" type="tel" required placeholder="+54 9 ..." />
      <Field label="Ciudad / País" name="ciudad" required placeholder="Córdoba, Argentina" />

      <Select label="Tipo de proyecto" name="tipo" required options={contact.projectTypes} />
      <Select label="Servicio interesado" name="servicio" required options={contact.services} />

      <Field label="Género musical" name="genero" required placeholder="Cuarteto, cumbia, urbano..." />
      <Field
        label="Link a Spotify / YouTube"
        name="link"
        placeholder="Opcional"
        type="url"
      />

      <div className="md:col-span-2">
        <Label htmlFor="descripcion" required>
          Descripción del proyecto
        </Label>
        <textarea
          id="descripcion"
          name="descripcion"
          required
          rows={4}
          placeholder="Contanos qué querés hacer y en qué etapa estás."
          className={`${fieldBase} resize-none`}
        />
      </div>

      <Field label="Fecha estimada" name="fecha" type="month" required />

      <div className="md:col-span-2">
        <Label required>Presupuesto aproximado</Label>
        <div className="mt-4 flex flex-wrap gap-3">
          {contact.budgets.map((option) => {
            const active = budget === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setBudget(option)}
                aria-pressed={active}
                className={`bevel-sm border px-5 py-3 eyebrow text-[10px] transition-all duration-500 ${
                  active
                    ? "border-brand bg-brand/10 text-brand"
                    : "border-white/15 text-white/55 hover:border-white/40 hover:text-white"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="presupuesto" value={budget} />
      </div>

      <div className="md:col-span-2 mt-4 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="brand-gradient bevel-sm inline-flex h-14 items-center px-9 eyebrow text-[12px] text-black transition-all duration-500 hover:brightness-110 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : CTA.form}
        </button>
        {error ? <p className="text-[13px] text-brand">{error}</p> : null}
      </div>
    </form>
  );
}

function Label({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-1 block text-[10px] text-white/45">
      {children}
      {required ? <span className="ml-1 text-brand">*</span> : null}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className={fieldBase}
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={name}
          name={name}
          required={required}
          defaultValue=""
          className={`${fieldBase} appearance-none pr-8 [&>option]:bg-[#0b0b0b] [&>option]:text-white`}
        >
          <option value="" disabled>
            Seleccionar
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute bottom-[14px] right-1 text-[12px] text-brand" />
      </div>
    </div>
  );
}
