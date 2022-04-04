import * as api from "../api/habit";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: "AUTH", payload: data });
  } catch (e) {
    console.log(e);
  }
};
export const signup = (formData) => async (dispatch) => {
  const { data } = await api.signup(formData);
  dispatch({ type: "AUTH", payload: data });
};
