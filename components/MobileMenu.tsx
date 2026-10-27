"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/ui/Logo";
import { Arrow } from "@/components/ui/Icons";
import { PORTFOLIO_URL } from "@/lib/config";
import { navAnchors } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries/es";
import type { Locale } from "@/lib/i18n";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta";

/** Hojas dibujadas a línea, decoración de la esquina inferior derecha. */
function LeafLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 330"
      fill="none"
      stroke="#A9B3A3"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute bottom-0 right-[-24px] h-full max-h-[330px] w-auto"
    >
      <path d="M290 310C250 250 205 195 150 120" />
      <path d="M150 120C105 85 100 40 128 6c52 22 82 70 22 114Z" />
      <path d="M150 120C130 70 128 38 128 6M148 98c-14-14-24-30-28-46M141 78c14 0 24 8 30 20M158 112c18-6 30-18 34-34" />
      <path d="M232 218C180 205 105 205 22 262c60 22 160 30 210-44Z" />
      <path d="M232 218C170 226 100 238 22 262M200 224c-18 12-48 18-80 22M170 228c4 12 0 22-10 30" />
      <path d="M292 190c-32-8-34-52-16-86 30 24 42 62 16 86Z" />
    </svg>
  );
}

interface MobileMenuProps {
  copy: Dictionary["header"];
  logoAlt: string;
  locale: Locale;
}

/** Menú a pantalla completa para anchos menores de 1080px. */
export function MobileMenu({ copy, logoAlt, locale }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const openButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const close = () => {
    setOpen(false);
    openButton.current?.focus({ preventScroll: true });
  };

  const toggle = () => {
    if (open) return close();
    // Marca como activa la sección que se está viendo al abrir.
    let current = 0;
    let best = -Infinity;
    navAnchors.forEach((href, i) => {
      const top = document.querySelector(href)?.getBoundingClientRect().top;
      if (top !== undefined && top <= window.innerHeight * 0.4 && top > best) {
        best = top;
        current = i;
      }
    });
    setActive(current);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        openButton.current?.focus({ preventScroll: true });
      }
    };
    const mq = window.matchMedia("(min-width: 1080px)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <>
      <button
        ref={openButton}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={copy.openMenu}
        className={`grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-full border-[1.5px] border-ink bg-ivory/90 text-ink focus-visible:outline-offset-[3px] min-[1080px]:hidden ${focusRing}`}
      >
        <Menu size={20} strokeWidth={1.6} aria-hidden="true" />
      </button>

      {/* Portal al <body>: el header tiene una animación con transform y rompería el position: fixed. */}
      {open &&
        createPortal(
        <div
          id="menu-movil"
          role="dialog"
          aria-modal="true"
          aria-label={copy.navLabel}
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ivory motion-safe:animate-menu-in min-[1080px]:hidden"
        >
          <div className="relative flex items-center justify-between px-[clamp(20px,6vw,40px)] py-[18px]">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              aria-label={copy.homeLabel}
              className={`flex shrink-0 rounded-md focus-visible:outline-offset-4 ${focusRing}`}
            >
              <Logo variant="light" alt={logoAlt} className="h-[46px]" />
            </a>
            <button
              ref={closeButton}
              type="button"
              onClick={close}
              aria-label={copy.closeMenu}
              className={`grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-full border-[1.5px] border-ink text-ink transition-colors duration-200 hover:bg-ink hover:text-ivory focus-visible:outline-offset-[3px] ${focusRing}`}
            >
              <X size={20} strokeWidth={1.6} />
            </button>
          </div>

          <div className="relative mx-[clamp(20px,6vw,40px)] border-t border-ink/20" />

          <nav aria-label={copy.navLabel} className="relative mx-[clamp(20px,6vw,40px)] pt-8">
            <p className="text-[12px] font-medium tracking-[0.32em] text-forest">{copy.menuEyebrow}</p>
            <ul className="m-0 mt-5 list-none p-0">
              {navAnchors.map((href, i) => {
                const isActive = i === active;
                return (
                  <li key={href} className="border-b border-ink/15 motion-safe:animate-fade-up" style={{ animationDelay: `${80 + i * 80}ms` }}>
                    <a
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex items-center justify-between py-[clamp(18px,3.4vh,28px)] text-ink no-underline ${focusRing}`}
                    >
                      <span className="font-serif text-[clamp(34px,10.5vw,46px)] leading-none tracking-[-0.01em]">{copy.links[i]}</span>
                      <span className="flex items-center gap-5">
                        <span
                          className={`border-b pb-[3px] text-[15px] tabular-nums ${
                            isActive ? "border-terracotta text-terracotta" : "border-transparent text-paragraph"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight
                          size={26}
                          strokeWidth={1.3}
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="relative min-h-[120px] flex-1 overflow-hidden">
            <LeafLines />
          </div>

          <div className="relative mx-[clamp(20px,6vw,40px)] border-t border-ink/20 pb-[max(20px,env(safe-area-inset-bottom))] pt-6">
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[6px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-status-dot/25">
                <span className="relative h-[9px] w-[9px] rounded-full bg-status-dot" />
              </span>
              <p className="leading-[1.35]">
                <span className="block text-[17px] text-ink">{copy.status}</span>
                <span className="block text-[14px] text-paragraph">{copy.statusNote}</span>
              </p>
            </div>

            <p className="mt-5 text-[14px] text-paragraph">{copy.languageLabel}</p>
            <LanguageSwitch copy={copy} locale={locale} size="lg" className="mt-2" />

            <a
              href={PORTFOLIO_URL}
              className={`mt-5 flex items-center justify-center gap-3 rounded-lg border-[1.5px] border-ink/40 px-[18px] py-[15px] text-[16px] text-ink no-underline transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-ivory focus-visible:outline-offset-[3px] ${focusRing}`}
            >
              {copy.portfolio} <Arrow />
            </a>
          </div>
        </div>,
          document.body,
        )}
    </>
  );
}
