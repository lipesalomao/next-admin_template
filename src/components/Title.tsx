
interface ITitleProps {
  title: string;
  subtitle: string;
}

export const Title = (props: ITitleProps) => {
  return (
    <div>
      <h1
        className={`
            `}
      >
        {props.title}
      </h1>
      <h2
        className={`
            `}
      >
        {props.subtitle}
      </h2>
    </div>
  );
};
