import { z } from "zod";

const strongPasswordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

const strongPasswordErrorMessage =
  "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long";

export const signupSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" }),

    re_password: z.string().min(8, {
      message: "Confirm password must contain at least 8 character(s)",
    }),
  })
  .refine((data) => data.password === data.re_password, {
    message: "Passwords do not match",
    path: ["re_password"],
  })
  .refine((data) => strongPasswordRegex.test(data.password), {
    message: strongPasswordErrorMessage,
    path: ["password"],
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});
