import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './styles.module.css'

function User ({user}) {

  return (
    <NavLink to={`${user.id}`}>
      <div className={style.user}>
        {user.name}
      </div>
    </NavLink>

  )
}

export default User