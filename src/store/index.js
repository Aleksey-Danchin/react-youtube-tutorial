import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
