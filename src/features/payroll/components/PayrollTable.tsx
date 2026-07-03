import { Paper, Box } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

interface Props {
  rows: any[];
  loading: boolean;
  density: any;
}

export default function PayrollTable({
  rows,
  loading,
  density,
}: Props) {

  const columns: GridColDef[] = [
    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 140,
      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) => row.employee?.employeeId,
    },
    {
      field: "name",
      headerName: "Employee",
      width: 180,
      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) => row.employee?.name,
    },
    {
      field: "department",
      headerName: "Department",
      width: 180,
      align: "center",         
      headerAlign: "center",   
      valueGetter: (_, row) => row.employee?.department?.name,
    },
    {
      field: "month",
      headerName: "Month",
      width: 140,
      align: "center",         
      headerAlign: "center",   

    },
    {
      field: "basicSalary",
      headerName: "Basic",
      width: 120,
      align: "center",         
      headerAlign: "center",   
    },
    {
      field: "bonus",
      headerName: "Bonus",
      width: 120,
      align: "center",         
      headerAlign: "center",   

    },
    {
      field: "deduction",
      headerName: "Deduction",
      width: 140,
      align: "center",         
      headerAlign: "center",   

    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      align: "center",         
      headerAlign: "center",   
    },
  ];

  return (
    <Paper
      sx={{
        width: "100%",
      }}
    >

      <Box
        sx={{
          height: 600,
          width: "100%",
        }}
      >

        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          density={density}
          getRowId={(row) => row._id}
          pageSizeOptions={[10, 20, 50]}
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