import { tv } from 'tailwind-variants';

export const inputTv = tv({
  base: 'mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 font-inter text-base  font-medium leading-5 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white',
  variants: {
    focused: {
      true: 'border-neutral-400 dark:border-neutral-300',
    },
    error: {
      true: 'border-danger-600',
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});
