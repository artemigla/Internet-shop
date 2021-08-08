import React, { useState } from 'react';
import style from './Styles/Navbar.module.scss';
import { BiMenu, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className={style.nav}>
            <ul className={isOpen ? style.navMobile : style.position} onClick={() => setIsOpen(false)}>
                <li><Link to="/">{t("description.home")}</Link></li>
                <li><Link to="/basket">{t("description.basket")}</Link></li>
                <li><Link to="/login">{t("description.login")}</Link></li>
                <li><Link to="/signup">{t("description.signup")}</Link></li>
            </ul>
            <button className={style.btn} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <BiX /> : <BiMenu />}</button>
        </nav>
    )
}
export default Navbar;