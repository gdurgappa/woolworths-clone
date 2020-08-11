import { takeEvery, takeLatest, put } from "redux-saga/effects";
import * as api from "../../api/request";
import { GET_ALL_CATEGORIES_URL } from "../../api/urls";

export function* watchFetchCategories() {
  yield takeLatest("CATEGORIES_REQUESTED", fetchCategories);
}

function* fetchCategories() {
  const allCategories = yield api.get(GET_ALL_CATEGORIES_URL);
  yield put({ type: "CATEGORIES_LIST", payload: allCategories.Categories });

  //   const products = yield Api.fetch('/products')
}
