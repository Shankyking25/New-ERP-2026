// import { z } from "zod";

// export const departmentSchema = z.object({
//   name: z.string().min(2),
//   code: z.string().min(2),
//   description: z.string().optional(),
//   manager: z.string().optional(),
// });

// export type DepartmentSchemaType =
//   z.infer<typeof departmentSchema>;



import { z } from "zod";

export const departmentSchema = z.object({
  name: z
    .string()
    .min(2, "Department Name is required"),

  code: z
    .string()
    .min(2, "Department Code is required"),

  head: z.string().optional(),

  description: z.string().optional(),

  status: z.enum(["Active", "Inactive"]),
});

export type DepartmentSchemaType =
  z.infer<typeof departmentSchema>;