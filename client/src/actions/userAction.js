import * as api from "../api/habit";
import { notify } from "../utils/notify";

export const signin = (formData,setLoading) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: "AUTH", payload: data });
    notify("Login successful")
    setLoading(false)
  } catch (e) {  
   notify(e.response.data.message)
   setLoading(false)

  }
};
export const signup = (formData) => async (dispatch) => {
  try{
    const { data } = await api.signup(formData);
    dispatch({ type: "AUTH", payload: data });
    notify("Signup successful")
  }
  catch(e){
    notify(e.response.data.message)
  }

};
