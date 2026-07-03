import {
  Stack,
  MenuItem,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

interface Props {

  status: string;

  onStatusChange: (
    value: string
  ) => void;

}

export default function LeaveFilters({

  status,

  onStatusChange,

}: Props) {

  return (

    <Stack
      direction="row"
      spacing={2}
      mb={2}
    >

      <AppTextField

        select

        label="Status"

        value={status}

        onChange={(e) =>
          onStatusChange(
            e.target.value
          )
        }

        sx={{
          width: 220,
        }}

      >

        <MenuItem value="">
          All
        </MenuItem>

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

    </Stack>

  );

}