import React from 'react';
import loginStyles from './Login.module.css';
import headerStyles from './Header.module.css';
import { reduxForm, Field } from 'redux-form';

let RegisteryForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} className={loginStyles.form}>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_login}`}></div>
                <Field component='input' name='login' className={loginStyles.inputBlock__input} placeholder='login' />
            </div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_email}`}></div>
                <Field component='input' placeholder='email' name='email' className={loginStyles.inputBlock__input} />
            </div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_pass}`}></div>
                <Field component='input' placeholder='password' name='password' type='password' className={loginStyles.inputBlock__input} />
            </div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_pass}`}></div>
                <Field component='input' placeholder='confirm password' name='confirmPassword' type='password' className={loginStyles.inputBlock__input} />
            </div>
            <button className={loginStyles.inputBlock__btn}>Registery</button>
            {error && <div className={loginStyles.error}>
                <div className={loginStyles.error__icon}></div>
                <div className={loginStyles.error__message}>{error}</div>
            </div>
            }
        </form>
    )
}

let LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} className={loginStyles.form}>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_login}`}></div>
                <Field component='input' name='login' className={loginStyles.inputBlock__input} placeholder='enter your login' />
            </div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_pass}`}></div>
                <Field component='input' name='password' type='password' className={loginStyles.inputBlock__input}
                    placeholder='enter your password' />
            </div>
            <button className={loginStyles.inputBlock__btn}>Sign In</button>
            {error && <div className={loginStyles.error}>
                <div className={loginStyles.error__icon}></div>
                <div className={loginStyles.error__message}>{error}</div>
            </div>}
        </form>
    )
}

let SearchForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={headerStyles.header__form}>
            <Field component='input' className={headerStyles.header__search} name='search' />
            <button className={headerStyles.header__btn}></button>
        </form>
    )
}

let SettingForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit} className={loginStyles.form}>
            <div className={loginStyles.inputBlock__title}>Имя пользователя:</div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_login}`}></div>
                <Field component='input' name='login' className={loginStyles.inputBlock__input} placeholder='login' />
            </div>
            <div className={loginStyles.inputBlock__title}>Адрес эл. почты:</div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_email}`}></div>
                <Field component='input' placeholder='email' name='email' className={loginStyles.inputBlock__input} />
            </div>
            <div className={loginStyles.inputBlock__title}>Пароль:</div>
            <div className={loginStyles.inputBlock}>
                <div className={`${loginStyles.inputBlock__icon} ${loginStyles.inputBlock__icon_pass}`}></div>
                <Field component='input' placeholder='password' name='pass' type='password' className={loginStyles.inputBlock__input} />
            </div>
            <button className={loginStyles.inputBlock__btn}>Изменить</button>
            {error && <div className={loginStyles.error}>
                <div className={loginStyles.error__icon}></div>
                <div className={loginStyles.error__message}>{error}</div>
            </div>}
        </form>
    )
}

RegisteryForm = reduxForm({
    form: 'registery',
})(RegisteryForm);

LoginForm = reduxForm({
    form: 'login',
})(LoginForm);

SearchForm = reduxForm({
    form: 'search'
})(SearchForm);

SettingForm = reduxForm({
    form: 'setting'
})(SettingForm)

export { RegisteryForm, LoginForm, SearchForm, SettingForm };