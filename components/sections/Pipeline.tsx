import Cta from "@/components/ui/Cta";
import { pipeline } from "@/content/copy";

export default function Pipeline() {
  return (
    <section
      id="proyecto-360"
      className="relative border-t border-hair bg-void py-24 md:py-36"
    >
      <div className="shell">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              {pipeline.eyebrow}
            </p>
            <h2 className="display mt-10 text-[clamp(2.1rem,5.4vw,5rem)]">
              <span className="block" data-reveal>
                {pipeline.title[0]}
              </span>
              <span
                className="block text-white/55"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {pipeline.title[1]}
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:col-start-8">
            {pipeline.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-lg text-[15px] leading-relaxed text-dim md:text-base"
                data-reveal
                style={{ "--reveal-delay": `${120 + i * 90}ms` } as React.CSSProperties}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Recorrido */}
        <div className="relative mt-20 md:mt-28">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand/70 via-white/15 to-transparent"
            data-reveal="line"
          />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {pipeline.steps.map((step, i) => (
              <li
                key={step.index}
                className="group relative border-b border-white/10 px-0 py-8 sm:border-r sm:px-5 sm:first:pl-0 xl:border-b-0 xl:px-4"
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-[11px] tracking-[0.2em] text-brand">
                    {step.index}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-[10px] text-white/25 transition-all duration-500 group-hover:translate-x-1 group-hover:text-brand"
                  >
                    ▸
                  </span>
                </div>

                <h3 className="display mt-6 hyphens-auto break-words text-[clamp(1.15rem,1.35vw,1.55rem)] transition-colors duration-500 group-hover:text-brand">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[22ch] text-[13px] leading-relaxed text-dimmer">
                  {step.note}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-6" data-reveal>
          <Cta size="lg" />
          <p className="max-w-xs text-[13px] leading-relaxed text-dimmer">
            Todo el recorrido dentro del mismo equipo.
          </p>
        </div>
      </div>
    </section>
  );
}
