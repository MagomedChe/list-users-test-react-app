import React from 'react';
import { useGetCommentsQuery } from '../../redux';
import { useParams } from 'react-router-dom'

function Comments(props) {
  const { data = [], isLoading } = useGetCommentsQuery();
  if (isLoading) {
    return <h1>Loading comments</h1>;
  }


  return (
    <div>
      <h1>Комментарии</h1>
      {data.map((comment) => {
        return (
        <div key={comment.id}>
          <div>{comment.name}</div>
          <div>{comment.email}</div>
          <div>{comment.body}</div>
        </div>
        );
      })}
    </div>
  );
}

export default Comments;
