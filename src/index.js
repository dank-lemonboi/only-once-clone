import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux'
import { StripeProvider } from "react-stripe-elements";

import store from './store'


ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_aipeQRMaw8hUU34obnsOWFlD">
      <App />
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);
