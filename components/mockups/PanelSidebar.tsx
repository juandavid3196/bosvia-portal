import { Logo } from "@/components/ui/Logo";
import { navIcons } from "@/components/mockups/Dashboard";
import { dashboardNav } from "@/lib/content";

/** Barra lateral compacta del panel (lienzo de 1000px). */
export function PanelSidebar({ active = "Inicio" }: { active?: (typeof dashboardNav)[number] }) {
  return (
    <aside className="flex w-[124px] shrink-0 flex-col gap-5 bg-forest px-2 py-[18px]">
      <Logo variant="dark" className="ml-1 h-[34px] self-start" />
      <nav className="flex flex-col gap-[3px] text-[10.5px] text-[#DCE5DD]">
        {dashboardNav.map((item) => {
          const NavIcon = navIcons[item];
          return (
            <div
              key={item}
              className={`flex items-center gap-2 rounded-md px-2 py-2 ${item === active ? "bg-white/10 text-white" : ""}`}
            >
              <NavIcon size={13} strokeWidth={1.8} />
              {item}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
