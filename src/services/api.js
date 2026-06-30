import axios from "axios";

import { API_CONFIG } from "@/config/apiConfig";
import { tokenStorage } from "@/utils/tokenStorage";

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 * Automatically attaches JWT to every authenticated request.
 */
api.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken();

    const publicEndpoints = [
      API_CONFIG.ENDPOINTS.LOGIN,
      API_CONFIG.ENDPOINTS.REGISTER,
    ];

    const isPublicEndpoint = publicEndpoints.some((endpoint) =>
      config.url?.startsWith(endpoint)
    );

    if (token && !isPublicEndpoint) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Response Interceptor
 * Central place to handle API errors.
 */
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default api;