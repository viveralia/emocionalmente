import { Connection, Repository } from "typeorm";

import { CreateTodoDto } from "../dtos/todo.dto";
import { TodoModel } from "../models/todo.model";

export class TodoRepository {
  private repository: Repository<TodoModel>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(TodoModel);
  }

  public getTodos() {
    return this.repository.find();
  }

  public createTodo(payload: CreateTodoDto) {
    const newTodo = this.repository.create(payload);
    return this.repository.save(newTodo);
  }
}
