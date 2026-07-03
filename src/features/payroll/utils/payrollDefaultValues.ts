import {
  type PayrollSchemaType,
} from "../schemas/payrollSchema";
/* =========================
   PAYROLL DEFAULT VALUES
========================= */

export const payrollDefaultValues: PayrollSchemaType = {
  employee: "",
  month: "",
  basicSalary: 0,
  bonus: 0,
  deduction: 0,
  status: "Pending",
  remarks: "",
};