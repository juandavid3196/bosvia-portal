import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Leaf,
  Palette,
  Settings,
  SquareCheck,
  Users,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/lib/content";

const icons = {
  calendar: CalendarDays,
  users: Users,
  leaf: Leaf,
  "square-check": SquareCheck,
  "bar-chart": BarChart3,
  palette: Palette,
  settings: Settings,
} as const;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = icons[name];
  return <Cmp strokeWidth={1.4} aria-hidden="true" {...props} />;
}

export function Arrow({ size = 16 }: { size?: number }) {
  return <ArrowRight size={size} strokeWidth={1.8} aria-hidden="true" />;
}
