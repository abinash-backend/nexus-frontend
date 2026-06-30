import { createContext, useContext, useEffect, useState } from "react";

import { authService } from "@/services/authService";
import { tokenStorage } from "@/utils/tokenStorage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(tokenStorage.hasToken());
  }, []);

  async function login(credentials) {
    const { accessToken } = await authService.login(credentials);

    tokenStorage.setToken(accessToken);

    setIsAuthenticated(true);
  }

  function logout() {
    tokenStorage.removeToken();

    authService.logout();

    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}