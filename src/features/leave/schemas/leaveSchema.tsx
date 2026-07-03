import { z } from "zod";

export const leaveSchema = z.object({

  employee: z
    .string()
    .min(1, "Employee is required"),

  leaveType: z
    .string()
    .min(1, "Leave Type is required"),

  fromDate: z
    .string()
    .min(1, "From Date is required"),

  toDate: z
    .string()
    .min(1, "To Date is required"),

  status: z.enum([
    "Pending",
    "Approved",
    "Rejected",
  ]),

  reason: z
    .string()
    .min(1, "Reason is required"),

  remarks: z
    .string()
    .optional(),

});

export type LeaveSchemaType =
  z.infer<typeof leaveSchema>;