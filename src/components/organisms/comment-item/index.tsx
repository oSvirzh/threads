import { Link } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';

import { Button } from '@/components/atoms';
import { Text } from '@/components/atoms';
import { CommentUserInfo } from '@/components/molecules';
import type { CommentItemProps } from '@/components/organisms/comment-item/comment-item.types';
import { Subcomments } from '@/components/templates/subcomments';

export function CommentItem({
  avatar,
  id,
  username,
  date,
  text,
  showAnswers,
}: CommentItemProps) {
  return (
    <>
      <View className="flex flex-col overflow-hidden border-b border-b-gray-300 p-4">
        <CommentUserInfo username={username} date={date} avatar={avatar} />
        <Text className="mt-3 text-base">{text}</Text>
      </View>
      <Link href={`/feed/${id}/add-post`} asChild>
        <Button
          className="my-0 ml-auto"
          label="Add answer"
          variant="ghost"
          size="sm"
          fullWidth
        />
      </Link>
      {showAnswers && <Subcomments parent={id} />}
    </>
  );
}
