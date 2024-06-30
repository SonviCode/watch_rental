// 'use client';
import { userState } from "@/types/userType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: userState = {
  value: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    removeUser: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
