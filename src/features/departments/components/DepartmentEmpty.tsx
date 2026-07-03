import {
Box,
Typography,
} from "@mui/material";

export default function DepartmentEmpty(){

return(

<Box
py={10}
textAlign="center"
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