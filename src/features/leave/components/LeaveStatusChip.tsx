import { useState } from "react";

import {
  Box,
  Paper,
  Stack,
} from "@mui/material";

import LeaveToolbar from "./LeaveToolbar";
import LeaveSearch from "./LeaveSearch";
import LeaveFilters from "./LeaveFilters";
import LeaveTable from "./LeaveTable";
import LeavePagination from "./LeavePagination";
import LeaveDialog from "./LeaveDialog";
import LeaveLoading from "./LeaveLoading";
import LeaveSkeleton from "./LeaveSkeleton";
import LeaveEmpty from "./LeaveEmpty";
import DeleteDialog from "./DeleteDialog";

import AppSnackbar from "../../../components/common/AppSnackbar";

import {
  useGetLeavesQuery,
  useDeleteLeaveMutation,
} from "../api/leaveApi";

export default function Leave() {

  const [page,setPage]=useState(1);

  const [limit]=useState(10);

  const [search,setSearch]=useState("");

  const [status,setStatus]=useState("");

  const [density]=useState("standard");

  const [open,setOpen]=useState(false);

  const [selectedLeave,setSelectedLeave]=useState<any>(null);

  const [deleteDialog,setDeleteDialog]=useState(false);

  const [snackbar,setSnackbar]=useState({

    open:false,

    message:"",

    severity:"success" as
      "success"|"error",

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

  return(

    <Box
      display="flex"
      flexDirection="column"
      gap={2}
    >

      <Paper sx={{p:2}}>

        <Stack spacing={2}>

          <LeaveToolbar

            onAdd={()=>{

              setSelectedLeave(null);

              setOpen(true);

            }}

            onRefresh={refetch}

          />

          <LeaveSearch

            value={search}

            onChange={(value)=>{

              setSearch(value);

              setPage(1);

            }}

          />

          <LeaveFilters

            status={status}

            onStatusChange={(value)=>{

              setStatus(value);

              setPage(1);

            }}

          />

        </Stack>

      </Paper>

      <LeaveLoading open={isLoading}/>

      {isLoading ?

        <LeaveSkeleton/>

        :

        data?.leaves?.length===0 ?

        <LeaveEmpty/>

        :

        <Paper>

          <LeaveTable

            rows={data?.leaves??[]}

            loading={false}

            density={density}

            onView={()=>{}}

            onEdit={(row)=>{

              setSelectedLeave(row);

              setOpen(true);

            }}

            onDelete={(row)=>{

              setSelectedLeave(row);

              setDeleteDialog(true);

            }}

          />

          <LeavePagination

            page={page}

            count={Math.ceil(

              (data?.total??0)/limit

            )}

            onChange={setPage}

          />

        </Paper>

      }

      <LeaveDialog

        open={open}

        leave={selectedLeave}

        onClose={()=>{

          setSelectedLeave(null);

          setOpen(false);

        }}

      />

      <DeleteDialog

        open={deleteDialog}

        onClose={()=>{

          setDeleteDialog(false);

          setSelectedLeave(null);

        }}

        onDelete={async()=>{

          try{

            await deleteLeave(

              selectedLeave._id

            ).unwrap();

            setSnackbar({

              open:true,

              message:"Leave Deleted Successfully",

              severity:"success",

            });

            refetch();

          }

          catch{

            setSnackbar({

              open:true,

              message:"Delete Failed",

              severity:"error",

            });

          }

          finally{

            setDeleteDialog(false);

            setSelectedLeave(null);

          }

        }}

      />

      <AppSnackbar

        open={snackbar.open}

        message={snackbar.message}

        severity={snackbar.severity}

        onClose={()=>

          setSnackbar({

            ...snackbar,

            open:false,

          })

        }

      />

    </Box>

  );

}