import SidebarBrand from "./SidebarBrand";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFooter from "./SidebarFooter";

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      <SidebarBrand />

      <SidebarNavigation />

      <SidebarFooter />

    </aside>
  );
}

export default Sidebar;