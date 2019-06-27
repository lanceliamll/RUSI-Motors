import { GET_PRODUCTS } from "../actions/types";

const initialState = {
  product: {},
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
    default:
      return state;
  }
}
