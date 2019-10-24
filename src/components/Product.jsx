import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Product.module.css';
import ButtonPanel from './ButtonPanel';

const Product = ({_id, name, url, price, category}) => {
    return (
        <div className={styles.producItem}>
            <div className={styles.producItem__title}>{name}</div>
            <NavLink to={`/market/${category}/${_id}`}><img src={url} alt={name} className={styles.producItem__img}/></NavLink>
            <div className={styles.producItem__price}>{`${price} грн`}</div>
            <div className={styles.producItem__buttonBlock}>
                <ButtonPanel page='market' product={{_id, name, url, price}}/>
            </div>
        </div>
    )
}

export default Product