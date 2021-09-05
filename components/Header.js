import Image from 'next/image';

import { signOut, useSession } from 'next-auth/client';

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  LogoutIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import HeaderIcon from './ui/HeaderIcon';

function Header() {
  const [session] = useSession();
  // console.log(session);

  return (
    <div className="sticky top-0 z-50 items-center bg-white flex p-2 lg:p-5 shadow-md">
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
        <div className="hidden md:inline-flex bg-gray-200 rounded-full p-2 space-x-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="outline-none hidden lg:inline-flex select-none flex-shrink bg-transparent"
            type="text"
            placeholder="Search Storybook"
          />
        </div>
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
      <div className="flex items-center space-x-1 sm:space-x-2 justify-end">
        <Image
          alt={session.user.name}
          src={session.user.image}
          width={35}
          height={35}
          layout="fixed"
        />
        <p className="font-semibold hidden lg:inline-flex whitespace-nowrap pr-3">
          {session && session.user.name}{' '}
        </p>
        <LogoutIcon
          className="cursor-pointer w-7 h-7 text-gray-700 hover:text-blue-500"
          onClick={signOut}
          title="LogOut"
        />
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon " />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
