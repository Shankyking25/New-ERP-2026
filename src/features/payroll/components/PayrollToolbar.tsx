import {
  Stack,
} from "@mui/material";

import AppButton from "../../../components/common/AppButton";

interface Props {

  onAdd: () => void;

  onRefresh: () => void;

}

export default function PayrollToolbar({

  onAdd,

  onRefresh,

}: Props) {

  return (

    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
    >

      <AppButton
        onClick={onAdd}
      >
        Add Payroll
      </AppButton>

      <AppButton
        color="inherit"
        onClick={onRefresh}
      >
        Refresh
      </AppButton>

    </Stack>

  );

}