import {
  CREATE_PRODUCT,
  EDIT_PRODUCT,
  FETCH_PRODUCT,
} from '../../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
    case EDIT_PRODUCT:
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
