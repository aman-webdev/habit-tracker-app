import { ADD_HABIT_ID, IS_LOGGED_IN, IS_NAV_OPEN } from "../utils/constants";

export const addHabitId = (habitData) => {
  return { type: ADD_HABIT_ID, payload: habitData };
};

export const changeLoginState = () => {
  return { type: IS_LOGGED_IN };
};

export const ChangeNavState = () => {
  return { type: IS_NAV_OPEN };
};
