import { AUTH_ERROR_CODE, FETCH_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case AUTH_ERROR_CODE:
            return action.payload || false;
        case FETCH_USER:
            return { ...state, authErrorCode: null };
        default:
            return state;
    }
};

