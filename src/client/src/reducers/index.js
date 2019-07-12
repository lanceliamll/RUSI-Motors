import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import inquiryReducer from "./inquiryReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  product: productReducer,
  inquiry: inquiryReducer
});
