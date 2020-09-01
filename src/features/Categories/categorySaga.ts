import { put, takeLatest, call } from "redux-saga/effects";
import * as api from "../../api/request";
import { GET_ALL_CATEGORIES_URL } from "../../api/urls";
import { Category } from "../../types/category";

export function* watchFetchCategories() {
  yield takeLatest("CATEGORIES_REQUESTED", fetchCategories);
}
interface CategoryResponse {
  Categories: Category[];
}
function* fetchCategories() {
  const allCategories: CategoryResponse = yield call(
    api.get,
    GET_ALL_CATEGORIES_URL
  );
  yield put({ type: "CATEGORIES_LIST", payload: allCategories.Categories });
}
