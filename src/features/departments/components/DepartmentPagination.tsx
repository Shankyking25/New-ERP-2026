import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

interface Props{

page:number;

count:number;

onChange:(page:number)=>void;

}

export default function DepartmentPagination({

page,

count,

onChange,

}:Props){

return(


<Pagination

page={page}

count={count}

color="primary"

onChange={(_,value)=>
onChange(value)
}

/>


);

}