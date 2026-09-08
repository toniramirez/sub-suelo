import Cta from "@/components/ui/Cta";
import Frame from "@/components/ui/Frame";
import Parallax from "@/components/ui/Parallax";
import { studio } from "@/content/copy";

export default function Studio() {
  return (
    <section id="estudio" className="relative border-t border-hair bg-ink py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              {studio.eyebrow}
            </p>
            <h2 className="display mt-10 text-[clamp(2.1rem,5.4vw,5rem)]">
              <span className="block" data-reveal>
                {studio.title[0]}
              </span>
              <span
                className="block text-white/55"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {studio.title[1]}
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-6 lg:col-span-5 lg:col-start-8">
            {studio.paragraphs.map((p, i) => (
              <p
                key={i}
                className="max-w-lg text-[15px] leading-relaxed text-dim md:text-base"
                data-reveal
                style={{ "--reveal-delay": `${120 + i * 90}ms` } as React.CSSProperties}
              >
                {p}
              </p>
            ))}
            <div data-reveal style={{ "--reveal-delay": "300ms" } as React.CSSProperties}>
              <Cta size="lg" />
            </div>
          </div>
        </div>

        {/* Mosaico del espacio */}
        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-8" data-reveal="mask">
            <Frame media={studio.media[0]} index="01" sizes="(max-width: 768px) 100vw, 60vw" />
          </div>
          <div className="md:col-span-4" data-reveal="mask" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            <Parallax speed={0.04}>
              <Frame media={studio.media[1]} index="02" sizes="(max-width: 768px) 100vw, 30vw" />
            </Parallax>
          </div>
          <div className="md:col-span-4" data-reveal="mask" style={{ "--reveal-delay": "60ms" } as React.CSSProperties}>
            <Frame media={studio.media[2]} index="03" sizes="(max-width: 768px) 100vw, 30vw" />
          </div>
          <div className="md:col-span-8" data-reveal="mask" style={{ "--reveal-delay": "160ms" } as React.CSSProperties}>
            <Frame
              media={{ ...studio.media[3], ratio: "16/9" }}
              index="04"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
