import { Connection, Repository } from "typeorm";

import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { UserModel } from "../models/user.model";

export class UserRepository {
  private repository: Repository<UserModel>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(UserModel);
  }

  public async create(payload: CreateUserDto) {
    const user = this.repository.create(payload);
    return this.repository.save(user);
  }

  public async getUserInSession() {
    const users = await this.repository.find();
    if (!users.length) return null;
    return users[0];
  }

  public async update(payload: UpdateUserDto) {
    const user = await this.repository.findOne(payload.id);
    if (!user) throw new Error("User does not exist");
    return this.repository.save({ ...payload });
  }

  public async delete() {
    const user = await this.getUserInSession();
    await this.repository.delete(user!.id);
    return null;
  }
}
