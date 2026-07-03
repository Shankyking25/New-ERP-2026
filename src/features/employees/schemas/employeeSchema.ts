// import { z } from "zod";

// export const employeeSchema = z.object({

//   firstName: z.string().min(2),

//   lastName: z.string().min(2),

//   email: z.string().email(),

//   mobile: z
//     .string()
//     .regex(/^[6-9]\d{9}$/),

//   department: z.string().min(2),

//   designation: z.string().min(2),

//   role: z.string().min(2),

//   salary: z.coerce.number().positive(),

//   joiningDate: z.string(),

//   gender: z.string(),

//   status: z.string(),

//   address: z.string().optional(),

//   dob: z.string().optional(),

// });

// export type EmployeeSchemaType =
//   z.infer<typeof employeeSchema>;




import { z } from "zod";

export const employeeSchema = z.object({
  employeeId: z.string().min(3),

  name: z.string().min(3),

  email: z.string().email(),

  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/),

  department: z.string().min(2),

  designation: z.string().min(2),

  role: z.string().min(2),

  salary: z.coerce.number().min(1000),

  joiningDate: z.string(),

  status: z.enum([
    "Active",
    "Inactive",
  ]),
  avatar: z.any().optional(),
});

export type EmployeeSchemaType =
  z.infer<typeof employeeSchema>;