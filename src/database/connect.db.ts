import { createConnection } from "typeorm";

import { TodoModel } from "../models/todo.model";
import { UserModel } from "../models/user.model";

export const connectDatabase = () => {
  return createConnection({
    type: "expo",
    database: "emocionalmente",
    driver: require("expo-sqlite"),
    entities: [UserModel, TodoModel],
    synchronize: true,
  });
};
