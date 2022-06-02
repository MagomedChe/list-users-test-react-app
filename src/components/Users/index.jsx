import React from 'react';
import User from './User';
import { useGetUsersQuery } from '../../redux';

function Users(props) {
  const { data = [], isLoading } = useGetUsersQuery();
  if (isLoading) return <h1>Loading users ...</h1>;

  return (
    <>
      {data.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </>
  );
}

export default Users;
