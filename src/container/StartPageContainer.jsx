import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import StartPage from '../components/StartPage';
import {getHitsProducts} from '../redux/reducers/market-reducer';
import {getProducts} from '../redux/selectors/market-selector';

const StartPageContainer = (props) => {

    useEffect(() => {
        props.getHitsProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <StartPage {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        products: getProducts(state)
    }
}

export default connect(mapStateToProps, {getHitsProducts})(StartPageContainer);