import { call, put, takeEvery } from "redux-saga/effects";
import { get } from "axios";

import { FETCH_UNITS_REQUESTED } from "../actionTypes";

function* fetchUnits(action) {
  try {
    const units = yield call(get, action.payload.UNITS_ENDPOINT_URL);
    yield put({ type: "FETCH_UNITS_SUCCEEDED", payload: { units: units.data } });
  } catch (error) {
    yield put({ type: "FETCH_UNITS_FAILED", payload: { error: error.message } });
  }
}

function* unitsSaga() {
  yield takeEvery(FETCH_UNITS_REQUESTED, fetchUnits);
}

export default unitsSaga;
