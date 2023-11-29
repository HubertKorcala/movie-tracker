import * as z from 'zod';

export const RegisterSchema = z
  .object({
    email: z.string().email().max(60, 'Email must be less than 60 characters'),
    name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(60, 'Name must be less than 60 characters')
      .regex(/^[a-zA-Z\s]*$/, 'Name cannot have numbers or special characters'),
    password: z
      .string()
      .trim()
      .min(8, 'Password must be at least 8 characters')
      .regex(
        /^(?=.*[A-Z])(?=.*\d).*$/,
        'Password must contain at least one uppercase letter and one number'
      ),
    confirm: z.string().trim().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

export const LoginSchema = z.object({
  email: z.string().email().max(60, 'Email must be less than 60 characters'),
  password: z
    .string()
    .trim()
    .min(8, 'Password must be at least 8 characters')
    .regex(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      'Password must contain at least one uppercase letter and one number'
    ),
});
