{/*

import {

Paper,

Box,

} from "@mui/material";

import {

DataGrid,

GridColDef,

} from "@mui/x-data-grid";

import AttendanceStatusChip from "./AttendanceStatusChip";

interface Props{

rows:any[];

loading:boolean;

density:any;

}

export default function AttendanceTable({

rows,

loading,

density,

}:Props){

const columns:GridColDef[]=[

{

field:"employeeId",

headerName:"Employee ID",

width:140,

valueGetter:(_,row)=>

row.employee?.employeeId,

},

{

field:"name",

headerName:"Employee",

flex:1,

valueGetter:(_,row)=>

row.employee?.name,

},

{

field:"department",

headerName:"Department",

width:180,

valueGetter:(_,row)=>

row.employee?.department?.name,

},

{

field:"designation",

headerName:"Designation",

width:180,

valueGetter:(_,row)=>

row.employee?.designation,

},

{

field:"date",

headerName:"Date",

width:150,

valueFormatter:(value)=>

new Date(value).toLocaleDateString(),

},

{

field:"checkIn",

headerName:"Check In",

width:120,

},

{

field:"checkOut",

headerName:"Check Out",

width:120,

},

{

field:"workingHours",

headerName:"Hours",

width:100,

},

{

field:"status",

headerName:"Status",

width:140,

renderCell:(params)=>

<AttendanceStatusChip

status={params.value}

/>

},

];

return(

<Paper>

<Box>

<DataGrid

rows={rows}

columns={columns}

loading={loading}

density={density}

getRowId={(row)=>row._id}

pageSizeOptions={[10,20,50]}

sx={{

height:650,

minWidth:1200,

}}

>

</DataGrid>

</Box>

</Paper>

);

}

*/}




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

import AttendanceStatusChip from "./AttendanceStatusChip";

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

export default function AttendanceTable({

  rows,

  loading,

  density,

  onView,

  onEdit,

  onDelete,

}: Props) {

  const columns: GridColDef[] = [

    {
      field: "employeeId",
      headerName: "Employee ID",
      width: 140,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>
        row.employee?.employeeId || "",
    },

    {
      field: "name",
      headerName: "Employee",
      flex: 1,
      minWidth: 200,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>
        row.employee?.name || "",
    },

    {
      field: "department",
      headerName: "Department",
      width: 180,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>
        row.employee?.department?.name || "",
    },

    {
      field: "designation",
      headerName: "Designation",
      width: 180,

      align: "center",         
      headerAlign: "center",   

      valueGetter: (_, row) =>
        row.employee?.designation || "",
    },

    {
      field: "date",
      headerName: "Date",
      width: 140,

      align: "center",         
      headerAlign: "center",   

      valueFormatter: (value) =>
        new Date(value).toLocaleDateString(),
    },

    {
      field: "checkIn",
      headerName: "Check In",
      width: 120,

      align: "center",         
      headerAlign: "center",   

    },

    {
      field: "checkOut",
      headerName: "Check Out",
      width: 120,
    },

    {
      field: "workingHours",
      headerName: "Hours",
      width: 100,

      align: "center",         
      headerAlign: "center",   

    },

    {
      field: "overtimeHours",
      headerName: "Overtime",
      width: 110,

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
        <AttendanceStatusChip
          status={params.value}
        />
      ),
    },

    {
      field: "remarks",
      headerName: "Remarks",
      flex: 1,
      minWidth: 180,
      
      align: "center",         
      headerAlign: "center",   

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
       
        //overflow: "hidden",
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