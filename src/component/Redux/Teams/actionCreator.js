//actionCreator.js

export const ADD_TEAMS_SUCCESS = "ADD_TEAMS_SUCCESS";

export const GET_TEAMS_SUCCESS = "GET_TEAMS_SUCCESS";



export const addTeamsSuccess = (payload) => {
  console.log(payload);
  return {
    type: ADD_TEAMS_SUCCESS,
    payload,
  };
};

export const getTeamsSuccess = (payload) => {
  console.log(payload);
  return {
    type: GET_TEAMS_SUCCESS,
    payload,
  };
};


