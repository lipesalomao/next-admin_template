import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "./icons";
import { SideMenuItem } from "./SideMenuItem";
import { Logo } from "./Logo";

export const SideMenu = () => {
  return (
    <aside
      className={`
    flex flex-col
    bg-gray-200
    dark:bg-gray-900
    `}
    >
      <div
        className={`
        flex items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800
        h-20 w-20
        `}
      >
        <Logo />
      </div>
      <ul
        className={`
      flex-grow
      `}
      >
        <SideMenuItem url="/" text="Home" icon={HomeIcon} />
        <SideMenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <SideMenuItem
          url="/notifications"
          text="Notifications"
          icon={BellIcon}
        />
      </ul>
      <ul>
        <SideMenuItem
          onClick={() => {
            console.log("logout");
          }}
          text="Logout"
          icon={LogoutIcon}
          className={`
          text-red-600 dark:text-red-400
          hover:bg-red-400 hover:text-white
          dark:hover:text-white
          `}
        />
      </ul>
    </aside>
  );
};
