import * as React from 'react';
import type { FieldValues } from 'react-hook-form';
import { useController } from 'react-hook-form';
import { View } from 'react-native';

import { Input, InputError, InputLabel } from '@/components/atoms';

import type { FromInputProps } from './form-input.types';

export function FormInput<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  testID,
  ...inputProps
}: FromInputProps<T>) {
  const { field, fieldState } = useController({ control, name, rules });

  return (
    <View className="mb-2">
      {label && (
        <InputLabel label={label} error={!!fieldState.error} testID={testID} />
      )}
      <Input
        ref={field.ref}
        testID={testID}
        autoCapitalize="none"
        onChangeText={field.onChange}
        value={(field.value as string) || ''}
        {...inputProps}
        error={!!fieldState.error}
      />
      {fieldState.error && (
        <InputError error={fieldState.error?.message} testID={testID} />
      )}
    </View>
  );
}
