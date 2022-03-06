import { ADD_HABIT } from "../utils/constants";

const habitInfo = (state = [], action) => {
  switch (action.type) {
    case ADD_HABIT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default habitInfo;
