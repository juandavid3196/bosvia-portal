import {
  BarChart3,
  CalendarDays,
  CircleCheck,
  ClipboardList,
  CreditCard,
  Home,
  Info,
  Settings,
  Tent,
  Users,
  type LucideIcon,
} from "lucide-react";
import { dashboardWeek, type Bloque, type PanelNavKey, type ReservaTipo } from "@/lib/content";

export const navIcons: Record<PanelNavKey, LucideIcon> = {
  home: Home,
  calendar: CalendarDays,
  bookings: ClipboardList,
  lodgings: Tent,
  guests: Users,
  operations: CircleCheck,
  payments: CreditCard,
  reports: BarChart3,
  settings: Settings,
};

export const tipoStyle: Record<ReservaTipo, { bg: string; fg: string; dot?: string }> = {
  reservada: { bg: "#2E7F74", fg: "#FFFFFF" },
  llegada: { bg: "#D3DECB", fg: "#103C34", dot: "#5E8A5C" },
  salida: { bg: "#EADFD1", fg: "#3F3428", dot: "#8A6A4A" },
  mantenimiento: { bg: "#CF6A45", fg: "#FFFFFF", dot: "#FFFFFF" },
};

/** Colores de la leyenda del calendario, en el mismo orden que `calendar.legend`. */
export const legendColors = {
  reserved: "#2E7F74",
  arrival: "#B9CBB0",
  departure: "#E3D6C4",
  maintenance: "#CF6A45",
};

export const DAYS = dashboardWeek.days.length;
export const FIRST_COL = 2; // la columna 1 es el nombre del alojamiento

/**
 * Calcula `grid-column` a partir de las fechas. Las estadías ocupan las noches
 * [inicio, fin); el mantenimiento incluye el día final. Se recorta a la semana visible.
 */
export function gridColumn({ inicio, fin, tipo, cols }: Bloque): string {
  if (cols) return `${cols[0]} / ${cols[1]}`;
  const lastDay = tipo === "mantenimiento" ? fin + 1 : fin;
  const start = Math.max(FIRST_COL, inicio - dashboardWeek.firstDay + FIRST_COL);
  const end = Math.min(FIRST_COL + DAYS, lastDay - dashboardWeek.firstDay + FIRST_COL);
  return `${start} / ${Math.max(end, start + 1)}`;
}

export function NavBtn({ children }: { children: React.ReactNode }) {
  return <span className="grid h-[22px] w-[22px] place-items-center rounded-[5px] border border-[#E4DFD3]">{children}</span>;
}

export function Kpi({
  icon: KpiIcon,
  bg,
  fg,
  title,
  info,
  children,
}: {
  icon: LucideIcon;
  bg: string;
  fg: string;
  title: string;
  info?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-[10px] rounded-lg border border-[#ECE8DE] bg-white p-3">
      <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full" style={{ background: bg, color: fg }}>
        <KpiIcon size={16} strokeWidth={1.8} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1 text-[10.5px] text-[#6B7178]">
          {title}
          {info && <Info size={9} strokeWidth={1.6} className="text-[#A5AAB0]" />}
        </div>
        {children}
      </div>
    </div>
  );
}

export function KpiValue({ value, sub }: { value: string; sub: string }) {
  return (
    <>
      <div className="mb-[3px] mt-[2px] font-serif text-[21px]">{value}</div>
      <div className="text-[9.5px] text-[#6B7178]">{sub}</div>
    </>
  );
}
