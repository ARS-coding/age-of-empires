import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import unitsReducer from "./slices/unitsSlice";

const middleware = [thunkMiddleware];
const composedEnhacer = composeWithDevTools(applyMiddleware(...middleware));
const store = createStore(unitsReducer, composedEnhacer);

export default store;
