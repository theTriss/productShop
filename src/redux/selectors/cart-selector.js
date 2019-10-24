import { createSelector } from 'reselect';

export const getCart = (state) => state.cartPage.cart;
export const getTotalPrice = createSelector(getCart, products =>
    products.reduce((totalPrice, {price, counter}) => totalPrice + price * counter, 0)
);
