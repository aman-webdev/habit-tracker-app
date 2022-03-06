import { combineReducers } from "redux";
import habitInfo from "./habitInfo";

export default combineReducers({
  habits: habitInfo,
});
