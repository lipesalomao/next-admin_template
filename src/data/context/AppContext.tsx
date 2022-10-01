import { createContext } from "react";

interface IAppContextProps {
  theme?: string;
  themeToggle?: () => void;
}

const AppContext = createContext<IAppContextProps>({});

export function AppProvider({ children }: any) {
  function themeToggle() {
    console.log("themeToggle");
  }

  return (
    <AppContext.Provider
      value={{
        theme: "dark",
        themeToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
