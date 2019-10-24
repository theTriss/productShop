import React, {useState, useEffect} from 'react';
import styles from './Pagination.module.css';

const Pagination = ({category, addProductsTC, counter, query}) => {

    const [page, setPage] = useState(1);
    const [preloader, setPreloader] = useState(false);

    useEffect( () => {
        setPreloader(false)
    }, [counter])

    return (
        <div className={styles.pagination} onClick={() => {addProductsTC(category, query, page); setPage(page + 1); setPreloader(true);} }>
            <div className={styles.pagination__title}>
                <div className={`${styles.pagination__icon} ${(preloader) && styles.pagination__icon_animate}`}></div>
                Показать ещё...
            </div>
        </div>
    )
}

export default React.memo(Pagination);