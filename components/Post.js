import React from 'react';
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
} from '@heroicons/react/outline';

const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white rounded-md border my-7">
      <div className="flex items-center p-5">
        <img
          className="h-12 object-cover rounded-full border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img className="object-cover w-full" src={img} alt="Post image" />

      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
};

export default Post;
