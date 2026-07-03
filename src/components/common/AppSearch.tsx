import SearchIcon from "@mui/icons-material/Search";
import {
  InputAdornment,
} from "@mui/material";

import AppTextField from "./AppTextField";

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder?: string;
}

export default function AppSearch({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  return (
    <AppTextField
      fullWidth
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}