export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,

  ENDPOINTS: {
    AUTH: {
      LOGIN: "/api/v1/auth/login",
      REGISTER: "/api/v1/auth/register",
      LOGOUT: "/api/v1/auth/logout",
      REFRESH: "/api/v1/auth/refresh",
    },

    TASKS: {
      BASE: "/api/v1/tasks",

      CREATE: "/api/v1/tasks",
      GET_ALL: "/api/v1/tasks",
      GET_BY_ID: (taskId) => `/api/v1/tasks/${taskId}`,
      UPDATE: (taskId) => `/api/v1/tasks/${taskId}`,
      ARCHIVE: (taskId) => `/api/v1/tasks/${taskId}/archive`,
    },
  },

  TIMEOUT: 10000,
};