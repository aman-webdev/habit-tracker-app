import { ADD_HABIT_ID, IS_LOGGED_IN, IS_NAV_OPEN } from "../utils/constants";

const INIT_STATE = {
  selectedHabit: {},
  isLoggedIn: false,
  isNavOpen: false,
};

const utils = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_HABIT_ID:
      return { ...state, selectedHabit: action.payload };
    case IS_LOGGED_IN:
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case IS_NAV_OPEN:
      return { ...state, isNavOpen: !state.isNavOpen };
    default:
      return state;
  }
};

export default utils;
