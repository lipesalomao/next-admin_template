import { createContext, useState } from "react";

interface IAppContextProps {
  theme?: string;
  themeToggle?: () => void;
}

const AppContext = createContext<IAppContextProps>({});

export function AppProvider({ children }: any) {
  const [theme, setTheme] = useState("dark");

  function themeToggle() {
    setTheme(theme === "" ? "dark" : "");
  }

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
