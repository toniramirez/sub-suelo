import ContactForm from "@/components/sections/ContactForm";
import { contact } from "@/content/copy";
import { site, whatsappLink } from "@/content/site";

export default function Contact() {
  return (
    <section id="contacto" className="relative border-t border-hair bg-void py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              {contact.eyebrow}
            </p>

            <h2 className="display mt-10 text-[clamp(2.4rem,6.4vw,5.4rem)]" data-reveal>
              {contact.title}
            </h2>

            <p
              className="mt-8 max-w-md text-[15px] leading-relaxed text-dim md:text-base"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {contact.subtext}
            </p>

            <div
              className="mt-12 flex flex-col gap-3 border-t border-hair pt-8"
              data-reveal
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              <p className="eyebrow text-white/35">También podés escribirnos</p>
              <div className="mt-3 flex flex-col gap-4">
                {whatsappLink ? (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b border-hair pb-4 font-display text-[18px] uppercase tracking-[-0.01em] transition-colors hover:text-brand"
                  >
                    WhatsApp
                    <span className="text-[12px] transition-transform duration-500 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="flex items-center justify-between border-b border-hair pb-4 font-display text-[18px] uppercase tracking-[-0.01em] text-white/30">
                    WhatsApp
                    <span className="eyebrow text-[9px]">Próximamente</span>
                  </span>
                )}

                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-hair pb-4 font-display text-[18px] uppercase tracking-[-0.01em] transition-colors hover:text-brand"
                >
                  Instagram
                  <span className="eyebrow text-[10px] text-dimmer transition-colors group-hover:text-brand">
                    {site.instagramHandle}
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div
            className="lg:col-span-6 lg:col-start-7"
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
