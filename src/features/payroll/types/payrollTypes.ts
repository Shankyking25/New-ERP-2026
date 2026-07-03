export interface Payroll {
  _id: string;

  employee: {
    _id: string;
    employeeId: string;
    name: string;

    department: {
      _id: string;
      name: string;
      code: string;
    };

    designation: string;
    avatar: string;
  };

  month: string;

  basicSalary: number;

  bonus: number;

  deduction: number;

  netSalary: number;

  status: "Paid" | "Pending";

  remarks: string;

  createdAt: string;

  updatedAt: string;
}

export interface PayrollResponse {
  success: boolean;

  payrolls: Payroll[];

  total: number;

  page: number;

  limit: number;
}