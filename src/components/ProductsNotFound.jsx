import React from 'react';
import Button from '../common/Button/Button';

const ProductsNotFound = ({query}) => {
    return (
        <div style={{padding: '1em 0'}}>
            <div style={{textAlign: 'center', fontSize: '1.5em'}}>По Вашему запросу 
                <span style={{fontWeight: 'bold'}}> {query}</span> ничего не найдено!
            </div>
            <Button text='Поискать в магазине' link='/market' />
        </div>
    )
}

export default ProductsNotFound;