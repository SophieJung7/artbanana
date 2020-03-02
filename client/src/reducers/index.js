import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import authReducer from './authReducer';
import authErrorCodeReducer from './authErrorCodeReducer';
import changePasswordReducer from './changePasswordReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  authErrorCode: authErrorCodeReducer,
  changePassword: changePasswordReducer,
  Intl
});
