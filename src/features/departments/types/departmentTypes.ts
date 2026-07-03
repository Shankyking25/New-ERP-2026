// export interface Department {
//   _id: string;
//   name: string;
//   code: string;
//   description: string;
//   manager?: string;
//   totalEmployees?: number;
//   createdAt?: string;
// }

// export interface DepartmentRequest {
//   name: string;
//   code: string;
//   description: string;
//   manager?: string;
// }

// export interface DepartmentResponse {
//   success: boolean;
//   department: Department;
// }

// export interface DepartmentListResponse {
//   success: boolean;
//   departments: Department[];
// }


export interface Department {
  _id: string;

  name: string;

  code: string;

  head: string;

  description: string;

  employeeCount: number;

  status: "Active" | "Inactive";

  createdAt: string;

  updatedAt: string;
}

export interface DepartmentResponse {
  success: boolean;

  departments: Department[];

  total: number;

  page: number;

  limit: number;
}

export interface DepartmentQuery {
  page: number;

  limit: number;

  search?: string;

  status?: string;

  sort?: string;
}

export interface DepartmentPayload {
  name: string;

  code: string;

  head: string;

  description: string;

  status: string;
}


