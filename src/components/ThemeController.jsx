import { useState, useEffect } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const ThemeController = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "worksmithDark" : "worksmithLight"
    );
  }, [isDarkMode]);

  return (
    <label className="flex cursor-pointer gap-2">
      <FaRegSun size={25} color={isDarkMode ? "#93C5FD" : "#2563EB"} />
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        className="theme-controller toggle"
      />
      <FaRegMoon size={25} color={isDarkMode ? "#DBEAFE" : "#93C5FD"} />
    </label>
  );
};

export default ThemeController;
