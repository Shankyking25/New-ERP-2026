import type { EmployeeSchemaType } from "../schemas/employeeSchema";

export const employeeDefaultValues: EmployeeSchemaType = {
  employeeId: "",
  name: "",
  email: "",
  mobile: "",
  department: "",
  designation: "",
  role: "Employee",
  salary: 0,
  joiningDate: "",
  status: "Active",
};