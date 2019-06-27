import {
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_FAILED,
  REGISTER_USER,
  USER_LOADED
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_USER:
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case AUTH_ERROR:
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false
      };
    default:
      return state;
  }
}
