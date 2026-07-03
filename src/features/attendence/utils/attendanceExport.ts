import { saveAs } from "file-saver";

export function exportAttendanceCSV(
  rows: any[]
) {
  const csv = rows.map((row) => ({
    Employee: row.employee?.name,
    Department:
      row.employee?.department?.name,
    Date: row.date,
    Status: row.status,
    CheckIn: row.checkIn,
    CheckOut: row.checkOut,
    Hours: row.workingHours,
  }));

  const header = Object.keys(csv[0]).join(",");

  const body = csv
    .map((r) => Object.values(r).join(","))
    .join("\n");

  const blob = new Blob(
    [header + "\n" + body],
    {
      type: "text/csv",
    }
  );

  saveAs(blob, "attendance.csv");
}