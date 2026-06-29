import { Outlet } from "react-router-dom";

import Sidebar from "@/components/common/Sidebar";
import TopNavbar from "@/components/common/TopNavbar";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-950">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">

        <TopNavbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;