import { FETCH_USER, SIGN_OUT } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case SIGN_OUT:
      return false;
    default:
      return state;
  }
};
