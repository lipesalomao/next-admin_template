import { Content } from "./Content";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

interface ILayoputProps {
  title: string;
  subtitle: string;
  children?: any;
}

export const Layout = (props: ILayoputProps) => {
  return (
    <div>
      <SideMenu />
          <Header title={props.title} subtitle={props.subtitle} />
          <Content>
            {props.children}
          </Content>
    </div>
  );
};
