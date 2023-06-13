import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    // UPDATE USER
    updateUserStart: (state) => {
      state.users.isFetching = true;
    },
    updateUserSuccess: (state) => {
      state.users.isFetching = false;
      state.users.error = false;
    },
    updateUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },

    // GET ALL USER
    getAllUserStart: (state) => {
      state.users.isFetching = true;
    },
    getAllUserSuccess: (state) => {
      state.users.isFetching = false;
    },
    getAllUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },

    // DELETE USER
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUserSuccess: (state) => {
      state.users.isFetching = false;
    },
    deleteUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },

    // GET USER SET
    getUserStart: (state) => {
      state.users.isFetching = true;
    },
    getUserSuccess: (state) => {
      state.users.isFetching = false;
    },
  },
});

export const {
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
  getUserStart,
  getUserSuccess,
  getAllUserStart,
  getAllUserSuccess,
  getAllUserFailed,
} = userSlice.actions;

export default userSlice.reducer;
