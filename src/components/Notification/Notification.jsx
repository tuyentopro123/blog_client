import React, { useState } from "react";
import "./Notification.scss";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GetTime from "../../helpers/GetTime";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { grey } from "@mui/material/colors";
import { publicRequest } from "../../helpers/configAxios";
import CircularProgress from "@mui/material/CircularProgress";

import { emojiNoti } from "../../raw/raw";
// import { getUserPost } from "../../redux/apiRequest"

import { redirectNotificationStart } from "../../redux/authSlice";

const Notification = ({ data }) => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const loading = useSelector((state) => state.auth.isFetching);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNoti = async (noti) => {
    // ACCESS NOTIFICATION
    const accessNotification = async () => {
      try {
        const res = await publicRequest.post(
          "/v1/user/check/" + user._id,
          noti
        );
        navigate(`/post/${res.data.post.slug}`, { state: res.data.post._id });
        res.data.action && dispatch(redirectNotificationStart(noti));
      } catch (err) {
        console.log(err);
      }
    };
    accessNotification();
  };

  return (
    <div className="notification__tooltip">
      <div className="notification__container">
        <h2>Thông báo</h2>
        {loading ? (
          <div
            style={{
              padding: "2rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            <CircularProgress color="primary" />
          </div>
        ) : (
          <ul>
            {data.length === 0 ? (
              <li style={{ padding: "1rem" }}>
                <span>Bạn chưa có thông báo mới</span>
              </li>
            ) : (
              data.map((noti, index) => (
                <li key={index} onClick={() => handleNoti(noti)}>
                  <div className="notification__item">
                    <div className="notification__item__avatar">
                      <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={noti.sender_img}
                      />
                      <img
                        src={
                          emojiNoti.find((e) => e.name === noti.action_icon).src
                        }
                      />
                    </div>
                    <div className="notification__item__desc">
                      {noti.action === "interComment" ? (
                        <p>
                          <span>{noti.sender_user}</span> đã bày tỏ cảm xúc về
                          một bình luận của bạn
                        </p>
                      ) : noti.action === "comment" ? (
                        <p>
                          <span>{noti.sender_user}</span> đã bình luận về một
                          bài viết của bạn
                        </p>
                      ) : noti.action === "replyComment" ? (
                        <p>
                          <span>{noti.sender_user}</span> đã trả lời một bình
                          luận của bạn
                        </p>
                      ) : (
                        <p>
                          <span>{noti.sender_user}</span> đã thích một bài viết
                          của bạn
                        </p>
                      )}
                      <span>{GetTime(noti.createdAt)}</span>
                    </div>
                    {/* <div className="notification__item__setting">
                      <MoreHorizIcon sx={{ fontSize: 30, color: grey[500] }} />
                    </div> */}
                    <div
                      className={`notification__item__dot ${
                        !noti.seen && "active"
                      }`}
                    ></div>
                  </div>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notification;
