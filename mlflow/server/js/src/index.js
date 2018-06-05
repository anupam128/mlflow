import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './Store';

const root = (
  <Provider store={store}>
    <App/>
  </Provider>
);
ReactDOM.render(root, document.getElementById('root'));

registerServiceWorker();
