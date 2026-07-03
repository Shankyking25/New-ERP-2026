// export interface Employee {
//   _id: string;

//   employeeId: string;

//   firstName: string;

//   lastName: string;

//   email: string;

//   mobile: string;

//   department: string;

//   designation: string;

//   role: string;

//   salary: number;

//   joiningDate: string;

//   status: "Active" | "Inactive";

//   gender: "Male" | "Female" | "Other";

//   avatar?: string;

//   address?: string;

//   dob?: string;
// }

// export interface EmployeeResponse {
//   success: boolean;
//   message: string;
//   employees: Employee[];
// }

// export interface EmployeeSingleResponse {
//   success: boolean;
//   employee: Employee;
// }

// export interface CreateEmployeeRequest {
//   firstName: string;
//   lastName: string;
//   email: string;
//   mobile: string;
//   department: string;
//   designation: string;
//   role: string;
//   salary: number;
//   joiningDate: string;
//   status: string;
//   gender: string;
//   address?: string;
//   dob?: string;
// }



export interface Employee {
  _id: string;

  employeeId: string;

  name: string;

  email: string;

  mobile: string;

  department: string;

  designation: string;

  role: string;

  salary: number;

  joiningDate: string;

  status: "Active" | "Inactive";

  avatar?: string;
}

export interface EmployeeRequest {
  employeeId: string;

  name: string;

  email: string;

  mobile: string;

  department: string;

  designation: string;

  role: string;

  salary: number;

  joiningDate: string;

  status: "Active" | "Inactive";
}

export interface EmployeeResponse {
  success: boolean;

  message: string;

  employee: Employee;
}

export interface EmployeeListResponse {
  success: boolean;

  employees: Employee[];

  total: number;

  page: number;

  limit: number;
}