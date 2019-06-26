import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ERRORS:
      return payload;
    default:
      return state;
  }
}
