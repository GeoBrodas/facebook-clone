import SideBarIcon from './ui/SideBarIcon';

import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid';

function SideBar() {
  return (
    <div className="hidden sm:inline-flex flex-col p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SideBarIcon Icon={UsersIcon} title="Friends" />
      <SideBarIcon Icon={UserGroupIcon} title="Groups " />
      <SideBarIcon Icon={ShoppingBagIcon} title="MarketPlace" />
      <SideBarIcon Icon={DesktopComputerIcon} title="Watch" />
      <SideBarIcon Icon={CalendarIcon} title="Events" />
      <SideBarIcon Icon={ClockIcon} title="Memories" />
      <SideBarIcon Icon={ChevronDownIcon} title="See more" />
    </div>
  );
}

export default SideBar;
