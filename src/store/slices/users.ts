import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "users",
  initialState: [
    {id:1, name:"andres", email:"andres@gmail.com"},
    {id:2, name:"andrescasa-dev", email:"andres@gmail.com"},
    {id:3, name:"casa", email:"andres@gmail.com"},
    {id:4, name:"casa", email:"andres@gmail.com"},
    ],
  reducers: {}
})

