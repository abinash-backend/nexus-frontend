import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;