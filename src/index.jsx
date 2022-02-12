import ReactDOM from 'react-dom';
import React from 'react';
import App from './App.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import auth0_domain from '../config.js';
import auth0_clientId from '../config.js';

ReactDOM.render(
  <Auth0Provider
    domain='dev-f618y6b6.us.auth0.com'
    clientId='EOtKZO1g3Tjd0HMroT9RMaypO5ng9nUL'
    redirectUri={window.location.origin}
  >
    <App/>
  </Auth0Provider>,
  document.getElementById('app')
);