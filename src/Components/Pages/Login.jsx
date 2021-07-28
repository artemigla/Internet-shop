import React, { useState, useEffect } from 'react';
import style from './Styles/Login.module.scss';
const Login = () => {

    const [mail, setMail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Поле не может быть пустым");

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Поле не может быть пустым");

    const [formValid, setFormValid] = useState(false);
    const emailHandler = (e) => {
        setMail(e.target.value);
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный ввод!");
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 21) {
            setPasswordError("Пароль должен быть от 8 до 20 символов");
            if (!e.target.value) {
                setPasswordError("Поле не может быть пустым");
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
        <form action="form" className={style.formlogin}>
            <h3 className={style.formheader}>Логин</h3>
            <div className={style.inputs}>
                {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                <input
                    onChange={(e) => emailHandler(e)}
                    value={mail}
                    onBlur={(e) => blurHandler(e)}
                    name="email"
                    type="email"
                    placeholder={"Введите логин"}
                />

                {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
                <input
                    onChange={(e) => passwordHandler(e)}
                    value={password}
                    onBlur={(e) => blurHandler(e)}
                    name="password"
                    placeholder={"Введите пароль"}
                />

                <button disabled={!formValid}>Войти</button>
            </div>
        </form>
    )
}
export default Login;