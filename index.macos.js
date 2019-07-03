import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/navigation/webNav';
import { Api } from 'renative';
import { MACOS, FORM_FACTOR_DESKTOP, registerServiceWorker } from 'renative';

Api.platform = MACOS;
Api.formFactor = FORM_FACTOR_DESKTOP;

import iconLoader from './src/iconLoader';

iconLoader();

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
