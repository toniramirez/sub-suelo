import { manifesto, statements } from "@/content/copy";

export default function Manifesto() {
  return (
    <section id="manifiesto" className="relative border-t border-hair bg-ink py-24 md:py-36">
      <div className="shell">
        <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
          <span aria-hidden="true" className="h-px w-8 bg-brand" />
          {manifesto.eyebrow}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.1rem,5.4vw,5rem)] lg:col-span-7">
            <span className="block" data-reveal>
              {manifesto.title[0]}
            </span>
            <span
              className="block brand-text-gradient"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {manifesto.title[1]}
            </span>
          </h2>

          <div className="flex flex-col gap-6 lg:col-span-5 lg:pt-3">
            {manifesto.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-lg text-[15px] leading-relaxed text-dim md:text-base"
                data-reveal
                style={{ "--reveal-delay": `${140 + i * 90}ms` } as React.CSSProperties}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Cuatro pilares */}
        <div className="mt-20 grid grid-cols-2 border-t border-hair md:mt-28 lg:grid-cols-4">
          {manifesto.pillars.map((pillar, i) => (
            <div
              key={pillar.word}
              className="group border-b border-r border-hair px-5 py-10 last:border-r-0 md:px-7 md:py-14 lg:border-b-0"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <span className="eyebrow text-brand">{pillar.index}</span>
              <p className="display mt-6 text-[clamp(1.5rem,3.4vw,2.6rem)] transition-colors duration-500 group-hover:text-brand">
                {pillar.word}.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Frase editorial en movimiento */}
      <div className="mt-20 overflow-hidden border-y border-hair py-6 md:mt-28">
        <Statement />
      </div>
    </section>
  );
}

function Statement() {
  const items = Array.from({ length: 4 }, () => statements.services);
  return (
    <div className="marquee-track display text-[clamp(1.8rem,4.6vw,3.6rem)] text-white/12" style={{ "--marquee-duration": "60s" } as React.CSSProperties} aria-hidden="true">
      {[...items, ...items].map((text, i) => (
        <span key={i} className="flex shrink-0 items-center whitespace-nowrap">
          <span className="px-8">{text}</span>
          <span className="text-brand/50">◆</span>
        </span>
      ))}
    </div>
  );
}
