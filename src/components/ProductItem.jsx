import React from 'react';
import ButtonPanel from './ButtonPanel';
import styles from './ProductItem.module.css';

const ProductItem = ({products}) => {
    return (
        <>
            {products.map(({_id, name, url, price, description: {weight, composition, nutritionalValue: {proteins,fats,carbohydrates,calories} }}) =>
                <div className={styles.product} key={_id}>  
                    <div className={styles.product__imgSection}>
                        <img className={styles.product__img} src={url} alt={name}/>
                    </div>
                    <div className={styles.products__descriptionSection}>
                        <div className={styles.product__title}>{name}</div>
                        <div className={styles.product__price}>{`${price} грн`}</div>
                        <div className={styles.product__weight}>
                            <span className={styles.product__descriptionTitle}>Вес:&ensp;</span>
                            {weight}
                        </div>
                        <div className={styles.product__composition}>
                            <span className={styles.product__descriptionTitle}>Состав:&ensp;</span>
                            {composition}
                        </div>
                        <div className={styles.product__calories}>
                            <table className={styles.product__nutritionalTable}>
                                <tbody>
                                    <tr className={styles.product__nutritionalRow}>
                                        <td className={styles.product__nutritionalColumn}>Белки, грамм</td>
                                        <td className={styles.product__nutritionalColumn}>{proteins}</td>
                                    </tr>
                                    <tr className={styles.product__nutritionalRow}>
                                        <td className={styles.product__nutritionalColumn}>Жиры, грамм</td>
                                        <td className={styles.product__nutritionalColumn}>{fats}</td>
                                    </tr>
                                    <tr className={styles.product__nutritionalRow}>
                                        <td className={styles.product__nutritionalColumn}>Углеводы, грамм</td>
                                        <td className={styles.product__nutritionalColumn}>{carbohydrates}</td>
                                    </tr>
                                    <tr className={styles.product__nutritionalRow}>
                                        <td className={styles.product__nutritionalColumn}>Килокалорий</td>
                                        <td className={styles.product__nutritionalColumn}>{calories}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.product__btnPanel}>
                            <ButtonPanel page='productItem' product={{_id, name, url, price}}/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductItem;