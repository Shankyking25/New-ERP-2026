import LoadingButton from "@mui/lab/LoadingButton";

import type {
  LoadingButtonProps,
} from "@mui/lab/LoadingButton";

export default function AppLoadingButton(
  props: LoadingButtonProps
) {
  return (
    <LoadingButton
      variant="contained"
      {...props}
    />
  );
}