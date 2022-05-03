import React from 'react';
import { PlusIcon } from '@heroicons/react/solid';

const Story = ({ username, img, isUser }) => {
  return (
    <div className="relative group cursor-pointer">
      <img
        className="h-14 rounded-full p-[1.5px] border-2 border-red-500 group-hover:scale-110 transition-transform duration-200 ease-out"
        src={img}
        alt={username}
      />
      {isUser && <PlusIcon className="h-6 absolute top-4 left-4 text-white" />}
      <p className="text-xs w-14 truncate">{username}</p>
    </div>
  );
};

export default Story;
