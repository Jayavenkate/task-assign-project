//actionCreator.js

export const LOGIN_BEGIN = "LOGIN_BEGIN";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_ERROR = "LOGIN_ERROR";

export const loginBegin = (payload) => {
  // console.log(payload);
  return {
    type: LOGIN_BEGIN,
    payload,
  };
};

export const loginSuccess = (payload) => {
  console.log(payload);
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};
export const loginError = (payload) => {
  // console.log(payload);
  return {
    type: LOGIN_ERROR,
    payload,
  };
};
