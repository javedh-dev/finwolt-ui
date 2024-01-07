import { z } from "zod";

export const registerUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(5).max(20),
  confirmPassword: z.string().min(5).max(20)
});
export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5).max(20)
});


export type RegisterUserSchema = typeof registerUserSchema;
export type LoginUserSchema = typeof loginUserSchema;