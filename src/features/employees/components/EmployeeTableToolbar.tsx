import {
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

interface Props {
  density: string;
  setDensity: (value: string) => void;
}

export default function EmployeeTableToolbar({
  density,
  setDensity,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      mb={2}
    >
      <FormControl size="small">
        <InputLabel>Density</InputLabel>

        <Select
          value={density}
          label="Density"
          onChange={(e) =>
            setDensity(e.target.value)
          }
        >
          <MenuItem value="compact">
            Compact
          </MenuItem>

          <MenuItem value="standard">
            Standard
          </MenuItem>

          <MenuItem value="comfortable">
            Comfortable
          </MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}