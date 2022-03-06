import { ADD_HABIT_ID } from "../utils/constants";

export const addHabitId = (habitData) => {
  return { type: ADD_HABIT_ID, payload: habitData };
};
