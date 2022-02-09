import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConnection } from "typeorm";

import { CreateEntryDto } from "../dtos/entry.dto";
import { EntryModel } from "../models/entry.model";
import { EntryRepository } from "../repositories/entry.repository";

export const createEntry = createAsyncThunk<EntryModel, CreateEntryDto>(
  "entry/createEntry",
  async (payload) => {
    const connection = getConnection();
    const entryRepository = new EntryRepository(connection);
    return entryRepository.createEntry(payload);
  }
);

export const getEntries = createAsyncThunk("todos/getEntries", () => {
  const connection = getConnection();
  const entryRepository = new EntryRepository(connection);
  return entryRepository.getEntries();
});
