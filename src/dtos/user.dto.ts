import { UserModel } from "../models/user.model";

export type CreateUserDto = Omit<UserModel, "id">;

export interface UpdateUserDto extends Pick<UserModel, "id">, Partial<CreateUserDto> {}
