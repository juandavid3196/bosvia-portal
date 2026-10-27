import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconCircle } from "@/components/ui/IconCircle";
import { Reveal } from "@/components/ui/Reveal";
import { ReservationDetail } from "@/components/mockups/ReservationDetail";
import { product } from "@/lib/content";

export function ProductInside() {
  return (
    <section id="producto" aria-labelledby="prod-title" className="bg-ivory">
      <div className="mx-auto max-w-[1364px] px-[clamp(20px,4vw,52px)] pb-[clamp(56px,6vw,88px)] pt-[clamp(40px,5vw,72px)]">
        <Reveal>
          <Eyebrow>{product.eyebrow}</Eyebrow>
          <h2
            id="prod-title"
            className="mt-[22px] font-serif text-[clamp(38px,5vw,68px)] font-normal leading-[1.02] tracking-[-0.02em] text-ink [text-wrap:balance]"
          >
            {product.title[0]}
            <br />
            {product.title[1]}
          </h2>
          <p className="mt-[18px] text-[clamp(16px,1.5vw,20px)] leading-[1.5] text-paragraph [text-wrap:pretty]">
            {product.description}
          </p>
        </Reveal>

        <div className="mt-[clamp(32px,3.6vw,48px)] grid grid-cols-[minmax(0,1fr)] items-center gap-x-[clamp(28px,3vw,44px)] gap-y-10 min-[1100px]:grid-cols-[minmax(0,2.3fr)_minmax(0,1fr)]">
          <Reveal className="min-w-0">
            <ReservationDetail minScale={0.6} />
            <p className="mt-[10px] text-[12px] text-paragraph min-[1080px]:hidden">{product.scrollHint}</p>
          </Reveal>

          <ul className="m-0 flex list-none flex-col gap-[clamp(28px,3.4vw,48px)] py-1 pl-0 min-[1100px]:border-l min-[1100px]:border-line min-[1100px]:pl-9">
            {product.modules.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 110} className="group flex items-start gap-5">
                <IconCircle name={m.icon} size={60} iconSize={26} />
                <div className="pt-1">
                  <h3 className="font-serif text-[21px] font-normal leading-[1.2]">{m.title}</h3>
                  <p className="mt-[6px] text-[15px] leading-[1.5] text-paragraph">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
