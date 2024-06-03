import { Action, ActionCreator, PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  name: string,
  email: string
}

interface UserWithId extends User {
  id: number, 
}

const dummyUsers: UserWithId[] = [
  {id:1, name:"andres", email:"andres@gmail.com"},
  {id:2, name:"andrescasa-dev", email:"andres@gmail.com"},
  {id:3, name:"casa", email:"andres@gmail.com"},
  {id:4, name:"casa", email:"andres@gmail.com"},
  ]

// @ts-expect-error ts(2345)
const usersFromLocalStore: UserWithId[] | null = localStorage.getItem('store') === null ? null : JSON.parse(localStorage.getItem('store')).users as UserWithId[]

const usersSlice = createSlice({
  name: "users",
  initialState: usersFromLocalStore || dummyUsers,
  reducers: {
    addUserStore: (state, action: PayloadAction<User>) => {
      // docs about this
      // add id 
      const user = action.payload
      const id = crypto.randomUUID() 
      return [...state, {...user, id}]
    }
    
  }
})

export const {deleteUserStore} = usersSlice.actions //exposing what actions can be dispatched
export default usersSlice








// const usersSlice = createSlice({
//   name: "users",
//   initialState: usersFromLocalStore() || dummyUsers,
//   reducers: {
//     deleteUserStore: (state, action: PayloadAction<number>) => {
//       return state.filter(user => user.id !== action.payload)
//     }
    
//   }
// })