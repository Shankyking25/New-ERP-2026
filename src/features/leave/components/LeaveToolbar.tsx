import {
  Stack,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

import AppButton from "../../../components/common/AppButton";

interface Props {

  onAdd: () => void;

  onRefresh: () => void;

  onExport?: () => void;

}

export default function LeaveToolbar({

  onAdd,

  onRefresh,

  onExport,

}: Props) {

  return (

    <Stack

      direction="row"

      justifyContent="space-between"

      mb={2}

    >

      <Stack
        direction="row"
        spacing={2}
      >

        <AppButton

          startIcon={<AddIcon />}

          onClick={onAdd}

        >

          Add Leave

        </AppButton>

        <AppButton

          color="inherit"

          startIcon={<RefreshIcon />}

          onClick={onRefresh}

        >

          Refresh

        </AppButton>

      </Stack>

      <AppButton

        color="success"

        startIcon={<DownloadIcon />}

        onClick={onExport}

      >

        Export

      </AppButton>

    </Stack>

  );

}