import AppTextField from "../../../components/common/AppTextField";

interface Props{

value:string;

onChange:(value:string)=>void;

}

export default function AttendanceSearch({

value,

onChange,

}:Props){

return(

<AppTextField

fullWidth

label="Search Employee"

value={value}

onChange={(e)=>onChange(e.target.value)}

/>

);

}