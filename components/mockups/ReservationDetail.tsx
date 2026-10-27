/* eslint-disable @next/next/no-img-element */
import {
  ArrowRight,
  ArrowUpRight,
  Bed,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Flame,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Phone,
  Plus,
  TreePine,
  Users,
  UtensilsCrossed,
  LogIn,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { PanelSidebar } from "@/components/mockups/PanelSidebar";
import { reservation as r } from "@/lib/reservation";

const card = "rounded-lg border border-[#ECE8DE] bg-white";
const cardTitle = "font-serif text-[14px] leading-none";

const activityIcon: Record<(typeof r.activity)[number]["kind"], { icon: LucideIcon; bg: string; fg: string }> = {
  done: { icon: Check, bg: "#2E7F74", fg: "#FFFFFF" },
  mail: { icon: Mail, bg: "#2E7F74", fg: "#FFFFFF" },
  clock: { icon: Clock, bg: "#EDEBE4", fg: "#8A8F96" },
};

function More() {
  return <MoreHorizontal size={12} strokeWidth={1.8} className="text-[#4A5058]" />;
}

interface ReservationDetailProps {
  label?: string;
  minScale?: number;
}

/** Detalle de reserva (diseño conceptual). Lienzo de 1000px. */
export function ReservationDetail({ label = "Diseño conceptual", minScale = 0 }: ReservationDetailProps) {
  return (
    <FitCanvas
      baseWidth={1000}
      min={minScale}
      label="Vista conceptual del detalle de una reserva en Bosvia: huésped, alojamiento, servicios y cargos, resumen de pago y actividad reciente"
      className="flex overflow-hidden rounded-xl border border-[#E4DFD3] bg-surface font-sans text-ink shadow-[0_30px_60px_-20px_rgba(9,37,36,0.35),0_8px_20px_-8px_rgba(9,37,36,0.18)]"
    >
      <PanelSidebar active="Reservas" />

      <div className="flex min-w-0 flex-1 flex-col pb-2">
        {/* Topbar */}
        <div className="flex items-center justify-between border-b border-[#ECE8DE] px-[14px] py-[6px]">
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
          <div className="flex items-center gap-[12px] text-[10px] text-[#4A5058]">
            <span className="flex items-center gap-[6px]">
              <CalendarDays size={12} strokeWidth={1.8} />
              {r.today}
            </span>
            <span className="h-5 w-px bg-[#E4DFD3]" />
            <span className="relative">
              <Bell size={13} strokeWidth={1.8} />
              <span className="absolute -right-px -top-px h-[5px] w-[5px] rounded-full bg-[#D7704C]" />
            </span>
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

        {/* Encabezado */}
        <div className="flex items-start justify-between px-[14px] pt-[8px]">
          <div>
            <div className="text-[8.5px] text-[#6B7178]">
              Reservas <span className="mx-1">/</span> <span className="text-ink">{r.code}</span>
            </div>
            <div className="mt-[3px] flex items-center gap-[10px]">
              <h3 className="font-serif text-[30px] font-normal leading-none">Detalle de reserva</h3>
              <span className="rounded-full bg-sage-soft px-[10px] py-[4px] text-[9px] text-forest">{r.status}</span>
            </div>
            <div className="mt-[5px] text-[10px] text-[#4A5058]">
              {r.code} <span className="mx-1">·</span> {r.created} <span className="mx-1">·</span> {r.source}
            </div>
          </div>
          <div className="flex items-center gap-[7px] pt-[14px] text-[10px] font-medium">
            <span className="flex items-center gap-[6px] rounded-md border border-[#C9C5BB] bg-white px-3 py-[7px]">
              <Pencil size={11} strokeWidth={1.8} /> Editar reserva
            </span>
            <span className="flex items-center gap-[6px] rounded-md bg-forest px-3 py-[7px] text-white">
              <Plus size={11} strokeWidth={2.2} /> Registrar pago
            </span>
            <span className="grid h-[27px] w-[27px] place-items-center rounded-md border border-[#C9C5BB] bg-white">
              <More />
            </span>
          </div>
        </div>

        <div className="mt-[6px] grid min-w-0 grid-cols-[minmax(0,1fr)_262px] gap-[10px] px-[14px]">
          {/* Columna principal */}
          <div className="flex min-w-0 flex-col gap-[8px]">
            <div className="flex gap-[22px] border-b border-[#ECE8DE] text-[10px] text-[#4A5058]">
              {r.tabs.map((t, i) => (
                <span
                  key={t}
                  className={`pb-[6px] ${i === 0 ? "-mb-px border-b-2 border-[#2E7F74] font-medium text-ink" : ""}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-[8px]">
              <div className={`${card} flex items-center gap-[10px] p-[9px]`}>
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#D3DECB] text-forest">
                  <LogIn size={15} strokeWidth={1.8} />
                </span>
                <div className="text-[9px] leading-[1.35] text-[#6B7178]">
                  Llegada
                  <div className="font-serif text-[15px] leading-tight text-ink">{r.stay.arrival.date}</div>
                  {r.stay.arrival.time}
                </div>
              </div>
              <div className={`${card} flex items-center gap-[10px] p-[9px]`}>
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#D7704C] text-white">
                  <LogOut size={15} strokeWidth={1.8} />
                </span>
                <div className="text-[9px] leading-[1.35] text-[#6B7178]">
                  Salida
                  <div className="font-serif text-[15px] leading-tight text-ink">{r.stay.departure.date}</div>
                  {r.stay.departure.time}
                </div>
              </div>
              <div className={`${card} flex items-center gap-[10px] p-[9px]`}>
                <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#C9D6C3] text-forest">
                  <Bed size={15} strokeWidth={1.8} />
                </span>
                <div className="text-[9px] text-[#6B7178]">
                  Estadía
                  <div className="mt-[2px] font-serif text-[14px] leading-tight text-ink">{r.stay.summary}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[8px]">
              <div className={`${card} p-[10px]`}>
                <div className="flex items-center justify-between">
                  <div className={cardTitle}>Huésped principal</div>
                  <More />
                </div>
                <div className="mt-[8px] flex items-center gap-[8px]">
                  <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#D3DECB] font-serif text-[13px] text-forest">
                    {r.guest.initials}
                  </span>
                  <div>
                    <div className="font-serif text-[13px] leading-none">{r.guest.name}</div>
                    <span className="mt-[4px] inline-flex items-center gap-[4px] rounded-full bg-sage-soft px-2 py-[2px] text-[8px] text-forest">
                      <span className="h-[5px] w-[5px] rounded-full border border-[#5E8A5C]" />
                      {r.guest.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-[8px] flex items-end justify-between">
                  <ul className="m-0 flex list-none flex-col gap-[5px] p-0 text-[8.5px] text-[#4A5058]">
                    <li className="flex items-center gap-[6px]"><Mail size={10} strokeWidth={1.6} />{r.guest.email}</li>
                    <li className="flex items-center gap-[6px]"><Phone size={10} strokeWidth={1.6} />{r.guest.phone}</li>
                    <li className="flex items-center gap-[6px]"><Users size={10} strokeWidth={1.6} />{r.guest.history}</li>
                  </ul>
                  <span className="flex items-center gap-[5px] rounded-md border border-[#C9C5BB] px-[10px] py-[6px] text-[9px] font-medium">
                    <MessageCircle size={11} strokeWidth={1.6} /> Contactar
                  </span>
                </div>
              </div>

              <div className={`${card} p-[10px]`}>
                <div className="flex items-center justify-between">
                  <div className={cardTitle}>Alojamiento</div>
                  <More />
                </div>
                <div className="mt-[8px] flex gap-[10px]">
                  <img src={r.lodging.img} alt="" className="h-[84px] w-[96px] rounded-md object-cover" />
                  <div className="text-[8.5px] text-[#4A5058]">
                    <div className="font-serif text-[13px] leading-none text-ink">{r.lodging.name}</div>
                    <div className="mt-[8px] flex items-center gap-[6px]"><Users size={10} strokeWidth={1.6} />{r.lodging.capacity}</div>
                    <div className="mt-[5px] flex items-center gap-[6px]"><UtensilsCrossed size={10} strokeWidth={1.6} />{r.lodging.included}</div>
                    <div className="mt-[8px] flex items-center gap-1 text-[9px] text-[#2E6F7F] underline">
                      Ver alojamiento <ArrowUpRight size={9} strokeWidth={1.8} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${card} p-[10px]`}>
              <div className={cardTitle}>Servicios y cargos</div>
              <div className="mt-[6px] overflow-hidden rounded-md border border-[#ECE8DE] text-[8.5px] text-[#4A5058]">
                <div className="grid grid-cols-[1fr_60px_70px_70px_22px] bg-[#F6F4EE] px-[8px] py-[5px]">
                  <span>Concepto</span>
                  <span className="text-center">Cantidad</span>
                  <span className="text-center">Valor unitario</span>
                  <span className="text-right">Subtotal</span>
                  <span />
                </div>
                {r.charges.rows.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-[1fr_60px_70px_70px_22px] items-center border-t border-[#F0EDE5] px-[8px] py-[5px]"
                  >
                    <span className="flex items-center gap-[7px]">
                      <span
                        className={`grid h-[22px] w-[22px] place-items-center rounded-full ${row.icon === "bed" ? "bg-sage-soft text-forest" : "bg-[#F0C6B6] text-[#B65330]"}`}
                      >
                        {row.icon === "bed" ? <Bed size={11} strokeWidth={1.6} /> : <Flame size={11} strokeWidth={1.6} />}
                      </span>
                      <span className="leading-[1.3]">
                        <span className="text-[9.5px] text-ink">{row.name}</span>
                        {row.detail && <span> · {row.detail}</span>}
                        <br />
                        <span className="text-[8px] text-[#8A8F96]">{row.kind}</span>
                      </span>
                    </span>
                    <span className="text-center">{row.qty}</span>
                    <span className="text-center">{row.unit}</span>
                    <span className="text-right">{row.subtotal}</span>
                    <span className="flex justify-end"><More /></span>
                  </div>
                ))}
              </div>
              <div className="mt-[6px] flex items-center justify-between text-[8.5px] text-[#4A5058]">
                <span className="flex items-center gap-1 text-[#2E6F7F] underline">
                  <Plus size={10} strokeWidth={1.8} /> Agregar servicio
                </span>
                <span className="flex items-center gap-[10px]">
                  Impuestos incluidos
                  <span className="text-[9px] text-ink">Total de la reserva</span>
                  <span className="font-serif text-[15px] text-ink">
                    {r.charges.total} <span className="font-sans text-[8px]">COP</span>
                  </span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[8px]">
              <div className={`${card} p-[10px]`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[7px]">
                    <div className={cardTitle}>Notas de la estadía</div>
                    <span className="flex items-center gap-1 rounded-full bg-[#F3EDE3] px-[7px] py-[2px] text-[7.5px] text-[#6B5A4E]">
                      <Lock size={7} strokeWidth={1.8} /> Nota interna
                    </span>
                  </div>
                  <More />
                </div>
                <p className="mt-[7px] rounded-md bg-[#FBF4EA] p-[8px] text-[8.5px] leading-[1.45] text-[#4A5058]">{r.notes}</p>
              </div>
              <div className={`${card} p-[10px]`}>
                <div className="flex items-center justify-between">
                  <div className={cardTitle}>Preparación de llegada</div>
                  <More />
                </div>
                <ul className="m-0 mt-[6px] flex list-none flex-col gap-[5px] p-0 text-[8.5px] text-[#4A5058]">
                  {r.checklist.map((c) => (
                    <li key={c.title} className="flex items-start gap-[7px]">
                      <span
                        className={`mt-px grid h-[14px] w-[14px] shrink-0 place-items-center rounded-full border ${c.done ? "border-[#2E7F74] bg-[#2E7F74] text-white" : "border-[#C9C5BB]"}`}
                      >
                        {c.done && <Check size={9} strokeWidth={2.4} />}
                      </span>
                      <span className="flex-1 leading-[1.3]">
                        <span className="text-[9px] text-ink">{c.title}</span>
                        {c.who && (
                          <>
                            <br />
                            <span className="text-[7.5px] text-[#8A8F96]">{c.who}</span>
                          </>
                        )}
                      </span>
                      <span className="text-[7.5px] text-[#8A8F96]">{c.when}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex min-w-0 flex-col gap-[8px]">
            <div className={`${card} p-[11px]`}>
              <div className="flex items-center justify-between">
                <div className="font-serif text-[15px] leading-none">Resumen de pago</div>
                <span className="flex items-center gap-[5px] rounded-full bg-[#F6DDD3] px-2 py-[4px] text-[8.5px] text-[#B65330]">
                  <span className="h-[8px] w-[8px] rounded-full bg-[#CF6A45]" /> Saldo pendiente
                </span>
              </div>
              <div className="mt-[8px] text-[8.5px] text-[#6B7178]">Por cobrar</div>
              <div className="font-serif text-[27px] leading-tight">{r.payment.pending}</div>
              <div className="mt-[4px] flex items-center gap-[8px]">
                <div className="h-[6px] flex-1 rounded-[3px] bg-[#E7E5DC]">
                  <div className="h-full rounded-[3px] bg-[#2E7F74]" style={{ width: `${r.payment.pct}%` }} />
                </div>
                <span className="text-[8.5px] text-[#6B7178]">{r.payment.pct}%</span>
              </div>
              <div className="mt-[8px] grid grid-cols-3 text-[8.5px] text-[#6B7178]">
                <div>
                  Total
                  <div className="font-serif text-[12px] text-ink">{r.payment.total}</div>
                </div>
                <div className="border-l border-[#ECE8DE] pl-[8px]">
                  Pagado
                  <div className="font-serif text-[12px] text-ink">{r.payment.paid}</div>
                </div>
                <div className="border-l border-[#ECE8DE] pl-[8px]">
                  Pendiente
                  <div className="font-serif text-[12px] text-[#B65330]">{r.payment.pending}</div>
                </div>
              </div>
              <div className="mt-[8px] flex items-center gap-[8px] rounded-md bg-[#E3E6DA] p-[7px]">
                <span className="grid h-[20px] w-[20px] shrink-0 place-items-center rounded-full bg-[#2E7F74] text-white">
                  <Check size={11} strokeWidth={2.4} />
                </span>
                <div className="flex-1 text-[7.5px] leading-[1.35] text-[#6B7178]">
                  <div className="text-[9px] text-ink">{r.payment.advance.title} · {r.payment.advance.date}</div>
                  {r.payment.advance.method}
                </div>
                <span className="text-[9px] text-ink">{r.payment.advance.amount}</span>
              </div>
              <div className="mt-[8px] flex items-center justify-center gap-[6px] rounded-md border border-[#C9C5BB] py-[6px] text-[9px] font-medium">
                <Link2 size={10} strokeWidth={1.8} /> Enviar enlace de pago
              </div>
            </div>

            <div className={`${card} p-[11px]`}>
              <div className="font-serif text-[14px] leading-none">Actividad reciente</div>
              <ul className="m-0 mt-[7px] flex list-none flex-col p-0">
                {r.activity.map((a, i) => {
                  const st = activityIcon[a.kind];
                  const AIcon = st.icon;
                  return (
                    <li key={a.title} className="relative flex gap-[8px] pb-[7px]">
                      {i < r.activity.length - 1 && <span className="absolute left-[8px] top-[18px] h-[calc(100%-14px)] w-px bg-[#D3D8C7]" />}
                      <span className="z-[1] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full" style={{ background: st.bg, color: st.fg }}>
                        <AIcon size={9} strokeWidth={2.2} />
                      </span>
                      <div className="flex-1 text-[7.5px] leading-[1.35] text-[#6B7178]">
                        <div className="text-[9px] text-ink">{a.title}</div>
                        {a.extra && <div className="text-ink">{a.extra}</div>}
                        {a.meta}
                      </div>
                      <span className="max-w-[48px] text-right text-[7px] leading-[1.3] text-[#8A8F96]">{a.side}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="flex items-center gap-1 text-[8px] text-[#2E6F7F] underline">
                Ver historial completo <ArrowRight size={9} strokeWidth={1.8} />
              </div>
            </div>

            <div className={`${card} p-[10px]`}>
              <div className="flex items-center justify-between">
                <div className="text-[9.5px] font-medium">Comunicación con el huésped</div>
                <More />
              </div>
              <div className="mt-[6px] flex items-center gap-[5px] text-[8px] font-medium">
                <span className="flex items-center gap-1 rounded-md border border-[#C9C5BB] px-[7px] py-[5px]">
                  <Mail size={9} strokeWidth={1.6} /> Enviar correo
                </span>
                <span className="flex items-center gap-1 rounded-md border border-[#C9C5BB] px-[7px] py-[5px]">
                  <MessageCircle size={9} strokeWidth={1.6} /> Enviar WhatsApp
                </span>
                <span className="ml-auto text-[7px] font-normal leading-[1.3] text-[#8A8F96]">
                  Último mensaje:
                  <br />
                  hace 2 horas
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8px] flex justify-end px-[14px]">
          <span className="rounded-[5px] border border-[#E4DFD3] bg-[#F1EEE6] px-3 py-[4px] text-[10px] text-[#4A5058]">{label}</span>
        </div>
      </div>
    </FitCanvas>
  );
}
