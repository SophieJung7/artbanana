import { FETCH_EDITION_ARTISTS } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_EDITION_ARTISTS:
      return action.payload;
    default:
      return state;
  }
};
