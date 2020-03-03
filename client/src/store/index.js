import { createStore, applyMiddleware, compose } from 'redux';
import { IntlActions } from 'react-redux-multilingual';
import reduxThunk from 'redux-thunk';
import Cookie from 'js-cookie';
import reducers from '../reducers';

//For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Find out the user language
const locale = Cookie.get('language') || 'ko';

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);

store.dispatch(IntlActions.setLocale(locale));

export default store;
