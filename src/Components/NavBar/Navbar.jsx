import React from 'react';
import style from './Styles/Navbar.module.scss';
const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.position}>
                <li><a href="/">Главная</a></li>
                <li><a href="/">Корзина</a></li>
                <li><a href="/">Вход</a></li>
                <li><a href="/">Регистрация</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;