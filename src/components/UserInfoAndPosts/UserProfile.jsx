import React from 'react'
import style from './styles.module.css'

function UserProfile (props) {
  return (
    <>
      <div className={style.name}>Имя Фамилия</div>
      <div className={style.contacts}>Контакты</div>
    </>
  )
}

export default UserProfile;