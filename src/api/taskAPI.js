import api from "./axios.js";

export const getTasksByProject = (projectId) => api.get(`/api/tasks/project/${projectId}`);
export const createTask = (projectId, data) => api.post(`/api/tasks/project/${projectId}`, data);
export const updateTask = (taskId, data) => api.patch(`/api/tasks/${taskId}`, data);
export const deleteTask = (taskId) => api.delete(`/api/tasks/${taskId}`);
