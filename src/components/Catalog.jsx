import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Product.module.css';

const Catalog = ({catalog}) => {
    return (
        <div className={styles.productsBlock}>
            {catalog.map(({title, src, category}, index) => <div key={index} className={`${styles.producItem} ${styles.producItem_catalog}`}>
                <h2 className={styles.producItem__title}>{title}</h2>
                <NavLink to={`/market/${category}`} className={styles.producItem__imgSection}>
                    <img src={src} alt={title} className={`${styles.producItem__img} ${styles.producItem__img_link}`}/>
                </NavLink>
            </div>)}
        </div>
    )
}

export default Catalog;