import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/)
      .regex(/[a-z]/)
      .regex(/[0-9]/)
      .regex(/[@$!%*?&]/),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    }
  );

export type ResetPasswordSchemaType =
  z.infer<typeof resetPasswordSchema>;