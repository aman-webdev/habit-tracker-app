import axios from "axios";

const URL = "http://localhost:5000/habit";

export const getHabits = () => axios.get(URL);

export const createHabit = (habitData) => axios.post(URL, habitData);

export const editHabit = (habitId, habitData) =>
  axios.patch(`${URL}/edit/${habitId}`, habitData);

export const deleteHabit = (habitId) => {
  axios.delete(`${URL}/delete/${habitId}`);
};
