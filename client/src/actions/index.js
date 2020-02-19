import axios from 'axios';
import history from '../history';
import { FETCH_USER, AUTH_ERROR_CODE } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const signUp = values => async dispatch => {
    const res = await axios.post('/auth/signup', values);
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
    history.push('/');
};

// Code for catching error message. 
axios.interceptors.response.use(response => {
    return response;
}, (error) => {
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
        history.push('/');
    }
    else {
        dispatch({
            type: FETCH_USER,
            payload: res.data
        });
        history.push('/');
    }
};


