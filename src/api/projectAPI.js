import api from "./axios";

export const getAllProjects = () => api.get("/api/projects");
export const getProjectById = (id) => api.get(`/api/projects/${id}`);
export const createProject = (data) => api.post("/api/projects", data);
export const updateProject = (id, data) => api.patch(`/api/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/api/projects/${id}`);
