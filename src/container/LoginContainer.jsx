import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getLogin, getId} from '../redux/selectors/login-selector';
import Login from '../components/Login'
import {setUserDataTC, createNewAccountTC} from '../redux/reducers/login-reducer';
import withNavigation from '../hoc/Navigation';

const LoginContainer = (props) => {
    return (
        <Login {...props}/>
    )
}

const mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        id: getId(state),
    }
} 

export default compose(
    withNavigation,
    connect(mapStateToProps, {setUserDataTC, createNewAccountTC})
)(LoginContainer)