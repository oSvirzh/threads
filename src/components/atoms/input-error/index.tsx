import * as React from 'react';

import { Text } from '@/components/atoms';
import type { InputErrorProps } from '@/components/atoms/input-error/input-error.types';

export const InputError = ({ error, testID }: InputErrorProps) => {
  return (
    <Text
      testID={testID ? `${testID}-error` : undefined}
      className="text-sm text-danger-400 dark:text-danger-600"
    >
      {error}
    </Text>
  );
};
