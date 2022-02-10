import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { createEntry, getEntries, getEntriesByDate } from "../actions/entry.actions";
import { EntryModel } from "../models/entry.model";

interface EntrySliceInitialState {
  isLoading: boolean;
  error: string;
  entries: EntryModel[];
}

const entrySlice = createSlice<EntrySliceInitialState, SliceCaseReducers<EntrySliceInitialState>>({
  name: "entry",
  initialState: {
    isLoading: false,
    error: "",
    entries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // createEntry cases
    builder.addCase(createEntry.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(createEntry.fulfilled, (state, action) => {
      state.isLoading = false;
      state.entries.push(action.payload);
      state.error = "";
    });

    builder.addCase(createEntry.rejected, (state) => {
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
      state.error = "Couldn't get entry by date";
    });
  },
});

export default entrySlice.reducer;
