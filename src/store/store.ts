import { configureStore } from "@reduxjs/toolkit";

import entryReducer from "./entry.slice";
import userReducer from "./user.slice";

export const store = configureStore({
  reducer: {
    entry: entryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
