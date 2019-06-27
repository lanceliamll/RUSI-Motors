import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorsReducer from "./errorsReducer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorsReducer,
  product: productReducer
});
