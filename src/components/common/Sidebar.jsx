import { NavLink } from "react-router-dom";
import Brand from "@/components/common/Brand";

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 p-6">
        <Brand />
      </div>

      <nav className="flex-1 space-y-2 p-4">

        <NavLink to="/dashboard">
          Dashboard
        </NavLink>

        <NavLink to="/workflows">
          Workflows
        </NavLink>

        <NavLink to="/analytics">
          Analytics
        </NavLink>

        <NavLink to="/leaderboard">
          Leaderboard
        </NavLink>

        <NavLink to="/profile">
          Profile
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;