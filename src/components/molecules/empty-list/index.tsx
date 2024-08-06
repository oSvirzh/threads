import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

type Props = {
  isLoading: boolean;
};

export const EmptyList = memo(({ isLoading }: Props) => {
  return (
    <View className=" flex-1 items-center justify-center">
      {!isLoading ? <View /> : <ActivityIndicator />}
    </View>
  );
});
