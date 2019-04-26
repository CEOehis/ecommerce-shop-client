import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';

import './index.css';
import AppRouting from './containers/AppRouting';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import isLoggedIn from './utils/isLoggedIn';
import { setLoggedInUser, signOut } from './actions/auth.action';

// global axios defaults
axios.defaults.withCredentials = true;
const { token } = localStorage;
// eslint-disable-next-line dot-notation
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
global.axios = axios;

const store = configureStore();

if (isLoggedIn()) {
  store.dispatch(setLoggedInUser());
} else {
  store.dispatch(signOut());
}

const Main = () => (
  <Provider store={store}>
    <AppRouting />
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot) module.hot.accept();
