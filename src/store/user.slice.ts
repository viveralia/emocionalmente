import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

import { getUserProfile, logIn, logOut, updateUserProfile } from "../actions/user.actions";
import { UserModel } from "../models/user.model";

interface UserSliceInitialState {
  isLoading: boolean;
  error: string;
  profile: UserModel | null;
}

const userSlice = createSlice<UserSliceInitialState, SliceCaseReducers<UserSliceInitialState>>({
  name: "user",
  initialState: {
    isLoading: false,
    error: "",
    profile: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // logIn cases
    builder.addCase(logIn.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(logIn.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't save the user";
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });

    // getUserProfile cases
    builder.addCase(getUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(getUserProfile.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't get the user in session";
    });

    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });

    // updateUserProfile cases
    builder.addCase(updateUserProfile.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(updateUserProfile.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't update the user profile";
    });

    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });

    // logOut cases
    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(logOut.rejected, (state) => {
      state.isLoading = false;
      state.error = "Couldn't log out";
    });

    builder.addCase(logOut.fulfilled, (state) => {
      state.isLoading = false;
      state.profile = null;
    });
  },
});

export default userSlice.reducer;
