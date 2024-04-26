import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    re_password: z.string().min(8),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {message: "Password must contain at least 8 character(s)"}),
});
