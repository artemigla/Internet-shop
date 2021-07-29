import React from 'react';
import PropTypes from 'prop-types';
import style from './Styles/Header.module.scss';
import Navbar from '../NavBar/Navbar';
import Changelanguage from '../ChangeLanguage/Changelanguage.jsx';
const Header = ({ data }) => {
    return (
        <header className={style.header}>
            <h2>{data}</h2>
            <div className={style.content}>
                <div className={style.nav}>
                    Dark mode
                </div>
                <div className={style.nav}>
                    <Changelanguage />
                </div>
                <Navbar />
            </div>
        </header>
    )
}

Header.prototype = {
    data: PropTypes.string
}
export default Header;