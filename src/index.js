// index.tsx or your entry point file
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.tsx';
import store from './store/store.ts'; // Assuming this is the correct path to your store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
