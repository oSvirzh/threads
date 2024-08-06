import type { SubmitHandler } from 'react-hook-form';
import * as z from 'zod';

export const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});
export type FormType = z.infer<typeof schema>;
export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
};
