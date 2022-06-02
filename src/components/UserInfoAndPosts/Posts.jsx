import React, { useState } from 'react';
import style from './styles.module.css';
import { useParams } from 'react-router-dom';
import Post from './Post';
import { useGetPostsQuery } from '../../redux';
import Button from '../Button/Button';

function Posts(props) {
  const id = useParams().id;
  const { data = [], isLoading } = useGetPostsQuery(id);
  const [togglePosts, setTogglePosts] = useState(false);

  const posts = () => {
    if (togglePosts === true) {
      return data;
    }
    return data.slice(0, 3);
  };

  if (isLoading) {
    return <h2>Loading posts ...</h2>;
  }

  return (
    <>
      <div
        className="button"
        onClick={() => {
          setTogglePosts(!togglePosts);
        }}
      >
        <Button children={togglePosts ? 'collapsed' : 'all posts'} />
      </div>
      <div className={style.posts}>
        {posts().map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    </>
  );
}

export default Posts;
