// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";

// import AppButton from "../../../components/common/AppButton";

// import EmployeeForm from "./EmployeeForm";

// // interface Props {
// //   open: boolean;
// //   onClose: () => void;
// // }


// interface Props {

//   open: boolean;

//   onClose: () => void;

//   employee?: any;

// }


// export default function EmployeeDialog({
//   open,
//   onClose,
//   employee,
// }: Props) {
//   return (
//     <Dialog
//       open={open}
//       onClose={onClose}
//       fullWidth
//       maxWidth="md"
//     >
//       <DialogTitle>
//         Add Employee
//       </DialogTitle>

//       <DialogContent>
//         <EmployeeForm />
//       </DialogContent>

//       <DialogActions>
//         <AppButton
//           variant="outlined"
//           onClick={onClose}
//         >
//           Cancel
//         </AppButton>

//         <AppButton>
//           Save
//         </AppButton>
//       </DialogActions>
//     </Dialog>
//   );
// }



import {
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import EmployeeForm from "./EmployeeForm";

import AppLoadingButton from "../../../components/common/AppLoadingButton";

import useEmployee from "../hooks/useEmployee";

import { useEffect } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  employeeSchema,
  type EmployeeSchemaType
} from "../schemas/employeeSchema";

import { employeeDefaultValues } from "../utils/employeeDefaultValues";

import { useGetDepartmentsQuery } from "../../departments/api/departmentApi";



interface Props {
  open: boolean;
  onClose: () => void;
  employee?: any;
}

export default function EmployeeDialog({
  open,
  onClose,
  employee,
}: Props) {

  const isEdit = !!employee;

  const {
    createEmployee,
    updateEmployee,
    createLoading,
    updateLoading,
  } = useEmployee();


const { data: deptData } = useGetDepartmentsQuery({
  page: 1,
  limit: 100,
  search: "",
  status: "",
  sort: "name",
});




  const {
    register,
    handleSubmit,
    reset,
     setValue,
     watch,
    formState: { errors },
  } = useForm<EmployeeSchemaType>({
    resolver: zodResolver(employeeSchema),
    defaultValues: employeeDefaultValues,
  });

  // 🔥 AUTO FILL FORM WHEN EDIT
  useEffect(() => {
    if (employee) {
      reset(employee);
    } else {
      reset(employeeDefaultValues);
    }
  }, [employee, reset]);

  // 🔥 SUBMIT HANDLER           // EmployeeSchemaType
  const onSubmit = async (data: any) => {
    try {
  
 const formData = new FormData();

 Object.entries(data).forEach(([key, value]) => {

    if(value!==undefined && value!==null){

        formData.append(key,value as any);

    }

});

        if (isEdit) {
        await updateEmployee({
          id: employee._id,
          body: formData,
        }).unwrap();
      } else {
        await createEmployee(formData,).unwrap();
      }

      reset(employeeDefaultValues);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };










  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">

      <DialogTitle>
        {isEdit ? "Edit Employee" : "Add Employee"}
      </DialogTitle>

      <DialogContent>

        {/* FORM */}

        {/* <EmployeeForm
  register={register}
  errors={errors}
  setValue={setValue}
  watch={watch}
/> */}

   
   <EmployeeForm
  register={register}
  errors={errors}
  setValue={setValue}
  watch={watch}
  departments={deptData?.departments || []}
/>
   
   
   
   
        {/* SUBMIT BUTTON */}
        <AppLoadingButton
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit(onSubmit)}
          loading={isEdit ? updateLoading : createLoading}
        >
          {isEdit ? "Update Employee" : "Create Employee"}
        </AppLoadingButton>

      </DialogContent>

    </Dialog>
  );
}