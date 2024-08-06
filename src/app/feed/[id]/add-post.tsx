import { Stack, useLocalSearchParams } from 'expo-router';
import * as React from 'react';

import { AddComment } from '@/components/templates/add-comment';

export default function AddPost() {
  const local = useLocalSearchParams<{ id: string }>();

  return (
    <>
      <Stack.Screen
        options={{ title: 'Add comment', headerBackTitle: 'Post' }}
      />
      <AddComment parent={local.id} />
    </>
  );
}
