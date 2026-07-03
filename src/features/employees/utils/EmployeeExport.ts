// export const exportEmployeesCSV = (
//   employees: any[]
// ) => {

//   const headers = [
//     "Employee ID",
//     "Name",
//     "Email",
//     "Department",
//     "Role",
//     "Salary",
//   ];

//   const rows = employees.map((e)=>[
//     e.employeeId,
//     e.name,
//     e.email,
//     e.department,
//     e.role,
//     e.salary,
//   ]);

//   const csv =
//     [
//       headers,
//       ...rows,
//     ]
//       .map((r)=>r.join(","))
//       .join("\n");

//   const blob =
//     new Blob([csv]);

//   const url =
//     window.URL.createObjectURL(blob);

//   const link =
//     document.createElement("a");

//   link.href=url;

//   link.download="employees.csv";

//   link.click();
// };











// export const exportEmployeesCSV = (
//   employees: any[]
// ) => {
//   if (!employees.length) return;

//   const headers = [
//     "Employee ID",
//     "Name",
//     "Email",
//     "Mobile",
//     "Department",
//     "Designation",
//     "Role",
//     "Salary",
//     "Status",
//   ];

//   const rows = employees.map((e) => [
//     e.employeeId,
//     e.name,
//     e.email,
//     e.mobile,
//     e.department,
//     e.designation,
//     e.role,
//     e.salary,
//     e.status,
//   ]);

//   const csv = [
//     headers,
//     ...rows,
//   ]
//     .map((row) => row.join(","))
//     .join("\n");

//   const blob = new Blob([csv], {
//     type: "text/csv;charset=utf-8;",
//   });

//   const url = window.URL.createObjectURL(blob);

//   const link = document.createElement("a");

//   link.href = url;

//   link.setAttribute(
//     "download",
//     "employees.csv"
//   );

//   document.body.appendChild(link);

//   link.click();

//   document.body.removeChild(link);
// };





export const exportEmployeesCSV = (
  employees: any[]
) => {
  console.log("Employees:", employees);

  if (!employees || employees.length === 0) {
    alert("No employee data found.");
    return;
  }

 console.log("EXPORTING:", employees);

  const headers = [
    "Employee ID",
    "Name",
    "Email",
    "Mobile",
    "Department",
    "Designation",
    "Role",
    "Salary",
    "Status",
  ];

  const rows = employees.map((e) => [
    e.employeeId ?? "",
    e.name ?? "",
    e.email ?? "",
    e.mobile ?? "",
    e.department ?? "",
    e.designation ?? "",
    e.role ?? "",
    e.salary ?? "",
    e.status ?? "",
  ]);

  const csvContent = [headers, ...rows]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "employees.csv";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};