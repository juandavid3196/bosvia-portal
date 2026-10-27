import { notFound } from "next/navigation";
import { Benefits } from "@/components/Benefits";
import { ClosingFooter } from "@/components/ClosingFooter";
import { ConnectedExperience } from "@/components/ConnectedExperience";
import { FromIdea } from "@/components/FromIdea";
import { Hero } from "@/components/Hero";
import { Personalization } from "@/components/Personalization";
import { ProductInside } from "@/components/ProductInside";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <ScrollProgress />
      <SiteHeader copy={t.header} logoAlt={t.ui.logoAlt} locale={lang} />
      <main id="top">
        <Hero t={t} />
        <Benefits t={t} />
        <ConnectedExperience t={t} />
        <ProductInside t={t} />
        <Personalization t={t} />
        <FromIdea t={t} />
      </main>
      <ClosingFooter t={t} />
    </>
  );
}
