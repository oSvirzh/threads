import { z } from 'zod';

export const schema = z.object({
  avatar: z.string().url().nonempty(),
  username: z
    .string()
    .regex(/^[a-zA-Z0-9]+$/)
    .nonempty(),
  email: z.string().email().nonempty(),
  homePage: z.string().url().optional(),
  text: z.string().nonempty(),
});
export type FormType = z.infer<typeof schema>;

export interface AddCommentFormProps {
  onSubmit: (data: FormType) => void;
  loading: boolean;
}
