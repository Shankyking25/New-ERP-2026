import type { AttendanceSchemaType } from "../schemas/attendanceSchema";

export const attendanceDefaultValues: AttendanceSchemaType = {

  employee: "",

  date: "",

  checkIn: "",

  checkOut: "",

  workingHours: 0,

  overtimeHours: 0,

  status: "Present",

  remarks: "",

};