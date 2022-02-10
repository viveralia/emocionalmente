import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConnection } from "typeorm";

import { CreateEntriesDto } from "../dtos/entries.dto";
import { EntryModel } from "../models/entry.model";
import { EntriesRepository } from "../repositories/entries.repository";

export const createEntries = createAsyncThunk<EntryModel, CreateEntriesDto>(
  "entries/createEntries",
  async (payload) => {
    const connection = getConnection();
    const entriesRepository = new EntriesRepository(connection);
    return entriesRepository.createEntries(payload);
  }
);

export const getEntries = createAsyncThunk("entries/getEntries", () => {
  const connection = getConnection();
  const entriesRepository = new EntriesRepository(connection);
  return entriesRepository.getEntries();
});

interface GetEntriesByDateParams {
  initialDate: Date;
  finalDate: Date;
}
export const getEntriesByDate = createAsyncThunk(
  "entries/getEntriesByDate",
  ({ initialDate, finalDate }: GetEntriesByDateParams) => {
    const connection = getConnection();
    const entriesRepository = new EntriesRepository(connection);
    return entriesRepository.getEntriesByDate(initialDate, finalDate);
  }
);
