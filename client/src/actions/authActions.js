import axios from 'axios';
import { GET_ERRORS, REGISTER_USER_DATA } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      dispatch(setCurrentUser(res.data));
      history.push('/verify');
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = user => {
  return {
    type: REGISTER_USER_DATA,
    payload: user
  };
};
