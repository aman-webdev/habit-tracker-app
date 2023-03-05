import {
  ADD_HABIT,
  DELETE_HABIT,
  GET_HABIT,
  EDIT_HABIT,
} from "../utils/constants";
import * as api from "../api/habit";

export const createHabit = (habitData) => async (dispatch) => {
  try {
    const { data } = await api.createHabit(habitData);
    dispatch({ type: ADD_HABIT, payload: data });
  } catch (err) {
    console.log(err);
  }
};
export const getHabits = (setIsLoading) => async (dispatch) => {
  try {
    const { data } = await api.getHabits();
    dispatch({ type: GET_HABIT, payload: data });
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const editHabit = (habitId, habitData) => async (dispatch) => {
  const { data } = await api.editHabit(habitId, habitData);
  dispatch({ type: EDIT_HABIT, payload: data });
};

export const deleteHabit = (habitId) => async (dispatch) => {
  await api.deleteHabit(habitId);
  dispatch({ type: DELETE_HABIT, payload: habitId });
};

export const tickHabit = (habitId, nowDate) => async (dispatch) => {
  const { data } = await api.tickHabit(habitId, nowDate);

  dispatch({ type: "TICK_HABIT", payload: data });
};
