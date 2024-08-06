import type { TextProps } from 'react-native';

import type { TxKeyPath } from '@/core';

export interface Props extends TextProps {
  className?: string;
  tx?: TxKeyPath;
}
