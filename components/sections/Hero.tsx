import Cta from "@/components/ui/Cta";
import Frame from "@/components/ui/Frame";
import Marquee from "@/components/ui/Marquee";
import Parallax from "@/components/ui/Parallax";
import { hero } from "@/content/copy";
import { CTA } from "@/content/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh flex-col justify-end pt-[96px]">
      {/* Luz baja dorada: eco del degradado del isotipo, casi imperceptible */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 78% 18%, rgba(255,201,28,0.10) 0%, rgba(255,201,28,0) 60%), radial-gradient(70% 50% at 10% 90%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
        }}
      />

      <div className="shell grid flex-1 grid-cols-1 items-end gap-x-10 gap-y-12 pb-14 lg:grid-cols-12 lg:pb-20">
        <div className="lg:col-span-7 xl:col-span-7">
          <p className="eyebrow flex items-center gap-3 text-white/55" data-reveal>
            <span aria-hidden="true" className="h-px w-8 bg-brand" />
            {hero.eyebrow}
          </p>

          <h1 className="display mt-7 text-[clamp(2.3rem,5.2vw,5rem)]">
            <span className="block overflow-hidden">
              <span className="block" data-reveal>
                {hero.title[0]}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block text-white/90"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {hero.title[1]}
              </span>
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-dim md:text-[17px]"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            {hero.subtext}
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4"
            data-reveal
            style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
          >
            <Cta size="lg" />
            <Cta label={CTA.secondary} href="#manifiesto" variant="ghost" size="lg" />
          </div>
        </div>

        <div className="relative lg:col-span-5 xl:col-span-5">
          <Parallax speed={0.06}>
            <Frame
              media={hero.media[0]}
              priority
              index="01"
              className="w-full max-h-[58vh] lg:max-h-[62vh]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Parallax>

          <div className="absolute -bottom-8 -left-16 hidden w-[34%] xl:block">
            <Parallax speed={-0.05}>
              <Frame media={hero.media[1]} index="02" caption={false} sizes="20vw" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="border-t border-hair py-5">
        <Marquee items={hero.ticker} duration={52} className="eyebrow text-white/45" />
      </div>
    </section>
  );
}
