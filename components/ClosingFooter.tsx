import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { CONTACT_URL, PORTFOLIO_URL } from "@/lib/config";
import { closing } from "@/lib/content";

export function ClosingFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest text-ivory">
      <Image
        src="/assets/footer-bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-right"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-forest/60 min-[1080px]:hidden" />
      <div className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,52px)] pt-[clamp(48px,5vw,64px)]">
        <Reveal className="flex flex-wrap items-start gap-x-[clamp(32px,3.4vw,48px)] gap-y-7">
          <Logo variant="dark" className="mt-1 h-[clamp(44px,4.4vw,58px)]" />
          <div className="min-w-[min(100%,300px)] flex-1">
            <h2 className="font-serif text-[clamp(30px,3vw,42px)] font-normal leading-[1.1] tracking-[-0.01em] [text-wrap:balance]">
              {closing.title[0]}
              <br />
              {closing.title[1]}
            </h2>
            <p className="mt-3 text-[17px] leading-[1.5] text-sage-bg">{closing.text}</p>
            <div className="mt-[26px] flex flex-wrap gap-[18px]">
              <Button href={PORTFOLIO_URL} variant="ivory" arrow>{closing.portfolioCta}</Button>
              <Button href={CONTACT_URL} variant="ghost-light">{closing.contactCta}</Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-[clamp(44px,5vw,64px)] flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ivory/[0.22] pb-[26px] pt-[22px] text-[13px] text-sage-bg">
          <Image src="/assets/emblem.png" alt="Emblema del creador" width={1254} height={1254} className="h-10 w-10 motion-safe:animate-spin-slow" />
          <span aria-hidden="true" className="h-[26px] w-px bg-ivory/25" />
          <span>{closing.footerTagline}</span>
          <span className="ml-auto">{closing.footerStatus}</span>
        </div>
      </div>
    </footer>
  );
}
