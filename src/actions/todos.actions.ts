import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConnection } from "typeorm";

import { CreateTodoDto } from "../dtos/todo.dto";
import { TodoModel } from "../models/todo.model";
import { TodoRepository } from "../repositories/todo.repository";

export const getTodos = createAsyncThunk("todos/getTodos", () => {
  const connection = getConnection();
  const todosRepository = new TodoRepository(connection);
  return todosRepository.getTodos();
});

export const createTodo = createAsyncThunk<TodoModel, CreateTodoDto>(
  "todos/createTodo",
  (payload) => {
    const connection = getConnection();
    const todosRepository = new TodoRepository(connection);
    return todosRepository.createTodo(payload);
  }
);
