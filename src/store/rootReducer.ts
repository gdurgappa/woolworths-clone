import categoryReducer from "../modules/Categories/categoryReducer";
import { combineReducers } from "redux";
import productsReducer from "../modules/Products/productsReducer";
import searchProductsReducer from "../modules/SearchProducts/searchProductsReducer";

export default combineReducers({
  category: categoryReducer,
  products: productsReducer,
  search: searchProductsReducer,
});
