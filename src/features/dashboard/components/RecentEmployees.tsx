import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

interface Props{
employees:any[];
}

export default function RecentEmployees({
employees,
}:Props){

return(

<Card>

<CardContent>

<List>

{employees.map((emp)=>(

<ListItem key={emp._id}>

<ListItemText

primary={emp.name}

secondary={emp.department}

/>

</ListItem>

))}

</List>

</CardContent>

</Card>

);

}