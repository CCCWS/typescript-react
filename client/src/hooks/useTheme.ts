import { useState } from "react";

const useTheme = () => {
  const getLocalStorageData = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : "light";

  const [themeMode, setThemeMode] = useState<string>(getLocalStorageData!);

  const onSetTheme = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
      localStorage.setItem("theme", "dark");
    }

    if (themeMode === "dark") {
      setThemeMode("light");
      localStorage.setItem("theme", "light");
    }
  };

  return { themeMode, onSetTheme };
};

export default useTheme;
