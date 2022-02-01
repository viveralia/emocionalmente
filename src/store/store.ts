import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todo.slice";
import userReducer from "./user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
