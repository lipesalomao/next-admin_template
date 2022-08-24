import Link from "next/link";

interface ISideMenuItemProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}
export const SideMenuItem = (props: ISideMenuItemProps) => {
  const anchourRender = () => {
    return (
      <a
        className={`
      flex flex-col 
      justify-center 
      items-center h-20 w-200
        dark:text-gray-200
      ${props.className}
      `}
      >
        {props.icon}
        <span className={`text-xs font-light `}>{props.text}</span>
      </a>
    );
  };

  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-gray-300 cursor-pointer dark:hover:bg-gray-800`}
    >
      {props.url ? (
        <Link href={props.url}>{anchourRender()}</Link>
      ) : (
        anchourRender()
      )}
    </li>
  );
};
