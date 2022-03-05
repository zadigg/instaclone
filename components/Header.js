import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  HomeIcon,
} from "@heroicons/react/solid";

// Header 101
function Header() {
  return (
    <div className="w-full border-b shadow-sm bg-white sticky top-0 z-50 ">
      {/* Left */}
      <div className="relative flex justify-between items-center bg-white max-w-6xl mx-5 xl:mx-auto   p-3   ">
        {/* Left */}
        <div className="flex items-center">
          <div className="absolute mt-0 hidden lg:inline-block h-24 w-24 ">
            <Image
              src="https://links.papareact.com/ocw"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute  lg:hidden p-0 m-0 h-10 w-10">
            <Image
              src="https://links.papareact.com/jjm"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        {/* Middle */}
        <div className=" flex items-center space-x-3 border-2 border-gray-200 ">
          <div>
            <SearchIcon className="h-5 w-5 ml-3 text-gray-500" />
          </div>
          <input
            className="outline-none p-1 "
            type="text"
            placeholder="search"
          />
        </div>

        {/*  Right */}
        <div className="flex items-center space-x-4  ">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center animate-pulse text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="https://links.papareact.com/3ke"
            alt="profile Pic"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
