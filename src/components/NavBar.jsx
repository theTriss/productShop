import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css'

const NavBar = () => {
    return (
        <div className={styles.header__navSection}>
            <div className={styles.header__nav}>
                <NavLink to='/market' activeClassName={styles.header__link_active} className={styles.header__link}>Товары</NavLink>
            </div>
            <div className={styles.header__nav}>
                <NavLink to='/about' activeClassName={styles.header__link_active} className={styles.header__link}>О нас</NavLink>
            </div>
            <div className={styles.header__nav}>
                <NavLink to='/contacts' activeClassName={styles.header__link_active} className={styles.header__link}>Контакты</NavLink>
            </div>
            <div className={styles.header__nav}>
                <NavLink to='/sales' activeClassName={styles.header__link_active} className={styles.header__link}>Акции</NavLink>
            </div>
        </div>
    )
}

export default NavBar