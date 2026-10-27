/* eslint-disable @next/next/no-img-element */
import {
  BarChart3,
  Bed,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleCheck,
  ClipboardList,
  CreditCard,
  DollarSign,
  Home,
  LogIn,
  LogOut,
  Plus,
  Settings,
  Tent,
  TreePine,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { Logo } from "@/components/ui/Logo";
import {
  dashboardBlocks,
  dashboardKpis,
  dashboardNav,
  dashboardProperties,
  dashboardWeek,
  type Bloque,
  type ReservaTipo,
} from "@/lib/content";

const navIcons: Record<(typeof dashboardNav)[number], LucideIcon> = {
  Inicio: Home,
  Calendario: CalendarDays,
  Reservas: ClipboardList,
  Alojamientos: Tent,
  Huéspedes: Users,
  Operación: CircleCheck,
  Pagos: CreditCard,
  Reportes: BarChart3,
  Ajustes: Settings,
};

const tipoStyle: Record<ReservaTipo, { bg: string; fg: string; dot?: string }> = {
  reservada: { bg: "#2E7F74", fg: "#FFFFFF" },
  llegada: { bg: "#D3DECB", fg: "#103C34", dot: "#5E8A5C" },
  salida: { bg: "#EADFD1", fg: "#3F3428", dot: "#8A6A4A" },
  mantenimiento: { bg: "#CF6A45", fg: "#FFFFFF", dot: "#FFFFFF" },
};

const legend: { label: string; color: string }[] = [
  { label: "Reservada", color: "#2E7F74" },
  { label: "Llegada", color: "#B9CBB0" },
  { label: "Salida", color: "#E3D6C4" },
  { label: "Mantenimiento", color: "#CF6A45" },
];

const DAYS = dashboardWeek.days.length;
const FIRST_COL = 2; // la columna 1 es el nombre del alojamiento

/**
 * Calcula `grid-column` a partir de las fechas. Las estadías ocupan las noches
 * [inicio, fin); el mantenimiento incluye el día final. Se recorta a la semana visible.
 */
function gridColumn({ inicio, fin, tipo }: Bloque): string {
  const lastDay = tipo === "mantenimiento" ? fin + 1 : fin;
  const start = Math.max(FIRST_COL, inicio - dashboardWeek.firstDay + FIRST_COL);
  const end = Math.min(FIRST_COL + DAYS, lastDay - dashboardWeek.firstDay + FIRST_COL);
  return `${start} / ${Math.max(end, start + 1)}`;
}

function rangeLabel({ inicio, fin }: Bloque) {
  return `${inicio} – ${fin} oct`;
}

interface DashboardProps {
  label?: string;
  minScale?: number;
}

export function Dashboard({ label = "Diseño conceptual", minScale = 0 }: DashboardProps) {
  return (
    <FitCanvas
      baseWidth={1000}
      min={minScale}
      label="Vista conceptual del panel de Bosvia: calendario semanal de reservas de Bosque Alto"
      className="flex overflow-hidden rounded-xl border border-[#E4DFD3] bg-surface font-sans text-ink shadow-[0_30px_60px_-20px_rgba(9,37,36,0.35),0_8px_20px_-8px_rgba(9,37,36,0.18)]"
    >
      <aside className="flex w-[172px] shrink-0 flex-col gap-[22px] bg-forest px-3 py-[22px]">
        <Logo variant="dark" className="ml-1 h-[34px] self-start" />
        <nav className="flex flex-col gap-1 text-[12.5px] text-[#DCE5DD]">
          {dashboardNav.map((item, i) => {
            const NavIcon = navIcons[item];
            return (
              <div
                key={item}
                className={`flex items-center gap-[10px] rounded-md px-[10px] py-[9px] ${i === 0 ? "bg-white/10 text-white" : ""}`}
              >
                <NavIcon size={15} strokeWidth={1.8} />
                {item}
              </div>
            );
          })}
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col gap-4 px-[22px] pb-[18px] pt-4">
        <div className="flex items-center justify-between border-b border-[#ECE8DE] pb-[14px]">
          <div className="flex items-center gap-[10px]">
            <div className="grid h-[34px] w-[34px] place-items-center rounded-lg border border-[#E4DFD3] bg-white">
              <div className="grid h-6 w-6 place-items-center rounded-full bg-[#2E7F74] text-white">
                <TreePine size={13} strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col leading-[1.2]">
              <span className="flex items-center gap-1 text-[13px] font-medium">
                Bosque Alto <ChevronDown size={12} strokeWidth={2} />
              </span>
              <span className="text-[10px] text-[#8A8F96]">Propiedad</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#4A5058]">
            <span className="flex items-center gap-[6px]">
              <CalendarDays size={13} strokeWidth={1.8} />
              Sábado, 3 octubre 2026
            </span>
            <span className="h-[22px] w-px bg-[#E4DFD3]" />
            <span className="flex items-center gap-2">
              <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-sage text-[10px] font-semibold text-forest">
                LJ
              </span>
              Laura <ChevronDown size={12} strokeWidth={2} />
            </span>
            <span className="flex items-center gap-[6px] rounded-md bg-forest px-3 py-2 font-medium text-white">
              <Plus size={12} strokeWidth={2.2} />
              Nueva reserva
            </span>
          </div>
        </div>

        <div>
          <div className="font-serif text-[27px] leading-[1.1]">Buen día, Laura</div>
          <div className="mt-[3px] text-[11.5px] text-[#6B7178]">Así va la operación de Bosque Alto hoy.</div>
        </div>

        <div className="grid grid-cols-4 gap-[10px]">
          <Kpi icon={Bed} bg="#9DB59C" fg="#FFFFFF" title="Ocupación">
            <div className="mb-[6px] mt-[2px] font-serif text-[21px]">{dashboardKpis.occupancy.value}</div>
            <div className="flex items-center gap-[6px]">
              <div className="h-[5px] flex-1 rounded-[3px] bg-[#E7E5DC]">
                <div className="h-full rounded-[3px] bg-[#2E7F74]" style={{ width: `${dashboardKpis.occupancy.pct}%` }} />
              </div>
              <span className="text-[9.5px] text-[#6B7178]">{dashboardKpis.occupancy.pct}%</span>
            </div>
          </Kpi>
          <Kpi icon={LogIn} bg="#D9DFCD" fg="#103C34" title="Llegadas">
            <KpiValue value={dashboardKpis.arrivals.value} sub={dashboardKpis.arrivals.sub} />
          </Kpi>
          <Kpi icon={LogOut} bg="#D7704C" fg="#FFFFFF" title="Salidas">
            <KpiValue value={dashboardKpis.departures.value} sub={dashboardKpis.departures.sub} />
          </Kpi>
          <Kpi icon={DollarSign} bg="#D9DFCD" fg="#103C34" title="Por cobrar">
            <KpiValue value={dashboardKpis.pending.value} sub={dashboardKpis.pending.sub} />
          </Kpi>
        </div>

        <div className="overflow-hidden rounded-lg border border-[#ECE8DE] bg-white">
          <div className="flex items-center justify-between px-[14px] py-3">
            <div className="font-serif text-[16px]">Disponibilidad y reservas</div>
            <div className="flex items-center gap-[14px] text-[9.5px] text-[#4A5058]">
              {legend.map((l) => (
                <span key={l.label} className="flex items-center gap-[5px]">
                  <span className="h-[9px] w-[9px] rounded-full" style={{ background: l.color }} />
                  {l.label}
                </span>
              ))}
              <span className="ml-2 flex items-center gap-2">
                <NavBtn><ChevronLeft size={10} strokeWidth={2.4} /></NavBtn>
                {dashboardWeek.label}
                <NavBtn><ChevronRight size={10} strokeWidth={2.4} /></NavBtn>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-[170px_repeat(7,1fr)] border-y border-[#ECE8DE] bg-[#F6F4EE] text-[9.5px] text-[#4A5058]">
            <div className="self-center px-3 py-2 font-medium text-ink">Alojamiento</div>
            {dashboardWeek.days.map((d) => (
              <div key={d.n} className="border-l border-[#ECE8DE] py-[6px] text-center leading-[1.3]">
                <b className="font-medium text-ink">{d.name} {d.n}</b>
                <br />
                oct
              </div>
            ))}
          </div>

          {dashboardProperties.map((p) => (
            <div
              key={p.name}
              className="relative grid grid-cols-[170px_repeat(7,1fr)] grid-rows-[48px] border-b border-[#F0EDE5]"
            >
              <div className="flex items-center gap-[9px] px-3" style={{ gridColumn: 1, gridRow: 1 }}>
                <img src={p.img} alt="" className="h-8 w-10 rounded-[5px] object-cover" />
                <div className="leading-[1.35]">
                  <div className="text-[10.5px] font-medium">{p.name}</div>
                  <div className="text-[9px] text-[#8A8F96]">{p.cap}</div>
                </div>
              </div>
              {Array.from({ length: DAYS }, (_, i) => (
                <div
                  key={i}
                  className="grid place-items-center border-l border-[#F0EDE5] text-[10px] text-[#C9C5BB]"
                  style={{ gridRow: 1, gridColumn: FIRST_COL + i }}
                >
                  —
                </div>
              ))}
              {dashboardBlocks
                .filter((b) => b.alojamiento === p.name)
                .map((b) => {
                  const s = tipoStyle[b.tipo];
                  return (
                    <div
                      key={`${b.huesped}-${b.inicio}`}
                      className="z-[1] mx-[3px] my-[6px] flex items-center justify-center gap-[7px] rounded-[5px] text-center text-[9.5px] leading-[1.3]"
                      style={{ gridRow: 1, gridColumn: gridColumn(b), background: s.bg, color: s.fg }}
                    >
                      {s.dot && <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: s.dot }} />}
                      <div>
                        <div className="font-medium">{b.huesped}</div>
                        <div className="opacity-85">{rangeLabel(b)}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}

          <div className="flex justify-end px-3 py-[10px]">
            <span className="rounded-[5px] border border-[#E4DFD3] bg-[#F1EEE6] px-3 py-[5px] text-[10.5px] text-[#4A5058]">
              {label}
            </span>
          </div>
        </div>
      </div>
    </FitCanvas>
  );
}

function NavBtn({ children }: { children: React.ReactNode }) {
  return <span className="grid h-[22px] w-[22px] place-items-center rounded-[5px] border border-[#E4DFD3]">{children}</span>;
}

function Kpi({
  icon: KpiIcon,
  bg,
  fg,
  title,
  children,
}: {
  icon: LucideIcon;
  bg: string;
  fg: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-[10px] rounded-lg border border-[#ECE8DE] bg-white p-3">
      <div className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full" style={{ background: bg, color: fg }}>
        <KpiIcon size={16} strokeWidth={1.8} />
      </div>
      <div className="flex-1">
        <div className="text-[10.5px] text-[#6B7178]">{title}</div>
        {children}
      </div>
    </div>
  );
}

function KpiValue({ value, sub }: { value: string; sub: string }) {
  return (
    <>
      <div className="mb-[3px] mt-[2px] font-serif text-[21px]">{value}</div>
      <div className="text-[9.5px] text-[#6B7178]">{sub}</div>
    </>
  );
}
