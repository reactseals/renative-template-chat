import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from 'renative';
import { MACOS, FORM_FACTOR_DESKTOP, registerServiceWorker } from 'renative';
import App from './src/App';

Api.platform = MACOS;
Api.formFactor = FORM_FACTOR_DESKTOP;

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
