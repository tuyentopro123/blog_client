import React, { useEffect, useRef } from "react";
import "./RelatedPost.scss";
import Chip from "../utils/Chip/Chip";
import GetTime from "../../helpers/GetTime";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { amber } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const RelatedPost = ({ post, setPost }) => {
  const body = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      body.current.innerHTML = "";
      let domParser = new DOMParser();
      let doc = domParser.parseFromString(post?.content, "text/html");
      doc.body.childNodes.forEach((node) => {
        body.current?.appendChild(node.cloneNode(true));
      });
    }
  }, [post]);
  return (
    <div
      className="related"
      onClick={() => {
        setPost();
        navigate(`/post/${post.slug}`, { state: post._id });
      }}
    >
      <div className="related__container">
        <div className="related__title">
          <div className="related__title__header">
            <h1>{post.title}</h1>
          </div>
          <div className="related__title__author">
            <p>
              Đăng bởi
              <span style={{ color: "#e2ae69" }}> {post.user.username}</span>
              {"·"}
              <span style={{ userSelect: "none" }}>
                {GetTime(post.createdAt)}
              </span>
            </p>
          </div>
        </div>
        <div
          className="related__thumbnail"
          style={{ backgroundImage: `url(${post.imgPost})` }}
        ></div>
        <div ref={body} className="related__content"></div>
        <div className="related__navigate">
          <span>Xem thêm</span>
          <ArrowDropDownIcon sx={{ fontSize: 20, color: amber[100] }} />
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;
