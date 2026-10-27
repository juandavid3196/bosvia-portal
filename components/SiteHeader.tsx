"use client";

import { LanguageSwitch } from "@/components/LanguageSwitch";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { PORTFOLIO_URL } from "@/lib/config";
import { navAnchors } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries/es";
import type { Locale } from "@/lib/i18n";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta";

type HeaderCopy = Dictionary["header"];

function StatusPill({ copy, className = "" }: { copy: HeaderCopy; className?: string }) {
  return (
    <span className={`flex items-center gap-[10px] whitespace-nowrap text-[13px] text-forest ${className}`}>
      <span aria-hidden="true" className="relative grid h-2 w-2 place-items-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-status-dot opacity-60 motion-safe:animate-ping" />
        <span className="relative h-2 w-2 rounded-full bg-status-dot" />
      </span>
      <span className="font-medium">{copy.status}</span>
      {/* En la barra de escritorio la nota se oculta por debajo de 1280px para que el menú quepa. */}
      <span aria-hidden="true" className="hidden h-3 w-px bg-forest/30 min-[1280px]:block" />
      <span className="hidden text-forest/70 min-[1280px]:inline">{copy.statusNote}</span>
    </span>
  );
}

interface SiteHeaderProps {
  copy: HeaderCopy;
  logoAlt: string;
  locale: Locale;
}

export function SiteHeader({ copy, logoAlt, locale }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 motion-safe:animate-fade-down">
      <div className="mx-auto flex max-w-[1452px] items-center justify-between gap-6 px-[clamp(20px,4vw,52px)] py-[18px]">
        <a
          href="#top"
          aria-label={copy.homeLabel}
          className={`flex shrink-0 rounded-md focus-visible:outline-offset-4 ${focusRing}`}
        >
          <Logo variant="light" alt={logoAlt} className="h-[clamp(40px,4.4vw,58px)]" />
        </a>

        <nav
          aria-label={copy.navLabel}
          className="ml-[clamp(24px,3vw,44px)] mr-auto hidden gap-[clamp(20px,3vw,40px)] text-[14px] min-[1080px]:flex"
        >
          {navAnchors.map((href, i) => (
            <a
              key={href}
              href={href}
              className={`relative whitespace-nowrap py-[6px] text-ink no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-offset-4 ${focusRing}`}
            >
              {copy.links[i]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-[clamp(14px,2vw,24px)] min-[1080px]:flex">
          <StatusPill copy={copy} className="rounded-full bg-sage/85 px-4 py-2" />
          <LanguageSwitch copy={copy} locale={locale} />
          <Button href={PORTFOLIO_URL} variant="outline" arrow className="gap-3">
            {copy.portfolio}
          </Button>
        </div>

        <MobileMenu copy={copy} logoAlt={logoAlt} locale={locale} />
      </div>
    </header>
  );
}
