import { FETCH_UNITS_REQUESTED, FETCH_UNITS_SUCCEEDED, FETCH_UNITS_FAILED } from "../actionTypes";

const initialState = {
  units: [], // array of, array of objects
  isFetching: false,
  error: null
};
// TODO: Change the slice convention into normal unitsReducer since we are not using any action creator functions anymore
const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITS_REQUESTED:
      return { ...initialState, isFetching: true };
    case FETCH_UNITS_SUCCEEDED:
      return { ...state, units: action.payload.units, isFetching: false };
    case FETCH_UNITS_FAILED:
      return { ...state, error: action.payload.error, isFetching: false };
  }
};

export default unitReducer;
