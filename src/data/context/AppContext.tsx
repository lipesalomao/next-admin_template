import { createContext, useEffect, useState } from "react";

interface IAppContextProps {
  theme?: string;
  themeToggle?: () => void;
}

const AppContext = createContext<IAppContextProps>({});

export function AppProvider({ children }: any) {
  const [theme, setTheme] = useState("dark");

  function themeToggle() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    const storagedTheme = localStorage.getItem("theme")
    if (storagedTheme) {
      setTheme(storagedTheme)
    }
  }, []);
  
  return (
    <AppContext.Provider
      value={{
        theme,
        themeToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
