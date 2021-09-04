function HeaderIcon({ Icon }) {
  return (
    <div className="cursor-pointer rounded-xl flex items-center md:px-10 sm:h-14 md:hover:bg-gray-100 active:border-b-2 active:border-blue-500">
      <Icon className="h-5" />
    </div>
  );
}

export default HeaderIcon;
