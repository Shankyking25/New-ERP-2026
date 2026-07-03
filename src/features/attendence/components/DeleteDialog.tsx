import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";

import AppButton from "../../../components/common/AppButton";

interface Props {
  open: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteDialog({
  open,
  onClose,
  onDelete,
}: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        Delete Attendance
      </DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure?
        </Typography>
      </DialogContent>

      <DialogActions>
        <AppButton
          color="inherit"
          onClick={onClose}
        >
          Cancel
        </AppButton>

        <AppButton
          color="error"
          onClick={onDelete}
        >
          Delete
        </AppButton>
      </DialogActions>
    </Dialog>
  );
}