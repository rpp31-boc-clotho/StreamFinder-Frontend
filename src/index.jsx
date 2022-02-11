import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain=""
    clientId=""
    redirectUri={window.location.origin}
  >
    <App/>
  </Auth0Provider>,
  document.getElementById('app')
);