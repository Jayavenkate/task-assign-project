//actionCreator.js

export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS";

export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS";

export const EDIT_TASK_SUCCESS = "EDIT_TASK_SUCCESS";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const VIEW_TASK_SUCCESS = "VIEW_TASK_SUCCESS";

export const viewbyIdTeamsSuccess = (payload) => {
  console.log(payload);
  return {
    type: VIEW_TASK_SUCCESS,
    payload,
  };
};

export const addTaskSuccess = (payload) => {
  console.log(payload);
  return {
    type: ADD_TASK_SUCCESS,
    payload,
  };
};

export const getTaskSuccess = (payload) => {
  console.log(payload);
  return {
    type: GET_TASK_SUCCESS,
    payload,
  };
};

export const editTaskSuccess = (payload) => {
  console.log(payload);
  return {
    type: EDIT_TASK_SUCCESS,
    payload,
  };
};
export const deleteTaskSuccess = (payload) => {
  console.log(payload);
  return {
    type: DELETE_TASK_SUCCESS,
    payload,
  };
};
