import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportEmployeesPDF = (
  employees: any[]
) => {
  const doc = new jsPDF();

  doc.text(
    "Employee Report",
    14,
    10
  );

  const tableData = employees.map((e) => [
    e.employeeId,
    e.name,
    e.email,
    e.department,
    e.role,
    e.salary,
    e.status,
  ]);

  autoTable(doc, {
    head: [
      [
        "ID",
        "Name",
        "Email",
        "Department",
        "Role",
        "Salary",
        "Status",
      ],
    ],
    body: tableData,
    startY: 20,
  });

  doc.save("employees.pdf");
};