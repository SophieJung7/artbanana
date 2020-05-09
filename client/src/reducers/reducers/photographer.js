import { FETCH_PHOTOGRAPHER } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PHOTOGRAPHER:
      return action.payload;
    default:
      return state;
  }
};
