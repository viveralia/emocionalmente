import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConnection } from "typeorm";

import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { UserModel } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";

export const signUp = createAsyncThunk<UserModel, CreateUserDto>("user/signUp", async (payload) => {
  const connection = getConnection();
  const userRepository = new UserRepository(connection);
  return userRepository.create(payload);
});

export const getUserProfile = createAsyncThunk("user/getUserProfile", async () => {
  const connection = getConnection();
  const userRepository = new UserRepository(connection);
  return userRepository.getUserInSession();
});

export const updateUserProfile = createAsyncThunk<UserModel, UpdateUserDto>(
  "user/updateUserProfile",
  async (payload) => {
    const connection = getConnection();
    const userRepository = new UserRepository(connection);
    return userRepository.update(payload);
  }
);

export const logOut = createAsyncThunk("user/logOut", async () => {
  const connection = getConnection();
  const userRepository = new UserRepository(connection);
  return userRepository.delete();
});
