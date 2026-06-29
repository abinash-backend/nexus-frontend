import { Outlet } from "react-router-dom";
import Brand from "@/components/common/Brand";

function AuthLayout() {
  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-8
        md:py-12
      "
    >
      <Brand />

      <div className="mt-12 w-full max-w-md">
        <Outlet />
      </div>

      <footer className="mt-10 text-xs text-slate-500">
        © 2026 Nexus. All rights reserved.
      </footer>
    </main>
  );
}

export default AuthLayout;