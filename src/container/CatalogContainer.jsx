import React from 'react';
import Catalog from '../components/Catalog';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getCatalog} from '../redux/selectors/market-selector';
import withNavigation from '../hoc/Navigation';

const CatalogContainer = (props) => {
    return (
        <Catalog {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        catalog: getCatalog(state)
    }
}

export default compose(
    withNavigation,
    connect(mapStateToProps, {})
)(CatalogContainer);