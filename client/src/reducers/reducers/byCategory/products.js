import {
  FETCH_PENCIL_PRODUCTS,
  FETCH_ILLUSTRATION_PRODUCTS,
  FETCH_PHOTOSHOP_PRODUCTS,
} from '../../../actions/types';

const initialState = {
  pencil: [],
  illustration: [],
  photoshop: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ILLUSTRATION_PRODUCTS:
      return { ...state, illustration: [...action.payload] };
    case FETCH_PENCIL_PRODUCTS:
      return { ...state, pencil: [...action.payload] };
    case FETCH_PHOTOSHOP_PRODUCTS:
      return { ...state, photoshop: [...action.payload] };
    default:
      return state;
  }
};
