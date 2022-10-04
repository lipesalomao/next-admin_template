import useAppData from "../data/hook/useAppData";
import { Title } from "./Title";
import { ToggleThemeButton } from "./ToggleThemeButton";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: IHeaderProps) => {
  const { theme, themeToggle } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
        <ToggleThemeButton theme={theme!} themeToggle={themeToggle!} />
      </div>
    </div>
  );
};
