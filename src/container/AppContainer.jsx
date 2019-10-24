import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {userInitializeTC} from '../redux/reducers/app-reducer';
import App from '../components/App';


const AppContainer = (props) => {

  useEffect(() => {
    props.userInitializeTC();
  }, [props])

  return (
    <App {...props} />
  )
}
  
  const mapStateToProps = (state) => {
    return {
      initialize: state.app.initialize,
    }
  }

  export default connect(mapStateToProps, {userInitializeTC})(AppContainer);