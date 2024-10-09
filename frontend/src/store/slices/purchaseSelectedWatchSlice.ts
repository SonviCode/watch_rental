// 'use client';
import { purchaseSelectedWatchState } from "@/types/watchTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: purchaseSelectedWatchState = {
  value: {},
};

const purchaseSelectedWatchSlice = createSlice({
  name: "purchaseSelectedWatch",
  initialState,
  reducers: {
    setPurchaseSelectedWatch: (state, action) => {
      state.value = action.payload;
    },
    removePurchaseSelectedWatch: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setPurchaseSelectedWatch, removePurchaseSelectedWatch } =
  purchaseSelectedWatchSlice.actions;
export default purchaseSelectedWatchSlice.reducer;
