import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../utils/cookie";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoged: getCookie("accessToken").length != 0,
  },
  reducers: {
    login: (state) => {
      state.isLoged = true;
    },
    logout: (state) => {
      state.isLoged = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
