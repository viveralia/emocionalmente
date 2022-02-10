import { configureStore } from "@reduxjs/toolkit";

import entriesReducer from "./entries.slice";
import userReducer from "./user.slice";

export const store = configureStore({
  reducer: {
    entries: entriesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
