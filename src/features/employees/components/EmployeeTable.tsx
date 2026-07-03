// import {
//   Avatar,
//   IconButton,
//   Paper,
// } from "@mui/material";

// import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";

// import {
//   DataGrid,
//   type GridColDef,
// } from "@mui/x-data-grid";

// import EmployeeStatusChip from "./EmployeeStatusChip";

// interface Props {
//   rows: any[];
//   loading: boolean;
//   onEdit: (row: any) => void;
//   onDelete: (row: any) => void;
// }

// export default function EmployeeTable({
//   rows,
//   loading,
//   onEdit,
//   onDelete,
// }: Props) {

//   const columns: GridColDef[] = [

//     {
//       field: "avatar",
//       headerName: "",
//       width: 70,

//       renderCell: (params) => (
//         <Avatar src={params.row.avatar}>
//           {params.row.name?.charAt(0)}
//         </Avatar>
//       ),
//     },

//     {
//       field: "employeeId",
//       headerName: "Employee ID",
//       width: 140,
//     },

//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//     },

//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },

//     {
//       field: "department",
//       headerName: "Department",
//       width: 150,
//     },

//     {
//       field: "designation",
//       headerName: "Designation",
//       width: 160,
//     },

//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,

//       renderCell: (params) => (
//         <EmployeeStatusChip
//           status={params.value}
//         />
//       ),
//     },

//     {
//       field: "actions",
//       headerName: "Actions",
//       width: 130,

//       renderCell: (params) => (
//         <>
//           <IconButton
//             color="primary"
//             onClick={() => onEdit(params.row)}
//           >
//             <EditIcon />
//           </IconButton>

//           <IconButton
//             color="error"
//             onClick={() =>
//               onDelete(params.row)
//             }
//           >
//             <DeleteIcon />
//           </IconButton>
//         </>
//       ),
//     },
//   ];

//   return (
//     <Paper sx={{ height: 650 }}>

//       <DataGrid

//         rows={rows}

//         columns={columns}

//         loading={loading}

//         getRowId={(row) => row._id}

//         pageSizeOptions={[10, 20, 50]}

//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 10,
//             },
//           },
//         }}

//       />

//     </Paper>
//   );
// }



import {
  IconButton,
  Paper,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import { useNavigate } from "react-router-dom";

import EmployeeStatusChip from "./EmployeeStatusChip";
import EmployeeAvatar from "./EmployeeAvatar";

interface Props {
  rows: any[];
  loading: boolean;

  density:
    | "compact"
    | "standard"
    | "comfortable";

  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
}

export default function EmployeeTable({
  rows,
  loading,
  density,
  onEdit,
  onDelete,
}: Props) {

  const navigate = useNavigate();

  const columns: GridColDef[] = [

    {
      field: "avatar",
      headerName: "",
      width: 80,
      sortable: false,
      filterable: false,

      renderCell: (params) => (
        <EmployeeAvatar
          src={params.row.avatar}
          name={params.row.name}
        />
      ),
    },

    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 140,
        align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment

    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 180,
       align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment

    },

    {
      field: "email",
      headerName: "Email",
      flex: 1,
      minWidth: 220,
     align: "center",         // Cell alignment
  headerAlign: "center",   // Header alignment

    },

    // {
    //   field: "department",
    //   headerName: "Department",
    //   width: 160,
    // },

{
    field: "department",
  headerName: "Department",
  flex: 1,
  minWidth: 220,
   align: "center",         // Cell alignment
  headerAlign: "center",   // Header alignment

  renderCell: (params) => (
    <Box
      sx={{
        width: "100%",   
        textAlign: "center",
      }}
    >
      {params.row.department?.name ?? "-"}
    </Box>
  ),
  
},

    {
      field: "designation",
      headerName: "Designation",
      width: 180,
       align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment

    },

    {
      field: "salary",
      headerName: "Salary",
      width: 130,
  align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment

      renderCell: (params) =>
        `₹ ${params.value}`,
    },

    {
      field: "status",
      headerName: "Status",
      width: 120,
       align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment

      renderCell: (params) => (
        <EmployeeStatusChip
          status={params.value}
        />
      ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 170,
      sortable: false,
      filterable: false,
       align: "center",         // Cell alignment
       headerAlign: "center",   // Header alignment



      renderCell: (params) => (
        <>

          <IconButton
            color="info"
            onClick={() =>
              navigate(`/employees/${params.row._id}`)
            }
          >
            <VisibilityIcon />
          </IconButton>

          <IconButton
            color="primary"
            onClick={() =>
              onEdit(params.row)
            }
          >
            <EditIcon />
          </IconButton>

          <IconButton
            color="error"
            onClick={() =>
              onDelete(params.row)
            }
          >
            <DeleteIcon />
          </IconButton>

        </>
      ),
    },
  ];



console.log("====", rows);

  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: 2,
        width: "100%",
     }}
    >
      <Box
        sx={{
                 width: "100%",

         height: 650,

        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          density={density}
          getRowId={(row) => row._id}
          disableRowSelectionOnClick
          pageSizeOptions={[10, 20, 50]}
          sx={{
            border: 0,

          //   "& .MuiDataGrid-columnHeaders": {
          //     position: "sticky",
          //     top: 0,
          //     backgroundColor: "#fafafa",
          //     zIndex: 10,
          //     fontWeight: "bold",
          //   },

          //   "& .MuiDataGrid-cell": {
          //     display: "flex",
          //     alignItems: "center",
          //   },
          // }}

   "& .MuiDataGrid-columnHeaders": {
      backgroundColor: "#fafafa",
      fontWeight: 700,
      fontSize: "15px",
    },

    // Center all header text
    "& .MuiDataGrid-columnHeaderTitle": {
      width: "100%",
      textAlign: "center",
      fontWeight: 700,
    },

    // Center every cell
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      py: 1.5,
    },

    // Padding inside every cell
    "& .MuiDataGrid-cellContent": {
      width: "100%",
      textAlign: "center",
      paddingLeft: "8px",
      paddingRight: "8px",
    },

    // Vertical borders between columns
    "& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader": {
      borderRight: "1px solid #e0e0e0",
    },

    // Alternate row color
    "& .MuiDataGrid-row:nth-of-type(even)": {
      backgroundColor: "#fafafa",
    },

    // Hover effect
    "& .MuiDataGrid-row:hover": {
      backgroundColor: "#f5f9ff",
    },
  }}

        />
      </Box>
    </Paper>
  );
}