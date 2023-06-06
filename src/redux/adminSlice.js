import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    admin: {
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    // GET ALL USER
    getDataAdminStart: (state) => {
      state.admin.isFetching = true;
    },
    getDataAdminSuccess: (state) => {
      state.admin.isFetching = false;
    },
    getDataAdminFailed: (state) => {
      state.admin.isFetching = false;
      state.admin.error = true;
    },

    // GET ALL USER
    deletePostStart: (state) => {
      state.admin.isFetching = true;
    },
    deletePostSuccess: (state) => {
      state.admin.isFetching = false;
    },
    deletePostFailed: (state) => {
      state.admin.isFetching = false;
      state.admin.error = true;
    },
  },
});

export const {
  deletePostStart,
  deletePostSuccess,
  deletePostFailed,
  getDataAdminStart,
  getDataAdminSuccess,
  getDataAdminFailed,
} = adminSlice.actions;

export default adminSlice.reducer;
