import api from "./axios.js";

export const updateTheme = (theme) => api.patch("/api/users/profile/theme", { theme });
