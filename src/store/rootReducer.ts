import categoryReducer from "../features/Categories/categoryReducer";
import { combineReducers } from "redux";
import productsReducer from "../features/Products/productsReducer";
import searchProductsReducer from "../features/SearchProducts/searchProductsReducer";

export default combineReducers({
  category: categoryReducer,
  products: productsReducer,
  search: searchProductsReducer,
});
