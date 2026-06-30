import api from "@/services/api";
import { API_CONFIG } from "@/config/apiConfig";

export const authService = {
  async login(credentials) {
    const response = await api.post(
      API_CONFIG.ENDPOINTS.LOGIN,
      credentials
    );

    return response.data;
  },

  async register(user) {
    const response = await api.post(
      API_CONFIG.ENDPOINTS.REGISTER,
      user
    );

    return response.data;
  },

 async logout(refreshToken) {
  const response = await api.post(
    API_CONFIG.ENDPOINTS.LOGOUT,
    refreshToken
  );

  return response.data;
}
};