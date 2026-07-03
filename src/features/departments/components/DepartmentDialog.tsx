import { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  MenuItem,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  departmentSchema,
  type DepartmentSchemaType,
} from "../schemas/departmentSchema";

import {
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
} from "../api/departmentApi";

import AppTextField from "../../../components/common/AppTextField";
import AppButton from "../../../components/common/AppButton";

import { departmentDefaultValues } from "../utils/departmentDefaultValues";


interface Props {
  open: boolean;

  department?: any;

  onClose: () => void;
}

export default function DepartmentDialog({
  open,
  department,
  onClose,
}: Props) {
  const [addDepartment, { isLoading: adding }] =
    useAddDepartmentMutation();

  const [updateDepartment, { isLoading: updating }] =
    useUpdateDepartmentMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<DepartmentSchemaType>({
    resolver: zodResolver(departmentSchema),
    defaultValues: departmentDefaultValues,
  });

  useEffect(() => {
    if (department) {
      reset({
        name: department.name,
        code: department.code,
        head: department.head,
        description: department.description,
        status: department.status,
      });
    } else {
     reset(departmentDefaultValues);
    }
  }, [department, reset]);



  
  const onSubmit = async (
    data: DepartmentSchemaType
  ) => {
    try {
      if (department) {
        await updateDepartment({
          id: department._id,
          body: data,
        }).unwrap();
      } else {
        await addDepartment(data).unwrap();
      }

      //onClose();
    reset(departmentDefaultValues);
     onClose();  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        {department
          ? "Update Department"
          : "Add Department"}
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>

          <Stack spacing={2} mt={1}>

            <AppTextField
              label="Department Name"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
            />

            <AppTextField
              label="Department Code"
              {...register("code")}
              error={!!errors.code}
              helperText={errors.code?.message}
            />

            <AppTextField
              label="Department Head"
              {...register("head")}
            />

            <AppTextField
              label="Description"
              multiline
              rows={3}
              {...register("description")}
            />

<AppTextField
  select
  label="Status"
  defaultValue="Active"
  {...register("status")}
  error={!!errors.status}
  helperText={errors.status?.message}
>
  <MenuItem value="Active">
    Active
  </MenuItem>

  <MenuItem value="Inactive">
    Inactive
  </MenuItem>
</AppTextField>
          </Stack>

        </DialogContent>

        <DialogActions>


<AppButton
  color="inherit"
  onClick={() => {
    reset(departmentDefaultValues);
    onClose();
  }}
>
  Cancel
</AppButton>

          <AppButton
            type="submit"
            loading={adding || updating}
          >
            {department
              ? "Update"
              : "Save"}
          </AppButton>

        </DialogActions>
      </form>
    </Dialog>
  );
}