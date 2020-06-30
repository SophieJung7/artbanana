import { FETCH_ARTIST, CREATE_ARTIST, EDIT_ARTIST } from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTIST:
      return action.payload;
    case FETCH_ARTIST:
      return action.payload;
    case EDIT_ARTIST:
      return action.payload;
    default:
      return state;
  }
};
