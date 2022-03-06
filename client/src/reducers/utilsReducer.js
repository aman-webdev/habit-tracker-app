import { ADD_HABIT_ID } from "../utils/constants";

const INIT_STATE = {
  selectedHabit: {},
};

const utils = (state = INIT_STATE, action) => {
  console.log(action.payload, "red");
  switch (action.type) {
    case ADD_HABIT_ID:
      return { ...state, selectedHabit: action.payload };
    default:
      return state;
  }
};

export default utils;
