import * as React from 'react';
import { useMemo } from 'react';

import { Text } from '@/components/atoms';

import { stylesTv } from './input-label.styles';
import type { InputLabelProps } from './input-label.types';

export const InputLabel = ({ label, error, testID }: InputLabelProps) => {
  const styles = useMemo(
    () =>
      stylesTv({
        error: error,
      }),
    [error]
  );

  return (
    <Text testID={testID ? `${testID}-label` : undefined} className={styles}>
      {label}
    </Text>
  );
};
