import React, { useState } from 'react';
import style from './Styles/Navbar.module.scss';
import { BiMenu, BiX } from 'react-icons/bi';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={style.nav}>
            <ul className={isOpen ? style.navMobile : style.position} onClick={() => setIsOpen(false)}>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/basket">Корзина</Link></li>
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/signup">Регистрация</Link></li>
            </ul>

            <button className={style.btn} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <BiX /> : <BiMenu />}</button>
        </nav>
    )
}

export default Navbar;