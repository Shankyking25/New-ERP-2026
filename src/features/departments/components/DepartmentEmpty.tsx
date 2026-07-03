import {
Box,
Typography,
} from "@mui/material";

export default function DepartmentEmpty(){

return(

<Box

sx={{ textAlign: "center",py: 10 }}
>

<Typography
variant="h6"
>
No Departments Found
</Typography>

<Typography>

Click Add Department to create one.

</Typography>

</Box>

);

}