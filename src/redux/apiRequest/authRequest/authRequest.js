import { publicRequest } from "../../../helpers/configAxios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logOutStart,
  logOutSuccess,
  logOutFailed,
  getNotificationStart,
  getNotificationSuccess,
  getNotificationFailed,
  getCurrentUserStart,
  getCurrentUserSuccess,
  getCurrentUserFailed,
} from "../../apiSlice/authSlice";
// <-- ( AUTH ) ----------------------------->
// LOGIN
export const loginUser = async (dispatch) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.get("/v1/auth/login", {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
    // navigate("/");
  } catch (err) {
    dispatch(loginFailed(err));
  }
};
//  REGISTER
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await publicRequest.post("v1/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed(err));
  }
};
// LOGOUT
export const logOut = async (dispatch, navigate) => {
  dispatch(logOutStart());
  try {
    await publicRequest.get("/v1/auth/logout", { withCredentials: true });
    dispatch(logOutSuccess());
    navigate("/");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

// GET CURRENT USER
export const getCurrentUser = async (dispatch, id) => {
  dispatch(getCurrentUserStart());
  try {
    await publicRequest.get("/v1/auth/current/" + id);
    dispatch(getCurrentUserSuccess());
  } catch (err) {
    dispatch(getCurrentUserFailed());
  }
};
