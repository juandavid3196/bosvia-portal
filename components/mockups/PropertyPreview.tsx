/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import { Logo } from "@/components/ui/Logo";
import { personalization } from "@/lib/content";

interface PropertyPreviewProps {
  variant: "niebla" | "roble";
  className?: string;
  style?: CSSProperties;
}

const theme = {
  niebla: {
    navBg: "#103C34",
    accent: "#103C34",
    amenityColor: "#4A5058",
    heroImg: "/assets/p-domo.png",
    heroPos: "center 60%",
    heroHeight: 180,
    overlay: "linear-gradient(90deg, rgba(9,37,36,0.7), rgba(9,37,36,0) 70%)",
    titleSize: 30,
    textLeft: 22,
    textTop: 50,
  },
  roble: {
    navBg: "#8E4A2C",
    accent: "#8E4A2C",
    amenityColor: "#6B5A4E",
    heroImg: "/assets/p-cabana.png",
    heroPos: "center",
    heroHeight: 170,
    overlay: "linear-gradient(90deg, rgba(60,28,12,0.6), rgba(60,28,12,0) 65%)",
    titleSize: 28,
    textLeft: 20,
    textTop: 52,
  },
} as const;

/** Sitio de alojamiento en miniatura; solo cambia la identidad visual. */
export function PropertyPreview({ variant, className = "", style }: PropertyPreviewProps) {
  const t = theme[variant];
  const site = personalization.sites[variant];
  const nav = personalization.sites.nav;

  return (
    <div className={`absolute overflow-hidden rounded-lg bg-surface ${className}`} style={style}>
      <div className="flex items-center justify-between px-4 py-[10px] text-[8px] text-white" style={{ background: t.navBg }}>
        {variant === "niebla" ? (
          <Logo variant="dark" className="h-[22px]" alt="" />
        ) : (
          <span className="font-serif text-[13px]">{site.name}</span>
        )}
        <span className="flex gap-3">
          {nav.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </span>
        <span className="rounded-[3px] bg-white px-[10px] py-[5px] font-semibold" style={{ color: t.accent }}>
          Reservar
        </span>
      </div>
      <div className="relative" style={{ height: t.heroHeight }}>
        <img src={t.heroImg} alt="" className="h-full w-full object-cover" style={{ objectPosition: t.heroPos }} />
        <div className="absolute inset-0" style={{ background: t.overlay }} />
        <div className="absolute text-white" style={{ left: t.textLeft, top: t.textTop }}>
          <div className="font-serif" style={{ fontSize: t.titleSize }}>{site.name}</div>
          <div className="mt-1 text-[10px] leading-[1.4]">
            {site.lines[0]}
            <br />
            {site.lines[1]}
          </div>
          <div
            className="mt-[10px] inline-block rounded-[3px] bg-white px-3 py-[6px] text-[8.5px] font-medium"
            style={{ color: t.accent }}
          >
            {personalization.sites.cta}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 px-[10px] py-[14px] text-center text-[8px]" style={{ color: t.amenityColor }}>
        {site.amenities.map((a) => (
          <span key={a}>{a}</span>
        ))}
      </div>
    </div>
  );
}
