import { publicRequest } from "../../../helpers/configAxios";
import {
  createPostStart,
  createPostSuccess,
  createPostFailed,
  updateLikeStart,
  updateLikeSuccess,
  updateLikeFailed,
  getAllPostStart,
  getAllPostSuccess,
  getAllPostFailed,
  searchPostStart,
  searchPostSuccess,
  searchPostFailed,
} from "../../apiSlice/postSlice";

// <-- ( POST ) ----------------------------->
// CREATE POST
export const createPost = async (post, id, dispatch, navigate) => {
  dispatch(createPostStart());
  try {
    const res = await publicRequest.post(`/v1/post/post/` + id, post);
    dispatch(createPostSuccess(res.data));
    const navigation = () => {
      navigate(`/`);
    };
    setTimeout(navigation, 1600);
  } catch (err) {
    dispatch(createPostFailed(err));
  }
};

// GET ALL POST
export const getAllPost = async (
  dispatch,
  currentPagePost,
  field,
  category
) => {
  dispatch(getAllPostStart());
  try {
    if (category) {
      const res = await publicRequest.get(
        `/v1/post/${field}?category=${category}&pagePost=${currentPagePost}`
      );
      dispatch(getAllPostSuccess(res.data));
    } else {
      const res = await publicRequest.get(
        `/v1/post/${field}?pagePost=${currentPagePost}`
      );
      dispatch(getAllPostSuccess(res.data));
    }
  } catch (err) {
    dispatch(getAllPostFailed());
  }
};

// UPDATE POST
export const updatePost = async (user, id, dispatch) => {
  dispatch(updateLikeStart());
  try {
    const res = await publicRequest.post("/v1/post/update/" + id, user);
    dispatch(updateLikeSuccess(res.data));
  } catch (err) {
    dispatch(updateLikeFailed());
  }
};
// SEARCH POST
export const searchItem = async (dispatch, debounceSearchTerm) => {
  dispatch(searchPostStart());
  try {
    const res = await publicRequest.get(
      `/v1/post/path/result?searchQuery=${debounceSearchTerm}`
    );
    dispatch(searchPostSuccess());
    return res.data;
  } catch (err) {
    dispatch(searchPostFailed());
  }
};
