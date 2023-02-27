import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./loginActionTypes";

const initialState = {
  loggedIn: false,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        loggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default loginReducer;
