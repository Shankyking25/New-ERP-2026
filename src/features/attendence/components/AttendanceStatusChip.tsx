import Chip from "@mui/material/Chip";

interface Props{
status:string;
}

export default function AttendanceStatusChip({
status,
}:Props){

const color=()=>{

switch(status){

case "Present":
return "success";

case "Absent":
return "error";

case "Leave":
return "warning";

case "Half Day":
return "info";

case "Work From Home":
return "secondary";

default:
return "default";

}

};

return(

<Chip
label={status}
color={color() as any}
size="small"
/>

);

}