import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './Login.module.css';
import { required, minLength, emailCheck, repeatPassword } from '../validators/validators';
import { RegisteryForm, LoginForm } from './FormsElements';

const minSymbols = minLength(8);

const Login = ({ login, id, setUserDataTC, createNewAccountTC}) => {

    let [registryMod, setRegistryMod] = useState(false);
    let [error, setError] = useState(null);

    const validate = (prop, validators) => {
        for(let validator of validators){
            if(validator(...prop)) {
                setError(validator(...prop));
                return false;
            };
        }
        return true;
    }

    const formRegistery = ({login, email, password, confirmPassword}) => {
        if(!validate([login, 'login'], [required, minSymbols]) 
            || !validate([password, 'password'], [required, minSymbols]) 
            || !validate([email], [required, emailCheck]) 
            || !validate([confirmPassword, password], [repeatPassword])) return;
        setError(null);
        createNewAccountTC(login, password, email);
    } 

    const formSubmit = ({login, password}) => {
        if(!validate([login, 'login'], [required, minSymbols]) 
            || !validate([password, 'password'], [required, minSymbols])) return;
        setError(null);
        setUserDataTC(login, password);
    }

    return (
        <div>
            {(login && id)
                ? <Redirect to='/market' />
                : <div className={styles.formContainer}>
                    <div className={`${styles.formBlock} ${styles.formBlock_registery} ${(registryMod 
                        ? styles.formBlock_active 
                        : styles.formBlock_disable)}`}
                    >
                        <div className={styles.formBlock__title}>Регистрация</div>
                        <RegisteryForm onSubmit={formRegistery} />
                        {(registryMod && error) 
                            && <div className={styles.error}>
                                <div className={styles.error__icon}></div>
                                <div className={styles.error__message}>{error}</div>
                            </div>
                        }
                        <div className={styles.formBlock__questionContainer}>
                            <div className={styles.formBlock__question}>
                                <span className={styles.formBlock__questionItself}>Есть аккаунт? </span>
                                <span onClick={() => {setRegistryMod(false); setError(null); }} className={styles.formBlock__link}>Войдите на сайт</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.formBlock} ${styles.formBlock_auth} ${(!registryMod 
                        ? styles.formBlock_active 
                        : styles.formBlock_disable)}`}
                    >
                        <div className={styles.formBlock__title}>Вход</div>
                        <LoginForm onSubmit={formSubmit} />
                        {(!registryMod && error) 
                            && <div className={styles.error}>
                                <div className={styles.error__icon}></div>
                                <div className={styles.error__message}>{error}</div>
                            </div>
                        }
                        <div className={styles.formBlock__questionContainer}>
                            <div className={styles.formBlock__question}>
                                <span className={styles.formBlock__questionItself}>Нет аккаунта? </span>
                                <span onClick={() => {setRegistryMod(true); setError(null); }}  className={styles.formBlock__link}>Зарегестрируйтесь</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Login;