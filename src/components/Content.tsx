interface IContentProps {
  children?: any;
}

export const Content = (props: IContentProps) => {
  return (
    <div
      className={`
      flex flex-col mt-7
      dark:text-gray-300
    `}
    >
      {props.children}
    </div>
  );
};
