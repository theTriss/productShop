import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCart, getTotalPrice} from '../redux/selectors/cart-selector';
import {getId} from '../redux/selectors/login-selector';
import {removeProductFromCartTC} from '../redux/reducers/cart-reducer';
import Cart from '../components/Cart';
import withRedirect from '../hoc/Redirect';
import withNavigation from '../hoc/Navigation';

const CartContainer = (props) => {
    return (
        <Cart {...props} />
    )
}

const mapDispatchToProps = (state) => {
    return {
        userId: getId(state),
        cart: getCart(state),
        totalPrice: getTotalPrice(state)
    }
}

export default compose(
    withRedirect,
    withNavigation,
    connect(mapDispatchToProps, {removeProductFromCartTC}))(CartContainer);