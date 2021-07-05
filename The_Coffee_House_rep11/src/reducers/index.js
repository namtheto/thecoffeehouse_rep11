import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import authReducer from "./authReducer";
import storeReducer from "./storeReducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";

// ket noi cac reducer lai voi nhau
const rootReducer = combineReducers({
  cartReducer,
  storeReducer,
  authReducer,
  productReducer,
  categoryReducer
});

export default rootReducer;
