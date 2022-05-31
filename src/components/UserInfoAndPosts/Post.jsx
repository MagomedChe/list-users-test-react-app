import React from 'react';
import style from './styles.module.css';
import { NavLink, useParams } from 'react-router-dom'

function Post({ post }) {

  console.log(post.id)


  return (
    <NavLink to='/3'>
      <div className={style.post}>
        <div className={style.title}>{post.title}</div>
        <div className={style.body}>{post.body}</div>
      </div>
    </NavLink>
  );
}

export default Post;
