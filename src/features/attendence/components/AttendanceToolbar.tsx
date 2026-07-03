import Stack from "@mui/material/Stack";

import AppButton from "../../../components/common/AppButton";

interface Props{

onAdd:()=>void;

onRefresh:()=>void;

onExport:()=>void;

}

export default function AttendanceToolbar({

onAdd,

onRefresh,
onExport,

}:Props){

return(
  <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={2}
      >
<AppButton

onClick={onRefresh}

>

Refresh

</AppButton>

<AppButton

onClick={onAdd}

>

Add Attendance

</AppButton>


<AppButton
onClick={onExport}
>
Export CSV
</AppButton>


</Stack>

);

}