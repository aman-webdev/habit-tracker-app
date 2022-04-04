import { combineReducers } from "redux";
import habitInfo from "./habitInfo";
import utilsReducer from "./utilsReducer";
import auth from "./userReducer";
export default combineReducers({
  habits: habitInfo,
  utils: utilsReducer,
  user: auth,
});
