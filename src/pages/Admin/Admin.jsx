import "./Admin.scss";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Body from "../../components/Body/Body";
import Helmet from "../../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostAdmin, getAllUser } from "../../redux/apiRequest";
import { Table } from "./Table";
import toast, { Toaster } from "react-hot-toast";

import { AdminConfig } from "../../raw/web-config";
const Home = () => {
  // const user = useSelector((state) => state.auth.login?.currentUser);
  const [rows, setRows] = useState({
    data: null,
    status: null,
  });
  const dispatch = useDispatch();
  const options = [
    {
      name: "User",
      status: AdminConfig.USER,
    },
    {
      name: "Post",
      status: AdminConfig.POST,
    },
  ];

  const handleGetAllUser = async (index) => {
    const users = await getAllUser(dispatch);
    setRows({ data: users.user, status: index });
  };
  const handleGetAllPost = async (index) => {
    const posts = await getAllPostAdmin(dispatch);
    setRows({ data: posts.post, status: index });
  };

  const handleFocus = async (index) => {
    if (rows.status !== index) {
      if (index === AdminConfig.USER) {
        handleGetAllUser(index);
      } else {
        handleGetAllPost(index);
      }
    }
  };

  useEffect(() => {
    handleGetAllUser(AdminConfig.USER);
  }, []);

  return (
    <Helmet title="Admin">
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            fontSize: "14px",
          },
        }}
      />
      <main className="admin">
        <div className="admin__container">
          <div className="admin__title">
            <h1>Admin</h1>
          </div>
          <div className="admin__content">
            <div className="admin__navigate">
              {options.map((item, index) => (
                <div
                  key={index}
                  className={`admin__button ${
                    rows.status === item.status ? "active" : ""
                  }`}
                  onClick={() => handleFocus(item.status)}
                >
                  {item.name}
                </div>
              ))}
            </div>
            {rows.data && <Table rows={rows} />}
          </div>
        </div>
      </main>
    </Helmet>
  );
};

export default Home;
