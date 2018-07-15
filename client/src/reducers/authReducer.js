import { REGISTER_USER_DATA, ADDRESS_TO_LATLNG } from '../actions/types';

const initialState = {
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_DATA:
      return {
        ...state,
        user: action.payload
      };
    case ADDRESS_TO_LATLNG:
      return {
        ...state,
        user: { ...state.user, latlng: action.payload }
      };
    default:
      return state;
  }
}
