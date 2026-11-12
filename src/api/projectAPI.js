import api from "./axios";

export const getAllProjects = () => api.get("/api/projects");
export const getProjectById = (id) => api.get(`/api/projects/${id}`);
export const createProject = (data) => api.post("/api/projects", data);
export const uploadProjectImage = (id, formData) =>
  api.post(`/api/projects/${id}/images`, formData);
export const updateProject = (id, data) => api.patch(`/api/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/api/projects/${id}`);
export const updateProjectImage = (id, imageId, formData) =>
  api.patch(`/api/projects/${id}/images/${imageId}`, formData);
export const deleteProjectImage = (id, imageId) =>
  api.delete(`/api/projects/${id}/images/${imageId}`);
export const updateProjectNote = (id, noteId, content) =>
  api.patch(`/api/projects/${id}/notes/${noteId}`, { content });
export const deleteProjectNote = (id, noteId) => api.delete(`/api/projects/${id}/notes/${noteId}`);
