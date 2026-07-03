import MenuItem from "@mui/material/MenuItem";

import AppTextField from "../../../components/common/AppTextField";

interface Props{

status:string;

onStatusChange:(value:string)=>void;

}

export default function AttendanceFilters({

status,

onStatusChange,

}:Props){

return(

<AppTextField

select

label="Status"

value={status}

onChange={(e)=>

onStatusChange(e.target.value)

}

>

<MenuItem value="">

All

</MenuItem>

<MenuItem value="Present">

Present

</MenuItem>

<MenuItem value="Absent">

Absent

</MenuItem>

<MenuItem value="Leave">

Leave

</MenuItem>

<MenuItem value="Half Day">

Half Day

</MenuItem>

<MenuItem value="Work From Home">

Work From Home

</MenuItem>

</AppTextField>

);

}