import axios from 'axios';
import { GET_ERRORS, REGISTER_USER_DATA, ADDRESS_TO_LATLNG } from './types';
import Geocode from 'react-geocode';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      dispatch(setCurrentUser(res.data));
      dispatch(convertAddress(res.data.address, res.data.zipcode));
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

export const convertAddress = (address, zipcode) => dispatch => {
  let formattedAddress = address.split(' ').join('+') + ',';
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}+${zipcode}&key=AIzaSyAv3zg5iVWUsWLoAcsDO1-DqyWlcPsAHow`
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: ADDRESS_TO_LATLNG,
        payload: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        }
      });
    })
    .catch(err => console.log(err));
  // dispatch({
  //   type: ADDRESS_TO_LATLNG,
  //   payload: { lat, lng }
  // });
};
