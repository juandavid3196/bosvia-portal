import type { CSSProperties } from "react";
import { FitCanvas } from "@/components/ui/FitCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyPreview } from "@/components/mockups/PropertyPreview";
import { personalization } from "@/lib/content";

export function Personalization() {
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
          <ul aria-label="Paleta de ejemplo" className="m-0 mt-8 flex list-none flex-wrap gap-4 p-0">
            {personalization.swatches.map((s) => (
              <li
                key={s.name}
                title={s.name}
                className="relative h-11 w-11 rounded-full transition duration-300 ease-reveal hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_18px_-8px_rgba(9,37,36,0.5)]"
                style={{ background: s.color }}
              >
                <span className="sr-only">{s.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="min-w-0 min-[900px]:w-[109.5%]">
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
        </Reveal>
      </div>
    </section>
  );
}
