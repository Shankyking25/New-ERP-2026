import { useState } from "react";

import EmployeeToolbar from "../components/EmployeeToolbar";
import EmployeeDialog from "../components/EmployeeDialog";
import DeleteDialog from "../components/DeleteDialog";
import EmployeeTable from "../components/EmployeeTable";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeFilters from "../components/EmployeeFilters";
import EmployeePagination from "../components/EmployeePagination";
import EmployeeSkeleton from "../components/EmployeeSkeleton";
import EmployeeEmpty from "../components/EmployeeEmpty";

import AppSnackbar from "../../../components/common/AppSnackbar";

import {
  useGetEmployeesQuery,
  useDeleteEmployeeMutation,
} from "../api/employeeApi";

import { exportEmployeesCSV } from "../utils/EmployeeExport";
import { exportEmployeesPDF } from "../utils/employeeExportPdf";
import EmployeeSort from "../components/EmployeeSort";

import EmployeeTableToolbar from "../components/EmployeeTableToolbar";
import EmployeeLoading from "../components/EmployeeLoading";

import { Box, Stack, Paper } from "@mui/material";



export default function Employees() {
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");

  
const [sort, setSort] = useState("-createdAt");


  const {
    data,
    isLoading,
    refetch,
  } = useGetEmployeesQuery({
    page,
    limit,
    search,
    department,
    status,
    sort,
  });

  const [deleteEmployee] =
    useDeleteEmployeeMutation();

  const [openDialog, setOpenDialog] =
    useState(false);

  const [deleteDialog, setDeleteDialog] =
    useState(false);

  const [selectedEmployee, setSelectedEmployee] =
    useState<any>(null);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });


const [density, setDensity,]=useState("standard");


// const formattedRows =
//   data?.employees?.map((emp: any) => ({
//     ...emp,

//     // 🔥 FIX: convert object → string
//     department:
//       emp.department?.name ||
//       emp.department ||
//       "",
//   })) ?? [];

const formattedRows = data?.employees ?? [];



  const handleRefresh = async () => {

  setSearch("");

  setStatus("");

  setDepartment("")
 
setSort("-createdAt");
  setPage(1);


};




return (
  <Box
    sx={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    <Paper
      elevation={1}
      sx={{
        p: 2,
        width: "100%",
        borderRadius: 2,
      }}
    >
      <Stack spacing={2}>

        <EmployeeToolbar
          onAdd={() => {
            setSelectedEmployee(null);
            setOpenDialog(true);
          }}
          onRefresh={handleRefresh}
          onExport={() =>
            exportEmployeesCSV(data?.employees ?? [])
          }
          onExportPDF={() =>
            exportEmployeesPDF(data?.employees ?? [])
          }
        />

        <EmployeeSearch
          value={search}
          onChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
        />

        <EmployeeSort
          value={sort}
          onChange={(value) => {
            setSort(value);
            setPage(1);
          }}
        />

        <EmployeeFilters
          department={department}
          status={status}
          onDepartmentChange={(value) => {
            setDepartment(value);
            setPage(1);
          }}
          onStatusChange={(value) => {
            setStatus(value);
            setPage(1);
          }}
        />

        <EmployeeTableToolbar
          density={density}
          setDensity={setDensity}
        />

      </Stack>
    </Paper>

    <EmployeeLoading open={isLoading} />

    {isLoading ? (
      <EmployeeSkeleton />
    ) : data?.employees?.length === 0 ? (
      <EmployeeEmpty />
    ) : (
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <EmployeeTable
         // rows={data?.employees ?? []}
           rows={formattedRows}
          loading={false}
          density={density}
          onEdit={(row) => {
            setSelectedEmployee(row);
            setOpenDialog(true);
          }}
          onDelete={(row) => {
            setSelectedEmployee(row);
            setDeleteDialog(true);
          }}
        />

        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <EmployeePagination
            page={page}
            count={Math.ceil(
              (data?.total ?? 0) / limit
            )}
            onChange={setPage}
          />
        </Box>
      </Paper>
    )}

    <EmployeeDialog
      open={openDialog}
      employee={selectedEmployee}
      onClose={() => {
        setSelectedEmployee(null);
        setOpenDialog(false);
      }}
    />

    <DeleteDialog
      open={deleteDialog}
      onClose={() => {
        setDeleteDialog(false);
        setSelectedEmployee(null);
      }}
      onDelete={async () => {
        try {
          await deleteEmployee(selectedEmployee._id).unwrap();

          setSnackbar({
            open: true,
            message: "Employee Deleted Successfully",
            severity: "success",
          });

          refetch();
        } catch {
          setSnackbar({
            open: true,
            message: "Delete Failed",
            severity: "error",
          });
        } finally {
          setDeleteDialog(false);
          setSelectedEmployee(null);
        }
      }}
    />

    <AppSnackbar
      open={snackbar.open}
      message={snackbar.message}
      severity={snackbar.severity}
      onClose={() =>
        setSnackbar({
          ...snackbar,
          open: false,
        })
      }
    />
  </Box>
);


}