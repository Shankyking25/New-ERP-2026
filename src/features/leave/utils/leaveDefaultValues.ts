import type { LeaveSchemaType } from "../schemas/leaveSchema";

export const leaveDefaultValues: LeaveSchemaType = {

  employee: "",

  leaveType: "",

  fromDate: "",

  toDate: "",

  status: "Pending",

  reason: "",

  remarks: "",

};