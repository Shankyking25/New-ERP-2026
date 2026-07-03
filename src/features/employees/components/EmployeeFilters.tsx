// import{

// MenuItem,

// Stack,

// }from "@mui/material";

// import AppTextField from "../../../components/common/AppTextField";

// interface Props{

// department:string;

// status:string;

// onDepartmentChange:(value:string)=>void;

// onStatusChange:(value:string)=>void;

// }

// export default function EmployeeFilters({

// department,

// status,

// onDepartmentChange,

// onStatusChange,

// }:Props){

// return(

// <Stack

// direction="row"

// spacing={2}

// >

// <AppTextField

// select

// label="Department"

// value={department}

// onChange={(e)=>

// onDepartmentChange(e.target.value)

// }

// >

// <MenuItem value="">

// All

// </MenuItem>

// <MenuItem value="HR">

// HR

// </MenuItem>

// <MenuItem value="IT">

// IT

// </MenuItem>

// <MenuItem value="Accounts">

// Accounts

// </MenuItem>

// </AppTextField>

// <AppTextField

// select

// label="Status"

// value={status}

// onChange={(e)=>

// onStatusChange(e.target.value)

// }

// >

// <MenuItem value="">

// All

// </MenuItem>

// <MenuItem value="Active">

// Active

// </MenuItem>

// <MenuItem value="Inactive">

// Inactive

// </MenuItem>

// </AppTextField>

// </Stack>

// );

// }








import {
  Grid,
  MenuItem,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

interface Props {
  department: string;
  status: string;
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

export default function EmployeeFilters({
  department,
  status,
  onDepartmentChange,
  onStatusChange,
}: Props) {
  return (
    <Grid
      container
      spacing={2}
    >
      <Grid size={{ xs: 12, md: 6 }}>
        <AppTextField
          fullWidth
          select
          label="Department"
          value={department}
          onChange={(e) =>
            onDepartmentChange(
              e.target.value
            )
          }
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="HR">
            HR
          </MenuItem>

          <MenuItem value="IT">
            IT
          </MenuItem>

          <MenuItem value="Accounts">
            Accounts
          </MenuItem>
        </AppTextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <AppTextField
          fullWidth
          select
          label="Status"
          value={status}
          onChange={(e) =>
            onStatusChange(
              e.target.value
            )
          }
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Active">
            Active
          </MenuItem>

          <MenuItem value="Inactive">
            Inactive
          </MenuItem>
        </AppTextField>
      </Grid>
    </Grid>
  );
}