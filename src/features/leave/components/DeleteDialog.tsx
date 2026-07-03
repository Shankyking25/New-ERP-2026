import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import AppButton from "../../../components/common/AppButton";

interface Props {

  open: boolean;

  title?: string;

  message?: string;

  onClose: () => void;

  onConfirm: () => void;

  loading?: boolean;

}

export default function DeleteDialog({

  open,

  title = "Delete",

  message = "Are you sure you want to delete this record?",

  onClose,

  onConfirm,

  loading = false,

}: Props) {

  return (

    <Dialog

      open={open}

      onClose={onClose}

      maxWidth="xs"

      fullWidth

    >

      <DialogTitle>

        {title}

      </DialogTitle>

      <DialogContent>

        <DialogContentText>

          {message}

        </DialogContentText>

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

          loading={loading}

          onClick={onConfirm}

        >

          Delete

        </AppButton>

      </DialogActions>

    </Dialog>

  );

}