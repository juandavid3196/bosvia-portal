/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  Bed,
  Brush,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  LogIn,
  LogOut,
  Plus,
  TreePine,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { PanelSidebar } from "@/components/mockups/PanelSidebar";
import {
  DAYS,
  FIRST_COL,
  Kpi,
  KpiValue,
  NavBtn,
  gridColumn,
  legend,
  rangeLabel,
  tipoStyle,
} from "@/components/mockups/Dashboard";
import {
  dashboardBlocks,
  dashboardKpis,
  dashboardProperties,
  dashboardWeek,
} from "@/lib/content";
import { directSales, priorities, recentBookings, type EstadoReserva, type PriorityKind } from "@/lib/panel";

const priorityStyle: Record<PriorityKind, { icon: LucideIcon; bg: string; fg: string }> = {
  checkin: { icon: LogIn, bg: "#E3E6DA", fg: "#103C34" },
  checkout: { icon: LogOut, bg: "#EADFD1", fg: "#6B4E36" },
  limpieza: { icon: Brush, bg: "#DDE8E6", fg: "#2E6F7F" },
  pago: { icon: DollarSign, bg: "#D7704C", fg: "#FFFFFF" },
};

const estadoStyle: Record<EstadoReserva, { bg: string; fg: string }> = {
  Confirmada: { bg: "#E3E6DA", fg: "#3F5A4A" },
  "Por cobrar": { bg: "#F3D9CE", fg: "#B65330" },
  "En curso": { bg: "#D9ECF1", fg: "#2E6F7F" },
  Completada: { bg: "#E8E6DE", fg: "#4A5058" },
};

const salesTicks = ["$4M", "$3M", "$2M", "$1M", "$0"];
const tableHeads = ["Fecha", "Huésped", "Alojamiento", "Fechas", "Fuente", "Estado", "Total", ""];

interface OperationalPanelProps {
  minScale?: number;
}

/** Panel operativo de Bosque Alto (diseño conceptual del hero). Lienzo de 1000px. */
export function OperationalPanel({ minScale = 0 }: OperationalPanelProps) {
  return (
    <FitCanvas
      baseWidth={1000}
      min={minScale}
      label="Vista conceptual del panel operativo de Bosque Alto: indicadores del día, calendario de reservas, prioridades, reservas recientes y ventas directas"
      className="flex overflow-hidden rounded-xl border border-[#E4DFD3] bg-surface font-sans text-ink shadow-[0_30px_60px_-20px_rgba(9,37,36,0.35),0_8px_20px_-8px_rgba(9,37,36,0.18)]"
    >
      <PanelSidebar />

      <div className="flex min-w-0 flex-1 flex-col gap-[10px] px-[14px] pb-3 pt-2">
        <div className="flex items-center justify-between border-b border-[#ECE8DE] pb-2">
          <div className="flex items-center gap-2">
            <div className="grid h-[30px] w-[30px] place-items-center rounded-md border border-[#E4DFD3] bg-white">
              <div className="grid h-[22px] w-[22px] place-items-center rounded-full bg-[#2E7F74] text-white">
                <TreePine size={12} strokeWidth={2} />
              </div>
            </div>
            <div className="flex flex-col leading-[1.15]">
              <span className="flex items-center gap-1 text-[12px] font-medium">
                Bosque Alto <ChevronDown size={11} strokeWidth={2} />
              </span>
              <span className="text-[9px] text-[#8A8F96]">Propiedad</span>
            </div>
          </div>
          <div className="flex items-center gap-[14px] text-[10px] text-[#4A5058]">
            <span className="flex items-center gap-[6px]">
              <CalendarDays size={12} strokeWidth={1.8} />
              Sábado, 3 octubre 2026
            </span>
            <span className="h-5 w-px bg-[#E4DFD3]" />
            <span className="flex items-center gap-[6px]">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-sage text-[9px] font-semibold text-forest">LJ</span>
              Laura <ChevronDown size={11} strokeWidth={2} />
            </span>
            <span className="flex items-center gap-[6px] rounded-md bg-forest px-3 py-2 text-[10.5px] font-medium text-white">
              <Plus size={12} strokeWidth={2.2} />
              Nueva reserva
            </span>
          </div>
        </div>

        <div>
          <div className="font-serif text-[29px] leading-[1.05]">Buen día, Laura</div>
          <div className="mt-[2px] text-[11px] text-[#6B7178]">Así va la operación de Bosque Alto hoy.</div>
        </div>

        <div className="grid grid-cols-[minmax(0,1fr)_218px] gap-[10px]">
          <div className="flex min-w-0 flex-col gap-[10px]">
            <div className="grid grid-cols-4 gap-2">
              <Kpi icon={Bed} bg="#9DB59C" fg="#FFFFFF" title="Ocupación" info>
                <div className="mb-1 mt-px font-serif text-[22px] leading-none">{dashboardKpis.occupancy.value}</div>
                <div className="flex items-center gap-[6px]">
                  <div className="h-[5px] flex-1 rounded-[3px] bg-[#E7E5DC]">
                    <div className="h-full rounded-[3px] bg-[#2E7F74]" style={{ width: `${dashboardKpis.occupancy.pct}%` }} />
                  </div>
                  <span className="text-[9px] text-[#6B7178]">{dashboardKpis.occupancy.pct}%</span>
                </div>
              </Kpi>
              <Kpi icon={LogIn} bg="#D9DFCD" fg="#103C34" title="Llegadas" info>
                <KpiValue value={dashboardKpis.arrivals.value} sub={dashboardKpis.arrivals.sub} />
              </Kpi>
              <Kpi icon={LogOut} bg="#D7704C" fg="#FFFFFF" title="Salidas">
                <KpiValue value={dashboardKpis.departures.value} sub={dashboardKpis.departures.sub} />
              </Kpi>
              <Kpi icon={DollarSign} bg="#D9DFCD" fg="#103C34" title="Por cobrar" info>
                <KpiValue value={dashboardKpis.pending.value} sub={dashboardKpis.pending.sub} />
              </Kpi>
            </div>

            <div className="overflow-hidden rounded-lg border border-[#ECE8DE] bg-white">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="font-serif text-[15px]">Disponibilidad y reservas</div>
                <div className="flex items-center gap-3 text-[9px] text-[#4A5058]">
                  {legend.map((l) => (
                    <span key={l.label} className="flex items-center gap-[5px]">
                      <span className="h-[9px] w-[9px] rounded-full" style={{ background: l.color }} />
                      {l.label}
                    </span>
                  ))}
                  <span className="ml-1 flex items-center gap-[6px]">
                    <NavBtn><ChevronLeft size={10} strokeWidth={2.4} /></NavBtn>
                    {dashboardWeek.label}
                    <NavBtn><ChevronRight size={10} strokeWidth={2.4} /></NavBtn>
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-[112px_repeat(7,1fr)] border-y border-[#ECE8DE] bg-[#F6F4EE] text-[9px] text-[#4A5058]">
                <div className="self-center px-3 py-[6px] font-medium text-ink">Alojamiento</div>
                {dashboardWeek.days.map((d) => (
                  <div key={d.n} className="border-l border-[#ECE8DE] py-1 text-center leading-[1.25]">
                    <b className="font-medium text-ink">{d.name} {d.n}</b>
                    <br />
                    oct
                  </div>
                ))}
              </div>
              {dashboardProperties.map((p) => (
                <div
                  key={p.name}
                  className="relative grid grid-cols-[112px_repeat(7,1fr)] grid-rows-[32px] border-b border-[#F0EDE5] last:border-b-0"
                >
                  <div className="flex items-center gap-[7px] px-2" style={{ gridColumn: 1, gridRow: 1 }}>
                    <img src={p.img} alt="" className="h-6 w-7 rounded-[4px] object-cover" />
                    <div className="leading-[1.3]">
                      <div className="whitespace-nowrap text-[9.5px] font-medium">{p.name}</div>
                      <div className="flex items-center gap-[3px] whitespace-nowrap text-[8px] text-[#8A8F96]">
                        <Users size={7} strokeWidth={1.8} /> {p.cap}
                      </div>
                    </div>
                  </div>
                  {Array.from({ length: DAYS }, (_, i) => (
                    <div
                      key={i}
                      className="grid place-items-center border-l border-[#F0EDE5] text-[9px] text-[#C9C5BB]"
                      style={{ gridRow: 1, gridColumn: FIRST_COL + i }}
                    >
                      —
                    </div>
                  ))}
                  {dashboardBlocks
                    .filter((b) => b.alojamiento === p.name)
                    .map((b) => {
                      const st = tipoStyle[b.tipo];
                      return (
                        <div
                          key={`${b.huesped}-${b.inicio}`}
                          className="z-[1] mx-[2px] my-[3px] flex items-center justify-center gap-[6px] rounded-[4px] text-center text-[8.5px] leading-[1.25]"
                          style={{ gridRow: 1, gridColumn: gridColumn(b), background: st.bg, color: st.fg }}
                        >
                          {st.dot && <span className="h-[7px] w-[7px] shrink-0 rounded-full" style={{ background: st.dot }} />}
                          <div>
                            <div className="font-medium">{b.huesped}</div>
                            <div className="opacity-85">{rangeLabel(b)}</div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#ECE8DE] bg-white px-3 py-[10px]">
            <div className="flex items-center justify-between">
              <div className="font-serif text-[15px]">Prioridades de hoy</div>
              <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-sage-soft text-[9px] text-forest">
                {priorities.length - 1}
              </span>
            </div>
            <ul className="m-0 mt-1 list-none p-0">
              {priorities.map((pr) => {
                const st = priorityStyle[pr.kind];
                const PIcon = st.icon;
                const [d1, d2] = pr.detail.split("\n");
                return (
                  <li
                    key={pr.title + pr.time}
                    className="flex items-center gap-2 border-b border-[#F0EDE5] py-[7px] last:border-b-0"
                  >
                    <span
                      className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full"
                      style={{ background: st.bg, color: st.fg }}
                    >
                      <PIcon size={12} strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1 text-[8.5px] leading-[1.35] text-[#6B7178]">
                      <div className="text-[9.5px] font-medium text-ink">
                        {pr.title}
                        {pr.place && <> · {pr.place}</>}
                      </div>
                      <div>
                        {pr.time}
                        {d1 && <span className="ml-[6px]">{d1}</span>}
                      </div>
                      {d2 && <div>{d2}</div>}
                    </div>
                    <ChevronRight size={11} strokeWidth={1.8} className="shrink-0 text-[#4A5058]" />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-[1.42fr_1fr] gap-[10px]">
          <div className="rounded-lg border border-[#ECE8DE] bg-white px-3 py-[10px]">
            <div className="mb-[6px] flex items-center justify-between">
              <div className="font-serif text-[15px]">Reservas recientes</div>
              <span className="flex items-center gap-1 text-[9px] text-forest">
                Ver todas <ArrowRight size={10} strokeWidth={1.8} />
              </span>
            </div>
            <table className="w-full border-collapse text-left text-[8.5px] text-[#4A5058]">
              <thead>
                <tr className="bg-[#F6F4EE]">
                  {tableHeads.map((h, i) => (
                    <th key={i} className="px-[5px] py-1 font-normal">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((r) => {
                  const st = estadoStyle[r.estado];
                  return (
                    <tr key={r.fecha + r.huesped} className="border-b border-[#F0EDE5] text-ink last:border-b-0">
                      <td className="px-[5px] py-[5px]">{r.fecha}</td>
                      <td className="px-[5px]">{r.huesped}</td>
                      <td className="px-[5px]">{r.alojamiento}</td>
                      <td className="px-[5px]">{r.fechas}</td>
                      <td className="px-[5px] text-[#4A5058]">{r.fuente}</td>
                      <td className="px-[5px]">
                        <span className="rounded-full px-[7px] py-[2px] text-[7.5px]" style={{ background: st.bg, color: st.fg }}>
                          {r.estado}
                        </span>
                      </td>
                      <td className="px-[5px]">{r.total}</td>
                      <td className="px-[5px] text-[#4A5058]">···</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-[#ECE8DE] bg-white px-3 py-[10px]">
            <div className="mb-1 flex items-center justify-between">
              <div className="font-serif text-[15px]">Ventas directas</div>
              <span className="flex items-center gap-2 rounded-[5px] border border-[#E4DFD3] px-2 py-[3px] text-[8.5px] text-[#4A5058]">
                Últimas 6 semanas <ChevronDown size={10} strokeWidth={2} />
              </span>
            </div>
            <div className="flex gap-2">
              <div className="flex h-[78px] flex-col justify-between pt-0.5 text-[8px] text-[#6B7178]">
                {salesTicks.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="flex-1">
                <div className="flex h-[78px] items-end justify-around border-b border-[#E4DFD3]">
                  {directSales.weeks.map((w, i) => (
                    <div
                      key={w.label}
                      className="w-[22px] origin-bottom rounded-t-[2px] bg-[#2E7F74] motion-safe:animate-grow-y"
                      style={{ height: `${(w.value / directSales.max) * 100}%`, animationDelay: `${900 + i * 90}ms` }}
                    />
                  ))}
                </div>
                <div className="mt-[3px] flex justify-around text-center text-[7.5px] leading-[1.3] text-[#6B7178]">
                  {directSales.weeks.map((w) => (
                    <span key={w.label} className="w-[34px]">
                      {w.label}
                      <br />
                      {w.range}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-[6px] flex justify-center gap-4 text-[8px] text-[#4A5058]">
              <span className="flex items-center gap-[5px]"><span className="h-2 w-2 rounded-full bg-[#2E7F74]" />Web propia</span>
              <span className="flex items-center gap-[5px]"><span className="h-2 w-2 rounded-full bg-[#B9CBB0]" />WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </FitCanvas>
  );
}
