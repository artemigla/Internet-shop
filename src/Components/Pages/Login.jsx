import React, { useState, useEffect } from 'react';
import style from './Styles/Login.module.scss';
import { useTranslation } from "react-i18next";
const Login = () => {

    const { t } = useTranslation();

    const [mail, setMail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState(t("description.inputfielderror"));

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState(t("description.inputfielderror"));

    const [formValid, setFormValid] = useState(false);
    const emailHandler = (e) => {
        setMail(e.target.value);
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError(t("description.invalidinput"));
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 21) {
            setPasswordError(t("description.errorpassword"));
            if (!e.target.value) {
                setPasswordError(t("description.inputfielderror"));
            }
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    return (
        <div className={style.bgcolor}>
            <form className={style.formlogin}>
                <div className={style.content}>
                    <h3 className={style.formheader}>{t("description.login")}</h3>
                    <div className={style.inputs}>
                        {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                        <input
                            onChange={(e) => emailHandler(e)}
                            value={mail}
                            onBlur={(e) => blurHandler(e)}
                            name="email"
                            type="email"
                            placeholder={t("description.enterlogin")}
                        />

                        {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
                        <input
                            onChange={(e) => passwordHandler(e)}
                            value={password}
                            onBlur={(e) => blurHandler(e)}
                            name="password"
                            type="password"
                            placeholder={t("description.enterpassword")}
                        />

                        <button disabled={!formValid}>{t("description.login")}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Login;