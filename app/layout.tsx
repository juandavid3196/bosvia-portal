import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Inter({ weight: ["400", "500", "600"], subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Bosvia · Reservas y operación en naturaleza",
  description:
    "Bosvia es una plataforma en construcción para conectar reservas, huéspedes y operación en glampings, ecohoteles y pequeños alojamientos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory font-sans text-ink">{children}</body>
    </html>
  );
}
