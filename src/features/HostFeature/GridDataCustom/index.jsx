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
  { field: "studentId", headerName: "ID", width: 90 },
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
    width: 250,
  },
  {
    field: "score",
    headerName: "Điểm",
    type: "number",
    width: 120,
  },
  {
    field: "displayName",
    headerName: "Nickname",
    width: 100,
  },
];

const rows = [
  {
    id: "1",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "2",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "3",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "4",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "5",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "6",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "7",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "8",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "9",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "10",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "11",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "12",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "13",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "14",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "15",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "16",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "17",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "18",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "19",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
  {
    id: "20",
    displayName: "bee",
    studentId: "18110381",
    fullName: "Nguyễn Trung Tín",
    email: "18110381@student.hcmute.edu.vn",
    timeCreate: "2021/09/27 80:43",
    faculty: "Công nghệ Thông tin",
    score: 2040,
  },
];

GridDataCustom.propTypes = {};

function GridDataCustom(props) {
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
