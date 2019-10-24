import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {SearchForm} from './FormsElements';
import NavBar from './NavBar';
import styles from './Header.module.css';
import logo from '../common/img/logo.png'

const Header = ({login, logOutTC, history, changeQueryTC}) => {

    const [editeMode, setEditeMode] = useState(false);

    const preventDefault = (e) => {
        e.preventDefault();
        setEditeMode(!editeMode);
    }

    const formSubmit = ({search}) => {
        search && changeQueryTC(search, history);
    }

    return (
        <div className={styles.header}>
            <NavLink to='/' className={styles.header__logoSection}>
                <img src={logo}
                    alt="logo"
                    className={styles.header__logo}
                />
            </NavLink>
            <div className={styles.header__phoneSection}>
                <div className={styles.header__phone}>(063) 198 76 43</div>
                <div className={styles.header__phone}>(050) 198 76 43</div>
            </div>
            <div className={styles.header__searchSection}>
                <SearchForm onSubmit={formSubmit}/>
            </div>
            <div className={styles.header__usersDataSection}>
                <div className={styles.header__loginSection}>
                    <div className={styles.header__aboutSection}>
                        <NavLink to='/login' onClick={login && function(e){preventDefault(e)} } className={styles.header__login}>
                            {login ? <span>{login} &#11206;</span>: `Авторизация / Регистрация` }
                        </NavLink>
                        {(editeMode && login) 
                            && <div className={styles.header__profileSection}>
                                <NavLink to='/setting' className={`${styles.header__profileItem} ${styles.header__profileItem_last}`}>Настройка</NavLink>
                                <div className={styles.header__profileItem} onClick={() => logOutTC()}>Выйти</div>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.header__cartSection}>
                    <NavLink to='/cart' className={styles.header__cart}>Корзина</NavLink>
                </div>
            </div>
            <NavBar />
        </div>
    )
}

export default Header;