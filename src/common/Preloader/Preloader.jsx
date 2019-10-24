import React from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img className={styles.preloader__img} 
                 src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-16.gif" 
                 alt="preloader"
            />
        </div> 
    )
}

export default Preloader;