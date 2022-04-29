import React from 'react';

import Post from './Post';

const Posts = () => {
  const posts = [
    {
      id: '1',
      username: 'codewithsahand',
      userImg: 'https://www.adscientificindex.com/pictures/0b/50734.jpg',
      img: 'https://images.unsplash.com/photo-1648737967037-96967e9151b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      caption: 'Thanks for your nice picture',
    },
    {
      id: '2',
      username: 'test2',
      userImg: 'https://www.adscientificindex.com/pictures/0b/50734.jpg',
      img: 'https://images.unsplash.com/photo-1651097681179-c64917595ff2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      caption: 'Thanks for your nice picture 2',
    },
    {
      id: '3',
      username: 'test3',
      userImg: 'https://www.adscientificindex.com/pictures/0b/50734.jpg',
      img: 'https://images.unsplash.com/photo-1651155177101-f4fe4d750521?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      caption: 'Thanks for your nice picture 3',
    },
  ];

  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
