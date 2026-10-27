/* eslint-disable @next/next/no-img-element */
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { NoteLine } from "@/components/ui/NoteLine";
import { Reveal } from "@/components/ui/Reveal";
import { LaptopSite } from "@/components/mockups/LaptopSite";
import { PhoneBooking } from "@/components/mockups/PhoneBooking";
import { experience } from "@/lib/content";

export function ConnectedExperience() {
  return (
    <section id="experiencia" aria-labelledby="exp-title" className="relative overflow-hidden bg-ivory">
      <img
        src="/assets/leaves-t.png"
        alt=""
        aria-hidden="true"
        className="absolute -left-5 bottom-0 w-[clamp(120px,13vw,190px)] opacity-85"
      />
      <div className="relative mx-auto max-w-[1364px] px-[clamp(20px,4vw,52px)] pb-[clamp(56px,6vw,96px)] pt-[clamp(56px,6vw,88px)]">
        <Reveal>
          <Eyebrow>{experience.eyebrow}</Eyebrow>
          <h2
            id="exp-title"
            className="mt-[22px] font-serif text-[clamp(38px,5vw,68px)] font-normal leading-[1.02] tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            {experience.title[0]}
            <br />
            {experience.title[1]}
          </h2>
        </Reveal>

        <div className="mt-[clamp(36px,4vw,56px)] grid grid-cols-[minmax(0,1fr)] items-center gap-x-[clamp(32px,4vw,64px)] gap-y-12 min-[1100px]:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)]">
          <Reveal className="min-w-0">
            <FitCanvas baseWidth={860} baseHeight={560} max={1.1} label={experience.mockupLabel}>
              <LaptopSite />
              <PhoneBooking />
            </FitCanvas>
          </Reveal>

          <Reveal id="flujo" className="relative scroll-mt-10">
            <div aria-hidden="true" className="absolute bottom-[90px] left-[31px] top-10 w-px bg-[#D3D8C7]" />
            <ol className="m-0 flex list-none flex-col gap-[clamp(36px,4vw,56px)] p-0">
              {experience.steps.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 140} className="group relative flex gap-[26px]">
                  <span
                    aria-hidden="true"
                    className="grid h-[62px] w-[62px] shrink-0 place-items-center rounded-full bg-sage font-serif text-[22px] text-forest transition duration-300 ease-reveal group-hover:scale-110 group-hover:bg-forest group-hover:text-ivory"
                  >
                    {s.n}
                  </span>
                  <div className="pt-[6px]">
                    <h3 className="font-serif text-[clamp(22px,2vw,27px)] font-normal leading-[1.15]">{s.title}</h3>
                    <p className="mt-[10px] max-w-[24ch] text-[16px] leading-[1.5] text-paragraph">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <NoteLine line={30} className="mt-11 pl-3 text-[14px]">{experience.note}</NoteLine>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
