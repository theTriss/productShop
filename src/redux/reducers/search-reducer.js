import {setProducts} from './market-reducer';
import {searchAPI} from '../../api/api';
import {reset} from 'redux-form';

const CHANGE_QUERY = 'CHANGE_QUERY';

const initialState = {
    query: undefined
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.query
            }
        default:
            return {
                ...state
            }
    }
}

export const changeQuery = (query) => ({type: CHANGE_QUERY, query});

export const changeQueryTC = (query, history) => async (dispatch) => {
    await dispatch(changeQuery(query));
    await dispatch(reset('search'))
    history.push('/search');
};

export const searchProductsTC = (query) => async (dispatch) => {
    const result = await searchAPI.searchProducts(query);
    const {statusCode, products, totalCount} = result.data;
    if(statusCode === 1) {
        dispatch(setProducts(products, totalCount));
    }
}

export default searchReducer;