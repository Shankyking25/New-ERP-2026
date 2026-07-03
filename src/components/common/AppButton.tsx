// import { Button } from "@mui/material";

// interface AppButtonProps {
//   children: React.ReactNode;
//   onClick?: () => void;
//   fullWidth?: boolean;
//   type?: "button" | "submit" | "reset";
// }

// export default function AppButton({
//   children,
//   onClick,
//   fullWidth = false,
//   type = "button",
// }: AppButtonProps) {
//   return (
//     <Button
//       variant="contained"
//       fullWidth={fullWidth}
//       onClick={onClick}
//       type={type}
//     >
//       {children}
//     </Button>
//   );
// }

import Button from "@mui/material/Button";
import type { ButtonProps } from "@mui/material/Button";

type AppButtonProps = ButtonProps;

export default function AppButton(props: AppButtonProps) {
  return (
    <Button
      variant="contained"
      {...props}
    />
  );
}