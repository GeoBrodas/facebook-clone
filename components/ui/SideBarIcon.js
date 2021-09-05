function SideBarIcon({ Icon, title }) {
  return (
    <div className="flex sm:hover:bg-gray-400 rounded-xl items-center space-x-2 cursor-pointer md:space-x-4 p-4">
      <Icon className="sm:h-7 h-5 text-blue-500" />
      <p className="text-gray-700 font-medium hidden sm:inline-flex">{title}</p>
    </div>
  );
}

export default SideBarIcon;
