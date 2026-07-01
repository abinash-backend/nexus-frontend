import api from "@/services/api";
import { API_CONFIG } from "@/config/apiConfig";

const AUTH_ENDPOINTS = API_CONFIG.ENDPOINTS.AUTH;

export const authService = {
  async login(credentials) {
    const response = await api.post(
      AUTH_ENDPOINTS.LOGIN,
      credentials
    );

    return response.data;
  },

  async register(user) {
    const response = await api.post(
      AUTH_ENDPOINTS.REGISTER,
      user
    );

    return response.data;
  },

  async logout(refreshToken) {
    const response = await api.post(
      AUTH_ENDPOINTS.LOGOUT,
      refreshToken
    );

    return response.data;
  },

  async refresh(refreshToken) {
    const response = await api.post(
      AUTH_ENDPOINTS.REFRESH,
      refreshToken
    );

    return response.data;
  },
};