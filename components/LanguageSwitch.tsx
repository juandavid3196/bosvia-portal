import Link from "next/link";
import type { Dictionary } from "@/lib/dictionaries/es";
import { locales, localePath, type Locale } from "@/lib/i18n";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-terracotta";

interface LanguageSwitchProps {
  copy: Dictionary["header"];
  locale: Locale;
  size?: "sm" | "lg";
  className?: string;
}

/** Selector de idioma: cada opción es un enlace real a la versión correspondiente. */
export function LanguageSwitch({ copy, locale, size = "sm", className = "" }: LanguageSwitchProps) {
  const sizing = size === "lg" ? "text-[16px] p-1" : "text-[12px] p-[3px]";
  const option = size === "lg" ? "px-[22px] py-[9px]" : "px-[10px] py-[4px]";

  return (
    <div
      role="group"
      aria-label={copy.languageLabel}
      className={`inline-flex items-center rounded-full border border-ink/25 font-medium ${sizing} ${className}`}
    >
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
            className={`rounded-full uppercase tracking-wide no-underline transition-colors duration-200 ${option} ${focusRing} ${
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
