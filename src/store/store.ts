import { createStore, combineReducers } from "redux";
import categoryReducer from "../modules/Categories/categoryReducer";
import productsReducer from "../modules/Products/producstReducer";

let rootReducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

export default createStore(rootReducers);
