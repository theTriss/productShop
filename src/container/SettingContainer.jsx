import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import Setting from '../components/Setting';
import {changeUserDataTC, deleteAccountTC} from '../redux/reducers/login-reducer';
import {getId} from '../redux/selectors/login-selector';
import withRedirect from '../hoc/Redirect';
import withNavigation from '../hoc/Navigation';

const SettingContainer = (props) => {
    return (
        <Setting {...props} />
    )
}

const mapStateToProps = (state) => {
    return {
        userId: getId(state),
    }
}

export default compose(
    withRedirect,
    withNavigation,
    connect(mapStateToProps, {changeUserDataTC, deleteAccountTC})
)(SettingContainer);