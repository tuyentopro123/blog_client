import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import emptyData from "../../assets/img/empty-data.svg";
import { AdminConfig } from "../../raw/web-config";
import { ColumnsForUser, ColumnsForPost } from "./CustomTable";
import DialogComponent from "../../components/common/Dialog/Dialog";
import { deletePost } from "../../redux/apiRequest/adminRequest/adminRequest";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export const Table = ({ rows, handleGetDataAdmin }) => {
  const [visible, setVisible] = useState({ post: null, status: false });
  const dispatch = useDispatch();

  const getRowId = (row) => row._id;
  const MyCustomNoRowsOverlay = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "30%" }} src={emptyData} alt="no-item" />;
    </div>
  );

  const handleAccessDelete = async () => {
    setVisible({ post: null, status: false });
    let post = visible.post;
    const userID = { user: post.user._id };
    await toast.promise(deletePost(dispatch, post._id, userID), {
      loading: "đang cập nhật lại...",
      success: "xóa thành công",
      error: "lỗi đường truyền",
    });
    handleGetDataAdmin(AdminConfig.POST, AdminConfig.POST_STR);
  };

  const handleCancelDelete = () => {
    setVisible({ post: null, status: false });
  };

  return (
    <div className="admin__info-table">
      <DialogComponent
        handleAccessDelete={handleAccessDelete}
        handleCancelDelete={handleCancelDelete}
        title="Xóa bài viết"
        content={"Bạn có chắc muốn bài viết?"}
        visible={visible.status}
      />
      <h2>{`Danh sách ${
        rows.status === AdminConfig.USER ? "người dùng" : "bài viết"
      }`}</h2>
      <div style={{ height: 500, width: "100%" }}>
        {rows.data && (
          <DataGrid
            rows={rows.data}
            columns={
              rows.status === AdminConfig.USER
                ? ColumnsForUser()
                : ColumnsForPost(setVisible)
            }
            getRowId={getRowId}
            slots={{
              noRowsOverlay: MyCustomNoRowsOverlay,
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};
