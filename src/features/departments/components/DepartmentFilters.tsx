import {
MenuItem,
Stack,
} from "@mui/material";

import AppTextField from "../../../components/common/AppTextField";

interface Props{

status:string;

onStatusChange:(value:string)=>void;

}

export default function DepartmentFilters({

status,

onStatusChange,

}:Props){

return(

<Stack
direction="row"
spacing={2}
>

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

<MenuItem value="Active">
Active
</MenuItem>

<MenuItem value="Inactive">
Inactive
</MenuItem>

</AppTextField>

</Stack>

);

}