import {authAPI} from '../../api/api';
import {stopSubmit} from 'redux-form';
import {setCart, clearCart} from './cart-reducer';
import {reset} from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';
const LOG_OUT = 'LOG_OUT';

const initialState = {
    id: null,
    login: null,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.id,
                login: action.login,
            }
        case LOG_OUT:
            return {
                ...state,
                id: null,
                login: null,
            }
        default:
            return state
    }
}

const setUserData = (id, login) => ({type: SET_USER_DATA, id, login});
const logOut = () => ({type: LOG_OUT});

export const setUserDataTC = (userLogin, userPassword) => async (dispatch) => {
    const result = await authAPI.getAuth(userLogin, userPassword);
    const {statusCode, id, login, pass, cart, message} = result.data;
    if(statusCode === 1) {
         dispatch(setUserData(id, login));
         dispatch(setCart(cart));
         sessionStorage.setItem('user', JSON.stringify({pass, login}));
    } else dispatch(stopSubmit('login', {_error: message}));
}

export const createNewAccountTC = (userLogin, userPassword, userEmail) => async (dispatch) => {
    const result = await authAPI.createAccount(userLogin, userPassword, userEmail);
    const {statusCode, message} = result.data;
    statusCode === 1 ? dispatch(setUserDataTC(userLogin, userPassword)) : dispatch(stopSubmit('registery', {_error: message}));
}

export const changeUserDataTC = (userId, newData) => async (dispatch) => {
    const result = await authAPI.changeData(userId, newData);
    const {statusCode, message} = result.data;
    if(statusCode === 1) {
        let {login, pass} = JSON.parse(sessionStorage.getItem('user'));
        if(newData.login) {
            login = newData.login;
            dispatch(setUserData(userId, newData.login));
        }
        if(newData.userPassword) pass = newData.userPassword;
        sessionStorage.setItem('user', JSON.stringify({login, pass}));
        dispatch(reset('setting'));
    } else dispatch(stopSubmit('setting', {_error: message}));
}

export const logOutTC = () => (dispatch) => {
    sessionStorage.removeItem('user');
    dispatch(logOut());
    dispatch(clearCart());
}

export const deleteAccountTC = (userId) => async (dispatch) => {
    const result = await authAPI.deleteAccount(userId);
    result.status === 200 && dispatch(logOutTC());
}

export default loginReducer