import type { TextInputProps } from 'react-native';

export interface InputErrorProps extends TextInputProps {
  error?: string;
}
