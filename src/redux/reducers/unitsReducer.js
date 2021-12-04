import { FETCH_UNITS_REQUESTED, FETCH_UNITS_SUCCEEDED, FETCH_UNITS_FAILED } from "../actionTypes";

const initialState = {
  units: [], // array of objects
  isFetching: false,
  error: null
};

const unitsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITS_REQUESTED:
      return { ...initialState, isFetching: true };
    case FETCH_UNITS_SUCCEEDED:
      return { ...state, units: action.payload.units, isFetching: false };
    case FETCH_UNITS_FAILED:
      return { ...state, error: action.payload.error, isFetching: false };
    default:
      return state;
  }
};

export default unitsReducer;
