import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

import AppTextField from "../../../components/common/AppTextField";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function LeaveSearch({
  value,
  onChange,
}: Props) {
  return (
    <AppTextField
      fullWidth
      size="small"
      placeholder="Search Employee..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}