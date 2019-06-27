import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCTS_FAILED } from "./types";

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
