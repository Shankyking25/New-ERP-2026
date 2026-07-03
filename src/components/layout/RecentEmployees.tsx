import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const rows = [
  {
    name: "Rahul",
    department: "HR",
  },
  {
    name: "Shanky",
    department: "IT",
  },
  {
    name: "Amit",
    department: "Accounts",
  },
];

export default function RecentEmployees() {

  return (

    <Paper sx={{ p: 2 }}>

      <Typography
        variant="h6"
        mb={2}
      >
        Recent Employees
      </Typography>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>Name</TableCell>

            <TableCell>
              Department
            </TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {rows.map((row) => (

            <TableRow key={row.name}>

              <TableCell>
                {row.name}
              </TableCell>

              <TableCell>
                {row.department}
              </TableCell>

            </TableRow>

          ))}

        </TableBody>

      </Table>

    </Paper>

  );

}