import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import emptyData from "../../assets/img/empty-data.svg";
import { AdminConfig } from "../../raw/web-config";
import { ColumnsForUser, ColumnsForPost } from "./CustomTable";

export const Table = ({ rows }) => {
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

  return (
    <div className="admin__info-table">
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
                : ColumnsForPost()
            }
            getRowId={getRowId}
            slots={{
              noRowsOverlay: MyCustomNoRowsOverlay,
            }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            checkboxSelection
          />
        )}
      </div>
    </div>
  );
};
