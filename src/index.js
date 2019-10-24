import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import App from './container/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
