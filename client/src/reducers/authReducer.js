import { REGISTER_USER_DATA } from '../actions/types';

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
    default:
      return state;
  }
}
