// import { Stack, Avatar } from "@mui/material";

// import AppTextField from "../../../components/common/AppTextField";

// interface Props {
//   register: any;
//   errors: any;
//   setValue?: any;
//   watch?: any;
// }

// export default function EmployeeForm({
//   register,
//   errors,
//   setValue,
//   watch,
// }: Props) {
//   return (
//     <Stack spacing={2} mt={1}>

//       {/* AVATAR UPLOAD */}
//       <Stack direction="row" spacing={2} alignItems="center">

//         <Avatar
//           sx={{ width: 64, height: 64 }}
//           src={watch?.("avatar") || ""}
//         />

//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => {
//             const file = e.target.files?.[0];
//             if (file) {
//               setValue?.("avatar", file);
//             }
//           }}
//         />

//       </Stack>

//       <AppTextField
//         label="Employee ID"
//         {...register("employeeId")}
//         error={!!errors.employeeId}
//         helperText={errors.employeeId?.message}
//       />

//       <AppTextField
//         label="Name"
//         {...register("name")}
//         error={!!errors.name}
//         helperText={errors.name?.message}
//       />

//       <AppTextField
//         label="Email"
//         {...register("email")}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//       />

//       <AppTextField
//         label="Mobile"
//         {...register("mobile")}
//         error={!!errors.mobile}
//         helperText={errors.mobile?.message}
//       />

//       <AppTextField
//         label="Department"
//         {...register("department")}
//       />

//       <AppTextField
//         label="Designation"
//         {...register("designation")}
//       />

//       <AppTextField
//         label="Role"
//         {...register("role")}
//       />

//       <AppTextField
//         label="Salary"
//         type="number"
//         {...register("salary")}
//       />

//       <AppTextField
//         label="Joining Date"
//         type="date"
//         InputLabelProps={{ shrink: true }}
//         {...register("joiningDate")}
//       />

//     </Stack>
//   );
// }














// import { useMemo } from "react";

// import {
//   Stack,
//   Avatar,
//   Typography,
//   Button,
// } from "@mui/material";

// import AppTextField from "../../../components/common/AppTextField";

// interface Props {
//   register: any;
//   errors: any;
//   setValue?: any;
//   watch?: any;
// }

// export default function EmployeeForm({
//   register,
//   errors,
//   setValue,
//   watch,
// }: Props) {
//   const avatarValue = watch?.("avatar");

//   const preview = useMemo(() => {
//     if (!avatarValue) return "";

//     if (avatarValue instanceof File) {
//       return URL.createObjectURL(avatarValue);
//     }

//     return avatarValue;
//   }, [avatarValue]);

//   return (
//     <Stack spacing={2} mt={1}>
//       {/* Avatar Upload */}
//       <Stack
//         direction="row"
//         spacing={3}
//         alignItems="center"
//       >
//         <Avatar
//           src={preview}
//           sx={{
//             width: 80,
//             height: 80,
//           }}
//         />

//         <Stack spacing={1}>
//           <Typography variant="body2">
//             Employee Photo
//           </Typography>

//           <Button
//             variant="outlined"
//             component="label"
//           >
//             Upload Image

//             <input
//               hidden
//               type="file"
//               accept="image/*"
//               onChange={(e) => {
//                 const file = e.target.files?.[0];

//                 if (file) {
//                   setValue?.("avatar", file, {
//                     shouldValidate: true,
//                     shouldDirty: true,
//                   });
//                 }
//               }}
//             />
//           </Button>
//         </Stack>
//       </Stack>

//       <AppTextField
//         label="Employee ID"
//         {...register("employeeId")}
//         error={!!errors.employeeId}
//         helperText={errors.employeeId?.message}
//       />

//       <AppTextField
//         label="Name"
//         {...register("name")}
//         error={!!errors.name}
//         helperText={errors.name?.message}
//       />

//       <AppTextField
//         label="Email"
//         {...register("email")}
//         error={!!errors.email}
//         helperText={errors.email?.message}
//       />

//       <AppTextField
//         label="Mobile"
//         {...register("mobile")}
//         error={!!errors.mobile}
//         helperText={errors.mobile?.message}
//       />

//       <AppTextField
//         label="Department"
//         {...register("department")}
//         error={!!errors.department}
//         helperText={errors.department?.message}
//       />

//       <AppTextField
//         label="Designation"
//         {...register("designation")}
//         error={!!errors.designation}
//         helperText={errors.designation?.message}
//       />

//       <AppTextField
//         label="Role"
//         {...register("role")}
//         error={!!errors.role}
//         helperText={errors.role?.message}
//       />

//       <AppTextField
//         label="Salary"
//         type="number"
//         {...register("salary")}
//         error={!!errors.salary}
//         helperText={errors.salary?.message}
//       />

//       <AppTextField
//         label="Joining Date"
//         type="date"
//         InputLabelProps={{
//           shrink: true,
//         }}
//         {...register("joiningDate")}
//         error={!!errors.joiningDate}
//         helperText={errors.joiningDate?.message}
//       />
//     </Stack>
//   );
// }





import { useMemo } from "react";

import {
  Stack,
  Avatar,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

import { useGetDepartmentsQuery } from "../../departments/api/departmentApi";

interface Props {
  register: any;
  errors: any;
  setValue?: any;
  watch?: any;
}

export default function EmployeeForm({
  register,
  errors,
  setValue,
  watch,
}: Props) {

  // ✅ FIXED: ONLY ONE SOURCE OF DATA
  const { data } = useGetDepartmentsQuery({});
const departments =
  data?.departments ||
  data?.department ||
  data?.data?.departments ||
  [];
  const avatarValue = watch?.("avatar");
  

   console.log("=========",data)

  const preview = useMemo(() => {
    if (!avatarValue) return "";

    if (avatarValue instanceof File) {
      return URL.createObjectURL(avatarValue);
    }

    return avatarValue;
  }, [avatarValue]);

  return (
    <Stack spacing={2} mt={1}>

      {/* Avatar Upload */}
      <Stack direction="row" spacing={3} alignItems="center">
        <Avatar src={preview} sx={{ width: 80, height: 80 }} />

        <Stack spacing={1}>
          <Typography variant="body2">
            Employee Photo
          </Typography>

          <Button variant="outlined" component="label">
            Upload Image

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (file) {
                  setValue?.("avatar", file, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }
              }}
            />
          </Button>
        </Stack>
      </Stack>

      {/* Employee Fields */}
      <AppTextField
        label="Employee ID"
        {...register("employeeId")}
        error={!!errors.employeeId}
        helperText={errors.employeeId?.message}
      />

      <AppTextField
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <AppTextField
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <AppTextField
        label="Mobile"
        {...register("mobile")}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
      />

      {/* ✅ FIXED: Department Dropdown */}
      <AppTextField
        select
        label="Department"
        //{...register("department")}
        
        value={watch?.("department") || ""}
onChange={(e) =>
  setValue?.("department", e.target.value, {
    shouldValidate: true,
  })
}

        error={!!errors.department}
        helperText={errors.department?.message}
      >
        <MenuItem value="">
          Select Department
        </MenuItem>

        {departments.map((dept: any) => (
          <MenuItem
  key={dept._id}
  value={dept._id.toString()}   // 🔥 FORCE STRING
>
  {dept.name}
</MenuItem>
        ))}
      </AppTextField>

      <AppTextField
        label="Designation"
        {...register("designation")}
        error={!!errors.designation}
        helperText={errors.designation?.message}
      />

      <AppTextField
        label="Role"
        {...register("role")}
        error={!!errors.role}
        helperText={errors.role?.message}
      />

      <AppTextField
        label="Salary"
        type="number"
        {...register("salary")}
        error={!!errors.salary}
        helperText={errors.salary?.message}
      />

      <AppTextField
        label="Joining Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        {...register("joiningDate")}
        error={!!errors.joiningDate}
        helperText={errors.joiningDate?.message}
      />

    </Stack>
  );
}