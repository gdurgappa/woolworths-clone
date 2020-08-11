import categoryReducer from "../modules/Categories/categoryReducer";
import { combineReducers } from "redux";
import productsReducer from "../modules/Products/productsReducer";

export default combineReducers({
  category: categoryReducer,
  products: productsReducer,
});
