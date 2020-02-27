import { CHANGE_PASSWORD } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return action.payload;
    default:
      return state;
  }
};
