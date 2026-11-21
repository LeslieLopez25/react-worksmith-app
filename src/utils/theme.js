export const THEMES = {
  light: "worksmithLight",
  dark: "worksmithDark",
};

export const applyTheme = (theme) => {
  if (!Object.values(THEMES).includes(theme)) return;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
