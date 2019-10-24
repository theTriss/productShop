import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { addProductToCartTC, changeProductCounterTC } from '../redux/reducers/cart-reducer';
import { getLogin, getId } from '../redux/selectors/login-selector';
import { getCart } from '../redux/selectors/cart-selector';
import styles from './ButtonPanel.module.css';


const ButtonPanel = ({ page, product, login, userId, cart, counterValue, addProductToCartTC, changeProductCounterTC }) => {
    const [counter, setCounter] = useState(counterValue ? counterValue : 1);
    const checkProductInCart = (id) => {
        return cart.some(({ _id }) => id === _id);
    }

    return (
        <div className={`${styles.buttonPanel} ${page === 'market' && styles.buttonPanel_market}`}>
            <div
                className={`${styles.counterButtons} 
                            ${page === 'productItem'
                        ? styles.counterButtons_productItem
                        : page === 'cart' ? styles.counterButtons_cart : ''
                    }`
                }
            >
                <button
                    className={`${styles.counterButtons__btn} ${styles.counterButtons__btn_decrement}`}
                    onClick={page === 'cart'
                        ? () => { setCounter(+counter - 1); changeProductCounterTC(userId, product._id, counter - 1) }
                        : () => setCounter(+counter - 1)
                    }
                    disabled={counter === 1 ? true : false}
                >
                </button>
                <input type="text"
                    className={styles.counterButtons__input}
                    value={counter}
                    onChange={page === 'cart'
                        ? (e) => { setCounter(+e.currentTarget.value); changeProductCounterTC(userId, product._id, +e.currentTarget.value) }
                        : (e) => setCounter(+e.currentTarget.value)
                    }
                    onBlur={(e) => { if (!Number(e.currentTarget.value)) setCounter(1); }}
                />
                <button
                    className={`
                            ${styles.counterButtons__btn} 
                            ${styles.counterButtons__btn_increment}`
                    }
                    onClick={page === 'cart'
                        ? () => { setCounter(+counter + 1); changeProductCounterTC(userId, product._id, counter + 1) }
                        : () => setCounter(+counter + 1)
                    }
                >
                </button>
            </div>
            <div className={`
                        ${styles.cartButton} 
                        ${page === 'cart' && styles.cartButton_cart}`
            }
            >
                {login
                    ? <div className={`
                            ${styles.cartButton__btn} 
                            ${checkProductInCart(product._id) && styles.cartButton__btn_cart}`
                    }
                        onClick={() => !checkProductInCart(product._id) && addProductToCartTC(userId, { ...product, counter })}
                    >
                        {checkProductInCart(product._id)
                            ? <NavLink to='/cart' >В корзину</NavLink>
                            : 'В корзину'
                        }
                    </div>
                    : <NavLink to='/login' className={styles.cartButton__btn}>В корзину</NavLink>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: getId(state),
        login: getLogin(state),
        cart: getCart(state),
    }
}

export default connect(mapStateToProps, { addProductToCartTC, changeProductCounterTC })(ButtonPanel);