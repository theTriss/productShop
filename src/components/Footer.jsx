import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__nav}>
                <div className={styles.footer__navItem}>
                    <NavLink className={styles.footer__link} to="/market">Товары</NavLink>
                </div>
                <div className={styles.footer__navItem}>
                    <NavLink className={styles.footer__link} to="/about">О нас</NavLink>
                </div>
                <div className={styles.footer__navItem}>
                    <NavLink className={styles.footer__link} to="/contacts">Контакты</NavLink>
                </div>
                <div className={styles.footer__navItem}>
                    <NavLink className={styles.footer__link} to="/sales">Акции</NavLink>
                </div> 
            </div>
            <div  className={styles.footer__contacts}>
                <div className={styles.footer__title}>Телефоны: </div>
                <div className={styles.footer__contactItem}>(063) 198 76 43, &nbsp;</div>
                <div className={styles.footer__contactItem}>(050) 198 76 43</div>
            </div>
            <div className={styles.footer__schedule}>
                <div className={styles.footer__title}>График работы:</div>
                <div className={styles.footer__scheduleItem}>ПН-ВС: 9.00 - 22.00</div>
            </div>
            <div className={styles.footer__years}>
                <div className={styles.footer__yearsItem}>Все права защищены &copy; 2018 &mdash; 2019 &laquo;Дело Вкуса&raquo;</div>
            </div>
        </div>
    )
}

export default Footer;