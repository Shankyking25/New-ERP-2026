import {
  DataGrid,
  type GridColDef,
} from "@mui/x-data-grid";

interface Props {
  rows: any[];
  columns: GridColDef[];
  loading?: boolean;
}

export default function AppTable({
  rows,
  columns,
  loading,
}: Props) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      getRowId={(row) => row._id}
      pageSizeOptions={[
        10,
        25,
        50,
        100,
      ]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
    />
  );
}