import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from '@edx/frontend-platform/i18n';
import {
  APP_READY,
  initialize,
  subscribe,
} from '@edx/frontend-platform';
import { messages as footerMessages } from '@edx/frontend-component-footer';

import appMessages from './i18n';
import App from './App';

subscribe(APP_READY, () => {
  ReactDOM.render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>,
    document.getElementById('root'));
});

initialize({
  messages: [
    appMessages,
    footerMessages,
  ],
  requireAuthenticatedUser: true,
});
