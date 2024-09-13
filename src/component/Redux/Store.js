import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Login/reducer";
import TaskReducer from "./Task/reducer";
import TeamsReducer from "./Teams/reducer";

export const Store = configureStore({
  reducer: {
    Auth: AuthReducer,
    Task:TaskReducer,
    Teams:TeamsReducer
  },
});
