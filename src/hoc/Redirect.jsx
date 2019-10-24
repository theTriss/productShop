import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getLogin} from '../redux/selectors/login-selector';

const withRedirect = (Component) => {
    const ComponentWithRedirect = (props) => {
        return (
            <>
                {props.login ?  <Component {...props} /> : <Redirect to='/login' />}
            </>
        )
    }

    const mapStateToProps = (state) => {
        return {
            login: getLogin(state)
        }
    }

    return connect(mapStateToProps, {})(ComponentWithRedirect);
}

export default withRedirect;