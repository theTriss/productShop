import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Market from '../components/Market';
import {getProductsTC, addProductsTC} from '../redux/reducers/market-reducer';
import {getProducts, getTotalCount} from '../redux/selectors/market-selector';
import withNavigation from '../hoc/Navigation';

const MarketContainer = (props) => {
    useEffect(() => {
        props.getProductsTC(props.match.params.category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.category])

    return (
        <Market {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        totalCount: getTotalCount(state),
    }
}

export default compose(
    withNavigation,
    connect(mapStateToProps, {getProductsTC, addProductsTC}),
)(MarketContainer);