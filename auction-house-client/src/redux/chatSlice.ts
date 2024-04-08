import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "auth",
  initialState: {
    isShowed: false,
    chattingWith: 0,
  },
  reducers: {
    show: (state) => {
      state.isShowed = true;
    },
    chatWith: (state, payload) => {
      state.isShowed = true;
      state.chattingWith = payload.payload;
    },
    hide: (state) => {
      state.isShowed = false;
    },
  },
});

export const { show, hide, chatWith } = chatSlice.actions;

export default chatSlice.reducer;
