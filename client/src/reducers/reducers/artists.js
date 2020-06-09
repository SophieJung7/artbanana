import { FETCH_ARTISTS, CREATE_ARTIST } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ARTISTS:
      return action.payload;
    case CREATE_ARTIST:
      return [...state, action.payload];
    default:
      return state;
  }
};
