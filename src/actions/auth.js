import axios from 'axios';
import {
  setAlert
} from './alert';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';


// LOAD users
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("https://tranquil-citadel-82505.herokuapp.com/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }

}


//REGISTER user
export const register = ({
  userObject
}) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = userObject;

  try {
    const res = await axios.post("https://tranquil-citadel-82505.herokuapp.com/user", body);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
}



// Login User
export const connexion = ({userObject}) => async dispatch => {
  const body = userObject;

  try {
    const res = await axios.post("https://tranquil-citadel-82505.herokuapp.com/api/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    console.log(err);
    const { errors } = err.response.data;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// lOGOUT/ Clear Profile

export const logout = ()=> dispatch => {
  dispatch({type: LOGOUT});
}
