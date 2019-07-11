import axios from "axios";
import {
  CLEAR_PRODUCT,
  GET_ERRORS,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCT_FAILED
} from "./types";

export const getProducts = () => async dispatch => {
  try {
    const res = await axios.get("/api/motors");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAILED
    });
  }
};

export const getProduct = motorModel => async dispatch => {
  try {
    const res = await axios.get(`/api/motors/model/${motorModel}`);

    dispatch({
      type: CLEAR_PRODUCT
    });

    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_FAILED
    });
  }
};

export const addProduct = productDetails => async dispatch => {
  try {
    await axios.post("/api/motors/create", productDetails);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const editProduct = (productData, id) => async dispatch => {
  try {
    await axios.put(`/api/motors/edit/${id}`, productData);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const toggleIsAvailable = id => async dispatch => {
  try {
    await axios.put(`api/motors/toggle/${id}`);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const deleteProduct = id => async dispatch => {
  try {
    await axios.delete(`/api/motors/${id}`);
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
