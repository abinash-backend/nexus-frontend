import { Outlet } from "react-router-dom";
import Brand from "@/components/common/Brand";

function AuthLayout() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-4">

      <Brand />

      <div className="mt-10 w-full max-w-md">
        <Outlet />
      </div>

       <footer className="mt-8 text-sm text-slate-500">
        © 2026 Nexus. All rights reserved.
      </footer>

    </main>
  );
}

export default AuthLayout;