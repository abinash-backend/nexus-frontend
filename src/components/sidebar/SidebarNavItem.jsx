import { NavLink } from "react-router-dom";

function SidebarNavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
          isActive
            ? "bg-slate-800 text-white"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
        }`
      }
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarNavItem;