import { combineReducers } from "redux";
import habitInfo from "./habitInfo";
import utilsReducer from "./utilsReducer";

export default combineReducers({
  habits: habitInfo,
  utils: utilsReducer,
});
