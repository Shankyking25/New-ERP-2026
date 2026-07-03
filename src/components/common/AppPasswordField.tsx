// import { TextField } from "@mui/material";

// interface AppPasswordFieldProps {
//   label: string;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function AppPasswordField({
//   label,
//   value,
//   onChange,
// }: AppPasswordFieldProps) {
//   return (
//     <TextField
//       label={label}
//       type="password"
//       fullWidth
//       value={value}
//       onChange={onChange}
//       margin="normal"
//     />
//   );
// }


import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import { forwardRef } from "react";

type AppPasswordFieldProps = TextFieldProps;

const AppPasswordField = forwardRef<
  HTMLInputElement,
  AppPasswordFieldProps
>((props, ref) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      type="password"
      fullWidth
      margin="normal"
    />
  );
});

AppPasswordField.displayName = "AppPasswordField";

export default AppPasswordField;