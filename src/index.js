import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from  './registerServiceWorker';
import {IntlProvider} from 'react-intl';
// import Translation from './support/react-intl-init'

import './i18n';

ReactDOM.render(
		<App/>,
  document.getElementById('root')
);
serviceWorker.register();
