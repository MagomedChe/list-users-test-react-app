import React from 'react';
import style from './styles.module.css';
import { NavLink } from 'react-router-dom';

function Post({ post }) {
  return (
    <NavLink to={`${post.id}`}>
      <div className={style.post}>
        <div className={style.title}>{post.title}</div>
        <div className={style.body}>{post.body}</div>
      </div>
    </NavLink>
  );
}

export default Post;
