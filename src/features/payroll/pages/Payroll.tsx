// import { useState } from "react";

// import {
//   useGetPayrollsQuery,
// } from "../api/payrollApi";

// import PayrollTable from "../components/PayrollTable";
// import PayrollDialog from "../components/PayrollDialog";

// import AppButton from "../../../components/common/AppButton";

// export default function Payroll() {

//   const [page, setPage] = useState(1);
//   const [limit] = useState(10);
//   const [open, setOpen] = useState(false);

//   const [selectedPayroll, setSelectedPayroll] =
//     useState<any>(null);

//   const {
//     data,
//     isLoading,
//     refetch,
//   } = useGetPayrollsQuery({
//     page,
//     limit,
//   });

//   return (
//     <>

//       {/* HEADER */}
//       <div style={{
//         display: "flex",
//         justifyContent: "space-between",
//         marginBottom: 16,
//       }}>

//         <AppButton
//           onClick={() => {
//             setSelectedPayroll(null);
//             setOpen(true);
//           }}
//         >
//           Add Payroll
//         </AppButton>

//         <AppButton
//           color="inherit"
//           onClick={() => refetch()}
//         >
//           Refresh
//         </AppButton>

//       </div>

//       {/* TABLE */}
//       <PayrollTable
//         rows={data?.payrolls ?? []}
//         loading={isLoading}
//         density="standard"
//       />

//       {/* PAGINATION */}
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           marginTop: 16,
//           gap: 10,
//         }}
//       >

//         <AppButton
//           disabled={page === 1}
//           onClick={() =>
//             setPage((p) => p - 1)
//           }
//         >
//           Prev
//         </AppButton>

//         <span>
//           Page {page}
//         </span>

//         <AppButton
//           disabled={
//             page >=
//             Math.ceil(
//               (data?.total || 0) / limit
//             )
//           }
//           onClick={() =>
//             setPage((p) => p + 1)
//           }
//         >
//           Next
//         </AppButton>

//       </div>

//       {/* DIALOG */}
//       <PayrollDialog
//         open={open}
//         payroll={selectedPayroll}
//         onClose={() => setOpen(false)}
//       />

//     </>
//   );
// }




import { useState } from "react";

import {
  Box,
  Paper,
} from "@mui/material";

import {
  useGetPayrollsQuery,
} from "../api/payrollApi";

import PayrollToolbar from "../components/PayrollToolbar";
import PayrollTable from "../components/PayrollTable";
import PayrollDialog from "../components/PayrollDialog";

import AppButton from "../../../components/common/AppButton";

export default function Payroll() {

  const [page, setPage] = useState(1);

  const limit = 10;

  const [open, setOpen] = useState(false);

  const [selectedPayroll, setSelectedPayroll] =
    useState<any>(null);

  const {
    data,
    isLoading,
    refetch,
  } = useGetPayrollsQuery(
    {
      page,
      limit,
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
      refetchOnReconnect: true,
    }
  );

  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
      }}
    >

      <Paper
        elevation={1}
        sx={{
          p: 2,
          borderRadius: 2,
        }}
      >

        <PayrollToolbar

          onAdd={() => {

            setSelectedPayroll(null);

            setOpen(true);

          }}

          onRefresh={async () => {

            await refetch();

          }}

        />

      </Paper>

      <Paper
        elevation={1}
        sx={{
          borderRadius: 2,
          overflow: "hidden",
        }}
      >

        <PayrollTable

          rows={data?.payrolls ?? []}

          loading={isLoading}

          density="standard"

        />

        <Box
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >

          <AppButton

            disabled={page === 1}

            onClick={() =>
              setPage((p) => p - 1)
            }

          >

            Prev

          </AppButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              px: 2,
            }}
          >

            Page {page}

          </Box>

          <AppButton

            disabled={
              page >=
              Math.ceil(
                (data?.total ?? 0) / limit
              )
            }

            onClick={() =>
              setPage((p) => p + 1)
            }

          >

            Next

          </AppButton>

        </Box>

      </Paper>

      <PayrollDialog

        open={open}

        payroll={selectedPayroll}

        onClose={() => {

          setOpen(false);

          setSelectedPayroll(null);

         // refetch();

        }}

        onSuccess={() => refetch()}

      />

    </Box>

  );

}