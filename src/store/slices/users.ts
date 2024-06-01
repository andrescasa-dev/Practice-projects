import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  id: number, 
  name: string,
  email: string
}

const dummyUsers = [
  {id:1, name:"andres", email:"andres@gmail.com"},
  {id:2, name:"andrescasa-dev", email:"andres@gmail.com"},
  {id:3, name:"casa", email:"andres@gmail.com"},
  {id:4, name:"casa", email:"andres@gmail.com"},
  ]


const usersFromLocalStore = ()=>{
  if(localStorage.getItem('store') === null ) return null
  // @ts-expect-error ts(2345)
  const localStore = JSON.parse(localStorage.getItem('store')) 
  console.log({localStore})
  return localStore.users as User[]

}

const usersSlice = createSlice({
  name: "users",
  initialState: usersFromLocalStore() || dummyUsers,
  reducers: {
    deleteUserStore: (state, action: PayloadAction<number>) => {
      return state.filter(user => user.id !== action.payload)
    }
  }
})

export const {deleteUserStore} = usersSlice.actions //exposing what actions can be dispatched
export default usersSlice
