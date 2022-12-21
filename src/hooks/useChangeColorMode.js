import { useEffect, useState } from "react";

const initialState = "light";

export const useChangeColorMode = () => {
  const [theme, setTheme] = useState(() => {
    const localData = localStorage.getItem("colorMode");
    return localData ? JSON.parse(localData) : initialState;
  });
  const changeThemeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("colorMode", JSON.stringify(theme));
  }, [theme]);

  return {
    theme,
    changeThemeMode,
  };
};
