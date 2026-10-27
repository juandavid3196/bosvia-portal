import { FitCanvas } from "@/components/ui/FitCanvas";
import { Reveal } from "@/components/ui/Reveal";
import { PropertyPreview } from "@/components/mockups/PropertyPreview";
import { personalization } from "@/lib/content";

export function Personalization() {
  const [l1, l2, l3, l4] = personalization.title;
  return (
    <section aria-labelledby="pers-title" className="overflow-hidden bg-sage-bg">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[minmax(0,1fr)] items-center gap-x-[clamp(32px,4vw,64px)] gap-y-12 px-[clamp(20px,4vw,52px)] py-[clamp(56px,6vw,88px)] min-[900px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <Reveal>
          <h2
            id="pers-title"
            className="font-serif text-[clamp(34px,3.5vw,50px)] font-normal leading-[1.04] tracking-[-0.02em] text-ink"
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
              <li key={s.name} title={s.name} className="relative h-11 w-11 rounded-full" style={{ background: s.color }}>
                <span className="sr-only">{s.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="min-w-0">
          <FitCanvas baseWidth={780} baseHeight={380} max={1.05} label={personalization.mockupLabel} className="font-sans">
            <PropertyPreview
              variant="roble"
              className="w-[400px] shadow-[0_24px_40px_-20px_rgba(9,37,36,0.45)]"
              style={{ left: 382, top: 34, transform: "rotate(2.5deg)" }}
            />
            <PropertyPreview
              variant="niebla"
              className="w-[395px] shadow-[0_30px_50px_-20px_rgba(9,37,36,0.5)]"
              style={{ left: 0, top: 10, transform: "rotate(-1.5deg)" }}
            />
          </FitCanvas>
        </Reveal>
      </div>
    </section>
  );
}
