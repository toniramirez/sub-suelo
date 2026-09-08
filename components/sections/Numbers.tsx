import Counter from "@/components/ui/Counter";
import { stats } from "@/content/stats";

export default function Numbers() {
  return (
    <section className="relative border-t border-hair bg-ink py-20 md:py-28">
      <div className="shell">
        <p className="eyebrow text-white/35" data-reveal>
          Subsuelo en números
        </p>

        <div className="mt-12 grid grid-cols-2 gap-y-12 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-l border-hair pl-5 md:pl-7"
              data-reveal
              style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            >
              <p className="display text-[clamp(2.4rem,6vw,4.6rem)] leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="eyebrow mt-4 text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
