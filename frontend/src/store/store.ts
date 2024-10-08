// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import subscriptionReducer from "./slices/subscriptionSlice";
import watchReducer from "./slices/watchSlice";
import { localStorageGetItem, localStorageSetItem } from "./middlewares/localStorageMiddleware";

// import {
//   localStorageSetItem,
//   localStorageGetItem,
// } from "./middleware/localStorageMiddleware";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
    subscription: subscriptionReducer,
    watchs: watchReducer
  },
  devTools: true,
  preloadedState: localStorageGetItem(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageSetItem),
});
