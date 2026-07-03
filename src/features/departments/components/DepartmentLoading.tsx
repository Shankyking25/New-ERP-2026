import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface Props{
open:boolean;
}

export default function DepartmentLoading({
open,
}:Props){

return(

<Backdrop
open={open}
sx={{
zIndex:(theme)=>theme.zIndex.drawer+10,
}}
>

<CircularProgress color="inherit"/>

</Backdrop>

);

}