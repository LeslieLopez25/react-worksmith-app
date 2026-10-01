import { useState, useEffect } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const ThemeController = ({ iconSize = 25, compact = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "worksmithDark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "worksmithDark" : "worksmithLight";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <label className={`flex cursor-pointer items-center ${compact ? "gap-1" : "gap-2"}`}>
      <FaRegSun size={iconSize} color={isDarkMode ? "#93C5FD" : "#2563EB"} />
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        className="theme-controller toggle toggle-sm"
      />
      <FaRegMoon size={iconSize} color={isDarkMode ? "#DBEAFE" : "#93C5FD"} />
    </label>
  );
};

export default ThemeController;
