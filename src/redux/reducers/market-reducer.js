import {productsAPI} from '../../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCTS = 'ADD_PRODUCTS';

const initialState = {
    catalog: [
        {
            title: 'Молочная продукция',
            src: require('../../common/img/milk-products.svg'),
            category: 'milk-products',
        },
        {
            title: 'Бакалея',
            src: require('../../common/img/grocery-products.svg'),
            category: 'grocery-products',
        },
        {
            title: 'Овощи,Фрукты',
            src: require('../../common/img/fruits_and_vegetables-products.svg'),
            category: 'fruits_and_vegetables-products',
        },
        {
            title: 'Мясная продукция',
            src: require('../../common/img/meat-products.svg'),
            category: 'meat-products',
        },
        {
            title: 'Морепродукты',
            src: require('../../common/img/sea-products.svg'),
            category: 'sea-products',
        },
        {
            title: 'Хлебобулочные изделия',
            src: require('../../common/img/bakery-products.svg'),
            category: 'bakery-products',
        },
        {
            title: 'Кондитерские изделия',
            src: require('../../common/img/sweet-products.svg'),
            category: 'sweet-products',
        },
        {
            title: 'Безалкогольные Напитки',
            src: require('../../common/img/soft_drinks-products.svg'),
            category: 'soft_drinks-products',
        },
        {
            title: 'Спиртные напитки',
            src: require('../../common/img/alcohol_drinks-products.svg'),
            category: 'alcohol_drinks-products',
        },
    ],
    products: [],
    totalCount: null,
}

const marketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
                totalCount: action.totalCount,
            }
        case ADD_PRODUCTS:
            return {
                ...state,
                products: [...state.products, ...action.products]
            }
        default:
            return state
    }
}

export const setProducts = (products, totalCount) => ({type: SET_PRODUCTS, products, totalCount});
const addProducts = (products) => ({type: ADD_PRODUCTS, products})

export const getProductsTC = (category) => async (dispatch) => {
    const result = await productsAPI.getProductsByСriteria(category) 
    const {statusCode, products, totalCount} = result.data;
    statusCode === 1 && dispatch(setProducts(products,totalCount));
}

export const addProductsTC = (category, query, page) => async (dispatch) => {
    const result = await productsAPI.getProductsByСriteria(category, query, page);
    const {statusCode, products} = result.data;
    statusCode === 1 && dispatch(addProducts(products))
}

export const getSingleProductTC = (productId) => async (dispatch) => {
    const result = await productsAPI.getSingleProduct(productId);
    const {statusCode, products} = result.data;
    statusCode === 1 && dispatch(setProducts(products));
}

export const getHitsProducts = () => async (dispatch) => {
    const result = await productsAPI.getHits();
    const {statusCode, products} = result.data;
    statusCode === 1 && dispatch(setProducts(products, null));
}


export default marketReducer