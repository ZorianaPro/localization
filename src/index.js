import React from 'react';
import i18n from './i18n/i18n';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from  './registerServiceWorker';
import {I18nextProvider} from 'react-i18next';


ReactDOM.render(
	<I18nextProvider i18n={i18n}>
		<App/>
	</I18nextProvider>,
  document.getElementById('root')
);
serviceWorker.register();
