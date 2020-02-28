import axios from 'axios';
import history from '../history';
import {
  FETCH_USER,
  SIGN_OUT,
  CHANGE_PASSWORD,
  AUTH_ERROR_CODE
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};

// Code for catching error message.
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error.response;
  }
);

export const signInWithUs = values => async dispatch => {
  const res = await axios.post('/auth/signin', values);
  if (res.status !== 200) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status
    });
    history.push('/signin');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
    history.push('/');
  }
};

// To destroy authErrorCode
export const removeAuthError = () => {
  return {
    type: AUTH_ERROR_CODE,
    payload: null
  };
};

/// SIGN UP ///
export const signUp = values => async dispatch => {
  const res = await axios.post('/auth/signup', values);
  if (res.status === 401) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status
    });
    history.push('/signup');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
    history.push('/');
  }
};

export const signOut = () => async dispatch => {
  const res = await axios.get('/api/signout');
  dispatch({
    type: SIGN_OUT,
    payload: res.data
  });
};

export const changePW = newPassword => async dispatch => {
  const res = await axios.post('/api/change-password', {
    newPassword: newPassword
  });
  dispatch({
    type: CHANGE_PASSWORD,
    payload: res.data
  });
  if (res) {
    history.push('/change-password/success');
  } else {
    history.push('/error');
  }
};
