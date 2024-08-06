import { FlashList } from '@shopify/flash-list';
import { Link } from 'expo-router';
import React, { useCallback } from 'react';
import { Pressable, View } from 'react-native';

import type { Post } from '@/api';
import { Text } from '@/components/atoms';
import { EmptyList } from '@/components/molecules/empty-list';
import { CommentItem } from '@/components/organisms/comment-item';

export default function CommentsList({
  posts,
  isLoading,
  loadMore,
  error,
  showAnswers,
}: {
  posts: Post[];
  isLoading: boolean;
  loadMore: () => void;
  error?: string;
  showAnswers?: boolean;
}) {
  const renderItem = useCallback(
    ({ item }: { item: Post }) => (
      <Link href={`/feed/${item.id}`} asChild>
        <Pressable>
          <View className="border-b border-b-gray-300">
            <CommentItem
              id={item.id}
              avatar={item.avatar}
              username={item.username}
              date={item.created_at}
              text={item.text}
              showAnswers={showAnswers}
            />
          </View>
        </Pressable>
      </Link>
    ),
    []
  );

  if (error) {
    return (
      <View>
        <Text> {error} </Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <FlashList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(_, index) => `item-${index}`}
        ListEmptyComponent={<EmptyList isLoading={isLoading} />}
        estimatedItemSize={300}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
}
