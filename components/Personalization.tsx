import type { CSSProperties } from "react";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyPreview } from "@/components/mockups/PropertyPreview";
import { personalizationSwatches } from "@/lib/content";
import type { Dictionary } from "@/lib/dictionaries/es";

export function Personalization({ t }: { t: Dictionary }) {
  const personalization = t.personalization;
  const [l1, l2, l3, l4] = personalization.title;
  return (
    <section aria-labelledby="pers-title" className="overflow-hidden bg-sage-bg">
      <div className="mx-auto grid max-w-[1364px] grid-cols-[minmax(0,1fr)] items-center gap-x-[clamp(28px,3vw,44px)] gap-y-12 px-[clamp(20px,4vw,52px)] py-[clamp(56px,6vw,88px)] min-[900px]:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)]">
        <Reveal>
          <h2
            id="pers-title"
            className="font-serif text-[clamp(34px,3.1vw,44px)] font-normal leading-[1.04] tracking-[-0.02em] text-ink"
          >
            {l1}
            <br />
            {l2}
            <br />
            {l3}
            <br />
            {l4}
          </h2>
          <p className="mt-5 max-w-[30ch] text-[clamp(16px,1.5vw,19px)] leading-[1.5] text-paragraph">
            {personalization.description}
          </p>
          <ul aria-label={personalization.paletteLabel} className="m-0 mt-8 flex list-none flex-wrap gap-4 p-0">
            {personalizationSwatches.map((color, i) => (
              <li
                key={color}
                title={personalization.swatchNames[i]}
                className="relative h-11 w-11 rounded-full transition duration-300 ease-reveal hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_18px_-8px_rgba(9,37,36,0.5)]"
                style={{ background: color }}
              >
                <span className="sr-only">{personalization.swatchNames[i]}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="min-w-0 min-[1440px]:w-[109.5%]">
          {/* Móvil: fichas apiladas a ancho casi completo; desde 640px, el lienzo escalado. */}
          <div role="img" aria-label={personalization.mockupLabel} className="flex flex-col min-[640px]:hidden">
            <PropertyPreview
              variant="niebla"
              flow
              className="w-[92%] shadow-[0_30px_50px_-20px_rgba(9,37,36,0.5)]"
              style={{ "--ry": "-9deg" } as CSSProperties}
            />
            <PropertyPreview
              variant="roble"
              flow
              className="-mt-2 ml-auto w-[92%] shadow-[0_24px_40px_-20px_rgba(9,37,36,0.45)]"
              style={{ "--ry": "-9deg" } as CSSProperties}
            />
          </div>
          <div className="hidden min-[640px]:block">
          <FitCanvas baseWidth={760} baseHeight={360} max={1.4} label={personalization.mockupLabel} className="font-sans">
            {/* Fichas en perspectiva, una tras otra (efecto dominó): Cabaña Roble va detrás. */}
            <PropertyPreview
              variant="roble"
              className="w-[360px] shadow-[0_24px_40px_-20px_rgba(9,37,36,0.45)]"
              style={{ left: 390, top: 36, "--ry": "-9deg" } as CSSProperties}
            />
            <PropertyPreview
              variant="niebla"
              className="w-[396px] shadow-[0_30px_50px_-20px_rgba(9,37,36,0.5)]"
              style={{ left: 16, top: 16, "--ry": "-9deg" } as CSSProperties}
            />
          </FitCanvas>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
