import { Middleware, Tuple, configureStore } from "@reduxjs/toolkit";
import users from "./slices/users";

const saveInLocalStore : Middleware = (api) => (next) => (action) => {
  next(action)
  localStorage.setItem('store', JSON.stringify(api.getState()))
}

const store = configureStore({
  reducer: {
    users: users.reducer
  },
  middleware: ()=> new Tuple(saveInLocalStore)
})

export default store
type GlobalState = ReturnType<typeof store.getState>

export const selectUsers = (state: GlobalState) => state.users

