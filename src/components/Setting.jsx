import React, { useState } from 'react';
import { SettingForm } from './FormsElements';
import { minLength, emailCheck } from '../validators/validators';
import styles from './Login.module.css';

const minSymbols = minLength(8);

const Setting = ({ userId, changeUserDataTC, deleteAccountTC }) => {

    const [error, setError] = useState(null);

    const validate = (prop, validators) => {
        for (let validator of validators) {
            if (validator(...prop)) {
                setError(validator(...prop));
                return false;
            };
        }
        return true;
    }

    const formSubmit = (data) => {
        
        if(Object.keys(data).length !== 0) {
            const { login, email, pass } = data;

            if ((login && !validate([login, 'login'], [minSymbols]))
                || (email && !validate([email], [emailCheck]))
                || (pass && !validate([pass, 'password'], [minSymbols]))) return;
            setError(null);
            changeUserDataTC(userId, data);
        }
    }

    return (
        <div className={`${styles.formBlock} ${styles.formBlock_setting}`}>
            <SettingForm onSubmit={formSubmit} />
            {(error)
                && <div className={styles.error}>
                    <div className={styles.error__icon}></div>
                    <div className={styles.error__message}>{error}</div>
                </div>
            }
            <div className={styles.formBlock__question}>
                <span className={styles.formBlock__link} onClick={() => deleteAccountTC(userId)} >Удалить Аккаунт</span>
            </div>
        </div>
    )
}
export default Setting;