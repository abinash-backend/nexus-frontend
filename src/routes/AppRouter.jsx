import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

import Dashboard from "@/pages/dashboard/Dashboard";
import Workflows from "@/pages/workflows/Workflows";

import CreateWorkflow from "@/pages/workflows/CreateWorkflow";
import EditWorkflow from "@/pages/workflows/EditWorkflow";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Application Routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/workflows/create" element={<CreateWorkflow />} />
          <Route path="/workflows/:workflowId/edit" element={<EditWorkflow />}
/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;