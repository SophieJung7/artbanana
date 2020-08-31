import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IntlReducer as Intl } from 'react-redux-multilingual';
import authReducer from './reducers/auth';
import authErrorCodeReducer from './reducers/authErrorCode';
import changePasswordReducer from './reducers/changePassword';
import artistReducer from './reducers/artist';
import orderReducer from './reducers/order';
import productReducer from './reducers/product';
import productsReducer from './reducers/products';
import byCategoryProductsReducer from './reducers/byCategory/products';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  authErrorCode: authErrorCodeReducer,
  changePassword: changePasswordReducer,
  artist: artistReducer,
  order: orderReducer,
  product: productReducer,
  products: productsReducer,
  byCategory: byCategoryProductsReducer,
  Intl,
});
