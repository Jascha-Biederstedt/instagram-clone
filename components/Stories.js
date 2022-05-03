import React, { useState, useEffect } from 'react';
import minifaker from 'minifaker';
import 'minifaker/locales/en';
import { useSession } from 'next-auth/react';

import Story from './Story';

const Stories = () => {
  const [storyUsers, setStoryUsers] = useState([]);

  const { data: session } = useSession();

  useEffect(() => {
    const generatedStoryUsers = minifaker.array(20, i => ({
      username: minifaker.username({ locale: 'en' }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));

    setStoryUsers(generatedStoryUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {session && (
        <Story
          username={session.user.username}
          img={session.user.image}
          isUser
        />
      )}

      {storyUsers.map(user => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
};

export default Stories;
