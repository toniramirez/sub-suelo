import Frame from "@/components/ui/Frame";
import { ArrowUpRight } from "@/components/ui/icons";
import { team } from "@/content/team";

export default function Team() {
  const founder = team.find((m) => m.featured) ?? team[0];
  const rest = team.filter((m) => m !== founder);

  return (
    <section id="equipo" className="relative border-t border-hair bg-void py-24 md:py-36">
      <div className="shell">
        <p className="eyebrow flex items-center gap-3 text-white/45" data-reveal>
          <span aria-hidden="true" className="h-px w-8 bg-brand" />
          Equipo
        </p>

        <h2 className="display mt-10 max-w-4xl text-[clamp(2.1rem,5.2vw,4.6rem)]">
          <span className="block" data-reveal>
            Detrás de cada proyecto
          </span>
          <span
            className="block text-white/55"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            hay un equipo.
          </span>
        </h2>

        {/* Fundador */}
        <div className="mt-20 grid grid-cols-1 items-end gap-x-14 gap-y-10 border-t border-hair pt-14 md:mt-28 lg:grid-cols-12">
          <div className="lg:col-span-5" data-reveal="mask">
            <Frame media={founder.media} index="01" sizes="(max-width: 1024px) 100vw, 40vw" />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-brand" data-reveal>
              {founder.role}
            </p>
            <h3
              className="display mt-6 text-[clamp(2.2rem,6vw,5rem)]"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              {founder.alias}
            </h3>
            {founder.realName ? (
              <p
                className="mt-4 text-[15px] text-dim"
                data-reveal
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                {founder.realName}
              </p>
            ) : null}
            <p
              className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-base"
              data-reveal
              style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
            >
              {founder.bio}
            </p>
            {founder.instagram ? (
              <a
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link eyebrow mt-8 inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand"
                data-reveal
              >
                Instagram
                <ArrowUpRight className="text-[1.2em] transition-transform duration-500 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Resto del equipo */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-14 border-t border-hair pt-14 sm:grid-cols-2 lg:grid-cols-4 md:mt-28">
          {rest.map((member, i) => (
            <article
              key={member.alias}
              className="group"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <Frame
                media={member.media}
                index={String(i + 2).padStart(2, "0")}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <h3 className="display mt-6 text-[clamp(1.3rem,2.2vw,1.9rem)] transition-colors duration-500 group-hover:text-brand">
                {member.alias}
              </h3>
              {member.realName ? (
                <p className="mt-2 text-[13px] text-dimmer">{member.realName}</p>
              ) : null}
              <p className="eyebrow mt-3 text-brand/80">{member.role}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-dim">{member.bio}</p>
              {member.instagram ? (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link eyebrow mt-4 inline-flex items-center gap-1.5 text-[10px] text-white/60 hover:text-brand"
                >
                  Instagram
                  <ArrowUpRight className="text-[1.2em] transition-transform duration-500 group-hover/link:translate-x-[2px] group-hover/link:-translate-y-[2px]" />
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
