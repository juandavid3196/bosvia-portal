import { Logo } from "@/components/ui/Logo";
import { navIcons } from "@/components/mockups/panel-parts";
import { panelNavKeys, type PanelNavKey } from "@/lib/content";

interface PanelSidebarProps {
  labels: Record<PanelNavKey, string>;
  logoAlt: string;
  active?: PanelNavKey;
}

/** Barra lateral compacta del panel (lienzo de 1000px). */
export function PanelSidebar({ labels, logoAlt, active = "home" }: PanelSidebarProps) {
  return (
    <aside className="flex w-[124px] shrink-0 flex-col gap-5 bg-forest px-2 py-[18px]">
      <Logo variant="dark" alt={logoAlt} className="ml-1 h-[34px] self-start" />
      <nav className="flex flex-col gap-[3px] text-[10.5px] text-[#DCE5DD]">
        {panelNavKeys.map((key) => {
          const NavIcon = navIcons[key];
          return (
            <div
              key={key}
              className={`flex items-center gap-2 rounded-md px-2 py-2 ${key === active ? "bg-white/10 text-white" : ""}`}
            >
              <NavIcon size={13} strokeWidth={1.8} />
              {labels[key]}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
