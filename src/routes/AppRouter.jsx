import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

import ProtectedRoute from "@/routes/ProtectedRoute";

// Authentication
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

// Dashboard
import Dashboard from "@/pages/dashboard/Dashboard";

// Workflows
import Workflows from "@/pages/workflows/Workflows";
import CreateWorkflow from "@/pages/workflows/CreateWorkflow";
import EditWorkflow from "@/pages/workflows/EditWorkflow";
import WorkflowDetails from "@/pages/workflows/WorkflowDetails";

// Executions
import ExecuteWorkflow from "@/pages/executions/ExecuteWorkflow";
import ExecutionResult from "@/pages/executions/ExecutionResult";

// Analytics
import Analytics from "@/pages/analytics/Analytics";

// Profile
import Profile from "@/pages/profile/Profile";

// Settings
import Settings from "@/pages/settings/Settings";

// Leaderboard
import Leaderboard from "@/pages/leaderboard/Leaderboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>

          {/* Dashboard Layout */}
          <Route element={<DashboardLayout />}>

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Workflows */}
            <Route
              path="/workflows"
              element={<Workflows />}
            />

            <Route
              path="/workflows/create"
              element={<CreateWorkflow />}
            />

            <Route
              path="/workflows/:workflowId"
              element={<WorkflowDetails />}
            />

            <Route
              path="/workflows/:workflowId/edit"
              element={<EditWorkflow />}
            />

            {/* Executions */}
            <Route
              path="/workflows/:workflowId/execute"
              element={<ExecuteWorkflow />}
            />

            <Route
              path="/executions/:executionId"
              element={<ExecutionResult />}
            />

            {/* Analytics */}
            <Route
              path="/analytics"
              element={<Analytics />}
            />

            {/* Leaderboard */}
            <Route
              path="/leaderboard"
              element={<Leaderboard />}
            />

            {/* Profile */}
            <Route
              path="/profile"
              element={<Profile />}
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;