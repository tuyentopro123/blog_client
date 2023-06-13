import React, { useEffect, useState } from "react";
import "./Blog.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Helmet from "../../components/Helmet/Helmet";
import Navbar from "../../components/Navbar/Navbar";
import BlogItem from "../../components/BlogItem/BlogItem";
import PaginationType from "../../components/Pagination/Pagination";
import Sidebar from "../../components/Sidebar/Sidebar";
import Grid from "../../components/common/Grid/Grid";
import Skeleton from "@mui/material/Skeleton";
import { publicRequest } from "../../helpers/configAxios";
import empty from "../../assets/img/empty.jpg";

import {
  getAllPostStart,
  getAllPostSuccess,
  getAllPostFailed,
} from "../../redux/apiSlice/postSlice";

const Blog = ({ fields }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const query = new URLSearchParams(location.search);
  const currentPage = query.get("pagePost");
  const category = query.get("category");
  const [allPost, setAllPost] = useState(null);
  const pageNumber =
    allPost?.totalPost % 4 === 0
      ? Math.floor(allPost?.totalPost / 4)
      : Math.floor(allPost?.totalPost / 4) + 1;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // GET ALL POST
  const getAllPost = async (dispatch, currentPagePost, field, category) => {
    dispatch(getAllPostStart());
    try {
      if (category) {
        const res = await publicRequest.get(
          `/v1/post/${field}?category=${category}&pagePost=${currentPagePost}`
        );
        setAllPost(res.data);
      } else {
        const res = await publicRequest.get(
          `/v1/post/${field}?pagePost=${currentPagePost}`
        );
        setAllPost(res.data);
      }
      dispatch(getAllPostSuccess());
    } catch (err) {
      dispatch(getAllPostFailed());
      console.error(err);
    }
  };
  useEffect(() => {
    setAllPost(null);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (category) {
      getAllPost(dispatch, currentPage ? currentPage : 1, fields, category);
    } else {
      getAllPost(dispatch, currentPage ? currentPage : 1, fields, null);
    }
  }, [pathname, category, currentPage]);

  const HandleSetPage = async (e, value) => {
    if (category) {
      navigate(
        `/${fields}?category=${category}${
          value === 1 ? "" : `&pagePost=${value}`
        }`
      );
    } else {
      navigate(`/${fields}${value === 1 ? "" : `?pagePost=${value}`}`);
    }
  };
  return (
    <Helmet title="Blog">
      <main className="blog">
        <Navbar />
        <div className="blog__container">
          {allPost ? (
            <div className="blog__title">
              {category ? (
                <span>category : {category}</span>
              ) : (
                <span>{fields}</span>
              )}
            </div>
          ) : (
            <Skeleton
              sx={{ bgcolor: "grey.800" }}
              style={{ borderRadius: ".5rem" }}
              variant="rectangular"
              height={100}
              width={"100%"}
            />
          )}
          <div className="blog__content">
            <div className="blog__content__list">
              {allPost ? (
                <Grid
                  col={allPost?.post.length > 0 ? 2 : 1}
                  md={2}
                  sm={1}
                  gapCol={15}
                  gapRow={10}
                >
                  {allPost?.post.length > 0 ? (
                    allPost?.post.map((post, index) => (
                      <BlogItem key={index} post={post} field={fields} />
                    ))
                  ) : (
                    <div className="blog__empty">
                      <span>{`Chưa có bài viết nào về "${category}"`}</span>
                      <img src={empty} alt="" />
                    </div>
                  )}
                </Grid>
              ) : (
                <Grid col={2} md={2} sm={1} gapCol={15} gapRow={10}>
                  <BlogItem key={1} post={null} field={fields} />
                  <BlogItem key={2} post={null} field={fields} />
                </Grid>
              )}
            </div>
            {allPost?.post.length > 0 && (
              <PaginationType
                defaultPage={currentPage ? parseInt(currentPage) : 1}
                func={HandleSetPage}
                numb={pageNumber ? pageNumber : 2}
              />
            )}
          </div>
        </div>
        {allPost ? (
          <Sidebar type={fields} />
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            style={{
              borderRadius: ".5rem",
              margin: "0 1rem",
              position: "relative",
              top: "1rem",
            }}
            variant="rectangular"
            height={600}
            width={600}
          />
        )}
      </main>
    </Helmet>
  );
};

export default Blog;
