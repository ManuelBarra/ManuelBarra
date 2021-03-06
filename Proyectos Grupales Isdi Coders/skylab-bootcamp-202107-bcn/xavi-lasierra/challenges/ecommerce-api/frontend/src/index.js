/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './App';

import configureStore from './redux/store';

render(
  <React.StrictMode>
    <Auth0Provider
      domain={`${process.env.REACT_APP_AUTH0_DOMAIN}`}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID}
      redirectUri={window.location.origin}
    >
      <Provider store={configureStore()}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
