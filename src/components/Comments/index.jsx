import React, { Fragment } from 'react';
import { useGetCommentsQuery, useGetPostsQuery } from '../../redux';
import { useParams } from 'react-router-dom';
import style from '../UserInfoAndPosts/styles.module.css';

function Comments(props) {
  const idPost = parseInt(useParams().post);
  const idUser = useParams().id;
  const { data: comments = [], isLoading } = useGetCommentsQuery(idPost);
  const { data: posts = [], isLoading: load } = useGetPostsQuery(idUser);

  if (isLoading || load) {
    return <h1>Loading comments</h1>;
  }

  return (
    <div>
      <div>
        {posts.map((post) => {
          if (post.id === idPost) {
            return (
              <Fragment key={post.id}>
                <h1>{post.title}</h1>
                <h4>{post.body}</h4>
              </Fragment>
            );
          }
        })}
      </div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
