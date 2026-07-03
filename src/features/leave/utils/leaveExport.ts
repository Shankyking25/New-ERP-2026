export const exportLeaveCSV = (

  rows: any[]

) => {

  if (!rows.length) return;

  const csv = [

    [

      "Employee ID",

      "Employee",

      "Department",

      "Leave Type",

      "From",

      "To",

      "Days",

      "Status",

      "Reason",

    ],

    ...rows.map((row) => [

      row.employee?.employeeId,

      row.employee?.name,

      row.employee?.department?.name,

      row.leaveType,

      row.fromDate?.substring(0, 10),

      row.toDate?.substring(0, 10),

      row.totalDays,

      row.status,

      row.reason,

    ]),

  ]

    .map((e) => e.join(","))

    .join("\n");

  const blob = new Blob(

    [csv],

    {

      type:

        "text/csv;charset=utf-8;",

    }

  );

  const url =

    window.URL.createObjectURL(blob);

  const link =

    document.createElement("a");

  link.href = url;

  link.download =

    "leave.csv";

  link.click();

};