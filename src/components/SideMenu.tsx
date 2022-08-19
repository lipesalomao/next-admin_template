import { BellIcon, HomeIcon, SettingsIcon } from "./icons";
import { SideMenuItem } from "./SideMenuItem";

export const SideMenu = () => {
  return (
    <aside>
      <ul>
        <SideMenuItem url="/" text="Home" icon={HomeIcon} />
        <SideMenuItem url="/settings" text="Settings" icon={SettingsIcon} />
        <SideMenuItem
          url="/notifications"
          text="Notifications"
          icon={BellIcon}
        />
      </ul>
    </aside>
  );
};
