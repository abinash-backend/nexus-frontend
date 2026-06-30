import { LogOut, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";

function SidebarFooter() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  return (
    <div className="mt-auto border-t border-slate-800 p-4">
      <div className="flex items-center gap-3">
        <UserCircle size={40} className="text-slate-400" />

        <div>
          <p className="font-medium text-white">Abinash</p>

          <p className="text-sm text-slate-400">
            Java Backend Developer
          </p>
        </div>
      </div>

      <Button
        variant="ghost"
        className="mt-4 w-full justify-start gap-2 text-slate-400 hover:bg-slate-800 hover:text-white"
        onClick={async () => {
          await logout();
          navigate("/", { replace: true });
        }}
      >
        <LogOut size={18} />
        Logout
      </Button>
    </div>
  );
}

export default SidebarFooter;