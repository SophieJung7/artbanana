import axios from 'axios';
import history from '../history';
import { FETCH_USER } from './types';

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

export const signInWithUs = values => async dispatch => {
    const res = await axios.post('/auth/signin', values);
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
    history.push('/signinsuccess');
};

