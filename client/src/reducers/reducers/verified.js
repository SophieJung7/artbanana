import { VERIFICATION_STATUS } from '../../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case VERIFICATION_STATUS:
      return action.payload;
    default:
      return state;
  }
};
