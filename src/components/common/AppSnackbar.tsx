// import {
//   Snackbar,
//   Alert,
// } from "@mui/material";

// interface Props {
//   open: boolean;
//   message: string;
//   severity:
//     | "success"
//     | "error"
//     | "warning"
//     | "info";
//   onClose: () => void;
// }

// export default function AppSnackbar({
//   open,
//   message,
//   severity,
//   onClose,
// }: Props) {
//   return (
//     <Snackbar
//       open={open}
//       autoHideDuration={3000}
//       onClose={onClose}
//       anchorOrigin={{
//         vertical: "top",
//         horizontal: "right",
//       }}
//     >
//       <Alert
//         severity={severity}
//         onClose={onClose}
//       >
//         {message}
//       </Alert>
//     </Snackbar>
//   );
// }

import {
  Alert,
  Snackbar,
} from "@mui/material";

interface Props {
  open: boolean;
  message: string;
  severity: "success" | "error";
  onClose: () => void;
}

export default function AppSnackbar({
  open,
  message,
  severity,
  onClose,
}: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        severity={severity}
        onClose={onClose}
        variant="filled"
      >
        {message}
      </Alert>
    </Snackbar>
  );
}