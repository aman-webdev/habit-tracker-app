import { ADD_HABIT } from "../utils/constants";

export const createHabit = (habitData) => (dispatch) => {
  dispatch({ type: ADD_HABIT, payload: habitData });
};
