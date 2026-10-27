/* eslint-disable @next/next/no-img-element */
import { ArrowRight, ChevronDown, Mountain } from "lucide-react";
import { propertySite as site } from "@/lib/content";

/** Laptop de 720px de ancho con el sitio de reservas de demostración. */
export function LaptopSite() {
  return (
    <>
      <div className="absolute left-0 top-0 w-[720px] rounded-t-2xl bg-[#1D2423] px-3 pt-3">
        <div className="h-[470px] overflow-hidden rounded-t-md bg-surface font-sans text-ink">
          <div className="flex items-center justify-between px-[22px] py-3">
            <span className="flex items-center gap-2 font-serif text-[15px]">
              <span className="grid h-[22px] w-[22px] place-items-center rounded-full border-[1.5px] border-forest">
                <Mountain size={12} stroke="#103C34" strokeWidth={2} />
              </span>
              {site.name}
            </span>
            <span className="flex gap-[18px] text-[9px] text-[#4A5058]">
              {site.nav.map((n) => (
                <span key={n}>{n}</span>
              ))}
            </span>
            <span className="rounded-full bg-forest px-4 py-[6px] text-[9px] text-white">Reservar</span>
          </div>

          <div className="relative h-[170px]">
            <img src="/assets/p-laptop.png" alt="" className="h-full w-full object-cover" style={{ objectPosition: "center 40%" }} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,37,36,0.55),rgba(9,37,36,0)_60%)]" />
            <div className="absolute left-[26px] top-[50px] text-white">
              <div className="font-serif text-[40px] leading-none">{site.name}</div>
              <div className="mt-[6px] text-[11px]">{site.tagline}</div>
            </div>
          </div>

          <div className="relative ml-[26px] mr-[110px] -mt-6 flex items-center gap-[14px] rounded-md bg-white p-[10px_12px] text-[9px] shadow-[0_8px_24px_-10px_rgba(9,37,36,0.3)]">
            <div className="flex flex-1 items-center justify-between">
              <Field label="Llegada" value={site.arrival} />
              <ArrowRight size={12} stroke="#4A5058" strokeWidth={2} />
            </div>
            <div className="flex-1 border-l border-[#ECE8DE] pl-3">
              <Field label="Salida" value={site.departure} />
            </div>
            <div className="flex flex-1 items-center justify-between border-l border-[#ECE8DE] pl-3">
              <Field label="Huéspedes" value={site.guests} />
              <ChevronDown size={11} stroke="#4A5058" strokeWidth={2} />
            </div>
            <span className="whitespace-nowrap rounded bg-terracotta px-[14px] py-[9px] text-[10px] text-white">Elegir alojamiento</span>
          </div>

          <div className="grid grid-cols-3 gap-3 py-[18px] pl-[26px] pr-[110px]">
            {site.cards.map((c) => (
              <div key={c.name} className="overflow-hidden rounded-md border border-[#ECE8DE] bg-white">
                <img src={c.img} alt="" className="block h-[100px] w-full object-cover" />
                <div className="px-[10px] py-2 text-[9px]">
                  <div className="font-serif text-[12px]">{c.name}</div>
                  <div className="mt-[2px] text-[#6B7178]">{c.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute left-[-24px] top-[482px] h-4 w-[768px] rounded-[2px_2px_12px_12px] bg-[linear-gradient(#3A4140,#1D2423)] shadow-[0_18px_30px_-12px_rgba(9,37,36,0.45)]" />
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[#8A8F96]">{label}</div>
      <div className="mt-[2px] font-medium">{value}</div>
    </div>
  );
}
