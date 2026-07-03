import Pagination from "@mui/material/Pagination";

interface Props{

page:number;

count:number;

onChange:(page:number)=>void;

}

export default function AttendancePagination({

page,

count,

onChange,

}:Props){

return(

<Pagination

page={page}

count={count}

color="primary"

onChange={(_,value)=>onChange(value)}

/>

);

}