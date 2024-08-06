import type { TextInputProps } from 'react-native';

export interface InputLabelProps extends TextInputProps {
  label: string;
  error?: boolean;
}
