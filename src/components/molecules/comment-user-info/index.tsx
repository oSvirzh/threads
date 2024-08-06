import * as React from 'react';
import { View } from 'react-native';

import { UserAvatar } from '@/components/atoms';
import { Text } from '@/components/atoms/text';
import type { CommentUserInfoProps } from '@/components/molecules/comment-user-info/comment-user-info';

export const CommentUserInfo = ({
  username,
  date,
  avatar,
}: CommentUserInfoProps) => {
  return (
    <View className="flex flex-row items-center bg-neutral-200 px-3 py-2 dark:bg-neutral-600">
      <UserAvatar image={avatar} />
      <Text className="text-md ml-3 font-bold">{username}</Text>
      <Text className="ml-2 overflow-hidden text-sm">
        {new Date(date).toUTCString()}
      </Text>
    </View>
  );
};
