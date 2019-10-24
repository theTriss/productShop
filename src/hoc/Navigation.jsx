import React from 'react';
import {withRouter} from 'react-router';
import PageNavigation from '../common/PageNavigation/PageNavigation';

const withNavigation = (Component) => {
    let ComponentWithNavigation = (props) => {
        return (
            <>
                <PageNavigation url={props.location.pathname}/>
                <Component {...props}/>
            </>
        )
    }
    ComponentWithNavigation = withRouter(ComponentWithNavigation);
    return ComponentWithNavigation;
}

export default withNavigation;