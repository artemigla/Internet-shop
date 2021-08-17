import React from 'react';
import style from './Styles/Footer.module.scss';
import { FaTelegram, FaGithub, FaVk, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.navigation}>
                <FaTelegram />
                <a href="https://github.com/artemigla" target="_blank" rel="noreferrer"><FaGithub /></a>
                <FaVk />
                <FaYoutube />
            </div>
        </footer>
    )
}
export default Footer;