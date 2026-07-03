import { z } from "zod";

export const attendanceSchema = z.object({

  employee: z
    .string()
    .min(1, "Employee is required"),

  date: z
    .string()
    .min(1, "Date is required"),

  checkIn: z
    .string()
    .optional(),

  checkOut: z
    .string()
    .optional(),

  workingHours: z.coerce
    .number()
    .min(0),

  overtimeHours: z.coerce
    .number()
    .min(0),

  status: z.enum([
    "Present",
    "Absent",
    "Half Day",
    "Leave",
    "Work From Home",
  ]),

  remarks: z
    .string()
    .optional(),

});

export type AttendanceSchemaType =
  z.infer<typeof attendanceSchema>;