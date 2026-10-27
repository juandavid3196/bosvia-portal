/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { NoteLine } from "@/components/ui/NoteLine";
import { OperationalPanel } from "@/components/mockups/OperationalPanel";
import type { Dictionary } from "@/lib/dictionaries/es";

function Title({ copy, id, className }: { copy: Dictionary["hero"]; id: string; className: string }) {
  return (
    <h1 id={id} className={`font-serif font-normal leading-[0.98] tracking-[-0.025em] text-ink ${className}`}>
      {copy.titleLines[0]}
      <br />
      {copy.titleLines[1]}
      <br />
      <span className="text-moss">{copy.titleAccent}</span>
    </h1>
  );
}

export function Hero({ t }: { t: Dictionary }) {
  const hero = t.hero;
  return (
    <>
      {/* Escritorio */}
      <section
        aria-labelledby="hero-title"
        className="relative hidden h-[var(--hero-h)] overflow-hidden bg-ivory [--hero-h:clamp(640px,min(56vw,100svh),900px)] min-[1080px]:block"
      >
        <div className="absolute inset-0 motion-safe:animate-ken-burns">
          <Image
            src="/assets/hero-bg.png"
            alt={hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="relative mx-auto h-full max-w-[1452px] px-[clamp(20px,4vw,52px)]">
          <div className="absolute left-[clamp(20px,4vw,52px)] top-[24%] w-[40%] max-w-[520px]">
            <Title copy={hero} id="hero-title" className="motion-safe:animate-fade-up [animation-delay:150ms] whitespace-nowrap text-[min(5vw,70px)] tracking-[-0.035em]" />
            <p className="motion-safe:animate-fade-up [animation-delay:350ms] mt-[clamp(20px,2.4vw,32px)] max-w-[34ch] text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-paragraph [text-wrap:pretty]">
              {hero.description}
            </p>
            <div className="motion-safe:animate-fade-up [animation-delay:500ms] mt-[clamp(24px,2.6vw,34px)] flex flex-wrap items-center gap-x-10 gap-y-[14px]">
              <Button href="#producto" arrow>{hero.primaryCta}</Button>
              <Button href="#flujo" variant="text" arrow>{hero.secondaryCta}</Button>
            </div>
            <NoteLine className="mt-[clamp(28px,3vw,40px)] max-w-[34ch] text-[13px] motion-safe:animate-fade-up [animation-delay:650ms]">{hero.note}</NoteLine>
          </div>
          {/* El panel se limita por alto de pantalla: en laptops de 13" debe verse entero sin hacer scroll. */}
          <div className="absolute left-[42%] right-[clamp(20px,4vw,52px)] top-[28%] motion-safe:animate-panel-in [animation-delay:450ms]">
            <div className="ml-auto w-[min(100%,calc((100svh-var(--hero-h)*0.28-24px)/0.69))]">
              <OperationalPanel t={t} />
            </div>
          </div>
        </div>
      </section>

      {/* Móvil */}
      <section aria-labelledby="hero-title-m" className="relative overflow-hidden bg-ivory pt-[110px] min-[1080px]:hidden">
        <div className="px-[22px]">
          <Title copy={hero} id="hero-title-m" className="motion-safe:animate-fade-up text-[clamp(44px,12.5vw,64px)]" />
          <p className="mt-5 text-[16px] leading-[1.55] text-paragraph [text-wrap:pretty] motion-safe:animate-fade-up [animation-delay:200ms]">{hero.description}</p>
          <div className="mt-[26px] flex flex-col items-start gap-[18px]">
            <Button href="#producto" arrow>{hero.primaryCta}</Button>
            <Button href="#flujo" variant="text" arrow>{hero.secondaryCta}</Button>
          </div>
          <NoteLine line={24} className="mt-7 gap-[14px] text-[13px]">{hero.note}</NoteLine>
        </div>
        <div className="relative mt-9">
          <img
            src="/assets/hero-v5.png"
            alt={hero.imageAlt}
            className="block h-[360px] w-full rounded-tl-[140px] object-cover"
            style={{ objectPosition: "center top" }}
          />
          <div className="relative -mt-[170px] px-[14px] pb-7 motion-safe:animate-panel-in [animation-delay:400ms]">
            <OperationalPanel t={t} />
          </div>
        </div>
      </section>
    </>
  );
}
