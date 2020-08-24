import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";
import { CategoryInitialState } from "../types/category";

export interface RootState {
  category: CategoryInitialState;
  products: any;
  search: any;
}
const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);
export default store;
