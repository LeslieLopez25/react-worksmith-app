import { useState, useEffect } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { applyTheme, THEMES } from "../utils/theme.js";
import { useAuth } from "../hooks/useAuth.js";
import { updateTheme } from "../api/userAPI.js";

const ThemeController = ({ iconSize = 25, compact = false }) => {
  const { user, updateUser } = useAuth();
  const [localTheme, setLocalTheme] = useState(() => localStorage.getItem("theme") || THEMES.light);

  const theme = user?.theme || localTheme;
  const isDarkMode = theme === THEMES.dark;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const handleToggle = async () => {
    const next = isDarkMode ? THEMES.light : THEMES.dark;
    setLocalTheme(next);
    if (!user) return;

    updateUser({ theme: next });
    try {
      await updateTheme(next);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <label className={`flex cursor-pointer items-center ${compact ? "gap-1" : "gap-2"}`}>
      <FaRegSun size={iconSize} color={isDarkMode ? "#93C5FD" : "#2563EB"} />
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
        className="theme-controller toggle toggle-sm"
      />
      <FaRegMoon size={iconSize} color={isDarkMode ? "#DBEAFE" : "#93C5FD"} />
    </label>
  );
};

export default ThemeController;
