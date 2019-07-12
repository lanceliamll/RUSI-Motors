import { GET_INQUIRIES } from "../actions/types";

const initialState = {
  inquiry: null,
  inquiries: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_INQUIRIES:
      return {
        ...state,
        inquiries: payload,
        loading: false
      };
    default:
      return state;
  }
}
