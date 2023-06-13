import { publicRequest } from "../../../helpers/configAxios";

import {
  createCommentStart,
  createCommentSuccess,
  createCommentFailed,
  interCommentStart,
  interCommentSuccess,
  interCommentFailed,
  deleteCommentStart,
  deleteCommentSuccess,
  deleteCommentFailed,
} from "../../apiSlice/commentSlice";

// <-- ( COMMENT ) ----------------------------->

// CREATE COMMENT
export const createComment = async (comment, dispatch) => {
  dispatch(createCommentStart());
  try {
    const res = await publicRequest.post("/v1/comment/comment", comment);
    dispatch(createCommentSuccess(res.data));
  } catch (err) {
    dispatch(createCommentFailed(err));
  }
};

// DELETE COMMENT
export const deleteComment = async (id, comment, dispatch) => {
  dispatch(deleteCommentStart());
  try {
    const res = await publicRequest.post("/v1/comment/" + id, comment);
    dispatch(deleteCommentSuccess(res.data));
  } catch (err) {
    dispatch(deleteCommentFailed(err));
  }
};

// INTER OF COMMENT
export const interComment = async (inter, id, dispatch) => {
  dispatch(interCommentStart());
  try {
    const res = await publicRequest.post("/v1/comment/inter/" + id, inter);
    dispatch(interCommentSuccess(res.data));
  } catch (err) {
    dispatch(interCommentFailed(err));
  }
};
