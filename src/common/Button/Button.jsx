import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({text, link}) => {
    return (
        <div className={styles.btnSection}>
            <NavLink to={link} className={styles.btn}>{text}</NavLink>
        </div>
    )
}

export default Button;