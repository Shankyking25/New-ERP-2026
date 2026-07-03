// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";

// interface Props {
//   value: string;
//   onChange: (value: string) => void;
// }

// export default function EmployeeSort({
//   value,
//   onChange,
// }: Props) {
//   return (
//     <FormControl sx={{ minWidth: 220 }}>
//       <InputLabel>
//         Sort By
//       </InputLabel>

//       <Select
//         value={value}
//         label="Sort By"
//         onChange={(e) =>
//           onChange(e.target.value)
//         }
//       >
//         <MenuItem value="-createdAt">
//           Latest
//         </MenuItem>

//         <MenuItem value="name">
//           Name A-Z
//         </MenuItem>

//         <MenuItem value="-name">
//           Name Z-A
//         </MenuItem>

//         <MenuItem value="salary">
//           Salary Low-High
//         </MenuItem>

//         <MenuItem value="-salary">
//           Salary High-Low
//         </MenuItem>

//         <MenuItem value="department">
//           Department
//         </MenuItem>
//       </Select>
//     </FormControl>
//   );
// }



import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function EmployeeSort({
  value,
  onChange,
}: Props) {
  return (
    <FormControl
      fullWidth
      size="small"
    >
      <InputLabel>
        Sort By
      </InputLabel>

      <Select
        value={value}
        label="Sort By"
        onChange={(e) =>
          onChange(e.target.value)
        }
      >
        <MenuItem value="-createdAt">
          Latest
        </MenuItem>

        <MenuItem value="name">
          Name A-Z
        </MenuItem>

        <MenuItem value="-name">
          Name Z-A
        </MenuItem>

        <MenuItem value="salary">
          Salary Low-High
        </MenuItem>

        <MenuItem value="-salary">
          Salary High-Low
        </MenuItem>

        <MenuItem value="department">
          Department
        </MenuItem>
      </Select>
    </FormControl>
  );
}