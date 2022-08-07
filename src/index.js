import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.hydrateRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
