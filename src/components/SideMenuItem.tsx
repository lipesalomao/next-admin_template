import Link from "next/link";

interface ISideMenuItemProps {
  url: string;
  text: string;
  icon: any;
}
export const SideMenuItem = (props: ISideMenuItemProps) => {
  return (
    <li className={`hover:bg-gray-300`}>
      <Link href={props.url}>
        <a className={`flex flex-col justify-center items-center h-20 w-200`}>
          {props.icon}
          <span className={`text-xs font-light text-gray-600`}>{props.text}</span>
        </a>
      </Link>
    </li>
  );
};
