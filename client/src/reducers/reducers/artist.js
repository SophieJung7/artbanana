import {
  FETCH_ARTIST,
  CREATE_ARTIST,
  EDIT_ARTIST,
  SUBMIT_REVIEW,
} from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARTIST:
    case FETCH_ARTIST:
    case EDIT_ARTIST:
    case SUBMIT_REVIEW:
      return action.payload;
    default:
      return state;
  }
};
