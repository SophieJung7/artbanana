import axios from 'axios';
import { FETCH_USER, SIGN_IN_WITH_US } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

// I wrote this code Before setting up the Backend! Need to change this after connecting localAuth. 
// export const signInWithUs = values => async dispatch => {
//     const res = await axios.post('/auth/local', values);
//     dispatch({
//         type: SIGN_IN_WITH_US,
//         payload: res.data
//     })
// }

export const signInWithUs = () => {
    return {
        type: SIGN_IN_WITH_US
    };
};