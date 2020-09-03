import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { CategoryReducerType } from "../types/category";
import {
  ProductReducerType,
  SearchProductsReducerType,
} from "../types/product";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export interface RootState {
  category: CategoryReducerType;
  products: ProductReducerType;
  search: SearchProductsReducerType;
}
const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);
export default store;
