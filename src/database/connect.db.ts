import { createConnection } from "typeorm";

import { UserModel } from "../models/user.model";

export const connectDatabase = () => {
  return createConnection({
    type: "expo",
    database: "emocionalmente",
    driver: require("expo-sqlite"),
    entities: [UserModel],
    synchronize: true,
  });
};
