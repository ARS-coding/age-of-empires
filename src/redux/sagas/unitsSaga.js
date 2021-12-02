import { call, put, takeEvery } from "redux-saga/effects";
import { get } from "axios";

import { FETCH_UNITS_REQUESTED } from "../actionTypes";

function* fetchUnits(action) {
  try {
    const units = yield call(get, action.payload.UNITS_ENDPOINT_URL);
    console.log(units, "units");

    yield put({ type: "FETCH_UNITS_SUCCEEDED", payload: { units: units.data } });
  } catch (error) {
    yield put({ type: "FETCH_UNITS_FAILED", payload: { error: error.message } });
  }
  //   console.log(action, "action in fetchUnits");
  //   const units = yield call(get, action.payload.unitsEndpointURL);
  //   console.log(units, "units");
}

function* unitsSaga() {
  yield takeEvery(FETCH_UNITS_REQUESTED, fetchUnits);
}

export default unitsSaga;
