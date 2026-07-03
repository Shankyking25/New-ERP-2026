import {
  Paper,
  Box,
  IconButton,
} from "@mui/material";

import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import DepartmentStatusChip from "./DepartmentStatusChip";

interface Props {
  rows: any[];

  loading: boolean;

  density:
    | "compact"
    | "standard"
    | "comfortable";

  onEdit: (row: any) => void;

  onDelete: (row: any) => void;

  onView: (row: any) => void;
}

export default function DepartmentTable({
  rows,
  loading,
  density,
  onEdit,
  onDelete,
  onView,
}: Props) {

  const columns: GridColDef[] = [

    {
      field: "code",
      headerName: "Department Code",
      width: 180,

      align: "center",         
      headerAlign: "center",   

    },

    {
      field: "name",
      headerName: "Department Name",
      flex: 1,
      minWidth: 220,

      align: "center",         
      headerAlign: "center",   

    },

    {
      field: "head",
      headerName: "Department Head",
      width: 200,
      
      align: "center",         
      headerAlign: "center",   

    },

    {
      field: "employeeCount",
      headerName: "Employees",
      width: 140,
      align: "center",
      headerAlign: "center",
    },

    {
      field: "status",
      headerName: "Status",
      width: 140,

      align: "center",         
      headerAlign: "center",   

      renderCell: (params) => (
        <DepartmentStatusChip
          status={params.value}
        />
      ),
    },

    {
      field: "createdAt",
      headerName: "Created",

      width: 180,

      align: "center",         
      headerAlign: "center",   

      valueFormatter: (value) =>
        new Date(value).toLocaleDateString(),
    },

    {
      field: "actions",

      headerName: "Actions",

      width: 170,

      sortable: false,

      filterable: false,

      align: "center",         
      headerAlign: "center",   


      renderCell: (params) => (
        <>

          {/* <IconButton
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
       // overflow: "hidden",
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