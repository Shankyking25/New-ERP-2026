export interface Leave {

  _id: string;

  employee: {

    _id: string;

    employeeId: string;

    name: string;

    department: {

      _id: string;

      name: string;

      code: string;

      status: string;

    };

    designation: string;

    avatar: string;

  };

  leaveType:
    | "Casual"
    | "Sick"
    | "Earned"
    | "Maternity"
    | "Paternity"
    | "Unpaid";

  fromDate: string;

  toDate: string;

  reason: string;

  status:
    | "Pending"
    | "Approved"
    | "Rejected";

  approvedBy: string;

  remarks: string;

  createdAt: string;

  updatedAt: string;

}

export interface LeaveListResponse {

  success: boolean;

  leaves: Leave[];

  total: number;

  page: number;

  limit: number;

}

export interface LeaveRequest {

  employee: string;

  leaveType: string;

  fromDate: string;

  toDate: string;

  reason?: string;

  status?: string;

  approvedBy?: string;

  remarks?: string;

}

export interface LeaveResponse {

  success: boolean;

  leave: Leave;

}