import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/atoms';
import type { TxKeyPath } from '@/core';

type Props = {
  children: ReactNode;
  title?: TxKeyPath;
};

export const MenuItemsContainer = ({ children, title }: Props) => {
  return (
    <>
      {title && <Text className="pb-2 pt-4 text-lg" tx={title} />}
      {
        <View className=" rounded-md border border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
          {children}
        </View>
      }
    </>
  );
};
