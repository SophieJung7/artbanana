import { FETCH_ONE_ARTIST_PRODUCTS } from '../../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ONE_ARTIST_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
