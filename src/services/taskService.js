import api from "@/services/api";
import { API_CONFIG } from "@/config/apiConfig";

const TASK_ENDPOINTS = API_CONFIG.ENDPOINTS.TASKS;

const taskService = {
  /**
   * Get all tasks for the authenticated user.
   */
  async getTasks() {
    const response = await api.get(TASK_ENDPOINTS.GET_ALL);
    return response.data;
  },

  /**
   * Get a single task by ID.
   * @param {string} taskId
   */
  async getTask(taskId) {
    const response = await api.get(
      TASK_ENDPOINTS.GET_BY_ID(taskId)
    );
    return response.data;
  },

  /**
   * Create a new task.
   * @param {Object} taskData
   */
  async createTask(taskData) {
    const response = await api.post(
      TASK_ENDPOINTS.CREATE,
      taskData
    );
    return response.data;
  },

  /**
   * Update an existing task.
   * @param {string} taskId
   * @param {Object} taskData
   */
  async updateTask(taskId, taskData) {
    const response = await api.put(
      TASK_ENDPOINTS.UPDATE(taskId),
      taskData
    );
    return response.data;
  },

  /**
   * Archive a task.
   * @param {string} taskId
   */
  async archiveTask(taskId) {
    const response = await api.patch(
      TASK_ENDPOINTS.ARCHIVE(taskId)
    );
    return response.data;
  },
};

export default taskService;