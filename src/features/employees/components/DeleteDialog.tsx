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
        Delete Employee
      </DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete
          this employee?
        </Typography>
      </DialogContent>

      <DialogActions>
        <AppButton
          variant="outlined"
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