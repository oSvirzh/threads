import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';

import { usePost } from '@/api';
import { Text } from '@/components/atoms';
import { CommentItem } from '@/components/organisms/comment-item';
import { FocusAwareStatusBar } from '@/components/organisms/focus-aware-status-bar';

export default function Post() {
  const local = useLocalSearchParams<{ id: string }>();
  const { post, loading, errorText } = usePost(local.id);

  if (loading) {
    return (
      <View className="flex-1 justify-center  p-3">
        <FocusAwareStatusBar />
        <ActivityIndicator />
      </View>
    );
  }

  if (errorText || !post) {
    return (
      <View className="flex-1 justify-center p-3">
        <FocusAwareStatusBar />
        <Text className="text-center">Error loading post</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Post', headerBackTitle: 'Feed' }} />
      <FocusAwareStatusBar />
      <ScrollView>
        <CommentItem
          id={post.id}
          avatar={post.avatar}
          username={post.username}
          date={post.created_at}
          text={post.text}
          showAnswers
        />
      </ScrollView>
    </>
  );
}
