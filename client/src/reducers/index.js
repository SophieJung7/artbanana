import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import authReducer from './reducers/auth';
import authErrorCodeReducer from './reducers/authErrorCode';
import changePasswordReducer from './reducers/changePassword';
import proReducer from './reducers/pro';
import photographerReducer from './reducers/photographer';
import photographersReducer from './reducers/photographers';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  authErrorCode: authErrorCodeReducer,
  changePassword: changePasswordReducer,
  pro: proReducer,
  photographer: photographerReducer,
  photographers: photographersReducer,
  Intl,
});
