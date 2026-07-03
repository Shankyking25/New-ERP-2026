// import {
//   Box,
//   Typography,
//   Stack,
// } from "@mui/material";

// import AddIcon from "@mui/icons-material/Add";
// import RefreshIcon from "@mui/icons-material/Refresh";
// import DownloadIcon from "@mui/icons-material/Download";

// import AppButton from "../../../components/common/AppButton";

// import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";


// interface Props {
//   onAdd: () => void;
//   onRefresh: () => void;
//   onExport: () => void;
//   onExportPDF: () => void;
// }

// export default function EmployeeToolbar({
//   onAdd,
//   onRefresh,
//   onExport,
//   onExportPDF,
// }: Props) {
//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       mb={3}
//       flexWrap="wrap"
//       gap={2}
//     >
//       <Typography
//         variant="h5"
//         fontWeight={700}
//       >
//         Employees
//       </Typography>

//       <Stack
//         direction="row"
//         spacing={2}
//       >
//         <AppButton
//           color="inherit"
//           startIcon={<RefreshIcon />}
//           onClick={onRefresh}
//         >
//           Refresh
//         </AppButton>

//         <AppButton
//           color="success"
//           startIcon={<DownloadIcon />}
//           onClick={onExport}
//         >
//           Export CSV
//         </AppButton>


// <AppButton
//   variant="outlined"
//   startIcon={<PictureAsPdfIcon />}
//   onClick={onExportPDF}
// >
//   Export PDF
// </AppButton>

//         <AppButton
//           startIcon={<AddIcon />}
//           onClick={onAdd}
//         >
//           Add Employee
//         </AppButton>
//       </Stack>
//     </Box>
//   );
// }









import {
  Box,
  Typography,
  Stack,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import AppButton from "../../../components/common/AppButton";

interface Props {
  onAdd: () => void;
  onRefresh: () => void;
  onExport: () => void;
  onExportPDF: () => void;
}

export default function EmployeeToolbar({
  onAdd,
  onRefresh,
  onExport,
  onExportPDF,
}: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
      >
        Employees
      </Typography>

      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
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
          Export CSV
        </AppButton>

        <AppButton
          variant="outlined"
          startIcon={<PictureAsPdfIcon />}
          onClick={onExportPDF}
        >
          Export PDF
        </AppButton>

        <AppButton
          startIcon={<AddIcon />}
          onClick={onAdd}
        >
          Add Employee
        </AppButton>
      </Stack>
    </Box>
  );
}