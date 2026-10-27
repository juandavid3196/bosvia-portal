/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { NoteLine } from "@/components/ui/NoteLine";
import { Reveal } from "@/components/ui/Reveal";
import { OperationalPanel } from "@/components/mockups/OperationalPanel";
import { hero } from "@/lib/content";

function Title({ id, className, style }: { id: string; className: string; style?: React.CSSProperties }) {
  return (
    <h1 id={id} className={`font-serif font-normal leading-[0.98] tracking-[-0.025em] text-ink ${className}`} style={style}>
      {hero.titleLines[0]}
      <br />
      {hero.titleLines[1]}
      <br />
      <span className="text-moss">{hero.titleAccent}</span>
    </h1>
  );
}

export function Hero() {
  return (
    <>
      {/* Escritorio */}
      <section
        aria-labelledby="hero-title"
        className="relative hidden h-[clamp(660px,56vw,900px)] overflow-hidden bg-ivory min-[1080px]:block"
      >
        <Image
          src="/assets/hero-bg.png"
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="relative mx-auto h-full max-w-[1320px] px-[clamp(20px,4vw,52px)]">
          <Reveal className="absolute left-[clamp(20px,4vw,52px)] top-[24%] w-[40%] max-w-[520px]">
            <Title id="hero-title" className="whitespace-nowrap text-[min(5vw,70px)] tracking-[-0.035em]" />
            <p className="mt-[clamp(20px,2.4vw,32px)] max-w-[34ch] text-[clamp(16px,1.4vw,19px)] leading-[1.5] text-paragraph [text-wrap:pretty]">
              {hero.description}
            </p>
            <div className="mt-[clamp(24px,2.6vw,34px)] flex flex-wrap items-center gap-x-10 gap-y-[14px]">
              <Button href="#producto" arrow>{hero.primaryCta}</Button>
              <Button href="#flujo" variant="text" arrow>{hero.secondaryCta}</Button>
            </div>
            <NoteLine className="mt-[clamp(28px,3vw,40px)] text-[13px]">{hero.note}</NoteLine>
          </Reveal>
          <div className="absolute left-[42%] right-0 top-[28%]">
            <OperationalPanel />
          </div>
        </div>
      </section>

      {/* Móvil */}
      <section aria-labelledby="hero-title-m" className="relative overflow-hidden bg-ivory pt-[110px] min-[1080px]:hidden">
        <div className="px-[22px]">
          <Title id="hero-title-m" className="text-[clamp(44px,12.5vw,64px)]" />
          <p className="mt-5 text-[16px] leading-[1.55] text-paragraph [text-wrap:pretty]">{hero.description}</p>
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
          <div className="relative -mt-[170px] px-[14px] pb-7">
            <OperationalPanel minScale={0.42} />
          </div>
        </div>
      </section>
    </>
  );
}
