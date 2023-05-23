import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { red,blue,purple,orange,indigo } from "@mui/material/colors";
import Hiking from "../assets/img/Hiking.png";
import lol from "../assets/img/lol.png";
import chatApp from "../assets/img/chatApp.png";
export const emoji = [
    {
      title: "Thích",
      name: "like",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/c09iyar2pqvkubulcpho.png",
    },
    {
      title: "Yêu Thích",
      name: "heart",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/irlnd98a5vdris5ri4m8.png",
    },
    {
      title: "Vui vẻ",
      name: "funny",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/dagzhj3q6miykzqjmqis.png",
    },
    {
      title: "HaHa",
      name: "smile",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141302/emoji/cls4albnfxfogfxwil0z.png",
    },
    {
      title: "Sad",
      name: "cry",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/x1l5wdj4puqrda2bfimv.png",
    },
    {
      title: "Wow",
      name: "surprised",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141302/emoji/d8qmeeuoud0sl2i6qjmq.png",
    },
    {
      title: "Phẫn nộ",
      name: "angry",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/ldmpjgyrqgnewlnffo0d.png",
    },
];

export const emojiNoti = [
    {
        name: "like",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/c09iyar2pqvkubulcpho.png",
    },
    {
      name: "heart",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/irlnd98a5vdris5ri4m8.png",
    },
    {
      name: "funny",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/dagzhj3q6miykzqjmqis.png",
    },
    {
      name: "smile",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141302/emoji/cls4albnfxfogfxwil0z.png",
    },
    {
      name: "cry",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/x1l5wdj4puqrda2bfimv.png",
    },
    {
      name: "surprised",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141302/emoji/d8qmeeuoud0sl2i6qjmq.png",
    },
    {
      name: "angry",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/ldmpjgyrqgnewlnffo0d.png",
    },
    {
      name: "comment",
      src: "https://res.cloudinary.com/tealive/image/upload/v1653141301/emoji/z7hvqmibkvhctbi0ov57.png",
    },
];

export const categories = [
    {
      text: "ReactJs",
      field: "program",
      image: "https://reactjs.org/logo-og.png",
    },
    {
      text: "Social",
      field: "life",
      image:
        "https://baobinhdinh.vn/viewimage.aspx?imgid=206339",
    },
    {
      text: "Frontend",
      field: "program",
      image: "https://nordiccoder.com/app/uploads/2019/10/39-frontend.jpg",
    },
    {
      text: "Game",
      field: "life",
      image:
        "https://cdn.sforum.vn/sforum/wp-content/uploads/2022/03/MVU-BFADM-2020-Q4-Skyscraper-Future-of-Video-Games-Trends-Technology-Types-header-v2-1000x523-1.jpg",
    },
    {
      text: "Backend",
      field: "program",
      image:
        "https://blog.freec.asia/wp-content/uploads/2020/11/cong-viec-backend-developer-1.jpg",
    },
    {
      text: "Drama",
      field: "life",
      image:
        "https://meta.vn/Data/image/2021/06/21/drama-la-gi-2.jpg",
    },
    {
      text: "NextJS",
      field: "program",
      image:
        "https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg",
    },
    {
      text: "Film",
      field: "life",
      image:
        "https://trengluong.files.wordpress.com/2017/02/film.jpg",
    },
    
];

export const social = [
    {
      title: "Facebook",
      href: "https://www.facebook.com/tea.live.167/",
      icon: FacebookIcon,
      color:indigo,
    },
    {
      title: "instagram",
      href: "https://www.instagram.com/tealive4/",
      icon: InstagramIcon,
      color:orange,
    },
    {
      title: "linkedin",
      href: "https://www.linkedin.com/in/tuy%C3%AAn-nguy%E1%BB%85n-v%C4%83n-47771b234/",
      icon: LinkedInIcon,
      color:purple,
    },
    {
      title: "github",
      href: "https://github.com/tuyentopro123",
      icon: GitHubIcon,
      color:null,
    },
    {
      title: "youtube",
      href: "https://www.facebook.com/tea.live.167/",
      icon: YouTubeIcon,
      color:red,
    },
    {
      title: "twitter",
      href: "https://www.facebook.com/tea.live.167/",
      icon: TwitterIcon,
      color:blue
    },
]

export const brands = ["Frontend","Backend","Scss","NextJS","Redux","ReactJs","game","social","drama","music","film"]


export const project = [
  {
      name:"Hiking concept web template",
      tech: "ReactJs, TailwindCSS",
      desc:"Đây là template mình clone từ file Figma và sử dụng TailwindCSS",
      img: Hiking,
      github: "https://github.com/tuyentopro123/Hiking-concept-web-template",
      web: "https://hiking-concept-web-template.vercel.app/"
  },
  {
      name:"Lengue of lengends template",
      tech: "ReactJs, SCSS",
      desc:"Đây là template mình làm ra dựa theo trang chủ của Liên Minh Huyền thoại",
      img: lol,
      github: "https://github.com/tuyentopro123/lengue-of-lengends-template",
      web: "https://lengueoflengend.netlify.app/"
  },
  {
      name:"Chat App",
      tech: "ReactJS, SCSS, Firebase",
      desc:"Đây là sản phẩm mình làm hướng dẫn của Youtube channel Hole text và chủ yếu để thử chức năng cũng như để tìm hiểu về firebase nên template khá sơ sài.",
      img: chatApp,
      github: "https://github.com/tuyentopro123/Chat_app",
      web: "https://tealiveapp.firebaseapp.com/login"
  },
]