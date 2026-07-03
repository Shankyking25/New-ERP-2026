import {
  Pagination,
  Stack,
} from "@mui/material";

interface Props {

  page: number;

  count: number;

  onChange: (
    page: number
  ) => void;

}

export default function LeavePagination({

  page,

  count,

  onChange,

}: Props) {

  if (count <= 1) return null;

  return (

    <Stack

      mt={2}

      alignItems="center"

    >

      <Pagination

        page={page}

        count={count}

        color="primary"

        onChange={(_, value) =>
          onChange(value)
        }

      />

    </Stack>

  );

}