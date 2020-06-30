import axios from 'axios';
import history from '../history';
import {
  FETCH_USER,
  SIGN_OUT,
  CHANGE_PASSWORD,
  AUTH_ERROR_CODE,
} from './types';

// Code for catching error message.
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

const signInWithUs = (values) => async (dispatch) => {
  const res = await axios.post('/auth/signin', values);
  if (res.status !== 200) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status,
    });
    history.push('/signin');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
    history.push('/');
  }
};

// To destroy authErrorCode
const removeAuthError = () => {
  return {
    type: AUTH_ERROR_CODE,
    payload: null,
  };
};

/// SIGN UP ///
const signUp = (values) => async (dispatch) => {
  const res = await axios.post('/auth/signup', values);
  if (res.status === 401 || res.status === 409) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status,
    });
    history.push('/signup');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
    history.push('/');
  }
};

const signOut = () => async (dispatch) => {
  const res = await axios.get('/api/signout');
  dispatch({
    type: SIGN_OUT,
    payload: res.data,
  });
};

const changePW = (newPassword) => async (dispatch) => {
  const res = await axios.post('/api/change-password', {
    newPassword: newPassword,
  });
  dispatch({
    type: CHANGE_PASSWORD,
    payload: res.data,
  });
  if (res) {
    history.push('/change-password/success');
  } else {
    history.push('/error');
  }
};

export { fetchUser, signInWithUs, removeAuthError, signUp, signOut, changePW };
