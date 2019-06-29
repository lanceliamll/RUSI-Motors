import {
  CLEAR_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCT_FAILED
} from "../actions/types";

const initialState = {
  product: null,
  products: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false
      };
    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false
      };
    case GET_PRODUCTS_FAILED:
    case GET_PRODUCT_FAILED:
    case CLEAR_PRODUCT:
      return {
        ...state,
        product: {},
        products: [],
        loading: false
      };
    default:
      return state;
  }
}
