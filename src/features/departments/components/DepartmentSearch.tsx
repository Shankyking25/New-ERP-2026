import SearchIcon from "@mui/icons-material/Search";

import InputAdornment from "@mui/material/InputAdornment";

import AppTextField from "../../../components/common/AppTextField";

interface Props{
value:string;
onChange:(value:string)=>void;
}

export default function DepartmentSearch({
value,
onChange,
}:Props){

return(

<AppTextField
size="small"
placeholder="Search Department..."
value={value}
onChange={(e)=>onChange(e.target.value)}
InputProps={{
startAdornment:(
<InputAdornment position="start">
<SearchIcon/>
</InputAdornment>
),
}}
/>

);

}