import React from 'react';
import style from './styles.module.css'
import { NavLink } from 'react-router-dom'

function Header(props) {
  return (
    <header className={style.header}>
      <NavLink to={'/'}>
        <div className={style.logo}>
          CONCERT CLUB
        </div>
      </NavLink>
      <div className={style.buttons}>
        <div className={style.header_button}>Версия для слабовидящих</div>
        <div className={style.header_button}>Мой профиль</div>
      </div>
    </header>
  );
}

export default Header;
