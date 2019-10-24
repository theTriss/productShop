import React from 'react';
import styles from './Cart.module.css';
import ButtonPanel from './ButtonPanel';
import Button from '../common/Button/Button';
import emptyСart from '../common/img/emptyСart.png'

const Cart = ({ cart, userId, totalPrice, removeProductFromCartTC }) => {
    return (
        <>
            {(cart && cart.length > 0)
                ? <div className={styles.cartSection}>
                    {cart.map(({ _id, name, url, price, counter }) => <div className={styles.producItem} key={_id}>
                        <div className={styles.producItem__title}>{name}</div>
                        <div className={styles.producItem__imgSection}><img src={url} alt={name} className={styles.producItem__img} /></div>
                        <div className={styles.producItem__price}>{`${price} грн`}</div>
                        <div className={styles.producItem__counter}>
                            <ButtonPanel page='cart' product={{ _id, name, url, price }} counterValue={counter} />
                        </div>
                        <button
                            className={styles.producItem__button}
                            onClick={() => removeProductFromCartTC(userId, _id)}
                        >
                        </button>
                    </div>)
                    }
                </div>
                : <div className={styles.cart__imgSection}>
                    <img 
                        className={styles.cart__img}
                        src={emptyСart}
                        alt="cart is empty" />
                </div>
            }
            {totalPrice !== 0 && <div className={styles.cart__totalPrice}>Всего товаров на сумму: {totalPrice} грн</div>}
            <Button text='Продолжить покупки' link='/market'/>
        </>
    )
}

export default Cart;