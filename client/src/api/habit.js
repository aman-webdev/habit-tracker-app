import axios from "axios";

const API = axios.create({
  baseURL: "https://habito-back-end.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
});

export const getHabits = () => {
  return API.get("/habit");
};

export const createHabit = (habitData) => API.post("/habit", habitData);

export const editHabit = (habitId, habitData) =>
  API.patch(`/habit/edit/${habitId}`, habitData);

export const deleteHabit = (habitId) => {
  API.delete(`/habit/delete/${habitId}`);
};

export const tickHabit = (habitId, nowDate) => {
  return API.patch(`/habit/tick/${habitId}`, nowDate);
};

export const signin = (data) => {
  return API.post("/user/signin", data);
};

export const signup = (data) => {
  return API.post("/user/signup", data);
};
