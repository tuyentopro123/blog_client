import { publicRequest } from "../../../helpers/configAxios";
import {
  deletePostStart,
  deletePostSuccess,
  deletePostFailed,
  getDataAdminStart,
  getDataAdminSuccess,
  getDataAdminFailed,
} from "../../apiSlice/adminSlice";

// <-- ( ADMIN ) ----------------------------->
// GET ALL USER ADMIN
export const getDataAdmin = async (dispatch, type) => {
  dispatch(getDataAdminStart());
  try {
    const res = await publicRequest.get(`/v1/admin/admin?type=${type}`);
    dispatch(getDataAdminSuccess(res.data));
    return res.data;
  } catch (err) {
    dispatch(getDataAdminFailed(err));
  }
};

// DELETE POST
export const deletePost = async (dispatch, id, user) => {
  // dispatch(deletePostStart());
  try {
    const res = await publicRequest.post(`/v1/admin/delete/` + id, user);
    // dispatch(deletePostSuccess());
  } catch (err) {
    dispatch(deletePostFailed(err));
  }
};
