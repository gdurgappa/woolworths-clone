import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);
export default store;
