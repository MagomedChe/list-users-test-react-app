import React from 'react';
import { useParams } from 'react-router-dom';
import style from './styles.module.css';
import Posts from './Posts';
import { useGetUsersQuery } from '../../redux';

function UserInfo(props) {
  const id = parseInt(useParams().id);
  const { data: users = [] } = useGetUsersQuery();

  console.log(id);

  return (
    <>
      {users.map((user) => {
        if (user.id === id) {
          return (
            <div className={style.content} key={user.id}>
              <div className={style.name}>{user.name}</div>
              <div className={style.contacts}>
                <div className={style.contact}>{user.email}</div>
                <div className={style.contact}>{user.phone}</div>
                <div className={style.contact}>{user.website}</div>
                <div className={style.contact}>{user.company.name}</div>
                <div className={style.contact}>{user.company.bs}</div>
              </div>
            </div>
          );
        }
      })}
      <>
        <Posts />
      </>
    </>
  );
}

export default UserInfo;
