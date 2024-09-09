// 'use client';
import { SubscriptionState } from "@/types/subscriptionTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
} satisfies SubscriptionState as SubscriptionState;

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setSubscription: (state, action) => {
      state.value = action.payload;
    },
    removeSubscription: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { setSubscription, removeSubscription } =
  subscriptionSlice.actions;
export default subscriptionSlice.reducer;
