import axios from "axios";
import {
  GET_ERRORS,
  GET_INQUIRIES,
  GET_INQUIRY,
  GET_INQUIRYCODE,
  STORE_INQUIRY
} from "./types";

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

export const editInquiry = (inquiryData, id) => async dispatch => {
  try {
    await axios.put(`/api/inquiry/${id}`, inquiryData);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const deleteInquiry = id => async dispatch => {
  try {
    await axios.delete(`/api/inquiry/${id}`);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const addInquiry = inquiryData => async dispatch => {
  try {
    let res = await axios.post("/api/inquiry/create", inquiryData);

    dispatch({
      type: STORE_INQUIRY,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getInquiryCode = id => async dispatch => {
  try {
    let res = await axios.get(`/api/inquiry/${id}`);

    dispatch({
      type: GET_INQUIRYCODE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
