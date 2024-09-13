import { ADD_TEAMS_SUCCESS, GET_TEAMS_SUCCESS } from "./actionCreator";

const data = [
  { id: 1, name: "user1" ,email:"user1@gmail.com",role:"developer"},
  { id: 2, name: "user2" ,email:"user2@gmail.com",role:"UI UX"},
  { id: 3, name: "user3" ,email:"user3@gmail.com",role:"Manager"},
];

const initState = {
  loading: false,
  error: null,
  teams: data || [],
};

const TeamsReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        teams: [...state.teams, action.payload],
      };
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        teams: Array.isArray(action.payload) ? action.payload : [],
      };

    default:
      return state;
  }
};
export default TeamsReducer;
