import { z } from "zod";

export const payrollSchema = z.object({
  employee: z.string().min(1),
  month: z.string().min(1),

  basicSalary: z.coerce.number().min(0),
  bonus: z.coerce.number().min(0),
  deduction: z.coerce.number().min(0),

  status: z.enum(["Paid", "Pending"]),

  remarks: z.string().optional(),
});

export type PayrollSchemaType = z.infer<typeof payrollSchema>;