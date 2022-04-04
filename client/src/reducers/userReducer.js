const result = JSON.parse(localStorage.getItem("user"));
const INITIAL_STATE = { result: {}, token: "" };

const auth = (state = result ? result : INITIAL_STATE, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { result: action.payload.result, token: action.payload.token };
    case "LOGOUT":
      localStorage.clear();
      return { result: {}, token: "" };
    default:
      return state;
  }
};

export default auth;
