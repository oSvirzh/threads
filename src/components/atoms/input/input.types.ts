import type { TextInputProps } from 'react-native';

export interface InputProps extends TextInputProps {
  disabled?: boolean;
  error?: boolean;
}
