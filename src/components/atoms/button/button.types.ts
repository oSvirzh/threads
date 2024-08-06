import type { PressableProps } from 'react-native';
import type { VariantProps } from 'tailwind-variants';

import type { stylesTv } from './button.styles';

type ButtonVariants = VariantProps<typeof stylesTv>;

export interface Props
  extends ButtonVariants,
    Omit<PressableProps, 'disabled'> {
  label?: string;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}
