import { put, takeLatest } from "redux-saga/effects";
import * as api from "../../api/request";
import { GET_PRODUCTS_URL } from "../../api/urls";
import { FetchProductsReqBody, IAction } from "../../types/product";

export function* watchFetchProducts() {
  yield takeLatest("GET_PRODUCT_LIST", fetchProducts);
}

function* fetchProducts(action: IAction<FetchProductsReqBody>) {
  // const allProducts = yield api.post(GET_PRODUCTS_URL, action.payload);

  const allProducts = yield api.fetchProducts<FetchProductsReqBody>(
    GET_PRODUCTS_URL,
    action.payload
  );
  console.log("allProducts", allProducts);
  // const allProducts:ProductType[] = yield call(
  //   api.fetchProducts,
  //     {url: GET_PRODUCTS_URL,
  //     action.payload}
  //   )
  // );

  yield put({ type: "PRODUCTS_LIST_SUCCESS", payload: allProducts });

  //   const products = yield Api.fetch('/products')
}
