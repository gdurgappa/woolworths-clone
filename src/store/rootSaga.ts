import { watchFetchCategories } from "../modules/Categories/categorySaga";
import { watchFetchProducts } from "../modules/Products/productsSaga";
import { call, all } from "redux-saga/effects";

export default function* main() {
  yield all([watchFetchCategories(), watchFetchProducts()]);
}
