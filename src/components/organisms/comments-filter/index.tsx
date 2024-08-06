import { useCallback } from 'react';
import { View } from 'react-native';

import { POST_ORDER_BY, SORT_ORDER } from '@/api';
import { Button, Text } from '@/components/atoms';
import type { CommentsFilterProps } from '@/components/organisms/comments-filter/comments-filter.types';
import { translate } from '@/core';

export function CommentsFilter({
  orderBy,
  toggleOrderBy,
}: CommentsFilterProps) {
  const getOrderDirection = useCallback(
    (value: POST_ORDER_BY) => {
      const direction = orderBy.find((item) => item.column === value);
      if (direction?.order === SORT_ORDER.ASC) return '↓';
      if (direction?.order === SORT_ORDER.DESC) return '↑';
      return '';
    },
    [orderBy]
  );

  return (
    <View className="flex flex-row items-center justify-between border-b  border-b-gray-300 px-2 pt-2 ">
      <Text tx="sort-by" />
      <Button
        label={`${translate('label-name')} ${getOrderDirection(
          POST_ORDER_BY.USERNAME
        )}`}
        variant="outline"
        size="sm"
        onPress={() => toggleOrderBy(POST_ORDER_BY.USERNAME)}
      />
      <Button
        label={`${translate('label-email')} ${getOrderDirection(
          POST_ORDER_BY.EMAIL
        )}`}
        variant="outline"
        size="sm"
        onPress={() => toggleOrderBy(POST_ORDER_BY.EMAIL)}
      />
      <Button
        label={`${translate('label-date')} ${getOrderDirection(
          POST_ORDER_BY.CREATED_AT
        )}`}
        variant="outline"
        size="sm"
        onPress={() => toggleOrderBy(POST_ORDER_BY.CREATED_AT)}
      />
    </View>
  );
}
