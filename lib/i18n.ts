import { en } from "@/lib/dictionaries/en";
import { es, type Dictionary } from "@/lib/dictionaries/es";

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
/** El español es el idioma principal y se sirve en la raíz (/). */
export const defaultLocale: Locale = "es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Ruta pública de cada idioma: español en "/", resto en "/<idioma>". */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

/** Sustituye {clave} en una plantilla de texto. */
export function format(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ""));
}
