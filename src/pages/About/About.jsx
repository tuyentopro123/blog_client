import React, { useState, useEffect } from "react";
import "./About.scss";
import { useNavigate, Link } from "react-router-dom";
import { publicRequest } from "../../helpers/configAxios";
import LazyLoad from "react-lazyload";
import GetTime from "../../helpers/GetTime";
import Helmet from "../../components/Helmet/Helmet";
import Grid from "../../components/common/Grid/Grid";

// mui material
import Avatar from "@mui/material/Avatar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { yellow } from "@mui/material/colors";
import { social, categories, project } from "../../raw/raw";

const About = () => {
  const navigate = useNavigate();

  const [random, setRandom] = useState();
  // RANDOM POST
  const getRandomPost = async () => {
    try {
      const res = await publicRequest.get("/v1/post/path/random");
      setRandom(res.data.randomPosts1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigate = (item) => {
    navigate(`/post/${item.slug}`);
  };

  useEffect(() => {
    getRandomPost();
    return () => setRandom();
  }, []);
  return (
    <Helmet title="About">
      <section className="about">
        <div className="about__banner"></div>
        <div className="about__container">
          <div className="about__info">
            <h1>Xin chào các bạn</h1>
            <div className="about__info__content">
              <p>
                Chào các bạn, Mình là Tuyên, hiện đang là sinh viên năm 3 D20 ở
                Học Viện Công nghệ Bưu Chính Viễn thông PTIT. Hiện tại Mình đang
                định hướng trở thành một web developer và Mình đang cố gắng từng
                ngày để đạt được mục tiêu của mình. Mình luôn cố gắng tự tìm
                hiểu các công nghệ mới thông qua việc đọc hiểu document và xem
                các Youtube channel về các công nghệ hay những phương pháp hiệu
                quả khi phát triển web.
              </p>
              <div className="about__info__image">
                <img
                  src="https://i.pinimg.com/originals/cf/8a/44/cf8a4484ed5610ce55141f2cef7b4e25.jpg"
                  alt=""
                />
              </div>
              <p>
                Hiện tại chuyên môn chính của Mình là về mảng front-end. Mình
                làm việc khá nhiều về ReactJS và Mình bắt đầu hiểu rõ về nó.
                Mình cũng tự học và sử dụng nhiều framework hỗ trợ khác như
                Tailwind CSS,Material UI,... Và về Back-end Mình cũng biết một
                chút cơ bản. Trang blog cá nhân này được Mình xây dựng theo
                NodeJS dựa trên Javascript
              </p>
              <p>
                Về trình độ Tiếng Anh của mình thì hiện mình vẫn đang tự học
                thêm tiếng anh và có thể đọc hiểu được tài liệu cơ bản.
              </p>
            </div>
            <div className="about__info__more">
              <p>Một số công nghê mình đã tự tìm hiểu:</p>
              <Grid col={2} md={2} sm={1} gapCol={10} gapRow={10}>
                <span>HTML</span>
                <span>CSS(SCSS)</span>
                <span>JavaScript (ES6+)</span>
                <span>ReactJS</span>
                <span>TailwindCSS</span>
                <span>Material UI</span>
                <span>NodeJS</span>
                <span>ExpressJS</span>
                <span>MongoDB</span>
                <span>Typescript (basic)</span>
              </Grid>
            </div>
            <div className="about__info__project">
              <h1>Một vài sản phẩm nhỏ mình đã làm </h1>
              {project.map((item, index) => (
                <div key={index} className="about__info__project__item">
                  <h2>{`${index + 1}. ${item.name}`}</h2>
                  <p>{`- Công nghệ đã dùng: ${item.tech}`}</p>
                  <p>{`- ${item.desc}`}</p>
                  <img src={item.img} alt="" />
                  <form action="">
                    <label>- Link github: </label>
                    <a href={item.github} target="_blank">
                      {item.github}
                    </a>
                    <br />
                    <br />
                    <label>- Link trang: </label>
                    <a href={item.web} target="_blank">
                      {item.web}
                    </a>
                  </form>
                </div>
              ))}
            </div>
            <span>
              Cảm ơn mọi người đã ghé thăm trang web của mình.{" "}
              <a href="/">Về trang chủ</a>
            </span>
          </div>

          <div className="about__sidebar">
            <div className="about__personal">
              <div className="about__personal__banner"></div>
              <div className="about__personal__box">
                <div className="about__personal__avatar">
                  <Avatar
                    sx={{ width: 140, height: 140 }}
                    src="https://res.cloudinary.com/tealive/image/upload/v1658281211/lol_template/crrjc8bqkcps2bvmc95b.jpg"
                  />
                </div>
                <div className="about__personal__content">
                  <div className="about__personal__content__title">
                    <h2>Nguyễn Văn Tuyên</h2>
                    <div className="about__personal__content__address">
                      <LocationOnIcon
                        sx={{ fontSize: 15, color: yellow[700] }}
                      />
                      Lương Ngọc Quyến, Hà Đông, Hà Nội
                    </div>
                  </div>
                  <div className="about__personal__content__detail">
                    <p>
                      Xin chào, tên mình là Tuyên. Mình là một front-end
                      developer. Mình có khả năng tự tìm hiểu và phát triển ứng
                      web app bằng các công nghệ mới ngày nay như ReactJS,
                      NextJS. Mình đang cố gắng phát triển và định hướng trong
                      tương lai sẽ trở thành một fullstack developer{" "}
                    </p>
                  </div>
                  <div className="about__personal__content__social">
                    {social.map((item, index) => (
                      <div
                        key={index}
                        className="about__personal__content__item"
                      >
                        <a href={item.href}>
                          <item.icon
                            sx={{
                              fontSize: 20,
                              color: item.color ? item.color[500] : "disabled",
                            }}
                          />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="about__more">
              <div className="about__more__category">
                <div className="about__sidebar__title">
                  <span>categories</span>
                </div>
                <ul>
                  {categories.map((item, index) => (
                    <li key={index} id={item.text}>
                      <Link to={`/${item.field}?category=${item.text}`}>
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="about__more__popular-post">
                <div className="about__sidebar__title">
                  <span>popular</span>
                </div>
                <div className="about__more__popular__list">
                  {random &&
                    random.map((item, index) => (
                      <div
                        state={item._id}
                        key={index}
                        onClick={() => handleNavigate(item)}
                        className="about__more__popular__item"
                      >
                        <span className="about__more__popular__image">
                          <LazyLoad height={250} width={150} once>
                            <img src={item.imgPost} alt="" />
                          </LazyLoad>
                        </span>
                        <div className="about__more__popular__body">
                          <div className="about__more__popular__body__header">
                            <h3>{item.title}</h3>
                          </div>
                          <span>{GetTime(item.createdAt)}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="about__mail">
              <div className="about__mail__box">
                <h2>Nhận thông báo về bài viết mới nhất qua gmail</h2>
                <form className="about__mail__input">
                  <input type="text" placeholder="Email address" />
                  <br />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
};

export default About;
