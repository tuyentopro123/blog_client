import { publicRequest } from "../../../helpers/configAxios";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} from "../../apiSlice/userSlice";

import {
  getNotificationStart,
  getNotificationSuccess,
  getNotificationFailed,
} from "../../apiSlice/authSlice";

// <-- ( USER ) ----------------------------->

// UPDATE USER
export const updateUsers = async (user, dispatch, id) => {
  dispatch(updateUserStart());
  try {
    const res = await publicRequest.put(`/v1/user/` + id, user);
    dispatch(updateUserSuccess(res.data));
  } catch (err) {
    console.log(err);
    dispatch(updateUserFailed(err));
  }
};

// NOTIFICATION COUNT
export const getNotificationCount = async (id) => {
  try {
    const res = await publicRequest.get("/v1/user/count/" + id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// NOTIFICATION
export const getNotification = async (dispatch, id) => {
  dispatch(getNotificationStart());
  try {
    const res = await publicRequest.get("/v1/user/noti/" + id);
    dispatch(getNotificationSuccess());
    return res.data;
  } catch (err) {
    dispatch(getNotificationFailed(err));
  }
};

// DELETE USER
export const deleteUser = async (dispatch, id, navigate) => {
  dispatch(deleteUserStart());
  try {
    const res = await publicRequest.delete("/v1/user/" + id);
    dispatch(deleteUserSuccess(res.data));
    const navigation = () => {
      navigate(`/admin`);
    };
    setTimeout(navigation, 1600);
  } catch (err) {
    dispatch(deleteUserFailed(err));
  }
};
