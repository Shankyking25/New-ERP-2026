import { useState } from "react";

import {
  useGetLeavesQuery,
  useDeleteLeaveMutation,
} from "../api/leaveApi";

import LeaveToolbar from "../components/LeaveToolbar";
import LeaveSearch from "../components/LeaveSearch";
import LeaveFilters from "../components/LeaveFilters";
import LeavePagination from "../components/LeavePagination";
import LeaveTable from "../components/LeaveTable";
import LeaveDialog from "../components/LeaveDialog";
import LeaveLoading from "../components/LeaveLoading";
import LeaveSkeleton from "../components/LeaveSkeleton";
import LeaveEmpty from "../components/LeaveEmpty";

import DeleteDialog from "../components/DeleteDialog";
import AppSnackbar from "../../../components/common/AppSnackbar";

import { exportLeaveCSV } from "../utils/leaveExport";

export default function Leave() {

  const [page, setPage] = useState(1);

  const limit = 10;

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("");

  const [density] = useState<
    "compact" | "standard" | "comfortable"
  >("standard");

  const [open, setOpen] = useState(false);

  const [selectedLeave, setSelectedLeave] =
    useState<any>(null);

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

  } = useGetLeavesQuery({

    page,

    limit,

    search,

    status,

  });



  const [

    deleteLeave,

  ] = useDeleteLeaveMutation();

  const handleAdd = () => {

    setSelectedLeave(null);

    setOpen(true);

  };

  const handleEdit = (

    row: any

  ) => {

    setSelectedLeave(row);

    setOpen(true);

  };

  const handleDelete = (

    row: any

  ) => {

    setSelectedLeave(row);

    setDeleteDialog(true);

  };

  const confirmDelete = async () => {

    if (!selectedLeave) return;

    try {

      await deleteLeave(

        selectedLeave._id

      ).unwrap();

      setSnackbar({

        open: true,

        message:
          "Leave Deleted Successfully",

        severity: "success",

      });

    }

    catch {

      setSnackbar({

        open: true,

        message:
          "Delete Failed",

        severity: "error",

      });

    }

    setDeleteDialog(false);

  };



  const handleRefresh = async () => {

  setSearch("");

  setStatus("");

  setPage(1);

  await refetch();

};



  return (

    <>

    <LeaveToolbar

  onAdd={handleAdd}

  onRefresh={handleRefresh}

  onExport={() =>

    exportLeaveCSV(

      data?.leaves ?? []

    )

  }

/>

      <LeaveSearch

        value={search}

        onChange={setSearch}

      />

      <LeaveFilters

        status={status}

        onStatusChange={setStatus}

      />

      <LeaveLoading

        open={isLoading}

      />

      {

        isLoading ?

          <LeaveSkeleton />

          :

          data?.leaves?.length ?

            <LeaveTable

              rows={data.leaves}

              loading={false}

              density={density}

              onView={(row) =>

                console.log(row)

              }

              onEdit={handleEdit}

              onDelete={handleDelete}

            />

            :

            <LeaveEmpty />

      }

      <LeavePagination

        page={page}

        count={Math.ceil(

          (data?.total ?? 0)

          / limit

        )}

        onChange={setPage}

      />

      <LeaveDialog

        open={open}

        leave={selectedLeave}

        onClose={() => {

          setOpen(false);

          setSelectedLeave(null);

        }}

      />

      <DeleteDialog

        open={deleteDialog}

        title="Delete Leave"

        message="Are you sure you want to delete this leave?"

        onClose={() =>

          setDeleteDialog(false)

        }

        onConfirm={confirmDelete}

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

    </>

  );

}