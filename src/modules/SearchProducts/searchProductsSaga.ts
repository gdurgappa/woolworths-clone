import * as api from "../../api/request";
import {
  GET_PRODUCTS_SEARCH_URL,
  GET_AGGREGATED_SEARCH_PRODUCTS_RESULT_URL,
} from "../../api/urls";
import { put, takeLatest, call } from "redux-saga/effects";

export function* watchGetSearchProductsResultsList() {
  yield takeLatest("PRODUCTS_SEARCH_RESULTS", getSearchProductsResultsList);
}
export function* watchGetAggregatedSearchProductsResults() {
  yield takeLatest(
    "PRODUCTS_SEARCH_AGGREGATED_RESULTS",
    getAggregatedSearchProductsResults
  );
}

function* getSearchProductsResultsList(action: any) {
  const body = {
    Filters: [],
    IsSpecial: false,
    Location: "/shop/search/products?searchTerm=" + action.payload,
    PageNumber: 1,
    PageSize: 36,
    SearchTerm: action.payload,
    SortType: "TraderRelevance",
  };

  const products = yield api.post(GET_PRODUCTS_SEARCH_URL, body);
  yield put({
    type: "PRODUCTS_SEARCH_RESULTS_SUCCESS",
    payload: products,
  });
}

function* getAggregatedSearchProductsResults(action: any) {
  const aggregatedResult = yield call(
    api.get,
    GET_AGGREGATED_SEARCH_PRODUCTS_RESULT_URL + "?searchTerm=" + action.payload
  );
  yield put({
    type: "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS",
    payload: aggregatedResult.SearchCount,
  });
}
