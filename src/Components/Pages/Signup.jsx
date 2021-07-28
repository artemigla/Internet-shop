import React, { useState, useEffect } from 'react';
import style from './Styles/Signup.module.scss';
const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [firstNameError, setFirstNameError] = useState("Поле не может быть пустым!");

    const [lastName, setLastName] = useState("");
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [lastNameError, setLastNameError] = useState("Поле не может быть пустым!");

    const [mail, setMail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState("Поле не может быть пустым!");


    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState("Поле не может быть пустым!");

    const [confirmPassword, setConfirmPassword] = useState('');
    const [consfirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("Поле не может быть пустым!")

    const [formValid, setFormValid] = useState(false);

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2 || e.target.value.length > 18) {
            setFirstNameError("Имя должно быть от 2 до 17 символов");
            if (!e.target.value) {
                setFirstNameError("Поле не может быть пустым");
            }
        } else {
            setFirstNameError('');
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (!e.target.value) {
            setLastNameError("Поле не может быть пустым");
        } else {
            setLastNameError('');
        }
    }

    const emailHandler = (e) => {
        setMail(e.target.value);
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(e.target.value).toLowerCase())) {
            setEmailError("Некорректный ввод");
        } else {
            setEmailError('');
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 7 || e.target.value.length > 21) {
            setPasswordError("Пароль должен быть от 8 до 20 символов");
            if (!e.target.value) {
                setPasswordError("Пароль должен быть от 8 до 20 символов");
            }
        } else {
            setPasswordError('');
        }
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setConfirmPasswordError("Пароли не совпадают");
            if (!e.target.value) {
                setConfirmPasswordError("Поле не может быть пустым!");
            }
        } else {
            setConfirmPasswordError('');
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
            case 'firstName':
                setFirstNameDirty(true);
                break;
            case 'lastName':
                setLastNameDirty(true);
                break;
            case 'confirmPassword':
                setConfirmPasswordDirty(true);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        if (emailError || passwordError || firstNameError || lastNameError || confirmPasswordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, firstNameError, lastNameError, confirmPasswordError]);

    return (
        <form action="form" className={style.signup}>
            <h3 className={style.formheader}>Регистрация</h3>
            <div className={style.modalbody}>
                {(firstNameDirty && firstNameError) && <div style={{ color: "red" }}>{firstNameError}</div>}
                <input
                    onChange={(e) => firstNameHandler(e)}
                    name="firstName"
                    type="text"
                    value={firstName}
                    onBlur={(e) => blurHandler(e)}
                    placeholder={"Введите имя"}
                />
                <br /><br />

                {(lastNameDirty && lastNameError) && <div style={{ color: "red" }}>{lastNameError}</div>}
                <input
                    onChange={(e) => lastNameHandler(e)}
                    type="text"
                    name="lastName"
                    value={lastName}
                    onBlur={(e) => blurHandler(e)}
                    placeholder={"Введите фамилию"}
                />
                <br /><br />

                {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                <input
                    onChange={e => emailHandler(e)}
                    value={mail}
                    onBlur={e => blurHandler(e)}
                    name="email"
                    type="email"
                    placeholder={"Введите E-mail"}
                />
                <br /><br />

                {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
                <input onChange={(e) => passwordHandler(e)}
                    value={password}
                    onBlur={e => blurHandler(e)}
                    name="password"
                    type="password"
                    placeholder={"Пароль"}
                />
                <br /><br />

                {(consfirmPasswordDirty && confirmPasswordError) && <div style={{ color: "red" }}>{confirmPasswordError}</div>}
                <input
                    onChange={(e) => confirmPasswordHandler(e)}
                    value={confirmPassword}
                    onBlur={(e) => blurHandler(e)}
                    name="confirmPassword"
                    type="password"
                    placeholder={"Подтвердите пароль"}
                />
                <br /><br />
                <div className={style.check}>
                    <input type="checkbox" /><h5>{"Запомнить"}</h5>
                </div>
                <button disabled={!formValid} ><h4>{"Зарегистрироваться"}</h4> </button>
            </div>
        </form>
    )
}

export default Signup;