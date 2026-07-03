// import { TextField } from "@mui/material";

// interface AppTextFieldProps {
//   label: string;
//   type?: string;
//   fullWidth?: boolean;
//   value?: string;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function AppTextField({
//   label,
//   type = "text",
//   fullWidth = true,
//   value,
//   onChange,
// }: AppTextFieldProps) {
//   return (
//     <TextField
//       label={label}
//       type={type}
//       fullWidth={fullWidth}
//       value={value}
//       onChange={onChange}
//       margin="normal"
//     />
//   );
// }





// // import TextField, { TextFieldProps } from "@mui/material/TextField";

// // type AppTextFieldProps = TextFieldProps;

// // export default function AppTextField(props: AppTextFieldProps) {
// //     return (
// //         <TextField
// //             fullWidth
// //             margin="normal"
// //             {...props}
// //         />
// //     );
// // }




import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";
import { forwardRef } from "react";

type AppTextFieldProps = TextFieldProps;

const AppTextField = forwardRef<HTMLInputElement, AppTextFieldProps>(
  (props, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        fullWidth
        margin="normal"
      />
    );
  }
);

AppTextField.displayName = "AppTextField";

export default AppTextField;