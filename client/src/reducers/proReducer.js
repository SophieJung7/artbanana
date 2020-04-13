import { FETCH_PRO } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PRO:
      return action.payload || false;
    default:
      return state;
  }
};
