import {
  ADD_HABIT,
  DELETE_HABIT,
  GET_HABIT,
  EDIT_HABIT,
  TICK_HABIT,
} from "../utils/constants";

const habitInfo = (state = [], action) => {
  switch (action.type) {
    case ADD_HABIT:
      return [...state, action.payload];
    case GET_HABIT:
      return action.payload;
    case EDIT_HABIT:
    case TICK_HABIT:
      return state.map((habit) =>
        habit._id === action.payload._id ? action.payload : habit
      );
    case DELETE_HABIT:
      return state.filter((habit) => habit._id !== action.payload);

    default:
      return state;
  }
};

export default habitInfo;
