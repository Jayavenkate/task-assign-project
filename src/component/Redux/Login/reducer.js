import { LOGIN_BEGIN, LOGIN_ERROR, LOGIN_SUCCESS } from "./actionCreator";

const initState = {
  loading: false,
  error: null,
  isAuthendicated: false,
};

const AuthReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        isAuthendicated: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
