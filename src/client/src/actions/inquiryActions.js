import axios from "axios";
import { GET_ERRORS, GET_INQUIRIES, GET_INQUIRY } from "./types";

export const getInquiries = () => async dispatch => {
  try {
    let res = await axios.get("/api/inquiry");

    dispatch({
      type: GET_INQUIRIES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getInquiry = randomCode => async dispatch => {
  try {
    let res = await axios.get(`api/inquiry/code/${randomCode}`);

    dispatch({
      type: GET_INQUIRY,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
