{/*
import { MenuItem, Stack } from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

import { useGetEmployeesQuery } from "../../employees/api/employeeApi";

interface Props {

  register: any;

  errors: any;

}

export default function AttendanceForm({

  register,

  errors,

}: Props) {

   const { data } = useGetEmployeesQuery({
    page: 1,
    limit: 1000,
  });

  const employees =
    data?.employees ?? [];

  return (

    <Stack spacing={2} mt={1}>

      <AppTextField
        select
        label="Employee"
        {...register("employee")}
        error={!!errors.employee}
        helperText={errors.employee?.message}
      >

        <MenuItem value="">
          Select Employee
        </MenuItem>

        {employees.map((emp: any) => (

          <MenuItem
            key={emp._id}
            value={emp._id}
          >

            {emp.employeeId} - {emp.name}

          </MenuItem>

        ))}

      </AppTextField>

      <AppTextField
        type="date"
        label="Attendance Date"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("date")}
        error={!!errors.date}
        helperText={errors.date?.message}
      />

      <AppTextField
        type="time"
        label="Check In"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("checkIn")}
      />

      <AppTextField
        type="time"
        label="Check Out"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("checkOut")}
      />

      <AppTextField
        type="number"
        label="Working Hours"
        {...register("workingHours")}
      />

      <AppTextField
        type="number"
        label="Overtime Hours"
        {...register("overtimeHours")}
      />

      <AppTextField
        select
        label="Status"
        {...register("status")}
      >

        <MenuItem value="Present">
          Present
        </MenuItem>

        <MenuItem value="Absent">
          Absent
        </MenuItem>

        <MenuItem value="Half Day">
          Half Day
        </MenuItem>

        <MenuItem value="Leave">
          Leave
        </MenuItem>

        <MenuItem value="Work From Home">
          Work From Home
        </MenuItem>

      </AppTextField>

      <AppTextField
        label="Remarks"
        multiline
        rows={3}
        {...register("remarks")}
      />

    </Stack>

  );

}

*/}



import {
  Stack,
  MenuItem,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

import { useGetEmployeesQuery } from "../../employees/api/employeeApi";

interface Props {
  register: any;
  errors: any;
}

export default function AttendanceForm({
  register,
  errors,
}: Props) {

  const { data } =
    useGetEmployeesQuery({
      page: 1,
      limit: 1000,
    });

  const employees =
    data?.employees || [];

  return (

    <Stack spacing={2} mt={1}>

      <AppTextField
        select
        label="Employee"
        defaultValue=""
        {...register("employee")}
        error={!!errors.employee}
        helperText={errors.employee?.message}
      >

        <MenuItem value="">
          Select Employee
        </MenuItem>

        {employees.map((emp: any) => (

          <MenuItem
            key={emp._id}
            value={emp._id}
          >
            {emp.employeeId} - {emp.name}
          </MenuItem>

        ))}

      </AppTextField>

      <AppTextField
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("date")}
        error={!!errors.date}
        helperText={errors.date?.message}
      />

      <AppTextField
        label="Check In"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("checkIn")}
      />

      <AppTextField
        label="Check Out"
        type="time"
        InputLabelProps={{
          shrink: true,
        }}
        {...register("checkOut")}
      />

      <AppTextField
        label="Working Hours"
        type="number"
        {...register("workingHours")}
      />

      <AppTextField
        label="Overtime Hours"
        type="number"
        {...register("overtimeHours")}
      />

      <AppTextField
        select
        label="Status"
        defaultValue="Present"
        {...register("status")}
      >

        <MenuItem value="Present">
          Present
        </MenuItem>

        <MenuItem value="Absent">
          Absent
        </MenuItem>

        <MenuItem value="Half Day">
          Half Day
        </MenuItem>

        <MenuItem value="Leave">
          Leave
        </MenuItem>

        <MenuItem value="Work From Home">
          Work From Home
        </MenuItem>

      </AppTextField>

      <AppTextField
        label="Remarks"
        multiline
        rows={3}
        {...register("remarks")}
      />

    </Stack>

  );

}
