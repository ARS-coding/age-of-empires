import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import unitsReducer from "./slices/unitsSlice";
import unitsSaga from "./sagas/unitsSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [thunkMiddleware, sagaMiddleware];
const composedEnhacer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(unitsReducer, composedEnhacer);

sagaMiddleware.run(unitsSaga);

export default store;
