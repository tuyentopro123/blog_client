import Tooltip from "@mui/material/Tooltip";
import { convertDateTime } from "../../helpers/GetTimeString";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const navToUser = (user, navigate) => {
  navigate(`/infor/${user}`, { state: user });
};

const navToPost = (post, navigate) => {
  navigate(`/post/${post.slug}`, { state: post._id });
};

const deleteUser = (user) => {
  toast("Chức năng hiện đang bảo trì", {
    icon: "🛠",
  });
};

const CustomCell = (value) => {
  const tooltipContent = (
    <div
      style={{
        color: "white",
        fontSize: 15,
        maxWidth: 400,
        lineHeight: 1.5,
      }}
    >
      {value}
    </div>
  );

  return (
    <Tooltip title={tooltipContent} placement="bottom-start" arrow>
      <div
        style={{
          color: "white",
          fontSize: 15,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </div>
    </Tooltip>
  );
};

export const ColumnsForUser = () => {
  const navigate = useNavigate();
  return [
    {
      field: "_id",
      headerName: "ID",
      width: 230,
      renderCell: (params) => CustomCell(params.value, params),
    },
    {
      field: "username",
      headerName: "Tên",
      width: 270,
      renderCell: (params) => CustomCell(params.value),
    },
    {
      field: "isAdmin",
      headerName: "Vai trò",
      width: 120,
      renderCell: (params) =>
        CustomCell(params.value ? "Quản trị viên" : "Thành viên"),
    },
    {
      field: "createdAt",
      headerName: "Ngày tham gia",
      // type: "number",
      sortable: true,
      width: 180,
      renderCell: (params) => CustomCell(convertDateTime(params.value)),
    },
    {
      field: "posts",
      headerName: "Số bài viết",
      // description: "This column has a value getter and is not sortable.",
      // sortable: false,
      width: 100,
      renderCell: (params) => CustomCell(params.value.length),
    },
    {
      field: "__v",
      headerName: "",
      width: 160,
      renderCell: (params) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            className="admin__btn seen"
            onClick={() => navToUser(params.id, navigate)}
          >
            Xem
          </button>
          <button className="admin__btn delete" onClick={() => deleteUser()}>
            Xóa
          </button>
        </div>
      ),
    },
  ];
};

export const ColumnsForPost = (setVisible) => {
  const navigate = useNavigate();

  const handleDeletePost = (post) => {
    setVisible({ post: post, status: true });
  };

  return [
    {
      field: "title",
      headerName: "Tên",
      width: 270,
      renderCell: (params) => CustomCell(params.value),
    },
    {
      field: "user",
      headerName: "Tác giả",
      width: 220,
      renderCell: (params) => CustomCell(params.value.username),
    },
    {
      field: "fields",
      headerName: "Thể loại",
      width: 120,
      renderCell: (params) => CustomCell(params.value),
    },
    {
      field: "createdAt",
      headerName: "Ngày tạo",
      // type: "number",
      sortable: true,
      width: 180,
      renderCell: (params) => CustomCell(convertDateTime(params.value)),
    },
    {
      field: "__v",
      headerName: "",
      width: 160,
      renderCell: (params) => (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <button
            className="admin__btn seen"
            onClick={() => navToPost(params.row, navigate)}
          >
            Xem
          </button>
          <button
            className="admin__btn delete"
            onClick={() => handleDeletePost(params.row)}
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];
};
