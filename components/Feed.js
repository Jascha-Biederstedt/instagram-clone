import React from 'react';
import { useSession } from 'next-auth/react';

import Stories from './Stories';
import Posts from './Posts';
import MiniProfile from './MiniProfile';
import Suggestions from './Suggestions';
import UploadModal from './UploadModal';

const Feed = () => {
  const { data: session } = useSession();

  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'
          : 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'
      } `}
    >
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>

      <aside className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          <MiniProfile />
          <Suggestions />
        </div>
      </aside>

      <UploadModal />
    </main>
  );
};

export default Feed;
