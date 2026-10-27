import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section aria-label="Beneficios" className="border-b border-line-soft bg-ivory">
      <Reveal className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-0 gap-y-7 px-[clamp(20px,4vw,52px)] py-[clamp(28px,3.4vw,44px)]">
        {benefits.map((b, i) => (
          <div
            key={b.title}
            className={`flex items-center gap-5 py-1 min-[860px]:border-line ${
              i === 0
                ? "pr-[clamp(16px,2.4vw,36px)]"
                : i === benefits.length - 1
                  ? "pl-[clamp(16px,2.4vw,36px)] min-[860px]:border-l"
                  : "px-[clamp(16px,2.4vw,36px)] min-[860px]:border-l"
            }`}
          >
            <IconCircle name={b.icon} size={76} iconSize={32} tone="sage" />
            <div>
              <h3 className="whitespace-nowrap font-serif text-[clamp(21px,1.6vw,23px)] font-normal leading-[1.15]">{b.title}</h3>
              <p className="mt-2 max-w-[24ch] text-[15px] leading-[1.5] text-paragraph">{b.text}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
