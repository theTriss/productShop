import React, {useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getSingleProductTC} from '../redux/reducers/market-reducer';
import {getProducts} from '../redux/selectors/market-selector';
import withNavigation from '../hoc/Navigation';

const ProductItemContainer = (props) => {
    useEffect(() => {
        props.getSingleProductTC(props.match.params.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProductItem {...props} />
    )
} 

const mapStateToProps = (state) => {
    return {
        products: getProducts(state)
    }
}

export default compose(
    withNavigation,
    connect(mapStateToProps, {getSingleProductTC}),
)(ProductItemContainer);