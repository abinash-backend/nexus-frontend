import SidebarBrand from "./SidebarBrand";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
  <aside className="flex h-dvh w-64 flex-col border-r border-slate-800 bg-slate-950">
      <SidebarBrand />

     <div className="flex-1 overflow-y-auto">
  <SidebarNavigation />
</div>

      <SidebarFooter />

    </aside>
  );
}

export default Sidebar;