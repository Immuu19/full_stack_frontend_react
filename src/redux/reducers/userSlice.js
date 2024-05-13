// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      console.log("action.payload.user")
      console.log(action.payload.user)
      localStorage.setItem("fittrack-app-token", action.payload); // Update the token key here
      console.log("action.payload")
      console.log(action.payload)
      
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.removeItem("fittrack-app-token");
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
