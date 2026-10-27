/* eslint-disable @next/next/no-img-element */
import { ChevronDown, Menu, Mountain } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries/es";

/** Teléfono de 210×420 con la ficha de reserva de Cabaña Roble. */
export function PhoneBooking({ site }: { site: Dictionary["site"] }) {
  return (
    <div className="absolute left-[590px] top-[104px] h-[420px] w-[210px] rounded-[32px] bg-[#1D2423] p-[9px] shadow-[0_30px_50px_-20px_rgba(9,37,36,0.55)]">
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-surface font-sans text-ink">
        <div className="absolute left-1/2 top-[6px] h-4 w-16 -translate-x-1/2 rounded-[10px] bg-[#1D2423]" />
        <div className="flex items-center justify-between px-[14px] pb-[10px] pt-[30px]">
          <span className="flex items-center gap-[6px] font-serif text-[12px]">
            <span className="grid h-[18px] w-[18px] place-items-center rounded-full bg-[#2E7F74]">
              <Mountain size={10} stroke="#FFFFFF" strokeWidth={2} />
            </span>
            {site.name}
          </span>
          <Menu size={14} strokeWidth={2} />
        </div>
        <img src="/assets/p-cabana.png" alt="" className="mx-[10px] block h-[104px] w-[calc(100%-20px)] rounded-md object-cover" />
        <div className="px-3 py-[10px] text-[8.5px] text-[#4A5058]">
          <div className="font-serif text-[15px] text-ink">{site.phone.name}</div>
          <div className="mt-[6px] flex flex-col gap-1">
            {site.phone.features.map((f) => (
              <span key={f}>{f}</span>
            ))}
          </div>
          <div className="mt-[9px] grid grid-cols-2 rounded-[5px] border border-[#ECE8DE] bg-white">
            <div className="px-2 py-[6px]">
              <div className="text-[#8A8F96]">{site.arrival}</div>
              <div className="font-medium text-ink">{site.arrivalDate}</div>
            </div>
            <div className="border-l border-[#ECE8DE] px-2 py-[6px]">
              <div className="text-[#8A8F96]">{site.departure}</div>
              <div className="font-medium text-ink">{site.departureDate}</div>
            </div>
          </div>
          <div className="mt-[6px] flex items-center justify-between rounded-[5px] border border-[#ECE8DE] bg-white px-2 py-[6px]">
            <div>
              <div className="text-[#8A8F96]">{site.guests}</div>
              <div className="font-medium text-ink">{site.guestsValue}</div>
            </div>
            <ChevronDown size={10} stroke="#4A5058" strokeWidth={2} />
          </div>
          <div className="mt-[9px] rounded-[5px] bg-terracotta p-2 text-center text-[10px] font-medium text-white">{site.book}</div>
        </div>
      </div>
    </div>
  );
}
