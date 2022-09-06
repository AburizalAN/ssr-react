import React from 'react';
import * as ReactDOM from 'react-dom/client';
import MainRoutes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { storeClient } from './store';
import App from './App';

const root = document.getElementById('root');

const store = storeClient(window.INITIAL_STATE)

ReactDOM.hydrateRoot(root, (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App routes={MainRoutes} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
));
