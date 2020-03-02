import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import store from './store';

// Style Files
import './css/bootstrap/bootstrap.min.css';
import './css/main.css';

// Components
import App from './components/App';

// Translation File
import translations from './translations/translations';

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations} locale='kr'>
      <App />
    </IntlProvider>
  </Provider>,
  document.querySelector('#root')
);
