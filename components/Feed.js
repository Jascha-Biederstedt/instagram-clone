import React from 'react';

import Stories from './Stories';
import Posts from './Posts';

const Feed = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto">
      <section className="md:col-span-2">
        <Stories />
        <Posts />
      </section>

      <aside className="hidden md:inline-grid md:col-span-1"></aside>
    </main>
  );
};

export default Feed;
