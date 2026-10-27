import { Icon } from "@/components/ui/Icons";
import type { IconName } from "@/lib/content";

interface IconCircleProps {
  name: IconName;
  /** Diámetro del círculo en px. */
  size: number;
  iconSize: number;
  tone?: "sage" | "soft";
}

export function IconCircle({ name, size, iconSize, tone = "soft" }: IconCircleProps) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full text-forest transition duration-300 ease-reveal group-hover:scale-110 group-hover:shadow-[0_8px_18px_-10px_rgba(16,60,52,0.5)] ${tone === "sage" ? "bg-sage" : "bg-sage-soft"}`}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={iconSize} />
    </span>
  );
}
