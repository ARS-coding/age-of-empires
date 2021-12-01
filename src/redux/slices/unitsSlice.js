import { FETCH_UNITS } from "../actionTypes";

export const fetchUnits = (payload) => {
  console.log(`fetching da stufffffff`);
};

const initialState = {
  units: []
};

const unitReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNITS:
      return { ...state, units: "Units fetched" };
  }
};

export default unitReducer;
