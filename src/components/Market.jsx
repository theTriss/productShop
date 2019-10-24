import React from 'react';
import Product from './Product';
import Pagination from '../common/Pagination/Pagination';
import styles from './Product.module.css';

const Market = ({ products, totalCount, addProductsTC, match: {params: {category}}, query }) => {
    return (
        <div>
            <div className={styles.productsBlock}>
                {products.map(product => <Product {...product} key={product._id}/>)}
            </div>
            <div>
                {totalCount > products.length && <Pagination addProductsTC={addProductsTC} category={category} counter={products.length} query={query}/>}
            </div>
        </div>
    )
}

export default Market;