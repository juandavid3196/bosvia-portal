import { Benefits } from "@/components/Benefits";
import { ClosingFooter } from "@/components/ClosingFooter";
import { ConnectedExperience } from "@/components/ConnectedExperience";
import { FromIdea } from "@/components/FromIdea";
import { Hero } from "@/components/Hero";
import { Personalization } from "@/components/Personalization";
import { ProductInside } from "@/components/ProductInside";
import { SiteHeader } from "@/components/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <Hero />
        <Benefits />
        <ConnectedExperience />
        <ProductInside />
        <Personalization />
        <FromIdea />
      </main>
      <ClosingFooter />
    </>
  );
}
