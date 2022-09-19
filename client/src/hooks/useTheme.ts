import { useState, useCallback } from "react";

const useTheme = () => {
  const getLocalStorageData = localStorage.getItem("theme");
  const initTheme = getLocalStorageData ? getLocalStorageData : "light";

  const [themeMode, setThemeMode] = useState<string>(initTheme);

  const onSetTheme = useCallback(() => {
    if (themeMode === "light") {
      setThemeMode("dark");
      localStorage.setItem("theme", "dark");
    }

    if (themeMode === "dark") {
      setThemeMode("light");
      localStorage.setItem("theme", "light");
    }
  }, [themeMode]);

  return { themeMode, onSetTheme };
};

export default useTheme;
