import Link from "next/link";
import { ArrowUpRight } from "@/components/ui/icons";
import { CTA } from "@/content/site";

type Props = {
  label?: string;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 px-5 text-[11px]",
  md: "h-12 px-7 text-[12px]",
  lg: "h-14 px-9 text-[13px]",
};

/** CTA universal del sitio. Por defecto lleva al formulario. */
export default function Cta({
  label = CTA.primary,
  href = "#contacto",
  variant = "solid",
  className = "",
  size = "md",
}: Props) {
  const base = `group relative inline-flex items-center justify-center gap-3 overflow-hidden eyebrow transition-all duration-500 ${sizes[size]}`;

  const styles =
    variant === "solid"
      ? "brand-gradient bevel-sm text-black hover:brightness-110"
      : "border border-white/25 text-white hover:border-brand hover:text-brand";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{label}</span>
      <ArrowUpRight className="text-[1.15em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
    </Link>
  );
}
