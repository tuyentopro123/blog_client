import React, { useEffect, useState } from "react";
import "./Body.scss";
import List from "../utils/List/List";
import Grid from "../utils/Grid/Grid";
import Thumbnail from "../Thumbnail/Thumbnail";
import Chip from "../utils/Chip/Chip";
import { useNavigate } from "react-router-dom";

// Import material ui
import Skeleton from "@mui/material/Skeleton";
import { publicRequest } from "../../helpers/configAxios";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { red } from "@mui/material/colors";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-flip";

import { getTimeString } from "../../helpers/GetTimeString";

// import required modules
import { Navigation, Autoplay, EffectFlip } from "swiper";
import PostItem from "../PostItem/PostItem";
import MiniPost from "../MiniPost/MiniPost";
import { Avatar } from "@mui/material";
import { categories, social } from "../../raw/raw";

const Body = () => {
  const [homeList, setHomeList] = useState();
  const [listPost, setListPost] = useState();
  const [viewPost, setViewPost] = useState();
  const [popularPost, setPopularPost] = useState();
  const [randomPost, setRandomPost] = useState();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const swiperOptionsV1 = {
    modules: [Navigation, Autoplay],
    navigation: { clickable: true },
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    speed: 400,
    width: 800,
    initialSlide: 3,
    autoplay: {
      delay: 6000,
    },
    loop: true,
    loopAdditionalSlides: 2,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        width: 400,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  };

  const swiperOptionsV2 = {
    modules: [Navigation],
    navigation: { clickable: false },
    slidesPerView: 4,
    grabCursor: true,
    speed: 300,
    loop: true,
    initialSlide: 4,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        width: 350,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 10,
        initialSlide: 0,
        width: 750,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  };

  const swiperOptionsV3 = {
    modules: [EffectFlip],
    grabCursor: true,
    centeredSlides: true,
    speed: 400,
    // width:400,
    loop: true,
    effect: "flip",
    loopAdditionalSlides: 2,
    breakpoints: {
      320: {
        width: 340,
      },
      768: {
        width: 320,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  // GET POST
  const handleGetPost = (post) => {
    navigate(`/post/${post.slug}`, { state: post._id });
  };

  useEffect(() => {
    let controller = new AbortController();

    // GET POST TO RENDER HOME
    const listPostHome = async () => {
      try {
        const res = await publicRequest.get("/v1/post/path/home");
        setHomeList(res.data);
        controller = null;
      } catch (err) {
        console.log(err);
      }
    };
    listPostHome();
    setLoading(false);
    return () => {
      listPostHome();
      controller?.abort();
    };
  }, []);
  return (
    <section className="body">
      <div className="body__content">
        {homeList?.highlight ? (
          <div className="body__trailer">
            <div className="body__desc">
              <Swiper {...swiperOptionsV1}>
                {homeList?.highlight.map((post, index) => (
                  <SwiperSlide key={index}>
                    <PostItem post={post} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : (
          <Skeleton
            sx={{ bgcolor: "grey.800" }}
            variant="rectangular"
            height={400}
          />
        )}
        <div className="body__post">
          {/* <-----------First form------------>*/}
          <div className="body__post__firstForm">
            {homeList?.new_post ? (
              <List header="Recent Stories">
                <Grid col={2} md={2} sm={1} gapCol={10} gapRow={10}>
                  {homeList?.new_post.map((post, index) => (
                    <Thumbnail key={index} post={post} />
                  ))}
                </Grid>
              </List>
            ) : (
              <div className="skeleton__recent">
                <Skeleton
                  sx={{ bgcolor: "grey.800" }}
                  variant="rectangular"
                  height={1000}
                />
              </div>
            )}

            {homeList?.post_view ? (
              <div className="body__post__firstForm__sidebar">
                <List header="read more" active="active">
                  <Grid col={1} md={2} sm={1} gapCol={20} gapRow={25}>
                    {homeList?.post_view.map((post, index) => (
                      <MiniPost key={index} post={post} />
                    ))}
                  </Grid>
                </List>
                <List header="categories popular" active="active">
                  <Grid col={2} md={2} sm={1} gapCol={10} gapRow={10}>
                    {categories.map((cart, index) => (
                      <Chip
                        key={index}
                        text={cart.text}
                        field={cart.field}
                        className="cart"
                        image={cart.image}
                      ></Chip>
                    ))}
                  </Grid>
                </List>
              </div>
            ) : (
              <div className="skeleton__sidebar">
                <Skeleton
                  sx={{ bgcolor: "grey.800" }}
                  variant="rectangular"
                  height={1000}
                />
              </div>
            )}
          </div>

          {homeList?.post_view ? (
            <div className="body__banner">
              <div className="body__banner__overlay"></div>
              <div
                className="body__banner__img"
                style={{
                  backgroundImage: `url(https://img5.thuthuatphanmem.vn/uploads/2021/08/25/background-3d-4k_085529380.jpg)`,
                }}
              >
                <span>Ads Banner</span>
              </div>
            </div>
          ) : (
            <div className="body__banner">
              <Skeleton
                sx={{ bgcolor: "grey.800" }}
                variant="rectangular"
                height={200}
              />
            </div>
          )}
          {/* <-----------Second form------------>*/}

          <div className="body__post__secondForm">
            {homeList?.comment_post ? (
              <List header="popular stories" style={{ paddingBottom: 0 }}>
                <Swiper {...swiperOptionsV2}>
                  {homeList?.comment_post.map((post, index) => (
                    <SwiperSlide key={index}>
                      <div
                        key={index}
                        className="body__post__secondForm__popular"
                      >
                        <div className="body__post__secondForm__item">
                          <div
                            className="body__post__secondForm__img"
                            style={{ backgroundImage: `url(${post.imgPost})` }}
                          ></div>
                          <div className="body__post__secondForm__desc">
                            <div className="body__post__secondForm__desc__content">
                              <Chip
                                key={index}
                                className="body__post__secondForm__desc__content__chip"
                                text={post.category[0]}
                                field={post.fields}
                              />
                            </div>
                            <div className="body__post__secondForm__desc__icon">
                              <AccessTimeIcon
                                sx={{ fontSize: 20, color: red[400] }}
                              />
                              <span>{getTimeString(post.createdAt)}</span>
                            </div>

                            <div className="body__post__secondForm__desc__icon">
                              <ChatBubbleOutlineIcon
                                sx={{ fontSize: 20, color: red[400] }}
                              />
                              <span>{post.commentCount}</span>
                            </div>
                          </div>
                          <div className="body__post__secondForm__title">
                            <h1>{post.title}</h1>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </List>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800" }}
                variant="rectangular"
                height={400}
              />
            )}
          </div>
          {/* <-----------Third form------------>*/}

          <div className="body__post__thirdForm">
            {homeList?.random ? (
              <List
                header="You Don't miss"
                style={{ paddingBottom: 0, minHeight: "75vh" }}
              >
                <div className="body__post__thirdForm__container">
                  <Swiper {...swiperOptionsV3}>
                    {Object.keys(homeList?.random).length > 0 &&
                      homeList?.random.random_posts1.map((post, index) => (
                        <SwiperSlide key={index}>
                          <div
                            key={index}
                            className="body__post__thirdForm__memorable"
                            style={{ backgroundImage: `url(${post.imgPost})` }}
                          >
                            <div className="body__post__thirdForm__item">
                              <div
                                className="body__post__thirdForm__title"
                                onClick={() => handleGetPost(post)}
                              >
                                <h1>{post.title}</h1>
                              </div>
                              <div className="body__post__thirdForm__desc">
                                <div className="body__post__thirdForm__desc__content">
                                  <span>{post.category[0]}</span>
                                </div>
                                <div className="body__post__thirdForm__desc__icon">
                                  <AccessTimeIcon
                                    sx={{ fontSize: 20, color: red[400] }}
                                  />
                                  <span>{getTimeString(post.createdAt)}</span>
                                </div>

                                <div className="body__post__thirdForm__desc__icon">
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ fontSize: 20, color: red[400] }}
                                  />
                                  <span>{post.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                  <Swiper {...swiperOptionsV3}>
                    {Object.keys(homeList?.random).length > 0 &&
                      homeList?.random.random_posts2.map((post, index) => (
                        <SwiperSlide key={index}>
                          <div
                            key={index}
                            className="body__post__thirdForm__memorable"
                            style={{ backgroundImage: `url(${post.imgPost})` }}
                            onClick={() => handleGetPost(post)}
                          >
                            <div className="body__post__thirdForm__item">
                              <div className="body__post__thirdForm__title">
                                <h1>{post.title}</h1>
                              </div>
                              <div className="body__post__thirdForm__desc">
                                <div className="body__post__thirdForm__desc__content">
                                  <span>{post.category[0]}</span>
                                </div>
                                <div className="body__post__thirdForm__desc__icon">
                                  <AccessTimeIcon
                                    sx={{ fontSize: 20, color: red[400] }}
                                  />
                                  <span>{getTimeString(post.createdAt)}</span>
                                </div>

                                <div className="body__post__thirdForm__desc__icon">
                                  <FavoriteBorderOutlinedIcon
                                    sx={{ fontSize: 20, color: red[400] }}
                                  />
                                  <span>{post.likes}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </List>
            ) : (
              <div className="skeleton__recent">
                <Skeleton
                  sx={{ bgcolor: "grey.800" }}
                  variant="rectangular"
                  height={600}
                />
              </div>
            )}

            {homeList?.random ? (
              <div className="body__post__firstForm__sidebar">
                <List header="Contact" active="active">
                  <div className="follow">
                    <div className="follow__image">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Statue_of_Tran_Hung_Dao%2C_Nam_Dinh_City%2C_Vietnam_%2803%29.jpg/1200px-Statue_of_Tran_Hung_Dao%2C_Nam_Dinh_City%2C_Vietnam_%2803%29.jpg"
                        alt=""
                      />
                    </div>
                    <div className="follow__social">
                      <Grid col={2} md={3} sm={2} gapCol={15} gapRow={15}>
                        {social.map((item, index) => (
                          <div key={index} className="follow__social__item">
                            <a href={item.href}>
                              <item.icon
                                sx={{
                                  fontSize: 40,
                                  color: item.color
                                    ? item.color[500]
                                    : "disabled",
                                }}
                              />
                              <div className="follow__social__item__content">
                                <span className="follow__social__item__title">
                                  {item.title}
                                </span>
                                <span className="follow__social__item__like">
                                  200k
                                </span>
                              </div>
                            </a>
                          </div>
                        ))}
                      </Grid>
                    </div>
                  </div>
                </List>
              </div>
            ) : (
              <div className="skeleton__sidebar">
                <Skeleton
                  sx={{ bgcolor: "grey.800" }}
                  variant="rectangular"
                  height={600}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
