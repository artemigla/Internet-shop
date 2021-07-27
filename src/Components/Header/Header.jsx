import React from 'react';
import PropTypes from 'prop-types';
import style from './Styles/Header.module.scss';
import Navbar from '../NavBar/Navbar';
const Header = ({ data }) => {
    return (
        <header className={style.header}>
            <h2>{data}</h2>
            <Navbar />
        </header>
    )
}

Header.prototype = {
    data: PropTypes.string
}
export default Header;