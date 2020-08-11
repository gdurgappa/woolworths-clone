import { takeEvery, takeLatest, put } from "redux-saga/effects";
import * as api from "../../api/request";
import { GET_ALL_CATEGORIES_URL, GET_PRODUCTS_URL } from "../../api/urls";

export function* watchFetchProducts() {
  yield takeLatest("GET_PRODUCT_LIST", fetchProducts);
}

function* fetchProducts(action: any) {
  const allProducts = yield api.post(GET_PRODUCTS_URL, action.payload);
  yield put({ type: "PRODUCTS_LIST_SUCCESS", payload: allProducts });

  //   const products = yield Api.fetch('/products')
}
