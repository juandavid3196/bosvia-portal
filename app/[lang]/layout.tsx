import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, locales, localePath } from "@/lib/i18n";
import "../globals.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: Object.fromEntries(locales.map((l) => [l, localePath(l)])),
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory font-sans text-ink">{children}</body>
    </html>
  );
}
