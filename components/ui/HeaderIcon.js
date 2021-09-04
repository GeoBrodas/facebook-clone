function HeaderIcon({ Icon }) {
  return (
    <div className="group cursor-pointer sm:rounded-xl flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 md:active:border-b-2 active:border-blue-500">
      <Icon className="h-5 text-gray-600 sm:h-6 group-hover:text-blue-500" />
    </div>
  );
}

export default HeaderIcon;
