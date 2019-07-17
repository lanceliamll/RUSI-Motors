import {
  GET_INQUIRIES,
  GET_INQUIRY,
  GET_INQUIRYCODE,
  STORE_INQUIRY
} from "../actions/types";

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
        inquiry: null,
        loading: false
      };
    case GET_INQUIRY:
    case GET_INQUIRYCODE:
    case STORE_INQUIRY:
      return {
        ...state,
        inquiry: payload,
        inquiries: [],
        loading: false
      };
    default:
      return state;
  }
}
