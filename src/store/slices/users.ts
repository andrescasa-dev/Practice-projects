import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [
    {id:1, name:"andres", email:"andres@gmail.com"},
    {id:2, name:"andrescasa-dev", email:"andres@gmail.com"},
    {id:3, name:"casa", email:"andres@gmail.com"},
    {id:4, name:"casa", email:"andres@gmail.com"},
    ],
  reducers: {
    deleteUserStore: (state, action: PayloadAction<number>) => {
      return state.filter(user => user.id !== action.payload)
    }
  }
})

export const {deleteUserStore} = usersSlice.actions //exposing what actions can be dispatched
export default usersSlice
