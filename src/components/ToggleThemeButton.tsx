import { Moon, Sun } from "./icons";

interface IToggleThemeButtonProps {
  theme: string;
  themeToggle: () => void;
}

export const ToggleThemeButton = (props: IToggleThemeButtonProps) => {
  return props.theme === "dark" ? (
    <div
      onClick={props.themeToggle}
      className={`
        hidden sm:flex items-center justify-start cursor-pointer
        bg-gradient-to-r from-yellow-300 to-yellow-600
        w-14 lg:w-24 h-7 p-1 rounded-full
        gap-2
        transition-all duration-300
        `}
    >
      <div
        className={`
            flex items-center justify-center
            bg-white text-yellow-800 w-7 h-7
            rounded-full
            `}
      >
        {Sun(5)}
      </div>
      <div
        className={`
          hidden lg:flex items-center justify-center
          text-yellow-800
      `}
      >
        <span className="text-sm">Claro</span>
      </div>
    </div>
  ) : (
    <div
      onClick={props.themeToggle}
      className={`
      hidden sm:flex items-center justify-end cursor-pointer
        bg-gradient-to-r from-blue-500 to-blue-900
        w-14 lg:w-24 h-7 p-1 rounded-full
        gap-2
        transition-all duration-300
            `}
    >
      <div
        className={`
          hidden lg:flex items-center justify-center
          text-gray-300
      `}
      >
        <span className="text-sm">Escuro</span>
      </div>
      <div
        className={`
            flex items-center justify-center
            bg-black text-yellow-300 w-7 h-7
            rounded-full
            `}
      >
        {Moon(5)}
      </div>
    </div>
  );
};
