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

export default function DepartmentSort({
  value,
  onChange,
}: Props) {
  return (
    <FormControl sx={{ minWidth: 220 }}>
      <InputLabel>Sort By</InputLabel>

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
          Department Name
        </MenuItem>

        <MenuItem value="-employeeCount">
          Employee Count
        </MenuItem>
      </Select>
    </FormControl>
  );
}