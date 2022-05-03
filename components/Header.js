import React from 'react';
import Image from 'next/image';
import { SearchIcon, PlusCircleIcon } from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="w-24 h-24 relative cursor-pointer hidden lg:inline-grid">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            layout="fill"
            className="object-contain"
          />
        </div>

        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="search"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          {session ? (
            <>
              <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="User image"
                referrerPolicy="no-referrer"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button
              onClick={signIn}
              className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-700 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md whitespace-nowrap"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
