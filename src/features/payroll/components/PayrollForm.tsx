// import {
//   Grid,
//   TextField,
//   MenuItem,
// } from "@mui/material";

// import type {
//   UseFormRegister,
//   FieldErrors,
// } from "react-hook-form";

// import type { PayrollSchemaType } from "../schemas/payrollSchema";

// interface Props {
//   register: UseFormRegister<PayrollSchemaType>;
//   errors: FieldErrors<PayrollSchemaType>;
// }

// export default function PayrollForm({
//   register,
//   errors,
// }: Props) {
//   return (
//     <Grid container spacing={2}>

//       <Grid item xs={12} md={6}>
//         <TextField
//           fullWidth
//           label="Employee ID"
//           {...register("employee")}
//           error={!!errors.employee}
//           helperText={errors.employee?.message}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <TextField
//           fullWidth
//           label="Month (e.g. July 2026)"
//           {...register("month")}
//           error={!!errors.month}
//           helperText={errors.month?.message}
//         />
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <TextField
//           fullWidth
//           type="number"
//           label="Basic Salary"
//           {...register("basicSalary")}
//         />
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <TextField
//           fullWidth
//           type="number"
//           label="Bonus"
//           {...register("bonus")}
//         />
//       </Grid>

//       <Grid item xs={12} md={4}>
//         <TextField
//           fullWidth
//           type="number"
//           label="Deduction"
//           {...register("deduction")}
//         />
//       </Grid>

//       <Grid item xs={12} md={6}>
//         <TextField
//           select
//           fullWidth
//           label="Status"
//           {...register("status")}
//         >
//           <MenuItem value="Paid">Paid</MenuItem>
//           <MenuItem value="Pending">Pending</MenuItem>
//         </TextField>
//       </Grid>

//       <Grid item xs={12}>
//         <TextField
//           fullWidth
//           multiline
//           rows={2}
//           label="Remarks"
//           {...register("remarks")}
//         />
//       </Grid>

//     </Grid>
//   );
// }



import {
  Grid,
  MenuItem,
} from "@mui/material";

import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
  Control,
} from "react-hook-form";

import AppTextField from "../../../components/common/AppTextField";

import {
  useGetEmployeesQuery,
} from "../../employees/api/employeeApi";

import type {
  PayrollSchemaType,
} from "../schemas/payrollSchema";

interface Props {

  register: UseFormRegister<PayrollSchemaType>;

  errors: FieldErrors<PayrollSchemaType>;

  watch: UseFormWatch<PayrollSchemaType>;

  setValue: UseFormSetValue<PayrollSchemaType>;

  control: Control<PayrollSchemaType>;

}

export default function PayrollForm({

  register,

  errors,

  watch,

}: Props) {

  const { data } =
    useGetEmployeesQuery({
      page: 1,
      limit: 500,
    });

  const basic =
    Number(watch("basicSalary")) || 0;

  const bonus =
    Number(watch("bonus")) || 0;

  const deduction =
    Number(watch("deduction")) || 0;

  const netSalary =
    basic + bonus - deduction;

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
          type="month"
          fullWidth
          label="Payroll Month"
          InputLabelProps={{
            shrink: true,
          }}
          error={!!errors.month}
          helperText={
            errors.month?.message as string
          }
          {...register("month")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>

        <AppTextField
          type="number"
          fullWidth
          label="Basic Salary"
          error={!!errors.basicSalary}
          helperText={
            errors.basicSalary?.message as string
          }
          {...register("basicSalary")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>

        <AppTextField
          type="number"
          fullWidth
          label="Bonus"
          error={!!errors.bonus}
          helperText={
            errors.bonus?.message as string
          }
          {...register("bonus")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>

        <AppTextField
          type="number"
          fullWidth
          label="Deduction"
          error={!!errors.deduction}
          helperText={
            errors.deduction?.message as string
          }
          {...register("deduction")}
        />

      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>

        <AppTextField
          fullWidth
          label="Net Salary"
          value={netSalary}
          InputProps={{
            readOnly: true,
          }}
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

          <MenuItem value="Paid">
            Paid
          </MenuItem>

        </AppTextField>

      </Grid>

      <Grid size={{ xs: 12 }}>

        <AppTextField
          fullWidth
          multiline
          rows={3}
          label="Remarks"
          {...register("remarks")}
        />

      </Grid>

    </Grid>

  );

}


