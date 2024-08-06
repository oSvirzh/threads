/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect } from 'react';
import {
  Feed as FeedIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
} from 'src/components/atoms/icons';

import { useAuth, useIsFirstTime } from '@/core';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          // headerRight: () => <CreateNewPostLink />,
          headerShown: false,
          tabBarTestID: 'feed-tab',
        }}
      />

      <Tabs.Screen
        name="add-post"
        options={{
          title: 'Add post',
          tabBarIcon: ({ color }) => <FeedIcon color={color} />,
          tabBarTestID: 'add-post-tab',
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
          tabBarTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
