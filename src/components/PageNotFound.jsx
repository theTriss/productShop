import React from 'react';
import Button from '../common/Button/Button';
import styles from './PageNotFound.module.css';
import notFound from '../common/img/notFound.png';

const PageNotFound = () => {
    return (
        <div className={styles.notFound}>
            <img 
                src={notFound} alt="page not found"
                className={styles.notFound__img}
            />
            <Button text='Вернуться на главную' link='/' />
        </div>
    )
}

export default PageNotFound