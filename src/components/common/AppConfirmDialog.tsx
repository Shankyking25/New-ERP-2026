import AppDialog from "./AppDialog";
import AppButton from "./AppButton";
import { Typography } from "@mui/material";

interface Props {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
}

export default function AppConfirmDialog({
  open,
  title,
 message,
  onClose,
  onConfirm,
  loading,
}: Props) {
  return (
    <AppDialog
      open={open}
      title={title}
      onClose={onClose}
      actions={
        <>
          <AppButton
            color="inherit"
            onClick={onClose}
          >
            Cancel
          </AppButton>

          <AppButton
            color="error"
            onClick={onConfirm}
            loading={loading}
          >
            Delete
          </AppButton>
        </>
      }
    >
      <Typography>
        {message}
      </Typography>
    </AppDialog>
  );
}