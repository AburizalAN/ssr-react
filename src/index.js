import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
ReactDOM.hydrateRoot(root, (
  <React.StrictMode>
    <App name={"Abuuu"} />
  </React.StrictMode>
));
