import { tv } from 'tailwind-variants';

export const avatarTv = tv({
  base: 'h-8 w-8 rounded-full object-fill',
  variants: {
    size: {
      sm: 'h-8 w-8',
      md: 'h-16 w-16',
      lg: 'h-32 w-32',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
