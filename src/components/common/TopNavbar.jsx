
import { Bell, Search, UserCircle } from "lucide-react";

function TopNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">

      {/* Left Section */}
      <div>
        <h1 className="text-xl font-semibold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          Welcome back to Nexus
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
          <Search size={20} />
        </button>

        <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
          <Bell size={20} />
        </button>

        <button className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white">
          <UserCircle size={24} />
        </button>

      </div>

    </header>
  );
}

export default TopNavbar;

