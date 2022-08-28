import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { renderMatches, Location } from 'react-router';
import { Provider } from 'react-redux';
import { storeClient } from './store';

const root = document.getElementById('root');

const store = storeClient(window.INITIAL_STATE)

ReactDOM.hydrateRoot(root, (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Routes />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
));
