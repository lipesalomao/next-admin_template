import { Title } from "./Title";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export const Header = (props: IHeaderProps) => {
  return (
    <div>
      <Title title={props.title} subtitle={props.subtitle} />
    </div>
  );
};
