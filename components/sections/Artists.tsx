import Frame from "@/components/ui/Frame";
import { ArrowUpRight } from "@/components/ui/icons";
import { artists } from "@/content/artists";

export default function Artists() {
  return (
    <section id="artistas" className="relative border-t border-hair bg-ink py-24 md:py-36">
      <div className="shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Roster
            </p>
            <h2 className="display mt-8 text-[clamp(3rem,11vw,10rem)]" data-reveal>
              Artistas
            </h2>
          </div>
          <p
            className="max-w-sm pb-3 text-[15px] leading-relaxed text-dim"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          >
            Proyectos desarrollados dentro de Subsuelo: sonido, imagen y lanzamiento bajo la misma
            dirección.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:mt-24 md:grid-cols-2">
          {artists.map((artist, i) => (
            <article
              key={artist.slug}
              className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 100}ms` } as React.CSSProperties}
            >
              <div className="relative">
                <Frame
                  media={artist.media}
                  index={String(i + 1).padStart(2, "0")}
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
                <span className="pointer-events-none absolute right-4 top-4 eyebrow text-[10px] text-brand opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {artist.genre}
                </span>
              </div>

              <div className="mt-7 flex items-start justify-between gap-6 border-t border-hair pt-6">
                <div>
                  <h3 className="display text-[clamp(1.8rem,4vw,3.2rem)] transition-colors duration-500 group-hover:text-brand">
                    {artist.name}
                  </h3>
                  <p className="eyebrow mt-3 text-brand/80">{artist.genre}</p>
                  <p className="mt-5 max-w-md text-[14px] leading-relaxed text-dim">{artist.line}</p>
                </div>
              </div>

              <ul className="mt-7 flex flex-col">
                {artist.releases.map((release, k) => (
                  <li
                    key={`${release.title}-${k}`}
                    className="flex items-center justify-between gap-4 border-b border-white/10 py-3 text-[13px]"
                  >
                    <span className="text-white/70">{release.title}</span>
                    <span className="eyebrow text-[10px] text-dimmer">{release.year}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {artist.spotify ? (
                  <ListenLink href={artist.spotify} label="Escuchar" />
                ) : (
                  <span className="eyebrow text-[10px] text-white/20">Escuchar — próximamente</span>
                )}
                {artist.youtube ? <ListenLink href={artist.youtube} label="Ver videos" /> : null}
                {artist.instagram ? <ListenLink href={artist.instagram} label="Instagram" /> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ListenLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link eyebrow inline-flex items-center gap-2 text-[10px] text-white/70 transition-colors hover:text-brand"
    >
      {label}
      <ArrowUpRight className="text-[1.2em] transition-transform duration-500 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
    </a>
  );
}
