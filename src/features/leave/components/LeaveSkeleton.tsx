import {
  Skeleton,
  Stack,
} from "@mui/material";

export default function LeaveSkeleton() {
  return (
    <Stack spacing={2}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Skeleton
          key={item}
          variant="rounded"
          height={60}
        />
      ))}
    </Stack>
  );
}