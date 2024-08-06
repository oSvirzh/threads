import * as React from 'react';
import { View } from 'react-native';

import { usePosts } from '@/api';
import CommentsList from '@/components/templates/comments-list';

export function Subcomments({ parent }: { parent: string }) {
  const { posts, isLoading, loadMore, error } = usePosts(parent);

  return (
    <View className="ml-4 flex-1">
      <CommentsList
        posts={posts}
        isLoading={isLoading}
        loadMore={loadMore}
        error={error?.message}
        showAnswers
      />
    </View>
  );
}
