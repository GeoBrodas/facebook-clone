import Image from 'next/image';

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcons,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './ui/HeaderIcon';

function Header() {
  return (
    <div className="m-3">
      {/* left */}
      <div className="flex items-center space-x-2">
        <Image
          className="select-none"
          alt="storybook"
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex bg-gray-200 rounded-full p-2 space-x-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="outline-none select-none bg-transparent"
            type="text"
            placeholder="Search Storybook"
          />
        </div>

        {/* center */}
        <div className="flex flex-grow justify-center">
          <div className="flex space-x-6 md:space-x-2">
            <HeaderIcon Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />
          </div>
        </div>

        {/* right */}
      </div>
    </div>
  );
}

export default Header;
