import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";

import AppButton from "../../../components/common/AppButton";

interface Props {
  onAdd: () => void;
  onRefresh: () => void;
  onExport: () => void;
}

export default function DepartmentToolbar({
  onAdd,
  onRefresh,
  onExport,
}: Props) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      gap={2}
      mb={3}
    >
      <Typography
        variant="h5"
        fontWeight={700}
      >
        Departments
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <AppButton
          color="inherit"
          startIcon={<RefreshIcon />}
          onClick={onRefresh}
        >
          Refresh
        </AppButton>

        <AppButton
          color="success"
          startIcon={<DownloadIcon />}
          onClick={onExport}
        >
          Export
        </AppButton>

        <AppButton
          startIcon={<AddIcon />}
          onClick={onAdd}
        >
          Add Department
        </AppButton>
      </Stack>
    </Box>
  );
}