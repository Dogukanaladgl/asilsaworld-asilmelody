import { brand } from "@/lib/contact";

const sizeClasses = {
  sm: {
    wrap: "gap-0.5",
    line1: "text-[0.55rem] tracking-[0.18em] sm:text-[0.62rem] sm:tracking-[0.22em]",
    line2: "text-[0.68rem] tracking-[0.22em] sm:text-[0.78rem] sm:tracking-[0.28em]",
    mark: "text-[0.45em]",
  },
  md: {
    wrap: "gap-1",
    line1: "text-[0.68rem] tracking-[0.24em] sm:text-[0.75rem]",
    line2: "text-[0.88rem] tracking-[0.3em] sm:text-[0.95rem]",
    mark: "text-[0.5em]",
  },
  lg: {
    wrap: "gap-1.5",
    line1: "text-[clamp(0.95rem,0.7rem+1.2vw,1.35rem)] tracking-[0.28em]",
    line2: "text-[clamp(1.35rem,1rem+1.8vw,2rem)] tracking-[0.34em]",
    mark: "text-[0.45em]",
  },
} as const;

type BrandMarkProps = {
  className?: string;
  align?: "left" | "center";
  size?: keyof typeof sizeClasses;
  showMark?: boolean;
};

export default function BrandMark({
  className = "",
  align = "left",
  size = "md",
  showMark = true,
}: BrandMarkProps) {
  const s = sizeClasses[size];

  return (
    <span
      aria-label={brand.name}
      className={`inline-flex flex-col font-serif font-light uppercase leading-none text-current ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } ${s.wrap} ${className}`}
    >
      <span className={s.line1}>
        {brand.line1}
        {showMark && (
          <sup
            className={`ml-0.5 align-super font-sans font-normal normal-case tracking-normal ${s.mark}`}
            aria-hidden
          >
            ®
          </sup>
        )}
      </span>
      <span className={s.line2}>{brand.line2}</span>
    </span>
  );
}
