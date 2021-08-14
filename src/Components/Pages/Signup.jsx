import React, { useState, useEffect } from 'react';
import style from './Styles/Signup.module.scss';
import { useTranslation } from "react-i18next";
const Signup = () => {

    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [firstNameDirty, setFirstNameDirty] = useState(false);
    const [firstNameError, setFirstNameError] = useState(t("description.inputfielderror"));

    const [lastName, setLastName] = useState("");
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [lastNameError, setLastNameError] = useState(t("description.inputfielderror"));

    const [mail, setMail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState(t("description.inputfielderror"));


    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState(t("description.inputfielderror"));

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordDirty, setConfirmPasswordDirty] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(t("description.inputfielderror"));

    const [formValid, setFormValid] = useState(false);

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
        const regex = /^[a-zа-яё]+$/;
        if ((e.target.value.length < 2 || e.target.value.length > 18)) {
            setFirstNameError(t("description.errorentername"));
            if (!e.target.value) {
                setFirstNameError(t("description.inputfielderror"));
            }
        } else if (!regex.test(String(e.target.value).toLowerCase())) {
            setFirstNameError(t("description.enteronlyletters"))
        } else {
            setFirstNameError('');
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        const regex = /^[a-zа-яё-]+$/;
        if (!e.target.value) {
            setLastNameError(t("description.inputfielderror"));
        } else if (!regex.test(String(e.target.value).toLowerCase())) {
            setLastNameError(t("description.enteronlyletters"))
        } else {
            setLastNameError('');
        }
    }

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
        if (e.target.value.length < 7 || e.target.value.length > 21) {
            setPasswordError(t("description.errorpassword"));
            if (!e.target.value) {
                setPasswordError(t("description.invalidinput"));
            }
        } else {
            setPasswordError('');
        }
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value);
        if (password !== e.target.value) {
            setConfirmPasswordError(t("description.passwords"));
            if (!e.target.value) {
                setConfirmPasswordError(t("description.inputfielderror"));
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
        <div className={style.bgcolor}>
            <form className={style.signup}>
                <h3 className={style.formheader}>{t("description.signup")}</h3>
                <div className={style.modalbody}>
                    {(firstNameDirty && firstNameError) && <div style={{ color: "red" }}>{firstNameError}</div>}
                    <input
                        onChange={(e) => firstNameHandler(e)}
                        name="firstName"
                        type="text"
                        value={firstName}
                        onBlur={(e) => blurHandler(e)}
                        placeholder={t("description.firstname")}
                    />
                    <br /><br />

                    {(lastNameDirty && lastNameError) && <div style={{ color: "red" }}>{lastNameError}</div>}
                    <input
                        onChange={(e) => lastNameHandler(e)}
                        type="text"
                        name="lastName"
                        value={lastName}
                        onBlur={(e) => blurHandler(e)}
                        placeholder={t("description.lastname")}
                    />
                    <br /><br />

                    {(emailDirty && emailError) && <div style={{ color: "red" }}>{emailError}</div>}
                    <input
                        onChange={e => emailHandler(e)}
                        value={mail}
                        onBlur={e => blurHandler(e)}
                        name="email"
                        type="email"
                        placeholder={t("description.mail")}
                    />
                    <br /><br />

                    {(passwordDirty && passwordError) && <div style={{ color: "red" }}>{passwordError}</div>}
                    <input onChange={(e) => passwordHandler(e)}
                        value={password}
                        onBlur={e => blurHandler(e)}
                        name="password"
                        type="password"
                        placeholder={t("description.enterpassword")}
                    />
                    <br /><br />

                    {(confirmPasswordDirty && confirmPasswordError) && <div style={{ color: "red" }}>{confirmPasswordError}</div>}
                    <input
                        onChange={(e) => confirmPasswordHandler(e)}
                        value={confirmPassword}
                        onBlur={(e) => blurHandler(e)}
                        name="confirmPassword"
                        type="password"
                        placeholder={t("description.confirmpassword")}
                    />
                    <br /><br />
                    <div className={style.check}>
                        <input type="checkbox" /><h5>{t("description.remember")}</h5>
                    </div>
                    <button disabled={!formValid}>{t("description.signup")} </button>
                </div>
            </form>
        </div>
    )
}

export default Signup;