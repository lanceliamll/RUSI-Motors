import axios from "axios";
import setAuthToken from "../helpers/setAuthToken";
import {
  AUTH_ERROR,
  GET_ERRORS,
  LOGIN_FAILED,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_FAILED,
  REGISTER_USER,
  USER_LOADED
} from "./types";

// LOAD USER

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("api/users");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// REGISTER FUNCTION
export const registerUser = userData => async dispatch => {
  try {
    const res = await axios.post("/api/users/register", userData);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    dispatch({
      type: REGISTER_FAILED
    });
  }
};

export const loginUser = userData => async dispatch => {
  try {
    const res = await axios.post("/api/users/login", userData);

    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
    dispatch({
      type: LOGIN_FAILED
    });
  }
};

export const logoutUser = () => async dispatch => {
  dispatch({
    type: LOGOUT_USER
  });
};
