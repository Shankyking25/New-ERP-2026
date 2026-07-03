import {
  Paper,
  Box,
  Avatar,
  IconButton,
} from "@mui/material";

import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {

  rows: any[];

  loading: boolean;

  density:
    | "compact"
    | "standard"
    | "comfortable";

  onView: (row: any) => void;

  onEdit: (row: any) => void;

  onDelete: (row: any) => void;

}

export default function LeaveTable({

  rows,

  loading,

  density,

  onView,

  onEdit,

  onDelete,

}: Props) {

  const columns: GridColDef[] = [

    {

      field: "avatar",

      headerName: "",

      width: 70,

      sortable: false,

      renderCell: (params) => (

        <Avatar

          src={

            params.row.employee?.avatar

          }

        >

          {

            params.row.employee?.name?.charAt(0)

          }

        </Avatar>

      ),

    },

    {

      field: "employeeId",

      headerName: "Employee ID",

      width: 140,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>

        row.employee?.employeeId,

    },

    {

      field: "employee",

      headerName: "Employee",

      flex: 1,

      minWidth: 180,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>

        row.employee?.name,

    },

    {

      field: "department",

      headerName: "Department",

      width: 180,
align: "center",         
headerAlign: "center",   

      valueGetter: (_, row) =>

        row.employee?.department?.name,

    },

    {

      field: "leaveType",

      headerName: "Leave Type",

      width: 150,

      align: "center",
      headerAlign: "center",

    },

    {

      field: "fromDate",

      headerName: "From",

      width: 140,

      align: "center",         
      headerAlign: "center",   


      valueFormatter: (value) =>

        new Date(value)

          .toLocaleDateString(),

    },

    {

      field: "toDate",

      headerName: "To",

      width: 140,
align: "center",         
headerAlign: "center",   


      valueFormatter: (value) =>

        new Date(value)

          .toLocaleDateString(),

    },

    {

      field: "totalDays",

      headerName: "Days",

      width: 100,
align: "center",         
headerAlign: "center",   

    },

    {

      field: "status",

      headerName: "Status",
align: "center",         
headerAlign: "center",   

      width: 130,

      renderCell: (params) => {

        const status = params.value;

        return (

          <Box

            sx={{

              px: 1.5,

              py: .5,

              borderRadius: 1,

              color: "#fff",

              fontWeight: 600,

              bgcolor:

                status === "Approved"

                  ? "success.main"

                  : status === "Rejected"

                  ? "error.main"

                  : "warning.main",

            }}

          >

            {status}

          </Box>

        );

      },

    },

    {

      field: "actions",

      headerName: "Actions",

      width: 160,

      sortable: false,

      filterable: false,

align: "center",         
headerAlign: "center",   


      renderCell: (params) => (

        <>
{/* 
          <IconButton

            color="info"

            onClick={() =>

              onView(params.row)

            }

          >

            <VisibilityIcon />

          </IconButton> */}

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

  return (

    <Paper

      elevation={2}

      sx={{

        borderRadius: 2,

        // ✅ IMPORTANT FIX
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

          pageSizeOptions={[10,20,50]}

        
          sx={{
            border: 0,

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