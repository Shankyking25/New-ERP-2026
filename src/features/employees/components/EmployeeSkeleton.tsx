import {
  Card,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";

export default function EmployeeSkeleton() {
  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          {[1,2,3,4,5,6].map((item)=>(
            <Skeleton
              key={item}
              variant="rounded"
              height={55}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}