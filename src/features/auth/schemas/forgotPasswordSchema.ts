import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Enter a valid email"),
});

export type ForgotPasswordSchemaType =
  z.infer<typeof forgotPasswordSchema>;