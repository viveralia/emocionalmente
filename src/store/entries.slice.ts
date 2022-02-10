import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { createEntries, getEntries, getEntriesByDate } from "../actions/entries.actions";
import { EntryModel } from "../models/entry.model";

interface EntriesSliceInitialState {
  isLoading: boolean;
  error: string;
  entries: EntryModel[];
}

const entriesSlice = createSlice<
  EntriesSliceInitialState,
  SliceCaseReducers<EntriesSliceInitialState>
>({
  name: "entries",
  initialState: {
    isLoading: false,
    error: "",
    entries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // createEntries cases
    builder.addCase(createEntries.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(createEntries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entries.push(action.payload);
      state.error = "";
    });

    builder.addCase(createEntries.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't create the entry";
    });

    // getEntries cases
    builder.addCase(getEntries.pending, (state) => {
      state.isLoading = true;
      state.error = "";
      state.entries = [];
    });

    builder.addCase(getEntries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.entries = action.payload;
    });

    builder.addCase(getEntries.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't get entries";
      state.entries = [];
    });

    // getEntriesByDate cases
    builder.addCase(getEntriesByDate.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(getEntriesByDate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.entries = action.payload;
    });

    builder.addCase(getEntriesByDate.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't get entries by date";
    });
  },
});

export default entriesSlice.reducer;
