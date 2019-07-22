import React from 'react';
import ReactDOM from 'react-dom';
import { Api } from 'renative';
import { WEB, FORM_FACTOR_DESKTOP, registerServiceWorker } from 'renative';
import App from './src/App';

Api.platform = WEB;
Api.formFactor = FORM_FACTOR_DESKTOP;

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();
