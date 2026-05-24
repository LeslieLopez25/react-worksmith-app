import { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";

const ThemeController = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <label className="flex cursor-pointer gap-2">
      <FaRegSun size={25} color={isDarkMode ? "gray" : "white"} />
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={() => setIsDarkMode(!isDarkMode)}
        className="theme-controller toggle"
      />
      <FaRegMoon size={25} color={isDarkMode ? "white" : "gray"} />
    </label>
  );
};

export default ThemeController;
