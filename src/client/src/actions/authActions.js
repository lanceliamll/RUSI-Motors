import axios from "axios";
import { GET_ERRORS, REGISTER_USER } from "./types";

// REGISTER FUNCTION
export const registerUser = userData => async dispatch => {
  try {
    const res = await axios.post("/api/users/register", userData);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
