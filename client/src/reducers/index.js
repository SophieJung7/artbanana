import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import authReducer from './authReducer';
import authErrorCodeReducer from './authErrorCodeReducer';
import changePasswordReducer from './changePasswordReducer';
import proReducer from './proReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  authErrorCode: authErrorCodeReducer,
  changePassword: changePasswordReducer,
  pro: proReducer,
  Intl,
});
