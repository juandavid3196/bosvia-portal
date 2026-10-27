import type { ReactNode } from "react";
import { Arrow } from "@/components/ui/Icons";

type Variant = "primary" | "outline" | "ivory" | "ghost-light" | "text";

const base =
  "group inline-flex items-center gap-[14px] text-[15px] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px]";

const variants: Record<Variant, string> = {
  primary:
    "rounded-md bg-terracotta px-[26px] py-4 font-medium text-white shadow-[0_10px_24px_-12px_rgba(182,83,48,0.8)] hover:-translate-y-px hover:bg-terracotta-hover focus-visible:outline-ink max-[1079px]:px-6 max-[1079px]:py-[15px]",
  outline:
    "rounded-lg border-[1.5px] border-ink bg-ivory/90 px-5 py-[11px] text-[14px] font-medium text-ink hover:bg-ink hover:text-ivory focus-visible:outline-terracotta whitespace-nowrap",
  ivory:
    "rounded-md bg-ivory px-[26px] py-[14px] font-medium text-forest hover:bg-sage focus-visible:outline-ivory",
  "ghost-light":
    "rounded-md border-[1.5px] border-ivory/85 px-[26px] py-[14px] font-medium text-ivory hover:bg-ivory/[0.12] focus-visible:outline-ivory",
  text: "gap-[10px] text-ink underline decoration-1 underline-offset-[5px] hover:text-terracotta focus-visible:outline-terracotta",
};

interface ButtonProps {
  href: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function Button({ href, variant = "primary", arrow = false, className = "", children }: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {arrow && (
        <span className="transition-transform duration-200 group-hover:translate-x-1">
          <Arrow size={variant === "primary" ? 17 : 16} />
        </span>
      )}
    </a>
  );
}
