import Cta from "@/components/ui/Cta";
import Frame from "@/components/ui/Frame";
import { services, servicesIntro } from "@/content/services";

export default function Services() {
  return (
    <section id="servicios" className="relative bg-ink">
      <div className="shell pb-4 pt-24 md:pt-36">
        <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
          <span aria-hidden="true" className="h-px w-8 bg-brand" />
          {servicesIntro.eyebrow}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 lg:grid-cols-12">
          <h2 className="display text-[clamp(2.1rem,5.4vw,5rem)] lg:col-span-7">
            <span className="block" data-reveal>
              {servicesIntro.title[0]}
            </span>
            <span
              className="block text-white/55"
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {servicesIntro.title[1]}
            </span>
          </h2>
          <p
            className="max-w-md self-end text-[15px] leading-relaxed text-dim lg:col-span-5 md:text-base"
            data-reveal
            style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          >
            {servicesIntro.text}
          </p>
        </div>
      </div>

      <div className="mt-16 md:mt-24">
        {services.map((service, i) => {
          const flipped = i % 2 === 1;
          return (
            <article
              key={service.id}
              id={service.id}
              className="border-t border-hair py-16 md:py-24"
            >
              <div className="shell grid grid-cols-1 items-center gap-x-14 gap-y-10 lg:grid-cols-12">
                <div
                  className={`lg:col-span-5 ${flipped ? "lg:order-2 lg:col-start-8" : ""}`}
                  data-reveal="mask"
                >
                  <Frame
                    media={service.media}
                    index={service.index}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>

                <div className={`lg:col-span-6 ${flipped ? "lg:order-1 lg:col-start-1" : "lg:col-start-7"}`}>
                  <div className="flex items-baseline gap-4" data-reveal>
                    <span className="font-display text-[12px] tracking-[0.2em] text-brand">
                      {service.index}
                    </span>
                    <span className="h-px flex-1 bg-white/12" />
                  </div>

                  <h3
                    className="display mt-6 text-[clamp(1.9rem,4.2vw,3.6rem)]"
                    data-reveal
                    style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/80 md:text-[18px]"
                    data-reveal
                    style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
                  >
                    {service.lede}
                  </p>

                  {service.body?.map((paragraph, k) => (
                    <p
                      key={k}
                      className="mt-4 max-w-xl text-[15px] leading-relaxed text-dim"
                      data-reveal
                      style={{ "--reveal-delay": `${180 + k * 70}ms` } as React.CSSProperties}
                    >
                      {paragraph}
                    </p>
                  ))}

                  <ul
                    className="mt-10 grid grid-cols-1 gap-x-10 border-t border-hair sm:grid-cols-2"
                    data-reveal
                    style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
                  >
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 border-b border-hair py-3 text-[13px] text-white/70"
                      >
                        <span aria-hidden="true" className="text-[9px] text-brand">
                          ▸
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {service.note ? (
                    <p
                      className="mt-8 max-w-lg border-l-2 border-brand pl-5 font-display text-[15px] uppercase leading-snug tracking-[-0.01em] text-white md:text-[17px]"
                      data-reveal
                    >
                      {service.note}
                    </p>
                  ) : null}

                  {service.cta ? (
                    <div className="mt-9" data-reveal>
                      <Cta label={service.cta} variant="ghost" />
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
