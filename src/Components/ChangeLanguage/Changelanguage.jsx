import React from 'react';
import style from './Style/Changelanguage.module.scss';
import { useTranslation } from "react-i18next";
const Changelanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
    return (
        <nav className={style.content}>
            <button className={style.eng} onClick={() => changeLanguage("en")} />
            <button className={style.ru} onClick={() => changeLanguage("ru")} />
            <button className={style.ua} onClick={() => changeLanguage("ua")} />
        </nav>
    )
}
export default Changelanguage;