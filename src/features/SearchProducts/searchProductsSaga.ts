import { call, put, takeLatest } from "redux-saga/effects";
import * as api from "../../api/request";
import {
  GET_AGGREGATED_SEARCH_PRODUCTS_RESULT_URL,
  GET_PRODUCTS_SEARCH_URL,
} from "../../api/urls";
import { IAction } from "../../types/commonTypes";
import {
  AggregatedProductsResult,
  SearchProductsReponseType,
  SearchProductsReqBody,
} from "../../types/product";

export function* watchGetSearchProductsResultsList() {
  yield put({
    type: "PRODUCTS_SEARCH_INIT",
  });
  yield takeLatest("PRODUCTS_SEARCH_RESULTS", getSearchProductsResultsList);
}
export function* watchGetAggregatedSearchProductsResults() {
  yield put({
    type: "PRODUCTS_SEARCH_INIT",
  });
  yield takeLatest(
    "PRODUCTS_SEARCH_AGGREGATED_RESULTS",
    getAggregatedSearchProductsResults
  );
}

function* getSearchProductsResultsList(action: IAction<string>) {
  const body: SearchProductsReqBody = {
    Filters: [],
    IsSpecial: false,
    Location: "/shop/search/products?searchTerm=" + action.payload,
    PageNumber: 1,
    PageSize: 36,
    SearchTerm: action.payload,
    SortType: "TraderRelevance",
  };

  // const products = yield api.post(GET_PRODUCTS_SEARCH_URL, body);
  const products: SearchProductsReponseType = yield api.searchProducts(
    GET_PRODUCTS_SEARCH_URL,
    body
  );
  yield put({
    type: "PRODUCTS_SEARCH_RESULTS_SUCCESS",
    payload: products,
  });
}

function* getAggregatedSearchProductsResults(action: IAction<string>) {
  const aggregatedResult: {
    SearchCount: AggregatedProductsResult;
  } = yield call(
    api.get,
    GET_AGGREGATED_SEARCH_PRODUCTS_RESULT_URL + "?searchTerm=" + action.payload
  );
  yield put({
    type: "PRODUCTS_SEARCH_AGGREGATED_RESULTS_SUCCESS",
    payload: aggregatedResult.SearchCount,
  });
}
