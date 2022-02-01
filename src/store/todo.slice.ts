import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { createTodo, getTodos } from "../actions/todos.actions";
import { TodoModel } from "../models/todo.model";

interface TodosInitialState {
  isLoading: boolean;
  todos: TodoModel[];
  error: string;
}

const todosSlice = createSlice<TodosInitialState, SliceCaseReducers<TodosInitialState>>({
  name: "todo",
  initialState: {
    isLoading: false,
    todos: [],
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // pendiente, completada, no inicializada, fallo
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
      state.todos = [];
      state.error = "";
    });

    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
      state.todos = [];
      state.error = "No se pudieron obtener los todos";
    });

    //
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
      state.error = "";
    });

    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
      state.error = "No se pudo crear el todo";
    });
  },
});

export default todosSlice.reducer;
