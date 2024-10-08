// 'use client';
import { watchState } from "@/types/watchTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
  value: [],
} satisfies watchState as watchState;

const watchSlice = createSlice({
  name: "watchs",
  initialState,
  reducers: {
    setWatchs: (state, action) => {
      state.value = action.payload;
    },
    removeWatchs: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setWatchs, removeWatchs } = watchSlice.actions;
export default watchSlice.reducer;
