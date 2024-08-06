import React from 'react';
import { SafeAreaView } from 'react-native';

import { usePosts } from '@/api';
import { CommentsFilter } from '@/components/organisms/comments-filter';
import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';
import CommentsList from '@/components/templates/comments-list';

export default function Feed() {
  const { posts, isLoading, loadMore, error, orderBy, toggleOrderBy } =
    usePosts();

  return (
    <>
      <FocusAwareStatusBar />
      <SafeAreaView className="flex-1">
        <CommentsFilter orderBy={orderBy} toggleOrderBy={toggleOrderBy} />
        <CommentsList
          posts={posts}
          isLoading={isLoading}
          loadMore={loadMore}
          error={error?.message}
        />
      </SafeAreaView>
    </>
  );
}
