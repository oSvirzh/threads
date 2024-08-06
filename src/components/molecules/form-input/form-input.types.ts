import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

import type { InputProps } from '@/components/atoms';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;
export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: RuleType<T>;
};

export interface FromInputProps<T extends FieldValues>
  extends InputProps,
    InputControllerType<T> {
  label?: string;
}
