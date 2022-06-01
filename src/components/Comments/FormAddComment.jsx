import React, { useState } from 'react';
import Button from './Button';
import style from './styles.module.css';
import { useAddCommentMutation } from '../../redux'
import { useParams } from 'react-router-dom'


function FormAddComment(props) {
  const idPost = parseInt(useParams().post);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [addComment] = useAddCommentMutation();

  const handleAddComment = () => {
    if(name && email && comment ) {
      addComment({
        postId: idPost,
        name: name,
        email: email,
        body: comment
      }).unwrap();
      setName("");
      setComment("");
      setEmail("");
    };

  }

  console.log(name);
  console.log(email);
  console.log(comment)

  return (
    <>
      <div className={style.inputs}>
        <div>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={email}
            placeholder="Ваш email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={comment}
            placeholder="Введите текст"
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
      </div>
      <div onClick={handleAddComment}>
        <Button children={'send'} />
      </div>
    </>
  );
}

export default FormAddComment;
