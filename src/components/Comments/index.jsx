import React, { Fragment, useState } from 'react';
import { useGetCommentsQuery, useGetPostsQuery } from '../../redux';
import { useParams } from 'react-router-dom';
import style from './styles.module.css';
import Button from '../Button/Button';
import FormAddComment from './FormAddComment';

function Comments(props) {
  const idPost = parseInt(useParams().post);
  const idUser = useParams().id;
  const { data: comments = [], isLoading } = useGetCommentsQuery(idPost);
  const { data: posts = [], isLoading: load } = useGetPostsQuery(idUser);
  const [formToSend, setformToSend] = useState(false);

  if (isLoading || load) {
    return <h1>Loading comments ...</h1>;
  }

  const handleOpenForm = (e) => {
    e.preventDefault();
    setformToSend(!formToSend);
  };


  return (
    <>
      <div className={style.content}>
        <div className={style.post}>
          {posts.map((post) => {
            if (post.id === idPost) {
              return (
                <Fragment key={post.id}>
                  <h1 className={style.title}>{post.title}</h1>
                  <h4 className={style.body}>{post.body}</h4>
                </Fragment>
              );
            }
          })}
        </div>
        <div className={style.comments}>
          {comments.map((comment) => {
            return (
              <div className={style.comment} key={comment.id}>
                <div className={style.name}>{comment.name}</div>
                <div className={style.commentsBody}>{comment.body}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="button" onClick={handleOpenForm}>
        <Button children={formToSend ? 'Collapsed' : 'Add comment'} />
      </div>
      {formToSend && <FormAddComment />}
    </>
  );
}

export default Comments;
