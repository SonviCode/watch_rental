// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import subscriptionReducer from "./slices/subscriptionSlice";
import purchaseSelectedWatchReducer from "./slices/purchaseSelectedWatchSlice";
import {
  localStorageGetItem,
  localStorageSetItem,
} from "./middlewares/localStorageMiddleware";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
    purchaseSelectedWatch: purchaseSelectedWatchReducer,
  },
  devTools: true,
  preloadedState: localStorageGetItem(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSetItem),
});
