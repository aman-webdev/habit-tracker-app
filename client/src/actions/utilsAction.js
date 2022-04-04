import { ADD_HABIT_ID, IS_LOGGED_IN } from "../utils/constants";

export const addHabitId = (habitData) => {
  return { type: ADD_HABIT_ID, payload: habitData };
};

export const changeLoginState = () => {
  return { type: IS_LOGGED_IN };
};
