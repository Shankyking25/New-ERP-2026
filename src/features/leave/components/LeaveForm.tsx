import {
  Grid,
  MenuItem,
} from "@mui/material";

import type {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

import AppTextField from "../../../components/common/AppTextField";

import type {
  LeaveSchemaType
} from "../schemas/leaveSchema";

import {
  useGetEmployeesQuery,
} from "../../employees/api/employeeApi";

interface Props {

  register: UseFormRegister<LeaveSchemaType>;

  errors: FieldErrors<LeaveSchemaType>;

}

export default function LeaveForm({

  register,

  errors,

}: Props) {

  const { data } =
    useGetEmployeesQuery({
      page: 1,
      limit: 500,
    });

  return (

    <Grid
      container
      spacing={2}
      mt={1}
    >

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          select
          fullWidth
          label="Employee"
          defaultValue=""
          error={!!errors.employee}
          helperText={
            errors.employee?.message as string
          }
          {...register("employee")}
        >

          <MenuItem value="">
            Select Employee
          </MenuItem>

          {data?.employees?.map(
            (emp: any) => (

              <MenuItem
                key={emp._id}
                value={emp._id}
              >

                {emp.employeeId} - {emp.name}

              </MenuItem>

            )
          )}

        </AppTextField>

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          select
          fullWidth
          label="Leave Type"
          defaultValue=""
          error={!!errors.leaveType}
          helperText={
            errors.leaveType?.message as string
          }
          {...register("leaveType")}
        >

          <MenuItem value="Casual">
            Casual
          </MenuItem>

          <MenuItem value="Sick">
            Sick
          </MenuItem>

          <MenuItem value="Paid">
            Paid
          </MenuItem>

          <MenuItem value="Unpaid">
            Unpaid
          </MenuItem>

          <MenuItem value="Maternity">
            Maternity
          </MenuItem>

          <MenuItem value="Paternity">
            Paternity
          </MenuItem>

        </AppTextField>

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          type="date"
          fullWidth
          label="From Date"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.fromDate}
          helperText={
            errors.fromDate?.message as string
          }
          {...register("fromDate")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          type="date"
          fullWidth
          label="To Date"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.toDate}
          helperText={
            errors.toDate?.message as string
          }
          {...register("toDate")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          type="number"
          fullWidth
          label="Total Days"
          error={!!errors.totalDays}
          helperText={
            errors.totalDays?.message as string
          }
          {...register("totalDays")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          select
          fullWidth
          label="Status"
          defaultValue="Pending"
          {...register("status")}
        >

          <MenuItem value="Pending">
            Pending
          </MenuItem>

          <MenuItem value="Approved">
            Approved
          </MenuItem>

          <MenuItem value="Rejected">
            Rejected
          </MenuItem>

        </AppTextField>

      </Grid>

      <Grid size={{ xs: 12 }}>

        <AppTextField
          fullWidth
          multiline
          rows={3}
          label="Reason"
          {...register("reason")}
        />

      </Grid>

      <Grid size={{ xs: 12 }}>

        <AppTextField
          fullWidth
          multiline
          rows={2}
          label="Remarks"
          {...register("remarks")}
        />

      </Grid>

    </Grid>

  );

}