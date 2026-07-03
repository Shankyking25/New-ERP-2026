import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

interface Props {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  actions?: React.ReactNode;
  maxWidth?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl";
}

export default function AppDialog({
  open,
  title,
  children,
  onClose,
  actions,
  maxWidth = "md",
}: Props) {
  const theme = useTheme();

  const fullScreen = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  return (
    <Dialog
      open={open}
      fullWidth
      fullScreen={fullScreen}
      maxWidth={maxWidth}
      onClose={onClose}
    >
      <DialogTitle>

        {title}

        <IconButton
          sx={{
            position: "absolute",
            right: 10,
            top: 10,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>

      </DialogTitle>

      <DialogContent>

        {children}

      </DialogContent>

      {actions && (

        <DialogActions>

          {actions}

        </DialogActions>

      )}
    </Dialog>
  );
}