import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

  // TODO: Replace with real authentication logic
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;