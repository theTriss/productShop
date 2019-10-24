import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Market from '../components/Market';
import ProductsNotFound from '../components/ProductsNotFound';
import {addProductsTC} from '../redux/reducers/market-reducer';
import {searchProductsTC} from '../redux/reducers/search-reducer';
import {getProducts, getTotalCount} from '../redux/selectors/market-selector';
import {getQuery} from '../redux/selectors/search-selector';
import withNavigation from '../hoc/Navigation';

const SearchContainer = (props) => {
    useEffect(() => {
        props.query && props.searchProductsTC(props.query, props.history);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.query])

    return (
        props.products.length === 0
            ? <ProductsNotFound query={props.query}/>
            : <Market {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        products: getProducts(state),
        totalCount: getTotalCount(state),
        query: getQuery(state),
    }
}

export default compose(
    withNavigation,
    connect(mapStateToProps, {searchProductsTC, addProductsTC}),
)(SearchContainer);