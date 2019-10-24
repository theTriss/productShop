import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxThunk from 'redux-thunk';
import loginReducer from './reducers/login-reducer';
import marketReducer from './reducers/market-reducer';
import cartReducer from './reducers/cart-reducer';
import appReducer from './reducers/app-reducer';
import searchReducer from './reducers/search-reducer'
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    app: appReducer,
    loginPage: loginReducer,
    marketPage: marketReducer,
    cartPage: cartReducer,
    searchPage: searchReducer,
    form: formReducer,
})

const store = createStore(reducers, applyMiddleware(reduxThunk));

window.store = store;

export default store;