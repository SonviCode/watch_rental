// 'use client';
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// import {
//   localStorageSetItem,
//   localStorageGetItem,
// } from "./middleware/localStorageMiddleware";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
  //   preloadedState: localStorageGetItem(),
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(localStorageSetItem),
});
