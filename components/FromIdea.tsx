/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { NoteLine } from "@/components/ui/NoteLine";
import { Reveal } from "@/components/ui/Reveal";
import { fromIdea } from "@/lib/content";

export function FromIdea() {
  return (
    <section id="desarrollo" aria-labelledby="dev-title" className="relative overflow-hidden bg-ivory">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 hidden aspect-[2087/754] min-[1080px]:block">
        <Image src="/assets/dev-bg.png" alt="" fill sizes="100vw" className="object-cover object-right-top" />
      </div>
      <div className="relative mx-auto max-w-[1364px] px-[clamp(20px,4vw,52px)] pb-[clamp(48px,5vw,72px)] pt-[clamp(56px,6vw,88px)]">
        <Reveal className="max-w-full min-[1080px]:max-w-[66%]">
          <Eyebrow>{fromIdea.eyebrow}</Eyebrow>
          <h2
            id="dev-title"
            className="mt-[22px] font-serif text-[clamp(36px,3.6vw,52px)] font-normal leading-[1.04] tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            {fromIdea.title[0]}
            <br />
            {fromIdea.title[1]}
          </h2>
          <p className="mt-[18px] max-w-[54ch] text-[clamp(16px,1.5vw,19px)] leading-[1.55] text-paragraph [text-wrap:pretty]">
            {fromIdea.description}
          </p>
        </Reveal>

        <img
          src="/assets/p-mont.png"
          alt="Montañas al atardecer"
          className="mt-8 block h-[220px] w-full rounded-[120px_0_120px_0] object-cover min-[1080px]:hidden"
        />

        <div className="relative mt-[clamp(36px,4vw,56px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-[18px]">
          {fromIdea.cards.map((c, i) => (
            <Reveal
              as="article"
              key={c.title}
              delay={i * 130}
              className="group flex items-start gap-[22px] rounded-md border border-line bg-surface/[0.94] px-[26px] py-7 transition duration-300 ease-reveal hover:-translate-y-1 hover:border-sage hover:shadow-[0_18px_30px_-20px_rgba(9,37,36,0.35)]"
            >
              <IconCircle name={c.icon} size={58} iconSize={26} />
              <div>
                <h3 className="font-serif text-[22px] font-normal leading-[1.2]">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-paragraph">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <NoteLine line={30} className="mt-[26px] text-[14px]">{fromIdea.note}</NoteLine>
      </div>
    </section>
  );
}
