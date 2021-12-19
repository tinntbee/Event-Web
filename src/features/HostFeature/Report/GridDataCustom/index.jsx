import React from "react";
import "./style.scss";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from "@mui/x-data-grid";

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport
        printOptions={{ allColumns: true }}
        csvOptions={{ allColumns: true }}
      />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: "studentId", headerName: "ID", width: 120 },
  {
    field: "fullName",
    headerName: "Họ và tên",
    width: 200,
  },
  {
    field: "email",
    headerName: "Địa chỉ mail",
    width: 250,
  },
  {
    field: "timeCreate",
    headerName: "Tham gia",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 150,
  },
  {
    field: "faculty",
    headerName: "Khoa",
    width: 100,
  },
  {
    field: "score",
    headerName: "Điểm",
    type: "number",
    width: 100,
  },
  {
    field: "displayName",
    headerName: "Nickname",
    width: 100,
  },
];

GridDataCustom.propTypes = {};

function GridDataCustom(props) {
  const { data } = props;
  console.log({ data });
  let rows = [];
  data.forEach((element) => {
    rows.push({
      id: element.user._id,
      displayName: element.user.nickname,
      studentId: element.user.email.substring(
        0,
        element.user.email.lastIndexOf("@")
      ),
      fullName: element.user.fullName,
      email: element.user.email,
      timeCreate: element.timeSubmit.replaceAll("-", "/").replaceAll("T"," ").substring(0, 16),
      faculty: element.user.faculty,
      score: element.point,
    });
  });
  return (
    <div className="grid-data-custom">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default GridDataCustom;
