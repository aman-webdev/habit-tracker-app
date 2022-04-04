import { ADD_HABIT_ID, IS_LOGGED_IN } from "../utils/constants";

const INIT_STATE = {
  selectedHabit: {},
  isLoggedIn: false,
};

const utils = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_HABIT_ID:
      return { ...state, selectedHabit: action.payload };
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};

export default utils;
