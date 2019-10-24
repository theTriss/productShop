import React from 'react';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {logOutTC} from '../redux/reducers/login-reducer';
import {getLogin} from '../redux/selectors/login-selector';
import Header from '../components/Header';
import {changeQueryTC} from '../redux/reducers/search-reducer';

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
}

const mapDispatchToProps = (state) => {
    return {
        login: getLogin(state)
    }
}

export default compose(
    connect(mapDispatchToProps, {logOutTC, changeQueryTC}),
    withRouter
)(HeaderContainer);