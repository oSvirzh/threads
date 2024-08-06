import { tv } from 'tailwind-variants';

export const stylesTv = tv({
  base: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
  variants: {
    error: {
      true: 'text-danger-600 dark:text-danger-600',
    },
  },
  defaultVariants: {
    error: false,
  },
});
