import {setUserDataTC} from './login-reducer';

const CHANGE_INITIALIZE = 'CHANGE_INITIALIZE';

let initialState = {
    initialize: false
};

let appReducer= (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INITIALIZE:
            return {
                ...state,
                initialize: action.initializeState
            }
        default:
            return state
    }
}

const changeInitialize = (initializeState) => ({type: CHANGE_INITIALIZE, initializeState})

export const userInitializeTC = () => async (dispatch) => {
    const userData = JSON.parse(sessionStorage.getItem('user'));
    if(userData) {
        const {login, pass} = userData;
        await dispatch(setUserDataTC(login, pass))
        await dispatch(changeInitialize(true))
    } else dispatch(changeInitialize(true))
}

export default appReducer;