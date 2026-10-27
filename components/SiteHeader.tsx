"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Arrow } from "@/components/ui/Icons";
import { PORTFOLIO_URL } from "@/lib/config";
import { navAnchors } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries/es";
import { locales, localePath, type Locale } from "@/lib/i18n";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta";

type HeaderCopy = Dictionary["header"];

function StatusPill({ copy, className = "", full = false }: { copy: HeaderCopy; className?: string; full?: boolean }) {
  return (
    <span className={`flex items-center gap-[10px] whitespace-nowrap text-[13px] text-forest ${className}`}>
      <span aria-hidden="true" className="relative grid h-2 w-2 place-items-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-status-dot opacity-60 motion-safe:animate-ping" />
        <span className="relative h-2 w-2 rounded-full bg-status-dot" />
      </span>
      <span className="font-medium">{copy.status}</span>
      <span aria-hidden="true" className={`h-3 w-px bg-forest/30 ${full ? "block" : "hidden min-[1280px]:block"}`} />
      <span className={`text-forest/70 ${full ? "inline" : "hidden min-[1280px]:inline"}`}>{copy.statusNote}</span>
    </span>
  );
}

/** Selector de idioma: cada opción es un enlace real a la versión correspondiente. */
function LanguageSwitch({ copy, locale, className = "" }: { copy: HeaderCopy; locale: Locale; className?: string }) {
  return (
    <div role="group" aria-label={copy.languageLabel} className={`flex items-center rounded-full border border-ink/25 p-[3px] text-[12px] font-medium ${className}`}>
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={localePath(l)}
            hrefLang={l}
            lang={l}
            aria-current={active ? "true" : undefined}
            aria-label={copy.languages[l]}
            title={copy.languages[l]}
            className={`rounded-full px-[10px] py-[4px] uppercase tracking-wide no-underline transition-colors duration-200 ${focusRing} ${
              active ? "bg-ink text-ivory" : "text-ink hover:bg-ink/10"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </div>
  );
}

interface SiteHeaderProps {
  copy: HeaderCopy;
  logoAlt: string;
  locale: Locale;
}

export function SiteHeader({ copy, logoAlt, locale }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
          className={`grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-[10px] border-[1.5px] border-ink bg-ivory/90 text-ink focus-visible:outline-offset-[3px] min-[1080px]:hidden ${focusRing}`}
        >
          {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="menu-movil"
          className="mx-4 flex flex-col gap-1 rounded-[14px] border border-line bg-ivory p-5 shadow-[0_20px_40px_-20px_rgba(9,37,36,0.35)] motion-safe:animate-menu-in min-[1080px]:hidden"
        >
          {navAnchors.map((href, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="py-2 font-serif text-[26px] text-ink no-underline"
            >
              {copy.links[i]}
            </a>
          ))}
          <StatusPill copy={copy} full className="my-3" />
          <LanguageSwitch copy={copy} locale={locale} className="mb-3 self-start" />
          <a
            href={PORTFOLIO_URL}
            className="flex items-center justify-center gap-[10px] rounded-lg border-[1.5px] border-ink px-[18px] py-[13px] text-[15px] font-medium text-ink no-underline"
          >
            {copy.portfolio} <Arrow />
          </a>
        </div>
      )}
    </header>
  );
}
