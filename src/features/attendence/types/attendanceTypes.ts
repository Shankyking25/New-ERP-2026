// export interface Attendance {
//   _id: string;

//   employee: {
//     _id: string;
//     employeeId: string;
//     name: string;

//     department: {
//       _id: string;
//       name: string;
//       code: string;
//       status: string;
//     };

//     designation: string;
//     avatar: string;
//   };

//   date: string;

//   checkIn: string;

//   checkOut: string;

//   workingHours: number;

//   overtimeHours: number;

//   status:
//     | "Present"
//     | "Absent"
//     | "Half Day"
//     | "Leave"
//     | "Work From Home";

//   remarks: string;

//   createdAt: string;

//   updatedAt: string;
// }

// export interface AttendanceResponse {
//   success: boolean;

//   attendances: Attendance[];

//   total: number;

//   page: number;

//   limit: number;
// }






export interface Attendance {
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
  date: string;
  checkIn: string;
  checkOut: string;
  workingHours: number;
  overtimeHours: number;
  status:
    | "Present"
    | "Absent"
    | "Half Day"
    | "Leave"
    | "Work From Home";
  remarks: string;
  createdAt: string;
  updatedAt: string;
}

export interface AttendanceListResponse {
  success: boolean;
  attendances: Attendance[];
  total: number;
  page: number;
  limit: number;
}

export interface AttendanceResponse {
  success: boolean;
  attendance: Attendance;
}

export interface AttendanceRequest {
  employee: string;
  date: string;
  checkIn: string;
  checkOut: string;
  workingHours: number;
  overtimeHours: number;
  status:
    | "Present"
    | "Absent"
    | "Half Day"
    | "Leave"
    | "Work From Home";
  remarks: string;
}