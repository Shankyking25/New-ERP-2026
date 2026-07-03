import { useState } from "react";
import { Box, Paper, Stack } from "@mui/material";

import DepartmentToolbar from "../components/DepartmentToolbar";
import DepartmentSearch from "../components/DepartmentSearch";
import DepartmentFilters from "../components/DepartmentFilters";
import DepartmentTable from "../components/DepartmentTable";
import DepartmentPagination from "../components/DepartmentPagination";
import DepartmentDialog from "../components/DepartmentDialog";
import DepartmentDeleteDialog from "../components/DepartmentDeleteDialog.tsx";
import DepartmentSkeleton from "../components/DepartmentSkeleton";
import DepartmentEmpty from "../components/DepartmentEmpty";

import {
  useGetDepartmentsQuery,
  useDeleteDepartmentMutation,
} from "../api/departmentApi";

export default function Departments() {

  const [page,setPage]=useState(1);

  const limit=10;

  const [search,setSearch]=useState("");

  const [status,setStatus]=useState("");

  const [sort]=useState("-createdAt");

  const [density]=useState<
  "compact"|
  "standard"|
  "comfortable"
  >("standard");

  const {

    data,

    isLoading,

    refetch,

  }=useGetDepartmentsQuery({

    page,

    limit,

    search,

    status,

    sort,

  });

  const [deleteDepartment]=
  useDeleteDepartmentMutation();

  const [openDialog,setOpenDialog]=
  useState(false);

  const [deleteDialog,setDeleteDialog]=
  useState(false);

  const [selectedDepartment,setSelectedDepartment]=
  useState<any>(null);


  
  const handleRefresh = async () => {

  setSearch("");

  setStatus("");

  setPage(1);

  await refetch();

};



  return(

<>


<DepartmentToolbar

onAdd={()=>{
setSelectedDepartment(null);
setOpenDialog(true);
}}

onRefresh={handleRefresh}

onExport={()=>{}}

/>

<DepartmentSearch

value={search}

onChange={(value)=>{
setSearch(value);
setPage(1);
}}

/>

<DepartmentFilters

status={status}

onStatusChange={(value)=>{
setStatus(value);
setPage(1);
}}

/>

{

isLoading?

<DepartmentSkeleton/>

:

data?.departments.length===0?

<DepartmentEmpty/>

:

<>

<DepartmentTable

rows={data?.departments??[]}

loading={false}

density={density}

onView={(row)=>{
console.log(row);
}}

onEdit={(row)=>{
setSelectedDepartment(row);
setOpenDialog(true);
}}

onDelete={(row)=>{
setSelectedDepartment(row);
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

<DepartmentPagination

page={page}

count={Math.ceil((data?.total??0)/limit)}

onChange={setPage}

/>

</Box>
</>

}

<DepartmentDialog

open={openDialog}

department={selectedDepartment}

onClose={()=>{

setOpenDialog(false);

setSelectedDepartment(null);

}}

/>

<DepartmentDeleteDialog

open={deleteDialog}

onClose={()=>{

setDeleteDialog(false);
setOpenDialog(false);
setSelectedDepartment(null);

}}

onDelete={async()=>{

await deleteDepartment(
selectedDepartment._id
).unwrap();

setDeleteDialog(false);

setSelectedDepartment(null);

refetch();

}}

/>

</>

);

}