import Chip from "@mui/material/Chip";

interface Props{
status:string;
}

export default function DepartmentStatusChip({
status,
}:Props){

return(

<Chip

label={status}

color={
status==="Active"
?"success"
:"default"
}

size="small"

/>

);

}