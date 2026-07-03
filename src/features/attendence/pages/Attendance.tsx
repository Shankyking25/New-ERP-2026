import { useState } from "react";

import { Box, Paper, Stack } from "@mui/material";

import {
  useGetAttendancesQuery,
  useDeleteAttendanceMutation,
} from "../api/attendanceApi";

import type { Attendance } from "../types/attendanceTypes";

import AttendanceToolbar from "../components/AttendanceToolbar";
import AttendanceSearch from "../components/AttendanceSearch";
import AttendanceFilters from "../components/AttendanceFilters";
import AttendancePagination from "../components/AttendancePagination";
import AttendanceTable from "../components/AttendanceTable";
import AttendanceDialog from "../components/AttendanceDialog";
import AttendanceLoading from "../components/AttendanceLoading";
import AttendanceSkeleton from "../components/AttendanceSkeleton";
import AttendanceEmpty from "../components/AttendanceEmpty";
import DeleteDialog from "../components/DeleteDialog";

import AppSnackbar from "../../../components/common/AppSnackbar";

import { exportAttendanceCSV } from "../utils/attendanceExport";

export default function Attendance() {

  const [page, setPage] = useState(1);

  const [limit] = useState(10);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [density] = useState<
    "compact" | "standard" | "comfortable"
  >("standard");

  const [open, setOpen] = useState(false);

  const [selectedAttendance, setSelectedAttendance] =
    useState<unknown>(null);

  const [deleteDialog, setDeleteDialog] =
    useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as
      | "success"
      | "error",
  });

  const {
    data,
    isLoading,
    refetch,
  } = useGetAttendancesQuery({
    page,
    limit,
    search,
    status,
  });

  const [
    deleteAttendance,
  ] = useDeleteAttendanceMutation();



  const handleRefresh = async () => {

  setSearch("");

  setStatus("");

  setPage(1);

  await refetch();

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
          borderRadius: 2,
        }}
      >

        <Stack spacing={2}>

          <AttendanceToolbar
            onAdd={() => {
              setSelectedAttendance(null);
              setOpen(true);
            }}
            onRefresh={handleRefresh}
            onExport={() =>
              exportAttendanceCSV(
                data?.attendances ?? []
              )
            }
          />

          <AttendanceSearch
            value={search}
            onChange={(value) => {
              setSearch(value);
              setPage(1);
            }}
          />

          <AttendanceFilters
            status={status}
            onStatusChange={(value) => {
              setStatus(value);
              setPage(1);
            }}
          />

        </Stack>

      </Paper>

      <AttendanceLoading
        open={isLoading}
      />

      {isLoading ? (

        <AttendanceSkeleton />

      ) : data?.attendances?.length === 0 ? (

        <AttendanceEmpty />

      ) : (

        <Paper
          elevation={1}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >

          <AttendanceTable
            rows={data?.attendances ?? []}
            //loading={false}
            loading={isLoading}
            density={density}

            onView={(row) => {
              console.log(row);
            }}

            onEdit={(row) => {
              setSelectedAttendance(row);
              setOpen(true);
            }}

            onDelete={(row) => {
              setSelectedAttendance(row);
              setDeleteDialog(true);
            }}
          />

          <Box
            sx={{    
              display: "flex",
              justifyContent: "flex-end",
              p: 2,
            }}
          >

            <AttendancePagination
              page={page}
              count={Math.ceil(
                (data?.total ?? 0) / limit
              )}
              onChange={setPage}
            />

          </Box>

        </Paper>

      )}

      <AttendanceDialog
        open={open}
        attendance={selectedAttendance}
        onClose={() => {
          setSelectedAttendance(null);
          setOpen(false);
        }}
      />

      <DeleteDialog
        open={deleteDialog}
        onClose={() => {
          setDeleteDialog(false);
          setSelectedAttendance(null);
        }}
        onDelete={async () => {
          try {

            if (selectedAttendance) {

              await deleteAttendance(
                selectedAttendance._id
              ).unwrap();

            }

            setSnackbar({
              open: true,
              message:
                "Attendance Deleted Successfully",
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

            setSelectedAttendance(null);

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