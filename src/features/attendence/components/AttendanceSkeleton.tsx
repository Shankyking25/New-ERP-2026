import { Skeleton, Stack } from "@mui/material";

export default function AttendanceSkeleton() {
  return (
    <Stack spacing={2}>
      {Array.from({ length: 8 }).map((_, i) => (
        <Skeleton
          key={i}
          variant="rectangular"
          height={60}
        />
      ))}
    </Stack>
  );
}