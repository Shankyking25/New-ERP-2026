import { z } from "zod";

export const verifyOtpSchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits"),
});

export type VerifyOtpSchemaType =
  z.infer<typeof verifyOtpSchema>;