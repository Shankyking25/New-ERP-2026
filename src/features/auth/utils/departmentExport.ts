import { saveAs } from "file-saver";

export const exportDepartmentsCSV = (
  rows: any[]
) => {

  if (!rows.length) return;

  const headers = [
    "Department Code",
    "Department Name",
    "Department Head",
    "Employees",
    "Status",
  ];

  const csvRows = rows.map((row) => [

    row.code,

    row.name,

    row.head,

    row.employeeCount,

    row.status,

  ]);

  const csv = [
    headers,
    ...csvRows,
  ]
    .map((e) => e.join(","))
    .join("\n");

  const blob = new Blob(
    [csv],
    {
      type: "text/csv;charset=utf-8",
    }
  );

  saveAs(blob, "Departments.csv");
};