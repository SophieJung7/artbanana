import axios from 'axios';
import history from '../history';
import { START_CHECKOUT } from './types';

export const startCheckout = (orderDetail) => (dispatch, getState) => {
  const userId = getState().auth._id;
  dispatch({
    type: START_CHECKOUT,
    payload: orderDetail,
  });
  history.push(`/checkout/${userId}`);
};
