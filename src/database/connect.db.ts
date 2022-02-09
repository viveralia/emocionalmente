import { createConnection } from "typeorm";

import { EntryModel } from "../models/entry.model";
import { UserModel } from "../models/user.model";

export const connectDatabase = () => {
  return createConnection({
    type: "expo",
    database: "emocionalmente",
    driver: require("expo-sqlite"),
    entities: [UserModel, EntryModel],
    synchronize: true,
  });
};
