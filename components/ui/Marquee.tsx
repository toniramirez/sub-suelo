import { Separator } from "@/components/ui/icons";

type Props = {
  items: readonly string[];
  duration?: number;
  reverse?: boolean;
  className?: string;
  /** Elemento que separa cada item. Por defecto, el doble chevron de marca. */
  separator?: React.ReactNode;
};

/** Cinta horizontal en movimiento continuo. CSS puro, sin JS. */
export default function Marquee({
  items,
  duration = 44,
  reverse = false,
  className = "",
  separator = <Separator className="text-[0.9em] text-brand" />,
}: Props) {
  const row = [...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="marquee-track"
        data-direction={reverse ? "reverse" : undefined}
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex shrink-0 items-center whitespace-nowrap">
            <span className="px-6">{item}</span>
            <span className="flex items-center text-brand">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
