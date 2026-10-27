/* eslint-disable @next/next/no-img-element */
import { Armchair, Bed, Leaf, Mountain, Utensils, Wifi, type LucideIcon } from "lucide-react";
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

const amenityIcons: Record<string, LucideIcon> = {
  leaf: Leaf,
  bed: Bed,
  mountain: Mountain,
  utensils: Utensils,
  armchair: Armchair,
  wifi: Wifi,
};

/** Sitio de alojamiento en miniatura; solo cambia la identidad visual. */
export function PropertyPreview({ variant, className = "", style }: PropertyPreviewProps) {
  const t = theme[variant];
  const site = personalization.sites[variant];
  const nav = personalization.sites.nav;

  return (
    <div className={`absolute rotate-[var(--r)] overflow-hidden rounded-lg bg-surface transition-transform duration-500 ease-reveal hover:z-10 hover:-translate-y-2 hover:rotate-0 ${className}`} style={style}>
      <div className="flex items-center justify-between px-4 py-[10px] text-[8px] text-white" style={{ background: t.navBg }}>
        <Logo variant="dark" className="h-[22px]" alt="" />
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
      <div className="grid grid-cols-4 px-[10px] py-[12px] text-center text-[8px]" style={{ color: t.amenityColor }}>
        {site.amenities.map((a, i) => {
          const AIcon = amenityIcons[site.icons[i]];
          return (
            <span key={a} className="flex flex-col items-center gap-[5px]">
              <AIcon size={13} strokeWidth={1.4} />
              {a}
            </span>
          );
        })}
      </div>
    </div>
  );
}
