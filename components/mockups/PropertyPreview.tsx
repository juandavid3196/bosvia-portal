import Image from "next/image";
import type { CSSProperties } from "react";
import { personalizationSites } from "@/lib/content";

interface PropertyPreviewProps {
  variant: "niebla" | "roble";
  /** En flujo normal (móvil) en lugar de posicionado dentro de un lienzo. */
  flow?: boolean;
  className?: string;
  style?: CSSProperties;
}

/** Captura del sitio de un alojamiento; cada uno con su propia identidad visual. */
export function PropertyPreview({ variant, flow = false, className = "", style }: PropertyPreviewProps) {
  const site = personalizationSites[variant];

  return (
    <div
      className={`${flow ? "relative" : "absolute"} overflow-hidden rounded-lg bg-surface transition-transform duration-500 ease-reveal [transform:perspective(1400px)_rotateY(var(--ry))] hover:z-10 hover:[transform:perspective(1400px)_rotateY(0deg)_translateY(-8px)] ${className}`}
      style={style}
    >
      <Image src={site.img} alt="" width={site.width} height={site.height} sizes="420px" className="block h-auto w-full" />
    </div>
  );
}
