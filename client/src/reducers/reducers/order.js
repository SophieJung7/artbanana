import { START_CHECKOUT } from '../../actions/types';

const initialState = {
  artistId: '',
  price: 0,
  size: 'sizeS',
  quantity: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_CHECKOUT:
      return action.payload;
    default:
      return state;
  }
};
