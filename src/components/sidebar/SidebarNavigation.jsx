import {
  LayoutDashboard,
  Workflow,
  ChartColumn,
  Trophy,
  User,
  Settings,
} from "lucide-react";

import SidebarNavItem from "./SidebarNavItem";

function SidebarNavigation() {
  return (
    <nav className="flex-1 space-y-2 p-4">

      <SidebarNavItem
        to="/dashboard"
        icon={LayoutDashboard}
        label="Dashboard"
      />

      <SidebarNavItem
        to="/workflows"
        icon={Workflow}
        label="Workflows"
      />

      <SidebarNavItem
        to="/analytics"
        icon={ChartColumn}
        label="Analytics"
      />

      <SidebarNavItem
        to="/leaderboard"
        icon={Trophy}
        label="Leaderboard"
      />

      <SidebarNavItem
        to="/profile"
        icon={User}
        label="Profile"
      />

      <SidebarNavItem
        to="/settings"
        icon={Settings}
        label="Settings"
      />

    </nav>
  );
}

export default SidebarNavigation;