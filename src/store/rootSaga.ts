import { all } from "redux-saga/effects";
import { watchFetchCategories } from "../features/Categories/categorySaga";
import { watchFetchProducts } from "../features/Products/productsSaga";
import {
  watchGetAggregatedSearchProductsResults,
  watchGetSearchProductsResultsList,
} from "../features/SearchProducts/searchProductsSaga";

export default function* main() {
  yield all([
    watchFetchCategories(),
    watchFetchProducts(),
    watchGetAggregatedSearchProductsResults(),
    watchGetSearchProductsResultsList(),
  ]);
}
