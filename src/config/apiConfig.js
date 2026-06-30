export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,

  ENDPOINTS: {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
  },

  TIMEOUT: 10000,
};