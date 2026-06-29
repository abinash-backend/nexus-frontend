import { LogOut, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function SidebarFooter() {
  return (
    <div className="mt-auto border-t border-slate-800 p-4">

      <div className="flex items-center gap-3">

        <UserCircle
          size={40}
          className="text-slate-400"
        />

        <div>
          <p className="font-medium text-white">
            Abinash
          </p>

          <p className="text-sm text-slate-400">
            Java Backend Developer
          </p>
        </div>

      </div>

      <Button
        variant="ghost"
        className="mt-4 w-full justify-start gap-2 text-slate-400 hover:bg-slate-800 hover:text-white"
      >
        <LogOut size={18} />
        Logout
      </Button>

    </div>
  );
}

export default SidebarFooter;