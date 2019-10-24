import {cartAPI} from '../../api/api';

const SET_CART = 'SET_CART';
const ADD_PRODUCT_TO_CART = 'ADD_TO_CART';
const CLEAR_CART = 'CLEAR_CART';
const CHANGE_PRODUCT_COUNTER = 'CHANGE_PRODUCT_COUNTER';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.cart
            }
        case ADD_PRODUCT_TO_CART: 
            return {
                ...state,
                cart: [...state.cart, {...action.product}]
        }
        case CLEAR_CART:
            return {
                ...state,
                cart: null
            }
        case CHANGE_PRODUCT_COUNTER:
            return {
                ...state,
                cart: state.cart.map((product) => action.productId === product._id 
                    ? {...product, counter: action.counter} 
                    : product)
            }
        case REMOVE_PRODUCT_FROM_CART: 
            return {
                ...state,
                cart: state.cart.filter(({_id}) => _id !== action.productId)
            }
        default:
            return state
    }
}

const addProductToCart = (product) => ({type: ADD_PRODUCT_TO_CART, product});
const changeProductCounter = (productId, counter) => ({type: CHANGE_PRODUCT_COUNTER, productId, counter});
const removeProductFromCart = (productId) => ({type: REMOVE_PRODUCT_FROM_CART, productId})
export const setCart = (cart) => ({type: SET_CART, cart});
export const clearCart = () => ({type: CLEAR_CART});

export const addProductToCartTC = (userId, product) => async (dispatch) => {
    const result = await cartAPI.addProduct(userId, product);
    result.status === 200 && dispatch(addProductToCart(product));
}
export const changeProductCounterTC = (userId, productId, counter) => async (dispatch) => {
    const result = await cartAPI.changeProductCounter(userId, productId, counter)
    result.status === 200 && dispatch(changeProductCounter(productId, counter));
}
export const removeProductFromCartTC = (userId, productId) => async (dispatch) => {
    const result = await cartAPI.deleteProduct(userId, productId);
    result.status === 200 && dispatch(removeProductFromCart(productId));
}

export default cartReducer