import useAppData from "../data/hook/useAppData";
import { Content } from "./Content";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";
import RouteGuard from "./auth/RouteGuard";

interface ILayoputProps {
  title: string;
  subtitle: string;
  children?: any;
}

export const Layout = (props: ILayoputProps) => {
  const { theme, themeToggle } = useAppData();
  return (
    <RouteGuard>
      <div className={`${theme} flex h-screen w-screen`}>
        <SideMenu />
        <div
          className={`
        flex flex-col w-full p-7
        bg-gray-300 dark:bg-gray-800
        `}
        >
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>{props.children}</Content>
        </div>
      </div>
    </RouteGuard>
  );
};
