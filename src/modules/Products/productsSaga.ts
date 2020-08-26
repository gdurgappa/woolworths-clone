import { takeEvery, takeLatest, put, call } from "redux-saga/effects";
import * as api from "../../api/request";
import { GET_ALL_CATEGORIES_URL, GET_PRODUCTS_URL } from "../../api/urls";
import {
  FetchProductsReqBody,
  ProductType,
  IAction,
} from "../../types/product";

export function* watchFetchProducts() {
  yield takeLatest("GET_PRODUCT_LIST", fetchProducts);
}

function* fetchProducts(action: IAction<FetchProductsReqBody>) {
  // const allProducts = yield api.post(GET_PRODUCTS_URL, action.payload);

  const allProducts = yield api.fetchProducts<FetchProductsReqBody, any[]>(
    GET_PRODUCTS_URL,
    action.payload
  );

  // const allProducts = yield call(
  //   api.fetchProducts<FetchProductsReqBody, ProductType[]>(
  //     GET_PRODUCTS_URL,
  //     action.payload
  //   )
  // );

  yield put({ type: "PRODUCTS_LIST_SUCCESS", payload: allProducts });

  //   const products = yield Api.fetch('/products')
}
