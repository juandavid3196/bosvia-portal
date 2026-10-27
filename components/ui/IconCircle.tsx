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
      className={`grid shrink-0 place-items-center rounded-full text-forest ${tone === "sage" ? "bg-sage" : "bg-sage-soft"}`}
      style={{ width: size, height: size }}
    >
      <Icon name={name} size={iconSize} />
    </span>
  );
}
