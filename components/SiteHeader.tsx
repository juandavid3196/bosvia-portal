"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Arrow } from "@/components/ui/Icons";
import { PORTFOLIO_URL } from "@/lib/config";
import { navLinks } from "@/lib/content";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta";

function StatusPill({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-[9px] whitespace-nowrap text-[13px] text-forest ${className}`}>
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-status-dot" />
      Producto en desarrollo
    </span>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 motion-safe:animate-fade-down">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-[clamp(20px,4vw,52px)] py-[18px]">
        <a
          href="#top"
          aria-label="Bosvia, inicio"
          className={`flex rounded-md focus-visible:outline-offset-4 ${focusRing}`}
        >
          <Logo variant="light" alt="bosvia" className="h-[clamp(40px,4.4vw,58px)]" />
        </a>

        <nav
          aria-label="Principal"
          className="ml-[clamp(24px,3vw,44px)] mr-auto hidden gap-[clamp(20px,3vw,40px)] text-[14px] min-[1080px]:flex"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative whitespace-nowrap py-[6px] text-ink no-underline after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-terracotta after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-offset-4 ${focusRing}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-[clamp(14px,2.4vw,32px)] min-[1080px]:flex">
          <StatusPill className="rounded-full bg-sage/85 px-4 py-2" />
          <Button href={PORTFOLIO_URL} variant="outline" arrow className="gap-3">
            Volver al portafolio
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="menu-movil"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          className={`grid h-[46px] w-[46px] cursor-pointer place-items-center rounded-[10px] border-[1.5px] border-ink bg-ivory/90 text-ink focus-visible:outline-offset-[3px] min-[1080px]:hidden ${focusRing}`}
        >
          {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
        </button>
      </div>

      {menuOpen && (
        <div
          id="menu-movil"
          className="mx-4 flex flex-col gap-1 rounded-[14px] motion-safe:animate-menu-in border border-line bg-ivory p-5 shadow-[0_20px_40px_-20px_rgba(9,37,36,0.35)] min-[1080px]:hidden"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 font-serif text-[26px] text-ink no-underline"
            >
              {l.label}
            </a>
          ))}
          <StatusPill className="my-3" />
          <a
            href={PORTFOLIO_URL}
            className="flex items-center justify-center gap-[10px] rounded-lg border-[1.5px] border-ink px-[18px] py-[13px] text-[15px] font-medium text-ink no-underline"
          >
            Volver al portafolio <Arrow />
          </a>
        </div>
      )}
    </header>
  );
}
