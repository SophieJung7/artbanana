import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import authReducer from './reducers/auth';
import authErrorCodeReducer from './reducers/authErrorCode';
import changePasswordReducer from './reducers/changePassword';
import artistReducer from './reducers/artist';
import artistsReducer from './reducers/artists';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  authErrorCode: authErrorCodeReducer,
  changePassword: changePasswordReducer,
  artist: artistReducer,
  artists: artistsReducer,
  Intl,
});
