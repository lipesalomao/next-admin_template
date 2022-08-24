interface ITitleProps {
  title: string;
  subtitle: string;
}

export const Title = (props: ITitleProps) => {
  return (
    <div>
      <h1
        className={`
        font-black text-3xl
        text-gray-900 dark:text-gray-300
            `}
      >
        {props.title}
      </h1>
      <h2
        className={`
        font-light text-sm text-gray-600 dark:text-gray-400
            `}
      >
        {props.subtitle}
      </h2>
    </div>
  );
};
