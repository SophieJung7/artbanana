import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import Cookie from 'js-cookie';
import store from './store';

// Style Files
import './css/bootstrap/bootstrap.min.css';
import './css/main.css';

// Translation File
import translations from './translations/translations';

// Components
import App from './components/App';

// Find out the user language
const locale = Cookie.get('language') || 'ko';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale={locale}>
      <App />
    </IntlProvider>
  </Provider>,
  document.querySelector('#root')
);
