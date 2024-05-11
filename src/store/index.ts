import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";

const store = configureStore({
  reducer: {
    users: users.reducer
  }
})

export default store

type GlobalState = ReturnType<typeof store.getState>

// Selectors
// select a specific slice of the global state
export const selectUsers = (state: GlobalState) => state.users