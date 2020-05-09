import { FETCH_PHOTOGRAPHERS, CREATE_PHOTOGRAPHER } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOGRAPHERS:
      return action.payload;
    case CREATE_PHOTOGRAPHER:
      return [...state, action.payload];
    default:
      return state;
  }
};
