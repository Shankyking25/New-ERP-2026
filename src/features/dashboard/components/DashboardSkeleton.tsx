import {
  Grid,
  Skeleton,
} from "@mui/material";

export default function DashboardSkeleton(){

return(

<Grid container spacing={2}>

{[1,2,3,4].map((item)=>(

<Grid key={item} size={{xs:12,md:3}}>

<Skeleton
height={120}
variant="rounded"
/>

</Grid>

))}

</Grid>

);

}