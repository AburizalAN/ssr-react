import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');
ReactDOM.hydrateRoot(root, (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
));
