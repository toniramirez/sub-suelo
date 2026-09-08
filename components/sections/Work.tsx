import Frame from "@/components/ui/Frame";
import { statements } from "@/content/copy";
import { works } from "@/content/work";

export default function Work() {
  return (
    <section id="trabajos" className="relative border-t border-hair bg-void py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Selected work
            </p>
            <h2 className="display mt-8 text-[clamp(2.2rem,6vw,5.5rem)]" data-reveal>
              Últimos trabajos
            </h2>
          </div>
          <p
            className="max-w-xs pb-3 font-display text-[15px] uppercase leading-snug text-white/70 md:text-[17px]"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            {statements.work}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work, i) => (
            <article
              key={`${work.artist}-${i}`}
              className="group"
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
            >
              <div className="relative">
                <Frame
                  media={work.media}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="brand-gradient bevel-sm px-5 py-2 eyebrow text-[10px] text-black">
                    {work.spotify || work.youtube ? "Escuchar" : "Próximamente"}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-start justify-between gap-4 border-t border-hair pt-4">
                <div>
                  <h3 className="font-display text-[17px] font-bold uppercase leading-tight tracking-[-0.01em] transition-colors duration-500 group-hover:text-brand">
                    {work.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-dim">{work.artist}</p>
                </div>
                <span className="eyebrow text-[10px] text-dimmer">{work.year}</span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {work.roles.map((role) => (
                  <li
                    key={role}
                    className="border border-white/15 px-3 py-1.5 eyebrow text-[9px] text-white/55 transition-colors duration-500 group-hover:border-brand/40 group-hover:text-brand/90"
                  >
                    {role}
                  </li>
                ))}
              </ul>

              {(work.spotify || work.youtube) && (
                <div className="mt-4 flex gap-5">
                  {work.spotify ? (
                    <a
                      href={work.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow text-[10px] text-white/70 hover:text-brand"
                    >
                      Spotify ↗
                    </a>
                  ) : null}
                  {work.youtube ? (
                    <a
                      href={work.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="eyebrow text-[10px] text-white/70 hover:text-brand"
                    >
                      YouTube ↗
                    </a>
                  ) : null}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
